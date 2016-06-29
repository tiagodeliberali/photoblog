!function(){"use strict";angular.module("photoBlogApp",["ngRoute","jkuri.gallery","ezfb"])}(),function(){"use strict";function e(e,t){e.when("/",{headerType:"flexslider",templateUrl:"app/blog/home.html",controller:"homeController",controllerAs:"home"}).when("/post/:postId",{headerType:"pagetitle",templateUrl:"app/blog/post.html",controller:"postController",controllerAs:"post"}),t.setLocale("pt_BR"),t.setInitParams({appId:"1643932782590470",version:"v2.6"})}angular.module("photoBlogApp").config(e),e.$inject=["$routeProvider","ezfbProvider"]}(),function(){"use strict";function e(e){i=e,i.$on("$routeChangeSuccess",t)}function t(e,t,o){i.headerType=t.$$route.headerType,t.params.postId&&(i.headerValue=t.params.postId)}var i;angular.module("photoBlogApp").run(e),e.$inject=["$rootScope"]}(),function(){"use strict";function e(e){var t=this;t.posts=e.getPosts()}angular.module("photoBlogApp").controller("homeController",e),e.$inject=["dataService"]}(),function(){"use strict";function e(e,t,i){function o(){var e=new Array;for(var t in r.post.images)e.push({thumb:i.getGalleryThumb(r.post.images[t].img),img:i.getGalleryImage(r.post.images[t].img),description:r.post.images[t].description});return e}var n=e.postId,r=this;r.post=t.getPosts()[n],r.gallery=o(),r.getCurrentUrl=i.getCurrentUrl}angular.module("photoBlogApp").controller("postController",e),e.$inject=["$routeParams","dataService","urlService"]}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/followme.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogFollowme",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/aboutme.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogAboutme",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/categories.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogCategories",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/footer.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogFooter",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/recentposts.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogRecentPosts",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/slides.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogSlides",e)}(),function(){"use strict";function e(){function e(){var e={title:"Six Photo Project",description:"A six photos theme project, inspired by LensWork.com",aboutMe:"My name is Tiago Santos and I am an amateur photographer, specially pationated about people's portrait and urban photography.",pictureMe:"http://res.cloudinary.com/drzxualok/image/upload/c_scale,w_333/v1466987949/profile.jpg",logo:"./images/logo.png"};return e}function t(){var e=new Array;return e.push({id:0,category:{id:0,name:"Baby and children",description:"Themes related to babies and children"},title:"Alice´s world",description:"What is important on the life of a baby? Here is a small overview about some important moments for Alice, shared by myself as father and photographer",date:new Date(2016,6,13),images:[{img:"v1466538132/p001_alice_02.jpg",description:"Joy"},{img:"v1466538129/p001_alice_03.jpg",description:"Hurry"},{img:"v1466538125/p001_alice_07.jpg",description:"Fashion"},{img:"v1466538126/p001_alice_04.jpg",description:"Friendship"},{img:"v1466538127/p001_alice_05.jpg",description:"Happiness"},{img:"v1466538127/p001_alice_01.jpg",description:"Break"}]}),e}function i(){var e=new Array;return e.push({id:0,name:"Baby and children",description:"Themes related to babies and children",posts:1}),e.push({id:1,name:"Portraits",description:"People and their worlds",posts:0}),e.push({id:2,name:"Travel",description:"Inspired by travels I did",posts:0}),e.push({id:3,name:"Cityscape",description:"Day by day exploration of SP",posts:0}),e}return{getBlogInfo:e,getPosts:t,getCategories:i}}angular.module("photoBlogApp").service("dataService",e),e.$inject=[]}(),function(){"use strict";function e(e){function t(e){return"/#/category/"+e}function i(e){return"/#/post/"+e}function o(){return"/#/"}function n(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_lfill,h_80,w_80/"+e}function r(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/"+e}function a(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/"+e}function l(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_550,w_1170/"+e}function s(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_thumb,g_face:center,h_550,w_1920/"+e}function c(){return e.absUrl()}return{getCategoryUrl:t,getPostUrl:i,getHomeUrl:o,getCategoryThumb:n,getGalleryThumb:r,getGalleryImage:a,getPostImage:l,getHomeSlideImage:s,getCurrentUrl:c}}angular.module("photoBlogApp").service("urlService",e),e.$inject=["$location"]}(),function(){"use strict";function e(e,t){function i(e){var t="<vazio>";return void 0!=e&&void 0!=o.posts[e]&&(t=o.posts[e].category.name),t}var o=this;o.blog=e.getBlogInfo(),o.posts=e.getPosts(),o.categories=e.getCategories(),o.getCategoryTitle=i,o.getCategoryUrl=t.getCategoryUrl,o.getPostUrl=t.getPostUrl,o.getHomeUrl=t.getHomeUrl,o.getCategoryThumb=t.getCategoryThumb,o.getPostImage=t.getPostImage,o.getHomeSlideImage=t.getHomeSlideImage}angular.module("photoBlogApp").controller("pageController",e),e.$inject=["dataService","urlService"]}(),function(){"use-strict";function e(e,t,i,o){function n(e,t){e.baseClass=e["class"]||r.baseClass,e.thumbClass=e.thumbClass||r.thumbClass,e.thumbsNum=e.thumbsNum||3}var r={baseClass:"ng-gallery",thumbClass:"ng-thumb",templateUrl:"ng-gallery.html"},a={enter:13,esc:27,left:37,right:39},l=r.templateUrl;return o.put(l,'<div class="{{ baseClass }}">  <div ng-repeat="i in images">    <img ng-src="{{ i.thumb }}" class="{{ thumbClass }}" ng-click="openGallery($index)" alt="Image {{ $index + 1 }}" />  </div></div><div class="ng-overlay" ng-show="opened"></div><div class="ng-gallery-content" unselectable="on" ng-show="opened" ng-swipe-left="nextImage()" ng-swipe-right="prevImage()">  <div class="uil-ring-css" ng-show="loading"><div></div></div><a href="{{getImageDownloadSrc()}}" target="_blank" ng-show="showImageDownloadButton()" class="download-image"><i class="fa fa-download"></i></a>  <a class="close-popup" ng-click="closeGallery()"><i class="fa fa-close"></i></a>  <a class="nav-left" ng-click="prevImage()"><i class="fa fa-angle-left"></i></a>  <img ondragstart="return false;" draggable="false" ng-src="{{ img }}" ng-click="nextImage()" ng-show="!loading" class="effect" />  <a class="nav-right" ng-click="nextImage()"><i class="fa fa-angle-right"></i></a>  <span class="info-text">{{ index + 1 }}/{{ images.length }} - {{ description }}</span>  <div class="ng-thumbnails-wrapper">    <div class="ng-thumbnails slide-left">      <div ng-repeat="i in images">        <img ng-src="{{ i.thumb }}" ng-class="{\'active\': index === $index}" ng-click="changeImage($index)" />      </div>    </div>  </div></div>'),{restrict:"EA",scope:{images:"=",thumbsNum:"@",hideOverflow:"="},controller:["$scope",function(e){e.$on("openGallery",function(t,i){e.openGallery(i.index)})}],templateUrl:function(e,t){return t.templateUrl||r.templateUrl},link:function(o,r,l){n(o,l),o.thumbsNum>=11&&(o.thumbsNum=11);var s=e.find("body"),c=angular.element(r[0].querySelectorAll(".ng-thumbnails-wrapper")),u=angular.element(r[0].querySelectorAll(".ng-thumbnails"));o.index=0,o.opened=!1,o.thumb_wrapper_width=0,o.thumbs_width=0;var g=function(e){var t=i.defer(),n=new Image;return n.onload=function(){o.loading=!1,typeof this.complete!==!1&&0!==this.naturalWidth||t.reject(),t.resolve(n)},n.onerror=function(){t.reject()},n.src=o.images[e].img,o.loading=!0,t.promise},d=function(e){g(o.index).then(function(e){o.img=e.src,m(o.index)}),o.description=o.images[e].description||""};o.showImageDownloadButton=function(){if(null!=o.images[o.index]&&null!=o.images[o.index].downloadSrc){var e=o.images[o.index];return angular.isDefined(e.downloadSrc)&&0<e.downloadSrc.length}},o.getImageDownloadSrc=function(){if(null!=o.images[o.index]&&null!=o.images[o.index].downloadSrc)return o.images[o.index].downloadSrc},o.changeImage=function(e){o.index=e,d(e)},o.nextImage=function(){o.index+=1,o.index===o.images.length&&(o.index=0),d(o.index)},o.prevImage=function(){o.index-=1,o.index<0&&(o.index=o.images.length-1),d(o.index)},o.openGallery=function(e){void 0!==typeof e&&(o.index=e,d(o.index)),o.opened=!0,o.hideOverflow&&$("body").css({overflow:"hidden"}),t(function(){var e=p();o.thumbs_width=e.width;var t=e.width+1;u.css({width:t+"px"}),c.css({width:e.visible_width+"px"}),m(o.index)})},o.closeGallery=function(){o.opened=!1,o.hideOverflow&&$("body").css({overflow:""})},s.bind("keydown",function(e){if(o.opened){var t=e.which;t===a.esc?o.closeGallery():t===a.right||t===a.enter?o.nextImage():t===a.left&&o.prevImage(),o.$apply()}});var p=function(){var e=0,t=0;return angular.forEach(u.find("img"),function(i){e+=i.clientWidth,e+=10,t=i.clientWidth+10}),{width:e,visible_width:t*o.thumbsNum}},m=function(e){t(function(){var t=o.images.length,i=o.thumbs_width,n=parseInt(i/t,10),r=e+1,a=Math.ceil(t/r);c[0].scrollLeft=0,c[0].scrollLeft=r*n-a*n},100)}}}}angular.module("jkuri.gallery",[]).directive("ngGallery",e),e.$inject=["$document","$timeout","$q","$templateCache"]}();