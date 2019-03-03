"use strict";
const scores = {
    templateUrl:"app/scores.html",
    controller: ["QuizService", function(QuizService) {
        const vm = this;
            
            // vm.$onInit = () => {
                QuizService.getScores().then(function(response) {
                vm.scoreList = response.data;
            });
        // };
    }]
};


angular.module("App").component("scores", scores);