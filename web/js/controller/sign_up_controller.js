function SignUpController($scope, $navigate) {

    (function init() {

    })();

    $scope.selection = localStorage.getItem("activity_status");

    $scope.start = function () {
        localStorage.setItem("activity_status", "running");
        $scope.selection = localStorage.getItem("activity_status");
    }

    $scope.end = function () {
        if(window.confirm("确实要结束活动报名吗？")){
            localStorage.setItem("activity_status","ran");
            $scope.selection = localStorage.getItem("activity_status");

        }
    }
}