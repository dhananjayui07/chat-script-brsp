'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "/*\n! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n@import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n.styles-module_root__Xsw1F {\n  background: gold;\n}\n";
var styles$2 = {"root":"styles-module_root__Xsw1F"};
styleInject(css_248z$2);

function t(){return t=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);}return t},t.apply(this,arguments)}var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,s){},onStringTyped:function(t,s){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,s){},onTypingResumed:function(t,s){},onReset:function(t){},onStop:function(t,s){},onStart:function(t,s){},onDestroy:function(t){}},e=new(/*#__PURE__*/function(){function e(){}var n=e.prototype;return n.load=function(e,n,i){if(e.el="string"==typeof i?document.querySelector(i):i,e.options=t({},s,n),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(t){return t.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(e.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)e.strings.push(r[a].innerHTML.trim());}for(var u in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[u]=u;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e));},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(e);}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(e);}},e}()),n=new(/*#__PURE__*/function(){function t(){}var s=t.prototype;return s.typeHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n=t.substring(s).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substring(s+1).charAt(0)!==i&&!(1+ ++s>t.length););s++;}return s},s.backSpaceHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n=t.substring(s).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substring(s-1).charAt(0)!==i&&!(--s<0););s--;}return s},t}()),i=/*#__PURE__*/function(){function t(t,s){e.load(this,s,t),this.begin();}var s=t.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop();},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this));},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this));},s.destroy=function(){this.reset(!1),this.options.onDestroy(this);},s.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin());},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos);},this.startDelay);},s.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout(function(){s=n.typeHtmlChars(t,s,e);var i=0,o=t.substring(s);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;a+=(o=/\d+/.exec(o)[0]).length,i=parseInt(o),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+a),e.toggleBlinking(!0);}if("`"===o.charAt(0)){for(;"`"!==t.substring(s+r).charAt(0)&&(r++,!(s+r>t.length)););var u=t.substring(0,s),p=t.substring(u.length+1,s+r),c=t.substring(s+r+1);t=u+p+c,r--;}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e));},i);},i):this.setPauseStatus(t,s,!0);},s.keepTyping=function(t,s,e){0===s&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,s+=e);this.replaceText(n),this.typewrite(t,s);},s.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s);},this.backDelay));},s.backspace=function(t,s){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=n.backSpaceHtmlChars(t,s,e);var i=t.substring(0,s);if(e.replaceText(i),e.smartBackspace){var r=e.strings[e.arrayPos+1];e.stopNum=r&&i===r.substring(0,s)?s:0;}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s));},i);}else this.setPauseStatus(t,s,!1);},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0;},s.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s;},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")));},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}));},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0);},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t;},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop();}),this.el.addEventListener("blur",function(s){t.el.value&&0!==t.el.value.length||t.start();}));},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)));},t}();

const HelpTabComponent = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new i(el.current, {
            strings: [
                'Dynamic languages such as JavaScript are more difficult to compile than statically  typed ones. Since no concrete type <br/> information is available, traditional compilers need to emit generic code that can handle all possible type combinations at runtime. We present an alternative compilation technique for dynamically-typed languages that identifies frequently executed loop traces at run-time and then generates machine code on the fly that is specialized for the actual dynamic types occurring on each path through the loop.',
            ],
            startDelay: 100,
            typeSpeed: 16,
            onComplete: (self) => {
                const cursor = self.cursor;
                if (cursor) {
                    cursor.style.display = 'none';
                }
            },
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (React.createElement("div", null,
        React.createElement("span", { className: 'text-[14px]', ref: el })));
};

const ChatbotHelpContent = () => {
    return (React.createElement("div", null,
        React.createElement(HelpTabComponent, null)));
};

const MockChatComponent = () => {
    const [messages, setMessages] = React.useState([
        {
            text: '<h3 class="m-0 text-[18px] font-semibold">Enter Service Address</h3>',
            isUser: false,
            isTitle: true,
        },
        {
            text: '<p class="m-0">Enter the service address for the customer to see what products we can offer them. If no products are available, ask if we can get their contact information and let them know when service becomes available in their area.</p>',
            isUser: false,
            isInstruction: true,
        },
        {
            text: '<p class="m-0">“What address are you seeking service for?”</p>',
            isUser: false,
        },
        {
            text: `<p class="m-0">“Do you currently reside at this address, or are you moving to this address?”</p>`,
            isUser: false,
        },
    ]);
    const [userInput, setUserInput] = React.useState('');
    const [inputVisible, setInputVisible] = React.useState(true);
    const handleSendMessage = () => {
        if (userInput.trim() === '') {
            // Don't send empty messages
            return;
        }
        // Add user's message to the chat
        const newUserMessage = { text: userInput, isUser: true };
        setMessages([...messages, newUserMessage]);
        // Simulate API response (dummy response)
        const dummyResponse = `This is a dummy script for the response of user input: "${userInput}" `;
        // Add dummy response to the chat after a short delay
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, { text: dummyResponse, isUser: false }]);
        }, 500);
        // Hide the input field
        setInputVisible(false);
        // Clear the input field
        setUserInput('');
    };
    return (React.createElement("div", null,
        messages.map((message, index) => (React.createElement("div", { key: index, className: `${message.isUser
                ? 'text-black text-sm leading-5 items-stretch rounded-t-3xl rounded-bl-3xl shadow-sm bg-sky-400 mt-2 mb-4 p-4'
                : message.isInstruction
                    ? 'text-black text-sm leading-5 mt-2 mb-4'
                    : message.isTitle
                        ? 'text-black leading-6 mt-2 mb-4'
                        : 'text-black text-sm leading-5 items-stretch rounded-t-3xl rounded-br-3xl shadow-sm bg-sky-200 justify-center mt-2 mb-4 p-4'}`, dangerouslySetInnerHTML: { __html: message.text } }))),
        inputVisible && (React.createElement("div", { className: "mt-2 mb-4 flex rounded-md shadow-sm" },
            React.createElement("div", { className: "relative flex flex-grow items-stretch focus-within:z-10" },
                React.createElement("input", { type: "text", value: userInput, onChange: (e) => setUserInput(e.target.value), className: "block w-full rounded-none rounded-l-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6", placeholder: "Enter text" })),
            React.createElement("button", { type: "button", onClick: handleSendMessage, className: "relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50" },
                React.createElement("span", { className: "material-icons text-dark fs-5" }, "send"))))));
};

