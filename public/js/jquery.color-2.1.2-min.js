/*! jQuery Color v@2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
(function(D,C){function r(f,e,h){var g=w[e.type]||{};return f==null?h||!e.def?null:e.def:(f=g.floor?~~f:parseFloat(f),isNaN(f)?e.def:g.mod?(f+g.mod)%g.mod:0>f?0:g.max<f?g.max:f)}function q(a){var f=y(),e=f._rgba=[];return a=a.toLowerCase(),s(z,function(b,l){var k,g=l.re.exec(a),d=g&&l.parse(g),c=l.space||"rgba";if(d){return k=f[c](d),f[x[c].cache]=k[x[c].cache],e=f._rgba=k._rgba,!1}}),e.length?(e.join()==="0,0,0,0"&&D.extend(e,t.transparent),f):t[a]}function p(e,d,f){return f=(f+1)%1,f*6<1?e+(d-e)*f*6:f*2<1?d:f*3<2?e+(d-e)*(2/3-f)*6:e}var B="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",A=/^([\-+])=\s*(\d+\.?\d*)/,z=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(b){return[b[1],b[2],b[3],b[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(b){return[b[1]*2.55,b[2]*2.55,b[3]*2.55,b[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(b){return[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(b){return[parseInt(b[1]+b[1],16),parseInt(b[2]+b[2],16),parseInt(b[3]+b[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(b){return[b[1],b[2]/100,b[3]/100,b[4]]}}],y=D.Color=function(a,h,g,f){return new D.Color.fn.parse(a,h,g,f)},x={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},w={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},v=y.support={},u=D("<p>")[0],t,s=D.each;u.style.cssText="background-color:rgba(1,1,1,.5)",v.rgba=u.style.backgroundColor.indexOf("rgba")>-1,s(x,function(d,c){c.cache="_"+d,c.props.alpha={idx:3,type:"percent",def:1}}),y.fn=D.extend(y.prototype,{parse:function(m,l,g,f){if(m===C){return this._rgba=[null,null,null,null],this}if(m.jquery||m.nodeType){m=D(m).css(l),l=C}var b=this,a=D.type(m),k=this._rgba=[];l!==C&&(m=[m,l,g,f],a="array");if(a==="string"){return this.parse(q(m)||t._default)}if(a==="array"){return s(x.rgba.props,function(d,c){k[c.idx]=r(m[c.idx],c)}),this}if(a==="object"){return m instanceof y?s(x,function(d,c){m[c.cache]&&(b[c.cache]=m[c.cache].slice())}):s(x,function(c,i){var h=i.cache;s(i.props,function(e,d){if(!b[h]&&i.to){if(e==="alpha"||m[e]==null){return}b[h]=i.to(b._rgba)}b[h][d.idx]=r(m[e],d,!0)}),b[h]&&D.inArray(null,b[h].slice(0,3))<0&&(b[h][3]=1,i.from&&(b._rgba=i.from(b[h])))}),this}},is:function(f){var e=y(f),h=!0,g=this;return s(x,function(b,i){var d,c=e[i.cache];return c&&(d=g[i.cache]||i.to&&i.to(g._rgba)||[],s(i.props,function(k,j){if(c[j.idx]!=null){return h=c[j.idx]===d[j.idx],h}})),h}),h},_space:function(){var d=[],c=this;return s(x,function(b,a){c[a.cache]&&d.push(b)}),d.pop()},transition:function(g,f){var E=y(g),o=E._space(),n=x[o],m=this.alpha()===0?y("transparent"):this,l=m[n.cache]||n.to(m._rgba),h=l.slice();return E=E[n.cache],s(n.props,function(b,G){var F=G.idx,k=l[F],j=E[F],c=w[G.type]||{};if(j===null){return}k===null?h[F]=j:(c.mod&&(j-k>c.mod/2?k+=c.mod:k-j>c.mod/2&&(k-=c.mod)),h[F]=r((j-k)*f+k,G))}),this[o](h)},blend:function(a){if(this._rgba[3]===1){return this}var h=this._rgba.slice(),g=h.pop(),f=y(a)._rgba;return y(D.map(h,function(d,c){return(1-g)*f[c]+g*d}))},toRgbaString:function(){var a="rgba(",d=D.map(this._rgba,function(e,c){return e==null?c>2?1:0:e});return d[3]===1&&(d.pop(),a="rgb("),a+d.join()+")"},toHslaString:function(){var a="hsla(",d=D.map(this.hsla(),function(e,c){return e==null&&(e=c>2?1:0),c&&c<3&&(e=Math.round(e*100)+"%"),e});return d[3]===1&&(d.pop(),a="hsl("),a+d.join()+")"},toHexString:function(a){var f=this._rgba.slice(),e=f.pop();return a&&f.push(~~(e*255)),"#"+D.map(f,function(b){return b=(b||0).toString(16),b.length===1?"0"+b:b}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),y.fn.parse.prototype=y.fn,x.hsla.to=function(M){if(M[0]==null||M[1]==null||M[2]==null){return[null,null,null,M[3]]}var L=M[0]/255,K=M[1]/255,J=M[2]/255,I=M[3],H=Math.max(L,K,J),G=Math.min(L,K,J),F=H-G,E=H+G,o=E*0.5,n,m;return G===H?n=0:L===H?n=60*(K-J)/F+360:K===H?n=60*(J-L)/F+120:n=60*(L-K)/F+240,F===0?m=0:o<=0.5?m=F/E:m=F/(2-E),[Math.round(n)%360,m,o,I==null?1:I]},x.hsla.from=function(i){if(i[0]==null||i[1]==null||i[2]==null){return[null,null,null,i[3]]}var h=i[0]/360,n=i[1],m=i[2],l=i[3],k=m<=0.5?m*(1+n):m+n-m*n,j=2*m-k;return[Math.round(p(j,k,h+1/3)*255),Math.round(p(j,k,h)*255),Math.round(p(j,k,h-1/3)*255),l]},s(x,function(l,k){var f=k.props,d=k.cache,b=k.to,a=k.from;y.fn[l]=function(m){b&&!this[d]&&(this[d]=b(this._rgba));if(m===C){return this[d].slice()}var i,h=D.type(m),g=h==="array"||h==="object"?m:arguments,j=this[d].slice();return s(f,function(n,e){var o=g[h==="object"?n:e.idx];o==null&&(o=j[e.idx]),j[e.idx]=r(o,e)}),a?(i=y(a(j)),i[d]=j,i):y(j)},s(f,function(c,g){if(y.fn[c]){return}y.fn[c]=function(F){var E=D.type(F),o=c==="alpha"?this._hsla?"hsla":"rgba":l,n=this[o](),m=n[g.idx],e;return E==="undefined"?m:(E==="function"&&(F=F.call(this,m),E=D.type(F)),F==null&&g.empty?this:(E==="string"&&(e=A.exec(F),e&&(F=m+parseFloat(e[2])*(e[1]==="+"?1:-1))),n[g.idx]=F,this[o](n)))}})}),y.hook=function(a){var d=a.split(" ");s(d,function(e,f){D.cssHooks[f]={set:function(c,n){var m,l,k="";if(n!=="transparent"&&(D.type(n)!=="string"||(m=q(n)))){n=y(m||n);if(!v.rgba&&n._rgba[3]!==1){l=f==="backgroundColor"?c.parentNode:c;while((k===""||k==="transparent")&&l&&l.style){try{k=D.css(l,"backgroundColor"),l=l.parentNode}catch(i){}}n=n.blend(k&&k!=="transparent"?k:"_default")}n=n.toRgbaString()}try{c.style[f]=n}catch(i){}}},D.fx.step[f]=function(c){c.colorInit||(c.start=y(c.elem,f),c.end=y(c.end),c.colorInit=!0),D.cssHooks[f].set(c.elem,c.start.transition(c.end,c.pos))}})},y.hook(B),D.cssHooks.borderColor={expand:function(d){var c={};return s(["Top","Right","Bottom","Left"],function(b,a){c["border"+a+"Color"]=d}),c}},t=D.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);