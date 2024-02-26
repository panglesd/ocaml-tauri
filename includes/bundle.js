"use strict";function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function _regeneratorRuntime(){return e;};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value;},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e];}try{define({},"");}catch(t){define=function define(t,e,r){return t[e]=r;};}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a;}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)};}catch(t){return{type:"throw",arg:t};}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,function(){return this;});var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach(function(e){define(t,e,function(t){return this._invoke(e,t);});});}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){invoke("next",t,i,a);},function(t){invoke("throw",t,i,a);}):e.resolve(h).then(function(t){u.value=t,i(u);},function(t){return invoke("throw",t,i,a);});}a(c.arg);}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e(function(e,r){invoke(t,n,e,r);});}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0};}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u;}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg);}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done};}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg);}};}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator["return"]&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y);}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e);}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e;}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0);}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next;};return i.next=i;}}throw new TypeError(_typeof(e)+" is not iterable");}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name));},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t;},e.awrap=function(t){return{__await:t};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,function(){return this;}),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next();});},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,function(){return this;}),define(g,"toString",function(){return"[object Generator]";}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next;}return next.done=!0,next;};},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t);},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval;},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o;}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc);}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc);}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break;}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a);},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y;},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y;}},"catch":function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r);}return o;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y;}},e;}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function _defineProperty(obj,key,value){key=_toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:String(i);}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}(function(){var __defProp=Object.defineProperty;var __export=function __export(target,all){for(var name in all)__defProp(target,name,{get:all[name],enumerable:true});};// ../node_modules/@tauri-apps/api/app.js
var app_exports={};__export(app_exports,{getName:function getName(){return _getName;},getTauriVersion:function getTauriVersion(){return _getTauriVersion;},getVersion:function getVersion(){return _getVersion;},hide:function hide(){return _hide;},show:function show(){return _show;}});// ../node_modules/@tauri-apps/api/tauri.js
function uid(){return window.crypto.getRandomValues(new Uint32Array(1))[0];}function transformCallback(callback){var once=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var identifier=uid();var prop="_".concat(identifier);Object.defineProperty(window,prop,{value:function value(result){if(once){Reflect.deleteProperty(window,prop);}return callback===null||callback===void 0?void 0:callback(result);},writable:false,configurable:true});return identifier;}function invoke(_x){return _invoke.apply(this,arguments);}// ../node_modules/@tauri-apps/api/helpers/tauri.js
function _invoke(){_invoke=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(cmd){var args,_args=arguments;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:args=_args.length>1&&_args[1]!==undefined?_args[1]:{};return _context.abrupt("return",new Promise(function(resolve,reject){var callback=transformCallback(function(e){resolve(e);Reflect.deleteProperty(window,"_".concat(error));},true);var error=transformCallback(function(e){reject(e);Reflect.deleteProperty(window,"_".concat(callback));},true);window.__TAURI_IPC__(_objectSpread({cmd:cmd,callback:callback,error:error},args));}));case 2:case"end":return _context.stop();}},_callee);}));return _invoke.apply(this,arguments);}function invokeTauriCommand(_x2){return _invokeTauriCommand.apply(this,arguments);}// ../node_modules/@tauri-apps/api/app.js
function _invokeTauriCommand(){_invokeTauriCommand=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(command){return _regeneratorRuntime().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",invoke("tauri",command));case 1:case"end":return _context2.stop();}},_callee2);}));return _invokeTauriCommand.apply(this,arguments);}function _getVersion(){return _getVersion2.apply(this,arguments);}function _getVersion2(){_getVersion2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(){return _regeneratorRuntime().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",invokeTauriCommand({__tauriModule:"App",message:{cmd:"getAppVersion"}}));case 1:case"end":return _context3.stop();}},_callee3);}));return _getVersion2.apply(this,arguments);}function _getName(){return _getName2.apply(this,arguments);}function _getName2(){_getName2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(){return _regeneratorRuntime().wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",invokeTauriCommand({__tauriModule:"App",message:{cmd:"getAppName"}}));case 1:case"end":return _context4.stop();}},_callee4);}));return _getName2.apply(this,arguments);}function _getTauriVersion(){return _getTauriVersion2.apply(this,arguments);}function _getTauriVersion2(){_getTauriVersion2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(){return _regeneratorRuntime().wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:return _context5.abrupt("return",invokeTauriCommand({__tauriModule:"App",message:{cmd:"getTauriVersion"}}));case 1:case"end":return _context5.stop();}},_callee5);}));return _getTauriVersion2.apply(this,arguments);}function _show(){return _show2.apply(this,arguments);}function _show2(){_show2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(){return _regeneratorRuntime().wrap(function _callee6$(_context6){while(1)switch(_context6.prev=_context6.next){case 0:return _context6.abrupt("return",invokeTauriCommand({__tauriModule:"App",message:{cmd:"show"}}));case 1:case"end":return _context6.stop();}},_callee6);}));return _show2.apply(this,arguments);}function _hide(){return _hide2.apply(this,arguments);}// ../node_modules/@tauri-apps/api/cli.js
function _hide2(){_hide2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(){return _regeneratorRuntime().wrap(function _callee7$(_context7){while(1)switch(_context7.prev=_context7.next){case 0:return _context7.abrupt("return",invokeTauriCommand({__tauriModule:"App",message:{cmd:"hide"}}));case 1:case"end":return _context7.stop();}},_callee7);}));return _hide2.apply(this,arguments);}var cli_exports={};__export(cli_exports,{getMatches:function getMatches(){return _getMatches;}});function _getMatches(){return _getMatches2.apply(this,arguments);}// ../node_modules/@tauri-apps/api/dialog.js
function _getMatches2(){_getMatches2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(){return _regeneratorRuntime().wrap(function _callee8$(_context8){while(1)switch(_context8.prev=_context8.next){case 0:return _context8.abrupt("return",invokeTauriCommand({__tauriModule:"Cli",message:{cmd:"cliMatches"}}));case 1:case"end":return _context8.stop();}},_callee8);}));return _getMatches2.apply(this,arguments);}var dialog_exports={};__export(dialog_exports,{ask:function ask(){return _ask;},confirm:function confirm(){return _confirm;},message:function message(){return _message;},open:function open(){return _open;},save:function save(){return _save;}});function _open(){return _open2.apply(this,arguments);}function _open2(){_open2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(){var options,_args9=arguments;return _regeneratorRuntime().wrap(function _callee9$(_context9){while(1)switch(_context9.prev=_context9.next){case 0:options=_args9.length>0&&_args9[0]!==undefined?_args9[0]:{};if(_typeof(options)==="object"){Object.freeze(options);}return _context9.abrupt("return",invokeTauriCommand({__tauriModule:"Dialog",message:{cmd:"openDialog",options:options}}));case 3:case"end":return _context9.stop();}},_callee9);}));return _open2.apply(this,arguments);}function _save(){return _save2.apply(this,arguments);}function _save2(){_save2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(){var options,_args10=arguments;return _regeneratorRuntime().wrap(function _callee10$(_context10){while(1)switch(_context10.prev=_context10.next){case 0:options=_args10.length>0&&_args10[0]!==undefined?_args10[0]:{};if(_typeof(options)==="object"){Object.freeze(options);}return _context10.abrupt("return",invokeTauriCommand({__tauriModule:"Dialog",message:{cmd:"saveDialog",options:options}}));case 3:case"end":return _context10.stop();}},_callee10);}));return _save2.apply(this,arguments);}function _message(_x3,_x4){return _message2.apply(this,arguments);}function _message2(){_message2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(message2,options){var _opts$title,_opts$okLabel;var opts;return _regeneratorRuntime().wrap(function _callee11$(_context11){while(1)switch(_context11.prev=_context11.next){case 0:opts=typeof options==="string"?{title:options}:options;return _context11.abrupt("return",invokeTauriCommand({__tauriModule:"Dialog",message:{cmd:"messageDialog",message:message2.toString(),title:opts===null||opts===void 0||(_opts$title=opts.title)===null||_opts$title===void 0?void 0:_opts$title.toString(),type:opts===null||opts===void 0?void 0:opts.type,buttonLabel:opts===null||opts===void 0||(_opts$okLabel=opts.okLabel)===null||_opts$okLabel===void 0?void 0:_opts$okLabel.toString()}}));case 2:case"end":return _context11.stop();}},_callee11);}));return _message2.apply(this,arguments);}function _ask(_x5,_x6){return _ask2.apply(this,arguments);}function _ask2(){_ask2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(message2,options){var _opts$title2,_opts$okLabel$toStrin,_opts$okLabel2,_opts$cancelLabel$toS,_opts$cancelLabel;var opts;return _regeneratorRuntime().wrap(function _callee12$(_context12){while(1)switch(_context12.prev=_context12.next){case 0:opts=typeof options==="string"?{title:options}:options;return _context12.abrupt("return",invokeTauriCommand({__tauriModule:"Dialog",message:{cmd:"askDialog",message:message2.toString(),title:opts===null||opts===void 0||(_opts$title2=opts.title)===null||_opts$title2===void 0?void 0:_opts$title2.toString(),type:opts===null||opts===void 0?void 0:opts.type,buttonLabels:[(_opts$okLabel$toStrin=opts===null||opts===void 0||(_opts$okLabel2=opts.okLabel)===null||_opts$okLabel2===void 0?void 0:_opts$okLabel2.toString())!==null&&_opts$okLabel$toStrin!==void 0?_opts$okLabel$toStrin:"Yes",(_opts$cancelLabel$toS=opts===null||opts===void 0||(_opts$cancelLabel=opts.cancelLabel)===null||_opts$cancelLabel===void 0?void 0:_opts$cancelLabel.toString())!==null&&_opts$cancelLabel$toS!==void 0?_opts$cancelLabel$toS:"No"]}}));case 2:case"end":return _context12.stop();}},_callee12);}));return _ask2.apply(this,arguments);}function _confirm(_x7,_x8){return _confirm2.apply(this,arguments);}// ../node_modules/@tauri-apps/api/fs.js
function _confirm2(){_confirm2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(message2,options){var _opts$title3,_opts$okLabel$toStrin2,_opts$okLabel3,_opts$cancelLabel$toS2,_opts$cancelLabel2;var opts;return _regeneratorRuntime().wrap(function _callee13$(_context13){while(1)switch(_context13.prev=_context13.next){case 0:opts=typeof options==="string"?{title:options}:options;return _context13.abrupt("return",invokeTauriCommand({__tauriModule:"Dialog",message:{cmd:"confirmDialog",message:message2.toString(),title:opts===null||opts===void 0||(_opts$title3=opts.title)===null||_opts$title3===void 0?void 0:_opts$title3.toString(),type:opts===null||opts===void 0?void 0:opts.type,buttonLabels:[(_opts$okLabel$toStrin2=opts===null||opts===void 0||(_opts$okLabel3=opts.okLabel)===null||_opts$okLabel3===void 0?void 0:_opts$okLabel3.toString())!==null&&_opts$okLabel$toStrin2!==void 0?_opts$okLabel$toStrin2:"Ok",(_opts$cancelLabel$toS2=opts===null||opts===void 0||(_opts$cancelLabel2=opts.cancelLabel)===null||_opts$cancelLabel2===void 0?void 0:_opts$cancelLabel2.toString())!==null&&_opts$cancelLabel$toS2!==void 0?_opts$cancelLabel$toS2:"Cancel"]}}));case 2:case"end":return _context13.stop();}},_callee13);}));return _confirm2.apply(this,arguments);}var fs_exports={};__export(fs_exports,{BaseDirectory:function BaseDirectory(){return _BaseDirectory;},Dir:function Dir(){return _BaseDirectory;},copyFile:function copyFile(){return _copyFile;},createDir:function createDir(){return _createDir;},exists:function exists(){return _exists;},readBinaryFile:function readBinaryFile(){return _readBinaryFile;},readDir:function readDir(){return _readDir;},readTextFile:function readTextFile(){return _readTextFile;},removeDir:function removeDir(){return _removeDir;},removeFile:function removeFile(){return _removeFile;},renameFile:function renameFile(){return _renameFile;},writeBinaryFile:function writeBinaryFile(){return _writeBinaryFile;},writeFile:function writeFile(){return _writeTextFile;},writeTextFile:function writeTextFile(){return _writeTextFile;}});var _BaseDirectory;(function(BaseDirectory2){BaseDirectory2[BaseDirectory2["Audio"]=1]="Audio";BaseDirectory2[BaseDirectory2["Cache"]=2]="Cache";BaseDirectory2[BaseDirectory2["Config"]=3]="Config";BaseDirectory2[BaseDirectory2["Data"]=4]="Data";BaseDirectory2[BaseDirectory2["LocalData"]=5]="LocalData";BaseDirectory2[BaseDirectory2["Desktop"]=6]="Desktop";BaseDirectory2[BaseDirectory2["Document"]=7]="Document";BaseDirectory2[BaseDirectory2["Download"]=8]="Download";BaseDirectory2[BaseDirectory2["Executable"]=9]="Executable";BaseDirectory2[BaseDirectory2["Font"]=10]="Font";BaseDirectory2[BaseDirectory2["Home"]=11]="Home";BaseDirectory2[BaseDirectory2["Picture"]=12]="Picture";BaseDirectory2[BaseDirectory2["Public"]=13]="Public";BaseDirectory2[BaseDirectory2["Runtime"]=14]="Runtime";BaseDirectory2[BaseDirectory2["Template"]=15]="Template";BaseDirectory2[BaseDirectory2["Video"]=16]="Video";BaseDirectory2[BaseDirectory2["Resource"]=17]="Resource";BaseDirectory2[BaseDirectory2["App"]=18]="App";BaseDirectory2[BaseDirectory2["Log"]=19]="Log";BaseDirectory2[BaseDirectory2["Temp"]=20]="Temp";BaseDirectory2[BaseDirectory2["AppConfig"]=21]="AppConfig";BaseDirectory2[BaseDirectory2["AppData"]=22]="AppData";BaseDirectory2[BaseDirectory2["AppLocalData"]=23]="AppLocalData";BaseDirectory2[BaseDirectory2["AppCache"]=24]="AppCache";BaseDirectory2[BaseDirectory2["AppLog"]=25]="AppLog";})(_BaseDirectory||(_BaseDirectory={}));function _readTextFile(_x9){return _readTextFile2.apply(this,arguments);}function _readTextFile2(){_readTextFile2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(filePath){var options,_args14=arguments;return _regeneratorRuntime().wrap(function _callee14$(_context14){while(1)switch(_context14.prev=_context14.next){case 0:options=_args14.length>1&&_args14[1]!==undefined?_args14[1]:{};return _context14.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"readTextFile",path:filePath,options:options}}));case 2:case"end":return _context14.stop();}},_callee14);}));return _readTextFile2.apply(this,arguments);}function _readBinaryFile(_x10){return _readBinaryFile2.apply(this,arguments);}function _readBinaryFile2(){_readBinaryFile2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(filePath){var options,arr,_args15=arguments;return _regeneratorRuntime().wrap(function _callee15$(_context15){while(1)switch(_context15.prev=_context15.next){case 0:options=_args15.length>1&&_args15[1]!==undefined?_args15[1]:{};_context15.next=3;return invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"readFile",path:filePath,options:options}});case 3:arr=_context15.sent;return _context15.abrupt("return",Uint8Array.from(arr));case 5:case"end":return _context15.stop();}},_callee15);}));return _readBinaryFile2.apply(this,arguments);}function _writeTextFile(_x11,_x12,_x13){return _writeTextFile2.apply(this,arguments);}function _writeTextFile2(){_writeTextFile2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(path,contents,options){var file,fileOptions;return _regeneratorRuntime().wrap(function _callee16$(_context16){while(1)switch(_context16.prev=_context16.next){case 0:if(_typeof(options)==="object"){Object.freeze(options);}if(_typeof(path)==="object"){Object.freeze(path);}file={path:"",contents:""};fileOptions=options;if(typeof path==="string"){file.path=path;}else{file.path=path.path;file.contents=path.contents;}if(typeof contents==="string"){file.contents=contents!==null&&contents!==void 0?contents:"";}else{fileOptions=contents;}return _context16.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"writeFile",path:file.path,contents:Array.from(new TextEncoder().encode(file.contents)),options:fileOptions}}));case 7:case"end":return _context16.stop();}},_callee16);}));return _writeTextFile2.apply(this,arguments);}function _writeBinaryFile(_x14,_x15,_x16){return _writeBinaryFile2.apply(this,arguments);}function _writeBinaryFile2(){_writeBinaryFile2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(path,contents,options){var file,fileOptions;return _regeneratorRuntime().wrap(function _callee17$(_context17){while(1)switch(_context17.prev=_context17.next){case 0:if(_typeof(options)==="object"){Object.freeze(options);}if(_typeof(path)==="object"){Object.freeze(path);}file={path:"",contents:[]};fileOptions=options;if(typeof path==="string"){file.path=path;}else{file.path=path.path;file.contents=path.contents;}if(contents&&"dir"in contents){fileOptions=contents;}else if(typeof path==="string"){file.contents=contents!==null&&contents!==void 0?contents:[];}return _context17.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"writeFile",path:file.path,contents:Array.from(file.contents instanceof ArrayBuffer?new Uint8Array(file.contents):file.contents),options:fileOptions}}));case 7:case"end":return _context17.stop();}},_callee17);}));return _writeBinaryFile2.apply(this,arguments);}function _readDir(_x17){return _readDir2.apply(this,arguments);}function _readDir2(){_readDir2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(dir){var options,_args18=arguments;return _regeneratorRuntime().wrap(function _callee18$(_context18){while(1)switch(_context18.prev=_context18.next){case 0:options=_args18.length>1&&_args18[1]!==undefined?_args18[1]:{};return _context18.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"readDir",path:dir,options:options}}));case 2:case"end":return _context18.stop();}},_callee18);}));return _readDir2.apply(this,arguments);}function _createDir(_x18){return _createDir2.apply(this,arguments);}function _createDir2(){_createDir2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(dir){var options,_args19=arguments;return _regeneratorRuntime().wrap(function _callee19$(_context19){while(1)switch(_context19.prev=_context19.next){case 0:options=_args19.length>1&&_args19[1]!==undefined?_args19[1]:{};return _context19.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"createDir",path:dir,options:options}}));case 2:case"end":return _context19.stop();}},_callee19);}));return _createDir2.apply(this,arguments);}function _removeDir(_x19){return _removeDir2.apply(this,arguments);}function _removeDir2(){_removeDir2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(dir){var options,_args20=arguments;return _regeneratorRuntime().wrap(function _callee20$(_context20){while(1)switch(_context20.prev=_context20.next){case 0:options=_args20.length>1&&_args20[1]!==undefined?_args20[1]:{};return _context20.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"removeDir",path:dir,options:options}}));case 2:case"end":return _context20.stop();}},_callee20);}));return _removeDir2.apply(this,arguments);}function _copyFile(_x20,_x21){return _copyFile2.apply(this,arguments);}function _copyFile2(){_copyFile2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(source,destination){var options,_args21=arguments;return _regeneratorRuntime().wrap(function _callee21$(_context21){while(1)switch(_context21.prev=_context21.next){case 0:options=_args21.length>2&&_args21[2]!==undefined?_args21[2]:{};return _context21.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"copyFile",source:source,destination:destination,options:options}}));case 2:case"end":return _context21.stop();}},_callee21);}));return _copyFile2.apply(this,arguments);}function _removeFile(_x22){return _removeFile2.apply(this,arguments);}function _removeFile2(){_removeFile2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(file){var options,_args22=arguments;return _regeneratorRuntime().wrap(function _callee22$(_context22){while(1)switch(_context22.prev=_context22.next){case 0:options=_args22.length>1&&_args22[1]!==undefined?_args22[1]:{};return _context22.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"removeFile",path:file,options:options}}));case 2:case"end":return _context22.stop();}},_callee22);}));return _removeFile2.apply(this,arguments);}function _renameFile(_x23,_x24){return _renameFile2.apply(this,arguments);}function _renameFile2(){_renameFile2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(oldPath,newPath){var options,_args23=arguments;return _regeneratorRuntime().wrap(function _callee23$(_context23){while(1)switch(_context23.prev=_context23.next){case 0:options=_args23.length>2&&_args23[2]!==undefined?_args23[2]:{};return _context23.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"renameFile",oldPath:oldPath,newPath:newPath,options:options}}));case 2:case"end":return _context23.stop();}},_callee23);}));return _renameFile2.apply(this,arguments);}function _exists(_x25){return _exists2.apply(this,arguments);}// includes.js
function _exists2(){_exists2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(path){var options,_args24=arguments;return _regeneratorRuntime().wrap(function _callee24$(_context24){while(1)switch(_context24.prev=_context24.next){case 0:options=_args24.length>1&&_args24[1]!==undefined?_args24[1]:{};return _context24.abrupt("return",invokeTauriCommand({__tauriModule:"Fs",message:{cmd:"exists",path:path,options:options}}));case 2:case"end":return _context24.stop();}},_callee24);}));return _exists2.apply(this,arguments);}joo_global_object.__Tauri__app=app_exports;joo_global_object.__Tauri__cli=cli_exports;joo_global_object.__Tauri__dialog=dialog_exports;joo_global_object.__Tauri__fs=fs_exports;})();