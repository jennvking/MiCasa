(function(){
    'use strict';

    angular
        .module('app')
        .factory('userFactory', userFactory)

    userFactory.$inject = ['$http', 'localApi'];

    function userFactory($http, localApi) {
        var service = {
            postRegistration: postRegistration,
            findUsers: findUsers
        };

        return service;

        function postRegistration(registration) {
            return $http({
                method: 'POST',
                url: localAPi + '/users',
                dataType: "json",
                data: registration,
                headers: {
                    'content-Type': 'application/json; charset=utf-8'
                }
            }).then(function (info){
                return info;
            }, function (error) {
                return error;
            })

         }

         function findUsers(login) {
            return $http({
                method: 'GET',
                url: localApi + 'Users/UserSearch',
                data: login
            }).then (function(rerun){
                return rerun;
            }, function (error){
                return error;
            })

         }
    }
})();