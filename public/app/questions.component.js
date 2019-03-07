"use strict";

// import { isMainThread } from "worker_threads";

const questions = {
    templateUrl:"app/questions.html",
    controller: ["QuizService", function(QuizService) {
        const vm = this;

        QuizService.getQuestions().then(response => {
            vm.questions = response.data;

            console.log(vm.questions);
        });
        vm.className = ["radio", "radio", "radio", "radio", "radio"];
        vm.total = 0;
        vm.score = [false, false, false, false, false]
        vm.getVal = function( val, ans, idx ) {
            console.log(`${val} ${ans} ${idx}`);
            if (val == ans) {
                vm.score[idx] = true;
                vm.total++
            } else {
                vm.score[idx] = false;
            }
            console.log(vm.score)
            return vm.score;
        };
        vm.tallyScores = function() {
            QuizService.addScores(vm.player_name, vm.total).then(function(response) {
                vm.scoreList = response.data;
                //add button coloring functionality here
                console.log(vm.scoreList);
            });
            for (let i = 0; i <= vm.score.length; i++) {
                if (vm.score[i] === false) {
                    // vm.className != "radio";
                   vm.className[i] = "wrong";
                }
                else if (vm.score[i] === true){
                    // vm.className != "radio";
                   vm.className[i] = "right";
                }
                console.log(vm.className);
            }
        };
        vm.checkResults = function() {
            QuizService.checkResults(); 
        };
    }]
};

angular.module("App").component("questions", questions);