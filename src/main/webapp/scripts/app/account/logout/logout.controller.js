'use strict';

angular.module('jhouseApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
