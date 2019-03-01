"use strict";
function QuizService($http) {
    const self = this;

    self.addScores = function(name, score) {
        return $http({
            method: "POST",
            url: "/scores"
        });
    };

    self.getScores = function() {
        return $http({
            method: "GET",
            url: "/scores"
        });
    };

    self.getQuestions = function() {
        return $http({
            method: "GET",
            url: "/questions"
        });
    };

};

angular.module("App").service("QuizService", QuizService);