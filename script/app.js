!function(){"use strict";angular.module("photoBlogApp",["ngRoute","jkuri.gallery","ezfb","pascalprecht.translate"])}(),function(){"use strict";function e(e,r,a){o=e,i=r,n=a,ga("create","UA-80122651-1","auto"),o.$on("$routeChangeSuccess",t)}function t(e,t,r){o.headerType=t.$$route.headerType,void 0!==ga&&void 0!==i&&void 0!==i.url&&ga("send","pageview",{page:i.url()}),t.params.postId&&(o.headerValue=n.getPost(t.params.postId).category.name),t.params.categoryId&&(o.headerValue=n.getCategories()[t.params.categoryId].name)}var o,i,n;angular.module("photoBlogApp").run(e),e.$inject=["$rootScope","$location","dataService"]}(),function(){"use strict";function e(e,t){var o=e.categoryId,i=this;i.posts=t.getPostsByCategory(o)}angular.module("photoBlogApp").controller("categoryController",e),e.$inject=["$routeParams","dataService"]}(),function(){"use strict";function e(e){var t=this;t.posts=e.getPosts()}angular.module("photoBlogApp").controller("homeController",e),e.$inject=["dataService"]}(),function(){"use strict";function e(e,t,o){function i(){var e=new Array;for(var t in r.post.images)e.push({thumb:o.getGalleryThumb(r.post.images[t].img),img:o.getGalleryImage(r.post.images[t].img),description:r.post.images[t].description});return e}var n=e.postId,r=this;r.post=t.getPost(n),r.gallery=i(),r.getCurrentUrl=o.getCurrentUrl}angular.module("photoBlogApp").controller("postController",e),e.$inject=["$routeParams","dataService","urlService"]}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/aboutme.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogAboutme",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/categories.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogCategories",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/followme.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogFollowme",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/footer.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogFooter",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/recentposts.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogRecentPosts",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/slides.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogSlides",e)}(),function(){"use strict";function e(e){e.setLocale("pt_BR"),e.setInitParams({appId:"1643932782590470",version:"v2.6"})}angular.module("photoBlogApp").config(e),e.$inject=["ezfbProvider"]}(),function(){"use strict";function e(e){e.html5Mode(!0)}angular.module("photoBlogApp").config(e),e.$inject=["$locationProvider"]}(),function(){"use strict";function e(e){e.when("/",{headerType:"flexslider",templateUrl:"app/blog/home.html",controller:"homeController",controllerAs:"home"}).when("/post/:postId",{headerType:"pagetitle",templateUrl:"app/blog/post.html",controller:"postController",controllerAs:"post"}).when("/category/:categoryId",{headerType:"pagetitle",templateUrl:"app/blog/category.html",controller:"categoryController",controllerAs:"category"})}angular.module("photoBlogApp").config(e),e.$inject=["$routeProvider"]}(),function(){"use strict";function e(e){function t(){return{BLOGTITLE:"Six Photo Project",BLOGDESCRIPTION:"A six photos theme project, inspired by LensWork.com",ABOUTME:"About Me",ABOUTMEDESCRIPTION:"My name is Tiago Santos and I am an amateur photographer, specially pationated about people's portrait and urban photography.",CATEGORIES:"Categories",FOLLOWME:"Follow Me",RECENTPOSTS:"Recent Posts",SEEPHOTOS:"See Photos",POSTEDON:"Posted on",SHARETHIS:"Share this"}}function o(){return{BLOGTITLE:"Projeto Seis Fotos",BLOGDESCRIPTION:"Um projeto de temas em seis fotos, inspirado por LensWork.com",ABOUTME:"Sobre",ABOUTMEDESCRIPTION:"Meu nome é Tiago Santos e sou fotógrafo amador, apaixonado por retratos e fotografia urbana.",CATEGORIES:"Categorias",FOLLOWME:"Siga-me",RECENTPOSTS:"Posts Recentes",SEEPHOTOS:"Ver Fotos",POSTEDON:"Postado em",SHARETHIS:"Compartilhe"}}e.translations("en",t()).translations("pt",o()).uniformLanguageTag("bcp47").registerAvailableLanguageKeys(["en","pt"],{"en*":"en","pt*":"pt"}).determinePreferredLanguage().fallbackLanguage("en")}angular.module("photoBlogApp").config(e),e.$inject=["$translateProvider"]}(),function(){"use strict";function e(e,t,o){var i=this;i.posts=e.getPosts(),i.categories=e.getCategories(),i.getCategoryUrl=t.getCategoryUrl,i.getPostUrl=t.getPostUrl,i.getHomeUrl=t.getHomeUrl,i.getCategoryThumb=t.getCategoryThumb,i.getPostImage=t.getPostImage,i.getHomeSlideImage=t.getHomeSlideImage,i.currentSlide=0;o(function(){i.currentSlide=(i.currentSlide+1)%i.posts.length},5e3)}angular.module("photoBlogApp").controller("pageController",e),e.$inject=["dataService","urlService","$interval"]}(),function(){"use strict";function e(e,t){function o(e){var o=n();return t("filter")(o,{categoryId:e})}function i(e){var o=n();return t("filter")(o,{link:e})[0]}function n(){var e=new Array,t=r(),o={id:0,link:"alice_world",en:{title:"Alice´s world",description:"What is important on the life of a baby? Here is a small overview about some important moments for Alice, shared by myself as father and photographer",images:[{description:"Joy"},{description:"Hurry"},{description:"Fashion"},{description:"Friendship"},{description:"Happiness"},{description:"Break"}]},pt:{title:"O Mundo de Alice",description:"O que é importante no mundo de uma criança? Aqui temos uma amostra de momentos importantes para a Alice, compartilhados por mim como fotógrafo e pai",images:[{description:"Alegria"},{description:"Pressa"},{description:"Moda"},{description:"Amizade"},{description:"Felicidade"},{description:"Pausa"}]},categoryId:0,category:t[0],date:new Date(2016,6,13),images:[{img:"v1466538132/p001_alice_02.jpg"},{img:"v1466538129/p001_alice_03.jpg"},{img:"v1466538125/p001_alice_07.jpg"},{img:"v1466538126/p001_alice_04.jpg"},{img:"v1466538127/p001_alice_05.jpg"},{img:"v1466538127/p001_alice_01.jpg"}]},i={id:1,link:"landscapes",en:{title:"Landscapes at the edges of the day",description:"Photos from the beggining and end of the day",images:[{description:"Before the sun"},{description:"Sun is coming"},{description:"Reflections in the water"},{description:"Spectators waiting"},{description:"The sunshine"},{description:"End of the day"}]},pt:{title:"Paisagens na beira do dia",description:"Capturas de imagens no início e fim do dia",images:[{description:"Antes do sol"},{description:"O sol está vindo"},{description:"Reflexos na água"},{description:"Expectadores esperando"},{description:"O nascer do sol"},{description:"Fim do dia"}]},categoryId:1,category:t[1],date:new Date(2016,6,23),images:[{img:"v1467588762/p002_landscape_01.jpg"},{img:"v1467589030/p002_landscape_02.jpg"},{img:"v1467588762/p002_landscape_04.jpg"},{img:"v1467589030/p002_landscape_05.jpg"},{img:"v1467588782/p002_landscape_06.jpg"},{img:"v1467588763/p002_landscape_03.jpg"}]},n={id:2,link:"glamour",en:{title:"Glamour",description:"Dresses for a wedding, setting the final details before the party.",images:[{description:"Flowers near the face"},{description:"Adjusting the necktie"},{description:"Finishing the makeup"},{description:"Wearing the shoe"},{description:"Ready"},{description:"Soft light over the face"}]},pt:{title:"Glamour",description:"Vestidos para um casamento, ajustando os últimos detalhes antes da festa.",images:[{description:"Flores próximas ao rosto"},{description:"Ajustando a gravata"},{description:"Terminando a maquiagem"},{description:"Calçando o sapato"},{description:"Prontos"},{description:"Luz suave sobre o rosto"}]},categoryId:2,category:t[2],date:new Date(2016,7,7),images:[{img:"v1467937835/p003_glamour_06.jpg"},{img:"v1467938085/p003_glamour_02.jpg"},{img:"v1467937849/p003_glamour_03.jpg"},{img:"v1467937848/p003_glamour_04.jpg"},{img:"v1467937851/p003_glamour_05.jpg"},{img:"v1467937826/p003_glamour_01.jpg"}]};return e.push(o),e.push(i),e.push(n),a(e)}function r(){var e=new Array;return e.push({en:{name:"Baby and children",description:"Childhood universe"},pt:{name:"Bebês e crianças",description:"O universo infantil"},id:0,posts:1}),e.push({en:{name:"Travel",description:"Inspired by travels I did"},pt:{name:"Viagem",description:"Inspirado em minhas viagens"},id:1,posts:1}),e.push({en:{name:"Portraits",description:"People and their worlds"},pt:{name:"Retratos",description:"Pessoas e seus mundos"},id:2,posts:1}),a(e)}function a(e){var t=c();for(var o in e){var i=e[o],n=i[t];s(n,i)}return e}function s(e,t){for(var o in e)void 0!==e[o]&&(e[o]instanceof Array?l(e[o],t[o]):t[o]=e[o])}function l(e,t){for(var o in e)void 0!==e[o]&&s(e[o],t[o])}function c(){var t=e.use();return t.substring(0,2)}return{getPost:i,getPosts:n,getCategories:r,getPostsByCategory:o}}angular.module("photoBlogApp").service("dataService",e),e.$inject=["$translate","$filter"]}(),function(){"use strict";function e(e){function t(e){return"/category/"+e}function o(e){return"/post/"+e}function i(){return"/"}function n(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_lfill,h_80,w_80/"+e}function r(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/"+e}function a(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/"+e}function s(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_550,w_1170/"+e}function l(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_thumb,g_face:center,h_550,w_1920/"+e}function c(){return e.absUrl()}return{getCategoryUrl:t,getPostUrl:o,getHomeUrl:i,getCategoryThumb:n,getGalleryThumb:r,getGalleryImage:a,getPostImage:s,getHomeSlideImage:l,getCurrentUrl:c}}angular.module("photoBlogApp").service("urlService",e),e.$inject=["$location"]}(),function(){"use-strict";function e(e,t,o,i){function n(e,t){e.baseClass=e["class"]||r.baseClass,e.thumbClass=e.thumbClass||r.thumbClass,e.thumbsNum=e.thumbsNum||3}var r={baseClass:"ng-gallery",thumbClass:"ng-thumb",templateUrl:"ng-gallery.html"},a={enter:13,esc:27,left:37,right:39},s=r.templateUrl;return i.put(s,'<div class="{{ baseClass }}">  <div ng-repeat="i in images">    <img ng-src="{{ i.thumb }}" class="{{ thumbClass }}" ng-click="openGallery($index)" alt="Image {{ $index + 1 }}" />  </div></div><div class="ng-overlay" ng-show="opened"></div><div class="ng-gallery-content" unselectable="on" ng-show="opened" ng-swipe-left="nextImage()" ng-swipe-right="prevImage()">  <div class="uil-ring-css" ng-show="loading"><div></div></div><a href="{{getImageDownloadSrc()}}" target="_blank" ng-show="showImageDownloadButton()" class="download-image"><i class="fa fa-download"></i></a>  <a class="close-popup" ng-click="closeGallery()"><i class="fa fa-close"></i></a>  <a class="nav-left" ng-click="prevImage()"><i class="fa fa-angle-left"></i></a>  <img ondragstart="return false;" draggable="false" ng-src="{{ img }}" ng-click="nextImage()" ng-show="!loading" class="effect" />  <a class="nav-right" ng-click="nextImage()"><i class="fa fa-angle-right"></i></a>  <span class="info-text">{{ index + 1 }}/{{ images.length }} - {{ description }}</span>  <div class="ng-thumbnails-wrapper">    <div class="ng-thumbnails slide-left">      <div ng-repeat="i in images">        <img ng-src="{{ i.thumb }}" ng-class="{\'active\': index === $index}" ng-click="changeImage($index)" />      </div>    </div>  </div></div>'),{restrict:"EA",scope:{images:"=",thumbsNum:"@",hideOverflow:"="},controller:["$scope",function(e){e.$on("openGallery",function(t,o){e.openGallery(o.index)})}],templateUrl:function(e,t){return t.templateUrl||r.templateUrl},link:function(i,r,s){n(i,s),i.thumbsNum>=11&&(i.thumbsNum=11);var l=e.find("body"),c=angular.element(r[0].querySelectorAll(".ng-thumbnails-wrapper")),g=angular.element(r[0].querySelectorAll(".ng-thumbnails"));i.index=0,i.opened=!1,i.thumb_wrapper_width=0,i.thumbs_width=0;var d=function(e){var t=o.defer(),n=new Image;return n.onload=function(){i.loading=!1,typeof this.complete!==!1&&0!==this.naturalWidth||t.reject(),t.resolve(n)},n.onerror=function(){t.reject()},n.src=i.images[e].img,i.loading=!0,t.promise},p=function(e){d(i.index).then(function(e){i.img=e.src,m(i.index)}),i.description=i.images[e].description||""};i.showImageDownloadButton=function(){if(null!=i.images[i.index]&&null!=i.images[i.index].downloadSrc){var e=i.images[i.index];return angular.isDefined(e.downloadSrc)&&0<e.downloadSrc.length}},i.getImageDownloadSrc=function(){if(null!=i.images[i.index]&&null!=i.images[i.index].downloadSrc)return i.images[i.index].downloadSrc},i.changeImage=function(e){i.index=e,p(e)},i.nextImage=function(){i.index+=1,i.index===i.images.length&&(i.index=0),p(i.index)},i.prevImage=function(){i.index-=1,i.index<0&&(i.index=i.images.length-1),p(i.index)},i.openGallery=function(e){void 0!==typeof e&&(i.index=e,p(i.index)),i.opened=!0,i.hideOverflow&&$("body").css({overflow:"hidden"}),t(function(){var e=u();i.thumbs_width=e.width;var t=e.width+1;g.css({width:t+"px"}),c.css({width:e.visible_width+"px"}),m(i.index)})},i.closeGallery=function(){i.opened=!1,i.hideOverflow&&$("body").css({overflow:""})},l.bind("keydown",function(e){if(i.opened){var t=e.which;t===a.esc?i.closeGallery():t===a.right||t===a.enter?i.nextImage():t===a.left&&i.prevImage(),i.$apply()}});var u=function(){var e=0,t=0;return angular.forEach(g.find("img"),function(o){e+=o.clientWidth,e+=10,t=o.clientWidth+10}),{width:e,visible_width:t*i.thumbsNum}},m=function(e){t(function(){var t=i.images.length,o=i.thumbs_width,n=parseInt(o/t,10),r=e+1,a=Math.ceil(t/r);c[0].scrollLeft=0,c[0].scrollLeft=r*n-a*n},100)}}}}angular.module("jkuri.gallery",[]).directive("ngGallery",e),e.$inject=["$document","$timeout","$q","$templateCache"]}();