var forbes=(function(app){if(typeof app.initialized=="undefined"){app.initialized=false;}app.bootstrap=(function(){var $=null,debug=null,_init_callbacks=[],_lazy_callbacks=[];function _init(){if(app.initialized){return false;}if(forbes.util.debug){debug=forbes.util.debug;}$=jQuery;for(var i=0;i<_init_callbacks.length;i++){_init_callbacks[i]();}_lazy_load_scripts();app.initialized=true;}function _register(callback){_init_callbacks.push(callback);}function _register_lazy_callback(callback){_lazy_callbacks.push(callback);}function _lazy_load_scripts(){var $script_packages=$("span.lazy_load_js");if($script_packages.length<1){return false;}$script_packages.each(function(){var $this=$(this);if(typeof $this.data("files")=="undefined"||$this.data("files")=="undefined"){return true;}var scripts_array=_convert_comma_delimited_string_to_array($this.data("files"));$LAB.script(scripts_array).wait(function(){_fire_lazy_load_callbacks();});});}function _fire_lazy_load_callbacks(){if(_lazy_callbacks.length<1){return false;}for(var i=0;i<_lazy_callbacks.length;i++){_lazy_callbacks[i]();}}function _convert_comma_delimited_string_to_array(string){var return_array=new Array(string);if(string.indexOf(",")!=-1){return_array=string.split(",");}return return_array;}return{init:_init,register:_register,lazy_load_scripts:_lazy_load_scripts,register_lazy_callback:_register_lazy_callback};}());return app;}(forbes||{}));window.Modernizr=function(a,b,c){function A(a){j.cssText=a;}function B(a,b){return A(m.join(a+";")+(b||""));}function C(a,b){return typeof a===b;}function D(a,b){return !!~(""+a).indexOf(b);}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c){return b=="pfx"?e:!0;}}return !1;}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c){return d===!1?a[e]:C(f,"function")?f.bind(d||b):f;}}return !1;}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c));}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10)){while(d--){j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);}}return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i;},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b);}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined");},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function"){throw new TypeError;}var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f;}return c.apply(b,d.concat(v.call(arguments)));};return e;}),r.canvas=function(){var a=b.createElement("canvas");return !!a.getContext&&!!a.getContext("2d");},r.canvastext=function(){return !!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function");},r.touch=function(){var c;return"ontouchstart" in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9;}),c;},r.geolocation=function(){return"geolocation" in navigator;},r.history=function(){return !!a.history&&!!history.pushState;},r.cssanimations=function(){return G("animationName");},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return A((a+"-webkit- ".split(" ").join(b+a)+m.join(c+a)).slice(0,-a.length)),D(j.backgroundImage,"gradient");},r.csstransforms=function(){return !!G("transform");},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective" in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3;}),a;},r.csstransitions=function(){return G("transition");},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"");}}catch(d){}return c;},r.svg=function(){return !!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect;},r.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==q.svg;},r.svgclippaths=function(){return !!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(q.svg,"clipPath")));};for(var H in r){z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));}return e.addTest=function(a,b){if(typeof a=="object"){for(var d in a){z(a,d)&&e.addTest(d,a[d]);}}else{a=a.toLowerCase();if(e[a]!==c){return e;}b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b;}return e;},A(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return E([a]);},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e;}(this,this.document),function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild);}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a;}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b;}function n(a,c,f){c||(c=b);if(j){return c.createElement(a);}f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g;}function o(a,c){a||(a=b);if(j){return a.createDocumentFragment();}c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++){d.createElement(f[e]);}return d;}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c);},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")';})+");return n}")(r,b.frag);}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a;}function v(a){var b,c=a.getElementsByTagName("*"),d=c.length,e=RegExp("^(?:"+l().join("|")+")$","i"),f=[];while(d--){b=c[d],e.test(b.nodeName)&&f.push(b.applyElement(w(b)));}return f;}function w(a){var b,c=a.attributes,d=c.length,e=a.ownerDocument.createElement(t+":"+a.nodeName);while(d--){b=c[d],b.specified&&e.setAttribute(b.nodeName,b.nodeValue);}return e.style.cssText=a.style.cssText,e;}function x(a){var b,c=a.split("{"),d=c.length,e=RegExp("(^|[\\s,>+~])("+l().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),f="$1"+t+"\\:$2";while(d--){b=c[d]=c[d].split("}"),b[b.length-1]=b[b.length-1].replace(e,f),c[d]=b.join("}");}return c.join("{");}function y(a){var b=a.length;while(b--){a[b].removeNode();}}function z(a){function g(){clearTimeout(d._removeSheetTimer),b&&b.removeNode(!0),b=null;}var b,c,d=m(a),e=a.namespaces,f=a.parentWindow;return !u||a.printShived?a:(typeof e[t]=="undefined"&&e.add(t),f.attachEvent("onbeforeprint",function(){g();var d,e,f,h=a.styleSheets,i=[],j=h.length,l=Array(j);while(j--){l[j]=h[j];}while(f=l.pop()){if(!f.disabled&&s.test(f.media)){try{d=f.imports,e=d.length;}catch(m){e=0;}for(j=0;j<e;j++){l.push(d[j]);}try{i.push(f.cssText);}catch(m){}}}i=x(i.reverse().join("")),c=v(a),b=k(a,i);}),f.attachEvent("onafterprint",function(){y(c),clearTimeout(d._removeSheetTimer),d._removeSheetTimer=setTimeout(g,500);}),a.printShived=!0,a);}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden" in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined";}();}catch(c){f=!0,j=!0;}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b);var s=/^$|\b(?:all|print)\b/,t="html5shiv",u=!j&&function(){var c=b.documentElement;return typeof b.namespaces!="undefined"&&typeof b.parentWindow!="undefined"&&typeof c.applyElement!="undefined"&&typeof c.removeNode!="undefined"&&typeof a.attachEvent!="undefined";}();r.type+=" print",r.shivPrint=z,z(b);}(this,document),function(a,b,c){function d(a){return"[object Function]"==o.call(a);}function e(a){return"string"==typeof a;}function f(){}function g(a){return !a||"loaded"==a||"complete"==a||"uninitialized"==a;}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1);},0):(a(),h()):q=0;}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l);},50);for(var d in y[c]){y[c].hasOwnProperty(d)&&y[c][d].onload();}}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r);},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l));}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this;}function k(){var a=B;return a.loader={load:j,i:0},a;}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance" in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a);},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a;}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++){g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));}for(f=0;f<b;f++){c=x[f](c);}return c;}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2;})));}function h(a,b){function c(a,c){if(a){if(e(a)){c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l();}),g(a,j,b,0,h);}else{if(Object(a)===a){for(n in m=function(){var b=0,c;for(c in a){a.hasOwnProperty(c)&&b++;}return b;}(),a){a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l();}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l();};}(k[n])),g(a[n],j,b,n,h));}}}}else{!c&&l();}}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i);}var i,j,l=this.yepnope.loader;if(e(a)){g(a,0,l,0);}else{if(w(a)){for(i=0;i<a.length;i++){j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);}}else{Object(a)===a&&h(a,l);}}},B.addPrefix=function(a,b){z[a]=b;},B.addFilter=function(a){x.push(a);},B.errorTimeout=10000,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete";},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d){k.setAttribute(o,d[o]);}c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null);},m(function(){l||(l=1,c(1));},e),i?k.onload():n.parentNode.insertBefore(k,n);},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d){e.setAttribute(j,d[j]);}g||(n.parentNode.insertBefore(e,n),m(c,0));};}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};(function(){if(typeof forbes==="undefined"){forbes={};}if(typeof forbes.fast_pixel==="undefined"){forbes.fast_pixel={};}forbes.fast_pixel.initialized=true;var message={fps:get_cookie(),op:get_message_type(),sh:get_screen_height(),sw:get_screen_width(),ch:get_channel(),se:get_section(),ti:get_companies(),pt:get_page_type(),i:get_page_id(),su:get_url(),re:get_referrer(),au:get_author(),at:get_author_type(),pa:get_partner(),ts:get_timestamp(),rn:get_random()};var welcome_ad_url="http://www.forbes.com/fdc/welcome_mjx.shtml";var welcome_ad_ref_cookie="wg_originalReferrer";if(!get_preview()){drop_pixels(build_fast_request_url(message));}function build_fast_request_url(message_object){var request_url="http://fast.forbes.com/fps/cookie_backup.php?";var item_counter=0;for(item_key in message_object){if(message_object.hasOwnProperty(item_key)){if(item_counter>0){request_url=request_url+"&";}if(null!==message_object[item_key]){request_url=request_url+item_key+"="+message_object[item_key];}else{request_url=request_url+item_key+"=";}item_counter++;}}return request_url;}function drop_pixels(request_urls){if("object"!==typeof request_urls&&"string"!==typeof request_urls){return;}if("string"===typeof request_urls){request_urls=[request_urls];}if(request_urls.length<1){return;}if(typeof last_url==="undefined"){last_url="xyz";}var regex=/su=(.*?)&/;var results=regex.exec(request_urls);if(last_url==results[1]){return;}last_url=results[1];var i=0;for(i=0;i<request_urls.length;i++){var image_to_append=document.createElement("img");image_to_append.src=request_urls[i];}}function get_message_type(){return"user_msg";}function get_screen_height(){if("undefined"!==typeof window.screen){return window.screen.height;}else{return null;}}function get_screen_width(){if("undefined"!==typeof window.screen){return window.screen.width;}else{return null;}}function get_channel(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.channel){return forbes.page_meta.channel;}else{if("undefined"!==typeof window.displayedChannel){return window.displayedChannel;}else{return null;}}}function get_section(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.section){return forbes.page_meta.section;}else{if("undefined"!==typeof window.displayedSection){return window.displayedSection;}else{return null;}}}function get_author(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.author&&"undefined"!==typeof forbes.page_meta.author.natural_id){return forbes.page_meta.author.natural_id;}else{var author_byline=get_meta_from_dom("author");if(author_byline!==null&&author_byline!==""){return author_byline;}else{return null;}}}function get_author_type(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.author&&"undefined"!==typeof forbes.page_meta.author.type){return forbes.page_meta.author.type;}else{return null;}}function get_companies(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.entities&&"undefined"!==typeof forbes.page_meta.entities.companies){return forbes.page_meta.entities.companies.join(",");}else{if("undefined"!==typeof window.cTicker&&"undefined"!==typeof window.displayedSection&&window.displayedSection==="companytearsheets"){return window.cTicker;}else{return null;}}}function get_url(){var url_to_return=get_canonical_url();if(null===url_to_return){if("undefined"!==typeof window.location){return window.location.protocol+"//"+window.location.hostname+window.location.pathname;}else{return null;}}else{return url_to_return;}}function get_canonical_url(){linkElements=document.getElementsByTagName("link");var i=0;for(i=0;i<linkElements.length;i++){if(linkElements[i].getAttribute("rel")==="canonical"){return linkElements[i].getAttribute("href");}}return null;}function get_referrer(){var referrer;if(typeof forbes!="undefined"&&typeof forbes.page_meta!="undefined"&&typeof forbes.page_meta.referrer!="undefined"&&forbes.page_meta.referrer!=""){referrer=forbes.page_meta.referrer;}else{referrer=document.referrer;}if(referrer&&referrer.match(/^(?!http:\/\/(.[^/]+)\.forbes\.com)http(s)?:\/\/(.[^/:]+)/)){return referrer.match(/^http(s)?:\/\/(.[^/:]+)/)[2];}else{if(referrer&&welcome_ad_url===referrer&&document.cookie.indexOf(welcome_ad_ref_cookie+"")!==-1&&window.wg_extdom&&wg_extdom){return document.cookie.match(wg_originalReferrer+"=http(s)?://(.[^/:]+)(;|$)")[1];}}return null;}function get_page_type(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.type){return forbes.page_meta.type;}else{if("undefined"!==typeof window.pageType){return window.pageType;}else{return null;}}}function get_page_id(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.natural_id){return forbes.page_meta.natural_id;}else{return null;}}function get_partner(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.partner_id){return forbes.page_meta.partner_id;}else{var partner=get_query_parameter("partner");if("null"!==typeof partner){return partner;}else{return null;}}}function get_preview(){if("undefined"!==typeof forbes&&"undefined"!==typeof forbes.page_meta&&"undefined"!==typeof forbes.page_meta.preview){return forbes.page_meta.preview;}else{return false;}}function get_timestamp(){return new Date().getTime();}function get_random(){return Math.floor(Math.random()*10000000000000);}function get_query_parameter(param_to_get){var query_params=window.location.search.substring(1).split("&");var i=0;for(i=0;i<query_params.length;i++){var param_key_val=query_params[i].split("=");if(param_key_val[0]===param_to_get){return param_key_val[1];}}return null;}function get_cookie(){if("function"===typeof getStandaloneCookie){return getStandaloneCookie("fps");}else{return null;}}function get_meta_from_dom(property_to_get){if("undefined"===typeof property_to_get){return null;}var meta_tags=document.getElementsByTagName("meta");var i=0;for(i=0;i<meta_tags.length;i++){if(("undefined"!==typeof meta_tags[i].name&&meta_tags[i].name===property_to_get)||("undefined"!==meta_tags[i].getAttribute("property")&&meta_tags[i].getAttribute("property")==property_to_get)){return meta_tags[i].content;}}}function add_onload_event(new_onload){var old_onload=window.onload;if("function"!==typeof window.onload){window.onload=new_onload;}else{window.onload=function(){if(old_onload){old_onload();}new_onload();};}}})();var forbes=(function(app){app.analytics=(function(){function _get_var(name){var namespaces=name.split("."),namespace=window;while(true){if("undefined"==typeof namespace[namespaces[0]]){if(arguments.length>1){return arguments[1];}return null;}if(namespaces.length>1){namespace=namespace[namespaces.shift()];}else{return namespace[namespaces[0]];}}}function Meta(){var meta=document.getElementsByTagName("META");this.meta={};for(var i=0;i<meta.length;i++){this.meta[meta[i].name]=meta[i].content;}}Meta.prototype.get=function(name){var response=this.meta[name];if(undefined===response){return null;}return response;};var meta;function _get_meta(name){if(undefined===meta){meta=new Meta();}return meta.get(name);}return{get_var:_get_var,get_meta:_get_meta};}());return app;}(forbes||{}));var _comscore=_comscore||[];_comscore.push({c1:"2",c2:"6872493"});(function(){var s=document.createElement("script"),el=document.getElementsByTagName("script")[0];s.async=true;s.src=(document.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";el.parentNode.insertBefore(s,el);})();var _gaq=_gaq||[];(function(){_gaq.push(["_setAccount","UA-5883199-3"]);_gaq.push(["_setDomainName",".forbes.com"]);var helper=forbes.analytics;var username=helper.get_var("forbes.user_meta.username");if(null!==username){_gaq.push(["_setCustomVar",1,"Account",username,3]);}var author=helper.get_var("forbes.page_meta.author.display_name");if(null===author){author=helper.get_meta("author");}if(null!==author){_gaq.push(["_setCustomVar",2,"Author",author,3]);}var site_slug=helper.get_var("forbes.page_meta.site_slug");if(null!==site_slug){_gaq.push(["_setCustomVar",3,"Site",site_slug,3]);}var channel=helper.get_var("forbes.page_meta.channel");if(null===channel){channel=helper.get_var("displayedChannel");}var section=helper.get_var("forbes.page_meta.section");if(null===section){section=helper.get_var("displayedSection");}if("forbeswoman"===section){channel=section;}if("markets"==channel||"personalFinance"==channel){channel="investing";}if(null!==channel){_gaq.push(["_setCustomVar",4,"Channel",channel,3]);}var special_slot=helper.get_var("forbes.page_meta.special_slot");if(null===special_slot){special_slot=helper.get_var("specialslot");}if(null!==special_slot){_gaq.push(["_setCustomVar",5,"Slot",special_slot,3]);}var referrer=helper.get_var("forbes.page_meta.referrer");if(null!==referrer){_gaq.push(["_setReferrerOverride",referrer]);}_gaq.push(["_trackPageview"]);var ga=document.createElement("script");ga.type="text/javascript";ga.async=true;ga.src=("https:"==document.location.protocol?"https://":"http://")+"stats.g.doubleclick.net/dc.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ga,s);}());pageURL=this.location.href;var _sf_startpt=(new Date()).getTime();var dataLayerFDC=dataLayerFDC||[];(function(){var helper=forbes.analytics;var author=helper.get_var("forbes.page_meta.author.display_name");if(null===author){author=helper.get_meta("author");}var site=helper.get_var("forbes.page_meta.site_slug");var channel=helper.get_var("forbes.page_meta.channel");if(null===channel){channel=helper.get_var("displayedChannel");}var section=helper.get_var("forbes.page_meta.section");if(null===section){section=helper.get_var("displayedSection");}if("forbeswoman"===section){channel=section;}if("markets"==channel||"personalFinance"==channel){channel="investing";}var special_slot=helper.get_var("forbes.page_meta.special_slot");if(null===special_slot){special_slot=helper.get_var("specialslot");}dataLayerFDC.push({author:author,site:site,channel:channel,slot:special_slot});})();(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayerFDC","GTM-NMQJM4");var amznads=amznads||{};amznads.tasks=amznads.tasks||[];amznads.asyncParams={id:"3038"};(function(){var a,s=document.getElementsByTagName("script")[0];a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="http://c.amazon-adsystem.com/aax2/amzn_ads.js";s.parentNode.insertBefore(a,s);})();window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]);(function(){function retrieve(n){var m,k="kx"+n;if(window.localStorage){return window.localStorage[k]||"";}else{if(navigator.cookieEnabled){m=document.cookie.match(k+"=([^;]*)");return(m&&unescape(m[1]))||"";}else{return"";}}}Krux.user=retrieve("user");Krux.segments=retrieve("segs")?retrieve("segs").split(","):[];var dfpp=[];if(Krux.user){dfpp.push("kuid="+Krux.user);}for(var i=0;i<Krux.segments.length;i++){dfpp.push("ksgmnt="+Krux.segments[i]);}Krux.dfppKeyValues=dfpp.length?dfpp.join(";")+";":"";})();window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]);(function(){var k=document.createElement("script");k.type="text/javascript";k.async=true;var m,src=(m=location.href.match(/\bkxsrc=([^&]+)\b/))&&decodeURIComponent(m[1]);k.src=src||(location.protocol==="https:"?"https:":"http:")+"//cdn.krxd.net/controltag?confid=Hm5iiZ1t";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(k,s);})();(function(){var s=document.createElement("script");s.async=true;s.type="text/javascript";s.src="http://js.moatads.com/2be987/moatheader.js";var node=document.getElementsByTagName("script")[0];node.parentNode.insertBefore(s,node);})();window._mNHandle=window._mNHandle||{};window._mNHandle.queue=window._mNHandle.queue||[];(function(){var m=document.createElement("script");m.async=true;m.id="mNSC";m.type="text/javascript";m.src="http://contextual.media.net/dmedianet.js?cid=8CU2T3HV4";var node=document.getElementsByTagName("script")[0];node.parentNode.insertBefore(m,node);})();(function(){var a=document,b=a.createElement("script"),a=a.getElementsByTagName("script")[0];b.type="text/javascript";b.async=!0;b.src="http://s.moatads.com/forbes949SzQW17/moatcontent.js";a.parentNode.insertBefore(b,a);})();