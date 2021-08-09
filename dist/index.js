!function(){"use strict";var t={217:function(t,r,n){var o=this&&this.__spreadArray||function(t,r){for(var n=0,o=r.length,e=t.length;n<o;n++,e++)t[e]=r[n];return t};Object.defineProperty(r,"__esModule",{value:!0}),r.Log=void 0;var e=n(724),i=n(827),p=function(){function t(t){return this._color=void 0,this.messages=[],this._abort=!1,this._tag=t||"*",i.LogConfig.defaults(this._tag)(this)}return t.tag=function(r){return new t(r)},t.prototype.log=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return this._abort||console[t].apply(console,e.compileMessages(o(o([],this.messages),[{color:this._color,payload:r}]))),this},t.prototype.info=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.log.apply(this,o(["info"],t))},t.prototype.warn=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.log.apply(this,o(["warn"],t))},t.prototype.error=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.log.apply(this,o(["error"],t))},t.log=function(r){for(var n,e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return(n=new t).log.apply(n,o([r],e))},t.info=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).info.apply(r,n)},t.warn=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).warn.apply(r,n)},t.error=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).error.apply(r,n)},t.prototype.color=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return r.length||(this._color=t),this.messages.push({color:t,payload:r}),this},t.color=function(r){for(var n,e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return(n=new t).color.apply(n,o([r],e))},t.prototype.red=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#E57373"],t))},t.prototype.pink=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#F06292"],t))},t.prototype.purple=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#BA68C8"],t))},t.prototype.deepPurple=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#9575CD"],t))},t.prototype.indigo=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#7986CB"],t))},t.prototype.blue=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#64B5F6"],t))},t.prototype.lightBlue=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#4FC3F7"],t))},t.prototype.cyan=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#4DD0E1"],t))},t.prototype.teal=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#4DB6AC"],t))},t.prototype.green=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#81C784"],t))},t.prototype.lightGreen=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#AED581"],t))},t.prototype.lime=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#D4E157"],t))},t.prototype.yellow=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#FDD835"],t))},t.prototype.orange=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#FFB74D"],t))},t.prototype.deepOrange=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.color.apply(this,o(["#FF8A65"],t))},t.red=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).red.apply(r,n)},t.pink=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).pink.apply(r,n)},t.purple=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).purple.apply(r,n)},t.deepPurple=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).deepPurple.apply(r,n)},t.indigo=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).indigo.apply(r,n)},t.blue=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).blue.apply(r,n)},t.lightBlue=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).lightBlue.apply(r,n)},t.cyan=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).cyan.apply(r,n)},t.teal=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).teal.apply(r,n)},t.green=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).green.apply(r,n)},t.lightGreen=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).lightGreen.apply(r,n)},t.lime=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).lime.apply(r,n)},t.yellow=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).yellow.apply(r,n)},t.orange=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).orange.apply(r,n)},t.deepOrange=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).deepOrange.apply(r,n)},t.prototype.text=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.messages.push({color:void 0,payload:t}),this},t.text=function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(r=new t).text.apply(r,n)},t.prototype.space=function(){return this.text()},t.space=function(){return(new t).space()},t.prototype.group=function(t,r){return this.log("group",t),!this._abort&&r&&(r(this),this.log("groupEnd")),this},t.prototype.groupEnd=function(){return this.log("groupEnd")},t.group=function(r,n){return(new t).group(r,n)},t.groupEnd=function(){return(new t).groupEnd()},t.prototype.clear=function(){return this._color=void 0,this.messages=[],i.LogConfig.defaults(this._tag)(this)},t.prototype.if=function(t,r){return void 0===r&&(r=!1),!r&&this._abort||(this._abort=t instanceof Function?!t():!t),this},t.prototype.ifProduction=function(){return this.if("production"===i.LogConfig.environment)},t.prototype.ifStaging=function(){return this.if("staging"===i.LogConfig.environment)},t.prototype.ifDevelopment=function(){return this.if("development"===i.LogConfig.environment)},t.if=function(r){return(new t).if(r)},t.prototype.tap=function(t,r){return r?r(t):this.info(t),t},t.tap=function(r,n){return(new t).tap(r,n)},t}();r.Log=p},827:function(t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.LogConfig=void 0;var n=function(){function t(){}return t.css=function(t){this._css=t},t.getCss=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t._css.apply(t,r)},t.defaults=function(){for(var t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o="string"==typeof r[0]?r[0]:"*",e="function"==typeof r[0]?r[0]:"function"==typeof r[1]?r[1]:void 0;return e&&(this._defaults[o]=e),function(r){return t._defaults[o]instanceof Function&&t._defaults[o](r),r}},t.environment="production",t._defaults={},t._css=function(t,r,n){return"\n    "+(t.color?"text-shadow: 0px 1px 1px #0004, 0px 2px 8px #0002;":"")+"\n    padding: 1px "+(t.payload.length?"6px":"0px")+";\n    font-size: 12px;\n    line-height: 16px;\n    border-top-left-radius: "+((null==n?void 0:n.color)?"0":"4px")+";\n    border-bottom-left-radius: "+((null==n?void 0:n.color)?"0":"4px")+";\n    border-top-right-radius: "+((null==r?void 0:r.color)?"0":"4px")+";\n    border-bottom-right-radius: "+((null==r?void 0:r.color)?"0":"4px")+";\n    color: "+(t.color?"#fff":"#222")+";\n    background-color: "+t.color+";\n  "},t}();r.LogConfig=n},724:function(t,r,n){var o=this&&this.__spreadArray||function(t,r){for(var n=0,o=r.length,e=t.length;n<o;n++,e++)t[e]=r[n];return t};Object.defineProperty(r,"__esModule",{value:!0}),r.compileMessages=void 0;var e=n(827);r.compileMessages=function(t){var r="",n=[];return t.forEach((function(o,i){var p=t[i+1],u=t[i-1],l=e.LogConfig.getCss(o,p,u);o.payload.length||(r+="%c ",n.push(l)),o.payload.forEach((function(t){switch(r+="%c",n.push(l),typeof t){case"string":r+="%s",n.push(t);break;case"object":r+="%o",n.push(t);break;case"number":r+="%f",n.push(t)}}))})),o([r],n)}}},r={};function n(o){var e=r[o];if(void 0!==e)return e.exports;var i=r[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}var o={};!function(){var t=o;Object.defineProperty(t,"__esModule",{value:!0}),t.LogConfig=t.Log=void 0;var r=n(217);Object.defineProperty(t,"Log",{enumerable:!0,get:function(){return r.Log}});var e=n(827);Object.defineProperty(t,"LogConfig",{enumerable:!0,get:function(){return e.LogConfig}}),t.default=r.Log}();var e=exports;for(var i in o)e[i]=o[i];o.__esModule&&Object.defineProperty(e,"__esModule",{value:!0})}();