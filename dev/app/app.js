var app = angular.module('contactssync', [
	"ui.router"
]);

angular.module('contactssync').config([
	"$stateProvider",
	"$urlRouterProvider",
	function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/main");

		$stateProvider
			.state("login", {
				url: "/login",
				views: {
					"layout": {
						templateUrl: "dev/html/layout/login/login.html",
						controller: "loginController"
					}
				}
			})
			.state("main", {
				url: "/main",
				views: {
					"header" : {
						templateUrl: "dev/html/header/header.html",
						controller: "headerController"
					},
					"layout" : {
						templateUrl: "dev/html/layout/layout.html",
						controller: "layoutController"
					},
					"footer" : {
						templateUrl: "dev/html/footer/footer.html",
						controller: "footerController"
					}
				}
			})
			.state("main.layout", {
				url: "/layout",
				views: {
					"content": {
						templateUrl: "dev/html/layout/content.html",
						controller: "contentController"
					}
				}
			})
			.state("main.contactlist", {
				url: "/contactlist",
				views: {
					"content": {
						templateUrl: "dev/html/layout/contactlist/contactlist.html",
						controller: "contactlistController"
					}
				}
			})		
	}
]);

angular.module('contactssync').run([
	"$rootScope",
	"$window",
	function($rootScope, $window) {
		$rootScope.isOfflineMode = !$window.navigator.onLine;
		$rootScope.loadingView = false;

	    $rootScope.$on('$stateChangeSuccess', function(e, curr, currParams, prev) { 

	    });
	}
]);

function onLoad() {
	console.log("onLoad");
	document.addEventListener("deviceready", onDeviceReady, false);
	if (!window.cordova) {
		console.log("run angular");
		angular.bootstrap(document, ['contactssync']);
	}
}

function onDeviceReady() {
	angular.bootstrap(document, ['contactssync']);
}