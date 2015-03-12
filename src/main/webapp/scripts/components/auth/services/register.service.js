'use strict';

angular.module('jhouseApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