const MockChatComponentOne = () => {
    const [messages, setMessages] = React.useState([
        {
            text: '<h3 class="m-0 text-[18px] font-semibold">Step 1: Available Plans</h3>',
            isUser: false,
            isTitle: true,
        },
        {
            text: '<p class="m-0">Select the right plan for the customer’s needs. For customers only qualifying for DSL/Copper, only the best speed available is displayed.NOTE: Be sure to ask in this step if they want phone service, and if so, do they want Single or Multi-Line.</p>',
            isUser: false,
            isInstruction: true,
        },
        {
            text: '<p class="m-0">“It looks like we can get you Internet Up to 20 Mbps, which is the fastest speed currently available for this address.”</p>',
            isUser: false,
        },
        {
            text: `<p class="m-0">“Do you need landline phone service? We actually have a great deal when you buy internet and phone together.”*</p>`,
            isUser: false,
        },
    ]);
    const [userInput, setUserInput] = React.useState('');
    const [inputVisible, setInputVisible] = React.useState(true);
    const handleSendMessage = () => {
        if (userInput.trim() === '') {
            // Don't send empty messages
            return;
        }
        // Add user's message to the chat
        const newUserMessage = { text: userInput, isUser: true };
        setMessages([...messages, newUserMessage]);
        // Simulate API response (dummy response)
        const dummyResponse = `This is a dummy script for the response of user input: "${userInput}" `;
        // Add dummy response to the chat after a short delay
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, { text: dummyResponse, isUser: false }]);
        }, 500);
        // Hide the input field
        setInputVisible(false);
        // Clear the input field
        setUserInput('');
    };
    return (React.createElement("div", null,
        messages.map((message, index) => (React.createElement("div", { key: index, className: `${message.isUser
                ? 'text-black text-sm leading-5 items-stretch rounded-t-3xl rounded-bl-3xl shadow-sm bg-sky-400 mt-2 mb-4 p-4'
                : message.isInstruction
                    ? 'text-black text-sm leading-5 mt-2 mb-4'
                    : message.isTitle
                        ? 'text-black leading-6 mt-2 mb-4'
                        : 'text-black text-sm leading-5 items-stretch rounded-t-3xl rounded-br-3xl shadow-sm bg-sky-200 justify-center mt-2 mb-4 p-4'}`, dangerouslySetInnerHTML: { __html: message.text } }))),
        inputVisible && (React.createElement("div", { className: "mt-2 mb-4 flex rounded-md shadow-sm" },
            React.createElement("div", { className: "relative flex flex-grow items-stretch focus-within:z-10" },
                React.createElement("input", { type: "text", value: userInput, onChange: (e) => setUserInput(e.target.value), className: "block w-full rounded-none rounded-l-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6", placeholder: "Enter text" })),
            React.createElement("button", { type: "button", onClick: handleSendMessage, className: "relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50" },
                React.createElement("span", { className: "material-icons text-dark fs-5" }, "send"))))));
};

var css_248z$1 = ".chatbottab-module_chatContentWrapper__H9Gye {\n  overflow-y: auto;\n  height: 400px;\n}";
var styles$1 = {"chatContentWrapper":"chatbottab-module_chatContentWrapper__H9Gye"};
styleInject(css_248z$1);

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const ChatBotTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);
    return (React.createElement("div", null,
        React.createElement("div", { className: "px-4" },
            React.createElement("div", { className: "justify-between rounded-md bg-[#54C7DE] flex gap-1 px-3 py-2 items-start" }, tabs.map((tab) => (React.createElement("button", { key: tab.id, className: classNames(activeTab === tab.id ? 'bg-[#BFEEF8]' : 'bg-transparent', 'whitespace-nowrap py-1.5 rounded px-3 text-sm font-medium text-black'), onClick: () => setActiveTab(tab.id) }, tab.label))))),
        React.createElement("div", { className: `${styles$1.chatContentWrapper} p-4` }, tabs.map((tab) => (React.createElement("div", { key: tab.id, className: activeTab === tab.id ? '' : 'hidden' }, tab.content))))));
};

