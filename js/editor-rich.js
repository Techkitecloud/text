(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[192],{125:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.FILE_ACTION_IDENTIFIER=n.FilesWorkspacePlugin=n.registerFileCreate=n.registerFileActionFallback=n.optimalPath=void 0;var o,a=i(49),r=(o=i(137))&&o.__esModule?o:{default:o},c=i(27);n.FILE_ACTION_IDENTIFIER="Edit with text app";n.optimalPath=function(t,e){var n=t.split("/"),i=e.split("/");for(n.pop();n[0]===i[0];)n.shift(),i.shift();var o=n.fill("..").concat(i),a=e.split("/");return o.length<a.length?o.join("/"):e};n.registerFileCreate=function(){var e={attach:function(e){var n=e.fileList;"files"!==n.id&&"files.public"!==n.id||e.addMenuEntry({id:"file",displayName:t("text","New text document"),templateName:t("text","New text document")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(t){n.createFile(t).then((function(t,e){var i=new OCA.Files.FileInfoModel(e);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,n):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction("Edit with text app",i,n)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",e)};n.registerFileActionFallback=function(){var e,n=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,o=document.getElementById("dir").value;if(!n||""!==o){var r=document.createElement("div");r.id="text-viewer-fallback",document.body.appendChild(r);for(var l=0;l<a.openMimetypes.length;l++)e=a.openMimetypes[l],OCA.Files.fileActions.register(e,"Edit with text app",OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,c.imagePath)("core","actions/rename"),(function(t){var e=window.FileList.findFile(t);Promise.all([i.e(0).then(i.t.bind(null,28,7)),Promise.all([i.e(1),i.e(0),i.e(188),i.e(199),i.e(194)]).then(i.bind(null,182))]).then((function(i){var o=window.FileList.getCurrentDirectory()+"/"+t,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var c=i[1].default;new a({render:function(t){return t(c,{props:{fileId:e?e.id:null,active:!0,shareToken:n,relativePath:o,mimeType:e.mimetype}})}}).$mount(r)}))}),t("text","Edit")),OCA.Files.fileActions.setDefault(a.openMimetypes[l],"Edit with text app")}};var l={el:null,attach:function(t){"files"!==t.id&&"files.public"!==t.id||(this.el=document.createElement("div"),t.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(t){var e=this;"files"!==t.id&&"files.public"!==t.id||i.e(0).then(i.t.bind(null,28,7)).then((function(n){var i=n.default;e.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var o=new(i.extend(r.default))({propsData:{path:t.getCurrentDirectory()}}).$mount(e.el);t.$el.on("urlChanged",(function(t){o.path=t.dir.toString()})),t.$el.on("changeDirectory",(function(t){o.path=t.dir.toString()}))}))}};n.FilesWorkspacePlugin=l},137:function(t,e,n){"use strict";n.r(e);var i=n(45),o=n(25);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(173);var r=n(16),c=Object(r.a)(o.default,i.a,i.b,!1,null,"01f36cf5",null);e.default=c.exports},173:function(t,e,n){"use strict";n(98)},174:function(t,e,n){(e=n(50)(!1)).push([t.i,"#rich-workspace[data-v-01f36cf5]{padding:0 60px;margin-bottom:-24px;text-align:left;max-height:0;transition:max-height 0.5s cubic-bezier(0, 1, 0, 1)}#rich-workspace.creatable[data-v-01f36cf5]{min-height:90px}#rich-workspace[data-v-01f36cf5]:only-child{margin-bottom:0}.empty-workspace[data-v-01f36cf5]{padding-top:43px;color:var(--color-text-maxcontrast);height:0}#rich-workspace[data-v-01f36cf5] div[contenteditable=false]{width:100%;padding:0px;background-color:var(--color-main-background);opacity:1;border:none}#rich-workspace[data-v-01f36cf5] #editor-container{height:100%;position:unset !important;top:auto !important}#rich-workspace[data-v-01f36cf5] #editor-wrapper{position:unset !important;overflow:visible}#rich-workspace[data-v-01f36cf5] #editor{overflow:scroll !important;max-height:50vh}#rich-workspace[data-v-01f36cf5] #editor-wrapper .ProseMirror{padding:0px;margin:0}#rich-workspace[data-v-01f36cf5] .menubar{z-index:50;margin-bottom:-10px}#rich-workspace[data-v-01f36cf5] .menubar .menubar-icons{margin-left:0}#rich-workspace[data-v-01f36cf5] .editor__content{margin:0}#rich-workspace.focus[data-v-01f36cf5]{max-height:50vh}#rich-workspace[data-v-01f36cf5]:not(.focus){max-height:30vh;position:relative;overflow:hidden}#rich-workspace[data-v-01f36cf5]:not(.focus):not(.icon-loading):after{content:'';position:absolute;z-index:1;bottom:0;left:0;pointer-events:none;background-image:linear-gradient(to bottom, rgba(255,255,255,0), var(--color-main-background));width:100%;height:4em}#rich-workspace.dark[data-v-01f36cf5]:not(.focus):not(.icon-loading):after{background-image:linear-gradient(to bottom, rgba(0,0,0,0), var(--color-main-background))}@media only screen and (max-width: 1024px){#rich-workspace[data-v-01f36cf5]:not(.focus){max-height:30vh}}html.ie #rich-workspace[data-v-01f36cf5] #editor-container{position:initial}html.ie #rich-workspace[data-v-01f36cf5] #editor-wrapper{position:relative !important;top:auto !important}html.ie #rich-workspace[data-v-01f36cf5] #editor{display:flex;flex-direction:column;overflow:hidden !important}html.ie #rich-workspace[data-v-01f36cf5] .menubar{position:relative;overflow:hidden;flex-shrink:0;height:44px;top:auto}html.ie #rich-workspace[data-v-01f36cf5] #editor>div:nth-child(2){min-height:44px;overflow-x:hidden;overflow-y:auto;flex-shrink:1}\n",""]),t.exports=e},240:function(t,e,n){"use strict";n.r(e);var i=n(241),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},241:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(197),a=p(i(200)),r=p(i(710)),c=i(125),l=p(i(711)),s=p(i(712)),u=p(i(242)),d=p(i(713)),f=i(116);function p(t){return t&&t.__esModule?t:{default:t}}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,a=void 0;try{for(var r,c=t[Symbol.iterator]();!(i=(r=c.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(t){o=!0,a=t}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var g={name:"MenuBar",components:{EditorMenuBar:o.EditorMenuBar,ActionButton:s.default,PopoverMenu:u.default,Actions:l.default},directives:{Tooltip:a.default,ClickOutside:d.default},props:{editor:{type:Object,required:!1,default:null},isRichEditor:{type:Boolean,default:!0},autohide:{type:Boolean,default:!1},isPublic:{type:Boolean,default:!1},filePath:{type:String,required:!1,default:""}},data:function(){return{windowWidth:0,windowHeight:0,forceRecompute:0,submenuVisibility:{},lastImagePath:null,icons:v(r.default)}},computed:{isHiddenInMenu:function(){var t=this;return function(e){return e-t.iconCount>=0}},getIconClasses:function(){return function(t,e){var n={"is-active":e.isActive(t)};return n[e.class]=!0,n}},isChildMenuVisible:function(){var t=this;return function(e){return!!Object.prototype.hasOwnProperty.call(t.submenuVisibility,e.label)&&t.submenuVisibility[e.label]}},allIcons:function(){var e=this;return this.isPublic?this.icons:[].concat(v(this.icons),[{label:t("text","Insert image"),class:"icon-image",isActive:function(){},action:function(t){e.showImagePrompt(t.image)}}])},childPopoverMenu:function(){var t=this;return function(e,n,i,o){var a=[],r=function(r){a.push({text:i[r].label,icon:i[r].class,action:function(){i[r].action(n),t.hideChildMenu(o)},active:i[r].isActive(e)})};for(var c in i)r(c);return a}},childIconClasses:function(){var t=this;return function(e,n){var i=t.childIcon(e,n);return t.getIconClasses(e,i)}},childIcon:function(){return function(t,e){for(var n in e){var i=e[n];if(i.isActive(t))return i}return e[0]}},iconCount:function(){this.forceRecompute,this.windowWidth;var t=this.$refs.menubar&&this.$refs.menubar.clientWidth>200?this.$refs.menubar.clientWidth:200,e=Math.max(Math.floor(t/44)-2,0);return e},imagePath:function(){return this.lastImagePath||this.filePath.split("/").slice(0,-1).join("/")}},mounted:function(){var t=this;window.addEventListener("resize",this.getWindowWidth),this.checkInterval=setInterval((function(){var e=t.$refs.menubar&&t.$refs.menubar.clientWidth>0;t.isRichEditor&&e&&t.redrawMenuBar(),t.isRichEditor&&!e||clearInterval(t.checkInterval)}),100)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{redrawMenuBar:function(){var t=this;this.$nextTick((function(){t.getWindowWidth(),t.forceRecompute++}))},clickIcon:function(t,e){return e.action(t)},getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(t){this.windowHeight=document.documentElement.clientHeight},hideChildMenu:function(t){this.$set(this.submenuVisibility,t.label,!1)},toggleChildMenu:function(t){var e=!!Object.prototype.hasOwnProperty.call(this.submenuVisibility,t.label)&&this.submenuVisibility[t.label];this.$set(this.submenuVisibility,t.label,!e)},showImagePrompt:function(e){var n=this;if((0,f.getCurrentUser)()){var i=e;OC.dialogs.filepicker(t("text","Insert an image"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,e){n.lastImagePath=e.path;var o={mimetype:e.mimetype,hasPreview:e.hasPreview},a=(0,c.optimalPath)(n.filePath,"".concat(e.path,"/").concat(e.name)).split("/").map(encodeURIComponent).join("/"),r=Object.entries(o).map((function(t){var e=h(t,2),n=e[0],i=e[1];return"".concat(n,"=").concat(encodeURIComponent(i))})).join("&"),l="".concat(a,"?fileId=").concat(e.id,"#").concat(r);i({src:l,alt:e.name})}))}),!1,[],!0,void 0,this.imagePath)}},showLinkPrompt:function(t){var e=this;if(OC.getCurrentUser()){var n=t;OC.dialogs.filepicker("Insert a link",(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,i){e.lastLinkPath=i.path;var o=e.optimalPathTo("".concat(i.path,"/").concat(i.name)).split("/").map(encodeURIComponent).join("/"),a="".concat(o,"?fileId=").concat(i.id);n({href:a})}))}),!1,[],!0,void 0,this.linkPath)}},optimalPathTo:function(t){var e=t.split("/"),n=this.relativePathTo(t).split("/");return n.length<e.length?n.join("/"):t},relativePathTo:function(t){var e=this.filePath.split("/"),n=t.split("/");for(e.pop();e[0]===n[0];)e.shift(),n.shift();return e.fill("..").concat(n).join("/")}}};n.default=g},243:function(t,e,n){"use strict";n.r(e);var i=n(244),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},244:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,a=i(197),r=(o=i(200))&&o.__esModule?o:{default:o},c=i(125);var l={name:"MenuBubble",components:{EditorMenuBubble:a.EditorMenuBubble},directives:{tooltip:r.default},props:{editor:{type:Object,required:!1,default:null},filePath:{type:String,required:!1,default:""}},data:function(){return{linkUrl:null,linkMenuIsActive:!1}},methods:{showLinkMenu:function(t){var e=this;this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){e.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},selectFile:function(e){var n=this;if(OC.getCurrentUser()){var i=this.filePath.split("/").slice(0,-1).join("/");OC.dialogs.filepicker(t("text","Select file to link to"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,i){var o=(0,c.optimalPath)(n.filePath,"".concat(i.path,"/").concat(i.name)).split("/").map(encodeURIComponent).join("/");e({href:"".concat(o,"?fileId=").concat(i.id)}),n.hideLinkMenu()}))}),!1,[],!0,void 0,i)}},setLinkUrl:function(t,e){e&&![/^[a-zA-Z]+:/,/^\//,/\?fileId=/,/^\.\.?\//,/^[^.]*[/$]/,/^#/].find((function(t){return e.match(t)}))&&(e="https://"+e),t({href:e}),this.hideLinkMenu()}}};n.default=l},25:function(t,e,n){"use strict";n.r(e);var i=n(26),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},26:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=(i=n(99))&&i.__esModule?i:{default:i},a=n(27),r=n(48);function c(t,e,n,i,o,a,r){try{var c=t[a](r),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(i,o)}var l=!!document.getElementById("isPublic"),s=(0,a.generateOcsUrl)("apps/text"+(l?"/public":""),2)+"workspace",u={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([n.e(0),n.e(188),n.e(197),n.e(189)]).then(n.bind(null,124))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,folder:null,file:null,loaded:!1,ready:!1,autofocus:!1,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){return document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate}},watch:{path:function(){this.getFileInfo()},focus:function(t){t||document.querySelector("#editor").scrollTo(0,0)}},mounted:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.enabled&&e.getFileInfo(),(0,r.subscribe)("Text::showRichWorkspace",(function(){e.enabled=!0,e.getFileInfo()})),(0,r.subscribe)("Text::hideRichWorkspace",(function(){e.enabled=!1}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function r(t){c(a,i,o,r,l,"next",t)}function l(t){c(a,i,o,r,l,"throw",t)}r(void 0)}))})()},methods:{unfocus:function(){},reset:function(){var t=this;this.file=null,this.focus=!1,this.$nextTick((function(){t.creating=!1,t.getFileInfo()}))},getFileInfo:function(){var t=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var e={path:this.path};return l&&(e.shareToken=this.shareToken),o.default.get(s,{params:e}).then((function(e){var n=e.data.ocs.data;return t.folder=n.folder||null,t.file=n.file,t.editing=!0,t.loaded=!0,!0})).catch((function(e){return e.response.data.ocs&&e.response.data.ocs.data.folder?t.folder=e.response.data.ocs.data.folder:t.folder=null,t.file=null,t.loaded=!0,t.ready=!0,t.creating=!1,!1}))},createNew:function(){var t=this;this.creating||(this.creating=!0,this.getFileInfo().then((function(e){t.autofocus=!0,e||window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}).then((function(e,n){t.getFileInfo()}))})))}}};e.default=u},405:function(t,e,n){var i=n(715);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(51).default)("36b499c6",i,!0,{})},406:function(t,e,n){var i=n(718);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(51).default)("8904371c",i,!0,{})},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.enabled?n("div",{class:{"icon-loading":!t.loaded||!t.ready,focus:t.focus,dark:t.darkTheme,creatable:t.canCreate},attrs:{id:"rich-workspace"}},[t.showEmptyWorkspace?n("div",{staticClass:"empty-workspace",on:{click:t.createNew}},[n("p",{staticClass:"placeholder"},[t._v("\n\t\t\t"+t._s(t.t("text","Add notes, lists or links …"))+"\n\t\t")])]):t._e(),t._v(" "),t.file?n("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],key:t.file.id,attrs:{"file-id":t.file.id,"relative-path":t.file.path,"share-token":t.shareToken,active:!0,autohide:!0,mime:t.file.mimetype,autofocus:t.autofocus},on:{ready:function(e){t.ready=!0},focus:function(e){t.focus=!0},blur:t.unfocus,error:t.reset}}):t._e()],1):t._e()},o=[]},49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.openMimetypesPlainText=e.openMimetypesMarkdown=e.openMimetypes=void 0;
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var i=["text/markdown"];e.openMimetypesMarkdown=i;var o=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/csv","text/html","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"];e.openMimetypesPlainText=o;var a=[].concat(i,o);e.openMimetypes=a},709:function(t,e,n){"use strict";n.r(e);var i=n(763),o=n(240);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(714);var r=n(16),c=Object(r.a)(o.default,i.a,i.b,!1,null,"0d0204aa",null);e.default=c.exports},710:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var o=[{label:t("text","Undo"),class:"icon-undo",isActive:function(t){},action:function(t){return t.undo()}},{label:t("text","Redo"),class:"icon-redo",isActive:function(t){},action:function(t){return t.redo()}},{label:t("text","Bold"),class:"icon-bold",isActive:function(t){return t.strong()},action:function(t){return t.strong()}},{label:t("text","Italic"),class:"icon-italic",isActive:function(t){return t.em()},action:function(t){return t.em()}},{label:t("text","Strikethrough"),class:"icon-strike",isActive:function(t){return t.strike()},action:function(t){return t.strike()}},{label:t("text","Headings"),visible:!1,children:[{label:t("text","Heading 1"),class:"icon-h1",isActive:function(t){return t.heading({level:1})},action:function(t){return t.heading({level:1})}},{label:t("text","Heading 2"),class:"icon-h2",isActive:function(t){return t.heading({level:2})},action:function(t){return t.heading({level:2})}},{label:t("text","Heading 3"),class:"icon-h3",isActive:function(t){return t.heading({level:3})},action:function(t){return t.heading({level:3})}},{label:t("text","Heading 4"),class:"icon-h4",isActive:function(t){return t.heading({level:4})},action:function(t){return t.heading({level:4})}},{label:t("text","Heading 5"),class:"icon-h5",isActive:function(t){return t.heading({level:5})},action:function(t){return t.heading({level:5})}},{label:t("text","Heading 6"),class:"icon-h6",isActive:function(t){return t.heading({level:6})},action:function(t){return t.heading({level:6})}}]},{label:t("text","Unordered list"),class:"icon-ul",isActive:function(t){return t.bullet_list()},action:function(t){return t.bullet_list_item()}},{label:t("text","Ordered list"),class:"icon-ol",isActive:function(t){return t.ordered_list()},action:function(t){return t.ordered_list()}},{label:t("text","ToDo list"),class:"icon-checkmark",isActive:function(t){return!1},action:function(t){return t.todo_item()}},{label:t("text","Blockquote"),class:"icon-quote",isActive:function(t){return t.blockquote()},action:function(t){return t.blockquote()}},{label:t("text","Code block"),class:"icon-code",isActive:function(t){return t.code_block()},action:function(t){return t.code_block()}}];n.default=o},714:function(t,e,n){"use strict";n(405)},715:function(t,e,n){(e=n(50)(!1)).push([t.i,".menubar[data-v-0d0204aa]{position:fixed;position:-webkit-sticky;position:sticky;top:0;display:flex;z-index:10010;background-color:var(--color-main-background-translucent);height:44px}.menubar.autohide[data-v-0d0204aa]{visibility:hidden;opacity:0;transition:visibility 0.2s 0.4s, opacity 0.2s 0.4s}.menubar.autohide.is-focused[data-v-0d0204aa]{visibility:visible;opacity:1}.menubar .menubar-icons[data-v-0d0204aa]{flex-grow:1;margin-left:calc((100% - 660px) / 2)}@media (max-width: 660px){.menubar .menubar-icons[data-v-0d0204aa]{margin-left:0}}.menubar[data-v-0d0204aa] .action-item__menu ul{max-height:calc(100vh - 88px);overflow:scroll}.menubar button[data-v-0d0204aa]{width:44px;height:44px;margin:0;background-size:16px;border:0;background-color:transparent;opacity:.5;color:var(--color-main-text);background-position:center center;vertical-align:top}.menubar button[data-v-0d0204aa]:hover,.menubar button[data-v-0d0204aa]:focus,.menubar button[data-v-0d0204aa]:active{background-color:var(--color-background-dark)}.menubar button.is-active[data-v-0d0204aa],.menubar button[data-v-0d0204aa]:hover,.menubar button[data-v-0d0204aa]:focus{opacity:1}.menubar button.icon-undo[data-v-0d0204aa],.menubar button.icon-redo[data-v-0d0204aa]{opacity:.4}.menubar .submenu[data-v-0d0204aa]{display:inline-block;width:44px;height:44px;position:relative;vertical-align:top}\n",""]),t.exports=e},716:function(t,e,n){"use strict";n.r(e);var i=n(764),o=n(243);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(717);var r=n(16),c=Object(r.a)(o.default,i.a,i.b,!1,null,"66ed9266",null);e.default=c.exports},717:function(t,e,n){"use strict";n(406)},718:function(t,e,n){(e=n(50)(!1)).push([t.i,".menububble[data-v-66ed9266]{position:absolute;display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:var(--border-radius);padding:0;margin-bottom:0.4rem;visibility:hidden;opacity:0;transform:translateX(-50%);transition:opacity 0.2s, visibility 0.2s}.menububble.is-active[data-v-66ed9266]{opacity:1;visibility:visible}.menububble__button[data-v-66ed9266]{display:block;border:0;padding:0.3rem 0.7rem;margin:0;margin-right:0.2rem;border-radius:var(--border-radius);cursor:pointer}.menububble__button[data-v-66ed9266]:last-child{margin-right:0}.menububble__buttontext[data-v-66ed9266]{padding:0.4rem;padding-right:0}.menububble__form[data-v-66ed9266]{display:flex;align-items:center}.menububble__input[data-v-66ed9266]{font:inherit;border:none;background:transparent;min-width:150px}\n",""]),t.exports=e},763:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorMenuBar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,a=e.focused;return[n("div",{staticClass:"menubar",class:{"is-focused":a,autohide:t.autohide}},[t.isRichEditor?n("div",{ref:"menubar",staticClass:"menubar-icons"},[t._l(t.allIcons,(function(e,a){return[e.class?n("button",{directives:[{name:"show",rawName:"v-show",value:a<t.iconCount,expression:"$index < iconCount"}],key:e.label,class:t.getIconClasses(o,e),attrs:{title:e.label},on:{click:function(n){return t.clickIcon(i,e)}}}):[n("div",{directives:[{name:"show",rawName:"v-show",value:a<t.iconCount||!e.class,expression:"$index < iconCount || !icon.class"},{name:"click-outside",rawName:"v-click-outside",value:function(){return t.hideChildMenu(e)},expression:"() => hideChildMenu(icon)"}],key:e.label,staticClass:"submenu"},[n("button",{class:t.childIconClasses(o,e.children),attrs:{title:e.label},on:{click:function(n){return n.preventDefault(),t.toggleChildMenu(e)}}}),t._v(" "),n("div",{staticClass:"popovermenu menu-center",class:{open:t.isChildMenuVisible(e)}},[n("PopoverMenu",{attrs:{menu:t.childPopoverMenu(o,i,e.children,e)}})],1)])]]})),t._v(" "),n("Actions",[t._l(t.allIcons,(function(e,o){return[e.class&&t.isHiddenInMenu(o)?n("ActionButton",{key:e.class,attrs:{icon:e.class},on:{click:function(n){return t.clickIcon(i,e)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.label)+"\n\t\t\t\t\t")]):t._e()]}))],2)],2):t._e(),t._v(" "),t._t("default",[t._v("\n\t\t\tLeft side\n\t\t")])],2)]}}],null,!0)})},o=[]},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorMenuBubble",{staticClass:"menububble",attrs:{editor:t.editor},on:{hide:t.hideLinkMenu},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,a=e.getMarkAttrs,r=e.menu;return[n("div",{staticClass:"menububble",class:{"is-active":r.isActive},style:"left: "+r.left+"px; bottom: "+r.bottom+"px;"},[t.linkMenuIsActive?n("form",{staticClass:"menububble__form",on:{submit:function(e){return e.preventDefault(),t.setLinkUrl(i.link,t.linkUrl)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.hideLinkMenu(e)},input:function(e){e.target.composing||(t.linkUrl=e.target.value)}}}),t._v(" "),n("button",{staticClass:"menububble__button icon-confirm",attrs:{type:"button",tabindex:"0"},on:{click:function(e){return t.setLinkUrl(i.link,t.linkUrl)}}})]):[n("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(e){t.showLinkMenu(a("link"))}}},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.t("text",o.link()?"Update Link":"Add Link"),expression:"t('text', isActive.link() ? 'Update Link' : 'Add Link')"}],staticClass:"icon-link"}),t._v(" "),n("span",{staticClass:"menububble__buttontext"},[t._v("\n\t\t\t\t\t"+t._s(t.t("text",o.link()?"Update Link":"Add Link"))+"\n\t\t\t\t")])]),t._v(" "),n("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(e){return t.selectFile(i.link)}}},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.t("text","Link file"),expression:"t('text', 'Link file')"}],staticClass:"icon-file"}),t._v(" "),n("span",{staticClass:"menububble__buttontext"},[t._v(t._s(t.t("text","Link file")))])])]],2)]}}])})},o=[]},98:function(t,e,n){var i=n(174);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(51).default)("55d37b72",i,!0,{})}}]);
//# sourceMappingURL=editor-rich.js.map?v=4d53df3b7ce8c84f96ba