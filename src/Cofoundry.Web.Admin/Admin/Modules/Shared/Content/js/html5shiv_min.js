﻿(function (n, t) { function p(n, t) { var i = n.createElement("p"), r = n.getElementsByTagName("head")[0] || n.documentElement; return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild) } function c() { var n = r.elements; return typeof n == "string" ? n.split(" ") : n } function o(n) { var t = h[n[s]]; return t || (t = {}, e++ , n[s] = e, h[e] = t), t } function l(n, r, u) { if (r || (r = t), i) return r.createElement(n); u || (u = o(r)); var f; return f = u.cache[n] ? u.cache[n].cloneNode() : y.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), f.canHaveChildren && !v.test(n) ? u.frag.appendChild(f) : f } function w(n, r) { if (n || (n = t), i) return n.createDocumentFragment(); r = r || o(n); for (var f = r.frag.cloneNode(), u = 0, e = c(), s = e.length; u < s; u++)f.createElement(e[u]); return f } function b(n, t) { t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag()); n.createElement = function (i) { return r.shivMethods ? l(i, n, t) : t.createElem(i) }; n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function (n) { return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")' }) + ");return n}")(r, t.frag) } function a(n) { n || (n = t); var u = o(n); return !r.shivCSS || f || u.hasCSS || (u.hasCSS = !!p(n, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), i || b(n, u), n } var u = n.html5 || {}, v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, y = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, s = "_html5shiv", e = 0, h = {}, i, r; (function () { try { var n = t.createElement("a"); n.innerHTML = "<xyz><\/xyz>"; f = "hidden" in n; i = n.childNodes.length == 1 || function () { t.createElement("a"); var n = t.createDocumentFragment(); return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined" }() } catch (r) { f = !0; i = !0 } })(); r = { elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: "3.6.2", shivCSS: u.shivCSS !== !1, supportsUnknownElements: i, shivMethods: u.shivMethods !== !1, type: "default", shivDocument: a, createElement: l, createDocumentFragment: w }; n.html5 = r; a(t) })(this, document)