(function(f,h,j,b){var d=function(n){var m=n.length;var l=f("head");while(m--){if(l.has("."+n[m]).length===0){l.append('<meta class="'+n[m]+'" />')}}};d(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]);f(function(){if(typeof FastClick!=="undefined"){if(typeof j.body!=="undefined"){FastClick.attach(j.body)}}});var e=function(m,n){if(typeof m==="string"){if(n){var l;if(n.jquery){l=n[0];if(!l){return n}}else{l=n}return f(l.querySelectorAll(m))}return f(j.querySelectorAll(m))}return f(m,n)};var k=function(m){var l=[];if(!m){l.push("data")}if(this.namespace.length>0){l.push(this.namespace)}l.push(this.name);return l.join("-")};var g=function(o){var n=o.split("-"),m=n.length,l=[];while(m--){if(m!==0){l.push(n[m])}else{if(this.namespace.length>0){l.push(this.namespace,n[m])}else{l.push(n[m])}}}return l.reverse().join("-")};var a=function(o,m){var l=this,n=!e(this).data(this.attr_name(true));if(typeof o==="string"){return this[o].call(this,m)}if(e(this.scope).is("["+this.attr_name()+"]")){e(this.scope).data(this.attr_name(true)+"-init",f.extend({},this.settings,(m||o),this.data_options(e(this.scope))));if(n){this.events(this.scope)}}else{e("["+this.attr_name()+"]",this.scope).each(function(){var p=!e(this).data(l.attr_name(true)+"-init");e(this).data(l.attr_name(true)+"-init",f.extend({},l.settings,(m||o),l.data_options(e(this))));if(p){l.events(this)}})}};var c=function(n,o){function l(){o(n[0])}function m(){this.one("load",l);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var q=this.attr("src"),p=q.match(/\?/)?"&":"?";p+="random="+(new Date()).getTime();this.attr("src",q+p)}}if(!n.attr("src")){l();return}if(n[0].complete||n[0].readyState===4){l()}else{m.call(n)}};h.matchMedia=h.matchMedia||(function(p){var n,l=p.documentElement,m=l.firstElementChild||l.firstChild,o=p.createElement("body"),q=p.createElement("div");q.id="mq-test-1";q.style.cssText="position:absolute;top:-100em";o.style.background="none";o.appendChild(q);return function(r){q.innerHTML='&shy;<style media="'+r+'"> #mq-test-1 { width: 42px; }</style>';l.insertBefore(o,m);n=q.offsetWidth===42;l.removeChild(o);return{matches:n,media:r}}}(j));(function(n){var l,o=0,s=["webkit","moz"],r=h.requestAnimationFrame,q=h.cancelAnimationFrame,m="undefined"!==typeof jQuery.fx;for(;o<s.length&&!r;o++){r=h[s[o]+"RequestAnimationFrame"];q=q||h[s[o]+"CancelAnimationFrame"]||h[s[o]+"CancelRequestAnimationFrame"]}function p(){if(l){r(p);if(m){jQuery.fx.tick()}}}if(r){h.requestAnimationFrame=r;h.cancelAnimationFrame=q;if(m){jQuery.fx.timer=function(t){if(t()&&jQuery.timers.push(t)&&!l){l=true;p()}};jQuery.fx.stop=function(){l=false}}}else{h.requestAnimationFrame=function(w){var t=new Date().getTime(),u=Math.max(0,16-(t-o)),v=h.setTimeout(function(){w(t+u)},u);o=t+u;return v};h.cancelAnimationFrame=function(t){clearTimeout(t)}}}(jQuery));function i(l){if(typeof l==="string"||l instanceof String){l=l.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")}return l}h.Foundation={name:"Foundation",version:"5.2.3",media_queries:{small:e(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:e(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:e(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:e(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:e(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:f("<style></style>").appendTo("head")[0].sheet,global:{namespace:b},init:function(p,m,s,o,l){var n=[p,s,o,l],q=[];this.rtl=/rtl/i.test(e("html").attr("dir"));this.scope=p||this.scope;this.set_namespace();if(m&&typeof m==="string"&&!/reflow/i.test(m)){if(this.libs.hasOwnProperty(m)){q.push(this.init_lib(m,n))}}else{for(var r in this.libs){q.push(this.init_lib(r,m))}}return p},init_lib:function(m,l){if(this.libs.hasOwnProperty(m)){this.patch(this.libs[m]);if(l&&l.hasOwnProperty(m)){if(typeof this.libs[m].settings!=="undefined"){f.extend(true,this.libs[m].settings,l[m])}else{if(typeof this.libs[m].defaults!=="undefined"){f.extend(true,this.libs[m].defaults,l[m])}}return this.libs[m].init.apply(this.libs[m],[this.scope,l[m]])}l=l instanceof Array?l:new Array(l);return this.libs[m].init.apply(this.libs[m],l)}return function(){}},patch:function(l){l.scope=this.scope;l.namespace=this.global.namespace;l.rtl=this.rtl;l.data_options=this.utils.data_options;l.attr_name=k;l.add_namespace=g;l.bindings=a;l.S=this.utils.S},inherit:function(o,m){var l=m.split(" "),n=l.length;while(n--){if(this.utils.hasOwnProperty(l[n])){o[l[n]]=this.utils[l[n]]}}},set_namespace:function(){var l=(this.global.namespace===b)?f(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=(l===b||/false/i.test(l))?"":l},libs:{},utils:{S:e,throttle:function(m,l){var n=null;return function(){var p=this,o=arguments;if(n==null){n=setTimeout(function(){m.apply(p,o);n=null},l)}}},debounce:function(o,n,m){var p,l;return function(){var t=this,s=arguments;var r=function(){p=null;if(!m){l=o.apply(t,s)}};var q=m&&!p;clearTimeout(p);p=setTimeout(r,n);if(q){l=o.apply(t,s)}return l}},data_options:function(n,q){q=q||"options";var l={},t,m,v,s=function(w){var p=Foundation.global.namespace;if(p.length>0){return w.data(p+"-"+q)}return w.data(q)};var r=s(n);if(typeof r==="object"){return r}v=(r||":").split(";");t=v.length;function u(p){return !isNaN(p-0)&&p!==null&&p!==""&&p!==false&&p!==true}function o(p){if(typeof p==="string"){return f.trim(p)}return p}while(t--){m=v[t].split(":");m=[m[0],m.slice(1).join(":")];if(/true/i.test(m[1])){m[1]=true}if(/false/i.test(m[1])){m[1]=false}if(u(m[1])){if(m[1].indexOf(".")===-1){m[1]=parseInt(m[1],10)}else{m[1]=parseFloat(m[1])}}if(m.length===2&&m[0].length>0){l[o(m[0])]=o(m[1])}}return l},register_media:function(m,l){if(Foundation.media_queries[m]===b){f("head").append('<meta class="'+l+'">');Foundation.media_queries[m]=i(f("."+l).css("font-family"))}},add_custom_rule:function(n,m){if(m===b&&Foundation.stylesheet){Foundation.stylesheet.insertRule(n,Foundation.stylesheet.cssRules.length)}else{var l=Foundation.media_queries[m];if(l!==b){Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[m]+"{ "+n+" }")}}},image_loaded:function(l,o){var m=this,n=l.length;if(n===0){o(l)}l.each(function(){c(m.S(this),function(){n-=1;if(n===0){o(l)}})})},random_str:function(){if(!this.fidx){this.fidx=0}this.prefix=this.prefix||[(this.name||"F"),(+new Date).toString(36)].join("-");return this.prefix+(this.fidx++).toString(36)}}};f.fn.foundation=function(){var l=Array.prototype.slice.call(arguments,0);return this.each(function(){Foundation.init.apply(Foundation,[this].concat(l));return this})}}(jQuery,window,window.document));