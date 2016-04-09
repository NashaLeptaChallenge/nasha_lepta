var appRootRoutes={views:{news2016Data:{url:"news2016"},news2015Data:{url:"news2015"},news2014Data:{url:"news2014"},aboutData:{url:"about"},gratitudeData:{url:"gratitude"},photosData:{url:"photos"},videosData:{url:"videos"},contactsData:{url:"contacts"},"photo-den-pamatiData":{url:"photo-den-pamati"},"photo-auctionData":{url:"photo-auction"},"photo-nasha-leptaData":{url:"photo-nasha-lepta"},tutorialData:{url:"tutorial"},akciiData:{url:"akcii"},requisitesData:{url:"requisites"}}};angular.module("angularPicasa",[]).directive("picasa",["picasaService",function(a){return{restrict:"A",scope:{picasa:"@"},templateUrl:"templates/vendor/picasa/picasa.html",link:function(b,c,d){void 0!==d.height&&void 0!==d.width?b.size="both":(void 0!==d.height&&(b.size="height"),void 0!==d.width&&(b.size="width")),b.height=d.height,b.width=d.width,void 0!==d.thumbheight&&void 0!==d.thumbwidth?b.thumbSize="both":(void 0!==d.thumbheight&&(b.thumbSize="height"),void 0!==d.thumbwidth&&(b.thumbSize="width")),b.thumbheight=d.thumbheight,b.thumbwidth=d.thumbwidth,b.$watch("picasa",function(){""!==b.picasa&&a.get(b.picasa).then(function(a){b.photoObjects=a,b.current=a[0],b.ready=!0})}),b.setCurrent=function(a){b.current=a},b.move=function(a){var b=c[0].lastElementChild,d=a.clientX-b.offsetLeft,e=b.offsetWidth/2,f=20,g=(d-e)/e*f;g>0&&b.scrollLeft<b.scrollWidth-b.clientWidth&&(b.scrollLeft+=g),0>g&&b.scrollLeft>0&&(b.scrollLeft+=g)}},controller:"GalleryLightboxCtrl"}}]).directive("picasaCarousel",["picasaService",function(a){return{restrict:"A",scope:{picasaCarousel:"@"},templateUrl:"templates/vendor/picasa/picasa-carousel.html",link:function(b,c,d){void 0!==d.height&&void 0!==d.width?b.size="both":(void 0!==d.height&&(b.size="height"),void 0!==d.width&&(b.size="width")),b.height=d.height,b.width=d.width,void 0!==d.thumbheight&&void 0!==d.thumbwidth?b.thumbSize="both":(void 0!==d.thumbheight&&(b.thumbSize="height"),void 0!==d.thumbwidth&&(b.thumbSize="width")),b.thumbheight=d.thumbheight,b.thumbwidth=d.thumbwidth,b.$watch("picasaCarousel",function(){""!==b.picasaCarousel&&a.get(b.picasaCarousel).then(function(a){b.photoObjects=a,b.photoObjects[0].active=!0,b.current=a[0],b.ready=!0})}),b.setCurrent=function(a){b.current=a},b.move=function(a){var b=c[0].lastElementChild,d=a.clientX-b.offsetLeft,e=b.offsetWidth/2,f=20,g=(d-e)/e*f;g>0&&b.scrollLeft<b.scrollWidth-b.clientWidth&&(b.scrollLeft+=g),0>g&&b.scrollLeft>0&&(b.scrollLeft+=g)}}}}]).factory("picasaService",["$http","$q",function(a,b){function c(a){var b=a.media$group.media$thumbnail.length-1,c={thumb:a.media$group.media$thumbnail[b].url,thumbheight:a.media$group.media$thumbnail[b].height,thumbwidth:a.media$group.media$thumbnail[b].width,url:a.media$group.media$content[0].url};return c}function d(a){var d=b.defer(),f=[];return e(a).then(function(a){if(a.feed)for(var b=a.feed.entry,e=0;e<b.length;e++)f.push(c(b[e]));else f.push(c(a.entry));d.resolve(f)}),d.promise}function e(c){var d=b.defer();return a.jsonp(c+"?alt=json&kind=photo&hl=pl&imgmax=912&callback=JSON_CALLBACK").success(function(a,b){d.resolve(a)}),d.promise}return a.defaults.useXDomain=!0,{get:function(a){return d(a)}}}]),angular.module("nashaLeptaApp",["ngResource","ngRoute","firebase","ngCkeditor","angularPicasa","ui.bootstrap","uiGmapgoogle-maps","ngSocial","bootstrapLightbox"]).config(["$routeProvider",function(a){for(var b in appRootRoutes.views)a.when("/"+appRootRoutes.views[b].url,{template:'<nl-article data="'+appRootRoutes.views[b].url+'" auth="auth"></nl-article>'});a.when("/",{redirectTo:"/news2016"}).when("/contacts",{templateUrl:"templates/pages/contacts.html"}).when("/auth",{templateUrl:"templates/pages/auth.html",controller:"AuthCtrl"}).when("/articles",{templateUrl:"templates/pages/articles/list.html",controller:"ArticlesListCtrl"}).when("/articles/new",{templateUrl:"templates/pages/articles/edit.html",controller:"ArticlesCreateCtrl"}).when("/articles/:id",{templateUrl:"templates/pages/articles/show.html",controller:"ArticlesShowCtrl"}).when("/articles/:id/edit",{templateUrl:"templates/pages/articles/edit.html",controller:"ArticlesUpdateCtrl"}).when("/albums",{templateUrl:"templates/pages/albums/list.html",controller:"AlbumsListCtrl"}).when("/albums/new",{templateUrl:"templates/pages/albums/edit.html",controller:"AlbumsCreateCtrl"}).when("/albums/:id",{templateUrl:"templates/pages/albums/show.html",controller:"AlbumsShowCtrl"}).when("/albums/:id/edit",{templateUrl:"templates/pages/albums/edit.html",controller:"AlbumsUpdateCtrl"}).otherwise({redirectTo:"/"})}]).config(["uiGmapGoogleMapApiProvider",function(a){a.configure({v:"3.17",libraries:"weather,geometry,visualization"})}]).config(["LightboxProvider",function(a){a.getImageUrl=function(a){return console.log("typeof imageUrl === String"+("string"==typeof a)),"string"==typeof a?a:(console.log(a),a.url)},a.templateUrl="templates/vendor/lightbox/pop-up-template.html"}]);