function JetpackSlideshow(e,t,i){this.element=e,this.images=[],this.controls={},this.transition=t||"fade",this.autostart=i}var jetpackSlideshowSettings={spinner:"/images/slideshow-loader.gif"};JetpackSlideshow.prototype.showLoadingImage=function(e){if(e){this.loadingImage_=document.createElement("div"),this.loadingImage_.className="slideshow-loading";var t=document.createElement("img");t.src=jetpackSlideshowSettings.spinner,this.loadingImage_.appendChild(t),this.loadingImage_.appendChild(this.makeZeroWidthSpan()),this.element.append(this.loadingImage_)}else this.loadingImage_&&(this.loadingImage_.parentNode.removeChild(this.loadingImage_),this.loadingImage_=null)},JetpackSlideshow.prototype.init=function(){this.showLoadingImage(!0);for(var e=this,t=0;t<this.images.length;t++){var i=this.images[t],a=document.createElement("img");a.src=i.src,a.title="undefined"!=typeof i.title?i.title:"",a.alt="undefined"!=typeof i.alt?i.alt:"",a.align="middle",a.setAttribute("itemprop","image"),a.nopin="nopin";var n=document.createElement("div");n.className="slideshow-slide-caption",n.setAttribute("itemprop","caption description"),n.innerHTML=i.caption;var r=document.createElement("div");r.className="slideshow-slide",r.setAttribute("itemprop","associatedMedia"),r.setAttribute("itemscope",""),r.setAttribute("itemtype","http://schema.org/ImageObject"),0===t&&(a.complete?setTimeout(function(){e.finishInit_()},1):jQuery(a).load(function(){e.finishInit_()})),r.appendChild(a),a.removeAttribute("width"),a.removeAttribute("height"),r.appendChild(this.makeZeroWidthSpan()),r.appendChild(n),this.element.append(r)}},JetpackSlideshow.prototype.makeZeroWidthSpan=function(){var e=document.createElement("span");return e.className="slideshow-line-height-hack",-1!==window.navigator.userAgent.indexOf("MSIE ")?e.appendChild(document.createTextNode(" ")):e.innerHTML="&nbsp;",e},JetpackSlideshow.prototype.finishInit_=function(){this.showLoadingImage(!1),this.renderControls_();var e=this;if(this.images.length>1){this.element.cycle({fx:this.transition,prev:this.controls.prev,next:this.controls.next,slideExpr:".slideshow-slide",onPrevNextEvent:function(){return e.onCyclePrevNextClick_.apply(e,arguments)}});var t=this.element;this.autostart||(t.cycle("pause"),jQuery(this.controls.stop).removeClass("running"),jQuery(this.controls.stop).addClass("paused")),jQuery(this.controls.stop).click(function(){var e=jQuery(this);return e.hasClass("paused")?(e.addClass("running"),e.removeClass("paused"),t.cycle("resume",!0)):(t.cycle("pause"),e.removeClass("running"),e.addClass("paused")),!1})}else this.element.children(":first").show(),this.element.css("position","relative");this.initialized_=!0},JetpackSlideshow.prototype.renderControls_=function(){if(!this.controlsDiv_){var e=document.createElement("div");e.className="slideshow-controls";for(var t=["prev","stop","next"],i=0;i<t.length;i++){var a=t[i],n=document.createElement("a");n.href="#",e.appendChild(n),this.controls[a]=n}this.element.append(e),this.controlsDiv_=e}},JetpackSlideshow.prototype.onCyclePrevNextClick_=function(e,t){if(jetpackSlideshowSettings.blog_id){var i=this.images[t].id,a=new Image;a.src=document.location.protocol+"//pixel.wp.com/g.gif?host="+escape(document.location.host)+"&rand="+Math.random()+"&blog="+jetpackSlideshowSettings.blog_id+"&subd="+jetpackSlideshowSettings.blog_subdomain+"&user_id="+jetpackSlideshowSettings.user_id+"&post="+i+"&ref="+escape(document.location)}},function(e){function t(){e(".jetpack-slideshow-noscript").remove(),e(".jetpack-slideshow").each(function(){var t=e(this);if(!t.data("processed")){var i=new JetpackSlideshow(t,t.data("trans"),t.data("autostart"));i.images=t.data("gallery"),i.init(),t.data("processed",!0)}})}e(document).ready(t),e("body").on("post-load",t)}(jQuery),function(e,t,i){"use strict";"undefined"!=typeof module&&module.exports?module.exports=i(t,e):"function"==typeof define&&define.amd?define("factory",function(){return i(t,e)}):e[t]=i(t,e)}(window,"detectZoom",function(){var e=function(){return window.devicePixelRatio||1},t=function(){return{zoom:1,devicePxPerCssPx:1}},i=function(){var t=Math.round(screen.deviceXDPI/screen.logicalXDPI*100)/100;return{zoom:t,devicePxPerCssPx:t*e()}},a=function(){var t=Math.round(document.documentElement.offsetHeight/window.innerHeight*100)/100;return{zoom:t,devicePxPerCssPx:t*e()}},n=function(){var t=90==Math.abs(window.orientation)?screen.height:screen.width,i=t/window.innerWidth;return{zoom:i,devicePxPerCssPx:i*e()}},r=function(){var t=function(e){return e.replace(/;/g," !important;")},i=document.createElement("div");i.innerHTML="1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0",i.setAttribute("style",t("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));var a=document.createElement("div");a.setAttribute("style",t("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;")),a.appendChild(i),document.body.appendChild(a);var n=1e3/i.clientHeight;return n=Math.round(100*n)/100,document.body.removeChild(a),{zoom:n,devicePxPerCssPx:n*e()}},s=function(){var e=c("min--moz-device-pixel-ratio","",0,10,20,1e-4);return e=Math.round(100*e)/100,{zoom:e,devicePxPerCssPx:e}},o=function(){return{zoom:s().zoom,devicePxPerCssPx:e()}},l=function(){var t=window.top.outerWidth/window.top.innerWidth;return t=Math.round(100*t)/100,{zoom:t,devicePxPerCssPx:t*e()}},c=function(e,t,i,a,n,r){function s(i,a,n){var l=(i+a)/2;if(0>=n||r>a-i)return l;var c="("+e+":"+l+t+")";return o(c).matches?s(l,a,n-1):s(i,l,n-1)}var o,l,c,d;window.matchMedia?o=window.matchMedia:(l=document.getElementsByTagName("head")[0],c=document.createElement("style"),l.appendChild(c),d=document.createElement("div"),d.className="mediaQueryBinarySearch",d.style.display="none",document.body.appendChild(d),o=function(e){c.sheet.insertRule("@media "+e+"{.mediaQueryBinarySearch {text-decoration: underline} }",0);var t="underline"==getComputedStyle(d,null).textDecoration;return c.sheet.deleteRule(0),{matches:t}});var u=s(i,a,n);return d&&(l.removeChild(c),document.body.removeChild(d)),u},d=function(){var e=t;return isNaN(screen.logicalXDPI)||isNaN(screen.systemXDPI)?window.navigator.msMaxTouchPoints?e=a:"orientation"in window&&"string"==typeof document.body.style.webkitMarquee?e=n:"string"==typeof document.body.style.webkitMarquee?e=r:navigator.userAgent.indexOf("Opera")>=0?e=l:window.devicePixelRatio?e=o:s().zoom>.001&&(e=s):e=i,e}();return{zoom:function(){return d().zoom},device:function(){return d().devicePxPerCssPx}}});var wpcom_img_zoomer={zoomed:!1,timer:null,interval:1e3,imgNeedsSizeAtts:function(e){return null!==e.getAttribute("width")||null!==e.getAttribute("height")?!1:!(e.width<e.naturalWidth||e.height<e.naturalHeight)},updateResizeUrl:function(e,t,i){var a=e.match(/resize=([0-9%2C,]+)/);if(null===a||!a[1])return e;var n=a[1].split(","),r=null;return n[0]!==t&&(r=t),n[1]!==i&&(null!==r&&(r+="%2C"),r+=i),r!==a[1]&&(r="resize="+r,e=e.replace(a[0],r)),e},init:function(){var e=this;try{e.zoomImages(),e.timer=setInterval(function(){e.zoomImages()},e.interval)}catch(t){}},stop:function(){this.timer&&clearInterval(this.timer)},getScale:function(){var e=detectZoom.device();return e=1>=e?1:1.5>=e?1.5:2>=e?2:3>=e?3:4>=e?4:5},shouldZoom:function(e){var t=this;return"innerWidth"in window&&!window.innerWidth?!1:1!=e||0!=t.zoomed},zoomImages:function(){var e=this,t=e.getScale();if(e.shouldZoom(t)){e.zoomed=!0;for(var i=document.getElementsByTagName("img"),a=0;a<i.length;a++)if(!("complete"in i[a])||i[a].complete){var n=i[a].getAttribute("scale");if(n!=t&&"0"!=n){var r=i[a].getAttribute("scale-fail");r&&t>=r||i[a].width&&i[a].height&&(!n&&i[a].getAttribute("data-lazy-src")&&i[a].getAttribute("data-lazy-src")!==i[a].getAttribute("src")||(e.scaleImage(i[a],t)?i[a].setAttribute("scale",t):i[a].setAttribute("scale","0")))}}}},scaleImage:function(e,t){var i=this,a=e.src;if(e.parentNode.className.match(/slideshow-slide/))return!1;if(e.src.match(/^https?:\/\/([^\/]*\.)?gravatar\.com\/.+[?&](s|size)=/))a=e.src.replace(/([?&](s|size)=)(\d+)/,function(a,n,r,s){var o="originals",l=e.getAttribute(o);null===l&&(l=s,e.setAttribute(o,l),i.imgNeedsSizeAtts(e)&&(e.width=e.width,e.height=e.height));var c=(e.clientWidth,Math.ceil(e.clientWidth*t));return c=Math.max(c,l),c=Math.min(c,512),n+c});else if(e.src.match(/^https?:\/\/([^\/]+)\.files\.wordpress\.com\/.+[?&][wh]=/)){if(e.src.match(/[?&]crop/))return!1;for(var n={},r=e.src.match(/([?&]([wh])=)(\d+)/g),s=0;s<r.length;s++){var o=r[s].split("="),l=o[0].replace(/[?&]/g,""),c=o[1],d="original"+l,u=e.getAttribute(d);null===u&&(u=c,e.setAttribute(d,u),i.imgNeedsSizeAtts(e)&&(e.width=e.width,e.height=e.height));var v="w"==l?e.clientWidth:e.clientHeight,p="w"==l?e.naturalWidth:e.naturalHeight,m=Math.ceil(v*t);m=Math.max(m,u),t>e.getAttribute("scale")&&p>=m&&(m=c),c>p&&(m=c),m!=c&&(n[l]=m)}var h=n.w||!1,g=n.h||!1;h&&(a=e.src.replace(/([?&])w=\d+/g,function(e,t){return t+"w="+h})),g&&(a=a.replace(/([?&])h=\d+/g,function(e,t){return t+"h="+g}))}else if(e.src.match(/^https?:\/\/([^\/]+\.)*(wordpress|wp)\.com\/mshots\/.+[?&]w=\d+/))a=e.src.replace(/([?&]w=)(\d+)/,function(a,n,r){var s="originalw",o=e.getAttribute(s);null===o&&(o=r,e.setAttribute(s,o),i.imgNeedsSizeAtts(e)&&(e.width=e.width,e.height=e.height));var l=e.clientWidth,c=Math.ceil(l*t);return c=Math.max(c,o),t>e.getAttribute("scale")&&c<=e.naturalWidth&&(c=r),r!=c?n+c:a}),a=a.replace(/([?&]h=)(\d+)/,function(i,n,r){if(a==e.src)return i;var s="originalh",o=e.getAttribute(s);null===o&&(o=r,e.setAttribute(s,o));var l=e.clientHeight,c=Math.ceil(l*t);return c=Math.max(c,o),t>e.getAttribute("scale")&&c<=e.naturalHeight&&(c=r),r!=c?n+c:i});else if(e.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/imgpress\?(.+)/)){var f=["zoom","url","h","w","fit","filter","brightness","contrast","colorize","smooth","unsharpmask"],w=RegExp.$3.split("&");for(var b in w)if(b=w[b].split("=")[0],-1==f.indexOf(b))return!1;e.width=e.width,e.height=e.height,a=1==t?e.src.replace(/\?(zoom=[^&]+&)?/,"?"):e.src.replace(/\?(zoom=[^&]+&)?/,"?zoom="+t+"&")}else if(e.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/latex\.php\?(latex|zoom)=(.+)/)||e.src.match(/^https?:\/\/i[\d]{1}\.wp\.com\/(.+)/))e.width=e.width,e.height=e.height,a=1==t?e.src.replace(/\?(zoom=[^&]+&)?/,"?"):e.src.replace(/\?(zoom=[^&]+&)?/,"?zoom="+t+"&"),!e.srcset&&e.src.match(/resize/)&&(a=i.updateResizeUrl(a,e.width,e.height),e.setAttribute("srcset",a));else{if(!e.src.match(/^https?:\/\/[^\/]+\/.*[-@]([12])x\.(gif|jpeg|jpg|png)(\?|$)/))return!1;e.width=e.width,e.height=e.height;var x=RegExp.$1,y=x;y=1>=t?1:2,x!=y&&(a=e.src.replace(/([-@])[12]x\.(gif|jpeg|jpg|png)(\?|$)/,"$1"+y+"x.$2$3"))}if(a!=e.src){var S,C=e.getAttribute("src-orig");C||(C=e.src,e.setAttribute("src-orig",C)),S=e.src,e.onerror=function(){e.src=S,e.getAttribute("scale-fail")<t&&e.setAttribute("scale-fail",t),e.onerror=null},e.src=a}return!0}};wpcom_img_zoomer.init(),!function(e){var t=!0;e.flexslider=function(i,a){var n=e(i);n.vars=e.extend({},e.flexslider.defaults,a);var r,s=n.vars.namespace,o=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=("ontouchstart"in window||o||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,c="click touchend MSPointerUp keyup",d="",u="vertical"===n.vars.direction,v=n.vars.reverse,p=n.vars.itemWidth>0,m="fade"===n.vars.animation,h=""!==n.vars.asNavFor,g={};e.data(i,"flexslider",n),g={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=e(n.vars.selector,n),n.container=e(n.containerSelector,n),n.count=n.slides.length,n.syncExists=e(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=u?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!m&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return n.pfx=t[i].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=e(n.vars.controlsContainer).length>0&&e(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=e(n.vars.manualControls).length>0&&e(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===e(n.vars.customDirectionNav).length&&e(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&g.controlNav.setup(),n.vars.directionNav&&g.directionNav.setup(),n.vars.keyboard&&(1===e(n.containerSelector).length||n.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var i=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(i,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,i,a){e.preventDefault();var r=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(r,n.vars.pauseOnAction)}),n.vars.pausePlay&&g.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&g.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),h&&g.asNav.setup(),l&&n.vars.touch&&g.touch(),(!m||m&&n.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",g.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(s+"active-slide").eq(n.currentItem).addClass(s+"active-slide"),o?(i._slider=n,n.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var i=e(this),a=i.index();e(n.vars.asNavFor).data("flexslider").animating||i.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(c,function(t){t.preventDefault();var i=e(this),a=i.index(),r=i.offset().left-e(n).scrollLeft();0>=r&&i.hasClass(s+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):e(n.vars.asNavFor).data("flexslider").animating||i.hasClass(s+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var t,i,a="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",r=1;if(n.controlNavScaffold=e('<ol class="'+s+"control-nav "+s+a+'"></ol>'),n.pagingCount>1)for(var o=0;o<n.pagingCount;o++){if(i=n.slides.eq(o),void 0===i.attr("data-thumb-alt")&&i.attr("data-thumb-alt",""),altText=""!==i.attr("data-thumb-alt")?altText=' alt="'+i.attr("data-thumb-alt")+'"':"",t="thumbnails"===n.vars.controlNav?'<img src="'+i.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+r+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var l=i.attr("data-thumbcaption");""!==l&&void 0!==l&&(t+='<span class="'+s+'caption">'+l+"</span>")}n.controlNavScaffold.append("<li>"+t+"</li>"),r++}n.controlsContainer?e(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),g.controlNav.set(),g.controlNav.active(),n.controlNavScaffold.delegate("a, img",c,function(t){if(t.preventDefault(),""===d||d===t.type){var i=e(this),a=n.controlNav.index(i);i.hasClass(s+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,g.controlNav.active(),n.controlNav.bind(c,function(t){if(t.preventDefault(),""===d||d===t.type){var i=e(this),a=n.controlNav.index(i);i.hasClass(s+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=e("."+s+"control-nav li "+t,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(s+"active").eq(n.animatingTo).addClass(s+"active")},update:function(t,i){n.pagingCount>1&&"add"===t?n.controlNavScaffold.append(e('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(i).closest("li").remove(),g.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(i,t):g.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+s+'direction-nav"><li class="'+s+'nav-prev"><a class="'+s+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+s+'nav-next"><a class="'+s+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?(e(n.controlsContainer).append(t),n.directionNav=e("."+s+"direction-nav li a",n.controlsContainer)):(n.append(t),n.directionNav=e("."+s+"direction-nav li a",n)),g.directionNav.update(),n.directionNav.bind(c,function(t){t.preventDefault();var i;(""===d||d===t.type)&&(i=e(this).hasClass(s+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(i,n.vars.pauseOnAction)),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(){var e=s+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+s+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+s+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+s+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(t),n.pausePlay=e("."+s+"pauseplay a",n.controlsContainer)):(n.append(t),n.pausePlay=e("."+s+"pauseplay a",n)),g.pausePlay.update(n.vars.slideshow?s+"pause":s+"play"),n.pausePlay.bind(c,function(t){t.preventDefault(),(""===d||d===t.type)&&(e(this).hasClass(s+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(s+"pause").addClass(s+"play").html(n.vars.playText):n.pausePlay.removeClass(s+"play").addClass(s+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),i._gesture.addPointer(e.pointerId),S=0,c=u?n.h:n.w,h=Number(new Date),l=p&&v&&n.animatingTo===n.last?0:p&&v?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:p&&n.currentSlide===n.last?n.limit:p?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:v?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function t(e){e.stopPropagation();var t=e.target._slider;if(t){var a=-e.translationX,n=-e.translationY;return S+=u?n:a,d=S,b=u?Math.abs(S)<Math.abs(-a):Math.abs(S)<Math.abs(-n),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){i._gesture.stop()}):void((!b||Number(new Date)-h>500)&&(e.preventDefault(),!m&&t.transitions&&(t.vars.animationLoop||(d=S/(0===t.currentSlide&&0>S||t.currentSlide===t.last&&S>0?Math.abs(S)/c+2:1)),t.setProps(l+d,"setTouch"))))}}function a(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!b&&null!==d){var i=v?-d:d,a=i>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(a)&&(Number(new Date)-h<550&&Math.abs(i)>50||Math.abs(i)>c/2)?t.flexAnimate(a,t.vars.pauseOnAction):m||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,s=null,d=null,l=null,S=0}}var r,s,l,c,d,h,g,f,w,b=!1,x=0,y=0,S=0;o?(i.style.msTouchAction="none",i._gesture=new MSGesture,i._gesture.target=i,i.addEventListener("MSPointerDown",e,!1),i._slider=n,i.addEventListener("MSGestureChange",t,!1),i.addEventListener("MSGestureEnd",a,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=u?n.h:n.w,h=Number(new Date),x=e.touches[0].pageX,y=e.touches[0].pageY,l=p&&v&&n.animatingTo===n.last?0:p&&v?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:p&&n.currentSlide===n.last?n.limit:p?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:v?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=u?y:x,s=u?x:y,i.addEventListener("touchmove",f,!1),i.addEventListener("touchend",w,!1))},f=function(e){x=e.touches[0].pageX,y=e.touches[0].pageY,d=u?r-y:r-x,b=u?Math.abs(d)<Math.abs(x-s):Math.abs(d)<Math.abs(y-s);var t=500;(!b||Number(new Date)-h>t)&&(e.preventDefault(),!m&&n.transitions&&(n.vars.animationLoop||(d/=0===n.currentSlide&&0>d||n.currentSlide===n.last&&d>0?Math.abs(d)/c+2:1),n.setProps(l+d,"setTouch")))},w=function(e){if(i.removeEventListener("touchmove",f,!1),n.animatingTo===n.currentSlide&&!b&&null!==d){var t=v?-d:d,a=t>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(a)&&(Number(new Date)-h<550&&Math.abs(t)>50||Math.abs(t)>c/2)?n.flexAnimate(a,n.vars.pauseOnAction):m||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}i.removeEventListener("touchend",w,!1),r=null,s=null,d=null,l=null},i.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(p||n.doMath(),m?g.smoothHeight():p?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):u?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&g.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!u||m){var t=m?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(t){var i=e(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(t){case"animate":i.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":i.playing||i.asNav||i.play();break;case"pause":i.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=g.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){g.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=g.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(r),r=setTimeout(function(){d=""},3e3)}},n.flexAnimate=function(t,i,a,r,o){if(n.vars.animationLoop||t===n.currentSlide||(n.direction=t>n.currentSlide?"next":"prev"),h&&1===n.pagingCount&&(n.direction=n.currentItem<t?"next":"prev"),!n.animating&&(n.canAdvance(t,o)||a)&&n.is(":visible")){if(h&&r){var c=e(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===t||t===n.count-1,c.flexAnimate(t,!0,!1,!0,o),n.direction=n.currentItem<t?"next":"prev",c.direction=n.direction,Math.ceil((t+1)/n.visible)-1===n.currentSlide||0===t)return n.currentItem=t,n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),!1;n.currentItem=t,n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),t=Math.floor(t/n.visible)}if(n.animating=!0,n.animatingTo=t,i&&n.pause(),n.vars.before(n),n.syncExists&&!o&&g.sync("animate"),n.vars.controlNav&&g.controlNav.active(),p||n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),n.atEnd=0===t||t===n.last,n.vars.directionNav&&g.directionNav.update(),t===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),m)l?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(t).css({opacity:1,zIndex:2}),n.wrapup(b)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(t).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var d,f,w,b=u?n.slides.filter(":first").height():n.computedW;p?(d=n.vars.itemMargin,w=(n.itemW+d)*n.move*n.animatingTo,f=w>n.limit&&1!==n.visible?n.limit:w):f=0===n.currentSlide&&t===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?v?(n.count+n.cloneOffset)*b:0:n.currentSlide===n.last&&0===t&&n.vars.animationLoop&&"prev"!==n.direction?v?0:(n.count+1)*b:v?(n.count-1-t+n.cloneOffset)*b:(t+n.cloneOffset)*b,n.setProps(f,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(b)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(b)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(b)})}n.vars.smoothHeight&&g.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){m||p||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&t&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&g.pausePlay.update("play"),n.syncExists&&g.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&g.pausePlay.update("pause"),n.syncExists&&g.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var i=h?n.pagingCount-1:n.last;return t?!0:h&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:h&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||h?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===i&&"next"!==n.direction?!1:!n.atEnd||n.currentSlide!==i||0!==e||"next"!==n.direction:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,i){var a=function(){var i=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,a=function(){if(p)return"setTouch"===t?e:v&&n.animatingTo===n.last?0:v?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:i;switch(t){case"setTotal":return v?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return v?e:e;case"jumpEnd":return v?e:n.count*e;case"jumpStart":return v?n.count*e:e;default:return e}}();return-1*a+"px"}();n.transitions&&(a=u?"translate3d(0,"+a+",0)":"translate3d("+a+",0,0)",i=void 0!==i?i/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",i),n.container.css("transition-duration",i)),n.args[n.prop]=a,(n.transitions||void 0===i)&&n.container.css(n.args),n.container.css("transform",a)},n.setup=function(t){if(m)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(l?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&g.smoothHeight();else{var i,a;"init"===t&&(n.viewport=e('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,v&&(a=e.makeArray(n.slides).reverse(),n.slides=e(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!p&&(n.cloneCount=2,n.cloneOffset=1,"init"!==t&&n.container.find(".clone").remove(),n.container.append(g.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(g.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=e(n.vars.selector,n),i=v?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,u&&!p?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(i*n.h,"init")},"init"===t?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(i*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&g.smoothHeight()},"init"===t?100:0))}p||n.slides.removeClass(s+"active-slide").eq(n.currentSlide).addClass(s+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,i=n.vars.minItems,a=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),p?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=i?i*n.itemT:n.w,n.maxW=a?a*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(i-1))/i:n.maxW<n.w?(n.w-t*(a-1))/a:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),p||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!p||n.pagingCount>n.controlNav.length?g.controlNav.update("add"):("remove"===t&&!p||n.pagingCount<n.controlNav.length)&&(p&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),g.controlNav.update("remove",n.last))),n.vars.directionNav&&g.directionNav.update()},n.addSlide=function(t,i){var a=e(t);n.count+=1,n.last=n.count-1,u&&v?void 0!==i?n.slides.eq(n.count-i).after(a):n.container.prepend(a):void 0!==i?n.slides.eq(i).before(a):n.container.append(a),n.update(i,"add"),n.slides=e(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(t){var i=isNaN(t)?n.slides.index(e(t)):t;n.count-=1,n.last=n.count-1,isNaN(t)?e(t,n.slides).remove():u&&v?n.slides.eq(n.last).remove():n.slides.eq(t).remove(),n.doMath(),n.update(i,"remove"),n.slides=e(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},g.init()},e(window).blur(function(e){t=!1}).focus(function(e){t=!0}),e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,
slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var i=e(this),a=t.selector?t.selector:".slides > li",n=i.find(a);1===n.length&&t.allowOneSlide===!0||0===n.length?(n.fadeIn(400),t.start&&t.start(i)):void 0===i.data("flexslider")&&new e.flexslider(this,t)});var i=e(this).data("flexslider");switch(t){case"play":i.play();break;case"pause":i.pause();break;case"stop":i.stop();break;case"next":i.flexAnimate(i.getTarget("next"),!0);break;case"prev":case"previous":i.flexAnimate(i.getTarget("prev"),!0);break;default:"number"==typeof t&&i.flexAnimate(t,!0)}}}(jQuery);