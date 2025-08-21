// define angular Js app
var app = angular.module("studentApp", []);

//define Controller
app.controller("StudentController", function ($scope) {
    $scope.student = {
        name: "shubham jare",
        roll: "101",
        course: "computer "
    };
});