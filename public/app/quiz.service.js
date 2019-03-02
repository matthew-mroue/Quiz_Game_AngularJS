"use strict";
function QuizService($http) {
    const self = this;

    self.addScores = function(name, total) {
        return $http({
            method: "POST",
            url: "/scores",
            data: {name,total}
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