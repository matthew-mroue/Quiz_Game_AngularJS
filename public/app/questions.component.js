"use strict";

const questions = {
    templateUrl:"app/questions.html",
    controller: ["QuizService", function(QuizService) {
        const vm = this;

        QuizService.getQuestions().then(response => {
            vm.questions = response.data;
            console.log(vm.questions);
        });
        vm.total = 0;
        vm.score = [false, false, false, false, false]
        vm.getVal = function( val, ans, idx ) {
            console.log(`${val} ${ans} ${idx}`);
            if (val == ans) {
                vm.score[idx] = true;
            } else {
                vm.score[idx] = false;
            }
            console.log(vm.score)
        };
        vm.getScore = function() {
            for (let i = 0; i <=vm.score.length; i++) {
                if (i == true);
                vm.total++;
            };
        };
        
    }]
};

angular.module("App").component("questions", questions);