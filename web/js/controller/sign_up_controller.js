function SignUpController($scope, $navigate) {

    (function init() {
        if (localStorage.getItem("activity_status") == "before_running" || localStorage.getItem("activity_status") == null) {
            $scope.start_or_end_label = "开始";
        }
        if (localStorage.getItem("activity_status") == "running") {
            $scope.start_or_end_label = "结束";
        }
        if (localStorage.getItem("activity_status") == "ran") {
            $scope.start_or_end_label = "结束";
        }
    })();

    $scope.record_sign_up_status = function () {

        if (localStorage.getItem("activity_status") == "running") {
            if (window.confirm("确实要结束活动报名吗？")) {
                localStorage.setItem("activity_status", "ran");
                $scope.start_or_end_label = "结束";
                //go_to_bid_list_page();
            }
        }
        if (localStorage.getItem("activity_status") == "before_running" || localStorage.getItem("activity_status") == null) {
                localStorage.setItem("activity_status", "running");
                $scope.start_or_end_label = "结束";
        }
        if(localStorage.getItem("activity_status") == "ran"){
            localStorage.setItem("activity_status", "before_running");
            $scope.start_or_end_label = "开始";
        }
    }
}