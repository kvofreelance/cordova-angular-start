angular.module('contactssync').controller('loadingViewController', [
    "$scope",
    "$rootScope",
    function($scope, $rootScope) {
        $rootScope.$watch('currView', function() {
            if( $rootScope.currView === "layout.history" ) {
                var target = document.getElementById('spinner');

                while (target.firstChild) {
                    target.removeChild(target.firstChild);
                }

                var opts = {
                    lines: 12,            // The number of lines to draw
                    length: 7,            // The length of each line
                    width: 5,             // The line thickness
                    radius: 10,           // The radius of the inner circle
                    rotate: 0,            // Rotation offset
                    corners: 1,           // Roundness (0..1)
                    color: '#000',        // #rgb or #rrggbb
                    direction: 1,         // 1: clockwise, -1: counterclockwise
                    speed: 1,             // Rounds per second
                    trail: 100,           // Afterglow percentage
                    opacity: 1/4,         // Opacity of the lines
                    fps: 20,              // Frames per second when using setTimeout()
                    zIndex: 2e9,          // Use a high z-index by default
                    className: 'spinner', // CSS class to assign to the element
                    top: 'auto',          // center vertically
                    left: 'auto',         // center horizontally
                    position: 'relative'  // element position
                }
                var spinner = new Spinner(opts).spin();
                target.appendChild(spinner.el);
            } else {
                var target = document.getElementById('spinner');

                while (target.firstChild) {
                    target.removeChild(target.firstChild);
                }

                var opts = {
                    lines: 12,            // The number of lines to draw
                    length: 7,            // The length of each line
                    width: 5,             // The line thickness
                    radius: 10,           // The radius of the inner circle
                    rotate: 0,            // Rotation offset
                    corners: 1,           // Roundness (0..1)
                    color: '#368740',        // #rgb or #rrggbb
                    direction: 1,         // 1: clockwise, -1: counterclockwise
                    speed: 1,             // Rounds per second
                    trail: 100,           // Afterglow percentage
                    opacity: 1/4,         // Opacity of the lines
                    fps: 20,              // Frames per second when using setTimeout()
                    zIndex: 2e9,          // Use a high z-index by default
                    className: 'spinner', // CSS class to assign to the element
                    top: 'auto',          // center vertically
                    left: 'auto',         // center horizontally
                    position: 'relative'  // element position
                }
                var spinner = new Spinner(opts).spin();
                target.appendChild(spinner.el);
            }
        });

      	$rootScope.$watch('loadingView', function() {
        	console.log("loadingView changed");
        	console.log($rootScope.loadingView);
        	$scope.loadingView = $rootScope.loadingView;
      	});
    }
]);