"use strict";
const scores = {
    templateUrl:"app/scores.html",
    controller: ["QuizService", function(QuizService) {
        const vm = this;

        vm.getScores = function() {
            QuizService.getScores().then(function(response) {
                vm.scoreList = response.data;
            });
        };
        // vm.addScores = function(name, score) {
        //     QuizService.addScores(name, score).then(function(response) {
        //         vm.scoreList = response.data;
        //     });
        // };
    }]
};


angular.module("App").component("scores", scores);