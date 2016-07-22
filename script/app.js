!function(){"use strict";angular.module("photoBlogApp",["ngRoute","jkuri.gallery","ezfb","pascalprecht.translate"])}(),function(){"use strict";function e(e,r,n){i=e,o=r,a=n,ga("create","UA-80122651-1","auto"),i.$on("$routeChangeSuccess",t)}function t(e,t,r){i.headerType=t.$$route.headerType,void 0!==ga&&void 0!==o&&void 0!==o.url&&ga("send","pageview",{page:o.url()}),t.params.postId&&(i.headerValue=a.getPost(t.params.postId).category.name),t.params.categoryId&&(i.headerValue=a.getCategories()[t.params.categoryId].name)}var i,o,a;angular.module("photoBlogApp").run(e),e.$inject=["$rootScope","$location","dataService"]}(),function(){"use strict";function e(e){e.setLocale("pt_BR"),e.setInitParams({appId:"1643932782590470",version:"v2.6"})}angular.module("photoBlogApp").config(e),e.$inject=["ezfbProvider"]}(),function(){"use strict";function e(e){e.html5Mode(!0)}angular.module("photoBlogApp").config(e),e.$inject=["$locationProvider"]}(),function(){"use strict";function e(e){e.when("/",{headerType:"flexslider",templateUrl:"app/blog/home.html",controller:"homeController",controllerAs:"home"}).when("/post/:postId",{headerType:"pagetitle",templateUrl:"app/blog/post.html",controller:"postController",controllerAs:"post"}).when("/category/:categoryId",{headerType:"pagetitle",templateUrl:"app/blog/category.html",controller:"categoryController",controllerAs:"category"})}angular.module("photoBlogApp").config(e),e.$inject=["$routeProvider"]}(),function(){"use strict";function e(e){function t(){return{BLOGTITLE:"Six Photo Project",BLOGDESCRIPTION:"A six photos theme project, inspired by LensWork.com",ABOUTME:"About Me",ABOUTMEDESCRIPTION:"My name is Tiago Santos and I am an amateur photographer, specially pationated about people's portrait and urban photography.",CATEGORIES:"Categories",FOLLOWME:"Follow Me",RECENTPOSTS:"Recent Posts",SEEPHOTOS:"See Photos",POSTEDON:"Posted on",SHARETHIS:"Share this"}}function i(){return{BLOGTITLE:"Projeto Seis Fotos",BLOGDESCRIPTION:"Um projeto de temas em seis fotos, inspirado por LensWork.com",ABOUTME:"Sobre",ABOUTMEDESCRIPTION:"Meu nome é Tiago Santos e sou fotógrafo amador, apaixonado por retratos e fotografia urbana.",CATEGORIES:"Categorias",FOLLOWME:"Siga-me",RECENTPOSTS:"Posts Recentes",SEEPHOTOS:"Ver Fotos",POSTEDON:"Postado em",SHARETHIS:"Compartilhe"}}e.translations("en",t()).translations("pt",i()).uniformLanguageTag("bcp47").registerAvailableLanguageKeys(["en","pt"],{"en*":"en","pt*":"pt"}).determinePreferredLanguage().fallbackLanguage("en")}angular.module("photoBlogApp").config(e),e.$inject=["$translateProvider"]}(),function(){"use strict";function e(e,t){var i=e.categoryId,o=this;o.posts=t.getPostsByCategory(i)}angular.module("photoBlogApp").controller("categoryController",e),e.$inject=["$routeParams","dataService"]}(),function(){"use strict";function e(e){var t=this;t.posts=e.getPosts()}angular.module("photoBlogApp").controller("homeController",e),e.$inject=["dataService"]}(),function(){"use strict";function e(e,t,i){function o(){var e=new Array;for(var t in r.post.images)e.push({thumb:i.getGalleryThumb(r.post.images[t].img),img:i.getGalleryImage(r.post.images[t].img),description:r.post.images[t].description});return e}var a=e.postId,r=this;r.post=t.getPost(a),r.gallery=o(),r.getCurrentUrl=i.getCurrentUrl}angular.module("photoBlogApp").controller("postController",e),e.$inject=["$routeParams","dataService","urlService"]}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/aboutme.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogAboutme",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/categories.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogCategories",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/followme.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogFollowme",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/footer.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogFooter",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/recentposts.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogRecentPosts",e)}(),function(){"use strict";function e(){var e={templateUrl:"/app/directives/slides.directive.html",restrict:"EA"};return e}angular.module("photoBlogApp").directive("photoblogSlides",e)}(),function(){"use strict";function e(e,t,i){var o=this;o.posts=e.getPosts(),o.categories=e.getCategories(),o.getCategoryUrl=t.getCategoryUrl,o.getPostUrl=t.getPostUrl,o.getHomeUrl=t.getHomeUrl,o.getCategoryThumb=t.getCategoryThumb,o.getPostImage=t.getPostImage,o.getHomeSlideImage=t.getHomeSlideImage,o.currentSlide=0;i(function(){o.currentSlide=(o.currentSlide+1)%o.posts.length},15e3)}angular.module("photoBlogApp").controller("pageController",e),e.$inject=["dataService","urlService","$interval"]}(),function(){"use strict";function e(e,t){function i(e){var i=a();return t("filter")(i,{categoryId:e})}function o(e){var i=a();return t("filter")(i,{link:e})[0]}function a(){var e=new Array,t=r(),i={id:0,link:"alice_world",en:{title:"Alice´s world",description:"What is important on the life of a baby? Here is a small overview about some important moments for Alice, shared by myself as father and photographer",images:[{description:"Joy"},{description:"Hurry"},{description:"Fashion"},{description:"Friendship"},{description:"Happiness"},{description:"Break"}]},pt:{title:"O Mundo de Alice",description:"O que é importante no mundo de uma criança? Aqui temos uma amostra de momentos importantes para a Alice, compartilhados por mim como fotógrafo e pai",images:[{description:"Alegria"},{description:"Pressa"},{description:"Moda"},{description:"Amizade"},{description:"Felicidade"},{description:"Pausa"}]},categoryId:0,category:t[0],date:new Date(2016,5,13),images:[{img:"v1466538132/p001_alice_02.jpg"},{img:"v1466538129/p001_alice_03.jpg"},{img:"v1466538125/p001_alice_07.jpg"},{img:"v1466538126/p001_alice_04.jpg"},{img:"v1466538127/p001_alice_05.jpg"},{img:"v1466538127/p001_alice_01.jpg"}]},o={id:1,link:"landscapes",en:{title:"Landscapes at the edges of the day",description:"Photos from the beggining and end of the day",images:[{description:"Before the sun"},{description:"Sun is coming"},{description:"Reflections in the water"},{description:"Spectators waiting"},{description:"The sunshine"},{description:"End of the day"}]},pt:{title:"Paisagens na beira do dia",description:"Capturas de imagens no início e fim do dia",images:[{description:"Antes do sol"},{description:"O sol está vindo"},{description:"Reflexos na água"},{description:"Expectadores esperando"},{description:"O nascer do sol"},{description:"Fim do dia"}]},categoryId:1,category:t[1],date:new Date(2016,5,23),images:[{img:"v1467588762/p002_landscape_01.jpg"},{img:"v1467589030/p002_landscape_02.jpg"},{img:"v1467588762/p002_landscape_04.jpg"},{img:"v1467589030/p002_landscape_05.jpg"},{img:"v1467588782/p002_landscape_06.jpg"},{img:"v1467588763/p002_landscape_03.jpg"}]},a={id:2,link:"glamour",en:{title:"Glamour",description:"Dresses for a wedding, setting the final details before the party.",images:[{description:"Flowers near the face"},{description:"Adjusting the necktie"},{description:"Finishing the makeup"},{description:"Wearing the shoe"},{description:"Ready"},{description:"Soft light over the face"}]},pt:{title:"Glamour",description:"Vestidos para um casamento, ajustando os últimos detalhes antes da festa.",images:[{description:"Flores próximas ao rosto"},{description:"Ajustando a gravata"},{description:"Terminando a maquiagem"},{description:"Calçando o sapato"},{description:"Prontos"},{description:"Luz suave sobre o rosto"}]},categoryId:2,category:t[2],date:new Date(2016,6,7),images:[{img:"v1467937835/p003_glamour_06.jpg"},{img:"v1467938085/p003_glamour_02.jpg"},{img:"v1467937849/p003_glamour_03.jpg"},{img:"v1467937848/p003_glamour_04.jpg"},{img:"v1467937851/p003_glamour_05.jpg"},{img:"v1467937826/p003_glamour_01.jpg"}]},s={id:3,link:"kids",en:{title:"Kids portraits",description:"Candid portraits of kids while involved in their own world",images:[{description:"Enchanted"},{description:"Assembling a house"},{description:"Enjoying the puffp"},{description:"Daydreaming"},{description:"My car"},{description:"Playing in the cradle"}]},pt:{title:"Retratos de crianças",description:"Retratos de crianças envolvidas em seus próprios mundos",images:[{description:"Encantada"},{description:"Montando uma casinha"},{description:"Aproveitando o puff"},{description:"Sonhando acordada"},{description:"Meu carro"},{description:"Brincando no berço"}]},categoryId:0,category:t[0],date:new Date(2016,6,10),images:[{img:"v1468086036/p004_kids_03.jpg"},{img:"v1468086037/p004_kids_02.jpg"},{img:"v1468086032/p004_kids_05.jpg"},{img:"v1468086039/p004_kids_04.jpg"},{img:"v1468086038/p004_kids_01.jpg"},{img:"v1468086027/p004_kids_06.jpg"}]},l={id:4,link:"lowkey",en:{title:"Low key profile portraits",description:"Single light portraits with heavy post production",images:[{description:"Nicoly"},{description:"Lucas"},{description:"Vitória"},{description:"Tiago"},{description:"Fernando"},{description:"Nicoly"}]},pt:{title:"Retratos com fundo escuro",description:"Retratos tirados com uma única fonte de luz e com bastante pós produção",images:[{description:"Nicoly"},{description:"Lucas"},{description:"Vitória"},{description:"Tiago"},{description:"Fernando"},{description:"Nicoly"}]},categoryId:2,category:t[2],date:new Date(2016,6,14),images:[{img:"v1468548290/p005_lowkey_11.jpg"},{img:"v1468548290/p005_lowkey_10.jpg"},{img:"v1468548286/p005_lowkey_08.jpg"},{img:"v1468548292/p005_lowkey_09.jpg"},{img:"v1468548291/p005_lowkey_07.jpg"},{img:"v1469058436/p005_lowkey_13.jpg"}]},c={id:5,link:"theater",en:{title:"Interior of São Paulo Municipal Theater",description:"Travel to Sao Paulo to visit the Sao Paulo Municipal Museum",images:[{description:"Main stair"},{description:"Windows"},{description:"Mirror"},{description:"Chairs"},{description:"Main entrance roof"},{description:"Stair detail"}]},pt:{title:"Interior do Teatro Municipal de São Paulo",description:"Viagem para São Paulo para visitar o Teatro Municipal",images:[{description:"Escada principal"},{description:"Janelas"},{description:"Espelho"},{description:"Cadeiras"},{description:"Teto da entrada principal"},{description:"Detalhes da escada"}]},categoryId:1,category:t[1],date:new Date(2016,6,22),images:[{img:"v1469227618/p006_teatro_01.jpg"},{img:"v1469227607/p006_teatro_02.jpg"},{img:"v1469227614/p006_teatro_03.jpg"},{img:"v1469227618/p006_teatro_04.jpg"},{img:"v1469227623/p006_teatro_05.jpg"},{img:"v1469227614/p006_teatro_06.jpg"}]};return e.push(i),e.push(o),e.push(a),e.push(s),e.push(l),e.push(c),n(e)}function r(){var e=new Array;return e.push({en:{name:"Baby and children",description:"Childhood universe"},pt:{name:"Bebês e crianças",description:"O universo infantil"},id:0,posts:2}),e.push({en:{name:"Travel",description:"Inspired by travels I did"},pt:{name:"Viagem",description:"Inspirado em minhas viagens"},id:1,posts:2}),e.push({en:{name:"Portraits",description:"People and their worlds"},pt:{name:"Retratos",description:"Pessoas e seus mundos"},id:2,posts:2}),n(e)}function n(e){var t=c();for(var i in e){var o=e[i],a=o[t];s(a,o)}return e}function s(e,t){for(var i in e)void 0!==e[i]&&(e[i]instanceof Array?l(e[i],t[i]):t[i]=e[i])}function l(e,t){for(var i in e)void 0!==e[i]&&s(e[i],t[i])}function c(){var t=e.use();return t.substring(0,2)}return{getPost:o,getPosts:a,getCategories:r,getPostsByCategory:i}}angular.module("photoBlogApp").service("dataService",e),e.$inject=["$translate","$filter"]}(),function(){"use strict";function e(e){function t(e){return"/category/"+e}function i(e){return"/post/"+e}function o(){return"/"}function a(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_lfill,h_80,w_80/"+e}function r(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/"+e}function n(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/"+e}function s(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_550,w_1170/"+e}function l(e){return"http://res.cloudinary.com/drzxualok/image/upload/c_thumb,h_550,w_1920/"+e}function c(){return e.absUrl()}return{getCategoryUrl:t,getPostUrl:i,getHomeUrl:o,getCategoryThumb:a,getGalleryThumb:r,getGalleryImage:n,getPostImage:s,getHomeSlideImage:l,getCurrentUrl:c}}angular.module("photoBlogApp").service("urlService",e),e.$inject=["$location"]}(),function(){"use-strict";function e(e,t,i,o){function a(e,t){e.baseClass=e["class"]||r.baseClass,e.thumbClass=e.thumbClass||r.thumbClass,e.thumbsNum=e.thumbsNum||3}var r={baseClass:"ng-gallery",thumbClass:"ng-thumb",templateUrl:"ng-gallery.html"},n={enter:13,esc:27,left:37,right:39},s=r.templateUrl;return o.put(s,'<div class="{{ baseClass }}">  <div ng-repeat="i in images">    <img ng-src="{{ i.thumb }}" class="{{ thumbClass }}" ng-click="openGallery($index)" alt="Image {{ $index + 1 }}" />  </div></div><div class="ng-overlay" ng-show="opened"></div><div class="ng-gallery-content" unselectable="on" ng-show="opened" ng-swipe-left="nextImage()" ng-swipe-right="prevImage()">  <div class="uil-ring-css" ng-show="loading"><div></div></div><a href="{{getImageDownloadSrc()}}" target="_blank" ng-show="showImageDownloadButton()" class="download-image"><i class="fa fa-download"></i></a>  <a class="close-popup" ng-click="closeGallery()"><i class="fa fa-close"></i></a>  <a class="nav-left" ng-click="prevImage()"><i class="fa fa-angle-left"></i></a>  <img ondragstart="return false;" draggable="false" ng-src="{{ img }}" ng-click="nextImage()" ng-show="!loading" class="effect" />  <a class="nav-right" ng-click="nextImage()"><i class="fa fa-angle-right"></i></a>  <span class="info-text">{{ index + 1 }}/{{ images.length }} - {{ description }}</span>  <div class="ng-thumbnails-wrapper">    <div class="ng-thumbnails slide-left">      <div ng-repeat="i in images">        <img ng-src="{{ i.thumb }}" ng-class="{\'active\': index === $index}" ng-click="changeImage($index)" />      </div>    </div>  </div></div>'),{restrict:"EA",scope:{images:"=",thumbsNum:"@",hideOverflow:"="},controller:["$scope",function(e){e.$on("openGallery",function(t,i){e.openGallery(i.index)})}],templateUrl:function(e,t){return t.templateUrl||r.templateUrl},link:function(o,r,s){a(o,s),o.thumbsNum>=11&&(o.thumbsNum=11);var l=e.find("body"),c=angular.element(r[0].querySelectorAll(".ng-thumbnails-wrapper")),p=angular.element(r[0].querySelectorAll(".ng-thumbnails"));o.index=0,o.opened=!1,o.thumb_wrapper_width=0,o.thumbs_width=0;var d=function(e){var t=i.defer(),a=new Image;return a.onload=function(){o.loading=!1,typeof this.complete!==!1&&0!==this.naturalWidth||t.reject(),t.resolve(a)},a.onerror=function(){t.reject()},a.src=o.images[e].img,o.loading=!0,t.promise},g=function(e){d(o.index).then(function(e){o.img=e.src,m(o.index)}),o.description=o.images[e].description||""};o.showImageDownloadButton=function(){if(null!=o.images[o.index]&&null!=o.images[o.index].downloadSrc){var e=o.images[o.index];return angular.isDefined(e.downloadSrc)&&0<e.downloadSrc.length}},o.getImageDownloadSrc=function(){if(null!=o.images[o.index]&&null!=o.images[o.index].downloadSrc)return o.images[o.index].downloadSrc},o.changeImage=function(e){o.index=e,g(e)},o.nextImage=function(){o.index+=1,o.index===o.images.length&&(o.index=0),g(o.index)},o.prevImage=function(){o.index-=1,o.index<0&&(o.index=o.images.length-1),g(o.index)},o.openGallery=function(e){void 0!==typeof e&&(o.index=e,g(o.index)),o.opened=!0,o.hideOverflow&&$("body").css({overflow:"hidden"}),t(function(){var e=u();o.thumbs_width=e.width;var t=e.width+1;p.css({width:t+"px"}),c.css({width:e.visible_width+"px"}),m(o.index)})},o.closeGallery=function(){o.opened=!1,o.hideOverflow&&$("body").css({overflow:""})},l.bind("keydown",function(e){if(o.opened){var t=e.which;t===n.esc?o.closeGallery():t===n.right||t===n.enter?o.nextImage():t===n.left&&o.prevImage(),o.$apply()}});var u=function(){var e=0,t=0;return angular.forEach(p.find("img"),function(i){e+=i.clientWidth,e+=10,t=i.clientWidth+10}),{width:e,visible_width:t*o.thumbsNum}},m=function(e){t(function(){var t=o.images.length,i=o.thumbs_width,a=parseInt(i/t,10),r=e+1,n=Math.ceil(t/r);c[0].scrollLeft=0,c[0].scrollLeft=r*a-n*a},100)}}}}angular.module("jkuri.gallery",[]).directive("ngGallery",e),e.$inject=["$document","$timeout","$q","$templateCache"]}();