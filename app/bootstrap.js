(function() {
  /* This bootstrap script is documented at http://developer.joshfire.com/ */
  var Joshfire = window.Joshfire || {};
  Joshfire.factory = {
    globalConfig: {"DATAVERSION":"1","IMGPROXYURL":"http://imgschemaio.herokuapp.com/proxy","HOSTPORT":"factory.joshfire.com","DATAHOSTPORT":"api.datajs.com","STATSHOSTPORT":"stats.joshfirefactory.com"},
<<<<<<< HEAD
    config: {"app":{"id":"5101690428b7f8020000002c","icon":{"height":250,"width":211,"encodingFormat":"jpeg","contentSize":49638,"contentURL":"http://static.platform.joshfire.com.s3.amazonaws.com/9a/f4def9615fdc30c27c001bd9d1d8ed/Luaka_Bop_logo1.jpg","itemType":"ImageObject","name":"Luaka_Bop_logo1.jpg","url":"/transloadit/9af4def9615fdc30c27c001bd9d1d8ed"},"logo":{"height":250,"width":211,"encodingFormat":"jpeg","contentSize":49638,"contentURL":"http://static.platform.joshfire.com.s3.amazonaws.com/e9/469a8c8e125f704ba4b447724bb8e1/Luaka_Bop_logo1.jpg","itemType":"ImageObject","name":"Luaka_Bop_logo1.jpg","url":"/transloadit/e9469a8c8e125f704ba4b447724bb8e1"},"name":"Luaka Bop","version":"1.0"},"template":{"name":"sleek","version":"1.2.19","options":{"color":"earth","backgroundimage":{"meta":{"frame_count":null,"orientation":"Horizontal (normal)","longitude":null,"latitude":null,"device_software":"Adobe Photoshop CS5.1 Macintosh","device_vendor":null,"device_name":null,"white_balance":null,"shutter_speed":null,"metering_mode":null,"light_value":null,"iso":null,"f_number":null,"focal_length":null,"flash":null,"exposure_time":null,"exposure_mode":null,"exposure_compensation":null,"aperture":null,"keywords":null,"country_code":null,"country":null,"state":null,"city":null,"aspect_ratio":1.4285714285714286,"location":null,"description":null,"title":null,"date_file_modified":"2013/04/08 20:12:01 GMT","date_file_created":"2013/03/25 20:27:26 GMT","date_recorded":null,"height":700,"width":1000},"url":"http://static.platform.joshfire.com.s3.amazonaws.com/5d/f718bf79936b60fa09f9bf1c11fea1/screen5.jpg","original_id":"5df718bf79936b60fa09f9bf1c11fea1","field":"_transloadit_jsonform_genericupload_public_1","type":"image","mime":"image/jpeg","size":511984,"ext":"jpg","basename":"screen5","name":"screen5.jpg","id":"5df718bf79936b60fa09f9bf1c11fea1"},"language":"auto","tabicons":["news","sound","event",null,"video"],"tabs":["News","Music","Tour Dates","Twitter","Videos"]},"hooks":["loaded"]}},
    device: {"type":"phone-web"},
    addons: {}
  };
  Joshfire.factory.config.deploy = {"flags":{"web":true},"type":"gandisimplehosting","id":"51705bdfaa8a980200000068","env":"live"};
  Joshfire.factory.config.datasources = {"main":[{"name":"News","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"News","id":"51705be8c779f7020000003b","db":"feed","col":"rss","outputType":"BlogPosting","runatclient":false,"runtime":"hosted","apikey":"gI8wP10zXXM6dc+EDSSTcs0qp60pcIipICPGnvRBRPegbEXL5/B4BiNoJhlVompb3jV8DT+1XXKcYbQ1MP9Y0g=="}},"action":"addtarget"}},"outputType":"BlogPosting","runatclient":true,"runtime":"browser"},{"name":"Music","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"Music","db":"dailymotion","col":"videos","query":{"filter":{"playlist":"http://www.dailymotion.com/playlist/x2kq73_LuakaBopper_music/"},"options":{}},"runatclient":true,"missingKeys":[],"outputType":"VideoObject","runtime":"browser"}},"action":"addtarget"}},"outputType":"VideoObject","runatclient":true,"runtime":"browser"},{"name":"Tour Dates","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"Tour Dates","id":"51705be8c779f7020000003a","db":"feed","col":"rss","outputType":"BlogPosting","runatclient":false,"runtime":"hosted","apikey":"gI8wP10zXXM6dc+EDSSTcs0qp60pcIipICPGnvRBRPegbEXL5/B4BiNoJhlVompb3jV8DT+1XXKcYbQ1MP9Y0g=="}},"action":"addtarget"}},"outputType":"BlogPosting","runatclient":true,"runtime":"browser"},{"name":"Twitter","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"Twitter","id":"51705be8c779f70200000039","db":"twitter","col":"tweets","outputType":"Article/Status","runatclient":false,"runtime":"hosted","apikey":"gI8wP10zXXM6dc+EDSSTcs0qp60pcIipICPGnvRBRPegbEXL5/B4BiNoJhlVompb3jV8DT+1XXKcYbQ1MP9Y0g=="}},"action":"addtarget"}},"outputType":"Article/Status","runatclient":true,"runtime":"browser"},{"name":"Dailymotion","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"Dailymotion","db":"dailymotion","col":"videos","query":{"filter":{"playlist":"www.dailymotion.com/playlist/x2kq4f_LuakaBopper_videos/"},"options":{}},"runatclient":true,"missingKeys":[],"outputType":"VideoObject","runtime":"browser"}},"action":"addtarget"}},"outputType":"VideoObject","runatclient":true,"runtime":"browser"}]};
  Joshfire.factory.config.addons = [{"name":"splashscreen","options":{"web-mode":"spinner","ios-ipad-landscape":{"id":"546056d1969bf6cb4e4956ab912c8ac2","name":"ipadh.jpg","basename":"ipadh","ext":"jpg","size":556420,"mime":"image/jpeg","type":"image","field":"_transloadit_jsonform_genericupload_public_4","original_id":"546056d1969bf6cb4e4956ab912c8ac2","url":"http://static.platform.joshfire.com.s3.amazonaws.com/54/6056d1969bf6cb4e4956ab912c8ac2/ipadh.jpg","meta":{"width":2048,"height":1536,"date_recorded":null,"date_file_created":null,"date_file_modified":"2013/03/27 18:28:06 GMT","title":null,"description":null,"location":null,"aspect_ratio":1.3333333333333333,"city":null,"state":null,"country":null,"country_code":null,"keywords":null,"aperture":null,"exposure_compensation":null,"exposure_mode":null,"exposure_time":null,"flash":null,"focal_length":null,"f_number":null,"iso":null,"light_value":null,"metering_mode":null,"shutter_speed":null,"white_balance":null,"device_name":null,"device_vendor":null,"device_software":null,"latitude":null,"longitude":null,"orientation":null,"frame_count":null}},"ios-ipad-portrait":{"id":"2e39b1cadcea757d8df833c896d834b0","name":"ipadv.jpg","basename":"ipadv","ext":"jpg","size":502499,"mime":"image/jpeg","type":"image","field":"_transloadit_jsonform_genericupload_public_3","original_id":"2e39b1cadcea757d8df833c896d834b0","url":"http://static.platform.joshfire.com.s3.amazonaws.com/2e/39b1cadcea757d8df833c896d834b0/ipadv.jpg","meta":{"width":1536,"height":2048,"date_recorded":null,"date_file_created":null,"date_file_modified":"2013/03/27 18:28:02 GMT","title":null,"description":null,"location":null,"aspect_ratio":0.75,"city":null,"state":null,"country":null,"country_code":null,"keywords":null,"aperture":null,"exposure_compensation":null,"exposure_mode":null,"exposure_time":null,"flash":null,"focal_length":null,"f_number":null,"iso":null,"light_value":null,"metering_mode":null,"shutter_speed":null,"white_balance":null,"device_name":null,"device_vendor":null,"device_software":null,"latitude":null,"longitude":null,"orientation":null,"frame_count":null}},"ios-phone-4inch-portrait":{"id":"b9b595f45fcf532339a5a13c59c8236c","name":"iphone5s.jpg","basename":"iphone5s","ext":"jpg","size":333924,"mime":"image/jpeg","type":"image","field":"_transloadit_jsonform_genericupload_public_2","original_id":"b9b595f45fcf532339a5a13c59c8236c","url":"http://static.platform.joshfire.com.s3.amazonaws.com/b9/b595f45fcf532339a5a13c59c8236c/iphone5s.jpg","meta":{"width":640,"height":1136,"date_recorded":null,"date_file_created":null,"date_file_modified":"2013/03/27 18:27:58 GMT","title":null,"description":null,"location":null,"aspect_ratio":0.5633802816901409,"city":null,"state":null,"country":null,"country_code":null,"keywords":null,"aperture":null,"exposure_compensation":null,"exposure_mode":null,"exposure_time":null,"flash":null,"focal_length":null,"f_number":null,"iso":null,"light_value":null,"metering_mode":null,"shutter_speed":null,"white_balance":null,"device_name":null,"device_vendor":null,"device_software":null,"latitude":null,"longitude":null,"orientation":null,"frame_count":null}},"ios-phone-portrait":{"id":"572e8003141d0237e1d5cc32b99527f1","name":"iphone.jpg","basename":"iphone","ext":"jpg","size":424366,"mime":"image/jpeg","type":"image","field":"_transloadit_jsonform_genericupload_public_1","original_id":"572e8003141d0237e1d5cc32b99527f1","url":"http://static.platform.joshfire.com.s3.amazonaws.com/57/2e8003141d0237e1d5cc32b99527f1/iphone.jpg","meta":{"width":640,"height":960,"date_recorded":null,"date_file_created":null,"date_file_modified":"2013/03/27 18:27:55 GMT","title":null,"description":null,"location":null,"aspect_ratio":0.6666666666666666,"city":null,"state":null,"country":null,"country_code":null,"keywords":null,"aperture":null,"exposure_compensation":null,"exposure_mode":null,"exposure_time":null,"flash":null,"focal_length":null,"f_number":null,"iso":null,"light_value":null,"metering_mode":null,"shutter_speed":null,"white_balance":null,"device_name":null,"device_vendor":null,"device_software":null,"latitude":null,"longitude":null,"orientation":null,"frame_count":null}}},"hooks":["loaded"]}];
  window.Joshfire = Joshfire;

})();
(function () { (function(a){a.factory.ready=!1;var b=[];a.factory.onReady=function(c){if(a.factory.ready)return c();b.push(c)},a.factory.onDeviceReady=a.factory.onReady;var c=function(a){if(typeof blackberry!="undefined")document.addEventListener("webworksready",a,!1);else if(typeof cordova!="undefined")document.addEventListener("deviceready",a,!1);else if(window.addEventListener)window.addEventListener("load",a,!1);else if(document.addEventListener)document.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a);else if(typeof window.onload!="function")window.onload=a;else{var b=window.onload;window.onload=function(){b(),a()}}};c(function(){a.factory.ready=!0;for(var c=0,d=b.length;c<d;c++)try{b.pop()()}catch(e){}var f=function(){var b=0;if(a.factory.config&&a.factory.config.template&&a.factory.config.template.hooks){b=a.factory.config.template.hooks;for(c=0;c<b.length;c++)if(b[c]==="loaded")return!1}return!0}();try{f&&a.factory.getAddOns("loaded").run()}catch(e){}typeof cordova!="undefined"&&cordova.exec(null,null,"SplashScreen","hide",[])},!1)})(Joshfire);
(function(a,b,c){var d="http://"+c.globalConfig.STATSHOSTPORT,e=function(){return},f=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+"="+encodeURIComponent(a[c]));var f=new Image(1,1);f.src=d+"/pixel.gif?"+b.join("&"),f.onload=function(){e()}},g=function(){return{tz:(new Date).getTimezoneOffset(),url:b.location.toString(),ref:a.referrer,app:c.config.app.id,appv:c.config.app.version,tpl:c.config.template.id,dev:c.device.type,env:(c.config.deploy||{}).env||"preview",dp:(c.config.deploy||{}).id,dpr:(c.config.deploy||{}).type,id:""}};c.stats={},c.stats.event=function(a){var b=g();b.type=a,f(b)},c.stats.event("open"),a.addEventListener&&a.addEventListener("resume",function(){c.stats.event("resume")},!1)})(document,window,Joshfire.factory);
=======
    config: {"app":{"id":"5179009abb693502000000a6","icon":null,"logo":null,"name":"tedxfrance","version":"1.0"},"template":{"name":"tedxregionallens","version":"0.1.2","options":{"language":"fr","url":"http://www.youradvertisement.com/","idwidget":"XXXXXXXXXXXXXXXXXXXXXXXXXX","ganalytics":"UA-XXXXXXXX-X","contactform":"https://docs.google.com/forms/d/XXXXXXXXXXXXXXXXXXXXXXXXXX/viewform"},"hooks":[]}},
    device: {},
    addons: {}
  };
  Joshfire.factory.config.deploy = {"flags":{"web":true},"type":"gandisimplehosting","id":"51b9ad68a0cd2f02000003df","env":"live"};
  Joshfire.factory.config.datasources = {"grabbing":{"name":"TEDx Grabbing","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"TEDx Grabbing","id":"51b9ad6ba95fcf0200000026","db":"graph","col":"grabbing","outputType":"Thing","runatclient":false,"runtime":"hosted","apikey":"F1DdeVWE5p%2B8AQylYgsMlRBiKThtX6E1zr6lEDx6i53zIKqnniwjZyeekAck5/Xw"}},"action":"addtarget"}},"outputType":"Thing","runatclient":true,"runtime":"browser"},"about":{"name":"TEDx About","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"TEDx About","db":"google","col":"spreadsheets","query":{"filter":{"docid":"https://docs.google.com/spreadsheet/pub?key=XXXXXXXXXXXXXXXXXXXXXXXXXX","sheetid":3,"usestdmapping":true},"options":{}},"runatclient":true,"missingKeys":[],"outputType":"Article","runtime":"browser"}},"action":"addtarget"}},"outputType":"Article","runatclient":true,"runtime":"browser"},"blacklist":{"name":"TEDx Blacklist","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"TEDx Blacklist","db":"google","col":"spreadsheets","query":{"filter":{"docid":"https://docs.google.com/spreadsheet/pub?key=XXXXXXXXXXXXXXXXXXXXXXXXXX","sheetid":2,"usestdmapping":true},"options":{}},"runatclient":true,"missingKeys":[],"outputType":"Article","runtime":"browser"}},"action":"addtarget"}},"outputType":"Article","runatclient":true,"runtime":"browser"},"tedxevents":{"name":"TEDx Events","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"TEDx Events","db":"google","col":"spreadsheets","query":{"filter":{"docid":"https://docs.google.com/spreadsheet/pub?key=XXXXXXXXXXXXXXXXXXXXXXXXXX","sheetid":1,"usestdmapping":true},"options":{}},"runatclient":true,"missingKeys":[],"outputType":"Article","runtime":"browser"}},"action":"addtarget"}},"outputType":"Article","runatclient":true,"runtime":"browser"},"youtube":{"name":"Playlist Youtube","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"Playlist Youtube","db":"youtube","col":"videos","query":{"filter":{"playlist":"http://www.youtube.com/playlist?list=XXXXXXXXXXXXXXXXXXXXXXXXXX"},"options":{}},"runatclient":true,"missingKeys":[],"outputType":"VideoObject","runtime":"browser"}},"action":"addtarget"}},"outputType":"VideoObject","runatclient":true,"runtime":"browser"},"tweets":{"name":"TEDx Tweets","db":"operator","col":"updatelinks","query":{"filter":{"datasources":{"main":{"name":"TEDx Tweets","id":"51b9ad6b8cdede020000002e","db":"twitter","col":"tweets","outputType":"Article/Status","runatclient":false,"runtime":"hosted","apikey":"F1DdeVWE5p%2B8AQylYgsMlRBiKThtX6E1zr6lEDx6i53zIKqnniwjZyeekAck5/Xw"}},"action":"addtarget"}},"outputType":"Article/Status","runatclient":true,"runtime":"browser"}};
  Joshfire.factory.config.addons = [{"name":"splashscreen","options":{"web-mode":"spinner"},"hooks":["loaded"]}];
  window.Joshfire = Joshfire;

})();
(function () { var require=function(a,b){var c=require.resolve(a,b||"/"),d=require.modules[c];if(!d)throw new Error("Failed to resolve module "+a+", tried "+c);var e=d._cached?d._cached:d();return e};require.paths=[],require.modules={},require.extensions=[".js",".coffee"],require._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},require.resolve=function(){return function(a,b){function g(a){if(require.modules[a])return a;for(var b=0;b<require.extensions.length;b++){var c=require.extensions[b];if(require.modules[a+c])return a+c}}function h(a){a=a.replace(/\/+$/,"");var b=a+"/package.json";if(require.modules[b]){var d=require.modules[b](),e=d.browserify;if(typeof e=="object"&&e.main){var f=g(c.resolve(a,e.main));if(f)return f}else if(typeof e=="string"){var f=g(c.resolve(a,e));if(f)return f}else if(d.main){var f=g(c.resolve(a,d.main));if(f)return f}}return g(a+"/index")}function i(a,b){var c=j(b);for(var d=0;d<c.length;d++){var e=c[d],f=g(e+"/"+a);if(f)return f;var i=h(e+"/"+a);if(i)return i}var f=g(a);if(f)return f}function j(a){var b;a==="/"?b=[""]:b=c.normalize(a).split("/");var d=[];for(var e=b.length-1;e>=0;e--){if(b[e]==="node_modules")continue;var f=b.slice(0,e+1).join("/")+"/node_modules";d.push(f)}return d}b||(b="/");if(require._core[a])return a;var c=require.modules.path(),d=b||".";if(a.match(/^(?:\.\.?\/|\/)/)){var e=g(c.resolve(d,a))||h(c.resolve(d,a));if(e)return e}var f=i(a,d);if(f)return f;throw new Error("Cannot find module '"+a+"'")}}(),require.alias=function(a,b){var c=require.modules.path(),d=null;try{d=require.resolve(a+"/package.json","/")}catch(e){d=require.resolve(a,"/")}var f=c.dirname(d),g=(Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b})(require.modules);for(var h=0;h<g.length;h++){var i=g[h];if(i.slice(0,f.length+1)===f+"/"){var j=i.slice(f.length);require.modules[b+j]=require.modules[f+j]}else i===f&&(require.modules[b]=require.modules[f])}},require.define=function(a,b){var c=require._core[a]?"":require.modules.path().dirname(a),d=function(a){return require(a,c)};d.resolve=function(a){return require.resolve(a,c)},d.modules=require.modules,d.define=require.define;var e={exports:{}};require.modules[a]=function(){return require.modules[a]._cached=e.exports,b.call(e.exports,d,e,e.exports,c,a),require.modules[a]._cached=e.exports,e.exports}},typeof process=="undefined"&&(process={}),process.nextTick||(process.nextTick=function(){var a=[],b=typeof window!="undefined"&&window.postMessage&&window.addEventListener;return b&&window.addEventListener("message",function(b){if(b.source===window&&b.data==="browserify-tick"){b.stopPropagation();if(a.length>0){var c=a.shift();c()}}},!0),function(c){b?(a.push(c),window.postMessage("browserify-tick","*")):setTimeout(c,0)}}()),process.title||(process.title="browser"),process.binding||(process.binding=function(a){if(a==="evals")return require("vm");throw new Error("No such module")}),process.cwd||(process.cwd=function(){return"."}),require.define("path",function(a,b,c,d,e){function f(a,b){var c=[];for(var d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c}function g(a,b){var c=0;for(var d=a.length;d>=0;d--){var e=a[d];e=="."?a.splice(d,1):e===".."?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var h=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;c.resolve=function(){var a="",b=!1;for(var c=arguments.length;c>=-1&&!b;c--){var d=c>=0?arguments[c]:process.cwd();if(typeof d!="string"||!d)continue;a=d+"/"+a,b=d.charAt(0)==="/"}return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=a.charAt(0)==="/",c=a.slice(-1)==="/";return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),!a&&!b&&(a="."),a&&c&&(a+="/"),(b?"/":"")+a},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(f(a,function(a,b){return a&&typeof a=="string"}).join("/"))},c.dirname=function(a){var b=h.exec(a)[1]||"",c=!1;return b?b.length===1||c&&b.length<=3&&b.charAt(1)===":"?b:b.substring(0,b.length-1):"."},c.basename=function(a,b){var c=h.exec(a)[2]||"";return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return h.exec(a)[3]||""}}),require.define("/devicedetect.js",function(a,b,c,d,e){var f=a("useragent");f.parse.browsers=[{r:new RegExp("(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile"),family:"Chrome Mobile"}].concat(f.parse.browsers);var g={iPad:"tablet","webOS TouchPad":"tablet","Opera Tablet":"tablet",Kindle:"tablet",PlayBook:"tablet",WeTab:"tablet",iPod:"phone",iPhone:"phone",Nokia:"phone",Android:"phone",IEMobile:"phone","Opera Mini":"phone","Opera Mobile":"phone",Blackberry:"phone","Palm Pre":"phone","Palm Blazer":"phone",Fennec:"phone","Chrome Mobile":"phone",GoogleTV:"tv",PhilipsTV:"tv",SamsungTV:"tv"},h=function(a){return a["user-agent"]},i=function(a){return a?a.match(/GoogleTV/)?new f.Agent("GoogleTV"):a.match(/Philips/i)||a.match(/NETTV/i)?new f.Agent("PhilipsTV"):a.match(/SEC_HHP_TV/i)||a.match(/SMART-TV/)?new f.Agent("SamsungTV"):null:null},j=function(a){var b=i(a);b||(b=f.parse(a));var c=b?g[b.family]:"desktop";return c||(c="desktop"),c},k=function(a,b,c){var d;typeof b=="string"?d=b:d=h(b);var e=j(d),f=l(a,e,c);return f},l=function(a,b,c){var d=[];c?b==="desktop"?d=[b,"tablet","phone","tv","object"]:b==="tablet"?d=[b,"desktop","phone","tv","object"]:b==="phone"?d=[b,"desktop","tablet","tv","object"]:b==="tv"?d=[b,"desktop","tablet","phone","object"]:d=[b,"desktop","tablet","phone","tv"]:d=[b];for(var e=0;e<d.length;e++){var f=d[e];for(var g=0;g<a.length;g++){var h=a[g].devices||a[g].device;typeof h=="string"&&(h=[h]);for(var i=0;i<h.length;i++)if(h[i]=="*"||h[i].substring(0,f.length)==f)return{template:a[g],device:h[i],devicetype:f}}}return undefined};c.getDeviceType=j,c.pickTemplate=k,c.pickTemplateFromFormfactor=l,b&&(b.exports={getDeviceType:j,pickTemplate:k,pickTemplateFromFormfactor:l})}),require.define("/node_modules/useragent/package.json",function(a,b,c,d,e){b.exports={main:"./index.js"}}),require.define("/node_modules/useragent/index.js",function(a,b,c,d,e){b.exports=a("./lib/useragent")}),require.define("/node_modules/useragent/lib/useragent.js",function(a,b,c,d,e){function g(a,b,c,d,e){this.family=a||"Other",this.major=b||"0",this.minor=c||"0",this.patch=d||"0",this.os=e||"Other"}function h(a,b){if(!a)return new g;var c,d,e,f=h.browsers,i=h.os,j=h.ua_length,k=h.os_length;for(e=0;e<j;e++)if(c=a.match(f[e].r)){var l=f[e];l.family&&(c[1]=l.family.replace("$1",c[1])),l.major&&(c[2]=l.major);break}for(e=0;e<k;e++)if(d=a.match(i[e].r)){d[1]=i[e].os||d[1];break}return c=c||[],d=d||[],b&&b.indexOf("Chrome/")!==-1&&a.indexOf("chromeframe")!==-1&&(c[1]="Chrome Frame ("+c[1]+" "+c[2]+")",parser=h(b),c[2]=parser.major,c[3]=parser.minor,c[4]=parser.patch),new g(c[1],c[2],c[3],c[4],d[1])}function i(b){b&&a("./update")(function(a,b){if(a)return;f=b,browsers=f.browser,oss=f.os,ua_length=browsers.length,os_length=oss.length})}function j(a){var b=(a||"").toLowerCase(),c={webkit:!1,mozilla:!1,chrome:!1,safari:!1,mobile_safari:!1,opera:!1,ie:!1,firefox:!1,version:(b.match(j.versionRE)||[0,"0"])[1]};return~b.indexOf("webkit")?(c.webkit=!0,~b.indexOf("chrome")?c.chrome=!0:~b.indexOf("safari")&&(c.safari=!0,~b.indexOf("mobile")&&~b.indexOf("apple")&&(c.mobile_safari=!0))):~b.indexOf("opera")?c.opera=!0:~b.indexOf("mozilla")&&b.indexOf("compatible")<0?(c.mozilla=!0,~b.indexOf("firefox")&&(c.firefox=!0)):~b.indexOf("msie")&&(c.ie=!0),c}function k(a){var b=a.split(" / "),c=b[0].split(" "),d=c[1].split(".");return new g(c[0],d[0],d[1],c.length==3?partitition[2]:d[2],b.length==2?b[1]:null)}function l(a){return new g(a.family,a.major,a.minor,a.patch,a.os)}function m(a,b){var c=a+b,d=m.lookup[c];return d?d:m.lookup[c]=h(a,b)}var f=a("./agents");g.prototype.toAgent=function(){var b=this.family,c=this.toVersion();return c&&(b+=" "+c),b},g.prototype.toString=function n(){var a=this.toAgent(),b=this.os!=="Other"?this.os:!1;return a+(b?" / "+b:"")},g.prototype.toVersion=function(){var b="";return this.major&&(b+=this.major,this.minor&&(b+="."+this.minor,this.patch&&(b+=(isNaN(+this.patch)?" ":".")+this.patch))),b},g.prototype.toJSON=function(){return JSON.stringify({family:this.family,major:this.major,minor:this.minor,patch:this.patch,os:this.os})},h.browsers=f.browser,h.os=f.os,h.ua_length=h.browsers.length,h.os_length=h.os.length,j.versionRE=/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/,m.lookup={},i.version="1.0.5",i.Agent=g,i.parse=h,i.lookup=m,i.fromString=k,i.fromJSON=l,i.is=j,b.exports=i}),require.define("/node_modules/useragent/lib/agents.js",function(a,b,c,d,e){c.browser=[{r:new RegExp("^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii"),family:"Wii"},{r:new RegExp("(SeaMonkey|Fennec|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)")},{r:new RegExp("(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)"),family:"Firefox ($1)"},{r:new RegExp("(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)"),family:"Firefox Beta"},{r:new RegExp("(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)"),family:"Firefox Beta"},{r:new RegExp("(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"),family:"Firefox ($1)"},{r:new RegExp("(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)"),family:"MicroB"},{r:new RegExp("(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?")},{r:new RegExp("(Flock)/(\\d+)\\.(\\d+)(b\\d+?)")},{r:new RegExp("(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(Fennec)/(\\d+)\\.(\\d+)(pre)")},{r:new RegExp("(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)"),family:"Netscape"},{r:new RegExp("(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)"),family:"Netscape"},{r:new RegExp("(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)"),family:"Netscape"},{r:new RegExp("(MyIBrow)/(\\d+)\\.(\\d+)"),family:"My Internet Browser"},{r:new RegExp("(Opera Tablet).*Version\\/(\\d+)\\.(\\d+)(?:\\.(\\d+))?")},{r:new RegExp("(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)"),family:"Opera Mobile"},{r:new RegExp("(Opera Mini)/(\\d+)\\.(\\d+)")},{r:new RegExp("(Opera)/9.80.*Version\\/(\\d+)\\.(\\d+)(?:\\.(\\d+))?")},{r:new RegExp("(webOS)/(\\d+)\\.(\\d+)"),family:"Palm webOS"},{r:new RegExp("(luakit)"),family:"LuaKit"},{r:new RegExp("(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)")},{r:new RegExp("(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)"),family:"Swiftfox"},{r:new RegExp("(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)"),family:"Swiftfox"},{r:new RegExp("rekonq"),family:"Rekonq"},{r:new RegExp("(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?"),family:"Conkeror"},{r:new RegExp("(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)"),family:"Konqueror"},{r:new RegExp("(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(WeTab)-Browser")},{r:new RegExp("(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)"),family:"webOS TouchPad"},{r:new RegExp("(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)"),family:"Comodo Dragon"},{r:new RegExp("(YottaaMonitor)")},{r:new RegExp("(Kindle)/(\\d+)\\.(\\d+)")},{r:new RegExp("(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)"),family:"Chrome Mobile"},{r:new RegExp("(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Vodafone|NetFront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris)/(\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|Vodafone|NetFront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT)/(\\d+)\\.(\\d+)")},{r:new RegExp("(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(iCab|Lunascape|Opera|Android) (\\d+)\\.(\\d+)\\.?(\\d+)?")},{r:new RegExp("(IEMobile)[ /](\\d+)\\.(\\d+)"),family:"IE Mobile"},{r:new RegExp("(MSIE) (\\d+)\\.(\\d+).*XBLWP7"),family:"IE Mobile"},{r:new RegExp("(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?")},{r:new RegExp("(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?"),family:"Obigo"},{r:new RegExp("(MAXTHON|Maxthon) (\\d+)\\.(\\d+)"),family:"Maxthon"},{r:new RegExp("(Maxthon|MyIE2|Uzbl|Shiira)")},{r:new RegExp("(PLAYSTATION) (\\d+)"),family:"PlayStation"},{r:new RegExp("(PlayStation Portable)[^\\d]+(\\d+).(\\d+)")},{r:new RegExp("(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(POLARIS)/(\\d+)\\.(\\d+)"),family:"Polaris"},{r:new RegExp("(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)"),family:"Bon Echo"},{r:new RegExp("(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(iPhone) OS (\\d+)_(\\d+)(?:_(\\d+))?")},{r:new RegExp("(iPad).+ OS (\\d+)_(\\d+)(?:_(\\d+))?")},{r:new RegExp("(Avant)")},{r:new RegExp("(Nokia)[EN]?(\\d+)")},{r:new RegExp("(Black[bB]erry).+Version\\/(\\d+)\\.(\\d+)\\.(\\d+)"),family:"Blackberry"},{r:new RegExp("(Black[bB]erry)\\s?(\\d+)"),family:"Blackberry"},{r:new RegExp("(OmniWeb)/v(\\d+)\\.(\\d+)")},{r:new RegExp("(Blazer)/(\\d+)\\.(\\d+)"),family:"Palm Blazer"},{r:new RegExp("(Pre)/(\\d+)\\.(\\d+)"),family:"Palm Pre"},{r:new RegExp("(Links) \\((\\d+)\\.(\\d+)")},{r:new RegExp("(QtWeb) Internet Browser/(\\d+)\\.(\\d+)")},{r:new RegExp("(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?")},{r:new RegExp("(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/"),family:"Safari"},{r:new RegExp("(Safari)/\\d+")},{r:new RegExp("(OLPC)/Update(\\d+)\\.(\\d+)")},{r:new RegExp("(OLPC)/Update()\\.(\\d+)")},{r:new RegExp("(SamsungSGHi560)"),family:"Samsung SGHi560"},{r:new RegExp("^(SonyEricssonK800i)"),family:"Sony Ericsson K800i"},{r:new RegExp("(Teleca Q7)")},{r:new RegExp("(MSIE) (\\d+)\\.(\\d+)"),family:"IE"},{r:new RegExp("(Thunderbird)/(\\d+)\\.(\\d+)\\.?(\\d+)?")},{r:new RegExp("(Wget)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)")},{r:new RegExp("(curl)/(\\d+)\\.(\\d+)\\.(\\d+)"),family:"cURL"}],c.os=[{r:new RegExp("(Windows (?:NT 5\\.2|NT 5\\.1))"),os:"Windows XP"},{r:new RegExp("(XBLWP7)"),os:"Windows Phone OS"},{r:new RegExp("(Windows NT 6\\.1)"),os:"Windows 7"},{r:new RegExp("(Windows NT 6\\.0)"),os:"Windows Vista"},{r:new RegExp("(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)")},{r:new RegExp("(Windows NT 6\\.2)"),os:"Windows 8"},{r:new RegExp("(Windows NT 5\\.0)"),os:"Windows 2000"},{r:new RegExp("(Windows Phone OS) (\\d+)\\.(\\d+)")},{r:new RegExp("(Windows ?Mobile)"),os:"Windows Mobile"},{r:new RegExp("(WinNT4.0)"),os:"Windows NT 4.0"},{r:new RegExp("(Win98)"),os:"Windows 98"},{r:new RegExp("(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?")},{r:new RegExp("(Android) Donut")},{r:new RegExp("(Android) Eclair")},{r:new RegExp("(Android) Froyo")},{r:new RegExp("(Android) Gingerbread")},{r:new RegExp("(Android) Honeycomb")},{r:new RegExp("(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?")},{r:new RegExp("(?:PPC|Intel) (Mac OS X)")},{r:new RegExp("(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?"),os:"iOS"},{r:new RegExp("(iPhone|iPad|iPod); Opera"),os:"iOS"},{r:new RegExp("(iPhone|iPad|iPod).*Mac OS X"),os:"iOS"},{r:new RegExp("(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?"),os:"Chrome OS"},{r:new RegExp("(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?")},{r:new RegExp("(Linux Mint)(?:/(\\d+))?")},{r:new RegExp("(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?")},{r:new RegExp("(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)"),os:"Symbian OS"},{r:new RegExp("(Symbian/3)"),os:"Symbian^3"},{r:new RegExp("(Series 60|SymbOS|S60)"),os:"Symbian OS"},{r:new RegExp("(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?"),os:"BlackBerry OS"},{r:new RegExp("(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?"),os:"BlackBerry OS"},{r:new RegExp("(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)"),os:"BlackBerry Tablet OS"},{r:new RegExp("(Play[Bb]ook)"),os:"BlackBerry Tablet OS"},{r:new RegExp("(Black[Bb]erry)"),os:"Blackberry OS"},{r:new RegExp("(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?"),os:"webOS"},{r:new RegExp("(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)")},{r:new RegExp("(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)")},{r:new RegExp("(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)")},{r:new RegExp("(Linux|BSD)")},{r:new RegExp("(Red Hat)")}]});

Joshfire.factory.device.type = require("/devicedetect.js").getDeviceType(window.navigator.userAgent);})();
(function () { (function(J) {
  J.factory.ready = false;
  var callbacks = [];
  J.factory.onReady = function(f) {
    if (J.factory.ready) return f();
    callbacks.push(f);
  };

  //Deprecated
  J.factory.onDeviceReady = J.factory.onReady;

  var addLoadListener = function(func) {
    if (typeof blackberry != "undefined") {
      document.addEventListener("webworksready", func, false);
    } else if (typeof cordova != "undefined") {
      document.addEventListener("deviceready", func, false);
    } else if (window.addEventListener) {
      window.addEventListener("load", func, false);
    } else if (document.addEventListener) {
      document.addEventListener("load", func, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", func);
    } else if (typeof window.onload != "function") {
      window.onload = func;
    } else {
      var oldonload = window.onload;
      window.onload = function() {
        oldonload();
        func();
      };
    }
  };

  addLoadListener(function() {
    // we're ready
    J.factory.ready = true;

    // Trigger all "onReady" event listeners
    for (var i=0,l=callbacks.length;i<l;i++) {
      try {
        callbacks.pop()();
      } catch (e) {}
    }

    // Trigger the "loaded" hook unless the template's configuration
    // says the template does it on its own
    var triggerLoadedHook = (function () {
      var hooks = 0;
      if (J.factory.config && J.factory.config.template &&
        J.factory.config.template.hooks) {
        hooks = J.factory.config.template.hooks;
        for (i=0; i<hooks.length; i++) {
          if (hooks[i] === 'loaded') return false;
        }
      }
      return true;
    })();
    
    try {
      if (triggerLoadedHook) J.factory.getAddOns('loaded').run();
    } catch (e) {}

    //Here we have common loaded hooks for all apps
    if (typeof cordova!="undefined") cordova.exec(null, null, "SplashScreen", "hide", []);
    

  }, false);

})(Joshfire);(function(document, window, F) {

  var endpoint = "http://"+F.globalConfig.STATSHOSTPORT;

  var _void = function() { return; };

  var track = function(params) {
    var p = [];
    for (var k in params) {
      if (params.hasOwnProperty(k)) {
        p.push(k+"="+encodeURIComponent(params[k]));
      }
    }
    var i = new Image(1, 1);
    i.src = endpoint+"/pixel.gif?"+p.join("&");
    i.onload = function() { _void(); }; 
  };

  var getDefaultParams = function() {
    return {
      "tz":(new Date()).getTimezoneOffset(),
      "url":window.location.toString(),
      "ref":document.referrer,
      "app":F.config.app.id,
      "appv":F.config.app.version,
      "tpl":F.config.template.id,
      "dev":F.device.type,
      "env":(F.config.deploy||{}).env||"preview",
      "dp":(F.config.deploy||{}).id,
      "dpr":(F.config.deploy||{}).type,
      "id":"" //Disabled because of Apple's new UDID policy (typeof(DeviceInfo) == 'object' && DeviceInfo.uuid)?"d"+DeviceInfo.uuid:""
    };
  };

  F.stats = {};
  F.stats.event = function(ev) {
    var params=getDefaultParams();
    params.type=ev;
    track(params);
  };

  F.stats.event("open");

  if (document.addEventListener) {
    document.addEventListener("resume", function() {
      F.stats.event("resume");
    }, false);
  }


})(document, window, Joshfire.factory);
>>>>>>> dc27ff65b8d8c4f1b2f020a4b15555fe373d79e5
/**
 * almond 0.0.3 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
<<<<<<< HEAD

/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

var requirejs,require,define;(function(e){function o(e,t){if(e&&e.charAt(0)==="."&&t){t=t.split("/"),t=t.slice(0,t.length-1),e=t.concat(e.split("/"));var n,r;for(n=0;r=e[n];n++)if(r===".")e.splice(n,1),n-=1;else if(r===".."){if(n===1&&(e[2]===".."||e[0]===".."))break;n>0&&(e.splice(n-1,2),n-=2)}e=e.join("/")}return e}function u(t,n){return function(){return s.apply(e,r.call(arguments,0).concat([t,n]))}}function a(e){return function(t){return o(t,e)}}function f(e){return function(n){t[e]=n}}function l(r){if(n.hasOwnProperty(r)){var s=n[r];delete n[r],i.apply(e,s)}return t[r]}function c(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=o(e.slice(0,i),t),e=e.slice(i+1),r=l(n),r&&r.normalize?e=r.normalize(e,a(t)):e=o(e,t)):e=o(e,t),{f:n?n+"!"+e:e,n:e,p:r}}var t={},n={},r=[].slice,i,s;if(typeof define=="function")return;i=function(r,i,s,o){var a=[],h,p,d,v,m,g;o||(o=r);if(typeof s=="function"){!i.length&&s.length&&(i=["require","exports","module"]);for(v=0;v<i.length;v++){g=c(i[v],o),d=g.f;if(d==="require")a[v]=u(r);else if(d==="exports")a[v]=t[r]={},h=!0;else if(d==="module")p=a[v]={id:r,uri:"",exports:t[r]};else if(t.hasOwnProperty(d)||n.hasOwnProperty(d))a[v]=l(d);else{if(!g.p)throw r+" missing "+d;g.p.load(g.n,u(o,!0),f(d),{}),a[v]=t[d]}}m=s.apply(t[r],a),r&&(p&&p.exports!==e?t[r]=p.exports:h||(t[r]=m))}else r&&(t[r]=s)},requirejs=s=function(t,n,r,o){return typeof t=="string"?l(c(t,n).f):(t.splice||(n.splice?(t=n,n=arguments[2]):t=[]),o?i(e,t,n,r):setTimeout(function(){i(e,t,n,r)},15),s)},s.config=function(){return s},require||(require=s),define=function(e,t,r){t.splice||(r=t,t=[]),define.unordered?n[e]=[e,t,r]:i(e,t,r)},define.amd={jQuery:!0}})(),define("runtime/hosted/almond",function(){}),define("datajslib",{normalize:function(e,t){return e.match(/^runtime\-browser/)?e:t("runtime-browser/"+e)},load:function(e,t,n,r){t([e],function(e){n(e)})}}),define("runtime-browser/utils/getthumbnail",["require"],function(e){var t=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},n=function(e,n,r){if(!e)return null;var i=function(e){if(!e)return!1;var t=e.width||0,i=e.height||0;return(!t||!n||t>=n)&&(!i||!r||i>=r)},s=function(e,t){if(!t)return!0;if(!e)return!1;var n=e.width||0,r=e.height||0,i=n&&r&&(n<=t.width||!t.width)&&(r<=t.height||!t.height);return i},o=function(e,t){return!s(e,t)},u=[];e["@type"]==="ImageObject"&&u.push(e),e.thumbnail&&(t(e.thumbnail)?u=u.concat(e.thumbnail):u.push(e.thumbnail)),e.image&&(u.push(e.image),e.image.thumbnail&&(t(e.image.thumbnail)?u=u.concat(e.image.thumbnail):u.push(e.image.thumbnail)));if(u.length===0)return null;var a=0,f=null,l=null;for(a=0;a<u.length;a++)f=u[a],i(f)&&s(f,l)&&(l=f);if(l)return l;l=u[0];for(a=0;a<u.length;a++)f=u[a],o(f,l)&&(l=f);return l};return n}),define("runtime-browser/utils/getthumbnailurl",["datajslib!utils/getthumbnail"],function(e){var t=function(t,n,r){var i=e(t,n,r)||{};return i.contentURL||i.contentUrl||""};return t}),define("runtime-browser/runtime",{name:"browser"}),define("runtime-browser/errors/error",[],function(){var e=function(e,t){this.name="error",this.message=e,this.err=t,Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,arguments.callee)};return e.prototype=new Error,e}),define("runtime-browser/errors/internalerror",["./error"],function(e){var t=function(t,n){e.call(this,t,n),this.name="internal error"};return t.prototype=new e,t}),define("runtime-browser/errors/notfounderror",["./error"],function(e){var t=function(t,n){e.call(this,t,n),this.name="not found"};return t.prototype=new e,t}),define("runtime-browser/collection",["require","require","datajslib!runtime","datajslib!errors/internalerror","datajslib!errors/notfounderror"],function(e,t,n,r,i){var s=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},o={getCollection:function(e,t){return e?new u(e,t):{desc:{},name:"",find:function(e,t){return t(null,{entries:[]})},onLoaded:function(e){e()},getDesc:function(e){e(null,{})},getOutputType:function(){return"Thing"}}}},u=function(e,o){var u=e.query,a=this,f=[],l=!1,c=null,h="datajslib!collection.",p=null,d=function(e){var t=s({},u);return t=s(t,e),t.filter||(t.filter={}),c.setDefaultValues&&c.setDefaultValues(t.filter),t};a.onLoaded=function(e){l?e():f.push(e)},a.find=function(t,o){a.onLoaded(function(){if(p)return o(p);if(!c)return o(new i("Collection does not exist.",e));var u=d(t),f=10800;n.mongodb&&typeof n.mongodb.cacheMaxAge!="undefined"&&(f=n.mongodb.cacheMaxAge),c.desc&&typeof c.desc.maxAge!="undefined"&&(f=c.desc.maxAge);var l=f;c.getMaxAge?l=c.getMaxAge(u):t.nocache&&(l=0);var h={db:e.db,col:e.col,query:s({},u)};h.query.nocache&&(h.query.nocache=!1),c.cache&&l>0?c.cache.get(h,l,function(e,t){if(e)return o(new r("No way to query the cache",e));if(t)return o(null,t);a._find(u,function(e,t){return e?o(e):(c.cache.set(h,t,l),o(null,t))})}):a._find(u,o)})},a._find=function(t,n){if(c.find)c.find(t,function(r,i){return i&&!i.name&&e.name&&(i.name=e.name),i&&!i.maxAge&&(c.getMaxAge?i.maxAge=c.getMaxAge(t):c.desc&&c.desc.maxAge&&(i.maxAge=c.desc.maxAge)),n(r,i)});else{if(!c.fetch||!c.process)return n(new r('Invalid collection (no "fetch", "process", and/or "find")',e));c.fetch(t,function(r,i){if(r)return n(r,null);c.process(i,t,function(r,i){return i&&!i.name&&e.name&&(i.name=e.name),i&&!i.maxAge&&(c.getMaxAge?i.maxAge=c.getMaxAge(t):c.desc&&c.desc.maxAge&&(i.maxAge=c.desc.maxAge)),n(r,i)})})}},a.process=function(e,t,n){a.onLoaded(function(){if(p)return n(p);if(!c)return n("Collection does not exist.");c.process?c.process(e,d(t),n):n('Collection does not have a "process" method.')})},a.fetch=function(e,t){a.onLoaded(function(){if(p)return t(p);if(!c)return t("Collection does not exist.");c.fetch?c.fetch(d(e),t):t(null,null)})},a.updateInputOptions=function(e,t){a.onLoaded(function(){if(p)return t(p);if(!c)return t("Collection does not exist.");var n={};for(var r in e)r!=="filter"&&r!=="graph"&&e.hasOwnProperty(r)&&(n[r]=e[r]);if(!c.updateInputOptions)return t(null,n);c.updateInputOptions(n,t)})},a.canBeFetched=function(){return c&&!p&&c.fetch},a.canBeProcessed=function(){return c&&!p&&c.process},a.getDesc=function(e){a.onLoaded(function(){return p?e(p):c?(c.setDefaultValues&&c.setDefaultValues(u.filter),c.getDesc?e(null,c.getDesc(u)):e(null,c.desc)):e("Collection does not exist.")})},a.getOutputType=function(){return e.outputType?e.outputType:"Thing"},u=u||{},u.filter||(u.filter={}),!o&&e.db==="operator"?n.name!=="hosted"&&!e.runatclient&&(!e.runtime||e.runtime==="hosted")?h+="proxy":h+="graph":e.runatclient||e.runtime!=="hosted"?h+="client":h+="proxy",t([h],function(t){t.getCollection(e,function(e,t){p=e,c=t,l=!0;for(var n=0;n<f.length;n++)f[n]();f=[]})})};return o}),define("runtime-browser/collection.graph",["datajslib!collection","datajslib!runtime"],function(e,t){var n={},r=Object.keys||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},i=Array.isArray||function(e){return toString.call(e)=="[object Array]"},s=function(e,t,r){if(e==null)return;if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(i in e&&t.call(r,e[i],i,e)===n)return}else for(var o in e)if(hasOwnProperty.call(e,o)&&t.call(r,e[o],o,e)===n)return},o=function(e){return e===Object(e)},u=function(){var e=function(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n+=1)t(e[n],n,e)},t=function(t,n){if(t.map)return t.map(n);var r=[];return e(t,function(e,t,i){r.push(n(e,t,i))}),r},n=function(t,n,r){if(!t.length)return r();var i=0;e(t,function(e){n(e,function(e){e?(r(e),r=function(){}):(i+=1,i===t.length&&r())})})},r=function(e){return function(){var t=Array.prototype.slice.call(arguments);return e.apply(null,[n].concat(t))}},i=function(e,n,r,i){var s=[];n=t(n,function(e,t){return{index:t,value:e}}),e(n,function(e,t){r(e.value,function(n,r){s[e.index]=r,t(n)})},function(e){i(e,s)})};return r(i)}(),a=function(e){var n=this;this.counter=0,this.nodes={};var r=function(u,a){if(n.nodes[u])return n.nodes[u];var l=new f(u,a,n.nodes);return n.nodes[u]=l,t.name!=="hosted"&&!a.runatclient&&(!a.runtime||a.runtime==="hosted")?l:!a.query||!a.query.filter?l:(s(a.query.filter.datasources,function(t,u){var f=null,c=null;if(i(t))l.inputNodes[u]=[],s(t,function(i,s){var f="_:"+ ++n.counter,c=null;if(o(i))c=r(f,i),l.inputNodes[u].push(c);else{f=i,c=n.nodes[f];if(c)i=c.datasource;else{i=a.query.filter.datasources[f]||e.query.filter.datasources[f]||(e.query.graph?e.query.graph[f]:null);if(!i)throw new Error('Missing datasource "'+f+'" detected');c=r(f,i)}t[s]=i,l.inputNodes[u].push(c)}});else if(o(t))f="_:"+ ++n.counter,l.inputNodes[u]=r(f,t);else{f=t,c=n.nodes[f];if(!c){t=a.query.filter.datasources[f]||e.query.filter.datasources[f]||(e.query.graph?e.query.graph[f]:null);if(!t)throw new Error('Missing datasource "'+f+'" detected');a.query.filter.datasources[u]=t,c=r(f,t)}l.inputNodes[u]=c}}),l)};this.finalNode=r("_:final",JSON.parse(JSON.stringify(e)))};a.prototype.find=function(e,t){var n=this;if(!this.finalNode)return t("No data source to retrieve");s(this.nodes,function(e){e.reset()});var r={};s(e,function(e,t){if(t==="graph"||t==="filter")return;r[t]=e}),this.finalNode.prepare(),this.finalNode.find(r,function(e,r){return s(n.nodes,function(e){e.reset()}),t(e,r)})};var f=function(e,t,n){this.id=e,this.graphNodes=n,this.datasource=t,this.inputNodes={},this.reset()};return f.prototype.reset=function(){this.err=null,this.data=null,this.running=!1,this.occurrences=0,this.doneCallbacks=[],this.collection=null},f.prototype.prepare=function(){var t=this;this.occurrences+=1,this.occurrences===1&&(this.collection=e.getCollection(this.datasource,!0));if(this.occurrences>1e3)throw new Error("Infinite loop detected while preparing datasource execution");s(this.inputNodes,function(e){i(e)?s(e,function(e){e.prepare()}):e.prepare()})},f.prototype.onDone=function(e){this.doneCallbacks.push(e)},f.prototype.find=function(e,t){var n=this,o=function(e,t){n.running=!1,n.err=e,n.data=t,s(n.doneCallbacks,function(e){var t=null;n.occurrences>1?t=JSON.parse(JSON.stringify(n.data)):t=n.data,e(n.err,t)}),n.doneCallbacks=[],n.occurrences===0&&(n.err=null,n.data=null)},a=function(t,r){var s=n.inputNodes[t];i(s)?u(s,function(t,r){n.collection.updateInputOptions(e,function(e,n){if(e)return r(e,null);t.find(n,r)})},r):n.collection.updateInputOptions(e,function(e,t){if(e)return r(e);s.find(t,r)})};this.onDone(function(e,r){return n.occurrences-=1,t(e,r)});if(this.running){if(this.occurrences<=1)throw new Error("Node is executed more than expected");return}if(this.err||this.data)return o(this.err,this.data);this.running=!0;if(this.datasource.db==="operator"){if(!this.inputNodes)return o(null,{entries:[]});this.collection.fetch(e,function(t,i){if(t)return o(t);i!==null?n.collection.process(i,e,function(e,t){return t&&!t.maxAge&&s(i,function(e){e.maxAge&&(!t.maxAge||e.maxAge<t.maxAge)&&(t.maxAge=e.maxAge)}),o(e,t)}):u(r(n.inputNodes),a,function(t,i){if(t)return o(t);var u={};s(r(n.inputNodes),function(e,t){u[e]=i[t]}),n.collection.process(u,e,function(e,t){return t&&!t.maxAge&&s(u,function(e){e&&e.maxAge&&(!t.maxAge||e.maxAge<t.maxAge)&&(t.maxAge=e.maxAge)}),o(e,t)})})})}else this.collection.find(e,o)},{getCollection:function(e,t){var n=new a(e);return t(null,n)}}}),define("runtime-browser/collection.client",["require"],function(e){var t="databases/";return{getCollection:function(n,r){var i=n.db,s=n.col;e([t+i+"/"+s,"datajslib!jsonform-defaults"],function(e,t){return e=e||{},e.setDefaultValues=function(n){var r=(e.GetDesc?e.getDesc():e.desc)||{},i=r.options||{},s=i.schema||{};s.properties||(s={properties:s}),t.setDefaultValues(n,s)},r(null,e)})}}}),define("databases/operator/updatelinks",[],function(){var e=/<a\s[^>]*>/gi,t=/<\/a\s*>/gi;return{desc:{datasources:{main:{title:"Input",multiple:!1}},options:{action:{type:"string",title:"Requested action","default":"addtarget","enum":["addtarget","addtargetnojs","remove"]}},form:["datasources.main",{key:"action",titleMap:{addtarget:"Force links to open in a new window (with a location bar)",addtargetnojs:"Force links to open in a new window (no location bar)",remove:"Remove links (keeping link titles)"}}],runtimes:["hosted","browser","nodejs","win8"]},process:function(e,t,n){var r=null,i=0;t=t||{},e&&e.main&&(e=e.main);if(!e||!e.entries||!e.entries.length)return n(null,{entries:[]});r=this.desc.options.action["default"],t.filter&&t.filter.action&&(r=t.filter.action);for(i=0;i<e.entries.length;i++)this.updateItemLinks(e.entries[i],r);n(null,e)},updateItemLinks:function(e,t){if(!e)return;e.articleBody&&(e.articleBody=this.updateHtml(e.articleBody,t)),e.content&&(e.content=this.updateHtml(e.content,t))},updateHtml:function(n,r){return r==="remove"?(n=n.replace(e,""),n=n.replace(t,"")):r==="addtarget"?n=n.replace(e,function(e,t,n,r){return'<a target="_blank" onclick="window.open(this.href, this.target, \'location=yes\');return false;" '+e.substring(3)}):n=n.replace(e,function(e,t,n,r){return'<a target="_blank" '+e.substring(3)}),n}}}),define("runtime-browser/collection.proxy",[],function(){var e=Joshfire.factory.globalConfig,t=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},n=function(){var e=0,t=document.getElementsByTagName("head")[0];return{get:function(n,r,i,s){var o=null,u=null,a=null,f=!1,l=!1,c=null,h="json"+ ++e,p=function(){if(l)return;l=!0;try{a.onload=null,a.onreadystatechange=null,a.onerror=null,a.parentNode&&a.parentNode.removeChild(a)}catch(e){}},d=function(e,t){if(f)return;f=!0,c&&clearTimeout(c),s(e,t);try{delete Joshfire.datajs[h]}catch(n){}Joshfire.datajs[h]=null};if(!n)return s({status:400,message:"No url to request"});o=n.indexOf("?")!==-1?"&":"?",r=r||{};for(u in r)r.hasOwnProperty(u)&&(o+=encodeURIComponent(u)+"="+encodeURIComponent(r[u])+"&");return o+="callback=Joshfire.datajs."+h,Joshfire.datajs=Joshfire.datajs||{},Joshfire.datajs[h]=function(e){d(null,e)},a=document.createElement("script"),a.src=n+o,a.async=!0,a.onload=a.onreadystatechange=function(){(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"||this.readyState===4)&&p()},a.onerror=function(e){p(),d({status:500,message:"Invalid script received"},null)},t.appendChild(a),c=setTimeout(function(){p(),d({status:500,message:"Timeout exceeded"})},i*1e3),h}}}(),r=function(r){var s=r.query||{},o=r.db,u=r.col,a=r.id,f=r.apikey;this.find=function(r,i){var l=this,c={},h=null;t(c,s),t(c,r),c.apikey=f,a?h="http://"+e.DATAHOSTPORT+"/api/"+e.DATAVERSION+"/feed/ds/"+a:(c.filter&&(c.filter=JSON.stringify(c.filter)),h="http://"+e.DATAHOSTPORT+"/api/"+e.DATAVERSION+"/feed/"+o+"/"+u),n.get(h,c,30,function(e,t){return t&&!t.name&&l.name&&(t.name=l.name),e?i(e,t):t&&t.error?i(t.error):i(null,t)})},this.getDesc=function(e){i.getCollectionDesc(o,u,s,e)}},i={getCollection:function(e,t){var n=new r(e);return t(null,n)},getCollectionDesc:function(r,i,s,o){var u={},a=null;s&&t(u,s),u.filter&&(u.filter=JSON.stringify(u.filter)),a="http://"+e.DATAHOSTPORT+"/api/"+e.DATAVERSION+"/collection/"+r+"/"+i,n.get(a,u,30,o)}};return i}),define("runtime-browser/jquery",[],function(){function _(e){var t=e.length,n=g.type(e);return g.isWindow(e)?!1:e.nodeType===1&&t?!0:n==="array"||n!=="function"&&(t===0||typeof t=="number"&&t>0&&t-1 in e)}function P(e){var t=D[e]={};return g.each(e.match(b)||[],function(e,n){t[n]=!0}),t}function j(e,t,n,r){if(!g.acceptData(e))return;var i,s,o=g.expando,u=typeof t=="string",f=e.nodeType,l=f?g.cache:e,c=f?e[o]:e[o]&&o;if((!c||!l[c]||!r&&!l[c].data)&&u&&n===undefined)return;c||(f?e[o]=c=a.pop()||g.guid++:c=o),l[c]||(l[c]={},f||(l[c].toJSON=g.noop));if(typeof t=="object"||typeof t=="function")r?l[c]=g.extend(l[c],t):l[c].data=g.extend(l[c].data,t);return i=l[c],r||(i.data||(i.data={}),i=i.data),n!==undefined&&(i[g.camelCase(t)]=n),u?(s=i[t],s==null&&(s=i[g.camelCase(t)])):s=i,s}function F(e,t,n){if(!g.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?g.cache:e,a=o?e[g.expando]:g.expando;if(!u[a])return;if(t){s=n?u[a]:u[a].data;if(s){g.isArray(t)?t=t.concat(g.map(t,g.camelCase)):t in s?t=[t]:(t=g.camelCase(t),t in s?t=[t]:t=t.split(" "));for(r=0,i=t.length;r<i;r++)delete s[t[r]];if(!(n?q:g.isEmptyObject)(s))return}}if(!n){delete u[a].data;if(!q(u[a]))return}o?g.cleanData([e],!0):g.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null}function I(e,t,n){if(n===undefined&&e.nodeType===1){var r="data-"+t.replace(B,"-$1").toLowerCase();n=e.getAttribute(r);if(typeof n=="string"){try{n=n==="true"?!0:n==="false"?!1:n==="null"?null:+n+""===n?+n:H.test(n)?g.parseJSON(n):n}catch(i){}g.data(e,t,n)}else n=undefined}return n}function q(e){var t;for(t in e){if(t==="data"&&g.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function nt(){return!0}function rt(){return!1}function ft(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function lt(e,t,n){t=t||0;if(g.isFunction(t))return g.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return g.grep(e,function(e){return e===t===n});if(typeof t=="string"){var r=g.grep(e,function(e){return e.nodeType===1});if(ot.test(t))return g.filter(t,r,!n);t=g.filter(t,r)}return g.grep(e,function(e){return g.inArray(e,t)>=0===n})}function ct(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function At(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ot(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function Mt(e){var t=Tt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;(n=e[r])!=null;r++)g._data(n,"globalEval",!t||g._data(t[r],"globalEval"))}function Dt(e,t){if(t.nodeType!==1||!g.hasData(e))return;var n,r,i,s=g._data(e),o=g._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)g.event.add(t,n,u[n][r])}o.data&&(o.data=g.extend({},o.data))}function Pt(e,t){var n,r,i;if(t.nodeType!==1)return;n=t.nodeName.toLowerCase();if(!g.support.noCloneEvent&&t[g.expando]){i=g._data(t);for(r in i.events)g.removeEvent(t,r,i.handle);t.removeAttribute(g.expando)}if(n==="script"&&t.text!==e.text)Ot(t).text=e.text,Mt(t);else if(n==="object")t.parentNode&&(t.outerHTML=e.outerHTML),g.support.html5Clone&&e.innerHTML&&!g.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML);else if(n==="input"&&Et.test(e.type))t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value);else if(n==="option")t.defaultSelected=t.selected=e.defaultSelected;else if(n==="input"||n==="textarea")t.defaultValue=e.defaultValue}function Ht(e,t){var r,i,s=0,o=typeof e.getElementsByTagName!==n?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==n?e.querySelectorAll(t||"*"):undefined;if(!o)for(o=[],r=e.childNodes||e;(i=r[s])!=null;s++)!t||g.nodeName(i,t)?o.push(i):g.merge(o,Ht(i,t));return t===undefined||t&&g.nodeName(e,t)?g.merge([e],o):o}function Bt(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Zt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Yt.length;while(i--){t=Yt[i]+n;if(t in e)return t}return r}function en(e,t){return e=t||e,g.css(e,"display")==="none"||!g.contains(e.ownerDocument,e)}function tn(e,t){var n,r,i,s=[],o=0,u=e.length;for(;o<u;o++){r=e[o];if(!r.style)continue;s[o]=g._data(r,"olddisplay"),n=r.style.display,t?(!s[o]&&n==="none"&&(r.style.display=""),r.style.display===""&&en(r)&&(s[o]=g._data(r,"olddisplay",on(r.nodeName)))):s[o]||(i=en(r),(n&&n!=="none"||!i)&&g._data(r,"olddisplay",i?n:g.css(r,"display")))}for(o=0;o<u;o++){r=e[o];if(!r.style)continue;if(!t||r.style.display==="none"||r.style.display==="")r.style.display=t?s[o]||"":"none"}return e}function nn(e,t,n){var r=Xt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function rn(e,t,n,r,i){var s=n===(r?"border":"content")?4:t==="width"?1:0,o=0;for(;s<4;s+=2)n==="margin"&&(o+=g.css(e,n+Gt[s],!0,i)),r?(n==="content"&&(o-=g.css(e,"padding"+Gt[s],!0,i)),n!=="margin"&&(o-=g.css(e,"border"+Gt[s]+"Width",!0,i))):(o+=g.css(e,"padding"+Gt[s],!0,i),n!=="padding"&&(o+=g.css(e,"border"+Gt[s]+"Width",!0,i)));return o}function sn(e,t,n){var r=!0,i=t==="width"?e.offsetWidth:e.offsetHeight,s=Ft(e),o=g.support.boxSizing&&g.css(e,"boxSizing",!1,s)==="border-box";if(i<=0||i==null){i=It(e,t,s);if(i<0||i==null)i=e.style[t];if(Vt.test(i))return i;r=o&&(g.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+rn(e,t,n||(o?"border":"content"),r,s)+"px"}function on(e){var t=r,n=Jt[e];if(!n){n=un(e,t);if(n==="none"||!n)jt=(jt||g("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(jt[0].contentWindow||jt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),jt.detach();Jt[e]=n}return n}function un(e,t){var n=g(t.createElement(e)).appendTo(t.body),r=g.css(n[0],"display");return n.remove(),r}function pn(e,t,n,r){var i;if(g.isArray(t))g.each(t,function(t,i){n||fn.test(e)?r(e,i):pn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&g.type(t)==="object")for(i in t)pn(e+"["+i+"]",t[i],n,r);else r(e,t)}function On(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(b)||[];if(g.isFunction(n))while(r=s[i++])r[0]==="+"?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Mn(e,t,n,r){function o(u){var a;return i[u]=!0,g.each(e[u]||[],function(e,u){var f=u(t,n,r);if(typeof f=="string"&&!s&&!i[f])return t.dataTypes.unshift(f),o(f),!1;if(s)return!(a=f)}),a}var i={},s=e===kn;return o(t.dataTypes[0])||!i["*"]&&o("*")}function _n(e,t){var n,r,i=g.ajaxSettings.flatOptions||{};for(r in t)t[r]!==undefined&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&g.extend(!0,e,n),e}function Dn(e,t,n){var r,i,s,o,u=e.contents,a=e.dataTypes,f=e.responseFields;for(o in f)o in n&&(t[f[o]]=n[o]);while(a[0]==="*")a.shift(),i===undefined&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){a.unshift(o);break}if(a[0]in n)s=a[0];else{for(o in n){if(!a[0]||e.converters[o+" "+a[0]]){s=o;break}r||(r=o)}s=s||r}if(s)return s!==a[0]&&a.unshift(s),n[s]}function Pn(e,t){var n,r,i,s,o={},u=0,a=e.dataTypes.slice(),f=a[0];e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(a[1])for(i in e.converters)o[i.toLowerCase()]=e.converters[i];for(;r=a[++u];)if(r!=="*"){if(f!=="*"&&f!==r){i=o[f+" "+r]||o["* "+r];if(!i)for(n in o){s=n.split(" ");if(s[1]===r){i=o[f+" "+s[0]]||o["* "+s[0]];if(i){i===!0?i=o[n]:o[n]!==!0&&(r=s[0],a.splice(u--,0,r));break}}}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(l){return{state:"parsererror",error:i?l:"No conversion from "+f+" to "+r}}}f=r}return{state:"success",data:t}}function Rn(){try{return new window.XMLHttpRequest}catch(e){}}function Un(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function Qn(){return setTimeout(function(){zn=undefined}),zn=g.now()}function Gn(e,t){g.each(t,function(t,n){var r=(Kn[t]||[]).concat(Kn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Yn(e,t,n){var r,i,s=0,o=Jn.length,u=g.Deferred().always(function(){delete a.elem}),a=function(){if(i)return!1;var t=zn||Qn(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,s=1-r,o=0,a=f.tweens.length;for(;o<a;o++)f.tweens[o].run(s);return u.notifyWith(e,[f,s,n]),s<1&&a?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:g.extend({},t),opts:g.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:zn||Qn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=g.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(r),r},stop:function(t){var n=0,r=t?f.tweens.length:0;if(i)return this;i=!0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Zn(l,f.opts.specialEasing);for(;s<o;s++){r=Jn[s].call(f,e,l,f.opts);if(r)return r}return Gn(f,l),g.isFunction(f.opts.start)&&f.opts.start.call(e,f),g.fx.timer(g.extend(a,{elem:e,anim:f,queue:f.opts.queue})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Zn(e,t){var n,r,i,s,o;for(i in e){r=g.camelCase(i),s=t[r],n=e[i],g.isArray(n)&&(s=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),o=g.cssHooks[r];if(o&&"expand"in o){n=o.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=s)}else t[r]=s}}function er(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},v=[],m=e.nodeType&&en(e);n.queue||(l=g._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,g.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],g.css(e,"display")==="inline"&&g.css(e,"float")==="none"&&(!g.support.inlineBlockNeedsLayout||on(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",g.support.shrinkWrapBlocks||h.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(i in t){o=t[i];if(Xn.exec(o)){delete t[i],a=a||o==="toggle";if(o===(m?"hide":"show"))continue;v.push(i)}}s=v.length;if(s){u=g._data(e,"fxshow")||g._data(e,"fxshow",{}),"hidden"in u&&(m=u.hidden),a&&(u.hidden=!m),m?g(e).show():h.done(function(){g(e).hide()}),h.done(function(){var t;g._removeData(e,"fxshow");for(t in d)g.style(e,t,d[t])});for(i=0;i<s;i++)r=v[i],f=h.createTween(r,m?u[r]:0),d[r]=u[r]||g.style(e,r),r in u||(u[r]=f.start,m&&(f.end=f.start,f.start=r==="width"||r==="height"?1:0))}}function tr(e,t,n,r,i){return new tr.prototype.init(e,t,n,r,i)}function nr(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=Gt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function rr(e){return g.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var e,t,n=typeof undefined,r=window.document,i=window.location,s=window.jQuery,o=window.$,u={},a=[],f="1.9.1",l=a.concat,c=a.push,h=a.slice,p=a.indexOf,d=u.toString,v=u.hasOwnProperty,m=f.trim,g=function(e,n){return new g.fn.init(e,n,t)},y=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,b=/\S+/g,w=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,E=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,S=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,x=/^[\],:{}\s]*$/,T=/(?:^|:|,)(?:\s*\[)+/g,N=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,C=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,k=/^-ms-/,L=/-([\da-z])/gi,A=function(e,t){return t.toUpperCase()},O=function(e){if(r.addEventListener||e.type==="load"||r.readyState==="complete")M(),g.ready()},M=function(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",O,!1),window.removeEventListener("load",O,!1)):(r.detachEvent("onreadystatechange",O),window.detachEvent("onload",O))};g.fn=g.prototype={jquery:f,constructor:g,init:function(e,t,n){var i,s;if(!e)return this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?i=[null,e,null]:i=E.exec(e);if(i&&(i[1]||!t)){if(i[1]){t=t instanceof g?t[0]:t,g.merge(this,g.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0));if(S.test(i[1])&&g.isPlainObject(t))for(i in t)g.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}s=r.getElementById(i[2]);if(s&&s.parentNode){if(s.id!==i[2])return n.find(e);this.length=1,this[0]=s}return this.context=r,this.selector=e,this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)}return e.nodeType?(this.context=this[0]=e,this.length=1,this):g.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),g.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=g.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return g.each(this,e,t)},ready:function(e){return g.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(g.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:c,sort:[].sort,splice:[].splice},g.fn.init.prototype=g.fn,g.extend=g.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},u=1,a=arguments.length,f=!1;typeof o=="boolean"&&(f=o,o=arguments[1]||{},u=2),typeof o!="object"&&!g.isFunction(o)&&(o={}),a===u&&(o=this,--u);for(;u<a;u++)if((i=arguments[u])!=null)for(r in i){e=o[r],n=i[r];if(o===n)continue;f&&n&&(g.isPlainObject(n)||(t=g.isArray(n)))?(t?(t=!1,s=e&&g.isArray(e)?e:[]):s=e&&g.isPlainObject(e)?e:{},o[r]=g.extend(f,s,n)):n!==undefined&&(o[r]=n)}return o},g.extend({noConflict:function(e){return window.$===g&&(window.$=o),e&&window.jQuery===g&&(window.jQuery=s),g},isReady:!1,readyWait:1,holdReady:function(e){e?g.readyWait++:g.ready(!0)},ready:function(t){if(t===!0?--g.readyWait:g.isReady)return;if(!r.body)return setTimeout(g.ready);g.isReady=!0;if(t!==!0&&--g.readyWait>0)return;e.resolveWith(r,[g]),g.fn.trigger&&g(r).trigger("ready").off("ready")},isFunction:function(e){return g.type(e)==="function"},isArray:Array.isArray||function(e){return g.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):typeof e=="object"||typeof e=="function"?u[d.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||g.type(e)!=="object"||e.nodeType||g.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}var n;for(n in e);return n===undefined||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||typeof e!="string")return null;typeof t=="boolean"&&(n=t,t=!1),t=t||r;var i=S.exec(e),s=!n&&[];return i?[t.createElement(i[1])]:(i=g.buildFragment([e],t,s),s&&g(s).remove(),g.merge([],i.childNodes))},parseJSON:function(e){if(window.JSON&&window.JSON.parse)return window.JSON.parse(e);if(e===null)return e;if(typeof e=="string"){e=g.trim(e);if(e&&x.test(e.replace(N,"@").replace(C,"]").replace(T,"")))return(new Function("return "+e))()}g.error("Invalid JSON: "+e)},parseXML:function(e){var t,n;if(!e||typeof e!="string")return null;try{window.DOMParser?(n=new DOMParser,t=n.parseFromString(e,"text/xml")):(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(r){t=undefined}return(!t||!t.documentElement||t.getElementsByTagName("parsererror").length)&&g.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){e&&g.trim(e)&&(window.execScript||function(e){window.eval.call(window,e)})(e)},camelCase:function(e){return e.replace(k,"ms-").replace(L,A)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,s=e.length,o=_(e);if(n)if(o)for(;i<s;i++){r=t.apply(e[i],n);if(r===!1)break}else for(i in e){r=t.apply(e[i],n);if(r===!1)break}else if(o)for(;i<s;i++){r=t.call(e[i],i,e[i]);if(r===!1)break}else for(i in e){r=t.call(e[i],i,e[i]);if(r===!1)break}return e},trim:m&&!m.call("ï»¿Â ")?function(e){return e==null?"":m.call(e)}:function(e){return e==null?"":(e+"").replace(w,"")},makeArray:function(e,t){var n=t||[];return e!=null&&(_(Object(e))?g.merge(n,typeof e=="string"?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(p)return p.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){var n=t.length,r=e.length,i=0;if(typeof n=="number")for(;i<n;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,t,n){var r,i=0,s=e.length,o=_(e),u=[];if(o)for(;i<s;i++)r=t(e[i],i,n),r!=null&&(u[u.length]=r);else for(i in e)r=t(e[i],i,n),r!=null&&(u[u.length]=r);return l.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return typeof t=="string"&&(i=e[t],t=e,e=i),g.isFunction(e)?(n=h.call(arguments,2),r=function(){return e.apply(t||this,n.concat(h.call(arguments)))},r.guid=e.guid=e.guid||g.guid++,r):undefined},access:function(e,t,n,r,i,s,o){var u=0,a=e.length,f=n==null;if(g.type(n)==="object"){i=!0;for(u in n)g.access(e,t,u,n[u],!0,s,o)}else if(r!==undefined){i=!0,g.isFunction(r)||(o=!0),f&&(o?(t.call(e,r),t=null):(f=t,t=function(e,t,n){return f.call(g(e),n)}));if(t)for(;u<a;u++)t(e[u],n,o?r:r.call(e[u],u,t(e[u],n)))}return i?e:f?t.call(e):a?t(e[0],n):s},now:function(){return(new Date).getTime()}}),g.ready.promise=function(t){if(!e){e=g.Deferred();if(r.readyState==="complete")setTimeout(g.ready);else if(r.addEventListener)r.addEventListener("DOMContentLoaded",O,!1),window.addEventListener("load",O,!1);else{r.attachEvent("onreadystatechange",O),window.attachEvent("onload",O);var n=!1;try{n=window.frameElement==null&&r.documentElement}catch(i){}n&&n.doScroll&&function s(){if(!g.isReady){try{n.doScroll("left")}catch(e){return setTimeout(s,50)}M(),g.ready()}}()}}return e.promise(t)},g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()}),t=g(r);var D={};g.Callbacks=function(e){e=typeof e=="string"?D[e]||P(e):g.extend({},e);var t,n,r,i,s,o,u=[],a=!e.once&&[],f=function(c){n=e.memory&&c,r=!0,s=o||0,o=0,i=u.length,t=!0;for(;u&&s<i;s++)if(u[s].apply(c[0],c[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,u&&(a?a.length&&f(a.shift()):n?u=[]:l.disable())},l={add:function(){if(u){var r=u.length;(function s(t){g.each(t,function(t,n){var r=g.type(n);r==="function"?(!e.unique||!l.has(n))&&u.push(n):n&&n.length&&r!=="string"&&s(n)})})(arguments),t?i=u.length:n&&(o=r,f(n))}return this},remove:function(){return u&&g.each(arguments,function(e,n){var r;while((r=g.inArray(n,u,r))>-1)u.splice(r,1),t&&(r<=i&&i--,r<=s&&s--)}),this},has:function(e){return e?g.inArray(e,u)>-1:!!u&&!!u.length},empty:function(){return u=[],this},disable:function(){return u=a=n=undefined,this},disabled:function(){return!u},lock:function(){return a=undefined,n||l.disable(),this},locked:function(){return!a},fireWith:function(e,n){return n=n||[],n=[e,n.slice?n.slice():n],u&&(!r||a)&&(t?a.push(n):f(n)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},g.extend({Deferred:function(e){var t=[["resolve","done",g.Callbacks("once memory"),"resolved"],["reject","fail",g.Callbacks("once memory"),"rejected"],["notify","progress",g.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return g.Deferred(function(n){g.each(t,function(t,s){var o=s[0],u=g.isFunction(e[t])&&e[t];i[s[1]](function(){var e=u&&u.apply(this,arguments);e&&g.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o+"With"](this===r?n.promise():this,u?[e]:arguments)})}),e=null}).promise()},promise:function(e){return e!=null?g.extend(e,r):r}},i={};return r.pipe=r.then,g.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=function(){return i[s[0]+"With"](this===i?r:this,arguments),this},i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=r!==1||e&&g.isFunction(e.promise)?r:0,s=i===1?e:g.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&g.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),g.support=function(){var e,t,i,s,o,u,a,f,l,c,h=r.createElement("div");h.setAttribute("className","t"),h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=h.getElementsByTagName("*"),i=h.getElementsByTagName("a")[0];if(!t||!i||!t.length)return{};o=r.createElement("select"),a=o.appendChild(r.createElement("option")),s=h.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",e={getSetAttribute:h.className!=="t",leadingWhitespace:h.firstChild.nodeType===3,tbody:!h.getElementsByTagName("tbody").length,htmlSerialize:!!h.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:i.getAttribute("href")==="/a",opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:a.selected,enctype:!!r.createElement("form").enctype,html5Clone:r.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:r.compatMode==="CSS1Compat",deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},s.checked=!0,e.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,e.optDisabled=!a.disabled;try{delete h.test}catch(p){e.deleteExpando=!1}s=r.createElement("input"),s.setAttribute("value",""),e.input=s.getAttribute("value")==="",s.value="t",s.setAttribute("type","radio"),e.radioValue=s.value==="t",s.setAttribute("checked","t"),s.setAttribute("name","t"),u=r.createDocumentFragment(),u.appendChild(s),e.appendChecked=s.checked,e.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,h.attachEvent&&(h.attachEvent("onclick",function(){e.noCloneEvent=!1}),h.cloneNode(!0).click());for(c in{submit:!0,change:!0,focusin:!0})h.setAttribute(f="on"+c,"t"),e[c+"Bubbles"]=f in window||h.attributes[f].expando===!1;return h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle=h.style.backgroundClip==="content-box",g(function(){var t,i,s,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=r.getElementsByTagName("body")[0];if(!u)return;t=r.createElement("div"),t.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(t).appendChild(h),h.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=h.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",l=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",e.reliableHiddenOffsets=l&&s[0].offsetHeight===0,h.innerHTML="",h.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",e.boxSizing=h.offsetWidth===4,e.doesNotIncludeMarginInBodyOffset=u.offsetTop!==1,window.getComputedStyle&&(e.pixelPosition=(window.getComputedStyle(h,null)||{}).top!=="1%",e.boxSizingReliable=(window.getComputedStyle(h,null)||{width:"4px"}).width==="4px",i=h.appendChild(r.createElement("div")),i.style.cssText=h.style.cssText=o,i.style.marginRight=i.style.width="0",h.style.width="1px",e.reliableMarginRight=!parseFloat((window.getComputedStyle(i,null)||{}).marginRight)),typeof h.style.zoom!==n&&(h.innerHTML="",h.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",e.inlineBlockNeedsLayout=h.offsetWidth===3,h.style.display="block",h.innerHTML="<div></div>",h.firstChild.style.width="5px",e.shrinkWrapBlocks=h.offsetWidth!==3,e.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(t),t=h=s=i=null}),t=o=u=a=i=s=null,e}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;g.extend({cache:{},expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?g.cache[e[g.expando]]:e[g.expando],!!e&&!q(e)},data:function(e,t,n){return j(e,t,n)},removeData:function(e,t){return F(e,t)},_data:function(e,t,n){return j(e,t,n,!0)},_removeData:function(e,t){return F(e,t,!0)},acceptData:function(e){if(e.nodeType&&e.nodeType!==1&&e.nodeType!==9)return!1;var t=e.nodeName&&g.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),g.fn.extend({data:function(e,t){var n,r,i=this[0],s=0,o=null;if(e===undefined){if(this.length){o=g.data(i);if(i.nodeType===1&&!g._data(i,"parsedAttrs")){n=i.attributes;for(;s<n.length;s++)r=n[s].name,r.indexOf("data-")||(r=g.camelCase(r.slice(5)),I(i,r,o[r]));g._data(i,"parsedAttrs",!0)}}return o}return typeof e=="object"?this.each(function(){g.data(this,e)}):g.access(this,function(t){if(t===undefined)return i?I(i,e,g.data(i,e)):null;this.each(function(){g.data(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){g.removeData(this,e)})}}),g.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=g._data(e,t),n&&(!r||g.isArray(n)?r=g._data(e,t,g.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=g.queue(e,t),r=n.length,i=n.shift(),s=g._queueHooks(e,t),o=function(){g.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),s.cur=i,i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return g._data(e,n)||g._data(e,n,{empty:g.Callbacks("once memory").add(function(){g._removeData(e,t+"queue"),g._removeData(e,n)})})}}),g.fn.extend({queue:function(e,t){var n=2;return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?g.queue(this[0],e):t===undefined?this:this.each(function(){var n=g.queue(this,e,t);g._queueHooks(this,e),e==="fx"&&n[0]!=="inprogress"&&g.dequeue(this,e)})},dequeue:function(e){return this.each(function(){g.dequeue(this,e)})},delay:function(e,t){return e=g.fx?g.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=g.Deferred(),s=this,o=this.length,u=function(){--r||i.resolveWith(s,[s])};typeof e!="string"&&(t=e,e=undefined),e=e||"fx";while(o--)n=g._data(s[o],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(u));return u(),i.promise(t)}});var R,U,z=/[\t\r\n]/g,W=/\r/g,X=/^(?:input|select|textarea|button|object)$/i,V=/^(?:a|area)$/i,$=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,J=/^(?:checked|selected)$/i,K=g.support.getSetAttribute,Q=g.support.input;g.fn.extend({attr:function(e,t){return g.access(this,g.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){g.removeAttr(this,e)})},prop:function(e,t){return g.access(this,g.prop,e,t,arguments.length>1)},removeProp:function(e){return e=g.propFix[e]||e,this.each(function(){try{this[e]=undefined,delete this[e]}catch(t){}})},addClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=typeof e=="string"&&e;if(g.isFunction(e))return this.each(function(t){g(this).addClass(e.call(this,t,this.className))});if(a){t=(e||"").match(b)||[];for(;o<u;o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(z," "):" ");if(r){s=0;while(i=t[s++])r.indexOf(" "+i+" ")<0&&(r+=i+" ");n.className=g.trim(r)}}}return this},removeClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=arguments.length===0||typeof e=="string"&&e;if(g.isFunction(e))return this.each(function(t){g(this).removeClass(e.call(this,t,this.className))});if(a){t=(e||"").match(b)||[];for(;o<u;o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(z," "):"");if(r){s=0;while(i=t[s++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?g.trim(r):""}}}return this},toggleClass:function(e,t){var r=typeof e,i=typeof t=="boolean";return g.isFunction(e)?this.each(function(n){g(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(r==="string"){var s,o=0,u=g(this),a=t,f=e.match(b)||[];while(s=f[o++])a=i?a:!u.hasClass(s),u[a?"addClass":"removeClass"](s)}else if(r===n||r==="boolean")this.className&&g._data(this,"__className__",this.className),this.className=this.className||e===!1?"":g._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(z," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];if(!arguments.length){if(i)return n=g.valHooks[i.type]||g.valHooks[i.nodeName.toLowerCase()],n&&"get"in n&&(t=n.get(i,"value"))!==undefined?t:(t=i.value,typeof t=="string"?t.replace(W,""):t==null?"":t);return}return r=g.isFunction(e),this.each(function(t){var i,s=g(this);if(this.nodeType!==1)return;r?i=e.call(this,t,s.val()):i=e,i==null?i="":typeof i=="number"?i+="":g.isArray(i)&&(i=g.map(i,function(e){return e==null?"":e+""})),n=g.valHooks[this.type]||g.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,i,"value")===undefined)this.value=i})}}),g.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(g.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!g.nodeName(n.parentNode,"optgroup"))){t=g(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=g.makeArray(t);return g(e).find("option").each(function(){this.selected=g.inArray(g(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,t,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;if(typeof e.getAttribute===n)return g.prop(e,t,r);s=u!==1||!g.isXMLDoc(e),s&&(t=t.toLowerCase(),i=g.attrHooks[t]||($.test(t)?U:R));if(r===undefined)return i&&s&&"get"in i&&(o=i.get(e,t))!==null?o:(typeof e.getAttribute!==n&&(o=e.getAttribute(t)),o==null?undefined:o);if(r!==null)return i&&s&&"set"in i&&(o=i.set(e,r,t))!==undefined?o:(e.setAttribute(t,r+""),r);g.removeAttr(e,t)},removeAttr:function(e,t){var n,r,i=0,s=t&&t.match(b);if(s&&e.nodeType===1)while(n=s[i++])r=g.propFix[n]||n,$.test(n)?!K&&J.test(n)?e[g.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:g.attr(e,n,""),e.removeAttribute(K?n:r)},attrHooks:{type:{set:function(e,t){if(!g.support.radioValue&&t==="radio"&&g.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,t,n){var r,i,s,o=e.nodeType;if(!e||o===3||o===8||o===2)return;return s=o!==1||!g.isXMLDoc(e),s&&(t=g.propFix[t]||t,i=g.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&(r=i.get(e,t))!==null?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=e.getAttributeNode("tabindex");return t&&t.specified?parseInt(t.value,10):X.test(e.nodeName)||V.test(e.nodeName)&&e.href?0:undefined}}}}),U={get:function(e,t){var n=g.prop(e,t),r=typeof n=="boolean"&&e.getAttribute(t),i=typeof n=="boolean"?Q&&K?r!=null:J.test(t)?e[g.camelCase("default-"+t)]:!!r:e.getAttributeNode(t);return i&&i.value!==!1?t.toLowerCase():undefined},set:function(e,t,n){return t===!1?g.removeAttr(e,n):Q&&K||!J.test(n)?e.setAttribute(!K&&g.propFix[n]||n,n):e[g.camelCase("default-"+n)]=e[n]=!0,n}};if(!Q||!K)g.attrHooks.value={get:function(e,t){var n=e.getAttributeNode(t);return g.nodeName(e,"input")?e.defaultValue:n&&n.specified?n.value:undefined},set:function(e,t,n){if(!g.nodeName(e,"input"))return R&&R.set(e,t,n);e.defaultValue=t}};K||(R=g.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&(t==="id"||t==="name"||t==="coords"?n.value!=="":n.specified)?n.value:undefined},set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="",n==="value"||t===e.getAttribute(n)?t:undefined}},g.attrHooks.contenteditable={get:R.get,set:function(e,t,n){R.set(e,t===""?!1:t,n)}},g.each(["width","height"],function(e,t){g.attrHooks[t]=g.extend(g.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})})),g.support.hrefNormalized||(g.each(["href","src","width","height"],function(e,t){g.attrHooks[t]=g.extend(g.attrHooks[t],{get:function(e){var n=e.getAttribute(t,2);return n==null?undefined:n}})}),g.each(["href","src"],function(e,t){g.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),g.support.style||(g.attrHooks.style={get:function(e){return e.style.cssText||undefined},set:function(e,t){return e.style.cssText=t+""}}),g.support.optSelected||(g.propHooks.selected=g.extend(g.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),g.support.enctype||(g.propFix.enctype="encoding"),g.support.checkOn||g.each(["radio","checkbox"],function(){g.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),g.each(["radio","checkbox"],function(){g.valHooks[this]=g.extend(g.valHooks[this],{set:function(e,t){if(g.isArray(t))return e.checked=g.inArray(g(e).val(),t)>=0}})});var G=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,et=/^(?:focusinfocus|focusoutblur)$/,tt=/^([^.]*)(?:\.(.+)|)$/;g.event={global:{},add:function(e,t,r,i,s){var o,u,a,f,l,c,h,p,d,v,m,y=g._data(e);if(!y)return;r.handler&&(f=r,r=f.handler,s=f.selector),r.guid||(r.guid=g.guid++),(u=y.events)||(u=y.events={}),(c=y.handle)||(c=y.handle=function(e){return typeof g===n||!!e&&g.event.triggered===e.type?undefined:g.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(b)||[""],a=t.length;while(a--){o=tt.exec(t[a])||[],d=m=o[1],v=(o[2]||"").split(".").sort(),l=g.event.special[d]||{},d=(s?l.delegateType:l.bindType)||d,l=g.event.special[d]||{},h=g.extend({type:d,origType:m,data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&g.expr.match.needsContext.test(s),namespace:v.join(".")},f);if(!(p=u[d])){p=u[d]=[],p.delegateCount=0;if(!l.setup||l.setup.call(e,i,v,c)===!1)e.addEventListener?e.addEventListener(d,c,!1):e.attachEvent&&e.attachEvent("on"+d,c)}l.add&&(l.add.call(e,h),h.handler.guid||(h.handler.guid=r.guid)),s?p.splice(p.delegateCount++,0,h):p.push(h),g.event.global[d]=!0}e=null},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=g.hasData(e)&&g._data(e);if(!m||!(l=m.events))return;t=(t||"").match(b)||[""],f=t.length;while(f--){u=tt.exec(t[f])||[],p=v=u[1],d=(u[2]||"").split(".").sort();if(!p){for(p in l)g.event.remove(e,p+t[f],n,r,!0);continue}c=g.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,h=l[p]||[],u=u[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=s=h.length;while(s--)o=h[s],(i||v===o.origType)&&(!n||n.guid===o.guid)&&(!u||u.test(o.namespace))&&(!r||r===o.selector||r==="**"&&o.selector)&&(h.splice(s,1),o.selector&&h.delegateCount--,c.remove&&c.remove.call(e,o));a&&!h.length&&((!c.teardown||c.teardown.call(e,d,m.handle)===!1)&&g.removeEvent(e,p,m.handle),delete l[p])}g.isEmptyObject(l)&&(delete m.handle,g._removeData(e,"events"))},trigger:function(e,t,n,i){var s,o,u,a,f,l,c,h=[n||r],p=v.call(e,"type")?e.type:e,d=v.call(e,"namespace")?e.namespace.split("."):[];u=l=n=n||r;if(n.nodeType===3||n.nodeType===8)return;if(et.test(p+g.event.triggered))return;p.indexOf(".")>=0&&(d=p.split("."),p=d.shift(),d.sort()),o=p.indexOf(":")<0&&"on"+p,e=e[g.expando]?e:new g.Event(p,typeof e=="object"&&e),e.isTrigger=!0,e.namespace=d.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=undefined,e.target||(e.target=n),t=t==null?[e]:g.makeArray(t,[e]),f=g.event.special[p]||{};if(!i&&f.trigger&&f.trigger.apply(n,t)===!1)return;if(!i&&!f.noBubble&&!g.isWindow(n)){a=f.delegateType||p,et.test(a+p)||(u=u.parentNode);for(;u;u=u.parentNode)h.push(u),l=u;l===(n.ownerDocument||r)&&h.push(l.defaultView||l.parentWindow||window)}c=0;while((u=h[c++])&&!e.isPropagationStopped())e.type=c>1?a:f.bindType||p,s=(g._data(u,"events")||{})[e.type]&&g._data(u,"handle"),s&&s.apply(u,t),s=o&&u[o],s&&g.acceptData(u)&&s.apply&&s.apply(u,t)===!1&&e.preventDefault();e.type=p;if(!i&&!e.isDefaultPrevented()&&(!f._default||f._default.apply(n.ownerDocument,t)===!1)&&(p!=="click"||!g.nodeName(n,"a"))&&g.acceptData(n)&&o&&n[p]&&!g.isWindow(n)){l=n[o],l&&(n[o]=null),g.event.triggered=p;try{n[p]()}catch(m){}g.event.triggered=undefined,l&&(n[o]=l)}return e.result},dispatch:function(e){e=g.event.fix(e);var t,n,r,i,s,o=[],u=h.call(arguments),a=(g._data(this,"events")||{})[e.type]||[],f=g.event.special[e.type]||{};u[0]=e,e.delegateTarget=this;if(f.preDispatch&&f.preDispatch.call(this,e)===!1)return;o=g.event.handlers.call(this,e,a),t=0;while((i=o[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,s=0;while((r=i.handlers[s++])&&!e.isImmediatePropagationStopped())if(!e.namespace_re||e.namespace_re.test(r.namespace))e.handleObj=r,e.data=r.data,n=((g.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,u),n!==undefined&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation())}return f.postDispatch&&f.postDispatch.call(this,e),e.result},handlers:function(e,t){var n,r,i,s,o=[],u=t.delegateCount,a=e.target;if(u&&a.nodeType&&(!e.button||e.type!=="click"))for(;a!=this;a=a.parentNode||this)if(a.nodeType===1&&(a.disabled!==!0||e.type!=="click")){i=[];for(s=0;s<u;s++)r=t[s],n=r.selector+" ",i[n]===undefined&&(i[n]=r.needsContext?g(n,this).index(a)>=0:g.find(n,this,null,[a]).length),i[n]&&i.push(r);i.length&&o.push({elem:a,handlers:i})}return u<t.length&&o.push({elem:this,handlers:t.slice(u)}),o},fix:function(e){if(e[g.expando])return e;var t,n,i,s=e.type,o=e,u=this.fixHooks[s];u||(this.fixHooks[s]=u=Z.test(s)?this.mouseHooks:Y.test(s)?this.keyHooks:{}),i=u.props?this.props.concat(u.props):this.props,e=new g.Event(o),t=i.length;while(t--)n=i[t],e[n]=o[n];return e.target||(e.target=o.srcElement||r),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,u.filter?u.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,s,o=t.button,u=t.fromElement;return e.pageX==null&&t.clientX!=null&&(i=e.target.ownerDocument||r,s=i.documentElement,n=i.body,e.pageX=t.clientX+(s&&s.scrollLeft||n&&n.scrollLeft||0)-(s&&s.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(s&&s.scrollTop||n&&n.scrollTop||0)-(s&&s.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?t.toElement:u),!e.which&&o!==undefined&&(e.which=o&1?1:o&2?3:o&4?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){if(g.nodeName(this,"input")&&this.type==="checkbox"&&this.click)return this.click(),!1}},focus:{trigger:function(){if(this!==r.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===r.activeElement&&this.blur)return this.blur(),!1},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=g.extend(new g.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?g.event.trigger(i,null,t):g.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},g.removeEvent=r.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,r){var i="on"+t;e.detachEvent&&(typeof e[i]===n&&(e[i]=null),e.detachEvent(i,r))},g.Event=function(e,t){if(!(this instanceof g.Event))return new g.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?nt:rt):this.type=e,t&&g.extend(this,t),this.timeStamp=e&&e.timeStamp||g.now(),this[g.expando]=!0},g.Event.prototype={isDefaultPrevented:rt,isPropagationStopped:rt,isImmediatePropagationStopped:rt,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=nt;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=nt;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=nt,this.stopPropagation()}},g.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){g.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;if(!i||i!==r&&!g.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),g.support.submitBubbles||(g.event.special.submit={setup:function(){if(g.nodeName(this,"form"))return!1;g.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=g.nodeName(t,"input")||g.nodeName(t,"button")?t.form:undefined;n&&!g._data(n,"submitBubbles")&&(g.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),g._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&g.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(g.nodeName(this,"form"))return!1;g.event.remove(this,"._submit")}}),g.support.changeBubbles||(g.event.special.change={setup:function(){if(G.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")g.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),g.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),g.event.simulate("change",this,e,!0)});return!1}g.event.add(this,"beforeactivate._change",function(e){var t=e.target;G.test(t.nodeName)&&!g._data(t,"changeBubbles")&&(g.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&g.event.simulate("change",this.parentNode,e,!0)}),g._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return g.event.remove(this,"._change"),!G.test(this.nodeName)}}),g.support.focusinBubbles||g.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,i=function(e){g.event.simulate(t,e.target,g.event.fix(e),!0)};g.event.special[t]={setup:function(){n++===0&&r.addEventListener(e,i,!0)},teardown:function(){--n===0&&r.removeEventListener(e,i,!0)}}}),g.fn.extend({on:function(e,t,n,r,i){var s,o;if(typeof e=="object"){typeof t!="string"&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}n==null&&r==null?(r=t,n=t=undefined):r==null&&(typeof t=="string"?(r=n,n=undefined):(r=n,n=t,t=undefined));if(r===!1)r=rt;else if(!r)return this;return i===1&&(o=r,r=function(e){return g().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=g.guid++)),this.each(function(){g.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,g(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if(typeof e=="object"){for(i in e)this.off(i,t,e[i]);return this}if(t===!1||typeof t=="function")n=t,t=undefined;return n===!1&&(n=rt),this.each(function(){g.event.remove(this,e,n,t)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){g.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return g.event.trigger(e,t,n,!0)}}),function(e,t){function rt(e){return J.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function st(e){return e[w]=!0,e}function ot(e){var t=c.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function ut(e,t,n,r){var i,s,o,u,a,f,h,v,m,g;(t?t.ownerDocument||t:E)!==c&&l(t),t=t||c,n=n||[];if(!e||typeof e!="string")return n;if((u=t.nodeType)!==1&&u!==9)return[];if(!p&&!r){if(i=K.exec(e))if(o=i[1]){if(u===9){s=t.getElementById(o);if(!s||!s.parentNode)return n;if(s.id===o)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(o))&&y(t,s)&&s.id===o)return n.push(s),n}else{if(i[2])return _.apply(n,D.call(t.getElementsByTagName(e),0)),n;if((o=i[3])&&S.getByClassName&&t.getElementsByClassName)return _.apply(n,D.call(t.getElementsByClassName(o),0)),n}if(S.qsa&&!d.test(e)){h=!0,v=w,m=t,g=u===9&&e;if(u===1&&t.nodeName.toLowerCase()!=="object"){f=ht(e),(h=t.getAttribute("id"))?v=h.replace(Y,"\\$&"):t.setAttribute("id",v),v="[id='"+v+"'] ",a=f.length;while(a--)f[a]=v+pt(f[a]);m=$.test(e)&&t.parentNode||t,g=f.join(",")}if(g)try{return _.apply(n,D.call(m.querySelectorAll(g),0)),n}catch(b){}finally{h||t.removeAttribute("id")}}}return Et(e.replace(R,"$1"),t,n,r)}function at(e,t){var n=t&&e,r=n&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function ct(e){return st(function(t){return t=+t,st(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ht(e,t){var n,r,s,o,u,a,f,l=C[e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=U.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=z.exec(u))n=r.shift(),s.push({value:n,type:r[0].replace(R," ")}),u=u.slice(n.length);for(o in i.filter)(r=V[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(n=r.shift(),s.push({value:n,type:o,matches:r}),u=u.slice(n.length));if(!n)break}return t?u.length:u?ut.error(e):C(e,a).slice(0)}function pt(e){var t=0,n=e.length,r="";for(;t<n;t++)r+=e[t].value;return r}function dt(e,t,n){var i=t.dir,s=n&&i==="parentNode",o=T++;return t.first?function(t,n,r){while(t=t[i])if(t.nodeType===1||s)return e(t,n,r)}:function(t,n,u){var a,f,l,c=x+" "+o;if(u){while(t=t[i])if(t.nodeType===1||s)if(e(t,n,u))return!0}else while(t=t[i])if(t.nodeType===1||s){l=t[w]||(t[w]={});if((f=l[i])&&f[0]===c){if((a=f[1])===!0||a===r)return a===!0}else{f=l[i]=[c],f[1]=e(t,n,u)||r;if(f[1]===!0)return!0}}}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function gt(e,t,n,r,i,s){return r&&!r[w]&&(r=gt(r)),i&&!i[w]&&(i=gt(i,s)),st(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||wt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?mt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=mt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?P.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=mt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):_.apply(o,g)})}function yt(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,l=dt(function(e){return e===t},u,!0),c=dt(function(e){return P.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==f)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[dt(vt(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[w]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return gt(a>1&&vt(h),a>1&&pt(e.slice(0,a-1)).replace(R,"$1"),n,a<r&&yt(e.slice(a,r)),r<s&&yt(e=e.slice(r)),r<s&&pt(e))}h.push(n)}return vt(h)}function bt(e,t){var n=0,s=t.length>0,o=e.length>0,u=function(u,a,l,h,p){var d,v,m,g=[],y=0,b="0",w=u&&[],E=p!=null,S=f,T=u||o&&i.find.TAG("*",p&&a.parentNode||a),N=x+=S==null?1:Math.random()||.1;E&&(f=a!==c&&a,r=n);for(;(d=T[b])!=null;b++){if(o&&d){v=0;while(m=e[v++])if(m(d,a,l)){h.push(d);break}E&&(x=N,r=++n)}s&&((d=!m&&d)&&y--,u&&w.push(d))}y+=b;if(s&&b!==y){v=0;while(m=t[v++])m(w,g,a,l);if(u){if(y>0)while(b--)!w[b]&&!g[b]&&(g[b]=M.call(h));g=mt(g)}_.apply(h,g),E&&!u&&g.length>0&&y+t.length>1&&ut.uniqueSort(h)}return E&&(x=N,f=S),w};return s?st(u):u}function wt(e,t,n){var r=0,i=t.length;for(;r<i;r++)ut(e,t[r],n);return n}function Et(e,t,n,r){var s,o,a,f,l,c=ht(e);if(!r&&c.length===1){o=c[0]=c[0].slice(0);if(o.length>2&&(a=o[0]).type==="ID"&&t.nodeType===9&&!p&&i.relative[o[1].type]){t=i.find.ID(a.matches[0].replace(et,tt),t)[0];if(!t)return n;e=e.slice(o.shift().value.length)}s=V.needsContext.test(e)?0:o.length;while(s--){a=o[s];if(i.relative[f=a.type])break;if(l=i.find[f])if(r=l(a.matches[0].replace(et,tt),$.test(o[0].type)&&t.parentNode||t)){o.splice(s,1),e=r.length&&pt(o);if(!e)return _.apply(n,D.call(r,0)),n;break}}}return u(e,c)(r,t,p,n,$.test(e)),n}function St(){}var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,y,b,w="sizzle"+ -(new Date),E=e.document,S={},x=0,T=0,N=it(),C=it(),k=it(),L=typeof t,A=1<<31,O=[],M=O.pop,_=O.push,D=O.slice,P=O.indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},H="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",j=B.replace("w","w#"),F="([*^$|!~]?=)",I="\\["+H+"*("+B+")"+H+"*(?:"+F+H+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+j+")|)|)"+H+"*\\]",q=":("+B+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+I.replace(3,8)+")*)|.*)\\)|)",R=new RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g"),U=new RegExp("^"+H+"*,"+H+"*"),z=new RegExp("^"+H+"*([\\x20\\t\\r\\n\\f>+~])"+H+"*"),W=new RegExp(q),X=new RegExp("^"+j+"$"),V={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),NAME:new RegExp("^\\[name=['\"]?("+B+")['\"]?\\]"),TAG:new RegExp("^("+B.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),needsContext:new RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},$=/[\x20\t\r\n\f]*[+~]/,J=/^[^{]+\{\s*\[native code/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Q=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Y=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,n&1023|56320)};try{D.call(E.documentElement.childNodes,0)[0].nodeType}catch(nt){D=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}o=ut.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},l=ut.setDocument=function(e){var n=e?e.ownerDocument||e:E;if(n===c||n.nodeType!==9||!n.documentElement)return c;c=n,h=n.documentElement,p=o(n),S.tagNameNoComments=ot(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),S.attributes=ot(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),S.getByClassName=ot(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),S.getByName=ot(function(e){e.id=w+0,e.innerHTML="<a name='"+w+"'></a><div name='"+w+"'></div>",h.insertBefore(e,h.firstChild);var t=n.getElementsByName&&n.getElementsByName(w).length===2+n.getElementsByName(w+0).length;return S.getIdNotName=!n.getElementById(w),h.removeChild(e),t}),i.attrHandle=ot(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==L&&e.firstChild.getAttribute("href")==="#"})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},S.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==L&&!p){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==L&&!p){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==L&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==L&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=S.tagNameNoComments?function(e,t){if(typeof t.getElementsByTagName!==L)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if(e==="*"){while(n=s[i++])n.nodeType===1&&r.push(n);return r}return s},i.find.NAME=S.getByName&&function(e,t){if(typeof t.getElementsByName!==L)return t.getElementsByName(name)},i.find.CLASS=S.getByClassName&&function(e,t){if(typeof t.getElementsByClassName!==L&&!p)return t.getElementsByClassName(e)},v=[],d=[":focus"];if(S.qsa=rt(n.querySelectorAll))ot(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+H+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||d.push(":checked")}),ot(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&d.push("[*^$]="+H+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")});return(S.matchesSelector=rt(m=h.matchesSelector||h.mozMatchesSelector||h.webkitMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ot(function(e){S.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),v.push("!=",q)}),d=new RegExp(d.join("|")),v=new RegExp(v.join("|")),y=rt(h.contains)||h.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!r&&r.nodeType===1&&!!(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16)}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},b=h.compareDocumentPosition?function(e,t){var r;if(e===t)return a=!0,0;if(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))return r&1||e.parentNode&&e.parentNode.nodeType===11?e===n||y(E,e)?-1:t===n||y(E,t)?1:0:r&4?-1:1;return e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,s=e.parentNode,o=t.parentNode,u=[e],f=[t];if(e===t)return a=!0,0;if(!s||!o)return e===n?-1:t===n?1:s?-1:o?1:0;if(s===o)return at(e,t);r=e;while(r=r.parentNode)u.unshift(r);r=t;while(r=r.parentNode)f.unshift(r);while(u[i]===f[i])i++;return i?at(u[i],f[i]):u[i]===E?-1:f[i]===E?1:0},a=!1,[0,0].sort(b),S.detectDuplicates=a,c},ut.matches=function(e,t){return ut(e,null,null,t)},ut.matchesSelector=function(e,t){(e.ownerDocument||e)!==c&&l(e),t=t.replace(Z,"='$1']");if(S.matchesSelector&&!p&&(!v||!v.test(t))&&!d.test(t))try{var n=m.call(e,t);if(n||S.disconnectedMatch||e.document&&e.document.nodeType!==11)return n}catch(r){}return ut(t,c,null,[e]).length>0},ut.contains=function(e,t){return(e.ownerDocument||e)!==c&&l(e),y(e,t)},ut.attr=function(e,t){var n;return(e.ownerDocument||e)!==c&&l(e),p||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):p||S.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},ut.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ut.uniqueSort=function(e){var t,n=[],r=1,i=0;a=!S.detectDuplicates,e.sort(b);if(a){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},s=ut.getText=function(e){var t,n="",r=0,i=e.nodeType;if(!i)for(;t=e[r];r++)n+=s(t);else if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue;return n},i=ut.selectors={cacheLength:50,createPseudo:st,match:V,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1].slice(0,3)==="nth"?(e[3]||ut.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd")),e[5]=+(e[7]+e[8]||e[3]==="odd")):e[3]&&ut.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return V.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&W.test(n)&&(t=ht(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=N[e+" "];return t||(t=new RegExp("(^|"+H+")"+e+"("+H+"|$)"))&&N(e,function(e){return t.test(e.className||typeof e.getAttribute!==L&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ut.attr(r,e);return i==null?t==="!=":t?(i+="",t==="="?i===n:t==="!="?i!==n:t==="^="?n&&i.indexOf(n)===0:t==="*="?n&&i.indexOf(n)>-1:t==="$="?n&&i.slice(-n.length)===n:t==="~="?(" "+i+" ").indexOf(n)>-1:t==="|="?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var s=e.slice(0,3)!=="nth",o=e.slice(-4)!=="last",u=t==="of-type";return r===1&&i===0?function(e){return!!e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;if(m){if(s){while(v){c=t;while(c=c[v])if(u?c.nodeName.toLowerCase()===g:c.nodeType===1)return!1;d=v=e==="only"&&!d&&"nextSibling"}return!0}d=[o?m.firstChild:m.lastChild];if(o&&y){l=m[w]||(m[w]={}),f=l[e]||[],p=f[0]===x&&f[1],h=f[0]===x&&f[2],c=p&&m.childNodes[p];while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if(c.nodeType===1&&++h&&c===t){l[e]=[x,p,h];break}}else if(y&&(f=(t[w]||(t[w]={}))[e])&&f[0]===x)h=f[1];else while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if((u?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){y&&((c[w]||(c[w]={}))[e]=[x,h]);if(c===t)break}return h-=i,h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ut.error("unsupported pseudo: "+e);return r[w]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?st(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=P.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:st(function(e){var t=[],n=[],r=u(e.replace(R,"$1"));return r[w]?st(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:st(function(e){return function(t){return ut(e,t).length>0}}),contains:st(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),lang:st(function(e){return X.test(e||"")||ut.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=p?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||n.indexOf(e+"-")===0;while((t=t.parentNode)&&t.nodeType===1);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===c.activeElement&&(!c.hasFocus||c.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t;return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)},first:ct(function(){return[0]}),last:ct(function(e,t){return[t-1]}),eq:ct(function(e,t,n){return[n<0?n+t:n]}),even:ct(function(e,t){var n=0;for(;n<t;n+=2)e.push(n);return e}),odd:ct(function(e,t){var n=1;for(;n<t;n+=2)e.push(n);return e}),lt:ct(function(e,t,n){var r=n<0?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ct(function(e,t,n){var r=n<0?n+t:n;for(;++r<t;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=lt(n);u=ut.compile=function(e,t){var n,r=[],i=[],s=k[e+" "];if(!s){t||(t=ht(e)),n=t.length;while(n--)s=yt(t[n]),s[w]?r.push(s):i.push(s);s=k(e,bt(i,r))}return s},i.pseudos.nth=i.pseudos.eq,i.filters=St.prototype=i.pseudos,i.setFilters=new St,l(),ut.attr=g.attr,g.find=ut,g.expr=ut.selectors,g.expr[":"]=g.expr.pseudos,g.unique=ut.uniqueSort,g.text=ut.getText,g.isXMLDoc=ut.isXML,g.contains=ut.contains}(window);var it=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ot=/^.[^:#\[\.,]*$/,ut=g.expr.match.needsContext,at={children:!0,contents:!0,next:!0,prev:!0};g.fn.extend({find:function(e){var t,n,r,i=this.length;if(typeof e!="string")return r=this,this.pushStack(g(e).filter(function(){for(t=0;t<i;t++)if(g.contains(r[t],this))return!0}));n=[];for(t=0;t<i;t++)g.find(e,this[t],n);return n=this.pushStack(i>1?g.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=g(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(g.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(lt(this,e,!1))},filter:function(e){return this.pushStack(lt(this,e,!0))},is:function(e){return!!e&&(typeof e=="string"?ut.test(e)?g(e,this.context).index(this[0])>=0:g.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=ut.test(e)||typeof e!="string"?g(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:g.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return this.pushStack(s.length>1?g.unique(s):s)},index:function(e){return e?typeof e=="string"?g.inArray(this[0],g(e)):g.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?g(e,t):g.makeArray(e&&e.nodeType?[e]:e),r=g.merge(this.get(),n);return this.pushStack(g.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),g.fn.andSelf=g.fn.addBack,g.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return g.dir(e,"parentNode")},parentsUntil:function(e,t,n){return g.dir(e,"parentNode",n)},next:function(e){return ft(e,"nextSibling")},prev:function(e){return ft(e,"previousSibling")},nextAll:function(e){return g.dir(e,"nextSibling")},prevAll:function(e){return g.dir(e,"previousSibling")},nextUntil:function(e,t,n){return g.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return g.dir(e,"previousSibling",n)},siblings:function(e){return g.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return g.sibling(e.firstChild)},contents:function(e){return g.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:g.merge([],e.childNodes)}},function(e,t){g.fn[e]=function(n,r){var i=g.map(this,t,n);return it.test(e)||(r=n),r&&typeof r=="string"&&(i=g.filter(r,i)),i=this.length>1&&!at[e]?g.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),g.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?g.find.matchesSelector(t[0],e)?[t[0]]:[]:g.find.matches(e,t)},dir:function(e,t,n){var r=[],i=e[t];while(i&&i.nodeType!==9&&(n===undefined||i.nodeType!==1||!g(i).is(n)))i.nodeType===1&&r.push(i),i=i[t];return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",pt=/ jQuery\d+="(?:null|\d+)"/g,dt=new RegExp("<(?:"+ht+")[\\s/>]","i"),vt=/^\s+/,mt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,gt=/<([\w:]+)/,yt=/<tbody/i,bt=/<|&#?\w+;/,wt=/<(?:script|style|link)/i,Et=/^(?:checkbox|radio)$/i,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/^$|\/(?:java|ecma)script/i,Tt=/^true\/(.*)/,Nt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ct={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:g.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},kt=ct(r),Lt=kt.appendChild(r.createElement("div"));Ct.optgroup=Ct.option,Ct.tbody=Ct.tfoot=Ct.colgroup=Ct.caption=Ct.thead,Ct.th=Ct.td,g.fn.extend({text:function(e){return g.access(this,function(e){return e===undefined?g.text(this):this.empty().append((this[0]&&this[0].ownerDocument||r).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(g.isFunction(e))return this.each(function(t){g(this).wrapAll(e.call(this,t))});if(this[0]){var t=g(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return g.isFunction(e)?this.each(function(t){g(this).wrapInner(e.call(this,t))}):this.each(function(){var t=g(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g.isFunction(e);return this.each(function(n){g(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){g.nodeName(this,"body")||g(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||g.filter(e,[n]).length>0)!t&&n.nodeType===1&&g.cleanData(Ht(n)),n.parentNode&&(t&&g.contains(n.ownerDocument,n)&&_t(Ht(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&g.cleanData(Ht(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&g.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return g.clone(this,e,t)})},html:function(e){return g.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined)return t.nodeType===1?t.innerHTML.replace(pt,""):undefined;if(typeof e=="string"&&!wt.test(e)&&(g.support.htmlSerialize||!dt.test(e))&&(g.support.leadingWhitespace||!vt.test(e))&&!Ct[(gt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(mt,"<$1></$2>");try{for(;n<r;n++)t=this[n]||{},t.nodeType===1&&(g.cleanData(Ht(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=g.isFunction(e);return!t&&typeof e!="string"&&(e=g(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(g(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=l.apply([],e);var r,i,s,o,u,a,f=0,c=this.length,h=this,p=c-1,d=e[0],v=g.isFunction(d);if(v||!(c<=1||typeof d!="string"||g.support.checkClone||!St.test(d)))return this.each(function(r){var i=h.eq(r);v&&(e[0]=d.call(this,r,t?i.html():undefined)),i.domManip(e,t,n)});if(c){a=g.buildFragment(e,this[0].ownerDocument,!1,this),r=a.firstChild,a.childNodes.length===1&&(a=r);if(r){t=t&&g.nodeName(r,"tr"),o=g.map(Ht(a,"script"),Ot),s=o.length;for(;f<c;f++)i=a,f!==p&&(i=g.clone(i,!0,!0),s&&g.merge(o,Ht(i,"script"))),n.call(t&&g.nodeName(this[f],"table")?At(this[f],"tbody"):this[f],i,f);if(s){u=o[o.length-1].ownerDocument,g.map(o,Mt);for(f=0;f<s;f++)i=o[f],xt.test(i.type||"")&&!g._data(i,"globalEval")&&g.contains(u,i)&&(i.src?g.ajax({url:i.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):g.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Nt,"")))}a=r=null}}return this}}),g.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){g.fn[e]=function(e){var n,r=0,i=[],s=g(e),o=s.length-1;for(;r<=o;r++)n=r===o?this:this.clone(!0),g(s[r])[t](n),c.apply(i,n.get());return this.pushStack(i)}}),g.extend({clone:function(e,t,n){var r,i,s,o,u,a=g.contains(e.ownerDocument,e);g.support.html5Clone||g.isXMLDoc(e)||!dt.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(Lt.innerHTML=e.outerHTML,Lt.removeChild(s=Lt.firstChild));if((!g.support.noCloneEvent||!g.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!g.isXMLDoc(e)){r=Ht(s),u=Ht(e);for(o=0;(i=u[o])!=null;++o)r[o]&&Pt(i,r[o])}if(t)if(n){u=u||Ht(e),r=r||Ht(s);for(o=0;(i=u[o])!=null;o++)Dt(i,r[o])}else Dt(e,s);return r=Ht(s,"script"),r.length>0&&_t(r,!a&&Ht(e,"script")),r=u=i=null,s},buildFragment:function(e,t,n,r){var i,s,o,u,a,f,l,c=e.length,h=ct(t),p=[],d=0;for(;d<c;d++){s=e[d];if(s||s===0)if(g.type(s)==="object")g.merge(p,s.nodeType?[s]:s);else if(!bt.test(s))p.push(t.createTextNode(s));else{u=u||h.appendChild(t.createElement("div")),a=(gt.exec(s)||["",""])[1].toLowerCase(),l=Ct[a]||Ct._default,u.innerHTML=l[1]+s.replace(mt,"<$1></$2>")+l[2],i=l[0];while(i--)u=u.lastChild;!g.support.leadingWhitespace&&vt.test(s)&&p.push(t.createTextNode(vt.exec(s)[0]));if(!g.support.tbody){s=a==="table"&&!yt.test(s)?u.firstChild:l[1]==="<table>"&&!yt.test(s)?u:0,i=s&&s.childNodes.length;while(i--)g.nodeName(f=s.childNodes[i],"tbody")&&!f.childNodes.length&&s.removeChild(f)}g.merge(p,u.childNodes),u.textContent="";while(u.firstChild)u.removeChild(u.firstChild);u=h.lastChild}}u&&h.removeChild(u),g.support.appendChecked||g.grep(Ht(p,"input"),Bt),d=0;while(s=p[d++]){if(r&&g.inArray(s,r)!==-1)continue;o=g.contains(s.ownerDocument,s),u=Ht(h.appendChild(s),"script"),o&&_t(u);if(n){i=0;while(s=u[i++])xt.test(s.type||"")&&n.push(s)}}return u=null,h},cleanData:function(e,t){var r,i,s,o,u=0,f=g.expando,l=g.cache,c=g.support.deleteExpando,h=g.event.special;for(;(r=e[u])!=null;u++)if(t||g.acceptData(r)){s=r[f],o=s&&l[s];if(o){if(o.events)for(i in o.events)h[i]?g.event.remove(r,i):g.removeEvent(r,i,o.handle);l[s]&&(delete l[s],c?delete r[f]:typeof r.removeAttribute!==n?r.removeAttribute(f):r[f]=null,a.push(s))}}}});var jt,Ft,It,qt=/alpha\([^)]*\)/i,Rt=/opacity\s*=\s*([^)]*)/,Ut=/^(top|right|bottom|left)$/,zt=/^(none|table(?!-c[ea]).+)/,Wt=/^margin/,Xt=new RegExp("^("+y+")(.*)$","i"),Vt=new RegExp("^("+y+")(?!px)[a-z%]+$","i"),$t=new RegExp("^([+-])=("+y+")","i"),Jt={BODY:"block"},Kt={position:"absolute",visibility:"hidden",display:"block"},Qt={letterSpacing:0,fontWeight:400},Gt=["Top","Right","Bottom","Left"],Yt=["Webkit","O","Moz","ms"];g.fn.extend({css:function(e,t){return g.access(this,function(e,t,n){var r,i,s={},o=0;if(g.isArray(t)){i=Ft(e),r=t.length;for(;o<r;o++)s[t[o]]=g.css(e,t[o],!1,i);return s}return n!==undefined?g.style(e,t,n):g.css(e,t)},e,t,arguments.length>1)},show:function(){return tn(this,!0)},hide:function(){return tn(this)},toggle:function(e){var t=typeof e=="boolean";return this.each(function(){(t?e:en(this))?g(this).show():g(this).hide()})}}),g.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=It(e,"opacity");return n===""?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":g.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var i,s,o,u=g.camelCase(t),a=e.style;t=g.cssProps[u]||(g.cssProps[u]=Zt(a,u)),o=g.cssHooks[t]||g.cssHooks[u];if(n===undefined)return o&&"get"in o&&(i=o.get(e,!1,r))!==undefined?i:a[t];s=typeof n,s==="string"&&(i=$t.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(g.css(e,t)),s="number");if(n==null||s==="number"&&isNaN(n))return;s==="number"&&!g.cssNumber[u]&&(n+="px"),!g.support.clearCloneStyle&&n===""&&t.indexOf("background")===0&&(a[t]="inherit");if(!o||!("set"in o)||(n=o.set(e,n,r))!==undefined)try{a[t]=n}catch(f){}},css:function(e,t,n,r){var i,s,o,u=g.camelCase(t);return t=g.cssProps[u]||(g.cssProps[u]=Zt(e.style,u)),o=g.cssHooks[t]||g.cssHooks[u],o&&"get"in o&&(s=o.get(e,!0,n)),s===undefined&&(s=It(e,t,r)),s==="normal"&&t in Qt&&(s=Qt[t]),n===""||n?(i=parseFloat(s),n===!0||g.isNumeric(i)?i||0:s):s},swap:function(e,t,n,r){var i,s,o={};for(s in t)o[s]=e.style[s],e.style[s]=t[s];i=n.apply(e,r||[]);for(s in t)e.style[s]=o[s];return i}}),window.getComputedStyle?(Ft=function(e){return window.getComputedStyle(e,null)},It=function(e,t,n){var r,i,s,o=n||Ft(e),u=o?o.getPropertyValue(t)||o[t]:undefined,a=e.style;return o&&(u===""&&!g.contains(e.ownerDocument,e)&&(u=g.style(e,t)),Vt.test(u)&&Wt.test(t)&&(r=a.width,i=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=u,u=o.width,a.width=r,a.minWidth=i,a.maxWidth=s)),u}):r.documentElement.currentStyle&&(Ft=function(e){return e.currentStyle},It=function(e,t,n){var r,i,s,o=n||Ft(e),u=o?o[t]:undefined,a=e.style;return u==null&&a&&a[t]&&(u=a[t]),Vt.test(u)&&!Ut.test(t)&&(r=a.left,i=e.runtimeStyle,s=i&&i.left,s&&(i.left=e.currentStyle.left),a.left=t==="fontSize"?"1em":u,u=a.pixelLeft+"px",a.left=r,s&&(i.left=s)),u===""?"auto":u}),g.each(["height","width"],function(e,t){g.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&zt.test(g.css(e,"display"))?g.swap(e,Kt,function(){return sn(e,t,r)}):sn(e,t,r)},set:function(e,n,r){var i=r&&Ft(e);return nn(e,n,r?rn(e,t,r,g.support.boxSizing&&g.css(e,"boxSizing",!1,i)==="border-box",i):0)}}}),g.support.opacity||(g.cssHooks.opacity={get:function(e,t){return Rt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=g.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if((t>=1||t==="")&&g.trim(s.replace(qt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(t===""||r&&!r.filter)return}n.filter=qt.test(s)?s.replace(qt,i):s+" "+i}}),g(function(){g.support.reliableMarginRight||(g.cssHooks.marginRight={get:function(e,t){if(t)return g.swap(e,{display:"inline-block"},It,[e,"marginRight"])}}),!g.support.pixelPosition&&g.fn.position&&g.each(["top","left"],function(e,t){g.cssHooks[t]={get:function(e,n){if(n)return n=It(e,t),Vt.test(n)?g(e).position()[t]+"px":n}}})}),g.expr&&g.expr.filters&&(g.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!g.support.reliableHiddenOffsets&&(e.style&&e.style.display||g.css(e,"display"))==="none"},g.expr.filters.visible=function(e){return!g.expr.filters.hidden(e)}),g.each({margin:"",padding:"",border:"Width"},function(e,t){g.cssHooks[e+t]={expand:function(n){var r=0,i={},s=typeof n=="string"?n.split(" "):[n];for(;r<4;r++)i[e+Gt[r]+t]=s[r]||s[r-2]||s[0];return i}},Wt.test(e)||(g.cssHooks[e+t].set=nn)});var an=/%20/g,fn=/\[\]$/,ln=/\r?\n/g,cn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;g.fn.extend({serialize:function(){return g.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=g.prop(this,"elements");return e?g.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!g(this).is(":disabled")&&hn.test(this.nodeName)&&!cn.test(e)&&(this.checked||!Et.test(e))}).map(function(e,t){var n=g(this).val();return n==null?null:g.isArray(n)?g.map(n,function(e){return{name:t.name,value:e.replace(ln,"\r\n")}}):{name:t.name,value:n.replace(ln,"\r\n")}}).get()}}),g.param=function(e,t){var n,r=[],i=function(e,t){t=g.isFunction(t)?t():t==null?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};t===undefined&&(t=g.ajaxSettings&&g.ajaxSettings.traditional);if(g.isArray(e)||e.jquery&&!g.isPlainObject(e))g.each(e,function(){i(this.name,this.value)});else for(n in e)pn(n,e[n],t,i);return r.join("&").replace(an,"+")},g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){g.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),g.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var dn,vn,mn=g.now(),gn=/\?/,yn=/#.*$/,bn=/([?&])_=[^&]*/,wn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,En=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Sn=/^(?:GET|HEAD)$/,xn=/^\/\//,Tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Nn=g.fn.load,Cn={},kn={},Ln="*/".concat("*");try{vn=i.href}catch(An){vn=r.createElement("a"),vn.href="",vn=vn.href}dn=Tn.exec(vn.toLowerCase())||[],g.fn.load=function(e,t,n){if(typeof e!="string"&&Nn)return Nn.apply(this,arguments);var r,i,s,o=this,u=e.indexOf(" ");return u>=0&&(r=e.slice(u,e.length),e=e.slice(0,u)),g.isFunction(t)?(n=t,t=undefined):t&&typeof t=="object"&&(s="POST"),o.length>0&&g.ajax({url:e,type:s,dataType:"html",data:t}).done(function(e){i=arguments,o.html(r?g("<div>").append(g.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){o.each(n,i||[e.responseText,t,e])}),this},g.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){g.fn[t]=function(e){return this.on(t,e)}}),g.each(["get","post"],function(e,t){g[t]=function(e,n,r,i){return g.isFunction(n)&&(i=i||r,r=n,n=undefined),g.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),g.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vn,type:"GET",isLocal:En.test(dn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ln,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":!0,"text json":g.parseJSON,"text xml":g.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,g.ajaxSettings),t):_n(g.ajaxSettings,e)},ajaxPrefilter:On(Cn),ajaxTransport:On(kn),ajax:function(e,t){function T(e,t,n,r){var f,m,y,b,E,x=t;if(w===2)return;w=2,o&&clearTimeout(o),a=undefined,s=r||"",S.readyState=e>0?4:0,n&&(b=Dn(l,S,n));if(e>=200&&e<300||e===304)l.ifModified&&(E=S.getResponseHeader("Last-Modified"),E&&(g.lastModified[i]=E),E=S.getResponseHeader("etag"),E&&(g.etag[i]=E)),e===204?(f=!0,x="nocontent"):e===304?(f=!0,x="notmodified"):(f=Pn(l,b),x=f.state,m=f.data,y=f.error,f=!y);else{y=x;if(e||!x)x="error",e<0&&(e=0)}S.status=e,S.statusText=(t||x)+"",f?p.resolveWith(c,[m,x,S]):p.rejectWith(c,[S,x,y]),S.statusCode(v),v=undefined,u&&h.trigger(f?"ajaxSuccess":"ajaxError",[S,l,f?m:y]),d.fireWith(c,[S,x]),u&&(h.trigger("ajaxComplete",[S,l]),--g.active||g.event.trigger("ajaxStop"))}typeof e=="object"&&(t=e,e=undefined),t=t||{};var n,r,i,s,o,u,a,f,l=g.ajaxSetup({},t),c=l.context||l,h=l.context&&(c.nodeType||c.jquery)?g(c):g.event,p=g.Deferred(),d=g.Callbacks("once memory"),v=l.statusCode||{},m={},y={},w=0,E="canceled",S={readyState:0,getResponseHeader:function(e){var t;if(w===2){if(!f){f={};while(t=wn.exec(s))f[t[1].toLowerCase()]=t[2]}t=f[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return w===2?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return w||(l.mimeType=e),this},statusCode:function(e){var t;if(e)if(w<2)for(t in e)v[t]=[v[t],e[t]];else S.always(e[S.status]);return this},abort:function(e){var t=e||E;return a&&a.abort(t),T(0,t),this}};p.promise(S).complete=d.add,S.success=S.done,S.error=S.fail,l.url=((e||l.url||vn)+"").replace(yn,"").replace(xn,dn[1]+"//"),l.type=t.method||t.type||l.method||l.type,l.dataTypes=g.trim(l.dataType||"*").toLowerCase().match(b)||[""],l.crossDomain==null&&(n=Tn.exec(l.url.toLowerCase()),l.crossDomain=!(!n||n[1]===dn[1]&&n[2]===dn[2]&&(n[3]||(n[1]==="http:"?80:443))==(dn[3]||(dn[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=g.param(l.data,l.traditional)),Mn(Cn,l,t,S);if(w===2)return S;u=l.global,u&&g.active++===0&&g.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Sn.test(l.type),i=l.url,l.hasContent||(l.data&&(i=l.url+=(gn.test(i)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=bn.test(i)?i.replace(bn,"$1_="+mn++):i+(gn.test(i)?"&":"?")+"_="+mn++)),l.ifModified&&(g.lastModified[i]&&S.setRequestHeader("If-Modified-Since",g.lastModified[i]),g.etag[i]&&S.setRequestHeader("If-None-Match",g.etag[i])),(l.data&&l.hasContent&&l.contentType!==!1||t.contentType)&&S.setRequestHeader("Content-Type",l.contentType),S.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+Ln+"; q=0.01":""):l.accepts["*"]);for(r in l.headers)S.setRequestHeader(r,l.headers[r]);if(!l.beforeSend||l.beforeSend.call(c,S,l)!==!1&&w!==2){E="abort";for(r in{success:1,error:1,complete:1})S[r](l[r]);a=Mn(kn,l,t,S);if(!a)T(-1,"No Transport");else{S.readyState=1,u&&h.trigger("ajaxSend",[S,l]),l.async&&l.timeout>0&&(o=setTimeout(function(){S.abort("timeout")},l.timeout));try{w=1,a.send(m,T)}catch(x){if(!(w<2))throw x;T(-1,x)}}return S}return S.abort()},getScript:function(e,t){return g.get(e,undefined,t,"script")},getJSON:function(e,t,n){return g.get(e,t,n,"json")}}),g.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return g.globalEval(e),e}}}),g.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),g.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=r.head||g("head")[0]||r.documentElement;return{send:function(i,s){t=r.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){if(n||!t.readyState||/loaded|complete/.test(t.readyState))t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||s(200,"success")},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(undefined,!0)}}}});var Hn=[],Bn=/(=)\?(?=&|$)|\?\?/;g.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Hn.pop()||g.expando+"_"+mn++;return this[e]=!0,e}}),g.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,s,o=e.jsonp!==!1&&(Bn.test(e.url)?"url":typeof e.data=="string"&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(e.data)&&"data");if(o||e.dataTypes[0]==="jsonp")return r=e.jsonpCallback=g.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,o?e[o]=e[o].replace(Bn,"$1"+r):e.jsonp!==!1&&(e.url+=(gn.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||g.error(r+" was not called"),s[0]},e.dataTypes[0]="json",i=window[r],window[r]=function(){s=arguments},n.always(function(){window[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Hn.push(r)),s&&g.isFunction(i)&&i(s[0]),s=i=undefined}),"script"});var jn,Fn,In=0,qn=window.ActiveXObject&&function(){var e;for(e in jn)jn[e](undefined,!0)};g.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&Rn()||Un()}:Rn,Fn=g.ajaxSettings.xhr(),g.support.cors=!!Fn&&"withCredentials"in Fn,Fn=g.support.ajax=!!Fn,Fn&&g.ajaxTransport(function(e){if(!e.crossDomain||g.support.cors){var t;return{send:function(n,r){var i,s,o=e.xhr();e.username?o.open(e.type,e.url,e.async,e.username,e.password):o.open(e.type,e.url,e.async);if(e.xhrFields)for(s in e.xhrFields)o[s]=e.xhrFields[s];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),!e.crossDomain&&!n["X-Requested-With"]&&(n["X-Requested-With"]="XMLHttpRequest");try{for(s in n)o.setRequestHeader(s,n[s])}catch(u){}o.send(e.hasContent&&e.data||null),t=function(n,s){var u,a,f,l;try{if(t&&(s||o.readyState===4)){t=undefined,i&&(o.onreadystatechange=g.noop,qn&&delete jn[i]);if(s)o.readyState!==4&&o.abort();else{l={},u=o.status,a=o.getAllResponseHeaders(),typeof o.responseText=="string"&&(l.text=o.responseText);try{f=o.statusText}catch(c){f=""}!u&&e.isLocal&&!e.crossDomain?u=l.text?200:404:u===1223&&(u=204)}}}catch(h){s||r(-1,h)}l&&r(u,f,l,a)},e.async?o.readyState===4?setTimeout(t):(i=++In,qn&&(jn||(jn={},g(window).unload(qn)),jn[i]=t),o.onreadystatechange=t):t()},abort:function(){t&&t(undefined,!0)}}}});var zn,Wn,Xn=/^(?:toggle|show|hide)$/,Vn=new RegExp("^(?:([+-])=|)("+y+")([a-z%]*)$","i"),$n=/queueHooks$/,Jn=[er],Kn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=Vn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(g.cssNumber[e]?"":"px");if(r!=="px"&&u){u=g.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,g.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};return g.Animation=g.extend(Yn,{tweener:function(e,t){g.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Kn[n]=Kn[n]||[],Kn[n].unshift(t)},prefilter:function(e,t){t?Jn.unshift(e):Jn.push(e)}}),g.Tween=tr,tr.prototype={constructor:tr,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(g.cssNumber[n]?"":"px")},cur:function(){var e=tr.propHooks[this.prop];return e&&e.get?e.get(this):tr.propHooks._default.get(this)},run:function(e){var t,n=tr.propHooks[this.prop];return this.options.duration?this.pos=t=g.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tr.propHooks._default.set(this),this}},tr.prototype.init.prototype=tr.prototype,tr.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=g.css(e.elem,e.prop,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){g.fx.step[e.prop]?g.fx.step[e.prop](e):e.elem.style&&(e.elem.style[g.cssProps[e.prop]]!=null||g.cssHooks[e.prop])?g.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},tr.propHooks.scrollTop=tr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},g.each(["toggle","show","hide"],function(e,t){var n=g.fn[t];g.fn[t]=function(e,r,i){return e==null||typeof e=="boolean"?n.apply(this,arguments):this.animate(nr(t,!0),e,r,i)}}),g.fn.extend({fadeTo:function(e,t,n,r){return this.filter(en).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=g.isEmptyObject(e),s=g.speed(t,n,r),o=function(){var t=Yn(this,g.extend({},e),s);o.finish=function(){t.stop(!0)},(i||g._data(this,"finish"))&&t.stop(!0)};return o.finish=o,i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return typeof e!="string"&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=e!=null&&e+"queueHooks",s=g.timers,o=g._data(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&$n.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem===this&&(e==null||s[i].queue===e)&&(s[i].anim.stop(n),t=!1,s.splice(i,1));(t||!n)&&g.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=g._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=g.timers,o=r?r.length:0;n.finish=!0,g.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this);for(t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),g.each({slideDown:nr("show"),slideUp:nr("hide"),slideToggle:nr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){g.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),g.speed=function(e,t,n){var r=e&&typeof e=="object"?g.extend({},e):{complete:n||!n&&t||g.isFunction(e)&&e,duration:e,easing:n&&t||t&&!g.isFunction(t)&&t};r.duration=g.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in g.fx.speeds?g.fx.speeds[r.duration]:g.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){g.isFunction(r.old)&&r.old.call(this),r.queue&&g.dequeue(this,r.queue)},r},g.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},g.timers=[],g.fx=tr.prototype.init,g.fx.tick=function(){var e,t=g.timers,n=0;zn=g.now();for(;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||g.fx.stop(),zn=undefined},g.fx.timer=function(e){e()&&g.timers.push(e)&&g.fx.start()},g.fx.interval=13,g.fx.start=function(){Wn||(Wn=setInterval(g.fx.tick,g.fx.interval))},g.fx.stop=function(){clearInterval(Wn),Wn=null},g.fx.speeds={slow:600,fast:200,_default:400},g.fx.step={},g.expr&&g.expr.filters&&(g.expr.filters.animated=function(e){return g.grep(g.timers,function(t){return e===t.elem}).length}),g.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){g.offset.setOffset(this,e,t)});var t,r,i={top:0,left:0},s=this[0],o=s&&s.ownerDocument;if(!o)return;return t=o.documentElement,g.contains(t,s)?(typeof s.getBoundingClientRect!==n&&(i=s.getBoundingClientRect()),r=rr(o),{top:i.top+(r.pageYOffset||t.scrollTop)-(t.clientTop||0),left:i.left+(r.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):i},g.offset={setOffset:function(e,t,n){var r=g.css(e,"position");r==="static"&&(e.style.position="relative");var i=g(e),s=i.offset(),o=g.css(e,"top"),u=g.css(e,"left"),a=(r==="absolute"||r==="fixed")&&g.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),g.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},g.fn.extend({position:function(){if(!this[0])return;var e,t,n={top:0,left:0},r=this[0];return g.css(r,"position")==="fixed"?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),g.nodeName(e[0],"html")||(n=e.offset()),n.top+=g.css(e[0],"borderTopWidth",!0),n.left+=g.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-g.css(r,"marginTop",!0),left:t.left-n.left-g.css(r,"marginLeft",!0)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||r.documentElement;while(e&&!g.nodeName(e,"html")&&g.css(e,"position")==="static")e=e.offsetParent;return e||r.documentElement})}}),g.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);g.fn[e]=function(r){return g.access(this,function(e,r,i){var s=rr(e);if(i===undefined)return s?t in s?s[t]:s.document.documentElement[r]:e[r];s?s.scrollTo(n?g(s).scrollLeft():i,n?i:g(s).scrollTop()):e[r]=i},e,r,arguments.length,null)}}),g.each({Height:"height",Width:"width"},function(e,t){g.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){g.fn[r]=function(r,i){var s=arguments.length&&(n||typeof r!="boolean"),o=n||(r===!0||i===!0?"margin":"border");return g.access(this,function(t,n,r){var i;return g.isWindow(t)?t.document.documentElement["client"+e]:t.nodeType===9?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?g.css(t,n,o):g.style(t,n,r,o)},t,s?r:undefined,s,null)}})}),g}),define("runtime-browser/errors/proxyerror",["./error"],function(e){var t=function(t,n,r){e.call(this,t,n),this.name="gateway error",this.statusCode=r};return t.prototype=new e,t}),define("runtime-browser/http",["datajslib!jquery","datajslib!errors/proxyerror"],function(e,t){var n=0,r=function(e,n,r){return n>=500?r(new t("Server returned an internal error","status="+n,n)):n>=400?r(new t("Server returned a client error","status="+n,n)):r(null,e,n)};return{request:function(i,s){return i.dataType==="jsonp"&&!i.jsonpCallback&&(i.jsonpCallback="datajslibjsonp"+ ++n),i.success=function(e,t,n){r(e,n.status,s)},i.error=function(e,n,i){if(!e)return s(new t("Network error",i));if(e.status===200)return s(new t("Invalid reponse received from the server",i));r(n,e.status,s)},e.ajax(i)}}}),define("runtime-browser/iso8601",[],function(){var e=/^([0-9]{4})(\-([0-9]{2})(\-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([\-+])([0-9]{2}):([0-9]{2})))?)?)?)?$/,t=/^PT([0-9]+)H([0-9]+)M([0-9]+)S$/;return{toDate:function(t){var n=null,r=0,i=null,s=null;return t?(n=t.trim().match(e),n?(i=new Date(2010,0,1),n[13]?(i.setUTCFullYear(n[1],0,1),i.setUTCHours(0,0,0,0),n[3]&&i.setUTCMonth(n[3]-1),n[5]&&i.setUTCDate(n[5]),n[7]&&i.setUTCHours(n[7]),n[8]&&i.setUTCMinutes(n[8]),n[10]&&i.setUTCSeconds(n[10]),n[12]&&i.setUTCMilliseconds(Number("0."+n[12])*1e3),n[14]&&(r=Number(n[16])*60+Number(n[17]),r*=n[15]=="-"?1:-1,s=i.getTime()+r*60*1e3,i.setTime(s))):(i.setFullYear(n[1],0,1,0,0,0,0),n[3]&&i.setMonth(n[3]-1),n[5]&&i.setDate(n[5]),n[7]&&i.setHours(n[7]),n[8]&&i.setMinutes(n[8]),n[10]&&i.setSeconds(n[10]),n[12]&&i.setMilliseconds(Number("0."+n[12])*1e3)),i):null):null},fromString:function(e){var t=null;return e?(t=new Date(e),isNaN(t.getTime())&&(t=this.toDate(e)),this.fromDate(t)):""},fromDate:function(e){var t=function(e){return e<10?"0"+e:e},n=function(e){return e<10?"00"+e:e<100?"0"+e:e};return!!e&&e instanceof Date&&!isNaN(e.getTime())?e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+(e.getUTCMilliseconds()!==0?"."+n(e.getUTCMilliseconds()):"")+"Z":""},fromDateNoTime:function(e){var t=function(e){return e<10?"0"+e:e};return!!e&&e instanceof Date&&!isNaN(e.getTime())?!e||isNaN(e.getTime())?"":e.getHours()===0&&e.getMinutes()===0&&e.getSeconds()===0&&e.getMilliseconds()===0?e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate()):e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate()):""},toDuration:function(e){if(!e)return 0;var n=e.match(t);if(!n)return 0;var r=0;return n[2]&&(r+=Number(n[2])*3600*1e3),n[3]&&(r+=Number(n[3])*60*1e3),n[4]&&(r+=Number(n[4])*1e3),r},fromDuration:function(e){var t=Math.round(e/1e3),n=Math.floor(t/3600),r=0;return t-=n*3600,r=Math.floor(t/60),t-=r*60,"PT"+n+"H"+r+"M"+t+"S"}}}),define("runtime-browser/pagination",[],function(){return{paginate:function(e,t,n,r,i){var s=0;n&&t>n&&(t=n);var o=Math.floor(e/t),u=e%t;if(o===0)return s=e+t,n&&s>n&&(s=n),{page:1,perPage:s,skip:e};if(i)return{page:o+1,perPage:t,skip:e-o*t};if(u===0)return r&&o+1>r&&n&&t<n?this.paginate(e,n,n,r,!0):{page:o+1,perPage:t,skip:0};var a=Math.floor(e/(t+o-1)),f=Math.ceil((e+t)/(a+1));return r&&n&&a+1>max?this.paginate(e,n,n,r,!0):{page:a+1,perPage:f,skip:e-a*f}}}}),define("databases/dailymotion/lib/common",["datajslib!http","datajslib!iso8601"],function(e,t){var n=/^(https?\:\/\/)?(www\.)?dailymotion.com\//,r=/^([^\/]*)\/.*/;return{api:{video:function(e,t,r){var i=(e||"").replace(n,"").replace(/_.*/,"");i?this.request(i,t,r):r("Video couldn't not be extracted from input field")},searchVideos:function(e,t,i){e=(e||"").replace(n,"").replace(/.*search\//,"").replace(r,"$1"),e?(t.search=e,this.request("videos",t,i)):i("User could not be extracted from input field")},userVideos:function(e,t,i){e=(e||"").replace(n,"").replace(r,"$1").replace(/#.*/,""),e?this.request("user/"+e+"/videos",t,i):i("User could not be extracted from input field")},channelVideos:function(e,t,i){e=(e||"").replace(n,"").replace(/.*channel\//,"").replace(r,"$1").replace(/#.*/,""),e?this.request("channel/"+e+"/videos",t,i):i("Channel could not be extracted from input field")},playlistVideos:function(e,t,i){e=(e||"").replace(n,"").replace(/.*playlist\//,"").replace(r,"$1").replace(/#.*/,""),e?this.request("playlist/"+e+"/videos",t,i):i("Playlist could not be extracted from input field")},groupVideos:function(e,t,i){e=(e||"").replace(n,"").replace(/.*group\//,"").replace(r,"$1").replace(/#.*/,""),e?this.request("group/"+e+"/videos",t,i):i("Group could not be extracted from input field")},request:function(t,n,r){var i="https://api.dailymotion.com/"+t,s={};n=n||{};for(var o in n)s[o]=n[o];s.fields="title,url,embed_url,description,thumbnail_small_url,thumbnail_medium_url,thumbnail_large_url,tags,created_time,duration,owner.url,owner.screenname",e.request({url:i,data:s,dataType:"jsonp"},r)}},process:function(e,n,r){var i=function(e){return{"@type":"VideoObject",itemType:"VideoObject",url:e.url,name:e.title,playerType:"iframe",embedURL:e.embed_url,publisher:{"@type":"Organization",itemType:"Organization",url:"http://www.dailymotion.com/",name:"Dailymotion"},description:e.description,author:[{"@type":"Person",itemType:"Person",url:e["owner.url"],name:e["owner.screenname"]}],image:{"@type":"ImageObject",itemType:"ImageObject",url:e.thumbnail_medium_url,name:e.title,contentURL:e.thumbnail_medium_url,width:160,height:120},genre:e.tags,thumbnail:[{"@type":"ImageObject",itemType:"ImageObject",url:e.thumbnail_small_url,name:e.title,contentURL:e.thumbnail_small_url,width:80,height:60},{"@type":"ImageObject",itemType:"ImageObject",url:e.thumbnail_medium_url,name:e.title,contentURL:e.thumbnail_medium_url,width:160,height:120},{"@type":"ImageObject",itemType:"ImageObject",url:e.thumbnail_large_url,name:e.title,contentURL:e.thumbnail_large_url,width:320,height:240}],uploadDate:e.created_time?t.fromDate(new Date(e.created_time*1e3)):null,duration:t.fromDuration(e.duration*1e3)}},s=[];if(e.length)for(var o=0;o<e.length;o++){var u=e[o];s.push(i(u))}else e&&s.push(i(e));r(null,{entries:s})}}}),define("databases/dailymotion/videos",["datajslib!http","datajslib!iso8601","datajslib!pagination","./lib/common"],function(e,t,n,r){return{desc:{options:{schema:{search:{type:"string",title:"All fields",description:"Enter a string to search in videos tags or descriptions, e.g.: <code>muppets</code>"},user:{type:"string",title:"Username",description:"You may also enter the URL of the user's page on Dailymotion, e.g.: <code>Palmashow</code> or <code>http://www.dailymotion.com/Palmashow</code>"},playlist:{type:"string",title:"Playlist ID",description:"You may also enter the URL of the playlist on Dailymotion, e.g.: <code>x1ig9m</code> or <code>http://www.dailymotion.com/playlist/x1ig9m_hocuspocus_clip-hocus-pocus/1</code>"},channel:{type:"string",title:"Channel name",description:"You may also enter the URL of the channel on Dailymotion, e.g.: <code>fun</code> or <code>http://www.dailymotion.com/fr/channel/fun</code>"},group:{type:"string",title:"Group ID",description:"You may also enter the URL of the group on Dailymotion, e.g.: <code>83480</code> or <code>https://www.dailymotion.com/group/83480</code>"}},form:[{type:"selectfieldset",title:"Search by",items:[{type:"section",legend:"Text",items:["search"]},{type:"section",legend:"User",items:["user"]},{type:"section",legend:"Playlist",items:["playlist"]},{type:"section",legend:"Channel",items:["channel"]},{type:"section",legend:"Group",items:["group"]}]}]},runtimes:["browser","nodejs","win8"],outputType:"VideoObject"},fetch:function(e,t){e=e||{};var i=e.filter||{},s=function(e,t){if(i.user)r.api.userVideos(i.user,e,t);else if(i.channel)r.api.channelVideos(i.channel,e,t);else if(i.playlist)r.api.playlistVideos(i.playlist,e,t);else if(i.group)r.api.groupVideos(i.group,e,t);else{if(!i.search)return t(null,null);r.api.searchVideos(i.search,e,t)}},o=100,u=function(t,n,r,i){var o={};t&&(o.page=t),n&&(o.limit=n),s(o,function(s,o){if(s)return i(s);if(!o)return i("Empty response received");var f=o.list||[];r&&(f=f.slice(r)),a=a.concat(f),e.limit&&a.length<e.limit&&o.has_more?u(t+1,n,0,i):(e.limit&&a.length>e.limit&&(a=a.slice(0,e.limit)),i(null))})};e.skip&&!e.limit&&(e.limit=o);var a=[];e.skip=e.skip||0,e.limit=e.limit||20;var f=n.paginate(e.skip,e.limit,o,o);u(f.page,f.perPage,f.skip,function(e){return t(e,a)})},process:function(e,t,n){r.process(e,t,n)},find:function(e,t){var n=this;n.fetch(e,function(r,i){if(r)return t(r,null);n.process(i,e,function(e,n){return t(e,n)})})}}}),function(){var e=this,t=function(e,t,n){if(!e||!t)return e;var r={},o=function(e,t){var i=null,u=null;if(!e||e!==Object(e))return null;if(e.required){if(e["default"]){r[t]=e["default"];return}e.type==="object"||e.properties?r[t]={}:e.type==="array"||e.items?r[t]=[]:e.type==="string"?r[t]="":e.type==="number"||e.type==="integer"?r[t]=0:e.type==="boolean"?r[t]=!1:r[t]={}}else if(e["default"]&&n){r[t]=e["default"];return}i=e.properties;if(i)for(var a in i)i.hasOwnProperty(a)&&o(i[a],t+"."+a);e.items&&(u=e.items,s(u)&&(u=u[0]),o(u,t+"[]"))};o(t,"");for(var u in r)r.hasOwnProperty(u)&&i(e,u,r[u])},n=function(e,t){var n=t.replace(/\./g,".properties.").replace(/\[.*\](\.|$)/g,".items$1"),i=r(e,n);return i?i["default"]:null},r=function(e,t){var n=e,r=t.split("."),i=null,s=null,o=/\[([0-9]*)\](?:\.|$)/;for(var u=0;u<r.length;u++){if(typeof n!="object")return null;i=r[u],s=i.match(o);if(s){i=i.replace(o,"");if(!_.isArray(n[i]))return null;n=n[i][parseInt(s[1],10)]}else n=n[i]}return n},i=function(e,t,n){var r=t.split("."),i=function(e,t,n){var r=null,o=/\[([0-9]*)\]$/,u=t.shift(),a=0;if(t.length>0){r=u.match(o);if(r){u=u.replace(o,""),s(e[u])||(e[u]=[]),e=e[u];if(r[1]!=="")a=parseInt(r[1],10),e[a]||(e[a]={}),i(e[a],t,n);else for(var f=0;f<e.length;f++)i(e[f],t,n);return}typeof e[u]!="object"&&(e[u]={}),e=e[u],i(e,t,n)}else r=u.match(o),r?(u=u.replace(o,""),s(e[u])||(e[u]=[]),a=parseInt(r[1],10),e[u][a]||(e[u][a]=n)):e[u]||(e[u]=n)};r[0]||r.shift(),i(e,r,n)},s=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"};typeof define!="undefined"?define("runtime-browser/jsonform-defaults",[],function(){return{setDefaultValues:t}}):typeof module!="undefined"&&module.exports?module.exports={setDefaultValues:t}:(e.JSONForm=e.JSONForm||{},e.JSONForm.setDefaultValues=t,e.JSONForm.setObjKey=i,e.JSONForm.getSchemaKeyDefaultValue=n)}();;
;


define("addons/splashscreen/loaded",[],function(){return function(a){return{generate:function(a,b){try{var c=document.getElementsByClassName("_joshfire_factory_splashscreen");c&&c.length&&(c[0].style.opacity="0",setTimeout(function(){c[0].style.display="none"},700))}catch(d){}b()}}}})

;(function(a,b){var c=function(c,e){var f=null,g=null,h=0;return!c||!a||!a.config||!a.config.datasources||!a.config.datasources[c]?null:(e=e||{},f=a.config.datasources[c],e.params&&(f=d(f,e.params)),b(["datajslib!collection"],function(a){if(Object.prototype.toString.call(f)==="[object Array]")if(typeof e.child!="undefined")g=a.getCollection(f[e.child]),g.name=f[e.child].name,g.config=f[e.child];else{g={children:[],find:function(a,b){var c=f.length,d=!1,e=[],h=0,i=function(a,f){c-=1;if(d)return;a&&(d=!0),f&&e.push(f);if(a||c===0)return b(a,{entries:e})};for(h=0;h<g.children.length;h++)g.children[h].find(a,i)}};for(h=0;h<f.length;h++)g.children[h]=a.getCollection(f[h]),g.children[h].name=f[h].name,g.children[h].config=f[h]}else g=a.getCollection(f),g.name=f.name,g.config=f},null,!0),g)},d=function(a,b){if(!a)return null;var c=function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},d=0,e=JSON.stringify(a,null,2),f=null;for(d in b)b.hasOwnProperty(d)&&(f=new RegExp("{{"+c(d)+"}}","g"),e=e.replace(f,b[d]));return JSON.parse(e)};a.getDataSource=c})(window.Joshfire.factory,require);
(function(a,b){a(["datajslib!utils/getthumbnail","datajslib!utils/getthumbnailurl"],function(a,c){b.schemaio=b.schemaio||{},b.schemaio.utils=b.schemaio.utils||{},b.schemaio.utils.getThumbnail=a,b.schemaio.utils.getThumbnailUrl=c},null,!0)})(require,Joshfire);
(function(a,b){var c=function(a){return a=a||document.getElementById("body")||document.documentElement,Object.prototype.toString.call(a)==="[object String]"?document.querySelector?document.querySelector(a):document.getElementById(a):a},d=function(b){var d=[],f=null,g,h,i=[];if(!b)return[];d=a.config.addons||[];for(g=0;g<d.length;g++){f=d[g];for(h=0;h<f.hooks.length;h++)if(b===f.hooks[h]){i.push(new e(f,b));break}}return i.run=i.render=function(a,b,d){var e=0,f=c(a),g=null;d=d||function(){return};var h=0,j=function(a){a&&(g=a),h+=1;if(h===i.length)return d(g)};b=b||{},b.replaceContent&&delete b.replaceContent;for(e=0;e<i.length;e++)i[e].render(f,b,j)},i.startActivity=function(a,b,c){a=a||{},b=b||function(){return},c=c||function(){return};if(i.length>0)i[0].startActivity(a,b,c);else if(c)return c("No installed add-on for the given intent")},i},e=function(a,d){var e=this,f=!1,g=[],h=function(a){f?a():g.push(a)};this.config=a,this.intent=a.intent,this.run=this.render=function(a,b,d){b=b||{},d=d||function(){return},h(function(){if(!e.addon)return d("Add-on not available");if(!e.addon.generate)return d("Invalid add-on, no generate function");var f=c(a),g=f;e.addon.generate(b,function(a,c){return a?d(a):(c?(b.replaceContent?e.setContent(g,c):(g=document.createElement("div"),e.setContent(g,c),f.appendChild(g)),e.addon.enhance&&e.addon.enhance(g,b)):b.replaceContent&&e.setContent(g,""),d())})})},this.generate=function(a,b){a=a||{},b=b||function(){return},h(function(){if(!e.addon)return b("Add-on not available");if(!e.addon.generate)return b("Invalid add-on, no generate function");e.addon.generate(a,b)})},this.setContent=function(a,b){function e(a,b){b(a);for(var c in a.childNodes)e(a.childNodes[c],b)}function f(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()}function g(a){var b=a.text||a.textContent||a.innerHTML||"",c=a.getAttribute("src"),d=document.getElementsByTagName("head")[0]||document.documentElement,e=document.createElement("script");e.type="text/javascript",c&&e.setAttribute("src",c),b&&e.appendChild(document.createTextNode(b)),d.insertBefore(e,d.firstChild),a.parentNode&&a.parentNode.removeChild(a)}var d=c(a);d.innerHTML=(""+b).trim();var h=[],i=null;e(d,function(a){a.nodeName&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&h.push(a)});for(i in h)g(h[i])},this.enhance=function(a,b){b=b||{};if(!this.addon)return;if(!this.addon.enhance)return;var d=c(a);this.addon.enhance(d,b)},this.startActivity=function(a,b,c){a=a||{},b=b||function(){return},c=c||function(){return},h(function(){if(!e.addon)return c("Add-on not available");if(!e.addon.startActivity)return c("Add-on does not implement a startActivity function");e.addon.startActivity(a,b,c)})},b(["addons/"+this.config.name+"/"+d],function(a){e.addon=a({options:e.config.options||{},deploy:Joshfire.factory.config.deploy}),f=!0;for(var b=0,c=g.length;b<c;b++)g.pop()()})};a.getAddOns=d})(window.Joshfire.factory,require);
})();

/*!
 * Add to Homescreen v2.0.1 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
var addToHome = (function (w) {
	var nav = w.navigator,
		isIDevice = 'platform' in nav && (/iphone|ipod|ipad/gi).test(nav.platform),
		isIPad,
		isRetina,
		isSafari,
		isStandalone,
		OSVersion,
		startX = 0,
		startY = 0,
		lastVisit = 0,
		isExpired,
		isSessionActive,
		isReturningVisitor,
		balloon,
		overrideChecks,

		positionInterval,
		closeTimeout,

		options = {
			autostart: true,			// Automatically open the balloon
			returningVisitor: false,	// Show the balloon to returning visitors only (setting this to true is HIGHLY RECCOMENDED)
			animationIn: 'drop',		// drop || bubble || fade
			animationOut: 'fade',		// drop || bubble || fade
			startDelay: 2000,			// 2 seconds from page load before the balloon appears
			lifespan: 15000,			// 15 seconds before it is automatically destroyed
			bottomOffset: 14,			// Distance of the balloon from bottom
			expire: 0,					// Minutes to wait before showing the popup again (0 = always displayed)
			message: '',				// Customize your message or force a language ('' = automatic)
			touchIcon: false,			// Display the touch icon
			arrow: true,				// Display the balloon arrow
			hookOnLoad: true,			// Should we hook to onload event? (really advanced usage)
			iterations: 100				// Internal/debug use
		},

		intl = {
			ca_es: 'Per instalÂ·lar aquesta aplicaciÃ³ al vostre %device premeu %icon i llavors <strong>Afegir a pantalla d\'inici</strong>.',
			cs_cz: 'Pro instalaci aplikace na VÃ¡Å¡ %device, stisknÄ›te %icon a v nabÃ­dce <strong>PÅ™idat na plochu</strong>.',
			da_dk: 'TilfÃ¸j denne side til din %device: tryk pÃ¥ %icon og derefter <strong>FÃ¸j til hjemmeskÃ¦rm</strong>.',
			de_de: 'Installieren Sie diese App auf Ihrem %device: %icon antippen und dann <strong>Zum Home-Bildschirm</strong>.',
			el_gr: 'Î•Î³ÎºÎ±Ï„Î±ÏƒÏ„Î®ÏƒÎµÏ„Îµ Î±Ï…Ï„Î®Î½ Ï„Î·Î½ Î•Ï†Î±ÏÎ¼Î¿Î³Î® ÏƒÏ„Î®Î½ ÏƒÏ…ÏƒÎºÎµÏ…Î® ÏƒÎ±Ï‚ %device: %icon Î¼ÎµÏ„Î¬ Ï€Î±Ï„Î¬Ï„Îµ <strong>Î ÏÎ¿ÏƒÎ¸Î®ÎºÎ· ÏƒÎµ Î‘Ï†ÎµÏ„Î·ÏÎ¯Î±</strong>.',
			en_us: 'Install this web app on your %device: tap %icon and then <strong>Add to Home Screen</strong>.',
			es_es: 'Para instalar esta app en su %device, pulse %icon y seleccione <strong>AÃ±adir a pantalla de inicio</strong>.',
			fi_fi: 'Asenna tÃ¤mÃ¤ web-sovellus laitteeseesi %device: paina %icon ja sen jÃ¤lkeen valitse <strong>LisÃ¤Ã¤ Koti-valikkoon</strong>.',
			fr_fr: 'Ajoutez cette application sur votre %device en cliquant sur %icon, puis <strong>Ajouter Ã  l\'Ã©cran d\'accueil</strong>.',
			he_il: '<span dir="rtl">×”×ª×§×Ÿ ××¤×œ×™×§×¦×™×” ×–×• ×¢×œ ×”-%device ×©×œ×š: ×”×§×© %icon ×•××– <strong>×”×•×¡×£ ×œ×ž×¡×š ×”×‘×™×ª</strong>.</span>',
			hu_hu: 'TelepÃ­tse ezt a web-alkalmazÃ¡st az Ã–n %device-jÃ¡ra: nyomjon a %icon-ra majd a <strong>FÅ‘kÃ©pernyÅ‘hÃ¶z adÃ¡s</strong> gombra.',
			it_it: 'Installa questa applicazione sul tuo %device: premi su %icon e poi <strong>Aggiungi a Home</strong>.',
			ja_jp: 'ã“ã®ã‚¦ã‚§ãƒ–ã‚¢ãƒ—ãƒªã‚’ã‚ãªãŸã®%deviceã«ã‚¤ãƒ³ã‚¹ãƒˆãƒ¼ãƒ«ã™ã‚‹ã«ã¯%iconã‚’ã‚¿ãƒƒãƒ—ã—ã¦<strong>ãƒ›ãƒ¼ãƒ ç”»é¢ã«è¿½åŠ </strong>ã‚’é¸ã‚“ã§ãã ã•ã„ã€‚',
			ko_kr: '%deviceì— ì›¹ì•±ì„ ì„¤ì¹˜í•˜ë ¤ë©´ %iconì„ í„°ì¹˜ í›„ "í™ˆí™”ë©´ì— ì¶”ê°€"ë¥¼ ì„ íƒí•˜ì„¸ìš”',
			nb_no: 'Installer denne appen pÃ¥ din %device: trykk pÃ¥ %icon og deretter <strong>Legg til pÃ¥ Hjem-skjerm</strong>',
			nl_nl: 'Installeer deze webapp op uw %device: tik %icon en dan <strong>Zet in beginscherm</strong>.',
			pl_pl: 'Aby zainstalowaÄ‡ tÄ™ aplikacje na %device: naciÅ›nij %icon a nastÄ™pnie <strong>Dodaj jako ikonÄ™</strong>.',
			pt_br: 'Instale este web app em seu %device: aperte %icon e selecione <strong>Adicionar Ã  Tela Inicio</strong>.',
			pt_pt: 'Para instalar esta aplicaÃ§Ã£o no seu %device, prima o %icon e depois o <strong>Adicionar ao ecrÃ£ principal</strong>.',
			ru_ru: 'Ð£ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚Ðµ ÑÑ‚Ð¾ Ð²ÐµÐ±-Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ Ð½Ð° Ð²Ð°Ñˆ %device: Ð½Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ %icon, Ð·Ð°Ñ‚ÐµÐ¼ <strong>Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð² Â«Ð”Ð¾Ð¼Ð¾Ð¹Â»</strong>.',
			sv_se: 'LÃ¤gg till denna webbapplikation pÃ¥ din %device: tryck pÃ¥ %icon och dÃ¤refter <strong>LÃ¤gg till pÃ¥ hemskÃ¤rmen</strong>.',
			th_th: 'à¸•à¸´à¸”à¸•à¸±à¹‰à¸‡à¹€à¸§à¹‡à¸šà¹à¸­à¸žà¸¯ à¸™à¸µà¹‰à¸šà¸™ %device à¸‚à¸­à¸‡à¸„à¸¸à¸“: à¹à¸•à¸° %icon à¹à¸¥à¸° <strong>à¹€à¸žà¸´à¹ˆà¸¡à¸—à¸µà¹ˆà¸«à¸™à¹‰à¸²à¸ˆà¸­à¹‚à¸®à¸¡</strong>',
			tr_tr: '%device iÃ§in bu uygulamayÄ± kurduktan sonra %icon simgesine dokunarak <strong>Ana Ekrana Ekle</strong>yin.',
			zh_cn: 'æ‚¨å¯ä»¥å°†æ­¤åº”ç”¨ç¨‹å¼å®‰è£…åˆ°æ‚¨çš„ %device ä¸Šã€‚è¯·æŒ‰ %icon ç„¶åŽç‚¹é€‰<strong>æ·»åŠ è‡³ä¸»å±å¹•</strong>ã€‚',
			zh_tw: 'æ‚¨å¯ä»¥å°‡æ­¤æ‡‰ç”¨ç¨‹å¼å®‰è£åˆ°æ‚¨çš„ %device ä¸Šã€‚è«‹æŒ‰ %icon ç„¶å¾Œé»žé¸<strong>åŠ å…¥ä¸»ç•«é¢èž¢å¹•</strong>ã€‚'
		};

	function init () {
		// Preliminary check, prevents all further checks to be performed on iDevices only
		if ( !isIDevice ) return;

		var now = Date.now(),
			i;

		// Merge local with global options
		if (w.addToHomeConfig) {
			for ( i in w.addToHomeConfig ) {
				options[i] = w.addToHomeConfig[i];
			}
		}
		if ( !options.autostart ) options.hookOnLoad = false;

		isIPad = (/ipad/gi).test(nav.platform);
		isRetina = w.devicePixelRatio && w.devicePixelRatio > 1;
		isSafari = nav.appVersion.match(/Safari/gi);
		isStandalone = nav.standalone;
		
		OSVersion = nav.appVersion.match(/OS (\d+_\d+)/i);
		OSVersion = OSVersion[1] ? +OSVersion[1].replace('_', '.') : 0;
		
		lastVisit = +w.localStorage.getItem('addToHome');

		isSessionActive = w.sessionStorage.getItem('addToHomeSession');
		isReturningVisitor = options.returningVisitor ? lastVisit && lastVisit + 28*24*60*60*1000 > now : true;

		if ( !lastVisit ) lastVisit = now;

		// If it is expired we need to reissue a new balloon
		isExpired = isReturningVisitor && lastVisit <= now;

		if ( options.hookOnLoad ) w.addEventListener('load', loaded, false);
		else if ( !options.hookOnLoad && options.autostart ) loaded();
	}

	function loaded () {
		w.removeEventListener('load', loaded, false);

		if ( !isReturningVisitor ) w.localStorage.setItem('addToHome', Date.now());
		else if ( options.expire && isExpired ) w.localStorage.setItem('addToHome', Date.now() + options.expire * 60000);

		if ( !overrideChecks && ( !isSafari || !isExpired || isSessionActive || isStandalone || !isReturningVisitor ) ) return;

		var icons = options.touchIcon ? document.querySelectorAll('head link[rel=apple-touch-icon],head link[rel=apple-touch-icon-precomposed]') : [],
			sizes,
			touchIcon = '',
			closeButton,
			platform = nav.platform.split(' ')[0],
			language = nav.language.replace('-', '_'),
			i, l;

		balloon = document.createElement('div');
		balloon.id = 'addToHomeScreen';
		balloon.style.cssText += 'left:-9999px;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:translate3d(0,0,0);position:' + (OSVersion < 5 ? 'absolute' : 'fixed');

		// Localize message
		if ( options.message in intl ) {		// You may force a language despite the user's locale
			language = options.message;
			options.message = '';
		}
		if ( options.message === '' ) {			// We look for a suitable language (defaulted to en_us)
			options.message = language in intl ? intl[language] : intl['en_us'];
		}

		// Search for the apple-touch-icon
		if ( icons.length ) {
			for ( i = 0, l = icons.length; i < l; i++ ) {
				sizes = icons[i].getAttribute('sizes');

				if ( sizes ) {
					if ( isRetina && sizes == '114x114' ) {
						touchIcon = icons[i].href;
						break;
					}
				} else {
					touchIcon = icons[i].href;
				}
			}

			touchIcon = '<span style="background-image:url(' + touchIcon + ')" class="addToHomeTouchIcon"></span>';
		}

		balloon.className = (isIPad ? 'addToHomeIpad' : 'addToHomeIphone') + (touchIcon ? ' addToHomeWide' : '');
		balloon.innerHTML = touchIcon +
			options.message.replace('%device', platform).replace('%icon', OSVersion >= 4.2 ? '<span class="addToHomeShare"></span>' : '<span class="addToHomePlus">+</span>') +
			(options.arrow ? '<span class="addToHomeArrow"></span>' : '') +
			'<span class="addToHomeClose">\u00D7</span>';

		document.body.appendChild(balloon);

		// Add the close action
		closeButton = balloon.querySelector('.addToHomeClose');
		if ( closeButton ) closeButton.addEventListener('click', clicked, false);

		setTimeout(show, options.startDelay);
	}

	function show () {
		var duration,
			iPadXShift = 160;

		// Set the initial position
		if ( isIPad ) {
			if ( OSVersion < 5 ) {
				startY = w.scrollY;
				startX = w.scrollX;
				iPadXShift = 208;
			}

			balloon.style.top = startY + options.bottomOffset + 'px';
			balloon.style.left = startX + iPadXShift - Math.round(balloon.offsetWidth / 2) + 'px';

			switch ( options.animationIn ) {
				case 'drop':
					duration = '0.6s';
					balloon.style.webkitTransform = 'translate3d(0,' + -(w.scrollY + options.bottomOffset + balloon.offsetHeight) + 'px,0)';
					break;
				case 'bubble':
					duration = '0.6s';
					balloon.style.opacity = '0';
					balloon.style.webkitTransform = 'translate3d(0,' + (startY + 50) + 'px,0)';
					break;
				default:
					duration = '1s';
					balloon.style.opacity = '0';
			}
		} else {
			startY = w.innerHeight + w.scrollY;

			if ( OSVersion < 5 ) {
				startX = Math.round((w.innerWidth - balloon.offsetWidth) / 2) + w.scrollX;
				balloon.style.left = startX + 'px';
				balloon.style.top = startY - balloon.offsetHeight - options.bottomOffset + 'px';
			} else {
				balloon.style.left = '50%';
				balloon.style.marginLeft = -Math.round(balloon.offsetWidth / 2) + 'px';
				balloon.style.bottom = options.bottomOffset + 'px';
			}

			switch (options.animationIn) {
				case 'drop':
					duration = '1s';
					balloon.style.webkitTransform = 'translate3d(0,' + -(startY + options.bottomOffset) + 'px,0)';
					break;
				case 'bubble':
					duration = '0.6s';
					balloon.style.webkitTransform = 'translate3d(0,' + (balloon.offsetHeight + options.bottomOffset + 50) + 'px,0)';
					break;
				default:
					duration = '1s';
					balloon.style.opacity = '0';
			}
		}

		balloon.offsetHeight;	// repaint trick
		balloon.style.webkitTransitionDuration = duration;
		balloon.style.opacity = '1';
		balloon.style.webkitTransform = 'translate3d(0,0,0)';
		balloon.addEventListener('webkitTransitionEnd', transitionEnd, false);

		closeTimeout = setTimeout(close, options.lifespan);
	}

	function manualShow (override) {
		if ( !isIDevice || balloon ) return;

		overrideChecks = override;
		loaded();
	}

	function close () {
		clearInterval( positionInterval );
		clearTimeout( closeTimeout );
		closeTimeout = null;

		var posY = 0,
			posX = 0,
			opacity = '1',
			duration = '0',
			closeButton = balloon.querySelector('.addToHomeClose');

		if ( closeButton ) closeButton.removeEventListener('click', close, false);

		if ( OSVersion < 5 ) {
			posY = isIPad ? w.scrollY - startY : w.scrollY + w.innerHeight - startY;
			posX = isIPad ? w.scrollX - startX : w.scrollX + Math.round((w.innerWidth - balloon.offsetWidth)/2) - startX;
		}

		balloon.style.webkitTransitionProperty = '-webkit-transform,opacity';

		switch ( options.animationOut ) {
			case 'drop':
				if ( isIPad ) {
					duration = '0.4s';
					opacity = '0';
					posY = posY + 50;
				} else {
					duration = '0.6s';
					posY = posY + balloon.offsetHeight + options.bottomOffset + 50;
				}
				break;
			case 'bubble':
				if ( isIPad ) {
					duration = '0.8s';
					posY = posY - balloon.offsetHeight - options.bottomOffset - 50;
				} else {
					duration = '0.4s';
					opacity = '0';
					posY = posY - 50;
				}
				break;
			default:
				duration = '0.8s';
				opacity = '0';
		}

		balloon.addEventListener('webkitTransitionEnd', transitionEnd, false);
		balloon.style.opacity = opacity;
		balloon.style.webkitTransitionDuration = duration;
		balloon.style.webkitTransform = 'translate3d(' + posX + 'px,' + posY + 'px,0)';
	}


	function clicked () {
		w.sessionStorage.setItem('addToHomeSession', '1');
		isSessionActive = true;
		close();
	}

	function transitionEnd () {
		balloon.removeEventListener('webkitTransitionEnd', transitionEnd, false);

		balloon.style.webkitTransitionProperty = '-webkit-transform';
		balloon.style.webkitTransitionDuration = '0.2s';

		// We reached the end!
		if ( !closeTimeout ) {
			balloon.parentNode.removeChild(balloon);
			balloon = null;
			return;
		}

		// On iOS 4 we start checking the element position
		if ( OSVersion < 5 && closeTimeout ) positionInterval = setInterval(setPosition, options.iterations);
	}

	function setPosition () {
		var matrix = new WebKitCSSMatrix(w.getComputedStyle(balloon, null).webkitTransform),
			posY = isIPad ? w.scrollY - startY : w.scrollY + w.innerHeight - startY,
			posX = isIPad ? w.scrollX - startX : w.scrollX + Math.round((w.innerWidth - balloon.offsetWidth) / 2) - startX;

		// Screen didn't move
		if ( posY == matrix.m42 && posX == matrix.m41 ) return;

		balloon.style.webkitTransform = 'translate3d(' + posX + 'px,' + posY + 'px,0)';
	}

	// Clear local and session storages (this is useful primarily in development)
	function reset () {
		w.localStorage.removeItem('addToHome');
		w.sessionStorage.removeItem('addToHomeSession');
	}

	// Bootstrap!
	init();

	return {
		show: manualShow,
		close: close,
		reset: reset
	};
})(this);
=======
/*jslint strict: false, plusplus: false */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {

    var defined = {},
        waiting = {},
        aps = [].slice,
        main, req;

    if (typeof define === "function") {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseName = baseName.split("/");
                baseName = baseName.slice(0, baseName.length - 1);

                name = baseName.concat(name.split("/"));

                //start trimDots
                var i, part;
                for (i = 0; (part = name[i]); i++) {
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            }
        }
        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (waiting.hasOwnProperty(name)) {
            var args = waiting[name];
            delete waiting[name];
            main.apply(undef, args);
        }
        return defined[name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    function makeMap(name, relName) {
        var prefix, plugin,
            index = name.indexOf('!');

        if (index !== -1) {
            prefix = normalize(name.slice(0, index), relName);
            name = name.slice(index + 1);
            plugin = callDep(prefix);

            //Normalize according
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            p: plugin
        };
    }

    main = function (name, deps, callback, relName) {
        var args = [],
            usingExports,
            cjsModule, depName, i, ret, map;

        //Use name if no relName
        if (!relName) {
            relName = name;
        }

        //Call the callback to define the module, if necessary.
        if (typeof callback === 'function') {

            //Default to require, exports, module if no deps if
            //the factory arg has any arguments specified.
            if (!deps.length && callback.length) {
                deps = ['require', 'exports', 'module'];
            }

            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            for (i = 0; i < deps.length; i++) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = makeRequire(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = defined[name] = {};
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = {
                        id: name,
                        uri: '',
                        exports: defined[name]
                    };
                } else if (defined.hasOwnProperty(depName) || waiting.hasOwnProperty(depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw name + ' missing ' + depName;
                }
            }

            ret = callback.apply(defined[name], args);

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef) {
                    defined[name] = cjsModule.exports;
                } else if (!usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = req = function (deps, callback, relName, forceSync) {
        if (typeof deps === "string") {

            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            //Drop the config stuff on the ground.
            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = arguments[2];
            } else {
                deps = [];
            }
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 15);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function () {
        return req;
    };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    define = function (name, deps, callback) {

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (define.unordered) {
            waiting[name] = [name, deps, callback];
        } else {
            main(name, deps, callback);
        }
    };

    define.amd = {
        jQuery: true
    };
}());
define("runtime/hosted/almond", function(){});

/* RequireJS plugin */
define('datajslib',{
  normalize: function (name, normalize) {
    if (name.match(/^runtime\-browser/)) return name;
    return normalize('runtime-browser/' + name);
  },
  load: function (name, req, load, config) {
    //req has the same API as require().
    req([name], function (value) {
      load(value);
    });
  }
});
/**
 * @fileOverview Exposes a getThumbnail function that takes a schema.io item
 * as parameter along with a desired width and/or height and returns the
 * "best" possible item thumbnail for the given dimensions.
 */
define('runtime-browser/utils/getthumbnail',['require'], function (woodman) {
  

  /**
   * Returns true if the given object is an array
   */
  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  /**
   * Parses the given item to extract the best thumbnail that matches or
   * approaches the requested dimensions.
   *
   * The "best" possible thumbnail is defined as the thumbnail whose dimensions
   * are equal or greater than the requested dimensions.
   *
   * The function extracts thumbnails from:
   * - the item itself if it is an ImageObject or similar
   * - item.thumbnail
   * - item.image (taking item.image.thumbnail into account)
   *
   * When the function encounters an image whose dimensions are unknown, it
   * takes for granted that the image is larger than the other images.
   *
   * If all thumbnails are smaller than the requested dimensions, the function
   * returns the largest thumbnail it finds.
   *
   * Note the function returns the ImageObject directly. In particular, any
   * potential update made to the returned object changes the original item.
   *
   * @function
   * @param {Object} item The schema.org item to parse
   * @param {integer} width The desired width in pixels.
   *  Pass 0, null or false to have the function ignore the width.
   * @param {integer} height The desired height in pixels.
   *  Pass 0, null or false to have the function ignore the height.
   * @return {ImageObject} The smallest thumbnail that is larger than the
   *  requested dimension(s). If not found, the largest thumbnail that is
   *  smaller than the requested dimension(s). Null if no thumbnail are found.
   */
  var getThumbnail = function (item, width, height) {
    if (!item) return null;
    

    /**
     * Returns the best thumbnail among the two given thumbnails.
     *
     * @function
     * @param {Object} thumbnail The ImageObject to check
     * @return {boolean} True when the thumbnail is larger than the requested
     *  dimension(s), false otherwise
     */
    var isGood = function (thumbnail) {
      if (!thumbnail) return false;
      var thumbWidth = thumbnail.width || 0;
      var thumbHeight = thumbnail.height || 0;
      return (!thumbWidth || !width || (thumbWidth >= width)) &&
        (!thumbHeight || !height || (thumbHeight >= height));
    };

    /**
     * Checks current thumbnail to see whether it is smaller than the
     * reference thumbnail.
     *
     * Note the current thumbnail should be checked against the requested
     * dimension(s).
     *
     * @function
     * @param {Object} currThumbnail The ImageObject to check
     * @param {Object} refThubmnail The current best known thumbnail
     * @return {boolean} True when the current thumbnail is smaller than the
     *  reference thumbnail
     */
    var isSmaller = function (currThumbnail, refThumbnail) {
      if (!refThumbnail) return true;
      if (!currThumbnail) return false;

      var currWidth = currThumbnail.width || 0;
      var currHeight = currThumbnail.height || 0;
      var isBetter = currWidth && currHeight &&
        ((currWidth <= refThumbnail.width) || !refThumbnail.width) &&
        ((currHeight <= refThumbnail.height) || !refThumbnail.height);

      return isBetter;
    };

    /**
     * Checks current thumbnail to see whether it is larger than the
     * reference thumbnail.
     *
     * In other words, the function returns the exact opposite from "isSmaller"
     *
     * @function
     * @param {Object} currThumbnail The ImageObject to check
     * @param {Object} refThubmnail The current best known thumbnail
     * @return {boolean} True when the current thumbnail is larger than the
     *  reference thumbnail
     */
    var isLarger = function (currThumbnail, refThumbnail) {
      return !isSmaller(currThumbnail, refThumbnail);
    };

    // Compute the list of thumbnail candidates
    var thumbnails = [];
    if (item['@type'] === 'ImageObject') {
      thumbnails.push(item);
    }

    if (item.thumbnail) {
      if (isArray(item.thumbnail)) {
        thumbnails = thumbnails.concat(item.thumbnail);
      }
      else {
        thumbnails.push(item.thumbnail);
      }
    }

    if (item.image) {
      thumbnails.push(item.image);
      if (item.image.thumbnail) {
        if (isArray(item.image.thumbnail)) {
          thumbnails = thumbnails.concat(item.image.thumbnail);
        }
        else {
          thumbnails.push(item.image.thumbnail);
        }
      }
    }

    // No thumbnails, no cry.
    if (thumbnails.length === 0) {
      
      return null;
    }
    

    // Loop through the thumbnail candidates to extract the smallest thumbnail
    // that is larger than the requested dimension(s)
    var i = 0;
    var currThumbnail = null;
    var bestThumbnail = null;
    for (i = 0; i < thumbnails.length; i++) {
      currThumbnail = thumbnails[i];
      if (isGood(currThumbnail)) {
        
        if (isSmaller(currThumbnail, bestThumbnail)) {
          
          bestThumbnail = currThumbnail;
        }
      }
    }
    if (bestThumbnail) {
      
      return bestThumbnail;
    }

    // Loop again, this time to extract the largest thumbnail available
    
    bestThumbnail = thumbnails[0];
    for (i = 0; i < thumbnails.length; i++) {
      currThumbnail = thumbnails[i];
      if (isLarger(currThumbnail, bestThumbnail)) {
        
        bestThumbnail = currThumbnail;
      }
    }

    return bestThumbnail;
  };

  // Expose the "getThumbnail" function to the external world
  return getThumbnail;
});
/**
 * @fileOverview Exposes a getThumbnailUrl function that takes a schema.io item
 * as parameter along with a desired width and/or height and returns the
 * "best" possible item thumbnail URL for the given dimensions.
 *
 * The function merely wraps the getThumbnail module to return the URL instead
 * of the ImageObject of the best thumbnail. It is typically useful in
 * applications that do not need to know the exact dimensions of the returned
 * thumbnail.
 *
 * Note the function returns an empty string when no thumbnail could be found,
 * not null. This allows a direct use of the function within e.g. some string
 * concatenation.
 */
define('runtime-browser/utils/getthumbnailurl',['datajslib!utils/getthumbnail'], function (getThumbnail) {
  var getThumbnailUrl = function (item, width, height) {
    var thumbnail = getThumbnail(item, width, height) || {};
    return thumbnail.contentURL || thumbnail.contentUrl || '';
  };
  return getThumbnailUrl;
});
/**
 * @fileoverview Defines the current runtime environment.
 *
 * This lets datasources and operators know whether they are being run
 * client-side or server-side (this should not be needed most of the
 * time, but is useful, e.g. for graph execution to prepare the graph
 * accordingly)
 */
define('runtime-browser/runtime',{
  name: 'browser'
});
/**
 * @fileoverview Base class for all errors raised by libraries in the datajs
 * lib, individual datasources as well as by the different runtimes.
 */
define('runtime-browser/errors/error',[],function () {

  /**
   * Base error description.
   *
   * The error features an internal name, a message and a custom error object.
   *
   * The message is intended for public consumption. As such, it must not
   * contain any sensitive information.
   *
   * The custom error object is for internal use only (meaning for the
   * environment that locally executes the datasource) and may include sensitive
   * information.
   */
  var BaseError = function (message, err) {
    /**
     * Internal name. Override this name in derivated classes
     */
    this.name = 'error';

    /**
     * The error message
     */
    this.message = message;

    /**
     * The custom error object that provides additional context information,
     * if defined.
     */
    this.err = err;

    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, arguments.callee);
    }
  };
  BaseError.prototype = new Error();

  return BaseError;
});

/**
 * @fileoverview Error that represents an internal error.
 *
 * Internal errors should only be raised when unexpected error conditions
 * occur. In particular, such errors must not be raised when a parameter
 * provided by a third party is invalid.
 */
define('runtime-browser/errors/internalerror',['./error'], function (BaseError) {

  /**
   * Internal error class
   */
  var InternalError = function (message, err) {
    BaseError.call(this, message, err);
    this.name = 'internal error';
  };
  InternalError.prototype = new BaseError();

  return InternalError;
});

/**
 * @fileoverview Error that represents a not-found error.
 *
 * A NotFoundError should typically be raised when a request is made to a
 * non existing entry point or to a non existing datasource.
 */
define('runtime-browser/errors/notfounderror',['./error'], function (BaseError) {

  /**
   * Parameter error class
   */
  var NotFoundError = function (message, err) {
    BaseError.call(this, message, err);
    this.name = 'not found';
  };
  NotFoundError.prototype = new BaseError();

  return NotFoundError;
});

/*
 * @fileoverview Collection factory that creates the appropriate collection
 * object to run a given datasource.
 *
 * The code dynamically delegates to collection.client or collection.proxy
 * depending on whether the datasource needs to run client-side or server-side.
 *
 * If this code is run server-side, trying to run a client-side datasource
 * will throw an error.
 */

define('runtime-browser/collection',[
  'require',
  'require',
  'datajslib!runtime',
  'datajslib!errors/internalerror',
  'datajslib!errors/notfounderror'
], function (woodman, require, runtime, InternalError, NotFoundError) {
  

  // Taken from underscore.js (not included here to save a few bytes)
  var _extend = function(obj1,obj2) {
    for (var key in obj2 ) {
      if ( obj2.hasOwnProperty(key) ) {
        obj1[key] = obj2[key];
      }
    }
    return obj1;
  };

  var collectionFactory = {
    /**
     * Returns the datasource that matches the given source provider and collection.
     * Returned datasource object features a "find" method that takes a query.
     *
     * @function
     * @param {String} datasource The datasource to execute
     * @param {Boolean} atomicCollection True to return an "atomic" collection for
     *  the given datasource, False to return a graph collection that can be used
     *  to execute the datasource. The flag should typically be set when a graph is
     *  run to create the appropriate collections for each node in the graph. Note
     *  that the function does not return a graph if the datasource does not have
     *  inputs and thus does not need to be executed as a graph.
     */
    getCollection: function (datasource, atomicCollection) {
      if (!datasource) {
        // Datasource not set, return an empty collection
        
        return {
          desc: {},
          name: '',
          find: function (options, callback) {
            return callback(null, { entries: [] });
          },
          onLoaded: function (f) {
            f();
          },
          getDesc: function(callback) {
            callback(null, {});
          },
          getOutputType: function() {
            return 'Thing';
          }
        };
      }
      
      return new collection(datasource, atomicCollection);
    }
  };

  /**
   * Collection class that exposes a "find" method to run queries against
   * the underlying datasource.
   *
   * @constructor
   * @param {Object} datasource The datasource description
   * @param {Boolean} atomicCollection True to return an atomic collection,
   *   false to create a graph if needed
   */
  var collection = function (datasource, atomicCollection) {
    var query = datasource.query;
    var self = this;
    var _loadedCallbacks = [];
    var _loaded = false;
    var collectionObject = null;
    var collectionLib = 'datajslib!collection.';
    var collectionError = null;

    var completeQuery = function (options) {
      var extendedQuery = _extend({}, query);
      extendedQuery = _extend(extendedQuery, options);
      if (!extendedQuery.filter) {
        extendedQuery.filter = {};
      }
      if (collectionObject.setDefaultValues) {
        collectionObject.setDefaultValues(extendedQuery.filter);
      }
      return extendedQuery;
    };

    /**
     * Runs the function when the collection is loaded.
     * @function
     * @param {function} f Function to execute. The function won't receive
     *  any parameter.
     * @private
     */
    self.onLoaded = function(f) {
      if (!_loaded) {
        _loadedCallbacks.push(f);
      } else {
        f();
      }
    };

    /**
     * Sends a request to the underlying datasource and calls the callback
     * function once done with the retrieved feed (or the error).
     *
     * @function
     * @param {Object} options Query options that complete/override the query
     *  parameters used to create the collection.
     * @param {function(string,Object)} callback The callback function to call
     *  once done
     * @public
     */
    self.find = function (options, callback) {
      self.onLoaded(function () {
        
        if (collectionError) {
          
          return callback(collectionError);
        }
        if (!collectionObject) {
          
          return callback(new NotFoundError(
            'Collection does not exist.', datasource));
        }

        // Prepare query to run
        var fullQuery = completeQuery(options);

        // Compute maxAge for the collection
        var colMaxAge = 10800;
        if (runtime.mongodb &&
          (typeof runtime.mongodb.cacheMaxAge !== 'undefined')) {
          colMaxAge = runtime.mongodb.cacheMaxAge;
        }
        if (collectionObject.desc &&
          (typeof collectionObject.desc.maxAge !== 'undefined')) {
          colMaxAge = collectionObject.desc.maxAge;
        }

        // Compute maxAge for the query.
        // Maximum age is 3 hours by default.
        var maxAge = colMaxAge;
        if (collectionObject.getMaxAge) {
          maxAge = collectionObject.getMaxAge(fullQuery);
        }
        else if (options.nocache) {
          maxAge = 0;
          
        }
        else if (options.maxAge && (options.maxAge > maxAge) && (maxAge > 0)) {
          maxAge = options.maxAge;
          
        }

        var cacheKeyObject = null;
        if (collectionObject.cache && (maxAge > 0)) {
          
          cacheKeyObject = {
            db: datasource.db,
            col: datasource.col,
            query: JSON.parse(JSON.stringify(fullQuery))
          };
          if (cacheKeyObject.query.nocache) {
            // No need to keep the "nocache" parameter as key to the cache entry
            // (note the "nocache" parameter is not lost from the original
            // "options" object since we're working on a deep clone of it)
            cacheKeyObject.query.nocache = false;
          }
          collectionObject.cache.get(cacheKeyObject, maxAge, function (err, data) {
            if (err) {
              return callback(new InternalError(
                'No way to query the cache', err));
            }
            if (data) {
              
              return callback(null, data);
            }

            
            self._find(fullQuery, function (err, data) {
              if (err) {
                
                return callback(err);
              }

              // Note we don't really care if cache works or not
              // (cache should log an error though)
              
              collectionObject.cache.set(cacheKeyObject, data, maxAge);

              
              return callback(null, data);
            });
          });
        }
        else {
          
          self._find(fullQuery, function (err, data) {
            if (err) {
              
              return callback(err);
            }
            
            return callback(null, data);
          });
        }
      });
    };

    /**
     * Internal version of the find function that runs the collection for real
     * (taking for granted collection is loaded and response is not in cache)
     *
     * @function
     * @param {Object} fullQuery Complete query parameters
     * @param {function(string,Object)} callback The callback function to call
     *  once done
     * @public
     */
    self._find = function (fullQuery, callback) {
      if (collectionObject.find) {
        collectionObject.find(fullQuery, function (err, data) {
          if (data && !data.name && datasource.name) {
            // Propagate datasource title if the returned feed does not have one
            data.name = datasource.name;
          }
          if (data && !data.maxAge) {
            // Add response max-age if not already done
            if (collectionObject.getMaxAge) {
              data.maxAge = collectionObject.getMaxAge(fullQuery);
            }
            else if (collectionObject.desc && collectionObject.desc.maxAge) {
              data.maxAge = collectionObject.desc.maxAge;
            }
          }
          return callback(err, data);
        });
      }
      else if (collectionObject.fetch && collectionObject.process) {
        collectionObject.fetch(fullQuery, function (err, data) {
          if (err) return callback(err, null);
          collectionObject.process(data, fullQuery, function (err, data) {
            if (data && !data.name && datasource.name) {
              // Propagate datasource title if the returned feed does not have one
              data.name = datasource.name;
            }
            if (data && !data.maxAge) {
              // Add response max-age if not already done
              if (collectionObject.getMaxAge) {
                data.maxAge = collectionObject.getMaxAge(fullQuery);
              }
              else if (collectionObject.desc && collectionObject.desc.maxAge) {
                data.maxAge = collectionObject.desc.maxAge;
              }
            }
            return callback(err, data);
          });
        });
      }
      else {
        return callback(new InternalError(
          'Invalid collection (no "fetch", "process", and/or "find")',
          datasource));
      }
    };


    /**
     * Sends a request to the underlying operator and calls the callback
     * function once done with the retrieved feed (or the error).
     *
     * @function
     * @param {Object} data Processor inputs. Typical example for a single
     *  input: { "main": { "entries": [list of items] }}. Input names are
     *  operator specific, "main" by default.
     * @param {Object} options Query options that complete/override the query
     *  parameters used to create the collection.
     * @param {function(string,Object)} callback The callback function to call
     *  once done
     * @public
     */
    self.process = function (data, options, callback) {
      self.onLoaded(function () {
        //console.log('collection', datasource.db, datasource.col, 'process');
        if (collectionError) return callback(collectionError);
        if (!collectionObject) return callback('Collection does not exist.');
        if (collectionObject.process) {
          collectionObject.process(data, completeQuery(options), callback);
        }
        else {
          callback('Collection does not have a "process" method.');
        }
      });
    };


    /**
     * Fetches feed items from the source provider.
     *
     * @function
     * @param {Object} options Query options that complete/override the query
     *  parameters used to create the collection.
     * @param {function(Object, Object)} callback Callback function.
     *   The data type depends on the datasource.
     */
    self.fetch = function (options, callback) {
      self.onLoaded(function () {
        //console.log('collection', datasource.db, datasource.col, 'fetch');
        if (collectionError) return callback(collectionError);
        if (!collectionObject) return callback('Collection does not exist.');
        if (collectionObject.fetch) {
          collectionObject.fetch(completeQuery(options), callback);
        }
        else {
          // Return a null object when the "fetch" method does not exist
          // (Note that "collection.graph" decides to fetch inputs on its
          // own based on this "null" value)
          callback(null, null);
        }
      });
    };


    /**
     * Updates the generic query options for a proper resolution of the
     * inputs of the underlying operator.
     *
     * In particular, the operator might want to adjust "skip" and "limit"
     * depending on what it does.
     *
     * Note there is simply no way for an operator that filters entries or that
     * generates a response from multiple inputs to know beforehand how many
     * items it needs for each input. The adjustment may not be enough. We'll
     * have to live with it to keep things simple enough (otherwise the graph
     * would need to implement some sort of "fetchMore" but there are all sorts
     * of corner-cases to take into account such as the use of intermediary
     * caches)
     *
     * @function
     * @param {Object} options current query options
     * @param {function} callback Callback function called with the error
     *   and/or the new generic options to use to resolve the inputs
     */
    self.updateInputOptions = function (options, callback) {
      self.onLoaded(function () {
        // console.log('collection', datasource.db, datasource.col, 'updateInputOptions');
        if (collectionError) return callback(collectionError);
        if (!collectionObject) return callback('Collection does not exist.');

        // Copy all options (skipping datasource specific filter) by default
        var inputOptions = {};
        for (var key in options) {
          if ((key !== 'filter') &&
            (key !== 'graph') &&
            options.hasOwnProperty(key)) {
            inputOptions[key] = options[key];
          }
        }

        if (collectionObject.updateInputOptions) {
          // The operator may need to adjust query options for its inputs
          collectionObject.updateInputOptions(inputOptions, callback);
        }
        else {
          // The operator does not need to adjust query options
          return callback(null, inputOptions);
        }
      });
    };


    /**
     * Returns true if collection is loaded and exposes a "fetch" function
     *
     * The function is only useful for unit testing purpose.
     *
     * @function
     */
    self.canBeFetched = function () {
      return (collectionObject &&
        !collectionError &&
        collectionObject.fetch);
    };


    /**
     * Returns true if collection is loaded and exposes a "process" function
     *
     * The function is only useful for unit testing purpose.
     *
     * @function
     */
    self.canBeProcessed = function () {
      return (collectionObject &&
        !collectionError &&
        collectionObject.process);
    };


    /**
     * Gets the description of the datasource.
     *
     * The description is a JSON object that details the collection
     * parameters. The returned object is usually the collection's
     * "desc" property, but may be more precise depending on the
     * query options (typically the outputType may be adjusted for
     * a more precise one for the given query)
     *
     * @function
     * @param {function} callback Callback function called with the error
     *  and the description.
     */
    self.getDesc = function (callback) {
      self.onLoaded(function () {
        //console.log('collection', datasource.db, datasource.col, 'getDesc');
        if (collectionError) return callback(collectionError);
        if (!collectionObject) return callback('Collection does not exist.');

        if (collectionObject.setDefaultValues) {
          collectionObject.setDefaultValues(query.filter);
        }

        if (collectionObject.getDesc) {
          return callback(null, collectionObject.getDesc(query));
        }
        else {
          return callback(null, collectionObject.desc);
        }
      });
    };


    /**
     * Returns the type of items that a call to find would return.
     *
     * The output type returned by this function is taken from the datasource
     * query options (the Factory saves the outputType along with
     * query parameters). For datasources that return mixed content, the
     * output type is normally the most precise type that is possible.
     *
     * In the absence of bugs, getOutputType() should return the same value
     * as getDesc().outputType for simple collections.
     *
     * @function
     * @return {string} Type of items returned by the collection,
     *   "Thing" if the output type is not present in the query options.
     */
    self.getOutputType = function () {
      if (datasource.outputType) {
        return datasource.outputType;
      }
      else {
        return 'Thing';
      }
    };

    // Ensure query is set.
    query = query || {};
    if (!query.filter) query.filter = {};

    // Select the right library to require based on the
    // "runtime" property (or the deprecated "runatclient" flag)
    if (!atomicCollection && (datasource.db === 'operator')) {
      // Note it's useless to create a graph client-side if the operator
      // is to run server-side.
      if ((runtime.name !== 'hosted') &&
        !datasource.runatclient &&
        (!datasource.runtime || (datasource.runtime === 'hosted'))) {
        collectionLib += 'proxy';
      }
      else {
        collectionLib += 'graph';
      }
    }
    else if (datasource.runatclient || (datasource.runtime !== 'hosted')) {
      collectionLib += 'client';
    }
    else {
      collectionLib += 'proxy';
    }

    // Require the appropriate factory library and retrieve the collection
    // Run the "loaded" callbacks when done
    require([collectionLib], function (colFactory) {
      colFactory.getCollection(datasource, function (err, col) {
        collectionError = err;
        collectionObject = col;
        if (self.cache) {
          collectionObject.cache = self.cache;
        }
        _loaded = true;
        for (var i=0; i<_loadedCallbacks.length; i++) {
          _loadedCallbacks[i]();
        }
        _loadedCallbacks = [];
      });
    });
  };

  return collectionFactory;
});
/**
 * @fileoverview Represents and executes queries against a datasource defined
 * as an oriented graph.
 *
 * Each node in the graph takes zero, one or more inputs that connect the node
 * to other nodes in the graph. Each node either generates a data feed
 * (no input case), or performs an atomic operation on the data feeds received
 * as inputs.
 *
 * The inputs of an operator are formally described in its description.
 *
 * TODO: return error instead of throwing errors
 */

/*global define*/

define('runtime-browser/collection.graph',[
  'require',
  'datajslib!collection',
  'datajslib!runtime'
], function (woodman, collectionFactory, runtime) {
  

  // The code makes use _.keys, _.isArray, _.each, _.isObject and async.map
  // To avoid having to include the whole Underscore and Async libraries,
  // these functions are copied here
  // TODO: think about that some more, operators and datasources are likely
  // to depend on (at least) Underscore anyway, so this could actually end up
  // duplicating code instead of saving lines of code...
  var breaker = {};
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;
  var _keys = Object.keys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (hasOwnProperty.call(obj, key)) keys[keys.length] = key;
    return keys;
  };
  var _isArray = Array.isArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };
  var _each = function(obj, iterator, context) {
    // Note the use of "==" instead of "===" below is required
    // to enable type coercion.
    if (obj == null) return;
    if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };

  // Extract async.map from the async library
  var asyncMap = (function () {
    var _forEach = function (arr, iterator) {
      if (arr.forEach) {
        return arr.forEach(iterator);
      }
      for (var i = 0; i < arr.length; i += 1) {
        iterator(arr[i], i, arr);
      }
    };

    var _map = function (arr, iterator) {
      if (arr.map) {
        return arr.map(iterator);
      }
      var results = [];
      _forEach(arr, function (x, i, a) {
        results.push(iterator(x, i, a));
      });
      return results;
    };

    var forEach = function (arr, iterator, callback) {
      if (!arr.length) {
        return callback();
      }
      var completed = 0;
      _forEach(arr, function (x) {
        iterator(x, function (err) {
          if (err) {
            callback(err);
            callback = function () {};
          }
          else {
            completed += 1;
            if (completed === arr.length) {
              callback();
            }
          }
        });
      });
    };

    var doParallel = function (fn) {
      return function () {
        var args = Array.prototype.slice.call(arguments);
        return fn.apply(null, [forEach].concat(args));
      };
    };

    var _asyncMap = function (eachfn, arr, iterator, callback) {
      var results = [];
      arr = _map(arr, function (x, i) {
        return {index: i, value: x};
      });
      eachfn(arr, function (x, callback) {
        iterator(x.value, function (err, v) {
          results[x.index] = v;
          callback(err);
        });
      }, function (err) {
        callback(err, results);
      });
    };

    return doParallel(_asyncMap);
  })();


  /**
   * Represents an arbitrary complex datasource within a list of datasources.
   *
   * The class exposes a "find" function that can be used to retrieve the feed
   * entries of the datasource by running the graph it is connected to.
   *
   * @class
   * @param {Object} datatsource The datasource that we're interested in.
   */
  var Graph = function (datasource) {
    var self = this;

    this.counter = 0;
    this.nodes = {};

    // Recurse through the list of connected inputs and build the graph
    // The "ds" parameter must be an object that describes a datasource.
    // The inputs of this datasource should be in ds.query.filter.datasources,
    // which can either be:
    // - a datasource
    // - a reference to a datasource
    // - an array whose items are either a datasource or a reference to
    // a datasource
    // (reference names must be unique across the graph!)
    var buildGraph = function (name, ds) {
      // console.log('buildGraph', ds.db, ds.col);
      // No need to process the same unique name twice
      if (self.nodes[name]) return self.nodes[name];

      // Create a node for the current datasource
      var node = new GraphNode(name, ds, self.nodes);
      self.nodes[name] = node;

      // No need to go any further up in the graph if it runs client-side
      // and if the current node is to run server-side.
      if ((runtime.name !== 'hosted') &&
        !ds.runatclient &&
        (!ds.runtime || (ds.runtime === 'hosted'))) {
        return node;
      }

      // Recurse through the list of connected inputs for the datasource
      if (!ds.query || !ds.query.filter) return node;
      _each(ds.query.filter.datasources, function (inputDatasource, inputName) {
        var refName = null;
        var refNode = null;
        if (_isArray(inputDatasource)) {
          // The input is a multiple datasource
          node.inputNodes[inputName] = [];
          _each(inputDatasource, function (subDatasource, index) {
            var subName = '_:' + (++self.counter);
            var subNode = null;
            if (_isObject(subDatasource)) {
              // The subdatasource is defined in place,
              // build the graph node for the subdatasource
              subNode = buildGraph(subName, subDatasource);
              node.inputNodes[inputName].push(subNode);
            }
            else {
              // The subdatasource is a reference to a datasource,
              // replace the reference by a link to the datasource and
              // build the graph node unless already done
              subName = subDatasource;
              subNode = self.nodes[subName];
              if (subNode) {
                subDatasource = subNode.datasource;
              }
              else {
                subDatasource = ds.query.filter.datasources[subName] ||
                  datasource.query.filter.datasources[subName] ||
                  (datasource.query.graph ? datasource.query.graph[subName] : null);
                if (!subDatasource) {
                  throw new Error('Missing datasource "' + subName + '" detected');
                }
                subNode = buildGraph(subName, subDatasource);
              }
              inputDatasource[index] = subDatasource;
              node.inputNodes[inputName].push(subNode);
            }
          });
        }
        else if (_isObject(inputDatasource)) {
          // The input defines a datasource,
          // build the graph node for the datasource
          refName = '_:' + (++self.counter);
          node.inputNodes[inputName] = buildGraph(refName, inputDatasource);
        }
        else {
          // The input is a reference to a datasource,
          // replace the reference by a link to the datasource and
          // build the graph node unless already done
          refName = inputDatasource;
          refNode = self.nodes[refName];
          if (!refNode) {
            inputDatasource = ds.query.filter.datasources[refName] ||
              datasource.query.filter.datasources[refName] ||
              (datasource.query.graph ? datasource.query.graph[refName] : null);
            if (!inputDatasource) {
              throw new Error('Missing datasource "' + refName + '" detected');
            }
            ds.query.filter.datasources[inputName] = inputDatasource;
            refNode = buildGraph(refName, inputDatasource);
          }
          node.inputNodes[inputName] = refNode;
        }
      });
      return node;
    };

    // Initialize the structure of the graph
    // (this will create all the additional nodes in this.nodes)
    // Note the clone of the initial query as buildGraph is likely going to
    // change the structure in place.
    this.finalNode = buildGraph('_:final', JSON.parse(JSON.stringify(datasource)));
  };


  /**
   * Retrieves the collection feed, running all operators that are connected
   * to the inputs of this collection as necessary.
   *
   * @function
   * @param {Object} options Request parameters
   * @param {function(string,Object)} callback The callback function to call
   *  once done
   * @public
   */
  Graph.prototype.find = function (options, callback) {
    var self = this;

    if (!this.finalNode) {
      
      return callback('No data source to retrieve');
    }

    // Step 1: reset all nodes in the graph
    
    _each(this.nodes, function (node) {
      node.reset();
    });

    // Only keep generic options, query filters are already scattered across
    // the graph and have already been adjusted for execution
    // (typically references to datasources have been expanded to include
    // datasources definition)
    var queryOptions = {};
    _each(options, function (optionValue, optionName) {
      if ((optionName === 'graph') || (optionName === 'filter')) return;
      queryOptions[optionName] = optionValue;
    });

    // Step 2: parse the graph and compute the number of times each node
    // ends up being connected to the final node.
    
    this.finalNode.prepare();

    // Step 3: execute the final node
    
    this.finalNode.find(queryOptions, function (err, values) {
      // Step 4: reset all nodes in the graph to release memory
      
      _each(self.nodes, function (node) {
        node.reset();
      });

      // Final step: pass results back to the caller
      if (err) {
        
      }
      else {
        
      }
      return callback(err, values);
    });
  };


  /**
   * Object that performs an atomic operation on one or more outputs
   * produced by other nodes of the underlying graph that are connected
   * to this node.
   *
   * @class
   * @param {string} id The id of the datasource in the graph
   * @param {Object} ds The datasource definition
   * @param {Object} dsNodes Pointer to the list of nodes in the graph
   */
  var GraphNode = function (id, ds, graphNodes) {
    // Clone the node definition, that's our starting point
    this.id = id;
    this.graphNodes = graphNodes;
    this.datasource = ds;
    this.inputNodes = {};
    this.reset();
  };


  /**
   * Resets node properties to free up resources and allow reuse
   *
   * @function
   */
  GraphNode.prototype.reset = function () {
    this.err = null;
    this.data = null;
    this.running = false;
    this.occurrences = 0;
    this.doneCallbacks = [];
    this.collection = null;
  };


  /**
   * Connects the outputs of the other nodes of the graph to the inputs
   * of this node, as appropriate
   *
   * @class
   */
  GraphNode.prototype.prepare = function () {
    // Increment the maximum number of times the node will take part in the
    // execution of the graph
    this.occurrences += 1;

    // Prepare the underlying collection
    if (this.occurrences === 1) {
      // console.log('prepare', JSON.stringify(this.datasource, null, 2));
      this.collection = collectionFactory.getCollection(this.datasource, true);
    }

    // Infinite loop check
    if (this.occurrences > 1000) {
      throw new Error('Infinite loop detected while preparing datasource execution');
    }

    // Recurse through the list of connected inputs
    // Note the query has been updated inline at graph creation phase
    // to ensure that all inputs can only "reference" a datasource
    // or a list of datasources. In other words, inputs can never define
    // a datasource on their own.
    _each(this.inputNodes, function (inputNode) {
      if (_isArray(inputNode)) {
        // Input is a multiple input
        _each(inputNode, function (subNode) {
          subNode.prepare();
        });
      }
      else {
        inputNode.prepare();
      }
    });
  };


  /**
   * Runs the given function when the operation is done processing.
   * @function
   * @param {function} f Callback function to execute
   * @public
   */
  GraphNode.prototype.onDone = function (callback) {
    this.doneCallbacks.push(callback);
  };


  /**
   * Runs the graph node, fetching the node's inputs as necessary.
   *
   * @function
   * @public
   */
  GraphNode.prototype.find = function (options, callback) {
    var self = this;

    // Finish the execution of the node and trigger the "done" event
    var finishExecution = function (err, values) {
      self.running = false;

      // Temporarily save errors and results
      self.err = err;
      self.data = values;

      // Trigger "done" event, passing copies of errors and results
      // (except when it is the last time the node is to be called)
      _each(self.doneCallbacks, function (doneCallback) {
        var values = null;
        if (self.occurrences > 1) {
          values = JSON.parse(JSON.stringify(self.data));
        }
        else {
          values = self.data;
        }
        doneCallback(self.err, values);
      });
      self.doneCallbacks = [];

      if (self.occurrences === 0) {
        self.err = null;
        self.data = null;
      }
    };

    // Short async function that retrieves an input for the current graph node
    var findInput = function (inputName, cb) {
      var graphNode = self.inputNodes[inputName];
      if (_isArray(graphNode)) {
        // The input is actually a list of inputs, run all subnodes
        asyncMap(graphNode, function (subNode, innerCb) {
          self.collection.updateInputOptions(options, function (err, inputOptions) {
            if (err) return innerCb(err, null);
            subNode.find(inputOptions, innerCb);
          });
        }, cb);
      }
      else {
        self.collection.updateInputOptions(options, function (err, inputOptions) {
          if (err) return cb(err);
          graphNode.find(inputOptions, cb);
        });
      }
    };

    // Register the callback function as a "done" event handler
    this.onDone(function (err, values) {
      self.occurrences -= 1;
      return callback(err, values);
    });

    // Return if the node is already running
    // (the callback function will get called once processing is over)
    if (this.running) {
      // Sanity check: the number of occurrences must be greater
      // than 1 in that case
      if (this.occurrences <= 1) {
        throw new Error('Node is executed more than expected');
      }
      
      return;
    }

    // Report the results if the node has already been run through
    // another path in the graph
    if (this.err || this.data) {
      
      return finishExecution(this.err, this.data);
    }

    // If we're still around, it means the node has not yet been run,
    // time to flag it as "running" and do the work.
    this.running = true;

    if (this.datasource.db === 'operator') {
      // The collection is an operator.
      // Let it fetch its inputs if wants to, in other words if it has inputs
      // and defines a "fetch" method. Fetch its inputs otherwise.
      // Then call "process" with the list of inputs.
      // console.log('collection.graph', this.datasource.db, this.datasource.col, 'find');
      if (!this.inputNodes) {
        
        return finishExecution(null, { entries: [] });
      }

      
      this.collection.fetch(options, function (err, inputs) {
        if (err) {
          
          return finishExecution(err);
        }
        if (inputs !== null) {
          // All inputs are available, time to run the operator!
          
          self.collection.process(inputs, options, function (err, values) {
            // Propagate the inputs' maxAge property (keeping the minimum)
            
            if (values && !values.maxAge) {
              _each(inputs, function (input) {
                if (input.maxAge &&
                  (!values.maxAge || (input.maxAge < values.maxAge))) {
                  values.maxAge = input.maxAge;
                }
              });
            }
            return finishExecution(err, values);
          });
        }
        else {
          // Operator does not implement a "fetch" method, let's do it on our own
          
          asyncMap(_keys(self.inputNodes), findInput, function (err, values) {
            // Final callback called when all inputs have been processed
            if (err) {
              
              return finishExecution(err);
            }

            // Link input results back to input names
            var inputs = {};
            _each(_keys(self.inputNodes), function (key, idx) {
              inputs[key] = values[idx];
            });

            // All inputs are available, time to run the operator!
            
            self.collection.process(inputs, options, function (err, values) {
              // Propagate the inputs' maxAge property (keeping the minimum)
              
              if (values && !values.maxAge) {
                _each(inputs, function (input) {
                  if (input && input.maxAge &&
                    (!values.maxAge || (input.maxAge < values.maxAge))) {
                    values.maxAge = input.maxAge;
                  }
                });
              }
              return finishExecution(err, values);
            });
          });
        }
      });
    }
    else {
      // The collection is a "pure" datasource,
      // or it needs to run server-side
      
      this.collection.find(options, finishExecution);
    }
  };


  return {
    /**
     * Creates a new Collection instance for the final node given as parameter
     *
     * @function
     * @function {Object} datasource The datasource we're interested in
     * @function {function} callback Callback function
     */
    getCollection: function (datasource, callback) {
      
      var collection = new Graph(datasource);
      
      return callback(null, collection);
    }
  };
});
/*
 * @fileoverview Collection factory that creates the appropriate collection
 * object to run a given datasource directly on the client.
 *
 * This version is client-side specific.
 */

define('runtime-browser/collection.client',['require'], function (require) {

  /**
   * Path to databases definitions. This path is relative to the baseUrl
   * config parameter of requirejs.
   *
   * @type {string}
   */
  var urlRoot = 'databases/';


  return {
    /**
     * Returns the datasource that matches the given source provider and collection.
     * Returned datasource object features a "find" method that takes a query
     *
     * @function
     * @param {string} datasource The datasource to execute
     * @param {function} callback Callback function called with created collection
     */
    getCollection: function (datasource, callback) {
      var db = datasource.db;
      var colname = datasource.col;

      require([
        urlRoot + db +'/'+ colname,
        'datajslib!jsonform-defaults'
      ], function (col, defaults) {
        col = col || {};
        col.setDefaultValues = function (filter) {
          var desc = (col.GetDesc ? col.getDesc() : col.desc) || {};
          var options = desc.options || {};
          var schema = options.schema || {};
          if (!schema.properties) {
            schema = { properties: schema };
          }
          defaults.setDefaultValues(filter, schema);
        };
        return callback(null, col);
      });
    }
  };
});
/**
 * @fileoverview The "Update links" operator updates links it finds
 * in the "articleBody" and/or the "content" property of feed items.
 * 
 * Depending on the operation requested, the operator either removes
 * the links or adds a target="_blank" attribute to force the links
 * to open in a new browser window.
  *
 * For the sake of simplifying the amount of code shipped to the client
 * and the amount of processing needed, the operator uses regular
 * expressions to search and replace links in the HTML fragments.
 * By essence, this approach is doomed to fail in some cases
 * (regular expressions cannot account for comments, nested structures
 * or with the use of '>' as attribute values for instance).
 * The solution to do things properly would be to use a real HTML parser.
 */
define('databases/operator/updatelinks',[], function () {

  /**
   * Regular expression used to detect the start-tag of a link
   */
  var reLinkStart = /<a\s[^>]*>/gi;

  /**
   * Regular expression used to detect the end-tag of a link
   */
  var reLinkEnd = /<\/a\s*>/gi;

  return {
    /**
     * Description of the datasource for the factory
     */
    desc: {
      "datasources": {
        "main": {
          "title": "Input",
          "multiple": false
        }
      },
      "options": {
        "action": {
          "type": "string",
          "title": "Requested action",
          "default": "addtarget",
          "enum": [
            "addtarget",
            "addtargetnojs",
            "remove"
          ]
        }
      },
      "form": [
        "datasources.main",
        {
          "key": "action",
          "titleMap": {
            "addtarget": "Force links to open in a new window (with a location bar)",
            "addtargetnojs": "Force links to open in a new window (no location bar)",
            "remove": "Remove links (keeping link titles)"
          }
        }
      ],
      "runtimes": [
        "hosted",
        "browser",
        "nodejs",
        "win8"
      ]
    },


    /**
     * Applies the operator, updating links that appear in the articleBody
     * and content properties of all items.
     *
     * @function
     * @param {Object} data The feed associated with the "main" input.
     *  The feed is updated in place, meaning the feed's "entries" property
     *  is directly updated.
     * @param {Object} query Query parameters.
     * @param {function(Object, Object)} callback Callback function.
     *   The second argument of the callback is the data object given as argument.
     *   Its "entries" property contains the sorted feed.
     */
    process: function (data, query, callback) {
      var action = null;
      var i = 0;
      query = query || {};

      // Sanity checks
      if (data && data.main) {
        data = data.main;
      }
      if (!data || !data.entries || !data.entries.length) {
        return callback(null, {"entries": []});
      }

      // Remove links or force them to open in a new window based on requested
      // action (default is to force them to open in a new window)
      action = this.desc.options.action['default'];
      if (query.filter && query.filter.action) {
        action = query.filter.action;
      }

      // Update feed items
      for (i = 0; i < data.entries.length; i++) {
        this.updateItemLinks(data.entries[i], action);
      }

      // Send updated feed to the callback method
      callback(null, data);
    },


    /**
     * Updates the links that appear in the item's articleBody and content
     * properties, removing them or adding a target="_blank" attribute as
     * needed.
     *
     * Properties are updated in place.
     *
     * @function
     * @param {Object} item The item to update
     * @param {String} action The action to perform on links
     */
    updateItemLinks: function(item, action) {
      if (!item) return;
      if (item.articleBody) {
        item.articleBody = this.updateHtml(item.articleBody, action);
      }
      if (item.content) {
        item.content = this.updateHtml(item.content, action);
      }
    },


    /**
     * Updates links that appear in the given HTML content as requested
     * by the given action and returns the updated HTML fragment.
     *
     * See file overview for warning about the use of regular expressions
     *
     * @function
     * @param {String} html The HTML fragment to update
     * @param {String} action The action to perform
     *  (one of "addtarget" or "remove")
     */
    updateHtml: function(html, action) {
      if (action === 'remove') {
        html = html.replace(reLinkStart, '');
        html = html.replace(reLinkEnd, '');
      }
      else if (action === 'addtarget') {
        html = html.replace(reLinkStart, function (match, p1, offset, string) {
          // The function overrides possible existing "target" attributes. That
          // is done on purpose to prevent links to open in the WebView of the
          // containing application.
          // Note the inclusion of JavaScript (sigh!), needed to force the
          /// addition of a location bar in the popup window that lets the user
          // close the window even when the containing app is run within a
          // WebView in a native app on phones or tablets.
          // (if Cordova is used, the InAppBrowser gets used)
          return '<a target="_blank" onclick="' +
            'window.open(this.href, this.target, \'location=yes\');' +
            'return false;" ' +
            match.substring(3);
        });
      }
      else {
        html = html.replace(reLinkStart, function (match, p1, offset, string) {
          // Same as above except the operator does not add any JavaScript code,
          // meaning the link may open in a popup window that cannot be closed
          // if the app is run within a WebView in a native app on phones or
          // tablets.
          return '<a target="_blank" ' + match.substring(3);
        });
      }
      return html;
    }
  };
});


/*
 * @fileoverview Collection factory that creates the appropriate collection
 * object to request the data server to run the given datasource.
 *
 * This version is client-side specific. It gathers the parameters needed to
 * request the server from the global Joshfire.factory object, in particular:
 *  Joshfire.factory.DATAHOSTPORT
 *  Joshfire.factory.DATAVERSION
 */
/*global Joshfire*/

define('runtime-browser/collection.proxy',[], function () {
  // TODO: find some way to get that information differently,
  // as this code must not rely on a Factory context!
  var globalConfig = Joshfire.factory.globalConfig;

  /**
   * Copies all of the properties in the source objects over to the destination
   * object. It's in-order, so the last source will override properties of the
   * same name in previous arguments.
   * Same code as Underscore.js extend function
   * @see http://documentcloud.github.com/underscore/#extend
   */
  var _extend = function(obj1,obj2) {
    for (var key in obj2 ) {
      if ( obj2.hasOwnProperty(key) ) {
        obj1[key] = obj2[key];
      }
    }
    return obj1;
  };

  /**
   * Lightweight JSONP browser implementation:
   * - sets a global callback function
   * - uses a <script> tag to load the JSON content that will run the callback
   * - detects script loading errors
   * - calls the callback after the given timeout if not already done
   * Based on https://github.com/IntoMethod/Lightweight-JSONP but adjusted to
   * be much more robust, to ensure the final callback method gets called
   * no matter what in particular.
   */
  var JSONP = (function () {
    /**
     * Counter used to name JSONP callback functions and avoid collisions
     * when more than one JSONP request is executed at a given time.
     */
    var counter = 0;

    /**
     * Keep a pointer to the <head> tag in the DOM tree
     */
    var head = document.getElementsByTagName('head')[0];

    return {
      /**
       * Fetches the given URL, expecting the server to return JSONP content
       * @function
       * @param {String} url The URL to fetch.
       * @param {Object} params Query string parameters to send
       * @param {Number} Request timeout (in seconds)
       * @param {function} callback Callback function to call. Potential error
       *  in first parameter, JSON object in second.
       */
      get: function (url, params, timeout, callback) {
        var query = null,
          key = null,
          script = null,
          done = false,
          cleaned = false,
          timeoutID = null,
          jsonFunction = 'json' + (++counter);

        // Internal method that cleans the script tag when
        // it's no longer needed
        var cleanScript = function () {
          if (cleaned) return;
          cleaned = true;
          try {
            script.onload = null;
            script.onreadystatechange = null;
            script.onerror = null;
            if (script.parentNode) {
              script.parentNode.removeChild(script);
            }
          }
          catch (e) {
          }
        };

        // Internal callback method that calls the final callback,
        // clears the timeout and removes the global JSONP callback
        // function. The function returns immediately if it has
        // already been called.
        var cb = function (err, data) {
          if (done) return;
          done = true;
          if (timeoutID) {
            clearTimeout(timeoutID);
          }
          callback(err, data);
          try {
            delete Joshfire.datajs[jsonFunction];
          }
          catch (e) {
          }
          Joshfire.datajs[jsonFunction] = null;
        };

        // Check that there's a URL defined
        // TODO: ensure the URL is somewhat correct
        if (!url) {
          return callback({
            status: 400,
            message: 'No url to request'
          });
        }

        // Prepare query to send
        query = (url.indexOf('?') !== -1) ? '&' : '?';
        params = params || {};
        for (key in params) {
          if (params.hasOwnProperty(key)) {
            query += encodeURIComponent(key) + '=' +
              encodeURIComponent(params[key]) + '&';
          }
        }
        query += 'callback=Joshfire.datajs.' + jsonFunction;

        // Initialize global callback function that will be called
        // when the script is received.
        Joshfire.datajs = Joshfire.datajs || {};
        Joshfire.datajs[jsonFunction] = function (data) {
          // JSON object received, pass it to the final callback method
          // and reset timeout and global callback function
          cb(null, data);
        };

        // Create the script tag that serves as
        // 'fake cross-domain XMLHttpRequest' object
        script = document.createElement('script');
        script.src = url + query;
        script.async = true;

        // Set event handler for the 'onload' event
        // (and 'onreadystatechange' for maximum compatibility,
        // although I'm not quite clear whether there's a browser around
        // that actually triggers such an event)
        // The handler simply cleans up the now useless script tag
        script.onload = script.onreadystatechange = function () {
          if (!this.readyState ||
            (this.readyState === 'loaded') ||
            (this.readyState === 'complete') ||
            (this.readyState === 4)) {
            cleanScript();
          }
        };

        // Set event handler for the 'onerror' event triggered when the script
        // received is not valid. The handler ensures the callback function is
        // properly called and removes the script tag.
        script.onerror = function (err) {
          cleanScript();
          cb({
            status: 500,
            message: 'Invalid script received'
          }, null);
        };

        // Ready to start, add the script to the DOM tree
        head.appendChild(script);

        // ... and start the timeout
        // (canceled if all goes fine)
        timeoutID = setTimeout(function () {
          cleanScript();
          cb({
            status: 500,
            message: 'Timeout exceeded'
          });
        }, timeout * 1000);

        // For info, return the JSONP callback name
        return jsonFunction;
      }
    };
  })();


  /**
   * Datasource collection object that exposes a 'find' method to retrieve
   * feed items from the data proxy.
   *
   * @class
   * @param {String} db The datasource provider
   * @param {String} colname The collection in the provider's catalog
   * @param {Object} options Common query options (e.g. filtering options)
   * @returns {Collection} The collection that matches the given parameter.
   */
  var collection = function (datasource) {
    var options = datasource.query || {};
    var db = datasource.db;
    var colname = datasource.col;
    var id = datasource.id;
    var apikey = datasource.apikey;

    /**
     * Sends a request to the data proxy to fetch collection feed items
     * @function
     * @param {Object} query Query parameters (search field, query filters...)
     * @param {function} callback Callback method that receives a potential
     *  error and the list of data entries as an object. The returned object
     *  includes an 'entries' property that contains the list of items.
     */
    this.find = function (query, callback) {
      var self = this,
        finalQuery = {},
        uri = null;

      // Clone default options
      _extend(finalQuery, options);
      _extend(finalQuery, query);

      // Add API key
      finalQuery.apikey = apikey;

      if (id) {
        // Request on a datasource ID
        uri = 'http://' + globalConfig.DATAHOSTPORT +
          '/api/'+ globalConfig.DATAVERSION +
          '/feed/ds/' + id;
      }
      else {
        if (finalQuery.filter) {
          finalQuery.filter = JSON.stringify(finalQuery.filter);
        }
        uri = 'http://' + globalConfig.DATAHOSTPORT +
          '/api/'+ globalConfig.DATAVERSION +
          '/feed/' + db +'/'+ colname;
      }
      JSONP.get(uri, finalQuery, 30, function (err, data) {
        if (data && !data.name && self.name) {
          // Propagate datasource title to the returned feed
          // if not already set
          data.name = self.name;
        }

        if (err) {
          return callback(err, data);
        }
        else if (data && data.error) {
          return callback(data.error);
        }
        else {
          return callback(null, data);
        }
      });
    };

    /**
     * Gets the description of the datasource.
     *
     * The description is a JSON object that details the collection
     * parameters. The returned object is usually the collection's
     * "desc" property, but may be more precise depending on the
     * query options (typically the outputType may be adjusted for
     * a more precise one for the given query).
     *
     * @function
     * @param {function} callback Callback function called with the error
     *  and the description.
     */
    this.getDesc = function(callback) {
      client.getCollectionDesc(db, colname, options, callback);
    };
  };


  /**
   * API exposed in Joshfire.datajs
   */
  var client = {
    /**
     * Creates a new datasource collection object.
     *
     * Feed items are not fetched at this stage. Call the 'find' method
     * on the returned object to retrieve the feed.
     *
     * @function
     * @param {String} db The datasource provider
     * @param {String} colname The collection in the provider's catalog
     * @param {Object} options Common query options (e.g. filtering options)
     * @returns {Collection} The collection
     */
    getCollection: function (datasource, callback) {
      var col = new collection(datasource);
      return callback(null, col);
    },

    /**
     * Gets the description of the datasource collection
     * from the data proxy.
     *
     * The description is a JSON object that details the collection
     * parameters.
     *
     * @function
     * @param {String} db The datasource provider
     * @param {String} colname The collection in the provider's catalog
     * @param {Object} options Common query options (e.g. filtering options)
     * @param {function} callback Callback function called with the error
     *  and the description.
     */
    getCollectionDesc: function(db, colname, options, callback) {
      var finalQuery = {};
      var uri = null;

      if (options) _extend(finalQuery, options);
      if (finalQuery.filter) {
        finalQuery.filter = JSON.stringify(finalQuery.filter);
      }

      uri = 'http://' + globalConfig.DATAHOSTPORT +
        '/api/' + globalConfig.DATAVERSION +
        '/collection/' + db +'/'+ colname;

      JSONP.get(uri, finalQuery, 30, callback);
    }
  };

  return client;
});
// IMPORTANT: This is a slightly adapted version of jQuery that exposes jQuery
// as an anonymous AMD module. Updated made to the code:
// 1. library wrapped in a "define" call that returns the jQuery object
// 2. line 9587 commented not to export jQuery to the global "window" object
// 3. lines 9600 and following commented to drop named AMD module export
/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */

define('runtime-browser/jquery',[],function () {
// (function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
var
  // The deferred used on DOM ready
  readyList,

  // A central reference to the root jQuery(document)
  rootjQuery,

  // Support: IE<9
  // For `typeof node.method` instead of `node.method !== undefined`
  core_strundefined = typeof undefined,

  // Use the correct document accordingly with window argument (sandbox)
  document = window.document,
  location = window.location,

  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,

  // Map over the $ in case of overwrite
  _$ = window.$,

  // [[Class]] -> type pairs
  class2type = {},

  // List of deleted data cache ids, so we can reuse them
  core_deletedIds = [],

  core_version = "1.9.1",

  // Save a reference to some core methods
  core_concat = core_deletedIds.concat,
  core_push = core_deletedIds.push,
  core_slice = core_deletedIds.slice,
  core_indexOf = core_deletedIds.indexOf,
  core_toString = class2type.toString,
  core_hasOwn = class2type.hasOwnProperty,
  core_trim = core_version.trim,

  // Define a local copy of jQuery
  jQuery = function( selector, context ) {
    // The jQuery object is actually just the init constructor 'enhanced'
    return new jQuery.fn.init( selector, context, rootjQuery );
  },

  // Used for matching numbers
  core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

  // Used for splitting on whitespace
  core_rnotwhite = /\S+/g,

  // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

  // Match a standalone tag
  rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

  // JSON RegExp
  rvalidchars = /^[\],:{}\s]*$/,
  rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
  rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
  rdashAlpha = /-([\da-z])/gi,

  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function( all, letter ) {
    return letter.toUpperCase();
  },

  // The ready event handler
  completed = function( event ) {

    // readyState === "complete" is good enough for us to call the dom ready in oldIE
    if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
      detach();
      jQuery.ready();
    }
  },
  // Clean-up method for dom ready events
  detach = function() {
    if ( document.addEventListener ) {
      document.removeEventListener( "DOMContentLoaded", completed, false );
      window.removeEventListener( "load", completed, false );

    } else {
      document.detachEvent( "onreadystatechange", completed );
      window.detachEvent( "onload", completed );
    }
  };

jQuery.fn = jQuery.prototype = {
  // The current version of jQuery being used
  jquery: core_version,

  constructor: jQuery,
  init: function( selector, context, rootjQuery ) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
      return this;
    }

    // Handle HTML strings
    if ( typeof selector === "string" ) {
      if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [ null, selector, null ];

      } else {
        match = rquickExpr.exec( selector );
      }

      // Match html or make sure no context is specified for #id
      if ( match && (match[1] || !context) ) {

        // HANDLE: $(html) -> $(array)
        if ( match[1] ) {
          context = context instanceof jQuery ? context[0] : context;

          // scripts is true for back-compat
          jQuery.merge( this, jQuery.parseHTML(
            match[1],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ) );

          // HANDLE: $(html, props)
          if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
            for ( match in context ) {
              // Properties of context are called as methods if possible
              if ( jQuery.isFunction( this[ match ] ) ) {
                this[ match ]( context[ match ] );

              // ...and otherwise set as attributes
              } else {
                this.attr( match, context[ match ] );
              }
            }
          }

          return this;

        // HANDLE: $(#id)
        } else {
          elem = document.getElementById( match[2] );

          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if ( elem && elem.parentNode ) {
            // Handle the case where IE and Opera return items
            // by name instead of ID
            if ( elem.id !== match[2] ) {
              return rootjQuery.find( selector );
            }

            // Otherwise, we inject the element directly into the jQuery object
            this.length = 1;
            this[0] = elem;
          }

          this.context = document;
          this.selector = selector;
          return this;
        }

      // HANDLE: $(expr, $(...))
      } else if ( !context || context.jquery ) {
        return ( context || rootjQuery ).find( selector );

      // HANDLE: $(expr, context)
      // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor( context ).find( selector );
      }

    // HANDLE: $(DOMElement)
    } else if ( selector.nodeType ) {
      this.context = this[0] = selector;
      this.length = 1;
      return this;

    // HANDLE: $(function)
    // Shortcut for document ready
    } else if ( jQuery.isFunction( selector ) ) {
      return rootjQuery.ready( selector );
    }

    if ( selector.selector !== undefined ) {
      this.selector = selector.selector;
      this.context = selector.context;
    }

    return jQuery.makeArray( selector, this );
  },

  // Start with an empty selector
  selector: "",

  // The default length of a jQuery object is 0
  length: 0,

  // The number of elements contained in the matched element set
  size: function() {
    return this.length;
  },

  toArray: function() {
    return core_slice.call( this );
  },

  // Get the Nth element in the matched element set OR
  // Get the whole matched element set as a clean array
  get: function( num ) {
    return num == null ?

      // Return a 'clean' array
      this.toArray() :

      // Return just the object
      ( num < 0 ? this[ this.length + num ] : this[ num ] );
  },

  // Take an array of elements and push it onto the stack
  // (returning the new matched element set)
  pushStack: function( elems ) {

    // Build a new jQuery matched element set
    var ret = jQuery.merge( this.constructor(), elems );

    // Add the old object onto the stack (as a reference)
    ret.prevObject = this;
    ret.context = this.context;

    // Return the newly-formed element set
    return ret;
  },

  // Execute a callback for every element in the matched set.
  // (You can seed the arguments with an array of args, but this is
  // only used internally.)
  each: function( callback, args ) {
    return jQuery.each( this, callback, args );
  },

  ready: function( fn ) {
    // Add the callback
    jQuery.ready.promise().done( fn );

    return this;
  },

  slice: function() {
    return this.pushStack( core_slice.apply( this, arguments ) );
  },

  first: function() {
    return this.eq( 0 );
  },

  last: function() {
    return this.eq( -1 );
  },

  eq: function( i ) {
    var len = this.length,
      j = +i + ( i < 0 ? len : 0 );
    return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
  },

  map: function( callback ) {
    return this.pushStack( jQuery.map(this, function( elem, i ) {
      return callback.call( elem, i, elem );
    }));
  },

  end: function() {
    return this.prevObject || this.constructor(null);
  },

  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  push: core_push,
  sort: [].sort,
  splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
  var src, copyIsArray, copy, name, options, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if ( length === i ) {
    target = this;
    --i;
  }

  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ( (options = arguments[ i ]) != null ) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && jQuery.isArray(src) ? src : [];

          } else {
            clone = src && jQuery.isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = jQuery.extend( deep, clone, copy );

        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

jQuery.extend({
  noConflict: function( deep ) {
    if ( window.$ === jQuery ) {
      window.$ = _$;
    }

    if ( deep && window.jQuery === jQuery ) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  },

  // Is the DOM ready to be used? Set to true once it occurs.
  isReady: false,

  // A counter to track how many items to wait for before
  // the ready event fires. See #6781
  readyWait: 1,

  // Hold (or release) the ready event
  holdReady: function( hold ) {
    if ( hold ) {
      jQuery.readyWait++;
    } else {
      jQuery.ready( true );
    }
  },

  // Handle when the DOM is ready
  ready: function( wait ) {

    // Abort if there are pending holds or we're already ready
    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
      return;
    }

    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
    if ( !document.body ) {
      return setTimeout( jQuery.ready );
    }

    // Remember that the DOM is ready
    jQuery.isReady = true;

    // If a normal DOM Ready event fired, decrement, and wait if need be
    if ( wait !== true && --jQuery.readyWait > 0 ) {
      return;
    }

    // If there are functions bound, to execute
    readyList.resolveWith( document, [ jQuery ] );

    // Trigger any bound ready events
    if ( jQuery.fn.trigger ) {
      jQuery( document ).trigger("ready").off("ready");
    }
  },

  // See test/unit/core.js for details concerning isFunction.
  // Since version 1.3, DOM methods and functions like alert
  // aren't supported. They return false on IE (#2968).
  isFunction: function( obj ) {
    return jQuery.type(obj) === "function";
  },

  isArray: Array.isArray || function( obj ) {
    return jQuery.type(obj) === "array";
  },

  isWindow: function( obj ) {
    return obj != null && obj == obj.window;
  },

  isNumeric: function( obj ) {
    return !isNaN( parseFloat(obj) ) && isFinite( obj );
  },

  type: function( obj ) {
    if ( obj == null ) {
      return String( obj );
    }
    return typeof obj === "object" || typeof obj === "function" ?
      class2type[ core_toString.call(obj) ] || "object" :
      typeof obj;
  },

  isPlainObject: function( obj ) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
      return false;
    }

    try {
      // Not own constructor property must be Object
      if ( obj.constructor &&
        !core_hasOwn.call(obj, "constructor") &&
        !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
        return false;
      }
    } catch ( e ) {
      // IE8,9 Will throw exceptions on certain host objects #9897
      return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.

    var key;
    for ( key in obj ) {}

    return key === undefined || core_hasOwn.call( obj, key );
  },

  isEmptyObject: function( obj ) {
    var name;
    for ( name in obj ) {
      return false;
    }
    return true;
  },

  error: function( msg ) {
    throw new Error( msg );
  },

  // data: string of html
  // context (optional): If specified, the fragment will be created in this context, defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
  parseHTML: function( data, context, keepScripts ) {
    if ( !data || typeof data !== "string" ) {
      return null;
    }
    if ( typeof context === "boolean" ) {
      keepScripts = context;
      context = false;
    }
    context = context || document;

    var parsed = rsingleTag.exec( data ),
      scripts = !keepScripts && [];

    // Single tag
    if ( parsed ) {
      return [ context.createElement( parsed[1] ) ];
    }

    parsed = jQuery.buildFragment( [ data ], context, scripts );
    if ( scripts ) {
      jQuery( scripts ).remove();
    }
    return jQuery.merge( [], parsed.childNodes );
  },

  parseJSON: function( data ) {
    // Attempt to parse using the native JSON parser first
    if ( window.JSON && window.JSON.parse ) {
      return window.JSON.parse( data );
    }

    if ( data === null ) {
      return data;
    }

    if ( typeof data === "string" ) {

      // Make sure leading/trailing whitespace is removed (IE can't handle it)
      data = jQuery.trim( data );

      if ( data ) {
        // Make sure the incoming data is actual JSON
        // Logic borrowed from http://json.org/json2.js
        if ( rvalidchars.test( data.replace( rvalidescape, "@" )
          .replace( rvalidtokens, "]" )
          .replace( rvalidbraces, "")) ) {

          return ( new Function( "return " + data ) )();
        }
      }
    }

    jQuery.error( "Invalid JSON: " + data );
  },

  // Cross-browser xml parsing
  parseXML: function( data ) {
    var xml, tmp;
    if ( !data || typeof data !== "string" ) {
      return null;
    }
    try {
      if ( window.DOMParser ) { // Standard
        tmp = new DOMParser();
        xml = tmp.parseFromString( data , "text/xml" );
      } else { // IE
        xml = new ActiveXObject( "Microsoft.XMLDOM" );
        xml.async = "false";
        xml.loadXML( data );
      }
    } catch( e ) {
      xml = undefined;
    }
    if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
      jQuery.error( "Invalid XML: " + data );
    }
    return xml;
  },

  noop: function() {},

  // Evaluates a script in a global context
  // Workarounds based on findings by Jim Driscoll
  // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
  globalEval: function( data ) {
    if ( data && jQuery.trim( data ) ) {
      // We use execScript on Internet Explorer
      // We use an anonymous function so that context is window
      // rather than jQuery in Firefox
      ( window.execScript || function( data ) {
        window[ "eval" ].call( window, data );
      } )( data );
    }
  },

  // Convert dashed to camelCase; used by the css and data modules
  // Microsoft forgot to hump their vendor prefix (#9572)
  camelCase: function( string ) {
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  },

  nodeName: function( elem, name ) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  },

  // args is for internal usage only
  each: function( obj, callback, args ) {
    var value,
      i = 0,
      length = obj.length,
      isArray = isArraylike( obj );

    if ( args ) {
      if ( isArray ) {
        for ( ; i < length; i++ ) {
          value = callback.apply( obj[ i ], args );

          if ( value === false ) {
            break;
          }
        }
      } else {
        for ( i in obj ) {
          value = callback.apply( obj[ i ], args );

          if ( value === false ) {
            break;
          }
        }
      }

    // A special, fast, case for the most common use of each
    } else {
      if ( isArray ) {
        for ( ; i < length; i++ ) {
          value = callback.call( obj[ i ], i, obj[ i ] );

          if ( value === false ) {
            break;
          }
        }
      } else {
        for ( i in obj ) {
          value = callback.call( obj[ i ], i, obj[ i ] );

          if ( value === false ) {
            break;
          }
        }
      }
    }

    return obj;
  },

  // Use native String.trim function wherever possible
  trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
    function( text ) {
      return text == null ?
        "" :
        core_trim.call( text );
    } :

    // Otherwise use our own trimming functionality
    function( text ) {
      return text == null ?
        "" :
        ( text + "" ).replace( rtrim, "" );
    },

  // results is for internal usage only
  makeArray: function( arr, results ) {
    var ret = results || [];

    if ( arr != null ) {
      if ( isArraylike( Object(arr) ) ) {
        jQuery.merge( ret,
          typeof arr === "string" ?
          [ arr ] : arr
        );
      } else {
        core_push.call( ret, arr );
      }
    }

    return ret;
  },

  inArray: function( elem, arr, i ) {
    var len;

    if ( arr ) {
      if ( core_indexOf ) {
        return core_indexOf.call( arr, elem, i );
      }

      len = arr.length;
      i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

      for ( ; i < len; i++ ) {
        // Skip accessing in sparse arrays
        if ( i in arr && arr[ i ] === elem ) {
          return i;
        }
      }
    }

    return -1;
  },

  merge: function( first, second ) {
    var l = second.length,
      i = first.length,
      j = 0;

    if ( typeof l === "number" ) {
      for ( ; j < l; j++ ) {
        first[ i++ ] = second[ j ];
      }
    } else {
      while ( second[j] !== undefined ) {
        first[ i++ ] = second[ j++ ];
      }
    }

    first.length = i;

    return first;
  },

  grep: function( elems, callback, inv ) {
    var retVal,
      ret = [],
      i = 0,
      length = elems.length;
    inv = !!inv;

    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
      retVal = !!callback( elems[ i ], i );
      if ( inv !== retVal ) {
        ret.push( elems[ i ] );
      }
    }

    return ret;
  },

  // arg is for internal usage only
  map: function( elems, callback, arg ) {
    var value,
      i = 0,
      length = elems.length,
      isArray = isArraylike( elems ),
      ret = [];

    // Go through the array, translating each of the items to their
    if ( isArray ) {
      for ( ; i < length; i++ ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }

    // Go through every key on the object,
    } else {
      for ( i in elems ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }
    }

    // Flatten any nested arrays
    return core_concat.apply( [], ret );
  },

  // A global GUID counter for objects
  guid: 1,

  // Bind a function to a context, optionally partially applying any
  // arguments.
  proxy: function( fn, context ) {
    var args, proxy, tmp;

    if ( typeof context === "string" ) {
      tmp = fn[ context ];
      context = fn;
      fn = tmp;
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if ( !jQuery.isFunction( fn ) ) {
      return undefined;
    }

    // Simulated bind
    args = core_slice.call( arguments, 2 );
    proxy = function() {
      return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    return proxy;
  },

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
    var i = 0,
      length = elems.length,
      bulk = key == null;

    // Sets many values
    if ( jQuery.type( key ) === "object" ) {
      chainable = true;
      for ( i in key ) {
        jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
      }

    // Sets one value
    } else if ( value !== undefined ) {
      chainable = true;

      if ( !jQuery.isFunction( value ) ) {
        raw = true;
      }

      if ( bulk ) {
        // Bulk operations run against the entire set
        if ( raw ) {
          fn.call( elems, value );
          fn = null;

        // ...except when executing function values
        } else {
          bulk = fn;
          fn = function( elem, key, value ) {
            return bulk.call( jQuery( elem ), value );
          };
        }
      }

      if ( fn ) {
        for ( ; i < length; i++ ) {
          fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
        }
      }
    }

    return chainable ?
      elems :

      // Gets
      bulk ?
        fn.call( elems ) :
        length ? fn( elems[0], key ) : emptyGet;
  },

  now: function() {
    return ( new Date() ).getTime();
  }
});

jQuery.ready.promise = function( obj ) {
  if ( !readyList ) {

    readyList = jQuery.Deferred();

    // Catch cases where $(document).ready() is called after the browser event has already occurred.
    // we once tried to use readyState "interactive" here, but it caused issues like the one
    // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
    if ( document.readyState === "complete" ) {
      // Handle it asynchronously to allow scripts the opportunity to delay ready
      setTimeout( jQuery.ready );

    // Standards-based browsers support DOMContentLoaded
    } else if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", completed, false );

      // A fallback to window.onload, that will always work
      window.addEventListener( "load", completed, false );

    // If IE event model is used
    } else {
      // Ensure firing before onload, maybe late but safe also for iframes
      document.attachEvent( "onreadystatechange", completed );

      // A fallback to window.onload, that will always work
      window.attachEvent( "onload", completed );

      // If IE and not a frame
      // continually check to see if the document is ready
      var top = false;

      try {
        top = window.frameElement == null && document.documentElement;
      } catch(e) {}

      if ( top && top.doScroll ) {
        (function doScrollCheck() {
          if ( !jQuery.isReady ) {

            try {
              // Use the trick by Diego Perini
              // http://javascript.nwbox.com/IEContentLoaded/
              top.doScroll("left");
            } catch(e) {
              return setTimeout( doScrollCheck, 50 );
            }

            // detach all dom ready events
            detach();

            // and execute any waiting functions
            jQuery.ready();
          }
        })();
      }
    }
  }
  return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
  var length = obj.length,
    type = jQuery.type( obj );

  if ( jQuery.isWindow( obj ) ) {
    return false;
  }

  if ( obj.nodeType === 1 && length ) {
    return true;
  }

  return type === "array" || type !== "function" &&
    ( length === 0 ||
    typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
  var object = optionsCache[ options ] = {};
  jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
    object[ flag ] = true;
  });
  return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *  options: an optional list of space-separated options that will change how
 *      the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
 *
 *  memory:     will keep track of previous values and will call any callback added
 *          after the list has been fired right away with the latest "memorized"
 *          values (like a Deferred)
 *
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)
 *
 *  stopOnFalse:  interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

  // Convert options from String-formatted to Object-formatted if needed
  // (we check in cache first)
  options = typeof options === "string" ?
    ( optionsCache[ options ] || createOptions( options ) ) :
    jQuery.extend( {}, options );

  var // Flag to know if list is currently firing
    firing,
    // Last fire value (for non-forgettable lists)
    memory,
    // Flag to know if list was already fired
    fired,
    // End of the loop when firing
    firingLength,
    // Index of currently firing callback (modified by remove if needed)
    firingIndex,
    // First callback to fire (used internally by add and fireWith)
    firingStart,
    // Actual callback list
    list = [],
    // Stack of fire calls for repeatable lists
    stack = !options.once && [],
    // Fire callbacks
    fire = function( data ) {
      memory = options.memory && data;
      fired = true;
      firingIndex = firingStart || 0;
      firingStart = 0;
      firingLength = list.length;
      firing = true;
      for ( ; list && firingIndex < firingLength; firingIndex++ ) {
        if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
          memory = false; // To prevent further calls using add
          break;
        }
      }
      firing = false;
      if ( list ) {
        if ( stack ) {
          if ( stack.length ) {
            fire( stack.shift() );
          }
        } else if ( memory ) {
          list = [];
        } else {
          self.disable();
        }
      }
    },
    // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        if ( list ) {
          // First, we save the current length
          var start = list.length;
          (function add( args ) {
            jQuery.each( args, function( _, arg ) {
              var type = jQuery.type( arg );
              if ( type === "function" ) {
                if ( !options.unique || !self.has( arg ) ) {
                  list.push( arg );
                }
              } else if ( arg && arg.length && type !== "string" ) {
                // Inspect recursively
                add( arg );
              }
            });
          })( arguments );
          // Do we need to add the callbacks to the
          // current firing batch?
          if ( firing ) {
            firingLength = list.length;
          // With memory, if we're not firing then
          // we should call right away
          } else if ( memory ) {
            firingStart = start;
            fire( memory );
          }
        }
        return this;
      },
      // Remove a callback from the list
      remove: function() {
        if ( list ) {
          jQuery.each( arguments, function( _, arg ) {
            var index;
            while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
              list.splice( index, 1 );
              // Handle firing indexes
              if ( firing ) {
                if ( index <= firingLength ) {
                  firingLength--;
                }
                if ( index <= firingIndex ) {
                  firingIndex--;
                }
              }
            }
          });
        }
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function( fn ) {
        return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
      },
      // Remove all callbacks from the list
      empty: function() {
        list = [];
        return this;
      },
      // Have the list do nothing anymore
      disable: function() {
        list = stack = memory = undefined;
        return this;
      },
      // Is it disabled?
      disabled: function() {
        return !list;
      },
      // Lock the list in its current state
      lock: function() {
        stack = undefined;
        if ( !memory ) {
          self.disable();
        }
        return this;
      },
      // Is it locked?
      locked: function() {
        return !stack;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function( context, args ) {
        args = args || [];
        args = [ context, args.slice ? args.slice() : args ];
        if ( list && ( !fired || stack ) ) {
          if ( firing ) {
            stack.push( args );
          } else {
            fire( args );
          }
        }
        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith( this, arguments );
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };

  return self;
};
jQuery.extend({

  Deferred: function( func ) {
    var tuples = [
        // action, add listener, listener list, final state
        [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
        [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
        [ "notify", "progress", jQuery.Callbacks("memory") ]
      ],
      state = "pending",
      promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done( arguments ).fail( arguments );
          return this;
        },
        then: function( /* fnDone, fnFail, fnProgress */ ) {
          var fns = arguments;
          return jQuery.Deferred(function( newDefer ) {
            jQuery.each( tuples, function( i, tuple ) {
              var action = tuple[ 0 ],
                fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
              // deferred[ done | fail | progress ] for forwarding actions to newDefer
              deferred[ tuple[1] ](function() {
                var returned = fn && fn.apply( this, arguments );
                if ( returned && jQuery.isFunction( returned.promise ) ) {
                  returned.promise()
                    .done( newDefer.resolve )
                    .fail( newDefer.reject )
                    .progress( newDefer.notify );
                } else {
                  newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
                }
              });
            });
            fns = null;
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function( obj ) {
          return obj != null ? jQuery.extend( obj, promise ) : promise;
        }
      },
      deferred = {};

    // Keep pipe for back-compat
    promise.pipe = promise.then;

    // Add list-specific methods
    jQuery.each( tuples, function( i, tuple ) {
      var list = tuple[ 2 ],
        stateString = tuple[ 3 ];

      // promise[ done | fail | progress ] = list.add
      promise[ tuple[1] ] = list.add;

      // Handle state
      if ( stateString ) {
        list.add(function() {
          // state = [ resolved | rejected ]
          state = stateString;

        // [ reject_list | resolve_list ].disable; progress_list.lock
        }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
      }

      // deferred[ resolve | reject | notify ]
      deferred[ tuple[0] ] = function() {
        deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
        return this;
      };
      deferred[ tuple[0] + "With" ] = list.fireWith;
    });

    // Make the deferred a promise
    promise.promise( deferred );

    // Call given func if any
    if ( func ) {
      func.call( deferred, deferred );
    }

    // All done!
    return deferred;
  },

  // Deferred helper
  when: function( subordinate /* , ..., subordinateN */ ) {
    var i = 0,
      resolveValues = core_slice.call( arguments ),
      length = resolveValues.length,

      // the count of uncompleted subordinates
      remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

      // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
      deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

      // Update function for both resolve and progress values
      updateFunc = function( i, contexts, values ) {
        return function( value ) {
          contexts[ i ] = this;
          values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
          if( values === progressValues ) {
            deferred.notifyWith( contexts, values );
          } else if ( !( --remaining ) ) {
            deferred.resolveWith( contexts, values );
          }
        };
      },

      progressValues, progressContexts, resolveContexts;

    // add listeners to Deferred subordinates; treat others as resolved
    if ( length > 1 ) {
      progressValues = new Array( length );
      progressContexts = new Array( length );
      resolveContexts = new Array( length );
      for ( ; i < length; i++ ) {
        if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
          resolveValues[ i ].promise()
            .done( updateFunc( i, resolveContexts, resolveValues ) )
            .fail( deferred.reject )
            .progress( updateFunc( i, progressContexts, progressValues ) );
        } else {
          --remaining;
        }
      }
    }

    // if we're not waiting on anything, resolve the master
    if ( !remaining ) {
      deferred.resolveWith( resolveContexts, resolveValues );
    }

    return deferred.promise();
  }
});
jQuery.support = (function() {

  var support, all, a,
    input, select, fragment,
    opt, eventName, isSupported, i,
    div = document.createElement("div");

  // Setup
  div.setAttribute( "className", "t" );
  div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

  // Support tests won't run in some limited or non-browser environments
  all = div.getElementsByTagName("*");
  a = div.getElementsByTagName("a")[ 0 ];
  if ( !all || !a || !all.length ) {
    return {};
  }

  // First batch of tests
  select = document.createElement("select");
  opt = select.appendChild( document.createElement("option") );
  input = div.getElementsByTagName("input")[ 0 ];

  a.style.cssText = "top:1px;float:left;opacity:.5";
  support = {
    // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
    getSetAttribute: div.className !== "t",

    // IE strips leading whitespace when .innerHTML is used
    leadingWhitespace: div.firstChild.nodeType === 3,

    // Make sure that tbody elements aren't automatically inserted
    // IE will insert them into empty tables
    tbody: !div.getElementsByTagName("tbody").length,

    // Make sure that link elements get serialized correctly by innerHTML
    // This requires a wrapper element in IE
    htmlSerialize: !!div.getElementsByTagName("link").length,

    // Get the style information from getAttribute
    // (IE uses .cssText instead)
    style: /top/.test( a.getAttribute("style") ),

    // Make sure that URLs aren't manipulated
    // (IE normalizes it by default)
    hrefNormalized: a.getAttribute("href") === "/a",

    // Make sure that element opacity exists
    // (IE uses filter instead)
    // Use a regex to work around a WebKit issue. See #5145
    opacity: /^0.5/.test( a.style.opacity ),

    // Verify style float existence
    // (IE uses styleFloat instead of cssFloat)
    cssFloat: !!a.style.cssFloat,

    // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
    checkOn: !!input.value,

    // Make sure that a selected-by-default option has a working selected property.
    // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
    optSelected: opt.selected,

    // Tests for enctype support on a form (#6743)
    enctype: !!document.createElement("form").enctype,

    // Makes sure cloning an html5 element does not cause problems
    // Where outerHTML is undefined, this still works
    html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

    // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
    boxModel: document.compatMode === "CSS1Compat",

    // Will be defined later
    deleteExpando: true,
    noCloneEvent: true,
    inlineBlockNeedsLayout: false,
    shrinkWrapBlocks: false,
    reliableMarginRight: true,
    boxSizingReliable: true,
    pixelPosition: false
  };

  // Make sure checked status is properly cloned
  input.checked = true;
  support.noCloneChecked = input.cloneNode( true ).checked;

  // Make sure that the options inside disabled selects aren't marked as disabled
  // (WebKit marks them as disabled)
  select.disabled = true;
  support.optDisabled = !opt.disabled;

  // Support: IE<9
  try {
    delete div.test;
  } catch( e ) {
    support.deleteExpando = false;
  }

  // Check if we can trust getAttribute("value")
  input = document.createElement("input");
  input.setAttribute( "value", "" );
  support.input = input.getAttribute( "value" ) === "";

  // Check if an input maintains its value after becoming a radio
  input.value = "t";
  input.setAttribute( "type", "radio" );
  support.radioValue = input.value === "t";

  // #11217 - WebKit loses check when the name is after the checked attribute
  input.setAttribute( "checked", "t" );
  input.setAttribute( "name", "t" );

  fragment = document.createDocumentFragment();
  fragment.appendChild( input );

  // Check if a disconnected checkbox will retain its checked
  // value of true after appended to the DOM (IE6/7)
  support.appendChecked = input.checked;

  // WebKit doesn't clone checked state correctly in fragments
  support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

  // Support: IE<9
  // Opera does not clone events (and typeof div.attachEvent === undefined).
  // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
  if ( div.attachEvent ) {
    div.attachEvent( "onclick", function() {
      support.noCloneEvent = false;
    });

    div.cloneNode( true ).click();
  }

  // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
  // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
  for ( i in { submit: true, change: true, focusin: true }) {
    div.setAttribute( eventName = "on" + i, "t" );

    support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
  }

  div.style.backgroundClip = "content-box";
  div.cloneNode( true ).style.backgroundClip = "";
  support.clearCloneStyle = div.style.backgroundClip === "content-box";

  // Run tests that need a body at doc ready
  jQuery(function() {
    var container, marginDiv, tds,
      divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
      body = document.getElementsByTagName("body")[0];

    if ( !body ) {
      // Return for frameset docs that don't have a body
      return;
    }

    container = document.createElement("div");
    container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

    body.appendChild( container ).appendChild( div );

    // Support: IE8
    // Check if table cells still have offsetWidth/Height when they are set
    // to display:none and there are still other visible table cells in a
    // table row; if so, offsetWidth/Height are not reliable for use when
    // determining if an element has been hidden directly using
    // display:none (it is still safe to use offsets if a parent element is
    // hidden; don safety goggles and see bug #4512 for more information).
    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
    tds = div.getElementsByTagName("td");
    tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
    isSupported = ( tds[ 0 ].offsetHeight === 0 );

    tds[ 0 ].style.display = "";
    tds[ 1 ].style.display = "none";

    // Support: IE8
    // Check if empty table cells still have offsetWidth/Height
    support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

    // Check box-sizing and margin behavior
    div.innerHTML = "";
    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
    support.boxSizing = ( div.offsetWidth === 4 );
    support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

    // Use window.getComputedStyle because jsdom on node.js will break without it.
    if ( window.getComputedStyle ) {
      support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
      support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

      // Check if div with explicit width and no margin-right incorrectly
      // gets computed margin-right based on width of container. (#3333)
      // Fails in WebKit before Feb 2011 nightlies
      // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
      marginDiv = div.appendChild( document.createElement("div") );
      marginDiv.style.cssText = div.style.cssText = divReset;
      marginDiv.style.marginRight = marginDiv.style.width = "0";
      div.style.width = "1px";

      support.reliableMarginRight =
        !parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
    }

    if ( typeof div.style.zoom !== core_strundefined ) {
      // Support: IE<8
      // Check if natively block-level elements act like inline-block
      // elements when setting their display to 'inline' and giving
      // them layout
      div.innerHTML = "";
      div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
      support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

      // Support: IE6
      // Check if elements with layout shrink-wrap their children
      div.style.display = "block";
      div.innerHTML = "<div></div>";
      div.firstChild.style.width = "5px";
      support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

      if ( support.inlineBlockNeedsLayout ) {
        // Prevent IE 6 from affecting layout for positioned elements #11048
        // Prevent IE from shrinking the body in IE 7 mode #12869
        // Support: IE<8
        body.style.zoom = 1;
      }
    }

    body.removeChild( container );

    // Null elements to avoid leaks in IE
    container = div = tds = marginDiv = null;
  });

  // Null elements to avoid leaks in IE
  all = select = fragment = opt = a = input = null;

  return support;
})();

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
  rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
  if ( !jQuery.acceptData( elem ) ) {
    return;
  }

  var thisCache, ret,
    internalKey = jQuery.expando,
    getByName = typeof name === "string",

    // We have to handle DOM nodes and JS objects differently because IE6-7
    // can't GC object references properly across the DOM-JS boundary
    isNode = elem.nodeType,

    // Only DOM nodes need the global jQuery cache; JS object data is
    // attached directly to the object so GC can occur automatically
    cache = isNode ? jQuery.cache : elem,

    // Only defining an ID for JS objects if its cache already exists allows
    // the code to shortcut on the same path as a DOM node with no cache
    id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

  // Avoid doing any more work than we need to when trying to get data on an
  // object that has no data at all
  if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
    return;
  }

  if ( !id ) {
    // Only DOM nodes need a new unique ID for each element since their data
    // ends up in the global cache
    if ( isNode ) {
      elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
    } else {
      id = internalKey;
    }
  }

  if ( !cache[ id ] ) {
    cache[ id ] = {};

    // Avoids exposing jQuery metadata on plain JS objects when the object
    // is serialized using JSON.stringify
    if ( !isNode ) {
      cache[ id ].toJSON = jQuery.noop;
    }
  }

  // An object can be passed to jQuery.data instead of a key/value pair; this gets
  // shallow copied over onto the existing cache
  if ( typeof name === "object" || typeof name === "function" ) {
    if ( pvt ) {
      cache[ id ] = jQuery.extend( cache[ id ], name );
    } else {
      cache[ id ].data = jQuery.extend( cache[ id ].data, name );
    }
  }

  thisCache = cache[ id ];

  // jQuery data() is stored in a separate object inside the object's internal data
  // cache in order to avoid key collisions between internal data and user-defined
  // data.
  if ( !pvt ) {
    if ( !thisCache.data ) {
      thisCache.data = {};
    }

    thisCache = thisCache.data;
  }

  if ( data !== undefined ) {
    thisCache[ jQuery.camelCase( name ) ] = data;
  }

  // Check for both converted-to-camel and non-converted data property names
  // If a data property was specified
  if ( getByName ) {

    // First Try to find as-is property data
    ret = thisCache[ name ];

    // Test for null|undefined property data
    if ( ret == null ) {

      // Try to find the camelCased property
      ret = thisCache[ jQuery.camelCase( name ) ];
    }
  } else {
    ret = thisCache;
  }

  return ret;
}

function internalRemoveData( elem, name, pvt ) {
  if ( !jQuery.acceptData( elem ) ) {
    return;
  }

  var i, l, thisCache,
    isNode = elem.nodeType,

    // See jQuery.data for more information
    cache = isNode ? jQuery.cache : elem,
    id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

  // If there is already no cache entry for this object, there is no
  // purpose in continuing
  if ( !cache[ id ] ) {
    return;
  }

  if ( name ) {

    thisCache = pvt ? cache[ id ] : cache[ id ].data;

    if ( thisCache ) {

      // Support array or space separated string names for data keys
      if ( !jQuery.isArray( name ) ) {

        // try the string as a key before any manipulation
        if ( name in thisCache ) {
          name = [ name ];
        } else {

          // split the camel cased version by spaces unless a key with the spaces exists
          name = jQuery.camelCase( name );
          if ( name in thisCache ) {
            name = [ name ];
          } else {
            name = name.split(" ");
          }
        }
      } else {
        // If "name" is an array of keys...
        // When data is initially created, via ("key", "val") signature,
        // keys will be converted to camelCase.
        // Since there is no way to tell _how_ a key was added, remove
        // both plain key and camelCase key. #12786
        // This will only penalize the array argument path.
        name = name.concat( jQuery.map( name, jQuery.camelCase ) );
      }

      for ( i = 0, l = name.length; i < l; i++ ) {
        delete thisCache[ name[i] ];
      }

      // If there is no data left in the cache, we want to continue
      // and let the cache object itself get destroyed
      if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
        return;
      }
    }
  }

  // See jQuery.data for more information
  if ( !pvt ) {
    delete cache[ id ].data;

    // Don't destroy the parent cache unless the internal data object
    // had been the only thing left in it
    if ( !isEmptyDataObject( cache[ id ] ) ) {
      return;
    }
  }

  // Destroy the cache
  if ( isNode ) {
    jQuery.cleanData( [ elem ], true );

  // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
  } else if ( jQuery.support.deleteExpando || cache != cache.window ) {
    delete cache[ id ];

  // When all else fails, null
  } else {
    cache[ id ] = null;
  }
}

jQuery.extend({
  cache: {},

  // Unique for each copy of jQuery on the page
  // Non-digits removed to match rinlinejQuery
  expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

  // The following elements throw uncatchable exceptions if you
  // attempt to add expando properties to them.
  noData: {
    "embed": true,
    // Ban all objects except for Flash (which handle expandos)
    "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    "applet": true
  },

  hasData: function( elem ) {
    elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
    return !!elem && !isEmptyDataObject( elem );
  },

  data: function( elem, name, data ) {
    return internalData( elem, name, data );
  },

  removeData: function( elem, name ) {
    return internalRemoveData( elem, name );
  },

  // For internal use only.
  _data: function( elem, name, data ) {
    return internalData( elem, name, data, true );
  },

  _removeData: function( elem, name ) {
    return internalRemoveData( elem, name, true );
  },

  // A method for determining if a DOM node can handle the data expando
  acceptData: function( elem ) {
    // Do not set data on non-element because it will not be cleared (#8335).
    if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
      return false;
    }

    var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

    // nodes accept data unless otherwise specified; rejection can be conditional
    return !noData || noData !== true && elem.getAttribute("classid") === noData;
  }
});

jQuery.fn.extend({
  data: function( key, value ) {
    var attrs, name,
      elem = this[0],
      i = 0,
      data = null;

    // Gets all values
    if ( key === undefined ) {
      if ( this.length ) {
        data = jQuery.data( elem );

        if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
          attrs = elem.attributes;
          for ( ; i < attrs.length; i++ ) {
            name = attrs[i].name;

            if ( !name.indexOf( "data-" ) ) {
              name = jQuery.camelCase( name.slice(5) );

              dataAttr( elem, name, data[ name ] );
            }
          }
          jQuery._data( elem, "parsedAttrs", true );
        }
      }

      return data;
    }

    // Sets multiple values
    if ( typeof key === "object" ) {
      return this.each(function() {
        jQuery.data( this, key );
      });
    }

    return jQuery.access( this, function( value ) {

      if ( value === undefined ) {
        // Try to fetch any internally stored data first
        return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
      }

      this.each(function() {
        jQuery.data( this, key, value );
      });
    }, null, value, arguments.length > 1, null, true );
  },

  removeData: function( key ) {
    return this.each(function() {
      jQuery.removeData( this, key );
    });
  }
});

function dataAttr( elem, key, data ) {
  // If nothing was found internally, try to fetch any
  // data from the HTML5 data-* attribute
  if ( data === undefined && elem.nodeType === 1 ) {

    var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

    data = elem.getAttribute( name );

    if ( typeof data === "string" ) {
      try {
        data = data === "true" ? true :
          data === "false" ? false :
          data === "null" ? null :
          // Only convert to a number if it doesn't change the string
          +data + "" === data ? +data :
          rbrace.test( data ) ? jQuery.parseJSON( data ) :
            data;
      } catch( e ) {}

      // Make sure we set the data so it isn't changed later
      jQuery.data( elem, key, data );

    } else {
      data = undefined;
    }
  }

  return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
  var name;
  for ( name in obj ) {

    // if the public data object is empty, the private is still empty
    if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
      continue;
    }
    if ( name !== "toJSON" ) {
      return false;
    }
  }

  return true;
}
jQuery.extend({
  queue: function( elem, type, data ) {
    var queue;

    if ( elem ) {
      type = ( type || "fx" ) + "queue";
      queue = jQuery._data( elem, type );

      // Speed up dequeue by getting out quickly if this is just a lookup
      if ( data ) {
        if ( !queue || jQuery.isArray(data) ) {
          queue = jQuery._data( elem, type, jQuery.makeArray(data) );
        } else {
          queue.push( data );
        }
      }
      return queue || [];
    }
  },

  dequeue: function( elem, type ) {
    type = type || "fx";

    var queue = jQuery.queue( elem, type ),
      startLength = queue.length,
      fn = queue.shift(),
      hooks = jQuery._queueHooks( elem, type ),
      next = function() {
        jQuery.dequeue( elem, type );
      };

    // If the fx queue is dequeued, always remove the progress sentinel
    if ( fn === "inprogress" ) {
      fn = queue.shift();
      startLength--;
    }

    hooks.cur = fn;
    if ( fn ) {

      // Add a progress sentinel to prevent the fx queue from being
      // automatically dequeued
      if ( type === "fx" ) {
        queue.unshift( "inprogress" );
      }

      // clear up the last queue stop function
      delete hooks.stop;
      fn.call( elem, next, hooks );
    }

    if ( !startLength && hooks ) {
      hooks.empty.fire();
    }
  },

  // not intended for public consumption - generates a queueHooks object, or returns the current one
  _queueHooks: function( elem, type ) {
    var key = type + "queueHooks";
    return jQuery._data( elem, key ) || jQuery._data( elem, key, {
      empty: jQuery.Callbacks("once memory").add(function() {
        jQuery._removeData( elem, type + "queue" );
        jQuery._removeData( elem, key );
      })
    });
  }
});

jQuery.fn.extend({
  queue: function( type, data ) {
    var setter = 2;

    if ( typeof type !== "string" ) {
      data = type;
      type = "fx";
      setter--;
    }

    if ( arguments.length < setter ) {
      return jQuery.queue( this[0], type );
    }

    return data === undefined ?
      this :
      this.each(function() {
        var queue = jQuery.queue( this, type, data );

        // ensure a hooks for this queue
        jQuery._queueHooks( this, type );

        if ( type === "fx" && queue[0] !== "inprogress" ) {
          jQuery.dequeue( this, type );
        }
      });
  },
  dequeue: function( type ) {
    return this.each(function() {
      jQuery.dequeue( this, type );
    });
  },
  // Based off of the plugin by Clint Helfers, with permission.
  // http://blindsignals.com/index.php/2009/07/jquery-delay/
  delay: function( time, type ) {
    time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
    type = type || "fx";

    return this.queue( type, function( next, hooks ) {
      var timeout = setTimeout( next, time );
      hooks.stop = function() {
        clearTimeout( timeout );
      };
    });
  },
  clearQueue: function( type ) {
    return this.queue( type || "fx", [] );
  },
  // Get a promise resolved when queues of a certain type
  // are emptied (fx is the type by default)
  promise: function( type, obj ) {
    var tmp,
      count = 1,
      defer = jQuery.Deferred(),
      elements = this,
      i = this.length,
      resolve = function() {
        if ( !( --count ) ) {
          defer.resolveWith( elements, [ elements ] );
        }
      };

    if ( typeof type !== "string" ) {
      obj = type;
      type = undefined;
    }
    type = type || "fx";

    while( i-- ) {
      tmp = jQuery._data( elements[ i ], type + "queueHooks" );
      if ( tmp && tmp.empty ) {
        count++;
        tmp.empty.add( resolve );
      }
    }
    resolve();
    return defer.promise( obj );
  }
});
var nodeHook, boolHook,
  rclass = /[\t\r\n]/g,
  rreturn = /\r/g,
  rfocusable = /^(?:input|select|textarea|button|object)$/i,
  rclickable = /^(?:a|area)$/i,
  rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
  ruseDefault = /^(?:checked|selected)$/i,
  getSetAttribute = jQuery.support.getSetAttribute,
  getSetInput = jQuery.support.input;

jQuery.fn.extend({
  attr: function( name, value ) {
    return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
  },

  removeAttr: function( name ) {
    return this.each(function() {
      jQuery.removeAttr( this, name );
    });
  },

  prop: function( name, value ) {
    return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
  },

  removeProp: function( name ) {
    name = jQuery.propFix[ name ] || name;
    return this.each(function() {
      // try/catch handles cases where IE balks (such as removing a property on window)
      try {
        this[ name ] = undefined;
        delete this[ name ];
      } catch( e ) {}
    });
  },

  addClass: function( value ) {
    var classes, elem, cur, clazz, j,
      i = 0,
      len = this.length,
      proceed = typeof value === "string" && value;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).addClass( value.call( this, j, this.className ) );
      });
    }

    if ( proceed ) {
      // The disjunction here is for better compressibility (see removeClass)
      classes = ( value || "" ).match( core_rnotwhite ) || [];

      for ( ; i < len; i++ ) {
        elem = this[ i ];
        cur = elem.nodeType === 1 && ( elem.className ?
          ( " " + elem.className + " " ).replace( rclass, " " ) :
          " "
        );

        if ( cur ) {
          j = 0;
          while ( (clazz = classes[j++]) ) {
            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
              cur += clazz + " ";
            }
          }
          elem.className = jQuery.trim( cur );

        }
      }
    }

    return this;
  },

  removeClass: function( value ) {
    var classes, elem, cur, clazz, j,
      i = 0,
      len = this.length,
      proceed = arguments.length === 0 || typeof value === "string" && value;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).removeClass( value.call( this, j, this.className ) );
      });
    }
    if ( proceed ) {
      classes = ( value || "" ).match( core_rnotwhite ) || [];

      for ( ; i < len; i++ ) {
        elem = this[ i ];
        // This expression is here for better compressibility (see addClass)
        cur = elem.nodeType === 1 && ( elem.className ?
          ( " " + elem.className + " " ).replace( rclass, " " ) :
          ""
        );

        if ( cur ) {
          j = 0;
          while ( (clazz = classes[j++]) ) {
            // Remove *all* instances
            while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
              cur = cur.replace( " " + clazz + " ", " " );
            }
          }
          elem.className = value ? jQuery.trim( cur ) : "";
        }
      }
    }

    return this;
  },

  toggleClass: function( value, stateVal ) {
    var type = typeof value,
      isBool = typeof stateVal === "boolean";

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( i ) {
        jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
      });
    }

    return this.each(function() {
      if ( type === "string" ) {
        // toggle individual class names
        var className,
          i = 0,
          self = jQuery( this ),
          state = stateVal,
          classNames = value.match( core_rnotwhite ) || [];

        while ( (className = classNames[ i++ ]) ) {
          // check each className given, space separated list
          state = isBool ? state : !self.hasClass( className );
          self[ state ? "addClass" : "removeClass" ]( className );
        }

      // Toggle whole class name
      } else if ( type === core_strundefined || type === "boolean" ) {
        if ( this.className ) {
          // store className if set
          jQuery._data( this, "__className__", this.className );
        }

        // If the element has a class name or if we're passed "false",
        // then remove the whole classname (if there was one, the above saved it).
        // Otherwise bring back whatever was previously saved (if anything),
        // falling back to the empty string if nothing was stored.
        this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
      }
    });
  },

  hasClass: function( selector ) {
    var className = " " + selector + " ",
      i = 0,
      l = this.length;
    for ( ; i < l; i++ ) {
      if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
        return true;
      }
    }

    return false;
  },

  val: function( value ) {
    var ret, hooks, isFunction,
      elem = this[0];

    if ( !arguments.length ) {
      if ( elem ) {
        hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

        if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
          return ret;
        }

        ret = elem.value;

        return typeof ret === "string" ?
          // handle most common string cases
          ret.replace(rreturn, "") :
          // handle cases where value is null/undef or number
          ret == null ? "" : ret;
      }

      return;
    }

    isFunction = jQuery.isFunction( value );

    return this.each(function( i ) {
      var val,
        self = jQuery(this);

      if ( this.nodeType !== 1 ) {
        return;
      }

      if ( isFunction ) {
        val = value.call( this, i, self.val() );
      } else {
        val = value;
      }

      // Treat null/undefined as ""; convert numbers to string
      if ( val == null ) {
        val = "";
      } else if ( typeof val === "number" ) {
        val += "";
      } else if ( jQuery.isArray( val ) ) {
        val = jQuery.map(val, function ( value ) {
          return value == null ? "" : value + "";
        });
      }

      hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

      // If set returns undefined, fall back to normal setting
      if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
        this.value = val;
      }
    });
  }
});

jQuery.extend({
  valHooks: {
    option: {
      get: function( elem ) {
        // attributes.value is undefined in Blackberry 4.7 but
        // uses .value. See #6932
        var val = elem.attributes.value;
        return !val || val.specified ? elem.value : elem.text;
      }
    },
    select: {
      get: function( elem ) {
        var value, option,
          options = elem.options,
          index = elem.selectedIndex,
          one = elem.type === "select-one" || index < 0,
          values = one ? null : [],
          max = one ? index + 1 : options.length,
          i = index < 0 ?
            max :
            one ? index : 0;

        // Loop through all the selected options
        for ( ; i < max; i++ ) {
          option = options[ i ];

          // oldIE doesn't update selected after form reset (#2551)
          if ( ( option.selected || i === index ) &&
              // Don't return options that are disabled or in a disabled optgroup
              ( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
              ( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

            // Get the specific value for the option
            value = jQuery( option ).val();

            // We don't need an array for one selects
            if ( one ) {
              return value;
            }

            // Multi-Selects return an array
            values.push( value );
          }
        }

        return values;
      },

      set: function( elem, value ) {
        var values = jQuery.makeArray( value );

        jQuery(elem).find("option").each(function() {
          this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
        });

        if ( !values.length ) {
          elem.selectedIndex = -1;
        }
        return values;
      }
    }
  },

  attr: function( elem, name, value ) {
    var hooks, notxml, ret,
      nType = elem.nodeType;

    // don't get/set attributes on text, comment and attribute nodes
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    // Fallback to prop when attributes are not supported
    if ( typeof elem.getAttribute === core_strundefined ) {
      return jQuery.prop( elem, name, value );
    }

    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

    // All attributes are lowercase
    // Grab necessary hook if one is defined
    if ( notxml ) {
      name = name.toLowerCase();
      hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
    }

    if ( value !== undefined ) {

      if ( value === null ) {
        jQuery.removeAttr( elem, name );

      } else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
        return ret;

      } else {
        elem.setAttribute( name, value + "" );
        return value;
      }

    } else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
      return ret;

    } else {

      // In IE9+, Flash objects don't have .getAttribute (#12945)
      // Support: IE9+
      if ( typeof elem.getAttribute !== core_strundefined ) {
        ret =  elem.getAttribute( name );
      }

      // Non-existent attributes return null, we normalize to undefined
      return ret == null ?
        undefined :
        ret;
    }
  },

  removeAttr: function( elem, value ) {
    var name, propName,
      i = 0,
      attrNames = value && value.match( core_rnotwhite );

    if ( attrNames && elem.nodeType === 1 ) {
      while ( (name = attrNames[i++]) ) {
        propName = jQuery.propFix[ name ] || name;

        // Boolean attributes get special treatment (#10870)
        if ( rboolean.test( name ) ) {
          // Set corresponding property to false for boolean attributes
          // Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
          if ( !getSetAttribute && ruseDefault.test( name ) ) {
            elem[ jQuery.camelCase( "default-" + name ) ] =
              elem[ propName ] = false;
          } else {
            elem[ propName ] = false;
          }

        // See #9699 for explanation of this approach (setting first, then removal)
        } else {
          jQuery.attr( elem, name, "" );
        }

        elem.removeAttribute( getSetAttribute ? name : propName );
      }
    }
  },

  attrHooks: {
    type: {
      set: function( elem, value ) {
        if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
          // Setting the type on a radio button after the value resets the value in IE6-9
          // Reset value to default in case type is set after value during creation
          var val = elem.value;
          elem.setAttribute( "type", value );
          if ( val ) {
            elem.value = val;
          }
          return value;
        }
      }
    }
  },

  propFix: {
    tabindex: "tabIndex",
    readonly: "readOnly",
    "for": "htmlFor",
    "class": "className",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    cellpadding: "cellPadding",
    rowspan: "rowSpan",
    colspan: "colSpan",
    usemap: "useMap",
    frameborder: "frameBorder",
    contenteditable: "contentEditable"
  },

  prop: function( elem, name, value ) {
    var ret, hooks, notxml,
      nType = elem.nodeType;

    // don't get/set properties on text, comment and attribute nodes
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

    if ( notxml ) {
      // Fix name and attach hooks
      name = jQuery.propFix[ name ] || name;
      hooks = jQuery.propHooks[ name ];
    }

    if ( value !== undefined ) {
      if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
        return ret;

      } else {
        return ( elem[ name ] = value );
      }

    } else {
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
        return ret;

      } else {
        return elem[ name ];
      }
    }
  },

  propHooks: {
    tabIndex: {
      get: function( elem ) {
        // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
        // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
        var attributeNode = elem.getAttributeNode("tabindex");

        return attributeNode && attributeNode.specified ?
          parseInt( attributeNode.value, 10 ) :
          rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
            0 :
            undefined;
      }
    }
  }
});

// Hook for boolean attributes
boolHook = {
  get: function( elem, name ) {
    var
      // Use .prop to determine if this attribute is understood as boolean
      prop = jQuery.prop( elem, name ),

      // Fetch it accordingly
      attr = typeof prop === "boolean" && elem.getAttribute( name ),
      detail = typeof prop === "boolean" ?

        getSetInput && getSetAttribute ?
          attr != null :
          // oldIE fabricates an empty string for missing boolean attributes
          // and conflates checked/selected into attroperties
          ruseDefault.test( name ) ?
            elem[ jQuery.camelCase( "default-" + name ) ] :
            !!attr :

        // fetch an attribute node for properties not recognized as boolean
        elem.getAttributeNode( name );

    return detail && detail.value !== false ?
      name.toLowerCase() :
      undefined;
  },
  set: function( elem, value, name ) {
    if ( value === false ) {
      // Remove boolean attributes when set to false
      jQuery.removeAttr( elem, name );
    } else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
      // IE<8 needs the *property* name
      elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

    // Use defaultChecked and defaultSelected for oldIE
    } else {
      elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
    }

    return name;
  }
};

// fix oldIE value attroperty
if ( !getSetInput || !getSetAttribute ) {
  jQuery.attrHooks.value = {
    get: function( elem, name ) {
      var ret = elem.getAttributeNode( name );
      return jQuery.nodeName( elem, "input" ) ?

        // Ignore the value *property* by using defaultValue
        elem.defaultValue :

        ret && ret.specified ? ret.value : undefined;
    },
    set: function( elem, value, name ) {
      if ( jQuery.nodeName( elem, "input" ) ) {
        // Does not return so that setAttribute is also used
        elem.defaultValue = value;
      } else {
        // Use nodeHook if defined (#1954); otherwise setAttribute is fine
        return nodeHook && nodeHook.set( elem, value, name );
      }
    }
  };
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

  // Use this for any attribute in IE6/7
  // This fixes almost every IE6/7 issue
  nodeHook = jQuery.valHooks.button = {
    get: function( elem, name ) {
      var ret = elem.getAttributeNode( name );
      return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
        ret.value :
        undefined;
    },
    set: function( elem, value, name ) {
      // Set the existing or create a new attribute node
      var ret = elem.getAttributeNode( name );
      if ( !ret ) {
        elem.setAttributeNode(
          (ret = elem.ownerDocument.createAttribute( name ))
        );
      }

      ret.value = value += "";

      // Break association with cloned elements by also using setAttribute (#9646)
      return name === "value" || value === elem.getAttribute( name ) ?
        value :
        undefined;
    }
  };

  // Set contenteditable to false on removals(#10429)
  // Setting to empty string throws an error as an invalid value
  jQuery.attrHooks.contenteditable = {
    get: nodeHook.get,
    set: function( elem, value, name ) {
      nodeHook.set( elem, value === "" ? false : value, name );
    }
  };

  // Set width and height to auto instead of 0 on empty string( Bug #8150 )
  // This is for removals
  jQuery.each([ "width", "height" ], function( i, name ) {
    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
      set: function( elem, value ) {
        if ( value === "" ) {
          elem.setAttribute( name, "auto" );
          return value;
        }
      }
    });
  });
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
  jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
      get: function( elem ) {
        var ret = elem.getAttribute( name, 2 );
        return ret == null ? undefined : ret;
      }
    });
  });

  // href/src property should get the full normalized URL (#10299/#12915)
  jQuery.each([ "href", "src" ], function( i, name ) {
    jQuery.propHooks[ name ] = {
      get: function( elem ) {
        return elem.getAttribute( name, 4 );
      }
    };
  });
}

if ( !jQuery.support.style ) {
  jQuery.attrHooks.style = {
    get: function( elem ) {
      // Return undefined in the case of empty string
      // Note: IE uppercases css property names, but if we were to .toLowerCase()
      // .cssText, that would destroy case senstitivity in URL's, like in "background"
      return elem.style.cssText || undefined;
    },
    set: function( elem, value ) {
      return ( elem.style.cssText = value + "" );
    }
  };
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
  jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
    get: function( elem ) {
      var parent = elem.parentNode;

      if ( parent ) {
        parent.selectedIndex;

        // Make sure that it also works with optgroups, see #5701
        if ( parent.parentNode ) {
          parent.parentNode.selectedIndex;
        }
      }
      return null;
    }
  });
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
  jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
  jQuery.each([ "radio", "checkbox" ], function() {
    jQuery.valHooks[ this ] = {
      get: function( elem ) {
        // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
        return elem.getAttribute("value") === null ? "on" : elem.value;
      }
    };
  });
}
jQuery.each([ "radio", "checkbox" ], function() {
  jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
    set: function( elem, value ) {
      if ( jQuery.isArray( value ) ) {
        return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
      }
    }
  });
});
var rformElems = /^(?:input|select|textarea)$/i,
  rkeyEvent = /^key/,
  rmouseEvent = /^(?:mouse|contextmenu)|click/,
  rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
  rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
  return true;
}

function returnFalse() {
  return false;
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

  global: {},

  add: function( elem, types, handler, data, selector ) {
    var tmp, events, t, handleObjIn,
      special, eventHandle, handleObj,
      handlers, type, namespaces, origType,
      elemData = jQuery._data( elem );

    // Don't attach events to noData or text/comment nodes (but allow plain objects)
    if ( !elemData ) {
      return;
    }

    // Caller can pass in an object of custom data in lieu of the handler
    if ( handler.handler ) {
      handleObjIn = handler;
      handler = handleObjIn.handler;
      selector = handleObjIn.selector;
    }

    // Make sure that the handler has a unique ID, used to find/remove it later
    if ( !handler.guid ) {
      handler.guid = jQuery.guid++;
    }

    // Init the element's event structure and main handler, if this is the first
    if ( !(events = elemData.events) ) {
      events = elemData.events = {};
    }
    if ( !(eventHandle = elemData.handle) ) {
      eventHandle = elemData.handle = function( e ) {
        // Discard the second event of a jQuery.event.trigger() and
        // when an event is called after a page has unloaded
        return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
          jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
          undefined;
      };
      // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
      eventHandle.elem = elem;
    }

    // Handle multiple events separated by a space
    // jQuery(...).bind("mouseover mouseout", fn);
    types = ( types || "" ).match( core_rnotwhite ) || [""];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[t] ) || [];
      type = origType = tmp[1];
      namespaces = ( tmp[2] || "" ).split( "." ).sort();

      // If event changes its type, use the special event handlers for the changed type
      special = jQuery.event.special[ type ] || {};

      // If selector defined, determine special event api type, otherwise given type
      type = ( selector ? special.delegateType : special.bindType ) || type;

      // Update special based on newly reset type
      special = jQuery.event.special[ type ] || {};

      // handleObj is passed to all event handlers
      handleObj = jQuery.extend({
        type: type,
        origType: origType,
        data: data,
        handler: handler,
        guid: handler.guid,
        selector: selector,
        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
        namespace: namespaces.join(".")
      }, handleObjIn );

      // Init the event handler queue if we're the first
      if ( !(handlers = events[ type ]) ) {
        handlers = events[ type ] = [];
        handlers.delegateCount = 0;

        // Only use addEventListener/attachEvent if the special events handler returns false
        if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
          // Bind the global event handler to the element
          if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle, false );

          } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, eventHandle );
          }
        }
      }

      if ( special.add ) {
        special.add.call( elem, handleObj );

        if ( !handleObj.handler.guid ) {
          handleObj.handler.guid = handler.guid;
        }
      }

      // Add to the element's handler list, delegates in front
      if ( selector ) {
        handlers.splice( handlers.delegateCount++, 0, handleObj );
      } else {
        handlers.push( handleObj );
      }

      // Keep track of which events have ever been used, for event optimization
      jQuery.event.global[ type ] = true;
    }

    // Nullify elem to prevent memory leaks in IE
    elem = null;
  },

  // Detach an event or set of events from an element
  remove: function( elem, types, handler, selector, mappedTypes ) {
    var j, handleObj, tmp,
      origCount, t, events,
      special, handlers, type,
      namespaces, origType,
      elemData = jQuery.hasData( elem ) && jQuery._data( elem );

    if ( !elemData || !(events = elemData.events) ) {
      return;
    }

    // Once for each type.namespace in types; type may be omitted
    types = ( types || "" ).match( core_rnotwhite ) || [""];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[t] ) || [];
      type = origType = tmp[1];
      namespaces = ( tmp[2] || "" ).split( "." ).sort();

      // Unbind all events (on this namespace, if provided) for the element
      if ( !type ) {
        for ( type in events ) {
          jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
        }
        continue;
      }

      special = jQuery.event.special[ type ] || {};
      type = ( selector ? special.delegateType : special.bindType ) || type;
      handlers = events[ type ] || [];
      tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

      // Remove matching events
      origCount = j = handlers.length;
      while ( j-- ) {
        handleObj = handlers[ j ];

        if ( ( mappedTypes || origType === handleObj.origType ) &&
          ( !handler || handler.guid === handleObj.guid ) &&
          ( !tmp || tmp.test( handleObj.namespace ) ) &&
          ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
          handlers.splice( j, 1 );

          if ( handleObj.selector ) {
            handlers.delegateCount--;
          }
          if ( special.remove ) {
            special.remove.call( elem, handleObj );
          }
        }
      }

      // Remove generic event handler if we removed something and no more handlers exist
      // (avoids potential for endless recursion during removal of special event handlers)
      if ( origCount && !handlers.length ) {
        if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
          jQuery.removeEvent( elem, type, elemData.handle );
        }

        delete events[ type ];
      }
    }

    // Remove the expando if it's no longer used
    if ( jQuery.isEmptyObject( events ) ) {
      delete elemData.handle;

      // removeData also checks for emptiness and clears the expando if empty
      // so use it instead of delete
      jQuery._removeData( elem, "events" );
    }
  },

  trigger: function( event, data, elem, onlyHandlers ) {
    var handle, ontype, cur,
      bubbleType, special, tmp, i,
      eventPath = [ elem || document ],
      type = core_hasOwn.call( event, "type" ) ? event.type : event,
      namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

    cur = tmp = elem = elem || document;

    // Don't do events on text and comment nodes
    if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
      return;
    }

    // focus/blur morphs to focusin/out; ensure we're not firing them right now
    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
      return;
    }

    if ( type.indexOf(".") >= 0 ) {
      // Namespaced trigger; create a regexp to match event type in handle()
      namespaces = type.split(".");
      type = namespaces.shift();
      namespaces.sort();
    }
    ontype = type.indexOf(":") < 0 && "on" + type;

    // Caller can pass in a jQuery.Event object, Object, or just an event type string
    event = event[ jQuery.expando ] ?
      event :
      new jQuery.Event( type, typeof event === "object" && event );

    event.isTrigger = true;
    event.namespace = namespaces.join(".");
    event.namespace_re = event.namespace ?
      new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
      null;

    // Clean up the event in case it is being reused
    event.result = undefined;
    if ( !event.target ) {
      event.target = elem;
    }

    // Clone any incoming data and prepend the event, creating the handler arg list
    data = data == null ?
      [ event ] :
      jQuery.makeArray( data, [ event ] );

    // Allow special events to draw outside the lines
    special = jQuery.event.special[ type ] || {};
    if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
      return;
    }

    // Determine event propagation path in advance, per W3C events spec (#9951)
    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

      bubbleType = special.delegateType || type;
      if ( !rfocusMorph.test( bubbleType + type ) ) {
        cur = cur.parentNode;
      }
      for ( ; cur; cur = cur.parentNode ) {
        eventPath.push( cur );
        tmp = cur;
      }

      // Only add window if we got to document (e.g., not plain obj or detached DOM)
      if ( tmp === (elem.ownerDocument || document) ) {
        eventPath.push( tmp.defaultView || tmp.parentWindow || window );
      }
    }

    // Fire handlers on the event path
    i = 0;
    while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

      event.type = i > 1 ?
        bubbleType :
        special.bindType || type;

      // jQuery handler
      handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
      if ( handle ) {
        handle.apply( cur, data );
      }

      // Native handler
      handle = ontype && cur[ ontype ];
      if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
        event.preventDefault();
      }
    }
    event.type = type;

    // If nobody prevented the default action, do it now
    if ( !onlyHandlers && !event.isDefaultPrevented() ) {

      if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
        !(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

        // Call a native DOM method on the target with the same name name as the event.
        // Can't use an .isFunction() check here because IE6/7 fails that test.
        // Don't do default actions on window, that's where global variables be (#6170)
        if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

          // Don't re-trigger an onFOO event when we call its FOO() method
          tmp = elem[ ontype ];

          if ( tmp ) {
            elem[ ontype ] = null;
          }

          // Prevent re-triggering of the same event, since we already bubbled it above
          jQuery.event.triggered = type;
          try {
            elem[ type ]();
          } catch ( e ) {
            // IE<9 dies on focus/blur to hidden element (#1486,#12518)
            // only reproducible on winXP IE8 native, not IE9 in IE8 mode
          }
          jQuery.event.triggered = undefined;

          if ( tmp ) {
            elem[ ontype ] = tmp;
          }
        }
      }
    }

    return event.result;
  },

  dispatch: function( event ) {

    // Make a writable jQuery.Event from the native event object
    event = jQuery.event.fix( event );

    var i, ret, handleObj, matched, j,
      handlerQueue = [],
      args = core_slice.call( arguments ),
      handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
      special = jQuery.event.special[ event.type ] || {};

    // Use the fix-ed jQuery.Event rather than the (read-only) native event
    args[0] = event;
    event.delegateTarget = this;

    // Call the preDispatch hook for the mapped type, and let it bail if desired
    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
      return;
    }

    // Determine handlers
    handlerQueue = jQuery.event.handlers.call( this, event, handlers );

    // Run delegates first; they may want to stop propagation beneath us
    i = 0;
    while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
      event.currentTarget = matched.elem;

      j = 0;
      while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

        // Triggered event must either 1) have no namespace, or
        // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
        if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

          event.handleObj = handleObj;
          event.data = handleObj.data;

          ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
              .apply( matched.elem, args );

          if ( ret !== undefined ) {
            if ( (event.result = ret) === false ) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
      }
    }

    // Call the postDispatch hook for the mapped type
    if ( special.postDispatch ) {
      special.postDispatch.call( this, event );
    }

    return event.result;
  },

  handlers: function( event, handlers ) {
    var sel, handleObj, matches, i,
      handlerQueue = [],
      delegateCount = handlers.delegateCount,
      cur = event.target;

    // Find delegate handlers
    // Black-hole SVG <use> instance trees (#13180)
    // Avoid non-left-click bubbling in Firefox (#3861)
    if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

      for ( ; cur != this; cur = cur.parentNode || this ) {

        // Don't check non-elements (#13208)
        // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
        if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
          matches = [];
          for ( i = 0; i < delegateCount; i++ ) {
            handleObj = handlers[ i ];

            // Don't conflict with Object.prototype properties (#13203)
            sel = handleObj.selector + " ";

            if ( matches[ sel ] === undefined ) {
              matches[ sel ] = handleObj.needsContext ?
                jQuery( sel, this ).index( cur ) >= 0 :
                jQuery.find( sel, this, null, [ cur ] ).length;
            }
            if ( matches[ sel ] ) {
              matches.push( handleObj );
            }
          }
          if ( matches.length ) {
            handlerQueue.push({ elem: cur, handlers: matches });
          }
        }
      }
    }

    // Add the remaining (directly-bound) handlers
    if ( delegateCount < handlers.length ) {
      handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
    }

    return handlerQueue;
  },

  fix: function( event ) {
    if ( event[ jQuery.expando ] ) {
      return event;
    }

    // Create a writable copy of the event object and normalize some properties
    var i, prop, copy,
      type = event.type,
      originalEvent = event,
      fixHook = this.fixHooks[ type ];

    if ( !fixHook ) {
      this.fixHooks[ type ] = fixHook =
        rmouseEvent.test( type ) ? this.mouseHooks :
        rkeyEvent.test( type ) ? this.keyHooks :
        {};
    }
    copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

    event = new jQuery.Event( originalEvent );

    i = copy.length;
    while ( i-- ) {
      prop = copy[ i ];
      event[ prop ] = originalEvent[ prop ];
    }

    // Support: IE<9
    // Fix target property (#1925)
    if ( !event.target ) {
      event.target = originalEvent.srcElement || document;
    }

    // Support: Chrome 23+, Safari?
    // Target should not be a text node (#504, #13143)
    if ( event.target.nodeType === 3 ) {
      event.target = event.target.parentNode;
    }

    // Support: IE<9
    // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
    event.metaKey = !!event.metaKey;

    return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
  },

  // Includes some event props shared by KeyEvent and MouseEvent
  props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

  fixHooks: {},

  keyHooks: {
    props: "char charCode key keyCode".split(" "),
    filter: function( event, original ) {

      // Add which for key events
      if ( event.which == null ) {
        event.which = original.charCode != null ? original.charCode : original.keyCode;
      }

      return event;
    }
  },

  mouseHooks: {
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter: function( event, original ) {
      var body, eventDoc, doc,
        button = original.button,
        fromElement = original.fromElement;

      // Calculate pageX/Y if missing and clientX/Y available
      if ( event.pageX == null && original.clientX != null ) {
        eventDoc = event.target.ownerDocument || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
        event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Add relatedTarget, if necessary
      if ( !event.relatedTarget && fromElement ) {
        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
      }

      // Add which for click: 1 === left; 2 === middle; 3 === right
      // Note: button is not normalized, so don't use it
      if ( !event.which && button !== undefined ) {
        event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
      }

      return event;
    }
  },

  special: {
    load: {
      // Prevent triggered image.load events from bubbling to window.load
      noBubble: true
    },
    click: {
      // For checkbox, fire native event so checked state will be right
      trigger: function() {
        if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
          this.click();
          return false;
        }
      }
    },
    focus: {
      // Fire native event if possible so blur/focus sequence is correct
      trigger: function() {
        if ( this !== document.activeElement && this.focus ) {
          try {
            this.focus();
            return false;
          } catch ( e ) {
            // Support: IE<9
            // If we error on focus to hidden element (#1486, #12518),
            // let .trigger() run the handlers
          }
        }
      },
      delegateType: "focusin"
    },
    blur: {
      trigger: function() {
        if ( this === document.activeElement && this.blur ) {
          this.blur();
          return false;
        }
      },
      delegateType: "focusout"
    },

    beforeunload: {
      postDispatch: function( event ) {

        // Even when returnValue equals to undefined Firefox will still show alert
        if ( event.result !== undefined ) {
          event.originalEvent.returnValue = event.result;
        }
      }
    }
  },

  simulate: function( type, elem, event, bubble ) {
    // Piggyback on a donor event to simulate a different one.
    // Fake originalEvent to avoid donor's stopPropagation, but if the
    // simulated event prevents default then we do the same on the donor.
    var e = jQuery.extend(
      new jQuery.Event(),
      event,
      { type: type,
        isSimulated: true,
        originalEvent: {}
      }
    );
    if ( bubble ) {
      jQuery.event.trigger( e, null, elem );
    } else {
      jQuery.event.dispatch.call( elem, e );
    }
    if ( e.isDefaultPrevented() ) {
      event.preventDefault();
    }
  }
};

jQuery.removeEvent = document.removeEventListener ?
  function( elem, type, handle ) {
    if ( elem.removeEventListener ) {
      elem.removeEventListener( type, handle, false );
    }
  } :
  function( elem, type, handle ) {
    var name = "on" + type;

    if ( elem.detachEvent ) {

      // #8545, #7054, preventing memory leaks for custom events in IE6-8
      // detachEvent needed property on element, by name of that event, to properly expose it to GC
      if ( typeof elem[ name ] === core_strundefined ) {
        elem[ name ] = null;
      }

      elem.detachEvent( name, handle );
    }
  };

jQuery.Event = function( src, props ) {
  // Allow instantiation without the 'new' keyword
  if ( !(this instanceof jQuery.Event) ) {
    return new jQuery.Event( src, props );
  }

  // Event object
  if ( src && src.type ) {
    this.originalEvent = src;
    this.type = src.type;

    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
      src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

  // Event type
  } else {
    this.type = src;
  }

  // Put explicitly provided properties onto the event object
  if ( props ) {
    jQuery.extend( this, props );
  }

  // Create a timestamp if incoming event doesn't have one
  this.timeStamp = src && src.timeStamp || jQuery.now();

  // Mark it as fixed
  this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse,

  preventDefault: function() {
    var e = this.originalEvent;

    this.isDefaultPrevented = returnTrue;
    if ( !e ) {
      return;
    }

    // If preventDefault exists, run it on the original event
    if ( e.preventDefault ) {
      e.preventDefault();

    // Support: IE
    // Otherwise set the returnValue property of the original event to false
    } else {
      e.returnValue = false;
    }
  },
  stopPropagation: function() {
    var e = this.originalEvent;

    this.isPropagationStopped = returnTrue;
    if ( !e ) {
      return;
    }
    // If stopPropagation exists, run it on the original event
    if ( e.stopPropagation ) {
      e.stopPropagation();
    }

    // Support: IE
    // Set the cancelBubble property of the original event to true
    e.cancelBubble = true;
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  }
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, function( orig, fix ) {
  jQuery.event.special[ orig ] = {
    delegateType: fix,
    bindType: fix,

    handle: function( event ) {
      var ret,
        target = this,
        related = event.relatedTarget,
        handleObj = event.handleObj;

      // For mousenter/leave call the handler if related is outside the target.
      // NB: No relatedTarget if the mouse left/entered the browser window
      if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply( this, arguments );
        event.type = fix;
      }
      return ret;
    }
  };
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

  jQuery.event.special.submit = {
    setup: function() {
      // Only need this for delegated form submit events
      if ( jQuery.nodeName( this, "form" ) ) {
        return false;
      }

      // Lazy-add a submit handler when a descendant form may potentially be submitted
      jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
        // Node name check avoids a VML-related crash in IE (#9807)
        var elem = e.target,
          form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
        if ( form && !jQuery._data( form, "submitBubbles" ) ) {
          jQuery.event.add( form, "submit._submit", function( event ) {
            event._submit_bubble = true;
          });
          jQuery._data( form, "submitBubbles", true );
        }
      });
      // return undefined since we don't need an event listener
    },

    postDispatch: function( event ) {
      // If form was submitted by the user, bubble the event up the tree
      if ( event._submit_bubble ) {
        delete event._submit_bubble;
        if ( this.parentNode && !event.isTrigger ) {
          jQuery.event.simulate( "submit", this.parentNode, event, true );
        }
      }
    },

    teardown: function() {
      // Only need this for delegated form submit events
      if ( jQuery.nodeName( this, "form" ) ) {
        return false;
      }

      // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
      jQuery.event.remove( this, "._submit" );
    }
  };
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

  jQuery.event.special.change = {

    setup: function() {

      if ( rformElems.test( this.nodeName ) ) {
        // IE doesn't fire change on a check/radio until blur; trigger it on click
        // after a propertychange. Eat the blur-change in special.change.handle.
        // This still fires onchange a second time for check/radio after blur.
        if ( this.type === "checkbox" || this.type === "radio" ) {
          jQuery.event.add( this, "propertychange._change", function( event ) {
            if ( event.originalEvent.propertyName === "checked" ) {
              this._just_changed = true;
            }
          });
          jQuery.event.add( this, "click._change", function( event ) {
            if ( this._just_changed && !event.isTrigger ) {
              this._just_changed = false;
            }
            // Allow triggered, simulated change events (#11500)
            jQuery.event.simulate( "change", this, event, true );
          });
        }
        return false;
      }
      // Delegated event; lazy-add a change handler on descendant inputs
      jQuery.event.add( this, "beforeactivate._change", function( e ) {
        var elem = e.target;

        if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
          jQuery.event.add( elem, "change._change", function( event ) {
            if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
              jQuery.event.simulate( "change", this.parentNode, event, true );
            }
          });
          jQuery._data( elem, "changeBubbles", true );
        }
      });
    },

    handle: function( event ) {
      var elem = event.target;

      // Swallow native change events from checkbox/radio, we already triggered them above
      if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
        return event.handleObj.handler.apply( this, arguments );
      }
    },

    teardown: function() {
      jQuery.event.remove( this, "._change" );

      return !rformElems.test( this.nodeName );
    }
  };
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
  jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

    // Attach a single capturing handler while someone wants focusin/focusout
    var attaches = 0,
      handler = function( event ) {
        jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
      };

    jQuery.event.special[ fix ] = {
      setup: function() {
        if ( attaches++ === 0 ) {
          document.addEventListener( orig, handler, true );
        }
      },
      teardown: function() {
        if ( --attaches === 0 ) {
          document.removeEventListener( orig, handler, true );
        }
      }
    };
  });
}

jQuery.fn.extend({

  on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
    var type, origFn;

    // Types can be a map of types/handlers
    if ( typeof types === "object" ) {
      // ( types-Object, selector, data )
      if ( typeof selector !== "string" ) {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }
      for ( type in types ) {
        this.on( type, selector, data, types[ type ], one );
      }
      return this;
    }

    if ( data == null && fn == null ) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if ( fn == null ) {
      if ( typeof selector === "string" ) {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if ( fn === false ) {
      fn = returnFalse;
    } else if ( !fn ) {
      return this;
    }

    if ( one === 1 ) {
      origFn = fn;
      fn = function( event ) {
        // Can use an empty set, since event contains the info
        jQuery().off( event );
        return origFn.apply( this, arguments );
      };
      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
    }
    return this.each( function() {
      jQuery.event.add( this, types, fn, data, selector );
    });
  },
  one: function( types, selector, data, fn ) {
    return this.on( types, selector, data, fn, 1 );
  },
  off: function( types, selector, fn ) {
    var handleObj, type;
    if ( types && types.preventDefault && types.handleObj ) {
      // ( event )  dispatched jQuery.Event
      handleObj = types.handleObj;
      jQuery( types.delegateTarget ).off(
        handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
        handleObj.selector,
        handleObj.handler
      );
      return this;
    }
    if ( typeof types === "object" ) {
      // ( types-object [, selector] )
      for ( type in types ) {
        this.off( type, selector, types[ type ] );
      }
      return this;
    }
    if ( selector === false || typeof selector === "function" ) {
      // ( types [, fn] )
      fn = selector;
      selector = undefined;
    }
    if ( fn === false ) {
      fn = returnFalse;
    }
    return this.each(function() {
      jQuery.event.remove( this, types, fn, selector );
    });
  },

  bind: function( types, data, fn ) {
    return this.on( types, null, data, fn );
  },
  unbind: function( types, fn ) {
    return this.off( types, null, fn );
  },

  delegate: function( selector, types, data, fn ) {
    return this.on( types, selector, data, fn );
  },
  undelegate: function( selector, types, fn ) {
    // ( namespace ) or ( selector, types [, fn] )
    return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
  },

  trigger: function( type, data ) {
    return this.each(function() {
      jQuery.event.trigger( type, data, this );
    });
  },
  triggerHandler: function( type, data ) {
    var elem = this[0];
    if ( elem ) {
      return jQuery.event.trigger( type, data, elem, true );
    }
  }
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var i,
  cachedruns,
  Expr,
  getText,
  isXML,
  compile,
  hasDuplicate,
  outermostContext,

  // Local document vars
  setDocument,
  document,
  docElem,
  documentIsXML,
  rbuggyQSA,
  rbuggyMatches,
  matches,
  contains,
  sortOrder,

  // Instance-specific data
  expando = "sizzle" + -(new Date()),
  preferredDoc = window.document,
  support = {},
  dirruns = 0,
  done = 0,
  classCache = createCache(),
  tokenCache = createCache(),
  compilerCache = createCache(),

  // General-purpose constants
  strundefined = typeof undefined,
  MAX_NEGATIVE = 1 << 31,

  // Array methods
  arr = [],
  pop = arr.pop,
  push = arr.push,
  slice = arr.slice,
  // Use a stripped-down indexOf if we can't use a native one
  indexOf = arr.indexOf || function( elem ) {
    var i = 0,
      len = this.length;
    for ( ; i < len; i++ ) {
      if ( this[i] === elem ) {
        return i;
      }
    }
    return -1;
  },


  // Regular expressions

  // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
  // http://www.w3.org/TR/css3-syntax/#characters
  characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

  // Loosely modeled on CSS identifier characters
  // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
  // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  identifier = characterEncoding.replace( "w", "w#" ),

  // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
  operators = "([*^$|!~]?=)",
  attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
    "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

  // Prefer arguments quoted,
  //   then not containing pseudos/brackets,
  //   then attribute selectors/non-parenthetical expressions,
  //   then anything else
  // These preferences are here to reduce the number of selectors
  //   needing tokenize in the PSEUDO preFilter
  pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

  rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
  rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
  rpseudo = new RegExp( pseudos ),
  ridentifier = new RegExp( "^" + identifier + "$" ),

  matchExpr = {
    "ID": new RegExp( "^#(" + characterEncoding + ")" ),
    "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
    "NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
    "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
    "ATTR": new RegExp( "^" + attributes ),
    "PSEUDO": new RegExp( "^" + pseudos ),
    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
      "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
      "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
      whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
  },

  rsibling = /[\x20\t\r\n\f]*[+~]/,

  rnative = /^[^{]+\{\s*\[native code/,

  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

  rinputs = /^(?:input|select|textarea|button)$/i,
  rheader = /^h\d$/i,

  rescape = /'|\\/g,
  rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

  // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
  funescape = function( _, escaped ) {
    var high = "0x" + escaped - 0x10000;
    // NaN means non-codepoint
    return high !== high ?
      escaped :
      // BMP codepoint
      high < 0 ?
        String.fromCharCode( high + 0x10000 ) :
        // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
  };

// Use a stripped-down slice if we can't use a native one
try {
  slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
} catch ( e ) {
  slice = function( i ) {
    var elem,
      results = [];
    while ( (elem = this[i++]) ) {
      results.push( elem );
    }
    return results;
  };
}

/**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
function isNative( fn ) {
  return rnative.test( fn + "" );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *  deleting the oldest entry
 */
function createCache() {
  var cache,
    keys = [];

  return (cache = function( key, value ) {
    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
    if ( keys.push( key += " " ) > Expr.cacheLength ) {
      // Only keep the most recent entries
      delete cache[ keys.shift() ];
    }
    return (cache[ key ] = value);
  });
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
  fn[ expando ] = true;
  return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
  var div = document.createElement("div");

  try {
    return fn( div );
  } catch (e) {
    return false;
  } finally {
    // release memory in IE
    div = null;
  }
}

function Sizzle( selector, context, results, seed ) {
  var match, elem, m, nodeType,
    // QSA vars
    i, groups, old, nid, newContext, newSelector;

  if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
    setDocument( context );
  }

  context = context || document;
  results = results || [];

  if ( !selector || typeof selector !== "string" ) {
    return results;
  }

  if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
    return [];
  }

  if ( !documentIsXML && !seed ) {

    // Shortcuts
    if ( (match = rquickExpr.exec( selector )) ) {
      // Speed-up: Sizzle("#ID")
      if ( (m = match[1]) ) {
        if ( nodeType === 9 ) {
          elem = context.getElementById( m );
          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if ( elem && elem.parentNode ) {
            // Handle the case where IE, Opera, and Webkit return items
            // by name instead of ID
            if ( elem.id === m ) {
              results.push( elem );
              return results;
            }
          } else {
            return results;
          }
        } else {
          // Context is not a document
          if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
            contains( context, elem ) && elem.id === m ) {
            results.push( elem );
            return results;
          }
        }

      // Speed-up: Sizzle("TAG")
      } else if ( match[2] ) {
        push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
        return results;

      // Speed-up: Sizzle(".CLASS")
      } else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
        push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
        return results;
      }
    }

    // QSA path
    if ( support.qsa && !rbuggyQSA.test(selector) ) {
      old = true;
      nid = expando;
      newContext = context;
      newSelector = nodeType === 9 && selector;

      // qSA works strangely on Element-rooted queries
      // We can work around this by specifying an extra ID on the root
      // and working up from there (Thanks to Andrew Dupont for the technique)
      // IE 8 doesn't work on object elements
      if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
        groups = tokenize( selector );

        if ( (old = context.getAttribute("id")) ) {
          nid = old.replace( rescape, "\\$&" );
        } else {
          context.setAttribute( "id", nid );
        }
        nid = "[id='" + nid + "'] ";

        i = groups.length;
        while ( i-- ) {
          groups[i] = nid + toSelector( groups[i] );
        }
        newContext = rsibling.test( selector ) && context.parentNode || context;
        newSelector = groups.join(",");
      }

      if ( newSelector ) {
        try {
          push.apply( results, slice.call( newContext.querySelectorAll(
            newSelector
          ), 0 ) );
          return results;
        } catch(qsaError) {
        } finally {
          if ( !old ) {
            context.removeAttribute("id");
          }
        }
      }
    }
  }

  // All others
  return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
  // documentElement is verified for cases where it doesn't yet exist
  // (such as loading iframes in IE - #4833)
  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
  return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
  var doc = node ? node.ownerDocument || node : preferredDoc;

  // If no document and documentElement is available, return
  if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
    return document;
  }

  // Set our document
  document = doc;
  docElem = doc.documentElement;

  // Support tests
  documentIsXML = isXML( doc );

  // Check if getElementsByTagName("*") returns only elements
  support.tagNameNoComments = assert(function( div ) {
    div.appendChild( doc.createComment("") );
    return !div.getElementsByTagName("*").length;
  });

  // Check if attributes should be retrieved by attribute nodes
  support.attributes = assert(function( div ) {
    div.innerHTML = "<select></select>";
    var type = typeof div.lastChild.getAttribute("multiple");
    // IE8 returns a string for some attributes even when not present
    return type !== "boolean" && type !== "string";
  });

  // Check if getElementsByClassName can be trusted
  support.getByClassName = assert(function( div ) {
    // Opera can't find a second classname (in 9.6)
    div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
    if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
      return false;
    }

    // Safari 3.2 caches class attributes and doesn't catch changes
    div.lastChild.className = "e";
    return div.getElementsByClassName("e").length === 2;
  });

  // Check if getElementById returns elements by name
  // Check if getElementsByName privileges form controls or returns elements by ID
  support.getByName = assert(function( div ) {
    // Inject content
    div.id = expando + 0;
    div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
    docElem.insertBefore( div, docElem.firstChild );

    // Test
    var pass = doc.getElementsByName &&
      // buggy browsers will return fewer than the correct 2
      doc.getElementsByName( expando ).length === 2 +
      // buggy browsers will return more than the correct 0
      doc.getElementsByName( expando + 0 ).length;
    support.getIdNotName = !doc.getElementById( expando );

    // Cleanup
    docElem.removeChild( div );

    return pass;
  });

  // IE6/7 return modified attributes
  Expr.attrHandle = assert(function( div ) {
    div.innerHTML = "<a href='#'></a>";
    return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
      div.firstChild.getAttribute("href") === "#";
  }) ?
    {} :
    {
      "href": function( elem ) {
        return elem.getAttribute( "href", 2 );
      },
      "type": function( elem ) {
        return elem.getAttribute("type");
      }
    };

  // ID find and filter
  if ( support.getIdNotName ) {
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
        var m = context.getElementById( id );
        // Check parentNode to catch when Blackberry 4.6 returns
        // nodes that are no longer in the document #6963
        return m && m.parentNode ? [m] : [];
      }
    };
    Expr.filter["ID"] = function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        return elem.getAttribute("id") === attrId;
      };
    };
  } else {
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
        var m = context.getElementById( id );

        return m ?
          m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
            [m] :
            undefined :
          [];
      }
    };
    Expr.filter["ID"] =  function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
        return node && node.value === attrId;
      };
    };
  }

  // Tag
  Expr.find["TAG"] = support.tagNameNoComments ?
    function( tag, context ) {
      if ( typeof context.getElementsByTagName !== strundefined ) {
        return context.getElementsByTagName( tag );
      }
    } :
    function( tag, context ) {
      var elem,
        tmp = [],
        i = 0,
        results = context.getElementsByTagName( tag );

      // Filter out possible comments
      if ( tag === "*" ) {
        while ( (elem = results[i++]) ) {
          if ( elem.nodeType === 1 ) {
            tmp.push( elem );
          }
        }

        return tmp;
      }
      return results;
    };

  // Name
  Expr.find["NAME"] = support.getByName && function( tag, context ) {
    if ( typeof context.getElementsByName !== strundefined ) {
      return context.getElementsByName( name );
    }
  };

  // Class
  Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
    if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
      return context.getElementsByClassName( className );
    }
  };

  // QSA and matchesSelector support

  // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
  rbuggyMatches = [];

  // qSa(:focus) reports false when true (Chrome 21),
  // no need to also add to buggyMatches since matches checks buggyQSA
  // A support test would require too much code (would include document ready)
  rbuggyQSA = [ ":focus" ];

  if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
    // Build QSA regex
    // Regex strategy adopted from Diego Perini
    assert(function( div ) {
      // Select is set to empty string on purpose
      // This is to test IE's treatment of not explictly
      // setting a boolean content attribute,
      // since its presence should be enough
      // http://bugs.jquery.com/ticket/12359
      div.innerHTML = "<select><option selected=''></option></select>";

      // IE8 - Some boolean attributes are not treated correctly
      if ( !div.querySelectorAll("[selected]").length ) {
        rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
      }

      // Webkit/Opera - :checked should return selected option elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      // IE8 throws error here and will not see later tests
      if ( !div.querySelectorAll(":checked").length ) {
        rbuggyQSA.push(":checked");
      }
    });

    assert(function( div ) {

      // Opera 10-12/IE8 - ^= $= *= and empty values
      // Should not select anything
      div.innerHTML = "<input type='hidden' i=''/>";
      if ( div.querySelectorAll("[i^='']").length ) {
        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
      }

      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
      // IE8 throws error here and will not see later tests
      if ( !div.querySelectorAll(":enabled").length ) {
        rbuggyQSA.push( ":enabled", ":disabled" );
      }

      // Opera 10-11 does not throw on post-comma invalid pseudos
      div.querySelectorAll("*,:x");
      rbuggyQSA.push(",.*:");
    });
  }

  if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
    docElem.mozMatchesSelector ||
    docElem.webkitMatchesSelector ||
    docElem.oMatchesSelector ||
    docElem.msMatchesSelector) )) ) {

    assert(function( div ) {
      // Check to see if it's possible to do matchesSelector
      // on a disconnected node (IE 9)
      support.disconnectedMatch = matches.call( div, "div" );

      // This should fail with an exception
      // Gecko does not error, returns false instead
      matches.call( div, "[s!='']:x" );
      rbuggyMatches.push( "!=", pseudos );
    });
  }

  rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
  rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

  // Element contains another
  // Purposefully does not implement inclusive descendent
  // As in, an element does not contain itself
  contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
    function( a, b ) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
        bup = b && b.parentNode;
      return a === bup || !!( bup && bup.nodeType === 1 && (
        adown.contains ?
          adown.contains( bup ) :
          a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
      ));
    } :
    function( a, b ) {
      if ( b ) {
        while ( (b = b.parentNode) ) {
          if ( b === a ) {
            return true;
          }
        }
      }
      return false;
    };

  // Document order sorting
  sortOrder = docElem.compareDocumentPosition ?
  function( a, b ) {
    var compare;

    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }

    if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
      if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
        if ( a === doc || contains( preferredDoc, a ) ) {
          return -1;
        }
        if ( b === doc || contains( preferredDoc, b ) ) {
          return 1;
        }
        return 0;
      }
      return compare & 4 ? -1 : 1;
    }

    return a.compareDocumentPosition ? -1 : 1;
  } :
  function( a, b ) {
    var cur,
      i = 0,
      aup = a.parentNode,
      bup = b.parentNode,
      ap = [ a ],
      bp = [ b ];

    // Exit early if the nodes are identical
    if ( a === b ) {
      hasDuplicate = true;
      return 0;

    // Parentless nodes are either documents or disconnected
    } else if ( !aup || !bup ) {
      return a === doc ? -1 :
        b === doc ? 1 :
        aup ? -1 :
        bup ? 1 :
        0;

    // If the nodes are siblings, we can do a quick check
    } else if ( aup === bup ) {
      return siblingCheck( a, b );
    }

    // Otherwise we need full lists of their ancestors for comparison
    cur = a;
    while ( (cur = cur.parentNode) ) {
      ap.unshift( cur );
    }
    cur = b;
    while ( (cur = cur.parentNode) ) {
      bp.unshift( cur );
    }

    // Walk down the tree looking for a discrepancy
    while ( ap[i] === bp[i] ) {
      i++;
    }

    return i ?
      // Do a sibling check if the nodes have a common ancestor
      siblingCheck( ap[i], bp[i] ) :

      // Otherwise nodes in our document sort first
      ap[i] === preferredDoc ? -1 :
      bp[i] === preferredDoc ? 1 :
      0;
  };

  // Always assume the presence of duplicates if sort doesn't
  // pass them to our comparison function (as in Google Chrome).
  hasDuplicate = false;
  [0, 0].sort( sortOrder );
  support.detectDuplicates = hasDuplicate;

  return document;
};

Sizzle.matches = function( expr, elements ) {
  return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }

  // Make sure that attribute selectors are quoted
  expr = expr.replace( rattributeQuotes, "='$1']" );

  // rbuggyQSA always contains :focus, so no need for an existence check
  if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
    try {
      var ret = matches.call( elem, expr );

      // IE 9's matchesSelector returns false on disconnected nodes
      if ( ret || support.disconnectedMatch ||
          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11 ) {
        return ret;
      }
    } catch(e) {}
  }

  return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
  // Set document vars if needed
  if ( ( context.ownerDocument || context ) !== document ) {
    setDocument( context );
  }
  return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
  var val;

  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }

  if ( !documentIsXML ) {
    name = name.toLowerCase();
  }
  if ( (val = Expr.attrHandle[ name ]) ) {
    return val( elem );
  }
  if ( documentIsXML || support.attributes ) {
    return elem.getAttribute( name );
  }
  return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
    name :
    val && val.specified ? val.value : null;
};

Sizzle.error = function( msg ) {
  throw new Error( "Syntax error, unrecognized expression: " + msg );
};

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
  var elem,
    duplicates = [],
    i = 1,
    j = 0;

  // Unless we *know* we can detect duplicates, assume their presence
  hasDuplicate = !support.detectDuplicates;
  results.sort( sortOrder );

  if ( hasDuplicate ) {
    for ( ; (elem = results[i]); i++ ) {
      if ( elem === results[ i - 1 ] ) {
        j = duplicates.push( i );
      }
    }
    while ( j-- ) {
      results.splice( duplicates[ j ], 1 );
    }
  }

  return results;
};

function siblingCheck( a, b ) {
  var cur = b && a,
    diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );

  // Use IE sourceIndex if available on both nodes
  if ( diff ) {
    return diff;
  }

  // Check if b follows a
  if ( cur ) {
    while ( (cur = cur.nextSibling) ) {
      if ( cur === b ) {
        return -1;
      }
    }
  }

  return a ? 1 : -1;
}

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return name === "input" && elem.type === type;
  };
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return (name === "input" || name === "button") && elem.type === type;
  };
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
  return markFunction(function( argument ) {
    argument = +argument;
    return markFunction(function( seed, matches ) {
      var j,
        matchIndexes = fn( [], seed.length, argument ),
        i = matchIndexes.length;

      // Match elements found at the specified indexes
      while ( i-- ) {
        if ( seed[ (j = matchIndexes[i]) ] ) {
          seed[j] = !(matches[j] = seed[j]);
        }
      }
    });
  });
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
  var node,
    ret = "",
    i = 0,
    nodeType = elem.nodeType;

  if ( !nodeType ) {
    // If no nodeType, this is expected to be an array
    for ( ; (node = elem[i]); i++ ) {
      // Do not traverse comment nodes
      ret += getText( node );
    }
  } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
    // Use textContent for elements
    // innerText usage removed for consistency of new lines (see #11153)
    if ( typeof elem.textContent === "string" ) {
      return elem.textContent;
    } else {
      // Traverse its children
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        ret += getText( elem );
      }
    }
  } else if ( nodeType === 3 || nodeType === 4 ) {
    return elem.nodeValue;
  }
  // Do not include comment or processing instruction nodes

  return ret;
};

Expr = Sizzle.selectors = {

  // Can be adjusted by the user
  cacheLength: 50,

  createPseudo: markFunction,

  match: matchExpr,

  find: {},

  relative: {
    ">": { dir: "parentNode", first: true },
    " ": { dir: "parentNode" },
    "+": { dir: "previousSibling", first: true },
    "~": { dir: "previousSibling" }
  },

  preFilter: {
    "ATTR": function( match ) {
      match[1] = match[1].replace( runescape, funescape );

      // Move the given value to match[3] whether quoted or unquoted
      match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

      if ( match[2] === "~=" ) {
        match[3] = " " + match[3] + " ";
      }

      return match.slice( 0, 4 );
    },

    "CHILD": function( match ) {
      /* matches from matchExpr["CHILD"]
        1 type (only|nth|...)
        2 what (child|of-type)
        3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        4 xn-component of xn+y argument ([+-]?\d*n|)
        5 sign of xn-component
        6 x of xn-component
        7 sign of y-component
        8 y of y-component
      */
      match[1] = match[1].toLowerCase();

      if ( match[1].slice( 0, 3 ) === "nth" ) {
        // nth-* requires argument
        if ( !match[3] ) {
          Sizzle.error( match[0] );
        }

        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
        match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

      // other types prohibit arguments
      } else if ( match[3] ) {
        Sizzle.error( match[0] );
      }

      return match;
    },

    "PSEUDO": function( match ) {
      var excess,
        unquoted = !match[5] && match[2];

      if ( matchExpr["CHILD"].test( match[0] ) ) {
        return null;
      }

      // Accept quoted arguments as-is
      if ( match[4] ) {
        match[2] = match[4];

      // Strip excess characters from unquoted arguments
      } else if ( unquoted && rpseudo.test( unquoted ) &&
        // Get excess from tokenize (recursively)
        (excess = tokenize( unquoted, true )) &&
        // advance to the next closing parenthesis
        (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

        // excess is a negative index
        match[0] = match[0].slice( 0, excess );
        match[2] = unquoted.slice( 0, excess );
      }

      // Return only captures needed by the pseudo filter method (type and argument)
      return match.slice( 0, 3 );
    }
  },

  filter: {

    "TAG": function( nodeName ) {
      if ( nodeName === "*" ) {
        return function() { return true; };
      }

      nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
      return function( elem ) {
        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
      };
    },

    "CLASS": function( className ) {
      var pattern = classCache[ className + " " ];

      return pattern ||
        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
        classCache( className, function( elem ) {
          return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
        });
    },

    "ATTR": function( name, operator, check ) {
      return function( elem ) {
        var result = Sizzle.attr( elem, name );

        if ( result == null ) {
          return operator === "!=";
        }
        if ( !operator ) {
          return true;
        }

        result += "";

        return operator === "=" ? result === check :
          operator === "!=" ? result !== check :
          operator === "^=" ? check && result.indexOf( check ) === 0 :
          operator === "*=" ? check && result.indexOf( check ) > -1 :
          operator === "$=" ? check && result.slice( -check.length ) === check :
          operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
          operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
          false;
      };
    },

    "CHILD": function( type, what, argument, first, last ) {
      var simple = type.slice( 0, 3 ) !== "nth",
        forward = type.slice( -4 ) !== "last",
        ofType = what === "of-type";

      return first === 1 && last === 0 ?

        // Shortcut for :nth-*(n)
        function( elem ) {
          return !!elem.parentNode;
        } :

        function( elem, context, xml ) {
          var cache, outerCache, node, diff, nodeIndex, start,
            dir = simple !== forward ? "nextSibling" : "previousSibling",
            parent = elem.parentNode,
            name = ofType && elem.nodeName.toLowerCase(),
            useCache = !xml && !ofType;

          if ( parent ) {

            // :(first|last|only)-(child|of-type)
            if ( simple ) {
              while ( dir ) {
                node = elem;
                while ( (node = node[ dir ]) ) {
                  if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
                    return false;
                  }
                }
                // Reverse direction for :only-* (if we haven't yet done so)
                start = dir = type === "only" && !start && "nextSibling";
              }
              return true;
            }

            start = [ forward ? parent.firstChild : parent.lastChild ];

            // non-xml :nth-child(...) stores cache data on `parent`
            if ( forward && useCache ) {
              // Seek `elem` from a previously-cached index
              outerCache = parent[ expando ] || (parent[ expando ] = {});
              cache = outerCache[ type ] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = cache[0] === dirruns && cache[2];
              node = nodeIndex && parent.childNodes[ nodeIndex ];

              while ( (node = ++nodeIndex && node && node[ dir ] ||

                // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) ) {

                // When found, cache indexes on `parent` and break
                if ( node.nodeType === 1 && ++diff && node === elem ) {
                  outerCache[ type ] = [ dirruns, nodeIndex, diff ];
                  break;
                }
              }

            // Use previously-cached element index if available
            } else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
              diff = cache[1];

            // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
            } else {
              // Use the same loop as above to seek `elem` from the start
              while ( (node = ++nodeIndex && node && node[ dir ] ||
                (diff = nodeIndex = 0) || start.pop()) ) {

                if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
                  // Cache the index of each encountered element
                  if ( useCache ) {
                    (node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
                  }

                  if ( node === elem ) {
                    break;
                  }
                }
              }
            }

            // Incorporate the offset, then check against cycle size
            diff -= last;
            return diff === first || ( diff % first === 0 && diff / first >= 0 );
          }
        };
    },

    "PSEUDO": function( pseudo, argument ) {
      // pseudo-class names are case-insensitive
      // http://www.w3.org/TR/selectors/#pseudo-classes
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
      // Remember that setFilters inherits from pseudos
      var args,
        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
          Sizzle.error( "unsupported pseudo: " + pseudo );

      // The user may use createPseudo to indicate that
      // arguments are needed to create the filter function
      // just as Sizzle does
      if ( fn[ expando ] ) {
        return fn( argument );
      }

      // But maintain support for old signatures
      if ( fn.length > 1 ) {
        args = [ pseudo, pseudo, "", argument ];
        return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
          markFunction(function( seed, matches ) {
            var idx,
              matched = fn( seed, argument ),
              i = matched.length;
            while ( i-- ) {
              idx = indexOf.call( seed, matched[i] );
              seed[ idx ] = !( matches[ idx ] = matched[i] );
            }
          }) :
          function( elem ) {
            return fn( elem, 0, args );
          };
      }

      return fn;
    }
  },

  pseudos: {
    // Potentially complex pseudos
    "not": markFunction(function( selector ) {
      // Trim the selector passed to compile
      // to avoid treating leading and trailing
      // spaces as combinators
      var input = [],
        results = [],
        matcher = compile( selector.replace( rtrim, "$1" ) );

      return matcher[ expando ] ?
        markFunction(function( seed, matches, context, xml ) {
          var elem,
            unmatched = matcher( seed, null, xml, [] ),
            i = seed.length;

          // Match elements unmatched by `matcher`
          while ( i-- ) {
            if ( (elem = unmatched[i]) ) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) :
        function( elem, context, xml ) {
          input[0] = elem;
          matcher( input, null, xml, results );
          return !results.pop();
        };
    }),

    "has": markFunction(function( selector ) {
      return function( elem ) {
        return Sizzle( selector, elem ).length > 0;
      };
    }),

    "contains": markFunction(function( text ) {
      return function( elem ) {
        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
      };
    }),

    // "Whether an element is represented by a :lang() selector
    // is based solely on the element's language value
    // being equal to the identifier C,
    // or beginning with the identifier C immediately followed by "-".
    // The matching of C against the element's language value is performed case-insensitively.
    // The identifier C does not have to be a valid language name."
    // http://www.w3.org/TR/selectors/#lang-pseudo
    "lang": markFunction( function( lang ) {
      // lang value must be a valid identifider
      if ( !ridentifier.test(lang || "") ) {
        Sizzle.error( "unsupported lang: " + lang );
      }
      lang = lang.replace( runescape, funescape ).toLowerCase();
      return function( elem ) {
        var elemLang;
        do {
          if ( (elemLang = documentIsXML ?
            elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
            elem.lang) ) {

            elemLang = elemLang.toLowerCase();
            return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
          }
        } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
        return false;
      };
    }),

    // Miscellaneous
    "target": function( elem ) {
      var hash = window.location && window.location.hash;
      return hash && hash.slice( 1 ) === elem.id;
    },

    "root": function( elem ) {
      return elem === docElem;
    },

    "focus": function( elem ) {
      return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    },

    // Boolean properties
    "enabled": function( elem ) {
      return elem.disabled === false;
    },

    "disabled": function( elem ) {
      return elem.disabled === true;
    },

    "checked": function( elem ) {
      // In CSS3, :checked should return both checked and selected elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      var nodeName = elem.nodeName.toLowerCase();
      return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
    },

    "selected": function( elem ) {
      // Accessing this property makes selected-by-default
      // options in Safari work properly
      if ( elem.parentNode ) {
        elem.parentNode.selectedIndex;
      }

      return elem.selected === true;
    },

    // Contents
    "empty": function( elem ) {
      // http://www.w3.org/TR/selectors/#empty-pseudo
      // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
      //   not comment, processing instructions, or others
      // Thanks to Diego Perini for the nodeName shortcut
      //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
          return false;
        }
      }
      return true;
    },

    "parent": function( elem ) {
      return !Expr.pseudos["empty"]( elem );
    },

    // Element/input types
    "header": function( elem ) {
      return rheader.test( elem.nodeName );
    },

    "input": function( elem ) {
      return rinputs.test( elem.nodeName );
    },

    "button": function( elem ) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === "button" || name === "button";
    },

    "text": function( elem ) {
      var attr;
      // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
      // use getAttribute instead to test this case
      return elem.nodeName.toLowerCase() === "input" &&
        elem.type === "text" &&
        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
    },

    // Position-in-collection
    "first": createPositionalPseudo(function() {
      return [ 0 ];
    }),

    "last": createPositionalPseudo(function( matchIndexes, length ) {
      return [ length - 1 ];
    }),

    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
      return [ argument < 0 ? argument + length : argument ];
    }),

    "even": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 0;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "odd": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 1;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; --i >= 0; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; ++i < length; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    })
  }
};

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
  Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
  Expr.pseudos[ i ] = createButtonPseudo( i );
}

function tokenize( selector, parseOnly ) {
  var matched, match, tokens, type,
    soFar, groups, preFilters,
    cached = tokenCache[ selector + " " ];

  if ( cached ) {
    return parseOnly ? 0 : cached.slice( 0 );
  }

  soFar = selector;
  groups = [];
  preFilters = Expr.preFilter;

  while ( soFar ) {

    // Comma and first run
    if ( !matched || (match = rcomma.exec( soFar )) ) {
      if ( match ) {
        // Don't consume trailing commas as valid
        soFar = soFar.slice( match[0].length ) || soFar;
      }
      groups.push( tokens = [] );
    }

    matched = false;

    // Combinators
    if ( (match = rcombinators.exec( soFar )) ) {
      matched = match.shift();
      tokens.push( {
        value: matched,
        // Cast descendant combinators to space
        type: match[0].replace( rtrim, " " )
      } );
      soFar = soFar.slice( matched.length );
    }

    // Filters
    for ( type in Expr.filter ) {
      if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
        (match = preFilters[ type ]( match ))) ) {
        matched = match.shift();
        tokens.push( {
          value: matched,
          type: type,
          matches: match
        } );
        soFar = soFar.slice( matched.length );
      }
    }

    if ( !matched ) {
      break;
    }
  }

  // Return the length of the invalid excess
  // if we're just parsing
  // Otherwise, throw an error or return tokens
  return parseOnly ?
    soFar.length :
    soFar ?
      Sizzle.error( selector ) :
      // Cache the tokens
      tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
  var i = 0,
    len = tokens.length,
    selector = "";
  for ( ; i < len; i++ ) {
    selector += tokens[i].value;
  }
  return selector;
}

function addCombinator( matcher, combinator, base ) {
  var dir = combinator.dir,
    checkNonElements = base && dir === "parentNode",
    doneName = done++;

  return combinator.first ?
    // Check against closest ancestor/preceding element
    function( elem, context, xml ) {
      while ( (elem = elem[ dir ]) ) {
        if ( elem.nodeType === 1 || checkNonElements ) {
          return matcher( elem, context, xml );
        }
      }
    } :

    // Check against all ancestor/preceding elements
    function( elem, context, xml ) {
      var data, cache, outerCache,
        dirkey = dirruns + " " + doneName;

      // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
      if ( xml ) {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            if ( matcher( elem, context, xml ) ) {
              return true;
            }
          }
        }
      } else {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            outerCache = elem[ expando ] || (elem[ expando ] = {});
            if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
              if ( (data = cache[1]) === true || data === cachedruns ) {
                return data === true;
              }
            } else {
              cache = outerCache[ dir ] = [ dirkey ];
              cache[1] = matcher( elem, context, xml ) || cachedruns;
              if ( cache[1] === true ) {
                return true;
              }
            }
          }
        }
      }
    };
}

function elementMatcher( matchers ) {
  return matchers.length > 1 ?
    function( elem, context, xml ) {
      var i = matchers.length;
      while ( i-- ) {
        if ( !matchers[i]( elem, context, xml ) ) {
          return false;
        }
      }
      return true;
    } :
    matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
  var elem,
    newUnmatched = [],
    i = 0,
    len = unmatched.length,
    mapped = map != null;

  for ( ; i < len; i++ ) {
    if ( (elem = unmatched[i]) ) {
      if ( !filter || filter( elem, context, xml ) ) {
        newUnmatched.push( elem );
        if ( mapped ) {
          map.push( i );
        }
      }
    }
  }

  return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
  if ( postFilter && !postFilter[ expando ] ) {
    postFilter = setMatcher( postFilter );
  }
  if ( postFinder && !postFinder[ expando ] ) {
    postFinder = setMatcher( postFinder, postSelector );
  }
  return markFunction(function( seed, results, context, xml ) {
    var temp, i, elem,
      preMap = [],
      postMap = [],
      preexisting = results.length,

      // Get initial elements from seed or context
      elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && ( seed || !selector ) ?
        condense( elems, preMap, preFilter, context, xml ) :
        elems,

      matcherOut = matcher ?
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

          // ...intermediate processing is necessary
          [] :

          // ...otherwise use results directly
          results :
        matcherIn;

    // Find primary matches
    if ( matcher ) {
      matcher( matcherIn, matcherOut, context, xml );
    }

    // Apply postFilter
    if ( postFilter ) {
      temp = condense( matcherOut, postMap );
      postFilter( temp, [], context, xml );

      // Un-match failing elements by moving them back to matcherIn
      i = temp.length;
      while ( i-- ) {
        if ( (elem = temp[i]) ) {
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
        }
      }
    }

    if ( seed ) {
      if ( postFinder || preFilter ) {
        if ( postFinder ) {
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
          temp = [];
          i = matcherOut.length;
          while ( i-- ) {
            if ( (elem = matcherOut[i]) ) {
              // Restore matcherIn since elem is not yet a final match
              temp.push( (matcherIn[i] = elem) );
            }
          }
          postFinder( null, (matcherOut = []), temp, xml );
        }

        // Move matched elements from seed to results to keep them synchronized
        i = matcherOut.length;
        while ( i-- ) {
          if ( (elem = matcherOut[i]) &&
            (temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

            seed[temp] = !(results[temp] = elem);
          }
        }
      }

    // Add elements to results, through postFinder if defined
    } else {
      matcherOut = condense(
        matcherOut === results ?
          matcherOut.splice( preexisting, matcherOut.length ) :
          matcherOut
      );
      if ( postFinder ) {
        postFinder( null, results, matcherOut, xml );
      } else {
        push.apply( results, matcherOut );
      }
    }
  });
}

function matcherFromTokens( tokens ) {
  var checkContext, matcher, j,
    len = tokens.length,
    leadingRelative = Expr.relative[ tokens[0].type ],
    implicitRelative = leadingRelative || Expr.relative[" "],
    i = leadingRelative ? 1 : 0,

    // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator( function( elem ) {
      return elem === checkContext;
    }, implicitRelative, true ),
    matchAnyContext = addCombinator( function( elem ) {
      return indexOf.call( checkContext, elem ) > -1;
    }, implicitRelative, true ),
    matchers = [ function( elem, context, xml ) {
      return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
        (checkContext = context).nodeType ?
          matchContext( elem, context, xml ) :
          matchAnyContext( elem, context, xml ) );
    } ];

  for ( ; i < len; i++ ) {
    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
      matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
    } else {
      matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

      // Return special upon seeing a positional matcher
      if ( matcher[ expando ] ) {
        // Find the next relative operator (if any) for proper handling
        j = ++i;
        for ( ; j < len; j++ ) {
          if ( Expr.relative[ tokens[j].type ] ) {
            break;
          }
        }
        return setMatcher(
          i > 1 && elementMatcher( matchers ),
          i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
          matcher,
          i < j && matcherFromTokens( tokens.slice( i, j ) ),
          j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
          j < len && toSelector( tokens )
        );
      }
      matchers.push( matcher );
    }
  }

  return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
  // A counter to specify which element is currently being matched
  var matcherCachedRuns = 0,
    bySet = setMatchers.length > 0,
    byElement = elementMatchers.length > 0,
    superMatcher = function( seed, context, xml, results, expandContext ) {
      var elem, j, matcher,
        setMatched = [],
        matchedCount = 0,
        i = "0",
        unmatched = seed && [],
        outermost = expandContext != null,
        contextBackup = outermostContext,
        // We must always have either seed elements or context
        elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
        // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

      if ( outermost ) {
        outermostContext = context !== document && context;
        cachedruns = matcherCachedRuns;
      }

      // Add elements passing elementMatchers directly to results
      // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
      for ( ; (elem = elems[i]) != null; i++ ) {
        if ( byElement && elem ) {
          j = 0;
          while ( (matcher = elementMatchers[j++]) ) {
            if ( matcher( elem, context, xml ) ) {
              results.push( elem );
              break;
            }
          }
          if ( outermost ) {
            dirruns = dirrunsUnique;
            cachedruns = ++matcherCachedRuns;
          }
        }

        // Track unmatched elements for set filters
        if ( bySet ) {
          // They will have gone through all possible matchers
          if ( (elem = !matcher && elem) ) {
            matchedCount--;
          }

          // Lengthen the array for every element, matched or not
          if ( seed ) {
            unmatched.push( elem );
          }
        }
      }

      // Apply set filters to unmatched elements
      matchedCount += i;
      if ( bySet && i !== matchedCount ) {
        j = 0;
        while ( (matcher = setMatchers[j++]) ) {
          matcher( unmatched, setMatched, context, xml );
        }

        if ( seed ) {
          // Reintegrate element matches to eliminate the need for sorting
          if ( matchedCount > 0 ) {
            while ( i-- ) {
              if ( !(unmatched[i] || setMatched[i]) ) {
                setMatched[i] = pop.call( results );
              }
            }
          }

          // Discard index placeholder values to get only actual matches
          setMatched = condense( setMatched );
        }

        // Add matches to results
        push.apply( results, setMatched );

        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if ( outermost && !seed && setMatched.length > 0 &&
          ( matchedCount + setMatchers.length ) > 1 ) {

          Sizzle.uniqueSort( results );
        }
      }

      // Override manipulation of globals by nested matchers
      if ( outermost ) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }

      return unmatched;
    };

  return bySet ?
    markFunction( superMatcher ) :
    superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
  var i,
    setMatchers = [],
    elementMatchers = [],
    cached = compilerCache[ selector + " " ];

  if ( !cached ) {
    // Generate a function of recursive functions that can be used to check each element
    if ( !group ) {
      group = tokenize( selector );
    }
    i = group.length;
    while ( i-- ) {
      cached = matcherFromTokens( group[i] );
      if ( cached[ expando ] ) {
        setMatchers.push( cached );
      } else {
        elementMatchers.push( cached );
      }
    }

    // Cache the compiled function
    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
  }
  return cached;
};

function multipleContexts( selector, contexts, results ) {
  var i = 0,
    len = contexts.length;
  for ( ; i < len; i++ ) {
    Sizzle( selector, contexts[i], results );
  }
  return results;
}

function select( selector, context, results, seed ) {
  var i, tokens, token, type, find,
    match = tokenize( selector );

  if ( !seed ) {
    // Try to minimize operations if there is only one group
    if ( match.length === 1 ) {

      // Take a shortcut and set the context if the root selector is an ID
      tokens = match[0] = match[0].slice( 0 );
      if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
          context.nodeType === 9 && !documentIsXML &&
          Expr.relative[ tokens[1].type ] ) {

        context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
        if ( !context ) {
          return results;
        }

        selector = selector.slice( tokens.shift().value.length );
      }

      // Fetch a seed set for right-to-left matching
      i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
      while ( i-- ) {
        token = tokens[i];

        // Abort if we hit a combinator
        if ( Expr.relative[ (type = token.type) ] ) {
          break;
        }
        if ( (find = Expr.find[ type ]) ) {
          // Search, expanding context for leading sibling combinators
          if ( (seed = find(
            token.matches[0].replace( runescape, funescape ),
            rsibling.test( tokens[0].type ) && context.parentNode || context
          )) ) {

            // If seed is empty or no tokens remain, we can return early
            tokens.splice( i, 1 );
            selector = seed.length && toSelector( tokens );
            if ( !selector ) {
              push.apply( results, slice.call( seed, 0 ) );
              return results;
            }

            break;
          }
        }
      }
    }
  }

  // Compile and execute a filtering function
  // Provide `match` to avoid retokenization if we modified the selector above
  compile( selector, match )(
    seed,
    context,
    documentIsXML,
    results,
    rsibling.test( selector )
  );
  return results;
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Easy API for creating new setFilters
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Initialize with the default document
setDocument();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
  rparentsprev = /^(?:parents|prev(?:Until|All))/,
  isSimple = /^.[^:#\[\.,]*$/,
  rneedsContext = jQuery.expr.match.needsContext,
  // methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };

jQuery.fn.extend({
  find: function( selector ) {
    var i, ret, self,
      len = this.length;

    if ( typeof selector !== "string" ) {
      self = this;
      return this.pushStack( jQuery( selector ).filter(function() {
        for ( i = 0; i < len; i++ ) {
          if ( jQuery.contains( self[ i ], this ) ) {
            return true;
          }
        }
      }) );
    }

    ret = [];
    for ( i = 0; i < len; i++ ) {
      jQuery.find( selector, this[ i ], ret );
    }

    // Needed because $( selector, context ) becomes $( context ).find( selector )
    ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
    ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
    return ret;
  },

  has: function( target ) {
    var i,
      targets = jQuery( target, this ),
      len = targets.length;

    return this.filter(function() {
      for ( i = 0; i < len; i++ ) {
        if ( jQuery.contains( this, targets[i] ) ) {
          return true;
        }
      }
    });
  },

  not: function( selector ) {
    return this.pushStack( winnow(this, selector, false) );
  },

  filter: function( selector ) {
    return this.pushStack( winnow(this, selector, true) );
  },

  is: function( selector ) {
    return !!selector && (
      typeof selector === "string" ?
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        rneedsContext.test( selector ) ?
          jQuery( selector, this.context ).index( this[0] ) >= 0 :
          jQuery.filter( selector, this ).length > 0 :
        this.filter( selector ).length > 0 );
  },

  closest: function( selectors, context ) {
    var cur,
      i = 0,
      l = this.length,
      ret = [],
      pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
        jQuery( selectors, context || this.context ) :
        0;

    for ( ; i < l; i++ ) {
      cur = this[i];

      while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
        if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
          ret.push( cur );
          break;
        }
        cur = cur.parentNode;
      }
    }

    return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
  },

  // Determine the position of an element within
  // the matched set of elements
  index: function( elem ) {

    // No argument, return index in parent
    if ( !elem ) {
      return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
    }

    // index in selector
    if ( typeof elem === "string" ) {
      return jQuery.inArray( this[0], jQuery( elem ) );
    }

    // Locate the position of the desired element
    return jQuery.inArray(
      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem, this );
  },

  add: function( selector, context ) {
    var set = typeof selector === "string" ?
        jQuery( selector, context ) :
        jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
      all = jQuery.merge( this.get(), set );

    return this.pushStack( jQuery.unique(all) );
  },

  addBack: function( selector ) {
    return this.add( selector == null ?
      this.prevObject : this.prevObject.filter(selector)
    );
  }
});

jQuery.fn.andSelf = jQuery.fn.addBack;

function sibling( cur, dir ) {
  do {
    cur = cur[ dir ];
  } while ( cur && cur.nodeType !== 1 );

  return cur;
}

jQuery.each({
  parent: function( elem ) {
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },
  parents: function( elem ) {
    return jQuery.dir( elem, "parentNode" );
  },
  parentsUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "parentNode", until );
  },
  next: function( elem ) {
    return sibling( elem, "nextSibling" );
  },
  prev: function( elem ) {
    return sibling( elem, "previousSibling" );
  },
  nextAll: function( elem ) {
    return jQuery.dir( elem, "nextSibling" );
  },
  prevAll: function( elem ) {
    return jQuery.dir( elem, "previousSibling" );
  },
  nextUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "nextSibling", until );
  },
  prevUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "previousSibling", until );
  },
  siblings: function( elem ) {
    return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
  },
  children: function( elem ) {
    return jQuery.sibling( elem.firstChild );
  },
  contents: function( elem ) {
    return jQuery.nodeName( elem, "iframe" ) ?
      elem.contentDocument || elem.contentWindow.document :
      jQuery.merge( [], elem.childNodes );
  }
}, function( name, fn ) {
  jQuery.fn[ name ] = function( until, selector ) {
    var ret = jQuery.map( this, fn, until );

    if ( !runtil.test( name ) ) {
      selector = until;
    }

    if ( selector && typeof selector === "string" ) {
      ret = jQuery.filter( selector, ret );
    }

    ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

    if ( this.length > 1 && rparentsprev.test( name ) ) {
      ret = ret.reverse();
    }

    return this.pushStack( ret );
  };
});

jQuery.extend({
  filter: function( expr, elems, not ) {
    if ( not ) {
      expr = ":not(" + expr + ")";
    }

    return elems.length === 1 ?
      jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
      jQuery.find.matches(expr, elems);
  },

  dir: function( elem, dir, until ) {
    var matched = [],
      cur = elem[ dir ];

    while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
      if ( cur.nodeType === 1 ) {
        matched.push( cur );
      }
      cur = cur[dir];
    }
    return matched;
  },

  sibling: function( n, elem ) {
    var r = [];

    for ( ; n; n = n.nextSibling ) {
      if ( n.nodeType === 1 && n !== elem ) {
        r.push( n );
      }
    }

    return r;
  }
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

  // Can't pass null or undefined to indexOf in Firefox 4
  // Set to 0 to skip string check
  qualifier = qualifier || 0;

  if ( jQuery.isFunction( qualifier ) ) {
    return jQuery.grep(elements, function( elem, i ) {
      var retVal = !!qualifier.call( elem, i, elem );
      return retVal === keep;
    });

  } else if ( qualifier.nodeType ) {
    return jQuery.grep(elements, function( elem ) {
      return ( elem === qualifier ) === keep;
    });

  } else if ( typeof qualifier === "string" ) {
    var filtered = jQuery.grep(elements, function( elem ) {
      return elem.nodeType === 1;
    });

    if ( isSimple.test( qualifier ) ) {
      return jQuery.filter(qualifier, filtered, !keep);
    } else {
      qualifier = jQuery.filter( qualifier, filtered );
    }
  }

  return jQuery.grep(elements, function( elem ) {
    return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
  });
}
function createSafeFragment( document ) {
  var list = nodeNames.split( "|" ),
    safeFrag = document.createDocumentFragment();

  if ( safeFrag.createElement ) {
    while ( list.length ) {
      safeFrag.createElement(
        list.pop()
      );
    }
  }
  return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
    "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
  rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
  rleadingWhitespace = /^\s+/,
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  rtagName = /<([\w:]+)/,
  rtbody = /<tbody/i,
  rhtml = /<|&#?\w+;/,
  rnoInnerhtml = /<(?:script|style|link)/i,
  manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  rscriptType = /^$|\/(?:java|ecma)script/i,
  rscriptTypeMasked = /^true\/(.*)/,
  rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

  // We have to close these tags to support XHTML (#13200)
  wrapMap = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    area: [ 1, "<map>", "</map>" ],
    param: [ 1, "<object>", "</object>" ],
    thead: [ 1, "<table>", "</table>" ],
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
    // unless wrapped in a div with non-breaking characters in front of it.
    _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
  },
  safeFragment = createSafeFragment( document ),
  fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
  text: function( value ) {
    return jQuery.access( this, function( value ) {
      return value === undefined ?
        jQuery.text( this ) :
        this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
    }, null, value, arguments.length );
  },

  wrapAll: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each(function(i) {
        jQuery(this).wrapAll( html.call(this, i) );
      });
    }

    if ( this[0] ) {
      // The elements to wrap the target around
      var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

      if ( this[0].parentNode ) {
        wrap.insertBefore( this[0] );
      }

      wrap.map(function() {
        var elem = this;

        while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
          elem = elem.firstChild;
        }

        return elem;
      }).append( this );
    }

    return this;
  },

  wrapInner: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each(function(i) {
        jQuery(this).wrapInner( html.call(this, i) );
      });
    }

    return this.each(function() {
      var self = jQuery( this ),
        contents = self.contents();

      if ( contents.length ) {
        contents.wrapAll( html );

      } else {
        self.append( html );
      }
    });
  },

  wrap: function( html ) {
    var isFunction = jQuery.isFunction( html );

    return this.each(function(i) {
      jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
    });
  },

  unwrap: function() {
    return this.parent().each(function() {
      if ( !jQuery.nodeName( this, "body" ) ) {
        jQuery( this ).replaceWith( this.childNodes );
      }
    }).end();
  },

  append: function() {
    return this.domManip(arguments, true, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        this.appendChild( elem );
      }
    });
  },

  prepend: function() {
    return this.domManip(arguments, true, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        this.insertBefore( elem, this.firstChild );
      }
    });
  },

  before: function() {
    return this.domManip( arguments, false, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this );
      }
    });
  },

  after: function() {
    return this.domManip( arguments, false, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      }
    });
  },

  // keepData is for internal use only--do not document
  remove: function( selector, keepData ) {
    var elem,
      i = 0;

    for ( ; (elem = this[i]) != null; i++ ) {
      if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
        if ( !keepData && elem.nodeType === 1 ) {
          jQuery.cleanData( getAll( elem ) );
        }

        if ( elem.parentNode ) {
          if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
            setGlobalEval( getAll( elem, "script" ) );
          }
          elem.parentNode.removeChild( elem );
        }
      }
    }

    return this;
  },

  empty: function() {
    var elem,
      i = 0;

    for ( ; (elem = this[i]) != null; i++ ) {
      // Remove element nodes and prevent memory leaks
      if ( elem.nodeType === 1 ) {
        jQuery.cleanData( getAll( elem, false ) );
      }

      // Remove any remaining nodes
      while ( elem.firstChild ) {
        elem.removeChild( elem.firstChild );
      }

      // If this is a select, ensure that it displays empty (#12336)
      // Support: IE<9
      if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
        elem.options.length = 0;
      }
    }

    return this;
  },

  clone: function( dataAndEvents, deepDataAndEvents ) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

    return this.map( function () {
      return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
    });
  },

  html: function( value ) {
    return jQuery.access( this, function( value ) {
      var elem = this[0] || {},
        i = 0,
        l = this.length;

      if ( value === undefined ) {
        return elem.nodeType === 1 ?
          elem.innerHTML.replace( rinlinejQuery, "" ) :
          undefined;
      }

      // See if we can take a shortcut and just use innerHTML
      if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
        ( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
        ( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
        !wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

        value = value.replace( rxhtmlTag, "<$1></$2>" );

        try {
          for (; i < l; i++ ) {
            // Remove element nodes and prevent memory leaks
            elem = this[i] || {};
            if ( elem.nodeType === 1 ) {
              jQuery.cleanData( getAll( elem, false ) );
              elem.innerHTML = value;
            }
          }

          elem = 0;

        // If using innerHTML throws an exception, use the fallback method
        } catch(e) {}
      }

      if ( elem ) {
        this.empty().append( value );
      }
    }, null, value, arguments.length );
  },

  replaceWith: function( value ) {
    var isFunc = jQuery.isFunction( value );

    // Make sure that the elements are removed from the DOM before they are inserted
    // this can help fix replacing a parent with child elements
    if ( !isFunc && typeof value !== "string" ) {
      value = jQuery( value ).not( this ).detach();
    }

    return this.domManip( [ value ], true, function( elem ) {
      var next = this.nextSibling,
        parent = this.parentNode;

      if ( parent ) {
        jQuery( this ).remove();
        parent.insertBefore( elem, next );
      }
    });
  },

  detach: function( selector ) {
    return this.remove( selector, true );
  },

  domManip: function( args, table, callback ) {

    // Flatten any nested arrays
    args = core_concat.apply( [], args );

    var first, node, hasScripts,
      scripts, doc, fragment,
      i = 0,
      l = this.length,
      set = this,
      iNoClone = l - 1,
      value = args[0],
      isFunction = jQuery.isFunction( value );

    // We can't cloneNode fragments that contain checked, in WebKit
    if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
      return this.each(function( index ) {
        var self = set.eq( index );
        if ( isFunction ) {
          args[0] = value.call( this, index, table ? self.html() : undefined );
        }
        self.domManip( args, table, callback );
      });
    }

    if ( l ) {
      fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
      first = fragment.firstChild;

      if ( fragment.childNodes.length === 1 ) {
        fragment = first;
      }

      if ( first ) {
        table = table && jQuery.nodeName( first, "tr" );
        scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
        hasScripts = scripts.length;

        // Use the original fragment for the last item instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).
        for ( ; i < l; i++ ) {
          node = fragment;

          if ( i !== iNoClone ) {
            node = jQuery.clone( node, true, true );

            // Keep references to cloned scripts for later restoration
            if ( hasScripts ) {
              jQuery.merge( scripts, getAll( node, "script" ) );
            }
          }

          callback.call(
            table && jQuery.nodeName( this[i], "table" ) ?
              findOrAppend( this[i], "tbody" ) :
              this[i],
            node,
            i
          );
        }

        if ( hasScripts ) {
          doc = scripts[ scripts.length - 1 ].ownerDocument;

          // Reenable scripts
          jQuery.map( scripts, restoreScript );

          // Evaluate executable scripts on first document insertion
          for ( i = 0; i < hasScripts; i++ ) {
            node = scripts[ i ];
            if ( rscriptType.test( node.type || "" ) &&
              !jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

              if ( node.src ) {
                // Hope ajax is available...
                jQuery.ajax({
                  url: node.src,
                  type: "GET",
                  dataType: "script",
                  async: false,
                  global: false,
                  "throws": true
                });
              } else {
                jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
              }
            }
          }
        }

        // Fix #11809: Avoid leaking memory
        fragment = first = null;
      }
    }

    return this;
  }
});

function findOrAppend( elem, tag ) {
  return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
  var attr = elem.getAttributeNode("type");
  elem.type = ( attr && attr.specified ) + "/" + elem.type;
  return elem;
}
function restoreScript( elem ) {
  var match = rscriptTypeMasked.exec( elem.type );
  if ( match ) {
    elem.type = match[1];
  } else {
    elem.removeAttribute("type");
  }
  return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
  var elem,
    i = 0;
  for ( ; (elem = elems[i]) != null; i++ ) {
    jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
  }
}

function cloneCopyEvent( src, dest ) {

  if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
    return;
  }

  var type, i, l,
    oldData = jQuery._data( src ),
    curData = jQuery._data( dest, oldData ),
    events = oldData.events;

  if ( events ) {
    delete curData.handle;
    curData.events = {};

    for ( type in events ) {
      for ( i = 0, l = events[ type ].length; i < l; i++ ) {
        jQuery.event.add( dest, type, events[ type ][ i ] );
      }
    }
  }

  // make the cloned public data object a copy from the original
  if ( curData.data ) {
    curData.data = jQuery.extend( {}, curData.data );
  }
}

function fixCloneNodeIssues( src, dest ) {
  var nodeName, e, data;

  // We do not need to do anything for non-Elements
  if ( dest.nodeType !== 1 ) {
    return;
  }

  nodeName = dest.nodeName.toLowerCase();

  // IE6-8 copies events bound via attachEvent when using cloneNode.
  if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
    data = jQuery._data( dest );

    for ( e in data.events ) {
      jQuery.removeEvent( dest, e, data.handle );
    }

    // Event data gets referenced instead of copied if the expando gets copied too
    dest.removeAttribute( jQuery.expando );
  }

  // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
  if ( nodeName === "script" && dest.text !== src.text ) {
    disableScript( dest ).text = src.text;
    restoreScript( dest );

  // IE6-10 improperly clones children of object elements using classid.
  // IE10 throws NoModificationAllowedError if parent is null, #12132.
  } else if ( nodeName === "object" ) {
    if ( dest.parentNode ) {
      dest.outerHTML = src.outerHTML;
    }

    // This path appears unavoidable for IE9. When cloning an object
    // element in IE9, the outerHTML strategy above is not sufficient.
    // If the src has innerHTML and the destination does not,
    // copy the src.innerHTML into the dest.innerHTML. #10324
    if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
      dest.innerHTML = src.innerHTML;
    }

  } else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
    // IE6-8 fails to persist the checked state of a cloned checkbox
    // or radio button. Worse, IE6-7 fail to give the cloned element
    // a checked appearance if the defaultChecked value isn't also set

    dest.defaultChecked = dest.checked = src.checked;

    // IE6-7 get confused and end up setting the value of a cloned
    // checkbox/radio button to an empty string instead of "on"
    if ( dest.value !== src.value ) {
      dest.value = src.value;
    }

  // IE6-8 fails to return the selected option to the default selected
  // state when cloning options
  } else if ( nodeName === "option" ) {
    dest.defaultSelected = dest.selected = src.defaultSelected;

  // IE6-8 fails to set the defaultValue to the correct value when
  // cloning other types of input fields
  } else if ( nodeName === "input" || nodeName === "textarea" ) {
    dest.defaultValue = src.defaultValue;
  }
}

jQuery.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
}, function( name, original ) {
  jQuery.fn[ name ] = function( selector ) {
    var elems,
      i = 0,
      ret = [],
      insert = jQuery( selector ),
      last = insert.length - 1;

    for ( ; i <= last; i++ ) {
      elems = i === last ? this : this.clone(true);
      jQuery( insert[i] )[ original ]( elems );

      // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
      core_push.apply( ret, elems.get() );
    }

    return this.pushStack( ret );
  };
});

function getAll( context, tag ) {
  var elems, elem,
    i = 0,
    found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
      typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
      undefined;

  if ( !found ) {
    for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
      if ( !tag || jQuery.nodeName( elem, tag ) ) {
        found.push( elem );
      } else {
        jQuery.merge( found, getAll( elem, tag ) );
      }
    }
  }

  return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
    jQuery.merge( [ context ], found ) :
    found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
  if ( manipulation_rcheckableType.test( elem.type ) ) {
    elem.defaultChecked = elem.checked;
  }
}

jQuery.extend({
  clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    var destElements, node, clone, i, srcElements,
      inPage = jQuery.contains( elem.ownerDocument, elem );

    if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
      clone = elem.cloneNode( true );

    // IE<=8 does not properly clone detached, unknown element nodes
    } else {
      fragmentDiv.innerHTML = elem.outerHTML;
      fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
    }

    if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
        (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

      // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
      destElements = getAll( clone );
      srcElements = getAll( elem );

      // Fix all IE cloning issues
      for ( i = 0; (node = srcElements[i]) != null; ++i ) {
        // Ensure that the destination node is not null; Fixes #9587
        if ( destElements[i] ) {
          fixCloneNodeIssues( node, destElements[i] );
        }
      }
    }

    // Copy the events from the original to the clone
    if ( dataAndEvents ) {
      if ( deepDataAndEvents ) {
        srcElements = srcElements || getAll( elem );
        destElements = destElements || getAll( clone );

        for ( i = 0; (node = srcElements[i]) != null; i++ ) {
          cloneCopyEvent( node, destElements[i] );
        }
      } else {
        cloneCopyEvent( elem, clone );
      }
    }

    // Preserve script evaluation history
    destElements = getAll( clone, "script" );
    if ( destElements.length > 0 ) {
      setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
    }

    destElements = srcElements = node = null;

    // Return the cloned set
    return clone;
  },

  buildFragment: function( elems, context, scripts, selection ) {
    var j, elem, contains,
      tmp, tag, tbody, wrap,
      l = elems.length,

      // Ensure a safe fragment
      safe = createSafeFragment( context ),

      nodes = [],
      i = 0;

    for ( ; i < l; i++ ) {
      elem = elems[ i ];

      if ( elem || elem === 0 ) {

        // Add nodes directly
        if ( jQuery.type( elem ) === "object" ) {
          jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

        // Convert non-html into a text node
        } else if ( !rhtml.test( elem ) ) {
          nodes.push( context.createTextNode( elem ) );

        // Convert html into DOM nodes
        } else {
          tmp = tmp || safe.appendChild( context.createElement("div") );

          // Deserialize a standard representation
          tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
          wrap = wrapMap[ tag ] || wrapMap._default;

          tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

          // Descend through wrappers to the right content
          j = wrap[0];
          while ( j-- ) {
            tmp = tmp.lastChild;
          }

          // Manually add leading whitespace removed by IE
          if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
            nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
          }

          // Remove IE's autoinserted <tbody> from table fragments
          if ( !jQuery.support.tbody ) {

            // String was a <table>, *may* have spurious <tbody>
            elem = tag === "table" && !rtbody.test( elem ) ?
              tmp.firstChild :

              // String was a bare <thead> or <tfoot>
              wrap[1] === "<table>" && !rtbody.test( elem ) ?
                tmp :
                0;

            j = elem && elem.childNodes.length;
            while ( j-- ) {
              if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
                elem.removeChild( tbody );
              }
            }
          }

          jQuery.merge( nodes, tmp.childNodes );

          // Fix #12392 for WebKit and IE > 9
          tmp.textContent = "";

          // Fix #12392 for oldIE
          while ( tmp.firstChild ) {
            tmp.removeChild( tmp.firstChild );
          }

          // Remember the top-level container for proper cleanup
          tmp = safe.lastChild;
        }
      }
    }

    // Fix #11356: Clear elements from fragment
    if ( tmp ) {
      safe.removeChild( tmp );
    }

    // Reset defaultChecked for any radios and checkboxes
    // about to be appended to the DOM in IE 6/7 (#8060)
    if ( !jQuery.support.appendChecked ) {
      jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
    }

    i = 0;
    while ( (elem = nodes[ i++ ]) ) {

      // #4087 - If origin and destination elements are the same, and this is
      // that element, do not do anything
      if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
        continue;
      }

      contains = jQuery.contains( elem.ownerDocument, elem );

      // Append to fragment
      tmp = getAll( safe.appendChild( elem ), "script" );

      // Preserve script evaluation history
      if ( contains ) {
        setGlobalEval( tmp );
      }

      // Capture executables
      if ( scripts ) {
        j = 0;
        while ( (elem = tmp[ j++ ]) ) {
          if ( rscriptType.test( elem.type || "" ) ) {
            scripts.push( elem );
          }
        }
      }
    }

    tmp = null;

    return safe;
  },

  cleanData: function( elems, /* internal */ acceptData ) {
    var elem, type, id, data,
      i = 0,
      internalKey = jQuery.expando,
      cache = jQuery.cache,
      deleteExpando = jQuery.support.deleteExpando,
      special = jQuery.event.special;

    for ( ; (elem = elems[i]) != null; i++ ) {

      if ( acceptData || jQuery.acceptData( elem ) ) {

        id = elem[ internalKey ];
        data = id && cache[ id ];

        if ( data ) {
          if ( data.events ) {
            for ( type in data.events ) {
              if ( special[ type ] ) {
                jQuery.event.remove( elem, type );

              // This is a shortcut to avoid jQuery.event.remove's overhead
              } else {
                jQuery.removeEvent( elem, type, data.handle );
              }
            }
          }

          // Remove cache only if it was not already removed by jQuery.event.remove
          if ( cache[ id ] ) {

            delete cache[ id ];

            // IE does not allow us to delete expando properties from nodes,
            // nor does it have a removeAttribute function on Document nodes;
            // we must handle all of these cases
            if ( deleteExpando ) {
              delete elem[ internalKey ];

            } else if ( typeof elem.removeAttribute !== core_strundefined ) {
              elem.removeAttribute( internalKey );

            } else {
              elem[ internalKey ] = null;
            }

            core_deletedIds.push( id );
          }
        }
      }
    }
  }
});
var iframe, getStyles, curCSS,
  ralpha = /alpha\([^)]*\)/i,
  ropacity = /opacity\s*=\s*([^)]*)/,
  rposition = /^(top|right|bottom|left)$/,
  // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
  // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  rmargin = /^margin/,
  rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
  rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
  rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
  elemdisplay = { BODY: "block" },

  cssShow = { position: "absolute", visibility: "hidden", display: "block" },
  cssNormalTransform = {
    letterSpacing: 0,
    fontWeight: 400
  },

  cssExpand = [ "Top", "Right", "Bottom", "Left" ],
  cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

  // shortcut for names that are not vendor prefixed
  if ( name in style ) {
    return name;
  }

  // check for vendor prefixed names
  var capName = name.charAt(0).toUpperCase() + name.slice(1),
    origName = name,
    i = cssPrefixes.length;

  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in style ) {
      return name;
    }
  }

  return origName;
}

function isHidden( elem, el ) {
  // isHidden might be called from jQuery#filter function;
  // in that case, element will be second argument
  elem = el || elem;
  return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
  var display, elem, hidden,
    values = [],
    index = 0,
    length = elements.length;

  for ( ; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }

    values[ index ] = jQuery._data( elem, "olddisplay" );
    display = elem.style.display;
    if ( show ) {
      // Reset the inline display of this element to learn if it is
      // being hidden by cascaded rules or not
      if ( !values[ index ] && display === "none" ) {
        elem.style.display = "";
      }

      // Set elements which have been overridden with display: none
      // in a stylesheet to whatever the default browser style is
      // for such an element
      if ( elem.style.display === "" && isHidden( elem ) ) {
        values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
      }
    } else {

      if ( !values[ index ] ) {
        hidden = isHidden( elem );

        if ( display && display !== "none" || !hidden ) {
          jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
        }
      }
    }
  }

  // Set the display of most of the elements in a second loop
  // to avoid the constant reflow
  for ( index = 0; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
      elem.style.display = show ? values[ index ] || "" : "none";
    }
  }

  return elements;
}

jQuery.fn.extend({
  css: function( name, value ) {
    return jQuery.access( this, function( elem, name, value ) {
      var len, styles,
        map = {},
        i = 0;

      if ( jQuery.isArray( name ) ) {
        styles = getStyles( elem );
        len = name.length;

        for ( ; i < len; i++ ) {
          map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
        }

        return map;
      }

      return value !== undefined ?
        jQuery.style( elem, name, value ) :
        jQuery.css( elem, name );
    }, name, value, arguments.length > 1 );
  },
  show: function() {
    return showHide( this, true );
  },
  hide: function() {
    return showHide( this );
  },
  toggle: function( state ) {
    var bool = typeof state === "boolean";

    return this.each(function() {
      if ( bool ? state : isHidden( this ) ) {
        jQuery( this ).show();
      } else {
        jQuery( this ).hide();
      }
    });
  }
});

jQuery.extend({
  // Add in style property hooks for overriding the default
  // behavior of getting and setting a style property
  cssHooks: {
    opacity: {
      get: function( elem, computed ) {
        if ( computed ) {
          // We should always get a number back from opacity
          var ret = curCSS( elem, "opacity" );
          return ret === "" ? "1" : ret;
        }
      }
    }
  },

  // Exclude the following css properties to add px
  cssNumber: {
    "columnCount": true,
    "fillOpacity": true,
    "fontWeight": true,
    "lineHeight": true,
    "opacity": true,
    "orphans": true,
    "widows": true,
    "zIndex": true,
    "zoom": true
  },

  // Add in properties whose names you wish to fix before
  // setting or getting the value
  cssProps: {
    // normalize float css property
    "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
  },

  // Get and set the style property on a DOM Node
  style: function( elem, name, value, extra ) {
    // Don't set styles on text and comment nodes
    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
      return;
    }

    // Make sure that we're working with the right name
    var ret, type, hooks,
      origName = jQuery.camelCase( name ),
      style = elem.style;

    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

    // gets hook for the prefixed version
    // followed by the unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // Check if we're setting a value
    if ( value !== undefined ) {
      type = typeof value;

      // convert relative number strings (+= or -=) to relative numbers. #7345
      if ( type === "string" && (ret = rrelNum.exec( value )) ) {
        value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
        // Fixes bug #9237
        type = "number";
      }

      // Make sure that NaN and null values aren't set. See: #7116
      if ( value == null || type === "number" && isNaN( value ) ) {
        return;
      }

      // If a number was passed in, add 'px' to the (except for certain CSS properties)
      if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
        value += "px";
      }

      // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
      // but it would mean to define eight (for every problematic property) identical functions
      if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
        style[ name ] = "inherit";
      }

      // If a hook was provided, use that value, otherwise just set the specified value
      if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

        // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
        // Fixes bug #5509
        try {
          style[ name ] = value;
        } catch(e) {}
      }

    } else {
      // If a hook was provided get the non-computed value from there
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
        return ret;
      }

      // Otherwise just get the value from the style object
      return style[ name ];
    }
  },

  css: function( elem, name, extra, styles ) {
    var num, val, hooks,
      origName = jQuery.camelCase( name );

    // Make sure that we're working with the right name
    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

    // gets hook for the prefixed version
    // followed by the unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // If a hook was provided get the computed value from there
    if ( hooks && "get" in hooks ) {
      val = hooks.get( elem, true, extra );
    }

    // Otherwise, if a way to get the computed value exists, use that
    if ( val === undefined ) {
      val = curCSS( elem, name, styles );
    }

    //convert "normal" to computed value
    if ( val === "normal" && name in cssNormalTransform ) {
      val = cssNormalTransform[ name ];
    }

    // Return, converting to number if forced or a qualifier was provided and val looks numeric
    if ( extra === "" || extra ) {
      num = parseFloat( val );
      return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
    }
    return val;
  },

  // A method for quickly swapping in/out CSS properties to get correct calculations
  swap: function( elem, options, callback, args ) {
    var ret, name,
      old = {};

    // Remember the old values, and insert the new ones
    for ( name in options ) {
      old[ name ] = elem.style[ name ];
      elem.style[ name ] = options[ name ];
    }

    ret = callback.apply( elem, args || [] );

    // Revert the old values
    for ( name in options ) {
      elem.style[ name ] = old[ name ];
    }

    return ret;
  }
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
  getStyles = function( elem ) {
    return window.getComputedStyle( elem, null );
  };

  curCSS = function( elem, name, _computed ) {
    var width, minWidth, maxWidth,
      computed = _computed || getStyles( elem ),

      // getPropertyValue is only needed for .css('filter') in IE9, see #12537
      ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
      style = elem.style;

    if ( computed ) {

      if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
        ret = jQuery.style( elem, name );
      }

      // A tribute to the "awesome hack by Dean Edwards"
      // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
      // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
      // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
      if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;

        // Put in the new values to get a computed value out
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;

        // Revert the changed values
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret;
  };
} else if ( document.documentElement.currentStyle ) {
  getStyles = function( elem ) {
    return elem.currentStyle;
  };

  curCSS = function( elem, name, _computed ) {
    var left, rs, rsLeft,
      computed = _computed || getStyles( elem ),
      ret = computed ? computed[ name ] : undefined,
      style = elem.style;

    // Avoid setting ret to empty string here
    // so we don't default to auto
    if ( ret == null && style && style[ name ] ) {
      ret = style[ name ];
    }

    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels
    // but not position css attributes, as those are proportional to the parent element instead
    // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
    if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

      // Remember the original values
      left = style.left;
      rs = elem.runtimeStyle;
      rsLeft = rs && rs.left;

      // Put in the new values to get a computed value out
      if ( rsLeft ) {
        rs.left = elem.currentStyle.left;
      }
      style.left = name === "fontSize" ? "1em" : ret;
      ret = style.pixelLeft + "px";

      // Revert the changed values
      style.left = left;
      if ( rsLeft ) {
        rs.left = rsLeft;
      }
    }

    return ret === "" ? "auto" : ret;
  };
}

function setPositiveNumber( elem, value, subtract ) {
  var matches = rnumsplit.exec( value );
  return matches ?
    // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
    value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
  var i = extra === ( isBorderBox ? "border" : "content" ) ?
    // If we already have the right measurement, avoid augmentation
    4 :
    // Otherwise initialize for horizontal or vertical properties
    name === "width" ? 1 : 0,

    val = 0;

  for ( ; i < 4; i += 2 ) {
    // both box models exclude margin, so add it if we want it
    if ( extra === "margin" ) {
      val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
    }

    if ( isBorderBox ) {
      // border-box includes padding, so remove it if we want content
      if ( extra === "content" ) {
        val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
      }

      // at this point, extra isn't border nor margin, so remove border
      if ( extra !== "margin" ) {
        val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    } else {
      // at this point, extra isn't content, so add padding
      val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

      // at this point, extra isn't content nor padding, so add border
      if ( extra !== "padding" ) {
        val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    }
  }

  return val;
}

function getWidthOrHeight( elem, name, extra ) {

  // Start with offset property, which is equivalent to the border-box value
  var valueIsBorderBox = true,
    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
    styles = getStyles( elem ),
    isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

  // some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
  if ( val <= 0 || val == null ) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS( elem, name, styles );
    if ( val < 0 || val == null ) {
      val = elem.style[ name ];
    }

    // Computed unit is not pixels. Stop here and return.
    if ( rnumnonpx.test(val) ) {
      return val;
    }

    // we need the check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

    // Normalize "", auto, and prepare for extra
    val = parseFloat( val ) || 0;
  }

  // use the active box-sizing model to add/subtract irrelevant styles
  return ( val +
    augmentWidthOrHeight(
      elem,
      name,
      extra || ( isBorderBox ? "border" : "content" ),
      valueIsBorderBox,
      styles
    )
  ) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
  var doc = document,
    display = elemdisplay[ nodeName ];

  if ( !display ) {
    display = actualDisplay( nodeName, doc );

    // If the simple way fails, read from inside an iframe
    if ( display === "none" || !display ) {
      // Use the already-created iframe if possible
      iframe = ( iframe ||
        jQuery("<iframe frameborder='0' width='0' height='0'/>")
        .css( "cssText", "display:block !important" )
      ).appendTo( doc.documentElement );

      // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
      doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
      doc.write("<!doctype html><html><body>");
      doc.close();

      display = actualDisplay( nodeName, doc );
      iframe.detach();
    }

    // Store the correct default display
    elemdisplay[ nodeName ] = display;
  }

  return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
  var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
    display = jQuery.css( elem[0], "display" );
  elem.remove();
  return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
  jQuery.cssHooks[ name ] = {
    get: function( elem, computed, extra ) {
      if ( computed ) {
        // certain elements can have dimension info if we invisibly show them
        // however, it must have a current display style that would benefit from this
        return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
          jQuery.swap( elem, cssShow, function() {
            return getWidthOrHeight( elem, name, extra );
          }) :
          getWidthOrHeight( elem, name, extra );
      }
    },

    set: function( elem, value, extra ) {
      var styles = extra && getStyles( elem );
      return setPositiveNumber( elem, value, extra ?
        augmentWidthOrHeight(
          elem,
          name,
          extra,
          jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
          styles
        ) : 0
      );
    }
  };
});

if ( !jQuery.support.opacity ) {
  jQuery.cssHooks.opacity = {
    get: function( elem, computed ) {
      // IE uses filters for opacity
      return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
        ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
        computed ? "1" : "";
    },

    set: function( elem, value ) {
      var style = elem.style,
        currentStyle = elem.currentStyle,
        opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
        filter = currentStyle && currentStyle.filter || style.filter || "";

      // IE has trouble with opacity if it does not have layout
      // Force it by setting the zoom level
      style.zoom = 1;

      // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
      // if value === "", then remove inline opacity #12685
      if ( ( value >= 1 || value === "" ) &&
          jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
          style.removeAttribute ) {

        // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
        // if "filter:" is present at all, clearType is disabled, we want to avoid this
        // style.removeAttribute is IE Only, but so apparently is this code path...
        style.removeAttribute( "filter" );

        // if there is no filter style applied in a css rule or unset inline opacity, we are done
        if ( value === "" || currentStyle && !currentStyle.filter ) {
          return;
        }
      }

      // otherwise, set new filter values
      style.filter = ralpha.test( filter ) ?
        filter.replace( ralpha, opacity ) :
        filter + " " + opacity;
    }
  };
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
  if ( !jQuery.support.reliableMarginRight ) {
    jQuery.cssHooks.marginRight = {
      get: function( elem, computed ) {
        if ( computed ) {
          // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
          // Work around by temporarily setting element display to inline-block
          return jQuery.swap( elem, { "display": "inline-block" },
            curCSS, [ elem, "marginRight" ] );
        }
      }
    };
  }

  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // getComputedStyle returns percent when specified for top/left/bottom/right
  // rather than make the css module depend on the offset module, we just check for it here
  if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
    jQuery.each( [ "top", "left" ], function( i, prop ) {
      jQuery.cssHooks[ prop ] = {
        get: function( elem, computed ) {
          if ( computed ) {
            computed = curCSS( elem, prop );
            // if curCSS returns percentage, fallback to offset
            return rnumnonpx.test( computed ) ?
              jQuery( elem ).position()[ prop ] + "px" :
              computed;
          }
        }
      };
    });
  }

});

if ( jQuery.expr && jQuery.expr.filters ) {
  jQuery.expr.filters.hidden = function( elem ) {
    // Support: Opera <= 12.12
    // Opera reports offsetWidths and offsetHeights less than zero on some elements
    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
      (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
  };

  jQuery.expr.filters.visible = function( elem ) {
    return !jQuery.expr.filters.hidden( elem );
  };
}

// These hooks are used by animate to expand properties
jQuery.each({
  margin: "",
  padding: "",
  border: "Width"
}, function( prefix, suffix ) {
  jQuery.cssHooks[ prefix + suffix ] = {
    expand: function( value ) {
      var i = 0,
        expanded = {},

        // assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [ value ];

      for ( ; i < 4; i++ ) {
        expanded[ prefix + cssExpand[ i ] + suffix ] =
          parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
      }

      return expanded;
    }
  };

  if ( !rmargin.test( prefix ) ) {
    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
  }
});
var r20 = /%20/g,
  rbracket = /\[\]$/,
  rCRLF = /\r?\n/g,
  rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
  rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
  serialize: function() {
    return jQuery.param( this.serializeArray() );
  },
  serializeArray: function() {
    return this.map(function(){
      // Can add propHook for "elements" to filter or add form elements
      var elements = jQuery.prop( this, "elements" );
      return elements ? jQuery.makeArray( elements ) : this;
    })
    .filter(function(){
      var type = this.type;
      // Use .is(":disabled") so that fieldset[disabled] works
      return this.name && !jQuery( this ).is( ":disabled" ) &&
        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
        ( this.checked || !manipulation_rcheckableType.test( type ) );
    })
    .map(function( i, elem ){
      var val = jQuery( this ).val();

      return val == null ?
        null :
        jQuery.isArray( val ) ?
          jQuery.map( val, function( val ){
            return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
          }) :
          { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    }).get();
  }
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
  var prefix,
    s = [],
    add = function( key, value ) {
      // If value is a function, invoke it and return its value
      value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
      s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
    };

  // Set traditional to true for jQuery <= 1.3.2 behavior.
  if ( traditional === undefined ) {
    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
  }

  // If an array was passed in, assume that it is an array of form elements.
  if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
    // Serialize the form elements
    jQuery.each( a, function() {
      add( this.name, this.value );
    });

  } else {
    // If traditional, encode the "old" way (the way 1.3.2 or older
    // did it), otherwise encode params recursively.
    for ( prefix in a ) {
      buildParams( prefix, a[ prefix ], traditional, add );
    }
  }

  // Return the resulting serialization
  return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
  var name;

  if ( jQuery.isArray( obj ) ) {
    // Serialize array item.
    jQuery.each( obj, function( i, v ) {
      if ( traditional || rbracket.test( prefix ) ) {
        // Treat each array item as a scalar.
        add( prefix, v );

      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
      }
    });

  } else if ( !traditional && jQuery.type( obj ) === "object" ) {
    // Serialize object item.
    for ( name in obj ) {
      buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
    }

  } else {
    // Serialize scalar item.
    add( prefix, obj );
  }
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
  "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
  "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

  // Handle event binding
  jQuery.fn[ name ] = function( data, fn ) {
    return arguments.length > 0 ?
      this.on( name, null, data, fn ) :
      this.trigger( name );
  };
});

jQuery.fn.hover = function( fnOver, fnOut ) {
  return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
};
var
  // Document location
  ajaxLocParts,
  ajaxLocation,
  ajax_nonce = jQuery.now(),

  ajax_rquery = /\?/,
  rhash = /#.*$/,
  rts = /([?&])_=[^&]*/,
  rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  rnoContent = /^(?:GET|HEAD)$/,
  rprotocol = /^\/\//,
  rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

  // Keep a copy of the old load method
  _load = jQuery.fn.load,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},

  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
  ajaxLocation = location.href;
} catch( e ) {
  // Use the href attribute of an A element
  // since IE will modify it given document.location
  ajaxLocation = document.createElement( "a" );
  ajaxLocation.href = "";
  ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

  // dataTypeExpression is optional and defaults to "*"
  return function( dataTypeExpression, func ) {

    if ( typeof dataTypeExpression !== "string" ) {
      func = dataTypeExpression;
      dataTypeExpression = "*";
    }

    var dataType,
      i = 0,
      dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

    if ( jQuery.isFunction( func ) ) {
      // For each dataType in the dataTypeExpression
      while ( (dataType = dataTypes[i++]) ) {
        // Prepend if requested
        if ( dataType[0] === "+" ) {
          dataType = dataType.slice( 1 ) || "*";
          (structure[ dataType ] = structure[ dataType ] || []).unshift( func );

        // Otherwise append
        } else {
          (structure[ dataType ] = structure[ dataType ] || []).push( func );
        }
      }
    }
  };
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

  var inspected = {},
    seekingTransport = ( structure === transports );

  function inspect( dataType ) {
    var selected;
    inspected[ dataType ] = true;
    jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
      var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
      if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
        options.dataTypes.unshift( dataTypeOrTransport );
        inspect( dataTypeOrTransport );
        return false;
      } else if ( seekingTransport ) {
        return !( selected = dataTypeOrTransport );
      }
    });
    return selected;
  }

  return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
  var deep, key,
    flatOptions = jQuery.ajaxSettings.flatOptions || {};

  for ( key in src ) {
    if ( src[ key ] !== undefined ) {
      ( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
    }
  }
  if ( deep ) {
    jQuery.extend( true, target, deep );
  }

  return target;
}

jQuery.fn.load = function( url, params, callback ) {
  if ( typeof url !== "string" && _load ) {
    return _load.apply( this, arguments );
  }

  var selector, response, type,
    self = this,
    off = url.indexOf(" ");

  if ( off >= 0 ) {
    selector = url.slice( off, url.length );
    url = url.slice( 0, off );
  }

  // If it's a function
  if ( jQuery.isFunction( params ) ) {

    // We assume that it's the callback
    callback = params;
    params = undefined;

  // Otherwise, build a param string
  } else if ( params && typeof params === "object" ) {
    type = "POST";
  }

  // If we have elements to modify, make the request
  if ( self.length > 0 ) {
    jQuery.ajax({
      url: url,

      // if "type" variable is undefined, then "GET" method will be used
      type: type,
      dataType: "html",
      data: params
    }).done(function( responseText ) {

      // Save response for use in complete callback
      response = arguments;

      self.html( selector ?

        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

        // Otherwise use the full result
        responseText );

    }).complete( callback && function( jqXHR, status ) {
      self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
    });
  }

  return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
  jQuery.fn[ type ] = function( fn ){
    return this.on( type, fn );
  };
});

jQuery.each( [ "get", "post" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {
    // shift arguments if data argument was omitted
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    return jQuery.ajax({
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    });
  };
});

jQuery.extend({

  // Counter for holding the number of active queries
  active: 0,

  // Last-Modified header cache for next request
  lastModified: {},
  etag: {},

  ajaxSettings: {
    url: ajaxLocation,
    type: "GET",
    isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
    global: true,
    processData: true,
    async: true,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    /*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */

    accepts: {
      "*": allTypes,
      text: "text/plain",
      html: "text/html",
      xml: "application/xml, text/xml",
      json: "application/json, text/javascript"
    },

    contents: {
      xml: /xml/,
      html: /html/,
      json: /json/
    },

    responseFields: {
      xml: "responseXML",
      text: "responseText"
    },

    // Data converters
    // Keys separate source (or catchall "*") and destination types with a single space
    converters: {

      // Convert anything to text
      "* text": window.String,

      // Text to html (true = no transformation)
      "text html": true,

      // Evaluate text as a json expression
      "text json": jQuery.parseJSON,

      // Parse text as xml
      "text xml": jQuery.parseXML
    },

    // For options that shouldn't be deep extended:
    // you can add your own custom options here if
    // and when you create one that shouldn't be
    // deep extended (see ajaxExtend)
    flatOptions: {
      url: true,
      context: true
    }
  },

  // Creates a full fledged settings object into target
  // with both ajaxSettings and settings fields.
  // If target is omitted, writes into ajaxSettings.
  ajaxSetup: function( target, settings ) {
    return settings ?

      // Building a settings object
      ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

      // Extending ajaxSettings
      ajaxExtend( jQuery.ajaxSettings, target );
  },

  ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
  ajaxTransport: addToPrefiltersOrTransports( transports ),

  // Main method
  ajax: function( url, options ) {

    // If url is an object, simulate pre-1.5 signature
    if ( typeof url === "object" ) {
      options = url;
      url = undefined;
    }

    // Force options to be an object
    options = options || {};

    var // Cross-domain detection vars
      parts,
      // Loop variable
      i,
      // URL without anti-cache param
      cacheURL,
      // Response headers as string
      responseHeadersString,
      // timeout handle
      timeoutTimer,

      // To know if global events are to be dispatched
      fireGlobals,

      transport,
      // Response headers
      responseHeaders,
      // Create the final options object
      s = jQuery.ajaxSetup( {}, options ),
      // Callbacks context
      callbackContext = s.context || s,
      // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
        jQuery( callbackContext ) :
        jQuery.event,
      // Deferreds
      deferred = jQuery.Deferred(),
      completeDeferred = jQuery.Callbacks("once memory"),
      // Status-dependent callbacks
      statusCode = s.statusCode || {},
      // Headers (they are sent all at once)
      requestHeaders = {},
      requestHeadersNames = {},
      // The jqXHR state
      state = 0,
      // Default abort message
      strAbort = "canceled",
      // Fake xhr
      jqXHR = {
        readyState: 0,

        // Builds headers hashtable if needed
        getResponseHeader: function( key ) {
          var match;
          if ( state === 2 ) {
            if ( !responseHeaders ) {
              responseHeaders = {};
              while ( (match = rheaders.exec( responseHeadersString )) ) {
                responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
              }
            }
            match = responseHeaders[ key.toLowerCase() ];
          }
          return match == null ? null : match;
        },

        // Raw string
        getAllResponseHeaders: function() {
          return state === 2 ? responseHeadersString : null;
        },

        // Caches the header
        setRequestHeader: function( name, value ) {
          var lname = name.toLowerCase();
          if ( !state ) {
            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
            requestHeaders[ name ] = value;
          }
          return this;
        },

        // Overrides response content-type header
        overrideMimeType: function( type ) {
          if ( !state ) {
            s.mimeType = type;
          }
          return this;
        },

        // Status-dependent callbacks
        statusCode: function( map ) {
          var code;
          if ( map ) {
            if ( state < 2 ) {
              for ( code in map ) {
                // Lazy-add the new callback in a way that preserves old ones
                statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
              }
            } else {
              // Execute the appropriate callbacks
              jqXHR.always( map[ jqXHR.status ] );
            }
          }
          return this;
        },

        // Cancel the request
        abort: function( statusText ) {
          var finalText = statusText || strAbort;
          if ( transport ) {
            transport.abort( finalText );
          }
          done( 0, finalText );
          return this;
        }
      };

    // Attach deferreds
    deferred.promise( jqXHR ).complete = completeDeferred.add;
    jqXHR.success = jqXHR.done;
    jqXHR.error = jqXHR.fail;

    // Remove hash character (#7531: and string promotion)
    // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
    // Handle falsy url in the settings object (#10093: consistency with old signature)
    // We also use the url parameter if available
    s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

    // Alias method option to type as per ticket #12004
    s.type = options.method || options.type || s.method || s.type;

    // Extract dataTypes list
    s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

    // A cross-domain request is in order when we have a protocol:host:port mismatch
    if ( s.crossDomain == null ) {
      parts = rurl.exec( s.url.toLowerCase() );
      s.crossDomain = !!( parts &&
        ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
          ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
            ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
      );
    }

    // Convert data if not already a string
    if ( s.data && s.processData && typeof s.data !== "string" ) {
      s.data = jQuery.param( s.data, s.traditional );
    }

    // Apply prefilters
    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

    // If request was aborted inside a prefilter, stop there
    if ( state === 2 ) {
      return jqXHR;
    }

    // We can fire global events as of now if asked to
    fireGlobals = s.global;

    // Watch for a new set of requests
    if ( fireGlobals && jQuery.active++ === 0 ) {
      jQuery.event.trigger("ajaxStart");
    }

    // Uppercase the type
    s.type = s.type.toUpperCase();

    // Determine if request has content
    s.hasContent = !rnoContent.test( s.type );

    // Save the URL in case we're toying with the If-Modified-Since
    // and/or If-None-Match header later on
    cacheURL = s.url;

    // More options handling for requests with no content
    if ( !s.hasContent ) {

      // If data is available, append data to url
      if ( s.data ) {
        cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
        // #9682: remove data so that it's not used in an eventual retry
        delete s.data;
      }

      // Add anti-cache in url if needed
      if ( s.cache === false ) {
        s.url = rts.test( cacheURL ) ?

          // If there is already a '_' parameter, set its value
          cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

          // Otherwise add one to the end
          cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
      }
    }

    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    if ( s.ifModified ) {
      if ( jQuery.lastModified[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
      }
      if ( jQuery.etag[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
      }
    }

    // Set the correct header, if data is being sent
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
      jqXHR.setRequestHeader( "Content-Type", s.contentType );
    }

    // Set the Accepts header for the server, depending on the dataType
    jqXHR.setRequestHeader(
      "Accept",
      s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
        s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
        s.accepts[ "*" ]
    );

    // Check for headers option
    for ( i in s.headers ) {
      jqXHR.setRequestHeader( i, s.headers[ i ] );
    }

    // Allow custom headers/mimetypes and early abort
    if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
      // Abort if not done already and return
      return jqXHR.abort();
    }

    // aborting is no longer a cancellation
    strAbort = "abort";

    // Install callbacks on deferreds
    for ( i in { success: 1, error: 1, complete: 1 } ) {
      jqXHR[ i ]( s[ i ] );
    }

    // Get transport
    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

    // If no transport, we auto-abort
    if ( !transport ) {
      done( -1, "No Transport" );
    } else {
      jqXHR.readyState = 1;

      // Send global event
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
      }
      // Timeout
      if ( s.async && s.timeout > 0 ) {
        timeoutTimer = setTimeout(function() {
          jqXHR.abort("timeout");
        }, s.timeout );
      }

      try {
        state = 1;
        transport.send( requestHeaders, done );
      } catch ( e ) {
        // Propagate exception as error if not done
        if ( state < 2 ) {
          done( -1, e );
        // Simply rethrow otherwise
        } else {
          throw e;
        }
      }
    }

    // Callback for when everything is done
    function done( status, nativeStatusText, responses, headers ) {
      var isSuccess, success, error, response, modified,
        statusText = nativeStatusText;

      // Called once
      if ( state === 2 ) {
        return;
      }

      // State is "done" now
      state = 2;

      // Clear timeout if it exists
      if ( timeoutTimer ) {
        clearTimeout( timeoutTimer );
      }

      // Dereference transport for early garbage collection
      // (no matter how long the jqXHR object will be used)
      transport = undefined;

      // Cache response headers
      responseHeadersString = headers || "";

      // Set readyState
      jqXHR.readyState = status > 0 ? 4 : 0;

      // Get response data
      if ( responses ) {
        response = ajaxHandleResponses( s, jqXHR, responses );
      }

      // If successful, handle type chaining
      if ( status >= 200 && status < 300 || status === 304 ) {

        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if ( s.ifModified ) {
          modified = jqXHR.getResponseHeader("Last-Modified");
          if ( modified ) {
            jQuery.lastModified[ cacheURL ] = modified;
          }
          modified = jqXHR.getResponseHeader("etag");
          if ( modified ) {
            jQuery.etag[ cacheURL ] = modified;
          }
        }

        // if no content
        if ( status === 204 ) {
          isSuccess = true;
          statusText = "nocontent";

        // if not modified
        } else if ( status === 304 ) {
          isSuccess = true;
          statusText = "notmodified";

        // If we have data, let's convert it
        } else {
          isSuccess = ajaxConvert( s, response );
          statusText = isSuccess.state;
          success = isSuccess.data;
          error = isSuccess.error;
          isSuccess = !error;
        }
      } else {
        // We extract error from statusText
        // then normalize statusText and status for non-aborts
        error = statusText;
        if ( status || !statusText ) {
          statusText = "error";
          if ( status < 0 ) {
            status = 0;
          }
        }
      }

      // Set data for the fake xhr object
      jqXHR.status = status;
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";

      // Success/Error
      if ( isSuccess ) {
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
      } else {
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
      }

      // Status-dependent callbacks
      jqXHR.statusCode( statusCode );
      statusCode = undefined;

      if ( fireGlobals ) {
        globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
          [ jqXHR, s, isSuccess ? success : error ] );
      }

      // Complete
      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
        // Handle the global AJAX counter
        if ( !( --jQuery.active ) ) {
          jQuery.event.trigger("ajaxStop");
        }
      }
    }

    return jqXHR;
  },

  getScript: function( url, callback ) {
    return jQuery.get( url, undefined, callback, "script" );
  },

  getJSON: function( url, data, callback ) {
    return jQuery.get( url, data, callback, "json" );
  }
});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
  var firstDataType, ct, finalDataType, type,
    contents = s.contents,
    dataTypes = s.dataTypes,
    responseFields = s.responseFields;

  // Fill responseXXX fields
  for ( type in responseFields ) {
    if ( type in responses ) {
      jqXHR[ responseFields[type] ] = responses[ type ];
    }
  }

  // Remove auto dataType and get content-type in the process
  while( dataTypes[ 0 ] === "*" ) {
    dataTypes.shift();
    if ( ct === undefined ) {
      ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
    }
  }

  // Check if we're dealing with a known content-type
  if ( ct ) {
    for ( type in contents ) {
      if ( contents[ type ] && contents[ type ].test( ct ) ) {
        dataTypes.unshift( type );
        break;
      }
    }
  }

  // Check to see if we have a response for the expected dataType
  if ( dataTypes[ 0 ] in responses ) {
    finalDataType = dataTypes[ 0 ];
  } else {
    // Try convertible dataTypes
    for ( type in responses ) {
      if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
        finalDataType = type;
        break;
      }
      if ( !firstDataType ) {
        firstDataType = type;
      }
    }
    // Or just use first one
    finalDataType = finalDataType || firstDataType;
  }

  // If we found a dataType
  // We add the dataType to the list if needed
  // and return the corresponding response
  if ( finalDataType ) {
    if ( finalDataType !== dataTypes[ 0 ] ) {
      dataTypes.unshift( finalDataType );
    }
    return responses[ finalDataType ];
  }
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {
  var conv2, current, conv, tmp,
    converters = {},
    i = 0,
    // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(),
    prev = dataTypes[ 0 ];

  // Apply the dataFilter if provided
  if ( s.dataFilter ) {
    response = s.dataFilter( response, s.dataType );
  }

  // Create converters map with lowercased keys
  if ( dataTypes[ 1 ] ) {
    for ( conv in s.converters ) {
      converters[ conv.toLowerCase() ] = s.converters[ conv ];
    }
  }

  // Convert to each sequential dataType, tolerating list modification
  for ( ; (current = dataTypes[++i]); ) {

    // There's only work to do if current dataType is non-auto
    if ( current !== "*" ) {

      // Convert response if prev dataType is non-auto and differs from current
      if ( prev !== "*" && prev !== current ) {

        // Seek a direct converter
        conv = converters[ prev + " " + current ] || converters[ "* " + current ];

        // If none found, seek a pair
        if ( !conv ) {
          for ( conv2 in converters ) {

            // If conv2 outputs current
            tmp = conv2.split(" ");
            if ( tmp[ 1 ] === current ) {

              // If prev can be converted to accepted input
              conv = converters[ prev + " " + tmp[ 0 ] ] ||
                converters[ "* " + tmp[ 0 ] ];
              if ( conv ) {
                // Condense equivalence converters
                if ( conv === true ) {
                  conv = converters[ conv2 ];

                // Otherwise, insert the intermediate dataType
                } else if ( converters[ conv2 ] !== true ) {
                  current = tmp[ 0 ];
                  dataTypes.splice( i--, 0, current );
                }

                break;
              }
            }
          }
        }

        // Apply converter (if not an equivalence)
        if ( conv !== true ) {

          // Unless errors are allowed to bubble, catch and return them
          if ( conv && s["throws"] ) {
            response = conv( response );
          } else {
            try {
              response = conv( response );
            } catch ( e ) {
              return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
            }
          }
        }
      }

      // Update prev for next iteration
      prev = current;
    }
  }

  return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
  accepts: {
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
    script: /(?:java|ecma)script/
  },
  converters: {
    "text script": function( text ) {
      jQuery.globalEval( text );
      return text;
    }
  }
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
  if ( s.cache === undefined ) {
    s.cache = false;
  }
  if ( s.crossDomain ) {
    s.type = "GET";
    s.global = false;
  }
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

  // This transport only deals with cross domain requests
  if ( s.crossDomain ) {

    var script,
      head = document.head || jQuery("head")[0] || document.documentElement;

    return {

      send: function( _, callback ) {

        script = document.createElement("script");

        script.async = true;

        if ( s.scriptCharset ) {
          script.charset = s.scriptCharset;
        }

        script.src = s.url;

        // Attach handlers for all browsers
        script.onload = script.onreadystatechange = function( _, isAbort ) {

          if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;

            // Remove the script
            if ( script.parentNode ) {
              script.parentNode.removeChild( script );
            }

            // Dereference the script
            script = null;

            // Callback if not abort
            if ( !isAbort ) {
              callback( 200, "success" );
            }
          }
        };

        // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
        // Use native DOM manipulation to avoid our domManip AJAX trickery
        head.insertBefore( script, head.firstChild );
      },

      abort: function() {
        if ( script ) {
          script.onload( undefined, true );
        }
      }
    };
  }
});
var oldCallbacks = [],
  rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
    this[ callback ] = true;
    return callback;
  }
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

  var callbackName, overwritten, responseContainer,
    jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
      "url" :
      typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
    );

  // Handle iff the expected data type is "jsonp" or we have a parameter to set
  if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

    // Get callback name, remembering preexisting value associated with it
    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
      s.jsonpCallback() :
      s.jsonpCallback;

    // Insert callback into url or form data
    if ( jsonProp ) {
      s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
    } else if ( s.jsonp !== false ) {
      s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
    }

    // Use data converter to retrieve json after script execution
    s.converters["script json"] = function() {
      if ( !responseContainer ) {
        jQuery.error( callbackName + " was not called" );
      }
      return responseContainer[ 0 ];
    };

    // force json dataType
    s.dataTypes[ 0 ] = "json";

    // Install callback
    overwritten = window[ callbackName ];
    window[ callbackName ] = function() {
      responseContainer = arguments;
    };

    // Clean-up function (fires after converters)
    jqXHR.always(function() {
      // Restore preexisting value
      window[ callbackName ] = overwritten;

      // Save back as free
      if ( s[ callbackName ] ) {
        // make sure that re-using the options doesn't screw things around
        s.jsonpCallback = originalSettings.jsonpCallback;

        // save the callback name for future use
        oldCallbacks.push( callbackName );
      }

      // Call if it was a function and we have a response
      if ( responseContainer && jQuery.isFunction( overwritten ) ) {
        overwritten( responseContainer[ 0 ] );
      }

      responseContainer = overwritten = undefined;
    });

    // Delegate to script
    return "script";
  }
});
var xhrCallbacks, xhrSupported,
  xhrId = 0,
  // #5280: Internet Explorer will keep connections alive if we don't abort on unload
  xhrOnUnloadAbort = window.ActiveXObject && function() {
    // Abort all pending requests
    var key;
    for ( key in xhrCallbacks ) {
      xhrCallbacks[ key ]( undefined, true );
    }
  };

// Functions to create xhrs
function createStandardXHR() {
  try {
    return new window.XMLHttpRequest();
  } catch( e ) {}
}

function createActiveXHR() {
  try {
    return new window.ActiveXObject("Microsoft.XMLHTTP");
  } catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
  /* Microsoft failed to properly
   * implement the XMLHttpRequest in IE7 (can't request local files),
   * so we use the ActiveXObject when it is available
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
   * we need a fallback.
   */
  function() {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } :
  // For all other browsers, use the standard XMLHttpRequest object
  createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

  jQuery.ajaxTransport(function( s ) {
    // Cross domain only allowed if supported through XMLHttpRequest
    if ( !s.crossDomain || jQuery.support.cors ) {

      var callback;

      return {
        send: function( headers, complete ) {

          // Get a new xhr
          var handle, i,
            xhr = s.xhr();

          // Open the socket
          // Passing null username, generates a login popup on Opera (#2865)
          if ( s.username ) {
            xhr.open( s.type, s.url, s.async, s.username, s.password );
          } else {
            xhr.open( s.type, s.url, s.async );
          }

          // Apply custom fields if provided
          if ( s.xhrFields ) {
            for ( i in s.xhrFields ) {
              xhr[ i ] = s.xhrFields[ i ];
            }
          }

          // Override mime type if needed
          if ( s.mimeType && xhr.overrideMimeType ) {
            xhr.overrideMimeType( s.mimeType );
          }

          // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.
          if ( !s.crossDomain && !headers["X-Requested-With"] ) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }

          // Need an extra try/catch for cross domain requests in Firefox 3
          try {
            for ( i in headers ) {
              xhr.setRequestHeader( i, headers[ i ] );
            }
          } catch( err ) {}

          // Do send the request
          // This may raise an exception which is actually
          // handled in jQuery.ajax (so no try/catch here)
          xhr.send( ( s.hasContent && s.data ) || null );

          // Listener
          callback = function( _, isAbort ) {
            var status, responseHeaders, statusText, responses;

            // Firefox throws exceptions when accessing properties
            // of an xhr when a network error occurred
            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
            try {

              // Was never called and is aborted or complete
              if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

                // Only called once
                callback = undefined;

                // Do not keep as active anymore
                if ( handle ) {
                  xhr.onreadystatechange = jQuery.noop;
                  if ( xhrOnUnloadAbort ) {
                    delete xhrCallbacks[ handle ];
                  }
                }

                // If it's an abort
                if ( isAbort ) {
                  // Abort it manually if needed
                  if ( xhr.readyState !== 4 ) {
                    xhr.abort();
                  }
                } else {
                  responses = {};
                  status = xhr.status;
                  responseHeaders = xhr.getAllResponseHeaders();

                  // When requesting binary data, IE6-9 will throw an exception
                  // on any attempt to access responseText (#11426)
                  if ( typeof xhr.responseText === "string" ) {
                    responses.text = xhr.responseText;
                  }

                  // Firefox throws an exception when accessing
                  // statusText for faulty cross-domain requests
                  try {
                    statusText = xhr.statusText;
                  } catch( e ) {
                    // We normalize with Webkit giving an empty statusText
                    statusText = "";
                  }

                  // Filter status for non standard behaviors

                  // If the request is local and we have data: assume a success
                  // (success with no data won't get notified, that's the best we
                  // can do given current implementations)
                  if ( !status && s.isLocal && !s.crossDomain ) {
                    status = responses.text ? 200 : 404;
                  // IE - #1450: sometimes returns 1223 when it should be 204
                  } else if ( status === 1223 ) {
                    status = 204;
                  }
                }
              }
            } catch( firefoxAccessException ) {
              if ( !isAbort ) {
                complete( -1, firefoxAccessException );
              }
            }

            // Call complete if needed
            if ( responses ) {
              complete( status, statusText, responses, responseHeaders );
            }
          };

          if ( !s.async ) {
            // if we're in sync mode we fire the callback
            callback();
          } else if ( xhr.readyState === 4 ) {
            // (IE6 & IE7) if it's in cache and has been
            // retrieved directly we need to fire the callback
            setTimeout( callback );
          } else {
            handle = ++xhrId;
            if ( xhrOnUnloadAbort ) {
              // Create the active xhrs callbacks list if needed
              // and attach the unload handler
              if ( !xhrCallbacks ) {
                xhrCallbacks = {};
                jQuery( window ).unload( xhrOnUnloadAbort );
              }
              // Add to list of active xhrs callbacks
              xhrCallbacks[ handle ] = callback;
            }
            xhr.onreadystatechange = callback;
          }
        },

        abort: function() {
          if ( callback ) {
            callback( undefined, true );
          }
        }
      };
    }
  });
}
var fxNow, timerId,
  rfxtypes = /^(?:toggle|show|hide)$/,
  rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
  rrun = /queueHooks$/,
  animationPrefilters = [ defaultPrefilter ],
  tweeners = {
    "*": [function( prop, value ) {
      var end, unit,
        tween = this.createTween( prop, value ),
        parts = rfxnum.exec( value ),
        target = tween.cur(),
        start = +target || 0,
        scale = 1,
        maxIterations = 20;

      if ( parts ) {
        end = +parts[2];
        unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

        // We need to compute starting value
        if ( unit !== "px" && start ) {
          // Iteratively approximate from a nonzero starting point
          // Prefer the current property, because this process will be trivial if it uses the same units
          // Fallback to end or a simple constant
          start = jQuery.css( tween.elem, prop, true ) || end || 1;

          do {
            // If previous iteration zeroed out, double until we get *something*
            // Use a string for doubling factor so we don't accidentally see scale as unchanged below
            scale = scale || ".5";

            // Adjust and apply
            start = start / scale;
            jQuery.style( tween.elem, prop, start + unit );

          // Update scale, tolerating zero or NaN from tween.cur()
          // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
          } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
        }

        tween.unit = unit;
        tween.start = start;
        // If a +=/-= token was provided, we're doing a relative animation
        tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
      }
      return tween;
    }]
  };

// Animations created synchronously will run synchronously
function createFxNow() {
  setTimeout(function() {
    fxNow = undefined;
  });
  return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
  jQuery.each( props, function( prop, value ) {
    var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
      index = 0,
      length = collection.length;
    for ( ; index < length; index++ ) {
      if ( collection[ index ].call( animation, prop, value ) ) {

        // we're done with this property
        return;
      }
    }
  });
}

function Animation( elem, properties, options ) {
  var result,
    stopped,
    index = 0,
    length = animationPrefilters.length,
    deferred = jQuery.Deferred().always( function() {
      // don't match elem in the :animated selector
      delete tick.elem;
    }),
    tick = function() {
      if ( stopped ) {
        return false;
      }
      var currentTime = fxNow || createFxNow(),
        remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
        // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
        temp = remaining / animation.duration || 0,
        percent = 1 - temp,
        index = 0,
        length = animation.tweens.length;

      for ( ; index < length ; index++ ) {
        animation.tweens[ index ].run( percent );
      }

      deferred.notifyWith( elem, [ animation, percent, remaining ]);

      if ( percent < 1 && length ) {
        return remaining;
      } else {
        deferred.resolveWith( elem, [ animation ] );
        return false;
      }
    },
    animation = deferred.promise({
      elem: elem,
      props: jQuery.extend( {}, properties ),
      opts: jQuery.extend( true, { specialEasing: {} }, options ),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function( prop, end ) {
        var tween = jQuery.Tween( elem, animation.opts, prop, end,
            animation.opts.specialEasing[ prop ] || animation.opts.easing );
        animation.tweens.push( tween );
        return tween;
      },
      stop: function( gotoEnd ) {
        var index = 0,
          // if we are going to the end, we want to run all the tweens
          // otherwise we skip this part
          length = gotoEnd ? animation.tweens.length : 0;
        if ( stopped ) {
          return this;
        }
        stopped = true;
        for ( ; index < length ; index++ ) {
          animation.tweens[ index ].run( 1 );
        }

        // resolve when we played the last frame
        // otherwise, reject
        if ( gotoEnd ) {
          deferred.resolveWith( elem, [ animation, gotoEnd ] );
        } else {
          deferred.rejectWith( elem, [ animation, gotoEnd ] );
        }
        return this;
      }
    }),
    props = animation.props;

  propFilter( props, animation.opts.specialEasing );

  for ( ; index < length ; index++ ) {
    result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
    if ( result ) {
      return result;
    }
  }

  createTweens( animation, props );

  if ( jQuery.isFunction( animation.opts.start ) ) {
    animation.opts.start.call( elem, animation );
  }

  jQuery.fx.timer(
    jQuery.extend( tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    })
  );

  // attach callbacks from options
  return animation.progress( animation.opts.progress )
    .done( animation.opts.done, animation.opts.complete )
    .fail( animation.opts.fail )
    .always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
  var value, name, index, easing, hooks;

  // camelCase, specialEasing and expand cssHook pass
  for ( index in props ) {
    name = jQuery.camelCase( index );
    easing = specialEasing[ name ];
    value = props[ index ];
    if ( jQuery.isArray( value ) ) {
      easing = value[ 1 ];
      value = props[ index ] = value[ 0 ];
    }

    if ( index !== name ) {
      props[ name ] = value;
      delete props[ index ];
    }

    hooks = jQuery.cssHooks[ name ];
    if ( hooks && "expand" in hooks ) {
      value = hooks.expand( value );
      delete props[ name ];

      // not quite $.extend, this wont overwrite keys already present.
      // also - reusing 'index' from above because we have the correct "name"
      for ( index in value ) {
        if ( !( index in props ) ) {
          props[ index ] = value[ index ];
          specialEasing[ index ] = easing;
        }
      }
    } else {
      specialEasing[ name ] = easing;
    }
  }
}

jQuery.Animation = jQuery.extend( Animation, {

  tweener: function( props, callback ) {
    if ( jQuery.isFunction( props ) ) {
      callback = props;
      props = [ "*" ];
    } else {
      props = props.split(" ");
    }

    var prop,
      index = 0,
      length = props.length;

    for ( ; index < length ; index++ ) {
      prop = props[ index ];
      tweeners[ prop ] = tweeners[ prop ] || [];
      tweeners[ prop ].unshift( callback );
    }
  },

  prefilter: function( callback, prepend ) {
    if ( prepend ) {
      animationPrefilters.unshift( callback );
    } else {
      animationPrefilters.push( callback );
    }
  }
});

function defaultPrefilter( elem, props, opts ) {
  /*jshint validthis:true */
  var prop, index, length,
    value, dataShow, toggle,
    tween, hooks, oldfire,
    anim = this,
    style = elem.style,
    orig = {},
    handled = [],
    hidden = elem.nodeType && isHidden( elem );

  // handle queue: false promises
  if ( !opts.queue ) {
    hooks = jQuery._queueHooks( elem, "fx" );
    if ( hooks.unqueued == null ) {
      hooks.unqueued = 0;
      oldfire = hooks.empty.fire;
      hooks.empty.fire = function() {
        if ( !hooks.unqueued ) {
          oldfire();
        }
      };
    }
    hooks.unqueued++;

    anim.always(function() {
      // doing this makes sure that the complete handler will be called
      // before this completes
      anim.always(function() {
        hooks.unqueued--;
        if ( !jQuery.queue( elem, "fx" ).length ) {
          hooks.empty.fire();
        }
      });
    });
  }

  // height/width overflow pass
  if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
    // Make sure that nothing sneaks out
    // Record all 3 overflow attributes because IE does not
    // change the overflow attribute when overflowX and
    // overflowY are set to the same value
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

    // Set display property to inline-block for height/width
    // animations on inline elements that are having width/height animated
    if ( jQuery.css( elem, "display" ) === "inline" &&
        jQuery.css( elem, "float" ) === "none" ) {

      // inline-level elements accept inline-block;
      // block-level elements need to be inline with layout
      if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
        style.display = "inline-block";

      } else {
        style.zoom = 1;
      }
    }
  }

  if ( opts.overflow ) {
    style.overflow = "hidden";
    if ( !jQuery.support.shrinkWrapBlocks ) {
      anim.always(function() {
        style.overflow = opts.overflow[ 0 ];
        style.overflowX = opts.overflow[ 1 ];
        style.overflowY = opts.overflow[ 2 ];
      });
    }
  }


  // show/hide pass
  for ( index in props ) {
    value = props[ index ];
    if ( rfxtypes.exec( value ) ) {
      delete props[ index ];
      toggle = toggle || value === "toggle";
      if ( value === ( hidden ? "hide" : "show" ) ) {
        continue;
      }
      handled.push( index );
    }
  }

  length = handled.length;
  if ( length ) {
    dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
    if ( "hidden" in dataShow ) {
      hidden = dataShow.hidden;
    }

    // store state if its toggle - enables .stop().toggle() to "reverse"
    if ( toggle ) {
      dataShow.hidden = !hidden;
    }
    if ( hidden ) {
      jQuery( elem ).show();
    } else {
      anim.done(function() {
        jQuery( elem ).hide();
      });
    }
    anim.done(function() {
      var prop;
      jQuery._removeData( elem, "fxshow" );
      for ( prop in orig ) {
        jQuery.style( elem, prop, orig[ prop ] );
      }
    });
    for ( index = 0 ; index < length ; index++ ) {
      prop = handled[ index ];
      tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
      orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

      if ( !( prop in dataShow ) ) {
        dataShow[ prop ] = tween.start;
        if ( hidden ) {
          tween.end = tween.start;
          tween.start = prop === "width" || prop === "height" ? 1 : 0;
        }
      }
    }
  }
}

function Tween( elem, options, prop, end, easing ) {
  return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
  constructor: Tween,
  init: function( elem, options, prop, end, easing, unit ) {
    this.elem = elem;
    this.prop = prop;
    this.easing = easing || "swing";
    this.options = options;
    this.start = this.now = this.cur();
    this.end = end;
    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
  },
  cur: function() {
    var hooks = Tween.propHooks[ this.prop ];

    return hooks && hooks.get ?
      hooks.get( this ) :
      Tween.propHooks._default.get( this );
  },
  run: function( percent ) {
    var eased,
      hooks = Tween.propHooks[ this.prop ];

    if ( this.options.duration ) {
      this.pos = eased = jQuery.easing[ this.easing ](
        percent, this.options.duration * percent, 0, 1, this.options.duration
      );
    } else {
      this.pos = eased = percent;
    }
    this.now = ( this.end - this.start ) * eased + this.start;

    if ( this.options.step ) {
      this.options.step.call( this.elem, this.now, this );
    }

    if ( hooks && hooks.set ) {
      hooks.set( this );
    } else {
      Tween.propHooks._default.set( this );
    }
    return this;
  }
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
  _default: {
    get: function( tween ) {
      var result;

      if ( tween.elem[ tween.prop ] != null &&
        (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
        return tween.elem[ tween.prop ];
      }

      // passing an empty string as a 3rd parameter to .css will automatically
      // attempt a parseFloat and fallback to a string if the parse fails
      // so, simple values such as "10px" are parsed to Float.
      // complex values such as "rotate(1rad)" are returned as is.
      result = jQuery.css( tween.elem, tween.prop, "" );
      // Empty strings, null, undefined and "auto" are converted to 0.
      return !result || result === "auto" ? 0 : result;
    },
    set: function( tween ) {
      // use step hook for back compat - use cssHook if its there - use .style if its
      // available and use plain properties where available
      if ( jQuery.fx.step[ tween.prop ] ) {
        jQuery.fx.step[ tween.prop ]( tween );
      } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
      } else {
        tween.elem[ tween.prop ] = tween.now;
      }
    }
  }
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
  set: function( tween ) {
    if ( tween.elem.nodeType && tween.elem.parentNode ) {
      tween.elem[ tween.prop ] = tween.now;
    }
  }
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
  var cssFn = jQuery.fn[ name ];
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return speed == null || typeof speed === "boolean" ?
      cssFn.apply( this, arguments ) :
      this.animate( genFx( name, true ), speed, easing, callback );
  };
});

jQuery.fn.extend({
  fadeTo: function( speed, to, easing, callback ) {

    // show any hidden elements after setting opacity to 0
    return this.filter( isHidden ).css( "opacity", 0 ).show()

      // animate to the value specified
      .end().animate({ opacity: to }, speed, easing, callback );
  },
  animate: function( prop, speed, easing, callback ) {
    var empty = jQuery.isEmptyObject( prop ),
      optall = jQuery.speed( speed, easing, callback ),
      doAnimation = function() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );
        doAnimation.finish = function() {
          anim.stop( true );
        };
        // Empty animations, or finishing resolves immediately
        if ( empty || jQuery._data( this, "finish" ) ) {
          anim.stop( true );
        }
      };
      doAnimation.finish = doAnimation;

    return empty || optall.queue === false ?
      this.each( doAnimation ) :
      this.queue( optall.queue, doAnimation );
  },
  stop: function( type, clearQueue, gotoEnd ) {
    var stopQueue = function( hooks ) {
      var stop = hooks.stop;
      delete hooks.stop;
      stop( gotoEnd );
    };

    if ( typeof type !== "string" ) {
      gotoEnd = clearQueue;
      clearQueue = type;
      type = undefined;
    }
    if ( clearQueue && type !== false ) {
      this.queue( type || "fx", [] );
    }

    return this.each(function() {
      var dequeue = true,
        index = type != null && type + "queueHooks",
        timers = jQuery.timers,
        data = jQuery._data( this );

      if ( index ) {
        if ( data[ index ] && data[ index ].stop ) {
          stopQueue( data[ index ] );
        }
      } else {
        for ( index in data ) {
          if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
            stopQueue( data[ index ] );
          }
        }
      }

      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
          timers[ index ].anim.stop( gotoEnd );
          dequeue = false;
          timers.splice( index, 1 );
        }
      }

      // start the next in the queue if the last step wasn't forced
      // timers currently will call their complete callbacks, which will dequeue
      // but only if they were gotoEnd
      if ( dequeue || !gotoEnd ) {
        jQuery.dequeue( this, type );
      }
    });
  },
  finish: function( type ) {
    if ( type !== false ) {
      type = type || "fx";
    }
    return this.each(function() {
      var index,
        data = jQuery._data( this ),
        queue = data[ type + "queue" ],
        hooks = data[ type + "queueHooks" ],
        timers = jQuery.timers,
        length = queue ? queue.length : 0;

      // enable finishing flag on private data
      data.finish = true;

      // empty the queue first
      jQuery.queue( this, type, [] );

      if ( hooks && hooks.cur && hooks.cur.finish ) {
        hooks.cur.finish.call( this );
      }

      // look for any active animations, and finish them
      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
          timers[ index ].anim.stop( true );
          timers.splice( index, 1 );
        }
      }

      // look for any animations in the old queue and finish them
      for ( index = 0; index < length; index++ ) {
        if ( queue[ index ] && queue[ index ].finish ) {
          queue[ index ].finish.call( this );
        }
      }

      // turn off finishing flag
      delete data.finish;
    });
  }
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
  var which,
    attrs = { height: type },
    i = 0;

  // if we include width, step value is 1 to do all cssExpand values,
  // if we don't include width, step value is 2 to skip over Left and Right
  includeWidth = includeWidth? 1 : 0;
  for( ; i < 4 ; i += 2 - includeWidth ) {
    which = cssExpand[ i ];
    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
  }

  if ( includeWidth ) {
    attrs.opacity = attrs.width = type;
  }

  return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
  slideDown: genFx("show"),
  slideUp: genFx("hide"),
  slideToggle: genFx("toggle"),
  fadeIn: { opacity: "show" },
  fadeOut: { opacity: "hide" },
  fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return this.animate( props, speed, easing, callback );
  };
});

jQuery.speed = function( speed, easing, fn ) {
  var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    complete: fn || !fn && easing ||
      jQuery.isFunction( speed ) && speed,
    duration: speed,
    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
  };

  opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
    opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

  // normalize opt.queue - true/undefined/null -> "fx"
  if ( opt.queue == null || opt.queue === true ) {
    opt.queue = "fx";
  }

  // Queueing
  opt.old = opt.complete;

  opt.complete = function() {
    if ( jQuery.isFunction( opt.old ) ) {
      opt.old.call( this );
    }

    if ( opt.queue ) {
      jQuery.dequeue( this, opt.queue );
    }
  };

  return opt;
};

jQuery.easing = {
  linear: function( p ) {
    return p;
  },
  swing: function( p ) {
    return 0.5 - Math.cos( p*Math.PI ) / 2;
  }
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
  var timer,
    timers = jQuery.timers,
    i = 0;

  fxNow = jQuery.now();

  for ( ; i < timers.length; i++ ) {
    timer = timers[ i ];
    // Checks the timer has not already been removed
    if ( !timer() && timers[ i ] === timer ) {
      timers.splice( i--, 1 );
    }
  }

  if ( !timers.length ) {
    jQuery.fx.stop();
  }
  fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
  if ( timer() && jQuery.timers.push( timer ) ) {
    jQuery.fx.start();
  }
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
  if ( !timerId ) {
    timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
  }
};

jQuery.fx.stop = function() {
  clearInterval( timerId );
  timerId = null;
};

jQuery.fx.speeds = {
  slow: 600,
  fast: 200,
  // Default speed
  _default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
  jQuery.expr.filters.animated = function( elem ) {
    return jQuery.grep(jQuery.timers, function( fn ) {
      return elem === fn.elem;
    }).length;
  };
}
jQuery.fn.offset = function( options ) {
  if ( arguments.length ) {
    return options === undefined ?
      this :
      this.each(function( i ) {
        jQuery.offset.setOffset( this, options, i );
      });
  }

  var docElem, win,
    box = { top: 0, left: 0 },
    elem = this[ 0 ],
    doc = elem && elem.ownerDocument;

  if ( !doc ) {
    return;
  }

  docElem = doc.documentElement;

  // Make sure it's not a disconnected DOM node
  if ( !jQuery.contains( docElem, elem ) ) {
    return box;
  }

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
    box = elem.getBoundingClientRect();
  }
  win = getWindow( doc );
  return {
    top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
    left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
  };
};

jQuery.offset = {

  setOffset: function( elem, options, i ) {
    var position = jQuery.css( elem, "position" );

    // set position first, in-case top/left are set even on static elem
    if ( position === "static" ) {
      elem.style.position = "relative";
    }

    var curElem = jQuery( elem ),
      curOffset = curElem.offset(),
      curCSSTop = jQuery.css( elem, "top" ),
      curCSSLeft = jQuery.css( elem, "left" ),
      calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
      props = {}, curPosition = {}, curTop, curLeft;

    // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
    if ( calculatePosition ) {
      curPosition = curElem.position();
      curTop = curPosition.top;
      curLeft = curPosition.left;
    } else {
      curTop = parseFloat( curCSSTop ) || 0;
      curLeft = parseFloat( curCSSLeft ) || 0;
    }

    if ( jQuery.isFunction( options ) ) {
      options = options.call( elem, i, curOffset );
    }

    if ( options.top != null ) {
      props.top = ( options.top - curOffset.top ) + curTop;
    }
    if ( options.left != null ) {
      props.left = ( options.left - curOffset.left ) + curLeft;
    }

    if ( "using" in options ) {
      options.using.call( elem, props );
    } else {
      curElem.css( props );
    }
  }
};


jQuery.fn.extend({

  position: function() {
    if ( !this[ 0 ] ) {
      return;
    }

    var offsetParent, offset,
      parentOffset = { top: 0, left: 0 },
      elem = this[ 0 ];

    // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
    if ( jQuery.css( elem, "position" ) === "fixed" ) {
      // we assume that getBoundingClientRect is available when computed position is fixed
      offset = elem.getBoundingClientRect();
    } else {
      // Get *real* offsetParent
      offsetParent = this.offsetParent();

      // Get correct offsets
      offset = this.offset();
      if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
        parentOffset = offsetParent.offset();
      }

      // Add offsetParent borders
      parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
      parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
    }

    // Subtract parent offsets and element margins
    // note: when an element has margin: auto the offsetLeft and marginLeft
    // are the same in Safari causing offset.left to incorrectly be 0
    return {
      top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
      left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
    };
  },

  offsetParent: function() {
    return this.map(function() {
      var offsetParent = this.offsetParent || document.documentElement;
      while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || document.documentElement;
    });
  }
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
  var top = /Y/.test( prop );

  jQuery.fn[ method ] = function( val ) {
    return jQuery.access( this, function( elem, method, val ) {
      var win = getWindow( elem );

      if ( val === undefined ) {
        return win ? (prop in win) ? win[ prop ] :
          win.document.documentElement[ method ] :
          elem[ method ];
      }

      if ( win ) {
        win.scrollTo(
          !top ? val : jQuery( win ).scrollLeft(),
          top ? val : jQuery( win ).scrollTop()
        );

      } else {
        elem[ method ] = val;
      }
    }, method, val, arguments.length, null );
  };
});

function getWindow( elem ) {
  return jQuery.isWindow( elem ) ?
    elem :
    elem.nodeType === 9 ?
      elem.defaultView || elem.parentWindow :
      false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
  jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
    // margin is only for outerHeight, outerWidth
    jQuery.fn[ funcName ] = function( margin, value ) {
      var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

      return jQuery.access( this, function( elem, type, value ) {
        var doc;

        if ( jQuery.isWindow( elem ) ) {
          // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
          // isn't a whole lot we can do. See pull request at this URL for discussion:
          // https://github.com/jquery/jquery/pull/764
          return elem.document.documentElement[ "client" + name ];
        }

        // Get document width or height
        if ( elem.nodeType === 9 ) {
          doc = elem.documentElement;

          // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
          // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
          return Math.max(
            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
            elem.body[ "offset" + name ], doc[ "offset" + name ],
            doc[ "client" + name ]
          );
        }

        return value === undefined ?
          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css( elem, type, extra ) :

          // Set width or height on the element
          jQuery.style( elem, type, value, extra );
      }, type, chainable ? margin : undefined, chainable, null );
    };
  });
});
// Limit scope pollution from any deprecated API
// (function() {

// })();
// Expose jQuery to the global object
// window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
// if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
//  define( "jquery", [], function () { return jQuery; } );
// }

// })( window );
  return jQuery;
});
/**
 * @fileoverview Error that represents an error returned by some third party
 * remote server.
 *
 * A ProxyError should typically be raised when a content provider cannot be
 * reached or returns an error.
 */
define('runtime-browser/errors/proxyerror',['./error'], function (BaseError) {

  /**
   * Proxy error class
   */
  var ProxyError = function (message, err, statusCode) {
    BaseError.call(this, message, err);
    this.name = 'gateway error';
    this.statusCode = statusCode;
  };
  ProxyError.prototype = new BaseError();

  return ProxyError;
});

/**
 * @fileOverview HTTP library that runs client-side. The library merely
 * delegates to jQuery internally.
 */

define('runtime-browser/http',[
  'datajslib!jquery',
  'datajslib!errors/proxyerror'
], function ($, ProxyError) {
  // Counter used to compute a unique JSONP callback function name.
  var counter = 0;


  /**
   * Processes the HTTP response.
   *
   * The function creates the appropriate ProxyError in particular when the
   * status code is not a 2xx HTTP status code.
   */
  var processResponse = function (body, statusCode, callback) {
    if (statusCode >= 500) {
      return callback(
        new ProxyError('Server returned an internal error',
        'status=' + statusCode,
        statusCode)
      );
    }
    else if (statusCode >= 400) {
      return callback(
        new ProxyError('Server returned a client error',
          'status=' + statusCode,
          statusCode)
      );
    }

    // Return the HTTP response
    return callback(null, body, statusCode);
  };


  return {
    request: function (params, callback) {
      // Override the default callback function name generated by jQuery
      // with our own to avoid any collision with another version of jQuery
      // that may be running within the app.
      if ((params.dataType === 'jsonp') && !params.jsonpCallback) {
        params.jsonpCallback = 'datajslibjsonp' + (++counter);
      }

      // Binds to the "success" event
      params.success = function (ret, code, xhr) {
        processResponse(ret, xhr.status, callback);
      };

      // Binds to the "error" event
      params.error = function (xhr, textStatus, errorThrown) {
        if (!xhr) {
          return callback(new ProxyError(
            'Network error',
            errorThrown));
        }
        else if (xhr.status === 200) {
          return callback(new ProxyError(
            'Invalid reponse received from the server',
            errorThrown));
        }

        processResponse(textStatus, xhr.status, callback);
      };

      // Run the request
      return $.ajax(params);
    }
  };
});

// IMPORTANT: Same code as the original Underscore lib except code gets
// exported as an AMD module and lines 58 and following have been commented
// out not to leak '_' to the global scope
//     Underscore.js 1.3.3
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

define('runtime-browser/underscore',[],function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var slice            = ArrayProto.slice,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) { return new wrapper(obj); };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  /*
  // Section commented out to avoid leaking '_' to the global scope (tidoust) 
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root['_'] = _;
  }
  */

  // Current version.
  _.VERSION = '1.3.3';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    if (obj.length === +obj.length) results.length = obj.length;
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var reversed = _.toArray(obj).reverse();
    if (context && !initial) iterator = _.bind(iterator, context);
    return initial ? _.reduce(reversed, iterator, memo, context) : _.reduce(reversed, iterator);
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if a given value is included in the array or object using `===`.
  // Aliased as `contains`.
  _.include = _.contains = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    found = any(obj, function(value) {
      return value === target;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (_.isFunction(method) ? method || value : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Return the maximum element or (element-based computation).
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0]) return Math.max.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0]) return Math.min.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var shuffled = [], rand;
    each(obj, function(value, index, list) {
      rand = Math.floor(Math.random() * (index + 1));
      shuffled[index] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, val, context) {
    var iterator = _.isFunction(val) ? val : function(obj) { return obj[val]; };
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      if (a === void 0) return 1;
      if (b === void 0) return -1;
      return a < b ? -1 : a > b ? 1 : 0;
    }), 'value');
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, val) {
    var result = {};
    var iterator = _.isFunction(val) ? val : function(obj) { return obj[val]; };
    each(obj, function(value, index) {
      var key = iterator(value, index);
      (result[key] || (result[key] = [])).push(value);
    });
    return result;
  };

  // Use a comparator function to figure out at what index an object should
  // be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator) {
    iterator || (iterator = _.identity);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >> 1;
      iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj)                                     return [];
    if (_.isArray(obj))                           return slice.call(obj);
    if (_.isArguments(obj))                       return slice.call(obj);
    if (obj.toArray && _.isFunction(obj.toArray)) return obj.toArray();
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return _.isArray(obj) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especcialy useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail`.
  // Especially useful on the arguments object. Passing an **index** will return
  // the rest of the values in the array from that index onward. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = function(array, index, guard) {
    return slice.call(array, (index == null) || guard ? 1 : index);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return _.reduce(array, function(memo, value) {
      if (_.isArray(value)) return memo.concat(shallow ? value : _.flatten(value));
      memo[memo.length] = value;
      return memo;
    }, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator) {
    var initial = iterator ? _.map(array, iterator) : array;
    var results = [];
    // The `isSorted` flag is irrelevant if the array only contains two elements.
    if (array.length < 3) isSorted = true;
    _.reduce(initial, function (memo, value, index) {
      if (isSorted ? _.last(memo) !== value || !memo.length : !_.include(memo, value)) {
        memo.push(value);
        results.push(array[index]);
      }
      return memo;
    }, []);
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays. (Aliased as "intersect" for back-compat.)
  _.intersection = _.intersect = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = _.flatten(slice.call(arguments, 1), true);
    return _.filter(array, function(value){ return !_.include(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) results[i] = _.pluck(args, "" + i);
    return results;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i, l;
    if (isSorted) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
    for (i = 0, l = array.length; i < l; i++) if (i in array && array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item) {
    if (array == null) return -1;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
    var i = array.length;
    while (i--) if (i in array && array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
  // We check for `func.bind` first, to fail fast when `func` is undefined.
  _.bind = function bind(func, context) {
    var bound, args;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, throttling, more, result;
    var whenDone = _.debounce(function(){ more = throttling = false; }, wait);
    return function() {
      context = this; args = arguments;
      var later = function() {
        timeout = null;
        if (more) func.apply(context, args);
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);
      if (throttling) {
        more = true;
      } else {
        result = func.apply(context, args);
      }
      whenDone();
      throttling = true;
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      if (immediate && !timeout) func.apply(context, args);
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      return memo = func.apply(this, arguments);
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func].concat(slice.call(arguments, 0));
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) { return func.apply(this, arguments); }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    return _.map(obj, _.identity);
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var result = {};
    each(_.flatten(slice.call(arguments, 1)), function(key) {
      if (key in obj) result[key] = obj[key];
    });
    return result;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function.
  function eq(a, b, stack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a._chain) a = a._wrapped;
    if (b._chain) b = b._wrapped;
    // Invoke a custom `isEqual` method if one is provided.
    if (a.isEqual && _.isFunction(a.isEqual)) return a.isEqual(b);
    if (b.isEqual && _.isFunction(b.isEqual)) return b.isEqual(a);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = stack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (stack[length] == a) return true;
    }
    // Add the first object to the stack of traversed objects.
    stack.push(a);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          // Ensure commutative equality for sparse arrays.
          if (!(result = size in a == size in b && eq(a[size], b[size], stack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent.
      if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) return false;
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], stack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    stack.pop();
    return result;
  }

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType == 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Is a given variable an arguments object?
  _.isArguments = function(obj) {
    return toString.call(obj) == '[object Arguments]';
  };
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Is a given value a function?
  _.isFunction = function(obj) {
    return toString.call(obj) == '[object Function]';
  };

  // Is a given value a string?
  _.isString = function(obj) {
    return toString.call(obj) == '[object String]';
  };

  // Is a given value a number?
  _.isNumber = function(obj) {
    return toString.call(obj) == '[object Number]';
  };

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return _.isNumber(obj) && isFinite(obj);
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    // `NaN` is the only value for which `===` is not reflexive.
    return obj !== obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value a date?
  _.isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };

  // Is the given value a regular expression?
  _.isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Has own property?
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function (n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Escape a string for HTML interpolation.
  _.escape = function(string) {
    return (''+string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
  };

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object, ensuring that
  // they're correctly added to the OOP wrapper as well.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      addToWrapper(name, _[name] = obj[name]);
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /.^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    '\\': '\\',
    "'": "'",
    'r': '\r',
    'n': '\n',
    't': '\t',
    'u2028': '\u2028',
    'u2029': '\u2029'
  };

  for (var p in escapes) escapes[escapes[p]] = p;
  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  var unescaper = /\\(\\|'|r|n|t|u2028|u2029)/g;

  // Within an interpolation, evaluation, or escaping, remove HTML escaping
  // that had been previously added.
  var unescape = function(code) {
    return code.replace(unescaper, function(match, escape) {
      return escapes[escape];
    });
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    settings = _.defaults(settings || {}, _.templateSettings);

    // Compile the template source, taking care to escape characters that
    // cannot be included in a string literal and then unescape them in code
    // blocks.
    var source = "__p+='" + text
      .replace(escaper, function(match) {
        return '\\' + escapes[match];
      })
      .replace(settings.escape || noMatch, function(match, code) {
        return "'+\n_.escape(" + unescape(code) + ")+\n'";
      })
      .replace(settings.interpolate || noMatch, function(match, code) {
        return "'+\n(" + unescape(code) + ")+\n'";
      })
      .replace(settings.evaluate || noMatch, function(match, code) {
        return "';\n" + unescape(code) + "\n;__p+='";
      }) + "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __p='';" +
      "var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" +
      source + "return __p;\n";

    var render = new Function(settings.variable || 'obj', '_', source);
    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for build time
    // precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' +
      source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // The OOP Wrapper
  // ---------------

  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  var wrapper = function(obj) { this._wrapped = obj; };

  // Expose `wrapper.prototype` as `_.prototype`
  _.prototype = wrapper.prototype;

  // Helper function to continue chaining intermediate results.
  var result = function(obj, chain) {
    return chain ? _(obj).chain() : obj;
  };

  // A method to easily add functions to the OOP wrapper.
  var addToWrapper = function(name, func) {
    wrapper.prototype[name] = function() {
      var args = slice.call(arguments);
      unshift.call(args, this._wrapped);
      return result(func.apply(_, args), this._chain);
    };
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      var wrapped = this._wrapped;
      method.apply(wrapped, arguments);
      var length = wrapped.length;
      if ((name == 'shift' || name == 'splice') && length === 0) delete wrapped[0];
      return result(wrapped, this._chain);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      return result(method.apply(this._wrapped, arguments), this._chain);
    };
  });

  // Start chaining a wrapped Underscore object.
  wrapper.prototype.chain = function() {
    this._chain = true;
    return this;
  };

  // Extracts the result from a wrapped and chained object.
  wrapper.prototype.value = function() {
    return this._wrapped;
  };

  return _;

});
define('databases/google/spreadsheets',[
  'datajslib!http',
  'datajslib!underscore'
], function (http, _) {

  return {
    /**
     * Description of the datasource for the factory
     */
    desc: {
      "options": {
        "schema": {
          "docid": {
            "type": "string",
            "title": "Document URL or ID",
            "required": true,
            "description": "Spreadsheet needs to be published. In Google Spreadsheets, use \"File > Publish to the Web...\" to publish and/or copy the URL of the spreadsheet."
          },
          "sheetid": {
            "type": "number",
            "title": "Sheet number",
            "required": true,
            "default": 1
          },
          "ignoreRows": {
            "type": "string",
            "title": "Rows to ignore",
            "description": "e.g. 1;7-9;12",
            "pattern": "^[0-9 ]+(;[0-9 ]*)*$"
          },
          "usestdmapping": {
            "type": "boolean",
            "title": "Use standard data mapping",
            "description": "Spreadsheet uses standard column headers, which match schema.org properties (as illustrated in <a href='https://docs.google.com/spreadsheet/ccc?key=0As_8C1ajtYj-dDZhSDNEczJWSmp5UVE1d0RnRVVhQmc' target='_blank'>standard example</a>)",
            "default": false
          }
        },
        "form": [
          "docid",
          "sheetid",
          "ignoreRows",
          {
            "key": "usestdmapping",
            "inlinetitle": "Use standard data mapping",
            "notitle": true
          }
        ]
      },
      "runtimes": ["browser", "nodejs", "win8"],
      "outputType": "Article"
    },
  
    
    /**
     * Fetches feed items from the source provider.
     * @function
     * @param {Object} query Query parameters. Must define a 'filter' property
     *   with a 'url' property that contains the absolute URL to the page.
     * @param {function(Object, Object)} callback Callback function.
     *   Returns a text.
     */
    fetch: function (query, callback) {
      var filter = query.filter || {};
      var docid = null;
      var keym = null;
      var url = null;

      // Parameter checks
      if (!filter || !filter.docid || !filter.sheetid) {
        return callback(null, {"entries": []});
      }
      docid = filter.docid;
      keym = docid.match(/key\=([^\&\#]+)/);
      if (keym) {
        docid = keym[1];
      }

      // names : gIndex starts from 1 (google api), index starts from 0

      // parse ignore row param
      var ignoreRowsGIndexes = []; //contains the readable indexes (from 1) of the rows to ignore 
      var ignoreRowsParam = query.filter.ignoreRows || '', i, k, len;
      ignoreRowsParam = ignoreRowsParam.split(';');
      _.each(ignoreRowsParam, function(ignoreStr){
        ignoreStr = ignoreStr.replace(' ', '');
        var range = ignoreStr.split('-');
        if(range.length > 1) {
          for (var idx = parseInt(range[0], 10); idx <= parseInt(range[1], 10); idx++) {
            ignoreRowsGIndexes.push(idx);
          }
        } 
        else {
          ignoreRowsGIndexes.push(parseInt(ignoreStr, 10));
        }
      });

      _.sortBy(ignoreRowsGIndexes, function(num){ return num; }); //needed for the re-adjust limit algorithm

      // re-adjust startGIndex, if there are ignored rows in the skipped ones
      var startGIndex = (query.skip ? query.skip + 1 : 1);
      if (startGIndex > 1) {
        _.each(ignoreRowsGIndexes, function(gIndex) {
          if ( gIndex < startGIndex) {
            startGIndex ++;
          }
        });
      }

      // re-adjust the limit parameter, depending on the ignored rows and the skip param
      var limit = (query.limit ? query.limit : false);
      if (limit) {
        _.each(ignoreRowsGIndexes, function(gIndex) {
          if ( gIndex >= startGIndex && gIndex < (startGIndex + limit)) {
            limit ++;
          }
        });
      }

      // re-adjust the ignore indexes if there's a skip (for the process function)
      query.ignoreIterations = _.map(ignoreRowsGIndexes, function(gIndex){ 
        return gIndex - startGIndex;
      });

      url = "https://spreadsheets.google.com/feeds/list" +
        "/" + docid +
        "/" + filter.sheetid +
        "/public/values?alt=json-in-script";

      if (startGIndex) url += "&start-index=" + startGIndex;

      if (limit) url += "&max-results=" + limit;

      http.request({
        'url': url,
        'dataType': 'jsonp'
      }, function (err, data) {

        /* if context is required, make a second api request to get columns titles from header row
         * (we leave the deprecated query option getColumnInfos for retro-compatibility)
         * (now the context option is automatically added depending on packagejson option)
         */
        if (query.context ||Â query.getColumnInfos) {
          url = "https://spreadsheets.google.com/feeds/cells" +
            "/" + docid +
            "/" + filter.sheetid +
            "/public/values?alt=json-in-script&min-row=1&max-row=1"; //only the first row
          http.request({
            'url': url,
            'dataType': 'jsonp'
          }, function (err, coldata) {
            data.coldata = coldata;
            return callback(err, data);
          });
        } else {
          return callback(err, data);
        }

      });
    },

    /**
     * Normalizes the data received from the source provider.
     * @function
     * @param {Object} data The data that was received
     *(typically the object given to the callback method at the end of a "fetch")
     * @param {Object} query Query parameters (which could include filtering options)
     * @param {function(Object, Object)} callback Callback function.
     *   The second argument of the callback is an object with an "entries" property
     *   that contains the list of items normalized according to the schema.org hierarchy.
     */
    process: function (data, query, callback) {
      var self = this;
      var entries = [];
      var columnsNames = [];
      var context = {};
      var filter = query ? query.filter : null;
      var usestdmapping = filter ? filter.usestdmapping : false;

      if (!data || !data.feed || !data.feed.entry ||
          (query.getColumnInfos && (!data.coldata ||Â !data.coldata.feed || !data.coldata.feed.entry) ) ) {
        return callback(null, {"entries": entries, "columnsNames" : columnsNames, "@context" : context});
      }

      /* process each entry 
      */
      _.each(data.feed.entry, function (row, i) {
        if ( _.include(query.ignoreIterations, i) ) {
          return;
        }
        var entry;
        if (usestdmapping) {
          entry = {
            "@type": "Article",
            "itemType": "Article",
            "url": row.gsx$url ? row.gsx$url.$t : null,  //these three last properties should be removed. They are infos about the spreadsheet itself, and not what it refers to. Plus they break the standard mapping.
            "dateModified": row.updated.$t,
            "content": row.content.$t
          };

          // Append other columns
          for (var key in row) {
            if (key.substring(0, 4) === "gsx$") {
              var postfix = key.substring(4);
              //the deprecated mapping overrules (2 first if)
              if (postfix == "image"){
                entry.image = {
                  "@type": 'ImageObject',
                  "itemType": 'ImageObject',
                  "contentURL": row.gsx$image.$t
                };
              }
              else if (postfix in self.deprecatedMapping) {
                entry[ self.deprecatedMapping[postfix] ] = row[key].$t;
              }
              else {
                //split in case of nested properties
                var props = postfix.split(".");
                var currentProp = entry;
                _.each(props, function(prop, idx) {
                  //try and match it to a schema.org property
                  var schemaOrgProperty = self.findSchemaOrgProperty(prop);
                  var propName = (schemaOrgProperty !== undefined ? schemaOrgProperty : "gsx:" + postfix); 
                  if (idx == props.length - 1) {
                    //it's the leaf
                    currentProp[propName] = row[key].$t;
                  }
                  else {
                    //it's a node
                    if(currentProp[propName] === undefined){
                      currentProp[propName] = {};
                    }
                    currentProp = currentProp[propName]; //update the reference
                  }
                });
              }
            }
          }
        }
        else {
          // no standard mapping
          entry = {
            "@type": "Article",
            "itemType": "Article",
            "url": row.id ? row.id.$t : null,
            "name": row.title.$t,
            "dateModified": row.updated.$t,
            "content": row.content.$t
          };
          for (var key in row) {
            if (key.substring(0, 4) === "gsx$") {
              // TODO: detect types of data?
              // Use ":" as namespace separator to stick
              // to usual semantic Web conventions
              entry["gsx:" + key.substring(4)] = row[key].$t;
            }
          }
        }

        entries.push(entry);
      });

      /* extend context information with column titles if necessary
       * (for an explanation of these two different options, see before)
       */
      if(query.context ||Â query.getColumnInfos){
        // extract gsx names
        var gsxKeys = _.filter(_.keys(entries[0]), function(colKey){ 
          return colKey.substr(0,4) == "gsx:"; });
        _.each(data.coldata.feed.entry, function(cell, idx){
          if(idx > 0){ //the first column is areaid
            columnsNames.push(cell.content.$t);
            context[ gsxKeys[idx] ] = {
              "@id": "http://schema.org/Number",
              "title": cell.content.$t
            };
          }
        });
      }

      /* callback is still called with the deprecated columnsNames for backwards compatibility
       * with dataviz template previous versions 
       */
      callback(null, {'entries' : entries, "columnsNames" : columnsNames, "@context": context});
    },


    /**
     * Fetches and normalizes the data.
     * @function
     * @param {Object} query Query parameters. Feed specific object.
     * @param {function(Object, Object)} callback Callback function.
     *   receives the error or the normalized feed.
     */
    find: function (query, callback) {
      // Implementation note: same code as example/news
      var self = this;
      self.fetch(query, function (err, data) {
        if (err) {
          return callback(err, null);
        }
        else {
          self.process(data, query, function (err, convertedData) {
            return callback(err, convertedData);
          });
        }
      });
    },

    /* old header name => new schema.org property */
    deprecatedMapping : {
      "title" : "name",
      "abstract" : "description",
      "updated" : "dateModified",
      "text" : "articleBody"
    },

    /* all the schema.org properties names. extracted from http://schema.rdfs.org/all.json / properties */ 
    schemaOrgProperties : [ 
      'about', 'acceptsReservations', 'accountablePerson', 'actor', 'actors', 'additionalName', 'address', 'addressCountry', 'addressLocality', 'addressRegion', 'affiliation', 'aggregateRating', 'album', 'albums', 'alternativeHeadline', 'alumni', 'alumniOf', 'applicationCategory', 'applicationSubCategory', 'applicationSuite', 'articleBody', 'articleSection', 'associatedArticle', 'associatedMedia', 'attendee', 'attendees', 'audio', 'author', 'availability', 'award', 'awards', 'baseSalary', 'benefits', 'bestRating', 'birthDate', 'bitrate', 'blogPost', 'blogPosts', 'bookEdition', 'bookFormat', 'box', 'branchOf', 'brand', 'breadcrumb', 'browserRequirements', 'byArtist', 'calories', 'caption', 'carbohydrateContent', 'carrierRequirements', 'children', 'cholesterolContent', 'circle', 'colleague', 'colleagues', 'comment', 'commentText', 'commentTime', 'contactPoint', 'contactPoints', 'contactType', 'containedIn', 'contentLocation', 'contentRating', 'contentSize', 'contentUrl', 'contributor', 'cookTime', 'cookingMethod', 'copyrightHolder', 'copyrightYear', 'countriesNotSupported', 'countriesSupported', 'creator', 'currenciesAccepted', 'dateCreated', 'dateModified', 'datePosted', 'datePublished', 'dateline', 'deathDate', 'description', 'device', 'director', 'discusses', 'discussionUrl', 'downloadUrl', 'duration', 'editor', 'educationRequirements', 'elevation', 'email', 'embedUrl', 'employee', 'employees', 'employmentType', 'encodesCreativeWork', 'encoding', 'encodingFormat', 'encodings', 'endDate', 'episode', 'episodeNumber', 'episodes', 'event', 'events', 'exifData', 'experienceRequirements', 'expires', 'familyName', 'fatContent', 'faxNumber', 'featureList', 'fiberContent', 'fileFormat', 'fileSize', 'follows', 'founder', 'founders', 'foundingDate', 'gender', 'genre', 'geo', 'givenName', 'headline', 'height', 'highPrice', 'hiringOrganization', 'homeLocation', 'honorificPrefix', 'honorificSuffix', 'illustrator', 'image', 'inAlbum', 'inLanguage', 'inPlaylist', 'incentives', 'industry', 'ingredients', 'installUrl', 'interactionCount', 'isFamilyFriendly', 'isPartOf', 'isbn', 'itemCondition', 'itemListElement', 'itemListOrder', 'itemOffered', 'itemReviewed', 'jobLocation', 'jobTitle', 'keywords', 'knows', 'latitude', 'line', 'location', 'longitude', 'lowPrice', 'mainContentOfPage', 'manufacturer', 'map', 'maps', 'member', 'memberOf', 'members', 'memoryRequirements', 'mentions', 'menu', 'model', 'musicBy', 'musicGroupMember', 'name', 'nationality', 'numTracks', 'numberOfEpisodes', 'numberOfPages', 'nutrition', 'occupationalCategory', 'offerCount', 'offers', 'openingHours', 'operatingSystem', 'parent', 'parents', 'partOfSeason', 'partOfTVSeries', 'paymentAccepted', 'performer', 'performerIn', 'performers', 'permissions', 'photo', 'photos', 'playerType', 'polygon', 'postOfficeBoxNumber', 'postalCode', 'prepTime', 'price', 'priceCurrency', 'priceRange', 'priceValidUntil', 'primaryImageOfPage', 'printColumn', 'printEdition', 'printPage', 'printSection', 'processorRequirements', 'producer', 'productID', 'productionCompany', 'proteinContent', 'provider', 'publisher', 'publishingPrinciples', 'qualifications', 'ratingCount', 'ratingValue', 'recipeCategory', 'recipeCuisine', 'recipeInstructions', 'recipeYield', 'regionsAllowed', 'relatedTo', 'releaseNotes', 'replyToUrl', 'representativeOfPage', 'requirements', 'requiresSubscription', 'responsibilities', 'review', 'reviewBody', 'reviewCount', 'reviewRating', 'reviews', 'salaryCurrency', 'saturatedFatContent', 'screenshot', 'season', 'seasonNumber', 'seasons', 'seller', 'servesCuisine', 'servingSize', 'sibling', 'siblings', 'significantLink', 'significantLinks', 'skills', 'sodiumContent', 'softwareVersion', 'sourceOrganization', 'specialCommitments', 'spouse', 'startDate', 'storageRequirements', 'streetAddress', 'subEvent', 'subEvents', 'sugarContent', 'superEvent', 'telephone', 'text', 'thumbnail', 'thumbnailUrl', 'tickerSymbol', 'title', 'totalTime', 'track', 'tracks', 'trailer', 'transFatContent', 'transcript', 'unsaturatedFatContent', 'uploadDate', 'url', 'version', 'video', 'videoFrameSize', 'videoQuality', 'width', 'wordCount', 'workHours', 'workLocation', 'worksFor', 'worstRating' 
    ],

    /* utility function to look case insentively for a matching property in schema.org */
    findSchemaOrgProperty : function(testStr){
      var self = this;
      return _.find(self.schemaOrgProperties, function(propName){
        return propName.toLowerCase() == testStr.toLowerCase(); 
      });
    }

  };
});

define('databases/youtube/lib/api',[
  'datajslib!http', 
  'require'
], function (http, woodman) {

  

  var api = {};

  // Options: handle mongo's like options

  api.options = function(query) {
    var ret = {};
    if (query.skip) ret['start-index'] = query.skip + 1;
    if (query.limit) ret['max-results'] = query.limit;

    return ret;
  };


  // Generate final URL
  api.generateUrl = function(url, params) {
    
    
    
    for (var param in params) {
      var newUrl = url.replace(new RegExp(':'+ param),
        encodeURIComponent(params[param]));
      if (newUrl !== url) {
        url = newUrl;
      }
      else {
        url += ((url.indexOf('?') === -1) ? '?' : '&') +
          param + (params[param] ? ('=' + encodeURIComponent(params[param])) : '');
      }
    }
    return url;
  };


  // Call API
  api.request = function(url, cb) {
    var baseUrl = 'http://gdata.youtube.com/feeds/api/';

    // We add default parameter
    url = baseUrl + api.generateUrl(url, { alt:'json-in-script', v:2 });

    // console.log("url",url);
    http.request({
      'url': url,
      'dataType': 'jsonp'
    }, cb);
  };
    

  // Export --------------------------------------------------------------------

  return api;

});

/**
 * @fileoverview ISO8601 conversion functions.
 *
 * Original code from http://webcloud.se/log/JavaScript-and-ISO-8601/
 *
 * The code has been largely re-written because it did not parse local/UTC
 * dates quite well. In particular, strings such as "2012-02-10T00:00:00Z"
 * were parsed as local dates.
 */
define('runtime-browser/iso8601',[],function() {

  /**
   * Regular expression that matches an ISO8601 date
   * @private
   */
  var reDate = /^([0-9]{4})(\-([0-9]{2})(\-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([\-+])([0-9]{2}):([0-9]{2})))?)?)?)?$/;

  /**
   * Regular expression that matches an ISO8601 duration
   * @private
   */
  var reDuration = /^PT([0-9]+)H([0-9]+)M([0-9]+)S$/;


  //from http://webcloud.se/log/JavaScript-and-ISO-8601/
  return {
    /**
     * Returns a Date object that matches the given ISO8601 string.
     *
     * If the string only specifies a day but not time, the string is
     * interpreted as a local date whose time is midnight. That is
     * consistent with the way dates are parsed in JavaScript:
     * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse
     *
     * @function
     * @param {string} string The ISO8601 string to parse
     * @return {Date} The date object that matches the given string,
     *  null if the incoming string is not a valid date
     */
    toDate: function (string) {
      var d = null,
        offset = 0,
        date = null,
        time = null;
      
      if (!string) {
        return null;
      }

      // Parse the string
      d = string.trim().match(reDate);
      if (!d) {
        // Not a valid date
        return null;
      }
      //console.log(d);

      // If "Z" or a timezone is specified, construct the date as a UTC date,
      // and apply the specified timezone as necessary.
      // If not, the date is to be understood as a local date, where "local"
      // means local to the system that runs the function.
      // Note that a date without time is interpreted as a UTC date whose
      // time is midnight.
      date = new Date(2010, 0, 1);
      if (d[13]) {
        // No time specified, or there's a "Z" or a timezone
        date.setUTCFullYear(d[1], 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        if (d[3]) { date.setUTCMonth(d[3] - 1); }
        if (d[5]) { date.setUTCDate(d[5]); }

        if (d[7]) { date.setUTCHours(d[7]); }
        if (d[8]) { date.setUTCMinutes(d[8]); }
        if (d[10]) { date.setUTCSeconds(d[10]); }
        if (d[12]) { date.setUTCMilliseconds(Number("0." + d[12]) * 1000); }

        if (d[14]) {
          // Some timezone specified, apply the offset
          // and generate the new date
          offset = (Number(d[16]) * 60) + Number(d[17]);
          offset *= ((d[15] == '-') ? 1 : -1);

          time = date.getTime() + (offset * 60 * 1000);
          date.setTime(time);
        }
      }
      else {
        // No time, or time but no timezone, interpret the date as a local date
        date.setFullYear(d[1], 0, 1, 0, 0, 0, 0);
        if (d[3]) { date.setMonth(d[3] - 1); }
        if (d[5]) { date.setDate(d[5]); }
        if (d[7]) { date.setHours(d[7]); }
        if (d[8]) { date.setMinutes(d[8]); }
        if (d[10]) { date.setSeconds(d[10]); }
        if (d[12]) { date.setMilliseconds(Number("0." + d[12]) * 1000); }
      }

      return date;
    },

    /**
     * Returns the ISO8601 string representation of the date, given as a string.
     * The method supports the following formats for the given date string:
     * - RFC822
     * - ISO8601, regardless of whether the code is run under JavaScript v1.8.5+
     * or not.
     *
     * @function
     * @param {string} string The date string to convert to an ISO8601 string
     * @returns {string} The ISO8601 string representation for this date, an
     *  empty string if the string could not be parsed.
     */
    fromString: function (string) {
      var date = null;

      if (!string) {
        return '';
      }

      date = new Date(string);
      if (isNaN(date.getTime())) {
        // The date could not be parsed by the Date object, try to parse the
        // string as ISO8601 (this won't change anything if the underlying
        // JavaScript engine already supports that format, but won't be harmful
        // either).
        date = this.toDate(string);
      }

      // Convert the final date
      return this.fromDate(date);
    },


    /**
     * Returns the ISO8601 string representation of the given date.
     *
     * Milliseconds are only returned when different from 0.
     *
     * @function
     * @param {Date} d The date object to convert
     * @returns {string} The ISO8601 string representation for this date
     */
    fromDate: function (d) {
      var pad = function (n) {
        return (n < 10) ? '0' + n : n;
      };
      var padms = function (n) {
        if (n < 10) {
          return '00' + n;
        }
        else if (n < 100) {
          return '0' + n;
        }
        else {
          return n;
        }
      };

      if (!d || !(d instanceof Date) || isNaN(d.getTime())) {
        return "";
      }

      return d.getUTCFullYear() +
        '-' + pad(d.getUTCMonth() + 1) +
        '-' + pad(d.getUTCDate()) +
        'T' + pad(d.getUTCHours()) +
        ':' + pad(d.getUTCMinutes()) +
        ':' + pad(d.getUTCSeconds()) +
        ((d.getUTCMilliseconds() !== 0) ? '.' + padms(d.getUTCMilliseconds()) : '') +
        'Z';
    },


    /**
     * Returns the ISO8601 string representation of the given date,
     * omitting the time part.
     *
     * The method outputs the local day when the local time evaluates to zero
     * The method outputs the UTC day otherwise. This apparently weird rule
     * allows to stick to the "right" day if the author created the date with:
     *  new Date("21 Apr 1997");
     *
     * This method should only really be used with dates created without time
     * counterpart.
     *
     * @function
     * @param {Date} d The date object to convert
     * @return {string} The ISO8601 string representation for this date
     */
    fromDateNoTime: function (d) {
      var pad = function (n) {
        return (n < 10) ? '0' + n : n;
      };

      if (!d || !(d instanceof Date) || isNaN(d.getTime())) {
        return "";
      }

      if (!d || isNaN(d.getTime())) {
        return "";
      }

      if ((d.getHours() === 0) &&
        (d.getMinutes() === 0) &&
        (d.getSeconds() === 0) &&
        (d.getMilliseconds() === 0)) {
        // Local time evaluates to 0, return local day
        return d.getFullYear() +
          '-' + pad(d.getMonth() + 1) +
          '-' + pad(d.getDate());
      }
      else {
        // Return UTC day
        return d.getUTCFullYear() +
          '-' + pad(d.getUTCMonth() + 1) +
          '-' + pad(d.getUTCDate());
      }
    },


    /**
     * Returns the number of milliseconds that correspond to the given ISO8601 duration.
     * Note the function is restricted to durations of the form "PTnnHnnMnnS" for the time being.
     * @function
     * @param {string} string The ISO8601 string that represents a duration
     * @return {number} The duration in milliseconds
     */
    toDuration: function (string) {
      if (!string) {
        return 0;
      }

      var d = string.match(reDuration);
      if (!d) {
        return 0;
      }
       
      var ms = 0;
      if (d[2]) { ms += Number(d[2]) * 3600 * 1000; }
      if (d[3]) { ms += Number(d[3]) * 60 * 1000; }
      if (d[4]) { ms += Number(d[4]) * 1000; }

      return ms;
    },


    /**
     * Returns the ISO8601 representation of the given duration.
     * The function is not fully generic and only generates durations in the form "PTnnHnnMnnS"
     * (no year, month or day)
     * @function
     * @param {number} ms The duration to convert in milliseconds
     * @return {string} The ISO8601 representation of the duration
     */
    fromDuration: function (ms) {
      var seconds = Math.round(ms / 1000);
      var hours = Math.floor(seconds / 3600);
      var minutes = 0;

      seconds = seconds - hours * 3600;
      minutes = Math.floor(seconds / 60);

      seconds = seconds - minutes * 60;

      return "PT" +
        hours + "H" +
        minutes + "M" +
        seconds + "S";
    }
  };


});
/**
 * @fileoverview Youtube video to schema.org VideoObject converter function
 *
 * Youtube response format description:
 * https://developers.google.com/youtube/2.0/reference#youtube_data_api_tag_entry
 *
 * Youtube video example:
 * https://gdata.youtube.com/feeds/api/videos/yLsr-P2pmxY?v=2&alt=json
 */
/*global define*/

define('databases/youtube/lib/convert',[
  'datajslib!underscore',
  'datajslib!iso8601'
], function (_, iso8601) {

  /**
   * Regular expression used to extract the ID of a Youtube video from
   * its media$content URL
   */
  var reVideoUrl = /^https?:\/\/(www\.)?youtube\.com\/v\/([a-z0-9_\-]+).*$/i;

  /**
   * Regular expression used to extract the inner ID of a Youtube video
   * from its "id" property
   */
  var reVideoId = /^tag:youtube.com.*:video:(.*)$/;

  /**
   * Converts an incoming Youtube video object to a schema.org compatible
   * VideoObject.
   *
   * @function
   * @param {Object} video Youtube video object
   * @return {Object} A VideoObject video or null if the video parameter
   *  was null
   */
  var convert = function convert(video) {
    var match = null;
    var videoId = null;
    var res = {
      '@type': 'VideoObject',
      'itemType': 'VideoObject',
      'publisher': {
        '@type': 'Organization',
        'itemType': 'Organization',
        'url': 'http://www.youtube.com',
        'name': 'Youtube'
      }
    };
    var duration = 0;

    if (!video) return null;

    // Extract the unique URL of the video
    if (video.link && video.link[0] && video.link[0].href) {
      // Note we remove extra parameters from the URL such as
      // "&feature=youtube_gdata"
      res.url = video.link[0].href.replace(/\&.*$/, '');
    }

    // Set the video title
    if (video.title && video.title.$t) {
      res.name = video.title.$t;
    }

    // Extract the ID of the video
    // (Note the ID is only extracted from the "id" property when the right
    // media$content property is not present. Both IDs should match.
    if (video.media$group &&
      video.media$group.media$content &&
      video.media$group.media$content[0] &&
      video.media$group.media$content[0].url) {
      match = video.media$group.media$content[0].url.match(reVideoUrl);
      if (match) {
        videoId = match[2];
      }
    }
    if (!videoId && video.id && video.id.$t) {
      match = video.id.$t.match(reVideoId);
      if (match) {
        videoId = match[1];
      }
    }

    if (videoId) {
      res.playerType = 'iframe';
      res.embedURL = 'http://www.youtube-nocookie.com/embed/' +
        videoId + '?rel=0';
    }

    if (video.media$group &&
      video.media$group.media$description &&
      video.media$group.media$description.$t) {
      res.description = video.media$group.media$description.$t;
    }

    if (video.media$group &&
      video.media$group.media$category &&
      video.media$group.media$category.$t) {
      res.genre = video.media$group.media$category.$t;
    }

    if (video.published && video.published.$t) {
      res.datePublished = video.published.$t;
    }
    else if (video.media$group &&
      video.media$group.yt$uploaded &&
      video.media$group.yt$uploaded.$t) {
      res.datePublished = video.media$group.yt$uploaded.$t;
    }

    if (video.media$group &&
      video.media$group.yt$uploaded &&
      video.media$group.yt$uploaded.$t) {
      res.uploadDate = video.media$group.yt$uploaded.$t;
    }

    if (video.media$group &&
      video.media$group.yt$duration &&
      video.media$group.yt$duration.seconds) {
      duration = Number(video.media$group.yt$duration.seconds) * 1000;
      res.duration = iso8601.fromDuration(duration);
    }

    // Other possibilities: keywords, license when defined in schema.org.
    // Add ",'meta': vid" to the above code snipped to view all the information returned by Youtube
    // Note that video.updated always returns the current date which is not particularly useful, discarded here.

    // Complete the list of authors
    if (video.author) {
      res.author = [];
      for (var k = 0, kl = video.author.length; k < kl; k++) {
        if (video.author[k].uri &&
          video.author[k].uri.$t &&
          video.author[k].name &&
          video.author[k].name.$t) {
          res.author.push({
            '@type': 'Person',
            'itemType': 'Person',
            'url': video.author[k].uri.$t,
            'name': video.author[k].name.$t
          });
        }
      }
    }

    // Complete the list of thumbnails
    if (video.media$group && video.media$group.media$thumbnail) {
      res.thumbnail = [];
      for (var k2 = 0, kl2 = video.media$group.media$thumbnail.length; k2 < kl2; k2++) {
        var thumbnail = video.media$group.media$thumbnail[k2];
        if (thumbnail &&
          thumbnail.url &&
          thumbnail.yt$name) {
          res.thumbnail.push({
            '@type': 'ImageObject',
            'itemType': 'ImageObject',
            'url': thumbnail.url,
            'name': thumbnail.yt$name,
            'contentURL': thumbnail.url,
            'width': thumbnail.width,
            'height': thumbnail.height
          });
        }
      }
      if (res.thumbnail[0]) {
        res.image = _.clone(res.thumbnail[0]);
      }
    }

    // Location
    var point = null;
    if (video.georss$where &&
      video.georss$where.gml$Point &&
      video.georss$where.gml$Point.gml$pos &&
      video.georss$where.gml$Point.gml$pos.$t) {
      point = video.georss$where.gml$Point.gml$pos.$t.split(' ');
      if (point.length === 2) {
        res.contentLocation = {
          '@type': 'Place',
          'itemType': 'Place',
          'geo': {
            '@type': 'GeoCoordinates',
            'itemType': 'GeoCoordinates',
            'latitude': parseFloat(point[0], 10),
            'longitude': parseFloat(point[1], 10)
          }
        };
      }
    }
    if (video.yt$location && video.yt$location.$t) {
      if (!res.contentLocation) {
        res.contentLocation = {
          '@type': 'Place',
          'itemType': 'Place'
        };
      }
      res.contentLocation.name = video.yt$location.$t;
    }

    // Aspect ratio
    // (remains in Youtube namespace since not a standard property)
    if (video.media$group &&
      video.media$group.yt$aspectRatio &&
      video.media$group.yt$aspectRatio.$t) {
      res['yt:aspectRatio'] = video.media$group.yt$aspectRatio.$t;
    }

    return res;
  };

  // Export the "convert" function
  return convert;
});
define('databases/youtube/videos',[
  './lib/api',
  './lib/convert',
  'datajslib!underscore',
  'datajslib!iso8601'
], function (api, convert, _, iso8601) {

  return {
    /**
     * Description of the datasource for the factory
     */
    desc : {
      "options": {
        "schema": {
          "playlist": {
            "type": "string",
            "title": "Playlist URL",
            "description": "You may also enter the ID of the playlist"
          },
          "search": {
            "type": "string",
            "title": "Search text",
            "description": "Keep in mind that the list of videos featured in the final app will be the results of the search when the app is run. Consider using playlists if you need more consistent results."
          },
          "feed": {
            "type": "string",
            "title": "Feed",
            "enum": [
              "",
              "top_rated",
              "most_viewed",
              "most_shared",
              "most_popular",
              "most_recent",
              "most_discussed",
              "most_responded",
              "recently_featured",
              "on_the_web"
            ]
          },
          "user": {
            "type": "string",
            "title": "Username",
            "description": "Filter results by username"
          }
        },
        "form": [
          {
            "type": "selectfieldset",
            "title": "Search by",
            "items": [
              {
                "type": "optionfieldset",
                "legend": "Text",
                "items": [
                  "search"
                ]
              },
              {
                "type": "optionfieldset",
                "legend": "Playlist",
                "items": [
                  "playlist"
                ]
              },
              {
                "type": "optionfieldset",
                "legend": "Username",
                "items": [
                  "user"
                ]
              },
              {
                "type": "optionfieldset",
                "legend": "Feed",
                "items": [
                  "feed"
                ]
              }
            ]
          }
        ]
      },
      "runtimes": ["browser", "nodejs", "win8"],
      "outputType" : "VideoObject"
    },


    /**
     * Fetches feed items from the source provider.
     * @function
     * @param {Object} query Query parameters. Must define a 'filter' property
     *   with a 'url' property that contains the absolute URL to the page.
     * @param {function(Object, Object)} callback Callback function.
     *   Returns a text.
     */
    fetch: function (query, callback) {
      // See Youtube API at http://code.google.com/apis/youtube/2.0/reference.html
      var filter = (query && query.filter) ? query.filter : {};
      var validFeed = this.desc.options.schema.feed["enum"];
      var url = null;

      if (filter.search) {
        url = 'videos';
        // Do not encodeURI filter.search, done in the API
        filter = _.extend({ q:filter.search }, filter.user ? { author:filter.user } : {});
      }
      else if (filter.feed) {
        url = 'standardfeeds/:feed';
        if (_.indexOf(validFeed, filter.feed) == -1) return callback('Invalid feed type "'+ filter.feed +'".');
        filter = _.extend({ feed:filter.feed }, filter.user ? { author:filter.user } : {});
      }
      else if (filter.playlist) {
        url = 'playlists/:playlist';

        /* Playlist should be 16-char String
          Clean up user input : often PL{playlistId} or http://youtube.com/xxxxx
          */
        //console.warn('playlist ?','input', filter.playlist);
        if (filter.playlist.length>16){
          //full url ?
          var matches = filter.playlist.match(/http(s?):\/\/(www\.?)(youtube\.com\/playlist\?).*(list=)([A-Z0-9_-]*)/i);
          if (matches && matches.length){
            filter.playlist=matches.pop();
          }
          if (filter.playlist.length>16){
            //strip heading PL ... and any further arguments
            filter.playlist=filter.playlist.replace(/^PL([a-z0-9_-]+).*$/i, '$1');
          }
          // console.warn('playlist !','output', filter.playlist);
        }

        filter = _.extend({ playlist:filter.playlist }, filter.user ? { author:filter.user } : {});
      }
      else if (filter.user) {
        url = 'users/:user/uploads';
      }
      else { // if nothing was specified
        return callback(null, null);
      }
      // use url = 'videos'; to display most popular videos

      url = api.generateUrl(url, _.extend({}, filter, api.options(query)));

      api.request(url, function(err, data) {
        return callback(err, data);
      });
    },

    /**
     * Normalizes the data received from the source provider.
     * @function
     * @param {Object} data The data that was received
     *(typically the object given to the callback method at the end of a "fetch")
     * @param {Object} query Query parameters (which could include filtering options)
     * @param {function(Object, Object)} callback Callback function.
     *   The second argument of the callback is an object with an "entries" property
     *   that contains the list of items normalized according to the schema.org hierarchy.
     */
    process: function (data, query, callback) {
      if (!data || !data.feed || !data.feed.entry) {
        return callback(null, { entries: [] });
      }

      var videos = data.feed.entry;
      for (var i = 0, l = videos.length; i < l; i++) {
        videos[i] = convert(videos[i]);
      }

      callback(null, { entries: videos });
    },


    /**
     * Fetches and normalizes the data.
     * @function
     * @param {Object} query Query parameters. Feed specific object.
     * @param {function(Object, Object)} callback Callback function.
     *   receives the error or the normalized feed.
     */
    find: function (query, callback) {
      // Implementation note: same code as example/news
      var self = this;
      self.fetch(query, function (err, data) {
        if (err) {
          return callback(err, null);
        }
        else {
          self.process(data, query, function (err, convertedData) {
            return callback(err, convertedData);
          });
        }
      });
    }
  };
});

/**
 * @fileoverview The JSON Form "defaults" library exposes a setDefaultValues
 * method that extends the object passed as argument so that it includes
 * values for all required fields of the JSON schema it is to follow that
 * define a default value.
 *
 * The library is called to complete the configuration settings of a template in
 * the Factory and to complete datasource settings.
 *
 * The library is useless if the settings have already been validated against the
 * schema using the JSON schema validator (typically, provided the validator is
 * loaded, submitting the form created from the schema will raise an error when
 * required properties are missing).
 *
 * Note the library does not validate the created object, it merely sets missing
 * values to the default values specified in the schema. All other values may
 * be invalid.
 *
 * Nota Bene:
 * - in data-joshfire, the runtime/nodejs/lib/jsonform-defaults.js file is a
 * symbolic link to the jsonform submodule in deps/jsonform
 * - in platform-joshfire, the server/public/js/libs/jsonform-defaults.js file
 * is a symbolic link to the jsonform submodule in deps/jsonform
 */

(function () {
  // Establish the root object:
  // that's "window" in the browser, "global" in node.js
  var root = this;

  /**
   * Sets default values, ensuring that fields defined as "required" in the
   * schema appear in the object. If missing, the hierarchy that leads to
   * a required key is automatically created.
   *
   * @function
   * @param {Object} obj The object to complete with default values according
   *  to the schema
   * @param {Object} schema The JSON schema that the object follows
   * @param {boolean} includeOptionalValues Include default values for fields
   *  that are not "required"
   * @return {Object} The completed object (same instance as obj)
   */
  var setDefaultValues = function (obj, schema, includeOptionalValues) {
    if (!obj || !schema) return obj;

    // Inner function that parses the schema recursively to build a flat
    // list of defaults
    var defaults = {};
    var extractDefaultValues = function (schemaItem, path) {
      var properties = null;
      var child = null;

      if (!schemaItem || (schemaItem !== Object(schemaItem))) return null;

      if (schemaItem.required) {
        // Item is required
        if (schemaItem['default']) {
          // Item defines a default value, let's use it,
          // no need to continue in that case, we have the default value
          // for the whole subtree starting at schemaItem.
          defaults[path] = schemaItem['default'];
          return;
        }
        else if ((schemaItem.type === 'object') || schemaItem.properties) {
          // Item is a required object
          defaults[path] = {};
        }
        else if ((schemaItem.type === 'array') || schemaItem.items) {
          // Item is a required array
          defaults[path] = [];
        }
        else if (schemaItem.type === 'string') {
          defaults[path] = '';
        }
        else if ((schemaItem.type === 'number') || (schemaItem.type === 'integer')) {
          defaults[path] = 0;
        }
        else if (schemaItem.type === 'boolean') {
          defaults[path] = false;
        }
        else {
          // Unknown type, use an empty object by default
          defaults[path] = {};
        }
      }
      else if (schemaItem['default'] && includeOptionalValues) {
        // Item is not required but defines a default value and the
        // include optional values flag is set, so let's use it.
        // No need to continue in that case, we have the default value
        // for the whole subtree starting at schemaItem.
        defaults[path] = schemaItem['default'];
        return;
      }

      // Parse schema item's properties recursively
      properties = schemaItem.properties;
      if (properties) {
        for (var key in properties) {
          if (properties.hasOwnProperty(key)) {
            extractDefaultValues(properties[key], path + '.' + key);
          }
        }
      }

      // Parse schema item's children recursively
      if (schemaItem.items) {
        // Items may be a single item or an array composed of only one item
        child = schemaItem.items;
        if (_isArray(child)) {
          child = child[0];
        }

        extractDefaultValues(child, path + '[]');
      }
    };

    // Build a flat list of default values
    extractDefaultValues(schema, '');

    // Ensure the object's default values are correctly set
    for (var key in defaults) {
      if (defaults.hasOwnProperty(key)) {
        setObjKey(obj, key, defaults[key]);
      }
    }
  };


  /**
   * Retrieves the default value for the given key in the schema
   *
   * Levels in the path are separated by a dot. Array items are marked
   * with []. For instance:
   *  foo.bar[].baz
   *
   * @function
   * @param {Object} schema The schema to parse
   * @param {String} key The path to the key whose default value we're
   *  looking for. each level is separated by a dot, and array items are
   *  flagged with [x].
   * @return {Object} The default value, null if not found.
   */
  var getSchemaKeyDefaultValue = function(schema,key) {
    var schemaKey = key
      .replace(/\./g, '.properties.')
      .replace(/\[.*\](\.|$)/g, '.items$1');
    var schemaDef = getObjKey(schema, schemaKey);
    if (schemaDef) return schemaDef['default'];
    return null;
  };

  /**
   * Retrieves the key identified by a path selector in the structured object.
   *
   * Levels in the path are separated by a dot. Array items are marked
   * with []. For instance:
   *  foo.bar[].baz
   *
   * @function
   * @param {Object} obj The object to parse
   * @param {String} key The path to the key whose default value we're
   *  looking for. each level is separated by a dot, and array items are
   *  flagged with [x].
   * @return {Object} The key definition, null if not found.
   */
  var getObjKey = function (obj, key) {
    var innerobj = obj;
    var keyparts = key.split('.');
    var subkey = null;
    var arrayMatch = null;
    var reArraySingle = /\[([0-9]*)\](?:\.|$)/;

    for (var i = 0; i < keyparts.length; i++) {
      if (typeof innerobj !== 'object') return null;
      subkey = keyparts[i];
      arrayMatch = subkey.match(reArraySingle);
      if (arrayMatch) {
        // Subkey is part of an array
        subkey = subkey.replace(reArraySingle, '');
        if (!_.isArray(innerobj[subkey])) {
          return null;
        }
        innerobj = innerobj[subkey][parseInt(arrayMatch[1], 10)];
      }
      else {
        innerobj = innerobj[subkey];
      }
    }

    return innerobj;
  };


  /**
   * Sets the key identified by a path selector to the given value.
   *
   * Levels in the path are separated by a dot. Array items are marked
   * with []. For instance:
   *  foo.bar[].baz
   *
   * The hierarchy is automatically created if it does not exist yet.
   *
   * Default values are added to all array items. Array items are not
   * automatically created if they do not exist (in particular, the
   * minItems constraint is not enforced)
   *
   * @function
   * @param {Object} obj The object to build
   * @param {String} key The path to the key to set where each level
   *  is separated by a dot, and array items are flagged with [x].
   * @param {Object} value The value to set, may be of any type.
   */
  var setObjKey = function (obj, key, value) {
    var keyparts = key.split('.');

    // Recursive version of setObjKey
    var recSetObjKey = function (obj, keyparts, value) {
      var arrayMatch = null;
      var reArray = /\[([0-9]*)\]$/;
      var subkey = keyparts.shift();
      var idx = 0;

      if (keyparts.length > 0) {
        // Not the end yet, build the hierarchy
        arrayMatch = subkey.match(reArray);
        if (arrayMatch) {
          // Subkey is part of an array, check all existing array items
          // TODO: review that! Only create the right item!!!
          subkey = subkey.replace(reArray, '');
          if (!_isArray(obj[subkey])) {
            obj[subkey] = [];
          }
          obj = obj[subkey];
          if (arrayMatch[1] !== '') {
            idx = parseInt(arrayMatch[1], 10);
            if (!obj[idx]) {
              obj[idx] = {};
            }
            recSetObjKey(obj[idx], keyparts, value);
          }
          else {
            for (var k = 0; k < obj.length; k++) {
              recSetObjKey(obj[k], keyparts, value);
            }
          }
          return;
        }
        else {
          // "Normal" subkey
          if (typeof obj[subkey] !== 'object') {
            obj[subkey] = {};
          }
          obj = obj[subkey];
          recSetObjKey(obj, keyparts, value);
        }
      }
      else {
        // Last key, time to set the value, unless already defined
        arrayMatch = subkey.match(reArray);
        if (arrayMatch) {
          subkey = subkey.replace(reArray, '');
          if (!_isArray(obj[subkey])) {
            obj[subkey] = [];
          }
          idx = parseInt(arrayMatch[1], 10);
          if (!obj[subkey][idx]) {
            obj[subkey][idx] = value;
          }
        }
        else if (!obj[subkey]) {
          obj[subkey] = value;
        }
      }
    };

    // Skip first item if empty (key starts with a '.')
    if (!keyparts[0]) {
      keyparts.shift();
    }
    recSetObjKey(obj, keyparts, value);
  };

  // Taken from Underscore.js (not included to save bytes)
  var _isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) == '[object Array]';
  };


  // Export the code as:
  //  1. an AMD module (the "define" method exists in that case), or
  //  2. a node.js module ("module.exports" is defined in that case), or
  //  3. a global JSONForm object (using "root")
  if (typeof define !== 'undefined') {
    // AMD module
    define('runtime-browser/jsonform-defaults',[], function () {
      return {
        setDefaultValues: setDefaultValues
      };
    });
  }
  else if ((typeof module !== 'undefined') && module.exports) {
    // Node.js module
    module.exports = {
      setDefaultValues: setDefaultValues
    };
  }
  else {
    // Export the function to the global context, using a "string" for
    // Google Closure Compiler "advanced" mode
    // (not sure why it's needed, done by Underscore)
    root['JSONForm'] = root['JSONForm'] || {};
    root['JSONForm'].setDefaultValues = setDefaultValues;
    root['JSONForm'].setObjKey = setObjKey;
    root['JSONForm'].getSchemaKeyDefaultValue = getSchemaKeyDefaultValue;
  }
})();;
;


define("addons/splashscreen/loaded",[],function(){return function(a){return{generate:function(a,b){try{var c=document.getElementsByClassName("_joshfire_factory_splashscreen");c&&c.length&&(c[0].style.opacity="0",setTimeout(function(){c[0].style.display="none"},700))}catch(d){}b()}}}});/**
 * @fileOverview Exposes the getDataSource method that returns datasource
 * objects to the Joshfire.factory global object.
 *
 * Datasource objects returned by the getDataSource method may in turn be
 * used to retrieve feeds. The datasource may either run locally (client-side)
 * or through the data proxy.
 *
 * The code requires the following global objects to be available:
 * - window.Joshfire.factory (code uses Joshfire.factory.config)
 * - require
 *
 * Note the call to "require" runs synchronously on purpose to ensure
 * "Joshfire.factory.getDataSource" remains synchronous. The code of
 * "datajslib!collection" is included in the bootstrap script
 * and is pretty small, so that should not create any problematic delay.
 */


(function (factory, require) {
  /**
   * Returns a datasource object that may be used to retrieve feed items
   * for the given datasource input name.
   *
   * The "options" parameter lets the caller select a child datasource
   * within a multiple datasource if needed (through the "child" option),
   * and parametrize the execution of the datasource (through the "params"
   * option).
   *
   * Parametrization uses a Mustache-like search-and-replace algorithm to
   * propagate parameters throughout the datasource graph. This mechanism
   * gives application templates some means to derive new datasources from
   * existing ones without having to know anything about how the datasource
   * got constructed. Obviously, parametrization requires that the author of
   * the datasource sets the right parameters hooks in the configuration of
   * his datasource (using e.g. "{{category}}" to set a hook for a "category"
   * param).
   *
   * Note parametrization is restricted to string parameters. In other words,
   * one cannot define an integer as a parameter for the time being.
   *
   * @function
   * @param {String} name The name of the datasource input, as defined in the
   *  template's manifest file (package.json)
   * @param {Object} options Query options. Set the "child" option to the index
   *  of a child datasource within a multiple to only return that child
   *  datasource. Set the "params" option to a set of key-value pairs to have
   *  the datasource parametrized accordingly.
   * @return {Object} A datasource object that exposes a "find" method,
   *  null when the datasource cannot be found,
   *  a dummy "empty" datasource when the datasource is defined but does
   *  not target any real datasource.
   */
  var getDataSource = function (name, options) {
    var ds = null;
    var ret = null;
    var i = 0;

    // Check parameters
    if (!name ||
      !factory ||
      !factory.config ||
      !factory.config.datasources ||
      !factory.config.datasources[name]) {
      return null;
    }

    options = options || {};

    // Retrieve the definition of the datasource from the app config
    ds = factory.config.datasources[name];

    // Update the definition of the datasource with parameters
    // (note we'll create a copy of the original parameters)
    if (options.params) {
      ds = setParameters(ds, options.params);
    }

    require(['datajslib!collection'], function (collectionFactory) {
      if (Object.prototype.toString.call(ds) === '[object Array]') {
        // The datasource is actually a set of datasources.
        if (typeof options.child !== 'undefined') {
          // User requested a particular child datasource within that set
          ret = collectionFactory.getCollection(ds[options.child]);
          ret.name = ds[options.child].name;
          ret.config = ds[options.child];
        }
        else {
          // The "find" method returns a feed whose items are the feeds
          // returned by the underlying datasources. In particular, it
          // does not return the union of the feeds returned by the
          // underlying datasources.
          ret = {
            children: [],
            find: function (options, callback) {
              var pending = ds.length;
              var errorCaught = false;
              var entries = [];
              var i = 0;

              // Callback called as soon as a "find" returns, calls the final
              // callback when all collections have been retrieved.
              var cb = function (err, data) {
                pending -= 1;
                if (errorCaught) {
                  // Error already caught, do nothing
                  return;
                }
                if (err) {
                  errorCaught = true;
                }
                if (data) {
                  entries.push(data);
                }
                if (err || (pending === 0)) {
                  return callback(err, { entries: entries });
                }
              };

              for (i = 0; i < ret.children.length; i++) {
                ret.children[i].find(options, cb);
              }
            }
          };

          // Expose the underlying datasources in the "children" property
          // of the returned object.
          for (i = 0; i < ds.length; i++) {
            // A multiple datasource may contain "null" elements depending
            // on whether the user entered all datasources or not
            ret.children[i] = collectionFactory.getCollection(ds[i]);
            ret.children[i].name = ds[i].name;
            ret.children[i].config = ds[i];
          }
        }
      }
      else {
        ret = collectionFactory.getCollection(ds);
        ret.name = ds.name;
        ret.config = ds;
      }
    }, null, true);
    // The "true" flag above forces require to load the code synchronously
    // (see note in fileoverview)

    return ret;
  };


  /**
   * Internal function that propagates the given set of parameters through
   * the datasource graph configuration. The function returns a copy of the
   * datasource where all occurrences of the parameters have been replaced
   * by the provided values.
   *
   * Note the function operates on a JSON serialization of the datasource.
   * This should work well because templates use a Mustache-like syntax such
   * as "{{category}}" which typically cannot appear in regular code within a
   * JSON string.
   *
   * @function
   * @param {Object} datasource The datasource configuration to update
   * @param {Object} params The set of key-value parameters to propagate
   * @return A copy of the datasource where parameters have been replaced
   *  with the requested values
   */
  var setParameters = function (datasource, params) {
    if (!datasource) return null;

    // Escape a parameter name for use in a regular expression
    var escape = function (str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    };

    // Replace parameters
    var param = 0;
    var str = JSON.stringify(datasource, null, 2);
    var re = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        re = new RegExp('{{' + escape(param) + '}}', 'g');
        str = str.replace(re, params[param]);
      }
    }

    return JSON.parse(str);
  };


  // Expose the "getDataSource" method to Joshfire.factory
  factory.getDataSource = getDataSource;
})(window.Joshfire.factory, require);
/**
 * @fileOverview Expose the "getThumbnail" and "getThumbnailUrl" utils modules
 * returned by the data server to the global scope in Joshfire.schemaio.utils
 *
 * Notes:
 * - the "true" flag used in the call to "require" below forces the code to
 * load the module synchronously. That is possible because the bootstrap script
 * contains everything that is needed for that.
 * - even though getThumbnailUrl wraps around getThumbnail, an add-on such
 * as "thumbnail" that wants to override "getThumbnail" also needs to override
 * "getThumbnailUrl" because the wrapping is done at the AMD level within the
 * code returned by the data server.
 */
/*global Joshfire, require*/
(function (require, Joshfire) {
  require([
    'datajslib!utils/getthumbnail',
    'datajslib!utils/getthumbnailurl'
  ], function (getThumbnail, getThumbnailUrl) {
    Joshfire.schemaio = Joshfire.schemaio || {};
    Joshfire.schemaio.utils = Joshfire.schemaio.utils || {};
    Joshfire.schemaio.utils.getThumbnail = getThumbnail;
    Joshfire.schemaio.utils.getThumbnailUrl = getThumbnailUrl;
  }, null, true);
})(require, Joshfire);/**
 * @fileoverview Exposes the getAddOns method that returns the list of
 * add-ons installed in the application.
 *
 * AddOn objects returned by the Joshfire.factory.getAddOns method may
 * in turn be used to apply the add-ons. Add-ons are typically
 * associated with one or more hooks.
 *
 * Apart from hooks that are applied to generate the application
 * (e.g. "startfile", "bootstrapfile"), the other hooks need to be
 * explicitly called by the template, meaning the template needs to
 * include code such as:
 *  var addons = Joshfire.factory.getAddOns('item');
 *  addons.render('#addons', function () { ... });
 *
 * The render method on the returned list of add-ons is the easiest way
 * to apply add-ons but templates may want to control add-ons individually,
 * calling "render" themselves, or "generate/enhance", or calling
 * the "startActivity" method and taking care of the rest.
 */


(function (factory, require) {

  /**
   * Short helper function that returns the DOM element
   * that matches the given selector or the given parameter
   * if it already is a DOM element.
   *
   * The function delegates to document.querySelector if available,
   * or takes for granted that the selector is an ID otherwise
   * (if we really bump into problems with browsers that do not
   * support document.querySelector, we'll have to include Sizzle)
   */
  var getElement = function (selector) {
    selector = selector ||
      document.getElementById('body') ||
      document.documentElement;
    if (Object.prototype.toString.call(selector) === '[object String]') {
      if (document.querySelector) {
        return document.querySelector(selector);
      }
      else {
        return document.getElementById(selector);
      }
    }
    else {
      // Happens when the selector is already a DOM element
      return selector;
    }
  };


  /**
   * Returns the list of add-ons registered for the given hook.
   *
   * @function
   * @param {String} hook The add-on hook the template is interesting in
   */
  var getAddOns = function (hook) {
    var addons = [];
    var addon = null;
    var i, k;
    var res = [];

    // Check parameters
    if (!hook) return [];

    // Retrieve the definition of the add-ons from the app config
    addons = factory.config.addons || [];

    // Add-on configuration properties:
    // - name: the name of the add-on, to be used for the require calls
    // - options: the add-on configuration parameters set by the Factory user
    // - hooks: the list of hooks for which the add-on has been registered
    // - action: the add-on action intent
    for (i = 0; i < addons.length; i++) {
      addon = addons[i];
      for (k = 0; k < addon.hooks.length; k++) {
        if (hook === addon.hooks[k]) {
          res.push(new AddOn(addon, hook));
          break;
        }
      }
    }

    /**
     * Renders all add-ons.
     *
     * Each add-on is wrapped in a containing <div> to ease insertion
     * in the DOM at the appropriate position.
     *
     * @function
     * @param {Object|String} el The DOM Element or DOM element selector
     *   for the element that is to contain the resulting HTML
     * @param {Object} options Context options (data and dataEl in particular)
     * @param {function} callback Callback function called once done, with
     *   an eventual error.
     */
    res.run = res.render = function (el, options, callback) {
      var idx = 0;
      var container = getElement(el);
      var error = null;
      callback = callback || function () { return; };

      var counter = 0;
      var addonRendered = function (err) {
        // (Note we'll only report on the last error)
        if (err) error = err;

        // Run callback when done rendering all items
        counter += 1;
        if (counter === res.length) {
          return callback(error);
        }
      };

      // Ensure add-ons will append themselves to the given element
      options = options || {};
      if (options['replaceContent']) {
        delete options['replaceContent'];
      }

      for (idx=0; idx<res.length; idx++) {
        res[idx].render(container, options, addonRendered);
      }
    };


    /**
     * Runs the user intent.
     *
     * The function runs the first add-on in the list, as running more than
     * one add-on does not mean much.
     *
     * TODO: implement some sort of add-on picker
     *
     * @function
     */
    res.startActivity = function (intent, onSuccess, onFailure) {
      intent = intent || {};
      onSuccess = onSuccess || function () { return; };
      onFailure = onFailure || function () { return; };
      if (res.length > 0) {
        res[0].startActivity(intent, onSuccess, onFailure);
      }
      else if (onFailure) {
        return onFailure('No installed add-on for the given intent');
      }
    };

    return res;
  };


  /**
   * Add-on class definition
   *
   * @class
   */
  var AddOn = function (config, hook) {
    var self = this;
    var _loaded = false;
    var _loadedCallbacks = [];

    /**
     * Runs the function when the add-on is loaded.
     * @function
     * @param {function} f Function to execute. The function won't receive
     *  any parameter.
     *
     * @private
     */
    var onLoaded = function (f) {
      if (!_loaded) {
        _loadedCallbacks.push(f);
      } else {
        f();
      }
    };


    /**
     * The Add-on definition in the bootstrap script
     *
     * @property {String}
     */
    this.config = config;


    /**
     * The Add-on intent action
     *
     * @property {String}
     */
    this.intent = config.intent;


    /**
     * Render the add-on within the given DOM element.
     *
     * Internally, this function calls generate, setContent and enhance
     * of the underlying add-on object, when loaded.
     *
     * The generated HTML is wrapped in a containing <div> and appended to
     * the end of the given element, unless the options parameter sets the
     * "replaceContent" flag. If the flag is set, the function directly
     * sets the generated HTML as content of the given element.
     *
     * @function
     * @param {Object|String} el The DOM Element or DOM element selector
     *   for the element that is to contain the resulting HTML
     * @param {function} callback Callback function called once done, with
     *   an eventual error.
     */
    this.run = this.render = function (el, options, callback) {
      options = options || {};
      callback = callback || function () { return; };
      onLoaded(function () {
        if (!self.addon) return callback('Add-on not available');
        if (!self.addon.generate) {
          return callback('Invalid add-on, no generate function');
        }
        var domEl = getElement(el);
        var containerEl = domEl;
        self.addon.generate(options, function (err, html) {
          if (err) return callback(err);
          if (html) {
            if (options.replaceContent) {
              self.setContent(containerEl, html);
            }
            else {
              containerEl = document.createElement('div');
              self.setContent(containerEl, html);
              domEl.appendChild(containerEl);
            }
            if (self.addon.enhance) {
              self.addon.enhance(containerEl, options);
            }
          }
          else if (options.replaceContent) {
            self.setContent(containerEl, '');
          }
          return callback();
        });
      });
    };

    /**
     * Generates the HTML for the add-on.
     *
     * @function
     * @param {Object} options Context options. The template should typically
     *  set the "data" property to the item or list that triggered the hook,
     *  as well as the "dataEl" property to the HTML element that renders
     *  the item or list if it is available.
     * @param {function} callback Callback function called once generation
     *  is over.
     */
    this.generate = function (options, callback) {
      options = options || {};
      callback = callback || function () { return; };
      onLoaded(function () {
        if (!self.addon) return callback('Add-on not available');
        if (!self.addon.generate) {
          return callback('Invalid add-on, no generate function');
        }
        self.addon.generate(options, callback);
      });
    };

    /**
     * Inserts the generated HTML content in the DOM.
     *
     * The function takes care of running eventual scripts when necessary.
     * It is a simplified version of jQuery's "append" method.
     *
     * The function is synchronous but note that, if the add-on inserts a
     * script, the script may load and/or run asynchronous, so there is
     * no guarantee that execution will be over when this function returns.
     *
     * @function
     * @param {Object|String} el The DOM Element or DOM element selector
     *   for the element that is to contain the resulting HTML
     * @param {String} html The HTML fragment to insert in the DOM
     */
    this.setContent = function (el, html) {
      var container = getElement(el);
      container.innerHTML = ('' + html).trim();

      function traverseNode (node, fun) {
        fun(node);
        for (var key in node.childNodes) {
          traverseNode(node.childNodes[key], fun);
        }
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
      }
      function evalScript(elem) {
        var data = ( elem.text || elem.textContent || elem.innerHTML || "" );
        var src = elem.getAttribute('src');

        var head = document.getElementsByTagName("head")[0] ||
          document.documentElement;
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (src) script.setAttribute('src', src);
        if (data) script.appendChild(document.createTextNode(data));
        head.insertBefore(script, head.firstChild);
        if (elem.parentNode) {
          // Remove the script from its initial position
          elem.parentNode.removeChild(elem);
        }
      }

      var scripts = [];
      var script = null;

      traverseNode(container, function (node) {
        if (node.nodeName &&
          (node.nodeName.toUpperCase() === 'SCRIPT') &&
          (!node.type || node.type === 'text/javascript')) {
          scripts.push(node);
        }
      });

      for (script in scripts) {
        evalScript(scripts[script]);
      }
    };

    /**
     * Enhance the HTML content generated by the add-on and inserted in the
     * DOM tree with e.g. event handlers.
     *
     * Note this function should only be called after a call to "generate",
     * meaning that the underlying add-on is de facto already loaded. In
     * other terms, the function remains synchronous and there is no need
     * to call "onLoaded".
     *
     * @function
     * @param {Object|String} el The DOM Element, jQuery element or selector
     *   of the DOM element that contains the HTML block generated by the
     *   add-on.
     * @param {Object} options Context options. The template should typically
     *  set the "data" property to the item or list that triggered the hook,
     *  as well as the "dataEl" property to the HTML element that renders
     *  the item or list if it is available.
     */
    this.enhance = function (el, options) {
      options = options || {};
      if (!this.addon) return;
      if (!this.addon.enhance) return;
      var domEl = getElement(el);
      this.addon.enhance(domEl, options);
    };


    /**
     * Function called by the template for user intent hook handlers.
     *
     * @function
     * @param {Object} intent User intent.
     * @param {function} onSuccess Callback method called upon success
     * @param {function} onFailure Callback method called upon failure
     */
    this.startActivity = function (intent, onSuccess, onFailure) {
      intent = intent || {};
      onSuccess = onSuccess || function () { return; };
      onFailure = onFailure || function () { return; };
      onLoaded(function () {
        if (!self.addon) return onFailure('Add-on not available');
        if (!self.addon.startActivity)
          return onFailure('Add-on does not implement a startActivity function');
        self.addon.startActivity(intent, onSuccess, onFailure);
      });
    };

    // Time to load the add-on
    require(['addons/' + this.config.name + '/' + hook], function (getAddOn) {
      self.addon = getAddOn({
        options:self.config.options || {},
        deploy:Joshfire.factory.config.deploy
      });

      // Trigger the onloaded event
      _loaded = true;
      for (var i=0,l=_loadedCallbacks.length; i <l; i++) {
        _loadedCallbacks.pop()();
      }
    });
  };

  // Expose the "getAddOns" method to Joshfire.factory
  factory.getAddOns = getAddOns;
})(window.Joshfire.factory, require);
})();
>>>>>>> dc27ff65b8d8c4f1b2f020a4b15555fe373d79e5