const ChatbotTranscriptContent = () => {
    return (React.createElement("div", null, "Transcript Content"));
};

var css_248z = ".chatbot-module_mainWrapBlue__Xki6Y {\n  background: #7edef1;\n  width: 320px;\n  margin: 0;\n  min-height: 520px;\n  position: fixed;\n  bottom: 0;\n  right: 24px;\n}\n.chatbot-module_minimizeButton__BnZBW {\n  background: rgba(0, 0, 0, 0.1);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n.chatbot-module_minimizeButton__BnZBW span {\n  font-size: 20px;\n}\n.chatbot-module_navWrap__BW3QD {\n  background-color: #54c7de;\n}\n.chatbot-module_navWrap__BW3QD span.material-icons {\n  font-size: 14px;\n}\n.chatbot-module_buttonsNavHome__JU49I a.nav-link {\n  font-size: 14px;\n  border-radius: 4px;\n  color: #333;\n}\n.chatbot-module_buttonsNavHome__JU49I a.nav-link.active {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #333;\n}\n.chatbot-module_chatPanelWrap__ZTs6z {\n  padding-bottom: 54px;\n  overflow-y: auto;\n}\n.chatbot-module_stepContent__-DEAF {\n  margin-bottom: 10px;\n}\n.chatbot-module_stepContent__-DEAF h4 {\n  font-size: 16px;\n}\n.chatbot-module_stepContent__-DEAF p {\n  font-size: 14px;\n}\n.chatbot-module_chatBubble__QnGW9 {\n  font-size: 14px;\n}\n.chatbot-module_chatBubble__QnGW9.chatbot-module_sent__-2t-4 {\n  background: #bfeef9;\n  border-radius: 20px 20px 0 20px;\n}\n.chatbot-module_chatBubble__QnGW9.chatbot-module_received__WJdqh {\n  background: #5dc0d6;\n  border-radius: 20px 20px 20px 0;\n}\n.chatbot-module_promptTabContainer__9O0G2 .tab-content {\n  height: 400px;\n}\n.chatbot-module_inputText__6koWj {\n  border: 0 !important;\n  font-size: 14px !important;\n}\n.chatbot-module_sendButton__JKLZc {\n  border-radius: 20px;\n  min-width: 38px;\n  width: 38px;\n  height: 38px;\n  border: 0 !important;\n}\n";
var styles = {"mainWrapBlue":"chatbot-module_mainWrapBlue__Xki6Y","minimizeButton":"chatbot-module_minimizeButton__BnZBW","navWrap":"chatbot-module_navWrap__BW3QD","buttonsNavHome":"chatbot-module_buttonsNavHome__JU49I","chatPanelWrap":"chatbot-module_chatPanelWrap__ZTs6z","stepContent":"chatbot-module_stepContent__-DEAF","chatBubble":"chatbot-module_chatBubble__QnGW9","sent":"chatbot-module_sent__-2t-4","received":"chatbot-module_received__WJdqh","promptTabContainer":"chatbot-module_promptTabContainer__9O0G2","inputText":"chatbot-module_inputText__6koWj","sendButton":"chatbot-module_sendButton__JKLZc"};
styleInject(css_248z);

let scriptContent = React.createElement(MockChatComponent, null);
const ChatBot = ({ closeChatBot, step }) => {
    if (step === true) {
        scriptContent = React.createElement(MockChatComponentOne, null);
    }
    else {
        scriptContent = React.createElement(MockChatComponent, null);
    }
    const tabs = [
        { id: 'tab1', label: 'Script', content: scriptContent },
        { id: 'tab2', label: 'Help', content: React.createElement(ChatbotHelpContent, null) },
        { id: 'tab3', label: 'Transcript', content: React.createElement(ChatbotTranscriptContent, null) },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${styles.mainWrapBlue} rounded-t-xl flex flex-col` },
            React.createElement("div", { className: "flex justify-between my-4 px-3" },
                React.createElement("h4", { className: "text-2xl font-medium m-0" }, "Agent Assist"),
                React.createElement("button", { type: "button", onClick: closeChatBot, className: "flex justify-center items-center rounded-full" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })))),
            React.createElement("div", null,
                React.createElement(ChatBotTabs, { tabs: tabs })))));
};

const ChatComponent = () => {
    const [showChat, setShowChat] = React.useState(true);
    const closeChatBot = () => {
        setShowChat(false);
    };
    return React.createElement("div", { className: styles$2.root }, showChat && React.createElement(ChatBot, { closeChatBot: closeChatBot }));
};

exports.ChatComponent = ChatComponent;
//# sourceMappingURL=index.js.map
