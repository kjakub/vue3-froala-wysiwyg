(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-froala-wysiwyg", [], factory);
	else if(typeof exports === 'object')
		exports["vue-froala-wysiwyg"] = factory();
	else
		root["vue-froala-wysiwyg"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NOOP; });
/* unused harmony export PatchFlagNames */
/* unused harmony export babelParserDefaultPlugins */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return def; });
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return extend; });
/* unused harmony export generateCodeFrame */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getGlobalThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return invokeArrayFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isArray; });
/* unused harmony export isBooleanAttr */
/* unused harmony export isDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isGloballyWhitelisted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isIntegerKey; });
/* unused harmony export isKnownAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return isModelListener; });
/* unused harmony export isNoUnitNumericStyleProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isOn; });
/* unused harmony export isPlainObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isReservedProp; });
/* unused harmony export isSSRSafeAttrName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return isSVGTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isSpecialBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return isSymbol; });
/* unused harmony export isVoidTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return looseEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return looseIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return normalizeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return normalizeStyle; });
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return remove; });
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* unused harmony export toDisplayString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return toHandlerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return toRawType; });
/* unused harmony export toTypeString */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = ( false)
    ? undefined
    : {};
const EMPTY_ARR = ( false) ? undefined : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * froala_editor v4.0.14 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2022 Froala Labs
 */

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},writable:!0,configurable:!0}),function(){var a=/^\s*:scope/gi,s=/,\s*:scope/gi,l=document.createElement("div");function e(e,t){var i=e[t];e[t]=function(e){var t,n=!1,r=!1;if(!e||Array.isArray(e)||!e.match(a)&&!e.match(s))return i.call(this,e);this.parentNode||(l.appendChild(this),r=!0);var o=this.parentNode;return this.id||(this.id="rootedQuerySelector_id_".concat((new Date).getTime()),n=!0),t=i.call(o,e.replace(a,"#".concat(this.id)).replace(s,",#".concat(this.id))),n&&(this.id=""),r&&l.removeChild(this),t}}try{var t=l.querySelectorAll(":scope *");if(!t||Array.isArray(t))throw"error"}catch(n){e(Element.prototype,"querySelector"),e(Element.prototype,"querySelectorAll"),e(HTMLElement.prototype,"querySelector"),e(HTMLElement.prototype,"querySelectorAll")}}(),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(e){if("Element"in e){var t="classList",n="prototype",r=e.Element[n],o=Object,i=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[n].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},s=function s(e,t){this.name=e,this.code=DOMException[e],this.message=t},l=function l(e,t){if(""===t)throw new s("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(t))throw new s("INVALID_CHARACTER_ERR","The token must not contain space characters.");return a.call(e,t)},c=function c(e){for(var t=i.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):[],r=0,o=n.length;r<o;r++)this.push(n[r]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},d=c[n]=[],f=function f(){return new c(this)};if(s[n]=Error[n],d.item=function(e){return this[e]||null},d.contains=function(e){return~l(this,e+"")},d.add=function(){for(var e,t=arguments,n=0,r=t.length,o=!1;e=t[n]+"",~l(this,e)||(this.push(e),o=!0),++n<r;);o&&this._updateClassName()},d.remove=function(){var e,t,n=arguments,r=0,o=n.length,i=!1;do{for(e=n[r]+"",t=l(this,e);~t;)this.splice(t,1),i=!0,t=l(this,e)}while(++r<o);i&&this._updateClassName()},d.toggle=function(e,t){var n=this.contains(e),r=n?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!n},d.replace=function(e,t){var n=l(e+"");~n&&(this.splice(n,1,t),this._updateClassName())},d.toString=function(){return this.join(" ")},o.defineProperty){var p={get:f,enumerable:!0,configurable:!0};try{o.defineProperty(r,t,p)}catch(h){void 0!==h.number&&-2146823252!==h.number||(p.enumerable=!1,o.defineProperty(r,t,p))}}else o[n].__defineGetter__&&r.__defineGetter__(t,f)}}(self),function(){var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function yc(e){var yc=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var t,n=arguments.length;for(t=0;t<n;t++)e=arguments[t],yc.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:n.call(this,e)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(e,t){var n=this.toString().split(" "),r=n.indexOf(e+"");~r&&(n=n.slice(r),this.remove.apply(this,n),this.add(t),this.add.apply(this,n.slice(1)))}),e=null}()),function(){var e,t=-1;if("Microsoft Internet Explorer"===navigator.appName?(e=navigator.userAgent,null!==new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))):"Netscape"===navigator.appName&&(e=navigator.userAgent,null!==new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))),!("undefined"==typeof window||"undefined"==typeof document||"undefined"==typeof HTMLElement||t<0)){var n=!1;try{var r=document.createElement("div");r.addEventListener("focus",function(e){e.preventDefault(),e.stopPropagation()},!0),r.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&"undefined"!=typeof navigator.userAgent&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return n=!1;n=!0}}))}catch(s){}if(HTMLElement.prototype.nativeFocus===undefined&&!n){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var o=function o(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push([t,t.scrollTop,t.scrollLeft]),t=t.parentNode;return t=r,n.push([t,t.scrollTop,t.scrollLeft]),n},i=function i(e){for(var t=0;t<e.length;t++)e[t][0].scrollTop=e[t][1],e[t][0].scrollLeft=e[t][2];e=[]},a=function a(e){if(e&&e.preventScroll){var t=o(this);if("function"==typeof setTimeout){var n=this;setTimeout(function(){n.nativeFocus(),i(t)},0)}else this.nativeFocus(),i(t)}else this.nativeFocus()};HTMLElement.prototype.focus=a}}}();function V(e,t,n){if("string"!=typeof e)return new V.Bootstrap(e,t,n);var r=document.querySelectorAll(e);t&&t.iframe_document&&(r=t.iframe_document.querySelectorAll(e));for(var o=[],i=0;i<r.length;i++){var a=r[i]["data-froala.editor"];a?o.push(a):o.push(new V.Bootstrap(r[i],t,n))}return 1==o.length?o[0]:o}V.RegisterPlugins=function(e){for(var t=0;t<e.length;t++)e[t].call(V)},Object.assign(V,{DEFAULTS:{initOnClick:!1,pluginsEnabled:null},MODULES:{},PLUGINS:{},VERSION:"4.0.14",INSTANCES:[],OPTS_MAPPING:{},SHARED:{},ID:0}),V.MODULES.node=function(a){var n=a.$;function s(e){return e&&"IFRAME"!==e.tagName?Array.prototype.slice.call(e.childNodes||[]):[]}function l(e){return!!e&&(e.nodeType===Node.ELEMENT_NODE&&0<=V.BLOCK_TAGS.indexOf(e.tagName.toLowerCase()))}function c(e){var t={},n=e.attributes;if(n)for(var r=0;r<n.length;r++){var o=n[r];t[o.nodeName]=o.value}return t}function t(e){for(var t="",n=c(e),r=Object.keys(n).sort(),o=0;o<r.length;o++){var i=r[o],a=n[i];a.indexOf("'")<0&&0<=a.indexOf('"')?t+=" ".concat(i,"='").concat(a,"'"):(0<=a.indexOf('"')&&0<=a.indexOf("'")&&(a=a.replace(/"/g,"&quot;")),t+=" ".concat(i,'="').concat(a,'"'))}return t}function r(e){return e===a.el}return{isBlock:l,isEmpty:function d(e,t){if(!e)return!0;if(e.querySelector("table"))return!1;var n=s(e);1===n.length&&l(n[0])&&(n=s(n[0]));for(var r=!1,o=0;o<n.length;o++){var i=n[o];if(!(t&&a.node.hasClass(i,"fr-marker")||i.nodeType===Node.TEXT_NODE&&0===i.textContent.length)){if("BR"!==i.tagName&&0<(i.textContent||"").replace(/\u200B/gi,"").replace(/\n/g,"").length)return!1;if(r)return!1;"BR"===i.tagName&&(r=!0)}}return!(e.querySelectorAll(V.VOID_ELEMENTS.join(",")).length-e.querySelectorAll("br").length||e.querySelector("".concat(a.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"),":not(.fr-marker)"))||1<e.querySelectorAll(V.BLOCK_TAGS.join(",")).length||e.querySelector("".concat(a.opts.htmlDoNotWrapTags.join(":not(.fr-marker),"),":not(.fr-marker)")))},blockParent:function o(e){for(;e&&e.parentNode!==a.el&&(!e.parentNode||!a.node.hasClass(e.parentNode,"fr-inner"));)if(l(e=e.parentNode))return e;return null},deepestParent:function i(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=!0),t.push(a.el),0<=t.indexOf(e.parentNode)||e.parentNode&&a.node.hasClass(e.parentNode,"fr-inner")||e.parentNode&&0<=V.SIMPLE_ENTER_TAGS.indexOf(e.parentNode.tagName)&&n)return null;for(;t.indexOf(e.parentNode)<0&&e.parentNode&&!a.node.hasClass(e.parentNode,"fr-inner")&&(V.SIMPLE_ENTER_TAGS.indexOf(e.parentNode.tagName)<0||!n)&&(!l(e)||l(e.parentNode))&&(!l(e)||!l(e.parentNode)||!n);)e=e.parentNode;return e},rawAttributes:c,attributes:t,clearAttributes:function f(e){for(var t=e.attributes,n=t.length-1;0<=n;n--){var r=t[n];e.removeAttribute(r.nodeName)}},openTagString:function p(e){return"<".concat(e.tagName.toLowerCase()).concat(t(e),">")},closeTagString:function h(e){return"</".concat(e.tagName.toLowerCase(),">")},isFirstSibling:function u(e,t){void 0===t&&(t=!0);for(var n=e.previousSibling;n&&t&&a.node.hasClass(n,"fr-marker");)n=n.previousSibling;return!n||n.nodeType===Node.TEXT_NODE&&""===n.textContent&&u(n)},isLastSibling:function g(e,t){void 0===t&&(t=!0);for(var n=e.nextSibling;n&&t&&a.node.hasClass(n,"fr-marker");)n=n.nextSibling;return!n||n.nodeType===Node.TEXT_NODE&&""===n.textContent&&g(n)},isList:function C(e){return!!e&&0<=["UL","OL"].indexOf(e.tagName)},isLink:function m(e){return!!e&&e.nodeType===Node.ELEMENT_NODE&&"a"===e.tagName.toLowerCase()},isElement:r,contents:s,isVoid:function v(e){return e&&e.nodeType===Node.ELEMENT_NODE&&0<=V.VOID_ELEMENTS.indexOf((e.tagName||"").toLowerCase())},hasFocus:function b(e){return e===a.doc.activeElement&&(!a.doc.hasFocus||a.doc.hasFocus())&&Boolean(r(e)||e.type||e.href||~e.tabIndex)},isEditable:function L(e){return(!e.getAttribute||"false"!==e.getAttribute("contenteditable"))&&["STYLE","SCRIPT"].indexOf(e.tagName)<0},isDeletable:function E(e){return e&&e.nodeType===Node.ELEMENT_NODE&&e.getAttribute("class")&&0<=(e.getAttribute("class")||"").indexOf("fr-deletable")},hasClass:function y(e,t){return e instanceof n&&(e=e.get(0)),e&&e.classList&&e.classList.contains(t)},filter:function S(e){return a.browser.msie?e:{acceptNode:e}}}},Object.assign(V.DEFAULTS,{DOMPurify:window.DOMPurify,htmlAllowedTags:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","br","button","canvas","caption","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","queue","rp","rt","ruby","s","samp","script","style","section","select","small","source","span","strike","strong","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video","wbr"],htmlRemoveTags:["script","style"],htmlAllowedAttrs:["accept","accept-charset","accesskey","action","align","allowfullscreen","allowtransparency","alt","async","autocomplete","autofocus","autoplay","autosave","background","bgcolor","border","charset","cellpadding","cellspacing","checked","cite","class","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-.*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","frameborder","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","max","maxlength","media","method","min","mozallowfullscreen","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","srcset","start","step","summary","spellcheck","style","tabindex","target","title","type","translate","usemap","value","valign","webkitallowfullscreen","width","wrap"],htmlAllowedStyleProps:[".*"],htmlAllowComments:!0,htmlUntouched:!1,fullPage:!1}),V.HTML5Map={B:"STRONG",I:"EM",STRIKE:"S"},V.MODULES.clean=function(f){var d,p,h,u,g=f.$;function o(e){if(e.nodeType===Node.ELEMENT_NODE&&e.getAttribute("class")&&0<=e.getAttribute("class").indexOf("fr-marker"))return!1;var t,n=f.node.contents(e),r=[];for(t=0;t<n.length;t++)n[t].nodeType!==Node.ELEMENT_NODE||f.node.isVoid(n[t])?n[t].nodeType===Node.TEXT_NODE&&(n[t].textContent=n[t].textContent.replace(/\u200b/g,"")):n[t].textContent.replace(/\u200b/g,"").length!==n[t].textContent.length&&o(n[t]);if(e.nodeType===Node.ELEMENT_NODE&&!f.node.isVoid(e)&&(e.normalize(),n=f.node.contents(e),r=e.querySelectorAll(".fr-marker"),n.length-r.length==0)){for(t=0;t<n.length;t++)if(n[t].nodeType===Node.ELEMENT_NODE&&(n[t].getAttribute("class")||"").indexOf("fr-marker")<0)return!1;for(t=0;t<r.length;t++)e.parentNode.insertBefore(r[t].cloneNode(!0),e);return e.parentNode.removeChild(e),!1}}function s(e,t){if(e.nodeType===Node.COMMENT_NODE)return"\x3c!--".concat(e.nodeValue,"--\x3e");if(e.nodeType===Node.TEXT_NODE)return t?e.textContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e.textContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00A0/g,"&nbsp;").replace(/\u0009/g,"");if(e.nodeType!==Node.ELEMENT_NODE)return e.outerHTML;if(e.nodeType===Node.ELEMENT_NODE&&0<=["STYLE","SCRIPT","NOSCRIPT"].indexOf(e.tagName))return e.outerHTML;if(e.nodeType===Node.ELEMENT_NODE&&"svg"===e.tagName){var n=document.createElement("div"),r=e.cloneNode(!0);return n.appendChild(r),n.innerHTML}if("IFRAME"===e.tagName)return e.outerHTML.replace(/&lt;/g,"<").replace(/&gt;/g,">");var o=e.childNodes;if(0===o.length)return e.outerHTML;for(var i="",a=0;a<o.length;a++)"PRE"===e.tagName&&(t=!0),i+=s(o[a],t);return f.node.openTagString(e)+i+f.node.closeTagString(e)}var l=[];function C(e){var t=e.replace(/;;/gi,";");return";"!==(t=t.replace(/^;/gi,"")).charAt(t.length)&&(t+=";"),t}function c(e){var t;for(t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=t.match(h),r=null;"style"===t&&f.opts.htmlAllowedStyleProps.length&&(r=e[t].match(u)),n&&r?e[t]=C(r.join(";")):n&&("style"!==t||r)||delete e[t]}for(var o="",i=Object.keys(e).sort(),a=0;a<i.length;a++)e[t=i[a]].indexOf('"')<0?o+=" ".concat(t,'="').concat(e[t],'"'):o+=" ".concat(t,"='").concat(e[t],"'");return o}function m(e,t){var n,r=document.implementation.createHTMLDocument("Froala DOC").createElement("DIV");g(r).append(e);var o="";if(r){var i=f.node.contents(r);for(n=0;n<i.length;n++)t(i[n]);for(i=f.node.contents(r),n=0;n<i.length;n++)o+=s(i[n])}return o}function v(e,t,n){var r=e=function i(e){return l=[],e=(e=(e=(e=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,function(e){return l.push(e),"[FROALA.EDITOR.SCRIPT ".concat(l.length-1,"]")})).replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi,function(e){return l.push(e),"[FROALA.EDITOR.NOSCRIPT ".concat(l.length-1,"]")})).replace(/<meta((?:[\w\W]*?)) http-equiv="/g,'<meta$1 data-fr-http-equiv="')).replace(/<img((?:[\w\W]*?)) src="/g,'<img$1 data-fr-src="')}(e),o=null;return f.opts.fullPage&&(r=f.html.extractNode(e,"body")||(0<=e.indexOf("<body")?"":e),n&&(o=f.html.extractNode(e,"head")||"")),r=m(r,t),o&&(o=m(o,t)),function a(e){return e=(e=(e=e.replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi,function(e,t){return 0<=f.opts.htmlRemoveTags.indexOf("script")?"":l[parseInt(t,10)]})).replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi,function(e,t){if(0<=f.opts.htmlRemoveTags.indexOf("noscript"))return"";var n=l[parseInt(t,10)].replace(/&lt;/g,"<").replace(/&gt;/g,">"),r=g(n);if(r&&r.length){var o=m(r.html(),L);r.html(o),n=r.get(0).outerHTML}return n})).replace(/<img((?:[\w\W]*?)) data-fr-src="/g,'<img$1 src="')}(function s(e,t,n){if(f.opts.fullPage){var r=f.html.extractDoctype(n),o=c(f.html.extractNodeAttrs(n,"html"));t=null===t?f.html.extractNode(n,"head")||"<title></title>":t;var i=c(f.html.extractNodeAttrs(n,"head")),a=c(f.html.extractNodeAttrs(n,"body"));return"".concat(r,"<html").concat(o,"><head").concat(i,">").concat(t,"</head><body").concat(a,">").concat(e,"</body></html>")}return e}(r,o,e))}function b(e){var t=f.doc.createElement("DIV");return t.innerText=e,t.textContent}function L(e){for(var t=f.node.contents(e),n=0;n<t.length;n++)t[n].nodeType!==Node.TEXT_NODE&&L(t[n]);!function c(a){if("SPAN"===a.tagName&&0<=(a.getAttribute("class")||"").indexOf("fr-marker"))return!1;if("PRE"===a.tagName&&function l(e){var t=e.innerHTML;0<=t.indexOf("\n")&&(e.innerHTML=t.replace(/\n/g,"<br>"))}(a),a.nodeType===Node.ELEMENT_NODE&&(a.getAttribute("data-fr-src")&&0!==a.getAttribute("data-fr-src").indexOf("blob:")&&a.setAttribute("data-fr-src",f.helpers.sanitizeURL(b(a.getAttribute("data-fr-src")))),a.getAttribute("href")&&a.setAttribute("href",f.helpers.sanitizeURL(b(a.getAttribute("href")))),a.getAttribute("src")&&a.setAttribute("src",f.helpers.sanitizeURL(b(a.getAttribute("src")))),a.getAttribute("srcdoc")&&a.setAttribute("srcdoc",f.clean.html(a.getAttribute("srcdoc"))),0<=["TABLE","TBODY","TFOOT","TR"].indexOf(a.tagName)&&(a.innerHTML=a.innerHTML.trim())),!f.opts.pasteAllowLocalImages&&a.nodeType===Node.ELEMENT_NODE&&"IMG"===a.tagName&&a.getAttribute("data-fr-src")&&0===a.getAttribute("data-fr-src").indexOf("file://"))return a.parentNode.removeChild(a),!1;if(a.nodeType===Node.ELEMENT_NODE&&V.HTML5Map[a.tagName]&&""===f.node.attributes(a)){var e=V.HTML5Map[a.tagName],t="<".concat(e,">").concat(a.innerHTML,"</").concat(e,">");a.insertAdjacentHTML("beforebegin",t),(a=a.previousSibling).parentNode.removeChild(a.nextSibling)}if(f.opts.htmlAllowComments||a.nodeType!==Node.COMMENT_NODE)if(a.tagName&&a.tagName.match(p))"STYLE"==a.tagName&&f.helpers.isMac()&&function(){var e,n=a.innerHTML.trim(),r=[],t=/{([^}]+)}/g;for(n=n.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*|<!--[\s\S]*?-->$/,"");e=t.exec(n);)r.push(e[1]);for(var o=function o(t){var e=n.substring(0,n.indexOf("{")).trim();0==!/^[a-z_-][a-z\d_-]*$/i.test(e)&&a.parentNode.querySelectorAll(e).forEach(function(e){e.removeAttribute("class"),e.setAttribute("style",r[t])}),n=n.substring(n.indexOf("}")+1)},i=0;-1!=n.indexOf("{");i++)o(i)}(),a.parentNode.removeChild(a);else if(a.tagName&&!a.tagName.match(d))"svg"===a.tagName?a.parentNode.removeChild(a):f.browser.safari&&"path"===a.tagName&&a.parentNode&&"svg"===a.parentNode.tagName||(a.outerHTML=a.innerHTML);else{var n=a.attributes;if(n)for(var r=n.length-1;0<=r;r--){var o=n[r],i=o.nodeName.match(h),s=null;"style"===o.nodeName&&f.opts.htmlAllowedStyleProps.length&&(s=o.value.match(u)),i&&s?o.value=C(s.join(";")):i&&("style"!==o.nodeName||s)||a.removeAttribute(o.nodeName)}}else 0!==a.data.indexOf("[FROALA.EDITOR")&&a.parentNode.removeChild(a)}(e)}return{_init:function e(){f.opts.fullPage&&g.merge(f.opts.htmlAllowedTags,["head","title","style","link","base","body","html","meta"])},html:function E(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=!1);var o,i=g.merge([],f.opts.htmlAllowedTags);for(o=0;o<t.length;o++)0<=i.indexOf(t[o])&&i.splice(i.indexOf(t[o]),1);var a=g.merge([],f.opts.htmlAllowedAttrs);for(o=0;o<n.length;o++)0<=a.indexOf(n[o])&&a.splice(a.indexOf(n[o]),1);return a.push("data-fr-.*"),a.push("fr-.*"),d=new RegExp("^".concat(i.join("$|^"),"$"),"gi"),h=new RegExp("^".concat(a.join("$|^"),"$"),"gi"),p=new RegExp("^".concat(f.opts.htmlRemoveTags.join("$|^"),"$"),"gi"),u=f.opts.htmlAllowedStyleProps.length?new RegExp("((^|;|\\s)".concat(f.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)"),":.+?(?=(;)|$))"),"gi"):null,e=v(e,L,!0),"undefined"!=typeof f.opts.DOMPurify&&(e=f.opts.DOMPurify.sanitize(e,{ADD_TAGS:f.opts.htmlAllowedTags,ALLOW_UNKNOWN_PROTOCOLS:!0})),e},toHTML5:function r(){var e=f.el.querySelectorAll(Object.keys(V.HTML5Map).join(","));if(e.length){var t=!1;f.el.querySelector(".fr-marker")||(f.selection.save(),t=!0);for(var n=0;n<e.length;n++)""===f.node.attributes(e[n])&&g(e[n]).replaceWith("<".concat(V.HTML5Map[e[n].tagName],">").concat(e[n].innerHTML,"</").concat(V.HTML5Map[e[n].tagName],">"));t&&f.selection.restore()}},tables:function t(){!function s(){for(var e=f.el.querySelectorAll("tr"),t=0;t<e.length;t++){for(var n=e[t].children,r=!0,o=0;o<n.length;o++)if("TH"!==n[o].tagName){r=!1;break}if(!1!==r&&0!==n.length){for(var i=e[t];i&&"TABLE"!==i.tagName&&"THEAD"!==i.tagName;)i=i.parentNode;var a=i;"THEAD"!==a.tagName&&(a=f.doc.createElement("THEAD"),i.insertBefore(a,i.firstChild)),a.appendChild(e[t])}}}()},lists:function y(){!function s(){var e,t=[];do{if(t.length){var n=t[0],r=f.doc.createElement("ul");n.parentNode.insertBefore(r,n);do{var o=n;n=n.nextSibling,r.appendChild(o)}while(n&&"LI"===n.tagName)}t=[];for(var i=f.el.querySelectorAll("li"),a=0;a<i.length;a++)e=i[a],f.node.isList(e.parentNode)||t.push(i[a])}while(0<t.length)}(),function i(){for(var e=f.el.querySelectorAll("ol + ol, ul + ul"),t=0;t<e.length;t++){var n=e[t];if(f.node.isList(n.previousSibling)&&f.node.openTagString(n)===f.node.openTagString(n.previousSibling)){for(var r=f.node.contents(n),o=0;o<r.length;o++)n.previousSibling.appendChild(r[o]);n.parentNode.removeChild(n)}}}(),function a(){for(var e=f.el.querySelectorAll("ul, ol"),t=0;t<e.length;t++)for(var n=f.node.contents(e[t]),r=null,o=n.length-1;0<=o;o--)!n[o].tagName&&f.opts.htmlUntouched||"LI"===n[o].tagName||"UL"==n[o].tagName||"OL"==n[o].tagName?r=null:"BR"==n[o].tagName?g(n[o]).remove():(r||(r=g(f.doc.createElement("LI"))).insertBefore(n[o]),r.prepend(n[o]))}(),function l(){var e,t,n;do{t=!1;var r=f.el.querySelectorAll("li:empty");for(e=0;e<r.length;e++)r[e].parentNode.removeChild(r[e]);var o=f.el.querySelectorAll("ul, ol");for(e=0;e<o.length;e++)(n=o[e]).querySelector("LI")||(t=!0,n.parentNode.removeChild(n))}while(!0===t)}(),function o(){for(var e=f.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul"),t=0;t<e.length;t++){var n=e[t],r=n.previousSibling;r&&("LI"===r.tagName?r.appendChild(n):g(n).wrap("<li></li>"))}}(),function c(){for(var e=f.el.querySelectorAll("li > ul, li > ol"),t=0;t<e.length;t++){var n=e[t];if(n.nextSibling)for(var r=n.nextSibling;0<r.childNodes.length;)n.append(r.childNodes[0])}}(),function d(){for(var e=f.el.querySelectorAll("li > ul, li > ol"),t=0;t<e.length;t++){var n=e[t];if(f.node.isFirstSibling(n)&&"none"!=n.parentNode.style.listStyleType)g(n).before("<br/>");else if(n.previousSibling&&"BR"===n.previousSibling.tagName){for(var r=n.previousSibling.previousSibling;r&&f.node.hasClass(r,"fr-marker");)r=r.previousSibling;r&&"BR"!==r.tagName&&g(n.previousSibling).remove()}}}(),function n(){for(var e=f.el.querySelectorAll("li:empty"),t=0;t<e.length;t++)g(e[t]).remove()}()},invisibleSpaces:function n(e){return e.replace(/\u200b/g,"").length===e.length?e:f.clean.exec(e,o)},exec:v}},V.XS=0,V.SM=1,V.MD=2,V.LG=3;V.LinkRegExCommon="[".concat("a-z\\u0080-\\u009f\\u00a1-\\uffff0-9-_\\.","]{1,}"),V.LinkRegExEnd="((:[0-9]{1,5})|)(((\\/|\\?|#)[a-z\\u00a1-\\uffff0-9@?\\|!^=%&amp;\\/~+#-\\'*-_{}]*)|())",V.LinkRegExTLD="((".concat(V.LinkRegExCommon,")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))"),V.LinkRegExHTTP="((ftp|http|https):\\/\\/".concat(V.LinkRegExCommon,")"),V.LinkRegExAuth="((ftp|http|https):\\/\\/[\\u0021-\\uffff]{1,}@".concat(V.LinkRegExCommon,")"),V.LinkRegExWWW="(www\\.".concat(V.LinkRegExCommon,"\\.[a-z0-9-]{2,24})"),V.LinkRegEx="(".concat(V.LinkRegExTLD,"|").concat(V.LinkRegExHTTP,"|").concat(V.LinkRegExWWW,"|").concat(V.LinkRegExAuth,")").concat(V.LinkRegExEnd),V.LinkProtocols=["mailto","tel","sms","notes","data"],V.MAIL_REGEX=/.+@.+\..+/i,V.MODULES.helpers=function(i){var a,s=i.$;function e(){var e={},t=function i(){var e,t=-1;return"Microsoft Internet Explorer"===navigator.appName?(e=navigator.userAgent,null!==new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))):"Netscape"===navigator.appName&&(e=navigator.userAgent,null!==new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))),t}();if(0<t)e.msie=!0;else{var n=navigator.userAgent.toLowerCase(),r=/(edge)[ /]([\w.]+)/.exec(n)||/(chrome)[ /]([\w.]+)/.exec(n)||/(webkit)[ /]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ /]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[],o=r[1]||"";r[2];r[1]&&(e[o]=!0),e.chrome?e.webkit=!0:e.webkit&&(e.safari=!0)}return e.msie&&(e.version=t),e}function t(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!o()}function n(){return/(Android)/g.test(navigator.userAgent)&&!o()}function r(){return/(Blackberry)/g.test(navigator.userAgent)}function o(){return/(Windows Phone)/gi.test(navigator.userAgent)}var l=null;return{_init:function c(){i.browser=e()},isIOS:t,isMac:function d(){return null===l&&(l=0<=navigator.platform.toUpperCase().indexOf("MAC")),l},isAndroid:n,isBlackberry:r,isWindowsPhone:o,isMobile:function f(){return n()||t()||r()},isEmail:function p(e){return!/^(https?:|ftps?:|)\/\//i.test(e)&&V.MAIL_REGEX.test(e)},requestAnimationFrame:function h(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},getPX:function u(e){return parseInt(e,10)||0},screenSize:function g(e){try{var t=0;if((t=e?i.$box.width():i.$sc.width())<768)return V.XS;if(768<=t&&t<992)return V.SM;if(992<=t&&t<1200)return V.MD;if(1200<=t)return V.LG}catch(n){return V.LG}},isTouch:function C(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch},sanitizeURL:function m(e){return i.opts.DOMPurify&&(e=i.opts.DOMPurify.sanitize(e,{ADD_TAGS:i.opts.htmlAllowedTags,ALLOW_UNKNOWN_PROTOCOLS:!0,ALLOWED_URI_REGEXP:/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|xxx):|[^a-z]|[a-z+.]+(?:[^a-z+.\-:]|$))/i})),/^(https?:|ftps?:|)\/\//i.test(e)?e:/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(e)?e:new RegExp("^(".concat(V.LinkProtocols.join("|"),"):"),"i").test(e)?e:e=encodeURIComponent(e).replace(/%23/g,"#").replace(/%2F/g,"/").replace(/%25/g,"%").replace(/mailto%3A/gi,"mailto:").replace(/file%3A/gi,"file:").replace(/sms%3A/gi,"sms:").replace(/tel%3A/gi,"tel:").replace(/notes%3A/gi,"notes:").replace(/data%3Aimage/gi,"data:image").replace(/blob%3A/gi,"blob:").replace(/%3A(\d)/gi,":$1").replace(/webkit-fake-url%3A/gi,"webkit-fake-url:").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&").replace(/&amp;/g,"&").replace(/%2C/g,",").replace(/%3B/g,";").replace(/%2B/g,"+").replace(/%40/g,"@").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%7B/g,"{").replace(/%7D/g,"}").replace(/%[0-1]+[0-9]+|%[0-1]+[A-F]+/g,"")},isArray:function v(e){return e&&!Object.prototype.propertyIsEnumerable.call(e,"length")&&"object"===M(e)&&"number"==typeof e.length},RGBToHex:function b(e){function t(e){return"0".concat(parseInt(e,10).toString(16)).slice(-2)}try{return e&&"transparent"!==e?/^#[0-9A-F]{6}$/i.test(e)?e:(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#".concat(t(e[1])).concat(t(e[2])).concat(t(e[3])).toUpperCase()):""}catch(n){return null}},HEXtoRGB:function L(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?"rgb(".concat(parseInt(t[1],16),", ").concat(parseInt(t[2],16),", ").concat(parseInt(t[3],16),")"):""},isURL:function E(e){return!!/^(https?:|ftps?:|)\/\//i.test(e)&&(e=String(e).replace(/</g,"%3C").replace(/>/g,"%3E").replace(/"/g,"%22").replace(/ /g,"%20"),new RegExp("^".concat(V.LinkRegExHTTP).concat(V.LinkRegExEnd,"$"),"gi").test(e))},getAlignment:function y(e){e.css||(e=s(e));var t=(e.css("text-align")||"").replace(/-(.*)-/g,"");if(["left","right","justify","center"].indexOf(t)<0){if(!a){var n=s('<div dir="'.concat("rtl"===i.opts.direction?"rtl":"auto",'" style="text-align: ').concat(i.$el.css("text-align"),'; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>'));s("body").first().append(n);var r=n.find("#s1").get(0).getBoundingClientRect().left,o=n.find("#s2").get(0).getBoundingClientRect().left;n.remove(),a=r<o?"left":"right"}t=a}return t},scrollTop:function S(){return i.o_win.pageYOffset?i.o_win.pageYOffset:i.o_doc.documentElement&&i.o_doc.documentElement.scrollTop?i.o_doc.documentElement.scrollTop:i.o_doc.body.scrollTop?i.o_doc.body.scrollTop:0},scrollLeft:function N(){return i.o_win.pageXOffset?i.o_win.pageXOffset:i.o_doc.documentElement&&i.o_doc.documentElement.scrollLeft?i.o_doc.documentElement.scrollLeft:i.o_doc.body.scrollLeft?i.o_doc.body.scrollLeft:0},isInViewPort:function T(e){var t=e.getBoundingClientRect();return 0<=(t={top:Math.round(t.top),bottom:Math.round(t.bottom)}).top&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)||t.top<=0&&t.bottom>=(window.innerHeight||document.documentElement.clientHeight)}}},V.MODULES.events=function(l){var e,i=l.$,a={};function s(e,t,n){C(e,t,n)}function c(e){if(void 0===e&&(e=!0),!l.$wp)return!1;if(l.helpers.isIOS()&&l.$win.get(0).focus(),l.core.hasFocus())return!1;if(!l.core.hasFocus()&&e){var t=l.$win.scrollTop();if(l.browser.msie&&l.$box&&l.$box.css("position","fixed"),l.browser.msie&&l.$wp&&l.$wp.css("overflow","visible"),l.browser.msie&&l.$sc&&l.$sc.css("position","fixed"),l.browser.msie||(p(),l.el.focus(),l.events.trigger("focus"),f()),l.browser.msie&&l.$sc&&l.$sc.css("position",""),l.browser.msie&&l.$box&&l.$box.css("position",""),l.browser.msie&&l.$wp&&l.$wp.css("overflow","auto"),t!==l.$win.scrollTop()&&l.$win.scrollTop(t),!l.selection.info(l.el).atStart)return!1}if(!l.core.hasFocus()||0<l.$el.find(".fr-marker").length)return!1;if(l.selection.info(l.el).atStart&&l.selection.isCollapsed()&&null!==l.html.defaultTag()){var n=l.markers.insert();if(n&&!l.node.blockParent(n)){i(n).remove();var r=l.$el.find(l.html.blockTagsQuery()).get(0);r&&(i(r).prepend(V.MARKERS),l.selection.restore())}else n&&i(n).remove()}}var d=!1;function f(){e=!0}function p(){e=!1}function h(){return e}function u(e,t,n){var r,o=e.split(" ");if(1<o.length){for(var i=0;i<o.length;i++)u(o[i],t,n);return!0}void 0===n&&(n=!1),r=0!==e.indexOf("shared.")?(a[e]=a[e]||[],a[e]):(l.shared._events[e]=l.shared._events[e]||[],l.shared._events[e]),n?r.unshift(t):r.push(t)}var g=[];function C(e,t,n,r,o){"function"==typeof n&&(o=r,r=n,n=!1);var i=o?l.shared.$_events:g,a=o?l.sid:l.id,s="".concat(t.trim().split(" ").join(".ed".concat(a," ")),".ed").concat(a);n?e.on(s,n,r):e.on(s,r),i.push([e,s])}function t(e){for(var t=0;t<e.length;t++)e[t][0].off(e[t][1])}function m(e,t,n){if(!l.edit.isDisabled()||n){var r,o;if(0!==e.indexOf("shared."))r=a[e];else{if(0<l.shared.count)return!1;r=l.shared._events[e]}if(r)for(var i=0;i<r.length;i++)if(!1===(o=r[i].apply(l,t)))return!1;return(!l.opts.events||!l.opts.events[e]||!1!==(o=l.opts.events[e].apply(l,t)))&&o}}function v(){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&delete a[e]}function b(){for(var e in l.shared._events)Object.prototype.hasOwnProperty.call(l.shared._events,e)&&delete l.shared._events[e]}return{_init:function L(){l.shared.$_events=l.shared.$_events||[],l.shared._events={},function e(){l.helpers.isMobile()?(l._mousedown="touchstart",l._mouseup="touchend",l._move="touchmove",l._mousemove="touchmove"):(l._mousedown="mousedown",l._mouseup="mouseup",l._move="",l._mousemove="mousemove")}(),function t(){s(l.$el,"click mouseup mousemove mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart",function(e){m(e.type,[e])}),u("mousedown",function(){for(var e=0;e<V.INSTANCES.length;e++)V.INSTANCES[e]!==l&&V.INSTANCES[e].popups&&V.INSTANCES[e].popups.areVisible()&&V.INSTANCES[e].$el.find(".fr-marker").remove()})}(),function n(){s(l.$win,l._mousedown,function(e){m("window.mousedown",[e]),f()}),s(l.$win,l._mouseup,function(e){m("window.mouseup",[e])}),s(l.$win,"beforeinput cut copy keydown keyup touchmove touchend",function(e){m("window.".concat(e.type),[e])})}(),function r(){s(l.$doc,"dragend drop",function(e){m("document.".concat(e.type),[e])})}(),function o(){s(l.$el,"beforeinput keydown keypress keyup input",function(e){m(e.type,[e])})}(),function i(){s(l.$el,"focus",function(e){h()&&(c(!1),!1===d&&(m(e.type,[e]),l.helpers.isMobile()&&p()))}),s(l.$el,"blur",function(e){h()&&!0===d&&(m(e.type,[e]),l.helpers.isMobile()&&l.opts.toolbarContainer&&(l.shared.selected_editor=l.id),f())}),C(l.$el,"mousedown",'[contenteditable="true"]',function(){p(),l.$el.blur()}),u("focus",function(){d=!0}),u("blur",function(){d=!1})}(),f(),function a(){s(l.$el,"cut copy paste beforepaste",function(e){m(e.type,[e])})}(),u("destroy",v),u("shared.destroy",b)},on:u,trigger:m,bindClick:function r(e,t,n){C(e,l._mousedown,t,function(e){l.edit.isDisabled()||function n(e){var t=i(e.currentTarget);return l.edit.isDisabled()||l.node.hasClass(t.get(0),"fr-disabled")?(e.preventDefault(),!1):"mousedown"===e.type&&1!==e.which||(l.helpers.isMobile()||e.preventDefault(),(l.helpers.isAndroid()||l.helpers.isWindowsPhone())&&0===t.parents(".fr-dropdown-menu").length&&(e.preventDefault(),e.stopPropagation()),t.addClass("fr-selected"),void l.events.trigger("commands.mousedown",[t]))}(e)},!0),C(e,"".concat(l._mouseup," ").concat(l._move),t,function(e){l.edit.isDisabled()||function o(e,t){var n=i(e.currentTarget);if(l.edit.isDisabled()||l.node.hasClass(n.get(0),"fr-disabled"))return e.preventDefault(),!1;if("mouseup"===e.type&&1!==e.which)return!0;if(l.button.getButtons(".fr-selected",!0).get(0)==n.get(0)&&!l.node.hasClass(n.get(0),"fr-selected"))return!0;if("touchmove"!==e.type){if(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),!l.node.hasClass(n.get(0),"fr-selected"))return l.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),!1;if(l.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),n.data("dragging")||n.attr("disabled"))return n.removeData("dragging"),!1;var r=n.data("timeout");r&&(clearTimeout(r),n.removeData("timeout")),t.apply(l,[e])}else n.data("timeout")||n.data("timeout",setTimeout(function(){n.data("dragging",!0)},100))}(e,n)},!0),C(e,"mousedown click mouseup",t,function(e){l.edit.isDisabled()||e.stopPropagation()},!0),u("window.mouseup",function(){l.edit.isDisabled()||(e.find(t).removeClass("fr-selected"),f())}),C(e,"mouseover",t,function(){i(this).hasClass("fr-options")&&i(this).prev(".fr-btn").addClass("fr-btn-hover"),i(this).next(".fr-btn").hasClass("fr-options")&&i(this).next(".fr-btn").addClass("fr-btn-hover")}),C(e,"mouseout",t,function(){i(this).hasClass("fr-options")&&i(this).prev(".fr-btn").removeClass("fr-btn-hover"),i(this).next(".fr-btn").hasClass("fr-options")&&i(this).next(".fr-btn").removeClass("fr-btn-hover")})},disableBlur:p,enableBlur:f,blurActive:h,focus:c,chainTrigger:function E(e,t,n){if(!l.edit.isDisabled()||n){var r,o;if(0!==e.indexOf("shared."))r=a[e];else{if(0<l.shared.count)return!1;r=l.shared._events[e]}if(r)for(var i=0;i<r.length;i++)void 0!==(o=r[i].apply(l,[t]))&&(t=o);return l.opts.events&&l.opts.events[e]&&void 0!==(o=l.opts.events[e].apply(l,[t]))&&(t=o),t}},$on:C,$off:function n(){t(g),g=[],0===l.shared.count&&(t(l.shared.$_events),l.shared.$_events=[])}}},Object.assign(V.DEFAULTS,{indentMargin:20}),V.COMMANDS={bold:{title:"Bold",toggle:!0,refresh:function(e){var t=this.format.is("strong");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},italic:{title:"Italic",toggle:!0,refresh:function(e){var t=this.format.is("em");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},underline:{title:"Underline",toggle:!0,refresh:function(e){var t=this.format.is("u");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},strikeThrough:{title:"Strikethrough",toggle:!0,refresh:function(e){var t=this.format.is("s");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},subscript:{title:"Subscript",toggle:!0,refresh:function(e){var t=this.format.is("sub");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},superscript:{title:"Superscript",toggle:!0,refresh:function(e){var t=this.format.is("sup");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},outdent:{title:"Decrease Indent"},indent:{title:"Increase Indent"},undo:{title:"Undo",undo:!1,forcedRefresh:!0,disabled:!0},redo:{title:"Redo",undo:!1,forcedRefresh:!0,disabled:!0},insertHR:{title:"Insert Horizontal Line"},clearFormatting:{title:"Clear Formatting"},selectAll:{title:"Select All",undo:!1},moreText:{title:"More Text",undo:!1},moreParagraph:{title:"More Paragraph",undo:!1},moreRich:{title:"More Rich",undo:!1},moreMisc:{title:"More Misc",undo:!1}},V.RegisterCommand=function(e,t){V.COMMANDS[e]=t},V.MODULES.commands=function(a){var s=a.$;function l(e){return a.html.defaultTag()&&(e="<".concat(a.html.defaultTag(),">").concat(e,"</").concat(a.html.defaultTag(),">")),e}var i={bold:function(){e("bold","strong")},subscript:function(){a.format.is("sup")&&a.format.remove("sup"),e("subscript","sub")},superscript:function(){a.format.is("sub")&&a.format.remove("sub"),e("superscript","sup")},italic:function(){e("italic","em")},strikeThrough:function(){e("strikeThrough","s")},underline:function(){e("underline","u")},undo:function(){a.undo.run()},redo:function(){a.undo.redo()},indent:function(){r(1)},outdent:function(){r(-1)},show:function(){a.opts.toolbarInline&&a.toolbar.showInline(null,!0)},insertHR:function(){a.selection.remove();var e="";a.core.isEmpty()&&(e=l(e="<br>"));var t='<hr id="fr-just" class="fr-just">'.concat(e);a.opts.trackChangesEnabled&&(t=a.track_changes.wrapInTracking(s(t),"hrWrapper").get(0).outerHTML);a.html.insert(t);var n,r=a.$el.find("hr#fr-just").length?a.$el.find("hr#fr-just"):a.$el.find(".fr-just");r.removeAttr("id"),r.removeAttr("class");var o=a.opts.trackChangesEnabled&&"SPAN"===r[0].parentNode.tagName&&"P"===r[0].parentNode.parentNode.tagName;if(0===r.next().length){var i=a.html.defaultTag();i&&!o?r.after(s(a.doc.createElement(i)).append("<br>").get(0)):o?r[0].parentNode.after(s(a.doc.createElement(i)).append("<br>").get(0)):r.after("<br>")}r.prev().is("hr")?n=a.selection.setAfter(r.get(0),!1):r.next().is("hr")?n=a.selection.setBefore(r.get(0),!1):o||a.selection.setAfter(r.get(0),!1)?a.selection.setAfter(r[0].parentNode,!1):a.selection.setBefore(r.get(0),!1),n||void 0===n||(e=l(e="".concat(V.MARKERS,"<br>")),r.after(e)),a.selection.restore()},clearFormatting:function(){a.format.remove()},selectAll:function(){a.doc.execCommand("selectAll",!1,!1)},moreText:function(e){t(e)},moreParagraph:function(e){t(e)},moreRich:function(e){t(e)},moreMisc:function(e){t(e)},moreTrackChanges:function(){t("trackChanges")}};function t(e){var t=a.$tb.find("[data-cmd=".concat(e,"]")),n=a.$tb.find("[data-cmd=html]");a.opts.trackChangesEnabled?n&&n.addClass("fr-disabled"):n&&n.removeClass("fr-disabled"),function r(n){a.helpers.isMobile()&&a.opts.toolbarInline&&a.events.disableBlur();var e=a.$tb.find('.fr-more-toolbar[data-name="'.concat(n.attr("data-group-name"),'"]'));"trackChanges"===n.data("cmd")&&(e=a.$tb.find('.fr-more-toolbar[data-name="'.concat(n.attr("id"),'"]')));if(a.$tb.find(".fr-open").not(n).not('[data-cmd="trackChanges"]').removeClass("fr-open"),n.toggleClass("fr-open"),a.$tb.find(".fr-more-toolbar").removeClass("fr-overflow-visible"),a.$tb.find(".fr-expanded").not(e).length){var t=a.$tb.find(".fr-expanded").not(e);t.each(function(e,t){0!=s(t).data("name").indexOf("trackChanges-")&&0!=s(t).data("name").indexOf("moreRich-")?s(t).toggleClass("fr-expanded"):n.parents('[data-name^="moreRich-"]').length||0==s(t).data("name").indexOf("trackChanges-")||s(t).find('[id^="trackChanges-"]').length&&a.opts.trackChangesEnabled||s(t).toggleClass("fr-expanded")}),e.toggleClass("fr-expanded")}else e.toggleClass("fr-expanded"),a.$box.toggleClass("fr-toolbar-open"),a.$tb.toggleClass("fr-toolbar-open")}(t),a.toolbar.setMoreToolbarsHeight()}function n(e,t){if(!(a.markdown&&a.markdown.isEnabled()&&("bold"===e||"italic"===e||"underline"===e)||a.opts.trackChangesEnabled&&"markdown"===e)&&!1!==a.events.trigger("commands.before",s.merge([e],t||[]))){var n=V.COMMANDS[e]&&V.COMMANDS[e].callback||i[e],r=!0,o=!1;V.COMMANDS[e]&&("undefined"!=typeof V.COMMANDS[e].focus&&(r=V.COMMANDS[e].focus),"undefined"!=typeof V.COMMANDS[e].accessibilityFocus&&(o=V.COMMANDS[e].accessibilityFocus)),(!a.core.hasFocus()&&r||!a.core.hasFocus()&&o&&a.accessibility.hasFocus())&&(a.el.focus({preventScroll:!0}),a.events.trigger("focus")),V.COMMANDS[e]&&!1!==V.COMMANDS[e].undo&&(a.$el.find(".fr-marker").length&&(a.events.disableBlur(),a.selection.restore()),a.undo.saveStep()),n&&n.apply(a,s.merge([e],t||[])),a.events.trigger("commands.after",s.merge([e],t||[])),V.COMMANDS[e]&&!1!==V.COMMANDS[e].undo&&a.undo.saveStep()}}function e(e,t){a.format.toggle(t)}function r(e){a.selection.save(),a.html.wrap(!0,!0,!0,!0),a.selection.restore();for(var t=a.selection.blocks(),n=0;n<t.length;n++)if("LI"!==t[n].tagName||"LI"!==t[n].parentNode.tagName){var r=s(t[n]);"LI"!=t[n].tagName&&"LI"==t[n].parentNode.tagName&&(r=s(t[n].parentNode));var o="rtl"===a.opts.direction||"rtl"===r.css("direction")?"margin-right":"margin-left",i=a.helpers.getPX(r.css(o));if(r.width()<2*a.opts.indentMargin&&0<e)continue;"UL"!=t[n].parentNode.tagName&&"OL"!=t[n].parentNode.tagName&&"LI"!=t[n].parentNode.tagName&&r.css(o,Math.max(i+e*a.opts.indentMargin,0)||""),r.removeClass("fr-temp-div")}a.selection.save(),a.html.unwrap(),a.selection.restore()}function o(e){return function(){n(e)}}var c={};for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(c[d]=o(d));return Object.assign(c,{exec:n,_init:function f(){a.events.on("keydown",function(e){var t=a.selection.element();if(t&&"HR"===t.tagName&&!a.keys.isArrow(e.which))return e.preventDefault(),!1}),a.events.on("keyup",function(e){var t=a.selection.element();if(t&&"HR"===t.tagName)if(e.which===V.KEYCODE.ARROW_LEFT||e.which===V.KEYCODE.ARROW_UP){if(t.previousSibling)return a.node.isBlock(t.previousSibling)?a.selection.setAtEnd(t.previousSibling):s(t).before(V.MARKERS),a.selection.restore(),!1}else if((e.which===V.KEYCODE.ARROW_RIGHT||e.which===V.KEYCODE.ARROW_DOWN)&&t.nextSibling)return a.node.isBlock(t.nextSibling)?a.selection.setAtStart(t.nextSibling):s(t).after(V.MARKERS),a.selection.restore(),!1}),a.events.on("mousedown",function(e){if(e.target&&"HR"===e.target.tagName)return e.preventDefault(),e.stopPropagation(),!1}),a.events.on("mouseup",function(){var e=a.selection.element();e===a.selection.endElement()&&e&&"HR"===e.tagName&&(e.nextSibling&&(a.node.isBlock(e.nextSibling)?a.selection.setAtStart(e.nextSibling):s(e).after(V.MARKERS)),a.selection.restore())})}})},V.MODULES.cursorLists=function(v){var b=v.$;function L(e){for(var t=e;"LI"!==t.tagName;)t=t.parentNode;return t}function E(e){for(var t=e;!v.node.isList(t);)t=t.parentNode;return t}function y(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+="".concat(r.name,"='").concat(r.value,"' ")}return t}return{_startEnter:function S(e){var t,n=L(e),r=n.nextSibling,o=n.previousSibling,i=v.html.defaultTag();if(v.node.isEmpty(n,!0)&&r){for(var a="",s="",l=e.parentNode;!v.node.isList(l)&&l.parentNode&&("LI"!==l.parentNode.tagName||l.parentNode===n);)-1<["OL","LI","UL"].indexOf(l.tagName)&&(a=v.node.openTagString(l)+a,s+=v.node.closeTagString(l)),l=l.parentNode;a=v.node.openTagString(l)+a,s+=v.node.closeTagString(l);var c="";if(l.parentNode&&"LI"===l.parentNode.tagName)if(l.parentNode.attributes.length){var d=y(l.parentNode.attributes);c="".concat(s,"<li ").concat(d,">").concat(V.MARKERS,"<br>").concat(a)}else c="".concat(s,"<li>").concat(V.MARKERS,"<br>").concat(a);else c=i?"".concat(s,"<").concat(i,">").concat(V.MARKERS,"<br></").concat(i,">").concat(a):"".concat(s+V.MARKERS,"<br>").concat(a);for(;["UL","OL"].indexOf(l.tagName)<0||l.parentNode&&"LI"===l.parentNode.tagName;)l=l.parentNode;b(n).replaceWith('<span id="fr-break"></span>');var f=v.node.openTagString(l)+b(l).html()+v.node.closeTagString(l);f=f.replace(/<span id="fr-break"><\/span>/g,c),b(l).replaceWith(f),v.$el.find("li:empty").remove(),v.$el.find("li > p > span:empty").length&&v.$el.find("li > p > span:empty")[0].parentNode.parentNode.remove()}else if(o&&r||!v.node.isEmpty(n,!0)){var p="<br>",h=e.parentNode;for(h&&"A"===h.tagName&&(h=null);h&&"LI"!==h.tagName;)p=v.node.openTagString(h)+p+v.node.closeTagString(h),h=h.parentNode;if(h&&h.attributes.length){var u=y(h.attributes);b(n).before("<li ".concat(u,">").concat(p,"</li>"))}else b(n).before("<li>".concat(p,"</li>"));b(e).remove()}else if(o){t=E(n);for(var g="".concat(V.MARKERS,"<br>"),C=e.parentNode;C&&"LI"!==C.tagName;)g=v.node.openTagString(C)+g+v.node.closeTagString(C),C=C.parentNode;if(t.parentNode&&"LI"===t.parentNode.tagName)if(t.parentNode.attributes.length){var m=y(t.parentNode.attributes);b(t.parentNode).after("<li ".concat(m,">").concat(g,"</li>"))}else b(t.parentNode).after("<li>".concat(g,"</li>"));else i?b(t).after("<".concat(i,">").concat(g,"</").concat(i,">")):b(t).after(g);b(n).remove()}else(t=E(n)).parentNode&&"LI"===t.parentNode.tagName?r?b(t.parentNode).before("".concat(v.node.openTagString(n)+V.MARKERS,"<br></li>")):b(t.parentNode).after("".concat(v.node.openTagString(n)+V.MARKERS,"<br></li>")):i?b(t).before("<".concat(i,">").concat(V.MARKERS,"<br></").concat(i,">")):b(t).before("".concat(V.MARKERS,"<br>")),b(n).remove()},_middleEnter:function c(e){for(var t=L(e),n="",r=e,o="",i="",a=!1;r!==t;){var s="A"===(r=r.parentNode).tagName&&v.cursor.isAtEnd(e,r)?"fr-to-remove":"";a||r==t||v.node.isBlock(r)||(a=!0,o+=V.INVISIBLE_SPACE),o=v.node.openTagString(b(r).clone().addClass(s).get(0))+o,i+=v.node.closeTagString(r)}n=i+n+o+V.MARKERS+(v.opts.keepFormatOnDelete?V.INVISIBLE_SPACE:""),b(e).replaceWith('<span id="fr-break"></span>');var l=v.node.openTagString(t)+b(t).html()+v.node.closeTagString(t);l=l.replace(/<span id="fr-break"><\/span>/g,n),b(t).replaceWith(l)},_endEnter:function l(e){for(var t=L(e),n=V.MARKERS,r="",o=e,i=!1;o!==t;)if(!(o=o.parentNode).classList.contains("fr-img-space-wrap")&&!o.classList.contains("fr-img-space-wrap2")){var a="A"===o.tagName&&v.cursor.isAtEnd(e,o)?"fr-to-remove":"";i||o===t||v.node.isBlock(o)||(i=!0,r+=V.INVISIBLE_SPACE),r=v.node.openTagString(b(o).clone().addClass(a).get(0))+r,n+=v.node.closeTagString(o)}var s=r+n;b(e).remove(),b(t).after(s)},_backspace:function d(e){var t=L(e),n=t.previousSibling;if(n){n=b(n).find(v.html.blockTagsQuery()).get(-1)||n,b(e).replaceWith(V.MARKERS);var r=v.node.contents(n);r.length&&"BR"===r[r.length-1].tagName&&b(r[r.length-1]).remove(),b(t).find(v.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode===t&&b(this).replaceWith(b(this).html()+(v.node.isEmpty(this)?"":"<br>"))});for(var o,i=v.node.contents(t)[0];i&&!v.node.isList(i);)o=i.nextSibling,b(n).append(i),i=o;for(n=t.previousSibling;i;)o=i.nextSibling,b(n).append(i),i=o;1<(r=v.node.contents(n)).length&&"BR"===r[r.length-1].tagName&&b(r[r.length-1]).remove(),b(t).remove()}else{var a=E(t);if(b(e).replaceWith(V.MARKERS),a.parentNode&&"LI"===a.parentNode.tagName){var s=a.previousSibling;v.node.isBlock(s)?(b(t).find(v.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode===t&&b(this).replaceWith(b(this).html()+(v.node.isEmpty(this)?"":"<br>"))}),b(s).append(b(t).html())):b(a).before(b(t).html())}else{var l=v.html.defaultTag();l&&0===b(t).find(v.html.blockTagsQuery()).length?b(a).before("<".concat(l,">").concat(b(t).html(),"</").concat(l,">")):b(a).before(b(t).html())}b(t).remove(),v.html.wrap(),0===b(a).find("li").length&&b(a).remove()}},_del:function f(e){var t,n=L(e),r=n.nextSibling;if(r){(t=v.node.contents(r)).length&&"BR"===t[0].tagName&&b(t[0]).remove(),b(r).find(v.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode===r&&b(this).replaceWith(b(this).html()+(v.node.isEmpty(this)?"":"<br>"))});for(var o,i=e,a=v.node.contents(r)[0];a&&!v.node.isList(a);)o=a.nextSibling,b(i).after(a),i=a,a=o;for(;a;)o=a.nextSibling,b(n).append(a),a=o;b(e).replaceWith(V.MARKERS),b(r).remove()}else{for(var s=n;!s.nextSibling&&s!==v.el;)s=s.parentNode;if(s===v.el)return!1;if(s=s.nextSibling,v.node.isBlock(s)){if(V.NO_DELETE_TAGS.indexOf(s.tagName)<0){if(b(e).replaceWith(V.MARKERS),(t=v.node.contents(n)).length&&"BR"===t[t.length-1].tagName&&b(t[t.length-1]).remove(),s.isContentEditable&&"DIV"===s.tagName&&(!v.node.isBlock(s.previousSibling)||"DIV"===s.previousSibling.tagName))return;b(n).append(b(s).html()),b(s).remove()}}else{for((t=v.node.contents(n)).length&&"BR"===t[t.length-1].tagName&&b(t[t.length-1]).remove(),b(e).replaceWith(V.MARKERS);s&&!v.node.isBlock(s)&&"BR"!==s.tagName;)b(n).append(b(s)),s=s.nextSibling;b(s).remove()}}}}},V.NO_DELETE_TAGS=["TH","TD","TR","TABLE","FORM"],V.SIMPLE_ENTER_TAGS=["TH","TD","LI","DL","DT","FORM"],V.MODULES.cursor=function(g){var C=g.$;function h(e){return!!e&&(g.node.isBlock(e)?"P"!==e.tagName||!e.nextElementSibling||!e.parentElement||"OL"!==e.nextElementSibling.tagName||"LI"!==e.parentElement.tagName:e.nextSibling&&e.nextSibling.nodeType===Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?h(e.nextSibling):!(e.nextSibling&&(!e.previousSibling||"BR"!==e.nextSibling.tagName||e.nextSibling.nextSibling))&&h(e.parentNode))}function u(e){return!!e&&(!!g.node.isBlock(e)||(e.previousSibling&&e.previousSibling.nodeType===Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?u(e.previousSibling):!e.previousSibling&&(!(e.previousSibling||!g.node.hasClass(e.parentNode,"fr-inner"))||u(e.parentNode))))}function m(e,t){return!!e&&(e!==g.$wp.get(0)&&(e.previousSibling&&e.previousSibling.nodeType===Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?m(e.previousSibling,t):!e.previousSibling&&(e.parentNode===t||m(e.parentNode,t))))}function v(e,t){return!!e&&(e!==g.$wp.get(0)&&(e.nextSibling&&e.nextSibling.nodeType===Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?v(e.nextSibling,t):!(e.nextSibling&&(!e.previousSibling||"BR"!==e.nextSibling.tagName||e.nextSibling.nextSibling))&&(e.parentNode===t||v(e.parentNode,t))))}function b(e){return 0<C(e).parentsUntil(g.$el,"LI").length&&0===C(e).parentsUntil("LI","TABLE").length}function L(e,t){var n=new RegExp("".concat(t?"^":"","(([\\uD83C-\\uDBFF\\uDC00-\\uDFFF]+\\u200D)*[\\uD83C-\\uDBFF\\uDC00-\\uDFFF]{2})").concat(t?"":"$"),"i"),r=e.match(n);return r?r[0].length:1}function E(e){for(var t,n=e;!n.previousSibling;)if(n=n.parentNode,g.node.isElement(n))return!1;n=n.previousSibling;var r=g.opts.htmlAllowedEmptyTags,o=n.tagName&&n.tagName.toLowerCase();if((!g.node.isBlock(n)||n.lastChild&&o&&0<=r.indexOf(o))&&g.node.isEditable(n)){for(t=g.node.contents(n);n.nodeType!==Node.TEXT_NODE&&!g.node.isDeletable(n)&&t.length&&g.node.isEditable(n);)n=t[t.length-1],t=g.node.contents(n);if(n.nodeType===Node.TEXT_NODE){var i=n.textContent,a=i.length;if(i.length&&"\n"===i[i.length-1])return n.textContent=i.substring(0,a-2),0===n.textContent.length&&n.parentNode.removeChild(n),E(e);if(g.opts.tabSpaces&&i.length>=g.opts.tabSpaces)0===i.substr(i.length-g.opts.tabSpaces,i.length-1).replace(/ /g,"").replace(new RegExp(V.UNICODE_NBSP,"g"),"").length&&(a=i.length-g.opts.tabSpaces+1);n.textContent=i.substring(0,a-L(i));var s=n.textContent;(g.opts.enter===V.ENTER_BR&&0<s.length&&" "===s.charAt(s.length-1)||0===s.length&&e.previousSibling&&3===e.previousSibling.nodeType&&"TD"!==e.parentNode.tagName&&"LI"!==e.parentNode.tagName&&i!==String.fromCharCode(8203))&&(e.insertAdjacentHTML("beforebegin",V.INVISIBLE_SPACE),n=n.nextSibling),g.opts.trackChangesEnabled&&0===n.textContent.length&&C(n.parentElement).data("tracking")&&0===C(n.parentElement).find("[data-tracking-deleted=true]").length&&(C(e).insertBefore(n.parentElement),C(n.parentElement).remove(),n=C(e)[0].previousSibling),g.opts.htmlUntouched&&!e.nextSibling&&n.textContent.length&&" "===n.textContent[n.textContent.length-1]&&(n.textContent=n.textContent.substring(0,n.textContent.length-1)+V.UNICODE_NBSP);var l=i.length!==n.textContent.length;if(g.opts.enter!==V.ENTER_BR&&n&&n.previousSibling&&n.previousSibling.previousSibling&&"BR"===n.previousSibling.previousSibling.tagName&&n.previousSibling.previousSibling.remove(),0===n.textContent.length&&"LI"===n.parentNode.tagName&&n.previousSibling&&"BR"===n.previousSibling.tagName&&n.previousSibling.remove(),0===n.textContent.length)if(l&&g.opts.keepFormatOnDelete)C(n).after(V.INVISIBLE_SPACE+V.MARKERS);else if(0!==i.length&&g.node.isBlock(n.parentNode))C(n).after(V.MARKERS);else if((2!=n.parentNode.childNodes.length||n.parentNode!=e.parentNode)&&1!=n.parentNode.childNodes.length||g.node.isBlock(n.parentNode)||g.node.isElement(n.parentNode)||!g.node.isDeletable(n.parentNode)){for(var c,d=n;!g.node.isElement(n.parentNode)&&g.node.isEmpty(n.parentNode)&&V.NO_DELETE_TAGS.indexOf(n.parentNode.tagName)<0;)if("A"===(n=n.parentNode).tagName){var f=n.childNodes[0];for(C(n).before(f),c=!0;0<f.childNodes.length;)f=f.childNodes[0];n.parentNode.removeChild(n),n=f;break}c||(n=d),C(n).after(V.MARKERS),g.node.isElement(n.parentNode)&&!e.nextSibling&&n.previousSibling&&"BR"===n.previousSibling.tagName&&C(e).after("<br>");var p=n.parentNode;n.parentNode.removeChild(n),g.node.isEmpty(p)&&C(p).html(V.INVISIBLE_SPACE+V.MARKERS)}else C(n.parentNode).after(V.MARKERS),C(n.parentNode).remove();else C(n).after(V.MARKERS)}else g.node.isDeletable(n)?(C(n).after(V.MARKERS),C(n).remove()):e.nextSibling&&"BR"===e.nextSibling.tagName&&g.node.isVoid(n)&&"BR"!==n.tagName?(C(e.nextSibling).remove(),C(e).replaceWith(V.MARKERS)):!1!==g.events.trigger("node.remove",[C(n)])&&(C(n).after(V.MARKERS),C(n).remove())}else if(V.NO_DELETE_TAGS.indexOf(n.tagName)<0&&(g.node.isEditable(n)||g.node.isDeletable(n)))if(g.node.isDeletable(n))C(e).replaceWith(V.MARKERS),C(n).remove();else if(g.node.isEmpty(n)&&!g.node.isList(n))C(n).remove(),C(e).replaceWith(V.MARKERS);else{for(g.node.isList(n)&&(n=C(n).find("li").last().get(0)),(t=g.node.contents(n))&&0<t.length&&"BR"===t[t.length-1].tagName&&C(t[t.length-1]).remove(),t=g.node.contents(n);t&&0<t.length&&g.node.isBlock(t[t.length-1]);)n=t[t.length-1],t=g.node.contents(n);C(n).append(V.MARKERS);for(var h=e;!h.previousSibling;)h=h.parentNode;for(;h&&"BR"!==h.tagName&&!g.node.isBlock(h);){var u=h;h=h.nextSibling,C(n).append(u)}h&&"BR"===h.tagName&&C(h).remove(),C(e).remove()}else e.nextSibling&&"BR"===e.nextSibling.tagName&&C(e.nextSibling).remove();return!0}function i(e){var t=0<C(e).parentsUntil(g.$el,"BLOCKQUOTE").length,n=g.node.deepestParent(e,[],!t);if(n&&"BLOCKQUOTE"===n.tagName){var r=g.node.deepestParent(e,[C(e).parentsUntil(g.$el,"BLOCKQUOTE").get(0)]);r&&r.nextSibling&&(n=r)}if(null!==n){var o,i=n.nextSibling;if(g.node.isBlock(n)&&(g.node.isEditable(n)||g.node.isDeletable(n))&&i&&V.NO_DELETE_TAGS.indexOf(i.tagName)<0)if(g.node.isDeletable(i))C(i).remove(),C(e).replaceWith(V.MARKERS);else if(g.node.isBlock(i)&&g.node.isEditable(i))if(g.node.isList(i))if(g.node.isEmpty(n,!0))C(n).remove(),C(i).find("li").first().prepend(V.MARKERS);else{var a=C(i).find("li").first();"BLOCKQUOTE"===n.tagName&&(o=g.node.contents(n)).length&&g.node.isBlock(o[o.length-1])&&(n=o[o.length-1]),0===a.find("ul, ol").length&&(C(e).replaceWith(V.MARKERS),a.find(g.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode===a.get(0)&&C(this).replaceWith(C(this).html()+(g.node.isEmpty(this)?"":"<br>"))}),C(n).append(g.node.contents(a.get(0))),a.remove(),0===C(i).find("li").length&&C(i).remove())}else{if((o=g.node.contents(i)).length&&"BR"===o[0].tagName&&C(o[0]).remove(),"BLOCKQUOTE"!==i.tagName&&"BLOCKQUOTE"===n.tagName)for(o=g.node.contents(n);o.length&&g.node.isBlock(o[o.length-1]);)n=o[o.length-1],o=g.node.contents(n);else if("BLOCKQUOTE"===i.tagName&&"BLOCKQUOTE"!==n.tagName)for(o=g.node.contents(i);o.length&&g.node.isBlock(o[0]);)i=o[0],o=g.node.contents(i);C(e).replaceWith(V.MARKERS),C(n).append(i.innerHTML),C(i).remove()}else{for(C(e).replaceWith(V.MARKERS);i&&"BR"!==i.tagName&&!g.node.isBlock(i)&&g.node.isEditable(i);){var s=i;i=i.nextSibling,C(n).append(s)}i&&"BR"===i.tagName&&g.node.isEditable(i)&&C(i).remove()}}}function n(e){for(var t,n=e;!n.nextSibling;)if(n=n.parentNode,g.node.isElement(n))return!1;if("BR"===(n=n.nextSibling).tagName&&g.node.isEditable(n))if(n.nextSibling){if(g.node.isBlock(n.nextSibling)&&g.node.isEditable(n.nextSibling)){if(!(V.NO_DELETE_TAGS.indexOf(n.nextSibling.tagName)<0))return void C(n).remove();n=n.nextSibling,C(n.previousSibling).remove()}}else if(h(n)){if(b(e))g.cursorLists._del(e);else g.node.deepestParent(n)&&((!g.node.isEmpty(g.node.blockParent(n))||(g.node.blockParent(n).nextSibling&&V.NO_DELETE_TAGS.indexOf(g.node.blockParent(n).nextSibling.tagName))<0)&&C(n).remove(),n&&n.parentNode&&8203===n.parentNode.textContent.charCodeAt()&&n.parentNode.childNodes[1]&&"BR"===n.parentNode.childNodes[1].tagName&&n.parentNode.tagName.toLowerCase()===g.html.defaultTag()&&n.parentNode.nextSibling&&"TABLE"===n.parentNode.nextSibling.tagName&&C(n.parentNode).remove(),i(e));return}if(!g.node.isBlock(n)&&g.node.isEditable(n)){for(t=g.node.contents(n);n.nodeType!==Node.TEXT_NODE&&t.length&&!g.node.isDeletable(n)&&g.node.isEditable(n);)n=t[0],t=g.node.contents(n);n.nodeType===Node.TEXT_NODE?(C(n).before(V.MARKERS),n.textContent.length&&(n.textContent=n.textContent.substring(L(n.textContent,!0),n.textContent.length))):g.node.isDeletable(n)?(C(n).before(V.MARKERS),C(n).remove()):!1!==g.events.trigger("node.remove",[C(n)])&&(C(n).before(V.MARKERS),C(n).remove()),C(e).remove()}else if(V.NO_DELETE_TAGS.indexOf(n.tagName)<0&&(g.node.isEditable(n)||g.node.isDeletable(n)))if(g.node.isDeletable(n))C(e).replaceWith(V.MARKERS),C(n).remove();else if(g.node.isList(n))e.previousSibling?(C(n).find("li").first().prepend(e),g.cursorLists._backspace(e)):(C(n).find("li").first().prepend(V.MARKERS),C(e).remove());else if((t=g.node.contents(n))&&0<t.length&&"BR"===t[0].tagName&&C(t[0]).remove(),t&&0<t.length&&"BLOCKQUOTE"===n.tagName){var r=t[0];for(C(e).before(V.MARKERS);r&&"BR"!==r.tagName;){var o=r;r=r.nextSibling,C(e).before(o)}r&&"BR"===r.tagName&&C(r).remove()}else C(e).after(C(n).html()).after(V.MARKERS),C(n).remove()}function a(){for(var e=g.el.querySelectorAll("blockquote:empty"),t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function y(e,t,n){var r,o=g.node.deepestParent(e,[],!n);if(o&&"BLOCKQUOTE"===o.tagName)return v(e,o)?(r=g.html.defaultTag(),t?C(e).replaceWith("<br>"+V.MARKERS):r?C(o).after("<".concat(r,">").concat(V.MARKERS,"<br></").concat(r,">")):C(o).after("".concat(V.MARKERS,"<br>")),C(e).remove()):S(e,t,n),!1;if(null===o)(r=g.html.defaultTag())&&g.node.isElement(e.parentNode)?C(e).replaceWith("<".concat(r,">").concat(V.MARKERS,"<br></").concat(r,">")):!e.previousSibling||C(e.previousSibling).is("br")||e.nextSibling?C(e).replaceWith("<br>".concat(V.MARKERS)):C(e).replaceWith("<br>".concat(V.MARKERS,"<br>"));else{var i=e,a="";"PRE"!=o.tagName||e.nextSibling||(t=!0),g.node.isBlock(o)&&!t||(a="<br/>");var s,l="",c="",d="",f="";(r=g.html.defaultTag())&&g.node.isBlock(o)&&(d="<".concat(r,">"),f="</".concat(r,">"),o.tagName===r.toUpperCase()&&(d=g.node.openTagString(C(o).clone().removeAttr("id").get(0))));do{if(i=i.parentNode,!t||i!==o||t&&!g.node.isBlock(o))if(l+=g.node.closeTagString(i),i===o&&g.node.isBlock(o))c=d+c;else{var p=("A"===i.tagName||g.node.hasClass(i,"fa"))&&v(e,i)?"fr-to-remove":"";c="isPasted"===i.getAttribute("id")?g.node.openTagString(C(i).clone().attr("style","").addClass(p).get(0))+c:g.node.openTagString(C(i).clone().addClass(p).get(0))+c}}while(i!==o);a=l+a+c+(e.parentNode===o&&g.node.isBlock(o)?"":V.INVISIBLE_SPACE)+V.MARKERS,g.node.isBlock(o)&&!C(o).find("*").last().is("br")&&C(o).append("<br/>"),C(e).after('<span id="fr-break"></span>'),C(e).remove(),o.nextSibling&&!g.node.isBlock(o.nextSibling)||g.node.isBlock(o)||C(o).after("<br>"),s=(s=!t&&g.node.isBlock(o)?g.node.openTagString(o)+C(o).html()+f:g.node.openTagString(o)+C(o).html()+g.node.closeTagString(o)).replace(/<span id="fr-break"><\/span>/g,a),C(o).replaceWith(s)}}function S(e,t,n){var r=g.node.deepestParent(e,[],!n);if(null===r)g.html.defaultTag()&&e.parentNode===g.el?C(e).replaceWith("<".concat(g.html.defaultTag(),">").concat(V.MARKERS,"<br></").concat(g.html.defaultTag(),">")):(e.nextSibling&&!g.node.isBlock(e.nextSibling)||C(e).after("<br>"),C(e).replaceWith("<br>".concat(V.MARKERS)));else if(e.previousSibling&&"IMG"==e.previousSibling.tagName||e.nextSibling&&"IMG"==e.nextSibling.tagName)C(e).replaceWith("<"+g.html.defaultTag()+">"+V.MARKERS+"<br></"+g.html.defaultTag()+">");else{var o=e,i="";"PRE"===r.tagName&&(t=!0),g.node.isBlock(r)&&!t||(i="<br>");var a="",s="";do{var l=o;if(o=o.parentNode,"BLOCKQUOTE"===r.tagName&&g.node.isEmpty(l)&&!g.node.hasClass(l,"fr-marker")&&C(l).contains(e)&&C(l).after(e),"BLOCKQUOTE"!==r.tagName||!v(e,o)&&!m(e,o))if(!t||o!==r||t&&!g.node.isBlock(r)){a+=g.node.closeTagString(o);var c="A"==o.tagName&&v(e,o)||g.node.hasClass(o,"fa")?"fr-to-remove":"";s=g.node.openTagString(C(o).clone().addClass(c).removeAttr("id").get(0))+s,g.opts.enter!==V.ENTER_DIV&&o===r&&"DIV"===r.tagName&&(a="<br>",s="")}else"BLOCKQUOTE"==r.tagName&&t&&(s=a="")}while(o!==r);var d=r===e.parentNode&&g.node.isBlock(r)||e.nextSibling;if("BLOCKQUOTE"===r.tagName)if(e.previousSibling&&g.node.isBlock(e.previousSibling)&&e.nextSibling&&"BR"===e.nextSibling.tagName&&(C(e.nextSibling).after(e),e.nextSibling&&"BR"===e.nextSibling.tagName&&C(e.nextSibling).remove()),t)i=a+i+V.MARKERS+s;else{var f=g.html.defaultTag();i="".concat(a+i+(f?"<".concat(f,">"):"")+V.MARKERS,"<br>").concat(f?"</".concat(f,">"):"").concat(s)}else i=a+i+s+(d?"":V.INVISIBLE_SPACE)+V.MARKERS;C(e).replaceWith('<span id="fr-break"></span>');var p=g.node.openTagString(r)+C(r).html()+g.node.closeTagString(r);p=p.replace(/<span id="fr-break"><\/span>/g,i),C(r).replaceWith(p)}}function N(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+n}}function T(){var e=g.selection.get(),t=null;if(g.selection.inEditor()&&e.rangeCount)for(var n=g.selection.ranges(),r=0;r<n.length;r++){var o=n[r];t=g.selection.rangeElement(o.startContainer,o.startOffset);break}return t}return{enter:function M(e){var t=g.markers.insert();if(!t)return!0;for(var n=t.parentNode;n&&!g.node.isElement(n);){if("false"===n.getAttribute("contenteditable"))return C(t).replaceWith(V.MARKERS),g.selection.restore(),!1;if("true"===n.getAttribute("contenteditable"))break;n=n.parentNode}g.el.normalize();var r=!1;0<C(t).parentsUntil(g.$el,"BLOCKQUOTE").length&&(r=!0),C(t).parentsUntil(g.$el,"TD, TH").length&&(r=!1),h(t)?!b(t)||e||r?y(t,e,r):g.cursorLists._endEnter(t):u(t)?!b(t)||e||r?function f(e,t,n){var r,o=g.node.deepestParent(e,[],!n);if(o&&"TABLE"===o.tagName)return C(o).find("td, th").first().prepend(e),f(e,t,n);if(o&&"BLOCKQUOTE"===o.tagName)if(m(e,o)){if(!t)return(r=g.html.defaultTag())?C(o).before("<".concat(r,">").concat(V.MARKERS,"<br></").concat(r,">")):C(o).before("".concat(V.MARKERS,"<br>")),C(e).remove(),!1}else v(e,o)?y(e,t,!0):S(e,t,!0);if(null===o)(r=g.html.defaultTag())&&g.node.isElement(e.parentNode)?C(e).replaceWith("<".concat(r,">").concat(V.MARKERS,"<br></").concat(r,">")):C(e).replaceWith("<br>".concat(V.MARKERS));else{if(r=g.html.defaultTag(),g.node.isBlock(o))if("PRE"===o.tagName&&(t=!0),t)C(e).remove(),C(o).prepend("<br>".concat(V.MARKERS));else if(e.nextSibling&&"IMG"==e.nextSibling.tagName||e.nextSibling&&e.nextSibling.nextElementSibling&&"IMG"==e.nextSibling.nextElementSibling)C(e).replaceWith("<"+g.html.defaultTag()+">"+V.MARKERS+"<br></"+g.html.defaultTag()+">");else{if(g.node.isEmpty(o,!0))return y(e,t,n);if(g.opts.keepFormatOnDelete||"DIV"===o.tagName||"div"===g.html.defaultTag())if(!g.opts.keepFormatOnDelete&&"DIV"===o.tagName||"div"===g.html.defaultTag())C(o).before("<"+g.html.defaultTag()+"><br></"+g.html.defaultTag()+">");else if(g.opts.keepFormatOnDelete&&"DIV"!==o.tagName&&"div"!==g.html.defaultTag()&&u(g.selection.get().focusNode))C(o).before("".concat(g.node.openTagString(C(o).clone().removeAttr("id").get(0)),"<br>").concat(g.node.closeTagString(o)));else{for(var i=e,a=V.INVISIBLE_SPACE;i!==o&&!g.node.isElement(i);)i=i.parentNode,a=g.node.openTagString(i)+a+g.node.closeTagString(i);C(o).before(a)}else C(o).before("".concat(g.node.openTagString(C(o).clone().removeAttr("id").get(0)),"<br>").concat(g.node.closeTagString(o)))}else C(o).before("<br>");C(e).remove()}}(t,e,r):g.cursorLists._startEnter(t):!b(t)||e||r?S(t,e,r):g.cursorLists._middleEnter(t),function p(){g.$el.find(".fr-to-remove").each(function(){for(var e=g.node.contents(this),t=0;t<e.length;t++)e[t].nodeType===Node.TEXT_NODE&&(e[t].textContent=e[t].textContent.replace(/\u200B/g,""));C(this).replaceWith(this.innerHTML)})}(),g.html.fillEmptyBlocks(!0),g.opts.htmlUntouched||(g.html.cleanEmptyTags(),g.clean.lists(),g.spaces.normalizeAroundCursor()),g.selection.restore();var o=g.o_win.innerHeight;if(g.$oel[0].offsetHeight>o){var i=T();if(i){var a=N(i);a=a.top;var s=i.getBoundingClientRect().top;g.opts.scrollableContainer&&g.opts.enter!==V.ENTER_BR&&"BR"===i.tagName&&(s=a=i.parentNode.offsetTop),i.parentNode&&"TD"===i.parentNode.tagName&&o<s?g.o_win.scroll(0,s-50):s<0?g.o_win.scroll(0,a-80):!g.opts.scrollableContainer&&o<s+20?g.o_win.scroll(0,a-o+50):g.opts.scrollableContainer&&s+2*g.$tb.height()>g.$sc[0].scrollTop+C(g.$sc).height()&&g.$sc[0].scroll(0,a-C(g.$sc).height()+2*g.$tb.height())}}else if(g.opts.scrollableContainer&&g.opts.toolbarSticky){var l=T();if(l){var c=N(l);c=c.top;var d=l.getBoundingClientRect().top;g.opts.enter!==V.ENTER_BR&&"BR"===l.tagName&&(d=c=l.parentNode.offsetTop),(g.opts.iframe&&d+2*g.$tb.height()>g.$sc[0].scrollTop+C(g.$sc).height()||d+2*g.$tb.height()>C(g.$sc).height())&&g.$sc[0].scroll(0,c-C(g.$sc).height()+2*g.$tb.height())}}},backspace:function s(){var e=!1,t=g.markers.insert();if(!t)return!0;for(var n=t.parentNode;n&&!g.node.isElement(n);){if("false"===n.getAttribute("contenteditable"))return C(t).replaceWith(V.MARKERS),g.selection.restore(),!1;if(n.innerText.length&&"true"===n.getAttribute("contenteditable"))break;n=n.parentNode}g.el.normalize();var r=t.previousSibling;if(r){var o=r.textContent;o&&o.length&&8203===o.charCodeAt(o.length-1)&&(1===o.length?C(r).remove():r.textContent=r.textContent.substr(0,o.length-L(o)))}return h(t)?b(t)&&m(t,C(t).parents("li").first().get(0))?g.cursorLists._backspace(t):e=E(t):u(t)?b(t)&&m(t,C(t).parents("li").first().get(0))?g.cursorLists._backspace(t):function c(e){for(var t=0<C(e).parentsUntil(g.$el,"BLOCKQUOTE").length,n=g.node.deepestParent(e,[],!t),r=n;n&&!n.previousSibling&&"BLOCKQUOTE"!==n.tagName&&n.parentElement!==g.el&&!g.node.hasClass(n.parentElement,"fr-inner")&&V.SIMPLE_ENTER_TAGS.indexOf(n.parentElement.tagName)<0;)n=n.parentElement;if(n&&"BLOCKQUOTE"===n.tagName){var o=g.node.deepestParent(e,[C(e).parentsUntil(g.$el,"BLOCKQUOTE").get(0)]);o&&o.previousSibling&&(r=n=o)}if(null!==n){var i,a=n.previousSibling;if(g.node.isBlock(n)&&g.node.isEditable(n))if(a&&V.NO_DELETE_TAGS.indexOf(a.tagName)<0){if(g.node.isDeletable(a))C(a).remove(),C(e).replaceWith(V.MARKERS);else if(g.node.isEditable(a))if(g.node.isBlock(a))if(g.node.isEmpty(a)&&!g.node.isList(a))C(a).remove(),C(e).after(g.opts.keepFormatOnDelete?V.INVISIBLE_SPACE:"");else{if(g.node.isList(a)&&(a=C(a).find("li").last().get(0)),(i=g.node.contents(a)).length&&"BR"===i[i.length-1].tagName&&C(i[i.length-1]).remove(),"BLOCKQUOTE"===a.tagName&&"BLOCKQUOTE"!==n.tagName)for(i=g.node.contents(a);i.length&&g.node.isBlock(i[i.length-1]);)a=i[i.length-1],i=g.node.contents(a);else if("BLOCKQUOTE"!==a.tagName&&"BLOCKQUOTE"===r.tagName)for(i=g.node.contents(r);i.length&&g.node.isBlock(i[0]);)r=i[0],i=g.node.contents(r);if(g.node.isEmpty(n))C(e).remove(),g.selection.setAtEnd(a,!0);else{C(e).replaceWith(V.MARKERS);var s=a.childNodes;g.node.isBlock(s[s.length-1])?C(s[s.length-1]).append(r.innerHTML):C(a).append(r.innerHTML)}C(r).remove(),g.node.isEmpty(n)&&C(n).remove()}else C(e).replaceWith(V.MARKERS),"BLOCKQUOTE"===n.tagName&&a.nodeType===Node.ELEMENT_NODE?C(a).remove():(C(a).after(g.node.isEmpty(n)?"":C(n).html()),C(n).remove(),"BR"===a.tagName&&C(a).remove())}else if(a)8203===n.textContent.charCodeAt()&&n.childNodes[1]&&"BR"===n.childNodes[1].tagName&&n.tagName.toLowerCase()===g.html.defaultTag()&&n.previousSibling&&"TABLE"===n.previousSibling.tagName&&C(n).remove();else if(n&&"BLOCKQUOTE"===n.tagName&&0===C(n).text().replace(/\u200B/g,"").length)C(n).remove();else{var l=n.nextSibling;g.node.isEmpty(n)&&n.parentNode&&g.node.isEditable(n.parentNode)&&!l&&(n.parentNode!=g.el&&"TD"!==n.parentNode.tagName?C(n.parentNode).remove():n.parentNode!=g.el&&"TD"===n.parentNode.tagName&&C(n).remove())}}}(t):e=E(t),C(t).remove(),a(),g.html.fillEmptyBlocks(!0),g.opts.htmlUntouched||(g.html.cleanEmptyTags(),g.clean.lists(),g.spaces.normalizeAroundCursor()),g.selection.restore(),e},del:function r(){var e=g.markers.insert();if(!e)return!1;if(g.el.normalize(),h(e))if(b(e))if(0===C(e).parents("li").first().find("ul, ol").length)g.cursorLists._del(e);else{var t=C(e).parents("li").first().find("ul, ol").first().find("li").first();(t=t.find(g.html.blockTagsQuery()).get(-1)||t).prepend(e),g.cursorLists._backspace(e)}else i(e);else u(e),n(e);C(e).remove(),a(),g.html.fillEmptyBlocks(!0),g.opts.htmlUntouched||(g.html.cleanEmptyTags(),g.clean.lists()),g.spaces.normalizeAroundCursor(),g.selection.restore()},isAtEnd:v,isAtStart:m}},V.MODULES.data=function(f){function p(e){return e}function c(e){for(var t=e.toString(),n=0,r=0;r<t.length;r++)n+=parseInt(t.charAt(r),10);return 10<n?n%9+1:n}function d(e,t,n){for(var r=Math.abs(n);0<r--;)e-=t;return n<0&&(e+=123),e}function h(e){return e&&"block"!==e.css("display")?(e.remove(),!0):e&&0===f.helpers.getPX(e.css("height"))?(e.remove(),!0):!(!e||"absolute"!==e.css("position")&&"fixed"!==e.css("position")||(e.remove(),0))}function u(e){return e&&0===f.$box.find(e).length}function g(){if(10<e&&(f[p(M("0ppecjvc=="))](),setTimeout(function(){L.FE=null},10)),!f.$box)return!1;f.$wp.prepend(M(p(M(N)))),v=f.$wp.find("> div").first(),b=v.find("> a"),"rtl"===f.opts.direction&&v.css("left","auto").css("right",0).attr("direction","rtl"),e++}function C(e){for(var t=[M("9qqG-7amjlwq=="),M("KA3B3C2A6D1D5H5H1A3=="),M("3B9B3B5F3C4G3E3=="),M("QzbzvxyB2yA-9m=="),M("ji1kacwmgG5bc=="),M("nmA-13aogi1A3c1jd=="),M("BA9ggq=="),M("emznbjbH3fij=="),M("tkC-22d1qC-13sD1wzF-7=="),M("tA3jjf=="),M("1D1brkm==")],n=0;n<t.length;n++)if(String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),e.endsWith(t[n]))return!0;return!1}function m(){var e=M(p(n)),t=M(p("tzgatD-13eD1dtdrvmF3c1nrC-7saQcdav==")).split(".");try{return window.parent.document.querySelector(e)&&window[t[1]][t[2]]}catch(e){return!1}}var v,b,L=f.$,E="sC-7OB2fwhVC4vsG-7ohPA4ZD4D-8f1J3stzB-11bFE2FC1A3NB2IF1HE1TH4WB8eB-11zVG2F3I3yYB5ZG4CB2DA15CC5AD3F1A1KG1oLA10B1A6wQF1H3vgale2C4F4XA2qc2A5D5B3pepmriKB3OE1HD1fUC10pjD-11E-11TB4YJ3bC-16zE-11yc1B2CE2BC3jhjKC1pdA-21OA6C1D5B-8vF4QA11pD6sqf1C3lldA-16BD4A2H3qoEA7bB-16rmNH5H1F1vSB7RE2A3TH4YC5A5b1A4d1B3whepyAC3AA2zknC3mbgf1SC4WH4PD8TC5ZB2C3H3jb2A5ZA2EF2aoFC5qqHC4B1H1zeGA7UA5RF4TA29TA6ZC4d1C3hyWA10A3rBB2E3decorationRD3QC10UD3E6E6ZD2F3F3fme2E5uxxrEC9C3E4fB-11azhHB1LD7D6VF4VVTPC6b1C4TYG3qzDD6B3B3AH4I2H2kxbHE1JD1yihfd1QD6WB1D4mhrc1B5rvFG3A14A7cDA2OC1AA1JB5zC-16KA6WB4C-8wvlTB5A5lkZB2C2C7zynBD2D2bI-7C-21d1HE2cubyvPC8A6VB3aroxxZE4C4F4e1I2BE1WjdifH1H4A14NA1GB1YG-10tWA3A14A9sVA2C5XH2A29b2A6gsleGG2jaED2D-13fhE1OA8NjwytyTD4e1sc1D-16ZC3B5C-9e1C2FB6EFF5B2C2JH4E1C2tdLE5A3UG4G-7b2D3B4fA-9oh1G3kqvB4AG3ibnjcAC6D2B1cDA9KC2QA6bRC4VA30RB8hYB2A4A-8h1A21A2B2==",y="7D4YH4fkhHB3pqDC3H2E1fkMD1IB1NF1D3QD9wB5rxqlh1A8c2B4ZA3FD2AA6FB5EB3jJG4D2J-7aC-21GB6PC5RE4TC11QD6XC4XE3XH3mlvnqjbaOA2OC2BE6A1fmI-7ujwbc1G5f1F3e1C11mXF4owBG3E1yD1E4F1D2D-8B-8C-7yC-22HD1MF5UE4cWA3D8D6a1B2C3H3a3I3sZA4B3A2akfwEB3xHD5D1F1wIC11pA-16xdxtVI2C9A6YC4a1A2F3B2GA6B4C3lsjyJB1eMA1D-11MF5PE4ja1D3D7byrf1C3e1C7D-16lwqAF3H2A1B-21wNE1MA1OG1HB2A-16tSE5UD4RB3icRA4F-10wtwzBB3E1C3CC2DA8LA2LA1EB1kdH-8uVB7decorg1J2B7B6qjrqGI2J1C6ijehIB1hkemC-13hqkrH4H-7QD6XF5XF3HLNAC3CB2aD2CD2KB10B4ycg1A-8KA4H4B11jVB5TC4yqpB-21pd1E4pedzGB6MD5B3ncB-7MA4LD2JB6PD5uH-8TB9C7YD5XD2E3I3jmiDB3zeimhLD8E2F2JC1H-9ivkPC5lG-10SB1D3H3A-21rc1A3d1E3fsdqwfGA2KA1OrC-22LA6D1B4afUB16SC7AitC-8qYA11fsxcajGA15avjNE2A-9h1hDB16B9tPC1C5F5UC1G3B8d2A5d1D4RnHJ3C3JB5D3ucMG1yzD-17hafjC-8VD3yWC6e1YD2H3ZE2C8C5oBA3H3D2vFA4WzJC4C2i1A-65fNB8afWA1H4A26mvkC-13ZB3E3h1A21BC4eFB2GD2AA5ghqND2A2B2==",n="MekC-11nB-8tIzpD7pewxvzC6mD-16xerg1==",S="lC4B3A3B2B5A1C2E4G1A2==",N="sC-7OB2fwhVC4vsG-7ohPA4ZD4D-8f1J3stzB-11bFE2EE1MA2ND1KD1IE4cA-21pSD2D5ve1G3h1A8b1E5ZC3CD2FA16mC5OC5E1hpnG1NA10B1D7hkUD4I-7b2C3C5nXD2E3F3whidEC2EH3GI2mJE2E2bxci1WA10VC7pllSG2F3A7xd1A4ZC3DB2aaeGA2DE4H2E1j1ywD-13FD1A3VE4WA3D8C6wuc1A2hf1B5B7vnrrjA1B9ic1mpbD1oMB1iSB7rWC4RI4G-7upB6jd1A2F3H2EA4FD3kDF4A2moc1anJD1TD4VI4b2C7oeQF4c1E3XC7ZA3C3G3uDB2wGB6D1JC4D1JD4C1hTE6QC5pH4pD3C-22D7c1A3textAA4gdlB2mpozkmhNC1mrxA3yWA5edhg1I2H3B7ozgmvAI3I2B5GD1LD2RSNH1KA1XA5SB4PA3sA9tlmC-9tnf1G3nd1coBH4I2I2JC3C-16LE6A1tnUA3vbwQB1G3f1A20a3A8a1C6pxAB2eniuE1F3kH2lnjB2hB-16XA5PF1G4zwtYA5B-11mzTG2B9pHB3BE2hGH3B3B2cMD5C1F1wzPA8E7VG5H5vD3H-7C8tyvsVF2I1G2A5fE3bg1mgajoyxMA4fhuzSD8aQB2B4g1A20ukb1A4B3F3GG2CujjanIC1ObiB11SD1C5pWC1D4YB8YE5FE-11jXE2F-7jB4CC2G-10uLH4E1C2tA-13yjUH5d1H1A7sWD5E4hmjF-7pykafoGA16hDD4joyD-8OA33B3C2tC7cRE4SA31a1B8d1e2A4F4g1A2A22CC5zwlAC2C1A12==",T=function(){for(var e=0,t=document.domain,n=t.split("."),r="_gd".concat((new Date).getTime());e<n.length-1&&-1===document.cookie.indexOf("".concat(r,"=").concat(r));)t=n.slice(-1-++e).join("."),document.cookie="".concat(r,"=").concat(r,";domain=").concat(t,";");return document.cookie="".concat(r,"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=").concat(t,";"),(t||"").replace(/(^\.*)|(\.*$)/g,"")}(),M=p(function A(e){if(!e)return e;for(var t="",n=p("charCodeAt"),r=p("fromCharCode"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(e[0]),i=1;i<e.length-2;i++){for(var a=c(++o),s=e[n](i),l="";/[0-9-]/.test(e[i+1]);)l+=e[++i];s=d(s,a,l=parseInt(l,10)||0),s^=o-1&31,t+=String[r](s)}return t}),e=0;return{_init:function x(){var e=f.opts.key||[""],t=M(p("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9=="));"string"==typeof e&&(e=[e]);for(var n,r,o,i=!(f.ul=!0),a=0,s=0;s<e.length;s++){var l=(r=e[s],4===(o=(M(r)||"").split("|")).length&&"V3"===o[0]?[o[1],o[3],o[2]]:[null,null,""]),c=l[2];if(c===M(p(M("LGnD1KNZf1CPBYCAZB-8F3UDSLLSG1VFf1A3C2==")))||0<=c.indexOf(T,c.length-T.length)||C(T)||m()){if(null!==(n=l[1])&&!(0==n.indexOf("TRIAL")?(n=new Date(n.replace(/TRIAL/,"")),new Date(n)<new Date&&(E=y,1)):new Date(n)<new Date(M(S)))||!(0<(T||"").length)||C(T)||m()){f.ul=!1;break}i=!0,N=E,a=l[0]||-1}}var d=new Image;!0===f.ul&&(g(),d.src=i?"".concat(p(M(t)),"e=").concat(a):"".concat(p(M(t)),"u")),!0===f.ul&&(f.events.on("contentChanged",function(){(function e(){return h(v)||h(b)||u(v)||u(b)})()&&g()}),f.events.on("html.get",function(e){return e+M("qD2H-9G3ioD-17qA1tE1B-8qI3A4hA-13C-11E2C1njfldD1E6pg1C-8sC3hfbkcD2G3stC-22gqgB3G2B-7vtoA4nweeD1A31A15B9uC-16A1F5dkykdc1B8dE-11bA3F2D3A9gd1E7F2tlI-8H-7vtxB2A5B2C3B2F2B5A6ldbyC4iqC-22D-17E-13mA3D2dywiB3oxlvfC1H4C2TjqbzlnI3ntB4E3qA2zaqsC6D3pmnkoE3C6D5wvuE3bwifdhB6hch1E4xibD-17dmrC1rG-7pntnF6nB-8F1D2A11C8plrkmF2F3MC-16bocqA2WwA-21ayeA1C4d1isC-22rD-13D6DfjpjtC2E6hB2G2G4A-7D2==")})),f.events.on("html.set",function(){var e=f.el.querySelector('[data-f-id="pbf"]');e&&L(e).remove()}),f.events.on("destroy",function(){v&&v.length&&v.remove()},!0)}}},V.MODULES.edit=function(t){function e(){if(t.browser.mozilla)try{t.doc.execCommand("enableObjectResizing",!1,"false"),t.doc.execCommand("enableInlineTableEditing",!1,"false")}catch(e){}if(t.browser.msie)try{t.doc.body.addEventListener("mscontrolselect",function(e){return e.srcElement.focus(),!1})}catch(e){}}var n=!1;function r(){return n}return{_init:function o(){t.events.on("focus",function(){r()?t.edit.off():t.edit.on()})},on:function i(){t.$wp?(t.$el.attr("contenteditable",!0),t.$el.removeClass("fr-disabled").attr("aria-disabled",!1),e()):t.$el.is("a")&&t.$el.attr("contenteditable",!0),t.events.trigger("edit.on",[],!0),n=!1},off:function a(){t.events.disableBlur(),t.$wp?(t.$el.attr("contenteditable",!1),t.$el.addClass("fr-disabled").attr("aria-disabled",!0)):t.$el.is("a")&&t.$el.attr("contenteditable",!1),t.events.trigger("edit.off"),t.events.enableBlur(),n=!0},disableDesign:e,isDisabled:r}},V.MODULES.format=function(N){var T=N.$;function M(e,t){var n=e;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n+="id"===r?"#".concat(t[r]):"class"===r?".".concat(t[r]):"[".concat(r,'="').concat(t[r],'"]'));return n}function A(e,t){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function v(e,t,n){var r,o,i,a={strong:{prop:"font-weight",val:"bold"},em:{prop:"font-style",val:"italic"}};if(e){if(N.node.isBlock(e)&&e.hasAttribute("contenteditable")&&"false"===e.getAttribute("contenteditable")||e.parentNode&&e.parentNode.hasAttribute("contenteditable")&&"false"===e.parentNode.getAttribute("contenteditable")){if(e.nextSibling&&T(e.nextSibling).hasClass("fr-marker"))return;if(e.nextSibling)return void v(e.nextSibling,t,n);if(e.parentNode&&N.node.isEditable(e.parentNode))return void v(e.parentNode,t,n)}for(;e&&e.nodeType===Node.COMMENT_NODE;)e=e.nextSibling;if(e){if(N.node.isBlock(e)&&"HR"!==e.tagName&&"LI"!==e.tagName)return N.node.hasClass(e.firstChild,"fr-marker")?v(e.firstChild.nextSibling,t,n):v(e.firstChild,t,n),!1;var s=T(N.doc.createElement(t));s.attr(n),s.insertBefore(e),(r=b(e))&&(0<=["strong","em"].indexOf(t)||"span"===t&&n.hasOwnProperty("style"))&&(i="span"===t?(o=(a=n.style.replace(/;$/,"").split(":"))[0].trim(),a[1].trim()):(o=a[t].prop,a[t].val),"background-color"!==o&&(T(r).css(o,i),function p(e,t){var n,r=e.childNodes;for(n=0;n<r.length;n++)0<=["UL","OL","LI"].indexOf(r[n].tagName)&&""===r[n].style[t]&&T(r[n]).css(t,"initial")}(r,o)));for(var l=e;l&&!T(l).hasClass("fr-marker")&&0===T(l).find(".fr-marker").length&&"UL"!==l.tagName&&"OL"!==l.tagName;){var c=l;if("SPAN"===l.tagName&&T(l).hasClass("fr-tracking-deleted"))l=l.nextSibling;else{if(N.node.isBlock(l)&&"HR"!==e.tagName)return v(l.firstChild,t,n),!1;if("SPAN"===l.tagName&&N.node.isEditable(l))return s.is(":empty")&&s.remove(),v(l.firstChild,t,n),!1;if(l.tagName&&l.hasAttribute("contenteditable")&&"false"===l.getAttribute("contenteditable"))return void v(l.nextSibling,t,n);if(!N.node.isEditable(l.parentNode))return N.selection.restore(),void N.toolbar.disable();l=l.nextSibling,s.append(c)}}if(l)(T(l).find(".fr-marker").length||"UL"===l.tagName||"OL"===l.tagName)&&v(l.firstChild,t,n);else{for(var d=s.get(0).parentNode;d&&!d.nextSibling&&!N.node.isElement(d);)d=d.parentNode;if(d){var f=d.nextSibling;f&&(N.node.isBlock(f)?"HR"===f.tagName?v(f.nextSibling,t,n):v(f.firstChild,t,n):v(f,t,n))}}s.is(":empty")&&s.remove()}}}function n(e,t){var n;if(void 0===t&&(t={}),t.style&&delete t.style,N.selection.isCollapsed()){N.markers.insert();var r=N.$el.find(".fr-marker");r.get(0).nextSibling&&N.node.isBlock(r.get(0).nextSibling)&&!r.get(0).previousSibling&&"LI"===r.get(0).parentNode.tagName&&r.get(0).nextSibling.prepend(r.get(0)),r.replaceWith(function l(e,t){var n="<".concat(e);for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n+=" ".concat(r,'="').concat(t[r],'"'));return n+=">"}(e,t)+V.INVISIBLE_SPACE+V.MARKERS+function c(e){return"</".concat(e,">")}(e)),N.selection.restore()}else{N.selection.save();var o,i=N.$el.find('.fr-marker[data-type="true"]').length&&N.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling;v(i,e,t),T(i).parent().find("a:empty").remove();do{for(o=N.$el.find("".concat(M(e,t)," > ").concat(M(e,t))),n=0;n<o.length;n++)o[n].outerHTML=o[n].innerHTML}while(o.length);N.el.normalize();var a=N.el.querySelectorAll(".fr-marker");for(n=0;n<a.length;n++){var s=T(a[n]);!0===s.data("type")?A(s.get(0).nextSibling,M(e,t))&&s.next().prepend(s):A(s.get(0).previousSibling,M(e,t))&&s.prev().append(s)}N.selection.restore()}}function x(e,t,n,r){if(!r){var o=!1;if(!0===e.data("type"))for(;N.node.isFirstSibling(e.get(0))&&!e.parent().is(N.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().before(e),o=!0;else if(!1===e.data("type"))for(;N.node.isLastSibling(e.get(0))&&!e.parent().is(N.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().after(e),o=!0;if(o)return!0}if(e.parents(t).length||void 0===t){var i,a="",s="",l=e.parent();if("A"===l[0].tagName&&(l=l.parent()),l.is(N.$el)||N.node.isBlock(l.get(0)))return!1;for(;!(N.node.isBlock(l.parent().get(0))||void 0!==t&&A(l.get(0),M(t,n)));)a+=N.node.closeTagString(l.get(0)),s=N.node.openTagString(l.get(0))+s,l=l.parent();var c=e.get(0).outerHTML;return e.replaceWith('<span id="mark"></span>'),i=l.html().replace(/<span id="mark"><\/span>/,a+N.node.closeTagString(l.get(0))+s+c+a+N.node.openTagString(l.get(0))+s),l.replaceWith(N.node.openTagString(l.get(0))+i+N.node.closeTagString(l.get(0))),!0}return!1}function r(e,t){void 0===t&&(t={}),t.style&&delete t.style;var n=N.selection.isCollapsed();N.selection.save();for(var r=!0;r;){r=!1;for(var o=N.$el.find(".fr-marker"),i=0;i<o.length;i++){var a=T(o[i]),s=null;if(a.attr("data-cloned")||n||(s=a.clone().removeClass("fr-marker").addClass("fr-clone"),a.data("type")&&"true"===a.data("type").toString()?a.attr("data-cloned",!0).after(s):a.attr("data-cloned",!0).before(s)),x(a,e,t,n)){r=!0;break}}}!function y(e,t,n,r){for(var o,i={strong:{prop:"font-weight",val:"bold"},em:{prop:"font-style",val:"italic"}},a=N.node.contents(e.get(0)),s=0;s<a.length;s++){var l=a[s];if(l.innerHTML&&8203==l.innerHTML.charCodeAt()&&l.tagName.toLocaleLowerCase()==n&&l.childNodes.length<2&&!N.helpers.isMobile()&&(l.outerHTML=l.innerHTML),N.node.hasClass(l,"fr-marker"))t=(t+1)%2;else if(t)if(0<T(l).find(".fr-marker").length)t=y(T(l),t,n,r);else{(o="LI"===l.tagName?l:T(l).parentsUntil(N.$el,"li").get(0))&&(void 0===n||0<=["strong","em"].indexOf(n))&&(n?T(o).css(i[n].prop,""):o.style=""),(o=l.parentNode!==N.el?l.parentNode:null)&&1===o.nodeType&&"a"!==n&&o.hasAttribute("style")&&["P","EM","UL","LI","OL","H1","SPAN"].indexOf(o.tagName)<0?o.style="":l&&1===l.nodeType&&l.hasAttribute("style")&&["p","strong","u","em","s","sub","sup","a"].indexOf(n)<0&&(N.browser.msie?T(l).attr("style",""):l.style="");for(var c=T(l).find(n||"*:not(br)"),d=c.length-1;0<=d;d--){var f=c[d];(o="LI"===f.tagName?f:T(f).parentsUntil(N.$el,"li").get(0))&&(!n||0<=["strong","em"].indexOf(n))&&(n?T(o).css(i[n].prop,""):o.style=""),"A"===f.tagName||N.node.isBlock(f)||N.node.isVoid(f)||void 0!==n&&!A(f,M(n,r))?N.node.isBlock(f)&&void 0===n&&"TABLE"!==l.tagName&&N.node.clearAttributes(f):N.node.hasClass(f,"fr-clone")||N.node.hasClass(f,"fr-tracking-deleted")||T(f).data("tracking")||(f.outerHTML=f.innerHTML)}"A"!==l.tagName&&void 0===n&&l.nodeType===Node.ELEMENT_NODE&&!N.node.isVoid(l)||A(l,M(n,r))?N.node.isBlock(l)||(N.node.hasClass(l,"fr-clone")||N.opts.trackChangesEnabled?!N.node.hasClass(l,"fr-clone")&&N.opts.trackChangesEnabled&&l.parentNode&&(l.outerHTML=l.innerHTML):l.outerHTML=l.innerHTML):void 0===n&&l.nodeType===Node.ELEMENT_NODE&&N.node.isBlock(l)&&"TABLE"!==l.tagName&&N.node.clearAttributes(l)}else 0<T(l).find(".fr-marker").length&&(t=y(T(l),t,n,r))}return t}(N.$el,0,e,t),n||(N.$el.find(".fr-marker").remove(),N.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker")),n&&N.$el.find(".fr-marker").before(V.INVISIBLE_SPACE).after(V.INVISIBLE_SPACE),N.html.cleanEmptyTags(),N.el.normalize(),N.selection.restore();var l=N.win.getSelection()&&N.win.getSelection().anchorNode;if(l){var c=N.node.blockParent(l),d=!!l.textContent.replace(/\u200B/g,"").length,f=N.win.getSelection().getRangeAt(0),p=f.startOffset,h=f.endOffset;N.selection.text().replace(/\u200B/g,"").length||function S(e,t){if(e&&t){if(e.isSameNode(t)?e.textContent=e.textContent.replace(/\u200B(?=.*\u200B)/g,""):e.nodeType===Node.TEXT_NODE&&(e.textContent=e.textContent.replace(/\u200B/g,"")),!e.childNodes.length)return!1;Array.isArray(e.childNodes)&&e.childNodes.forEach(function(e){S(e,t)})}}(c,l);var u=N.win.getSelection().getRangeAt(0);if(l.nodeType===Node.TEXT_NODE){if(!d||!N.selection.text().length&&p===h){var g=l.textContent.search(/\u200B/g)+1;if(N.browser.msie){var C=N.doc.createRange();N.selection.get().removeAllRanges(),C.setStart(l,g),C.setEnd(l,g),N.selection.get().addRange(C)}else"a"!==e&&(u.setStart(l,g),u.setEnd(l,g))}}else{var m,v,b=0,L=T(l).contents();if(N.browser.msie){for(;v=L[b];)v.nodeType===Node.TEXT_NODE&&0<=v.textContent.search(/\u200B/g)&&(m=v),b++;m=T(m)}else m=L.filter(function(e){return e.nodeType===Node.TEXT_NODE&&0<=e.textContent.search(/\u200B/g)});if(m.length&&!N.opts.trackChangesEnabled){var E=m.text().search(/\u200B/g)+1;u.setStart(m.get(0),E),u.setEnd(m.get(0),E)}}}}function t(e,t){var n,r,o,i,a,s,l,c=null;if(N.selection.isCollapsed()){N.markers.insert();var d=(r=N.$el.find(".fr-marker")).parent();if(N.node.openTagString(d.get(0))==='<span style="'.concat(e,": ").concat(d.css(e),';">')){if(N.node.isEmpty(d.get(0)))c=T(N.doc.createElement("span")).attr("style","".concat(e,": ").concat(t,";")).html("".concat(V.INVISIBLE_SPACE).concat(V.MARKERS)),d.replaceWith(c);else{var f={};f["style*"]="".concat(e,":"),x(r,"span",f,!0),r=N.$el.find(".fr-marker"),t?(c=T(N.doc.createElement("span")).attr("style","".concat(e,": ").concat(t,";")).html("".concat(V.INVISIBLE_SPACE).concat(V.MARKERS)),r.replaceWith(c)):r.replaceWith(V.INVISIBLE_SPACE+V.MARKERS)}N.html.cleanEmptyTags()}else N.node.isEmpty(d.get(0))&&d.is("span")?(r.replaceWith(V.MARKERS),d.css(e,t)):(r.get(0).nextSibling&&N.node.isBlock(r.get(0).nextSibling)&&!r.get(0).previousSibling&&"LI"===r.get(0).parentNode.tagName&&r.get(0).nextSibling.prepend(r.get(0)),c=T('<span style="'.concat(e,": ").concat(t,';">').concat(V.INVISIBLE_SPACE).concat(V.MARKERS,"</span>")),r.replaceWith(c));c&&L(c,e,t)}else{if(N.selection.save(),null===t||"color"===e&&0<N.$el.find(".fr-marker").parents("u, a").length){var p=N.$el.find(".fr-marker");for(n=0;n<p.length;n++)if(!0===(r=T(p[n])).data("type")||"true"===r.data("type"))for(;N.node.isFirstSibling(r.get(0))&&!r.parent().is(N.$el)&&!N.node.isElement(r.parent().get(0))&&!N.node.isBlock(r.parent().get(0));)r.parent().before(r);else for(;N.node.isLastSibling(r.get(0))&&!r.parent().is(N.$el)&&!N.node.isElement(r.parent().get(0))&&!N.node.isBlock(r.parent().get(0));)r.parent().after(r)}for(var h=N.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling;h.firstChild;)h=h.firstChild;var u={"class":"fr-unprocessed"};for(t&&(u.style="".concat(e,": ").concat(t,";")),v(h,"span",u),N.$el.find(".fr-marker + .fr-unprocessed").each(function(){T(this).prepend(T(this).prev())}),N.$el.find(".fr-unprocessed + .fr-marker").each(function(){T(this).prev().append(T(this))}),(t||"").match(/\dem$/)&&N.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed");0<N.$el.find("span.fr-unprocessed").length;){if(o=b(c=N.$el.find("span.fr-unprocessed").first().removeClass("fr-unprocessed")),c.parent().get(0).normalize(),c.parent().is("span")&&1===c.parent().get(0).childNodes.length){var g=t;N.browser.msie&&!t&&(g=""),c.parent().css(e,g);var C=c;c=c.parent(),C.replaceWith(C.html())}for(i=c.find("span"),o&&"background-color"!==e&&(o.normalize(),i=T(o).find("span:not(.fr-unprocessed)")),n=i.length-1;0<=n;n--)a=i[n],s=e,l=void 0,(l=T(a)).css(s,""),""===l.attr("style")&&l.replaceWith(l.html());L(c,e,t)}}!function m(){var e;for(;0<N.$el.find(".fr-split:empty").length;)N.$el.find(".fr-split:empty").remove();N.$el.find(".fr-split").removeClass("fr-split"),N.$el.find('[style=""]').removeAttr("style"),N.$el.find('[class=""]').removeAttr("class"),N.html.cleanEmptyTags();for(var t=N.$el.find("span"),n=t.length-1;0<=n;n--){var r=t[n];r.attributes&&0!==r.attributes.length||T(r).replaceWith(r.innerHTML)}N.el.normalize();var o=N.$el.find("span[style] + span[style]");for(e=0;e<o.length;e++){var i=T(o[e]),a=T(o[e]).prev();i.get(0).previousSibling===a.get(0)&&N.node.openTagString(i.get(0))===N.node.openTagString(a.get(0))&&(i.prepend(a.html()),a.remove())}N.$el.find("span[style] span[style]").each(function(){if(0<=T(this).attr("style").indexOf("font-size")){var e=T(this).parents("span[style]");e.attr("style")&&0<=e.attr("style").indexOf("background-color")&&(T(this).attr("style","".concat(T(this).attr("style"),";").concat(e.attr("style"))),x(T(this),"span[style]",{},!1))}}),N.el.normalize(),N.selection.restore()}()}function b(e){var t,n,r,o,i,a;if(t="LI"===e.tagName?e:T(e).parentsUntil(N.$el,"li").get(0)){if((a=N.selection.info(t)).atStart&&a.atEnd)return t;if(a.atStart&&!a.atEnd&&(n=T(t).find(".fr-marker[data-type=false]").get(0),r=T(n).parentsUntil(N.$el,"li").get(0),o=T(n).parent().get(0),(i=n.nextSibling)&&0<=["UL","OL"].indexOf(i.tagName)||!r.isSameNode(t)||!i&&("LI"===o.tagName||!o.nextSibling||0<=["UL","OL"].indexOf(o.nextSibling.tagName)||N.node.isVoid(o.nextSibling))))return t}}function L(e,t,n){var r,o,i,a=e.parentsUntil(N.$el,"span[style]"),s=[];for(r=a.length-1;0<=r;r--)o=a[r],i=t,0===T(o).attr("style").indexOf("".concat(i,":"))||0<=T(o).attr("style").indexOf(";".concat(i,":"))||0<=T(o).attr("style").indexOf("; ".concat(i,":"))||s.push(a[r]);if((a=a.not(s)).length){for(var l="",c="",d="",f="",p=e.get(0);p=p.parentNode,T(p).addClass("fr-split"),l+=N.node.closeTagString(p),c=N.node.openTagString(T(p).clone().addClass("fr-split").get(0))+c,a.get(0)!==p&&(d+=N.node.closeTagString(p),f=N.node.openTagString(T(p).clone().addClass("fr-split").get(0))+f),a.get(0)!==p;);var h="".concat(l+N.node.openTagString(T(a.get(0)).clone().css(t,n||"").get(0))+f+e.css(t,"").get(0).outerHTML+d,"</span>").concat(c);e.replaceWith('<span id="fr-break"></span>');var u=a.get(0).outerHTML;T(a.get(0)).replaceWith(u.replace(/<span id="fr-break"><\/span>/g,function(){return h}))}}function o(e,t){void 0===t&&(t={}),t.style&&delete t.style;var n=N.selection.ranges(0),r=n.startContainer;if(r.nodeType===Node.ELEMENT_NODE&&0<r.childNodes.length&&r.childNodes[n.startOffset]&&(r=r.childNodes[n.startOffset]),!n.collapsed&&r.nodeType===Node.TEXT_NODE&&n.startOffset===(r.textContent||"").length){for(;!N.node.isBlock(r.parentNode)&&!r.nextSibling;)r=r.parentNode;r.nextSibling&&(r=r.nextSibling)}for(var o=r;o&&o.nodeType===Node.ELEMENT_NODE&&!A(o,M(e,t));)o=o.firstChild;if(o&&o.nodeType===Node.ELEMENT_NODE&&A(o,M(e,t)))return!0;var i=r;for(i&&i.nodeType!==Node.ELEMENT_NODE&&(i=i.parentNode);i&&i.nodeType===Node.ELEMENT_NODE&&i!==N.el&&!A(i,M(e,t));)i=i.parentNode;return!(!i||i.nodeType!==Node.ELEMENT_NODE||i===N.el||!A(i,M(e,t)))}return{is:o,toggle:function i(e,t){o(e,t)?r(e,t):n(e,t)},apply:n,remove:r,applyStyle:t,removeStyle:function a(e){t(e,null)}}},V.MODULES.spaces=function(c){function r(e,t){var n=e.previousSibling,r=e.nextSibling,o=e.textContent,i=e.parentNode,a=[V.ENTER_P,V.ENTER_DIV,V.ENTER_BR];if(!c.html.isPreformatted(i)){t&&(o=o.replace(/[\f\n\r\t\v ]{2,}/g," "),r&&"BR"!==r.tagName&&!c.node.isBlock(r)||!(c.node.isBlock(i)||c.node.isLink(i)&&!i.nextSibling||c.node.isElement(i))||(o=o.replace(/[\f\n\r\t\v ]{1,}$/g,"")),n&&"BR"!==n.tagName&&!c.node.isBlock(n)||!(c.node.isBlock(i)||c.node.isLink(i)&&!i.previousSibling||c.node.isElement(i))||(o=o.replace(/^[\f\n\r\t\v ]{1,}/g,"")),(c.node.isBlock(r)||c.node.isBlock(n))&&(!n||n&&"A"!==n.tagName)&&(o=o.replace(/^[\f\n\r\t\v ]{1,}/g,""))," "===o&&(n&&c.node.isVoid(n)||r&&c.node.isVoid(r))&&!(n&&r&&c.node.isVoid(n)||r&&n&&c.node.isVoid(r))&&(o="")),(!n&&c.node.isBlock(r)||!r&&c.node.isBlock(n))&&c.node.isBlock(i)&&i!==c.el&&(o=o.replace(/^[\f\n\r\t\v ]{1,}/g,"")),t||(o=o.replace(new RegExp(V.UNICODE_NBSP,"g")," "));for(var s="",l=0;l<o.length;l++)32!=o.charCodeAt(l)||0!==l&&32!=s.charCodeAt(l-1)||!((c.opts.enter===V.ENTER_BR||c.opts.enter===V.ENTER_DIV)&&(n&&"BR"===n.tagName||r&&"BR"===r.tagName)||n&&r&&n.tagName===r.tagName||!(n&&r&&c.node.isVoid(n)||n&&r&&c.node.isVoid(r))||n&&r&&0<=["STRONG","U","EM"].indexOf(n.tagName)&&"BR"===r.tagName)?s+=o[l]:s+=V.UNICODE_NBSP;c.browser.chrome&&1<s.length&&32===s.charCodeAt(s.length-1)&&(r&&r.nextSibling&&r.nextSibling.nextSibling&&"BR"===r.nextSibling.nextSibling.tagName||r&&"BR"===r.tagName)&&(s=s.substring(0,s.length-1)+V.UNICODE_NBSP),(!r||r&&c.node.isBlock(r)||r&&r.nodeType===Node.ELEMENT_NODE&&c.win.getComputedStyle(r)&&"block"===c.win.getComputedStyle(r).display)&&(!c.node.isVoid(n)||n&&-1!==["P","DIV","BR"].indexOf(n.tagName)&&-1!==a.indexOf(c.opts.enter))&&(s=s.replace(/ $/,V.UNICODE_NBSP)),!n||c.node.isVoid(n)||c.node.isBlock(n)||1!==(s=s.replace(/^\u00A0([^ $])/," $1")).length||160!==s.charCodeAt(0)||!r||c.node.isVoid(r)||c.node.isBlock(r)||c.node.hasClass(n,"fr-marker")&&c.node.hasClass(r,"fr-marker")||(s=" "),t||(s=s.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g,"$1 $2")),e.textContent!==s&&(e.textContent=s)}}function l(e,t){if(void 0!==e&&e||(e=c.el),void 0===t&&(t=!1),!e.getAttribute||"false"!==e.getAttribute("contenteditable"))if(e.nodeType===Node.TEXT_NODE)r(e,t);else if(e.nodeType===Node.ELEMENT_NODE)for(var n=c.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,c.node.filter(function(e){for(var t=e.parentNode;t&&t!==c.el;){if("STYLE"===t.tagName||"IFRAME"===t.tagName)return!1;if("PRE"===t.tagName)return!1;t=t.parentNode}return null!==e.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g)&&!c.node.hasClass(e.parentNode,"fr-marker")}),!1);n.nextNode();)r(n.currentNode,t)}return{normalize:l,normalizeAroundCursor:function d(){for(var e=[],t=c.el.querySelectorAll(".fr-marker"),n=0;n<t.length;n++){for(var r=null,o=c.node.blockParent(t[n]),i=(r=o||t[n]).nextSibling,a=r.previousSibling;i&&"BR"===i.tagName;)i=i.nextSibling;for(;a&&"BR"===a.tagName;)a=a.previousSibling;r&&e.indexOf(r)<0&&e.push(r),a&&e.indexOf(a)<0&&e.push(a),i&&e.indexOf(i)<0&&e.push(i)}for(var s=0;s<e.length;s++)l(e[s])}}},V.INVISIBLE_SPACE="&#8203;",V.HAIR_SPACE="&#8202;",V.START_MARKER='<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'.concat(V.INVISIBLE_SPACE,"</span>"),V.END_MARKER='<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'.concat(V.INVISIBLE_SPACE,"</span>"),V.MARKERS=V.START_MARKER+V.END_MARKER,V.MODULES.markers=function(d){var f=d.$;function l(){if(!d.$wp)return null;try{var e=d.selection.ranges(0),t=e.commonAncestorContainer;if(t!==d.el&&!d.$el.contains(t))return null;var n=e.cloneRange(),r=e.cloneRange();n.collapse(!0);var o=f(d.doc.createElement("SPAN")).addClass("fr-marker").attr("style","display: none; line-height: 0;").html(V.INVISIBLE_SPACE).get(0);if(n.insertNode(o),o=d.$el.find("span.fr-marker").get(0)){for(var i=o.nextSibling;i&&i.nodeType===Node.TEXT_NODE&&0===i.textContent.length;)f(i).remove(),i=d.$el.find("span.fr-marker").get(0).nextSibling;return d.selection.clear(),d.selection.get().addRange(r),o}return null}catch(a){}}function c(){d.$el.find(".fr-marker").remove()}return{place:function p(e,t,n){var r,o,i;try{var a=e.cloneRange();if(a.collapse(t),a.insertNode(function l(e,t){var n=f(d.doc.createElement("SPAN"));return n.addClass("fr-marker").attr("data-id",t).attr("data-type",e).attr("style","display: ".concat(d.browser.safari?"none":"inline-block","; line-height: 0;")).html(V.INVISIBLE_SPACE),n.get(0)}(t,n)),!0===t)for(i=(r=d.$el.find('span.fr-marker[data-type="true"][data-id="'.concat(n,'"]')).get(0)).nextSibling;i&&i.nodeType===Node.TEXT_NODE&&0===i.textContent.length;)f(i).remove(),i=r.nextSibling;if(!0===t&&!e.collapsed){for(;!d.node.isElement(r.parentNode)&&!i;)-1</\bfa\b/g.test(r.parentNode.className)&&"I"===r.parentNode.tagName?f(r.parentNode).before(r):f(r.parentNode).after(r),i=r.nextSibling;if(i&&i.nodeType===Node.ELEMENT_NODE&&d.node.isBlock(i)&&"HR"!==i.tagName){for(o=[i];i=o[0],(o=d.node.contents(i))[0]&&d.node.isBlock(o[0]););f(i).prepend(f(r))}}if(!1===t&&!e.collapsed){if((i=(r=d.$el.find('span.fr-marker[data-type="false"][data-id="'.concat(n,'"]')).get(0)).previousSibling)&&i.nodeType===Node.ELEMENT_NODE&&d.node.isBlock(i)&&"HR"!==i.tagName){for(o=[i];i=o[o.length-1],(o=d.node.contents(i))[o.length-1]&&d.node.isBlock(o[o.length-1]););f(i).append(f(r))}(r.parentNode&&0<=["TD","TH"].indexOf(r.parentNode.tagName)||!r.previousSibling&&d.node.isBlock(r.parentElement))&&(r.parentNode.previousSibling&&!r.previousSibling?f(r.parentNode.previousSibling).append(r):0<=["TD","TH"].indexOf(r.parentNode.tagName)&&r.parentNode.firstChild===r&&(r.parentNode.previousSibling?f(r.parentNode.previousSibling).append(r):r.parentNode.parentNode&&r.parentNode.parentNode.previousSibling&&f(r.parentNode.parentNode.previousSibling).append(r)))}var s=d.$el.find('span.fr-marker[data-type="'.concat(t,'"][data-id="').concat(n,'"]')).get(0);return s&&(s.style.display="none"),s}catch(c){return null}},insert:l,split:function a(){d.selection.isCollapsed()||d.selection.remove();var e=d.$el.find(".fr-marker").get(0);if(e||(e=l()),!e)return null;var t=d.node.deepestParent(e);if(t||(t=d.node.blockParent(e))&&"LI"!==t.tagName&&(t=null),t)if(d.node.isBlock(t)&&d.node.isEmpty(t))"LI"!==t.tagName||t.parentNode.firstElementChild!==t||d.node.isEmpty(t.parentNode)?f(t).replaceWith('<span class="fr-marker"></span>'):f(t).append('<span class="fr-marker"></span>');else if(d.cursor.isAtStart(e,t))f(t).before('<span class="fr-marker"></span>'),f(e).remove();else if(d.cursor.isAtEnd(e,t))f(t).after('<span class="fr-marker"></span>'),f(e).remove();else{for(var n=e,r="",o="";n=n.parentNode,r+=d.node.closeTagString(n),o=d.node.openTagString(n)+o,n!==t;);f(e).replaceWith('<span id="fr-break"></span>');var i=d.node.openTagString(t)+f(t).html()+d.node.closeTagString(t);i=i.replace(/<span id="fr-break"><\/span>/g,"".concat(r,'<span class="fr-marker"></span>').concat(o)),f(t).replaceWith(i)}return d.$el.find(".fr-marker").get(0)},insertAtPoint:function h(e){var t,n=e.clientX,r=e.clientY;c();var o=null;if("undefined"!=typeof d.doc.caretPositionFromPoint?(t=d.doc.caretPositionFromPoint(n,r),(o=d.doc.createRange()).setStart(t.offsetNode,t.offset),o.setEnd(t.offsetNode,t.offset)):"undefined"!=typeof d.doc.caretRangeFromPoint&&(t=d.doc.caretRangeFromPoint(n,r),(o=d.doc.createRange()).setStart(t.startContainer,t.startOffset),o.setEnd(t.startContainer,t.startOffset)),null!==o&&"undefined"!=typeof d.win.getSelection){var i=d.win.getSelection();i.removeAllRanges(),i.addRange(o)}else if("undefined"!=typeof d.doc.body.createTextRange)try{(o=d.doc.body.createTextRange()).moveToPoint(n,r);var a=o.duplicate();a.moveToPoint(n,r),o.setEndPoint("EndToEnd",a),o.select()}catch(s){return!1}l()},remove:c}},V.MODULES.selection=function(E){var y=E.$;function s(){var e="";return E.win.getSelection?e=E.win.getSelection():E.doc.getSelection?e=E.doc.getSelection():E.doc.selection&&(e=E.doc.selection.createRange().text),e.toString()}function L(){return E.win.getSelection?E.win.getSelection():E.doc.getSelection?E.doc.getSelection():E.doc.selection.createRange()}function f(e){var t=L(),n=[];if(t&&t.getRangeAt&&t.rangeCount){n=[];for(var r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r))}else n=E.doc.createRange?[E.doc.createRange()]:[];return void 0!==e?n[e]:n}function S(){var e=L();try{e.removeAllRanges?e.removeAllRanges():e.empty?e.empty():e.clear&&e.clear()}catch(t){}}function p(e,t){var n=e;return n.nodeType===Node.ELEMENT_NODE&&0<n.childNodes.length&&n.childNodes[t]&&(n=n.childNodes[t]),n.nodeType===Node.TEXT_NODE&&(n=n.parentNode),n}function N(){if(E.$wp){E.markers.remove();var e,t,n=f(),r=[];for(t=0;t<n.length;t++)if(n[t].startContainer!==E.doc||E.browser.msie){var o=(e=n[t]).collapsed,i=E.markers.place(e,!0,t),a=E.markers.place(e,!1,t);if(void 0!==i&&i||!o||(y(".fr-marker").remove(),E.selection.setAtEnd(E.el)),E.el.normalize(),E.browser.safari&&!o)try{(e=E.doc.createRange()).setStartAfter(i),e.setEndBefore(a),r.push(e)}catch(s){}}if(E.browser.safari&&r.length)for(E.selection.clear(),t=0;t<r.length;t++)E.selection.get().addRange(r[t])}}function T(){var e,t=E.el.querySelectorAll('.fr-marker[data-type="true"]');if(!E.$wp)return E.markers.remove(),!1;if(0===t.length)return!1;if(E.browser.msie||E.browser.edge)for(e=0;e<t.length;e++)t[e].style.display="inline-block";E.core.hasFocus()||E.browser.msie||E.browser.webkit||E.$el.focus(),S();var n=L();for(e=0;e<t.length;e++){var r=y(t[e]).data("id"),o=t[e],i=E.doc.createRange(),a=E.$el.find('.fr-marker[data-type="false"][data-id="'.concat(r,'"]'));(E.browser.msie||E.browser.edge)&&a.css("display","inline-block");var s=null;if(0<a.length){a=a[0];try{for(var l=!1,c=o.nextSibling,d=null;c&&c.nodeType===Node.TEXT_NODE&&0===c.textContent.length;)c=(d=c).nextSibling,y(d).remove();for(var f=a.nextSibling;f&&f.nodeType===Node.TEXT_NODE&&0===f.textContent.length;)f=(d=f).nextSibling,y(d).remove();if(o.nextSibling===a||a.nextSibling===o){for(var p=o.nextSibling===a?o:a,h=p===o?a:o,u=p.previousSibling;u&&u.nodeType===Node.TEXT_NODE&&0===u.length;)u=(d=u).previousSibling,y(d).remove();if(u&&u.nodeType===Node.TEXT_NODE)for(;u&&u.previousSibling&&u.previousSibling.nodeType===Node.TEXT_NODE;)u.previousSibling.textContent+=u.textContent,u=u.previousSibling,y(u.nextSibling).remove();for(var g=h.nextSibling;g&&g.nodeType===Node.TEXT_NODE&&0===g.length;)g=(d=g).nextSibling,y(d).remove();if(g&&g.nodeType===Node.TEXT_NODE)for(;g&&g.nextSibling&&g.nextSibling.nodeType===Node.TEXT_NODE;)g.nextSibling.textContent=g.textContent+g.nextSibling.textContent,g=g.nextSibling,y(g.previousSibling).remove();if(u&&(E.node.isVoid(u)||E.node.isBlock(u))&&(u=null),g&&(E.node.isVoid(g)||E.node.isBlock(g))&&(g=null),u&&g&&u.nodeType===Node.TEXT_NODE&&g.nodeType===Node.TEXT_NODE){y(o).remove(),y(a).remove();var C=u.textContent.length;u.textContent+=g.textContent,y(g).remove(),E.spaces.normalize(u),i.setStart(u,C),i.setEnd(u,C),l=!0}else!u&&g&&g.nodeType===Node.TEXT_NODE?(y(o).remove(),y(a).remove(),E.opts.htmlUntouched||E.spaces.normalize(g),s=y(E.doc.createTextNode("\u200b")).get(0),y(g).before(s),i.setStart(g,0),i.setEnd(g,0),l=!0):!g&&u&&u.nodeType===Node.TEXT_NODE&&(y(o).remove(),y(a).remove(),E.opts.htmlUntouched||E.spaces.normalize(u),s=y(E.doc.createTextNode("\u200b")).get(0),y(u).after(s),i.setStart(u,u.textContent.length),i.setEnd(u,u.textContent.length),l=!0)}if(!l){var m=void 0,v=void 0;v=(E.browser.chrome||E.browser.edge)&&o.nextSibling===a?(m=M(a,i,!0)||i.setStartAfter(a),M(o,i,!1)||i.setEndBefore(o)):(o.previousSibling===a&&(a=(o=a).nextSibling),a.nextSibling&&"BR"===a.nextSibling.tagName||!a.nextSibling&&E.node.isBlock(o.previousSibling)||o.previousSibling&&"BR"===o.previousSibling.tagName||(o.style.display="inline",a.style.display="inline",s=y(E.doc.createTextNode("\u200b")).get(0)),m=M(o,i,!0)||y(o).before(s)&&i.setStartBefore(o),M(a,i,!1)||y(a).after(s)&&i.setEndAfter(a)),"function"==typeof m&&m(),"function"==typeof v&&v()}}catch(b){}}s&&y(s).remove();try{n.addRange(i)}catch(b){}}E.markers.remove()}function M(e,t,n){var r,o=e.previousSibling,i=e.nextSibling;return o&&i&&o.nodeType===Node.TEXT_NODE&&i.nodeType===Node.TEXT_NODE?(r=o.textContent.length,n?(i.textContent=o.textContent+i.textContent,y(o).remove(),y(e).remove(),E.opts.htmlUntouched||E.spaces.normalize(i),function(){t.setStart(i,r)}):(o.textContent+=i.textContent,y(i).remove(),y(e).remove(),E.opts.htmlUntouched||E.spaces.normalize(o),function(){t.setEnd(o,r)})):o&&!i&&o.nodeType===Node.TEXT_NODE?(r=o.textContent.length,n?(E.opts.htmlUntouched||E.spaces.normalize(o),function(){t.setStart(o,r)}):(E.opts.htmlUntouched||E.spaces.normalize(o),function(){t.setEnd(o,r)})):!(!i||o||i.nodeType!==Node.TEXT_NODE)&&(n?(E.opts.htmlUntouched||E.spaces.normalize(i),function(){t.setStart(i,0)}):(E.opts.htmlUntouched||E.spaces.normalize(i),function(){t.setEnd(i,0)}))}function A(){for(var e=f(),t=0;t<e.length;t++)if(!e[t].collapsed)return!1;return!0}function o(e){var t,n,r=!1,o=!1;if(E.win.getSelection){var i=E.win.getSelection();i.rangeCount&&((n=(t=i.getRangeAt(0)).cloneRange()).selectNodeContents(e),n.setEnd(t.startContainer,t.startOffset),r=a(n),n.selectNodeContents(e),n.setStart(t.endContainer,t.endOffset),o=a(n))}else E.doc.selection&&"Control"!==E.doc.selection.type&&((n=(t=E.doc.selection.createRange()).duplicate()).moveToElementText(e),n.setEndPoint("EndToStart",t),r=a(n),n.moveToElementText(e),n.setEndPoint("StartToEnd",t),o=a(n));return{atStart:r,atEnd:o}}function a(e){return""===e.toString().replace(/[\u200B-\u200D\uFEFF]/g,"")}function x(e,t){void 0===t&&(t=!0);var n=y(e).html();n&&n.replace(/\u200b/g,"").length!==n.length&&y(e).html(n.replace(/\u200b/g,""));for(var r=E.node.contents(e),o=0;o<r.length;o++)r[o].nodeType!==Node.ELEMENT_NODE?y(r[o]).remove():(x(r[o],0===o),0===o&&(t=!1));if(e.nodeType===Node.TEXT_NODE){var i=y(document.createElement("span")).attr("data-first","true").attr("data-text","true");y(e)[0].replaceWith(i[0])}else t&&y(e).attr("data-first",!0)}function O(){return 0===y(this).find("fr-inner").length}function h(){try{if(!E.$wp)return!1;for(var e=f(0).commonAncestorContainer;e&&!E.node.isElement(e);)e=e.parentNode;return!!E.node.isElement(e)}catch(t){return!1}}function r(e,t){if(!e||0<e.getElementsByClassName("fr-marker").length)return!1;for(var n=e.firstChild;n&&(E.node.isBlock(n)||t&&!E.node.isVoid(n)&&n.nodeType===Node.ELEMENT_NODE);)n=(e=n).firstChild;e.innerHTML=V.MARKERS+e.innerHTML}function i(e,t){if(!e||0<e.getElementsByClassName("fr-marker").length)return!1;for(var n=e.lastChild;n&&(E.node.isBlock(n)||t&&!E.node.isVoid(n)&&n.nodeType===Node.ELEMENT_NODE);)n=(e=n).lastChild;var r=E.doc.createElement("SPAN");for(r.setAttribute("id","fr-sel-markers"),r.innerHTML=V.MARKERS;e.parentNode&&E.opts.htmlAllowedEmptyTags&&0<=E.opts.htmlAllowedEmptyTags.indexOf(e.tagName.toLowerCase());)e=e.parentNode;e.appendChild(r);var o=e.querySelector("#fr-sel-markers");o.outerHTML=o.innerHTML}return{text:s,get:L,ranges:f,clear:S,element:function l(){var e=L();try{if(e.rangeCount){var t,n=f(0),r=n.startContainer;if(E.node.isElement(r)&&0===n.startOffset&&r.childNodes.length)for(;r.childNodes.length&&r.childNodes[0].nodeType===Node.ELEMENT_NODE;)r=r.childNodes[0];if(r.nodeType===Node.TEXT_NODE&&n.startOffset===(r.textContent||"").length&&r.nextSibling&&(r=r.nextSibling),r.nodeType===Node.ELEMENT_NODE){var o=!1;if(E.node.isElement(r)&&""==r.textContent&&"IMG"==r.childNodes[0].tagName&&r.childNodes.length)for(;r.childNodes.length&&r.childNodes[0].nodeType===Node.ELEMENT_NODE;)r=r.childNodes[0];if(0<r.childNodes.length&&r.childNodes[n.startOffset]){for(t=r.childNodes[n.startOffset];t&&t.nodeType===Node.TEXT_NODE&&0===t.textContent.length;)t=t.nextSibling;if(t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,o=!0),!o&&1<r.childNodes.length&&0<n.startOffset&&r.childNodes[n.startOffset-1]){for(t=r.childNodes[n.startOffset-1];t&&t.nodeType===Node.TEXT_NODE&&0===t.textContent.length;)t=t.nextSibling;t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,o=!0)}}else!n.collapsed&&r.nextSibling&&r.nextSibling.nodeType===Node.ELEMENT_NODE&&(t=r.nextSibling)&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,o=!0);!o&&0<r.childNodes.length&&y(r.childNodes[0]).text().replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&["BR","IMG","HR"].indexOf(r.childNodes[0].tagName)<0&&(r=r.childNodes[0])}for(;r.nodeType!==Node.ELEMENT_NODE&&r.parentNode;)r=r.parentNode;for(var i=r;i&&"HTML"!==i.tagName;){if(i===E.el)return r;i=y(i).parent()[0]}}}catch(a){}return E.el},endElement:function c(){var e=L();try{if(e.rangeCount){var t,n=f(0),r=n.endContainer;if(r.nodeType===Node.ELEMENT_NODE){var o=!1;0<r.childNodes.length&&r.childNodes[n.endOffset]&&y(r.childNodes[n.endOffset]).text()===s()?(r=r.childNodes[n.endOffset],o=!0):!n.collapsed&&r.previousSibling&&r.previousSibling.nodeType===Node.ELEMENT_NODE?(t=r.previousSibling)&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,o=!0):!n.collapsed&&0<r.childNodes.length&&r.childNodes[n.endOffset]&&(t=r.childNodes[n.endOffset].previousSibling).nodeType===Node.ELEMENT_NODE&&t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,o=!0),!o&&0<r.childNodes.length&&y(r.childNodes[r.childNodes.length-1]).text()===s()&&["BR","IMG","HR"].indexOf(r.childNodes[r.childNodes.length-1].tagName)<0&&(r=r.childNodes[r.childNodes.length-1])}for(r.nodeType===Node.TEXT_NODE&&0===n.endOffset&&r.previousSibling&&r.previousSibling.nodeType===Node.ELEMENT_NODE&&(r=r.previousSibling);r.nodeType!==Node.ELEMENT_NODE&&r.parentNode;)r=r.parentNode;for(var i=r;i&&"HTML"!==i.tagName;){if(i===E.el)return r;i=y(i).parent()[0]}}}catch(a){}return E.el},save:N,restore:T,isCollapsed:A,isFull:function d(){if(A())return!1;E.selection.save();var e,t=E.el.querySelectorAll("td, th, img, br");for(e=0;e<t.length;e++)(t[e].nextSibling||"IMG"===t[e].tagName)&&(t[e].innerHTML='<span class="fr-mk" style="display: none;">&nbsp;</span>'.concat(t[e].innerHTML));var n=!1,r=o(E.el);for(r.atStart&&r.atEnd&&(n=!0),t=E.el.querySelectorAll(".fr-mk"),e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e]);return E.selection.restore(),n},inEditor:h,remove:function w(){if(A())return!0;var e;function t(e){for(var t=e.previousSibling;t&&t.nodeType===Node.TEXT_NODE&&0===t.textContent.length;){var n=t;t=t.previousSibling,y(n).remove()}return t}function n(e){for(var t=e.nextSibling;t&&t.nodeType===Node.TEXT_NODE&&0===t.textContent.length;){var n=t;t=t.nextSibling,y(n).remove()}return t}N();var r=E.$el.find('.fr-marker[data-type="true"]');for(e=0;e<r.length;e++)for(var o=r[e];!(t(o)||E.node.isBlock(o.parentNode)||E.$el.is(o.parentNode)||E.node.hasClass(o.parentNode,"fr-inner"));)y(o.parentNode).before(o);var i=E.$el.find('.fr-marker[data-type="false"]');for(e=0;e<i.length;e++){for(var a=i[e];!(n(a)||E.node.isBlock(a.parentNode)||E.$el.is(a.parentNode)||E.node.hasClass(a.parentNode,"fr-inner"));)y(a.parentNode).after(a);a.parentNode&&E.node.isBlock(a.parentNode)&&E.node.isEmpty(a.parentNode)&&!E.$el.is(a.parentNode)&&!E.node.hasClass(a.parentNode,"fr-inner")&&E.opts.keepFormatOnDelete&&y(a.parentNode).after(a)}if(function b(){for(var e=E.$el.find(".fr-marker"),t=0;t<e.length;t++)if(y(e[t]).parentsUntil('.fr-element, [contenteditable="true"]','[contenteditable="false"]').length)return!1;return!0}()){!function L(e,t){var n=E.node.contents(e.get(0));0<=["TD","TH"].indexOf(e.get(0).tagName)&&1===e.find(".fr-marker").length&&(E.node.hasClass(n[0],"fr-marker")||"BR"==n[0].tagName&&E.node.hasClass(n[0].nextElementSibling,"fr-marker"))&&e.attr("data-del-cell",!0);for(var r=0;r<n.length;r++){var o=n[r];E.node.hasClass(o,"fr-marker")?t=(t+1)%2:t?0<y(o).find(".fr-marker").length?t=L(y(o),t):["TD","TH"].indexOf(o.tagName)<0&&!E.node.hasClass(o,"fr-inner")?!E.opts.keepFormatOnDelete||0<E.$el.find("[data-first]").length||E.node.isVoid(o)?y(o).remove():x(o):E.node.hasClass(o,"fr-inner")?0===y(o).find(".fr-inner").length?y(o).html("<br>"):y(o).find(".fr-inner").filter(O).html("<br>"):(y(o).empty(),y(o).attr("data-del-cell",!0)):0<y(o).find(".fr-marker").length&&(t=L(y(o),t))}return t}(E.$el,0);var s=E.$el.find('[data-first="true"]');if(s.length)E.$el.find(".fr-marker").remove(),s.append(V.INVISIBLE_SPACE+V.MARKERS).removeAttr("data-first"),s.attr("data-text")&&s.replaceWith(s.html());else for(E.$el.find("table").filter(function(){return 0<y(this).find("[data-del-cell]").length&&y(this).find("[data-del-cell]").length===y(this).find("td, th").length}).remove(),E.$el.find("[data-del-cell]").removeAttr("data-del-cell"),r=E.$el.find('.fr-marker[data-type="true"]'),e=0;e<r.length;e++){var l=r[e],c=l.nextSibling,d=E.$el.find('.fr-marker[data-type="false"][data-id="'.concat(y(l).data("id"),'"]')).get(0);if(d){if(l&&(!c||c!==d)){var f=E.node.blockParent(l),p=E.node.blockParent(d),h=!1,u=!1;if(f&&0<=["UL","OL"].indexOf(f.tagName)&&(h=!(f=null)),p&&0<=["UL","OL"].indexOf(p.tagName)&&(u=!(p=null)),y(l).after(d),f!==p)if(null!==f||h)if(null!==p||u||0!==y(f).parentsUntil(E.$el,"table").length)f&&p&&0===y(f).parentsUntil(E.$el,"table").length&&0===y(p).parentsUntil(E.$el,"table").length&&!y(f).contains(p)&&!y(p).contains(f)&&(y(f).append(y(p).html()),y(p).remove());else{for(c=f;!c.nextSibling&&c.parentNode!==E.el;)c=c.parentNode;for(c=c.nextSibling;c&&"BR"!==c.tagName;){var g=c.nextSibling;y(f).append(c),c=g}c&&"BR"===c.tagName&&y(c).remove()}else{var C=E.node.deepestParent(l);C?(y(C).after(y(p).html()),y(p).remove()):0===y(p).parentsUntil(E.$el,"table").length&&(y(l).next().after(y(p).html()),y(p).remove())}}}else d=y(l).clone().attr("data-type",!1),y(l).after(d)}}E.$el.find("li:empty").remove(),E.opts.keepFormatOnDelete||E.html.fillEmptyBlocks(),E.html.cleanEmptyTags(!0),E.opts.htmlUntouched||(E.clean.lists(),E.$el.find("li:empty").append("<br>"),E.spaces.normalize());var m=E.$el.find(".fr-marker").last().get(0),v=E.$el.find(".fr-marker").first().get(0);void 0!==m&&void 0!==v&&!m.nextSibling&&v.previousSibling&&"BR"===v.previousSibling.tagName&&E.node.isElement(m.parentNode)&&E.node.isElement(v.parentNode)&&E.$el.append("<br>"),T()},blocks:function u(e){var t,n,r=[],o=L();if(h()&&o.rangeCount){var i=f();for(t=0;t<i.length;t++){var a=i[t],s=p(a.startContainer,a.startOffset),l=p(a.endContainer,a.endOffset);(n=E.node.blockParent(s))&&r.indexOf(n)<0&&r.push(n),(E.node.isBlock(s)||E.node.hasClass(s,"fr-inner"))&&r.indexOf(s)<0&&r.push(s);for(var c=[],d=s;d!==l&&d!==E.el;)c.indexOf(d)<0&&d.children&&d.children.length?(c.push(d),d=d.children[0]):d.nextSibling?d=d.nextSibling:d.parentNode&&(d=d.parentNode,c.push(d)),E.node.isBlock(d)&&c.indexOf(d)<0&&r.indexOf(d)<0&&(d!==l||0<a.endOffset)&&r.push(d);E.node.isBlock(l)&&r.indexOf(l)<0&&0<a.endOffset&&r.push(l),(n=E.node.blockParent(l))&&r.indexOf(n)<0&&r.push(n)}}for(t=r.length-1;0<t;t--)if(y(r[t-1]).contains(r[t])){if(e&&y(r[t]).find("ul, ol").length)continue;r.splice(t-1,1)}else if(y(r[t]).contains(r[t-1])){if(e&&y(r[t]).find("ul, ol").length)continue;r.splice(t,1)}return r},info:o,setAtEnd:i,setAtStart:r,setBefore:function g(e,t){void 0===t&&(t=!0);for(var n=e.previousSibling;n&&n.nodeType===Node.TEXT_NODE&&0===n.textContent.length;)n=n.previousSibling;return n?(E.node.isBlock(n)?i(n):"BR"===n.tagName?y(n).before(V.MARKERS):y(n).after(V.MARKERS),!0):!!t&&(E.node.isBlock(e)?r(e):y(e).before(V.MARKERS),!0)},setAfter:function C(e,t){void 0===t&&(t=!0);for(var n=e.nextSibling;n&&n.nodeType===Node.TEXT_NODE&&0===n.textContent.length;)n=n.nextSibling;return n?(E.node.isBlock(n)?r(n):y(n).before(V.MARKERS),!0):!!t&&(E.node.isBlock(e)?i(e):y(e).after(V.MARKERS),!0)},rangeElement:p}},Object.assign(V.DEFAULTS,{language:null}),V.LANGUAGE={},V.MODULES.language=function(e){var t;return{_init:function n(){V.LANGUAGE&&(t=V.LANGUAGE[e.opts.language]),t&&t.direction&&(e.opts.direction=t.direction)},translate:function r(e){return t&&t.translation[e]&&t.translation[e].length?t.translation[e]:e}}},Object.assign(V.DEFAULTS,{placeholderText:"Type something"}),V.MODULES.placeholder=function(f){var p=f.$;function e(){f.$placeholder||function d(){f.$placeholder=p(f.doc.createElement("SPAN")).addClass("fr-placeholder"),f.$wp.append(f.$placeholder)}();var e=f.opts.iframe?f.$iframe.prev().outerHeight(!0):f.$el.prev().outerHeight(!0),t=0,n=0,r=0,o=0,i=0,a=0,s=f.node.contents(f.el),l=p(f.selection.element()).css("text-align");if(s.length&&s[0].nodeType===Node.ELEMENT_NODE){var c=p(s[0]);(0<f.$wp.prev().length||0<f.$el.prev().length)&&f.ready&&(t=f.helpers.getPX(c.css("margin-top")),o=f.helpers.getPX(c.css("padding-top")),n=f.helpers.getPX(c.css("margin-left")),r=f.helpers.getPX(c.css("margin-right")),i=f.helpers.getPX(c.css("padding-left")),a=f.helpers.getPX(c.css("padding-right"))),f.$placeholder.css("font-size",c.css("font-size")),f.$placeholder.css("line-height",c.css("line-height"))}else f.$placeholder.css("font-size",f.$el.css("font-size")),f.$placeholder.css("line-height",f.$el.css("line-height"));f.$wp.addClass("show-placeholder"),f.$placeholder.css({marginTop:Math.max(f.helpers.getPX(f.$el.css("margin-top")),t)+(e||0),paddingTop:Math.max(f.helpers.getPX(f.$el.css("padding-top")),o),paddingLeft:Math.max(f.helpers.getPX(f.$el.css("padding-left")),i),marginLeft:Math.max(f.helpers.getPX(f.$el.css("margin-left")),n),paddingRight:Math.max(f.helpers.getPX(f.$el.css("padding-right")),a),marginRight:Math.max(f.helpers.getPX(f.$el.css("margin-right")),r),textAlign:l}).text(f.language.translate(f.opts.placeholderText||f.$oel.attr("placeholder")||"")),f.$placeholder.html(f.$placeholder.text().replace(/\n/g,"<br>"))}function t(){f.$wp.removeClass("show-placeholder")}function n(){if(!f.$wp)return!1;f.core.isEmpty()?e():t()}return{_init:function r(){if(!f.$wp)return!1;f.events.on("init input keydown keyup contentChanged initialized",n)},show:e,hide:t,refresh:n,isVisible:function o(){return!f.$wp||f.node.hasClass(f.$wp.get(0),"show-placeholder")}}},V.UNICODE_NBSP=String.fromCharCode(160),V.VOID_ELEMENTS=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],V.BLOCK_TAGS=["address","article","aside","audio","blockquote","canvas","details","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul","video"],Object.assign(V.DEFAULTS,{htmlAllowedEmptyTags:["textarea","a","iframe","object","video","style","script",".fa",".fr-emoticon",".fr-inner","path","line","hr"],htmlDoNotWrapTags:["script","style"],htmlSimpleAmpersand:!1,htmlIgnoreCSSProperties:[],htmlExecuteScripts:!0}),V.MODULES.html=function(w){var u=w.$;function d(){return w.opts.enter===V.ENTER_P?"p":w.opts.enter===V.ENTER_DIV?"div":w.opts.enter===V.ENTER_BR?null:void 0}function s(e,t){return!(!e||e===w.el)&&(t?-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName)||s(e.parentNode,t):-1!==["PRE","SCRIPT","STYLE"].indexOf(e.tagName))}function i(e){var t,n=[],r=[];if(e){var o=w.el.querySelectorAll(".fr-marker");for(t=0;t<o.length;t++){var i=w.node.blockParent(o[t])||o[t];if(i){var a=i.nextSibling,s=i.previousSibling;i&&r.indexOf(i)<0&&w.node.isBlock(i)&&r.push(i),s&&w.node.isBlock(s)&&r.indexOf(s)<0&&r.push(s),a&&w.node.isBlock(a)&&r.indexOf(a)<0&&r.push(a)}}}else r=w.el.querySelectorAll(p());var l=p();for(l+=",".concat(V.VOID_ELEMENTS.join(",")),l+=", .fr-inner",l+=",".concat(w.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"),":not(.fr-marker)"),t=r.length-1;0<=t;t--)if(!(r[t].textContent&&0<r[t].textContent.replace(/\u200B|\n/g,"").length||0<r[t].querySelectorAll(l).length)){for(var c=w.node.contents(r[t]),d=!1,f=0;f<c.length;f++)if(c[f].nodeType!==Node.COMMENT_NODE&&c[f].textContent&&0<c[f].textContent.replace(/\u200B|\n/g,"").length){d=!0;break}d||n.push(r[t])}return n}function p(){return V.BLOCK_TAGS.join(", ")}function e(e){var t,n,r=u.merge([],V.VOID_ELEMENTS);r=u.merge(r,w.opts.htmlAllowedEmptyTags),r=void 0===e?u.merge(r,V.BLOCK_TAGS):u.merge(r,V.NO_DELETE_TAGS),t=w.el.querySelectorAll("*:empty:not(".concat(r.join("):not("),"):not(.fr-marker):not(template)"));do{n=!1;for(var o=0;o<t.length;o++)0!==t[o].attributes.length&&void 0===t[o].getAttribute("href")||(t[o].parentNode.removeChild(t[o]),n=!0);(t=w.el.querySelectorAll("*:empty:not(".concat(r.join("):not("),"):not(.fr-marker):not(template)"))).length||(t=w.el.querySelectorAll("a[href]:not([name]):empty"))}while(t.length&&n)}function a(e,t){var n=d();if(t&&(n="div"),n){for(var r=w.doc.createDocumentFragment(),o=null,i=!1,a=e.firstChild,s=!1;a;){var l=a.nextSibling;if(a.nodeType===Node.ELEMENT_NODE&&(w.node.isBlock(a)||0<=w.opts.htmlDoNotWrapTags.indexOf(a.tagName.toLowerCase())&&!w.node.hasClass(a,"fr-marker")))o=null,r.appendChild(a.cloneNode(!0));else if(a.nodeType!==Node.ELEMENT_NODE&&a.nodeType!==Node.TEXT_NODE)o=null,r.appendChild(a.cloneNode(!0));else if("BR"===a.tagName)null===o?(o=w.doc.createElement(n),s=!0,t&&(o.setAttribute("class","fr-temp-div"),o.setAttribute("data-empty",!0)),o.appendChild(a.cloneNode(!0)),r.appendChild(o)):!1===i&&(o.appendChild(w.doc.createElement("br")),t&&(o.setAttribute("class","fr-temp-div"),o.setAttribute("data-empty",!0))),o=null;else{var c=a.textContent;if(a.nodeType!==Node.TEXT_NODE||0<c.replace(/\n/g,"").replace(/(^ *)|( *$)/g,"").length||c.replace(/(^ *)|( *$)/g,"").length&&c.indexOf("\n")<0){if("SPAN"===a.tagName&&u(a).hasClass("fr-marker")&&!a.previousSibling){r.appendChild(a),a=l;continue}if("SPAN"===a.tagName&&u(a).hasClass("fr-marker")&&a.previousSibling&&a.previousSibling.nodeType===Node.ELEMENT_NODE){r.appendChild(a),s=!0,a=l;continue}null===o&&(o=w.doc.createElement(n),s=!0,t&&o.setAttribute("class","fr-temp-div"),r.appendChild(o),i=!1),o.appendChild(a.cloneNode(!0)),i||w.node.hasClass(a,"fr-marker")||a.nodeType===Node.TEXT_NODE&&0===c.replace(/ /g,"").length||(i=!0)}else s=!0}a=l}s&&(e.innerHTML="",e.appendChild(r))}}function l(e,t){for(var n=e.length-1;0<=n;n--)a(e[n],t)}function t(e,t,n,r,o){if(!w.$wp)return!1;void 0===e&&(e=!1),void 0===t&&(t=!1),void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===o&&(o=!1);var i=w.$wp.scrollTop();a(w.el,e),r&&l(w.el.querySelectorAll(".fr-inner"),e),t&&l(w.el.querySelectorAll("td, th"),e),n&&l(w.el.querySelectorAll("blockquote"),e),o&&l(w.el.querySelectorAll("li"),e),i!==w.$wp.scrollTop()&&w.$wp.scrollTop(i)}function n(e){if(void 0===e&&(e=w.el),e&&0<=["SCRIPT","STYLE","PRE"].indexOf(e.tagName))return!1;for(var t=w.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,w.node.filter(function(e){return null!==e.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g)}),!1);t.nextNode();){var n=t.currentNode;if(!s(n.parentNode,!0)){var r=w.node.isBlock(n.parentNode)||w.node.isElement(n.parentNode),o=n.textContent.replace(/(?!^)( ){2,}(?!$)/g," ").replace(/\n/g," ").replace(/^[ ]{2,}/g," ").replace(/[ ]{2,}$/g," ");if(r){var i=n.previousSibling,a=n.nextSibling;i&&a&&" "===o?o=w.node.isBlock(i)&&w.node.isBlock(a)?"":" ":(i||(o=o.replace(/^ */,"")),a||(o=o.replace(/ *$/,"")))}n.textContent=o}}}function r(e,t,n){var r=new RegExp(t,"gi").exec(e);return r?r[n]:null}function k(e){var t=e.doctype,n="<!DOCTYPE html>";return t&&(n="<!DOCTYPE ".concat(t.name).concat(t.publicId?' PUBLIC "'.concat(t.publicId,'"'):"").concat(!t.publicId&&t.systemId?" SYSTEM":"").concat(t.systemId?' "'.concat(t.systemId,'"'):"",">")),n}function c(e){var t=e.parentNode;if(t&&(w.node.isBlock(t)||w.node.isElement(t))&&["TD","TH"].indexOf(t.tagName)<0){for(var n=e.previousSibling,r=e.nextSibling;n&&(n.nodeType===Node.TEXT_NODE&&0===n.textContent.replace(/\n|\r/g,"").length||w.node.hasClass(n,"fr-tmp"));)n=n.previousSibling;if(r)return!1;n&&t&&"BR"!==n.tagName&&!w.node.isBlock(n)&&!r&&0<t.textContent.replace(/\u200B/g,"").length&&0<n.textContent.length&&!w.node.hasClass(n,"fr-marker")&&(w.el===t&&!r&&w.opts.enter===V.ENTER_BR&&w.browser.msie||e.parentNode.removeChild(e))}else!t||w.node.isBlock(t)||w.node.isElement(t)||e.previousSibling||e.nextSibling||!w.node.isDeletable(e.parentNode)||c(e.parentNode)}function g(){w.opts.htmlUntouched||(e(),t(),n(),w.spaces.normalize(null,!0),w.html.fillEmptyBlocks(),w.clean.lists(),w.clean.tables(),w.clean.toHTML5(),w.html.cleanBRs()),w.selection.restore(),o(),w.placeholder.refresh()}function o(){w.node.isEmpty(w.el)&&(null!==d()?w.el.querySelector(p())||w.el.querySelector("".concat(w.opts.htmlDoNotWrapTags.join(":not(.fr-marker),"),":not(.fr-marker)"))||(w.core.hasFocus()?(w.$el.html("<".concat(d(),">").concat(V.MARKERS,"<br/></").concat(d(),">")),w.selection.restore()):w.$el.html("<".concat(d(),"><br/></").concat(d(),">"))):w.el.querySelector("*:not(.fr-marker):not(br)")||(w.core.hasFocus()?(w.$el.html("".concat(V.MARKERS,"<br/>")),w.selection.restore()):w.$el.html("<br/>")))}function C(e,t){return r(e,"<".concat(t,"[^>]*?>([\\w\\W]*)</").concat(t,">"),1)}function m(e,t){var n=u("<div ".concat(r(e,"<".concat(t,"([^>]*?)>"),1)||"",">"));return w.node.rawAttributes(n.get(0))}function v(e){return(r(e,"<!DOCTYPE([^>]*?)>",0)||"<!DOCTYPE html>").replace(/\n/g," ").replace(/ {2,}/g," ")}function b(e,t){w.opts.htmlExecuteScripts?e.html(t):e.get(0).innerHTML=t}function $(e){var t;(t=/:not\(([^)]*)\)/g).test(e)&&(e=e.replace(t,"     $1 "));var n=100*(e.match(/(#[^\s+>~.[:]+)/g)||[]).length+10*(e.match(/(\[[^]]+\])/g)||[]).length+10*(e.match(/(\.[^\s+>~.[:]+)/g)||[]).length+10*(e.match(/(:[\w-]+\([^)]*\))/gi)||[]).length+10*(e.match(/(:[^\s+>~.[:]+)/g)||[]).length+(e.match(/(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi)||[]).length;return n+=((e=(e=e.replace(/[*\s+>~]/g," ")).replace(/[#.]/g," ")).match(/([^\s+>~.[:]+)/g)||[]).length}function H(e){if(w.events.trigger("html.processGet",[e]),e&&e.getAttribute&&""===e.getAttribute("class")&&e.removeAttribute("class"),e&&e.getAttribute&&""===e.getAttribute("style")&&e.removeAttribute("style"),e&&e.nodeType===Node.ELEMENT_NODE){var t,n=e.querySelectorAll('[class=""],[style=""]');for(t=0;t<n.length;t++){var r=n[t];""===r.getAttribute("class")&&r.removeAttribute("class"),""===r.getAttribute("style")&&r.removeAttribute("style")}if("BR"===e.tagName)c(e);else{var o=e.querySelectorAll("br");for(t=0;t<o.length;t++)c(o[t])}}}function D(e,t){return e[3]-t[3]}function _(){for(var e=w.el.querySelectorAll("input, textarea"),t=0;t<e.length;t++)"checkbox"!==e[t].type&&"radio"!==e[t].type||(e[t].checked?e[t].setAttribute("checked",e[t].checked):w.$(e[t]).removeAttr("checked")),e[t].getAttribute("value")&&e[t].setAttribute("value",e[t].value)}function f(e){var t=w.doc.createElement("div");return t.innerHTML=e,null!==t.querySelector(p())}function h(e){var t=null;if(void 0===e&&(t=w.selection.element()),w.opts.keepFormatOnDelete)return!1;var n,r,o=t?(t.textContent.match(/\u200B/g)||[]).length-t.querySelectorAll(".fr-marker").length:0;if((w.el.textContent.match(/\u200B/g)||[]).length-w.el.querySelectorAll(".fr-marker").length===o)return!1;do{r=!1,n=w.el.querySelectorAll("*:not(.fr-marker)");for(var i=0;i<n.length;i++){var a=n[i];if(t!==a){var s=a.textContent;0===a.children.length&&1===s.length&&8203===s.charCodeAt(0)&&["TD","STRONG","SPAN","EM","U","S","SUB","SUP"].indexOf(a.tagName)<0&&(u(a).remove(),r=!0)}}}while(r)}function L(){h(),w.placeholder&&setTimeout(w.placeholder.refresh,0)}return{defaultTag:d,isPreformatted:s,emptyBlocks:i,emptyBlockTagsQuery:function E(){return"".concat(V.BLOCK_TAGS.join(":empty, "),":empty")},blockTagsQuery:p,fillEmptyBlocks:function y(e){var t=i(e);w.node.isEmpty(w.el)&&w.opts.enter===V.ENTER_BR&&t.push(w.el);for(var n=0;n<t.length;n++){var r=t[n];"false"===r.getAttribute("contenteditable")||r.querySelector("".concat(w.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"),":not(.fr-marker)"))||w.node.isVoid(r)||"TABLE"===r.tagName||"TBODY"===r.tagName||"TR"===r.tagName||"UL"===r.tagName||"OL"===r.tagName||w.node.isEmpty(w.el)||r.querySelector("br")||r.appendChild(w.doc.createElement("br"))}if(w.browser.msie&&w.opts.enter===V.ENTER_BR){var o=w.node.contents(w.el);o.length&&o[o.length-1].nodeType===Node.TEXT_NODE&&w.$el.append("<br>")}},cleanEmptyTags:e,cleanWhiteTags:h,cleanBlankSpaces:n,blocks:function S(){return w.$el.get(0).querySelectorAll(p())},getDoctype:k,set:function N(e){var t=w.clean.html((e||"").trim(),[],[],w.opts.fullPage),n=new RegExp("%3A//","g"),r=t.replace(n,"://");if(w.opts.fullPage){var o=C(r,"body")||(0<=r.indexOf("<body")?"":r),i=m(r,"body"),a=C(r,"head")||"<title></title>",s=m(r,"head"),l=u("<div>");l.append(a).contents().each(function(){(this.nodeType===Node.COMMENT_NODE||0<=["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName))&&this.parentNode.removeChild(this)});var c=l.html().trim();a=u("<div>").append(a).contents().map(function(){return this.nodeType===Node.COMMENT_NODE?"\x3c!--".concat(this.nodeValue,"--\x3e"):0<=["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName)?this.outerHTML:""}).toArray().join("");var d=v(r),f=m(r,"html");b(w.$el,"".concat(c,"\n").concat(o)),w.node.clearAttributes(w.el),w.$el.attr(i),w.$el.addClass("fr-view"),w.$el.attr("spellcheck",w.opts.spellcheck),w.$el.attr("dir",w.opts.direction),b(w.$head,a),w.node.clearAttributes(w.$head.get(0)),w.$head.attr(s),w.node.clearAttributes(w.$html.get(0)),w.$html.attr(f),w.iframe_document.doctype.parentNode.replaceChild(function h(e,t){var n=e.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i);return n?t.implementation.createDocumentType(n[1],n[3],n[4]):t.implementation.createDocumentType("html")}(d,w.iframe_document),w.iframe_document.doctype)}else b(w.$el,r);var p=w.edit.isDisabled();w.edit.on(),w.core.injectStyle(w.opts.iframeDefaultStyle+w.opts.iframeStyle),g(),w.opts.useClasses||(w.$el.find("[fr-original-class]").each(function(){this.setAttribute("class",this.getAttribute("fr-original-class")),this.removeAttribute("fr-original-class")}),w.$el.find("[fr-original-style]").each(function(){this.setAttribute("style",this.getAttribute("fr-original-style")),this.removeAttribute("fr-original-style")})),p&&w.edit.off(),w.events.trigger("html.set"),w.events.trigger("charCounter.update")},syncInputs:_,get:function B(e,t){if(!w.$wp)return w.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML;var n="";w.events.trigger("html.beforeGet");var r,o,i=[],a={},s=[];if(_(),!w.opts.useClasses&&!t){var l=new RegExp("^".concat(w.opts.htmlIgnoreCSSProperties.join("$|^"),"$"),"gi");for(r=0;r<w.doc.styleSheets.length;r++){var c=void 0,d=0;try{c=w.doc.styleSheets[r].cssRules,w.doc.styleSheets[r].ownerNode&&"STYLE"===w.doc.styleSheets[r].ownerNode.nodeType&&(d=1)}catch(O){}if(c)for(var f=0,p=c.length;f<p;f++)if(c[f].selectorText&&0<c[f].style.cssText.length){var h=c[f].selectorText.replace(/body \s tbody \.fr-view /g,"").replace(/::/g,":"),u=void 0;try{u=w.el.querySelectorAll(h)}catch(O){u=[]}for(o=0;o<u.length;o++){!u[o].getAttribute("fr-original-style")&&u[o].getAttribute("style")?(u[o].setAttribute("fr-original-style",u[o].getAttribute("style")),i.push(u[o])):u[o].getAttribute("fr-original-style")||(u[o].setAttribute("fr-original-style",""),i.push(u[o])),a[u[o]]||(a[u[o]]={});for(var g=1e3*d+$(c[f].selectorText),C=c[f].style.cssText.split(";"),m=0;m<C.length;m++){var v=C[m].trim().split(":")[0];if(v&&!v.match(l)&&(a[u[o]][v]||(a[u[o]][v]=0)<=(u[o].getAttribute("fr-original-style")||"").indexOf("".concat(v,":"))&&(a[u[o]][v]=1e4),g>=a[u[o]][v]&&(a[u[o]][v]=g,C[m].trim().length))){var b=C[m].trim().split(":");b.splice(0,1);var L=b.join(":").trim();-1<L.indexOf("!important")&&(g+=1),s.push([u[o],v.trim(),L,g])}}}}}for(s.sort(D),r=0;r<s.length;r++){var E=s[r];E[0].style[E[1]]=E[2].replace(/!important/,"")}for(r=0;r<i.length;r++)if(i[r].getAttribute("class")&&(i[r].setAttribute("fr-original-class",i[r].getAttribute("class")),i[r].removeAttribute("class")),0<(i[r].getAttribute("fr-original-style")||"").trim().length){var y=i[r].getAttribute("fr-original-style").split(";");for(o=0;o<y.length;o++)if(0<y[o].indexOf(":")){var S=y[o].split(":"),N=S[0];S.splice(0,1),i[r].style[N.trim()]=S.join(":").trim()}}}if(w.node.isEmpty(w.el))w.opts.fullPage&&(n=k(w.iframe_document),n+="<html".concat(w.node.attributes(w.$html.get(0)),">").concat(w.$html.find("head").get(0).outerHTML,"<body></body></html>"));else if(void 0===e&&(e=!1),w.opts.fullPage){n=k(w.iframe_document),w.$el.removeClass("fr-view");var T=w.opts.heightMin,M=w.opts.height,A=w.opts.heightMax;w.opts.heightMin=null,w.opts.height=null,w.opts.heightMax=null,w.size.refresh(),n+="<html".concat(w.node.attributes(w.$html.get(0)),">").concat(w.$html.html(),"</html>"),w.opts.heightMin=T,w.opts.height=M,w.opts.heightMax=A,w.size.refresh(),w.$el.addClass("fr-view")}else n=w.$el.html();if(!w.opts.useClasses&&!t)for(r=0;r<i.length;r++)i[r].getAttribute("fr-original-class")&&(i[r].setAttribute("class",i[r].getAttribute("fr-original-class")),i[r].removeAttribute("fr-original-class")),null!==i[r].getAttribute("fr-original-style")&&void 0!==i[r].getAttribute("fr-original-style")?(0!==i[r].getAttribute("fr-original-style").length?i[r].setAttribute("style",i[r].getAttribute("fr-original-style")):i[r].removeAttribute("style"),i[r].removeAttribute("fr-original-style")):i[r].removeAttribute("style");w.opts.fullPage&&(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g,"")).replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g,"")).replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g,"")).replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")).replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,'<body$1class="$2$4"$5>$6</body>')).replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")),w.opts.htmlSimpleAmpersand&&(n=n.replace(/&amp;/gi,"&")),w.events.trigger("html.afterGet"),e||(n=n.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,"")),n=w.clean.invisibleSpaces(n),n=w.clean.exec(n,H);var x=w.events.chainTrigger("html.get",n);return"string"==typeof x&&(n=x),n=(n=n.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g,function(e){return e.replace(/<br>/g,"\n")})).replace(/<meta((?:[\w\W]*?)) data-fr-http-equiv="/g,'<meta$1 http-equiv="')},getSelected:function T(){function e(e,t){for(;t&&(t.nodeType===Node.TEXT_NODE||!w.node.isBlock(t))&&!w.node.isElement(t)&&!w.node.hasClass(t,"fr-inner")&&!(t.nextSibling&&("BR"===t.nextSibling.nodeName||w.node.isBlock(t.nextSibling))||t.previousSibling&&("BR"===t.previousSibling.nodeName||w.node.isBlock(t.previousSibling))||w.node.hasClass(t.parentNode,"fr-view"));)t&&t.nodeType!==Node.TEXT_NODE&&u(e).wrapInner(w.node.openTagString(t)+w.node.closeTagString(t)),t=t.parentNode;t&&e.innerHTML===t.innerHTML?e.innerHTML=t.outerHTML:t&&t.innerText&&-1!=t.innerText.indexOf(e.innerHTML)?e.innerHTML=w.node.openTagString(t)+t.innerHTML+w.node.closeTagString(t):t&&(t.nextSibling&&("BR"===t.nextSibling.nodeName||w.node.isBlock(t.nextSibling))||t.previousSibling&&("BR"===t.previousSibling.nodeName||w.node.isBlock(t.previousSibling)))&&t.wholeText&&(e.innerHTML=t.wholeText)}function t(e){var t,n=null;if(w.win.getSelection){if((t=w.win.getSelection())&&t.rangeCount){if(n=t.getRangeAt(0).commonAncestorContainer,1==e.childNodes.length&&e.childNodes[0].nodeType==Node.TEXT_NODE){var r=n.parentNode.tagName,o=w.doc.createElement(r),i=n.parentNode.getAttribute("style");for(i&&o.setAttribute("style",i),o.append(e.textContent),n=n.parentNode;n&&n.parentNode&&n.parentNode!=w.$el.get(0);){r=n.parentNode.tagName;var a=w.doc.createElement(r);(i=n.parentNode.getAttribute("style"))&&a.setAttribute("style",i),a.append(o),o=a,n=n.parentNode}return e.innerHTML=o.outerHTML,null}n.nodeType!==Node.ELEMENT_NODE&&w.opts.enter!==V.ENTER_BR&&(n=n.parentNode)}}else(t=w.doc.selection)&&"Control"!==t.type&&(n=t.createRange().parentElement());return null!==n&&(0<=u(n).parents().toArray().indexOf(w.el)||n===w.el)?n:null}var n="";if("undefined"!=typeof w.win.getSelection){w.browser.mozilla&&(w.selection.save(),1<w.$el.find('.fr-marker[data-type="false"]').length&&(w.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(),w.$el.find('.fr-marker[data-type="false"]:last').attr("data-id","0"),w.$el.find(".fr-marker").not('[data-id="0"]').remove()),w.selection.restore());for(var r=w.selection.ranges(),o=0;o<r.length;o++){var i=document.createElement("div");i.appendChild(r[o].cloneContents()),e(i,t(i)),0<u(i).find(".fr-element").length&&(i=w.el),n+=i.innerHTML}}else"undefined"!=typeof w.doc.selection&&"Text"===w.doc.selection.type&&(n=w.doc.selection.createRange().htmlText);return n},insert:function M(e,t,n){var r;if(w.selection.isCollapsed()||w.selection.remove(),r=t?e:w.clean.html(e),0===e.indexOf('<i class="fa ')&&(r="<span>&nbsp;".concat(r,"</span>")),e.indexOf('class="fr-marker"')<0&&(r=function a(e){var t=w.doc.createElement("div");return t.innerHTML=e,w.selection.setAtEnd(t,!0),t.innerHTML}(r)),w.node.isEmpty(w.el)&&!w.opts.keepFormatOnDelete&&f(r))w.opts.trackChangesEnabled?w.track_changes.pasteInEmptyEdior(r):w.el.innerHTML=r;else{(function s(){var e=w.selection.ranges(0).commonAncestorContainer;return e!==w.el&&!w.$el.contains(e)})()&&w.selection.restore();var o=w.markers.insert();if(o)if(w.opts.trackChangesEnabled)w.track_changes.pasteInEdior(r);else{w.node.isLastSibling(o)&&u(o).parent().hasClass("fr-deletable")&&u(o).insertAfter(u(o).parent());var i=w.node.blockParent(o);if((f(r)||n)&&(w.node.deepestParent(o)||i&&"LI"===i.tagName)){if(i&&"LI"===i.tagName&&(r=function l(e){if(!w.html.defaultTag())return e;var t=w.doc.createElement("div");t.innerHTML=e;for(var n=t.querySelectorAll(":scope > ".concat(w.html.defaultTag())),r=n.length-1;0<=r;r--){var o=n[r];w.node.isBlock(o.previousSibling)||(o.previousSibling&&!w.node.isEmpty(o)&&u("<br>").insertAfter(o.previousSibling),o.outerHTML=o.innerHTML)}return t.innerHTML}(r)),!(o=w.markers.split()))return!1;o.outerHTML=r}else o.outerHTML=r}else w.el.innerHTML+=r}g(),w.keys.positionCaret(),w.events.trigger("html.inserted")},wrap:t,unwrap:function A(){w.$el.find("div.fr-temp-div").each(function(){this.previousSibling&&this.previousSibling.nodeType===Node.TEXT_NODE&&u(this).before("<br>"),u(this).attr("data-empty")||!this.nextSibling||w.node.isBlock(this.nextSibling)&&!u(this.nextSibling).hasClass("fr-temp-div")?u(this).replaceWith(u(this).html()):u(this).replaceWith("".concat(u(this).html(),"<br>"))}),w.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function(){return""===u(this).attr("class")}).removeAttr("class")},escapeEntities:function x(e){return e.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/'/gi,"&#39;")},checkIfEmpty:o,extractNode:C,extractNodeAttrs:m,extractDoctype:v,cleanBRs:function O(){for(var e=w.el.getElementsByTagName("br"),t=0;t<e.length;t++)c(e[t])},_init:function R(){w.events.$on(w.$el,"mousemove","span.fr-word-select",function(e){var t=window.getSelection();t=window.getSelection();var n=document.createRange();n.selectNodeContents(e.target),t.removeAllRanges(),t.addRange(n)}),w.$wp&&(w.events.on("mouseup",L),w.events.on("keydown",L),w.events.on("contentChanged",o))},_setHtml:b}},V.ENTER_P=0,V.ENTER_DIV=1,V.ENTER_BR=2,V.KEYCODE={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,FF_SEMICOLON:59,FF_EQUALS:61,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,FF_HYPHEN:173,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,HYPHEN:189,PERIOD:190,SLASH:191,APOSTROPHE:192,TILDE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,IME:229},Object.assign(V.DEFAULTS,{enter:V.ENTER_P,multiLine:!0,tabSpaces:0}),V.MODULES.keys=function(d){var f,n,r,o=d.$,p=!1;function h(e){if(d.selection.isCollapsed())if(["INPUT","BUTTON","TEXTAREA"].indexOf(e.target&&e.target.tagName)<0&&d.cursor.backspace(),d.helpers.isIOS()){var t=d.selection.ranges(0);t.deleteContents(),t.insertNode(document.createTextNode("\u200b")),d.selection.get().modify("move","forward","character")}else["INPUT","BUTTON","TEXTAREA"].indexOf(e.target&&e.target.tagName)<0&&e.preventDefault(),e.stopPropagation();else e.preventDefault(),e.stopPropagation(),d.selection.remove();d.placeholder.refresh()}function u(e){["INPUT","BUTTON","TEXTAREA"].indexOf(e.target&&e.target.tagName)<0&&e.preventDefault(),e.stopPropagation(),""!==d.selection.text()||d.selection.element().hasAttribute("contenteditable")&&"false"===d.selection.element().getAttribute("contenteditable")||!d.selection.isCollapsed()&&"IMG"==d.selection.element().tagName?d.selection.remove():d.cursor.del(),d.placeholder.refresh()}function e(){if(d.browser.mozilla&&d.selection.isCollapsed()&&!p){var e=d.selection.ranges(0),t=e.startContainer,n=e.startOffset;t&&t.nodeType===Node.TEXT_NODE&&n<=t.textContent.length&&0<n&&32===t.textContent.charCodeAt(n-1)&&(d.selection.save(),d.spaces.normalize(),d.selection.restore())}}function t(){d.selection.isFull()&&setTimeout(function(){var e=d.html.defaultTag();e?d.$el.html("<".concat(e,">").concat(V.MARKERS,"<br/></").concat(e,">")):d.$el.html("".concat(V.MARKERS,"<br/>")),d.selection.restore(),d.placeholder.refresh(),d.button.bulkRefresh(),d.undo.saveStep()},0)}function i(){p=!1}function a(){p=!1}function g(){var e=d.html.defaultTag();e?d.$el.html("<".concat(e,">").concat(V.MARKERS,"<br/></").concat(e,">")):d.$el.html("".concat(V.MARKERS,"<br/>")),d.selection.restore()}function C(e,t){if(e.parentElement&&(-1<e.innerHTML.indexOf("<span")||-1<e.parentElement.innerHTML.indexOf("<span")||-1<e.parentElement.parentElement.innerHTML.indexOf("<span"))&&(e.classList.contains("fr-img-space-wrap")||e.parentElement.classList.contains("fr-img-space-wrap")||e.parentElement.parentElement.classList.contains("fr-img-space-wrap"))){if(o(e.parentElement).is("p")){var n=e.parentElement.innerHTML;return(n=n.replace(/<br>/g,"")).length<1?e.parentElement.insertAdjacentHTML("afterbegin","&nbsp;"):"&nbsp;"!=n&&" "!=n&&"Backspace"==t.key?h(t):"&nbsp;"!=n&&" "!=n&&"Delete"==t.key&&u(t),!0}if(o(e).is("p")){var r=e.innerHTML.replace(/<br>/g,"");return r.length<1?e.insertAdjacentHTML("afterbegin","&nbsp;"):"&nbsp;"!=r&&" "!=r&&"Backspace"==t.key?h(t):"&nbsp;"!=r&&" "!=r&&"Delete"==t.key&&u(t),!0}}return!1}function s(e){var t=d.selection.element();if(t&&0<=["INPUT","TEXTAREA"].indexOf(t.tagName))return!0;if(e&&v(e.which))return!0;d.events.disableBlur();var n=e.which;if(16===n)return!0;if((f=n)===V.KEYCODE.IME)return p=!0;if(p=!1,m(e))return!0;var r=b(n)&&!m(e)&&!e.altKey,o=n===V.KEYCODE.BACKSPACE||n===V.KEYCODE.DELETE;if((d.selection.isFull()&&!d.opts.keepFormatOnDelete&&!d.placeholder.isVisible()||o&&d.placeholder.isVisible()&&d.opts.keepFormatOnDelete)&&(r||o)&&(g(),!b(n)))return e.preventDefault(),!0;if(n===V.KEYCODE.ENTER)!d.helpers.isIOS()&&e.shiftKey||t.classList.contains("fr-inner")||t.parentElement.classList.contains("fr-inner")?function i(e){e.preventDefault(),e.stopPropagation(),d.opts.multiLine&&(d.selection.isCollapsed()||d.selection.remove(),d.cursor.enter(!0))}(e):function a(e){d.opts.multiLine?(d.helpers.isIOS()||(e.preventDefault(),e.stopPropagation()),d.selection.isCollapsed()||d.selection.remove(),d.cursor.enter()):(e.preventDefault(),e.stopPropagation())}(e);else if(n===V.KEYCODE.BACKSPACE&&(e.metaKey||e.ctrlKey))!function s(){setTimeout(function(){d.events.disableBlur(),d.events.focus()},0)}();else if(n!==V.KEYCODE.BACKSPACE||m(e)||e.altKey)if(n!==V.KEYCODE.DELETE||m(e)||e.altKey||e.shiftKey)n===V.KEYCODE.SPACE?function l(e){var t=d.selection.element();if(!d.helpers.isMobile()&&t&&"A"===t.tagName){e.preventDefault(),e.stopPropagation(),d.selection.isCollapsed()||d.selection.remove();var n=d.markers.insert();if(n){var r=n.previousSibling;!n.nextSibling&&n.parentNode&&"A"===n.parentNode.tagName?(n.parentNode.insertAdjacentHTML("afterend","&nbsp;".concat(V.MARKERS)),n.parentNode.removeChild(n)):(r&&r.nodeType===Node.TEXT_NODE&&1===r.textContent.length&&160===r.textContent.charCodeAt(0)?r.textContent+=" ":n.insertAdjacentHTML("beforebegin","&nbsp;"),n.outerHTML=V.MARKERS),d.selection.restore()}}}(e):n===V.KEYCODE.TAB?function c(e){if(0<d.opts.tabSpaces)if(d.selection.isCollapsed()){d.undo.saveStep(),e.preventDefault(),e.stopPropagation();for(var t="",n=0;n<d.opts.tabSpaces;n++)t+="&nbsp;";d.html.insert(t),d.placeholder.refresh(),d.undo.saveStep()}else e.preventDefault(),e.stopPropagation(),e.shiftKey?d.commands.outdent():d.commands.indent()}(e):m(e)||!b(e.which)||d.selection.isCollapsed()||e.ctrlKey||e.altKey||d.selection.remove();else{if(C(t,e))return e.preventDefault(),void e.stopPropagation();d.placeholder.isVisible()?(d.opts.keepFormatOnDelete||g(),e.preventDefault(),e.stopPropagation()):u(e)}else{if(C(t,e))return e.preventDefault(),void e.stopPropagation();d.placeholder.isVisible()?(d.opts.keepFormatOnDelete||g(),e.preventDefault(),e.stopPropagation()):h(e)}d.events.enableBlur()}function l(){if(!d.$wp)return!0;var e;if(d.opts.height||d.opts.heightMax){e=d.position.getBoundingRect().top,(d.helpers.isIOS()||d.helpers.isAndroid())&&(e-=d.helpers.scrollTop()),d.opts.iframe&&(e+=d.$iframe.offset().top);var t=d.selection.blocks(),n=null;t&&0<t.length&&t[0].offsetTop&&(n=t[0].getBoundingClientRect().top),!d.opts.iframe&&e>d.$wp.offset().top-d.helpers.scrollTop()+d.$wp.height()-20?d.$wp.scrollTop(e+d.$wp.scrollTop()-(d.$wp.height()+d.$wp.offset().top)+d.helpers.scrollTop()+20):d.opts.iframe&&n>d.$wp.height()&&n&&d.$wp.scrollTop(n-d.$wp.height()+80)}else e=d.position.getBoundingRect().top,d.opts.toolbarBottom&&(e+=d.opts.toolbarStickyOffset),(d.helpers.isIOS()||d.helpers.isAndroid())&&(e-=d.helpers.scrollTop()),d.opts.iframe&&(e+=d.$iframe.offset().top,e-=d.helpers.scrollTop()),(e+=d.opts.toolbarStickyOffset)>d.o_win.innerHeight-20&&o(d.o_win).scrollTop(e+d.helpers.scrollTop()-d.o_win.innerHeight+20),e=d.position.getBoundingRect().top,d.opts.toolbarBottom||(e-=d.opts.toolbarStickyOffset),(d.helpers.isIOS()||d.helpers.isAndroid())&&(e-=d.helpers.scrollTop()),d.opts.iframe&&(e+=d.$iframe.offset().top,e-=d.helpers.scrollTop()),e<100&&o(d.o_win).scrollTop(e+d.helpers.scrollTop()-100)}function c(e){var t=d.selection.element();if(t&&0<=["INPUT","TEXTAREA"].indexOf(t.tagName))return!0;if(e&&0===e.which&&f&&(e.which=f),d.helpers.isAndroid()&&d.browser.mozilla)return!0;if(p)return!1;if(e&&d.helpers.isIOS()&&e.which===V.KEYCODE.ENTER&&d.doc.execCommand("undo"),!d.selection.isCollapsed())return!0;if(e&&(e.which===V.KEYCODE.META||e.which===V.KEYCODE.CTRL))return!0;if(e&&v(e.which))return!0;if(e&&!d.helpers.isIOS()&&(e.which===V.KEYCODE.ENTER||e.which===V.KEYCODE.BACKSPACE||37<=e.which&&e.which<=40&&!d.browser.msie))try{l()}catch(r){}var n=d.selection.element();(function o(e){if(!e)return!1;var t=e.innerHTML;return!!((t=t.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,""))&&/\u200B/.test(t)&&0<t.replace(/\u200B/gi,"").length)})(n)&&!d.node.hasClass(n,"fr-marker")&&"IFRAME"!==n.tagName&&function i(e){return!d.helpers.isIOS()||0===((e.textContent||"").match(/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi)||[]).length}(n)&&(d.selection.save(),function a(e){var t=e;-1<["STRONG","U","EM"].indexOf(e.nodeName)&&e.parentNode&&(t=e.parentNode);for(var n=d.doc.createTreeWalker(t,NodeFilter.SHOW_TEXT,d.node.filter(function(e){return/\u200B/gi.test(e.textContent)}),!1);n.nextNode();){var r=n.currentNode;r.textContent=r.textContent.replace(/\u200B/gi,"")}}(n),d.selection.restore())}function m(e){if(-1!==navigator.userAgent.indexOf("Mac OS X")){if(e.metaKey&&!e.altKey)return!0}else if(e.ctrlKey&&!e.altKey)return!0;return!1}function v(e){if(e>=V.KEYCODE.ARROW_LEFT&&e<=V.KEYCODE.ARROW_DOWN)return!0}function b(e){if(e>=V.KEYCODE.ZERO&&e<=V.KEYCODE.NINE)return!0;if(e>=V.KEYCODE.NUM_ZERO&&e<=V.KEYCODE.NUM_MULTIPLY)return!0;if(e>=V.KEYCODE.A&&e<=V.KEYCODE.Z)return!0;if(d.browser.webkit&&0===e)return!0;switch(e){case V.KEYCODE.SPACE:case V.KEYCODE.QUESTION_MARK:case V.KEYCODE.NUM_PLUS:case V.KEYCODE.NUM_MINUS:case V.KEYCODE.NUM_PERIOD:case V.KEYCODE.NUM_DIVISION:case V.KEYCODE.SEMICOLON:case V.KEYCODE.FF_SEMICOLON:case V.KEYCODE.DASH:case V.KEYCODE.EQUALS:case V.KEYCODE.FF_EQUALS:case V.KEYCODE.COMMA:case V.KEYCODE.PERIOD:case V.KEYCODE.SLASH:case V.KEYCODE.APOSTROPHE:case V.KEYCODE.SINGLE_QUOTE:case V.KEYCODE.OPEN_SQUARE_BRACKET:case V.KEYCODE.BACKSLASH:case V.KEYCODE.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}function L(e){var t=e.which;if(m(e)||37<=t&&t<=40||!b(t)&&t!==V.KEYCODE.DELETE&&t!==V.KEYCODE.BACKSPACE&&t!==V.KEYCODE.ENTER&&t!==V.KEYCODE.IME)return!0;n||(r=d.snapshot.get(),d.undo.canDo()||d.undo.saveStep()),clearTimeout(n),n=setTimeout(function(){n=null,d.undo.saveStep()},Math.max(250,d.opts.typingTimer))}function E(e){var t=e.which;if(m(e)||37<=t&&t<=40)return!0;r&&n?(d.undo.saveStep(r),r=null):void 0!==t&&0!==t||r||n||d.undo.saveStep()}function y(e){if(e&&"BR"===e.tagName)return!1;try{return 0===(e.textContent||"").length&&e.querySelector&&!e.querySelector(":scope > br")||e.childNodes&&1===e.childNodes.length&&e.childNodes[0].getAttribute&&("false"===e.childNodes[0].getAttribute("contenteditable")||d.node.hasClass(e.childNodes[0],"fr-img-caption"))}catch(t){return!1}}function S(e){var t=d.el.childNodes,n=d.html.defaultTag(),r=d.node.blockParent(d.selection.blocks()[0]);return r&&"TR"==r.tagName&&r.getAttribute("contenteditable")==undefined&&(r=r.closest("table")),!d.node.isEditable(e.target)||r&&"false"===r.getAttribute("contenteditable")?d.toolbar.disable():d.toolbar.enable(),!(!e.target||e.target===d.el)||(0===t.length||void(t[0].offsetHeight+t[0].offsetTop<=e.offsetY?y(t[t.length-1])&&(n?d.$el.append("<".concat(n,">").concat(V.MARKERS,"<br></").concat(n,">")):d.$el.append("".concat(V.MARKERS,"<br>")),d.selection.restore(),l()):e.offsetY<=10&&y(t[0])&&(n?d.$el.prepend("<".concat(n,">").concat(V.MARKERS,"<br></").concat(n,">")):d.$el.prepend("".concat(V.MARKERS,"<br>")),d.selection.restore(),l())))}function N(){n&&clearTimeout(n)}return{_init:function T(){d.events.on("keydown",L),d.events.on("input",e),d.events.on("mousedown",a),d.events.on("keyup input",E),d.events.on("keypress",i),d.events.on("keydown",s),d.events.on("keyup",c),d.events.on("destroy",N),d.events.on("html.inserted",c),d.events.on("cut",t),d.opts.multiLine&&d.events.on("click",S),d.events.on("initialized",function(){d.el.addEventListener("compositionstart",function(){if(d.selection.isCollapsed()){var e=d.selection.ranges(0),t=e.startContainer,n=e.startOffset;if(t&&t.nodeType===Node.TEXT_NODE&&n<=t.textContent.length&&0<n&&8203===t.textContent.charCodeAt(n-1)){d.selection.save();var r=d.$el.find(".fr-marker");o(r.get(0).previousSibling).before(V.HAIR_SPACE),r.get(0).previousSibling.textContent=r.get(0).previousSibling.textContent.replace(/\u200B/gi,""),d.selection.restore()}}}),d.el.addEventListener("compositionend",function(){if(d.selection.isCollapsed()){var e=d.selection.ranges(0),t=e.startContainer,n=e.startOffset;if(t&&t.nodeType===Node.TEXT_NODE&&n<=t.textContent.length&&0<n&&8202===t.textContent.charCodeAt(0)){d.selection.save();var r=d.$el.find(".fr-marker");r.get(0).previousSibling.textContent=r.get(0).previousSibling.textContent.replace(/\u200A/gi,""),d.selection.restore()}}})})},ctrlKey:m,isCharacter:b,isArrow:v,forceUndo:function M(){n&&(clearTimeout(n),d.undo.saveStep(),r=null)},isIME:function A(){return p},isBrowserAction:function x(e){var t=e.which;return m(e)||t===V.KEYCODE.F5},positionCaret:l}},Object.assign(V.DEFAULTS,{pastePlain:!1,pasteDeniedTags:["colgroup","col","meta"],pasteDeniedAttrs:["class","id"],pasteAllowedStyleProps:[".*"],pasteAllowLocalImages:!1}),V.MODULES.paste=function(A){var a,s,x,O,l,w,k=A.$;function n(e,t){try{A.win.localStorage.setItem("fr-copied-html",e),A.win.localStorage.setItem("fr-copied-text",t)}catch(n){}}function e(e){var t=A.html.getSelected();n(t,k(A.doc.createElement("div")).html(t).text()),"cut"===e.type&&(A.undo.saveStep(),setTimeout(function(){A.selection.save(),A.html.wrap(),A.selection.restore(),A.events.focus(),A.undo.saveStep()},0))}var r=!1;function t(e){if("INPUT"===e.target.nodeName&&"text"===e.target.type)return!0;if(A.edit.isDisabled())return!1;if(c(e.target))return!1;if(r)return!1;if((e.originalEvent&&(e=e.originalEvent),e&&e.clipboardData&&e.clipboardData.getData)&&((e.clipboardData||window.clipboardData).getData("text/html")||"").match('content="Microsoft OneNote'))return!1;if(!1===A.events.trigger("paste.before",[e]))return e.preventDefault(),!1;if(e&&e.clipboardData&&e.clipboardData.getData){var t="";if(O=e.clipboardData.types,A.helpers.isArray(O))for(var n=0;n<O.length;n++)t+="".concat(O[n],";");else t=O;if(a="",/text\/rtf/.test(t)&&(s=e.clipboardData.getData("text/rtf")),/text\/html/.test(t)&&!A.browser.safari?(a=e.clipboardData.getData("text/html"),A.browser.mozilla&&("<p></p>"===a||""===a||/<!--StartFragment-->([ ])<!--EndFragment-->/.test(a)||/<!--StartFragment-->([<p></p>]*)<!--EndFragment-->/.test(a))&&(a=A.win.localStorage.getItem("fr-copied-html"))):/text\/rtf/.test(t)&&A.browser.safari?a=s:/public.rtf/.test(t)&&A.browser.safari&&(a=e.clipboardData.getData("text/rtf")),x=e.clipboardData.getData("text"),""!==a)return f(),e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!1;a=null}return function i(){if(A.selection.save(),A.events.disableBlur(),a=null,l){l.html("");var e=d(A.selection.get().anchorNode)+A.$wp.offset().top;l.css("top",e),A.browser.edge&&A.opts.iframe&&A.$el.append(l)}else{var t=document.getElementsByTagName("BODY")[0],n=window.getComputedStyle(t).transform;if("none"!==n){var r=d(A.selection.get().anchorNode)+A.$wp.offset().top;l=k('<div contenteditable="true" style="position: fixed; top: '+r+'px; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>')}else l=k('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>');A.browser.webkit||A.browser.mozilla?("none"===n&&l.css("top",A.$sc.scrollTop()),A.$el.after(l)):A.browser.edge&&A.opts.iframe?A.$el.append(l):A.$box.after(l),A.events.on("destroy",function(){l.remove()})}var o;A.helpers.isIOS()&&A.$sc&&(o=A.$sc.scrollTop());A.opts.iframe&&A.$el.attr("contenteditable","false");l.focus(),A.helpers.isIOS()&&A.$sc&&A.$sc.scrollTop(o);A.win.setTimeout(f,1)}(),!1}function c(e){return e&&"false"===e.contentEditable}function o(e){if(e.originalEvent&&(e=e.originalEvent),c(e.target))return!1;if(e&&e.dataTransfer&&e.dataTransfer.getData){var t="";if(O=e.dataTransfer.types,A.helpers.isArray(O))for(var n=0;n<O.length;n++)t+="".concat(O[n],";");else t=O;if(a="",/text\/rtf/.test(t)&&(s=e.dataTransfer.getData("text/rtf")),/text\/html/.test(t)?a=e.dataTransfer.getData("text/html"):/text\/rtf/.test(t)&&A.browser.safari?a=s:/text\/plain/.test(t)&&!this.browser.mozilla&&(a=A.html.escapeEntities(e.dataTransfer.getData("text/plain")).replace(/\n/g,"<br>")),""!==a){A.keys.forceUndo(),w=A.snapshot.get(),A.selection.save(),A.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-helper");var r=A.markers.insertAtPoint(e);if(A.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-placeholder"),A.$el.find(".fr-marker-helper").addClass("fr-marker").removeClass("fr-marker-helper"),A.selection.restore(),A.selection.remove(),A.$el.find(".fr-marker-placeholder").addClass("fr-marker").removeClass("fr-marker-placeholder"),!1!==r){var o=A.el.querySelector(".fr-marker");return k(o).replaceWith(V.MARKERS),A.selection.restore(),f(),e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!1}}else a=null}}function d(e){return e.nodeType===Node.TEXT_NODE?e.parentNode.offsetTop:e.offsetTop}function f(){A.opts.iframe&&A.$el.attr("contenteditable","true"),A.browser.edge&&A.opts.iframe&&A.$box.after(l),w||(A.keys.forceUndo(),w=A.snapshot.get()),a||(a=l.get(0).innerHTML,x=l.text(),A.$el[0].setAttribute("plainpaste",!0),A.selection.restore(),A.events.enableBlur());var e=a.match(/(class="?Mso|class='?Mso|class="?Xl|class='?Xl|class=Xl|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument|LibreOffice)/gi),t=A.events.chainTrigger("paste.beforeCleanup",a);if(t&&"string"==typeof t){a=t;var n=(new DOMParser).parseFromString(t,"text/html");x=n.body.innerText}(!e||e&&!1!==A.events.trigger("paste.wordPaste",[a]))&&i(a,e)}function $(e){for(var t="",n=0;n++<e;)t+="&nbsp;";return t}function i(e,t,n){var r,o=null,i=null;if(0<=e.toLowerCase().indexOf("<body")){var a="";0<=e.indexOf("<style")&&(a=e.replace(/[.\s\S\w\W<>]*(<style[^>]*>[\s]*[.\s\S\w\W<>]*[\s]*<\/style>)[.\s\S\w\W<>]*/gi,"$1")),e=(e=(e=a+e.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi,"$1")).replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g,function(e){return e.replace(/\n/g,"<br />")})).replace(/ \n/g," ").replace(/\n /g," ").replace(/([^>])\n([^<])/g,"$1 $2")}var s=!1;0<=e.indexOf('id="docs-internal-guid')&&(e=e.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g,"$1"),s=!0),(0<=e.indexOf('content="Sheets"')||0<=e.indexOf("google-sheets-html-origin"))&&(e=e.replace(/width:0px;/g,""));var l=!1;if(!t)if((l=function y(){var e=null;try{e=A.win.localStorage.getItem("fr-copied-text")}catch(t){}return!(!e||!x||O&&-1===O.indexOf("text/html")||x.replace(/\u00A0/gi," ").replace(/\r|\n/gi,"")!==e.replace(/\u00A0/gi," ").replace(/\r|\n/gi,"")&&x.replace(/\s/g,"")!==e.replace(/\s/g,""))}())&&(e=A.win.localStorage.getItem("fr-copied-html")),l)e=A.clean.html(e,A.opts.pasteDeniedTags,A.opts.pasteDeniedAttrs);else{var c=A.opts.htmlAllowedStyleProps;A.opts.htmlAllowedStyleProps=A.opts.pasteAllowedStyleProps,A.opts.htmlAllowComments=!1,e=(e=(e=e.replace(/<span class="Apple-tab-span">\s*<\/span>/g,$(A.opts.tabSpaces||4))).replace(/<span class="Apple-tab-span" style="white-space:pre">(\t*)<\/span>/g,function(e,t){return $(t.length*(A.opts.tabSpaces||4))})).replace(/\t/g,$(A.opts.tabSpaces||4)),e=A.clean.html(e,A.opts.pasteDeniedTags,A.opts.pasteDeniedAttrs),A.opts.htmlAllowedStyleProps=c,A.opts.htmlAllowComments=!0,A.html.defaultTag()&&"div"===A.html.defaultTag()||(e=H(e)),e=(e=e.replace(/\r/g,"")).replace(/^ */g,"").replace(/ *$/g,"")}!t||A.wordPaste&&n||(0===(e=e.replace(/^\n*/g,"").replace(/^ /g,"")).indexOf("<colgroup>")&&(e="<table>".concat(e,"</table>")),e=H(e=function S(e){var t;e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li>$3</li></ul>")).replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li>$3</li></ol>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ul>")).replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ol>")).replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi,"<span><span")).replace(/<!--\[if !supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi,"")).replace(/<!\[if !supportLists\]>([\s\S]*?)<!\[endif\]>/gi,"")).replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi," ")).replace(/<!--[\s\S]*?-->/gi,"")).replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi,"");var n,r=["style","script","applet","embed","noframes","noscript"];for(t=0;t<r.length;t++){var o=new RegExp("<".concat(r[t],".*?").concat(r[t],"(.*?)>"),"gi");e=e.replace(o,"")}for(e=(e=(e=e.replace(/&nbsp;/gi," ")).replace(/<td([^>]*)><\/td>/g,"<td$1><br></td>")).replace(/<th([^>]*)><\/th>/g,"<th$1><br></th>");(e=(n=e).replace(/<[^/>][^>]*><\/[^>]+>/gi,""))!==n;);e=(e=e.replace(/<lilevel([^1])([^>]*)>/gi,'<li data-indent="true"$2>')).replace(/<lilevel1([^>]*)>/gi,"<li$1>"),e=(e=(e=A.clean.html(e,A.opts.pasteDeniedTags,A.opts.pasteDeniedAttrs)).replace(/<a>(.[^<]+)<\/a>/gi,"$1")).replace(/<br> */g,"<br>");var i=A.o_doc.createElement("div");i.innerHTML=e;var a=i.querySelectorAll("li[data-indent]");for(t=0;t<a.length;t++){var s=a[t],l=s.previousElementSibling;if(l&&"LI"===l.tagName){var c=l.querySelector(":scope > ul, :scope > ol");c||(c=document.createElement("ul"),l.appendChild(c)),c.appendChild(s)}else s.removeAttribute("data-indent")}return A.html.cleanBlankSpaces(i),e=i.innerHTML}(e))),A.opts.pastePlain&&(e=function N(e){var t,n=null,r=A.doc.createElement("div");r.innerHTML=e;var o=r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote");for(t=0;t<o.length;t++)(n=o[t]).innerText&&(n.outerHTML="<".concat(A.html.defaultTag()||"DIV",">").concat(n.innerText,"</").concat(A.html.defaultTag()||"DIV",">"));for(t=(o=r.querySelectorAll("*:not(".concat("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br, img".split(",").join("):not("),")"))).length-1;0<=t;t--)(n=o[t]).outerHTML=n.innerHTML;return function i(e){for(var t=A.node.contents(e),n=0;n<t.length;n++)t[n].nodeType!==Node.TEXT_NODE&&t[n].nodeType!==Node.ELEMENT_NODE?t[n].parentNode.removeChild(t[n]):i(t[n])}(r),r.innerHTML}(e));var d=A.events.chainTrigger("paste.afterCleanup",e);if(A.$el[0].removeAttribute("plainpaste",!0),"string"==typeof d&&(e=d),""!==e){var f=A.o_doc.createElement("div");0<=(f.innerHTML=e).indexOf("<body>")?(A.html.cleanBlankSpaces(f),A.spaces.normalize(f,!0)):A.spaces.normalize(f);var p=f.getElementsByTagName("span");for(r=p.length-1;0<=r;r--){var h=p[r];0===h.attributes.length&&(h.outerHTML=h.innerHTML)}if(!0===A.opts.linkAlwaysBlank){var u=f.getElementsByTagName("a");for(r=u.length-1;0<=r;r--){var g=u[r];g.getAttribute("target")||g.setAttribute("target","_blank")}}var C=A.selection.element(),m=!1;if(C&&k(C).parentsUntil(A.el,"ul, ol").length&&(m=!0),m){var v=f.children;1===v.length&&0<=["OL","UL"].indexOf(v[0].tagName)&&(v[0].outerHTML=v[0].innerHTML)}if(!s){var b=f.getElementsByTagName("br");for(r=b.length-1;0<=r;r--){var L=b[r];A.node.isBlock(L.previousSibling)&&L.parentNode.removeChild(L)}}if(A.opts.enter===V.ENTER_BR)for(r=(o=f.querySelectorAll("p, div")).length-1;0<=r;r--)0===(i=o[r]).attributes.length&&(i.outerHTML=i.innerHTML+(i.nextSibling&&!A.node.isEmpty(i)?"<br>":""));else if(A.opts.enter===V.ENTER_DIV)for(r=(o=f.getElementsByTagName("p")).length-1;0<=r;r--)0===(i=o[r]).attributes.length&&(i.outerHTML="<div>".concat(i.innerHTML,"</div>"));else A.opts.enter===V.ENTER_P&&1===f.childNodes.length&&"P"===f.childNodes[0].tagName&&0===f.childNodes[0].attributes.length&&(f.childNodes[0].outerHTML=f.childNodes[0].innerHTML);if(f.children&&0<f.children.length)if(A.opts.trackChangesEnabled)for(var E=0;E<f.children.length;E++)f.children[E].setAttribute("id","isPasted");else f.children[0].setAttribute("id","isPasted");e=f.innerHTML,l&&(e=function T(e){var t,n=A.o_doc.createElement("div");n.innerHTML=e;var r=n.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not(".concat(V.VOID_ELEMENTS.join("):not("),"):not(").concat(A.opts.htmlAllowedEmptyTags.join("):not("),")"));for(;r.length;){for(t=0;t<r.length;t++)r[t].parentNode.removeChild(r[t]);r=n.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not(".concat(V.VOID_ELEMENTS.join("):not("),"):not(").concat(A.opts.htmlAllowedEmptyTags.join("):not("),")"))}return n.innerHTML}(e)),A.html.insert(e,!0)}!function M(){A.events.trigger("paste.after")}(),A.undo.saveStep(w),w=null,A.undo.saveStep()}function p(e){for(var t=e.length-1;0<=t;t--)e[t].attributes&&e[t].attributes.length&&e.splice(t,1);return e}function H(e){var t,n=A.o_doc.createElement("div");n.innerHTML=e;for(var r=p(Array.prototype.slice.call(n.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")));r.length;){var o=r[r.length-1];if(A.html.defaultTag()&&"div"!==A.html.defaultTag())o.querySelector(A.html.blockTagsQuery())?o.outerHTML=o.innerHTML:o.outerHTML="<".concat(A.html.defaultTag(),">").concat(o.innerHTML,"</").concat(A.html.defaultTag(),">");else{var i=o.querySelectorAll("*");!i.length||"BR"!==i[i.length-1].tagName&&0===o.innerText.length?o.outerHTML=o.innerHTML+(o.nextSibling?"<br>":""):!i.length||"BR"!==i[i.length-1].tagName||i[i.length-1].nextSibling?o.outerHTML=o.innerHTML+(o.nextSibling?"<br>":""):o.outerHTML=o.innerHTML}r=p(Array.prototype.slice.call(n.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")))}for(r=p(Array.prototype.slice.call(n.querySelectorAll("div:not([style])")));r.length;){for(t=0;t<r.length;t++){var a=r[t],s=a.innerHTML.replace(/\u0009/gi,"").trim();a.outerHTML=s}r=p(Array.prototype.slice.call(n.querySelectorAll("div:not([style])")))}return n.innerHTML}function h(){A.el.removeEventListener("copy",e),A.el.removeEventListener("cut",e),A.el.removeEventListener("paste",t)}return{_init:function u(){A.el.addEventListener("copy",e),A.el.addEventListener("cut",e),A.el.addEventListener("paste",t,{capture:!0}),A.events.on("drop",o),A.browser.msie&&A.browser.version<11&&(A.events.on("mouseup",function(e){2===e.button&&(setTimeout(function(){r=!1},50),r=!0)},!0),A.events.on("beforepaste",t)),A.events.on("destroy",h)},cleanEmptyTagsAndDivs:H,getRtfClipboard:function g(){return s},saveCopiedText:n,clean:i}},Object.assign(V.DEFAULTS,{shortcutsEnabled:[],shortcutsHint:!0}),V.SHORTCUTS_MAP={},V.RegisterShortcut=function(e,t,n,r,o,i){V.SHORTCUTS_MAP[(o?"^":"")+(i?"@":"")+e]={cmd:t,val:n,letter:r,shift:o,option:i},V.DEFAULTS.shortcutsEnabled.push(t)},V.RegisterShortcut(V.KEYCODE.E,"show",null,"E",!1,!1),V.RegisterShortcut(V.KEYCODE.B,"bold",null,"B",!1,!1),V.RegisterShortcut(V.KEYCODE.I,"italic",null,"I",!1,!1),V.RegisterShortcut(V.KEYCODE.U,"underline",null,"U",!1,!1),V.RegisterShortcut(V.KEYCODE.S,"strikeThrough",null,"S",!1,!1),V.RegisterShortcut(V.KEYCODE.CLOSE_SQUARE_BRACKET,"indent",null,"]",!1,!1),V.RegisterShortcut(V.KEYCODE.OPEN_SQUARE_BRACKET,"outdent",null,"[",!1,!1),V.RegisterShortcut(V.KEYCODE.Z,"undo",null,"Z",!1,!1),V.RegisterShortcut(V.KEYCODE.Z,"redo",null,"Z",!0,!1),V.RegisterShortcut(V.KEYCODE.Y,"redo",null,"Y",!1,!1),V.MODULES.shortcuts=function(s){var r=null;var l=!1;function e(e){if(!s.core.hasFocus())return!0;var t=e.which,n=-1!==navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey;if("keyup"===e.type&&l&&t!==V.KEYCODE.META)return l=!1;"keydown"===e.type&&(l=!1);var r=(e.shiftKey?"^":"")+(e.altKey?"@":"")+t,o=s.node.blockParent(s.selection.blocks()[0]);if(o&&"TR"==o.tagName&&o.getAttribute("contenteditable")==undefined&&(o=o.closest("table")),n&&V.SHORTCUTS_MAP[r]&&(!o||"false"!==o.getAttribute("contenteditable"))){var i=V.SHORTCUTS_MAP[r].cmd;if(i&&0<=s.opts.shortcutsEnabled.indexOf(i)){var a=V.SHORTCUTS_MAP[r].val;if(!1===s.events.trigger("shortcut",[e,i,a]))return!(l=!0);if(i&&(s.commands[i]||V.COMMANDS[i]&&V.COMMANDS[i].callback))return e.preventDefault(),e.stopPropagation(),"keydown"===e.type&&((s.commands[i]||V.COMMANDS[i].callback)(),l=!0),!1}}}return{_init:function t(){s.events.on("keydown",e,!0),s.events.on("keyup",e,!0)},get:function o(e){if(!s.opts.shortcutsHint)return null;if(!r)for(var t in r={},V.SHORTCUTS_MAP)Object.prototype.hasOwnProperty.call(V.SHORTCUTS_MAP,t)&&0<=s.opts.shortcutsEnabled.indexOf(V.SHORTCUTS_MAP[t].cmd)&&(r["".concat(V.SHORTCUTS_MAP[t].cmd,".").concat(V.SHORTCUTS_MAP[t].val||"")]={shift:V.SHORTCUTS_MAP[t].shift,option:V.SHORTCUTS_MAP[t].option,letter:V.SHORTCUTS_MAP[t].letter});var n=r[e];return n?(s.helpers.isMac()?String.fromCharCode(8984):"".concat(s.language.translate("Ctrl"),"+"))+(n.shift?s.helpers.isMac()?String.fromCharCode(8679):"".concat(s.language.translate("Shift"),"+"):"")+(n.option?s.helpers.isMac()?String.fromCharCode(8997):"".concat(s.language.translate("Alt"),"+"):"")+n.letter:null}}},V.MODULES.snapshot=function(l){function n(e){for(var t=e.parentNode.childNodes,n=0,r=null,o=0;o<t.length;o++){if(r){var i=t[o].nodeType===Node.TEXT_NODE&&""===t[o].textContent,a=r.nodeType===Node.TEXT_NODE&&t[o].nodeType===Node.TEXT_NODE,s=r.nodeType===Node.TEXT_NODE&&""===r.textContent;i||a||s||n++}if(t[o]===e)return n;r=t[o]}}function o(e){var t=[];if(!e.parentNode)return[];for(;!l.node.isElement(e);)t.push(n(e)),e=e.parentNode;return t.reverse()}function i(e,t){for(;e&&e.nodeType===Node.TEXT_NODE;){var n=e.previousSibling;n&&n.nodeType===Node.TEXT_NODE&&(t+=n.textContent.length),e=n}return t}function c(e){for(var t=l.el,n=0;n<e.length;n++)t=t.childNodes[e[n]];return t}function r(e,t){try{var n=c(t.scLoc),r=t.scOffset,o=c(t.ecLoc),i=t.ecOffset,a=l.doc.createRange();a.setStart(n,r),a.setEnd(o,i),e.addRange(a)}catch(s){}}return{get:function a(){var e,t={};if(l.events.trigger("snapshot.before"),t.html=(l.$wp?l.$el.html():l.$oel.get(0).outerHTML).replace(/ style=""/g,""),t.ranges=[],l.$wp&&l.selection.inEditor()&&l.core.hasFocus())for(var n=l.selection.ranges(),r=0;r<n.length;r++)t.ranges.push({scLoc:o((e=n[r]).startContainer),scOffset:i(e.startContainer,e.startOffset),ecLoc:o(e.endContainer),ecOffset:i(e.endContainer,e.endOffset)});return l.events.trigger("snapshot.after",[t]),t},restore:function s(e){l.$el.html()!==e.html&&(l.opts.htmlExecuteScripts?l.$el.html(e.html):l.el.innerHTML=e.html);var t=l.selection.get();l.selection.clear(),l.events.focus(!0);for(var n=0;n<e.ranges.length;n++)r(t,e.ranges[n])},equal:function d(e,t){return e.html===t.html&&(!l.core.hasFocus()||JSON.stringify(e.ranges)===JSON.stringify(t.ranges))}}},V.MODULES.undo=function(n){function e(e){var t=e.which;n.keys.ctrlKey(e)&&(t===V.KEYCODE.Z&&e.shiftKey&&e.preventDefault(),t===V.KEYCODE.Z&&e.preventDefault())}var t=null;function r(){if(n.undo_stack&&!n.undoing)for(;n.undo_stack.length>n.undo_index;)n.undo_stack.pop()}function o(){n.undo_index=0,n.undo_stack=[]}function i(){n.undo_stack=[]}return{_init:function a(){o(),n.events.on("initialized",function(){t=(n.$wp?n.$el.html():n.$oel.get(0).outerHTML).replace(/ style=""/g,"")}),n.events.on("blur",function(){n.el.querySelector(".fr-dragging")||n.undo.saveStep()}),n.events.on("keydown",e),n.events.on("destroy",i)},run:function s(){if(1<n.undo_index){n.undoing=!0;var e=n.undo_stack[--n.undo_index-1];clearTimeout(n._content_changed_timer),n.snapshot.restore(e),t=e.html,n.popups.hideAll(),n.toolbar.enable(),n.events.trigger("contentChanged"),n.events.trigger("commands.undo"),n.undoing=!1,n.selection.restore()}},redo:function l(){if(n.undo_index<n.undo_stack.length){n.undoing=!0;var e=n.undo_stack[n.undo_index++];clearTimeout(n._content_changed_timer),n.snapshot.restore(e),t=e.html,n.popups.hideAll(),n.toolbar.enable(),n.events.trigger("contentChanged"),n.events.trigger("commands.redo"),n.undoing=!1}},canDo:function c(){return!(0===n.undo_stack.length||n.undo_index<=1)},canRedo:function d(){return n.undo_index!==n.undo_stack.length},dropRedo:r,reset:o,saveStep:function f(e){if(n.undo_stack&&!n.undoing&&!n.el.querySelector(".fr-marker"))if(void 0===e){if((e=n.snapshot.get())&&e.html&&n.undo_stack[n.undo_stack.length-1]&&e.html===n.undo_stack[n.undo_stack.length-1].html)return;n.undo_stack[n.undo_index-1]&&n.snapshot.equal(n.undo_stack[n.undo_index-1],e)||(r(),n.undo_stack.push(e),n.undo_index++,function o(e,t){var n=t.split("fr-selected-cell").join("");n=n.split(' class=""').join("");var r=e.split("fr-selected-cell").join("");return n===(r=r.split(' class=""').join(""))}(t,e.html)||(n.events.trigger("contentChanged"),t=e.html))}else r(),0<n.undo_index?n.undo_stack[n.undo_index-1]=e:(n.undo_stack.push(e),n.undo_index++)}}},Object.assign(V.DEFAULTS,{height:null,heightMax:null,heightMin:null,width:null}),V.MODULES.size=function(r){function e(){o(),r.opts.height&&r.$el.css("minHeight",r.opts.height-r.helpers.getPX(r.$el.css("padding-top"))-r.helpers.getPX(r.$el.css("padding-bottom")));var e=!1;if(r.opts.fullPage)for(var t=r.$el.find("span,p,div"),n=0;n<t.length;n++)if(t[n].style.height&&t[n].style.height.includes("vh")){e=!0;break}r.opts.fullPage&&e&&(r.opts.heightMin&&r.$iframe.css("minHeight",r.opts.heightMin),r.opts.heightMax&&r.$iframe.css("maxHeight",r.opts.heightMax),r.$el.css("overflow-y","auto")),r.$iframe.height(r.$el.outerHeight(!0))}function o(){r.opts.heightMin?r.$el.css("minHeight",r.opts.heightMin):r.$el.css("minHeight",""),r.opts.heightMax?(r.$wp.css("maxHeight",r.opts.heightMax),r.$wp.css("overflow","auto")):(r.$wp.css("maxHeight",""),r.$wp.css("overflow","")),r.opts.height?(r.$wp.css("height",r.opts.height),r.$wp.css("overflow","auto"),r.$el.css("minHeight",r.opts.height-r.helpers.getPX(r.$el.css("padding-top"))-r.helpers.getPX(r.$el.css("padding-bottom")))):(r.$wp.css("height",""),r.opts.heightMin||r.$el.css("minHeight",""),r.opts.heightMax||r.$wp.css("overflow","")),r.opts.width&&r.$box.width(r.opts.width)}return{_init:function t(){if(!r.$wp)return!1;o(),r.$iframe&&(r.events.on("keyup keydown",function(){setTimeout(e,0)},!0),r.events.on("commands.after html.set init initialized paste.after",e))},syncIframe:e,refresh:o}},Object.assign(V.DEFAULTS,{documentReady:!1,editorClass:null,typingTimer:500,iframe:!1,requestWithCORS:!0,requestWithCredentials:!1,requestHeaders:{},useClasses:!0,spellcheck:!0,iframeDefaultStyle:'html{margin:0px;height:auto;}body{height:auto;padding:20px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}',iframeStyle:"",iframeStyleFiles:[],direction:"auto",zIndex:1,tabIndex:null,disableRightClick:!1,scrollableContainer:"body",keepFormatOnDelete:!1,theme:null}),V.MODULES.core=function(a){var r=a.$;function n(){if(a.$box.addClass("fr-box".concat(a.opts.editorClass?" ".concat(a.opts.editorClass):"")),a.$box.attr("role","application"),a.$wp.addClass("fr-wrapper"),a.opts.documentReady&&a.$box.addClass("fr-document"),function o(){a.opts.iframe||a.$el.addClass("fr-element fr-view"),(a.opts.height&&a.opts.height<window.innerHeight||a.opts.heightMax&&a.opts.heightMax<window.innerHeight)&&a.$el.addClass("fr-element-scroll-visible")}(),a.opts.iframe){a.$iframe.addClass("fr-iframe"),a.$el.addClass("fr-view");for(var e=0;e<a.o_doc.styleSheets.length;e++){var t=void 0;try{t=a.o_doc.styleSheets[e].cssRules}catch(i){}if(t)for(var n=0,r=t.length;n<r;n++)!t[n].selectorText||0!==t[n].selectorText.indexOf(".fr-view")&&0!==t[n].selectorText.indexOf(".fr-element")||0<t[n].style.cssText.length&&(0===t[n].selectorText.indexOf(".fr-view")?a.opts.iframeStyle+="".concat(t[n].selectorText.replace(/\.fr-view/g,"body"),"{").concat(t[n].style.cssText,"}"):a.opts.iframeStyle+="".concat(t[n].selectorText.replace(/\.fr-element/g,"body"),"{").concat(t[n].style.cssText,"}"))}}"auto"!==a.opts.direction&&a.$box.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(a.opts.direction)),a.$el.attr("dir",a.opts.direction),a.$wp.attr("dir",a.opts.direction),1<a.opts.zIndex&&a.$box.css("z-index",a.opts.zIndex),a.opts.theme&&a.$box.addClass("".concat(a.opts.theme,"-theme")),a.opts.tabIndex=a.opts.tabIndex||a.$oel.attr("tabIndex"),a.opts.tabIndex&&a.$el.attr("tabIndex",a.opts.tabIndex)}return{_init:function o(){if(V.INSTANCES.push(a),function e(){a.drag_support={filereader:"undefined"!=typeof FileReader,formdata:Boolean(a.win.FormData),progress:"upload"in new XMLHttpRequest}}(),a.$wp){n(),a.html.set(a._original_html),a.$el.attr("spellcheck",a.opts.spellcheck),a.helpers.isMobile()&&(a.$el.attr("autocomplete",a.opts.spellcheck?"on":"off"),a.$el.attr("autocorrect",a.opts.spellcheck?"on":"off"),a.$el.attr("autocapitalize",a.opts.spellcheck?"on":"off")),a.opts.disableRightClick&&a.events.$on(a.$el,"contextmenu",function(e){if(2===e.button)return e.preventDefault(),e.stopPropagation(),!1});try{a.doc.execCommand("styleWithCSS",!1,!1)}catch(t){}}"TEXTAREA"===a.$oel.get(0).tagName&&(a.events.on("contentChanged",function(){a.$oel.val(a.html.get())}),a.events.on("form.submit",function(){a.$oel.val(a.html.get())}),a.events.on("form.reset",function(){a.html.set(a._original_html)}),a.$oel.val(a.html.get())),a.helpers.isIOS()&&a.events.$on(a.$doc,"selectionchange",function(){a.$doc.get(0).hasFocus()||a.$win.get(0).focus()}),a.events.trigger("init"),a.opts.autofocus&&!a.opts.initOnClick&&a.$wp&&a.events.on("initialized",function(){a.events.focus(!0)})},destroy:function t(e){"TEXTAREA"===a.$oel.get(0).tagName&&a.$oel.val(e),a.$box&&a.$box.removeAttr("role"),a.$wp&&("TEXTAREA"===a.$oel.get(0).tagName?(a.$el.html(""),a.$wp.html(""),a.$box.replaceWith(a.$oel),a.$oel.show()):(a.$wp.replaceWith(e),a.$el.html(""),a.$box.removeClass("fr-view fr-ltr fr-box ".concat(a.opts.editorClass||"")),a.opts.theme&&a.$box.addClass("".concat(a.opts.theme,"-theme")))),this.$wp=null,this.$el=null,this.el=null,this.$box=null},isEmpty:function e(){return a.node.isEmpty(a.el)},getXHR:function i(e,t){var n=new XMLHttpRequest;for(var r in n.open(t,e,!0),a.opts.requestWithCredentials&&(n.withCredentials=!0),a.opts.requestHeaders)Object.prototype.hasOwnProperty.call(a.opts.requestHeaders,r)&&n.setRequestHeader(r,a.opts.requestHeaders[r]);return n},injectStyle:function s(e){if(a.opts.iframe){a.$head.find("style[data-fr-style], link[data-fr-style]").remove(),a.$head.append('<style data-fr-style="true">'.concat(e,"</style>"));for(var t=0;t<a.opts.iframeStyleFiles.length;t++){var n=r('<link data-fr-style="true" rel="stylesheet" href="'.concat(a.opts.iframeStyleFiles[t],'">'));n.get(0).addEventListener("load",a.size.syncIframe),a.$head.append(n)}}},hasFocus:function l(){return a.browser.mozilla&&a.helpers.isMobile()?a.selection.inEditor():a.node.hasFocus(a.el)||0<a.$el.find("*:focus").length},sameInstance:function c(e){if(!e)return!1;var t=e.data("instance");return!!t&&t.id===a.id}}},V.POPUP_TEMPLATES={"text.edit":"[_EDIT_]"},V.RegisterTemplate=function(e,t){V.POPUP_TEMPLATES[e]=t},V.MODULES.popups=function(h){var r,d=h.$;h.shared.popups||(h.shared.popups={});var u,g=h.shared.popups;function C(e,t){t.isVisible()||(t=h.$sc),t.is(g[e].data("container"))||(g[e].data("container",t),t.append(g[e]))}function o(e){var t;e.find(".fr-upload-progress").addClass("fr-height-set"),e.find(".fr-upload-progress").removeClass("fr-height-auto"),h.popups.get("filesManager.insert").removeClass("fr-height-auto"),e.find(".fr-files-upload-layer").hasClass("fr-active")&&(t=1),e.find(".fr-files-by-url-layer").hasClass("fr-active")&&(t=2),e.find(".fr-files-embed-layer").hasClass("fr-active")&&(t=3),e.find(".fr-upload-progress-layer").get(0).clientHeight+10<e.find(".fr-upload-progress").get(0).clientHeight&&e.find(".fr-upload-progress").addClass("fr-height-auto"),400<e[0].clientHeight&&(e[0].childNodes[4].style.height="".concat(e[0].clientHeight-(e[0].childNodes[0].clientHeight+e[0].childNodes[t].clientHeight)-80,"px"))}var i=2e3;function a(){d(this).toggleClass("fr-not-empty",!0)}function s(){var e=d(this);e.toggleClass("fr-not-empty",""!==e.val())}function m(e){return g[e]&&h.node.hasClass(g[e],"fr-active")&&h.core.sameInstance(g[e])||!1}function v(e){for(var t in g)if(Object.prototype.hasOwnProperty.call(g,t)&&m(t)&&(void 0===e||g[t].data("instance")===e))return g[t];return!1}function n(e){var t=null;if(t="string"!=typeof e?e:g[e],"filesManager.insert"===e&&h.filesManager!==undefined&&h.filesManager.isChildWindowOpen())return!1;if(t&&h.node.hasClass(t,"fr-active")&&(t.removeClass("fr-active fr-above"),h.events.trigger("popups.hide.".concat(e)),h.$tb&&(1<h.opts.zIndex?h.$tb.css("zIndex",h.opts.zIndex+1):h.$tb.css("zIndex","")),h.events.disableBlur(),t.find("input, textarea, button").each(function(){this===this.ownerDocument.activeElement&&this.blur()}),t.find("input, textarea").attr("disabled","disabled"),u))for(var n=0;n<u.length;n++)d(u[n]).removeClass("fr-btn-active-popup")}function b(e){for(var t in void 0===e&&(e=[]),g)Object.prototype.hasOwnProperty.call(g,t)&&e.indexOf(t)<0&&n(t)}function t(){h.shared.exit_flag=!0}function L(){h.shared.exit_flag=!1}function l(){return h.shared.exit_flag}function c(e,t){var n,r=function c(e,t){var n=V.POPUP_TEMPLATES[e];if(!n)return null;for(var r in"function"==typeof n&&(n=n.apply(h)),t)Object.prototype.hasOwnProperty.call(t,r)&&(n=n.replace("[_".concat(r.toUpperCase(),"_]"),t[r]));return n}(e,t),o=d(h.doc.createElement("DIV"));if(!r)return"filesManager.insert"===e?o.addClass("fr-popup fr-files-manager fr-empty"):o.addClass("fr-popup fr-empty"),(n=d("body").first()).append(o),o.data("container",n),g[e]=o;"filesManager.insert"===e?o.addClass("fr-popup fr-files-manager".concat(h.helpers.isMobile()?" fr-mobile":" fr-desktop").concat(h.opts.toolbarInline?" fr-inline":"")):o.addClass("fr-popup".concat(h.helpers.isMobile()?" fr-mobile":" fr-desktop").concat(h.opts.toolbarInline?" fr-inline":"")),o.html(r),h.opts.theme&&o.addClass("".concat(h.opts.theme,"-theme")),1<h.opts.zIndex&&(!h.opts.editInPopup&&h.$tb?h.$tb.css("z-index",h.opts.zIndex+2):o.css("z-index",h.opts.zIndex+2)),"auto"!==h.opts.direction&&o.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(h.opts.direction)),o.find("input, textarea").attr("dir",h.opts.direction).attr("disabled","disabled"),(n=d("body").first()).append(o),o.data("container",n);var i=(g[e]=o).find(".fr-color-hex-layer");if(0<i.length){var a=h.helpers.getPX(o.find(".fr-color-set > span").css("width")),s=h.helpers.getPX(i.css("paddingLeft")),l=h.helpers.getPX(i.css("paddingRight"));i.css("width",a*h.opts.colorsStep+s+l)}return h.button.bindCommands(o,!1),o}function E(a){var s=g[a];return{_windowResize:function(){var e=s.data("instance")||h;if(!e.helpers.isMobile()&&s.isVisible()){var t=s.find(".fr-file-progress-bar-layer");if("file.insert"===a&&0<t.length&&t.hasClass("fr-active")){var n=h.$tb.find('.fr-command[data-cmd="insertFile"]');e.events.disableBlur();var r=h.button.getPosition(n),o=r.left,i=r.top;h.position.at(o,i,g[a],0),e.events.enableBlur()}else e.events.disableBlur(),e.popups.hide(a),e.events.enableBlur()}},_inputFocus:function(e){var t=s.data("instance")||h,n=d(e.currentTarget);if(n.is("input:file")&&n.closest(".fr-layer").addClass("fr-input-focus"),e.preventDefault(),e.stopPropagation(),setTimeout(function(){t.events.enableBlur()},100),t.helpers.isMobile()){var r=d(t.o_win).scrollTop();setTimeout(function(){d(t.o_win).scrollTop(r)},0)}},_inputBlur:function(e){var t=s.data("instance")||h,n=d(e.currentTarget);n.is("input:file")&&n.closest(".fr-layer").removeClass("fr-input-focus"),document.activeElement!==this&&d(this).isVisible()&&(t.events.blurActive()&&t.events.trigger("blur"),t.events.enableBlur())},_editorKeydown:function(e){var t=s.data("instance")||h;t.keys.ctrlKey(e)||e.which===V.KEYCODE.ALT||e.which===V.KEYCODE.ESC||(m(a)&&s.findVisible(".fr-back").length?t.button.exec(s.findVisible(".fr-back").first()):e.which!==V.KEYCODE.ALT&&t.popups.hide(a))},_preventFocus:function(e){var t=s.data("instance")||h,n=e.originalEvent?e.originalEvent.target||e.originalEvent.originalTarget:null;"mouseup"===e.type||d(n).is(":focus")||t.events.disableBlur(),"mouseup"!==e.type||d(n).hasClass("fr-command")||0<d(n).parents(".fr-command").length||d(n).hasClass("fr-dropdown-content")||h.button.hideActiveDropdowns(s),(h.browser.safari||h.browser.mozilla)&&"mousedown"===e.type&&d(n).is("input[type=file]")&&t.events.disableBlur();var r="input, textarea, button, select, label, .fr-command";if(n&&!d(n).is(r)&&0===d(n).parents(r).length)return e.stopPropagation(),!1;n&&d(n).is(r)&&e.stopPropagation(),L()},_editorMouseup:function(){s.isVisible()&&l()&&0<s.findVisible("input:focus, textarea:focus, button:focus, select:focus").length&&h.events.disableBlur()},_windowMouseup:function(e){if(!h.core.sameInstance(s))return!0;var t=s.data("instance")||h;s.isVisible()&&l()&&(e.stopPropagation(),t.markers.remove(),t.popups.hide(a),L())},_windowKeydown:function(e){if(!h.core.sameInstance(s))return!0;var t=s.data("instance")||h,n=e.which;if(V.KEYCODE.ESC===n){if(t.popups.isVisible(a)&&t.opts.toolbarInline)return e.stopPropagation(),t.popups.isVisible(a)&&(s.findVisible(".fr-back").length?(t.button.exec(s.findVisible(".fr-back").first()),t.accessibility.focusPopupButton(s)):s.findVisible(".fr-dismiss").length?t.button.exec(s.findVisible(".fr-dismiss").first()):(t.popups.hide(a),t.toolbar.showInline(null,!0),t.accessibility.focusPopupButton(s))),!1;if(t.popups.isVisible(a))return s.findVisible(".fr-back").length?(t.button.exec(s.findVisible(".fr-back").first),t.accessibility.focusPopupButton(s)):s.findVisible(".fr-dismiss").length?t.button.exec(s.findVisible(".fr-dismiss").first()):(t.popups.hide(a),t.accessibility.focusPopupButton(s)),!1}},_repositionPopup:function(){if(!h.opts.height&&!h.opts.heightMax||h.opts.toolbarInline)return!0;if(h.$wp&&m(a)&&s.parent().get(0)===h.$sc.get(0)){var e=s.offset().top-h.$wp.offset().top,t=h.$wp.outerHeight();h.node.hasClass(s.get(0),"fr-above")&&(e+=s.outerHeight()),t<e||e<0?s.addClass("fr-hidden"):s.removeClass("fr-hidden")}},handleWindowClick:function(e){if(!h.core.sameInstance(s))return!0;var t=s.data("instance")||h;s.isVisible()&&e.target&&(0<d(e.target).find("body").length||"BODY"===d(e.target)[0].tagName)&&(e.stopPropagation(),t.popups.hide(a))}}}function f(e,t){h.events.on("mouseup",e._editorMouseup,!0),h.$wp&&h.events.on("keydown",e._editorKeydown),h.events.on("focus",function(){g[t].removeClass("focused")}),h.events.on("blur",function(){v()&&h.markers.remove(),h.helpers.isMobile()?g[t].hasClass("focused")?(b(),g[t].removeClass("focused")):g[t].addClass("focused"):g[t].find("iframe").length||b()}),h.$wp&&!h.helpers.isMobile()&&h.events.$on(h.$wp,"scroll.popup".concat(t),e._repositionPopup),h.events.on("window.mouseup",e._windowMouseup,!0),h.events.on("window.keydown",e._windowKeydown,!0),h.opts.iframe&&window.addEventListener("click",e.handleWindowClick),g[t].data("inst".concat(h.id),!0),h.events.on("destroy",function(){h.core.sameInstance(g[t])&&(d("body").first().append(g[t]),g[t].removeClass("fr-active"))},!0)}function p(){var e=d(this).prev().children().first();e.attr("checked",!e.attr("checked"))}function e(){for(var e in g)if(Object.prototype.hasOwnProperty.call(g,e)){var t=g[e];t&&(t.html("").removeData().remove(),g[e]=null)}g=[]}return h.shared.exit_flag=!1,{_init:function y(){r=window.innerHeight,h.events.on("shared.destroy",e,!0),h.events.on("window.mousedown",t),h.events.on("window.touchmove",L),h.events.$on(d(h.o_win),"scroll",L),h.events.on("mousedown",function(e){v()&&(e.stopPropagation(),h.$el.find(".fr-marker").remove(),t(),h.events.disableBlur())})},create:function S(e,t){var n=c(e,t),r=E(e);f(r,e),h.events.$on(n,"mousedown mouseup touchstart touchend touch","*",r._preventFocus,!0),h.events.$on(n,"focus","input, textarea, button, select",r._inputFocus,!0),h.events.$on(n,"blur","input, textarea, button, select",r._inputBlur,!0);var o=n.find("input, textarea");return function i(e){for(var t=0;t<e.length;t++){var n=e[t],r=d(n);0===r.next().length&&r.attr("placeholder")&&(r.after('<label for="'.concat(r.attr("id"),'">').concat(r.attr("placeholder"),"</label>")),r.attr("placeholder",""))}}(o),h.events.$on(o,"focus",a),h.events.$on(o,"blur change",s),h.events.$on(n,"click",".fr-checkbox + label",p),h.accessibility.registerPopup(e),h.helpers.isIOS()&&h.events.$on(n,"touchend","label",function(){d("#".concat(d(this).attr("for"))).prop("checked",function(e,t){return!t})},!0),h.events.$on(d(h.o_win),"resize",r._windowResize,!0),"filesManager.insert"===e&&g["filesManager.insert"].css("zIndex",2147483641),n},get:function N(e){var t=g[e];return t&&!t.data("inst".concat(h.id))&&f(E(e),e),t},show:function T(e,t,n,r,o){if(m(e)||(v()&&0<h.$el.find(".fr-marker").length?(h.events.disableBlur(),h.selection.restore()):v()||(h.events.disableBlur(),h.events.focus(),h.events.enableBlur())),b([e]),!g[e])return!1;var i=h.button.getButtons(".fr-dropdown.fr-active");i.removeClass("fr-active").attr("aria-expanded",!1).parents(".fr-toolbar").css("zIndex","").find("> .fr-dropdown-wrapper").css("height",""),i.next().attr("aria-hidden",!0).css("overflow","").find("> .fr-dropdown-wrapper").css("height",""),g[e].data("instance",h),h.$tb&&h.$tb.data("instance",h);var a=m(e);g[e].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled");var s=g[e].data("container");if(function p(e,t){t.isVisible()||(t=h.$sc),t.contains([g[e].get(0)])||t.append(g[e])}(e,s),h.opts.toolbarInline&&s&&h.$tb&&s.get(0)===h.$tb.get(0)&&(C(e,h.$sc),n=h.$tb.offset().top-h.helpers.getPX(h.$tb.css("margin-top")),t=h.$tb.offset().left+h.$tb.outerWidth()/2,h.node.hasClass(h.$tb.get(0),"fr-above")&&n&&(n+=h.$tb.outerHeight()),r=0),s=g[e].data("container"),h.opts.iframe&&!r&&!a){var l=h.helpers.getPX(h.$wp.find(".fr-iframe").css("padding-top")),c=h.helpers.getPX(h.$wp.find(".fr-iframe").css("padding-left"));t&&(t-=h.$iframe.offset().left+c),n&&(n-=h.$iframe.offset().top+l)}s.is(h.$tb)?h.$tb.css("zIndex",(h.opts.zIndex||1)+4):g[e].css("zIndex",(h.opts.zIndex||1)+3),h.opts.toolbarBottom&&s&&h.$tb&&s.get(0)===h.$tb.get(0)&&(g[e].addClass("fr-above"),n&&(n-=g[e].outerHeight())),o&&(t-=g[e].width()/2),t+g[e].outerWidth()>h.$sc.offset().left+h.$sc.width()&&(t-=t+g[e].outerWidth()-h.$sc.offset().left-h.$sc.width()),t<h.$sc.offset().left&&"rtl"===h.opts.direction&&(t=h.$sc.offset().left),g[e].removeClass("fr-active"),h.position.at(t,n,g[e],r||0);var d=h.node.blockParent(h.selection.blocks()[0]);if(d&&"false"===d.getAttribute("contenteditable"))g[e].removeClass("fr-active");else{var f=h.selection.element().parentElement.getAttribute("contenteditable");f&&"false"===f?g[e].removeClass("fr-active"):g[e].addClass("fr-active")}a||h.accessibility.focusPopup(g[e]),h.opts.toolbarInline&&h.toolbar.hide(),h.$tb&&(u=h.$tb.find(".fr-btn-active-popup")),h.events.trigger("popups.show.".concat(e)),E(e)._repositionPopup(),L()},hide:n,onHide:function M(e,t){h.events.on("popups.hide.".concat(e),t)},hideAll:b,setContainer:C,refresh:function A(e){g[e].data("instance",h),h.events.trigger("popups.refresh.".concat(e));for(var t=g[e].find(".fr-command"),n=0;n<t.length;n++){var r=d(t[n]);0===r.parents(".fr-dropdown-menu").length&&h.button.refresh(r)}},onRefresh:function x(e,t){h.events.on("popups.refresh.".concat(e),t)},onShow:function O(e,t){h.events.on("popups.show.".concat(e),t)},isVisible:m,setFileListHeight:o,areVisible:v,setPopupDimensions:function w(e,t){t&&e.find(".fr-upload-progress-layer").get(0).clientHeight<i&&(e.find(".fr-upload-progress").addClass("fr-height-auto"),h.popups.get("filesManager.insert").addClass("fr-height-auto"),e.find(".fr-upload-progress").removeClass("fr-height-set"),i=2e3),e.get(0).clientHeight>window.innerHeight/2&&(window.innerWidth<500?e.get(0).clientHeight>.6*r&&o(e):400<e.get(0).clientHeight&&o(e),i=e.find(".fr-upload-progress-layer").get(0).clientHeight);var n=window.innerWidth;switch(!0){case n<=320:e.width(200);break;case n<=420:e.width(250);break;case n<=520:e.width(300);break;case n<=720:e.width(400);break;case 720<n:e.width(530)}}}},V.MODULES.accessibility=function(f){var p=f.$,i=!0;function l(t){for(var e=f.$el.find('[contenteditable="true"]'),n=!1,r=0;e.get(r);)p(e.get(r)).is(":focus")&&(n=!0),r++;if(t&&t.length&&!n){t.data("blur-event-set")||t.parents(".fr-popup").length||(f.events.$on(t,"blur",function(){var e=t.parents(".fr-toolbar, .fr-popup").data("instance")||f;e.events.blurActive()&&!f.core.hasFocus()&&e.events.trigger("blur"),setTimeout(function(){e.events.enableBlur()},100)},!0),t.data("blur-event-set",!0));var o=t.parents(".fr-toolbar, .fr-popup").data("instance")||f;f.browser.safari&&(f.shared.safariSelection=f.selection.get().getRangeAt(0).cloneRange()),o.events.disableBlur(),t.get(0).focus(),f.shared.$f_el=t}}function h(e,t){var n=t?"last":"first",r=s(g(e))[n]();if(r.length)return l(r),!0}function a(e){return e.is("input, textarea, select")&&t(),f.events.disableBlur(),e.get(0).focus(),!0}function u(e,t){var n=e.find("input, textarea, button, select").filter(function(){return p(this).isVisible()}).not(":disabled");if((n=t?n.last():n.first()).length)return a(n);if(f.shared.with_kb){var r=e.findVisible(".fr-active-item").first();if(r.length)return a(r);var o=e.findVisible("[tabIndex]").first();if(o.length)return a(o)}}function t(){0===f.$el.find(".fr-marker").length&&f.core.hasFocus()&&f.selection.save()}function c(){var e=f.popups.areVisible();if(e){var t=e.find(".fr-buttons");return t.find("button:focus, .fr-group span:focus").length?!h(e.data("instance").$tb):!h(t)}return!h(f.$tb)}function d(){var e=null;return f.shared.$f_el.is(".fr-dropdown.fr-active")?e=f.shared.$f_el:f.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active")&&(e=f.shared.$f_el.closest(".fr-dropdown-menu").prev()),e}function s(e){for(var t=-1,n=0;n<e.length;n++)p(e[n]).hasClass("fr-open")&&(t=n);var r=e.index(f.$tb.find(".fr-more-toolbar.fr-expanded > button.fr-command").first());if(0<r&&-1!==t){var o=e.slice(r,e.length),i=(e=e.slice(0,r)).slice(0,t+1),a=e.slice(t+1,e.length);e=i;for(var s=0;s<o.length;s++)e.push(o[s]);for(var l=0;l<a.length;l++)e.push(a[l])}return e}function g(e){return e.findVisible("button:not(.fr-disabled), .fr-group span.fr-command").filter(function(e){var t=p(e).parents(".fr-more-toolbar");return 0===t.length||0<t.length&&t.hasClass("fr-expanded")})}function n(e,t,n){if(f.shared.$f_el){var r=d();r&&(f.button.click(r),f.shared.$f_el=r);var o=s(g(e)),i=o.index(f.shared.$f_el);if(0===i&&!n||i===o.length-1&&n){var a;if(t){if(e.parent().is(".fr-popup"))a=!u(e.parent().children().not(".fr-buttons"),!n);!1===a&&(f.shared.$f_el=null)}t&&!1===a||h(e,!n)}else l(p(o.get(i+(n?1:-1))));return!1}}function C(e,t){return n(e,t,!0)}function m(e,t){return n(e,t)}function v(e){if(f.shared.$f_el){var t;if(f.shared.$f_el.is(".fr-dropdown.fr-active"))return l(t=e?f.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last()),!1;if(f.shared.$f_el.is("a.fr-command"))return(t=e?f.shared.$f_el.closest("li").nextAllVisible().first().find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.closest("li").prevAllVisible().first().find(".fr-command:not(.fr-disabled)").first()).length||(t=e?f.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()),l(t),!1}}function b(){if(f.shared.$f_el){if(f.shared.$f_el.hasClass("fr-dropdown"))f.button.click(f.shared.$f_el);else if(f.shared.$f_el.is("button.fr-back")){f.opts.toolbarInline&&(f.events.disableBlur(),f.events.focus());var e=f.popups.areVisible(f);e&&(f.shared.with_kb=!1),f.button.click(f.shared.$f_el),E(e)}else{if(f.events.disableBlur(),f.button.click(f.shared.$f_el),f.shared.$f_el.attr("data-group-name")){var t=f.$tb.find('.fr-more-toolbar[data-name="'.concat(f.shared.$f_el.attr("data-group-name"),'"]')),n=f.shared.$f_el;t.hasClass("fr-expanded")&&(n=t.findVisible("button:not(.fr-disabled)").first()),n&&l(n)}else if(f.shared.$f_el.attr("data-popup")){var r=f.popups.areVisible(f);r&&r.data("popup-button",f.shared.$f_el)}else if(f.shared.$f_el.attr("data-modal")){var o=f.modals.areVisible(f);o&&o.data("modal-button",f.shared.$f_el)}f.shared.$f_el=null}return!1}}function L(){f.shared.$f_el&&(f.events.disableBlur(),f.shared.$f_el.blur(),f.shared.$f_el=null),!1!==f.events.trigger("toolbar.focusEditor")&&(f.events.disableBlur(),f.$el.get(0).focus(),f.events.focus())}function o(c){c&&c.length&&(f.events.$on(c,"keydown",function(e){if(!p(e.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command"))return!0;var t=c.parents(".fr-popup").data("instance")||c.data("instance")||f;if(f.shared.with_kb=!0,f.browser.safari&&f.shared.safariSelection){var n=f.shared.safariSelection,r=n.startContainer,o=n.endContainer,i=n.startOffset,a=n.endOffset,s=f.doc.createRange();s.setStart(r,i),s.setEnd(o,a),f.selection.get().addRange(s)}var l=t.accessibility.exec(e,c);return f.shared.with_kb=!1,l},!0),f.events.$on(c,"mouseenter","[tabIndex]",function(e){var t=c.parents(".fr-popup").data("instance")||c.data("instance")||f;if(!i)return e.stopPropagation(),void e.preventDefault();var n=p(e.currentTarget);t.shared.$f_el&&t.shared.$f_el.not(n)&&t.accessibility.focusEditor()},!0),f.$tb&&f.events.$on(f.$tb,"transitionend",".fr-more-toolbar",function(){f.shared.$f_el=p(document.activeElement)}))}function E(e){var t=e.data("popup-button");t&&setTimeout(function(){l(t),e.data("popup-button",null)},0)}function y(e){var t=f.popups.areVisible(e);t&&t.data("popup-button",null)}function e(e){var t=-1!==navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey;if(e.which!==V.KEYCODE.F10||t||e.shiftKey||!e.altKey)return!0;f.shared.with_kb=!0;var n=f.popups.areVisible(f),r=!1;return n&&(r=u(n.children().not(".fr-buttons"))),r||c(),f.shared.with_kb=!1,e.preventDefault(),e.stopPropagation(),!1}return{_init:function r(){f.$wp?f.events.on("keydown",e,!0):f.events.$on(f.$win,"keydown",e,!0),f.events.on("mousedown",function(e){y(f),f.shared.$f_el&&f.el.isSameNode(f.shared.$f_el[0])&&(f.accessibility.restoreSelection(),e.stopPropagation(),f.events.disableBlur(),f.shared.$f_el=null)},!0),f.events.on("blur",function(){f.shared.$f_el=null,y(f)},!0)},registerPopup:function S(e){var t=f.popups.get(e),n=function r(c){var d=f.popups.get(c);return{_tiKeydown:function(e){var t=d.data("instance")||f;if(!1===t.events.trigger("popup.tab",[e]))return!1;var n=e.which,r=d.find(":focus").first();if(V.KEYCODE.TAB===n){e.preventDefault();var o=d.children().not(".fr-buttons"),i=o.findVisible("input, textarea, button, select").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray(),a=i.indexOf(this)+(e.shiftKey?-1:1);if(0<=a&&a<i.length)return t.events.disableBlur(),p(i[a]).focus(),e.stopPropagation(),!1;var s=d.find(".fr-buttons");if(s.length&&h(s,Boolean(e.shiftKey)))return e.stopPropagation(),!1;if(u(o))return e.stopPropagation(),!1}else{if(V.KEYCODE.ENTER!==n||!e.target||"TEXTAREA"===e.target.tagName)return V.KEYCODE.ESC===n?(e.preventDefault(),e.stopPropagation(),t.accessibility.restoreSelection(),t.popups.isVisible(c)&&d.findVisible(".fr-back").length?(t.opts.toolbarInline&&(t.events.disableBlur(),t.events.focus()),t.button.exec(d.findVisible(".fr-back").first()),E(d)):t.popups.isVisible(c)&&d.findVisible(".fr-dismiss").length?t.button.exec(d.findVisible(".fr-dismiss").first()):(t.popups.hide(c),t.opts.toolbarInline&&t.toolbar.showInline(null,!0),E(d)),!1):V.KEYCODE.SPACE===n&&(r.is(".fr-submit")||r.is(".fr-dismiss"))?(e.preventDefault(),e.stopPropagation(),t.events.disableBlur(),t.button.exec(r),!0):t.keys.isBrowserAction(e)?void e.stopPropagation():r.is("input[type=text], textarea")?void e.stopPropagation():V.KEYCODE.SPACE===n&&(r.is(".fr-link-attr")||r.is("input[type=file]"))?void e.stopPropagation():(e.stopPropagation(),e.preventDefault(),!1);var l=null;0<d.findVisible(".fr-submit").length?l=d.findVisible(".fr-submit").first():d.findVisible(".fr-dismiss").length&&(l=d.findVisible(".fr-dismiss").first()),l&&(e.preventDefault(),e.stopPropagation(),t.events.disableBlur(),t.button.exec(l))}},_tiMouseenter:function(){var e=d.data("instance")||f;y(e)}}}(e);o(t.find(".fr-buttons")),f.events.$on(t,"mouseenter","tabIndex",n._tiMouseenter,!0),f.events.$on(t.children().not(".fr-buttons"),"keydown","[tabIndex]",n._tiKeydown,!0),f.popups.onHide(e,function(){(t.data("instance")||f).accessibility.restoreSelection()}),f.popups.onShow(e,function(){i=!1,setTimeout(function(){i=!0},0)})},registerToolbar:o,focusToolbarElement:l,focusToolbar:h,focusContent:u,focusPopup:function N(r){var o=r.children().not(".fr-buttons");o.data("mouseenter-event-set")||(f.events.$on(o,"mouseenter","[tabIndex]",function(e){var t=r.data("instance")||f;if(!i)return e.stopPropagation(),void e.preventDefault();var n=o.find(":focus").first();n.length&&!n.is("input, button, textarea, select")&&(t.events.disableBlur(),n.blur(),t.events.disableBlur(),t.events.focus())}),o.data("mouseenter-event-set",!0)),!u(o)&&f.shared.with_kb&&h(r.find(".fr-buttons"))},focusModal:function T(e){f.core.hasFocus()||(f.events.disableBlur(),f.events.focus()),f.accessibility.saveSelection(),f.events.disableBlur(),f.el.blur(),f.selection.clear(),f.events.disableBlur(),f.shared.with_kb?e.find(".fr-command[tabIndex], [tabIndex]").first().focus():e.find("[tabIndex]").first().focus()},focusEditor:L,focusPopupButton:E,focusModalButton:function M(e){var t=e.data("modal-button");t&&setTimeout(function(){l(t),e.data("modal-button",null)},0)},hasFocus:function A(){return null!==f.shared.$f_el},exec:function x(e,t){var n=-1!==navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey,r=e.which,o=!1;return r!==V.KEYCODE.TAB||n||e.shiftKey||e.altKey?r!==V.KEYCODE.ARROW_RIGHT||n||e.shiftKey||e.altKey?r!==V.KEYCODE.TAB||n||!e.shiftKey||e.altKey?r!==V.KEYCODE.ARROW_LEFT||n||e.shiftKey||e.altKey?r!==V.KEYCODE.ARROW_UP||n||e.shiftKey||e.altKey?r!==V.KEYCODE.ARROW_DOWN||n||e.shiftKey||e.altKey?r!==V.KEYCODE.ENTER&&r!==V.KEYCODE.SPACE||n||e.shiftKey||e.altKey?r!==V.KEYCODE.ESC||n||e.shiftKey||e.altKey?r!==V.KEYCODE.F10||n||e.shiftKey||!e.altKey||(o=c()):o=function i(e){if(f.shared.$f_el){var t=d();return t?(f.button.click(t),l(t)):e.parent().findVisible(".fr-back").length?(f.shared.with_kb=!1,f.opts.toolbarInline&&(f.events.disableBlur(),f.events.focus()),f.button.exec(e.parent().findVisible(".fr-back")).first(),E(e.parent())):f.shared.$f_el.is("button, .fr-group span")&&(e.parent().is(".fr-popup")?(f.accessibility.restoreSelection(),f.shared.$f_el=null,!1!==f.events.trigger("toolbar.esc")&&(f.popups.hide(e.parent()),f.opts.toolbarInline&&f.toolbar.showInline(null,!0),E(e.parent()))):L()),!1}}(t):o=b():o=function a(){return f.shared.$f_el&&f.shared.$f_el.is(".fr-dropdown:not(.fr-active)")?b():v(!0)}():o=function s(){return v()}():o=m(t):o=m(t,!0):o=C(t):o=C(t,!0),f.shared.$f_el||void 0!==o||(o=!0),!o&&f.keys.isBrowserAction(e)&&(o=!0),!!o||(e.preventDefault(),e.stopPropagation(),!1)},saveSelection:t,restoreSelection:function O(){f.$el.find(".fr-marker").length&&(f.events.disableBlur(),f.selection.restore(),f.events.enableBlur())}}},Object.assign(V.DEFAULTS,{tooltips:!0}),V.MODULES.tooltip=function(p){var h=p.$;function r(){p.helpers.isMobile()||p.$tooltip&&p.$tooltip.removeClass("fr-visible").css("left","-3000px").css("position","fixed")}function o(e,t){if(!p.helpers.isMobile()){var n=e.attr("id")&&e.attr("id").split("-")[0],r=e.attr("title"),o=p.opts.trackChangesEnabled,i=p.opts.showChangesEnabled;if(p.opts.toolbarContainer){for(var a=!1,s=0;s<V.INSTANCES.length;s++)if(V.INSTANCES[s].core.hasFocus()){o=V.INSTANCES[s].opts.trackChangesEnabled,i=V.INSTANCES[s].opts.showChangesEnabled,a=!0;break}a||(i=o=e.hasClass("fr-active"))}if("trackChanges"===n)r=o?"Disable Track Changes":"Enable Track Changes";else if("showChanges"===n)r=i?"Hide Changes":"Show Changes";else if(("applyAll"===n||"removeAll"===n||"applyLast"===n||"removeLast"===n)&&0===p.track_changes.getPendingChanges().length)return;if(e.data("title",r),e.data("title")){p.$tooltip||function f(){if(p.opts.tooltips&&!p.helpers.isMobile()){if(p.shared.$tooltip)p.$tooltip=p.shared.$tooltip;else{p.shared.$tooltip=h(p.doc.createElement("DIV")).addClass("fr-tooltip"),p.$tooltip=p.shared.$tooltip,p.opts.theme&&p.$tooltip.addClass("".concat(p.opts.theme,"-theme"));var e=p.$wp.closest("dialog");0<e.length?e.first().append(p.$tooltip):h(p.o_doc).find("body").first().append(p.$tooltip)}p.events.on("shared.destroy",function(){p.$tooltip.html("").removeData().remove(),p.$tooltip=null},!0)}}(),e.removeAttr("title"),p.$tooltip.text(p.language.translate(e.data("title"))),p.$tooltip.addClass("fr-visible");var l=e.offset().left+(e.outerWidth()-p.$tooltip.outerWidth())/2;l<0&&(l=0),l+p.$tooltip.outerWidth()>h(p.o_win).width()&&(l=h(p.o_win).width()-p.$tooltip.outerWidth()),void 0===t&&(t=p.opts.toolbarBottom),e.offset().top-h(window).scrollTop()+e.outerHeight()+10>=h(window).height()&&(t=!0);var c=t?e.offset().top-p.$tooltip.height():e.offset().top+e.outerHeight();p.$tooltip.css("position",""),p.$tooltip.css("left",l),p.$tooltip.css("top",Math.ceil(c));var d=p.$wp.closest("dialog");0<d.length?(p.$tooltip.css("margin-left",-d.first().offset().left),p.$tooltip.css("margin-top",-d.first().offset().top)):"static"!==h(p.o_doc).find("body").first().css("position")?(p.$tooltip.css("margin-left",-h(p.o_doc).find("body").first().offset().left),p.$tooltip.css("margin-top",-h(p.o_doc).find("body").first().offset().top)):(p.$tooltip.css("margin-left",""),p.$tooltip.css("margin-top",""))}}}return{hide:r,to:o,bind:function i(e,t,n){p.opts.tooltips&&!p.helpers.isMobile()&&(p.events.$on(e,"mouseover",t,function(e){p.node.hasClass(e.currentTarget,"fr-disabled")||p.edit.isDisabled()||o(h(e.currentTarget),n)},!0),p.events.$on(e,"mouseout ".concat(p._mousedown," ").concat(p._mouseup),t,function(){r()},!0))}}},V.TOOLBAR_VISIBLE_BUTTONS=3,V.MODULES.button=function(g){var u=g.$,a=[];(g.opts.toolbarInline||g.opts.toolbarContainer)&&(g.shared.buttons||(g.shared.buttons=[]),a=g.shared.buttons);var s=[];function l(e,t,n){for(var r=u(),o=0;o<e.length;o++){var i=u(e[o]);if(i.is(t)&&(r=r.add(i)),n&&i.is(".fr-dropdown")){var a=i.next().find(t);r=r.add(a)}}return r}function C(e,t){var n,r=u();if(!e)return r;for(n in r=(r=r.add(l(a,e,t))).add(l(s,e,t)),g.shared.popups)if(Object.prototype.hasOwnProperty.call(g.shared.popups,n)){var o=g.shared.popups[n].children().find(e);r=r.add(o)}for(n in g.shared.modals)if(Object.prototype.hasOwnProperty.call(g.shared.modals,n)){var i=g.shared.modals[n].$modal.find(e);r=r.add(i)}return r}function i(e){var t=e.next(),n=g.node.hasClass(e.get(0),"fr-active"),r=C(".fr-dropdown.fr-active").not(e),o=e.parents(".fr-toolbar, .fr-popup").data("instance")||g;o.helpers.isIOS()&&!o.el.querySelector(".fr-marker")&&(o.selection.save(),o.selection.clear(),o.selection.restore()),t.parents(".fr-more-toolbar").addClass("fr-overflow-visible");var i=0,a=0,s=t.find("> .fr-dropdown-wrapper");if(!n){var l=e.data("cmd");t.find(".fr-command").removeClass("fr-active").attr("aria-selected",!1),V.COMMANDS[l]&&V.COMMANDS[l].refreshOnShow&&V.COMMANDS[l].refreshOnShow.apply(o,[e,t]),t.css("left",e.offset().left-e.parents(".fr-btn-wrap, .fr-toolbar, .fr-buttons").offset().left-("rtl"===g.opts.direction?t.width()-e.outerWidth():0)),t.addClass("test-height"),i=t.outerHeight(),a=g.helpers.getPX(s.css("max-height")),t.removeClass("test-height"),t.css("top","").css("bottom","");var c=e.outerHeight()/10;if(!g.opts.toolbarBottom&&t.offset().top+e.outerHeight()+i<u(g.o_doc).height())t.css("top",e.position().top+e.outerHeight()-c);else{var d=0,f=e.parents(".fr-more-toolbar");0<f.length&&(d=f.first().height()),t.css("bottom",e.parents(".fr-popup, .fr-toolbar").first().height()-d-e.position().top)}}(e.addClass("fr-blink").toggleClass("fr-active"),e.hasClass("fr-options"))&&e.prev().toggleClass("fr-expanded");e.hasClass("fr-active")?(t.attr("aria-hidden",!1),e.attr("aria-expanded",!0),function h(e,t,n){n<=t&&(e.parent().css("overflow","auto"),e.parent().css("overflow-x","hidden")),e.css("height",Math.min(t,n))}(s,i,a)):(t.attr("aria-hidden",!0).css("overflow",""),e.attr("aria-expanded",!1),s.css("height","")),setTimeout(function(){e.removeClass("fr-blink")},300),t.css("margin-left",""),t.offset().left+t.outerWidth()>g.$sc.offset().left+g.$sc.width()&&t.css("margin-left",-(t.offset().left+t.outerWidth()-g.$sc.offset().left-g.$sc.width())),t.offset().left<g.$sc.offset().left&&"rtl"===g.opts.direction&&t.css("margin-left",g.$sc.offset().left),r.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0).css("overflow","").find("> .fr-dropdown-wrapper").css("height",""),r.prev(".fr-expanded").removeClass("fr-expanded"),r.parents(".fr-toolbar:not(.fr-inline)").css("zIndex",""),0!==e.parents(".fr-popup").length||g.opts.toolbarInline||(g.node.hasClass(e.get(0),"fr-active")?g.$tb.css("zIndex",(g.opts.zIndex||1)+4):g.$tb.css("zIndex",""));var p=t.find("a.fr-command.fr-active").first();g.helpers.isMobile()||(p.length?(g.accessibility.focusToolbarElement(p),s.scrollTop(Math.abs(p.parents(".fr-dropdown-content").offset().top-p.offset().top)-p.offset().top)):(g.accessibility.focusToolbarElement(e),s.scrollTop(0)))}function c(e){e.addClass("fr-blink"),setTimeout(function(){e.removeClass("fr-blink")},500);for(var t=e.data("cmd"),n=[];void 0!==e.data("param".concat(n.length+1));)n.push(e.data("param".concat(n.length+1)));var r=C(".fr-dropdown.fr-active");r.length&&(r.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0).css("overflow","").find("> .fr-dropdown-wrapper").css("height",""),r.prev(".fr-expanded").removeClass("fr-expanded"),r.parents(".fr-toolbar:not(.fr-inline)").css("zIndex","")),e.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(t,n)}function t(e){var t=e.parents(".fr-popup, .fr-toolbar").data("instance"),n=g.popups.get("link.insert");if(0===e.parents(".fr-popup").length&&e.data("popup")&&!e.hasClass("fr-btn-active-popup")&&(e.attr("id")==="insertLink-".concat(g.id)&&n&&n.hasClass("fr-active")||e.addClass("fr-btn-active-popup")),0!==e.parents(".fr-popup").length||e.data("popup")||t.popups.hideAll(),t.popups.areVisible()&&!t.popups.areVisible(t)){for(var r=0;r<V.INSTANCES.length;r++)V.INSTANCES[r]!==t&&V.INSTANCES[r].popups&&V.INSTANCES[r].popups.areVisible()&&V.INSTANCES[r].$el.find(".fr-marker").remove();t.popups.hideAll()}g.node.hasClass(e.get(0),"fr-dropdown")?i(e):(!function o(e){c(e)}(e),V.COMMANDS[e.data("cmd")]&&!1!==V.COMMANDS[e.data("cmd")].refreshAfterCallback&&t.button.bulkRefresh())}function d(e){t(u(e.currentTarget))}function f(e){var t=e.find(".fr-dropdown.fr-active");t.length&&(t.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0).css("overflow","").find("> .fr-dropdown-wrapper").css("height",""),t.parents(".fr-toolbar:not(.fr-inline)").css("zIndex",""),t.prev().removeClass("fr-expanded"))}function p(e){e.preventDefault(),e.stopPropagation()}function h(e){if(e.stopPropagation(),!g.helpers.isMobile())return!1}function m(e){var t=1<arguments.length&&arguments[1]!==undefined?arguments[1]:{},n=2<arguments.length?arguments[2]:undefined;if(g.helpers.isMobile()&&!1===t.showOnMobile)return"";var r=t.displaySelection;"function"==typeof r&&(r=r(g));var o="";if("options"!==t.type)if(r){var i="function"==typeof t.defaultSelection?t.defaultSelection(g):t.defaultSelection;o='<span style="width:'.concat(t.displaySelectionWidth||100,'px">').concat(g.language.translate(i||t.title),"</span>")}else o=g.icon.create(t.icon||e),o+='<span class="fr-sr-only">'.concat(g.language.translate(t.title)||"","</span>");var a=t.popup?' data-popup="true"':"",s=t.modal?' data-modal="true"':"",l=g.shortcuts.get("".concat(e,"."));l=l?" (".concat(l,")"):"";var c="".concat(e,"-").concat(g.id),d="dropdown-menu-".concat(c),f='<button id="'.concat(c,'"').concat(t.more_btn?' data-group-name="'.concat(c,'" '):"",'type="button" tabIndex="-1" role="button"').concat(t.toggle?' aria-pressed="false"':"").concat("dropdown"===t.type||"options"===t.type?' aria-controls="'.concat(d,'" aria-expanded="false" aria-haspopup="true"'):"").concat(t.disabled?' aria-disabled="true"':"",' title="').concat(g.language.translate(t.title)||"").concat(l,'" class="fr-command fr-btn').concat("dropdown"===t.type||"options"==t.type?" fr-dropdown":"").concat("options"==t.type?" fr-options":"").concat("more"==t.type?" fr-more":"").concat(t.displaySelection?" fr-selection":"").concat(t.back?" fr-back":"").concat(t.disabled?" fr-disabled":"").concat(n?"":" fr-hidden",'" data-cmd="').concat(e,'"').concat(a).concat(s,">").concat(o,"</button>");if("dropdown"===t.type||"options"===t.type){var p='<div id="'.concat(d,'" class="fr-dropdown-menu" role="listbox" aria-labelledby="').concat(c,'" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">');p+=function h(e,t){var n="";if(t.html)"function"==typeof t.html?n+=t.html.call(g):n+=t.html;else{var r=t.options;for(var o in"function"==typeof r&&(r=r()),n+='<ul class="fr-dropdown-list" role="presentation">',r)if(Object.prototype.hasOwnProperty.call(r,o)){var i=g.shortcuts.get("".concat(e,".").concat(o));i=i?'<span class="fr-shortcut">'.concat(i,"</span>"):"",n+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'.concat("options"===t.type?e.replace(/Options/g,""):e,'" data-param1="').concat(o,'" title="').concat(r[o],'">').concat(g.language.translate(r[o]),"</a></li>")}n+="</ul>"}return n}(e,t),f+=p+="</div></div></div>"}return t.hasOptions&&t.hasOptions.apply(g)&&(f='<div class="fr-btn-wrap">'.concat(f," ").concat(m(e+"Options",Object.assign({},t,{type:"options",hasOptions:!1}),n),"  </div>")),f}function e(o){var i=g.$tb&&g.$tb.data("instance")||g;if(!1===g.events.trigger("buttons.refresh"))return!0;setTimeout(function(){for(var e=i.selection.inEditor()&&i.core.hasFocus(),t=0;t<o.length;t++){var n=u(o[t]),r=n.data("cmd");0===n.parents(".fr-popup").length?e||V.COMMANDS[r]&&V.COMMANDS[r].forcedRefresh?i.button.refresh(n):g.node.hasClass(n.get(0),"fr-dropdown")||(n.removeClass("fr-active"),n.attr("aria-pressed")&&n.attr("aria-pressed",!1)):n.parents(".fr-popup").isVisible()&&i.button.refresh(n)}},0)}function n(){e(a),e(s)}function r(){a=[],s=[]}g.shared.popup_buttons||(g.shared.popup_buttons=[]),s=g.shared.popup_buttons;var o=null;function v(){clearTimeout(o),o=setTimeout(n,50)}return{_init:function b(){g.opts.toolbarInline?g.events.on("toolbar.show",n):(g.events.on("mouseup",v),g.events.on("keyup",v),g.events.on("blur",v),g.events.on("focus",v),g.events.on("contentChanged",v),g.helpers.isMobile()&&g.events.$on(g.$doc,"selectionchange",n)),g.events.on("shared.destroy",r)},build:m,buildList:function L(e,t){for(var n="",r=0;r<e.length;r++){var o=e[r],i=V.COMMANDS[o];i&&"undefined"!=typeof i.plugin&&g.opts.pluginsEnabled.indexOf(i.plugin)<0||(i?n+=m(o,i,void 0===t||0<=t.indexOf(o)):"|"===o?n+='<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>':"-"===o&&(n+='<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>'))}return n},buildGroup:function E(e){var t="",n="";for(var r in e){var o=e[r];if(o.buttons){for(var i="",a="",s=0,l="left",c=V.TOOLBAR_VISIBLE_BUTTONS,d=0;d<o.buttons.length;d++){var f=o.buttons[d],p=V.COMMANDS[f];p||("|"==f?i+='<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>':"-"==f&&(i+='<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>')),!p||p&&"undefined"!=typeof p.plugin&&g.opts.pluginsEnabled.indexOf(p.plugin)<0||(e[r].align!==undefined&&(l=e[r].align),e[r].buttonsVisible!==undefined&&(c=e[r].buttonsVisible),e.showMoreButtons&&c<=s?a+=m(f,p,!0):i+=m(f,p,!0),s++)}if(e.showMoreButtons&&c<s){var h=r,u=V.COMMANDS[h];u.more_btn=!0,i+=m(h,u,!0)}"trackChanges"!==r&&(t+='<div class="fr-btn-grp fr-float-'.concat(l,'">').concat(i,"</div>")),e.showMoreButtons&&0<a.length&&(n+='<div class="fr-more-toolbar" data-name="'.concat(r+"-"+g.id,'">').concat(a,"</div>"))}}return g.opts.toolbarBottom?g.helpers.isMobile()?'<div class="fr-bottom-extended">'.concat(n,"</div><div>").concat(t,"</div>"):"".concat(n,'<div class="fr-newline"></div>').concat(t):"".concat(t,'<div class="fr-newline"></div>').concat(n)},bindCommands:function y(t,e){g.events.bindClick(t,".fr-command:not(.fr-disabled)",d),g.events.$on(t,"".concat(g._mousedown," ").concat(g._mouseup," ").concat(g._move),".fr-dropdown-menu",p,!0),g.events.$on(t,"".concat(g._mousedown," ").concat(g._mouseup," ").concat(g._move),".fr-dropdown-menu .fr-dropdown-wrapper",h,!0);var n=t.get(0).ownerDocument,r="defaultView"in n?n.defaultView:n.parentWindow;function o(e){(!e||e.type===g._mouseup&&e.target!==u("html").get(0)||"keydown"===e.type&&(g.keys.isCharacter(e.which)&&!g.keys.ctrlKey(e)||e.which===V.KEYCODE.ESC))&&(f(t),g.opts.iframe&&function r(e){var t=e.find(".fr-popup.fr-active");if(t.length){t.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0).css("overflow","").find("> .fr-dropdown-wrapper").css("height",""),t.parents(".fr-toolbar:not(.fr-inline)").css("zIndex",""),t.prev().removeClass("fr-expanded");var n=g.$tb.find(".fr-btn-active-popup");u(n[0]).removeClass("fr-btn-active-popup")}}(t))}g.events.$on(u(r),"".concat(g._mouseup," resize keydown"),o,!0),g.opts.iframe&&g.events.$on(g.$win,g._mouseup,o,!0),g.node.hasClass(t.get(0),"fr-popup")?u.merge(s,t.find(".fr-btn").toArray()):u.merge(a,t.find(".fr-btn").toArray()),g.tooltip.bind(t,".fr-btn, .fr-title",e)},refresh:function S(e){var t,n=e.parents(".fr-popup, .fr-toolbar").data("instance")||g,r=e.data("cmd");g.node.hasClass(e.get(0),"fr-dropdown")?t=e.next():(e.removeClass("fr-active"),e.attr("aria-pressed")&&e.attr("aria-pressed",!1)),V.COMMANDS[r]&&V.COMMANDS[r].refresh?V.COMMANDS[r].refresh.apply(n,[e,t]):g.refresh[r]&&n.refresh[r](e,t)},bulkRefresh:n,exec:c,click:t,hideActiveDropdowns:f,addButtons:function N(e){for(var t=0;t<e.length;t++)a.push(e[t])},getButtons:C,getPosition:function T(e){var t=e.offset().left,n=g.opts.toolbarBottom?10:e.outerHeight()-10;return{left:t,top:e.offset().top+n}}}},V.ICON_TEMPLATES={font_awesome:'<i class="fa fa-[NAME]" aria-hidden="true"></i>',font_awesome_5:'<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5r:'<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5l:'<i class="fal fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5b:'<i class="fab fa-[FA5NAME]" aria-hidden="true"></i>',text:'<span style="text-align: center;">[NAME]</span>',image:"<img src=[SRC] alt=[ALT] />",svg:'<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="[PATH]"/></svg>',empty:" "},V.ICONS={bold:{NAME:"bold",SVG_KEY:"bold"},italic:{NAME:"italic",SVG_KEY:"italic"},underline:{NAME:"underline",SVG_KEY:"underline"},strikeThrough:{NAME:"strikethrough",SVG_KEY:"strikeThrough"},subscript:{NAME:"subscript",SVG_KEY:"subscript"},superscript:{NAME:"superscript",SVG_KEY:"superscript"},cancel:{NAME:"cancel",SVG_KEY:"cancel"},color:{NAME:"tint",SVG_KEY:"textColor"},outdent:{NAME:"outdent",SVG_KEY:"outdent"},indent:{NAME:"indent",SVG_KEY:"indent"},undo:{NAME:"rotate-left",FA5NAME:"undo",SVG_KEY:"undo"},redo:{NAME:"rotate-right",FA5NAME:"redo",SVG_KEY:"redo"},insert:{NAME:"insert",SVG_KEY:"insert"},insertAll:{NAME:"insertAll",SVG_KEY:"insertAll"},insertHR:{NAME:"minus",SVG_KEY:"horizontalLine"},clearFormatting:{NAME:"eraser",SVG_KEY:"clearFormatting"},selectAll:{NAME:"mouse-pointer",SVG_KEY:"selectAll"},minimize:{NAME:"minimize",SVG_KEY:"minimize"},moreText:{NAME:"ellipsis-v",SVG_KEY:"textMore"},moreParagraph:{NAME:"ellipsis-v",SVG_KEY:"paragraphMore"},moreRich:{NAME:"ellipsis-v",SVG_KEY:"insertMore"},moreMisc:{NAME:"ellipsis-v",SVG_KEY:"more"}},V.DefineIconTemplate=function(e,t){V.ICON_TEMPLATES[e]=t},V.DefineIcon=function(e,t){V.ICONS[e]=t},Object.assign(V.DEFAULTS,{iconsTemplate:"svg"}),V.MODULES.icon=function(o){return{create:function i(n){var e=null,r=V.ICONS[n];if(void 0!==r){var t=r.template||V.ICON_DEFAULT_TEMPLATE||o.opts.iconsTemplate;t&&t.apply&&(t=t.apply(o)),r.FA5NAME||(r.FA5NAME=r.NAME),"svg"!==t||r.PATH||(r.PATH=V.SVG[r.SVG_KEY]||""),t&&(t=V.ICON_TEMPLATES[t])&&(e=t.replace(/\[([a-zA-Z0-9]*)\]/g,function(e,t){return"NAME"===t?r[t]||n:r[t]}))}return e||n},getTemplate:function r(e){var t=V.ICONS[e],n=o.opts.iconsTemplate;return void 0!==t?n=t.template||V.ICON_DEFAULT_TEMPLATE||o.opts.iconsTemplate:n},getFileIcon:function n(e){var t=V.FILEICONS[e];return void 0!==t?t:e}}},V.SVG={add:"M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z",advancedImageEditor:"M3,17v2h6v-2H3z M3,5v2h10V5H3z M13,21v-2h8v-2h-8v-2h-2v6H13z M7,9v2H3v2h4v2h2V9H7z M21,13v-2H11v2H21z M15,9h2V7h4V5h-4  V3h-2V9z",alignCenter:"M9,18h6v-2H9V18z M6,11v2h12v-2H6z M3,6v2h18V6H3z",alignJustify:"M3,18h18v-2H3V18z M3,11v2h18v-2H3z M3,6v2h18V6H3z",alignLeft:"M3,18h6v-2H3V18z M3,11v2h12v-2H3z M3,6v2h18V6H3z",alignRight:"M15,18h6v-2h-6V18z M9,11v2h12v-2H9z M3,6v2h18V6H3z",anchors:"M16,4h-4H8C6.9,4,6,4.9,6,6v4v10l6-2.6l6,2.6V10V6C18,4.9,17.1,4,16,4z M16,17l-4-1.8L8,17v-7V6h4h4v4V17z",autoplay:"M 7.570312 0.292969 C 7.542969 0.292969 7.515625 0.292969 7.488281 0.296875 C 7.203125 0.324219 6.984375 0.539062 6.980469 0.792969 L 6.925781 3.535156 C 2.796875 3.808594 -0.0078125 6.425781 -0.0859375 10.09375 C -0.121094 11.96875 0.710938 13.6875 2.265625 14.921875 C 3.769531 16.117188 5.839844 16.796875 8.097656 16.828125 C 8.140625 16.828125 12.835938 16.898438 13.035156 16.886719 C 15.171875 16.796875 17.136719 16.128906 18.558594 15.003906 C 20.066406 13.816406 20.882812 12.226562 20.917969 10.40625 C 20.960938 8.410156 20.023438 6.605469 18.289062 5.335938 C 18.214844 5.277344 18.128906 5.230469 18.035156 5.203125 C 17.636719 5.074219 17.222656 5.199219 17 5.476562 L 15.546875 7.308594 C 15.304688 7.609375 15.363281 8.007812 15.664062 8.265625 C 16.351562 8.851562 16.707031 9.625 16.6875 10.5 C 16.652344 12.25 15.070312 13.390625 12.757812 13.535156 C 12.59375 13.539062 8.527344 13.472656 8.164062 13.464844 C 5.703125 13.429688 4.101562 12.191406 4.140625 10.3125 C 4.175781 8.570312 5.132812 7.46875 6.847656 7.199219 L 6.796875 9.738281 C 6.792969 9.992188 7 10.214844 7.285156 10.253906 C 7.3125 10.257812 7.339844 10.257812 7.367188 10.257812 C 7.503906 10.261719 7.632812 10.222656 7.738281 10.148438 L 14.039062 5.785156 C 14.171875 5.691406 14.253906 5.558594 14.253906 5.410156 C 14.257812 5.261719 14.1875 5.125 14.058594 5.027344 L 7.941406 0.414062 C 7.835938 0.335938 7.707031 0.292969 7.570312 0.292969 ",back:"M20 11L7.83 11 11.425 7.405 10.01 5.991 5.416 10.586 5.414 10.584 4 11.998 4.002 12 4 12.002 5.414 13.416 5.416 13.414 10.01 18.009 11.425 16.595 7.83 13 20 13 20 13 20 11 20 11Z",backgroundColor:"M9.91752,12.24082l7.74791-5.39017,1.17942,1.29591-6.094,7.20747L9.91752,12.24082M7.58741,12.652l4.53533,4.98327a.93412.93412,0,0,0,1.39531-.0909L20.96943,8.7314A.90827.90827,0,0,0,20.99075,7.533l-2.513-2.76116a.90827.90827,0,0,0-1.19509-.09132L7.809,11.27135A.93412.93412,0,0,0,7.58741,12.652ZM2.7939,18.52772,8.41126,19.5l1.47913-1.34617-3.02889-3.328Z",blockquote:"M10.31788,5l.93817,1.3226A12.88271,12.88271,0,0,0,8.1653,9.40125a5.54242,5.54242,0,0,0-.998,3.07866v.33733q.36089-.04773.66067-.084a4.75723,4.75723,0,0,1,.56519-.03691,2.87044,2.87044,0,0,1,2.11693.8427,2.8416,2.8416,0,0,1,.8427,2.09274,3.37183,3.37183,0,0,1-.8898,2.453A3.143,3.143,0,0,1,8.10547,19,3.40532,3.40532,0,0,1,5.375,17.7245,4.91156,4.91156,0,0,1,4.30442,14.453,9.3672,9.3672,0,0,1,5.82051,9.32933,14.75716,14.75716,0,0,1,10.31788,5Zm8.39243,0,.9369,1.3226a12.88289,12.88289,0,0,0-3.09075,3.07865,5.54241,5.54241,0,0,0-.998,3.07866v.33733q.33606-.04773.63775-.084a4.91773,4.91773,0,0,1,.58938-.03691,2.8043,2.8043,0,0,1,2.1042.83,2.89952,2.89952,0,0,1,.80578,2.10547,3.42336,3.42336,0,0,1-.86561,2.453A3.06291,3.06291,0,0,1,16.49664,19,3.47924,3.47924,0,0,1,13.742,17.7245,4.846,4.846,0,0,1,12.64721,14.453,9.25867,9.25867,0,0,1,14.17476,9.3898,15.26076,15.26076,0,0,1,18.71031,5Z",bold:"M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z",cancel:"M13.4,12l5.6,5.6L17.6,19L12,13.4L6.4,19L5,17.6l5.6-5.6L5,6.4L6.4,5l5.6,5.6L17.6,5L19,6.4L13.4,12z",cellBackground:"M16.6,12.4L7.6,3.5L6.2,4.9l2.4,2.4l-5.2,5.2c-0.6,0.6-0.6,1.5,0,2.1l5.5,5.5c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4  l5.5-5.5C17.2,14,17.2,13,16.6,12.4z M5.2,13.5L10,8.7l4.8,4.8H5.2z M19,15c0,0-2,2.2-2,3.5c0,1.1,0.9,2,2,2s2-0.9,2-2  C21,17.2,19,15,19,15z",cellBorderColor:"M22,22H2v2h20V22z",cellOptions:"M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M9.5,6.5h5V9h-5V6.5z M8,17.5H4  c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z   M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4  c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0V9z",cellStyle:"M20,19.9l0.9,3.6l-3.2-1.9l-3.3,1.9l0.8-3.6L12.3,17h3.8l1.7-3.5l1.4,3.5H23L20,19.9z M20,5H4C2.9,5,2,5.9,2,7v10  c0,1.1,0.9,2,2,2h7.5l-0.6-0.6L10,17.5H9.5V15h5.4l1.1-2.3v-2.2h4.5v3H20l0.6,1.5H22V7C22,5.9,21.1,5,20,5z M3.5,7  c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0.1,0h4V9H3.5V7z M3.5,10.5H8v3H3.5V10.5z M4,17.5c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0-0.1v-2H8v2.5H4  z M14.5,9h-5V6.5h5V9z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0.1V9z",clearFormatting:"M11.48,10.09l-1.2-1.21L8.8,7.41,6.43,5,5.37,6.1,8.25,9,4.66,19h2l1.43-4h5.14l1.43,4h2l-.89-2.51L18.27,19l1.07-1.06L14.59,13.2ZM8.8,13l.92-2.56L12.27,13Zm.56-7.15L9.66,5h2l1.75,4.9Z",close:"M13.4,12l5.6,5.6L17.6,19L12,13.4L6.4,19L5,17.6l5.6-5.6L5,6.4L6.4,5l5.6,5.6L17.6,5L19,6.4L13.4,12z",codeView:"M9.4,16.6,4.8,12,9.4,7.4,8,6,2,12l6,6Zm5.2,0L19.2,12,14.6,7.4,16,6l6,6-6,6Z",cogs:"M18.877 12.907a6.459 6.459 0 0 0 0 -1.814l1.952 -1.526a0.468 0.468 0 0 0 0.111 -0.593l-1.851 -3.2a0.461 0.461 0 0 0 -0.407 -0.231 0.421 0.421 0 0 0 -0.157 0.028l-2.3 0.925a6.755 6.755 0 0 0 -1.563 -0.907l-0.352 -2.452a0.451 0.451 0 0 0 -0.453 -0.388h-3.7a0.451 0.451 0 0 0 -0.454 0.388L9.347 5.588A7.077 7.077 0 0 0 7.783 6.5l-2.3 -0.925a0.508 0.508 0 0 0 -0.166 -0.028 0.457 0.457 0 0 0 -0.4 0.231l-1.851 3.2a0.457 0.457 0 0 0 0.111 0.593l1.952 1.526A7.348 7.348 0 0 0 5.063 12a7.348 7.348 0 0 0 0.064 0.907L3.175 14.433a0.468 0.468 0 0 0 -0.111 0.593l1.851 3.2a0.461 0.461 0 0 0 0.407 0.231 0.421 0.421 0 0 0 0.157 -0.028l2.3 -0.925a6.74 6.74 0 0 0 1.564 0.907L9.7 20.864a0.451 0.451 0 0 0 0.454 0.388h3.7a0.451 0.451 0 0 0 0.453 -0.388l0.352 -2.452a7.093 7.093 0 0 0 1.563 -0.907l2.3 0.925a0.513 0.513 0 0 0 0.167 0.028 0.457 0.457 0 0 0 0.4 -0.231l1.851 -3.2a0.468 0.468 0 0 0 -0.111 -0.593Zm-0.09 2.029l-0.854 1.476 -2.117 -0.852 -0.673 0.508a5.426 5.426 0 0 1 -1.164 0.679l-0.795 0.323 -0.33 2.269h-1.7l-0.32 -2.269 -0.793 -0.322a5.3 5.3 0 0 1 -1.147 -0.662L8.2 15.56l-2.133 0.86 -0.854 -1.475 1.806 -1.411 -0.1 -0.847c-0.028 -0.292 -0.046 -0.5 -0.046 -0.687s0.018 -0.4 0.045 -0.672l0.106 -0.854L5.217 9.064l0.854 -1.475 2.117 0.851 0.673 -0.508a5.426 5.426 0 0 1 1.164 -0.679l0.8 -0.323 0.331 -2.269h1.7l0.321 2.269 0.792 0.322a5.3 5.3 0 0 1 1.148 0.661l0.684 0.526 2.133 -0.859 0.853 1.473 -1.8 1.421 0.1 0.847a5 5 0 0 1 0.046 0.679c0 0.193 -0.018 0.4 -0.045 0.672l-0.106 0.853ZM12 14.544A2.544 2.544 0 1 1 14.546 12 2.552 2.552 0 0 1 12 14.544Z",columns:"M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z M20.5,17  c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0  V9z",edit:"M17,11.2L12.8,7L5,14.8V19h4.2L17,11.2z M7,16.8v-1.5l5.6-5.6l1.4,1.5l-5.6,5.6H7z M13.5,6.3l0.7-0.7c0.8-0.8,2.1-0.8,2.8,0  c0,0,0,0,0,0L18.4,7c0.8,0.8,0.8,2,0,2.8l-0.7,0.7L13.5,6.3z",exitFullscreen:"M5,16H8v3h2V14H5ZM8,8H5v2h5V5H8Zm6,11h2V16h3V14H14ZM16,8V5H14v5h5V8Z",fileInsert:"M 8.09375 12.75 L 5.90625 12.75 C 5.542969 12.75 5.25 12.394531 5.25 11.953125 L 5.25 6.375 L 2.851562 6.375 C 2.367188 6.375 2.121094 5.660156 2.464844 5.242188 L 6.625 0.1875 C 6.832031 -0.0585938 7.167969 -0.0585938 7.371094 0.1875 L 11.535156 5.242188 C 11.878906 5.660156 11.632812 6.375 11.148438 6.375 L 8.75 6.375 L 8.75 11.953125 C 8.75 12.394531 8.457031 12.75 8.09375 12.75 Z M 14 12.484375 L 14 16.203125 C 14 16.644531 13.707031 17 13.34375 17 L 0.65625 17 C 0.292969 17 0 16.644531 0 16.203125 L 0 12.484375 C 0 12.042969 0.292969 11.6875 0.65625 11.6875 L 4.375 11.6875 L 4.375 11.953125 C 4.375 12.980469 5.0625 13.8125 5.90625 13.8125 L 8.09375 13.8125 C 8.9375 13.8125 9.625 12.980469 9.625 11.953125 L 9.625 11.6875 L 13.34375 11.6875 C 13.707031 11.6875 14 12.042969 14 12.484375 Z M 10.609375 15.40625 C 10.609375 15.039062 10.363281 14.742188 10.0625 14.742188 C 9.761719 14.742188 9.515625 15.039062 9.515625 15.40625 C 9.515625 15.773438 9.761719 16.070312 10.0625 16.070312 C 10.363281 16.070312 10.609375 15.773438 10.609375 15.40625 Z M 12.359375 15.40625 C 12.359375 15.039062 12.113281 14.742188 11.8125 14.742188 C 11.511719 14.742188 11.265625 15.039062 11.265625 15.40625 C 11.265625 15.773438 11.511719 16.070312 11.8125 16.070312 C 12.113281 16.070312 12.359375 15.773438 12.359375 15.40625 Z M 12.359375 15.40625 ",fileManager:"M 0 5.625 L 20.996094 5.625 L 21 15.75 C 21 16.371094 20.410156 16.875 19.6875 16.875 L 1.3125 16.875 C 0.585938 16.875 0 16.371094 0 15.75 Z M 0 5.625 M 21 4.5 L 0 4.5 L 0 2.25 C 0 1.628906 0.585938 1.125 1.3125 1.125 L 6.921875 1.125 C 7.480469 1.125 8.015625 1.316406 8.40625 1.652344 L 9.800781 2.847656 C 10.195312 3.183594 10.730469 3.375 11.289062 3.375 L 19.6875 3.375 C 20.414062 3.375 21 3.878906 21 4.5 Z M 21 4.5",markdown:"M5.55006 17.75V7.35L8.96006 16.89H10.7101L14.2301 7.37V14.0729C14.3951 14.1551 14.5499 14.265 14.6875 14.4026L14.7001 14.4151V11.64C14.7001 10.8583 15.2127 10.1963 15.9201 9.97171V5H13.6801L10.0401 14.86L6.51006 5H4.00006V17.75H5.55006ZM17.2001 11.64C17.2001 11.2258 16.8643 10.89 16.4501 10.89C16.0359 10.89 15.7001 11.2258 15.7001 11.64V16.8294L13.9804 15.1097C13.6875 14.8168 13.2126 14.8168 12.9197 15.1097C12.6269 15.4026 12.6269 15.8775 12.9197 16.1703L15.9197 19.1703C16.2126 19.4632 16.6875 19.4632 16.9804 19.1703L19.9804 16.1703C20.2733 15.8775 20.2733 15.4026 19.9804 15.1097C19.6875 14.8168 19.2126 14.8168 18.9197 15.1097L17.2001 16.8294V11.64Z",fontAwesome:"M18.99018,13.98212V7.52679c-.08038-1.21875-1.33929-.683-1.33929-.683-2.933,1.39282-4.36274.61938-5.85938.15625a6.23272,6.23272,0,0,0-2.79376-.20062l-.00946.004A1.98777,1.98777,0,0,0,7.62189,5.106a.984.984,0,0,0-.17517-.05432c-.02447-.0055-.04882-.01032-.0736-.0149A.9565.9565,0,0,0,7.1908,5H6.82539a.9565.9565,0,0,0-.18232.0368c-.02472.00458-.04907.0094-.07348.01484a.985.985,0,0,0-.17523.05438,1.98585,1.98585,0,0,0-.573,3.49585v9.394A1.004,1.004,0,0,0,6.82539,19H7.1908a1.00406,1.00406,0,0,0,1.00409-1.00409V15.52234c3.64221-1.09827,5.19709.64282,7.09888.57587a5.57291,5.57291,0,0,0,3.25446-1.05805A1.2458,1.2458,0,0,0,18.99018,13.98212Z",fontFamily:"M16,19h2L13,5H11L6,19H8l1.43-4h5.14Zm-5.86-6L12,7.8,13.86,13Z",fontSize:"M20.75,19h1.5l-3-10h-1.5l-3,10h1.5L17,16.5h3Zm-3.3-4,1.05-3.5L19.55,15Zm-5.7,4h2l-5-14h-2l-5,14h2l1.43-4h5.14ZM5.89,13,7.75,7.8,9.61,13Z",fullscreen:"M7,14H5v5h5V17H7ZM5,10H7V7h3V5H5Zm12,7H14v2h5V14H17ZM14,5V7h3v3h2V5Z",help:"M11,17h2v2h-2V17z M12,5C9.8,5,8,6.8,8,9h2c0-1.1,0.9-2,2-2s2,0.9,2,2c0,2-3,1.7-3,5v1h2v-1c0-2.2,3-2.5,3-5  C16,6.8,14.2,5,12,5z",horizontalLine:"M5,12h14 M19,11H5v2h14V11z",imageAltText:"M19,7h-6v12h-2V7H5V5h6h2h6V7z",imageCaption:"M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z M22,22H2v2h20V22z",imageClass:"M9.5,13.4l-2.9-2.9h3.8L12.2,7l1.4,3.5h3.8l-3,2.9l0.9,3.6L12,15.1L8.8,17L9.5,13.4z M22,6v12c0,1.1-0.9,2-2,2H4  c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,6H4v12h16V8.8V6z",imageDisplay:"M3,5h18v2H3V5z M13,9h8v2h-8V9z M13,13h8v2h-8V13z M3,17h18v2H3V17z M3,9h8v6H3V9z",imageManager:"M20,6h-7l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h6.2l2,2H20V18z   M18,16l-3.8-5H14l-2.9,3.8L9,12.1L6,16H18z M10,9.5C10,8.7,9.3,8,8.5,8S7,8.7,7,9.5S7.7,11,8.5,11S10,10.3,10,9.5z",imageSize:"M16.9,4c-0.3,0-0.5,0.2-0.8,0.3L3.3,13c-0.9,0.6-1.1,1.9-0.5,2.8l2.2,3.3c0.4,0.7,1.2,1,2,0.8c0.3,0,0.5-0.2,0.8-0.3  L20.7,11c0.9-0.6,1.1-1.9,0.5-2.8l-2.2-3.3C18.5,4.2,17.7,3.9,16.9,4L16.9,4z M16.9,9.9L18.1,9l-2-2.9L17,5.6c0.1,0,0.1-0.1,0.2-0.1  c0.2,0,0.4,0,0.5,0.2L19.9,9c0.2,0.2,0.1,0.5-0.1,0.7L7,18.4c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0-0.4,0-0.5-0.2L4.1,15  c-0.2-0.2-0.1-0.5,0.1-0.7L5,13.7l2,2.9l1.2-0.8l-2-2.9L7.5,12l1.1,1.7l1.2-0.8l-1.1-1.7l1.2-0.8l2,2.9l1.2-0.8l-2-2.9l1.2-0.8  l1.1,1.7l1.2-0.8l-1.1-1.7L14.9,7L16.9,9.9z",indent:"M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z",inlineClass:"M9.9,13.313A1.2,1.2,0,0,1,9.968,13H6.277l1.86-5.2,1.841,5.148A1.291,1.291,0,0,1,11.212,12h.426l-2.5-7h-2l-5,14h2l1.43-4H9.9Zm2.651,6.727a2.884,2.884,0,0,1-.655-2.018v-2.71A1.309,1.309,0,0,1,13.208,14h3.113a3.039,3.039,0,0,1,2,1.092s1.728,1.818,2.964,2.928a1.383,1.383,0,0,1,.318,1.931,1.44,1.44,0,0,1-.19.215l-3.347,3.31a1.309,1.309,0,0,1-1.832.258h0a1.282,1.282,0,0,1-.258-.257l-1.71-1.728Zm2.48-3.96a.773.773,0,1,0,.008,0Z",inlineStyle:"M11.88,15h.7l.7-1.7-3-8.3h-2l-5,14h2l1.4-4Zm-4.4-2,1.9-5.2,1.9,5.2ZM15.4,21.545l3.246,1.949-.909-3.637L20.72,17H16.954l-1.429-3.506L13.837,17H10.071l2.857,2.857-.779,3.637Z",insert:"M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10",insertEmbed:"M20.73889,15.45929a3.4768,3.4768,0,0,0-5.45965-.28662L9.5661,12.50861a3.49811,3.49811,0,0,0-.00873-1.01331l5.72174-2.66809a3.55783,3.55783,0,1,0-.84527-1.81262L8.70966,9.6839a3.50851,3.50851,0,1,0,.0111,4.63727l5.7132,2.66412a3.49763,3.49763,0,1,0,6.30493-1.526ZM18.00745,5.01056A1.49993,1.49993,0,1,1,16.39551,6.3894,1.49994,1.49994,0,0,1,18.00745,5.01056ZM5.99237,13.49536a1.49989,1.49989,0,1,1,1.61194-1.37878A1.49982,1.49982,0,0,1,5.99237,13.49536Zm11.78211,5.494a1.49993,1.49993,0,1,1,1.61193-1.37885A1.49987,1.49987,0,0,1,17.77448,18.98932Z",insertFile:"M7,3C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7.6L14.4,3H7z M17,19H7V5h6v4h4V19z",insertImage:"M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z",insertLink:"M11,17H7A5,5,0,0,1,7,7h4V9H7a3,3,0,0,0,0,6h4ZM17,7H13V9h4a3,3,0,0,1,0,6H13v2h4A5,5,0,0,0,17,7Zm-1,4H8v2h8Z",insertMore:"M16.5,13h-6v6h-2V13h-6V11h6V5h2v6h6Zm5,4.5A1.5,1.5,0,1,1,20,16,1.5,1.5,0,0,1,21.5,17.5Zm0-4A1.5,1.5,0,1,1,20,12,1.5,1.5,0,0,1,21.5,13.5Zm0-4A1.5,1.5,0,1,1,20,8,1.5,1.5,0,0,1,21.5,9.5Z",insertTable:"M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M9.5,13.5v-3  h5v3H9.5z M14.5,15v2.5h-5V15H14.5z M9.5,9V6.5h5V9H9.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M3.5,10.5H8v3H3.5V10.5z M3.5,17  v-2H8v2.5H4C3.7,17.5,3.5,17.3,3.5,17z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M16,9V6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16z",insertVideo:"M15,8v8H5V8H15m2,2.5V7a1,1,0,0,0-1-1H4A1,1,0,0,0,3,7V17a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V13.5l2.29,2.29A1,1,0,0,0,21,15.08V8.91a1,1,0,0,0-1.71-.71Z",upload:"M12 6.66667a4.87654 4.87654 0 0 1 4.77525 3.92342l0.29618 1.50268 1.52794 0.10578a2.57021 2.57021 0 0 1 -0.1827 5.13478H6.5a3.49774 3.49774 0 0 1 -0.3844 -6.97454l1.06682 -0.11341L7.678 9.29387A4.86024 4.86024 0 0 1 12 6.66667m0 -2A6.871 6.871 0 0 0 5.90417 8.37 5.49773 5.49773 0 0 0 6.5 19.33333H18.41667a4.57019 4.57019 0 0 0 0.32083 -9.13A6.86567 6.86567 0 0 0 12 4.66667Zm0.99976 7.2469h1.91406L11.99976 9 9.08618 11.91357h1.91358v3H11V16h2V14h-0.00024Z",uploadFiles:"M12 6.66667a4.87654 4.87654 0 0 1 4.77525 3.92342l0.29618 1.50268 1.52794 0.10578a2.57021 2.57021 0 0 1 -0.1827 5.13478H6.5a3.49774 3.49774 0 0 1 -0.3844 -6.97454l1.06682 -0.11341L7.678 9.29387A4.86024 4.86024 0 0 1 12 6.66667m0 -2A6.871 6.871 0 0 0 5.90417 8.37 5.49773 5.49773 0 0 0 6.5 19.33333H18.41667a4.57019 4.57019 0 0 0 0.32083 -9.13A6.86567 6.86567 0 0 0 12 4.66667Zm0.99976 7.2469h1.91406L11.99976 9 9.08618 11.91357h1.91358v3H11V16h2V14h-0.00024Z",italic:"M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z",search:"M15.5 14h-0.79l-0.28 -0.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09 -0.59 4.23 -1.57l0.27 0.28v0.79l5 4.99L20.49 19l-4.99 -5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",lineHeight:"M6.25,7h2.5L5.25,3.5,1.75,7h2.5V17H1.75l3.5,3.5L8.75,17H6.25Zm4-2V7h12V5Zm0,14h12V17h-12Zm0-6h12V11h-12Z",linkStyles:"M19,17.9l0.9,3.6l-3.2-1.9l-3.3,1.9l0.8-3.6L11.3,15h3.8l1.7-3.5l1.4,3.5H22L19,17.9z M20,12c0,0.3-0.1,0.7-0.2,1h2.1  c0.1-0.3,0.1-0.6,0.1-1c0-2.8-2.2-5-5-5h-4v2h4C18.7,9,20,10.3,20,12z M14.8,11H8v2h3.3h2.5L14.8,11z M9.9,16.4L8.5,15H7  c-1.7,0-3-1.3-3-3s1.3-3,3-3h4V7H7c-2.8,0-5,2.2-5,5s2.2,5,5,5h3.5L9.9,16.4z",mention:"M12.4,5c-4.1,0-7.5,3.4-7.5,7.5S8.3,20,12.4,20h3.8v-1.5h-3.8c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6v1.1  c0,0.6-0.5,1.2-1.1,1.2s-1.1-0.6-1.1-1.2v-1.1c0-2.1-1.7-3.8-3.8-3.8s-3.7,1.7-3.7,3.8s1.7,3.8,3.8,3.8c1,0,2-0.4,2.7-1.1  c0.5,0.7,1.3,1.1,2.2,1.1c1.5,0,2.6-1.2,2.6-2.7v-1.1C19.9,8.4,16.6,5,12.4,5z M12.4,14.7c-1.2,0-2.3-1-2.3-2.2s1-2.3,2.3-2.3  s2.3,1,2.3,2.3S13.6,14.7,12.4,14.7z",minimize:"M5,12h14 M19,11H5v2h14V11z",more:"M13.5,17c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S13.5,16.2,13.5,17z M13.5,12c0,0.8-0.7,1.5-1.5,1.5 s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S13.5,11.2,13.5,12z M13.5,7c0,0.8-0.7,1.5-1.5,1.5S10.5,7.8,10.5,7s0.7-1.5,1.5-1.5 S13.5,6.2,13.5,7z",openLink:"M17,17H7V7h3V5H7C6,5,5,6,5,7v10c0,1,1,2,2,2h10c1,0,2-1,2-2v-3h-2V17z M14,5v2h1.6l-5.8,5.8l1.4,1.4L17,8.4V10h2V5H14z",orderedList:"M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z",outdent:"M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z",pageBreaker:"M3,9v6l3-3L3,9z M21,9H8V4h2v3h9V4h2V9z M21,20h-2v-3h-9v3H8v-5h13V20z M11,13H8v-2h3V13z M16,13h-3v-2h3V13z M21,13h-3v-2  h3V13z",paragraphFormat:"M10.15,5A4.11,4.11,0,0,0,6.08,8.18,4,4,0,0,0,10,13v6h2V7h2V19h2V7h2V5ZM8,9a2,2,0,0,1,2-2v4A2,2,0,0,1,8,9Z",paragraphMore:"M7.682,5a4.11,4.11,0,0,0-4.07,3.18,4,4,0,0,0,3.11,4.725h0l.027.005a3.766,3.766,0,0,0,.82.09v6h2V7h2V19h2V7h2V5ZM5.532,9a2,2,0,0,1,2-2v4A2,2,0,0,1,5.532,9Zm14.94,8.491a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,17.491Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,13.491Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,9.491Z",paragraphStyle:"M4,9c0-1.1,0.9-2,2-2v4C4.9,11,4,10.1,4,9z M16.7,20.5l3.2,1.9L19,18.8l3-2.9h-3.7l-1.4-3.5L15.3,16h-3.8l2.9,2.9l-0.9,3.6  L16.7,20.5z M10,17.4V19h1.6L10,17.4z M6.1,5c-1.9,0-3.6,1.3-4,3.2c-0.5,2.1,0.8,4.2,2.9,4.7c0,0,0,0,0,0h0.2C5.5,13,5.8,13,6,13v6  h2V7h2v7h2V7h2V5H6.1z",pdfExport:"M7,3C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7.6L14.4,3H7z M17,19H7V5h6v4h4V19z M16.3,13.5  c-0.2-0.6-1.1-0.8-2.6-0.8c-0.1,0-0.1,0-0.2,0c-0.3-0.3-0.8-0.9-1-1.2c-0.2-0.2-0.3-0.3-0.4-0.6c0.2-0.7,0.2-1,0.3-1.5  c0.1-0.9,0-1.6-0.2-1.8c-0.4-0.2-0.7-0.2-0.9-0.2c-0.1,0-0.3,0.2-0.7,0.7c-0.2,0.7-0.1,1.8,0.6,2.8c-0.2,0.8-0.7,1.6-1,2.4  c-0.8,0.2-1.5,0.7-1.9,1.1c-0.7,0.7-0.9,1.1-0.7,1.6c0,0.3,0.2,0.6,0.7,0.6c0.3-0.1,0.3-0.2,0.7-0.3c0.6-0.3,1.2-1.7,1.7-2.4  c0.8-0.2,1.7-0.3,2-0.3c0.1,0,0.3,0,0.6,0c0.8,0.8,1.2,1.1,1.8,1.2c0.1,0,0.2,0,0.3,0c0.3,0,0.8-0.1,1-0.6  C16.4,14.1,16.4,13.9,16.3,13.5z M8.3,15.7c-0.1,0.1-0.2,0.1-0.2,0.1c0-0.1,0-0.3,0.6-0.8c0.2-0.2,0.6-0.3,0.9-0.7  C9,15,8.6,15.5,8.3,15.7z M11.3,9c0-0.1,0.1-0.2,0.1-0.2S11.6,9,11.5,10c0,0.1,0,0.3-0.1,0.7C11.3,10.1,11,9.5,11.3,9z M10.9,13.1  c0.2-0.6,0.6-1,0.7-1.5c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.2,0.3,0.7,0.7,0.9C12.2,12.8,11.6,13,10.9,13.1z M15.2,14.1  c-0.1,0-0.1,0-0.2,0c-0.2,0-0.7-0.2-1-0.7c1.1,0,1.6,0.2,1.6,0.6C15.5,14.1,15.4,14.1,15.2,14.1z",print:"M16.1,17c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1s-0.4,1-1,1C16.5,18,16.1,17.6,16.1,17z M22,15v4c0,1.1-0.9,2-2,2H4  c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h1V5c0-1.1,0.9-2,2-2h7.4L19,7.6V13h1C21.1,13,22,13.9,22,15z M7,13h10V9h-4V5H7V13z M20,15H4  v4h16V15z",redo:"M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z",removeTable:"M15,10v8H9v-8H15 M14,4H9.9l-1,1H6v2h12V5h-3L14,4z M17,8H7v10c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8z",insertAll:"M 9.25 12 L 6.75 12 C 6.335938 12 6 11.664062 6 11.25 L 6 6 L 3.257812 6 C 2.703125 6 2.425781 5.328125 2.820312 4.933594 L 7.570312 0.179688 C 7.804688 -0.0546875 8.191406 -0.0546875 8.425781 0.179688 L 13.179688 4.933594 C 13.574219 5.328125 13.296875 6 12.742188 6 L 10 6 L 10 11.25 C 10 11.664062 9.664062 12 9.25 12 Z M 16 11.75 L 16 15.25 C 16 15.664062 15.664062 16 15.25 16 L 0.75 16 C 0.335938 16 0 15.664062 0 15.25 L 0 11.75 C 0 11.335938 0.335938 11 0.75 11 L 5 11 L 5 11.25 C 5 12.214844 5.785156 13 6.75 13 L 9.25 13 C 10.214844 13 11 12.214844 11 11.25 L 11 11 L 15.25 11 C 15.664062 11 16 11.335938 16 11.75 Z M 12.125 14.5 C 12.125 14.15625 11.84375 13.875 11.5 13.875 C 11.15625 13.875 10.875 14.15625 10.875 14.5 C 10.875 14.84375 11.15625 15.125 11.5 15.125 C 11.84375 15.125 12.125 14.84375 12.125 14.5 Z M 14.125 14.5 C 14.125 14.15625 13.84375 13.875 13.5 13.875 C 13.15625 13.875 12.875 14.15625 12.875 14.5 C 12.875 14.84375 13.15625 15.125 13.5 15.125 C 13.84375 15.125 14.125 14.84375 14.125 14.5 Z M 14.125 14.5 ",remove:"M15,10v8H9v-8H15 M14,4H9.9l-1,1H6v2h12V5h-3L14,4z M17,8H7v10c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8z",replaceImage:"M16,5v3H4v2h12v3l4-4L16,5z M8,19v-3h12v-2H8v-3l-4,4L8,19z",row:"M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M16,6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16V6.5z M9.5,6.5h5V9h-5V6.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.5  v-2H8V17.5z M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z",selectAll:"M5,7h2V5C5.9,5,5,5.9,5,7z M5,11h2V9H5V11z M9,19h2v-2H9V19z M5,11h2V9H5V11z M15,5h-2v2h2V5z M17,5v2h2C19,5.9,18.1,5,17,5  z M7,19v-2H5C5,18.1,5.9,19,7,19z M5,15h2v-2H5V15z M11,5H9v2h2V5z M13,19h2v-2h-2V19z M17,11h2V9h-2V11z M17,19c1.1,0,2-0.9,2-2h-2  V19z M17,11h2V9h-2V11z M17,15h2v-2h-2V15z M13,19h2v-2h-2V19z M13,7h2V5h-2V7z M9,15h6V9H9V15z M11,11h2v2h-2V11z",smile:"M11.991,3A9,9,0,1,0,21,12,8.99557,8.99557,0,0,0,11.991,3ZM12,19a7,7,0,1,1,7-7A6.99808,6.99808,0,0,1,12,19Zm3.105-5.2h1.503a4.94542,4.94542,0,0,1-9.216,0H8.895a3.57808,3.57808,0,0,0,6.21,0ZM7.5,9.75A1.35,1.35,0,1,1,8.85,11.1,1.35,1.35,0,0,1,7.5,9.75Zm6.3,0a1.35,1.35,0,1,1,1.35,1.35A1.35,1.35,0,0,1,13.8,9.75Z",spellcheck:"M19.1,13.6l-5.6,5.6l-2.7-2.7l-1.4,1.4l4.1,4.1l7-7L19.1,13.6z M10.8,13.7l2.7,2.7l0.8-0.8L10.5,5h-2l-5,14h2l1.4-4h2.6  L10.8,13.7z M9.5,7.8l1.9,5.2H7.6L9.5,7.8z",star:"M12.1,7.7l1,2.5l0.4,0.9h1h2.4l-2.1,2l-0.6,0.6l0.2,0.9l0.6,2.3l-2.2-1.3L12,15.2l-0.8,0.5L9,17l0.5-2.5l0.1-0.8L9,13.1  l-2-2h2.5h0.9l0.4-0.8L12.1,7.7 M12.2,4L9.5,9.6H3.4L8,14.2L6.9,20l5.1-3.1l5.3,3.1l-1.5-5.8l4.8-4.6h-6.1L12.2,4L12.2,4z",strikeThrough:"M3,12.20294H21v1.5H16.63422a3.59782,3.59782,0,0,1,.34942,1.5929,3.252,3.252,0,0,1-1.31427,2.6997A5.55082,5.55082,0,0,1,12.20251,19a6.4421,6.4421,0,0,1-2.62335-.539,4.46335,4.46335,0,0,1-1.89264-1.48816,3.668,3.668,0,0,1-.67016-2.15546V14.704h.28723v-.0011h.34149v.0011H9.02v.11334a2.18275,2.18275,0,0,0,.85413,1.83069,3.69,3.69,0,0,0,2.32836.67926,3.38778,3.38778,0,0,0,2.07666-.5462,1.73346,1.73346,0,0,0,.7013-1.46655,1.69749,1.69749,0,0,0-.647-1.43439,3.00525,3.00525,0,0,0-.27491-.17725H3ZM16.34473,7.05981A4.18163,4.18163,0,0,0,14.6236,5.5462,5.627,5.627,0,0,0,12.11072,5,5.16083,5.16083,0,0,0,8.74719,6.06213,3.36315,3.36315,0,0,0,7.44006,8.76855a3.22923,3.22923,0,0,0,.3216,1.42786h2.59668c-.08338-.05365-.18537-.10577-.25269-.16064a1.60652,1.60652,0,0,1-.65283-1.30036,1.79843,1.79843,0,0,1,.68842-1.5108,3.12971,3.12971,0,0,1,1.96948-.55243,3.04779,3.04779,0,0,1,2.106.6687,2.35066,2.35066,0,0,1,.736,1.83258v.11341h2.00317V9.17346A3.90013,3.90013,0,0,0,16.34473,7.05981Z",subscript:"M10.4,12l3.6,3.6L12.6,17L9,13.4L5.4,17L4,15.6L7.6,12L4,8.4L5.4,7L9,10.6L12.6,7L14,8.4L10.4,12z M18.31234,19.674  l1.06812-1.1465c0.196-0.20141,0.37093-0.40739,0.5368-0.6088c0.15975-0.19418,0.30419-0.40046,0.432-0.617  c0.11969-0.20017,0.21776-0.41249,0.29255-0.6334c0.07103-0.21492,0.10703-0.43986,0.10662-0.66621  c0.00297-0.28137-0.04904-0.56062-0.1531-0.82206c-0.09855-0.24575-0.25264-0.46534-0.45022-0.6416  c-0.20984-0.18355-0.45523-0.32191-0.72089-0.40646c-0.63808-0.19005-1.3198-0.17443-1.94851,0.04465  c-0.28703,0.10845-0.54746,0.2772-0.76372,0.49487c-0.20881,0.20858-0.37069,0.45932-0.47483,0.73548  c-0.10002,0.26648-0.15276,0.54838-0.15585,0.833l-0.00364,0.237H17.617l0.00638-0.22692  c0.00158-0.12667,0.01966-0.25258,0.05377-0.37458c0.03337-0.10708,0.08655-0.20693,0.15679-0.29437  c0.07105-0.08037,0.15959-0.14335,0.25882-0.1841c0.22459-0.08899,0.47371-0.09417,0.7018-0.01458  c0.0822,0.03608,0.15559,0.08957,0.21509,0.15679c0.06076,0.07174,0.10745,0.15429,0.13761,0.24333  c0.03567,0.10824,0.05412,0.22141,0.05469,0.33538c-0.00111,0.08959-0.0118,0.17881-0.0319,0.26612  c-0.02913,0.10428-0.07076,0.20465-0.124,0.29893c-0.07733,0.13621-0.1654,0.26603-0.26338,0.38823  c-0.13438,0.17465-0.27767,0.34226-0.42929,0.50217l-2.15634,2.35315V21H21v-1.326H18.31234z",superscript:"M10.4,12,14,15.6,12.6,17,9,13.4,5.4,17,4,15.6,7.6,12,4,8.4,5.4,7,9,10.6,12.6,7,14,8.4Zm8.91234-3.326,1.06812-1.1465c.196-.20141.37093-.40739.5368-.6088a4.85745,4.85745,0,0,0,.432-.617,3.29,3.29,0,0,0,.29255-.6334,2.11079,2.11079,0,0,0,.10662-.66621,2.16127,2.16127,0,0,0-.1531-.82206,1.7154,1.7154,0,0,0-.45022-.6416,2.03,2.03,0,0,0-.72089-.40646,3.17085,3.17085,0,0,0-1.94851.04465,2.14555,2.14555,0,0,0-.76372.49487,2.07379,2.07379,0,0,0-.47483.73548,2.446,2.446,0,0,0-.15585.833l-.00364.237H18.617L18.62338,5.25a1.45865,1.45865,0,0,1,.05377-.37458.89552.89552,0,0,1,.15679-.29437.70083.70083,0,0,1,.25882-.1841,1.00569,1.00569,0,0,1,.7018-.01458.62014.62014,0,0,1,.21509.15679.74752.74752,0,0,1,.13761.24333,1.08893,1.08893,0,0,1,.05469.33538,1.25556,1.25556,0,0,1-.0319.26612,1.34227,1.34227,0,0,1-.124.29893,2.94367,2.94367,0,0,1-.26338.38823,6.41629,6.41629,0,0,1-.42929.50217L17.19709,8.92642V10H22V8.674Z",symbols:"M15.77493,16.98885a8.21343,8.21343,0,0,0,1.96753-2.57651,7.34824,7.34824,0,0,0,.6034-3.07618A6.09092,6.09092,0,0,0,11.99515,5a6.13347,6.13347,0,0,0-4.585,1.79187,6.417,6.417,0,0,0-1.756,4.69207,6.93955,6.93955,0,0,0,.622,2.97415,8.06587,8.06587,0,0,0,1.949,2.53076H5.41452V19h5.54114v-.04331h-.00147V16.84107a5.82825,5.82825,0,0,1-2.2052-2.2352A6.40513,6.40513,0,0,1,7.97672,11.447,4.68548,4.68548,0,0,1,9.07785,8.19191a3.73232,3.73232,0,0,1,2.9173-1.22462,3.76839,3.76839,0,0,1,2.91241,1.21489,4.482,4.482,0,0,1,1.11572,3.154,6.71141,6.71141,0,0,1-.75384,3.24732,5.83562,5.83562,0,0,1-2.22357,2.25759v2.11562H13.0444V19h5.54108V16.98885Z",tags:"M8.9749 7.47489a1.5 1.5 0 1 1 -1.5 1.5A1.5 1.5 0 0 1 8.9749 7.47489Zm3.78866 -3.12713L16.5362 8.12041l0.33565 0.33564 2.77038 2.77038a2.01988 2.01988 0 0 1 0.59 1.42 1.95518 1.95518 0 0 1 -0.5854 1.40455l0.00044 0.00043 -5.59583 5.59583 -0.00043 -0.00044a1.95518 1.95518 0 0 1 -1.40455 0.5854 1.98762 1.98762 0 0 1 -1.41 -0.58L8.45605 16.87185l-0.33564 -0.33565L4.35777 12.77357a1.99576 1.99576 0 0 1 -0.59 -1.42V9.36358l0 -3.59582a2.00579 2.00579 0 0 1 2 -2l3.59582 0h1.98995A1.98762 1.98762 0 0 1 12.76356 4.34776ZM15.46186 9.866l-0.33564 -0.33564L11.36359 5.76776H5.76776v5.59583L9.866 15.46186l2.7794 2.7794 5.5878 -5.60385 -0.001 -0.001Z",tableHeader:"M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  l0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M14.5,17.5h-5V15h5V17.5z M14.5,13.5h-5v-3h5V13.5z M20.5,17c0,0.3-0.2,0.5-0.4,0.5l0,0  H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9h-4.4H16h-1.5h-5H8H7.9H3.5V7c0-0.3,0.2-0.5,0.4-0.5l0,0h4l0,0h8.2l0,0H20  c0.3,0,0.5,0.2,0.5,0.4l0,0V9z",tableFooter:"M20,19H4a2.006,2.006,0,0,1-2-2V7A2.006,2.006,0,0,1,4,5H20a2.006,2.006,0,0,1,2,2V17A2.006,2.006,0,0,1,20,19ZM8,6.5H4a.458.458,0,0,0-.5.4h0V9H8Zm0,4H3.5v3H8Zm6.5-4h-5V9h5Zm0,4h-5v3h5Zm6-3.5a.458.458,0,0,0-.4-.5H16V9h4.5Zm0,3.5H16v3h4.5Zm0,4.5H3.5v2a.458.458,0,0,0,.4.5H20a.458.458,0,0,0,.5-.4h0Z",tableStyle:"M20.0171,19.89752l.9,3.6-3.2-1.9-3.3,1.9.8-3.6-2.9-2.9h3.8l1.7-3.5,1.4,3.5h3.8ZM20,5H4A2.00591,2.00591,0,0,0,2,7V17a2.00591,2.00591,0,0,0,2,2h7.49115l-.58826-.58826L9.99115,17.5H9.5V14.9975h5.36511L16,12.66089V10.5h4.5v3h-.52783l.599,1.4975H22V7A2.00591,2.00591,0,0,0,20,5ZM3.5,7A.4724.4724,0,0,1,4,6.5H8V9H3.5Zm0,3.5H8v3H3.5Zm.5,7a.4724.4724,0,0,1-.5-.5V15H8v2.5Zm10.5-4h-5v-3h5Zm0-4.5h-5V6.5h5Zm6,0H16V6.5h4a.4724.4724,0,0,1,.5.5Z",textColor:"M15.2,13.494s-3.6,3.9-3.6,6.3a3.65,3.65,0,0,0,7.3.1v-.1C18.9,17.394,15.2,13.494,15.2,13.494Zm-1.47-1.357.669-.724L12.1,5h-2l-5,14h2l1.43-4h2.943A24.426,24.426,0,0,1,13.726,12.137ZM11.1,7.8l1.86,5.2H9.244Z",textMore:"M13.55,19h2l-5-14h-2l-5,14h2l1.4-4h5.1Zm-5.9-6,1.9-5.2,1.9,5.2Zm12.8,4.5a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,17.5Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,13.5Zm0-4A1.5,1.5,0,1,1,18.95,8,1.5,1.5,0,0,1,20.45,9.5Z",underline:"M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z",undo:"M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z",unlink:"M14.4,11l1.6,1.6V11H14.4z M17,7h-4v1.9h4c1.7,0,3.1,1.4,3.1,3.1c0,1.3-0.8,2.4-1.9,2.8l1.4,1.4C21,15.4,22,13.8,22,12  C22,9.2,19.8,7,17,7z M2,4.3l3.1,3.1C3.3,8.1,2,9.9,2,12c0,2.8,2.2,5,5,5h4v-1.9H7c-1.7,0-3.1-1.4-3.1-3.1c0-1.6,1.2-2.9,2.8-3.1  L8.7,11H8v2h2.7l2.3,2.3V17h1.7l4,4l1.4-1.4L3.4,2.9L2,4.3z",unorderedList:"M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z",verticalAlignBottom:"M16,13h-3V3h-2v10H8l4,4L16,13z M3,19v2h18v-2H3z",verticalAlignMiddle:"M3,11v2h18v-2H3z M8,18h3v3h2v-3h3l-4-4L8,18z M16,6h-3V3h-2v3H8l4,4L16,6z",verticalAlignTop:"M8,11h3v10h2V11h3l-4-4L8,11z M21,5V3H3v2H21z",trackChanges:"M17.2 20H12.4599L13.9938 19.2076L14.0305 19.1886L14.0616 19.1612C14.1036 19.1242 14.1373 19.0786 14.1603 19.0275C14.1806 18.9825 14.1923 18.9342 14.1948 18.885H14.2H14.3384L14.4364 18.7874L14.7049 18.52H15.45C15.5747 18.52 15.6942 18.4705 15.7823 18.3823C15.8705 18.2942 15.92 18.1746 15.92 18.05C15.92 17.9253 15.8705 17.8058 15.7823 17.7176C15.7351 17.6704 15.6789 17.6343 15.6177 17.6109L17.33 15.9056V19.87C17.33 19.8871 17.3266 19.904 17.3201 19.9197C17.3136 19.9355 17.304 19.9499 17.2919 19.9619C17.2799 19.974 17.2655 19.9836 17.2497 19.9901C17.234 19.9966 17.2171 20 17.2 20ZM4.13 20H11.2508C11.2396 19.9629 11.2337 19.9242 11.2337 19.885C11.2337 19.8133 11.2533 19.7431 11.29 19.6819L11.2739 19.6734L11.8838 18.52H5C4.87535 18.52 4.7558 18.4705 4.66766 18.3823C4.57952 18.2942 4.53 18.1746 4.53 18.05C4.53 17.9253 4.57952 17.8058 4.66766 17.7176C4.7558 17.6295 4.87535 17.58 5 17.58H12.3809L12.3925 17.5582L12.4187 17.5284C12.4558 17.4864 12.5014 17.4527 12.5525 17.4297C12.5836 17.4156 12.6163 17.4057 12.6498 17.4001C12.6522 17.3065 12.6877 17.2166 12.7503 17.1467L13 17.37C12.9902 17.381 12.9847 17.3952 12.9847 17.41C12.9847 17.4247 12.9902 17.439 13 17.45L14.13 18.55H14.2L19.09 13.68V13.6L17.99 12.5C17.979 12.4902 17.9647 12.4847 17.95 12.4847C17.9352 12.4847 17.921 12.4902 17.91 12.5L13 17.37L12.7641 17.1322L15.1759 14.74H5C4.87535 14.74 4.7558 14.6905 4.66766 14.6023C4.57952 14.5142 4.53 14.3946 4.53 14.27C4.53 14.1453 4.57952 14.0258 4.66766 13.9376C4.7558 13.8495 4.87535 13.8 5 13.8H15.45C15.5747 13.8 15.6942 13.8495 15.7823 13.9376C15.8169 13.9722 15.8454 14.0115 15.8675 14.0541L17.33 12.6034V9.3H13.28C13.207 9.30976 13.133 9.30976 13.06 9.3C12.7697 9.22119 12.5113 9.05343 12.3212 8.82027C12.1311 8.58711 12.0187 8.30026 12 8V4H4.13C4.09552 4 4.06246 4.0137 4.03808 4.03808C4.0137 4.06246 4 4.09552 4 4.13V19.87C4 19.9045 4.0137 19.9375 4.03808 19.9619C4.06246 19.9863 4.09552 20 4.13 20ZM11.7889 20H11.8785C11.8902 19.9746 11.898 19.9475 11.9015 19.9197L11.8661 19.9866L11.8117 19.9578L13.84 18.91C13.8464 18.9044 13.8515 18.8974 13.855 18.8897C13.8585 18.8819 13.8603 18.8735 13.8603 18.865C13.8603 18.8565 13.8585 18.8481 13.855 18.8403C13.8515 18.8325 13.8464 18.8256 13.84 18.82L12.76 17.75C12.7544 17.7436 12.7474 17.7385 12.7397 17.735C12.7319 17.7315 12.7235 17.7297 12.715 17.7297C12.7065 17.7297 12.6981 17.7315 12.6903 17.735C12.6825 17.7385 12.6756 17.7436 12.67 17.75L11.57 19.83L11.5023 19.7942L11.58 19.85C11.5727 19.8602 11.5687 19.8724 11.5687 19.885C11.5687 19.8975 11.5727 19.9098 11.58 19.92L11.67 20H11.73L11.7642 19.9823L11.7889 20ZM13.1 4.65L16.6 8.15C16.6212 8.17232 16.6355 8.20028 16.6412 8.23051C16.6469 8.26075 16.6437 8.29199 16.6321 8.32048C16.6205 8.34898 16.6009 8.37352 16.5757 8.39117C16.5505 8.40882 16.5207 8.41883 16.49 8.42H13.06L12.83 8.19V4.76C12.8312 4.72925 12.8412 4.6995 12.8588 4.67429C12.8765 4.64909 12.901 4.62951 12.9295 4.6179C12.958 4.6063 12.9893 4.60315 13.0195 4.60884C13.0497 4.61453 13.0777 4.62882 13.1 4.65ZM11 6.72C11.0027 6.66089 10.9937 6.60183 10.9735 6.54621C10.9534 6.49058 10.9224 6.43948 10.8825 6.39582C10.8425 6.35216 10.7944 6.31681 10.7408 6.29179C10.6871 6.26677 10.6291 6.25257 10.57 6.25H5C4.88239 6.25773 4.77251 6.3113 4.69397 6.39918C4.61543 6.48707 4.57451 6.60226 4.58 6.72C4.57451 6.83774 4.61543 6.95293 4.69397 7.04082C4.77251 7.12871 4.88239 7.18227 5 7.19H10.6C10.714 7.1774 10.8189 7.12173 10.8933 7.03438C10.9676 6.94702 11.0058 6.83457 11 6.72ZM11.1 8.14001H5C4.87535 8.14001 4.7558 8.18953 4.66766 8.27767C4.57952 8.36582 4.53 8.48536 4.53 8.61001C4.53 8.73467 4.57952 8.85421 4.66766 8.94236C4.7558 9.0305 4.87535 9.08001 5 9.08001H11.1C11.2247 9.08001 11.3442 9.0305 11.4323 8.94236C11.5205 8.85421 11.57 8.73467 11.57 8.61001C11.57 8.48536 11.5205 8.36582 11.4323 8.27767C11.3442 8.18953 11.2247 8.14001 11.1 8.14001ZM5 11H15.45C15.5826 11 15.7098 10.9473 15.8036 10.8536C15.8973 10.7598 15.95 10.6326 15.95 10.5C15.95 10.3674 15.8973 10.2402 15.8036 10.1464C15.7098 10.0527 15.5826 10 15.45 10H5C4.86739 10 4.74021 10.0527 4.64645 10.1464C4.55268 10.2402 4.5 10.3674 4.5 10.5C4.5 10.6326 4.55268 10.7598 4.64645 10.8536C4.74021 10.9473 4.86739 11 5 11ZM5 12.86H11.1C11.2211 12.8523 11.3346 12.798 11.4166 12.7085C11.4986 12.6191 11.5428 12.5013 11.54 12.38C11.5427 12.2597 11.4982 12.1431 11.4159 12.0552C11.3337 11.9673 11.2202 11.9152 11.1 11.91H5C4.94089 11.9126 4.88286 11.9268 4.82924 11.9518C4.77562 11.9768 4.72746 12.0122 4.68752 12.0558C4.64758 12.0995 4.61664 12.1506 4.59648 12.2062C4.57631 12.2618 4.56731 12.3209 4.57 12.38C4.56451 12.5004 4.60649 12.6181 4.6869 12.7079C4.76731 12.7976 4.87974 12.8523 5 12.86ZM11.1 16.63H5C4.87535 16.63 4.7558 16.5805 4.66766 16.4923C4.57952 16.4042 4.53 16.2846 4.53 16.16C4.53 16.0353 4.57952 15.9158 4.66766 15.8276C4.7558 15.7395 4.87535 15.69 5 15.69H11.1C11.2247 15.69 11.3442 15.7395 11.4323 15.8276C11.5205 15.9158 11.57 16.0353 11.57 16.16C11.57 16.2846 11.5205 16.4042 11.4323 16.4923C11.3442 16.5805 11.2247 16.63 11.1 16.63ZM18.8503 11.592C18.7991 11.6175 18.7545 11.6544 18.72 11.7L18.26 12.14C18.2501 12.151 18.2447 12.1652 18.2447 12.18C18.2447 12.1947 18.2501 12.209 18.26 12.22L19.37 13.32C19.381 13.3298 19.3952 13.3353 19.41 13.3353C19.4247 13.3353 19.439 13.3298 19.45 13.32L19.86 12.91C19.9057 12.867 19.9421 12.8151 19.967 12.7575C19.9919 12.6998 20.0047 12.6377 20.0047 12.575C20.0047 12.5122 19.9919 12.4501 19.967 12.3925C19.9421 12.3349 19.9057 12.283 19.86 12.24L19.31 11.7C19.2755 11.6544 19.2309 11.6175 19.1797 11.592C19.1285 11.5666 19.0721 11.5533 19.015 11.5533C18.9578 11.5533 18.9014 11.5666 18.8503 11.592Z",showTrackChanges:"M17.2421 13.6048C17.2631 13.6136 17.2841 13.6226 17.305 13.6317V9.29505H13.2626C13.1897 9.30481 13.1159 9.30481 13.043 9.29505C12.7532 9.21632 12.4953 9.04872 12.3056 8.81577C12.1158 8.58283 12.0037 8.29625 11.985 7.99627V4H4.12976C4.09534 4 4.06234 4.01368 4.038 4.03804C4.01367 4.0624 4 4.09543 4 4.12988V19.8552C4 19.8896 4.01367 19.9227 4.038 19.947C4.06234 19.9714 4.09534 19.9851 4.12976 19.9851H13.4875C13.0501 19.8216 12.6281 19.6155 12.2277 19.3686C11.8529 19.1551 11.4911 18.9196 11.1442 18.6632C11.0697 18.6152 10.9982 18.5628 10.9302 18.5065H4.99812C4.87371 18.5065 4.75438 18.457 4.66641 18.3689C4.57843 18.2809 4.529 18.1614 4.529 18.0369C4.529 17.9124 4.57843 17.7929 4.66641 17.7049C4.75438 17.6168 4.87371 17.5673 4.99812 17.5673H10.4396C10.4472 17.4488 10.4756 17.3324 10.5235 17.2235C10.5939 17.017 10.6761 16.8149 10.7694 16.6182H4.99812C4.87371 16.6182 4.75438 16.5687 4.66641 16.4807C4.57843 16.3926 4.529 16.2732 4.529 16.1487C4.529 16.0241 4.57843 15.9047 4.66641 15.8166C4.75438 15.7286 4.87371 15.6791 4.99812 15.6791H11.0867C11.1576 15.6791 11.2268 15.6952 11.2895 15.7253C11.5204 15.361 11.7938 15.027 12.1033 14.73H4.99812C4.87371 14.73 4.75438 14.6805 4.66641 14.5924C4.57843 14.5044 4.529 14.385 4.529 14.2604C4.529 14.1359 4.57843 14.0164 4.66641 13.9284C4.75438 13.8403 4.87371 13.7909 4.99812 13.7909H13.4434C13.9833 13.525 14.5656 13.3516 15.166 13.2795L15.1923 13.2763H15.2189H15.4925C16.0923 13.2609 16.6886 13.3728 17.2421 13.6048ZM13.0829 4.64939L16.5764 8.14613C16.5975 8.16843 16.6118 8.19636 16.6174 8.22657C16.6231 8.25677 16.62 8.28798 16.6084 8.31645C16.5968 8.34492 16.5773 8.36944 16.5521 8.38707C16.527 8.40471 16.4973 8.41471 16.4666 8.41587H13.043L12.8134 8.18609V4.75929C12.8146 4.72857 12.8246 4.69884 12.8422 4.67366C12.8598 4.64849 12.8843 4.62893 12.9128 4.61733C12.9412 4.60573 12.9724 4.60259 13.0026 4.60827C13.0328 4.61396 13.0607 4.62824 13.0829 4.64939ZM10.9869 6.71746C10.9896 6.65841 10.9806 6.59941 10.9604 6.54383C10.9403 6.48825 10.9094 6.4372 10.8696 6.39358C10.8297 6.34997 10.7816 6.31465 10.7281 6.28965C10.6746 6.26466 10.6167 6.25047 10.5577 6.2479H4.99813C4.88074 6.25562 4.77106 6.30914 4.69267 6.39694C4.61428 6.48475 4.57343 6.59983 4.57891 6.71746C4.57343 6.83509 4.61428 6.95017 4.69267 7.03798C4.77106 7.12579 4.88074 7.1793 4.99813 7.18702H10.5876C10.7014 7.17444 10.8061 7.11882 10.8803 7.03154C10.9545 6.94427 10.9927 6.83192 10.9869 6.71746ZM11.0867 8.13614H4.99812C4.87371 8.13614 4.75438 8.18561 4.66641 8.27367C4.57843 8.36173 4.529 8.48116 4.529 8.6057C4.529 8.73023 4.57843 8.84967 4.66641 8.93773C4.75438 9.02579 4.87371 9.07526 4.99812 9.07526H11.0867C11.2111 9.07526 11.3304 9.02579 11.4184 8.93773C11.5064 8.84967 11.5558 8.73023 11.5558 8.6057C11.5558 8.48116 11.5064 8.36173 11.4184 8.27367C11.3304 8.18561 11.2111 8.13614 11.0867 8.13614ZM4.99812 10.9935H15.4285C15.5609 10.9935 15.6878 10.9408 15.7814 10.8472C15.875 10.7535 15.9276 10.6264 15.9276 10.4939C15.9276 10.3614 15.875 10.2344 15.7814 10.1407C15.6878 10.047 15.5609 9.9944 15.4285 9.9944H4.99812C4.86576 9.9944 4.73883 10.047 4.64523 10.1407C4.55164 10.2344 4.49906 10.3614 4.49906 10.4939C4.49906 10.6264 4.55164 10.7535 4.64523 10.8472C4.73883 10.9408 4.86576 10.9935 4.99812 10.9935ZM4.99812 12.8517H11.0867C11.2076 12.844 11.3208 12.7898 11.4027 12.7004C11.4845 12.611 11.5287 12.4934 11.5259 12.3722C11.5286 12.252 11.4841 12.1355 11.402 12.0477C11.3199 11.9599 11.2067 11.9078 11.0867 11.9026H4.99812C4.93912 11.9052 4.8812 11.9194 4.82769 11.9444C4.77417 11.9694 4.7261 12.0047 4.68623 12.0483C4.64637 12.0919 4.61549 12.143 4.59536 12.1985C4.57523 12.2541 4.56625 12.3131 4.56893 12.3722C4.56345 12.4925 4.60535 12.6101 4.68561 12.6998C4.76587 12.7894 4.87809 12.844 4.99812 12.8517ZM19.97 17.4974C19.5787 16.5636 19.0431 15.6971 18.383 14.9298C18.0152 14.5351 17.5679 14.2233 17.0706 14.0148C16.5732 13.8064 16.0373 13.7062 15.4984 13.7209H15.2189C14.4787 13.8098 13.7684 14.0666 13.1423 14.4717C12.5162 14.8769 11.9906 15.4196 11.6057 16.0587C11.3211 16.4677 11.0959 16.9151 10.937 17.3875C10.9006 17.464 10.8817 17.5476 10.8817 17.6323C10.8817 17.717 10.9006 17.8006 10.937 17.877C11.0642 18.0428 11.2196 18.1849 11.3961 18.2967C11.7346 18.5476 12.0879 18.7778 12.4541 18.986C13.4096 19.5767 14.497 19.92 15.6182 19.9851C16.4392 20.0504 17.2632 19.9005 18.0088 19.5501C18.7544 19.1998 19.3959 18.661 19.8702 17.9869C19.9311 17.923 19.9729 17.8432 19.9905 17.7566C20.0082 17.67 20.0011 17.5801 19.97 17.4974ZM15.9775 19.1758C14.3849 19.068 12.8507 18.5331 11.5358 17.6273C11.5788 17.5678 11.6255 17.5111 11.6756 17.4574C12.3061 16.569 13.1295 15.8359 14.0832 15.3126C13.8003 15.7406 13.6785 16.2566 13.7417 16.7681C13.7676 17.0339 13.8465 17.2918 13.9737 17.5265C14.1009 17.7613 14.2739 17.9681 14.4823 18.1348C14.6907 18.3016 14.9304 18.4248 15.1872 18.4972C15.4441 18.5696 15.7128 18.5897 15.9775 18.5564C16.305 18.4971 16.6137 18.3609 16.8785 18.159C17.1432 17.9572 17.3564 17.6954 17.5005 17.3951C17.6446 17.0949 17.7156 16.7647 17.7077 16.4317C17.6997 16.0987 17.613 15.7723 17.4547 15.4793C17.2614 15.3391 17.0533 15.2235 16.8351 15.1339C17.0715 15.226 17.2966 15.3485 17.5046 15.4993C18.0049 15.8976 18.4424 16.3691 18.8022 16.898L18.8927 17.0137L18.8927 17.0137C19.0823 17.2564 19.2729 17.5004 19.4709 17.7072C18.5404 18.6311 17.288 19.1576 15.9775 19.1758ZM16.3168 15.769C16.2085 15.8106 16.1171 15.8873 16.0574 15.9869C15.9977 16.0865 15.9731 16.2032 15.9875 16.3185C15.9949 16.3856 16.0156 16.4505 16.0483 16.5096C16.081 16.5686 16.1251 16.6206 16.178 16.6624C16.2309 16.7042 16.2916 16.7351 16.3566 16.7532C16.4216 16.7714 16.4895 16.7764 16.5564 16.7681H16.6063C16.5618 16.9495 16.4637 17.1132 16.3248 17.238C16.186 17.3627 16.0127 17.4427 15.8278 17.4674H15.6481C15.4335 17.4396 15.2337 17.3427 15.0789 17.1913C14.924 17.04 14.8226 16.8423 14.7897 16.6282C14.7628 16.3782 14.8311 16.1271 14.981 15.9253C15.1305 15.7238 15.3504 15.5861 15.5968 15.5395C15.3446 15.5862 15.12 15.7284 14.9697 15.9364C14.8191 16.1448 14.7547 16.4034 14.7897 16.6582C14.8226 16.8723 14.924 17.0699 15.0789 17.2213C15.2337 17.3727 15.4335 17.4696 15.6481 17.4974H15.8377C16.0209 17.4708 16.1919 17.39 16.3289 17.2654C16.4658 17.1408 16.5625 16.978 16.6063 16.7981C16.7293 16.7633 16.8359 16.686 16.9072 16.5799C16.9785 16.4737 17.0098 16.3457 16.9956 16.2186C16.9882 16.1515 16.9675 16.0865 16.9348 16.0275C16.9021 15.9685 16.858 15.9165 16.805 15.8747C16.7521 15.8329 16.6914 15.802 16.6264 15.7838C16.5615 15.7657 16.4936 15.7607 16.4266 15.769H16.3168Z",acceptAllChanges:"M9.36499 16.7348C9.38499 16.7547 9.41212 16.7659 9.44041 16.7659H10.9881C10.9028 16.6008 10.9289 16.3933 11.0663 16.2541L11.7266 15.585H10.1444C10.0549 15.5701 9.97363 15.5238 9.91498 15.4547C9.85639 15.3856 9.82422 15.298 9.82422 15.2074C9.82422 15.1169 9.85639 15.0292 9.91498 14.9601C9.97363 14.891 10.0549 14.8448 10.1444 14.8298H12.4879C12.5584 14.785 12.6407 14.7607 12.7257 14.7607C12.8106 14.7607 12.893 14.785 12.9635 14.8298H16.5295L18.3303 13.0091C18.4135 12.925 18.5271 12.8776 18.6456 12.8777C18.7642 12.8777 18.8777 12.9252 18.9609 13.0094L20 14.0621V8.25532H16.8001C16.7301 8.27288 16.6568 8.27288 16.5868 8.25532C16.3485 8.1935 16.1367 8.0565 15.9829 7.86478C15.8292 7.67306 15.7416 7.43688 15.7335 7.19149V4H9.44041C9.41293 4.0024 9.38718 4.01437 9.36767 4.03383C9.34816 4.05329 9.33615 4.07897 9.33375 4.10638V16.6596C9.33375 16.6878 9.34499 16.7148 9.36499 16.7348ZM10.0744 17.2979H11.4803L12.259 18.0957H5.06727C5.01734 18.0957 4.96838 18.1057 4.9232 18.1246C4.8788 18.1431 4.83798 18.1702 4.80335 18.2048C4.7333 18.2746 4.69398 18.3693 4.69398 18.468C4.69398 18.5668 4.7333 18.6615 4.80335 18.7313C4.87333 18.8011 4.96832 18.8404 5.06727 18.8404H12.9857L13.7947 19.6693L14.0836 19.9574H4.10733C4.09291 19.9591 4.07829 19.9576 4.06457 19.9528C4.05085 19.9481 4.03838 19.9403 4.02812 19.9301C4.01785 19.9198 4.01004 19.9074 4.00529 19.8937C4.00054 19.88 3.99896 19.8654 4.00067 19.8511V7.29787C4.00067 7.26966 4.01191 7.2426 4.03191 7.22265C4.05192 7.2027 4.07905 7.19149 4.10733 7.19149H8.70447V9.05319H5.06727C4.97294 9.05867 4.88453 9.10069 4.8208 9.17019C4.757 9.23973 4.72302 9.33135 4.72594 9.42553C4.72289 9.52082 4.75654 9.61364 4.82002 9.6849C4.88356 9.75613 4.97203 9.80038 5.06727 9.8085H8.70447V10.5638H5.06727C5.01968 10.5652 4.97274 10.5759 4.92932 10.5954C4.88583 10.6148 4.84664 10.6426 4.8139 10.6772C4.78122 10.7118 4.7557 10.7525 4.73877 10.7969C4.72184 10.8413 4.7139 10.8887 4.71527 10.9361C4.7139 10.9837 4.72184 11.031 4.73877 11.0754C4.74424 11.0897 4.75055 11.1037 4.75778 11.1171C4.76162 11.1243 4.76566 11.1313 4.76995 11.1382C4.78265 11.1585 4.79736 11.1776 4.8139 11.1951C4.84664 11.2297 4.88583 11.2575 4.92932 11.2769C4.95491 11.2884 4.98173 11.2968 5.0092 11.3021C5.02834 11.3058 5.04774 11.3079 5.06727 11.3085H8.70447V12.0638H5.06734C4.97782 12.0789 4.89651 12.1251 4.83792 12.1942C4.77926 12.2633 4.7471 12.351 4.7471 12.4415C4.7471 12.5321 4.77926 12.6197 4.83792 12.6888C4.89651 12.758 4.97782 12.8041 5.06734 12.8192H8.70447V13.5745H5.06734C4.97782 13.5895 4.89651 13.6357 4.83792 13.7048C4.81383 13.7332 4.79424 13.7647 4.77946 13.7983C4.7583 13.8465 4.7471 13.8988 4.7471 13.9522C4.7471 14.0427 4.77926 14.1303 4.83792 14.1994C4.89651 14.2686 4.97782 14.3147 5.06734 14.3298H8.70447V15.0744H5.06727C4.97776 15.0895 4.89651 15.1357 4.83785 15.2048C4.77926 15.2739 4.7471 15.3616 4.7471 15.4521C4.7471 15.5043 4.75778 15.5556 4.77809 15.6029C4.793 15.6376 4.81305 15.6701 4.83785 15.6994C4.89651 15.7685 4.97776 15.8147 5.06727 15.8298H8.70447V16.5851H5.06727C4.97776 16.6001 4.89651 16.6463 4.83785 16.7154C4.79489 16.7661 4.76618 16.8267 4.75387 16.8912C4.74938 16.9146 4.7471 16.9386 4.7471 16.9628C4.7471 17.0533 4.77926 17.1409 4.83785 17.21C4.89651 17.2792 4.97776 17.3253 5.06727 17.3404H9.95241C9.99552 17.3331 10.0367 17.3187 10.0744 17.2979ZM20 15.3204L18.5709 16.7659H19.8933C19.9216 16.7659 19.9487 16.7547 19.9687 16.7348C19.9887 16.7148 20 16.6878 20 16.6596V15.3204ZM14.7526 16.6264L13.7248 15.585H15.7825L14.7526 16.6264ZM14.9498 6.08721C14.9465 6.06854 14.9416 6.05023 14.9353 6.03244C14.9202 5.98939 14.897 5.94929 14.8665 5.91442C14.8145 5.85488 14.7444 5.81394 14.6669 5.79787H10.1337C10.0348 5.79787 9.93978 5.83709 9.8698 5.90693C9.79975 5.97676 9.76043 6.07146 9.76043 6.17022C9.76043 6.19463 9.76283 6.21879 9.76752 6.24239C9.77462 6.2782 9.78692 6.31268 9.80398 6.34479C9.82123 6.37716 9.8433 6.40709 9.8698 6.43348C9.93978 6.50332 10.0348 6.54257 10.1337 6.54257H14.6669C14.6811 6.54023 14.6951 6.53702 14.7088 6.53299C14.7206 6.52955 14.7322 6.52549 14.7436 6.52082C14.7624 6.51309 14.7806 6.50371 14.7979 6.4928C14.8378 6.46764 14.8722 6.43468 14.8991 6.39599C14.9259 6.35729 14.9447 6.31359 14.9543 6.26749C14.9554 6.26232 14.9563 6.25716 14.9571 6.25197C14.9579 6.24739 14.9586 6.24281 14.9591 6.23824C14.9612 6.22129 14.962 6.20424 14.9616 6.18723C14.961 6.16727 14.9588 6.14733 14.9549 6.12766C14.9539 6.11406 14.9523 6.10055 14.9498 6.08721ZM15.0189 7.29788H10.1445C10.0549 7.31291 9.97363 7.35911 9.91504 7.42823C9.85639 7.49738 9.82422 7.585 9.82422 7.67555C9.82422 7.76609 9.85639 7.85369 9.91504 7.92284C9.97363 7.99196 10.0549 8.03815 10.1445 8.05319H15.0189C15.0321 8.05241 15.0451 8.05095 15.058 8.04877C15.0745 8.04601 15.0906 8.04212 15.1064 8.03718C15.1669 8.01822 15.2219 7.98361 15.2654 7.93618C15.3291 7.86664 15.3632 7.77502 15.3602 7.68084C15.3606 7.67392 15.3608 7.66701 15.3608 7.66009C15.3609 7.65087 15.3606 7.64165 15.3599 7.63247C15.3592 7.62263 15.358 7.61279 15.3565 7.60302C15.3532 7.58188 15.3479 7.56104 15.3409 7.54072C15.3254 7.49575 15.301 7.45426 15.2693 7.41868C15.2492 7.39621 15.2265 7.37638 15.2017 7.35959C15.1872 7.34979 15.172 7.34102 15.1562 7.33339C15.1132 7.31265 15.0665 7.3006 15.0189 7.29788ZM10.1445 9.56381H18.496C18.5856 9.54877 18.6669 9.50258 18.7255 9.43346C18.7841 9.3643 18.8163 9.27671 18.8163 9.18617C18.8163 9.09562 18.7841 9.008 18.7255 8.93884C18.6669 8.86973 18.5856 8.82353 18.496 8.8085H10.1445C10.0549 8.82353 9.97363 8.86973 9.91504 8.93884C9.85639 9.008 9.82422 9.09562 9.82422 9.18617C9.82422 9.24412 9.83738 9.30087 9.86224 9.35236C9.87624 9.38132 9.89395 9.40859 9.91504 9.43346C9.97363 9.50258 10.0549 9.54877 10.1445 9.56381ZM10.1445 11.0638H15.0189C15.1084 11.0488 15.1897 11.0026 15.2483 10.9335C15.2854 10.8898 15.3118 10.8387 15.3263 10.7842C15.3347 10.7525 15.3391 10.7195 15.3391 10.6861C15.3391 10.5956 15.3069 10.508 15.2483 10.4389C15.1897 10.3697 15.1084 10.3235 15.0189 10.3085H10.1445C10.0549 10.3235 9.97363 10.3697 9.91504 10.4389C9.85639 10.508 9.82422 10.5956 9.82422 10.6861C9.82422 10.7424 9.83666 10.7976 9.8601 10.8478C9.87442 10.8785 9.89284 10.9073 9.91504 10.9335C9.97363 11.0026 10.0549 11.0488 10.1445 11.0638ZM18.496 12.5745H10.1444C10.0549 12.5594 9.97363 12.5132 9.91498 12.4441C9.85639 12.3749 9.82422 12.2873 9.82422 12.1968C9.82422 12.1062 9.85639 12.0186 9.91498 11.9495C9.97363 11.8803 10.0549 11.8342 10.1444 11.8191H18.496C18.5856 11.8342 18.6669 11.8803 18.7255 11.9495C18.7841 12.0186 18.8163 12.1062 18.8163 12.1968C18.8163 12.2873 18.7841 12.3749 18.7255 12.4441C18.6971 12.4776 18.6633 12.5058 18.6259 12.5276C18.5861 12.5507 18.5421 12.5667 18.496 12.5745ZM15.0189 14.0744H10.1444C10.0968 14.0731 10.0499 14.0624 10.0064 14.0429C9.96296 14.0234 9.92376 13.9956 9.89102 13.961C9.85834 13.9265 9.83282 13.8857 9.81589 13.8413C9.79897 13.7969 9.79102 13.7496 9.79239 13.7021C9.79102 13.6546 9.79897 13.6073 9.81589 13.5628C9.83282 13.5184 9.85834 13.4778 9.89102 13.4432C9.92376 13.4086 9.96296 13.3808 10.0064 13.3613C10.0499 13.3419 10.0968 13.3311 10.1444 13.3297H15.0189C15.0661 13.3311 15.1125 13.3419 15.1554 13.3615C15.1983 13.381 15.2368 13.4091 15.2686 13.4438C15.3005 13.4785 15.325 13.5193 15.3407 13.5637C15.3564 13.608 15.363 13.6551 15.3602 13.7021C15.3631 13.7963 15.3291 13.8879 15.2653 13.9574C15.2016 14.027 15.1132 14.0689 15.0189 14.0744ZM16.6188 4.52128L19.4133 7.30852C19.4293 7.32624 19.4401 7.34808 19.4443 7.37157C19.4485 7.39506 19.446 7.41925 19.4371 7.4414C19.4282 7.46356 19.4133 7.48278 19.394 7.4969C19.3747 7.51102 19.3518 7.51947 19.328 7.52128H16.5868L16.4054 7.34043V4.60639C16.4073 4.5826 16.4157 4.55979 16.4299 4.54056C16.444 4.52133 16.4633 4.50644 16.4855 4.49757C16.5077 4.48871 16.532 4.48624 16.5556 4.49043C16.5791 4.49462 16.601 4.50531 16.6188 4.52128ZM18.6454 13.3192L20 14.6915L14.7522 20L14.7416 19.9894L14.1123 19.3617L13.3976 18.6277L11.3817 16.5638L12.7257 15.2021L14.7522 17.2553L18.6454 13.3192Z",rejectAllChanges:"M9.54637 16.5847H8.96997V15.8295H12.786C12.8024 15.8265 12.8186 15.8223 12.8343 15.817C12.8535 15.8105 12.8719 15.8023 12.8897 15.7926C12.9315 15.7697 12.969 15.738 12.9997 15.6991C13.0268 15.6649 13.0478 15.6261 13.0621 15.5847H13.571V16.7656H9.79386C9.78396 16.7479 9.77269 16.731 9.76011 16.7151C9.70552 16.6459 9.62976 16.5998 9.54637 16.5847ZM13.4717 12.9573V13.3295H9.72523C9.6809 13.3309 9.63716 13.3416 9.59671 13.361C9.57578 13.3711 9.55595 13.3834 9.53745 13.3977C9.5201 13.411 9.50391 13.4262 9.48917 13.4429C9.45872 13.4775 9.43494 13.5182 9.41917 13.5626C9.41778 13.5664 9.41644 13.5703 9.41523 13.5742H8.96997V12.8189H12.786C12.8694 12.8039 12.9452 12.7577 12.9997 12.6886C13.0078 12.6784 13.0153 12.6677 13.0223 12.6568L13.029 12.6458L13.033 12.6389L13.0397 12.6266C13.0452 12.6157 13.0503 12.6046 13.055 12.5931C13.0576 12.5869 13.0599 12.5806 13.0621 12.5742H13.6872C13.6453 12.5965 13.607 12.6269 13.5746 12.6644C13.5059 12.7439 13.469 12.849 13.4717 12.9573ZM9.82598 14.0742H13.4758C13.4809 14.0932 13.4904 14.1108 13.5037 14.1251C13.5242 14.147 13.552 14.1593 13.581 14.1593H13.6008L13.571 14.1912V14.8295H9.72523C9.64183 14.8445 9.56614 14.8907 9.51149 14.9598C9.4845 14.994 9.46351 15.0328 9.4492 15.0741H8.96997V14.3295H9.54637C9.62976 14.3145 9.70552 14.2683 9.76011 14.1992C9.78947 14.162 9.81166 14.1195 9.82598 14.0742ZM18.9075 8.2552V12.5317H17.7846V12.323C17.7978 12.2827 17.8047 12.2399 17.8047 12.1965C17.8047 12.106 17.7747 12.0184 17.7201 11.9493C17.6655 11.8801 17.5897 11.834 17.5063 11.8189H9.72523C9.64183 11.834 9.56614 11.8801 9.51149 11.9493C9.48444 11.9835 9.46351 12.0222 9.4492 12.0636H8.96997V11.3083H9.54637C9.63425 11.3028 9.71662 11.2608 9.776 11.1913C9.80687 11.1551 9.83029 11.113 9.84527 11.0676L9.84654 11.0637H14.2667C14.3501 11.0486 14.4258 11.0024 14.4805 10.9333C14.5231 10.8794 14.5507 10.8142 14.5607 10.7452C14.5636 10.7258 14.565 10.706 14.565 10.686C14.565 10.6658 14.5635 10.6458 14.5606 10.626C14.5572 10.6026 14.5516 10.5796 14.5442 10.5573C14.5299 10.5144 14.5084 10.4741 14.4805 10.4387C14.4258 10.3696 14.3501 10.3234 14.2667 10.3083H9.72529C9.6832 10.3159 9.64299 10.3314 9.60653 10.3538C9.57081 10.3759 9.5386 10.4045 9.51155 10.4387C9.49639 10.4579 9.4831 10.4785 9.47182 10.5002C9.46133 10.5205 9.45259 10.5417 9.44568 10.5636H8.96997V9.80838H9.16873C9.25656 9.80286 9.33899 9.76085 9.39837 9.69131C9.45775 9.62177 9.48947 9.53022 9.48674 9.43601C9.48711 9.42951 9.48735 9.42302 9.48741 9.41653C9.48741 9.41049 9.48729 9.40445 9.48705 9.39848C9.49457 9.41055 9.50269 9.42218 9.51155 9.43334C9.56614 9.50249 9.64189 9.54866 9.72529 9.56372H17.5063C17.5897 9.54866 17.6655 9.50249 17.7201 9.43334C17.7747 9.36419 17.8047 9.2766 17.8047 9.18603C17.8047 9.09552 17.7747 9.00786 17.7201 8.93878C17.6655 8.86963 17.5897 8.82346 17.5063 8.8084H9.72529C9.64189 8.82346 9.56614 8.86963 9.51155 8.93878C9.4569 9.00786 9.42694 9.09552 9.42694 9.18603L9.427 9.19707L9.42754 9.20875C9.41972 9.19661 9.41123 9.18499 9.40201 9.17389C9.38478 9.15311 9.36537 9.1346 9.34427 9.11863C9.33735 9.11344 9.33026 9.1085 9.32298 9.10383C9.31855 9.10097 9.31406 9.09824 9.30951 9.09565L9.30424 9.09266L9.29659 9.08857C9.28792 9.08402 9.27906 9.07993 9.27009 9.07623C9.2616 9.07279 9.25298 9.06974 9.24431 9.06701C9.21974 9.05935 9.19439 9.05461 9.16873 9.05305H8.96997V4.10638C8.97221 4.07897 8.9834 4.05328 9.00157 4.03383C9.01975 4.01437 9.04374 4.0024 9.06935 4H14.9325V7.1914C14.9401 7.43679 15.0216 7.67296 15.1649 7.86468C15.3082 8.0564 15.5055 8.19338 15.7275 8.2552C15.7927 8.27277 15.861 8.27277 15.9262 8.2552H18.9075ZM13.571 17.2975V19.4251L13.5722 19.4615C13.5835 19.6376 13.6323 19.8068 13.7133 19.957H4.10061C4.08718 19.9587 4.07355 19.9571 4.06077 19.9524C4.04799 19.9477 4.03637 19.9399 4.02681 19.9296C4.01724 19.9194 4.00997 19.907 4.00554 19.8933C4.00111 19.8796 3.99964 19.865 4.00124 19.8506V7.29778C4.00124 7.26957 4.01171 7.24251 4.03034 7.22256C4.04898 7.20261 4.07426 7.1914 4.10061 7.1914H8.38368V9.05305H4.99497C4.90708 9.05857 4.82471 9.10052 4.76533 9.17006C4.70589 9.2396 4.67423 9.33121 4.67696 9.42536C4.67411 9.52067 4.70547 9.61346 4.76461 9.68475C4.8238 9.75598 4.90623 9.80026 4.99497 9.80838H8.38368V10.5636H4.99497C4.96682 10.5645 4.93898 10.5692 4.91199 10.5774C4.89647 10.5821 4.88124 10.588 4.86644 10.5952C4.8494 10.6034 4.83308 10.613 4.81762 10.6241C4.79627 10.6393 4.77655 10.657 4.7589 10.6771C4.72846 10.7116 4.70468 10.7523 4.68891 10.7967C4.67314 10.8411 4.66574 10.8885 4.66701 10.9359C4.66641 10.9597 4.66792 10.9834 4.67156 11.0067C4.6752 11.03 4.68102 11.053 4.68891 11.0752C4.70468 11.1196 4.72846 11.1603 4.7589 11.1949C4.7731 11.211 4.78862 11.2256 4.80524 11.2386C4.81452 11.2459 4.82417 11.2527 4.83417 11.259C4.84461 11.2655 4.85534 11.2714 4.86644 11.2767C4.9069 11.2962 4.95063 11.3069 4.99497 11.3083H8.38368V12.0636H4.99503C4.91163 12.0787 4.83587 12.1249 4.78128 12.194C4.7526 12.2303 4.7307 12.2717 4.71639 12.3159C4.70347 12.3559 4.69667 12.3983 4.69667 12.4413C4.69667 12.5318 4.72664 12.6194 4.78128 12.6886C4.809 12.7237 4.84218 12.7529 4.87906 12.7751C4.89416 12.7842 4.90993 12.7921 4.92619 12.7988C4.94833 12.8079 4.97137 12.8147 4.99503 12.8189H8.38368V13.5742H4.99503C4.95275 13.5819 4.91242 13.5975 4.87584 13.62C4.8403 13.642 4.80822 13.6705 4.78128 13.7046C4.72664 13.7737 4.69667 13.8613 4.69667 13.9519C4.69667 14.0424 4.72664 14.13 4.78128 14.1992C4.83587 14.2683 4.91163 14.3145 4.99503 14.3295H8.38368V15.0741H4.99497C4.94644 15.0829 4.90047 15.1022 4.85977 15.1304C4.83878 15.145 4.81919 15.162 4.80136 15.1811C4.79439 15.1885 4.78765 15.1964 4.78122 15.2045C4.77188 15.2163 4.76327 15.2287 4.75539 15.2416C4.74441 15.2594 4.73495 15.2781 4.727 15.2975C4.71924 15.3163 4.71293 15.3358 4.70808 15.3558C4.70407 15.3723 4.7011 15.389 4.69922 15.4061C4.69752 15.4212 4.69667 15.4364 4.69667 15.4518C4.69667 15.5423 4.72664 15.6299 4.78122 15.6991C4.83587 15.7682 4.91157 15.8144 4.99497 15.8295H8.38368V16.5847H4.99497C4.91157 16.5998 4.83587 16.6459 4.78122 16.7151C4.72664 16.7842 4.69667 16.8718 4.69667 16.9624C4.69667 17.0529 4.72664 17.1405 4.78122 17.2097C4.83587 17.2788 4.91157 17.325 4.99497 17.34H9.54637C9.58655 17.3328 9.62496 17.3183 9.66008 17.2975H13.571ZM15.7573 4.52124L18.3609 7.30839C18.3758 7.32612 18.3858 7.34796 18.3897 7.37145C18.3937 7.39493 18.3914 7.41913 18.3831 7.44128C18.3748 7.46343 18.3609 7.48266 18.3429 7.49678C18.325 7.51089 18.3036 7.51934 18.2814 7.52115H15.7275L15.5585 7.34031V4.60634C15.5602 4.58255 15.5681 4.55975 15.5813 4.54051C15.5945 4.52128 15.6125 4.50639 15.6332 4.49753C15.6539 4.48867 15.6765 4.48619 15.6984 4.49038C15.7203 4.49457 15.7407 4.50526 15.7573 4.52124ZM14.1248 5.91437C14.1732 5.97391 14.2021 6.04884 14.2071 6.1276C14.2157 6.17377 14.2155 6.22129 14.2065 6.26739C14.2045 6.27778 14.2021 6.28804 14.1992 6.29817L14.1944 6.31388C14.1847 6.34291 14.1715 6.3705 14.1551 6.39595C14.13 6.43465 14.098 6.46757 14.0608 6.49276C14.0354 6.5099 14.008 6.52328 13.9794 6.53244C13.9661 6.53672 13.9525 6.5401 13.9387 6.5425H9.71529C9.62309 6.5425 9.5346 6.50328 9.4694 6.43342C9.40413 6.36362 9.3675 6.26889 9.3675 6.17013C9.3675 6.07144 9.40413 5.97671 9.4694 5.90691C9.5346 5.83704 9.62309 5.79783 9.71529 5.79783H13.9387C13.9718 5.80516 14.0034 5.81769 14.0326 5.83484C14.0672 5.85522 14.0984 5.88204 14.1248 5.91437ZM14.2667 7.29776H9.72529C9.69606 7.30302 9.66773 7.31211 9.64092 7.3247C9.62612 7.33171 9.61175 7.33977 9.59798 7.34879C9.56565 7.36996 9.53642 7.39664 9.51155 7.42813C9.4569 7.49722 9.42694 7.58487 9.42694 7.67538C9.42694 7.70155 9.42942 7.72752 9.43434 7.75285C9.44635 7.81505 9.47273 7.87355 9.51155 7.9227C9.55292 7.9751 9.60647 8.01432 9.66628 8.03678C9.67762 8.04107 9.6892 8.04477 9.70097 8.04775C9.70898 8.04983 9.71711 8.05158 9.72529 8.05308H14.2667C14.3546 8.04756 14.437 8.00555 14.4964 7.93601C14.5558 7.86647 14.5875 7.77492 14.5847 7.68071C14.5874 7.63318 14.5813 7.58559 14.5667 7.54059C14.5522 7.4956 14.5296 7.45417 14.5 7.41859C14.4704 7.38301 14.4346 7.35398 14.3946 7.33327C14.3546 7.31256 14.3111 7.30048 14.2667 7.29776ZM4.99497 18.84H12.786C12.8783 18.84 12.9667 18.8008 13.032 18.731C13.0972 18.6611 13.1338 18.5664 13.1338 18.4677C13.1338 18.3689 13.0972 18.2742 13.032 18.2044C12.9667 18.1346 12.8783 18.0954 12.786 18.0954H4.99497C4.90277 18.0954 4.81428 18.1346 4.74908 18.2044C4.68381 18.2742 4.64718 18.3689 4.64718 18.4677C4.64718 18.5664 4.68381 18.6611 4.74908 18.731C4.81428 18.8008 4.90277 18.84 4.99497 18.84ZM17.5858 12.7444H19.5733H19.623C19.7249 12.7499 19.821 12.7971 19.8913 12.8764C19.9616 12.9556 20.0007 13.0607 20.0006 13.17V13.8295C20.0007 13.8458 19.9976 13.862 19.9914 13.8769C19.9853 13.8918 19.9764 13.9052 19.9652 13.9163C19.9539 13.9273 19.9407 13.9357 19.9262 13.9409C19.9118 13.9461 19.8965 13.948 19.8814 13.9465H13.7797C13.7507 13.9465 13.7229 13.9342 13.7024 13.9123C13.6819 13.8903 13.6704 13.8606 13.6704 13.8295V13.17C13.6677 13.0617 13.7046 12.9566 13.7733 12.8771C13.842 12.7976 13.9371 12.75 14.0381 12.7444H16.0256V12.5104C16.0352 12.439 16.0687 12.3737 16.1199 12.3268C16.1711 12.2798 16.2365 12.2544 16.3039 12.2551H17.2976C17.3667 12.2517 17.4345 12.276 17.4878 12.3232C17.541 12.3704 17.576 12.4371 17.5858 12.5104V12.7444ZM14.0679 19.4251V14.1912H19.5037V19.4251C19.4935 19.585 19.4256 19.7344 19.3143 19.8416C19.203 19.9488 19.0571 20.0055 18.9075 19.9996H14.6642C14.5146 20.0055 14.3687 19.9488 14.2574 19.8416C14.1461 19.7344 14.0781 19.585 14.0679 19.4251ZM15.5983 15.1593H15.2505C15.0969 15.1593 14.9723 15.2926 14.9723 15.4572V18.7336C14.9723 18.8981 15.0969 19.0315 15.2505 19.0315H15.5983C15.752 19.0315 15.8766 18.8981 15.8766 18.7336V15.4572C15.8766 15.2926 15.752 15.1593 15.5983 15.1593ZM16.9598 15.1593H16.612C16.4583 15.1593 16.3337 15.2926 16.3337 15.4572V18.7336C16.3337 18.8981 16.4583 19.0315 16.612 19.0315H16.9598C17.1135 19.0315 17.238 18.8981 17.238 18.7336V15.4572C17.238 15.2926 17.1135 15.1593 16.9598 15.1593ZM17.9635 15.1593H18.3113C18.465 15.1593 18.5895 15.2926 18.5895 15.4572V18.7336C18.5895 18.8981 18.465 19.0315 18.3113 19.0315H17.9635C17.8098 19.0315 17.6852 18.8981 17.6852 18.7336V15.4572C17.6852 15.2926 17.8098 15.1593 17.9635 15.1593Z",acceptSingleChange:"M17.2 20H15.6628L17.33 18.3091V19.87C17.33 19.8871 17.3266 19.904 17.3201 19.9197C17.3136 19.9355 17.304 19.9499 17.2919 19.9619C17.2799 19.974 17.2655 19.9836 17.2497 19.9901C17.234 19.9966 17.2171 20 17.2 20ZM4.13 20H14.4978L14.1823 19.6791L13.5135 18.9904L13.5123 18.9891L13.0529 18.52H5C4.87537 18.52 4.75586 18.4705 4.66766 18.3823C4.57953 18.2942 4.53003 18.1747 4.53003 18.05C4.53003 17.9253 4.57953 17.8058 4.66766 17.7177C4.75586 17.6295 4.87537 17.58 5 17.58H12.1323L11.6235 17.0604L11.6231 16.48L12.8831 15.19L13.4765 15.1896L15.0807 16.8276L17.33 14.5413V9.3H13.28C13.207 9.30976 13.133 9.30976 13.06 9.3C12.7697 9.22119 12.5113 9.05343 12.3212 8.82027C12.1311 8.58711 12.0187 8.30026 12 8V4H4.13C4.09552 4 4.06246 4.0137 4.03808 4.03808C4.0137 4.06246 4 4.09552 4 4.13V19.87C4 19.9045 4.0137 19.9375 4.03808 19.9619C4.06246 19.9863 4.09552 20 4.13 20ZM13.1 4.65L16.6 8.15C16.6212 8.17232 16.6355 8.20028 16.6412 8.23051C16.6469 8.26075 16.6437 8.29199 16.6321 8.32048C16.6205 8.34898 16.6009 8.37352 16.5757 8.39117C16.5505 8.40882 16.5208 8.41883 16.49 8.42H13.06L12.83 8.19V4.76C12.8312 4.72925 12.8412 4.6995 12.8588 4.67429C12.8765 4.64909 12.901 4.62951 12.9295 4.6179C12.958 4.6063 12.9893 4.60315 13.0195 4.60884C13.0497 4.61453 13.0777 4.62882 13.1 4.65ZM11 6.72C11.0027 6.66089 10.9937 6.60184 10.9735 6.5462C10.9534 6.49057 10.9224 6.43948 10.8825 6.39581C10.8425 6.35217 10.7944 6.3168 10.7408 6.29178C10.6871 6.26678 10.6292 6.25256 10.57 6.25H5C4.88239 6.25772 4.77252 6.31131 4.69397 6.39917C4.61542 6.48706 4.57452 6.60226 4.58002 6.72C4.57452 6.83774 4.61542 6.95294 4.69397 7.04083C4.77252 7.12869 4.88239 7.18228 5 7.19H10.6C10.7141 7.1774 10.8189 7.12173 10.8933 7.03436C10.9677 6.94702 11.0058 6.83456 11 6.72ZM11.1 8.14001H5C4.87537 8.14001 4.75586 8.18954 4.66766 8.27768C4.57953 8.36581 4.53003 8.48535 4.53003 8.61002C4.53003 8.73468 4.57953 8.85422 4.66766 8.94235C4.71558 8.99023 4.77277 9.02673 4.83496 9.05008C4.86932 9.06296 4.90521 9.07184 4.94189 9.07642C4.96106 9.0788 4.98047 9.08002 5 9.08002H11.1C11.2247 9.08002 11.3442 9.03049 11.4324 8.94235C11.5205 8.85422 11.57 8.73468 11.57 8.61002C11.57 8.48535 11.5205 8.36581 11.4324 8.27768C11.3442 8.18954 11.2247 8.14001 11.1 8.14001ZM5 11H15.45C15.5826 11 15.7098 10.9473 15.8035 10.8535C15.8973 10.7598 15.95 10.6326 15.95 10.5C15.95 10.3674 15.8973 10.2402 15.8035 10.1465C15.7098 10.0527 15.5826 10 15.45 10H5C4.86737 10 4.74023 10.0527 4.64642 10.1465C4.55267 10.2402 4.5 10.3674 4.5 10.5C4.5 10.6326 4.55267 10.7598 4.64642 10.8535C4.74023 10.9473 4.86737 11 5 11ZM5 12.86H11.1C11.2211 12.8523 11.3346 12.798 11.4166 12.7085C11.4986 12.6191 11.5428 12.5013 11.54 12.38C11.5427 12.2597 11.4982 12.1431 11.416 12.0552C11.3337 11.9673 11.2203 11.9152 11.1 11.91H5C4.94086 11.9126 4.88287 11.9268 4.82922 11.9518C4.77563 11.9768 4.72748 12.0122 4.6875 12.0558C4.65833 12.0878 4.63391 12.1237 4.61505 12.1624C4.60809 12.1767 4.60193 12.1913 4.5965 12.2062C4.58264 12.2443 4.5741 12.2841 4.57092 12.3243C4.56946 12.3428 4.56915 12.3614 4.57001 12.38C4.56451 12.5004 4.60651 12.6181 4.68689 12.7079C4.76733 12.7976 4.87976 12.8523 5 12.86ZM15.45 14.74H5C4.87537 14.74 4.75586 14.6905 4.66766 14.6023C4.57953 14.5142 4.53003 14.3947 4.53003 14.27C4.53003 14.1453 4.57953 14.0258 4.66766 13.9377C4.75586 13.8495 4.87537 13.8 5 13.8H15.45C15.5747 13.8 15.6942 13.8495 15.7823 13.9377C15.8705 14.0258 15.92 14.1453 15.92 14.27C15.92 14.3947 15.8705 14.5142 15.7823 14.6023C15.6942 14.6905 15.5747 14.74 15.45 14.74ZM11.1 16.63H5C4.87537 16.63 4.75586 16.5805 4.66766 16.4923C4.57953 16.4042 4.53003 16.2846 4.53003 16.16C4.53003 16.0353 4.57953 15.9158 4.66766 15.8276C4.75586 15.7395 4.87537 15.69 5 15.69H11.1C11.2247 15.69 11.3442 15.7395 11.4324 15.8276C11.5205 15.9158 11.57 16.0353 11.57 16.16C11.57 16.2846 11.5205 16.4042 11.4324 16.4923C11.3442 16.5805 11.2247 16.63 11.1 16.63ZM18.73 13.71L20 15.01L15.08 20L15.07 19.99L14.48 19.39L13.81 18.7L11.92 16.77L13.18 15.48L15.08 17.42L18.73 13.71Z",rejectSingleChange:"M17.0495 11.5C17.1461 11.5 17.241 11.5173 17.33 11.5501V9.3H13.28C13.207 9.30976 13.133 9.30976 13.06 9.3C12.7697 9.22119 12.5113 9.05343 12.3212 8.82027C12.1311 8.58711 12.0187 8.30026 12 8V4H4.13C4.09552 4 4.06246 4.0137 4.03808 4.03808C4.0137 4.06246 4 4.09552 4 4.13V19.87C4 19.9045 4.0137 19.9375 4.03808 19.9619C4.06246 19.9863 4.09552 20 4.13 20H13.2305C13.1075 19.8287 13.0338 19.6249 13.0205 19.4112L13.0195 19.3956V18.52H5C4.87537 18.52 4.75586 18.4705 4.66772 18.3823C4.57959 18.2942 4.53003 18.1747 4.53003 18.05C4.53003 18.0119 4.53467 17.9742 4.54358 17.9378C4.56396 17.8552 4.60657 17.7788 4.66772 17.7177C4.75586 17.6295 4.87537 17.58 5 17.58H13.0195V14.74H5C4.87537 14.74 4.75586 14.6905 4.66772 14.6023C4.57959 14.5142 4.53003 14.3947 4.53003 14.27C4.53003 14.1453 4.57959 14.0258 4.66772 13.9377C4.75586 13.8495 4.87537 13.8 5 13.8H12.8393C12.6229 13.6377 12.4998 13.3897 12.4998 13.1032C12.4997 12.8414 12.6008 12.5847 12.7513 12.3911C12.9 12.1998 13.1561 12 13.4994 12L15.2519 12C15.2928 11.8972 15.3589 11.7915 15.4649 11.6992C15.6135 11.5698 15.8041 11.499 16.0011 11.5H17.0495ZM13.1 4.65L16.6 8.15C16.6211 8.17232 16.6354 8.20028 16.6411 8.23051C16.6468 8.26075 16.6437 8.29199 16.6321 8.32048C16.6204 8.34898 16.6009 8.37352 16.5757 8.39117C16.5505 8.40882 16.5207 8.41883 16.49 8.42H13.06L12.83 8.19V4.76C12.8311 4.72925 12.8411 4.6995 12.8588 4.67429C12.8764 4.64909 12.901 4.62951 12.9295 4.6179C12.958 4.6063 12.9892 4.60315 13.0194 4.60884C13.0497 4.61453 13.0776 4.62882 13.1 4.65ZM11 6.72C11.0027 6.66089 10.9937 6.60184 10.9735 6.5462C10.9716 6.5408 10.9695 6.53543 10.9673 6.53012C10.9626 6.51852 10.9575 6.50717 10.9518 6.49603C10.9406 6.47391 10.9275 6.45273 10.9127 6.43274C10.9033 6.41992 10.8932 6.40759 10.8824 6.39581C10.8425 6.35217 10.7943 6.3168 10.7407 6.29178C10.6871 6.26678 10.629 6.25256 10.5699 6.25H5C4.88232 6.25772 4.77246 6.31131 4.69397 6.39917C4.61536 6.48706 4.57446 6.60226 4.57996 6.72C4.57715 6.7811 4.58679 6.84152 4.60767 6.8978C4.61523 6.91803 4.62415 6.93771 4.63452 6.9567C4.65088 6.98669 4.67078 7.01495 4.69397 7.04083C4.77246 7.12869 4.88232 7.18228 5 7.19H10.6C10.714 7.1774 10.8188 7.12173 10.8932 7.03436C10.922 7.00049 10.9454 6.96283 10.9629 6.92273C10.9725 6.9006 10.9805 6.87775 10.9865 6.8544C10.9933 6.82791 10.9977 6.80075 10.9995 6.77325C11.0001 6.76453 11.0004 6.75574 11.0005 6.74695C11.0006 6.73798 11.0005 6.729 11 6.72ZM11.1 8.14001H5C4.97534 8.14001 4.95081 8.14194 4.92676 8.14575C4.89587 8.15063 4.8656 8.15857 4.83643 8.1694C4.77368 8.19272 4.71606 8.2294 4.66772 8.27768C4.57959 8.36581 4.53003 8.48535 4.53003 8.61002C4.53003 8.73468 4.57959 8.85422 4.66772 8.94235C4.75586 9.03049 4.87537 9.08002 5 9.08002H11.1C11.2247 9.08002 11.3442 9.03049 11.4324 8.94235C11.4617 8.91306 11.4867 8.88028 11.5071 8.845C11.5349 8.79691 11.554 8.74414 11.5634 8.68915C11.5677 8.66318 11.5701 8.63672 11.5701 8.61002C11.5701 8.48535 11.5205 8.36581 11.4324 8.27768C11.3929 8.23831 11.3474 8.20663 11.2979 8.18365C11.2365 8.15518 11.1689 8.14001 11.1 8.14001ZM5 11H15.45C15.5826 11 15.7098 10.9473 15.8036 10.8535C15.8973 10.7598 15.95 10.6326 15.95 10.5C15.95 10.3674 15.8973 10.2402 15.8036 10.1465C15.7098 10.0527 15.5826 10 15.45 10H5C4.86743 10 4.74023 10.0527 4.64648 10.1465C4.55273 10.2402 4.5 10.3674 4.5 10.5C4.5 10.6326 4.55273 10.7598 4.64648 10.8535C4.74023 10.9473 4.86743 11 5 11ZM5 12.86H11.1C11.2211 12.8523 11.3346 12.798 11.4166 12.7085C11.4987 12.6191 11.5428 12.5013 11.54 12.38C11.5427 12.2597 11.4982 12.1431 11.4159 12.0552C11.3336 11.9673 11.2202 11.9152 11.1 11.91H5C4.94092 11.9126 4.88281 11.9268 4.82922 11.9518C4.77563 11.9768 4.72742 12.0122 4.6875 12.0558C4.64758 12.0995 4.6167 12.1506 4.59644 12.2062C4.58899 12.2266 4.58313 12.2475 4.57874 12.2687C4.57129 12.3052 4.56824 12.3426 4.56995 12.38C4.56445 12.5004 4.60645 12.6181 4.68689 12.7079C4.76733 12.7976 4.87976 12.8523 5 12.86ZM11.1 16.63H5C4.87537 16.63 4.75586 16.5805 4.66772 16.4923C4.57959 16.4042 4.53003 16.2846 4.53003 16.16C4.53003 16.0353 4.57959 15.9158 4.66772 15.8276C4.75586 15.7395 4.87537 15.69 5 15.69H11.1C11.2247 15.69 11.3442 15.7395 11.4324 15.8276C11.5205 15.9158 11.5701 16.0353 11.5701 16.16C11.5701 16.2846 11.5205 16.4042 11.4324 16.4923C11.3442 16.5805 11.2247 16.63 11.1 16.63ZM19.59 12.53H17.36V12.3C17.3574 12.2195 17.3236 12.1432 17.2657 12.0872C17.2078 12.0313 17.1305 12 17.05 12H16C15.9242 11.9994 15.8509 12.0265 15.7938 12.0762C15.7367 12.126 15.6997 12.1949 15.69 12.27V12.5H13.44C13.3768 12.4994 13.3142 12.5125 13.2565 12.5382C13.1988 12.564 13.1473 12.6019 13.1055 12.6493C13.0638 12.6968 13.0327 12.7526 13.0145 12.8132C12.9963 12.8737 12.9913 12.9374 13 13V13.67C13 13.6871 13.0033 13.704 13.0099 13.7198C13.0164 13.7355 13.026 13.7499 13.038 13.7619C13.0501 13.774 13.0644 13.7836 13.0802 13.7901C13.096 13.7966 13.1129 13.8 13.13 13.8H19.84C19.8611 13.8054 19.8834 13.8054 19.9045 13.8C19.9257 13.7946 19.9452 13.7839 19.9611 13.7689C19.9771 13.754 19.989 13.7352 19.9958 13.7144C20.0026 13.6937 20.004 13.6715 20 13.65V13C20.0028 12.8866 19.9617 12.7765 19.8853 12.6927C19.809 12.6088 19.7031 12.5577 19.59 12.55V12.53ZM13.52 14V19.38C13.5303 19.5454 13.6054 19.7 13.7289 19.8105C13.8525 19.9209 14.0145 19.9782 14.18 19.97H18.84C19.0055 19.9782 19.1676 19.9209 19.2911 19.8105C19.4146 19.7 19.4897 19.5454 19.5 19.38V14H13.52ZM15.52 18.67C15.52 18.7522 15.4874 18.8311 15.4292 18.8892C15.3711 18.9473 15.2922 18.98 15.21 18.98H14.83C14.7478 18.98 14.669 18.9473 14.6108 18.8892C14.5527 18.8311 14.52 18.7522 14.52 18.67V15.33C14.52 15.2893 14.528 15.249 14.5436 15.2114C14.5592 15.1738 14.582 15.1396 14.6108 15.1108C14.6396 15.082 14.6738 15.0592 14.7114 15.0436C14.749 15.028 14.7893 15.02 14.83 15.02H15.21C15.2507 15.02 15.291 15.028 15.3287 15.0436C15.3663 15.0592 15.4004 15.082 15.4292 15.1108C15.458 15.1396 15.4808 15.1738 15.4964 15.2114C15.512 15.249 15.52 15.2893 15.52 15.33V18.67ZM17.01 18.67C17.01 18.7522 16.9774 18.8311 16.9192 18.8892C16.8611 18.9473 16.7822 18.98 16.7 18.98H16.32C16.2798 18.98 16.2399 18.9719 16.2029 18.9562C16.1658 18.9405 16.1323 18.9176 16.1043 18.8886C16.0763 18.8597 16.0544 18.8254 16.0399 18.7879C16.0254 18.7503 16.0187 18.7102 16.02 18.67V15.33C16.0187 15.2898 16.0254 15.2497 16.0399 15.2121C16.0544 15.1746 16.0763 15.1403 16.1043 15.1114C16.1323 15.0824 16.1658 15.0595 16.2029 15.0438C16.2399 15.0281 16.2798 15.02 16.32 15.02H16.7C16.7407 15.02 16.781 15.028 16.8187 15.0436C16.8563 15.0592 16.8904 15.082 16.9192 15.1108C16.948 15.1396 16.9708 15.1738 16.9864 15.2114C17.002 15.249 17.01 15.2893 17.01 15.33V18.67ZM18.51 18.67C18.51 18.7107 18.502 18.751 18.4864 18.7886C18.4708 18.8262 18.448 18.8604 18.4192 18.8892C18.3904 18.918 18.3563 18.9408 18.3187 18.9564C18.281 18.972 18.2407 18.98 18.2 18.98H17.82C17.7378 18.98 17.659 18.9473 17.6008 18.8892C17.5427 18.8311 17.51 18.7522 17.51 18.67V15.33C17.51 15.2893 17.518 15.249 17.5336 15.2114C17.5492 15.1738 17.572 15.1396 17.6008 15.1108C17.6296 15.082 17.6638 15.0592 17.7014 15.0436C17.739 15.028 17.7793 15.02 17.82 15.02H18.2C18.2407 15.02 18.281 15.028 18.3187 15.0436C18.3563 15.0592 18.3904 15.082 18.4192 15.1108C18.448 15.1396 18.4708 15.1738 18.4864 15.2114C18.502 15.249 18.51 15.2893 18.51 15.33V18.67Z"},V.FILEICONS={docIcon:{extension:".doc",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.617188 46.875 C 13.234375 46.875 16.160156 43.929688 16.160156 40.292969 C 16.160156 36.695312 13.234375 33.75 9.617188 33.75 L 7.402344 33.75 C 6.820312 33.75 6.371094 34.199219 6.371094 34.78125 L 6.371094 45.84375 C 6.371094 46.335938 6.714844 46.757812 7.191406 46.855469 L 7.402344 46.875 Z M 9.617188 44.792969 L 8.453125 44.792969 L 8.453125 35.832031 L 9.617188 35.832031 C 12.089844 35.832031 14.078125 37.835938 14.078125 40.292969 C 14.078125 42.789062 12.089844 44.773438 9.617188 44.792969 Z M 24.816406 46.875 C 26.539062 46.875 28.191406 46.085938 29.296875 44.867188 C 30.460938 43.648438 31.191406 41.980469 31.191406 40.125 C 31.191406 38.269531 30.460938 36.617188 29.296875 35.382812 C 28.191406 34.144531 26.539062 33.375 24.816406 33.375 C 23.015625 33.375 21.367188 34.144531 20.222656 35.382812 C 19.058594 36.617188 18.367188 38.269531 18.367188 40.125 C 18.367188 41.980469 19.058594 43.648438 20.222656 44.867188 C 21.367188 46.085938 23.015625 46.875 24.816406 46.875 Z M 24.816406 44.738281 C 23.617188 44.738281 22.566406 44.230469 21.777344 43.386719 C 20.992188 42.582031 20.503906 41.398438 20.503906 40.125 C 20.503906 38.851562 20.992188 37.667969 21.777344 36.84375 C 22.566406 36 23.617188 35.511719 24.816406 35.511719 C 25.941406 35.511719 26.992188 36 27.777344 36.84375 C 28.546875 37.667969 29.054688 38.851562 29.054688 40.125 C 29.054688 41.398438 28.546875 42.582031 27.777344 43.386719 C 26.992188 44.230469 25.941406 44.738281 24.816406 44.738281 Z M 39.996094 46.875 C 41.648438 46.875 43.148438 46.332031 44.328125 45.414062 C 44.777344 45.054688 44.851562 44.382812 44.515625 43.914062 C 44.140625 43.460938 43.445312 43.386719 43.015625 43.707031 C 42.171875 44.382812 41.160156 44.738281 39.996094 44.738281 C 38.703125 44.738281 37.503906 44.210938 36.621094 43.386719 C 35.777344 42.5625 35.253906 41.398438 35.253906 40.125 C 35.253906 38.851562 35.777344 37.726562 36.621094 36.863281 C 37.503906 36.039062 38.703125 35.511719 39.996094 35.511719 C 41.160156 35.511719 42.191406 35.867188 43.015625 36.542969 C 43.445312 36.882812 44.140625 36.804688 44.515625 36.335938 C 44.851562 35.867188 44.777344 35.210938 44.328125 34.835938 C 43.148438 33.917969 41.648438 33.375 39.996094 33.375 C 36.246094 33.394531 33.132812 36.414062 33.117188 40.125 C 33.132812 43.855469 36.246094 46.875 39.996094 46.875 Z M 39.996094 46.875 "/>\n      </g>'},gifIcon:{extension:".gif",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 17.394531 46.875 C 18.988281 46.875 20.46875 46.332031 21.648438 45.414062 C 21.835938 45.28125 21.949219 45.132812 22.003906 44.960938 L 22.003906 44.945312 C 22.023438 44.90625 22.023438 44.886719 22.042969 44.851562 C 22.0625 44.738281 22.097656 44.664062 22.097656 44.53125 L 22.097656 40.386719 C 22.097656 39.789062 21.613281 39.335938 21.011719 39.335938 L 17.28125 39.335938 C 16.699219 39.335938 16.210938 39.789062 16.210938 40.386719 C 16.210938 40.96875 16.699219 41.457031 17.28125 41.457031 L 19.960938 41.457031 L 19.960938 44.023438 C 19.210938 44.457031 18.332031 44.738281 17.394531 44.738281 C 16.042969 44.738281 14.863281 44.230469 14.019531 43.367188 C 13.136719 42.523438 12.613281 41.382812 12.613281 40.144531 C 12.613281 38.867188 13.136719 37.726562 14.019531 36.882812 C 14.863281 36.019531 16.042969 35.511719 17.394531 35.511719 C 18.519531 35.511719 19.550781 35.90625 20.355469 36.523438 C 20.824219 36.898438 21.519531 36.804688 21.875 36.355469 C 22.230469 35.886719 22.15625 35.195312 21.667969 34.835938 C 20.503906 33.917969 18.988281 33.375 17.394531 33.375 C 13.585938 33.375 10.472656 36.375 10.472656 40.144531 C 10.472656 43.894531 13.585938 46.875 17.394531 46.875 Z M 26.945312 46.875 C 27.507812 46.875 27.996094 46.425781 27.996094 45.84375 L 27.996094 34.78125 C 27.996094 34.199219 27.507812 33.75 26.945312 33.75 C 26.363281 33.75 25.914062 34.199219 25.914062 34.78125 L 25.914062 45.84375 C 25.914062 46.425781 26.363281 46.875 26.945312 46.875 Z M 33.066406 46.875 C 33.648438 46.875 34.117188 46.40625 34.117188 45.84375 L 34.117188 41.34375 L 38.488281 41.34375 C 39.050781 41.34375 39.519531 40.875 39.519531 40.292969 C 39.519531 39.75 39.050781 39.261719 38.488281 39.261719 L 34.117188 39.261719 L 34.117188 35.832031 L 39.199219 35.832031 C 39.742188 35.832031 40.230469 35.363281 40.230469 34.78125 C 40.230469 34.21875 39.742188 33.75 39.199219 33.75 L 33.066406 33.75 C 32.488281 33.75 32.035156 34.21875 32.035156 34.78125 L 32.035156 45.84375 C 32.035156 46.40625 32.488281 46.875 33.066406 46.875 Z M 33.066406 46.875 "/>\n      </g>'},jpegIcon:{extension:".jpeg",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9 43.75 C 11.140625 43.75 12.890625 42.015625 12.890625 39.875 L 12.890625 33.671875 C 12.890625 33.1875 12.5 32.8125 12.03125 32.8125 C 11.546875 32.8125 11.15625 33.1875 11.15625 33.671875 L 11.15625 39.875 C 11.15625 41.046875 10.1875 42.015625 9 42.015625 C 8.046875 42.015625 7.234375 41.390625 6.953125 40.53125 C 6.8125 40.078125 6.328125 39.828125 5.859375 39.984375 C 5.421875 40.109375 5.15625 40.59375 5.3125 41.0625 C 5.8125 42.625 7.28125 43.75 9 43.75 Z M 15.640625 43.75 C 16.125 43.75 16.515625 43.359375 16.515625 42.890625 L 16.515625 39.5 L 18.4375 39.5 C 20.296875 39.5 21.796875 38 21.796875 36.171875 C 21.796875 34.3125 20.296875 32.8125 18.4375 32.8125 L 15.640625 32.8125 C 15.171875 32.8125 14.78125 33.1875 14.78125 33.671875 L 14.78125 42.890625 C 14.78125 43.359375 15.171875 43.75 15.640625 43.75 Z M 18.4375 37.765625 L 16.515625 37.765625 L 16.515625 34.546875 L 18.4375 34.546875 C 19.34375 34.546875 20.046875 35.265625 20.0625 36.171875 C 20.046875 37.046875 19.34375 37.765625 18.4375 37.765625 Z M 29.234375 43.75 C 29.6875 43.75 30.09375 43.359375 30.09375 42.890625 C 30.09375 42.40625 29.6875 42.015625 29.234375 42.015625 L 25 42.015625 L 25 39.140625 L 28.640625 39.140625 C 29.109375 39.140625 29.5 38.75 29.5 38.265625 C 29.5 37.8125 29.109375 37.40625 28.640625 37.40625 L 25 37.40625 L 25 34.546875 L 29.234375 34.546875 C 29.6875 34.546875 30.09375 34.15625 30.09375 33.671875 C 30.09375 33.1875 29.6875 32.8125 29.234375 32.8125 L 24.125 32.8125 C 23.640625 32.8125 23.265625 33.1875 23.265625 33.671875 L 23.265625 42.890625 C 23.265625 43.359375 23.640625 43.75 24.125 43.75 C 24.125 43.75 24.140625 43.734375 24.140625 43.734375 C 24.140625 43.734375 24.140625 43.75 24.171875 43.75 Z M 37.1875 43.75 C 38.515625 43.75 39.75 43.296875 40.734375 42.53125 C 40.890625 42.421875 40.984375 42.296875 41.03125 42.15625 L 41.03125 42.140625 C 41.046875 42.109375 41.046875 42.09375 41.0625 42.0625 C 41.078125 41.96875 41.109375 41.90625 41.109375 41.796875 L 41.109375 38.34375 C 41.109375 37.914062 40.8125 37.578125 40.410156 37.492188 L 40.203125 37.46875 L 37.09375 37.46875 C 36.609375 37.46875 36.203125 37.84375 36.203125 38.34375 C 36.203125 38.828125 36.609375 39.234375 37.09375 39.234375 L 39.328125 39.234375 L 39.328125 41.375 C 38.703125 41.734375 37.96875 41.96875 37.1875 41.96875 C 36.0625 41.96875 35.078125 41.546875 34.375 40.828125 C 33.640625 40.125 33.203125 39.171875 33.203125 38.140625 C 33.203125 37.078125 33.640625 36.125 34.375 35.421875 C 35.078125 34.703125 36.0625 34.28125 37.1875 34.28125 C 38.125 34.28125 38.984375 34.609375 39.65625 35.125 C 40.046875 35.4375 40.625 35.359375 40.921875 34.984375 C 41.21875 34.59375 41.15625 34.015625 40.75 33.71875 C 39.78125 32.953125 38.515625 32.5 37.1875 32.5 C 34.015625 32.5 31.421875 35 31.421875 38.140625 C 31.421875 41.265625 34.015625 43.75 37.1875 43.75 Z M 37.1875 43.75 "/>\n      </g>'},logIcon:{extension:".log",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.542969 46.875 C 14.085938 46.875 14.574219 46.40625 14.574219 45.84375 C 14.574219 45.261719 14.085938 44.792969 13.542969 44.792969 L 8.460938 44.792969 L 8.460938 34.78125 C 8.460938 34.21875 7.992188 33.75 7.410156 33.75 C 6.828125 33.75 6.378906 34.21875 6.378906 34.78125 L 6.378906 45.84375 C 6.378906 46.40625 6.828125 46.875 7.410156 46.875 Z M 21.742188 46.875 C 23.46875 46.875 25.117188 46.085938 26.222656 44.867188 C 27.386719 43.648438 28.117188 41.980469 28.117188 40.125 C 28.117188 38.269531 27.386719 36.617188 26.222656 35.382812 C 25.117188 34.144531 23.46875 33.375 21.742188 33.375 C 19.941406 33.375 18.292969 34.144531 17.148438 35.382812 C 15.984375 36.617188 15.292969 38.269531 15.292969 40.125 C 15.292969 41.980469 15.984375 43.648438 17.148438 44.867188 C 18.292969 46.085938 19.941406 46.875 21.742188 46.875 Z M 21.742188 44.738281 C 20.542969 44.738281 19.492188 44.230469 18.703125 43.386719 C 17.917969 42.582031 17.429688 41.398438 17.429688 40.125 C 17.429688 38.851562 17.917969 37.667969 18.703125 36.84375 C 19.492188 36 20.542969 35.511719 21.742188 35.511719 C 22.867188 35.511719 23.917969 36 24.703125 36.84375 C 25.472656 37.667969 25.980469 38.851562 25.980469 40.125 C 25.980469 41.398438 25.472656 42.582031 24.703125 43.386719 C 23.917969 44.230469 22.867188 44.738281 21.742188 44.738281 Z M 37.300781 46.875 C 38.894531 46.875 40.375 46.332031 41.558594 45.414062 C 41.746094 45.28125 41.855469 45.132812 41.914062 44.960938 L 41.914062 44.945312 L 41.949219 44.851562 C 41.96875 44.738281 42.007812 44.664062 42.007812 44.53125 L 42.007812 40.386719 C 42.007812 39.789062 41.519531 39.335938 40.917969 39.335938 L 37.1875 39.335938 C 36.605469 39.335938 36.121094 39.789062 36.121094 40.386719 C 36.121094 40.96875 36.605469 41.457031 37.1875 41.457031 L 39.871094 41.457031 L 39.871094 44.023438 C 39.121094 44.457031 38.238281 44.738281 37.300781 44.738281 C 35.949219 44.738281 34.769531 44.230469 33.925781 43.367188 C 33.042969 42.523438 32.519531 41.382812 32.519531 40.144531 C 32.519531 38.867188 33.042969 37.726562 33.925781 36.882812 C 34.769531 36.019531 35.949219 35.511719 37.300781 35.511719 C 38.425781 35.511719 39.457031 35.90625 40.261719 36.523438 C 40.730469 36.898438 41.425781 36.804688 41.78125 36.355469 C 42.136719 35.886719 42.0625 35.195312 41.574219 34.835938 C 40.414062 33.917969 38.894531 33.375 37.300781 33.375 C 33.496094 33.375 30.382812 36.375 30.382812 40.144531 C 30.382812 43.894531 33.496094 46.875 37.300781 46.875 Z M 37.300781 46.875 "/>\n      </g>'},movIcon:{extension:".mov",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 15.472656 46.875 C 16.035156 46.875 16.523438 46.40625 16.523438 45.84375 L 16.523438 34.78125 C 16.523438 34.289062 16.152344 33.882812 15.679688 33.777344 L 15.472656 33.75 L 15.453125 33.75 C 15.117188 33.75 14.816406 33.898438 14.609375 34.179688 L 10.878906 39.355469 L 7.148438 34.179688 C 6.960938 33.898438 6.625 33.75 6.324219 33.75 L 6.265625 33.75 C 5.703125 33.75 5.234375 34.21875 5.234375 34.78125 L 5.234375 45.84375 C 5.234375 46.40625 5.703125 46.875 6.265625 46.875 C 6.847656 46.875 7.316406 46.40625 7.316406 45.84375 L 7.316406 37.949219 L 10 41.699219 C 10.203125 41.980469 10.523438 42.132812 10.859375 42.132812 L 10.898438 42.132812 C 11.234375 42.132812 11.535156 41.980469 11.742188 41.699219 L 14.441406 37.949219 L 14.441406 45.84375 C 14.441406 46.40625 14.890625 46.875 15.472656 46.875 Z M 25.460938 46.875 C 27.1875 46.875 28.835938 46.085938 29.941406 44.867188 C 31.105469 43.648438 31.835938 41.980469 31.835938 40.125 C 31.835938 38.269531 31.105469 36.617188 29.941406 35.382812 C 28.835938 34.144531 27.1875 33.375 25.460938 33.375 C 23.660156 33.375 22.011719 34.144531 20.867188 35.382812 C 19.703125 36.617188 19.011719 38.269531 19.011719 40.125 C 19.011719 41.980469 19.703125 43.648438 20.867188 44.867188 C 22.011719 46.085938 23.660156 46.875 25.460938 46.875 Z M 25.460938 44.738281 C 24.261719 44.738281 23.210938 44.230469 22.421875 43.386719 C 21.636719 42.582031 21.148438 41.398438 21.148438 40.125 C 21.148438 38.851562 21.636719 37.667969 22.421875 36.84375 C 23.210938 36 24.261719 35.511719 25.460938 35.511719 C 26.585938 35.511719 27.636719 36 28.421875 36.84375 C 29.191406 37.667969 29.699219 38.851562 29.699219 40.125 C 29.699219 41.398438 29.191406 42.582031 28.421875 43.386719 C 27.636719 44.230469 26.585938 44.738281 25.460938 44.738281 Z M 38.683594 46.855469 L 38.71875 46.855469 C 38.777344 46.835938 38.8125 46.820312 38.871094 46.820312 C 38.886719 46.800781 38.886719 46.800781 38.90625 46.800781 C 38.964844 46.78125 39.019531 46.726562 39.058594 46.707031 L 39.09375 46.6875 L 39.207031 46.59375 C 39.226562 46.574219 39.226562 46.574219 39.246094 46.539062 L 39.339844 46.425781 C 39.355469 46.425781 39.355469 46.425781 39.355469 46.40625 C 39.394531 46.367188 39.414062 46.292969 39.433594 46.257812 L 44.0625 35.304688 C 44.269531 34.800781 44.027344 34.179688 43.5 33.976562 C 42.996094 33.75 42.375 33.992188 42.152344 34.519531 L 38.496094 43.199219 L 34.839844 34.519531 C 34.613281 33.992188 34.011719 33.75 33.507812 33.976562 C 32.964844 34.179688 32.71875 34.800781 32.945312 35.304688 L 37.539062 46.257812 C 37.574219 46.292969 37.613281 46.367188 37.632812 46.40625 C 37.632812 46.425781 37.652344 46.425781 37.652344 46.425781 C 37.667969 46.460938 37.707031 46.5 37.746094 46.539062 C 37.746094 46.574219 37.761719 46.574219 37.761719 46.59375 C 37.820312 46.632812 37.855469 46.648438 37.894531 46.6875 L 37.914062 46.6875 C 37.96875 46.726562 38.042969 46.78125 38.082031 46.800781 L 38.101562 46.800781 C 38.101562 46.800781 38.121094 46.800781 38.121094 46.820312 C 38.15625 46.820312 38.230469 46.835938 38.269531 46.855469 L 38.308594 46.855469 L 38.402344 46.871094 L 38.496094 46.875 C 38.550781 46.875 38.605469 46.875 38.683594 46.855469 Z M 38.683594 46.855469 "/>\n      </g>'},ogvIcon:{extension:".ogv",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11.511719 46.875 C 13.238281 46.875 14.886719 46.085938 15.996094 44.867188 C 17.15625 43.648438 17.886719 41.980469 17.886719 40.125 C 17.886719 38.269531 17.15625 36.617188 15.996094 35.382812 C 14.886719 34.144531 13.238281 33.375 11.511719 33.375 C 9.714844 33.375 8.0625 34.144531 6.917969 35.382812 C 5.757812 36.617188 5.0625 38.269531 5.0625 40.125 C 5.0625 41.980469 5.757812 43.648438 6.917969 44.867188 C 8.0625 46.085938 9.714844 46.875 11.511719 46.875 Z M 11.511719 44.738281 C 10.3125 44.738281 9.261719 44.230469 8.476562 43.386719 C 7.6875 42.582031 7.199219 41.398438 7.199219 40.125 C 7.199219 38.851562 7.6875 37.667969 8.476562 36.84375 C 9.261719 36 10.3125 35.511719 11.511719 35.511719 C 12.636719 35.511719 13.6875 36 14.476562 36.84375 C 15.246094 37.667969 15.75 38.851562 15.75 40.125 C 15.75 41.398438 15.246094 42.582031 14.476562 43.386719 C 13.6875 44.230469 12.636719 44.738281 11.511719 44.738281 Z M 27.25 46.875 C 28.84375 46.875 30.324219 46.332031 31.507812 45.414062 C 31.695312 45.28125 31.804688 45.132812 31.863281 44.960938 L 31.863281 44.945312 C 31.882812 44.90625 31.882812 44.886719 31.898438 44.851562 C 31.917969 44.738281 31.957031 44.664062 31.957031 44.53125 L 31.957031 40.386719 C 31.957031 39.789062 31.46875 39.335938 30.867188 39.335938 L 27.136719 39.335938 C 26.554688 39.335938 26.070312 39.789062 26.070312 40.386719 C 26.070312 40.96875 26.554688 41.457031 27.136719 41.457031 L 29.820312 41.457031 L 29.820312 44.023438 C 29.070312 44.457031 28.1875 44.738281 27.25 44.738281 C 25.898438 44.738281 24.71875 44.230469 23.875 43.367188 C 22.992188 42.523438 22.46875 41.382812 22.46875 40.144531 C 22.46875 38.867188 22.992188 37.726562 23.875 36.882812 C 24.71875 36.019531 25.898438 35.511719 27.25 35.511719 C 28.375 35.511719 29.40625 35.90625 30.210938 36.523438 C 30.679688 36.898438 31.375 36.804688 31.730469 36.355469 C 32.085938 35.886719 32.011719 35.195312 31.523438 34.835938 C 30.363281 33.917969 28.84375 33.375 27.25 33.375 C 23.445312 33.375 20.332031 36.375 20.332031 40.144531 C 20.332031 43.894531 23.445312 46.875 27.25 46.875 Z M 40.191406 46.855469 L 40.230469 46.855469 C 40.285156 46.835938 40.324219 46.820312 40.378906 46.820312 C 40.398438 46.800781 40.398438 46.800781 40.417969 46.800781 C 40.472656 46.78125 40.53125 46.726562 40.566406 46.707031 C 40.605469 46.6875 40.605469 46.6875 40.605469 46.6875 L 40.71875 46.59375 C 40.738281 46.574219 40.738281 46.574219 40.753906 46.539062 L 40.847656 46.425781 C 40.867188 46.425781 40.867188 46.425781 40.867188 46.40625 C 40.90625 46.367188 40.925781 46.292969 40.941406 46.257812 L 45.574219 35.304688 C 45.78125 34.800781 45.535156 34.179688 45.011719 33.976562 C 44.503906 33.75 43.886719 33.992188 43.660156 34.519531 L 40.003906 43.199219 L 36.347656 34.519531 C 36.125 33.992188 35.523438 33.75 35.019531 33.976562 C 34.472656 34.179688 34.230469 34.800781 34.457031 35.304688 L 39.050781 46.257812 C 39.085938 46.292969 39.125 46.367188 39.144531 46.40625 C 39.144531 46.425781 39.160156 46.425781 39.160156 46.425781 C 39.179688 46.460938 39.21875 46.5 39.253906 46.539062 C 39.253906 46.574219 39.273438 46.574219 39.273438 46.59375 C 39.332031 46.632812 39.367188 46.648438 39.40625 46.6875 L 39.425781 46.6875 C 39.480469 46.726562 39.554688 46.78125 39.59375 46.800781 L 39.613281 46.800781 C 39.613281 46.800781 39.628906 46.800781 39.628906 46.820312 C 39.667969 46.820312 39.742188 46.835938 39.78125 46.855469 L 39.816406 46.855469 L 39.910156 46.871094 L 40.003906 46.875 C 40.0625 46.875 40.117188 46.875 40.191406 46.855469 Z M 40.191406 46.855469 "/>\n      </g>'},pngIcon:{extension:".png",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.523438 46.875 C 8.105469 46.875 8.574219 46.40625 8.574219 45.84375 L 8.574219 41.773438 L 10.878906 41.773438 C 13.109375 41.773438 14.910156 39.976562 14.910156 37.78125 C 14.910156 35.550781 13.109375 33.75 10.878906 33.75 L 7.523438 33.75 C 6.960938 33.75 6.492188 34.199219 6.492188 34.78125 L 6.492188 45.84375 C 6.492188 46.40625 6.960938 46.875 7.523438 46.875 Z M 10.878906 39.695312 L 8.574219 39.695312 L 8.574219 35.832031 L 10.878906 35.832031 C 11.964844 35.832031 12.808594 36.695312 12.828125 37.78125 C 12.808594 38.832031 11.964844 39.695312 10.878906 39.695312 Z M 26.75 46.875 C 27.3125 46.875 27.78125 46.40625 27.78125 45.84375 L 27.78125 34.949219 C 27.78125 34.40625 27.3125 33.9375 26.75 33.9375 C 26.1875 33.9375 25.738281 34.40625 25.738281 34.949219 L 25.738281 42.675781 L 19.679688 34.292969 C 19.363281 33.84375 18.722656 33.75 18.253906 34.070312 C 17.972656 34.273438 17.824219 34.613281 17.84375 34.929688 L 17.84375 45.84375 C 17.84375 46.40625 18.292969 46.875 18.875 46.875 C 19.417969 46.875 19.886719 46.40625 19.886719 45.84375 L 19.886719 38.0625 L 25.886719 46.386719 C 25.90625 46.425781 25.941406 46.460938 25.980469 46.5 C 26.167969 46.726562 26.449219 46.875 26.75 46.875 Z M 38.082031 46.875 C 39.675781 46.875 41.15625 46.332031 42.339844 45.414062 C 42.527344 45.28125 42.636719 45.132812 42.695312 44.960938 L 42.695312 44.945312 C 42.714844 44.90625 42.714844 44.886719 42.730469 44.851562 C 42.75 44.738281 42.789062 44.664062 42.789062 44.53125 L 42.789062 40.386719 C 42.789062 39.789062 42.300781 39.335938 41.699219 39.335938 L 37.96875 39.335938 C 37.386719 39.335938 36.902344 39.789062 36.902344 40.386719 C 36.902344 40.96875 37.386719 41.457031 37.96875 41.457031 L 40.652344 41.457031 L 40.652344 44.023438 C 39.902344 44.457031 39.019531 44.738281 38.082031 44.738281 C 36.730469 44.738281 35.550781 44.230469 34.707031 43.367188 C 33.824219 42.523438 33.300781 41.382812 33.300781 40.144531 C 33.300781 38.867188 33.824219 37.726562 34.707031 36.882812 C 35.550781 36.019531 36.730469 35.511719 38.082031 35.511719 C 39.207031 35.511719 40.238281 35.90625 41.042969 36.523438 C 41.511719 36.898438 42.207031 36.804688 42.5625 36.355469 C 42.917969 35.886719 42.84375 35.195312 42.355469 34.835938 C 41.195312 33.917969 39.675781 33.375 38.082031 33.375 C 34.277344 33.375 31.164062 36.375 31.164062 40.144531 C 31.164062 43.894531 34.277344 46.875 38.082031 46.875 Z M 38.082031 46.875 "/>\n      </g>'},txtIcon:{extension:".txt",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.847656 46.875 C 13.429688 46.875 13.878906 46.425781 13.878906 45.84375 L 13.878906 35.832031 L 16.859375 35.832031 C 17.421875 35.832031 17.890625 35.34375 17.890625 34.78125 C 17.890625 34.199219 17.421875 33.75 16.859375 33.75 L 8.855469 33.75 C 8.273438 33.75 7.824219 34.199219 7.824219 34.78125 C 7.824219 35.34375 8.273438 35.832031 8.855469 35.832031 L 11.816406 35.832031 L 11.816406 45.84375 C 11.816406 46.425781 12.285156 46.875 12.847656 46.875 Z M 29.019531 46.875 C 29.222656 46.875 29.429688 46.800781 29.617188 46.667969 C 30.085938 46.351562 30.160156 45.695312 29.84375 45.242188 L 26.28125 40.367188 L 29.84375 35.53125 C 30.160156 35.0625 30.085938 34.425781 29.617188 34.105469 C 29.148438 33.75 28.53125 33.84375 28.175781 34.332031 L 25.023438 38.644531 L 21.855469 34.332031 C 21.535156 33.84375 20.878906 33.75 20.429688 34.105469 C 19.960938 34.425781 19.867188 35.0625 20.1875 35.53125 L 23.75 40.367188 L 20.1875 45.242188 C 19.867188 45.695312 19.960938 46.351562 20.429688 46.667969 C 20.597656 46.800781 20.804688 46.875 21.03125 46.875 C 21.347656 46.875 21.648438 46.707031 21.855469 46.445312 L 25.023438 42.113281 L 28.175781 46.445312 C 28.378906 46.707031 28.679688 46.875 29.019531 46.875 Z M 37.464844 46.875 C 38.042969 46.875 38.496094 46.425781 38.496094 45.84375 L 38.496094 35.832031 L 41.476562 35.832031 C 42.039062 35.832031 42.507812 35.34375 42.507812 34.78125 C 42.507812 34.199219 42.039062 33.75 41.476562 33.75 L 33.46875 33.75 C 32.886719 33.75 32.4375 34.199219 32.4375 34.78125 C 32.4375 35.34375 32.886719 35.832031 33.46875 35.832031 L 36.433594 35.832031 L 36.433594 45.84375 C 36.433594 46.425781 36.902344 46.875 37.464844 46.875 Z M 37.464844 46.875 "/>\n      </g>'},webmIcon:{extension:".webm",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.195312 43.734375 L 7.242188 43.734375 C 7.273438 43.71875 7.304688 43.703125 7.367188 43.703125 C 7.367188 43.6875 7.382812 43.6875 7.382812 43.6875 L 7.398438 43.6875 C 7.429688 43.671875 7.476562 43.625 7.523438 43.59375 L 7.554688 43.59375 C 7.585938 43.5625 7.617188 43.53125 7.648438 43.515625 C 7.648438 43.5 7.664062 43.5 7.664062 43.46875 L 7.757812 43.375 C 7.757812 43.375 7.757812 43.359375 7.773438 43.359375 C 7.789062 43.328125 7.820312 43.265625 7.835938 43.21875 L 9.882812 38.375 L 11.929688 43.21875 C 11.945312 43.265625 11.960938 43.328125 11.992188 43.359375 C 11.992188 43.359375 11.992188 43.375 12.023438 43.375 L 12.085938 43.46875 C 12.101562 43.5 12.101562 43.5 12.117188 43.515625 C 12.148438 43.53125 12.179688 43.5625 12.226562 43.59375 L 12.242188 43.59375 C 12.273438 43.625 12.320312 43.671875 12.382812 43.6875 C 12.398438 43.6875 12.398438 43.6875 12.414062 43.703125 C 12.445312 43.703125 12.476562 43.71875 12.523438 43.734375 L 12.570312 43.734375 L 12.640625 43.746094 L 12.710938 43.75 C 12.773438 43.75 12.820312 43.75 12.867188 43.734375 L 12.898438 43.734375 C 12.945312 43.71875 12.992188 43.703125 13.023438 43.703125 C 13.023438 43.6875 13.039062 43.6875 13.039062 43.6875 L 13.054688 43.6875 C 13.117188 43.671875 13.148438 43.625 13.195312 43.59375 L 13.210938 43.59375 C 13.242188 43.5625 13.289062 43.53125 13.320312 43.515625 C 13.320312 43.5 13.335938 43.5 13.335938 43.46875 C 13.367188 43.4375 13.398438 43.40625 13.414062 43.375 C 13.414062 43.375 13.429688 43.359375 13.429688 43.359375 C 13.460938 43.328125 13.492188 43.265625 13.507812 43.21875 L 17.335938 34.109375 C 17.523438 33.6875 17.320312 33.171875 16.898438 33 C 16.445312 32.8125 15.945312 33.015625 15.757812 33.453125 L 12.710938 40.6875 L 10.695312 35.890625 C 10.539062 35.546875 10.210938 35.359375 9.882812 35.359375 C 9.539062 35.359375 9.210938 35.546875 9.070312 35.890625 L 7.054688 40.6875 L 3.992188 33.453125 C 3.820312 33.015625 3.304688 32.8125 2.882812 33 C 2.429688 33.171875 2.242188 33.6875 2.414062 34.109375 L 6.257812 43.21875 C 6.289062 43.265625 6.304688 43.328125 6.335938 43.359375 L 6.335938 43.375 C 6.367188 43.40625 6.382812 43.4375 6.414062 43.46875 C 6.429688 43.5 6.429688 43.5 6.445312 43.515625 C 6.492188 43.53125 6.507812 43.5625 6.554688 43.59375 L 6.570312 43.59375 C 6.601562 43.625 6.664062 43.671875 6.710938 43.6875 C 6.726562 43.6875 6.726562 43.6875 6.742188 43.703125 C 6.773438 43.703125 6.804688 43.71875 6.851562 43.734375 L 6.898438 43.734375 L 6.976562 43.746094 L 7.054688 43.75 C 7.101562 43.75 7.148438 43.75 7.195312 43.734375 Z M 25.179688 43.75 C 25.632812 43.75 26.039062 43.359375 26.039062 42.890625 C 26.039062 42.40625 25.632812 42.015625 25.179688 42.015625 L 20.945312 42.015625 L 20.945312 39.140625 L 24.585938 39.140625 C 25.054688 39.140625 25.445312 38.75 25.445312 38.265625 C 25.445312 37.8125 25.054688 37.40625 24.585938 37.40625 L 20.945312 37.40625 L 20.945312 34.546875 L 25.179688 34.546875 C 25.632812 34.546875 26.039062 34.15625 26.039062 33.671875 C 26.039062 33.1875 25.632812 32.8125 25.179688 32.8125 L 20.070312 32.8125 C 19.585938 32.8125 19.210938 33.1875 19.210938 33.671875 L 19.210938 42.890625 C 19.210938 43.359375 19.585938 43.75 20.070312 43.75 C 20.070312 43.75 20.085938 43.734375 20.085938 43.734375 C 20.085938 43.734375 20.085938 43.75 20.117188 43.75 Z M 31.539062 43.75 C 33.382812 43.75 34.882812 42.25 34.882812 40.390625 C 34.882812 39.203125 34.242188 38.15625 33.304688 37.5625 C 33.679688 37.0625 33.898438 36.453125 33.898438 35.78125 C 33.898438 34.140625 32.570312 32.8125 30.929688 32.8125 L 28.710938 32.8125 C 28.242188 32.8125 27.851562 33.1875 27.851562 33.671875 L 27.851562 42.890625 C 27.851562 43.359375 28.242188 43.75 28.710938 43.75 L 28.757812 43.734375 C 28.757812 43.734375 28.757812 43.75 28.773438 43.75 Z M 30.929688 37.046875 L 29.585938 37.046875 L 29.585938 34.546875 L 30.929688 34.546875 C 31.617188 34.546875 32.164062 35.09375 32.164062 35.78125 C 32.164062 36.46875 31.617188 37.046875 30.929688 37.046875 Z M 31.539062 42.015625 L 29.585938 42.015625 L 29.585938 38.78125 L 31.539062 38.78125 C 32.429688 38.796875 33.148438 39.5 33.148438 40.390625 C 33.148438 41.296875 32.429688 42 31.539062 42.015625 Z M 45.664062 43.75 C 46.132812 43.75 46.539062 43.359375 46.539062 42.890625 L 46.539062 33.671875 C 46.539062 33.269531 46.242188 32.9375 45.859375 32.839844 L 45.664062 32.8125 L 45.648438 32.8125 C 45.367188 32.8125 45.117188 32.9375 44.945312 33.171875 L 41.835938 37.484375 L 38.726562 33.171875 C 38.570312 32.9375 38.289062 32.8125 38.039062 32.8125 L 37.992188 32.8125 C 37.523438 32.8125 37.132812 33.203125 37.132812 33.671875 L 37.132812 42.890625 C 37.132812 43.359375 37.523438 43.75 37.992188 43.75 C 38.476562 43.75 38.867188 43.359375 38.867188 42.890625 L 38.867188 36.3125 L 41.101562 39.4375 C 41.273438 39.671875 41.539062 39.796875 41.820312 39.796875 L 41.851562 39.796875 C 42.132812 39.796875 42.382812 39.671875 42.554688 39.4375 L 44.804688 36.3125 L 44.804688 42.890625 C 44.804688 43.359375 45.179688 43.75 45.664062 43.75 Z M 45.664062 43.75 "/>\n      </g>'},webpIcon:{extension:".webp",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.234375 43.734375 L 9.28125 43.734375 C 9.3125 43.71875 9.34375 43.703125 9.40625 43.703125 L 9.414062 43.6875 C 9.421875 43.6875 9.421875 43.6875 9.4375 43.6875 C 9.46875 43.671875 9.515625 43.625 9.5625 43.59375 L 9.59375 43.59375 C 9.625 43.5625 9.65625 43.53125 9.6875 43.515625 C 9.6875 43.5 9.703125 43.5 9.703125 43.46875 L 9.796875 43.375 C 9.796875 43.375 9.796875 43.359375 9.8125 43.359375 C 9.828125 43.328125 9.859375 43.265625 9.875 43.21875 L 11.921875 38.375 L 13.96875 43.21875 C 13.984375 43.265625 14 43.328125 14.03125 43.359375 C 14.03125 43.359375 14.03125 43.375 14.0625 43.375 L 14.125 43.46875 C 14.140625 43.5 14.140625 43.5 14.15625 43.515625 L 14.203125 43.546875 L 14.265625 43.59375 C 14.265625 43.59375 14.265625 43.59375 14.28125 43.59375 C 14.3125 43.625 14.359375 43.671875 14.421875 43.6875 C 14.4375 43.6875 14.4375 43.6875 14.453125 43.703125 C 14.484375 43.703125 14.515625 43.71875 14.5625 43.734375 L 14.609375 43.734375 L 14.679688 43.746094 L 14.75 43.75 C 14.8125 43.75 14.859375 43.75 14.90625 43.734375 L 14.9375 43.734375 C 14.984375 43.71875 15.03125 43.703125 15.0625 43.703125 C 15.0625 43.6875 15.078125 43.6875 15.078125 43.6875 L 15.09375 43.6875 C 15.15625 43.671875 15.1875 43.625 15.234375 43.59375 L 15.25 43.59375 C 15.28125 43.5625 15.328125 43.53125 15.359375 43.515625 C 15.359375 43.5 15.375 43.5 15.375 43.46875 C 15.40625 43.4375 15.4375 43.40625 15.453125 43.375 L 15.46875 43.359375 C 15.5 43.328125 15.53125 43.265625 15.546875 43.21875 L 19.375 34.109375 C 19.5625 33.6875 19.359375 33.171875 18.9375 33 C 18.484375 32.8125 17.984375 33.015625 17.796875 33.453125 L 14.75 40.6875 L 12.734375 35.890625 C 12.578125 35.546875 12.25 35.359375 11.921875 35.359375 C 11.578125 35.359375 11.25 35.546875 11.109375 35.890625 L 9.09375 40.6875 L 6.03125 33.453125 C 5.859375 33.015625 5.34375 32.8125 4.921875 33 C 4.46875 33.171875 4.28125 33.6875 4.453125 34.109375 L 8.296875 43.21875 C 8.328125 43.265625 8.34375 43.328125 8.375 43.359375 L 8.375 43.375 C 8.40625 43.40625 8.421875 43.4375 8.453125 43.46875 C 8.46875 43.5 8.46875 43.5 8.484375 43.515625 L 8.539062 43.546875 L 8.59375 43.59375 C 8.59375 43.59375 8.59375 43.59375 8.609375 43.59375 C 8.640625 43.625 8.703125 43.671875 8.75 43.6875 C 8.765625 43.6875 8.765625 43.6875 8.78125 43.703125 C 8.8125 43.703125 8.84375 43.71875 8.890625 43.734375 L 8.9375 43.734375 L 9.015625 43.746094 L 9.09375 43.75 C 9.140625 43.75 9.1875 43.75 9.234375 43.734375 Z M 27.21875 43.75 C 27.671875 43.75 28.078125 43.359375 28.078125 42.890625 C 28.078125 42.40625 27.671875 42.015625 27.21875 42.015625 L 22.984375 42.015625 L 22.984375 39.140625 L 26.625 39.140625 C 27.09375 39.140625 27.484375 38.75 27.484375 38.265625 C 27.484375 37.8125 27.09375 37.40625 26.625 37.40625 L 22.984375 37.40625 L 22.984375 34.546875 L 27.21875 34.546875 C 27.671875 34.546875 28.078125 34.15625 28.078125 33.671875 C 28.078125 33.1875 27.671875 32.8125 27.21875 32.8125 L 22.109375 32.8125 C 21.625 32.8125 21.25 33.1875 21.25 33.671875 L 21.25 42.890625 C 21.25 43.359375 21.625 43.75 22.109375 43.75 L 22.125 43.734375 C 22.125 43.734375 22.125 43.75 22.15625 43.75 Z M 33.578125 43.75 C 35.421875 43.75 36.921875 42.25 36.921875 40.390625 C 36.921875 39.203125 36.28125 38.15625 35.34375 37.5625 C 35.71875 37.0625 35.9375 36.453125 35.9375 35.78125 C 35.9375 34.140625 34.609375 32.8125 32.96875 32.8125 L 30.75 32.8125 C 30.28125 32.8125 29.890625 33.1875 29.890625 33.671875 L 29.890625 42.890625 C 29.890625 43.359375 30.28125 43.75 30.75 43.75 C 30.765625 43.75 30.765625 43.734375 30.796875 43.734375 C 30.796875 43.734375 30.796875 43.75 30.8125 43.75 Z M 32.96875 37.046875 L 31.625 37.046875 L 31.625 34.546875 L 32.96875 34.546875 C 33.65625 34.546875 34.203125 35.09375 34.203125 35.78125 C 34.203125 36.46875 33.65625 37.046875 32.96875 37.046875 Z M 33.578125 42.015625 L 31.625 42.015625 L 31.625 38.78125 L 33.578125 38.78125 C 34.46875 38.796875 35.1875 39.5 35.1875 40.390625 C 35.1875 41.296875 34.46875 42 33.578125 42.015625 Z M 40.03125 43.75 C 40.515625 43.75 40.90625 43.359375 40.90625 42.890625 L 40.90625 39.5 L 42.828125 39.5 C 44.6875 39.5 46.1875 38 46.1875 36.171875 C 46.1875 34.3125 44.6875 32.8125 42.828125 32.8125 L 40.03125 32.8125 C 39.5625 32.8125 39.171875 33.1875 39.171875 33.671875 L 39.171875 42.890625 C 39.171875 43.359375 39.5625 43.75 40.03125 43.75 Z M 42.828125 37.765625 L 40.90625 37.765625 L 40.90625 34.546875 L 42.828125 34.546875 C 43.734375 34.546875 44.4375 35.265625 44.453125 36.171875 C 44.4375 37.046875 43.734375 37.765625 42.828125 37.765625 Z M 42.828125 37.765625 "/>\n      </g>'},wmvIcon:{extension:".wmv",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.484375 43.734375 L 8.53125 43.734375 C 8.5625 43.71875 8.59375 43.703125 8.65625 43.703125 L 8.664062 43.6875 C 8.671875 43.6875 8.671875 43.6875 8.6875 43.6875 C 8.71875 43.671875 8.765625 43.625 8.8125 43.59375 L 8.84375 43.59375 C 8.875 43.5625 8.90625 43.53125 8.9375 43.515625 C 8.9375 43.5 8.953125 43.5 8.953125 43.46875 L 9.046875 43.375 C 9.046875 43.375 9.046875 43.359375 9.0625 43.359375 C 9.078125 43.328125 9.109375 43.265625 9.125 43.21875 L 11.171875 38.375 L 13.21875 43.21875 C 13.234375 43.265625 13.25 43.328125 13.28125 43.359375 C 13.28125 43.359375 13.28125 43.375 13.3125 43.375 L 13.375 43.46875 C 13.390625 43.5 13.390625 43.5 13.40625 43.515625 L 13.453125 43.546875 L 13.515625 43.59375 C 13.515625 43.59375 13.515625 43.59375 13.53125 43.59375 C 13.5625 43.625 13.609375 43.671875 13.671875 43.6875 C 13.6875 43.6875 13.6875 43.6875 13.703125 43.703125 C 13.734375 43.703125 13.765625 43.71875 13.8125 43.734375 L 13.859375 43.734375 L 13.929688 43.746094 L 14 43.75 C 14.0625 43.75 14.109375 43.75 14.15625 43.734375 L 14.1875 43.734375 C 14.234375 43.71875 14.28125 43.703125 14.3125 43.703125 C 14.3125 43.6875 14.328125 43.6875 14.328125 43.6875 L 14.34375 43.6875 C 14.40625 43.671875 14.4375 43.625 14.484375 43.59375 L 14.5 43.59375 C 14.53125 43.5625 14.578125 43.53125 14.609375 43.515625 C 14.609375 43.5 14.625 43.5 14.625 43.46875 C 14.65625 43.4375 14.6875 43.40625 14.703125 43.375 L 14.71875 43.359375 C 14.75 43.328125 14.78125 43.265625 14.796875 43.21875 L 18.625 34.109375 C 18.8125 33.6875 18.609375 33.171875 18.1875 33 C 17.734375 32.8125 17.234375 33.015625 17.046875 33.453125 L 14 40.6875 L 11.984375 35.890625 C 11.828125 35.546875 11.5 35.359375 11.171875 35.359375 C 10.828125 35.359375 10.5 35.546875 10.359375 35.890625 L 8.34375 40.6875 L 5.28125 33.453125 C 5.109375 33.015625 4.59375 32.8125 4.171875 33 C 3.71875 33.171875 3.53125 33.6875 3.703125 34.109375 L 7.546875 43.21875 C 7.578125 43.265625 7.59375 43.328125 7.625 43.359375 L 7.625 43.375 C 7.65625 43.40625 7.671875 43.4375 7.703125 43.46875 C 7.71875 43.5 7.71875 43.5 7.734375 43.515625 L 7.789062 43.546875 L 7.84375 43.59375 C 7.84375 43.59375 7.84375 43.59375 7.859375 43.59375 C 7.890625 43.625 7.953125 43.671875 8 43.6875 C 8.015625 43.6875 8.015625 43.6875 8.03125 43.703125 C 8.0625 43.703125 8.09375 43.71875 8.140625 43.734375 L 8.1875 43.734375 L 8.265625 43.746094 L 8.34375 43.75 C 8.390625 43.75 8.4375 43.75 8.484375 43.734375 Z M 29.03125 43.75 C 29.5 43.75 29.90625 43.359375 29.90625 42.890625 L 29.90625 33.671875 C 29.90625 33.269531 29.609375 32.9375 29.226562 32.839844 L 29.03125 32.8125 L 29.015625 32.8125 C 28.734375 32.8125 28.484375 32.9375 28.3125 33.171875 L 25.203125 37.484375 L 22.09375 33.171875 C 21.9375 32.9375 21.65625 32.8125 21.40625 32.8125 L 21.359375 32.8125 C 20.890625 32.8125 20.5 33.203125 20.5 33.671875 L 20.5 42.890625 C 20.5 43.359375 20.890625 43.75 21.359375 43.75 C 21.84375 43.75 22.234375 43.359375 22.234375 42.890625 L 22.234375 36.3125 L 24.46875 39.4375 C 24.640625 39.671875 24.90625 39.796875 25.1875 39.796875 L 25.21875 39.796875 C 25.5 39.796875 25.75 39.671875 25.921875 39.4375 L 28.171875 36.3125 L 28.171875 42.890625 C 28.171875 43.359375 28.546875 43.75 29.03125 43.75 Z M 37.015625 43.734375 L 37.0625 43.734375 C 37.09375 43.71875 37.125 43.703125 37.1875 43.703125 L 37.195312 43.6875 C 37.203125 43.6875 37.203125 43.6875 37.21875 43.6875 C 37.25 43.671875 37.296875 43.625 37.34375 43.59375 L 37.375 43.59375 C 37.40625 43.5625 37.4375 43.53125 37.46875 43.515625 C 37.46875 43.5 37.484375 43.5 37.484375 43.46875 L 37.578125 43.375 C 37.578125 43.375 37.578125 43.359375 37.59375 43.359375 C 37.609375 43.328125 37.640625 43.265625 37.65625 43.21875 L 39.703125 38.375 L 41.75 43.21875 C 41.765625 43.265625 41.78125 43.328125 41.8125 43.359375 C 41.8125 43.359375 41.8125 43.375 41.84375 43.375 L 41.90625 43.46875 C 41.921875 43.5 41.921875 43.5 41.9375 43.515625 L 41.984375 43.546875 L 42.046875 43.59375 C 42.046875 43.59375 42.046875 43.59375 42.0625 43.59375 C 42.09375 43.625 42.140625 43.671875 42.203125 43.6875 C 42.21875 43.6875 42.21875 43.6875 42.234375 43.703125 C 42.265625 43.703125 42.296875 43.71875 42.34375 43.734375 L 42.390625 43.734375 L 42.460938 43.746094 L 42.53125 43.75 C 42.59375 43.75 42.640625 43.75 42.6875 43.734375 L 42.71875 43.734375 C 42.765625 43.71875 42.8125 43.703125 42.84375 43.703125 C 42.84375 43.6875 42.859375 43.6875 42.859375 43.6875 L 42.875 43.6875 C 42.9375 43.671875 42.96875 43.625 43.015625 43.59375 L 43.03125 43.59375 C 43.0625 43.5625 43.109375 43.53125 43.140625 43.515625 C 43.140625 43.5 43.15625 43.5 43.15625 43.46875 C 43.1875 43.4375 43.21875 43.40625 43.234375 43.375 L 43.25 43.359375 C 43.28125 43.328125 43.3125 43.265625 43.328125 43.21875 L 47.15625 34.109375 C 47.34375 33.6875 47.140625 33.171875 46.71875 33 C 46.265625 32.8125 45.765625 33.015625 45.578125 33.453125 L 42.53125 40.6875 L 40.515625 35.890625 C 40.359375 35.546875 40.03125 35.359375 39.703125 35.359375 C 39.359375 35.359375 39.03125 35.546875 38.890625 35.890625 L 36.875 40.6875 L 33.8125 33.453125 C 33.640625 33.015625 33.125 32.8125 32.703125 33 C 32.25 33.171875 32.0625 33.6875 32.234375 34.109375 L 36.078125 43.21875 C 36.109375 43.265625 36.125 43.328125 36.15625 43.359375 L 36.15625 43.375 C 36.1875 43.40625 36.203125 43.4375 36.234375 43.46875 C 36.25 43.5 36.25 43.5 36.265625 43.515625 L 36.320312 43.546875 L 36.375 43.59375 C 36.375 43.59375 36.375 43.59375 36.390625 43.59375 C 36.421875 43.625 36.484375 43.671875 36.53125 43.6875 C 36.546875 43.6875 36.546875 43.6875 36.5625 43.703125 C 36.59375 43.703125 36.625 43.71875 36.671875 43.734375 L 36.71875 43.734375 L 36.796875 43.746094 L 36.875 43.75 C 36.921875 43.75 36.96875 43.75 37.015625 43.734375 Z M 37.015625 43.734375 "/>\n      </g>'},xlsIcon:{extension:".xls",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 17.21875 46.875 C 17.425781 46.875 17.632812 46.800781 17.820312 46.667969 C 18.289062 46.351562 18.363281 45.695312 18.042969 45.242188 L 14.480469 40.367188 L 18.042969 35.53125 C 18.363281 35.0625 18.289062 34.425781 17.820312 34.105469 C 17.351562 33.75 16.730469 33.84375 16.375 34.332031 L 13.226562 38.644531 L 10.054688 34.332031 C 9.738281 33.84375 9.082031 33.75 8.632812 34.105469 C 8.164062 34.425781 8.070312 35.0625 8.386719 35.53125 L 11.949219 40.367188 L 8.386719 45.242188 C 8.070312 45.695312 8.164062 46.351562 8.632812 46.667969 C 8.800781 46.800781 9.007812 46.875 9.230469 46.875 C 9.550781 46.875 9.851562 46.707031 10.054688 46.445312 L 13.226562 42.113281 L 16.375 46.445312 C 16.582031 46.707031 16.882812 46.875 17.21875 46.875 Z M 29.351562 46.875 C 29.894531 46.875 30.382812 46.40625 30.382812 45.84375 C 30.382812 45.261719 29.894531 44.792969 29.351562 44.792969 L 24.269531 44.792969 L 24.269531 34.78125 C 24.269531 34.21875 23.800781 33.75 23.21875 33.75 C 22.636719 33.75 22.1875 34.21875 22.1875 34.78125 L 22.1875 45.84375 C 22.1875 46.335938 22.53125 46.757812 23.007812 46.855469 L 23.222656 46.875 Z M 37.28125 46.855469 C 38.613281 46.855469 39.832031 46.460938 40.75 45.789062 C 41.6875 45.113281 42.363281 44.082031 42.363281 42.882812 C 42.363281 42.300781 42.195312 41.738281 41.914062 41.289062 C 41.480469 40.59375 40.804688 40.105469 40.039062 39.730469 C 39.289062 39.375 38.40625 39.132812 37.449219 38.945312 L 37.414062 38.945312 C 36.398438 38.757812 35.554688 38.457031 35.070312 38.117188 C 34.824219 37.949219 34.65625 37.78125 34.5625 37.632812 C 34.46875 37.480469 34.429688 37.332031 34.429688 37.105469 C 34.429688 36.710938 34.636719 36.300781 35.144531 35.925781 C 35.648438 35.550781 36.398438 35.289062 37.242188 35.289062 C 38.386719 35.289062 39.304688 35.851562 40.261719 36.488281 C 40.710938 36.789062 41.3125 36.65625 41.59375 36.207031 C 41.894531 35.773438 41.761719 35.175781 41.332031 34.875 C 40.375 34.257812 39.042969 33.375 37.242188 33.375 C 36.023438 33.375 34.882812 33.730469 34 34.367188 C 33.136719 35.007812 32.5 35.980469 32.5 37.105469 C 32.5 37.667969 32.648438 38.195312 32.929688 38.644531 C 33.34375 39.300781 33.960938 39.769531 34.675781 40.105469 C 35.386719 40.445312 36.210938 40.667969 37.09375 40.835938 L 37.132812 40.835938 C 38.238281 41.042969 39.15625 41.363281 39.699219 41.71875 C 39.980469 41.90625 40.148438 42.09375 40.261719 42.28125 C 40.375 42.46875 40.429688 42.636719 40.429688 42.882812 C 40.429688 43.351562 40.1875 43.820312 39.625 44.230469 C 39.0625 44.644531 38.21875 44.925781 37.28125 44.925781 C 35.949219 44.945312 34.523438 44.15625 33.699219 43.480469 C 33.289062 43.144531 32.667969 43.199219 32.332031 43.613281 C 32.011719 44.023438 32.070312 44.644531 32.480469 44.980469 C 33.550781 45.824219 35.257812 46.835938 37.28125 46.855469 Z M 37.28125 46.855469 "/>\n      </g>'},xlsxIcon:{extension:".xlsx",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.070312 43.75 C 13.242188 43.75 13.414062 43.6875 13.570312 43.578125 C 13.960938 43.3125 14.023438 42.765625 13.757812 42.390625 L 10.789062 38.328125 L 13.757812 34.296875 C 14.023438 33.90625 13.960938 33.375 13.570312 33.109375 C 13.179688 32.8125 12.664062 32.890625 12.367188 33.296875 L 9.742188 36.890625 L 7.101562 33.296875 C 6.835938 32.890625 6.289062 32.8125 5.914062 33.109375 C 5.523438 33.375 5.445312 33.90625 5.710938 34.296875 L 8.679688 38.328125 L 5.710938 42.390625 C 5.445312 42.765625 5.523438 43.3125 5.914062 43.578125 C 6.054688 43.6875 6.226562 43.75 6.414062 43.75 C 6.679688 43.75 6.929688 43.609375 7.101562 43.390625 L 9.742188 39.78125 L 12.367188 43.390625 C 12.539062 43.609375 12.789062 43.75 13.070312 43.75 Z M 23.179688 43.75 C 23.632812 43.75 24.039062 43.359375 24.039062 42.890625 C 24.039062 42.40625 23.632812 42.015625 23.179688 42.015625 L 18.945312 42.015625 L 18.945312 33.671875 C 18.945312 33.203125 18.554688 32.8125 18.070312 32.8125 C 17.585938 32.8125 17.210938 33.203125 17.210938 33.671875 L 17.210938 42.890625 C 17.210938 43.359375 17.585938 43.75 18.070312 43.75 Z M 29.789062 43.734375 C 30.898438 43.734375 31.914062 43.40625 32.679688 42.84375 C 33.460938 42.28125 34.023438 41.421875 34.023438 40.421875 C 34.023438 39.9375 33.882812 39.46875 33.648438 39.09375 C 33.289062 38.515625 32.726562 38.109375 32.085938 37.796875 C 31.460938 37.5 30.726562 37.296875 29.929688 37.140625 L 29.898438 37.140625 C 29.054688 36.984375 28.351562 36.734375 27.945312 36.453125 C 27.742188 36.3125 27.601562 36.171875 27.523438 36.046875 C 27.445312 35.921875 27.414062 35.796875 27.414062 35.609375 C 27.414062 35.28125 27.585938 34.9375 28.007812 34.625 C 28.429688 34.3125 29.054688 34.09375 29.757812 34.09375 C 30.710938 34.09375 31.476562 34.5625 32.273438 35.09375 C 32.648438 35.34375 33.148438 35.234375 33.382812 34.859375 C 33.632812 34.5 33.523438 34 33.164062 33.75 C 32.367188 33.234375 31.257812 32.5 29.757812 32.5 C 28.742188 32.5 27.789062 32.796875 27.054688 33.328125 C 26.335938 33.859375 25.804688 34.671875 25.804688 35.609375 C 25.804688 36.078125 25.929688 36.515625 26.164062 36.890625 C 26.507812 37.4375 27.023438 37.828125 27.617188 38.109375 C 28.210938 38.390625 28.898438 38.578125 29.632812 38.71875 L 29.664062 38.71875 C 30.585938 38.890625 31.351562 39.15625 31.804688 39.453125 C 32.039062 39.609375 32.179688 39.765625 32.273438 39.921875 C 32.367188 40.078125 32.414062 40.21875 32.414062 40.421875 C 32.414062 40.8125 32.210938 41.203125 31.742188 41.546875 C 31.273438 41.890625 30.570312 42.125 29.789062 42.125 C 28.679688 42.140625 27.492188 41.484375 26.804688 40.921875 C 26.460938 40.640625 25.945312 40.6875 25.664062 41.03125 C 25.398438 41.375 25.445312 41.890625 25.789062 42.171875 C 26.679688 42.875 28.101562 43.71875 29.789062 43.734375 Z M 43.179688 43.75 C 43.351562 43.75 43.523438 43.6875 43.679688 43.578125 C 44.070312 43.3125 44.132812 42.765625 43.867188 42.390625 L 40.898438 38.328125 L 43.867188 34.296875 C 44.132812 33.90625 44.070312 33.375 43.679688 33.109375 C 43.289062 32.8125 42.773438 32.890625 42.476562 33.296875 L 39.851562 36.890625 L 37.210938 33.296875 C 36.945312 32.890625 36.398438 32.8125 36.023438 33.109375 C 35.632812 33.375 35.554688 33.90625 35.820312 34.296875 L 38.789062 38.328125 L 35.820312 42.390625 C 35.554688 42.765625 35.632812 43.3125 36.023438 43.578125 C 36.164062 43.6875 36.335938 43.75 36.523438 43.75 C 36.789062 43.75 37.039062 43.609375 37.210938 43.390625 L 39.851562 39.78125 L 42.476562 43.390625 C 42.648438 43.609375 42.898438 43.75 43.179688 43.75 Z M 43.179688 43.75 "/>\n      </g>'},zipIcon:{extension:".zip",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 20.175781 46.875 C 20.855469 46.875 21.402344 46.351562 21.402344 45.671875 C 21.402344 44.992188 20.855469 44.445312 20.175781 44.445312 L 13.132812 44.445312 L 21.183594 33.488281 L 21.183594 33.445312 C 21.203125 33.421875 21.226562 33.378906 21.25 33.335938 C 21.269531 33.3125 21.269531 33.289062 21.292969 33.269531 C 21.3125 33.203125 21.3125 33.179688 21.335938 33.136719 C 21.335938 33.09375 21.378906 33.070312 21.378906 33.007812 C 21.378906 32.984375 21.378906 32.960938 21.402344 32.917969 L 21.402344 32.679688 C 21.402344 32.632812 21.402344 32.613281 21.378906 32.546875 C 21.378906 32.503906 21.378906 32.480469 21.335938 32.4375 C 21.335938 32.414062 21.3125 32.371094 21.3125 32.304688 C 21.292969 32.285156 21.269531 32.242188 21.269531 32.21875 C 21.25 32.195312 21.226562 32.152344 21.203125 32.109375 C 21.183594 32.066406 21.160156 32.042969 21.117188 32.023438 C 21.09375 32 21.074219 31.957031 21.050781 31.933594 C 21.03125 31.914062 21.007812 31.867188 20.964844 31.847656 C 20.941406 31.824219 20.941406 31.804688 20.898438 31.78125 L 20.875 31.78125 C 20.832031 31.757812 20.8125 31.738281 20.765625 31.714844 C 20.746094 31.695312 20.722656 31.648438 20.65625 31.648438 L 20.570312 31.605469 L 20.4375 31.585938 C 20.417969 31.585938 20.375 31.5625 20.351562 31.5625 L 10.75 31.5625 C 10.070312 31.5625 9.546875 32.085938 9.546875 32.765625 C 9.546875 33.421875 10.070312 33.992188 10.75 33.992188 L 17.8125 33.992188 L 9.785156 44.972656 L 9.765625 44.972656 C 9.742188 45.015625 9.71875 45.058594 9.699219 45.082031 C 9.699219 45.101562 9.675781 45.148438 9.632812 45.167969 C 9.632812 45.210938 9.609375 45.257812 9.609375 45.277344 C 9.589844 45.320312 9.589844 45.367188 9.566406 45.386719 L 9.566406 45.496094 C 9.546875 45.539062 9.546875 45.585938 9.546875 45.648438 L 9.546875 45.738281 C 9.546875 45.78125 9.566406 45.824219 9.566406 45.890625 C 9.566406 45.933594 9.589844 45.957031 9.589844 45.976562 L 9.632812 46.109375 C 9.632812 46.152344 9.675781 46.175781 9.699219 46.21875 C 9.699219 46.242188 9.71875 46.261719 9.742188 46.328125 C 9.765625 46.351562 9.785156 46.394531 9.808594 46.414062 C 9.828125 46.4375 9.851562 46.460938 9.894531 46.480469 L 9.9375 46.542969 L 9.984375 46.589844 C 10.003906 46.613281 10.027344 46.632812 10.046875 46.632812 L 10.046875 46.65625 C 10.070312 46.679688 10.09375 46.679688 10.136719 46.699219 C 10.179688 46.722656 10.222656 46.742188 10.246094 46.742188 C 10.265625 46.789062 10.289062 46.789062 10.3125 46.808594 C 10.375 46.808594 10.421875 46.832031 10.464844 46.832031 C 10.484375 46.851562 10.507812 46.851562 10.53125 46.851562 L 10.648438 46.871094 Z M 26.214844 46.875 C 26.871094 46.875 27.4375 46.351562 27.4375 45.671875 L 27.4375 32.765625 C 27.4375 32.085938 26.871094 31.5625 26.214844 31.5625 C 25.535156 31.5625 25.011719 32.085938 25.011719 32.765625 L 25.011719 45.671875 C 25.011719 46.351562 25.535156 46.875 26.214844 46.875 Z M 32.734375 46.875 C 33.410156 46.875 33.957031 46.328125 33.957031 45.671875 L 33.957031 40.925781 L 36.648438 40.925781 C 39.25 40.925781 41.351562 38.824219 41.351562 36.265625 C 41.351562 33.664062 39.25 31.5625 36.648438 31.5625 L 32.734375 31.5625 C 32.078125 31.5625 31.53125 32.085938 31.53125 32.765625 L 31.53125 45.671875 C 31.53125 46.328125 32.078125 46.875 32.734375 46.875 Z M 36.648438 38.496094 L 33.957031 38.496094 L 33.957031 33.992188 L 36.648438 33.992188 C 37.917969 33.992188 38.902344 34.996094 38.921875 36.265625 C 38.902344 37.492188 37.917969 38.496094 36.648438 38.496094 Z M 36.648438 38.496094 "/>\n      </g>'},docxIcon:{extension:".docx",path:'<g id="surface9" clip-path="url(#clip1)">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      </g>\n      </defs>\n      <g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface9" mask="url(#mask0)"/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.789062 43.75 C 9.589844 43.75 10.988281 43.269531 11.984375 42.304688 C 12.980469 41.339844 13.476562 39.984375 13.476562 38.234375 C 13.476562 36.496094 12.980469 35.144531 11.984375 34.179688 C 10.988281 33.214844 9.589844 32.734375 7.789062 32.734375 L 4.695312 32.734375 C 4.394531 32.734375 4.15625 32.816406 3.984375 32.984375 C 3.8125 33.152344 3.726562 33.386719 3.726562 33.6875 L 3.726562 42.796875 C 3.726562 43.097656 3.8125 43.332031 3.984375 43.5 C 4.15625 43.667969 4.394531 43.75 4.695312 43.75 Z M 7.664062 42.109375 L 5.742188 42.109375 L 5.742188 34.375 L 7.664062 34.375 C 10.195312 34.375 11.460938 35.660156 11.460938 38.234375 C 11.460938 40.816406 10.195312 42.109375 7.664062 42.109375 Z M 20.414062 43.890625 C 21.476562 43.890625 22.402344 43.660156 23.1875 43.203125 C 23.972656 42.746094 24.582031 42.089844 25.007812 41.234375 C 25.433594 40.378906 25.648438 39.378906 25.648438 38.234375 C 25.648438 37.089844 25.4375 36.089844 25.015625 35.242188 C 24.59375 34.394531 23.988281 33.738281 23.203125 33.28125 C 22.417969 32.824219 21.488281 32.59375 20.414062 32.59375 C 19.339844 32.59375 18.410156 32.824219 17.617188 33.28125 C 16.824219 33.738281 16.21875 34.394531 15.796875 35.242188 C 15.375 36.089844 15.164062 37.089844 15.164062 38.234375 C 15.164062 39.378906 15.378906 40.378906 15.804688 41.234375 C 16.230469 42.089844 16.839844 42.746094 17.625 43.203125 C 18.410156 43.660156 19.339844 43.890625 20.414062 43.890625 Z M 20.414062 42.28125 C 19.394531 42.28125 18.597656 41.933594 18.03125 41.234375 C 17.464844 40.535156 17.179688 39.535156 17.179688 38.234375 C 17.179688 36.933594 17.464844 35.933594 18.03125 35.242188 C 18.597656 34.550781 19.394531 34.203125 20.414062 34.203125 C 21.425781 34.203125 22.214844 34.550781 22.78125 35.242188 C 23.347656 35.933594 23.632812 36.933594 23.632812 38.234375 C 23.632812 39.535156 23.347656 40.535156 22.78125 41.234375 C 22.214844 41.933594 21.425781 42.28125 20.414062 42.28125 Z M 32.601562 43.890625 C 33.289062 43.890625 33.933594 43.789062 34.539062 43.585938 C 35.144531 43.382812 35.679688 43.089844 36.148438 42.703125 C 36.285156 42.597656 36.378906 42.488281 36.429688 42.367188 C 36.480469 42.246094 36.507812 42.109375 36.507812 41.953125 C 36.507812 41.722656 36.445312 41.53125 36.320312 41.375 C 36.195312 41.21875 36.042969 41.140625 35.867188 41.140625 C 35.753906 41.140625 35.644531 41.160156 35.539062 41.203125 C 35.433594 41.246094 35.332031 41.296875 35.226562 41.359375 C 34.746094 41.683594 34.316406 41.910156 33.9375 42.046875 C 33.558594 42.183594 33.144531 42.25 32.695312 42.25 C 31.613281 42.25 30.792969 41.910156 30.234375 41.234375 C 29.675781 40.558594 29.398438 39.558594 29.398438 38.234375 C 29.398438 36.921875 29.675781 35.925781 30.234375 35.25 C 30.792969 34.574219 31.613281 34.234375 32.695312 34.234375 C 33.164062 34.234375 33.589844 34.300781 33.976562 34.429688 C 34.363281 34.558594 34.777344 34.792969 35.226562 35.125 C 35.445312 35.269531 35.660156 35.34375 35.867188 35.34375 C 36.042969 35.34375 36.195312 35.265625 36.320312 35.109375 C 36.445312 34.953125 36.507812 34.761719 36.507812 34.53125 C 36.507812 34.363281 36.480469 34.222656 36.429688 34.109375 C 36.378906 33.996094 36.285156 33.886719 36.148438 33.78125 C 35.679688 33.394531 35.144531 33.101562 34.539062 32.898438 C 33.933594 32.695312 33.289062 32.59375 32.601562 32.59375 C 31.539062 32.59375 30.609375 32.824219 29.8125 33.28125 C 29.015625 33.738281 28.402344 34.394531 27.976562 35.242188 C 27.550781 36.089844 27.335938 37.089844 27.335938 38.234375 C 27.335938 39.378906 27.550781 40.378906 27.976562 41.234375 C 28.402344 42.089844 29.015625 42.746094 29.8125 43.203125 C 30.609375 43.660156 31.539062 43.890625 32.601562 43.890625 Z M 46.132812 43.84375 C 46.382812 43.84375 46.605469 43.75 46.796875 43.5625 C 46.988281 43.375 47.085938 43.15625 47.085938 42.90625 C 47.085938 42.707031 47.003906 42.511719 46.835938 42.3125 L 43.445312 38.15625 L 46.710938 34.171875 C 46.867188 34.003906 46.945312 33.808594 46.945312 33.578125 C 46.945312 33.328125 46.847656 33.113281 46.65625 32.929688 C 46.464844 32.746094 46.242188 32.65625 45.992188 32.65625 C 45.730469 32.65625 45.507812 32.769531 45.320312 33 L 42.273438 36.765625 L 39.226562 33 C 39.027344 32.769531 38.800781 32.65625 38.539062 32.65625 C 38.289062 32.65625 38.070312 32.746094 37.882812 32.929688 C 37.695312 33.113281 37.601562 33.328125 37.601562 33.578125 C 37.601562 33.808594 37.679688 34.003906 37.835938 34.171875 L 41.101562 38.15625 L 37.695312 42.3125 C 37.539062 42.5 37.460938 42.699219 37.460938 42.90625 C 37.460938 43.15625 37.558594 43.371094 37.75 43.554688 C 37.941406 43.738281 38.164062 43.828125 38.414062 43.828125 C 38.675781 43.828125 38.898438 43.71875 39.085938 43.5 L 42.273438 39.5625 L 45.445312 43.5 C 45.644531 43.730469 45.871094 43.84375 46.132812 43.84375 Z M 46.132812 43.84375 "/>\n      </g>'},jpgIcon:{extension:".jpg",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface9" mask="url(#mask0)"/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.789062 47.007812 L 9.488281 46.960938 C 12.214844 46.757812 13.578125 45.277344 13.578125 42.523438 L 13.578125 32.742188 C 13.578125 32.320312 13.453125 31.980469 13.195312 31.726562 C 12.941406 31.472656 12.59375 31.34375 12.15625 31.34375 C 11.734375 31.34375 11.394531 31.472656 11.140625 31.726562 C 10.886719 31.980469 10.757812 32.320312 10.757812 32.742188 L 10.757812 42.523438 C 10.757812 43.238281 10.605469 43.769531 10.296875 44.117188 C 9.992188 44.46875 9.539062 44.660156 8.941406 44.6875 L 8.242188 44.730469 C 7.847656 44.761719 7.558594 44.867188 7.378906 45.046875 C 7.195312 45.230469 7.105469 45.496094 7.105469 45.847656 C 7.105469 46.664062 7.667969 47.050781 8.789062 47.007812 Z M 18.304688 47.007812 C 18.742188 47.007812 19.089844 46.878906 19.34375 46.625 C 19.597656 46.367188 19.726562 46.023438 19.726562 45.585938 L 19.726562 40.882812 L 23.640625 40.882812 C 25.289062 40.882812 26.574219 40.464844 27.492188 39.632812 C 28.410156 38.804688 28.871094 37.644531 28.871094 36.15625 C 28.871094 34.667969 28.410156 33.511719 27.492188 32.6875 C 26.574219 31.863281 25.289062 31.453125 23.640625 31.453125 L 18.261719 31.453125 C 17.839844 31.453125 17.507812 31.570312 17.265625 31.804688 C 17.023438 32.035156 16.90625 32.363281 16.90625 32.789062 L 16.90625 45.585938 C 16.90625 46.023438 17.03125 46.367188 17.289062 46.625 C 17.542969 46.878906 17.882812 47.007812 18.304688 47.007812 Z M 23.292969 38.714844 L 19.726562 38.714844 L 19.726562 33.640625 L 23.292969 33.640625 C 25.230469 33.640625 26.203125 34.488281 26.203125 36.179688 C 26.203125 37.871094 25.230469 38.714844 23.292969 38.714844 Z M 38.605469 47.070312 C 39.320312 47.070312 40.0625 47.011719 40.835938 46.898438 C 41.609375 46.78125 42.285156 46.621094 42.871094 46.414062 C 43.410156 46.242188 43.765625 46.015625 43.941406 45.738281 C 44.117188 45.460938 44.203125 44.988281 44.203125 44.316406 L 44.203125 39.613281 C 44.203125 39.292969 44.101562 39.03125 43.898438 38.835938 C 43.695312 38.640625 43.425781 38.539062 43.089844 38.539062 L 39.21875 38.539062 C 38.867188 38.539062 38.59375 38.628906 38.398438 38.804688 C 38.199219 38.976562 38.101562 39.226562 38.101562 39.546875 C 38.101562 39.867188 38.199219 40.117188 38.398438 40.289062 C 38.59375 40.464844 38.867188 40.554688 39.21875 40.554688 L 41.6875 40.554688 L 41.6875 44.425781 C 40.699219 44.703125 39.707031 44.839844 38.714844 44.839844 C 35.390625 44.839844 33.726562 42.945312 33.726562 39.152344 C 33.726562 37.300781 34.132812 35.90625 34.941406 34.964844 C 35.75 34.023438 36.949219 33.554688 38.539062 33.554688 C 39.238281 33.554688 39.867188 33.644531 40.421875 33.828125 C 40.972656 34.007812 41.574219 34.324219 42.214844 34.777344 C 42.390625 34.894531 42.542969 34.980469 42.671875 35.03125 C 42.804688 35.082031 42.949219 35.105469 43.109375 35.105469 C 43.359375 35.105469 43.570312 34.996094 43.746094 34.777344 C 43.921875 34.558594 44.007812 34.289062 44.007812 33.96875 C 44.007812 33.75 43.96875 33.558594 43.886719 33.398438 C 43.808594 33.238281 43.679688 33.078125 43.503906 32.917969 C 42.191406 31.808594 40.507812 31.257812 38.453125 31.257812 C 36.90625 31.257812 35.5625 31.574219 34.425781 32.207031 C 33.289062 32.84375 32.410156 33.753906 31.789062 34.941406 C 31.171875 36.128906 30.859375 37.535156 30.859375 39.152344 C 30.859375 40.800781 31.171875 42.21875 31.789062 43.40625 C 32.410156 44.597656 33.304688 45.503906 34.46875 46.132812 C 35.636719 46.757812 37.015625 47.070312 38.605469 47.070312 Z M 38.605469 47.070312 "/>\n      </g>'},mp3Icon:{extension:".mp3",path:'<g id="surface9" clip-path="url(#clip1)">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 43.828125 43.710938 C 43.605469 44.28125 43.273438 44.804688 42.84375 45.265625 C 42.40625 45.730469 41.867188 46.113281 41.242188 46.398438 C 40.597656 46.699219 39.851562 46.855469 39.027344 46.855469 C 38.328125 46.855469 37.703125 46.757812 37.160156 46.570312 C 36.609375 46.378906 36.160156 46.136719 35.769531 45.839844 C 35.386719 45.550781 35.050781 45.210938 34.796875 44.832031 C 34.570312 44.507812 34.394531 44.195312 34.265625 43.890625 C 34.140625 43.59375 34.054688 43.335938 33.996094 43.101562 C 33.792969 42.261719 34.304688 41.417969 35.140625 41.210938 C 35.980469 41.007812 36.828125 41.519531 37.03125 42.355469 C 37.039062 42.390625 37.066406 42.488281 37.144531 42.671875 C 37.191406 42.777344 37.265625 42.914062 37.371094 43.0625 C 37.4375 43.160156 37.53125 43.257812 37.65625 43.351562 C 37.792969 43.453125 37.972656 43.542969 38.195312 43.625 C 38.332031 43.667969 38.59375 43.730469 39.027344 43.730469 C 39.390625 43.730469 39.695312 43.675781 39.925781 43.566406 C 40.1875 43.445312 40.398438 43.300781 40.558594 43.132812 C 40.71875 42.957031 40.839844 42.773438 40.914062 42.578125 C 40.996094 42.371094 41.03125 42.195312 41.03125 42.023438 C 41.03125 41.789062 41 41.585938 40.921875 41.398438 C 40.871094 41.257812 40.785156 41.148438 40.660156 41.039062 C 40.515625 40.910156 40.296875 40.792969 40.011719 40.699219 C 39.6875 40.59375 39.253906 40.539062 38.738281 40.535156 C 37.882812 40.527344 37.1875 39.832031 37.1875 38.972656 L 37.1875 38.832031 C 37.1875 37.984375 37.859375 37.292969 38.699219 37.265625 C 39.070312 37.257812 39.398438 37.195312 39.679688 37.101562 C 39.921875 37.011719 40.121094 36.902344 40.273438 36.773438 C 40.40625 36.652344 40.507812 36.519531 40.582031 36.359375 C 40.652344 36.210938 40.6875 36.027344 40.6875 35.8125 C 40.6875 35.523438 40.644531 35.289062 40.574219 35.125 C 40.5 34.96875 40.414062 34.847656 40.304688 34.757812 C 40.1875 34.660156 40.042969 34.582031 39.867188 34.53125 C 39.402344 34.386719 38.878906 34.398438 38.480469 34.542969 C 38.289062 34.617188 38.121094 34.714844 37.976562 34.84375 C 37.820312 34.984375 37.695312 35.148438 37.59375 35.339844 C 37.484375 35.550781 37.40625 35.773438 37.367188 36.039062 C 37.230469 36.890625 36.429688 37.472656 35.574219 37.335938 C 34.722656 37.195312 34.140625 36.398438 34.28125 35.542969 C 34.378906 34.9375 34.5625 34.378906 34.835938 33.871094 C 35.109375 33.355469 35.464844 32.898438 35.890625 32.519531 C 36.320312 32.132812 36.824219 31.828125 37.382812 31.617188 C 38.433594 31.226562 39.667969 31.199219 40.78125 31.539062 C 41.351562 31.714844 41.863281 31.992188 42.308594 32.355469 C 42.777344 32.753906 43.148438 33.242188 43.414062 33.824219 C 43.679688 34.402344 43.8125 35.070312 43.8125 35.8125 C 43.8125 36.476562 43.679688 37.097656 43.421875 37.660156 C 43.25 38.046875 43.023438 38.394531 42.746094 38.707031 C 43.242188 39.148438 43.609375 39.671875 43.835938 40.261719 C 44.046875 40.804688 44.15625 41.398438 44.15625 42.023438 C 44.15625 42.578125 44.046875 43.148438 43.828125 43.710938 Z M 31.445312 38.492188 C 31.148438 39.140625 30.734375 39.703125 30.199219 40.164062 C 29.6875 40.605469 29.078125 40.957031 28.390625 41.199219 C 27.71875 41.4375 26.976562 41.5625 26.191406 41.5625 L 25 41.5625 L 25 45 C 25 45.859375 24.296875 46.5625 23.4375 46.5625 C 22.578125 46.5625 21.875 45.859375 21.875 45 L 21.875 32.8125 C 21.875 31.945312 22.578125 31.25 23.4375 31.25 L 26.191406 31.25 C 27.890625 31.25 29.257812 31.667969 30.253906 32.5 C 31.339844 33.398438 31.886719 34.714844 31.886719 36.40625 C 31.886719 37.148438 31.738281 37.851562 31.445312 38.492188 Z M 18.730469 45.210938 C 18.730469 46.070312 18.03125 46.773438 17.167969 46.773438 C 16.300781 46.773438 15.605469 46.070312 15.605469 45.210938 L 15.605469 39.28125 L 14.015625 43.140625 C 14.007812 43.164062 13.996094 43.191406 13.984375 43.214844 C 13.71875 43.777344 13.15625 44.117188 12.566406 44.117188 L 12.53125 44.117188 C 11.9375 44.117188 11.375 43.777344 11.109375 43.214844 L 11.082031 43.160156 L 9.339844 39.101562 L 9.339844 45.210938 C 9.339844 46.070312 8.640625 46.773438 7.777344 46.773438 C 6.910156 46.773438 6.214844 46.070312 6.214844 45.210938 L 6.214844 32.824219 C 6.214844 31.960938 6.910156 31.261719 7.777344 31.261719 L 7.835938 31.261719 C 8.472656 31.261719 9.046875 31.617188 9.335938 32.1875 L 12.527344 39.09375 L 15.59375 32.207031 C 15.894531 31.617188 16.46875 31.261719 17.105469 31.261719 L 17.167969 31.261719 C 18.03125 31.261719 18.730469 31.960938 18.730469 32.824219 Z M 41.382812 28.125 L 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.136719 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.136719 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 41.382812 28.125 "/>\n      </g>\n      </defs>\n      <g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface9" mask="url(#mask0)"/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 28.257812 34.902344 C 27.835938 34.550781 27.140625 34.375 26.191406 34.375 L 25 34.375 L 25 38.4375 L 26.191406 38.4375 C 26.621094 38.4375 27.007812 38.375 27.34375 38.253906 C 27.667969 38.140625 27.929688 37.992188 28.148438 37.804688 C 28.34375 37.632812 28.492188 37.4375 28.601562 37.195312 C 28.710938 36.964844 28.757812 36.703125 28.757812 36.40625 C 28.757812 35.324219 28.382812 35.003906 28.257812 34.902344 "/>\n      <path style="fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(99.607843%,99.607843%,99.607843%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11.34125 13.57875 C 11.345 13.5925 11.3525 13.62375 11.36375 13.67375 C 11.3775 13.7225 11.3975 13.78125 11.42625 13.85 C 11.45375 13.9175 11.49375 13.9875 11.54625 14.0625 C 11.5975 14.13875 11.66625 14.20875 11.75 14.27125 C 11.83375 14.33625 11.9375 14.38875 12.0575 14.43125 C 12.1775 14.4725 12.32 14.49375 12.4875 14.49375 C 12.67875 14.49375 12.845 14.46125 12.9875 14.39375 C 13.13 14.32875 13.24875 14.245 13.34375 14.1425 C 13.43875 14.0425 13.51125 13.93 13.55875 13.8075 C 13.6075 13.6825 13.63125 13.56375 13.63125 13.4475 C 13.63125 13.31125 13.6075 13.1825 13.5625 13.065 C 13.515 12.9475 13.4425 12.845 13.3425 12.7575 C 13.2425 12.67 13.115 12.6 12.96 12.55 C 12.805 12.49875 12.6175 12.4725 12.4 12.4725 L 12.4 12.42625 C 12.57 12.42 12.72375 12.3925 12.8625 12.34375 C 13.0025 12.29625 13.11875 12.2275 13.21625 12.14375 C 13.31375 12.05875 13.3875 11.96 13.44125 11.845 C 13.4925 11.7275 13.52 11.60125 13.52 11.46 C 13.52 11.29375 13.4925 11.1525 13.43875 11.0325 C 13.38375 10.91375 13.31125 10.81625 13.21875 10.74 C 13.1275 10.66375 13.0225 10.6075 12.90375 10.5725 C 12.78625 10.535 12.66375 10.5175 12.5375 10.5175 C 12.395 10.5175 12.26125 10.54 12.14 10.58625 C 12.0175 10.6325 11.91 10.69625 11.81875 10.77875 C 11.72625 10.8625 11.64875 10.96 11.5875 11.07375 C 11.5275 11.18875 11.48625 11.315 11.4625 11.45375 M 7.5 14.4 L 7.5 10.5 L 8.3825 10.5 C 8.8075 10.5 9.13375 10.595 9.3625 10.78375 C 9.59 10.975 9.7025 11.2625 9.7025 11.65 C 9.7025 11.81625 9.6725 11.97125 9.6075 12.11125 C 9.5425 12.2525 9.4525 12.37375 9.335 12.475 C 9.21875 12.5775 9.0775 12.65625 8.9175 12.71375 C 8.75625 12.77125 8.5775 12.8 8.3825 12.8 L 7.6 12.8 M 2.4875 14.4675 L 2.4875 10.50375 L 2.5075 10.50375 C 2.5225 10.50375 2.53375 10.5125 2.5425 10.52625 L 3.9925 13.58625 C 3.99875 13.5975 4.005 13.6075 4.00875 13.6175 M 4.02125 13.6175 C 4.02625 13.6075 4.03125 13.5975 4.0375 13.58625 L 5.44 10.52625 C 5.4475 10.5125 5.45875 10.50375 5.4725 10.50375 L 5.4925 10.50375 L 5.4925 14.4675 " transform="matrix(3.125,0,0,3.125,0,0)"/>\n      </g>'},mp4Icon:{extension:".mp4",path:'<g id="surface6" clip-path="url(#clip1)">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 36.898438 40.625 L 40.625 35.480469 L 40.625 40.625 Z M 28.761719 36.40625 C 28.761719 36.703125 28.707031 36.964844 28.605469 37.195312 C 28.496094 37.433594 28.347656 37.632812 28.148438 37.804688 C 27.929688 37.992188 27.667969 38.144531 27.34375 38.257812 C 27.003906 38.375 26.621094 38.4375 26.191406 38.4375 L 25 38.4375 L 25 34.375 L 26.191406 34.375 C 27.140625 34.375 27.835938 34.554688 28.253906 34.902344 C 28.378906 35.007812 28.761719 35.324219 28.761719 36.40625 Z M 44.6875 43.75 L 43.75 43.75 L 43.75 45.3125 C 43.75 46.175781 43.050781 46.875 42.1875 46.875 C 41.324219 46.875 40.625 46.175781 40.625 45.3125 L 40.625 43.75 L 34.066406 43.75 C 33.199219 43.75 32.503906 43.050781 32.503906 42.1875 L 32.503906 41.875 C 32.503906 41.546875 32.605469 41.226562 32.800781 40.957031 L 39.363281 31.898438 C 39.660156 31.492188 40.128906 31.25 40.628906 31.25 L 42.1875 31.25 C 43.050781 31.25 43.75 31.949219 43.75 32.8125 L 43.75 40.625 L 44.6875 40.625 C 45.550781 40.625 46.25 41.324219 46.25 42.1875 C 46.25 43.050781 45.550781 43.75 44.6875 43.75 Z M 31.445312 38.492188 C 31.148438 39.140625 30.730469 39.703125 30.195312 40.167969 C 29.6875 40.605469 29.082031 40.957031 28.390625 41.203125 C 27.71875 41.441406 26.976562 41.5625 26.191406 41.5625 L 25 41.5625 L 25 45 C 25 45.863281 24.300781 46.5625 23.4375 46.5625 C 22.578125 46.5625 21.875 45.863281 21.875 45 L 21.875 32.8125 C 21.875 31.949219 22.578125 31.25 23.4375 31.25 L 26.191406 31.25 C 27.890625 31.25 29.257812 31.671875 30.253906 32.5 C 31.339844 33.398438 31.886719 34.714844 31.886719 36.40625 C 31.886719 37.148438 31.738281 37.851562 31.445312 38.492188 Z M 18.730469 45.210938 C 18.730469 46.070312 18.027344 46.773438 17.167969 46.773438 C 16.300781 46.773438 15.605469 46.070312 15.605469 45.210938 L 15.605469 39.6875 L 14.035156 43.105469 C 14.019531 43.144531 14.003906 43.179688 13.984375 43.214844 C 13.71875 43.78125 13.15625 44.117188 12.566406 44.117188 L 12.53125 44.117188 C 11.941406 44.117188 11.378906 43.78125 11.113281 43.214844 C 11.097656 43.183594 11.078125 43.152344 11.066406 43.125 L 9.339844 39.484375 L 9.339844 45.210938 C 9.339844 46.070312 8.640625 46.773438 7.777344 46.773438 C 6.910156 46.773438 6.214844 46.070312 6.214844 45.210938 L 6.214844 32.824219 C 6.214844 31.960938 6.910156 31.261719 7.777344 31.261719 L 7.835938 31.261719 C 8.472656 31.261719 9.046875 31.617188 9.335938 32.191406 L 9.355469 32.226562 L 12.523438 38.90625 L 15.578125 32.242188 C 15.585938 32.226562 15.597656 32.210938 15.605469 32.191406 C 15.894531 31.617188 16.46875 31.261719 17.105469 31.261719 L 17.164062 31.261719 C 18.027344 31.261719 18.726562 31.960938 18.726562 32.824219 L 18.726562 45.210938 Z M 41.382812 28.125 L 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 41.382812 28.125 "/>\n      </g>\n      </defs>\n      <g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface6" mask="url(#mask0)"/>\n      <path style="fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(99.607843%,99.607843%,99.607843%);stroke-opacity:1;stroke-miterlimit:4;" d="M 14.3 13.5 L 10.90125 13.5 L 10.90125 13.4 L 13.00125 10.5 L 13.5 10.5 L 13.5 14.5 M 7.5 14.4 L 7.5 10.5 L 8.3825 10.5 C 8.8075 10.5 9.13375 10.595 9.3625 10.78375 C 9.59 10.975 9.7025 11.2625 9.7025 11.65 C 9.7025 11.81625 9.6725 11.97125 9.6075 12.11125 C 9.5425 12.2525 9.4525 12.37375 9.335 12.47625 C 9.21875 12.5775 9.0775 12.65625 8.9175 12.71375 C 8.75625 12.77125 8.5775 12.8 8.3825 12.8 L 7.6 12.8 M 2.4875 14.4675 L 2.4875 10.50375 L 2.5075 10.50375 C 2.5225 10.50375 2.53375 10.5125 2.5425 10.52625 L 3.9925 13.58625 C 3.99875 13.5975 4.005 13.6075 4.00875 13.6175 M 4.02125 13.6175 C 4.02625 13.6075 4.03125 13.5975 4.0375 13.58625 L 5.44 10.52625 C 5.4475 10.5125 5.45875 10.50375 5.4725 10.50375 L 5.4925 10.50375 L 5.4925 14.4675 " transform="matrix(3.125,0,0,3.125,0,0)"/>\n      </g>'},oggIcon:{extension:".ogg",path:'<g id="surface9" clip-path="url(#clip1)">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      </g>\n      </defs>\n      <g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface9" mask="url(#mask0)"/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.976562 47.070312 C 10.464844 47.070312 11.757812 46.75 12.859375 46.109375 C 13.960938 45.46875 14.808594 44.550781 15.40625 43.351562 C 16.003906 42.15625 16.304688 40.757812 16.304688 39.152344 C 16.304688 37.550781 16.007812 36.152344 15.417969 34.964844 C 14.828125 33.777344 13.980469 32.859375 12.882812 32.21875 C 11.78125 31.578125 10.480469 31.257812 8.976562 31.257812 C 7.472656 31.257812 6.167969 31.578125 5.0625 32.21875 C 3.953125 32.859375 3.101562 33.777344 2.511719 34.964844 C 1.921875 36.152344 1.625 37.550781 1.625 39.152344 C 1.625 40.757812 1.925781 42.15625 2.523438 43.351562 C 3.121094 44.550781 3.972656 45.46875 5.070312 46.109375 C 6.171875 46.75 7.472656 47.070312 8.976562 47.070312 Z M 8.976562 44.820312 C 7.546875 44.820312 6.433594 44.332031 5.640625 43.351562 C 4.847656 42.375 4.449219 40.976562 4.449219 39.152344 C 4.449219 37.332031 4.847656 35.933594 5.640625 34.964844 C 6.433594 33.996094 7.546875 33.507812 8.976562 33.507812 C 10.390625 33.507812 11.496094 33.996094 12.289062 34.964844 C 13.085938 35.933594 13.484375 37.332031 13.484375 39.152344 C 13.484375 40.976562 13.085938 42.375 12.289062 43.351562 C 11.496094 44.332031 10.390625 44.820312 8.976562 44.820312 Z M 26.410156 47.070312 C 27.125 47.070312 27.871094 47.011719 28.640625 46.898438 C 29.414062 46.78125 30.09375 46.621094 30.675781 46.414062 C 31.214844 46.242188 31.574219 46.015625 31.75 45.738281 C 31.921875 45.460938 32.011719 44.988281 32.011719 44.316406 L 32.011719 39.613281 C 32.011719 39.292969 31.910156 39.03125 31.703125 38.835938 C 31.5 38.640625 31.230469 38.539062 30.894531 38.539062 L 27.023438 38.539062 C 26.671875 38.539062 26.398438 38.628906 26.203125 38.804688 C 26.007812 38.976562 25.90625 39.226562 25.90625 39.546875 C 25.90625 39.867188 26.007812 40.117188 26.203125 40.289062 C 26.398438 40.464844 26.671875 40.554688 27.023438 40.554688 L 29.496094 40.554688 L 29.496094 44.425781 C 28.503906 44.703125 27.511719 44.839844 26.519531 44.839844 C 23.195312 44.839844 21.53125 42.945312 21.53125 39.152344 C 21.53125 37.300781 21.9375 35.90625 22.746094 34.964844 C 23.554688 34.023438 24.753906 33.554688 26.34375 33.554688 C 27.046875 33.554688 27.671875 33.644531 28.226562 33.828125 C 28.78125 34.007812 29.378906 34.324219 30.019531 34.777344 C 30.195312 34.894531 30.347656 34.980469 30.480469 35.03125 C 30.609375 35.082031 30.757812 35.105469 30.917969 35.105469 C 31.164062 35.105469 31.375 34.996094 31.550781 34.777344 C 31.726562 34.558594 31.8125 34.289062 31.8125 33.96875 C 31.8125 33.75 31.773438 33.558594 31.695312 33.398438 C 31.613281 33.238281 31.484375 33.078125 31.3125 32.917969 C 30 31.808594 28.3125 31.257812 26.257812 31.257812 C 24.710938 31.257812 23.371094 31.574219 22.234375 32.207031 C 21.09375 32.84375 20.214844 33.753906 19.597656 34.941406 C 18.976562 36.128906 18.667969 37.535156 18.667969 39.152344 C 18.667969 40.800781 18.976562 42.21875 19.597656 43.40625 C 20.214844 44.597656 21.109375 45.503906 22.277344 46.132812 C 23.441406 46.757812 24.820312 47.070312 26.410156 47.070312 Z M 42.445312 47.070312 C 43.160156 47.070312 43.902344 47.011719 44.675781 46.898438 C 45.449219 46.78125 46.128906 46.621094 46.710938 46.414062 C 47.25 46.242188 47.609375 46.015625 47.78125 45.738281 C 47.957031 45.460938 48.046875 44.988281 48.046875 44.316406 L 48.046875 39.613281 C 48.046875 39.292969 47.941406 39.03125 47.738281 38.835938 C 47.535156 38.640625 47.265625 38.539062 46.929688 38.539062 L 43.058594 38.539062 C 42.707031 38.539062 42.433594 38.628906 42.238281 38.804688 C 42.039062 38.976562 41.941406 39.226562 41.941406 39.546875 C 41.941406 39.867188 42.039062 40.117188 42.238281 40.289062 C 42.433594 40.464844 42.707031 40.554688 43.058594 40.554688 L 45.53125 40.554688 L 45.53125 44.425781 C 44.539062 44.703125 43.546875 44.839844 42.554688 44.839844 C 39.230469 44.839844 37.566406 42.945312 37.566406 39.152344 C 37.566406 37.300781 37.972656 35.90625 38.78125 34.964844 C 39.589844 34.023438 40.789062 33.554688 42.378906 33.554688 C 43.078125 33.554688 43.707031 33.644531 44.261719 33.828125 C 44.816406 34.007812 45.414062 34.324219 46.054688 34.777344 C 46.230469 34.894531 46.382812 34.980469 46.515625 35.03125 C 46.644531 35.082031 46.792969 35.105469 46.953125 35.105469 C 47.199219 35.105469 47.410156 34.996094 47.585938 34.777344 C 47.761719 34.558594 47.847656 34.289062 47.847656 33.96875 C 47.847656 33.75 47.808594 33.558594 47.726562 33.398438 C 47.648438 33.238281 47.519531 33.078125 47.34375 32.917969 C 46.03125 31.808594 44.347656 31.257812 42.292969 31.257812 C 40.746094 31.257812 39.40625 31.574219 38.265625 32.207031 C 37.128906 32.84375 36.25 33.753906 35.632812 34.941406 C 35.011719 36.128906 34.703125 37.535156 34.703125 39.152344 C 34.703125 40.800781 35.011719 42.21875 35.632812 43.40625 C 36.25 44.597656 37.144531 45.503906 38.3125 46.132812 C 39.476562 46.757812 40.855469 47.070312 42.445312 47.070312 Z M 42.445312 47.070312 "/>\n      </g>'},pdfIcon:{extension:".pdf",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.59375 25 L 39.4375 25 C 41.476562 25.003906 43.484375 25.472656 45.3125 26.375 L 45.3125 15.375 C 45.347656 14.191406 44.867188 13.054688 44 12.25 L 34.625 2.875 C 33.875 2.003906 32.773438 1.523438 31.625 1.5625 L 6.625 1.5625 C 5.589844 1.5625 4.75 2.402344 4.75 3.4375 L 4.75 26.375 C 6.566406 25.480469 8.566406 25.007812 10.59375 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.71875 L 42.15625 12.5 L 34.53125 12.5 C 34.480469 12.511719 34.425781 12.511719 34.375 12.5 Z M 6.25 25.71875 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.300781 13.980469 32.316406 15.253906 33.75 15.625 C 33.957031 15.675781 34.167969 15.675781 34.375 15.625 L 43.75 15.625 L 43.75 25.71875 C 44.859375 26.09375 45.910156 26.621094 46.875 27.28125 L 46.875 15.375 C 46.964844 13.722656 46.3125 12.117188 45.09375 11 L 35.71875 1.625 C 34.648438 0.523438 33.160156 -0.0664062 31.625 0 L 6.625 0 C 5.703125 -0.015625 4.8125 0.339844 4.152344 0.984375 C 3.496094 1.632812 3.125 2.515625 3.125 3.4375 L 3.125 27.28125 C 4.09375 26.625 5.144531 26.101562 6.25 25.71875 Z M 6.25 25.71875 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.625 28.125 C 6.335938 28.117188 4.136719 29.023438 2.515625 30.640625 C 0.898438 32.261719 -0.0078125 34.460938 0 36.75 L 0 41.375 C 0 46.136719 3.863281 50 8.625 50 L 41.375 50 C 46.132812 49.984375 49.984375 46.132812 50 41.375 L 50 36.75 C 50 31.988281 46.136719 28.125 41.375 28.125 Z M 8.625 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14.40625 41.78125 L 12.09375 41.78125 L 12.09375 45.84375 C 12.003906 46.351562 11.5625 46.726562 11.046875 46.726562 C 10.53125 46.726562 10.089844 46.351562 10 45.84375 L 10 34.78125 C 10 34.210938 10.460938 33.75 11.03125 33.75 L 14.40625 33.75 C 15.925781 33.617188 17.390625 34.351562 18.191406 35.648438 C 18.992188 36.945312 18.992188 38.585938 18.191406 39.882812 C 17.390625 41.179688 15.925781 41.914062 14.40625 41.78125 Z M 12.09375 39.6875 L 14.40625 39.6875 C 15.152344 39.78125 15.882812 39.4375 16.289062 38.804688 C 16.691406 38.171875 16.691406 37.359375 16.289062 36.726562 C 15.882812 36.09375 15.152344 35.75 14.40625 35.84375 L 12.09375 35.84375 Z M 12.09375 39.6875 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 20.3125 45.84375 L 20.3125 34.78125 C 20.3125 34.210938 20.773438 33.75 21.34375 33.75 L 23.5625 33.75 C 27.1875 33.75 30.125 36.6875 30.125 40.3125 C 30.125 43.9375 27.1875 46.875 23.5625 46.875 L 21.34375 46.875 C 20.773438 46.875 20.3125 46.414062 20.3125 45.84375 Z M 22.40625 44.78125 L 23.5625 44.78125 C 26.03125 44.78125 28.03125 42.78125 28.03125 40.3125 C 28.03125 37.84375 26.03125 35.84375 23.5625 35.84375 L 22.40625 35.84375 Z M 22.40625 44.78125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 33.1875 45.84375 L 33.1875 34.78125 C 33.183594 34.476562 33.3125 34.1875 33.542969 33.992188 C 33.769531 33.792969 34.074219 33.703125 34.375 33.75 L 40.625 33.75 C 41.132812 33.839844 41.507812 34.28125 41.507812 34.796875 C 41.507812 35.3125 41.132812 35.753906 40.625 35.84375 L 35.25 35.84375 L 35.25 39.28125 L 39.625 39.28125 C 40.195312 39.28125 40.65625 39.742188 40.65625 40.3125 C 40.65625 40.882812 40.195312 41.34375 39.625 41.34375 L 35.25 41.34375 L 35.25 45.84375 C 35.257812 46.359375 34.882812 46.796875 34.375 46.875 C 34.074219 46.921875 33.769531 46.832031 33.542969 46.632812 C 33.3125 46.4375 33.183594 46.148438 33.1875 45.84375 Z M 33.1875 45.84375 "/>\n      </g>'},defaultIcon:{extension:".default",path:'<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 3.117188 44.777344 C 1.394531 44.777344 0 43.386719 0 41.671875 L 0 3.484375 C 0 1.769531 1.394531 0.378906 3.117188 0.378906 L 25.792969 0.378906 C 27.164062 0.304688 28.5 0.808594 29.480469 1.765625 L 37.980469 10.230469 C 39.144531 11.242188 39.769531 12.730469 39.683594 14.265625 L 39.683594 41.671875 C 39.683594 43.386719 38.289062 44.777344 36.5625 44.777344 Z M 25.511719 3.203125 L 3.117188 3.203125 C 2.960938 3.203125 2.832031 3.328125 2.832031 3.484375 L 2.832031 41.671875 C 2.832031 41.828125 2.960938 41.957031 3.117188 41.957031 L 36.5625 41.957031 C 36.679688 41.949219 36.785156 41.867188 36.820312 41.757812 L 36.820312 14.492188 L 28.34375 14.492188 C 28.160156 14.539062 27.964844 14.539062 27.777344 14.492188 C 26.480469 14.15625 25.554688 13.007812 25.511719 11.671875 Z M 28.34375 4.640625 L 28.34375 11.671875 C 28.390625 11.683594 28.441406 11.683594 28.488281 11.671875 L 35.402344 11.671875 Z M 28.34375 4.640625 "/>\n      </g>'}},V.MODULES.modals=function(l){var a=l.$;l.shared.modals||(l.shared.modals={});var o,c=l.shared.modals;function e(){for(var e in c)if(Object.prototype.hasOwnProperty.call(c,e)){var t=c[e];t&&t.$modal&&t.$modal.removeData().remove()}o&&o.removeData().remove(),c={}}function s(e,t){if(c[e]){var n=c[e].$modal,r=n.data("instance")||l;r.events.enableBlur(),n.hide(),o.hide(),a(r.o_doc).find("body").first().removeClass("fr-prevent-scroll fr-mobile"),n.removeClass("fr-active"),t||(r.accessibility.restoreSelection(),r.events.trigger("modals.hide"))}}function n(e){var t;if("string"==typeof e){if(!c[e])return;t=c[e].$modal}else t=e;return t&&l.node.hasClass(t,"fr-active")&&l.core.sameInstance(t)||!1}return{_init:function t(){l.events.on("shared.destroy",e,!0)},get:function r(e){return c[e]},create:function d(n,e,t){if(e='<div class="fr-modal-head-line">'.concat(e,"</div>"),l.shared.$overlay||(l.shared.$overlay=a(l.doc.createElement("DIV")).addClass("fr-overlay"),a("body").first().append(l.shared.$overlay)),o=l.shared.$overlay,l.opts.theme&&o.addClass("".concat(l.opts.theme,"-theme")),!c[n]){var r=function i(e,t){var n='<div tabIndex="-1" class="fr-modal'.concat(l.opts.theme?" ".concat(l.opts.theme,"-theme"):"",'"><div class="fr-modal-wrapper">'),r='<button title="'.concat(l.language.translate("Cancel"),'" class="fr-command fr-btn fr-modal-close"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="').concat(V.SVG.close,'"/></svg></button>');n+='<div class="fr-modal-head">'.concat(e).concat(r,"</div>"),n+='<div tabIndex="-1" class="fr-modal-body">'.concat(t,"</div>"),n+="</div></div>";var o=a(l.doc.createElement("DIV"));return o.html(n),o.find("> .fr-modal")}(e,t);c[n]={$modal:r,$head:r.find(".fr-modal-head"),$body:r.find(".fr-modal-body")},l.helpers.isMobile()||r.addClass("fr-desktop"),a("body").first().append(r),l.events.$on(r,"click",".fr-modal-close",function(){s(n)},!0),c[n].$body.css("margin-top",c[n].$head.outerHeight()),l.events.$on(r,"keydown",function(e){var t=e.which;return t===V.KEYCODE.ESC?(s(n),l.accessibility.focusModalButton(r),!1):!(!a(e.currentTarget).is("input[type=text], textarea")&&t!==V.KEYCODE.ARROW_UP&&t!==V.KEYCODE.ARROW_DOWN&&!l.keys.isBrowserAction(e)&&(e.preventDefault(),e.stopPropagation(),1))},!0),s(n,!0)}return c[n]},show:function i(e){if(c[e]){var t=c[e].$modal;t.data("instance",l),t.show(),o.show(),a(l.o_doc).find("body").first().addClass("fr-prevent-scroll"),l.helpers.isMobile()&&a(l.o_doc).find("body").first().addClass("fr-mobile"),t.addClass("fr-active"),l.accessibility.focusModal(t)}},hide:s,resize:function f(e){if(c[e]){var t=c[e],n=t.$modal,r=t.$body,o=l.o_win.innerHeight,i=n.find(".fr-modal-wrapper"),a=o-i.outerHeight(!0)+(i.height()-(r.outerHeight(!0)-r.height())),s="auto";a<r.get(0).scrollHeight&&(s=a),r.height(s)}},isVisible:n,areVisible:function p(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&n(t)&&(void 0===e||c[t].$modal.data("instance")===e))return c[t].$modal;return!1}}},V.MODULES.position=function(L){var E=L.$;function o(){var e=L.selection.ranges(0),t=e.getBoundingClientRect();if(0===t.top&&0===t.left&&0===t.width||0===t.height){var n=!1,r=L.opts.toolbarInline&&e.startContainer&&e.startContainer.firstChild&&"BR"===e.startContainer.firstChild.tagName;0===L.$el.find(".fr-marker").length&&(r?E(e.startContainer.firstChild).after(V.MARKERS):L.selection.save(),n=!0);var o=L.$el.find(".fr-marker").first();o.css("display","inline"),o.css("line-height","");var i=o.offset(),a=o.outerHeight();o.css("display","none"),o.css("line-height",0),(t={}).left=i&&i.left,t.width=0,t.height=a,t.top=i&&i.top-(L.helpers.isMobile()&&!L.helpers.isIOS()||L.opts.iframe?0:L.helpers.scrollTop()),o&&0<o.length&&(t.top-=E(o.get(0).parentNode).height()),t.right=1,t.bottom=1,t.ok=!0,n&&(r?L.$el.find(".fr-marker").remove():L.selection.restore())}return t}function i(e,t,n,r){var o=n.data("container");if(!o||"BODY"===o.get(0).tagName&&"static"===o.css("position")||(e&&(e-=o.offset().left),t&&(t-=o.offset().top),"BODY"!==o.get(0).tagName?(e&&(e+=o.get(0).scrollLeft),t&&(t+=o.get(0).scrollTop)):"absolute"===o.css("position")&&(e&&(e+=o.position().left),t&&(t+=o.position().top))),L.opts.iframe&&o&&L.$tb&&o.get(0)!==L.$tb.get(0)){var i=L.helpers.getPX(L.$wp.find(".fr-iframe").css("padding-top")),a=L.helpers.getPX(L.$wp.find(".fr-iframe").css("padding-left"));e&&(e+=L.$iframe.offset().left+a),t&&(t+=L.$iframe.offset().top+i)}var s=function l(e,t){var n=e.outerWidth(!0);return t+n>L.$sc.get(0).clientWidth-10&&(t=L.$sc.get(0).clientWidth-n-10),t<0&&(t=10),t}(n,e);e&&n.css("left",s),t&&n.css("top",function c(e,t,n){var r=e.outerHeight(!0);if(!L.helpers.isMobile()&&L.$tb&&e.parent().get(0)!==L.$tb.get(0)){var o=e.parent().offset().top,i=t-r-(n||0);e.parent().get(0)===L.$sc.get(0)&&(o-=e.parent().position().top);var a=L.$sc.get(0).clientHeight;o+t+r>L.$sc.offset().top+a&&0<e.parent().offset().top+i&&0<i?i>L.$wp.scrollTop()&&(t=i,e.addClass("fr-above")):e.removeClass("fr-above")}return t}(n,t,r))}function a(e){var n=E(e),t=n.is(".fr-sticky-on"),r=n.data("sticky-top"),o=n.data("sticky-scheduled");if(void 0===r){n.data("sticky-top",0);var i=E('<div class="fr-sticky-dummy" style="height: '.concat(n.outerHeight(),'px;"></div>'));L.$box.prepend(i)}else L.$box.find(".fr-sticky-dummy").css("height",n.outerHeight());if(L.core.hasFocus()||0<L.$tb.findVisible("input:focus").length){var a=L.helpers.scrollTop(),s=Math.min(Math.max(a-L.$tb.parent().offset().top,0),L.$tb.parent().outerHeight()-n.outerHeight());if(s!==r&&s!==o&&(clearTimeout(n.data("sticky-timeout")),n.data("sticky-scheduled",s),n.outerHeight()<a-L.$tb.parent().offset().top&&n.addClass("fr-opacity-0"),n.data("sticky-timeout",setTimeout(function(){var e=L.helpers.scrollTop(),t=Math.min(Math.max(e-L.$tb.parent().offset().top,0),L.$tb.parent().outerHeight()-n.outerHeight());0<t&&"BODY"===L.$tb.parent().get(0).tagName&&(t+=L.$tb.parent().position().top),t!==r&&(n.css("top",Math.max(t,0)),n.data("sticky-top",t),n.data("sticky-scheduled",t)),n.removeClass("fr-opacity-0")},100))),!t){var l=L.$tb.parent(),c=l.get(0).offsetWidth-l.get(0).clientWidth;n.css("top","0"),n.width(l.width()-c),n.addClass("fr-sticky-on"),L.$box.addClass("fr-sticky-box")}}else clearTimeout(E(e).css("sticky-timeout")),n.css("top","0"),n.css("position",""),n.css("width",""),n.data("sticky-top",0),n.removeClass("fr-sticky-on"),L.$box.removeClass("fr-sticky-box")}function t(e){if(e.offsetWidth){var t=E(e),n=t.outerHeight(),r=t.data("sticky-position"),o=E("body"===L.opts.scrollableContainer?L.o_win:L.opts.scrollableContainer).outerHeight(),i=0,a=0;"body"!==L.opts.scrollableContainer&&(i=L.$sc.offset().top,a=E(L.o_win).outerHeight()-i-o);var s="body"===L.opts.scrollableContainer?L.helpers.scrollTop():i,l=t.is(".fr-sticky-on");t.data("sticky-parent")||t.data("sticky-parent",t.parent());var c=t.data("sticky-parent"),d=c.offset().top,f=c.outerHeight();if(t.data("sticky-offset")?L.$box.find(".fr-sticky-dummy").css("height","".concat(n,"px")):(t.data("sticky-offset",!0),t.after('<div class="fr-sticky-dummy" style="height: '.concat(n,'px;"></div>'))),!r){var p="auto"!==t.css("top")||"auto"!==t.css("bottom");p||t.css("position","fixed"),r={top:L.node.hasClass(t.get(0),"fr-top"),bottom:L.node.hasClass(t.get(0),"fr-bottom")},p||t.css("position",""),t.data("sticky-position",r),t.data("top",L.node.hasClass(t.get(0),"fr-top")?t.css("top"):"auto"),t.data("bottom",L.node.hasClass(t.get(0),"fr-bottom")?t.css("bottom"):"auto")}var h=L.helpers.getPX(t.data("top")),u=L.helpers.getPX(t.data("bottom")),g=r.top&&function v(){return d<s+h&&s+h<=d+f-n}()&&(L.helpers.isInViewPort(L.$sc.get(0))||"body"===L.opts.scrollableContainer),C=r.bottom&&function b(){return d+n<s+o-u&&s+o-u<d+f}();if(g||C){var m=c.get(0).offsetWidth-c.get(0).clientWidth;t.css("width","".concat(c.get(0).getBoundingClientRect().width-m,"px")),l||(t.addClass("fr-sticky-on"),t.removeClass("fr-sticky-off"),t.css("top")&&("auto"!==t.data("top")?t.css("top",L.helpers.getPX(t.data("top"))+i):t.data("top","auto")),t.css("bottom")&&("auto"!==t.data("bottom")?t.css("bottom",L.helpers.getPX(t.data("bottom"))+a):t.css("bottom","auto")))}else L.node.hasClass(t.get(0),"fr-sticky-off")||(t.css("width",""),t.removeClass("fr-sticky-on"),t.addClass("fr-sticky-off"),t.css("top")&&"auto"!==t.data("top")&&r.top&&t.css("top",0),t.css("bottom")&&"auto"!==t.data("bottom")&&r.bottom&&t.css("bottom",0))}}function s(){if(L.helpers.requestAnimationFrame()(s),!1!==L.events.trigger("position.refresh"))for(var e=0;e<L._stickyElements.length;e++)if(L.opts.toolbarBottom){var t=L.$tb.parent(),n=t.get(0).offsetWidth-t.get(0).clientWidth,r=E(L._stickyElements[e]);r.width(t.width()-n),r.addClass("fr-sticky-on"),L.$box.addClass("fr-sticky-box")}else a(L._stickyElements[e])}function n(){if(L._stickyElements)for(var e=0;e<L._stickyElements.length;e++)t(L._stickyElements[e])}return{_init:function r(){!function e(){L._stickyElements=[],L.helpers.isIOS()?(s(),L.events.$on(E(L.o_win),"scroll",function(){if(L.core.hasFocus())for(var e=0;e<L._stickyElements.length;e++){var t=E(L._stickyElements[e]),n=t.parent(),r=L.helpers.scrollTop();t.outerHeight()<r-n.offset().top&&(L.opts.toolbarBottom&&L.helpers.isIOS()||(t.addClass("fr-opacity-0"),t.data("sticky-top",-1),t.data("sticky-scheduled",-1)))}},!0)):("body"!==L.opts.scrollableContainer&&L.events.$on(E(L.opts.scrollableContainer),"scroll",n,!0),L.events.$on(E(L.o_win),"scroll",n,!0),L.events.$on(E(L.o_win),"resize",n,!0),L.events.on("initialized",n),L.events.on("focus",n),L.events.$on(E(L.o_win),"resize","textarea",n,!0)),L.events.on("destroy",function(){L._stickyElements=[]})}()},forSelection:function l(e){var t=o();if(t.top!=undefined){e.css({top:0,left:0});var n=t.top+t.height,r=t.left+t.width/2-e.get(0).offsetWidth/2+L.helpers.scrollLeft();L.opts.iframe||(n+=L.helpers.scrollTop()),i(r,n,e,t.height)}},addSticky:function c(e){e.addClass("fr-sticky"),L.helpers.isIOS()&&!L.opts.toolbarBottom&&e.addClass("fr-sticky-ios"),e.removeClass("fr-sticky"),L._stickyElements.push(e.get(0))},refresh:n,at:i,getBoundingRect:o}},V.MODULES.refresh=function(l){var c=l.$;function i(e,t){e.toggleClass("fr-disabled",t).attr("aria-disabled",t)}function e(e){var t=l.$tb.find('.fr-more-toolbar[data-name="'.concat(e.attr("data-group-name"),'"]')),n=function s(e,t){var n=0,r=t.find("> .fr-command, > .fr-btn-wrap");r.each(function(e,t){n+=c(t).outerWidth()});var o,i=l.helpers.getPX(c(r[0]).css("margin-left")),a=l.helpers.getPX(c(r[0]).css("margin-right"));o="rtl"===l.opts.direction?l.$tb.outerWidth()-e.offset().left+l.$tb.offset().left-(n+e.outerWidth()+r.length*(i+a))/2:e.offset().left-l.$tb.offset().left-(n-e.outerWidth()+r.length*(i+a))/2;o+n+r.length*(i+a)>l.$tb.outerWidth()&&(o-=(n+r.length*(i+a)-e.outerWidth())/2);o<0&&(o=0);return o}(e,t);"rtl"===l.opts.direction?t.css("padding-right",n):t.css("padding-left",n)}return{undo:function t(e){i(e,!l.undo.canDo())},redo:function n(e){i(e,!l.undo.canRedo())},outdent:function a(e){if(l.node.hasClass(e.get(0),"fr-no-refresh"))return!1;if(c("button#markdown-".concat(l.id,".fr-active")).length)return!1;for(var t=l.selection.blocks(),n=0;n<t.length;n++){var r="rtl"===l.opts.direction||"rtl"===c(t[n]).css("direction")?"margin-right":"margin-left",o=t[0].parentElement;if(["HTML","P","DIV","UL","OL","LI","TR","BLOCKQUOTE","BODY"].indexOf(o.parentNode.tagName)<0)return i(e,!0),!0;if(t[0].previousSibling&&"none"==o.parentNode.style.listStyleType)return i(e,!0),!0;if("LI"===t[n].tagName||"LI"===t[n].parentNode.tagName)return i(e,!1),!0;if(0<l.helpers.getPX(c(t[n]).css(r)))return i(e,!1),!0}i(e,!0)},indent:function o(e){if(l.node.hasClass(e.get(0),"fr-no-refresh"))return!1;if(c("button#markdown-".concat(l.id,".fr-active")).length)return!1;for(var t=l.selection.blocks(),n=0;n<t.length;n++){for(var r=t[n].previousSibling;r&&r.nodeType===Node.TEXT_NODE&&0===r.textContent.length;)r=r.previousSibling;if("LI"!==t[n].tagName||r)return i(e,!1),!0;i(e,!0)}},moreText:e,moreParagraph:e,moreMisc:e,moreRich:e}},Object.assign(V.DEFAULTS,{attribution:!0,toolbarBottom:!1,toolbarButtons:null,toolbarButtonsXS:null,toolbarButtonsSM:null,toolbarButtonsMD:null,toolbarContainer:null,toolbarInline:!1,toolbarSticky:!0,toolbarStickyOffset:0,toolbarVisibleWithoutSelection:!1}),V.TOOLBAR_BUTTONS={moreText:{buttons:["bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","textColor","backgroundColor","inlineClass","inlineStyle","clearFormatting"]},moreParagraph:{buttons:["alignLeft","alignCenter","formatOLSimple","alignRight","alignJustify","formatOL","formatUL","paragraphFormat","paragraphStyle","lineHeight","outdent","indent","quote"]},moreRich:{buttons:["trackChanges","markdown","insertLink","insertFiles","insertImage","insertVideo","insertTable","emoticons","fontAwesome","specialCharacters","embedly","insertFile","insertHR"],buttonsVisible:4},moreMisc:{buttons:["undo","redo","fullscreen","print","getPDF","spellChecker","selectAll","html","help"],align:"right",buttonsVisible:2},trackChanges:{buttons:["showChanges","applyAll","removeAll","applyLast","removeLast"],buttonsVisible:0}},V.TOOLBAR_BUTTONS_MD=null,(V.TOOLBAR_BUTTONS_SM={}).moreText=Object.assign({},V.TOOLBAR_BUTTONS.moreText,{buttonsVisible:2}),V.TOOLBAR_BUTTONS_SM.moreParagraph=Object.assign({},V.TOOLBAR_BUTTONS.moreParagraph,{buttonsVisible:2}),V.TOOLBAR_BUTTONS_SM.moreRich=Object.assign({},V.TOOLBAR_BUTTONS.moreRich,{buttonsVisible:2}),V.TOOLBAR_BUTTONS_SM.moreMisc=Object.assign({},V.TOOLBAR_BUTTONS.moreMisc,{buttonsVisible:2}),V.TOOLBAR_BUTTONS_SM.trackChanges=Object.assign({},V.TOOLBAR_BUTTONS.trackChanges,{buttonsVisible:0}),(V.TOOLBAR_BUTTONS_XS={}).moreText=Object.assign({},V.TOOLBAR_BUTTONS.moreText,{buttonsVisible:0}),V.TOOLBAR_BUTTONS_XS.moreParagraph=Object.assign({},V.TOOLBAR_BUTTONS.moreParagraph,{buttonsVisible:0}),V.TOOLBAR_BUTTONS_XS.moreRich=Object.assign({},V.TOOLBAR_BUTTONS.moreRich,{buttonsVisible:0}),V.TOOLBAR_BUTTONS_XS.moreMisc=Object.assign({},V.TOOLBAR_BUTTONS.moreMisc,{buttonsVisible:2}),V.TOOLBAR_BUTTONS_XS.trackChanges=Object.assign({},V.TOOLBAR_BUTTONS.trackChanges,{buttonsVisible:0}),V.POWERED_BY='<a id="fr-logo" href="https://froala.com/wysiwyg-editor" target="_blank" title="Froala WYSIWYG HTML Editor"><span>Powered by</span><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 822.8 355.33"><defs><style>.fr-logo{fill:#b1b2b7;}</style></defs><title>Froala</title><path class="fr-logo" d="M123.58,78.65A16.16,16.16,0,0,0,111.13,73H16.6C7.6,73,0,80.78,0,89.94V128.3a16.45,16.45,0,0,0,32.9,0V104.14h78.5A15.63,15.63,0,0,0,126.87,91.2,15.14,15.14,0,0,0,123.58,78.65Z"/><path class="fr-logo" d="M103.54,170a16.05,16.05,0,0,0-11.44-4.85H15.79A15.81,15.81,0,0,0,0,180.93v88.69a16.88,16.88,0,0,0,5,11.92,16,16,0,0,0,11.35,4.7h.17a16.45,16.45,0,0,0,16.41-16.6v-73.4H92.2A15.61,15.61,0,0,0,107.89,181,15.1,15.1,0,0,0,103.54,170Z"/><path class="fr-logo" d="M233,144.17c-5.29-6.22-16-7.52-24.14-7.52-16.68,0-28.72,7.71-36.5,23.47v-5.67a16.15,16.15,0,1,0-32.3,0v115.5a16.15,16.15,0,1,0,32.3,0v-38.7c0-19.09,3.5-63.5,35.9-63.5a44.73,44.73,0,0,1,5.95.27h.12c12.79,1.2,20.06-2.73,21.6-11.69C236.76,151.48,235.78,147.39,233,144.17Z"/><path class="fr-logo" d="M371.83,157c-13.93-13.11-32.9-20.33-53.43-20.33S279,143.86,265.12,157c-14.67,13.88-22.42,32.82-22.42,54.77,0,21.68,8,41.28,22.4,55.2,13.92,13.41,32.85,20.8,53.3,20.8s39.44-7.38,53.44-20.79c14.55-13.94,22.56-33.54,22.56-55.21S386.39,170.67,371.83,157Zm-9.73,54.77c0,25.84-18.38,44.6-43.7,44.6s-43.7-18.76-43.7-44.6c0-25.15,18.38-43.4,43.7-43.4S362.1,186.59,362.1,211.74Z"/><path class="fr-logo" d="M552.7,138.14a16.17,16.17,0,0,0-16,16.3v1C526.41,143.85,509,136.64,490,136.64c-19.83,0-38.19,7.24-51.69,20.4C424,171,416.4,190,416.4,212c0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,552.7,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C513.73,168.34,536.4,183.55,536.4,211.74Z"/><path class="fr-logo" d="M623.5,61.94a16.17,16.17,0,0,0-16,16.3v191.7a16.15,16.15,0,1,0,32.3,0V78.24A16.32,16.32,0,0,0,623.5,61.94Z"/><path class="fr-logo" d="M806.5,138.14a16.17,16.17,0,0,0-16,16.3v1c-10.29-11.63-27.74-18.84-46.7-18.84-19.83,0-38.19,7.24-51.69,20.4-14.33,14-21.91,33-21.91,55,0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,806.5,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C767.53,168.34,790.2,183.55,790.2,211.74Z"/></svg></a>',V.MODULES.toolbar=function(E){var y,S=E.$,t=[];function e(e){var n={};if(Array.isArray(e)){if(!Array.isArray(e[0])){for(var t=[],r=[],o=0;o<e.length;o++)"|"===e[o]||"-"===e[o]?(0<r.length&&t.push(r),r=[]):r.push(e[o]);0<r.length&&t.push(r),e=t}e.forEach(function(e,t){n["group".concat(t+1)]={buttons:e}}),n.showMoreButtons=!1}else"object"!==M(e)||Array.isArray(e)||((n=e).showMoreButtons=!0);return n}function N(){var e=E.helpers.screenSize();return t[y=e]}function T(){for(var e=E.$tb.find(".fr-more-toolbar"),t=0;t<e.length;t++){var c=S(e[t]);c.hasClass("fr-expanded")?function(){var n=E.helpers.getPX(c.css("padding-left")),e=c.find("> .fr-command, > .fr-btn-wrap"),t=S(e[0]),r=E.helpers.getPX(t.css("margin-left")),o=E.helpers.getPX(t.css("margin-right")),i=E.helpers.getPX(t.css("margin-top")),a=E.helpers.getPX(t.css("margin-bottom"));if(e.each(function(e,t){n+=S(t).outerWidth()+r+o}),E.$tb.outerWidth()<n){var s=Math.floor(n/E.$tb.outerWidth());n+=s*(n/c[0].childElementCount),s=Math.ceil(n/E.$tb.outerWidth());var l=(E.helpers.getPX(t.css("height"))+i+a)*s;c.css("height",l)}}():c.css("height","")}!E.helpers.isMobile()&&E.opts.toolbarBottom?E.$tb.find(".fr-toolbar .fr-more-toolbar").removeClass("position-relative"):E.$tb.find(".fr-toolbar .fr-more-toolbar").addClass("position-relative")}function o(){if(0==E.$tb.find("[data-name='trackChanges-".concat(E.id,"']")).length&&-1<E.opts.pluginsEnabled.indexOf("track_changes")){E.$tb.append(S('<div class="fr-more-toolbar"></div>').data("name","trackChanges-".concat(E.id)));for(var e=0,t=["showChanges","applyAll","removeAll","applyLast","removeLast"];e<t.length;e++){var n=t[e],r=V.COMMANDS[n];if(r){r.more_btn=!0;var o=S(E.button.build(n,r,!0));E.button.addButtons(o),E.$tb.find("[data-name='trackChanges-".concat(E.id,"']")).append(o)}}}if(y!==E.helpers.screenSize()){var i=N(),a=S(),s=S();for(var l in E.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command, .fr-btn-grp > .fr-btn-wrap > .fr-command, .fr-more-toolbar > .fr-btn-wrap > .fr-command").addClass("fr-hidden"),function L(){for(var t=E.$tb.find(".fr-btn-grp, .fr-more-toolbar"),r=function r(e){var n=S(t[e]);n.children().each(function(e,t){n.before(t)}),n.remove()},e=0;e<t.length;e++)r(e)}(),i){var c=i[l];if(c.buttons&&("trackChanges"!==l||-1!==E.opts.pluginsEnabled.indexOf("track_changes"))){var d=void 0,f=0,p=3,h=void 0;"trackChanges"!==l&&(h=S('<div class="fr-btn-grp fr-float-'.concat(i[l].align?i[l].align:"left",'"></div>'))),i.showMoreButtons&&(d=S('<div class="fr-more-toolbar"></div>').data("name","".concat(l,"-").concat(E.id)),"trackChanges"!==l&&"moreRich"!==l||!E.opts.trackChangesEnabled||d.addClass("fr-expanded"));for(var u=0;u<c.buttons.length;u++){c.buttonsVisible!==undefined&&(p=c.buttonsVisible);var g=E.$tb.find('> .fr-command[data-cmd="'+c.buttons[u]+'"], > div.fr-btn-wrap > .fr-command[data-cmd="'+c.buttons[u]+'"]'),C=null;E.node.hasClass(g.next().get(0),"fr-dropdown-menu")&&(C=g.next()),E.node.hasClass(g.next().get(0),"fr-options")&&(g.removeClass("fr-hidden"),g.next().removeClass("fr-hidden"),g=g.parent()),g.removeClass("fr-hidden"),i.showMoreButtons&&p<=f?(d.append(g),C&&d.append(C)):(h.append(g),C&&h.append(C)),f++}if(i.showMoreButtons&&p<f){var m=E.$tb.find('.fr-command[data-cmd="'.concat(l,'"]'));if(0<m.length)m.removeClass("fr-hidden fr-open");else{var v=l,b=V.COMMANDS[v];b&&(b.more_btn=!0,m=S(E.button.build(v,b,!0)),E.button.addButtons(m))}h&&h.append(m)}h&&a.push(h),i.showMoreButtons&&s.push(d)}}E.opts.toolbarBottom?(E.$tb.append(s),E.$tb.find(".fr-newline").remove(),E.$tb.append('<div class="fr-newline"></div>'),E.$tb.append(a)):(E.$tb.append(a),E.$tb.find(".fr-newline").remove(),E.$tb.append('<div class="fr-newline"></div>'),E.$tb.append(s)),E.$tb.removeClass("fr-toolbar-open"),E.$box.removeClass("fr-toolbar-open"),E.events.trigger("codeView.toggle")}T()}function n(e,t){setTimeout(function(){if((!e||e.which!=V.KEYCODE.ESC)&&E.selection.inEditor()&&E.core.hasFocus()&&!E.popups.areVisible()&&"false"!=S(E.selection.blocks()[0]).closest("table").attr("contenteditable")&&(E.opts.toolbarVisibleWithoutSelection||!E.selection.isCollapsed()&&!E.keys.isIME()||t)){if(E.$tb.data("instance",E),!1===E.events.trigger("toolbar.show",[e]))return;E.$tb.show(),E.opts.toolbarContainer||E.position.forSelection(E.$tb),1<E.opts.zIndex?E.$tb.css("z-index",E.opts.zIndex+1):E.$tb.css("z-index",null)}},0)}function i(e){return(!e||"blur"!==e.type||document.activeElement!==E.el)&&(!(!e||"keydown"!==e.type||!E.keys.ctrlKey(e))||(!!E.button.getButtons(".fr-dropdown.fr-active").next().find(E.o_doc.activeElement).length||(E.helpers.isMobile()&&E.opts.toolbarInline&&(E.$tb.find(".fr-expanded").toggleClass("fr-expanded"),E.$tb.find(".fr-open").removeClass("fr-open"),E.$tb.removeClass("fr-toolbar-open"),T()),void(!1!==E.events.trigger("toolbar.hide")&&E.$tb.hide()))))}t[V.XS]=e(E.opts.toolbarButtonsXS||E.opts.toolbarButtons||V.TOOLBAR_BUTTONS_XS||V.TOOLBAR_BUTTONS||[]),t[V.SM]=e(E.opts.toolbarButtonsSM||E.opts.toolbarButtons||V.TOOLBAR_BUTTONS_SM||V.TOOLBAR_BUTTONS||[]),t[V.MD]=e(E.opts.toolbarButtonsMD||E.opts.toolbarButtons||V.TOOLBAR_BUTTONS_MD||V.TOOLBAR_BUTTONS||[]),t[V.LG]=e(E.opts.toolbarButtons||V.TOOLBAR_BUTTONS||[]);var r=null;function a(e){clearTimeout(r),e&&e.which===V.KEYCODE.ESC||(r=setTimeout(n,E.opts.typingTimer))}function s(){E.events.on("window.mousedown",i),E.events.on("keydown",i),E.events.on("blur",i),E.events.$on(E.$tb,"transitionend",".fr-more-toolbar",function(){E.position.forSelection(E.$tb)}),E.helpers.isMobile()||E.events.on("window.mouseup",n),E.helpers.isMobile()?E.helpers.isIOS()||(E.events.on("window.touchend",n),E.browser.mozilla&&setInterval(n,200)):E.events.on("window.keyup",a),E.events.on("keydown",function(e){e&&e.which===V.KEYCODE.ESC&&E.events.trigger("toolbar.esc")}),E.events.on("keydown",function(e){if(e.which===V.KEYCODE.ALT)return e.stopPropagation(),!1},!0),E.events.$on(E.$wp,"scroll.toolbar",n),E.events.on("commands.after",n),E.helpers.isMobile()&&(E.events.$on(E.$doc,"selectionchange",a),E.events.$on(E.$doc,"orientationchange",n))}function l(){E.$tb.html("").removeData().remove(),E.$tb=null,E.$second_tb&&(E.$second_tb.html("").removeData().remove(),E.$second_tb=null)}function c(){E.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"),E.$box.find(".fr-sticky-dummy").remove()}function d(){E.opts.theme&&E.$tb.addClass("".concat(E.opts.theme,"-theme")),1<E.opts.zIndex&&E.$tb.css("z-index",E.opts.zIndex+1),"auto"!==E.opts.direction&&E.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(E.opts.direction)),E.helpers.isMobile()?E.$tb.addClass("fr-mobile"):E.$tb.addClass("fr-desktop"),E.opts.toolbarContainer?(E.opts.toolbarInline&&(s(),i()),E.opts.toolbarBottom?E.$tb.addClass("fr-bottom"):E.$tb.addClass("fr-top")):function e(){E.opts.toolbarInline?(E.$sc.append(E.$tb),E.$tb.data("container",E.$sc),E.$tb.addClass("fr-inline"),s(),E.opts.toolbarBottom=!1):(E.opts.toolbarBottom?(E.$box.append(E.$tb),E.$tb.addClass("fr-bottom"),E.$box.addClass("fr-bottom")):(E.opts.toolbarBottom=!1,E.$box.prepend(E.$tb),E.$tb.addClass("fr-top"),E.$box.addClass("fr-top")),E.$tb.addClass("fr-basic"),E.opts.toolbarSticky&&(E.opts.toolbarStickyOffset&&(E.opts.toolbarBottom?E.$tb.css("bottom",E.opts.toolbarStickyOffset):E.$tb.css("top",E.opts.toolbarStickyOffset)),E.position.addSticky(E.$tb)))}(),function t(){var e=E.button.buildGroup(N());E.$tb.append(e),T(),E.button.bindCommands(E.$tb)}(),function r(){E.events.$on(S(E.o_win),"resize",o),E.events.$on(S(E.o_win),"orientationchange",o),E.opts.toolbarButtons&&-1<JSON.stringify(E.opts.toolbarButtons).indexOf("trackChanges")&&o();var e=E.$tb.find(".fr-more-toolbar[data-name=trackChanges-".concat(E.id,"]")),t=0!==e.length&&e.hasClass("fr-expanded");if(E.opts.trackChangesEnabled&&!t){var n=E.$tb.find(".fr-command.fr-btn[data-cmd=trackChanges");e.addClass("fr-expanded"),n.toggleClass("fr-open"),E.toolbar.enable()}}(),E.accessibility.registerToolbar(E.$tb),E.events.$on(E.$tb,"".concat(E._mousedown," ").concat(E._mouseup),function(e){var t=e.originalEvent?e.originalEvent.target||e.originalEvent.originalTarget:null;if(t&&"INPUT"!==t.tagName&&!E.edit.isDisabled())return e.stopPropagation(),e.preventDefault(),!1},!0),E.helpers.isMobile()&&E.events.$on(E.$tb,"click",function(){E.popups.areVisible().length||E.id!==E.shared.selected_editor&&E.shared.selected_editor||E.$el.focus()}),E.events.$on(E.$tb,"transitionend",".fr-more-toolbar",function(){E.$box.hasClass("fr-fullscreen")&&(E.opts.height=E.o_win.innerHeight-(E.opts.toolbarInline?0:E.$tb.outerHeight()+(E.$second_tb?E.$second_tb.outerHeight():0)),E.size.refresh())})}var f=!1;return{_init:function p(){if(E.$sc=S(E.opts.scrollableContainer).first(),!E.$wp)return!1;E.opts.toolbarInline||E.opts.toolbarBottom||(E.$second_tb=S(E.doc.createElement("div")).attr("class","fr-second-toolbar"),E.$box.append(E.$second_tb),(!1!==E.ul||E.opts.attribution)&&E.$second_tb.prepend(V.POWERED_BY)),E.opts.toolbarContainer?(E.shared.$tb?(E.$tb=E.shared.$tb,E.opts.toolbarInline&&s()):(E.shared.$tb=S(E.doc.createElement("DIV")),E.shared.$tb.addClass("fr-toolbar"),E.$tb=E.shared.$tb,S(E.opts.toolbarContainer).append(E.$tb),d(),E.$tb.data("instance",E)),E.opts.toolbarInline?E.$box.addClass("fr-inline"):E.$box.addClass("fr-basic"),E.events.on("focus",function(){E.$tb.data("instance",E)},!0),E.opts.toolbarInline=!1):E.opts.toolbarInline?(E.$box.addClass("fr-inline"),E.shared.$tb?(E.$tb=E.shared.$tb,s()):(E.shared.$tb=S(E.doc.createElement("DIV")),E.shared.$tb.addClass("fr-toolbar"),E.$tb=E.shared.$tb,d())):(E.$box.addClass("fr-basic"),E.$tb=S(E.doc.createElement("DIV")),E.$tb.addClass("fr-toolbar"),d(),E.$tb.data("instance",E)),E.events.on("destroy",c,!0),E.events.on(E.opts.toolbarInline||E.opts.toolbarContainer?"shared.destroy":"destroy",l,!0),E.events.on("edit.on",function(){E.$tb.removeClass("fr-disabled").removeAttr("aria-disabled")}),E.events.on("edit.off",function(){E.$tb.addClass("fr-disabled").attr("aria-disabled",!0)}),function e(){E.events.on("shortcut",function(e,t,n){var r;if(t&&!n?r=E.$tb.find('.fr-command[data-cmd="'.concat(t,'"]')):t&&n&&(r=E.$tb.find('.fr-command[data-cmd="'.concat(t,'"][data-param1="').concat(n,'"]'))),r.length&&(e.preventDefault(),e.stopPropagation(),r.parents(".fr-toolbar").data("instance",E),"keydown"===e.type))return E.button.exec(r),!1})}()},hide:i,show:function h(){if(!1===E.events.trigger("toolbar.show"))return!1;E.$tb.show()},showInline:n,disable:function u(){!f&&E.$tb&&(E.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled",!0),f=!0)},enable:function g(){f&&E.$tb&&(E.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled",!1),f=!1),E.button.bulkRefresh()},setMoreToolbarsHeight:T}};var c=["scroll","wheel","touchmove","touchstart","touchend"],d=["webkit","moz","ms","o"],f=["transitionend"],o=document.createElement("div").style,i=["Webkit","Moz","ms","O","css","style"],s={visibility:"hidden",display:"block"},r=["focus","blur","click"],a={},l=function l(e,t){return{altKey:e.altKey,bubbles:e.bubbles,cancelable:e.cancelable,changedTouches:e.changedTouches,ctrlKey:e.ctrlKey,detail:e.detail,eventPhase:e.eventPhase,metaKey:e.metaKey,pageX:e.pageX,pageY:e.pageY,shiftKey:e.shiftKey,view:e.view,"char":e["char"],key:e.key,keyCode:e.keyCode,button:e.button,buttons:e.buttons,clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pointerId:e.pointerId,pointerType:e.pointerType,screenX:e.screenX,screenY:e.screenY,targetTouches:e.targetTouches,toElement:e.toElement,touches:e.touches,type:e.type,which:e.which,target:e.target,currentTarget:t,originalEvent:e,stopPropagation:function(){e.stopPropagation()},stopImmediatePropagation:function(){e.stopImmediatePropagation()},preventDefault:function(){-1===c.indexOf(e.type)&&e.preventDefault()}}},p=function p(e){return e.ownerDocument&&e.ownerDocument.body&&e.ownerDocument.body.contains(e)||"#document"===e.nodeName||"HTML"===e.nodeName||e===window},h=function h(n,r){return function(e){var t=e.target;if(r)for(r=g(r);t&&t!==this;)Element.prototype.matches.call(t,g(r))&&n.call(t,l(e,t)),t=t.parentNode;else p(t)&&n.call(t,l(e,t))}},u=function u(e,t){return new v(e,t)},g=function g(e){return e&&"string"==typeof e?e.replace(/^\s*>/g,":scope >").replace(/,\s*>/g,", :scope >"):e},C=function C(e){return"function"==typeof e&&"number"!=typeof e.nodeType},m=u;u.fn=u.prototype={constructor:u,length:0,contains:function(e){if(!e)return!1;if(Array.isArray(e)){for(var t=0;t<e.length;t++)if(this.contains(e[t])&&this!=e[t])return!0;return!1}for(var n=0;n<this.length;n++)for(var r=e;r;){if(r==this[n]||r[0]&&r[0].isEqualNode(this[n]))return!0;r=r.parentNode}return!1},findVisible:function(e){for(var t=this.find(e),n=t.length-1;0<=n;n--)m(t[n]).isVisible()||t.splice(n,1);return t},formatParams:function(t){var e="".concat(Object.keys(t).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))}).join("&"));return e||""},ajax:function(t){var n=new XMLHttpRequest,e=this.formatParams(t.data);for(var r in"GET"===t.method.toUpperCase()&&(t.url=e?t.url+"?"+e:t.url),n.open(t.method,t.url,!0),t.withCredentials&&(n.withCredentials=!0),t.crossDomain&&n.setRequestHeader("Access-Control-Allow-Origin","*"),t.headers)Object.prototype.hasOwnProperty.call(t.headers,r)&&n.setRequestHeader(r,t.headers[r]);Object.prototype.hasOwnProperty.call(t.headers,"Content-Type")||("json"===t.dataType?n.setRequestHeader("Content-Type","application/json"):n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")),n.onload=function(){if(200==n.status){var e=n.responseText;"json"===t.dataType&&(e=JSON.parse(e)),t.done(e,n.status,n)}else t.fail(n)},n.send(e)},prevAll:function(){var e=m();if(!this[0])return e;for(var t=this[0];t&&t.previousSibling;)t=t.previousSibling,e.push(t);return e},index:function(e){return e?"string"==typeof e?[].indexOf.call(m(e),this[0]):[].indexOf.call(this,e.length?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},isVisible:function(){return!!this[0]&&!!(this[0].offsetWidth||this[0].offsetHeight||this[0].getClientRects().length)},toArray:function(){return[].slice.call(this)},get:function(e){return null==e?[].slice.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=u.merge(this.constructor(),e);return t.prevObject=this,t},wrapAll:function(e){var t;return this[0]&&(C(e)&&(e=e.call(this[0])),t=u(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){if("string"==typeof e){for(var t=e.split(" "),n=0;n<t.length&&0===t[n].trim().length;)n++;if(n<t.length&&(m(e).length&&t[n].trim()===m(e)[0].tagName&&(e=document.createElement(t[n].trim())),n++),"string"!=typeof e)for(var r=m(e);n<t.length;n++){t[n]=t[n].trim();var o=t[n].split("=");r.attr(o[0],o[1].replace('"',""))}}for(;this[0].firstChild&&this[0].firstChild!==e&&"string"!=typeof e;)e.appendChild(this[0].firstChild)},wrap:function(t){var n=C(t);return this.each(function(e){m(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(){return this.parent().each(function(){this.nodeName&&this.nodeName.toLowerCase()===name.toLowerCase()||u(this).replaceWith(this.childNodes)})},grep:function(e,t,n){for(var r=[],o=0,i=e.length,a=!n;o<i;o++)!t(e[o],o)!==a&&r.push(e[o]);return r},map:function(n){return this.pushStack(u.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack([].slice.apply(this,arguments))},each:function(e){if(this.length)for(var t=0;t<this.length&&!1!==e.call(this[t],t,this[t]);t++);return this},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},empty:function(){for(var e=0;e<this.length;e++)this[e].innerHTML=""},contents:function(){for(var e=m(),t=0;t<this.length;t++)for(var n=this[t].childNodes,r=0;r<n.length;r++)e.push(n[r]);return e},attr:function(e,t){if("object"===M(e)){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&null!==e[n]&&this.attr(n,e[n]);return this}if(void 0===t)return 0===this.length||!this[0].getAttribute&&"checked"!==e?undefined:"checked"===e?this[0].checked:"tagName"===e?this[0].tagName:this[0].getAttribute(e);if("checked"===e)for(var r=0;r<this.length;r++)this[r].checked=t;else if("tagName"===e)for(var o=0;o<this.length;o++)this[o].tagName=t;else for(var i=0;i<this.length;i++)this[i].setAttribute(e,t);return this},removeAttr:function(e){for(var t=0;t<this.length;t++)this[t].removeAttribute&&this[t].removeAttribute(e);return this},hide:function(){return this.css("display","none"),this},show:function(){return this.css("display","block"),this},focus:function(){return this.length&&this[0].focus(),this},blur:function(){return this.length&&this[0].blur(),this},data:function(e,t){if(void 0!==t){for(var n=0;n<this.length;n++)"object"!==M(this[n]["data-"+e]=t)&&"function"!=typeof t&&this[n].setAttribute&&this[n].setAttribute("data-"+e,t);return this}if(void 0!==t)return this.attr("data-"+e,t);if(0===this.length)return undefined;for(var r=0;r<this.length;r++){var o=this[r]["data-"+e];if(null==o&&this[r].getAttribute&&(o=this[r].getAttribute("data-"+e)),void 0!==o&&null!=o)return o}return undefined},removeData:function(e){for(var t=0;t<this.length;t++)this[t].removeAttribute&&this[t].removeAttribute("data-"+e),this[t]["data-"+e]=null;return this},getCorrectStyleName:function(e){if(!a[e]){var t;e in o&&(t=e);for(var n=e[0].toUpperCase()+e.slice(1),r=i.length;r--;)(e=i[r]+n)in o&&(t=e);a[e]=t}return a[e]},css:function(e,t){if(void 0!==t){if(0===this.length)return this;("string"!=typeof t||""===t.trim()||isNaN(t))&&"number"!=typeof t||!/(margin)|(padding)|(height)|(width)|(top)|(left)|(right)|(bottom)/gi.test(e)||/(line-height)/gi.test(e)||(t+="px");for(var n=0;n<this.length;n++)e=m(this).getCorrectStyleName(e),this[n].style[e]=t;return this}if("string"==typeof e){if(0===this.length)return undefined;var r=this[0].ownerDocument||document,o=r.defaultView||r.parentWindow;return e=m(this).getCorrectStyleName(e),o.getComputedStyle(this[0])[e]}for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&this.css(i,e[i]);return this},toggleClass:function(e,t){if(1<e.split(" ").length){for(var n=e.split(" "),r=0;r<n.length;r++)this.toggleClass(n[r],t);return this}for(var o=0;o<this.length;o++)void 0===t?this[o].classList.contains(e)?this[o].classList.remove(e):this[o].classList.add(e):t?this[o].classList.contains(e)||this[o].classList.add(e):this[o].classList.contains(e)&&this[o].classList.remove(e);return this},addClass:function(e){if(0===e.length)return this;if(1<e.split(" ").length){for(var t=e.split(" "),n=0;n<t.length;n++)this.addClass(t[n]);return this}for(var r=0;r<this.length;r++)this[r].classList.add(e);return this},removeClass:function(e){if(1<e.split(" ").length){for(var t=e.split(" "),n=0;n<t.length;n++)t[n]=t[n].trim(),t[n].length&&this.removeClass(t[n]);return this}for(var r=0;r<this.length;r++)e.length&&this[r].classList.remove(e);return this},getClass:function(e){return e.getAttribute&&e.getAttribute("class")||""},stripAndCollapse:function(e){return(e.match(/[^\x20\t\r\n\f]+/g)||[]).join(" ")},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+m(this).stripAndCollapse(m(this).getClass(n))+" ").indexOf(t))return!0;return!1},scrollTop:function(e){if(void 0===e)return 0===this.length?undefined:this[0]===document?document.documentElement.scrollTop:this[0].scrollTop;for(var t=0;t<this.length;t++)this[t]===document?window.scrollTo(document.documentElement.scrollLeft,e):this[t].scrollTop=e},scrollLeft:function(e){if(void 0===e)return 0===this.length?undefined:this[0]===document?document.documentElement.scrollLeft:this[0].scrollLeft;for(var t=0;t<this.length;t++)this[t]===document?window.scrollTo(e,document.documentElement.scrollTop):this[t].scrollLeft=e},on:function(e,t,n){if(1<e.split(" ").length){for(var r=e.split(" "),o=0;o<r.length;o++)if(-1!==f.indexOf(e))for(var i=0;i<d.length;i++)this.on(d[i]+e[0].toUpperCase()+e.slice(1),t,n);else this.on(r[o],t,n);return this}n="function"==typeof t?h(t,null):h(n,t);for(var a=0;a<this.length;a++){var s=m(this[a]);s.data("events")||s.data("events",[]),s.data("events").push([e,n]);var l=e.split(".");l=l[0],0<=c.indexOf(l)?s.get(0).addEventListener(l,n,{passive:!0}):s.get(0).addEventListener(l,n)}},off:function(e){if(1<e.split(" ").length){for(var t=e.split(" "),n=0;n<t.length;n++)this.off(t[n]);return this}for(var r=0;r<this.length;r++){var o=m(this[r]);if(o.data("events")){var i=e.split(".");i=i[0];for(var a=o.data("events")||[],s=a.length-1;0<=s;s--){var l=a[s];l[0]==e&&(o.get(0).removeEventListener(i,l[1]),a.splice(s,1))}}}},trigger:function(e){for(var t=0;t<this.length;t++){var n=void 0;"function"==typeof Event?n=0<=e.search(/^mouse/g)?new MouseEvent(e,{view:window,cancelable:!0,bubbles:!0}):new Event(e):0<=e.search(/^mouse/g)?(n=document.createEvent("MouseEvents")).initMouseEvent(e,!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null):(n=document.createEvent("Event")).initEvent(e,!0,!0),0<=r.indexOf(e)&&"function"==typeof this[t][e]?this[t][e]():this[t].dispatchEvent(n)}},triggerHandler:function(){},val:function(e){if(void 0===e)return this[0].value;for(var t=0;t<this.length;t++)this[t].value=e;return this},siblings:function(){return m(this[0]).parent().children().not(this)},find:function(e){var t=m();if("string"!=typeof e){for(var n=0;n<e.length;n++)for(var r=0;r<this.length;r++)if(this[r]!==e[n]&&m(this[r]).contains(e[n])){t.push(e[n]);break}return t}var o=function o(e){return"object"===("undefined"==typeof HTMLElement?"undefined":M(HTMLElement))?e instanceof HTMLElement:e&&"object"===M(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};e=g(e);for(var i=0;i<this.length;i++)if(this[i].querySelectorAll){var a=[];if(e&&"string"==typeof e)try{a=this[i].querySelectorAll(e)}catch(l){a=this[i].children}else o(e)&&(a=[e]);for(var s=0;s<a.length;s++)t.push(a[s])}return t},children:function(){for(var e=m(),t=0;t<this.length;t++)for(var n=this[t].children,r=0;r<n.length;r++)e.push(n[r]);return e},not:function(e){if("string"==typeof e)for(var t=this.length-1;0<=t;t--)Element.prototype.matches.call(this[t],e)&&this.splice(t,1);else if(e instanceof u){for(var n=this.length-1;0<=n;n--)for(var r=0;r<e.length;r++)if(this[n]===e[r]){this.splice(n,1);break}}else for(var o=this.length-1;0<=o;o--)this[o]===e[0]&&this.splice(o,1);return this},add:function(e){for(var t=0;t<e.length;t++)this.push(e[t]);return this},closest:function(e){for(var t=0;t<this.length;t++){var n=Element.prototype.closest.call(this[t],e);if(n)return m(n)}return m()},html:function(e){if(void 0===e)return 0===this.length?undefined:this[0].innerHTML;if("string"==typeof e)for(var t=0;t<this.length;t++){this[t].innerHTML=e;for(var n=this[t].children,r=this[t].ownerDocument||document,o=0;o<n.length;o++)if("SCRIPT"===n[o].tagName){var i=r.createElement("script");i.innerHTML=n[o].innerHTML,n[o].hasAttribute("async")&&i.setAttribute("async",""),i.src=n[o].src,n[o].hasAttribute("defer")&&i.setAttribute("defer",""),r.head.appendChild(i).parentNode.removeChild(i)}}else{this[0].innerHTML="",this.append(e[0]);var a=this[0].ownerDocument||document;if("SCRIPT"===e[0].tagName){var s=a.createElement("script");s.innerHTML=e[0].innerHTML,a.head.appendChild(s).parentNode.removeChild(s)}}return this},text:function(e){if(!e)return this.length?this[0].textContent:"";for(var t=0;t<this.length;t++)this[t].textContent=e},after:function e(t){if(t)if("string"==typeof t)for(var n=0;n<this.length;n++){var e=this[n];if(e.nodeType!=Node.ELEMENT_NODE){var r=e.ownerDocument.createElement("SPAN");m(e).after(r),m(r).after(t).remove()}else e.insertAdjacentHTML("afterend",t)}else{var o=this[0];if(o.nextSibling)if(t instanceof u)for(var i=0;i<t.length;i++)o.nextSibling.parentNode.insertBefore(t[i],o.nextSibling);else o.nextSibling.parentNode.insertBefore(t,o.nextSibling);else m(o.parentNode).append(t)}return this},clone:function(e){for(var t=m(),n=0;n<this.length;n++)t.push(this[n].cloneNode(e));return t},replaceWith:function(e){if("string"==typeof e)for(var t=0;t<this.length;t++)this[t].parentNode&&(this[t].outerHTML=e);else if(e&&e.length)for(var n=0;n<this.length;n++)this.replaceWith(e[n]);else this.after(e).remove()},insertBefore:function(e){return m(e).before(this[0]),this},before:function e(t){if(t instanceof u){for(var n=0;n<t.length;n++)this.before(t[n]);return this}if(t)if("string"==typeof t)for(var r=0;r<this.length;r++){var e=this[r];if(e.nodeType!=Node.ELEMENT_NODE){var o=e.ownerDocument.createElement("SPAN");m(e).before(o),m(o).before(t).remove()}else e.parentNode&&e.insertAdjacentHTML("beforebegin",t)}else{var i=this[0];if(i.parentNode)if(t instanceof u)for(var a=0;a<t.length;a++)i.parentNode.insertBefore(t[a],i);else i.parentNode.insertBefore(t,i)}return this},append:function(e){if(0==this.length)return this;if("string"==typeof e)for(var t=0;t<this.length;t++){var n=this[t],r=n.ownerDocument.createElement("SPAN");m(n).append(r),m(r).after(e).remove()}else if(e instanceof u||Array.isArray(e))for(var o=0;o<e.length;o++)this.append(e[o]);else"function"!=typeof e&&this[0].appendChild(e);return this},prepend:function(e){if(0==this.length)return this;if("string"==typeof e)for(var t=0;t<this.length;t++){var n=this[t],r=n.ownerDocument.createElement("SPAN");m(n).prepend(r),m(r).before(e).remove()}else if(e instanceof u)for(var o=0;o<e.length;o++)this.prepend(e[o]);else{var i=this[0];i.firstChild?i.firstChild?i.insertBefore(e,i.firstChild):i.appendChild(e):m(i).append(e)}return this},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},prev:function(){return this.length&&this[0].previousElementSibling?m(this[0].previousElementSibling):m()},next:function(){return this.length&&this[0].nextElementSibling?m(this[0].nextElementSibling):m()},nextAllVisible:function(){return this.next()},prevAllVisible:function(){return this.prev()},outerHeight:function(e){if(0===this.length)return undefined;var t=this[0];if(t===t.window)return t.innerHeight;var n={},r=this.isVisible();if(!r)for(var o in s)n[o]=t.style[o],t.style[o]=s[o];var i=t.offsetHeight;if(e&&(i+=parseInt(m(t).css("marginTop"))+parseInt(m(t).css("marginBottom"))),!r)for(var a in s)t.style[a]=n[a];return i},outerWidth:function(e){if(0===this.length)return undefined;var t=this[0];if(t===t.window)return t.outerWidth;var n={},r=this.isVisible();if(!r)for(var o in s)n[o]=t.style[o],t.style[o]=s[o];var i=t.offsetWidth;if(e&&(i+=parseInt(m(t).css("marginLeft"))+parseInt(m(t).css("marginRight"))),!r)for(var a in s)t.style[a]=n[a];return i},width:function(e){if(e===undefined){if(this[0]instanceof HTMLDocument)return this[0].body.offsetWidth;if(this[0])return this[0].offsetWidth}else this[0].style.width=e+"px"},height:function(e){var t=this[0];if(e===undefined){if(t instanceof HTMLDocument){var n=t.documentElement;return Math.max(t.body.scrollHeight,n.scrollHeight,t.body.offsetHeight,n.offsetHeight,n.clientHeight)}return t.offsetHeight}t.style.height=e+"px"},is:function(e){return 0!==this.length&&("string"==typeof e&&this[0].matches?this[0].matches(e):e instanceof u?this[0]==e[0]:this[0]==e)},parent:function(){return 0===this.length?m():m(this[0].parentNode)},_matches:function(e,t){var n=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector;return e&&!t?n:n.call(e,t)},parents:function(e){for(var t=m(),n=0;n<this.length;n++)for(var r=this[n].parentNode;r&&r!=document&&this._matches(r);)e?this._matches(r,e)&&t.push(r):t.push(r),r=r.parentNode;return t},parentsUntil:function(e,t){var n=m();e instanceof u&&0<e.length&&(e=e[0]);for(var r=0;r<this.length;r++)for(var o=this[r].parentNode;o&&o!=document&&o!=e&&this[r]!=e&&("string"!=typeof e||!Element.prototype.matches.call(o,e));)t?Element.prototype.matches.call(o,t)&&n.push(o):n.push(o),o=o.parentNode;return n},insertAfter:function(e){var t=e.parent()[0];t&&t.insertBefore(this[0],e[0].nextElementSibling)},filter:function(e){var t=m();if("function"==typeof e)for(var n=0;n<this.length;n++)e.call(this[n],this[n])&&t.push(this[n]);else if("string"==typeof e)for(var r=0;r<this.length;r++)this[r].matches(e)&&t.push(this[r]);return t},offset:function(){if(0===this.length)return undefined;var e=this[0].getBoundingClientRect(),t=this[0].ownerDocument.defaultView;return{top:e.top+t.pageYOffset,left:e.left+t.pageXOffset}},position:function(){return{left:this[0].offsetLeft,top:this[0].offsetTop}},push:[].push,splice:[].splice},u.extend=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e},u.merge=function(e,t){for(var n=+t.length,r=0,o=e.length;r<n;r++)e[o++]=t[r];return e.length=o,e},u.map=function(e,t,n){var r,o,i=0,a=[];if(Array.isArray(e))for(r=e.length;i<r;i++)null!=(o=t(e[i],i,n))&&a.push(o);else for(i in e)null!=(o=t(e[i],i,n))&&a.push(o);return[].concat.apply([],a)};var v=function v(e,t){if(!e)return this;if("string"==typeof e&&"<"===e[0]){var n=document.createElement("DIV");return n.innerHTML=e,m(n.firstElementChild)}if(t=t instanceof u?t[0]:t,"string"!=typeof e)return e instanceof u?e:(this[0]=e,this.length=1,this);e=g(e);for(var r=(t||document).querySelectorAll(e),o=0;o<r.length;o++)this[o]=r[o];return this.length=r.length,this};v.prototype=u.prototype;var b=V;function L(){this.doc=this.$el.get(0).ownerDocument,this.win="defaultView"in this.doc?this.doc.defaultView:this.doc.parentWindow,this.$doc=u(this.doc),this.$win=u(this.win),this.opts.pluginsEnabled||(this.opts.pluginsEnabled=Object.keys(b.PLUGINS)),this.opts.initOnClick?(this.load(b.MODULES),this.$el.on("touchstart.init",function(){u(this).data("touched",!0)}),this.$el.on("touchmove.init",function(){u(this).removeData("touched")}),this.$el.on("mousedown.init touchend.init dragenter.init focus.init",function r(e){if("false"!==this.$el.attr("contentEditable")||!this.opts.initOnClick){if("touchend"===e.type&&!this.$el.data("touched"))return!0;if(1===e.which||!e.which){this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init"),this.load(b.MODULES),this.load(b.PLUGINS);var t=e.originalEvent&&e.originalEvent.originalTarget;if(t&&"IMG"===t.tagName&&u(t).trigger("mousedown"),"undefined"==typeof this.ul&&this.destroy(),"touchend"===e.type&&this.image&&e.originalEvent&&e.originalEvent.target&&u(e.originalEvent.target).is("img")){var n=this;setTimeout(function(){n.image.edit(u(e.originalEvent.target))},100)}this.ready=!0,this.events.trigger("initialized")}}}.bind(this)),this.events.trigger("initializationDelayed")):(this.load(b.MODULES),this.load(b.PLUGINS),u(this.o_win).scrollTop(this.c_scroll),"undefined"==typeof this.ul&&this.destroy(),this.ready=!0,this.events.trigger("initialized"))}return b.Bootstrap=function(e,t,n){this.id=++b.ID,this.$=u;var r={};"function"==typeof t&&(n=t,t={}),n&&(t.events||(t.events={}),t.events.initialized=n),t&&t.documentReady&&(r.toolbarButtons=[["fullscreen","undo","redo","getPDF","print"],["bold","italic","underline","textColor","backgroundColor","clearFormatting"],["alignLeft","alignCenter","alignRight","alignJustify"],["formatOL","formatUL","indent","outdent"],["paragraphFormat"],["fontFamily"],["fontSize"],["insertLink","insertImage","quote"]],r.paragraphFormatSelection=!0,r.fontFamilySelection=!0,r.fontSizeSelection=!0,r.placeholderText="",r.quickInsertEnabled=!1,r.charCounterCount=!1),this.opts=Object.assign({},Object.assign({},b.DEFAULTS,r,"object"===M(t)&&t));var o=JSON.stringify(this.opts);b.OPTS_MAPPING[o]=b.OPTS_MAPPING[o]||this.id,this.sid=b.OPTS_MAPPING[o],b.SHARED[this.sid]=b.SHARED[this.sid]||{},this.shared=b.SHARED[this.sid],this.shared.count=(this.shared.count||0)+1,this.$oel=u(e),this.$oel.data("froala.editor",this),this.o_doc=e.ownerDocument,this.o_win="defaultView"in this.o_doc?this.o_doc.defaultView:this.o_doc.parentWindow,this.c_scroll=u(this.o_win).scrollTop(),this._init()},b.Bootstrap.prototype._init=function(){var e=this.$oel.get(0).tagName;this.$oel.closest("label").length;var t=function(){"TEXTAREA"!==e&&(this._original_html=this._original_html||this.$oel.html()),this.$box=this.$box||this.$oel,this.opts.fullPage&&(this.opts.iframe=!0),this.opts.iframe?(this.$iframe=u('<iframe src="about:blank" frameBorder="0">'),this.$wp=u("<div></div>"),this.$box.html(this.$wp),this.$wp.append(this.$iframe),this.$iframe.get(0).contentWindow.document.open(),this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"),this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"),this.$iframe.get(0).contentWindow.document.close(),this.iframe_document=this.$iframe.get(0).contentWindow.document,this.$el=u(this.iframe_document.querySelector("body")),this.el=this.$el.get(0),this.$head=u(this.iframe_document.querySelector("head")),this.$html=u(this.iframe_document.querySelector("html"))):(this.$el=u(this.o_doc.createElement("DIV")),this.el=this.$el.get(0),this.$wp=u(this.o_doc.createElement("DIV")).append(this.$el),this.$box.html(this.$wp)),setTimeout(L.bind(this),0)}.bind(this),n=function(){this.$box=u("<div>"),this.$oel.before(this.$box).hide(),this._original_html=this.$oel.val();var e=this;this.$oel.parents("form").on("submit.".concat(this.id),function(){e.events.trigger("form.submit")}),this.$oel.parents("form").on("reset.".concat(this.id),function(){e.events.trigger("form.reset")}),t()}.bind(this),r=function(){this.$el=this.$oel,this.el=this.$el.get(0),this.$el.attr("contenteditable",!0).css("outline","none").css("display","inline-block"),this.opts.multiLine=!1,this.opts.toolbarInline=!1,setTimeout(L.bind(this),0)}.bind(this),o=function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,setTimeout(L.bind(this),0)}.bind(this),i=function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.on("click.popup",function(e){e.preventDefault()}),setTimeout(L.bind(this),0)}.bind(this);this.opts.editInPopup?i():"TEXTAREA"===e?n():"A"===e?r():"IMG"===e?o():"BUTTON"===e||"INPUT"===e?(this.opts.editInPopup=!0,this.opts.toolbarInline=!1,i()):t()},b.Bootstrap.prototype.load=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){if(this[t])continue;if(b.PLUGINS[t]&&this.opts.pluginsEnabled.indexOf(t)<0)continue;if(this[t]=new e[t](this),this[t]._init&&(this[t]._init(),this.opts.initOnClick&&"core"===t))return!1}},b.Bootstrap.prototype.destroy=function(){this.destrying=!0,this.shared.count--,this.events&&this.events.$off();var e=this.html&&this.html.get();if(this.opts.iframe&&(this.events.disableBlur(),this.win.focus(),this.events.enableBlur()),this.events&&(this.events.trigger("destroy",[],!0),this.events.trigger("shared.destroy",[],!0)),0===this.shared.count){for(var t in this.shared)Object.prototype.hasOwnProperty.call(this.shared,t)&&(this.shared[t]=null,b.SHARED[this.sid][t]=null);delete b.SHARED[this.sid]}this.$oel.parents("form").off(".".concat(this.id)),this.$oel.off("click.popup"),this.$oel.removeData("froala.editor"),this.$oel.off("froalaEditor"),this.core&&this.core.destroy(e),b.INSTANCES.splice(b.INSTANCES.indexOf(this),1)},V});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(1);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/froala-editor/js/froala_editor.min.js
var froala_editor_min = __webpack_require__(3);
var froala_editor_min_default = /*#__PURE__*/__webpack_require__.n(froala_editor_min);

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js


const targetMap = new WeakMap();
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol(( false) ? undefined : '');
const MAP_KEY_ITERATE_KEY = Symbol(( false) ? undefined : '');
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function reactivity_esm_bundler_effect(fn, options = shared_esm_bundler["b" /* EMPTY_OBJ */]) {
    if (isEffect(fn)) {
        fn = fn.raw;
    }
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) {
        effect();
    }
    return effect;
}
function stop(effect) {
    if (effect.active) {
        reactivity_esm_bundler_cleanup(effect);
        if (effect.options.onStop) {
            effect.options.onStop();
        }
        effect.active = false;
    }
}
let uid = 0;
function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect() {
        if (!effect.active) {
            return options.scheduler ? undefined : fn();
        }
        if (!effectStack.includes(effect)) {
            reactivity_esm_bundler_cleanup(effect);
            try {
                enableTracking();
                effectStack.push(effect);
                activeEffect = effect;
                return fn();
            }
            finally {
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect.id = uid++;
    effect.allowRecurse = !!options.allowRecurse;
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
}
function reactivity_esm_bundler_cleanup(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === undefined) {
        return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (false) {}
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    const effects = new Set();
    const add = (effectsToAdd) => {
        if (effectsToAdd) {
            effectsToAdd.forEach(effect => {
                if (effect !== activeEffect || effect.allowRecurse) {
                    effects.add(effect);
                }
            });
        }
    };
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        depsMap.forEach(add);
    }
    else if (key === 'length' && Object(shared_esm_bundler["n" /* isArray */])(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                add(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            add(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* ADD */:
                if (!Object(shared_esm_bundler["n" /* isArray */])(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if (Object(shared_esm_bundler["s" /* isMap */])(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if (Object(shared_esm_bundler["r" /* isIntegerKey */])(key)) {
                    // new index added to array -> length changes
                    add(depsMap.get('length'));
                }
                break;
            case "delete" /* DELETE */:
                if (!Object(shared_esm_bundler["n" /* isArray */])(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if (Object(shared_esm_bundler["s" /* isMap */])(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* SET */:
                if (Object(shared_esm_bundler["s" /* isMap */])(target)) {
                    add(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const run = (effect) => {
        if (false) {}
        if (effect.options.scheduler) {
            effect.options.scheduler(effect);
        }
        else {
            effect();
        }
    };
    effects.forEach(run);
}

const isNonTrackableKeys = /*#__PURE__*/ Object(shared_esm_bundler["F" /* makeMap */])(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(shared_esm_bundler["C" /* isSymbol */]));
const reactivity_esm_bundler_get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get" /* GET */, i + '');
        }
        // we run the method using the original args first (which may be reactive)
        const res = method.apply(arr, args);
        if (res === -1 || res === false) {
            // if that didn't work, run it again using raw values.
            return method.apply(arr, args.map(toRaw));
        }
        else {
            return res;
        }
    };
});
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
        pauseTracking();
        const res = method.apply(this, args);
        resetTracking();
        return res;
    };
});
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = Object(shared_esm_bundler["n" /* isArray */])(target);
        if (!isReadonly && targetIsArray && Object(shared_esm_bundler["k" /* hasOwn */])(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (Object(shared_esm_bundler["C" /* isSymbol */])(key)
            ? builtInSymbols.has(key)
            : isNonTrackableKeys(key)) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !Object(shared_esm_bundler["r" /* isIntegerKey */])(key);
            return shouldUnwrap ? res.value : res;
        }
        if (Object(shared_esm_bundler["u" /* isObject */])(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const reactivity_esm_bundler_set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        const oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            if (!Object(shared_esm_bundler["n" /* isArray */])(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = Object(shared_esm_bundler["n" /* isArray */])(target) && Object(shared_esm_bundler["r" /* isIntegerKey */])(key)
            ? Number(key) < target.length
            : Object(shared_esm_bundler["k" /* hasOwn */])(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* ADD */, key, value);
            }
            else if (Object(shared_esm_bundler["j" /* hasChanged */])(value, oldValue)) {
                trigger(target, "set" /* SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = Object(shared_esm_bundler["k" /* hasOwn */])(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function reactivity_esm_bundler_has(target, key) {
    const result = Reflect.has(target, key);
    if (!Object(shared_esm_bundler["C" /* isSymbol */])(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, Object(shared_esm_bundler["n" /* isArray */])(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get: reactivity_esm_bundler_get,
    set: reactivity_esm_bundler_set,
    deleteProperty,
    has: reactivity_esm_bundler_has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if ((false)) {}
        return true;
    },
    deleteProperty(target, key) {
        if ((false)) {}
        return true;
    }
};
const shallowReactiveHandlers = Object(shared_esm_bundler["h" /* extend */])({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = Object(shared_esm_bundler["h" /* extend */])({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toReactive = (value) => Object(shared_esm_bundler["u" /* isObject */])(value) ? reactive(value) : value;
const toReadonly = (value) => Object(shared_esm_bundler["u" /* isObject */])(value) ? readonly(value) : value;
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "get" /* GET */, key);
    }
    !isReadonly && track(rawTarget, "get" /* GET */, rawKey);
    const { has } = getProto(rawTarget);
    const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "has" /* HAS */, key);
    }
    !isReadonly && track(rawTarget, "has" /* HAS */, rawKey);
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function reactivity_esm_bundler_add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */, value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, key, value);
    }
    else if (Object(shared_esm_bundler["j" /* hasChanged */])(value, oldValue)) {
        trigger(target, "set" /* SET */, key, value, oldValue);
    }
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ( false)
        ? undefined
        : undefined;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = Object(shared_esm_bundler["s" /* isMap */])(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if ((false)) {}
        return type === "delete" /* DELETE */ ? false : this;
    };
}
const mutableInstrumentations = {
    get(key) {
        return get$1(this, key);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add: reactivity_esm_bundler_add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
};
const shallowInstrumentations = {
    get(key) {
        return get$1(this, key, false, true);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add: reactivity_esm_bundler_add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
};
const readonlyInstrumentations = {
    get(key) {
        return get$1(this, key, true);
    },
    get size() {
        return size(this, true);
    },
    has(key) {
        return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add" /* ADD */),
    set: createReadonlyMethod("set" /* SET */),
    delete: createReadonlyMethod("delete" /* DELETE */),
    clear: createReadonlyMethod("clear" /* CLEAR */),
    forEach: createForEach(true, false)
};
const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
iteratorMethods.forEach(method => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get(Object(shared_esm_bundler["k" /* hasOwn */])(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = Object(shared_esm_bundler["L" /* toRawType */])(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */;
        default:
            return 0 /* INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
        ? 0 /* INVALID */
        : targetTypeMap(Object(shared_esm_bundler["L" /* toRawType */])(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" /* IS_READONLY */]) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, readonlyCollectionHandlers);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers) {
    if (!Object(shared_esm_bundler["u" /* isObject */])(target)) {
        if ((false)) {}
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const proxyMap = isReadonly ? readonlyMap : reactiveMap;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (reactivity_esm_bundler_isReadonly(value)) {
        return isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function reactivity_esm_bundler_isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function isProxy(value) {
    return isReactive(value) || reactivity_esm_bundler_isReadonly(value);
}
function toRaw(observed) {
    return ((observed && toRaw(observed["__v_raw" /* RAW */])) || observed);
}
function markRaw(value) {
    Object(shared_esm_bundler["g" /* def */])(value, "__v_skip" /* SKIP */, true);
    return value;
}

const convert = (val) => Object(shared_esm_bundler["u" /* isObject */])(val) ? reactive(val) : val;
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
function reactivity_esm_bundler_ref(value) {
    return createRef(value);
}
function shallowRef(value) {
    return createRef(value, true);
}
class reactivity_esm_bundler_RefImpl {
    constructor(_rawValue, _shallow = false) {
        this._rawValue = _rawValue;
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newVal) {
        if (Object(shared_esm_bundler["j" /* hasChanged */])(toRaw(newVal), this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(toRaw(this), "set" /* SET */, 'value', newVal);
        }
    }
}
function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new reactivity_esm_bundler_RefImpl(rawValue, shallow);
}
function triggerRef(ref) {
    trigger(toRaw(ref), "set" /* SET */, 'value', ( false) ? undefined : void 0);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.__v_isRef = true;
        const { get, set } = factory(() => track(this, "get" /* GET */, 'value'), () => trigger(this, "set" /* SET */, 'value'));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (false) {}
    const ret = Object(shared_esm_bundler["n" /* isArray */])(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key) {
    return isRef(object[key])
        ? object[key]
        : new ObjectRefImpl(object, key);
}

class ComputedRefImpl {
    constructor(getter, _setter, isReadonly) {
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = reactivity_esm_bundler_effect(getter, {
            lazy: true,
            scheduler: () => {
                if (!this._dirty) {
                    this._dirty = true;
                    trigger(toRaw(this), "set" /* SET */, 'value');
                }
            }
        });
        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
    }
    get value() {
        if (this._dirty) {
            this._value = this.effect();
            this._dirty = false;
        }
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function reactivity_esm_bundler_computed(getterOrOptions) {
    let getter;
    let setter;
    if (Object(shared_esm_bundler["o" /* isFunction */])(getterOrOptions)) {
        getter = getterOrOptions;
        setter = ( false)
            ? undefined
            : shared_esm_bundler["d" /* NOOP */];
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, Object(shared_esm_bundler["o" /* isFunction */])(getterOrOptions) || !getterOrOptions.set);
}



// CONCATENATED MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js





const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        /* istanbul ignore if */
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
    }
    resetTracking();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
        res.push(` ...`);
    }
    return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
    if (Object(shared_esm_bundler["B" /* isString */])(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if (isRef(value)) {
        value = formatProp(key, toRaw(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if (Object(shared_esm_bundler["o" /* isFunction */])(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = toRaw(value);
        return raw ? value : [`${key}=`, value];
    }
}

const ErrorTypeStrings = {
    ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
    ["c" /* CREATED */]: 'created hook',
    ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
    ["m" /* MOUNTED */]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
    ["u" /* UPDATED */]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */]: 'unmounted hook',
    ["a" /* ACTIVATED */]: 'activated hook',
    ["da" /* DEACTIVATED */]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */]: 'setup function',
    [1 /* RENDER_FUNCTION */]: 'render function',
    [2 /* WATCH_GETTER */]: 'watcher getter',
    [3 /* WATCH_CALLBACK */]: 'watcher callback',
    [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
    [7 /* VNODE_HOOK */]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */]: 'directive hook',
    [9 /* TRANSITION_HOOK */]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
    [12 /* FUNCTION_REF */]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
    [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (Object(shared_esm_bundler["o" /* isFunction */])(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && Object(shared_esm_bundler["w" /* isPromise */])(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ( false) ? undefined : type;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    if ((false)) {}
    else {
        // recover in prod to reduce the impact on end-user
        console.error(err);
    }
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(job) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    const jobId = getId(job);
    while (start < end) {
        const middle = (start + end) >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < jobId ? (start = middle + 1) : (end = middle);
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length ||
        !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
        job !== currentPreFlushParentJob) {
        const pos = findInsertionIndex(job);
        if (pos > -1) {
            queue.splice(pos, 0, job);
        }
        else {
            queue.push(job);
        }
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > -1) {
        queue.splice(i, 1);
    }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!Object(shared_esm_bundler["n" /* isArray */])(cb)) {
        if (!activeQueue ||
            !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
            pendingQueue.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingQueue.push(...cb);
    }
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
        pendingPreFlushCbs.length = 0;
        if ((false)) {}
        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
            if ((false)) {}
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        if ((false)) {}
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if ((false)) {}
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if ((false)) {}
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b) => getId(a) - getId(b));
    try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job) {
                if ((false)) {}
                callWithErrorHandling(job, null, 14 /* SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    }
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            throw new Error(`Maximum recursive updates exceeded. ` +
                `This means you have a reactive effect that is mutating its own ` +
                `dependencies and thus recursively triggering itself. Possible sources ` +
                `include component template, render function, updated hook or ` +
                `watcher source function.`);
        }
        else {
            seen.set(fn, count + 1);
        }
    }
}

/* eslint-disable no-restricted-globals */
let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if ((false)) {}
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, component) {
    if (!component) {
        warn(`HMR API usage is out of date.\n` +
            `Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant ` +
            `dependency that handles Vue SFC compilation.`);
        component = {};
    }
    if (map.has(id)) {
        return false;
    }
    map.set(id, {
        component: isClassComponent(component) ? component.__vccOpts : component,
        instances: new Set()
    });
    return true;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record)
        return;
    if (newRender)
        record.component.render = newRender;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    Array.from(record.instances).forEach(instance => {
        if (newRender) {
            instance.render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
        return;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    const { component, instances } = record;
    if (!hmrDirtyComponents.has(component)) {
        // 1. Update existing comp definition to match new one
        newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
        Object(shared_esm_bundler["h" /* extend */])(component, newComp);
        for (const key in component) {
            if (!(key in newComp)) {
                delete component[key];
            }
        }
        // 2. Mark component dirty. This forces the renderer to replace the component
        // on patch.
        hmrDirtyComponents.add(component);
        // 3. Make sure to unmark the component after the reload.
        queuePostFlushCb(() => {
            hmrDirtyComponents.delete(component);
        });
    }
    Array.from(instances).forEach(instance => {
        if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
        }
        else if (instance.appContext.reload) {
            // root instance mounted via createApp() has a reload method
            instance.appContext.reload();
        }
        else if (typeof window !== 'undefined') {
            // root instance inside tree created via raw render(). Force reload.
            window.location.reload();
        }
        else {
            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
        }
    });
}
function tryWrap(fn) {
    return (id, arg) => {
        try {
            return fn(id, arg);
        }
        catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                `Full reload required.`);
        }
    };
}

let devtools;
function setDevtoolsHook(hook) {
    devtools = hook;
}
function devtoolsInitApp(app, version) {
    // TODO queue if devtools is undefined
    if (!devtools)
        return;
    devtools.emit("app:init" /* APP_INIT */, app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    if (!devtools)
        return;
    devtools.emit("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */);
function createDevtoolsComponentHook(hook) {
    return (component) => {
        if (!devtools)
            return;
        devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
function devtoolsComponentEmit(component, event, params) {
    if (!devtools)
        return;
    devtools.emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
}

function runtime_core_esm_bundler_emit(instance, event, ...rawArgs) {
    const props = instance.vnode.props || shared_esm_bundler["b" /* EMPTY_OBJ */];
    if ((false)) {}
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || shared_esm_bundler["b" /* EMPTY_OBJ */];
        if (trim) {
            args = rawArgs.map(a => a.trim());
        }
        else if (number) {
            args = rawArgs.map(shared_esm_bundler["K" /* toNumber */]);
        }
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsComponentEmit(instance, event, args);
    }
    if ((false)) {}
    // convert handler name to camelCase. See issue #2249
    let handlerName = Object(shared_esm_bundler["J" /* toHandlerKey */])(Object(shared_esm_bundler["e" /* camelize */])(event));
    let handler = props[handlerName];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handlerName = Object(shared_esm_bundler["J" /* toHandlerKey */])(Object(shared_esm_bundler["l" /* hyphenate */])(event));
        handler = props[handlerName];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            (instance.emitted = {})[handlerName] = true;
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__emits !== undefined) {
        return comp.__emits;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !Object(shared_esm_bundler["o" /* isFunction */])(comp)) {
        const extendEmits = (raw) => {
            hasExtends = true;
            Object(shared_esm_bundler["h" /* extend */])(normalized, normalizeEmitsOptions(raw, appContext, true));
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__emits = null);
    }
    if (Object(shared_esm_bundler["n" /* isArray */])(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        Object(shared_esm_bundler["h" /* extend */])(normalized, raw);
    }
    return (comp.__emits = normalized);
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !Object(shared_esm_bundler["v" /* isOn */])(key)) {
        return false;
    }
    key = key.slice(2).replace(/Once$/, '');
    return (Object(shared_esm_bundler["k" /* hasOwn */])(options, key[0].toLowerCase() + key.slice(1)) ||
        Object(shared_esm_bundler["k" /* hasOwn */])(options, Object(shared_esm_bundler["l" /* hyphenate */])(key)) ||
        Object(shared_esm_bundler["k" /* hasOwn */])(options, key));
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
    currentRenderingInstance = instance;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx } = instance;
    let result;
    currentRenderingInstance = instance;
    if ((false)) {}
    try {
        let fallthroughAttrs;
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (false) {}
            result = normalizeVNode(render.length > 1
                ? render(props, ( false)
                    ? undefined
                    : { attrs, slots, emit })
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
        // attr merging
        // in dev mode, comments are preserved, and it's possible for a template
        // to have comments along side the root element which makes it a fragment
        let root = result;
        let setRoot = undefined;
        if (false /* DEV_ROOT_FRAGMENT */) {}
        if (Component.inheritAttrs !== false && fallthroughAttrs) {
            const keys = Object.keys(fallthroughAttrs);
            const { shapeFlag } = root;
            if (keys.length) {
                if (shapeFlag & 1 /* ELEMENT */ ||
                    shapeFlag & 6 /* COMPONENT */) {
                    if (propsOptions && keys.some(shared_esm_bundler["t" /* isModelListener */])) {
                        // If a v-model listener (onUpdate:xxx) has a corresponding declared
                        // prop, it indicates this component expects to handle v-model and
                        // it should not fallthrough.
                        // related: #1543, #1643, #1989
                        fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                    }
                    root = cloneVNode(root, fallthroughAttrs);
                }
                else if (false) {}
            }
        }
        // inherit directives
        if (vnode.dirs) {
            if (false) {}
            root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        // inherit transition data
        if (vnode.transition) {
            if (false) {}
            root.transition = vnode.transition;
        }
        if (false) {}
        else {
            result = root;
        }
    }
    catch (err) {
        handleError(err, instance, 1 /* RENDER_FUNCTION */);
        result = createVNode(Comment);
    }
    currentRenderingInstance = null;
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
const getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
        return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) {
                dynamicChildren[dynamicIndex] = updatedRoot;
            }
            else if (updatedRoot.patchFlag > 0) {
                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
        }
    };
    return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isVNode(child)) {
            // ignore user comment
            if (child.type !== Comment || child.children === 'v-if') {
                if (singleRoot) {
                    // has more than 1 non-comment child, return now
                    return;
                }
                else {
                    singleRoot = child;
                }
            }
        }
        else {
            return;
        }
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || Object(shared_esm_bundler["v" /* isOn */])(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!Object(shared_esm_bundler["t" /* isModelListener */])(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & 6 /* COMPONENT */ ||
        vnode.shapeFlag & 1 /* ELEMENT */ ||
        vnode.type === Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if (false) {}
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, 
    // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals);
        }
        else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary
};
// Force-casted public typing for h and TSX props inference
const Suspense = (SuspenseImpl
    );
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG);
        setActiveBranch(suspense, vnode.ssFallback);
    }
    else {
        // Suspense has no async deps. Just resolve.
        suspense.resolve();
    }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
            if (suspense.deps <= 0) {
                suspense.resolve();
            }
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG);
                setActiveBranch(suspense, newFallback);
            }
        }
        else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            }
            else {
                unmount(pendingBranch, parentComponent, suspense);
            }
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    isSVG);
                    setActiveBranch(suspense, newFallback);
                }
            }
            else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
                // force resolve
                suspense.resolve(true);
            }
            else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
            }
        }
    }
    else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            // root did not change, just normal patch
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
            setActiveBranch(suspense, newBranch);
        }
        else {
            // root node toggled
            // invoke @pending event
            const onPending = n2.props && n2.props.onPending;
            if (Object(shared_esm_bundler["o" /* isFunction */])(onPending)) {
                onPending();
            }
            // mount pending branch in off-dom container
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
            if (suspense.deps <= 0) {
                // incoming branch has no async deps, resolve now.
                suspense.resolve();
            }
            else {
                const { timeout, pendingId } = suspense;
                if (timeout > 0) {
                    setTimeout(() => {
                        if (suspense.pendingId === pendingId) {
                            suspense.fallback(newFallback);
                        }
                    }, timeout);
                }
                else if (timeout === 0) {
                    suspense.fallback(newFallback);
                }
            }
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */
    if (false) {}
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    const timeout = Object(shared_esm_bundler["K" /* toNumber */])(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false) {
            if ((false)) {}
            const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
            if (suspense.isHydrating) {
                suspense.isHydrating = false;
            }
            else if (!resume) {
                const delayEnter = activeBranch &&
                    pendingBranch.transition &&
                    pendingBranch.transition.mode === 'out-in';
                if (delayEnter) {
                    activeBranch.transition.afterLeave = () => {
                        if (pendingId === suspense.pendingId) {
                            move(pendingBranch, container, anchor, 0 /* ENTER */);
                        }
                    };
                }
                // this is initial anchor on mount
                let { anchor } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) {
                    // move content from off-dom container to actual container
                    move(pendingBranch, container, anchor, 0 /* ENTER */);
                }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) {
                queuePostFlushCb(effects);
            }
            suspense.effects = [];
            // invoke @resolve event
            const onResolve = vnode.props && vnode.props.onResolve;
            if (Object(shared_esm_bundler["o" /* isFunction */])(onResolve)) {
                onResolve();
            }
        },
        fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
                return;
            }
            const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
            // invoke @fallback event
            const onFallback = vnode.props && vnode.props.onFallback;
            if (Object(shared_esm_bundler["o" /* isFunction */])(onFallback)) {
                onFallback();
            }
            const anchor = next(activeBranch);
            const mountFallback = () => {
                if (!suspense.isInFallback) {
                    return;
                }
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) {
                activeBranch.transition.afterLeave = mountFallback;
            }
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
            true // shouldRemove
            );
            suspense.isInFallback = true;
            if (!delayEnter) {
                mountFallback();
            }
        },
        move(container, anchor, type) {
            suspense.activeBranch &&
                move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next() {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
                suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance
                .asyncDep.catch(err => {
                handleError(err, instance, 0 /* SETUP_FUNCTION */);
            })
                .then(asyncSetupResult => {
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted ||
                    suspense.isUnmounted ||
                    suspense.pendingId !== instance.suspenseId) {
                    return;
                }
                // retry from this component
                instance.asyncResolved = true;
                const { vnode } = instance;
                if ((false)) {}
                handleSetupResult(instance, asyncSetupResult);
                if (hydratedEl) {
                    // vnode may have been replaced if an update happened before the
                    // async dep is resolved.
                    vnode.el = hydratedEl;
                }
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, 
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), 
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) {
                    remove(placeholder);
                }
                updateHOCHostEl(instance, vnode.el);
                if ((false)) {}
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) {
                    suspense.resolve();
                }
            });
        },
        unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
                unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
                unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, optimized, rendererInternals, true /* hydrating */));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, optimized);
    if (suspense.deps === 0) {
        suspense.resolve();
    }
    return result;
    /* eslint-enable no-restricted-globals */
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    let content;
    let fallback;
    if (shapeFlag & 32 /* SLOTS_CHILDREN */) {
        content = normalizeSuspenseSlot(children.default);
        fallback = normalizeSuspenseSlot(children.fallback);
    }
    else {
        content = normalizeSuspenseSlot(children);
        fallback = normalizeVNode(null);
    }
    return {
        content,
        fallback
    };
}
function normalizeSuspenseSlot(s) {
    if (Object(shared_esm_bundler["o" /* isFunction */])(s)) {
        s = s();
    }
    if (Object(shared_esm_bundler["n" /* isArray */])(s)) {
        const singleChild = filterSingleRoot(s);
        if (false) {}
        s = singleChild;
    }
    return normalizeVNode(s);
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (Object(shared_esm_bundler["n" /* isArray */])(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}

let isRenderingCompiledSlot = 0;
const setCompiledSlotRendering = (n) => (isRenderingCompiledSlot += n);
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback) {
    let slot = slots[name];
    if (false) {}
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    isRenderingCompiledSlot++;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */
        ? 64 /* STABLE_FRAGMENT */
        : -2 /* BAIL */);
    isRenderingCompiledSlot--;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some(child => {
        if (!isVNode(child))
            return true;
        if (child.type === Comment)
            return false;
        if (child.type === Fragment &&
            !ensureValidVNode(child.children))
            return false;
        return true;
    })
        ? vnodes
        : null;
}

/**
 * Wrap a slot function to memoize current rendering instance
 * @private
 */
function withCtx(fn, ctx = currentRenderingInstance) {
    if (!ctx)
        return fn;
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we need to push a null block to
        // avoid that. This isn't necessary if rendering a compiled `<slot>`.
        if (!isRenderingCompiledSlot) {
            openBlock(true /* null block that disables tracking */);
        }
        const owner = currentRenderingInstance;
        setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(owner);
        if (!isRenderingCompiledSlot) {
            closeBlock();
        }
        return res;
    };
    renderFnWithContext._c = true;
    return renderFnWithContext;
}

// SFC scoped style ID management.
let currentScopeId = null;
const scopeIdStack = [];
/**
 * @private
 */
function pushScopeId(id) {
    scopeIdStack.push((currentScopeId = id));
}
/**
 * @private
 */
function popScopeId() {
    scopeIdStack.pop();
    currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
/**
 * @private
 */
function withScopeId(id) {
    return ((fn) => withCtx(function () {
        pushScopeId(id);
        const res = fn.apply(this, arguments);
        popScopeId();
        return res;
    }));
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    Object(shared_esm_bundler["g" /* def */])(attrs, InternalObjectKey, 1);
    setFullProps(instance, rawProps, props, attrs);
    // validation
    if ((false)) {}
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : shallowReactive(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
     true &&
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* FULL_PROPS */)) {
        if (patchFlag & 8 /* PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                const key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (Object(shared_esm_bundler["k" /* hasOwn */])(attrs, key)) {
                        attrs[key] = value;
                    }
                    else {
                        const camelizedKey = Object(shared_esm_bundler["e" /* camelize */])(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
                    }
                }
                else {
                    attrs[key] = value;
                }
            }
        }
    }
    else {
        // full props update.
        setFullProps(instance, rawProps, props, attrs);
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!Object(shared_esm_bundler["k" /* hasOwn */])(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = Object(shared_esm_bundler["l" /* hyphenate */])(key)) === key || !Object(shared_esm_bundler["k" /* hasOwn */])(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawProps || shared_esm_bundler["b" /* EMPTY_OBJ */], key, undefined, instance);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps || !Object(shared_esm_bundler["k" /* hasOwn */])(rawProps, key)) {
                    delete attrs[key];
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    trigger(instance, "set" /* SET */, '$attrs');
    if (false) {}
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    if (rawProps) {
        for (const key in rawProps) {
            const value = rawProps[key];
            // key, ref are reserved and never passed down
            if (Object(shared_esm_bundler["x" /* isReservedProp */])(key)) {
                continue;
            }
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && Object(shared_esm_bundler["k" /* hasOwn */])(options, (camelKey = Object(shared_esm_bundler["e" /* camelize */])(key)))) {
                props[camelKey] = value;
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                // Any non-declared (either as a prop or an emitted event) props are put
                // into a separate `attrs` object for spreading. Make sure to preserve
                // original key casing
                attrs[key] = value;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, rawCurrentProps[key], instance);
        }
    }
}
function resolvePropValue(options, props, key, value, instance) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = Object(shared_esm_bundler["k" /* hasOwn */])(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && Object(shared_esm_bundler["o" /* isFunction */])(defaultValue)) {
                setCurrentInstance(instance);
                value = defaultValue(props);
                setCurrentInstance(null);
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* shouldCast */]) {
            if (!Object(shared_esm_bundler["k" /* hasOwn */])(props, key) && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* shouldCastTrue */] &&
                (value === '' || value === Object(shared_esm_bundler["l" /* hyphenate */])(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__props) {
        return comp.__props;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !Object(shared_esm_bundler["o" /* isFunction */])(comp)) {
        const extendProps = (raw) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            Object(shared_esm_bundler["h" /* extend */])(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__props = shared_esm_bundler["a" /* EMPTY_ARR */]);
    }
    if (Object(shared_esm_bundler["n" /* isArray */])(raw)) {
        for (let i = 0; i < raw.length; i++) {
            if (false) {}
            const normalizedKey = Object(shared_esm_bundler["e" /* camelize */])(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = shared_esm_bundler["b" /* EMPTY_OBJ */];
            }
        }
    }
    else if (raw) {
        if (false) {}
        for (const key in raw) {
            const normalizedKey = Object(shared_esm_bundler["e" /* camelize */])(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    Object(shared_esm_bundler["n" /* isArray */])(opt) || Object(shared_esm_bundler["o" /* isFunction */])(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || Object(shared_esm_bundler["k" /* hasOwn */])(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    return (comp.__props = [normalized, needCastKeys]);
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    else if ((false)) {}
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (Object(shared_esm_bundler["n" /* isArray */])(expectedTypes)) {
        for (let i = 0, len = expectedTypes.length; i < len; i++) {
            if (isSameType(expectedTypes[i], type)) {
                return i;
            }
        }
    }
    else if (Object(shared_esm_bundler["o" /* isFunction */])(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validateProps(props, instance) {
    const rawValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
        let opt = options[key];
        if (opt == null)
            continue;
        validateProp(key, rawValues[key], opt, !Object(shared_esm_bundler["k" /* hasOwn */])(rawValues, key));
    }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) {
        return;
    }
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = Object(shared_esm_bundler["n" /* isArray */])(type) ? type : [type];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}
const isSimpleType = /*#__PURE__*/ Object(shared_esm_bundler["F" /* makeMap */])('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = Object(shared_esm_bundler["u" /* isObject */])(value);
    }
    else if (expectedType === 'Array') {
        valid = Object(shared_esm_bundler["n" /* isArray */])(value);
    }
    else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(shared_esm_bundler["f" /* capitalize */]).join(', ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = Object(shared_esm_bundler["L" /* toRawType */])(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !runtime_core_esm_bundler_isBoolean(expectedType, receivedType)) {
        message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += `with value ${receivedValue}.`;
    }
    return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
    if (type === 'String') {
        return `"${value}"`;
    }
    else if (type === 'Number') {
        return `${Number(value)}`;
    }
    else {
        return `${value}`;
    }
}
/**
 * dev only
 */
function isExplicable(type) {
    const explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(elem => type.toLowerCase() === elem);
}
/**
 * dev only
 */
function runtime_core_esm_bundler_isBoolean(...args) {
    return args.some(elem => elem.toLowerCase() === 'boolean');
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                pauseTracking();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                setCurrentInstance(null);
                resetTracking();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
    else if ((false)) {}
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR
!isInSSRComponentSetup && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
const onMounted = createHook("m" /* MOUNTED */);
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
const onUpdated = createHook("u" /* UPDATED */);
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* UNMOUNTED */);
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
const onErrorCaptured = (hook, target = currentInstance) => {
    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
};

// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (false) {}
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = shared_esm_bundler["b" /* EMPTY_OBJ */], instance = currentInstance) {
    if (false) {}
    const warnInvalidSource = (s) => {
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
            `a reactive object, or an array of these types.`);
    };
    let getter;
    let forceTrigger = false;
    if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = !!source._shallow;
    }
    else if (isReactive(source)) {
        getter = () => source;
        deep = true;
    }
    else if (Object(shared_esm_bundler["n" /* isArray */])(source)) {
        getter = () => source.map(s => {
            if (isRef(s)) {
                return s.value;
            }
            else if (isReactive(s)) {
                return traverse(s);
            }
            else if (Object(shared_esm_bundler["o" /* isFunction */])(s)) {
                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */, [
                    instance && instance.proxy
                ]);
            }
            else {
                ( false) && false;
            }
        });
    }
    else if (Object(shared_esm_bundler["o" /* isFunction */])(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */, [
                instance && instance.proxy
            ]);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onInvalidate]);
            };
        }
    }
    else {
        getter = shared_esm_bundler["d" /* NOOP */];
        ( false) && false;
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    const onInvalidate = (fn) => {
        cleanup = runner.options.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
        };
    };
    let oldValue = Object(shared_esm_bundler["n" /* isArray */])(source) ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!runner.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = runner();
            if (deep || forceTrigger || Object(shared_esm_bundler["j" /* hasChanged */])(newValue, oldValue)) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onInvalidate
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            runner();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job;
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        scheduler = () => {
            if (!instance || instance.isMounted) {
                queuePreFlushCb(job);
            }
            else {
                // with 'pre' option, the first call must happen before
                // the component is mounted so it is called synchronously.
                job();
            }
        };
    }
    const runner = reactivity_esm_bundler_effect(getter, {
        lazy: true,
        onTrack,
        onTrigger,
        scheduler
    });
    recordInstanceBoundEffect(runner, instance);
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = runner();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(runner, instance && instance.suspense);
    }
    else {
        runner();
    }
    return () => {
        stop(runner);
        if (instance) {
            Object(shared_esm_bundler["I" /* remove */])(instance.effects, runner);
        }
    };
}
// this.$watch
function instanceWatch(source, cb, options) {
    const publicThis = this.proxy;
    const getter = Object(shared_esm_bundler["B" /* isString */])(source)
        ? () => publicThis[source]
        : source.bind(publicThis);
    return doWatch(getter, cb.bind(publicThis), options, this);
}
function traverse(value, seen = new Set()) {
    if (!Object(shared_esm_bundler["u" /* isObject */])(value) || seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (Object(shared_esm_bundler["n" /* isArray */])(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (Object(shared_esm_bundler["z" /* isSet */])(value) || Object(shared_esm_bundler["s" /* isMap */])(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            // warn multiple elements
            if (false) {}
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            // check mode
            if (false) {}
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out') {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* BAIL */;
        }
    }
    return ret;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(props, { slots }) {
        const cache = new Map();
        const keys = new Set();
        let current = null;
        const instance = getCurrentInstance();
        const parentSuspense = instance.suspense;
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */, parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, optimized);
            queuePostRenderEffect(() => {
                instance.isDeactivated = false;
                if (instance.a) {
                    Object(shared_esm_bundler["m" /* invokeArrayFns */])(instance.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
            }, parentSuspense);
        };
        sharedContext.deactivate = (vnode) => {
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */, parentSuspense);
            queuePostRenderEffect(() => {
                if (instance.da) {
                    Object(shared_esm_bundler["m" /* invokeArrayFns */])(instance.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
                instance.isDeactivated = true;
            }, parentSuspense);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key) => {
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) {
                    pruneCacheEntry(key);
                }
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
                unmount(cached);
            }
            else if (current) {
                // current active instance should no longer be kept-alive.
                // we can't unmount it now but it might be later, so reset its flag now.
                resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache(name => matches(include, name));
            exclude && pruneCache(name => !matches(exclude, name));
        }, 
        // prune post-render after `current` has been updated
        { flush: 'post', deep: true });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = () => {
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
            cache.forEach(cached => {
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return () => {
            pendingCacheKey = null;
            if (!slots.default) {
                return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                if ((false)) {}
                current = null;
                return children;
            }
            else if (!isVNode(rawVNode) ||
                (!(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */) &&
                    !(rawVNode.shapeFlag & 128 /* SUSPENSE */))) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(comp);
            const { include, exclude, max } = props;
            if ((include && (!name || !matches(include, name))) ||
                (exclude && name && matches(exclude, name))) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */) {
                    rawVNode.ssContent = vnode;
                }
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                    // recursively update transition hooks on subTree
                    setTransitionHooks(vnode, vnode.transition);
                }
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            }
            else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) {
                    pruneCacheEntry(keys.values().next().value);
                }
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
            current = vnode;
            return rawVNode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if (Object(shared_esm_bundler["n" /* isArray */])(pattern)) {
        return pattern.some((p) => matches(p, name));
    }
    else if (Object(shared_esm_bundler["B" /* isString */])(pattern)) {
        return pattern.split(',').indexOf(name) > -1;
    }
    else if (pattern.test) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        Object(shared_esm_bundler["I" /* remove */])(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
        shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
    }
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
        shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
    }
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => Object(shared_esm_bundler["n" /* isArray */])(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => withCtx((props) => {
    if (false) {}
    return normalizeSlotValue(rawSlot(props));
}, ctx);
const normalizeObjectSlots = (rawSlots, slots) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if (Object(shared_esm_bundler["o" /* isFunction */])(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            if ((false)) {}
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    if (false) {}
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            instance.slots = children;
            // make compiler marker non-enumerable
            Object(shared_esm_bundler["g" /* def */])(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    Object(shared_esm_bundler["g" /* def */])(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = shared_esm_bundler["b" /* EMPTY_OBJ */];
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (false) {}
            else if (type === 1 /* STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                Object(shared_esm_bundler["h" /* extend */])(slots, children);
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
const isBuiltInDirective = /*#__PURE__*/ Object(shared_esm_bundler["F" /* makeMap */])('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
        warn('Do not use built-in directive ids as custom directive id: ' + name);
    }
}
/**
 * Adds directives to a VNode.
 */
function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        ( false) && false;
        return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = shared_esm_bundler["b" /* EMPTY_OBJ */]] = directives[i];
        if (Object(shared_esm_bundler["o" /* isFunction */])(dir)) {
            dir = {
                mounted: dir,
                updated: dir
            };
        }
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        const hook = binding.dir[name];
        if (hook) {
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
        }
    }
}

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: shared_esm_bundler["c" /* NO */],
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            isCustomElement: shared_esm_bundler["c" /* NO */],
            errorHandler: undefined,
            warnHandler: undefined
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null)
    };
}
let runtime_core_esm_bundler_uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !Object(shared_esm_bundler["u" /* isObject */])(rootProps)) {
            ( false) && false;
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: runtime_core_esm_bundler_uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
                if ((false)) {}
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    ( false) && false;
                }
                else if (plugin && Object(shared_esm_bundler["o" /* isFunction */])(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if (Object(shared_esm_bundler["o" /* isFunction */])(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else if ((false)) {}
                return app;
            },
            mixin(mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                        // global mixin with props/emits de-optimizes props/emits
                        // normalization caching.
                        if (mixin.props || mixin.emits) {
                            context.deopt = true;
                        }
                    }
                    else if ((false)) {}
                }
                else if ((false)) {}
                return app;
            },
            component(name, component) {
                if ((false)) {}
                if (!component) {
                    return context.components[name];
                }
                if (false) {}
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if ((false)) {}
                if (!directive) {
                    return context.directives[name];
                }
                if (false) {}
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    // HMR root reload
                    if ((false)) {}
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        devtoolsInitApp(app, version);
                    }
                    return vnode.component.proxy;
                }
                else if ((false)) {}
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        devtoolsUnmountApp(app);
                    }
                    delete app._container.__vue_app__;
                }
                else if ((false)) {}
            },
            provide(key, value) {
                if (false) {}
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        });
        return app;
    };
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container) => {
        if (false) {}
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null);
        flushPostFlushCbs();
        if (hasMismatch && !false) {
            // this error should show up in production
            console.error(`Hydration completed but contains mismatches.`);
        }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, optimized = false) => {
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, isFragmentStart);
        const { type, ref, shapeFlag } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        let nextNode = null;
        switch (type) {
            case Text:
                if (domType !== 3 /* TEXT */) {
                    nextNode = onMismatch();
                }
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        ( false) &&
                            false;
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */ || isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = nextSibling(node);
                }
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */) {
                    nextNode = onMismatch();
                }
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for (let i = 0; i < vnode.staticCount; i++) {
                        if (needToAdoptContent)
                            vnode.children += nextNode.outerHTML;
                        if (i === vnode.staticCount - 1) {
                            vnode.anchor = nextNode;
                        }
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, optimized);
                }
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    if (domType !== 1 /* ELEMENT */ ||
                        vnode.type !== node.tagName.toLowerCase()) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, optimized);
                    }
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    const container = parentNode(node);
                    const hydrateComponent = () => {
                        mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    };
                    // async component
                    const loadAsync = vnode.type.__asyncLoader;
                    if (loadAsync) {
                        loadAsync().then(hydrateComponent);
                    }
                    else {
                        hydrateComponent();
                    }
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart
                        ? locateClosingAsyncAnchor(node)
                        : nextSibling(node);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    if (domType !== 8 /* COMMENT */) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, optimized, rendererInternals, hydrateChildren);
                    }
                }
                else if (shapeFlag & 128 /* SUSPENSE */) {
                    nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), optimized, rendererInternals, hydrateNode);
                }
                else if ((false)) {}
        }
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode);
        }
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, optimized) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { props, patchFlag, shapeFlag, dirs } = vnode;
        // skip props & children if this is hoisted static nodes
        if (patchFlag !== -1 /* HOISTED */) {
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                if (!optimized ||
                    (patchFlag & 16 /* FULL_PROPS */ ||
                        patchFlag & 32 /* HYDRATE_EVENTS */)) {
                    for (const key in props) {
                        if (!Object(shared_esm_bundler["x" /* isReservedProp */])(key) && Object(shared_esm_bundler["v" /* isOn */])(key)) {
                            patchProp(el, key, null, props[key]);
                        }
                    }
                }
                else if (props.onClick) {
                    // Fast path for click listeners (which is most often) to avoid
                    // iterating through props.
                    patchProp(el, 'onClick', null, props.onClick);
                }
            }
            // vnode / directive hooks
            let vnodeHooks;
            if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                queueEffectWithSuspense(() => {
                    vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                    dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                }, parentSuspense);
            }
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ &&
                // skip if element has innerHTML / textContent
                !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, optimized);
                let hasWarned = false;
                while (next) {
                    hasMismatch = true;
                    if (false) {}
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            }
            else if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    ( false) &&
                        false;
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, optimized) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for (let i = 0; i < l; i++) {
            const vnode = optimized
                ? children[i]
                : (children[i] = normalizeVNode(children[i]));
            if (node) {
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, optimized);
            }
            else {
                hasMismatch = true;
                if (false) {}
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container));
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, optimized) => {
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, optimized);
        if (next && isComment(next) && next.data === ']') {
            return nextSibling((vnode.anchor = next));
        }
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert((vnode.anchor = createComment(`]`)), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, isFragment) => {
        hasMismatch = true;
        ( false) &&
            false;
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while (true) {
                const next = nextSibling(node);
                if (next && next !== end) {
                    remove(next);
                }
                else {
                    break;
                }
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container));
        return next;
    };
    const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[')
                    match++;
                if (node.data === ']') {
                    if (match === 0) {
                        return nextSibling(node);
                    }
                    else {
                        match--;
                    }
                }
            }
        }
        return node;
    };
    return [hydrate, hydrateNode];
}

let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark(`vue-${type}-${instance.uid}`);
    }
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
}
function isSupported() {
    if (supported !== undefined) {
        return supported;
    }
    /* eslint-disable no-restricted-globals */
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else {
        supported = false;
    }
    /* eslint-enable no-restricted-globals */
    return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    let needWarn = false;
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        needWarn = true;
        Object(shared_esm_bundler["i" /* getGlobalThis */])().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        needWarn = true;
        Object(shared_esm_bundler["i" /* getGlobalThis */])().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (false) {}
}

// implementation, close to no-op
function defineComponent(options) {
    return Object(shared_esm_bundler["o" /* isFunction */])(options) ? { setup: options, name: options.name } : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if (Object(shared_esm_bundler["o" /* isFunction */])(source)) {
        source = { loader: source };
    }
    const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = () => {
        let thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest = loader()
                .catch(err => {
                err = err instanceof Error ? err : new Error(String(err));
                if (userOnError) {
                    return new Promise((resolve, reject) => {
                        const userRetry = () => resolve(retry());
                        const userFail = () => reject(err);
                        userOnError(err, userRetry, userFail, retries + 1);
                    });
                }
                else {
                    throw err;
                }
            })
                .then((comp) => {
                if (thisRequest !== pendingRequest && pendingRequest) {
                    return pendingRequest;
                }
                if (false) {}
                // interop module default
                if (comp &&
                    (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                    comp = comp.default;
                }
                if (false) {}
                resolvedComp = comp;
                return comp;
            })));
    };
    return defineComponent({
        __asyncLoader: load,
        name: 'AsyncComponentWrapper',
        setup() {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
            };
            // suspense-controlled or SSR.
            if ((suspensible && instance.suspense) ||
                (false )) {
                return load()
                    .then(comp => {
                    return () => createInnerComp(comp, instance);
                })
                    .catch(err => {
                    onError(err);
                    return () => errorComponent
                        ? createVNode(errorComponent, {
                            error: err
                        })
                        : null;
                });
            }
            const loaded = reactivity_esm_bundler_ref(false);
            const error = reactivity_esm_bundler_ref();
            const delayed = reactivity_esm_bundler_ref(!!delay);
            if (delay) {
                setTimeout(() => {
                    delayed.value = false;
                }, delay);
            }
            if (timeout != null) {
                setTimeout(() => {
                    if (!loaded.value && !error.value) {
                        const err = new Error(`Async component timed out after ${timeout}ms.`);
                        onError(err);
                        error.value = err;
                    }
                }, timeout);
            }
            load()
                .then(() => {
                loaded.value = true;
            })
                .catch(err => {
                onError(err);
                error.value = err;
            });
            return () => {
                if (loaded.value && resolvedComp) {
                    return createInnerComp(resolvedComp, instance);
                }
                else if (error.value && errorComponent) {
                    return createVNode(errorComponent, {
                        error: error.value
                    });
                }
                else if (loadingComponent && !delayed.value) {
                    return createVNode(loadingComponent);
                }
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref, props, children } }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}

const prodEffectOptions = {
    scheduler: queueJob,
    // #1801, #2043 component render effects should allow recursive updates
    allowRecurse: true
};
function createDevEffectOptions(instance) {
    return {
        scheduler: queueJob,
        allowRecurse: true,
        onTrack: instance.rtc ? e => Object(shared_esm_bundler["m" /* invokeArrayFns */])(instance.rtc, e) : void 0,
        onTrigger: instance.rtg ? e => Object(shared_esm_bundler["m" /* invokeArrayFns */])(instance.rtg, e) : void 0
    };
}
const queuePostRenderEffect = queueEffectWithSuspense
    ;
const setRef = (rawRef, oldRawRef, parentSuspense, vnode) => {
    if (Object(shared_esm_bundler["n" /* isArray */])(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && (Object(shared_esm_bundler["n" /* isArray */])(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode));
        return;
    }
    let value;
    if (!vnode || isAsyncWrapper(vnode)) {
        value = null;
    }
    else {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            value = vnode.component.exposed || vnode.component.proxy;
        }
        else {
            value = vnode.el;
        }
    }
    const { i: owner, r: ref } = rawRef;
    if (false) {}
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === shared_esm_bundler["b" /* EMPTY_OBJ */] ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (Object(shared_esm_bundler["B" /* isString */])(oldRef)) {
            refs[oldRef] = null;
            if (Object(shared_esm_bundler["k" /* hasOwn */])(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if (isRef(oldRef)) {
            oldRef.value = null;
        }
    }
    if (Object(shared_esm_bundler["B" /* isString */])(ref)) {
        const doSet = () => {
            refs[ref] = value;
            if (Object(shared_esm_bundler["k" /* hasOwn */])(setupState, ref)) {
                setupState[ref] = value;
            }
        };
        // #1789: for non-null values, set them after render
        // null values means this is unmount and it should not overwrite another
        // ref with the same key
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        }
        else {
            doSet();
        }
    }
    else if (isRef(ref)) {
        const doSet = () => {
            ref.value = value;
        };
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        }
        else {
            doSet();
        }
    }
    else if (Object(shared_esm_bundler["o" /* isFunction */])(ref)) {
        callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */, [value, refs]);
    }
    else if ((false)) {}
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    // compile-time feature flags check
    {
        initFeatureFlags();
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        const target = Object(shared_esm_bundler["i" /* getGlobalThis */])();
        target.__VUE__ = true;
        setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, forcePatchProp: hostForcePatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = shared_esm_bundler["d" /* NOOP */], cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, optimized = false) => {
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                else if ((false)) {}
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if (shapeFlag & 128 /* SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if ((false)) {}
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    /**
     * Dev / HMR only
     */
    const patchStaticNode = (n1, n2, container, isSVG) => {
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        }
        else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, scopeId, patchFlag, dirs } = vnode;
        if ( true &&
            vnode.el &&
            hostCloneNode !== undefined &&
            patchFlag === -1 /* HOISTED */) {
            // If a vnode has non-null el, it means it's being reused.
            // Only static vnodes can be reused, so its mounted DOM nodes should be
            // exactly the same, and we can simply do a clone here.
            // only do this in production since cloned trees cannot be HMR updated.
            el = vnode.el = hostCloneNode(vnode.el);
        }
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                for (const key in props) {
                    if (!Object(shared_esm_bundler["x" /* isReservedProp */])(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            // scopeId
            setScopeId(el, scopeId, vnode, parentComponent);
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            Object.defineProperty(el, '__vnode', {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, '__vueParentComponent', {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, scopeId, vnode, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (parentComponent) {
            const treeOwnerId = parentComponent.type.__scopeId;
            // vnode's own scopeId and the current patched component's scopeId is
            // different - this is a slot content node.
            if (treeOwnerId && treeOwnerId !== scopeId) {
                hostSetScopeId(el, treeOwnerId + '-s');
            }
            let subTree = parentComponent.subTree;
            if (false) {}
            if (vnode === subTree) {
                setScopeId(el, parentComponent.vnode.scopeId, parentComponent.vnode, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
        const oldProps = n1.props || shared_esm_bundler["b" /* EMPTY_OBJ */];
        const newProps = n2.props || shared_esm_bundler["b" /* EMPTY_OBJ */];
        let vnodeHook;
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        if (false) {}
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev ||
                            (hostForcePatchProp && hostForcePatchProp(el, key))) {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);
            if (false) {}
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            oldVNode.type === Fragment ||
                // - In the case of different nodes, there is going to be a replacement
                // which also requires the correct parent container
                !isSameVNodeType(oldVNode, newVNode) ||
                // - In the case of a component, it could contain anything.
                oldVNode.shapeFlag & 6 /* COMPONENT */ ||
                oldVNode.shapeFlag & 64 /* TELEPORT */
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            for (const key in newProps) {
                // empty string is not valid prop
                if (Object(shared_esm_bundler["x" /* isReservedProp */])(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev ||
                    (hostForcePatchProp && hostForcePatchProp(el, key))) {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if (oldProps !== shared_esm_bundler["b" /* EMPTY_OBJ */]) {
                for (const key in oldProps) {
                    if (!Object(shared_esm_bundler["x" /* isReservedProp */])(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren } = n2;
        if (patchFlag > 0) {
            optimized = true;
        }
        if (false) {}
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* STABLE_FRAGMENT */ &&
                dynamicChildren &&
                // #2715 the previous fragment could've been a BAILed one as a result
                // of renderSlot() with no valid children
                n1.dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);
                if (false) {}
                else if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        if (false) {}
        if ((false)) {}
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        if ((false)) {}
        setupComponent(instance);
        if ((false)) {}
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        if ((false)) {}
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep &&
                !instance.asyncResolved) {
                // async & still pending - just update props and slots
                // since the component's reactive effect for render isn't set-up yet
                if ((false)) {}
                updateComponentPreRender(instance, n2, optimized);
                if ((false)) {}
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect runner.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        // create reactive effect for rendering
        instance.update = reactivity_esm_bundler_effect(function componentEffect() {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                // beforeMount hook
                if (bm) {
                    Object(shared_esm_bundler["m" /* invokeArrayFns */])(bm);
                }
                // onVnodeBeforeMount
                if ((vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                // render
                if ((false)) {}
                const subTree = (instance.subTree = renderComponentRoot(instance));
                if ((false)) {}
                if (el && hydrateNode) {
                    if ((false)) {}
                    // vnode has adopted host node - perform hydration instead of mount.
                    hydrateNode(initialVNode.el, subTree, instance, parentSuspense);
                    if ((false)) {}
                }
                else {
                    if ((false)) {}
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    if ((false)) {}
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if ((vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
                    }, parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                const { a } = instance;
                if (a &&
                    initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
                    queuePostRenderEffect(a, parentSuspense);
                }
                instance.isMounted = true;
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentAdded(instance);
                }
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if ((false)) {}
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    Object(shared_esm_bundler["m" /* invokeArrayFns */])(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                // render
                if ((false)) {}
                const nextTree = renderComponentRoot(instance);
                if ((false)) {}
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                if ((false)) {}
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                if ((false)) {}
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, next, vnode);
                    }, parentSuspense);
                }
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentUpdated(instance);
                }
                if ((false)) {}
            }
        }, ( false) ? undefined : prodEffectOptions);
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children);
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        c1 = c1 || shared_esm_bundler["a" /* EMPTY_ARR */];
        c2 = c2 || shared_esm_bundler["a" /* EMPTY_ARR */];
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    if (false) {}
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : shared_esm_bundler["a" /* EMPTY_ARR */];
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */ &&
            shapeFlag & 1 /* ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null) {
            setRef(ref, null, parentSuspense, null);
        }
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        let vnodeHook;
        if ((vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if (shapeFlag & 128 /* SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === Fragment &&
                (patchFlag & 128 /* KEYED_FRAGMENT */ ||
                    patchFlag & 256 /* UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            // an unmounted teleport should always remove its children if not disabled
            if (shapeFlag & 64 /* TELEPORT */ &&
                (doRemove || !isTeleportDisabled(vnode.props))) {
                vnode.type.remove(vnode, internals);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        if (false) {}
        const { bum, effects, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            Object(shared_esm_bundler["m" /* invokeArrayFns */])(bum);
        }
        if (effects) {
            for (let i = 0; i < effects.length; i++) {
                stop(effects[i]);
            }
        }
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            stop(update);
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentRemoved(instance);
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128 /* SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container);
        }
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (Object(shared_esm_bundler["n" /* isArray */])(ch1) && Object(shared_esm_bundler["n" /* isArray */])(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
            // also inherit for comment nodes, but not placeholders (e.g. v-if which
            // would have received .el during block patch)
            if (false) {}
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const isTargetSVG = (target) => typeof SVGElement !== 'undefined' && target instanceof SVGElement;
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if (Object(shared_esm_bundler["B" /* isString */])(targetSelector)) {
        if (!select) {
            ( false) &&
                false;
            return null;
        }
        else {
            const target = select(targetSelector);
            if (!target) {
                ( false) &&
                    false;
            }
            return target;
        }
    }
    else {
        if (false) {}
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        const { shapeFlag, children } = n2;
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el = ( false)
                ? undefined
                : createText(''));
            const mainAnchor = (n2.anchor = ( false)
                ? undefined
                : createText(''));
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            }
            else if (false) {}
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (n2.dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                    }
                    else if ((false)) {}
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                }
            }
        }
    },
    remove(vnode, { r: remove, o: { remove: hostRemove } }) {
        const { shapeFlag, children, anchor } = vnode;
        hostRemove(anchor);
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                remove(children[i]);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, optimized);
            }
            target._lpa =
                vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;

const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */
function resolveComponent(name) {
    return resolveAsset(COMPONENTS, name) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */
function resolveDynamicComponent(component) {
    if (Object(shared_esm_bundler["B" /* isString */])(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
    }
    else {
        // invalid types will fallthrough to createVNode and raise warning
        return (component || NULL_DYNAMIC_COMPONENT);
    }
}
/**
 * @private
 */
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // self name has highest priority
        if (type === COMPONENTS) {
            // special self referencing call generated by compiler
            // inferred from SFC filename
            if (name === `_self`) {
                return Component;
            }
            const selfName = getComponentName(Component);
            if (selfName &&
                (selfName === name ||
                    selfName === Object(shared_esm_bundler["e" /* camelize */])(name) ||
                    selfName === Object(shared_esm_bundler["f" /* capitalize */])(Object(shared_esm_bundler["e" /* camelize */])(name)))) {
                return Component;
            }
        }
        const res = 
        // local registration
        // check instance[type] first for components with mixin or extends.
        resolve(instance[type] || Component[type], name) ||
            // global registration
            resolve(instance.appContext[type], name);
        if (false) {}
        return res;
    }
    else if ((false)) {}
}
function resolve(registry, name) {
    return (registry &&
        (registry[name] ||
            registry[Object(shared_esm_bundler["e" /* camelize */])(name)] ||
            registry[Object(shared_esm_bundler["f" /* capitalize */])(Object(shared_esm_bundler["e" /* camelize */])(name))]));
}

const Fragment = Symbol(( false) ? undefined : undefined);
const Text = Symbol(( false) ? undefined : undefined);
const Comment = Symbol(( false) ? undefined : undefined);
const Static = Symbol(( false) ? undefined : undefined);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let runtime_core_esm_bundler_shouldTrack = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    runtime_core_esm_bundler_shouldTrack += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    const vnode = createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */);
    // save current block children on the block vnode
    vnode.dynamicChildren = currentBlock || shared_esm_bundler["a" /* EMPTY_ARR */];
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (runtime_core_esm_bundler_shouldTrack > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (false) {}
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer
        ? vnodeArgsTransformer(args, currentRenderingInstance)
        : args));
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref }) => {
    return (ref != null
        ? Object(shared_esm_bundler["B" /* isString */])(ref) || isRef(ref) || Object(shared_esm_bundler["o" /* isFunction */])(ref)
            ? { i: currentRenderingInstance, r: ref }
            : ref
        : null);
};
const createVNode = (( false)
    ? undefined
    : _createVNode);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (false) {}
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        if (isProxy(props) || InternalObjectKey in props) {
            props = Object(shared_esm_bundler["h" /* extend */])({}, props);
        }
        let { class: klass, style } = props;
        if (klass && !Object(shared_esm_bundler["B" /* isString */])(klass)) {
            props.class = Object(shared_esm_bundler["G" /* normalizeClass */])(klass);
        }
        if (Object(shared_esm_bundler["u" /* isObject */])(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (isProxy(style) && !Object(shared_esm_bundler["n" /* isArray */])(style)) {
                style = Object(shared_esm_bundler["h" /* extend */])({}, style);
            }
            props.style = Object(shared_esm_bundler["H" /* normalizeStyle */])(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = Object(shared_esm_bundler["B" /* isString */])(type)
        ? 1 /* ELEMENT */
        : isSuspense(type)
            ? 128 /* SUSPENSE */
            : isTeleport(type)
                ? 64 /* TELEPORT */
                : Object(shared_esm_bundler["u" /* isObject */])(type)
                    ? 4 /* STATEFUL_COMPONENT */
                    : Object(shared_esm_bundler["o" /* isFunction */])(type)
                        ? 2 /* FUNCTIONAL_COMPONENT */
                        : 0;
    if (false) {}
    const vnode = {
        __v_isVNode: true,
        ["__v_skip" /* SKIP */]: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        children: null,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    // validate key
    if (false) {}
    normalizeChildren(vnode, children);
    // normalize suspense children
    if (shapeFlag & 128 /* SUSPENSE */) {
        const { content, fallback } = normalizeSuspenseChildren(vnode);
        vnode.ssContent = content;
        vnode.ssFallback = fallback;
    }
    if (runtime_core_esm_bundler_shouldTrack > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        patchFlag !== 32 /* HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    return {
        __v_isVNode: true,
        ["__v_skip" /* SKIP */]: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? Object(shared_esm_bundler["n" /* isArray */])(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        children:  false
            ? undefined
            : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: perserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* FULL_PROPS */
                : patchFlag | 16 /* FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (Object(shared_esm_bundler["n" /* isArray */])(vnode.children)) {
        cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(Comment);
    }
    else if (Object(shared_esm_bundler["n" /* isArray */])(child)) {
        // fragment
        return createVNode(Fragment, null, child);
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return child.el === null ? child : cloneVNode(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if (Object(shared_esm_bundler["n" /* isArray */])(children)) {
        type = 16 /* ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & 1 /* ELEMENT */ || shapeFlag & 64 /* TELEPORT */) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && setCompiledSlotRendering(1);
                normalizeChildren(vnode, slot());
                slot._c && setCompiledSlotRendering(-1);
            }
            return;
        }
        else {
            type = 32 /* SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.vnode.patchFlag & 1024 /* DYNAMIC_SLOTS */) {
                    children._ = 2 /* DYNAMIC */;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                }
                else {
                    children._ = 1 /* STABLE */;
                }
            }
        }
    }
    else if (Object(shared_esm_bundler["o" /* isFunction */])(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */) {
            type = 16 /* ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = Object(shared_esm_bundler["h" /* extend */])({}, args[0]);
    for (let i = 1; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = Object(shared_esm_bundler["G" /* normalizeClass */])([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = Object(shared_esm_bundler["H" /* normalizeStyle */])([ret.style, toMerge.style]);
            }
            else if (Object(shared_esm_bundler["v" /* isOn */])(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (existing !== incoming) {
                    ret[key] = existing
                        ? [].concat(existing, toMerge[key])
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}

function provide(key, value) {
    if (!currentInstance) {
        if ((false)) {}
    }
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the intance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && Object(shared_esm_bundler["o" /* isFunction */])(defaultValue)
                ? defaultValue()
                : defaultValue;
        }
        else if ((false)) {}
    }
    else if ((false)) {}
}

function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
        if (cache[key]) {
            warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        }
        else {
            cache[key] = type;
        }
    };
}
let isInBeforeCreate = false;
function applyOptions(instance, options, deferredData = [], deferredWatch = [], deferredProvide = [], asMixin = false) {
    const { 
    // composition
    mixins, extends: extendsOptions, 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // assets
    components, directives, 
    // lifecycle
    beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, 
    // public API
    expose } = options;
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    const globalMixins = instance.appContext.mixins;
    if (asMixin && render && instance.render === shared_esm_bundler["d" /* NOOP */]) {
        instance.render = render;
    }
    // applyOptions is called non-as-mixin once per instance
    if (!asMixin) {
        isInBeforeCreate = true;
        callSyncHook('beforeCreate', "bc" /* BEFORE_CREATE */, options, instance, globalMixins);
        isInBeforeCreate = false;
        // global mixins are applied first
        applyMixins(instance, globalMixins, deferredData, deferredWatch, deferredProvide);
    }
    // extending a base component...
    if (extendsOptions) {
        applyOptions(instance, extendsOptions, deferredData, deferredWatch, deferredProvide, true);
    }
    // local mixins
    if (mixins) {
        applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide);
    }
    const checkDuplicateProperties = ( false) ? undefined : null;
    if ((false)) {}
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        if (Object(shared_esm_bundler["n" /* isArray */])(injectOptions)) {
            for (let i = 0; i < injectOptions.length; i++) {
                const key = injectOptions[i];
                ctx[key] = inject(key);
                if ((false)) {}
            }
        }
        else {
            for (const key in injectOptions) {
                const opt = injectOptions[key];
                if (Object(shared_esm_bundler["u" /* isObject */])(opt)) {
                    ctx[key] = inject(opt.from || key, opt.default, true /* treat default function as factory */);
                }
                else {
                    ctx[key] = inject(opt);
                }
                if ((false)) {}
            }
        }
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if (Object(shared_esm_bundler["o" /* isFunction */])(methodHandler)) {
                // In dev mode, we use the `createRenderContext` function to define methods to the proxy target,
                // and those are read-only but reconfigurable, so it needs to be redefined here
                if ((false)) {}
                else {
                    ctx[key] = methodHandler.bind(publicThis);
                }
                if ((false)) {}
            }
            else if ((false)) {}
        }
    }
    if (!asMixin) {
        if (deferredData.length) {
            deferredData.forEach(dataFn => resolveData(instance, dataFn, publicThis));
        }
        if (dataOptions) {
            // @ts-ignore dataOptions is not fully type safe
            resolveData(instance, dataOptions, publicThis);
        }
        if ((false)) {}
    }
    else if (dataOptions) {
        deferredData.push(dataOptions);
    }
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = Object(shared_esm_bundler["o" /* isFunction */])(opt)
                ? opt.bind(publicThis, publicThis)
                : Object(shared_esm_bundler["o" /* isFunction */])(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : shared_esm_bundler["d" /* NOOP */];
            if (false) {}
            const set = !Object(shared_esm_bundler["o" /* isFunction */])(opt) && Object(shared_esm_bundler["o" /* isFunction */])(opt.set)
                ? opt.set.bind(publicThis)
                : ( false)
                    ? undefined
                    : shared_esm_bundler["d" /* NOOP */];
            const c = runtime_core_esm_bundler_computed({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
            if ((false)) {}
        }
    }
    if (watchOptions) {
        deferredWatch.push(watchOptions);
    }
    if (!asMixin && deferredWatch.length) {
        deferredWatch.forEach(watchOptions => {
            for (const key in watchOptions) {
                createWatcher(watchOptions[key], ctx, publicThis, key);
            }
        });
    }
    if (provideOptions) {
        deferredProvide.push(provideOptions);
    }
    if (!asMixin && deferredProvide.length) {
        deferredProvide.forEach(provideOptions => {
            const provides = Object(shared_esm_bundler["o" /* isFunction */])(provideOptions)
                ? provideOptions.call(publicThis)
                : provideOptions;
            Reflect.ownKeys(provides).forEach(key => {
                provide(key, provides[key]);
            });
        });
    }
    // asset options.
    // To reduce memory usage, only components with mixins or extends will have
    // resolved asset registry attached to instance.
    if (asMixin) {
        if (components) {
            Object(shared_esm_bundler["h" /* extend */])(instance.components ||
                (instance.components = Object(shared_esm_bundler["h" /* extend */])({}, instance.type.components)), components);
        }
        if (directives) {
            Object(shared_esm_bundler["h" /* extend */])(instance.directives ||
                (instance.directives = Object(shared_esm_bundler["h" /* extend */])({}, instance.type.directives)), directives);
        }
    }
    // lifecycle options
    if (!asMixin) {
        callSyncHook('created', "c" /* CREATED */, options, instance, globalMixins);
    }
    if (beforeMount) {
        onBeforeMount(beforeMount.bind(publicThis));
    }
    if (mounted) {
        onMounted(mounted.bind(publicThis));
    }
    if (beforeUpdate) {
        onBeforeUpdate(beforeUpdate.bind(publicThis));
    }
    if (updated) {
        onUpdated(updated.bind(publicThis));
    }
    if (activated) {
        onActivated(activated.bind(publicThis));
    }
    if (deactivated) {
        onDeactivated(deactivated.bind(publicThis));
    }
    if (errorCaptured) {
        onErrorCaptured(errorCaptured.bind(publicThis));
    }
    if (renderTracked) {
        onRenderTracked(renderTracked.bind(publicThis));
    }
    if (renderTriggered) {
        onRenderTriggered(renderTriggered.bind(publicThis));
    }
    if (false) {}
    if (beforeUnmount) {
        onBeforeUnmount(beforeUnmount.bind(publicThis));
    }
    if (false) {}
    if (unmounted) {
        onUnmounted(unmounted.bind(publicThis));
    }
    if (Object(shared_esm_bundler["n" /* isArray */])(expose)) {
        if (!asMixin) {
            if (expose.length) {
                const exposed = instance.exposed || (instance.exposed = proxyRefs({}));
                expose.forEach(key => {
                    exposed[key] = toRef(publicThis, key);
                });
            }
            else if (!instance.exposed) {
                instance.exposed = shared_esm_bundler["b" /* EMPTY_OBJ */];
            }
        }
        else if ((false)) {}
    }
}
function callSyncHook(name, type, options, instance, globalMixins) {
    callHookFromMixins(name, type, globalMixins, instance);
    const { extends: base, mixins } = options;
    if (base) {
        callHookFromExtends(name, type, base, instance);
    }
    if (mixins) {
        callHookFromMixins(name, type, mixins, instance);
    }
    const selfHook = options[name];
    if (selfHook) {
        callWithAsyncErrorHandling(selfHook.bind(instance.proxy), instance, type);
    }
}
function callHookFromExtends(name, type, base, instance) {
    if (base.extends) {
        callHookFromExtends(name, type, base.extends, instance);
    }
    const baseHook = base[name];
    if (baseHook) {
        callWithAsyncErrorHandling(baseHook.bind(instance.proxy), instance, type);
    }
}
function callHookFromMixins(name, type, mixins, instance) {
    for (let i = 0; i < mixins.length; i++) {
        const chainedMixins = mixins[i].mixins;
        if (chainedMixins) {
            callHookFromMixins(name, type, chainedMixins, instance);
        }
        const fn = mixins[i][name];
        if (fn) {
            callWithAsyncErrorHandling(fn.bind(instance.proxy), instance, type);
        }
    }
}
function applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide) {
    for (let i = 0; i < mixins.length; i++) {
        applyOptions(instance, mixins[i], deferredData, deferredWatch, deferredProvide, true);
    }
}
function resolveData(instance, dataFn, publicThis) {
    if (false) {}
    const data = dataFn.call(publicThis, publicThis);
    if (false) {}
    if (!Object(shared_esm_bundler["u" /* isObject */])(data)) {
        ( false) && false;
    }
    else if (instance.data === shared_esm_bundler["b" /* EMPTY_OBJ */]) {
        instance.data = reactive(data);
    }
    else {
        // existing data: this is a mixin or extends.
        Object(shared_esm_bundler["h" /* extend */])(instance.data, data);
    }
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if (Object(shared_esm_bundler["B" /* isString */])(raw)) {
        const handler = ctx[raw];
        if (Object(shared_esm_bundler["o" /* isFunction */])(handler)) {
            watch(getter, handler);
        }
        else if ((false)) {}
    }
    else if (Object(shared_esm_bundler["o" /* isFunction */])(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if (Object(shared_esm_bundler["u" /* isObject */])(raw)) {
        if (Object(shared_esm_bundler["n" /* isArray */])(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = Object(shared_esm_bundler["o" /* isFunction */])(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if (Object(shared_esm_bundler["o" /* isFunction */])(handler)) {
                watch(getter, handler, raw);
            }
            else if ((false)) {}
        }
    }
    else if ((false)) {}
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function resolveMergedOptions(instance) {
    const raw = instance.type;
    const { __merged, mixins, extends: extendsOptions } = raw;
    if (__merged)
        return __merged;
    const globalMixins = instance.appContext.mixins;
    if (!globalMixins.length && !mixins && !extendsOptions)
        return raw;
    const options = {};
    globalMixins.forEach(m => mergeOptions(options, m, instance));
    mergeOptions(options, raw, instance);
    return (raw.__merged = options);
}
function mergeOptions(to, from, instance) {
    const strats = instance.appContext.config.optionMergeStrategies;
    const { mixins, extends: extendsOptions } = from;
    extendsOptions && mergeOptions(to, extendsOptions, instance);
    mixins &&
        mixins.forEach((m) => mergeOptions(to, m, instance));
    for (const key in from) {
        if (strats && Object(shared_esm_bundler["k" /* hasOwn */])(strats, key)) {
            to[key] = strats[key](to[key], from[key], instance.proxy, key);
        }
        else {
            to[key] = from[key];
        }
    }
}

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const getPublicInstance = (i) => {
    if (!i)
        return null;
    if (isStatefulComponent(i))
        return i.exposed ? i.exposed : i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = Object(shared_esm_bundler["h" /* extend */])(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (( false) ? undefined : i.props),
    $attrs: i => (( false) ? undefined : i.attrs),
    $slots: i => (( false) ? undefined : i.slots),
    $refs: i => (( false) ? undefined : i.refs),
    $parent: i => getPublicInstance(i.parent),
    $root: i => getPublicInstance(i.root),
    $emit: i => i.emit,
    $options: i => (__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type),
    $forceUpdate: i => () => queueJob(i.update),
    $nextTick: i => nextTick.bind(i.proxy),
    $watch: i => (__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : shared_esm_bundler["d" /* NOOP */])
});
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // let @vue/reactivity know it should never observe Vue public instances.
        if (key === "__v_skip" /* SKIP */) {
            return true;
        }
        // for internal formatters to know that this is a Vue instance
        if (false) {}
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 0 /* SETUP */:
                        return setupState[key];
                    case 1 /* DATA */:
                        return data[key];
                    case 3 /* CONTEXT */:
                        return ctx[key];
                    case 2 /* PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(setupState, key)) {
                accessCache[key] = 0 /* SETUP */;
                return setupState[key];
            }
            else if (data !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(data, key)) {
                accessCache[key] = 1 /* DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                Object(shared_esm_bundler["k" /* hasOwn */])(normalizedProps, key)) {
                accessCache[key] = 2 /* PROPS */;
                return props[key];
            }
            else if (ctx !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(ctx, key)) {
                accessCache[key] = 3 /* CONTEXT */;
                return ctx[key];
            }
            else if (!__VUE_OPTIONS_API__ || !isInBeforeCreate) {
                accessCache[key] = 4 /* OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                track(instance, "get" /* GET */, key);
                ( false) && false;
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 3 /* CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            Object(shared_esm_bundler["k" /* hasOwn */])(globalProperties, key))) {
            return globalProperties[key];
        }
        else if (false) {}
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(setupState, key)) {
            setupState[key] = value;
        }
        else if (data !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(data, key)) {
            data[key] = value;
        }
        else if (Object(shared_esm_bundler["k" /* hasOwn */])(instance.props, key)) {
            ( false) &&
                false;
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            ( false) &&
                false;
            return false;
        }
        else {
            if (false) {}
            else {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (accessCache[key] !== undefined ||
            (data !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(data, key)) ||
            (setupState !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(setupState, key)) ||
            ((normalizedProps = propsOptions[0]) && Object(shared_esm_bundler["k" /* hasOwn */])(normalizedProps, key)) ||
            Object(shared_esm_bundler["k" /* hasOwn */])(ctx, key) ||
            Object(shared_esm_bundler["k" /* hasOwn */])(publicPropertiesMap, key) ||
            Object(shared_esm_bundler["k" /* hasOwn */])(appContext.config.globalProperties, key));
    }
};
if (false) {}
const RuntimeCompiledPublicInstanceProxyHandlers = Object(shared_esm_bundler["h" /* extend */])({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !Object(shared_esm_bundler["p" /* isGloballyWhitelisted */])(key);
        if (false) {}
        return has;
    }
});
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: () => instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: shared_esm_bundler["d" /* NOOP */]
        });
    });
    // expose global properties
    const { globalProperties } = instance.appContext.config;
    Object.keys(globalProperties).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => globalProperties[key],
            set: shared_esm_bundler["d" /* NOOP */]
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
        Object.keys(propsOptions).forEach(key => {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => instance.props[key],
                set: shared_esm_bundler["d" /* NOOP */]
            });
        });
    }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach(key => {
        if (key[0] === '$' || key[0] === '_') {
            warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                `which are reserved prefixes for Vue internals.`);
            return;
        }
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => setupState[key],
            set: shared_esm_bundler["d" /* NOOP */]
        });
    });
}

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        update: null,
        render: null,
        proxy: null,
        exposed: null,
        withProxy: null,
        effects: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resovled assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // state
        ctx: shared_esm_bundler["b" /* EMPTY_OBJ */],
        data: shared_esm_bundler["b" /* EMPTY_OBJ */],
        props: shared_esm_bundler["b" /* EMPTY_OBJ */],
        attrs: shared_esm_bundler["b" /* EMPTY_OBJ */],
        slots: shared_esm_bundler["b" /* EMPTY_OBJ */],
        refs: shared_esm_bundler["b" /* EMPTY_OBJ */],
        setupState: shared_esm_bundler["b" /* EMPTY_OBJ */],
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null
    };
    if ((false)) {}
    else {
        instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = runtime_core_esm_bundler_emit.bind(null, instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
};
const isBuiltInTag = /*#__PURE__*/ Object(shared_esm_bundler["F" /* makeMap */])('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || shared_esm_bundler["c" /* NO */];
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
        warn('Do not use built-in or reserved HTML elements as component id: ' + name);
    }
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if ((false)) {}
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    if ((false)) {}
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        currentInstance = instance;
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [( false) ? undefined : instance.props, setupContext]);
        resetTracking();
        currentInstance = null;
        if (Object(shared_esm_bundler["w" /* isPromise */])(setupResult)) {
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult.then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
            }
        }
        else {
            handleSetupResult(instance, setupResult);
        }
    }
    else {
        finishComponentSetup(instance);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (Object(shared_esm_bundler["o" /* isFunction */])(setupResult)) {
        // setup returned an inline render function
        {
            instance.render = setupResult;
        }
    }
    else if (Object(shared_esm_bundler["u" /* isObject */])(setupResult)) {
        if (false) {}
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = proxyRefs(setupResult);
        if ((false)) {}
    }
    else if (false) {}
    finishComponentSetup(instance);
}
let compile;
// dev only
const isRuntimeOnly = () => !compile;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
function registerRuntimeCompiler(_compile) {
    compile = _compile;
}
function finishComponentSetup(instance, isSSR) {
    const Component = instance.type;
    // template / render function normalization
    if (!instance.render) {
        // could be set from setup()
        if (compile && Component.template && !Component.render) {
            if ((false)) {}
            Component.render = compile(Component.template, {
                isCustomElement: instance.appContext.config.isCustomElement,
                delimiters: Component.delimiters
            });
            if ((false)) {}
        }
        instance.render = (Component.render || shared_esm_bundler["d" /* NOOP */]);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (instance.render._rc) {
            instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__) {
        currentInstance = instance;
        pauseTracking();
        applyOptions(instance, Component);
        resetTracking();
        currentInstance = null;
    }
    // warn missing template/render
    if (false) {}
}
const attrHandlers = {
    get: (target, key) => {
        if ((false)) {}
        return target[key];
    },
    set: () => {
        warn(`setupContext.attrs is readonly.`);
        return false;
    },
    deleteProperty: () => {
        warn(`setupContext.attrs is readonly.`);
        return false;
    }
};
function createSetupContext(instance) {
    const expose = exposed => {
        if (false) {}
        instance.exposed = proxyRefs(exposed);
    };
    if ((false)) {}
    else {
        return {
            attrs: instance.attrs,
            slots: instance.slots,
            emit: instance.emit,
            expose
        };
    }
}
// record effects created during a component's setup() so that they can be
// stopped when the component unmounts
function recordInstanceBoundEffect(effect, instance = currentInstance) {
    if (instance) {
        (instance.effects || (instance.effects = [])).push(effect);
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
function getComponentName(Component) {
    return Object(shared_esm_bundler["o" /* isFunction */])(Component)
        ? Component.displayName || Component.name
        : Component.name;
}
/* istanbul ignore next */
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry) => {
            for (const key in registry) {
                if (registry[key] === Component) {
                    return key;
                }
            }
        };
        name =
            inferFromRegistry(instance.components ||
                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return Object(shared_esm_bundler["o" /* isFunction */])(value) && '__vccOpts' in value;
}

function runtime_core_esm_bundler_computed(getterOrOptions) {
    const c = reactivity_esm_bundler_computed(getterOrOptions);
    recordInstanceBoundEffect(c.effect);
    return c;
}

// implementation
function defineProps() {
    if ((false)) {}
    return null;
}
// implementation
function defineEmit() {
    if ((false)) {}
    return null;
}
function useContext() {
    const i = getCurrentInstance();
    if (false) {}
    return i.setupContext || (i.setupContext = createSetupContext(i));
}

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (Object(shared_esm_bundler["u" /* isObject */])(propsOrChildren) && !Object(shared_esm_bundler["n" /* isArray */])(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

const ssrContextKey = Symbol(( false) ? undefined : ``);
const useSSRContext = () => {
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) {
            warn(`Server rendering context not provided. Make sure to only call ` +
                `useSSRContext() conditionally in the server build.`);
        }
        return ctx;
    }
};

function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */
    if (true) {
        return;
    }
    const vueStyle = { style: 'color:#3ba776' };
    const numberStyle = { style: 'color:#0b1bc9' };
    const stringStyle = { style: 'color:#b62e24' };
    const keywordStyle = { style: 'color:#9d288c' };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header(obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!Object(shared_esm_bundler["u" /* isObject */])(obj)) {
                return null;
            }
            if (obj.__isVue) {
                return ['div', vueStyle, `VueInstance`];
            }
            else if (isRef(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, genRefFlag(obj)],
                    '<',
                    formatValue(obj.value),
                    `>`
                ];
            }
            else if (isReactive(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, 'Reactive'],
                    '<',
                    formatValue(obj),
                    `>${reactivity_esm_bundler_isReadonly(obj) ? ` (readonly)` : ``}`
                ];
            }
            else if (reactivity_esm_bundler_isReadonly(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, 'Readonly'],
                    '<',
                    formatValue(obj),
                    '>'
                ];
            }
            return null;
        },
        hasBody(obj) {
            return obj && obj.__isVue;
        },
        body(obj) {
            if (obj && obj.__isVue) {
                return [
                    'div',
                    {},
                    ...formatInstance(obj.$)
                ];
            }
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock('props', toRaw(instance.props)));
        }
        if (instance.setupState !== shared_esm_bundler["b" /* EMPTY_OBJ */]) {
            blocks.push(createInstanceBlock('setup', instance.setupState));
        }
        if (instance.data !== shared_esm_bundler["b" /* EMPTY_OBJ */]) {
            blocks.push(createInstanceBlock('data', toRaw(instance.data)));
        }
        const computed = extractKeys(instance, 'computed');
        if (computed) {
            blocks.push(createInstanceBlock('computed', computed));
        }
        const injected = extractKeys(instance, 'inject');
        if (injected) {
            blocks.push(createInstanceBlock('injected', injected));
        }
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            ['object', { object: instance }]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = Object(shared_esm_bundler["h" /* extend */])({}, target);
        if (!Object.keys(target).length) {
            return ['span', {}];
        }
        return [
            'div',
            { style: 'line-height:1.25em;margin-bottom:0.6em' },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map(key => {
                    return [
                        'div',
                        {},
                        ['span', keywordStyle, key + ': '],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') {
            return ['span', numberStyle, v];
        }
        else if (typeof v === 'string') {
            return ['span', stringStyle, JSON.stringify(v)];
        }
        else if (typeof v === 'boolean') {
            return ['span', keywordStyle, v];
        }
        else if (Object(shared_esm_bundler["u" /* isObject */])(v)) {
            return ['object', { object: asRaw ? toRaw(v) : v }];
        }
        else {
            return ['span', stringStyle, String(v)];
        }
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (Object(shared_esm_bundler["o" /* isFunction */])(Comp)) {
            return;
        }
        const extracted = {};
        for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
                extracted[key] = instance.ctx[key];
            }
        }
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((Object(shared_esm_bundler["n" /* isArray */])(opts) && opts.includes(key)) ||
            (Object(shared_esm_bundler["u" /* isObject */])(opts) && key in opts)) {
            return true;
        }
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
        }
        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
            return true;
        }
    }
    function genRefFlag(v) {
        if (v._shallow) {
            return `ShallowRef`;
        }
        if (v.effect) {
            return `ComputedRef`;
        }
        return `Ref`;
    }
    if (window.devtoolsFormatters) {
        window.devtoolsFormatters.push(formatter);
    }
    else {
        window.devtoolsFormatters = [formatter];
    }
}

/**
 * Actual implementation
 */
function renderList(source, renderItem) {
    let ret;
    if (Object(shared_esm_bundler["n" /* isArray */])(source) || Object(shared_esm_bundler["B" /* isString */])(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i);
        }
    }
    else if (typeof source === 'number') {
        if (false) {}
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i);
        }
    }
    else if (Object(shared_esm_bundler["u" /* isObject */])(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, renderItem);
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i);
            }
        }
    }
    else {
        ret = [];
    }
    return ret;
}

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
function toHandlers(obj) {
    const ret = {};
    if (false) {}
    for (const key in obj) {
        ret[Object(shared_esm_bundler["J" /* toHandlerKey */])(key)] = obj[key];
    }
    return ret;
}

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if (Object(shared_esm_bundler["n" /* isArray */])(slot)) {
            for (let j = 0; j < slot.length; j++) {
                slots[slot[j].name] = slot[j].fn;
            }
        }
        else if (slot) {
            // conditional single slot generated by <template v-if="..." #foo>
            slots[slot.name] = slot.fn;
        }
    }
    return slots;
}

// Core API ------------------------------------------------------------------
const version = "3.0.7";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */
const ssrUtils = (null);



// CONCATENATED MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
let tempContainer;
let tempSVGContainer;
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is) => isSVG
        ? doc.createElementNS(svgNS, tag)
        : doc.createElement(tag, is ? { is } : undefined),
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        return el.cloneNode(true);
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG) {
        const temp = isSVG
            ? tempSVGContainer ||
                (tempSVGContainer = doc.createElementNS(svgNS, 'svg'))
            : tempContainer || (tempContainer = doc.createElement('div'));
        temp.innerHTML = content;
        const first = temp.firstChild;
        let node = first;
        let last = node;
        while (node) {
            last = node;
            nodeOps.insert(node, parent, anchor);
            node = temp.firstChild;
        }
        return [first, last];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    if (value == null) {
        value = '';
    }
    if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        // directly setting className should be faster than setAttribute in theory
        // if this is an element during a transition, take the temporary transition
        // classes into account.
        const transitionClasses = el._vtc;
        if (transitionClasses) {
            value = (value
                ? [value, ...transitionClasses]
                : [...transitionClasses]).join(' ');
        }
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
        el.removeAttribute('style');
    }
    else if (Object(shared_esm_bundler["B" /* isString */])(next)) {
        if (prev !== next) {
            const current = style.display;
            style.cssText = next;
            // indicates that the `display` of the element is controlled by `v-show`,
            // so we always keep the current `display` value regardless of the `style` value,
            // thus handing over control to `v-show`.
            if ('_vod' in el) {
                style.display = current;
            }
        }
    }
    else {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !Object(shared_esm_bundler["B" /* isString */])(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (Object(shared_esm_bundler["n" /* isArray */])(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty(Object(shared_esm_bundler["l" /* hyphenate */])(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = Object(shared_esm_bundler["e" /* camelize */])(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = Object(shared_esm_bundler["f" /* capitalize */])(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = Object(shared_esm_bundler["A" /* isSpecialBooleanAttr */])(key);
        if (value == null || (isBoolean && value === false)) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (value === '' && type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = true;
            return;
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            el[key] = 0;
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    }
    catch (e) {
        if ((false)) {}
    }
}

// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if (typeof document !== 'undefined' &&
    _getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = () => performance.now();
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = Promise.resolve();
const runtime_dom_esm_bundler_reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(runtime_dom_esm_bundler_reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [Object(shared_esm_bundler["l" /* hyphenate */])(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (timeStamp >= invoker.attached - 1) {
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (Object(shared_esm_bundler["n" /* isArray */])(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const forcePatchProp = (_, key) => key === 'value';
const runtime_dom_esm_bundler_patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    switch (key) {
        // special
        case 'class':
            patchClass(el, nextValue, isSVG);
            break;
        case 'style':
            patchStyle(el, prevValue, nextValue);
            break;
        default:
            if (Object(shared_esm_bundler["v" /* isOn */])(key)) {
                // ignore v-model listeners
                if (!Object(shared_esm_bundler["t" /* isModelListener */])(key)) {
                    patchEvent(el, key, prevValue, nextValue, parentComponent);
                }
            }
            else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
                patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
            }
            else {
                // special case for <input v-model type="checkbox"> with
                // :true-value & :false-value
                // store value as dom properties since non-string values will be
                // stringified.
                if (key === 'true-value') {
                    el._trueValue = nextValue;
                }
                else if (key === 'false-value') {
                    el._falseValue = nextValue;
                }
                patchAttr(el, key, nextValue, isSVG);
            }
            break;
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML
        if (key === 'innerHTML') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && Object(shared_esm_bundler["o" /* isFunction */])(value)) {
            return true;
        }
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') {
        return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && Object(shared_esm_bundler["B" /* isString */])(value)) {
        return false;
    }
    return key in el;
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = getCurrentInstance();
        if (!instance) {
            ( false) && false;
            return shared_esm_bundler["b" /* EMPTY_OBJ */];
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( false) && false;
            return shared_esm_bundler["b" /* EMPTY_OBJ */];
        }
        const mod = modules[name];
        if (!mod) {
            ( false) &&
                false;
            return shared_esm_bundler["b" /* EMPTY_OBJ */];
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = getCurrentInstance();
    /* istanbul ignore next */
    if (!instance) {
        ( false) &&
            false;
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    onMounted(() => watchEffect(setVars, { flush: 'post' }));
    onUpdated(setVars);
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        const style = vnode.el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
    else if (vnode.type === Fragment) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props = /*#__PURE__*/ Object(shared_esm_bundler["h" /* extend */])({}, BaseTransition.props, DOMTransitionPropsValidators));
function resolveTransitionProps(rawProps) {
    let { name = 'v', type, css = true, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (!css) {
        return baseProps;
    }
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            hook && hook(el, resolve);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!(hook && hook.length > 1)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return Object(shared_esm_bundler["h" /* extend */])(baseProps, {
        onBeforeEnter(el) {
            onBeforeEnter && onBeforeEnter(el);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
            onBeforeAppear && onBeforeAppear(el);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!(onLeave && onLeave.length > 1)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            onLeave && onLeave(el, resolve);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            onEnterCancelled && onEnterCancelled(el);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            onAppearCancelled && onAppearCancelled(el);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            onLeaveCancelled && onLeaveCancelled(el);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if (Object(shared_esm_bundler["u" /* isObject */])(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = Object(shared_esm_bundler["K" /* toNumber */])(val);
    if ((false))
        {}
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        warn(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        warn(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ Object(shared_esm_bundler["h" /* extend */])({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            const tag = rawProps.tag || Fragment;
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                }
                else if ((false)) {}
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return createVNode(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1
        ? root
        : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'];
    return Object(shared_esm_bundler["n" /* isArray */])(fn) ? value => Object(shared_esm_bundler["m" /* invokeArrayFns */])(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        runtime_dom_esm_bundler_trigger(target, 'input');
    }
}
function runtime_dom_esm_bundler_trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || el.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            else if (castToNumber) {
                domValue = Object(shared_esm_bundler["K" /* toNumber */])(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el) {
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && Object(shared_esm_bundler["K" /* toNumber */])(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (Object(shared_esm_bundler["n" /* isArray */])(modelValue)) {
                const index = Object(shared_esm_bundler["E" /* looseIndexOf */])(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if (Object(shared_esm_bundler["z" /* isSet */])(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (Object(shared_esm_bundler["n" /* isArray */])(value)) {
        el.checked = Object(shared_esm_bundler["E" /* looseIndexOf */])(value, vnode.props.value) > -1;
    }
    else if (Object(shared_esm_bundler["z" /* isSet */])(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = Object(shared_esm_bundler["D" /* looseEqual */])(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = Object(shared_esm_bundler["D" /* looseEqual */])(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = Object(shared_esm_bundler["D" /* looseEqual */])(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = Object(shared_esm_bundler["z" /* isSet */])(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? Object(shared_esm_bundler["K" /* toNumber */])(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !Object(shared_esm_bundler["n" /* isArray */])(value) && !Object(shared_esm_bundler["z" /* isSet */])(value)) {
        ( false) &&
            false;
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (Object(shared_esm_bundler["n" /* isArray */])(value)) {
                option.selected = Object(shared_esm_bundler["E" /* looseIndexOf */])(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if (Object(shared_esm_bundler["D" /* looseEqual */])(getValue(option), value)) {
                el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch (el.tagName) {
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch (vnode.props && vnode.props.type) {
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event))
            return;
        const eventKey = Object(shared_esm_bundler["l" /* hyphenate */])(event.key);
        if (
        // None of the provided key modifiers match the current event key
        !modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return;
        }
        return fn(event);
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}

const rendererOptions = Object(shared_esm_bundler["h" /* extend */])({ patchProp: runtime_dom_esm_bundler_patchProp, forcePatchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const runtime_dom_esm_bundler_render = ((...args) => {
    ensureRenderer().render(...args);
});
const runtime_dom_esm_bundler_hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const runtime_dom_esm_bundler_createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!Object(shared_esm_bundler["o" /* isFunction */])(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => Object(shared_esm_bundler["q" /* isHTMLTag */])(tag) || Object(shared_esm_bundler["y" /* isSVGTag */])(tag),
        writable: false
    });
}
// dev only
function injectCustomElementCheck(app) {
    if (isRuntimeOnly()) {
        const value = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get() {
                return value;
            },
            set() {
                warn(`The \`isCustomElement\` config option is only respected when using the runtime compiler.` +
                    `If you are using the runtime-only build, \`isCustomElement\` must be passed to \`@vue/compiler-dom\` in the build setup instead` +
                    `- for example, via the \`compilerOptions\` option in vue-loader: https://vue-loader.vuejs.org/options.html#compileroptions.`);
            }
        });
    }
}
function normalizeContainer(container) {
    if (Object(shared_esm_bundler["B" /* isString */])(container)) {
        const res = document.querySelector(container);
        if (false) {}
        return res;
    }
    if (false) {}
    return container;
}



// CONCATENATED MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js



function initDev() {
    {
        initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((false)) {}
const vue_runtime_esm_bundler_compile = () => {
    if ((false)) {}
};



// CONCATENATED MODULE: ./src/vue-froala.js



function vue_froala_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vue_froala_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vue_froala_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var vue_froala = __webpack_exports__["default"] = (function (App) {
  var Options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  console.log(App);
  var froalaEditorFunctionality = {
    props: ['tag', 'modelValue', 'config', 'onManualControllerReady'],
    watch: {
      modelValue: function modelValue() {
        this.model = this.modelValue;
        this.updateValue();
      }
    },
    render: function render() {
      return h(this.currentTag, [this.$slots["default"]]);
    },
    created: function created() {
      this.currentTag = this.tag || this.currentTag;
      this.model = this.modelValue;
    },
    // After first time render.
    mounted: function mounted() {
      if (this.SPECIAL_TAGS.indexOf(this.currentTag) != -1) {
        this.hasSpecialTag = true;
      }

      if (this.onManualControllerReady) {
        this.generateManualController();
      } else {
        this.createEditor();
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.destroyEditor();
    },
    data: function data() {
      return {
        initEvents: [],
        // Tag on which the editor is initialized.
        currentTag: 'div',
        // Editor element.
        _editor: null,
        // Current config.
        currentConfig: null,
        // Editor options config
        defaultConfig: {
          immediateVueModelUpdate: false,
          vueIgnoreAttrs: null
        },
        editorInitialized: false,
        SPECIAL_TAGS: ['img', 'button', 'input', 'a'],
        INNER_HTML_ATTR: 'innerHTML',
        hasSpecialTag: false,
        model: null,
        oldModel: null
      };
    },
    methods: {
      updateValue: function updateValue() {
        if (JSON.stringify(this.oldModel) == JSON.stringify(this.model)) {
          return;
        }

        this.setContent();
      },
      createEditor: function createEditor() {
        if (this.editorInitialized) {
          return;
        }

        this.currentConfig = this.clone(this.config || this.defaultConfig);
        this.currentConfig = _objectSpread({}, this.currentConfig);
        this.setContent(true); // Bind editor events.

        this.registerEvents();
        this.initListeners();
        this._editor = new froala_editor_min_default.a(this.$el, this.currentConfig);
        this.editorInitialized = true;
      },
      // Return clone object 
      clone: function clone(item) {
        var me = this;

        if (!item) {
          return item;
        } // null, undefined values check


        var types = [Number, String, Boolean],
            result; // normalizing primitives if someone did new String('aaa'), or new Number('444');

        types.forEach(function (type) {
          if (item instanceof type) {
            result = type(item);
          }
        });

        if (typeof result == "undefined") {
          if (Object.prototype.toString.call(item) === "[object Array]") {
            result = [];
            item.forEach(function (child, index, array) {
              result[index] = me.clone(child);
            });
          } else if (typeof_default()(item) == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
              result = item.cloneNode(true);
            } else if (!item.prototype) {
              // check that this is a literal
              if (item instanceof Date) {
                result = new Date(item);
              } else {
                // it is an object literal
                result = {};

                for (var i in item) {
                  result[i] = me.clone(item[i]);
                }
              }
            } else {
              if (false) {} else {
                result = item;
              }
            }
          } else {
            result = item;
          }
        }

        return result;
      },
      setContent: function setContent(firstTime) {
        if (!this.editorInitialized && !firstTime) {
          return;
        }

        if (this.model || this.model == '') {
          this.oldModel = this.model;

          if (this.hasSpecialTag) {
            this.setSpecialTagContent();
          } else {
            this.setNormalTagContent(firstTime);
          }
        }
      },
      setNormalTagContent: function setNormalTagContent(firstTime) {
        var self = this;

        function htmlSet() {
          self._editor.html.set(self.model || ''); //This will reset the undo stack everytime the model changes externally. Can we fix this?


          self._editor.undo.saveStep();

          self._editor.undo.reset();
        }

        if (firstTime) {
          this.registerEvent('initialized', function () {
            htmlSet();
          });
        } else {
          htmlSet();
        }
      },
      setSpecialTagContent: function setSpecialTagContent() {
        var tags = this.model; // add tags on element

        if (tags) {
          for (var attr in tags) {
            if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) {
              this.$el.setAttribute(attr, tags[attr]);
            }
          }

          if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
            this.$el.innerHTML = tags[this.INNER_HTML_ATTR];
          }
        }
      },
      destroyEditor: function destroyEditor() {
        if (this._editor) {
          this._editor.destroy();

          this.editorInitialized = false;
          this._editor = null;
        }
      },
      getEditor: function getEditor() {
        return this._editor;
      },
      generateManualController: function generateManualController() {
        var controls = {
          initialize: this.createEditor,
          destroy: this.destroyEditor,
          getEditor: this.getEditor
        };
        this.onManualControllerReady(controls);
      },
      updateModel: function updateModel() {
        var modelContent = '';

        if (this.hasSpecialTag) {
          var attributeNodes = this.$el[0].attributes;
          var attrs = {};

          for (var i = 0; i < attributeNodes.length; i++) {
            var attrName = attributeNodes[i].name;

            if (this.currentConfig.vueIgnoreAttrs && this.currentConfig.vueIgnoreAttrs.indexOf(attrName) != -1) {
              continue;
            }

            attrs[attrName] = attributeNodes[i].value;
          }

          if (this.$el[0].innerHTML) {
            attrs[this.INNER_HTML_ATTR] = this.$el[0].innerHTML;
          }

          modelContent = attrs;
        } else {
          var returnedHtml = this._editor.html.get();

          if (typeof returnedHtml === 'string') {
            modelContent = returnedHtml;
          }
        }

        this.oldModel = modelContent;
        this.$emit('update:modelValue', modelContent);
      },
      initListeners: function initListeners() {
        var self = this;
        this.registerEvent('initialized', function () {
          if (self._editor.events) {
            // bind contentChange and keyup event to froalaModel
            self._editor.events.on('contentChanged', function () {
              self.updateModel();
            });

            if (self.currentConfig.immediateVueModelUpdate) {
              self._editor.events.on('keyup', function () {
                self.updateModel();
              });
            }
          }
        });
      },
      // register event on editor element
      registerEvent: function registerEvent(eventName, callback) {
        if (!eventName || !callback) {
          return;
        } // Initialized event.


        if (eventName == 'initialized') {
          this.initEvents.push(callback);
        } else {
          if (!this.currentConfig.events) {
            this.currentConfig.events = {};
          }

          this.currentConfig.events[eventName] = callback;
        }
      },
      registerEvents: function registerEvents() {
        // Handle initialized on its own.
        this.registerInitialized(); // Get current events.

        var events = this.currentConfig.events;

        if (!events) {
          return;
        }

        for (var event in events) {
          if (events.hasOwnProperty(event) && event != 'initialized') {
            this.registerEvent(event, events[event]);
          }
        }
      },
      registerInitialized: function registerInitialized() {
        var _this = this;

        // Bind initialized.
        if (!this.currentConfig.events) {
          this.currentConfig.events = {};
        } // Set original initialized event.


        if (this.currentConfig.events.initialized) {
          this.registerEvent('initialized', this.currentConfig.events.initialized);
        } // Bind initialized event.


        this.currentConfig.events.initialized = function () {
          for (var i = 0; i < _this.initEvents.length; i++) {
            _this.initEvents[i].call(_this._editor);
          }
        };
      }
    }
  };
  App.component('Froala', froalaEditorFunctionality);
  var froalaViewFunctionality = {
    props: ['tag', 'value'],
    watch: {
      value: function value(newValue) {
        this._element.innerHTML = newValue;
      }
    },
    created: function created() {
      this.currentTag = this.tag || this.currentTag;
    },
    render: function render() {
      return h(this.currentTag, {
        "class": 'fr-view'
      });
    },
    // After first time render.
    mounted: function mounted() {
      this._element = this.$el;

      if (this.modelValue) {
        this._element.innerHTML = this.modelValue;
      }
    },
    data: function data() {
      return {
        currentTag: 'div',
        _element: null
      };
    }
  };
  App.component('FroalaView', froalaViewFunctionality);
});

/***/ })
/******/ ]);
});