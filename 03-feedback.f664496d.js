var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return s.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=f.test(e);return l||a.test(e)?u(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return b(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,f,a,u,l,c=0,s=!1,d=!1,y=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function T(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=f}function h(){var e,n,i,o=p();if(T(o))return O(o);u=setTimeout(h,(e=o-l,n=o-c,i=t-e,d?v(i,f-n):i))}function O(e){return(u=void 0,y&&o)?j(e):(o=r=void 0,a)}function w(){var e,n=p(),i=T(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return c=e=l,u=setTimeout(h,t),s?j(e):a;if(d)return u=setTimeout(h,t),j(l)}return void 0===u&&(u=setTimeout(h,t)),a}return t=g(t)||0,b(i)&&(s=!!i.leading,f=(d="maxWait"in i)?m(g(i.maxWait)||0,t):f,y="trailing"in i?!!i.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},w.flush=function(){return void 0===u?a:O(p())},w}(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");console.dir(y),y.addEventListener("submit",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){e.preventDefault();let{email:t,message:n}=e.currentTarget.elements;console.dir(user={email:t.value,message:n.value}),localStorage.setItem("feedback-form-state",JSON.stringify(user)),y.reset()},500)),localStorage.removeItem("feedback-form-state");
//# sourceMappingURL=03-feedback.f664496d.js.map