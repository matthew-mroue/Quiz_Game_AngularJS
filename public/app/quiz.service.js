"use strict";
function QuizService( $location,$http) {
    const self = this;

    self.addScores = function(player_name, total) {       
        return $http({
            method: "POST",
            url: "/scores",
            data: {player_name:player_name, score:total}
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
    self.checkResults = function() {
        $location.path("/scores"); 
    }
};

angular.module("App").service("QuizService", QuizService);