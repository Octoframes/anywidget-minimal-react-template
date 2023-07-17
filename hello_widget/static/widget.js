function jc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var as = { exports: {} }, ml = {}, cs = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or = Symbol.for("react.element"), Uc = Symbol.for("react.portal"), $c = Symbol.for("react.fragment"), Hc = Symbol.for("react.strict_mode"), Qc = Symbol.for("react.profiler"), Vc = Symbol.for("react.provider"), Wc = Symbol.for("react.context"), Kc = Symbol.for("react.forward_ref"), Yc = Symbol.for("react.suspense"), Xc = Symbol.for("react.memo"), Gc = Symbol.for("react.lazy"), bi = Symbol.iterator;
function Zc(e) {
  return e === null || typeof e != "object" ? null : (e = bi && e[bi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ds = Object.assign, ps = {};
function mn(e, t, n) {
  this.props = e, this.context = t, this.refs = ps, this.updater = n || fs;
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hs() {
}
hs.prototype = mn.prototype;
function ri(e, t, n) {
  this.props = e, this.context = t, this.refs = ps, this.updater = n || fs;
}
var li = ri.prototype = new hs();
li.constructor = ri;
ds(li, mn.prototype);
li.isPureReactComponent = !0;
var eu = Array.isArray, vs = Object.prototype.hasOwnProperty, oi = { current: null }, ms = { key: !0, ref: !0, __self: !0, __source: !0 };
function gs(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      vs.call(t, r) && !ms.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: or, type: e, key: o, ref: i, props: l, _owner: oi.current };
}
function Jc(e, t) {
  return { $$typeof: or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ii(e) {
  return typeof e == "object" && e !== null && e.$$typeof === or;
}
function qc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var tu = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? qc("" + e.key) : t.toString(36);
}
function Or(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case or:
          case Uc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Al(i, 0) : r, eu(l) ? (n = "", e != null && (n = e.replace(tu, "$&/") + "/"), Or(l, t, n, "", function(c) {
      return c;
    })) : l != null && (ii(l) && (l = Jc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(tu, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", eu(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Al(o, u);
      i += Or(o, t, n, s, l);
    }
  else if (s = Zc(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Al(o, u++), i += Or(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function hr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Or(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function bc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var se = { current: null }, Mr = { transition: null }, ef = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Mr, ReactCurrentOwner: oi };
L.Children = { map: hr, forEach: function(e, t, n) {
  hr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return hr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return hr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ii(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = mn;
L.Fragment = $c;
L.Profiler = Qc;
L.PureComponent = ri;
L.StrictMode = Hc;
L.Suspense = Yc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ef;
L.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ds({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = oi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      vs.call(t, s) && !ms.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: or, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Wc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vc, _context: e }, e.Consumer = e;
};
L.createElement = gs;
L.createFactory = function(e) {
  var t = gs.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Kc, render: e };
};
L.isValidElement = ii;
L.lazy = function(e) {
  return { $$typeof: Gc, _payload: { _status: -1, _result: e }, _init: bc };
};
L.memo = function(e, t) {
  return { $$typeof: Xc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
L.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
L.useContext = function(e) {
  return se.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
L.useId = function() {
  return se.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return se.current.useRef(e);
};
L.useState = function(e) {
  return se.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return se.current.useTransition();
};
L.version = "18.2.0";
cs.exports = L;
var ir = cs.exports;
const tf = /* @__PURE__ */ jc(ir);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf = ir, rf = Symbol.for("react.element"), lf = Symbol.for("react.fragment"), of = Object.prototype.hasOwnProperty, uf = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    of.call(t, r) && !sf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: rf, type: e, key: o, ref: i, props: l, _owner: uf.current };
}
ml.Fragment = lf;
ml.jsx = ys;
ml.jsxs = ys;
as.exports = ml;
var Qt = as.exports, ao = {}, ws = { exports: {} }, we = {}, ks = { exports: {} }, Ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(_, T) {
    var N = _.length;
    _.push(T);
    e:
      for (; 0 < N; ) {
        var Q = N - 1 >>> 1, X = _[Q];
        if (0 < l(X, T))
          _[Q] = T, _[N] = X, N = Q;
        else
          break e;
      }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0)
      return null;
    var T = _[0], N = _.pop();
    if (N !== T) {
      _[0] = N;
      e:
        for (var Q = 0, X = _.length, dr = X >>> 1; Q < dr; ) {
          var Pt = 2 * (Q + 1) - 1, Bl = _[Pt], xt = Pt + 1, pr = _[xt];
          if (0 > l(Bl, N))
            xt < X && 0 > l(pr, Bl) ? (_[Q] = pr, _[xt] = N, Q = xt) : (_[Q] = Bl, _[Pt] = N, Q = Pt);
          else if (xt < X && 0 > l(pr, N))
            _[Q] = pr, _[xt] = N, Q = xt;
          else
            break e;
        }
    }
    return T;
  }
  function l(_, T) {
    var N = _.sortIndex - T.sortIndex;
    return N !== 0 ? N : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], p = 1, v = null, h = 3, y = !1, w = !1, k = !1, O = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null)
        r(c);
      else if (T.startTime <= _)
        r(c), T.sortIndex = T.expirationTime, t(s, T);
      else
        break;
      T = n(c);
    }
  }
  function m(_) {
    if (k = !1, d(_), !w)
      if (n(s) !== null)
        w = !0, Ml(E);
      else {
        var T = n(c);
        T !== null && Il(m, T.startTime - _);
      }
  }
  function E(_, T) {
    w = !1, k && (k = !1, f(x), x = -1), y = !0;
    var N = h;
    try {
      for (d(T), v = n(s); v !== null && (!(v.expirationTime > T) || _ && !ze()); ) {
        var Q = v.callback;
        if (typeof Q == "function") {
          v.callback = null, h = v.priorityLevel;
          var X = Q(v.expirationTime <= T);
          T = e.unstable_now(), typeof X == "function" ? v.callback = X : v === n(s) && r(s), d(T);
        } else
          r(s);
        v = n(s);
      }
      if (v !== null)
        var dr = !0;
      else {
        var Pt = n(c);
        Pt !== null && Il(m, Pt.startTime - T), dr = !1;
      }
      return dr;
    } finally {
      v = null, h = N, y = !1;
    }
  }
  var C = !1, P = null, x = -1, H = 5, z = -1;
  function ze() {
    return !(e.unstable_now() - z < H);
  }
  function wn() {
    if (P !== null) {
      var _ = e.unstable_now();
      z = _;
      var T = !0;
      try {
        T = P(!0, _);
      } finally {
        T ? kn() : (C = !1, P = null);
      }
    } else
      C = !1;
  }
  var kn;
  if (typeof a == "function")
    kn = function() {
      a(wn);
    };
  else if (typeof MessageChannel < "u") {
    var qi = new MessageChannel(), Fc = qi.port2;
    qi.port1.onmessage = wn, kn = function() {
      Fc.postMessage(null);
    };
  } else
    kn = function() {
      O(wn, 0);
    };
  function Ml(_) {
    P = _, C || (C = !0, kn());
  }
  function Il(_, T) {
    x = O(function() {
      _(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, Ml(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = h;
    }
    var N = h;
    h = T;
    try {
      return _();
    } finally {
      h = N;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, T) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var N = h;
    h = _;
    try {
      return T();
    } finally {
      h = N;
    }
  }, e.unstable_scheduleCallback = function(_, T, N) {
    var Q = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? Q + N : Q) : N = Q, _) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = N + X, _ = { id: p++, callback: T, priorityLevel: _, startTime: N, expirationTime: X, sortIndex: -1 }, N > Q ? (_.sortIndex = N, t(c, _), n(s) === null && _ === n(c) && (k ? (f(x), x = -1) : k = !0, Il(m, N - Q))) : (_.sortIndex = X, t(s, _), w || y || (w = !0, Ml(E))), _;
  }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(_) {
    var T = h;
    return function() {
      var N = h;
      h = T;
      try {
        return _.apply(this, arguments);
      } finally {
        h = N;
      }
    };
  };
})(Ss);
ks.exports = Ss;
var af = ks.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Es = ir, ye = af;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _s = /* @__PURE__ */ new Set(), Hn = {};
function Ut(e, t) {
  an(e, t), an(e + "Capture", t);
}
function an(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++)
    _s.add(t[e]);
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), co = Object.prototype.hasOwnProperty, cf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nu = {}, ru = {};
function ff(e) {
  return co.call(ru, e) ? !0 : co.call(nu, e) ? !1 : cf.test(e) ? ru[e] = !0 : (nu[e] = !0, !1);
}
function df(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function pf(e, t, n, r) {
  if (t === null || typeof t > "u" || df(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ui = /[\-:]([a-z])/g;
function si(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ui,
    si
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ui, si);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ui, si);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ai(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pf(t, n, l, r) && (n = null), r || l === null ? ff(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = Es.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Wt = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fo = Symbol.for("react.profiler"), Cs = Symbol.for("react.provider"), Ps = Symbol.for("react.context"), fi = Symbol.for("react.forward_ref"), po = Symbol.for("react.suspense"), ho = Symbol.for("react.suspense_list"), di = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), xs = Symbol.for("react.offscreen"), lu = Symbol.iterator;
function Sn(e) {
  return e === null || typeof e != "object" ? null : (e = lu && e[lu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var U = Object.assign, Fl;
function Ln(e) {
  if (Fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fl = t && t[1] || "";
    }
  return `
` + Fl + e;
}
var jl = !1;
function Ul(e, t) {
  if (!e || jl)
    return "";
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function hf(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ul(e.type, !1), e;
    case 11:
      return e = Ul(e.type.render, !1), e;
    case 1:
      return e = Ul(e.type, !0), e;
    default:
      return "";
  }
}
function vo(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case Vt:
      return "Portal";
    case fo:
      return "Profiler";
    case ci:
      return "StrictMode";
    case po:
      return "Suspense";
    case ho:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ps:
        return (e.displayName || "Context") + ".Consumer";
      case Cs:
        return (e._context.displayName || "Context") + ".Provider";
      case fi:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case di:
        return t = e.displayName || null, t !== null ? t : vo(e.type) || "Memo";
      case ot:
        t = e._payload, e = e._init;
        try {
          return vo(e(t));
        } catch {
        }
    }
  return null;
}
function vf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return vo(t);
    case 8:
      return t === ci ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ts(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function mf(e) {
  var t = Ts(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function mr(e) {
  e._valueTracker || (e._valueTracker = mf(e));
}
function Ns(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ts(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Kr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mo(e, t) {
  var n = t.checked;
  return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ls(e, t) {
  t = t.checked, t != null && ai(e, "checked", t, !1);
}
function go(e, t) {
  Ls(e, t);
  var n = wt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? yo(e, t.type, n) : t.hasOwnProperty("defaultValue") && yo(e, t.type, wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function iu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function yo(e, t, n) {
  (t !== "number" || Kr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function nn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function wo(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(g(91));
  return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(g(92));
      if (zn(n)) {
        if (1 < n.length)
          throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: wt(n) };
}
function zs(e, t) {
  var n = wt(t.value), r = wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Rs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var gr, Ds = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (gr = gr || document.createElement("div"), gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var On = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, gf = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function(e) {
  gf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
  });
});
function Os(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
}
function Ms(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Os(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var yf = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function So(e, t) {
  if (t) {
    if (yf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(g(62));
  }
}
function Eo(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _o = null;
function pi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Co = null, rn = null, ln = null;
function au(e) {
  if (e = ar(e)) {
    if (typeof Co != "function")
      throw Error(g(280));
    var t = e.stateNode;
    t && (t = Sl(t), Co(e.stateNode, e.type, t));
  }
}
function Is(e) {
  rn ? ln ? ln.push(e) : ln = [e] : rn = e;
}
function Bs() {
  if (rn) {
    var e = rn, t = ln;
    if (ln = rn = null, au(e), t)
      for (e = 0; e < t.length; e++)
        au(t[e]);
  }
}
function As(e, t) {
  return e(t);
}
function Fs() {
}
var $l = !1;
function js(e, t, n) {
  if ($l)
    return e(t, n);
  $l = !0;
  try {
    return As(e, t, n);
  } finally {
    $l = !1, (rn !== null || ln !== null) && (Fs(), Bs());
  }
}
function Vn(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Sl(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(g(231, t, typeof n));
  return n;
}
var Po = !1;
if (qe)
  try {
    var En = {};
    Object.defineProperty(En, "passive", { get: function() {
      Po = !0;
    } }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
  } catch {
    Po = !1;
  }
function wf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Mn = !1, Yr = null, Xr = !1, xo = null, kf = { onError: function(e) {
  Mn = !0, Yr = e;
} };
function Sf(e, t, n, r, l, o, i, u, s) {
  Mn = !1, Yr = null, wf.apply(kf, arguments);
}
function Ef(e, t, n, r, l, o, i, u, s) {
  if (Sf.apply(this, arguments), Mn) {
    if (Mn) {
      var c = Yr;
      Mn = !1, Yr = null;
    } else
      throw Error(g(198));
    Xr || (Xr = !0, xo = c);
  }
}
function $t(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Us(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function cu(e) {
  if ($t(e) !== e)
    throw Error(g(188));
}
function _f(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $t(e), t === null)
      throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return cu(l), e;
        if (o === r)
          return cu(l), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(g(189));
      }
    }
    if (n.alternate !== r)
      throw Error(g(190));
  }
  if (n.tag !== 3)
    throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function $s(e) {
  return e = _f(e), e !== null ? Hs(e) : null;
}
function Hs(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Hs(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Qs = ye.unstable_scheduleCallback, fu = ye.unstable_cancelCallback, Cf = ye.unstable_shouldYield, Pf = ye.unstable_requestPaint, V = ye.unstable_now, xf = ye.unstable_getCurrentPriorityLevel, hi = ye.unstable_ImmediatePriority, Vs = ye.unstable_UserBlockingPriority, Gr = ye.unstable_NormalPriority, Tf = ye.unstable_LowPriority, Ws = ye.unstable_IdlePriority, gl = null, Ve = null;
function Nf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Be = Math.clz32 ? Math.clz32 : Rf, Lf = Math.log, zf = Math.LN2;
function Rf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Lf(e) / zf | 0) | 0;
}
var yr = 64, wr = 4194304;
function Rn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zr(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Rn(u) : (o &= i, o !== 0 && (r = Rn(o)));
  } else
    i = n & ~l, i !== 0 ? r = Rn(i) : o !== 0 && (r = Rn(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Be(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Df(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Of(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Be(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Df(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function To(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ks() {
  var e = yr;
  return yr <<= 1, !(yr & 4194240) && (yr = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function ur(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Be(t), e[t] = n;
}
function Mf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Be(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function vi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var D = 0;
function Ys(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xs, mi, Gs, Zs, Js, No = !1, kr = [], ft = null, dt = null, pt = null, Wn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), ut = [], If = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function du(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      dt = null;
      break;
    case "mouseover":
    case "mouseout":
      pt = null;
      break;
    case "pointerover":
    case "pointerout":
      Wn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId);
  }
}
function _n(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = ar(t), t !== null && mi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Bf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ft = _n(ft, e, t, n, r, l), !0;
    case "dragenter":
      return dt = _n(dt, e, t, n, r, l), !0;
    case "mouseover":
      return pt = _n(pt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Wn.set(o, _n(Wn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Kn.set(o, _n(Kn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function qs(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Us(n), t !== null) {
          e.blockedOn = t, Js(e.priority, function() {
            Gs(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ir(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _o = r, n.target.dispatchEvent(r), _o = null;
    } else
      return t = ar(n), t !== null && mi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function pu(e, t, n) {
  Ir(e) && n.delete(t);
}
function Af() {
  No = !1, ft !== null && Ir(ft) && (ft = null), dt !== null && Ir(dt) && (dt = null), pt !== null && Ir(pt) && (pt = null), Wn.forEach(pu), Kn.forEach(pu);
}
function Cn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, No || (No = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, Af)));
}
function Yn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < kr.length) {
    Cn(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ft !== null && Cn(ft, e), dt !== null && Cn(dt, e), pt !== null && Cn(pt, e), Wn.forEach(t), Kn.forEach(t), n = 0; n < ut.length; n++)
    r = ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && (n = ut[0], n.blockedOn === null); )
    qs(n), n.blockedOn === null && ut.shift();
}
var on = nt.ReactCurrentBatchConfig, Jr = !0;
function Ff(e, t, n, r) {
  var l = D, o = on.transition;
  on.transition = null;
  try {
    D = 1, gi(e, t, n, r);
  } finally {
    D = l, on.transition = o;
  }
}
function jf(e, t, n, r) {
  var l = D, o = on.transition;
  on.transition = null;
  try {
    D = 4, gi(e, t, n, r);
  } finally {
    D = l, on.transition = o;
  }
}
function gi(e, t, n, r) {
  if (Jr) {
    var l = Lo(e, t, n, r);
    if (l === null)
      ql(e, t, r, qr, n), du(e, r);
    else if (Bf(l, e, t, n, r))
      r.stopPropagation();
    else if (du(e, r), t & 4 && -1 < If.indexOf(e)) {
      for (; l !== null; ) {
        var o = ar(l);
        if (o !== null && Xs(o), o = Lo(e, t, n, r), o === null && ql(e, t, r, qr, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      ql(e, t, r, null, n);
  }
}
var qr = null;
function Lo(e, t, n, r) {
  if (qr = null, e = pi(r), e = zt(e), e !== null)
    if (t = $t(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Us(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return qr = e, null;
}
function bs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (xf()) {
        case hi:
          return 1;
        case Vs:
          return 4;
        case Gr:
        case Tf:
          return 16;
        case Ws:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null, yi = null, Br = null;
function ea() {
  if (Br)
    return Br;
  var e, t = yi, n = t.length, r, l = "value" in at ? at.value : at.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return Br = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ar(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sr() {
  return !0;
}
function hu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Sr : hu, this.isPropagationStopped = hu, this;
  }
  return U(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sr);
  }, persist: function() {
  }, isPersistent: Sr }), t;
}
var gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, wi = ke(gn), sr = U({}, gn, { view: 0, detail: 0 }), Uf = ke(sr), Ql, Vl, Pn, yl = U({}, sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ki, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (Ql = e.screenX - Pn.screenX, Vl = e.screenY - Pn.screenY) : Vl = Ql = 0, Pn = e), Ql);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Vl;
} }), vu = ke(yl), $f = U({}, yl, { dataTransfer: 0 }), Hf = ke($f), Qf = U({}, sr, { relatedTarget: 0 }), Wl = ke(Qf), Vf = U({}, gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wf = ke(Vf), Kf = U({}, gn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Yf = ke(Kf), Xf = U({}, gn, { data: 0 }), mu = ke(Xf), Gf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Zf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Jf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Jf[e]) ? !!t[e] : !1;
}
function ki() {
  return qf;
}
var bf = U({}, sr, { key: function(e) {
  if (e.key) {
    var t = Gf[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ar(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ki, charCode: function(e) {
  return e.type === "keypress" ? Ar(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ar(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ed = ke(bf), td = U({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gu = ke(td), nd = U({}, sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ki }), rd = ke(nd), ld = U({}, gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), od = ke(ld), id = U({}, yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ud = ke(id), sd = [9, 13, 27, 32], Si = qe && "CompositionEvent" in window, In = null;
qe && "documentMode" in document && (In = document.documentMode);
var ad = qe && "TextEvent" in window && !In, ta = qe && (!Si || In && 8 < In && 11 >= In), yu = String.fromCharCode(32), wu = !1;
function na(e, t) {
  switch (e) {
    case "keyup":
      return sd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ra(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function cd(e, t) {
  switch (e) {
    case "compositionend":
      return ra(t);
    case "keypress":
      return t.which !== 32 ? null : (wu = !0, yu);
    case "textInput":
      return e = t.data, e === yu && wu ? null : e;
    default:
      return null;
  }
}
function fd(e, t) {
  if (Kt)
    return e === "compositionend" || !Si && na(e, t) ? (e = ea(), Br = yi = at = null, Kt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ta && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dd[e.type] : t === "textarea";
}
function la(e, t, n, r) {
  Is(r), t = br(t, "onChange"), 0 < t.length && (n = new wi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Bn = null, Xn = null;
function pd(e) {
  va(e, 0);
}
function wl(e) {
  var t = Gt(e);
  if (Ns(t))
    return e;
}
function hd(e, t) {
  if (e === "change")
    return t;
}
var oa = !1;
if (qe) {
  var Kl;
  if (qe) {
    var Yl = "oninput" in document;
    if (!Yl) {
      var Su = document.createElement("div");
      Su.setAttribute("oninput", "return;"), Yl = typeof Su.oninput == "function";
    }
    Kl = Yl;
  } else
    Kl = !1;
  oa = Kl && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
  Bn && (Bn.detachEvent("onpropertychange", ia), Xn = Bn = null);
}
function ia(e) {
  if (e.propertyName === "value" && wl(Xn)) {
    var t = [];
    la(t, Xn, e, pi(e)), js(pd, t);
  }
}
function vd(e, t, n) {
  e === "focusin" ? (Eu(), Bn = t, Xn = n, Bn.attachEvent("onpropertychange", ia)) : e === "focusout" && Eu();
}
function md(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return wl(Xn);
}
function gd(e, t) {
  if (e === "click")
    return wl(t);
}
function yd(e, t) {
  if (e === "input" || e === "change")
    return wl(t);
}
function wd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : wd;
function Gn(e, t) {
  if (Fe(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!co.call(t, l) || !Fe(e[l], t[l]))
      return !1;
  }
  return !0;
}
function _u(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Cu(e, t) {
  var n = _u(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _u(n);
  }
}
function ua(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ua(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sa() {
  for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Kr(e.document);
  }
  return t;
}
function Ei(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function kd(e) {
  var t = sa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ua(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ei(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Cu(n, o);
        var i = Cu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Sd = qe && "documentMode" in document && 11 >= document.documentMode, Yt = null, zo = null, An = null, Ro = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ro || Yt == null || Yt !== Kr(r) || (r = Yt, "selectionStart" in r && Ei(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), An && Gn(An, r) || (An = r, r = br(zo, "onSelect"), 0 < r.length && (t = new wi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yt)));
}
function Er(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xt = { animationend: Er("Animation", "AnimationEnd"), animationiteration: Er("Animation", "AnimationIteration"), animationstart: Er("Animation", "AnimationStart"), transitionend: Er("Transition", "TransitionEnd") }, Xl = {}, aa = {};
qe && (aa = document.createElement("div").style, "AnimationEvent" in window || (delete Xt.animationend.animation, delete Xt.animationiteration.animation, delete Xt.animationstart.animation), "TransitionEvent" in window || delete Xt.transitionend.transition);
function kl(e) {
  if (Xl[e])
    return Xl[e];
  if (!Xt[e])
    return e;
  var t = Xt[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in aa)
      return Xl[e] = t[n];
  return e;
}
var ca = kl("animationend"), fa = kl("animationiteration"), da = kl("animationstart"), pa = kl("transitionend"), ha = /* @__PURE__ */ new Map(), xu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function St(e, t) {
  ha.set(e, t), Ut(t, [e]);
}
for (var Gl = 0; Gl < xu.length; Gl++) {
  var Zl = xu[Gl], Ed = Zl.toLowerCase(), _d = Zl[0].toUpperCase() + Zl.slice(1);
  St(Ed, "on" + _d);
}
St(ca, "onAnimationEnd");
St(fa, "onAnimationIteration");
St(da, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(pa, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
Ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Dn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function Tu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ef(r, t, void 0, e), e.currentTarget = null;
}
function va(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Tu(l, u, c), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Tu(l, u, c), o = s;
        }
    }
  }
  if (Xr)
    throw e = xo, Xr = !1, xo = null, e;
}
function I(e, t) {
  var n = t[Bo];
  n === void 0 && (n = t[Bo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ma(t, e, 2, !1), n.add(r));
}
function Jl(e, t, n) {
  var r = 0;
  t && (r |= 4), ma(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[_r]) {
    e[_r] = !0, _s.forEach(function(n) {
      n !== "selectionchange" && (Cd.has(n) || Jl(n, !1, e), Jl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, Jl("selectionchange", !1, t));
  }
}
function ma(e, t, n, r) {
  switch (bs(t)) {
    case 1:
      var l = Ff;
      break;
    case 4:
      l = jf;
      break;
    default:
      l = gi;
  }
  n = l.bind(null, t, n, e), l = void 0, !Po || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ql(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = zt(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  js(function() {
    var c = o, p = pi(n), v = [];
    e: {
      var h = ha.get(e);
      if (h !== void 0) {
        var y = wi, w = e;
        switch (e) {
          case "keypress":
            if (Ar(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = ed;
            break;
          case "focusin":
            w = "focus", y = Wl;
            break;
          case "focusout":
            w = "blur", y = Wl;
            break;
          case "beforeblur":
          case "afterblur":
            y = Wl;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Hf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = rd;
            break;
          case ca:
          case fa:
          case da:
            y = Wf;
            break;
          case pa:
            y = od;
            break;
          case "scroll":
            y = Uf;
            break;
          case "wheel":
            y = ud;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Yf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = gu;
        }
        var k = (t & 4) !== 0, O = !k && e === "scroll", f = k ? h !== null ? h + "Capture" : null : h;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var m = d.stateNode;
          if (d.tag === 5 && m !== null && (d = m, f !== null && (m = Vn(a, f), m != null && k.push(Jn(a, m, d)))), O)
            break;
          a = a.return;
        }
        0 < k.length && (h = new y(h, w, null, n, p), v.push({ event: h, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== _o && (w = n.relatedTarget || n.fromElement) && (zt(w) || w[be]))
          break e;
        if ((y || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = c, w = w ? zt(w) : null, w !== null && (O = $t(w), w !== O || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = c), y !== w)) {
          if (k = vu, m = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = gu, m = "onPointerLeave", f = "onPointerEnter", a = "pointer"), O = y == null ? h : Gt(y), d = w == null ? h : Gt(w), h = new k(m, a + "leave", y, n, p), h.target = O, h.relatedTarget = d, m = null, zt(p) === c && (k = new k(f, a + "enter", w, n, p), k.target = d, k.relatedTarget = O, m = k), O = m, y && w)
            t: {
              for (k = y, f = w, a = 0, d = k; d; d = Ht(d))
                a++;
              for (d = 0, m = f; m; m = Ht(m))
                d++;
              for (; 0 < a - d; )
                k = Ht(k), a--;
              for (; 0 < d - a; )
                f = Ht(f), d--;
              for (; a--; ) {
                if (k === f || f !== null && k === f.alternate)
                  break t;
                k = Ht(k), f = Ht(f);
              }
              k = null;
            }
          else
            k = null;
          y !== null && Nu(v, h, y, k, !1), w !== null && O !== null && Nu(v, O, w, k, !0);
        }
      }
      e: {
        if (h = c ? Gt(c) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file")
          var E = hd;
        else if (ku(h))
          if (oa)
            E = yd;
          else {
            E = md;
            var C = vd;
          }
        else
          (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = gd);
        if (E && (E = E(e, c))) {
          la(v, E, n, p);
          break e;
        }
        C && C(e, h, c), e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && yo(h, "number", h.value);
      }
      switch (C = c ? Gt(c) : window, e) {
        case "focusin":
          (ku(C) || C.contentEditable === "true") && (Yt = C, zo = c, An = null);
          break;
        case "focusout":
          An = zo = Yt = null;
          break;
        case "mousedown":
          Ro = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ro = !1, Pu(v, n, p);
          break;
        case "selectionchange":
          if (Sd)
            break;
        case "keydown":
        case "keyup":
          Pu(v, n, p);
      }
      var P;
      if (Si)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        Kt ? na(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x && (ta && n.locale !== "ko" && (Kt || x !== "onCompositionStart" ? x === "onCompositionEnd" && Kt && (P = ea()) : (at = p, yi = "value" in at ? at.value : at.textContent, Kt = !0)), C = br(c, x), 0 < C.length && (x = new mu(x, e, null, n, p), v.push({ event: x, listeners: C }), P ? x.data = P : (P = ra(n), P !== null && (x.data = P)))), (P = ad ? cd(e, n) : fd(e, n)) && (c = br(c, "onBeforeInput"), 0 < c.length && (p = new mu("onBeforeInput", "beforeinput", null, n, p), v.push({ event: p, listeners: c }), p.data = P));
    }
    va(v, t);
  });
}
function Jn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Vn(e, n), o != null && r.unshift(Jn(e, o, l)), o = Vn(e, t), o != null && r.push(Jn(e, o, l))), e = e.return;
  }
  return r;
}
function Ht(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Vn(n, o), s != null && i.unshift(Jn(n, s, u))) : l || (s = Vn(n, o), s != null && i.push(Jn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Pd = /\r\n?/g, xd = /\u0000|\uFFFD/g;
function Lu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Pd, `
`).replace(xd, "");
}
function Cr(e, t, n) {
  if (t = Lu(t), Lu(e) !== t && n)
    throw Error(g(425));
}
function el() {
}
var Do = null, Oo = null;
function Mo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Io = typeof setTimeout == "function" ? setTimeout : void 0, Td = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, Nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
  return zu.resolve(null).then(e).catch(Ld);
} : Io;
function Ld(e) {
  setTimeout(function() {
    throw e;
  });
}
function bl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Yn(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Yn(t);
}
function ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + yn, qn = "__reactProps$" + yn, be = "__reactContainer$" + yn, Bo = "__reactEvents$" + yn, zd = "__reactListeners$" + yn, Rd = "__reactHandles$" + yn;
function zt(e) {
  var t = e[$e];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[be] || n[$e]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Ru(e); e !== null; ) {
          if (n = e[$e])
            return n;
          e = Ru(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ar(e) {
  return e = e[$e] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Gt(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(g(33));
}
function Sl(e) {
  return e[qn] || null;
}
var Ao = [], Zt = -1;
function Et(e) {
  return { current: e };
}
function B(e) {
  0 > Zt || (e.current = Ao[Zt], Ao[Zt] = null, Zt--);
}
function M(e, t) {
  Zt++, Ao[Zt] = e.current, e.current = t;
}
var kt = {}, oe = Et(kt), de = Et(!1), It = kt;
function cn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function tl() {
  B(de), B(oe);
}
function Du(e, t, n) {
  if (oe.current !== kt)
    throw Error(g(168));
  M(oe, t), M(de, n);
}
function ga(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(g(108, vf(e) || "Unknown", l));
  return U({}, n, r);
}
function nl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kt, It = oe.current, M(oe, e), M(de, de.current), !0;
}
function Ou(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(g(169));
  n ? (e = ga(e, t, It), r.__reactInternalMemoizedMergedChildContext = e, B(de), B(oe), M(oe, e)) : B(de), M(de, n);
}
var Xe = null, El = !1, eo = !1;
function ya(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function Dd(e) {
  El = !0, ya(e);
}
function _t() {
  if (!eo && Xe !== null) {
    eo = !0;
    var e = 0, t = D;
    try {
      var n = Xe;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, El = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), Qs(hi, _t), l;
    } finally {
      D = t, eo = !1;
    }
  }
  return null;
}
var Jt = [], qt = 0, rl = null, ll = 0, Ce = [], Pe = 0, Bt = null, Ge = 1, Ze = "";
function Nt(e, t) {
  Jt[qt++] = ll, Jt[qt++] = rl, rl = e, ll = t;
}
function wa(e, t, n) {
  Ce[Pe++] = Ge, Ce[Pe++] = Ze, Ce[Pe++] = Bt, Bt = e;
  var r = Ge;
  e = Ze;
  var l = 32 - Be(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Be(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ge = 1 << 32 - Be(t) + l | n << l | r, Ze = o + e;
  } else
    Ge = 1 << o | n << l | r, Ze = e;
}
function _i(e) {
  e.return !== null && (Nt(e, 1), wa(e, 1, 0));
}
function Ci(e) {
  for (; e === rl; )
    rl = Jt[--qt], Jt[qt] = null, ll = Jt[--qt], Jt[qt] = null;
  for (; e === Bt; )
    Bt = Ce[--Pe], Ce[Pe] = null, Ze = Ce[--Pe], Ce[Pe] = null, Ge = Ce[--Pe], Ce[Pe] = null;
}
var ge = null, me = null, A = !1, Me = null;
function ka(e, t) {
  var n = xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Mu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ge = e, me = ht(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ge = e, me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Bt !== null ? { id: Ge, overflow: Ze } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ge = e, me = null, !0) : !1;
    default:
      return !1;
  }
}
function Fo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jo(e) {
  if (A) {
    var t = me;
    if (t) {
      var n = t;
      if (!Mu(e, t)) {
        if (Fo(e))
          throw Error(g(418));
        t = ht(n.nextSibling);
        var r = ge;
        t && Mu(e, t) ? ka(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, ge = e);
      }
    } else {
      if (Fo(e))
        throw Error(g(418));
      e.flags = e.flags & -4097 | 2, A = !1, ge = e;
    }
  }
}
function Iu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function Pr(e) {
  if (e !== ge)
    return !1;
  if (!A)
    return Iu(e), A = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mo(e.type, e.memoizedProps)), t && (t = me)) {
    if (Fo(e))
      throw Sa(), Error(g(418));
    for (; t; )
      ka(e, t), t = ht(t.nextSibling);
  }
  if (Iu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              me = ht(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else
    me = ge ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Sa() {
  for (var e = me; e; )
    e = ht(e.nextSibling);
}
function fn() {
  me = ge = null, A = !1;
}
function Pi(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var Od = nt.ReactCurrentBatchConfig;
function De(e, t) {
  if (e && e.defaultProps) {
    t = U({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ol = Et(null), il = null, bt = null, xi = null;
function Ti() {
  xi = bt = il = null;
}
function Ni(e) {
  var t = ol.current;
  B(ol), e._currentValue = t;
}
function Uo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function un(e, t) {
  il = e, xi = bt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function Ne(e) {
  var t = e._currentValue;
  if (xi !== e)
    if (e = { context: e, memoizedValue: t, next: null }, bt === null) {
      if (il === null)
        throw Error(g(308));
      bt = e, il.dependencies = { lanes: 0, firstContext: e };
    } else
      bt = bt.next = e;
  return t;
}
var Rt = null;
function Li(e) {
  Rt === null ? Rt = [e] : Rt.push(e);
}
function Ea(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Li(t)) : (n.next = l.next, l.next = n), t.interleaved = n, et(e, r);
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function zi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _a(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Je(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, et(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Li(r)) : (t.next = l.next, l.next = t), r.interleaved = t, et(e, n);
}
function Fr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vi(e, n);
  }
}
function Bu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ul(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = c : u.next = c, p.lastBaseUpdate = s));
  }
  if (o !== null) {
    var v = l.baseState;
    i = 0, p = c = s = null, u = o;
    do {
      var h = u.lane, y = u.eventTime;
      if ((r & h) === h) {
        p !== null && (p = p.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (h = t, y = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                v = w.call(y, v, h);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, h = typeof w == "function" ? w.call(y, v, h) : w, h == null)
                break e;
              v = U({}, v, h);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
      } else
        y = { eventTime: y, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, p === null ? (c = p = y, s = v) : p = p.next = y, i |= h;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (1);
    if (p === null && (s = v), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    Ft |= i, e.lanes = i, e.memoizedState = v;
  }
}
function Au(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var Ca = new Es.Component().refs;
function $o(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = { isMounted: function(e) {
  return (e = e._reactInternals) ? $t(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = gt(e), o = Je(r, l);
  o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (Ae(t, e, l, r), Fr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = gt(e), o = Je(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (Ae(t, e, l, r), Fr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = gt(e), l = Je(n, r);
  l.tag = 2, t != null && (l.callback = t), t = vt(e, l, r), t !== null && (Ae(t, e, r, n), Fr(t, e, r));
} };
function Fu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Gn(n, r) || !Gn(l, o) : !0;
}
function Pa(e, t, n) {
  var r = !1, l = kt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ne(o) : (l = pe(t) ? It : oe.current, r = t.contextTypes, o = (r = r != null) ? cn(e, l) : kt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _l, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ju(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function Ho(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Ca, zi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ne(o) : (o = pe(t) ? It : oe.current, l.context = cn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && ($o(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && _l.enqueueReplaceState(l, l.state, null), ul(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(g(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === Ca && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(g(284));
    if (!n._owner)
      throw Error(g(290, e));
  }
  return e;
}
function xr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function xa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = yt(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, m) {
    return a === null || a.tag !== 6 ? (a = uo(d, f.mode, m), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, m) {
    var E = d.type;
    return E === Wt ? p(f, a, d.props.children, m, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === ot && Uu(E) === a.type) ? (m = l(a, d.props), m.ref = xn(f, a, d), m.return = f, m) : (m = Vr(d.type, d.key, d.props, null, f.mode, m), m.ref = xn(f, a, d), m.return = f, m);
  }
  function c(f, a, d, m) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = so(d, f.mode, m), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function p(f, a, d, m, E) {
    return a === null || a.tag !== 7 ? (a = Mt(d, f.mode, m, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function v(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = uo("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case vr:
          return d = Vr(a.type, a.key, a.props, null, f.mode, d), d.ref = xn(f, null, a), d.return = f, d;
        case Vt:
          return a = so(a, f.mode, d), a.return = f, a;
        case ot:
          var m = a._init;
          return v(f, m(a._payload), d);
      }
      if (zn(a) || Sn(a))
        return a = Mt(a, f.mode, d, null), a.return = f, a;
      xr(f, a);
    }
    return null;
  }
  function h(f, a, d, m) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, m);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          return d.key === E ? s(f, a, d, m) : null;
        case Vt:
          return d.key === E ? c(f, a, d, m) : null;
        case ot:
          return E = d._init, h(
            f,
            a,
            E(d._payload),
            m
          );
      }
      if (zn(d) || Sn(d))
        return E !== null ? null : p(f, a, d, m, null);
      xr(f, d);
    }
    return null;
  }
  function y(f, a, d, m, E) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return f = f.get(d) || null, u(a, f, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case vr:
          return f = f.get(m.key === null ? d : m.key) || null, s(a, f, m, E);
        case Vt:
          return f = f.get(m.key === null ? d : m.key) || null, c(a, f, m, E);
        case ot:
          var C = m._init;
          return y(f, a, d, C(m._payload), E);
      }
      if (zn(m) || Sn(m))
        return f = f.get(d) || null, p(a, f, m, E, null);
      xr(a, m);
    }
    return null;
  }
  function w(f, a, d, m) {
    for (var E = null, C = null, P = a, x = a = 0, H = null; P !== null && x < d.length; x++) {
      P.index > x ? (H = P, P = null) : H = P.sibling;
      var z = h(f, P, d[x], m);
      if (z === null) {
        P === null && (P = H);
        break;
      }
      e && P && z.alternate === null && t(f, P), a = o(z, a, x), C === null ? E = z : C.sibling = z, C = z, P = H;
    }
    if (x === d.length)
      return n(f, P), A && Nt(f, x), E;
    if (P === null) {
      for (; x < d.length; x++)
        P = v(f, d[x], m), P !== null && (a = o(P, a, x), C === null ? E = P : C.sibling = P, C = P);
      return A && Nt(f, x), E;
    }
    for (P = r(f, P); x < d.length; x++)
      H = y(P, f, x, d[x], m), H !== null && (e && H.alternate !== null && P.delete(H.key === null ? x : H.key), a = o(H, a, x), C === null ? E = H : C.sibling = H, C = H);
    return e && P.forEach(function(ze) {
      return t(f, ze);
    }), A && Nt(f, x), E;
  }
  function k(f, a, d, m) {
    var E = Sn(d);
    if (typeof E != "function")
      throw Error(g(150));
    if (d = E.call(d), d == null)
      throw Error(g(151));
    for (var C = E = null, P = a, x = a = 0, H = null, z = d.next(); P !== null && !z.done; x++, z = d.next()) {
      P.index > x ? (H = P, P = null) : H = P.sibling;
      var ze = h(f, P, z.value, m);
      if (ze === null) {
        P === null && (P = H);
        break;
      }
      e && P && ze.alternate === null && t(f, P), a = o(ze, a, x), C === null ? E = ze : C.sibling = ze, C = ze, P = H;
    }
    if (z.done)
      return n(
        f,
        P
      ), A && Nt(f, x), E;
    if (P === null) {
      for (; !z.done; x++, z = d.next())
        z = v(f, z.value, m), z !== null && (a = o(z, a, x), C === null ? E = z : C.sibling = z, C = z);
      return A && Nt(f, x), E;
    }
    for (P = r(f, P); !z.done; x++, z = d.next())
      z = y(P, f, x, z.value, m), z !== null && (e && z.alternate !== null && P.delete(z.key === null ? x : z.key), a = o(z, a, x), C === null ? E = z : C.sibling = z, C = z);
    return e && P.forEach(function(wn) {
      return t(f, wn);
    }), A && Nt(f, x), E;
  }
  function O(f, a, d, m) {
    if (typeof d == "object" && d !== null && d.type === Wt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (E = d.type, E === Wt) {
                  if (C.tag === 7) {
                    n(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === ot && Uu(E) === C.type) {
                  n(f, C.sibling), a = l(C, d.props), a.ref = xn(f, C, d), a.return = f, f = a;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            d.type === Wt ? (a = Mt(d.props.children, f.mode, m, d.key), a.return = f, f = a) : (m = Vr(d.type, d.key, d.props, null, f.mode, m), m.ref = xn(f, a, d), m.return = f, f = m);
          }
          return i(f);
        case Vt:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else
                t(f, a);
              a = a.sibling;
            }
            a = so(d, f.mode, m), a.return = f, f = a;
          }
          return i(f);
        case ot:
          return C = d._init, O(f, a, C(d._payload), m);
      }
      if (zn(d))
        return w(f, a, d, m);
      if (Sn(d))
        return k(f, a, d, m);
      xr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = uo(d, f.mode, m), a.return = f, f = a), i(f)) : n(f, a);
  }
  return O;
}
var dn = xa(!0), Ta = xa(!1), cr = {}, We = Et(cr), bn = Et(cr), er = Et(cr);
function Dt(e) {
  if (e === cr)
    throw Error(g(174));
  return e;
}
function Ri(e, t) {
  switch (M(er, t), M(bn, e), M(We, cr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ko(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ko(t, e);
  }
  B(We), M(We, t);
}
function pn() {
  B(We), B(bn), B(er);
}
function Na(e) {
  Dt(er.current);
  var t = Dt(We.current), n = ko(t, e.type);
  t !== n && (M(bn, e), M(We, n));
}
function Di(e) {
  bn.current === e && (B(We), B(bn));
}
var F = Et(0);
function sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var to = [];
function Oi() {
  for (var e = 0; e < to.length; e++)
    to[e]._workInProgressVersionPrimary = null;
  to.length = 0;
}
var jr = nt.ReactCurrentDispatcher, no = nt.ReactCurrentBatchConfig, At = 0, j = null, K = null, G = null, al = !1, Fn = !1, tr = 0, Md = 0;
function ne() {
  throw Error(g(321));
}
function Mi(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n]))
      return !1;
  return !0;
}
function Ii(e, t, n, r, l, o) {
  if (At = o, j = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jr.current = e === null || e.memoizedState === null ? Fd : jd, e = n(r, l), Fn) {
    o = 0;
    do {
      if (Fn = !1, tr = 0, 25 <= o)
        throw Error(g(301));
      o += 1, G = K = null, t.updateQueue = null, jr.current = Ud, e = n(r, l);
    } while (Fn);
  }
  if (jr.current = cl, t = K !== null && K.next !== null, At = 0, G = K = j = null, al = !1, t)
    throw Error(g(300));
  return e;
}
function Bi() {
  var e = tr !== 0;
  return tr = 0, e;
}
function Ue() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return G === null ? j.memoizedState = G = e : G = G.next = e, G;
}
function Le() {
  if (K === null) {
    var e = j.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = K.next;
  var t = G === null ? j.memoizedState : G.next;
  if (t !== null)
    G = t, K = e;
  else {
    if (e === null)
      throw Error(g(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, G === null ? j.memoizedState = G = e : G = G.next = e;
  }
  return G;
}
function nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ro(e) {
  var t = Le(), n = t.queue;
  if (n === null)
    throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var p = c.lane;
      if ((At & p) === p)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var v = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = v, i = r) : s = s.next = v, j.lanes |= p, Ft |= p;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Fe(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, j.lanes |= o, Ft |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function lo(e) {
  var t = Le(), n = t.queue;
  if (n === null)
    throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Fe(o, t.memoizedState) || (fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function La() {
}
function za(e, t) {
  var n = j, r = Le(), l = t(), o = !Fe(r.memoizedState, l);
  if (o && (r.memoizedState = l, fe = !0), r = r.queue, Ai(Oa.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || G !== null && G.memoizedState.tag & 1) {
    if (n.flags |= 2048, rr(9, Da.bind(null, n, r, l, t), void 0, null), Z === null)
      throw Error(g(349));
    At & 30 || Ra(n, t, l);
  }
  return l;
}
function Ra(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = j.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, j.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Da(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ma(t) && Ia(e);
}
function Oa(e, t, n) {
  return n(function() {
    Ma(t) && Ia(e);
  });
}
function Ma(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Ia(e) {
  var t = et(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function $u(e) {
  var t = Ue();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ad.bind(null, j, e), [t.memoizedState, e];
}
function rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = j.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, j.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ba() {
  return Le().memoizedState;
}
function Ur(e, t, n, r) {
  var l = Ue();
  j.flags |= e, l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Cl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (o = i.destroy, r !== null && Mi(r, i.deps)) {
      l.memoizedState = rr(t, n, o, r);
      return;
    }
  }
  j.flags |= e, l.memoizedState = rr(1 | t, n, o, r);
}
function Hu(e, t) {
  return Ur(8390656, 8, e, t);
}
function Ai(e, t) {
  return Cl(2048, 8, e, t);
}
function Aa(e, t) {
  return Cl(4, 2, e, t);
}
function Fa(e, t) {
  return Cl(4, 4, e, t);
}
function ja(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Ua(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Cl(4, 4, ja.bind(null, t, e), n);
}
function Fi() {
}
function $a(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ha(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Qa(e, t, n) {
  return At & 21 ? (Fe(n, t) || (n = Ks(), j.lanes |= n, Ft |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function Id(e, t) {
  var n = D;
  D = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = no.transition;
  no.transition = {};
  try {
    e(!1), t();
  } finally {
    D = n, no.transition = r;
  }
}
function Va() {
  return Le().memoizedState;
}
function Bd(e, t, n) {
  var r = gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wa(e))
    Ka(t, n);
  else if (n = Ea(e, t, n, r), n !== null) {
    var l = ue();
    Ae(n, e, r, l), Ya(n, t, r);
  }
}
function Ad(e, t, n) {
  var r = gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wa(e))
    Ka(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, Fe(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Li(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Ea(e, t, l, r), n !== null && (l = ue(), Ae(n, e, r, l), Ya(n, t, r));
  }
}
function Wa(e) {
  var t = e.alternate;
  return e === j || t !== null && t === j;
}
function Ka(e, t) {
  Fn = al = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ya(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vi(e, n);
  }
}
var cl = { readContext: Ne, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, Fd = { readContext: Ne, useCallback: function(e, t) {
  return Ue().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ne, useEffect: Hu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ur(
    4194308,
    4,
    ja.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ur(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ur(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ue();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ue();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Bd.bind(null, j, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ue();
  return e = { current: e }, t.memoizedState = e;
}, useState: $u, useDebugValue: Fi, useDeferredValue: function(e) {
  return Ue().memoizedState = e;
}, useTransition: function() {
  var e = $u(!1), t = e[0];
  return e = Id.bind(null, e[1]), Ue().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = j, l = Ue();
  if (A) {
    if (n === void 0)
      throw Error(g(407));
    n = n();
  } else {
    if (n = t(), Z === null)
      throw Error(g(349));
    At & 30 || Ra(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Hu(Oa.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, rr(9, Da.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ue(), t = Z.identifierPrefix;
  if (A) {
    var n = Ze, r = Ge;
    n = (r & ~(1 << 32 - Be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Md++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, jd = {
  readContext: Ne,
  useCallback: $a,
  useContext: Ne,
  useEffect: Ai,
  useImperativeHandle: Ua,
  useInsertionEffect: Aa,
  useLayoutEffect: Fa,
  useMemo: Ha,
  useReducer: ro,
  useRef: Ba,
  useState: function() {
    return ro(nr);
  },
  useDebugValue: Fi,
  useDeferredValue: function(e) {
    var t = Le();
    return Qa(t, K.memoizedState, e);
  },
  useTransition: function() {
    var e = ro(nr)[0], t = Le().memoizedState;
    return [e, t];
  },
  useMutableSource: La,
  useSyncExternalStore: za,
  useId: Va,
  unstable_isNewReconciler: !1
}, Ud = { readContext: Ne, useCallback: $a, useContext: Ne, useEffect: Ai, useImperativeHandle: Ua, useInsertionEffect: Aa, useLayoutEffect: Fa, useMemo: Ha, useReducer: lo, useRef: Ba, useState: function() {
  return lo(nr);
}, useDebugValue: Fi, useDeferredValue: function(e) {
  var t = Le();
  return K === null ? t.memoizedState = e : Qa(t, K.memoizedState, e);
}, useTransition: function() {
  var e = lo(nr)[0], t = Le().memoizedState;
  return [e, t];
}, useMutableSource: La, useSyncExternalStore: za, useId: Va, unstable_isNewReconciler: !1 };
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += hf(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function oo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var $d = typeof WeakMap == "function" ? WeakMap : Map;
function Xa(e, t, n) {
  n = Je(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    dl || (dl = !0, bo = r), Qo(e, t);
  }, n;
}
function Ga(e, t, n) {
  n = Je(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Qo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Qo(e, t), typeof r != "function" && (mt === null ? mt = /* @__PURE__ */ new Set([this]) : mt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $d();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = tp.bind(null, e, t, n), t.then(e, e));
}
function Vu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Je(-1, 1), t.tag = 2, vt(n, t, 1))), n.lanes |= 1), e);
}
var Hd = nt.ReactCurrentOwner, fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? Ta(t, null, n, r) : dn(t, e.child, n, r);
}
function Ku(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return un(t, l), r = Ii(e, t, n, r, o, l), n = Bi(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : (A && n && _i(t), t.flags |= 1, ie(e, t, r, l), t.child);
}
function Yu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ki(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Za(e, t, o, r, l)) : (e = Vr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Gn, n(i, r) && e.ref === t.ref)
      return tt(e, t, l);
  }
  return t.flags |= 1, e = yt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Za(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Gn(o, r) && e.ref === t.ref)
      if (fe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (fe = !0);
      else
        return t.lanes = e.lanes, tt(e, t, l);
  }
  return Vo(e, t, n, r, l);
}
function Ja(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(tn, ve), ve |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, M(tn, ve), ve |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, M(tn, ve), ve |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, M(tn, ve), ve |= r;
  return ie(e, t, l, n), t.child;
}
function qa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Vo(e, t, n, r, l) {
  var o = pe(n) ? It : oe.current;
  return o = cn(t, o), un(t, l), n = Ii(e, t, n, r, o, l), r = Bi(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : (A && r && _i(t), t.flags |= 1, ie(e, t, n, l), t.child);
}
function Xu(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    nl(t);
  } else
    o = !1;
  if (un(t, l), t.stateNode === null)
    $r(e, t), Pa(t, n, r), Ho(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ne(c) : (c = pe(n) ? It : oe.current, c = cn(t, c));
    var p = n.getDerivedStateFromProps, v = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    v || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && ju(t, i, r, c), it = !1;
    var h = t.memoizedState;
    i.state = h, ul(t, r, i, l), s = t.memoizedState, u !== r || h !== s || de.current || it ? (typeof p == "function" && ($o(t, n, p, r), s = t.memoizedState), (u = it || Fu(t, n, u, r, h, s, c)) ? (v || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, _a(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : De(t.type, u), i.props = c, v = t.pendingProps, h = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ne(s) : (s = pe(n) ? It : oe.current, s = cn(t, s));
    var y = n.getDerivedStateFromProps;
    (p = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== v || h !== s) && ju(t, i, r, s), it = !1, h = t.memoizedState, i.state = h, ul(t, r, i, l);
    var w = t.memoizedState;
    u !== v || h !== w || de.current || it ? (typeof y == "function" && ($o(t, n, y, r), w = t.memoizedState), (c = it || Fu(t, n, c, r, h, w, s) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Wo(e, t, n, r, o, l);
}
function Wo(e, t, n, r, l, o) {
  qa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Ou(t, n, !1), tt(e, t, o);
  r = t.stateNode, Hd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = dn(t, e.child, null, o), t.child = dn(t, null, u, o)) : ie(e, t, u, o), t.memoizedState = r.state, l && Ou(t, n, !0), t.child;
}
function ba(e) {
  var t = e.stateNode;
  t.pendingContext ? Du(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Du(e, t.context, !1), Ri(e, t.containerInfo);
}
function Gu(e, t, n, r, l) {
  return fn(), Pi(l), t.flags |= 256, ie(e, t, n, r), t.child;
}
var Ko = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ec(e, t, n) {
  var r = t.pendingProps, l = F.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(F, l & 1), e === null)
    return jo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Tl(i, r, 0, null), e = Mt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Yo(n), t.memoizedState = Ko, e) : ji(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Qd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = yt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = yt(u, o) : (o = Mt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Yo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ko, r;
  }
  return o = e.child, e = o.sibling, r = yt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ji(e, t) {
  return t = Tl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Tr(e, t, n, r) {
  return r !== null && Pi(r), dn(t, e.child, null, n), e = ji(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Qd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = oo(Error(g(422))), Tr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Tl({ mode: "visible", children: r.children }, l, 0, null), o = Mt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && dn(t, e.child, null, i), t.child.memoizedState = Yo(i), t.memoizedState = Ko, o);
  if (!(t.mode & 1))
    return Tr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(g(419)), r = oo(o, r, void 0), Tr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, fe || u) {
    if (r = Z, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, et(e, l), Ae(r, e, l, -1));
    }
    return Wi(), r = oo(Error(g(421))), Tr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = np.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, me = ht(l.nextSibling), ge = t, A = !0, Me = null, e !== null && (Ce[Pe++] = Ge, Ce[Pe++] = Ze, Ce[Pe++] = Bt, Ge = e.id, Ze = e.overflow, Bt = t), t = ji(t, r.children), t.flags |= 4096, t);
}
function Zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Uo(e.return, t, n);
}
function io(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function tc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ie(e, t, r.children, n), r = F.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Zu(e, n, t);
          else if (e.tag === 19)
            Zu(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (M(F, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && sl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), io(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && sl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        io(t, !0, n, null, o);
        break;
      case "together":
        io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $r(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ft |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = yt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Vd(e, t, n) {
  switch (t.tag) {
    case 3:
      ba(t), fn();
      break;
    case 5:
      Na(t);
      break;
    case 1:
      pe(t.type) && nl(t);
      break;
    case 4:
      Ri(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      M(ol, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(F, F.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ec(e, t, n) : (M(F, F.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
      M(F, F.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return tc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(F, F.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ja(e, t, n);
  }
  return tt(e, t, n);
}
var nc, Xo, rc, lc;
nc = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Xo = function() {
};
rc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Dt(We.current);
    var o = null;
    switch (n) {
      case "input":
        l = mo(e, l), r = mo(e, r), o = [];
        break;
      case "select":
        l = U({}, l, { value: void 0 }), r = U({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = wo(e, l), r = wo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = el);
    }
    So(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Hn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              c,
              n
            )), n = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Hn.hasOwnProperty(c) ? (s != null && c === "onScroll" && I("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
lc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Wd(e, t, n) {
  var r = t.pendingProps;
  switch (Ci(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && tl(), re(t), null;
    case 3:
      return r = t.stateNode, pn(), B(de), B(oe), Oi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (ni(Me), Me = null))), Xo(e, t), re(t), null;
    case 5:
      Di(t);
      var l = Dt(er.current);
      if (n = t.type, e !== null && t.stateNode != null)
        rc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(g(166));
          return re(t), null;
        }
        if (e = Dt(We.current), Pr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[$e] = t, r[qn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++)
                I(Dn[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I(
                "error",
                r
              ), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              ou(r, o), I("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, I("invalid", r);
              break;
            case "textarea":
              uu(r, o), I("invalid", r);
          }
          So(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Cr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Cr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Hn.hasOwnProperty(i) && u != null && i === "onScroll" && I("scroll", r);
            }
          switch (n) {
            case "input":
              mr(r), iu(r, o, !0);
              break;
            case "textarea":
              mr(r), su(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = el);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Rs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[$e] = t, e[qn] = r, nc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Eo(n, r), n) {
              case "dialog":
                I("cancel", e), I("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++)
                  I(Dn[l], e);
                l = r;
                break;
              case "source":
                I("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                I(
                  "error",
                  e
                ), I("load", e), l = r;
                break;
              case "details":
                I("toggle", e), l = r;
                break;
              case "input":
                ou(e, r), l = mo(e, r), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = U({}, r, { value: void 0 }), I("invalid", e);
                break;
              case "textarea":
                uu(e, r), l = wo(e, r), I("invalid", e);
                break;
              default:
                l = r;
            }
            So(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Ms(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ds(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qn(e, s) : typeof s == "number" && Qn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Hn.hasOwnProperty(o) ? s != null && o === "onScroll" && I("scroll", e) : s != null && ai(e, o, s, i));
              }
            switch (n) {
              case "input":
                mr(e), iu(e, r, !1);
                break;
              case "textarea":
                mr(e), su(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? nn(e, !!r.multiple, o, !1) : r.defaultValue != null && nn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = el);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null)
        lc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(g(166));
        if (n = Dt(er.current), Dt(We.current), Pr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (o = r.nodeValue !== n) && (e = ge, e !== null))
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (B(F), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (A && me !== null && t.mode & 1 && !(t.flags & 128))
          Sa(), fn(), t.flags |= 98560, o = !1;
        else if (o = Pr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(g(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(g(317));
            o[$e] = t;
          } else
            fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), o = !1;
        } else
          Me !== null && (ni(Me), Me = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || F.current & 1 ? Y === 0 && (Y = 3) : Wi())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return pn(), Xo(e, t), e === null && Zn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return Ni(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && tl(), re(t), null;
    case 19:
      if (B(F), o = t.memoizedState, o === null)
        return re(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Tn(o, !1);
        else {
          if (Y !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = sl(e), i !== null) {
                for (t.flags |= 128, Tn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return M(F, F.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && V() > vn && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = sl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !A)
              return re(t), null;
          } else
            2 * V() - o.renderingStartTime > vn && n !== 1073741824 && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = V(), t.sibling = null, n = F.current, M(F, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Vi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function Kd(e, t) {
  switch (Ci(t), t.tag) {
    case 1:
      return pe(t.type) && tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return pn(), B(de), B(oe), Oi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Di(t), null;
    case 13:
      if (B(F), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(g(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return B(F), null;
    case 4:
      return pn(), null;
    case 10:
      return Ni(t.type._context), null;
    case 22:
    case 23:
      return Vi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1, le = !1, Yd = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function en(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        $(e, t, r);
      }
    else
      n.current = null;
}
function Go(e, t, n) {
  try {
    n();
  } catch (r) {
    $(e, t, r);
  }
}
var Ju = !1;
function Xd(e, t) {
  if (Do = Jr, e = sa(), Ei(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, c = 0, p = 0, v = e, h = null;
          t:
            for (; ; ) {
              for (var y; v !== n || l !== 0 && v.nodeType !== 3 || (u = i + l), v !== o || r !== 0 && v.nodeType !== 3 || (s = i + r), v.nodeType === 3 && (i += v.nodeValue.length), (y = v.firstChild) !== null; )
                h = v, v = y;
              for (; ; ) {
                if (v === e)
                  break t;
                if (h === n && ++c === l && (u = i), h === o && ++p === r && (s = i), (y = v.nextSibling) !== null)
                  break;
                v = h, h = v.parentNode;
              }
              v = y;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Oo = { focusedElem: e, selectionRange: n }, Jr = !1, S = t; S !== null; )
    if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, S = e;
    else
      for (; S !== null; ) {
        t = S;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps, O = w.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : De(t.type, k), O);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (m) {
          $(t, t.return, m);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, S = e;
          break;
        }
        S = t.return;
      }
  return w = Ju, Ju = !1, w;
}
function jn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Go(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Zo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function oc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, oc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[qn], delete t[Bo], delete t[zd], delete t[Rd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ic(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ic(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = el));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Jo(e, t, n), e = e.sibling; e !== null; )
      Jo(e, t, n), e = e.sibling;
}
function qo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (qo(e, t, n), e = e.sibling; e !== null; )
      qo(e, t, n), e = e.sibling;
}
var q = null, Oe = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; )
    uc(e, t, n), n = n.sibling;
}
function uc(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(gl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      le || en(n, t);
    case 6:
      var r = q, l = Oe;
      q = null, rt(e, t, n), q = r, Oe = l, q !== null && (Oe ? (e = q, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null && (Oe ? (e = q, n = n.stateNode, e.nodeType === 8 ? bl(e.parentNode, n) : e.nodeType === 1 && bl(e, n), Yn(e)) : bl(q, n.stateNode));
      break;
    case 4:
      r = q, l = Oe, q = n.stateNode.containerInfo, Oe = !0, rt(e, t, n), q = r, Oe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Go(n, t, i), l = l.next;
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (!le && (en(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          $(n, t, u);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, rt(e, t, n), le = r) : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yd()), t.forEach(function(r) {
      var l = rp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                q = u.stateNode, Oe = !1;
                break e;
              case 3:
                q = u.stateNode.containerInfo, Oe = !0;
                break e;
              case 4:
                q = u.stateNode.containerInfo, Oe = !0;
                break e;
            }
            u = u.return;
          }
        if (q === null)
          throw Error(g(160));
        uc(o, i, l), q = null, Oe = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        $(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      sc(t, e), t = t.sibling;
}
function sc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Re(t, e), je(e), r & 4) {
        try {
          jn(3, e, e.return), Pl(3, e);
        } catch (k) {
          $(e, e.return, k);
        }
        try {
          jn(5, e, e.return);
        } catch (k) {
          $(e, e.return, k);
        }
      }
      break;
    case 1:
      Re(t, e), je(e), r & 512 && n !== null && en(n, n.return);
      break;
    case 5:
      if (Re(t, e), je(e), r & 512 && n !== null && en(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (k) {
          $(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Ls(l, o), Eo(u, i);
            var c = Eo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i], v = s[i + 1];
              p === "style" ? Ms(l, v) : p === "dangerouslySetInnerHTML" ? Ds(l, v) : p === "children" ? Qn(l, v) : ai(l, p, v, c);
            }
            switch (u) {
              case "input":
                go(l, o);
                break;
              case "textarea":
                zs(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? nn(l, !!o.multiple, y, !1) : h !== !!o.multiple && (o.defaultValue != null ? nn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : nn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[qn] = o;
          } catch (k) {
            $(e, e.return, k);
          }
      }
      break;
    case 6:
      if (Re(t, e), je(e), r & 4) {
        if (e.stateNode === null)
          throw Error(g(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          $(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Re(t, e), je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Yn(t.containerInfo);
        } catch (k) {
          $(e, e.return, k);
        }
      break;
    case 4:
      Re(t, e), je(e);
      break;
    case 13:
      Re(t, e), je(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Hi = V())), r & 4 && bu(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (c = le) || p, Re(t, e), le = c) : Re(t, e), je(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1)
          for (S = e, p = e.child; p !== null; ) {
            for (v = S = p; S !== null; ) {
              switch (h = S, y = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jn(4, h, h.return);
                  break;
                case 1:
                  en(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      $(r, n, k);
                    }
                  }
                  break;
                case 5:
                  en(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ts(v);
                    continue;
                  }
              }
              y !== null ? (y.return = h, S = y) : ts(v);
            }
            p = p.sibling;
          }
        e:
          for (p = null, v = e; ; ) {
            if (v.tag === 5) {
              if (p === null) {
                p = v;
                try {
                  l = v.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = v.stateNode, s = v.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Os("display", i));
                } catch (k) {
                  $(e, e.return, k);
                }
              }
            } else if (v.tag === 6) {
              if (p === null)
                try {
                  v.stateNode.nodeValue = c ? "" : v.memoizedProps;
                } catch (k) {
                  $(e, e.return, k);
                }
            } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
              v.child.return = v, v = v.child;
              continue;
            }
            if (v === e)
              break e;
            for (; v.sibling === null; ) {
              if (v.return === null || v.return === e)
                break e;
              p === v && (p = null), v = v.return;
            }
            p === v && (p = null), v.sibling.return = v.return, v = v.sibling;
          }
      }
      break;
    case 19:
      Re(t, e), je(e), r & 4 && bu(e);
      break;
    case 21:
      break;
    default:
      Re(
        t,
        e
      ), je(e);
  }
}
function je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ic(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), r.flags &= -33);
          var o = qu(e);
          qo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = qu(e);
          Jo(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      $(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gd(e, t, n) {
  S = e, ac(e);
}
function ac(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Nr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || le;
        u = Nr;
        var c = le;
        if (Nr = i, (le = s) && !c)
          for (S = l; S !== null; )
            i = S, s = i.child, i.tag === 22 && i.memoizedState !== null ? ns(l) : s !== null ? (s.return = i, S = s) : ns(l);
        for (; o !== null; )
          S = o, ac(o), o = o.sibling;
        S = l, Nr = u, le = c;
      }
      es(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, S = o) : es(e);
  }
}
function es(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Au(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Au(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Yn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        le || t.flags & 512 && Zo(t);
      } catch (h) {
        $(t, t.return, h);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, S = n;
      break;
    }
    S = t.return;
  }
}
function ts(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, S = n;
      break;
    }
    S = t.return;
  }
}
function ns(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (s) {
            $(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              $(t, l, s);
            }
          }
          var o = t.return;
          try {
            Zo(t);
          } catch (s) {
            $(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Zo(t);
          } catch (s) {
            $(t, i, s);
          }
      }
    } catch (s) {
      $(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, S = u;
      break;
    }
    S = t.return;
  }
}
var Zd = Math.ceil, fl = nt.ReactCurrentDispatcher, Ui = nt.ReactCurrentOwner, Te = nt.ReactCurrentBatchConfig, R = 0, Z = null, W = null, ee = 0, ve = 0, tn = Et(0), Y = 0, lr = null, Ft = 0, xl = 0, $i = 0, Un = null, ce = null, Hi = 0, vn = 1 / 0, Ye = null, dl = !1, bo = null, mt = null, Lr = !1, ct = null, pl = 0, $n = 0, ei = null, Hr = -1, Qr = 0;
function ue() {
  return R & 6 ? V() : Hr !== -1 ? Hr : Hr = V();
}
function gt(e) {
  return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : Od.transition !== null ? (Qr === 0 && (Qr = Ks()), Qr) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bs(e.type)), e) : 1;
}
function Ae(e, t, n, r) {
  if (50 < $n)
    throw $n = 0, ei = null, Error(g(185));
  ur(e, n, r), (!(R & 2) || e !== Z) && (e === Z && (!(R & 2) && (xl |= n), Y === 4 && st(e, ee)), he(e, r), n === 1 && R === 0 && !(t.mode & 1) && (vn = V() + 500, El && _t()));
}
function he(e, t) {
  var n = e.callbackNode;
  Of(e, t);
  var r = Zr(e, e === Z ? ee : 0);
  if (r === 0)
    n !== null && fu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && fu(n), t === 1)
      e.tag === 0 ? Dd(rs.bind(null, e)) : ya(rs.bind(null, e)), Nd(function() {
        !(R & 6) && _t();
      }), n = null;
    else {
      switch (Ys(r)) {
        case 1:
          n = hi;
          break;
        case 4:
          n = Vs;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = Ws;
          break;
        default:
          n = Gr;
      }
      n = gc(n, cc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function cc(e, t) {
  if (Hr = -1, Qr = 0, R & 6)
    throw Error(g(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n)
    return null;
  var r = Zr(e, e === Z ? ee : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = hl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = dc();
    (Z !== e || ee !== t) && (Ye = null, vn = V() + 500, Ot(e, t));
    do
      try {
        bd();
        break;
      } catch (u) {
        fc(e, u);
      }
    while (1);
    Ti(), fl.current = o, R = l, W !== null ? t = 0 : (Z = null, ee = 0, t = Y);
  }
  if (t !== 0) {
    if (t === 2 && (l = To(e), l !== 0 && (r = l, t = ti(e, l))), t === 1)
      throw n = lr, Ot(e, 0), st(e, r), he(e, V()), n;
    if (t === 6)
      st(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Jd(l) && (t = hl(e, r), t === 2 && (o = To(e), o !== 0 && (r = o, t = ti(e, o))), t === 1))
        throw n = lr, Ot(e, 0), st(e, r), he(e, V()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          Lt(e, ce, Ye);
          break;
        case 3:
          if (st(e, r), (r & 130023424) === r && (t = Hi + 500 - V(), 10 < t)) {
            if (Zr(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Io(Lt.bind(null, e, ce, Ye), t);
            break;
          }
          Lt(e, ce, Ye);
          break;
        case 4:
          if (st(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Be(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = V() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Io(Lt.bind(null, e, ce, Ye), r);
            break;
          }
          Lt(e, ce, Ye);
          break;
        case 5:
          Lt(e, ce, Ye);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return he(e, V()), e.callbackNode === n ? cc.bind(null, e) : null;
}
function ti(e, t) {
  var n = Un;
  return e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256), e = hl(e, t), e !== 2 && (t = ce, ce = n, t !== null && ni(t)), e;
}
function ni(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function Jd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function st(e, t) {
  for (t &= ~$i, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Be(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function rs(e) {
  if (R & 6)
    throw Error(g(327));
  sn();
  var t = Zr(e, 0);
  if (!(t & 1))
    return he(e, V()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = To(e);
    r !== 0 && (t = r, n = ti(e, r));
  }
  if (n === 1)
    throw n = lr, Ot(e, 0), st(e, t), he(e, V()), n;
  if (n === 6)
    throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lt(e, ce, Ye), he(e, V()), null;
}
function Qi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (vn = V() + 500, El && _t());
  }
}
function jt(e) {
  ct !== null && ct.tag === 0 && !(R & 6) && sn();
  var t = R;
  R |= 1;
  var n = Te.transition, r = D;
  try {
    if (Te.transition = null, D = 1, e)
      return e();
  } finally {
    D = r, Te.transition = n, R = t, !(R & 6) && _t();
  }
}
function Vi() {
  ve = tn.current, B(tn);
}
function Ot(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Td(n)), W !== null)
    for (n = W.return; n !== null; ) {
      var r = n;
      switch (Ci(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && tl();
          break;
        case 3:
          pn(), B(de), B(oe), Oi();
          break;
        case 5:
          Di(r);
          break;
        case 4:
          pn();
          break;
        case 13:
          B(F);
          break;
        case 19:
          B(F);
          break;
        case 10:
          Ni(r.type._context);
          break;
        case 22:
        case 23:
          Vi();
      }
      n = n.return;
    }
  if (Z = e, W = e = yt(e.current, null), ee = ve = t, Y = 0, lr = null, $i = xl = Ft = 0, ce = Un = null, Rt !== null) {
    for (t = 0; t < Rt.length; t++)
      if (n = Rt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Rt = null;
  }
  return e;
}
function fc(e, t) {
  do {
    var n = W;
    try {
      if (Ti(), jr.current = cl, al) {
        for (var r = j.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        al = !1;
      }
      if (At = 0, G = K = j = null, Fn = !1, tr = 0, Ui.current = null, n === null || n.return === null) {
        Y = 1, lr = t, W = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ee, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, p = u, v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = p.alternate;
            h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var y = Vu(i);
          if (y !== null) {
            y.flags &= -257, Wu(y, i, u, o, t), y.mode & 1 && Qu(o, c, t), t = y, s = c;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else
              w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Qu(o, c, t), Wi();
              break e;
            }
            s = Error(g(426));
          }
        } else if (A && u.mode & 1) {
          var O = Vu(i);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Wu(O, i, u, o, t), Pi(hn(s, u));
            break e;
          }
        }
        o = s = hn(s, u), Y !== 4 && (Y = 2), Un === null ? Un = [o] : Un.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Xa(o, s, t);
              Bu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (mt === null || !mt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var m = Ga(o, u, t);
                Bu(o, m);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hc(n);
    } catch (E) {
      t = E, W === n && n !== null && (W = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function dc() {
  var e = fl.current;
  return fl.current = cl, e === null ? cl : e;
}
function Wi() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), Z === null || !(Ft & 268435455) && !(xl & 268435455) || st(Z, ee);
}
function hl(e, t) {
  var n = R;
  R |= 2;
  var r = dc();
  (Z !== e || ee !== t) && (Ye = null, Ot(e, t));
  do
    try {
      qd();
      break;
    } catch (l) {
      fc(e, l);
    }
  while (1);
  if (Ti(), R = n, fl.current = r, W !== null)
    throw Error(g(261));
  return Z = null, ee = 0, Y;
}
function qd() {
  for (; W !== null; )
    pc(W);
}
function bd() {
  for (; W !== null && !Cf(); )
    pc(W);
}
function pc(e) {
  var t = mc(e.alternate, e, ve);
  e.memoizedProps = e.pendingProps, t === null ? hc(e) : W = t, Ui.current = null;
}
function hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Kd(n, t), n !== null) {
        n.flags &= 32767, W = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, W = null;
        return;
      }
    } else if (n = Wd(n, t, ve), n !== null) {
      W = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      W = t;
      return;
    }
    W = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function Lt(e, t, n) {
  var r = D, l = Te.transition;
  try {
    Te.transition = null, D = 1, ep(e, t, n, r);
  } finally {
    Te.transition = l, D = r;
  }
  return null;
}
function ep(e, t, n, r) {
  do
    sn();
  while (ct !== null);
  if (R & 6)
    throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Mf(e, o), e === Z && (W = Z = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Lr || (Lr = !0, gc(Gr, function() {
    return sn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var i = D;
    D = 1;
    var u = R;
    R |= 4, Ui.current = null, Xd(e, n), sc(n, e), kd(Oo), Jr = !!Do, Oo = Do = null, e.current = n, Gd(n), Pf(), R = u, D = i, Te.transition = o;
  } else
    e.current = n;
  if (Lr && (Lr = !1, ct = e, pl = l), o = e.pendingLanes, o === 0 && (mt = null), Nf(n.stateNode), he(e, V()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (dl)
    throw dl = !1, e = bo, bo = null, e;
  return pl & 1 && e.tag !== 0 && sn(), o = e.pendingLanes, o & 1 ? e === ei ? $n++ : ($n = 0, ei = e) : $n = 0, _t(), null;
}
function sn() {
  if (ct !== null) {
    var e = Ys(pl), t = Te.transition, n = D;
    try {
      if (Te.transition = null, D = 16 > e ? 16 : e, ct === null)
        var r = !1;
      else {
        if (e = ct, ct = null, pl = 0, R & 6)
          throw Error(g(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var o = S, i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var p = S;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jn(8, p, o);
                  }
                  var v = p.child;
                  if (v !== null)
                    v.return = p, S = v;
                  else
                    for (; S !== null; ) {
                      p = S;
                      var h = p.sibling, y = p.return;
                      if (oc(p), p === c) {
                        S = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = y, S = h;
                        break;
                      }
                      S = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var O = k.sibling;
                    k.sibling = null, k = O;
                  } while (k !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, S = i;
          else
            e:
              for (; S !== null; ) {
                if (o = S, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jn(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, S = f;
                  break e;
                }
                S = o.return;
              }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, S = d;
          else
            e:
              for (i = a; S !== null; ) {
                if (u = S, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pl(9, u);
                    }
                  } catch (E) {
                    $(u, u.return, E);
                  }
                if (u === i) {
                  S = null;
                  break e;
                }
                var m = u.sibling;
                if (m !== null) {
                  m.return = u.return, S = m;
                  break e;
                }
                S = u.return;
              }
        }
        if (R = l, _t(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
          try {
            Ve.onPostCommitFiberRoot(gl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      D = n, Te.transition = t;
    }
  }
  return !1;
}
function ls(e, t, n) {
  t = hn(n, t), t = Xa(e, t, 1), e = vt(e, t, 1), t = ue(), e !== null && (ur(e, 1, t), he(e, t));
}
function $(e, t, n) {
  if (e.tag === 3)
    ls(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ls(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mt === null || !mt.has(r))) {
          e = hn(n, e), e = Ga(t, e, 1), t = vt(t, e, 1), e = ue(), t !== null && (ur(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function tp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, Z === e && (ee & n) === n && (Y === 4 || Y === 3 && (ee & 130023424) === ee && 500 > V() - Hi ? Ot(e, 0) : $i |= n), he(e, t);
}
function vc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ue();
  e = et(e, t), e !== null && (ur(e, t, n), he(e, n));
}
function np(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), vc(e, n);
}
function rp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), vc(e, n);
}
var mc;
mc = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current)
      fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return fe = !1, Vd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else
    fe = !1, A && t.flags & 1048576 && wa(t, ll, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $r(e, t), e = t.pendingProps;
      var l = cn(t, oe.current);
      un(t, n), l = Ii(null, t, r, e, l, n);
      var o = Bi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = !0, nl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, zi(t), l.updater = _l, t.stateNode = l, l._reactInternals = t, Ho(t, r, e, n), t = Wo(null, t, r, !0, o, n)) : (t.tag = 0, A && o && _i(t), ie(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($r(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = op(r), e = De(r, e), l) {
          case 0:
            t = Vo(null, t, r, e, n);
            break e;
          case 1:
            t = Xu(null, t, r, e, n);
            break e;
          case 11:
            t = Ku(null, t, r, e, n);
            break e;
          case 14:
            t = Yu(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(g(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Vo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Xu(e, t, r, l, n);
    case 3:
      e: {
        if (ba(t), e === null)
          throw Error(g(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, _a(e, t), ul(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = hn(Error(g(423)), t), t = Gu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = hn(Error(g(424)), t), t = Gu(e, t, r, n, l);
            break e;
          } else
            for (me = ht(t.stateNode.containerInfo.firstChild), ge = t, A = !0, Me = null, n = Ta(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fn(), r === l) {
            t = tt(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Na(t), e === null && jo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Mo(r, l) ? i = null : o !== null && Mo(r, o) && (t.flags |= 32), qa(e, t), ie(e, t, i, n), t.child;
    case 6:
      return e === null && jo(t), null;
    case 13:
      return ec(e, t, n);
    case 4:
      return Ri(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = dn(t, null, r, n) : ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Ku(e, t, r, l, n);
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, M(ol, r._currentValue), r._currentValue = i, o !== null)
          if (Fe(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = tt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = Je(-1, n & -n), s.tag = 2;
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null ? s.next = s : (s.next = p.next, p.next = s), c.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Uo(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(g(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Uo(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ie(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, un(t, n), l = Ne(l), r = r(l), t.flags |= 1, ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = De(r, t.pendingProps), l = De(r.type, l), Yu(e, t, r, l, n);
    case 15:
      return Za(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), $r(e, t), t.tag = 1, pe(r) ? (e = !0, nl(t)) : e = !1, un(t, n), Pa(t, r, l), Ho(t, r, l, n), Wo(null, t, r, !0, e, n);
    case 19:
      return tc(e, t, n);
    case 22:
      return Ja(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function gc(e, t) {
  return Qs(e, t);
}
function lp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, t, n, r) {
  return new lp(e, t, n, r);
}
function Ki(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function op(e) {
  if (typeof e == "function")
    return Ki(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fi)
      return 11;
    if (e === di)
      return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return n === null ? (n = xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Vr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Ki(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case Wt:
          return Mt(n.children, l, o, t);
        case ci:
          i = 8, l |= 8;
          break;
        case fo:
          return e = xe(12, n, t, l | 2), e.elementType = fo, e.lanes = o, e;
        case po:
          return e = xe(13, n, t, l), e.elementType = po, e.lanes = o, e;
        case ho:
          return e = xe(19, n, t, l), e.elementType = ho, e.lanes = o, e;
        case xs:
          return Tl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Cs:
                i = 10;
                break e;
              case Ps:
                i = 9;
                break e;
              case fi:
                i = 11;
                break e;
              case di:
                i = 14;
                break e;
              case ot:
                i = 16, r = null;
                break e;
            }
          throw Error(g(130, e == null ? e : typeof e, ""));
      }
  return t = xe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Mt(e, t, n, r) {
  return e = xe(7, e, r, t), e.lanes = n, e;
}
function Tl(e, t, n, r) {
  return e = xe(22, e, r, t), e.elementType = xs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function uo(e, t, n) {
  return e = xe(6, e, null, t), e.lanes = n, e;
}
function so(e, t, n) {
  return t = xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ip(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hl(0), this.expirationTimes = Hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Yi(e, t, n, r, l, o, i, u, s) {
  return e = new ip(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = xe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zi(o), e;
}
function up(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function yc(e) {
  if (!e)
    return kt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1)
      throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n))
      return ga(e, n, t);
  }
  return t;
}
function wc(e, t, n, r, l, o, i, u, s) {
  return e = Yi(n, r, !0, e, l, o, i, u, s), e.context = yc(null), n = e.current, r = ue(), l = gt(n), o = Je(r, l), o.callback = t ?? null, vt(n, o, l), e.current.lanes = l, ur(e, l, r), he(e, r), e;
}
function Nl(e, t, n, r) {
  var l = t.current, o = ue(), i = gt(l);
  return n = yc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Je(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = vt(l, t, i), e !== null && (Ae(e, l, i, o), Fr(e, l, i)), i;
}
function vl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function os(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xi(e, t) {
  os(e, t), (e = e.alternate) && os(e, t);
}
function sp() {
  return null;
}
var kc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Gi(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Gi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(g(409));
  Nl(e, t, null, null);
};
Ll.prototype.unmount = Gi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jt(function() {
      Nl(null, e, null, null);
    }), t[be] = null;
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Zs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++)
      ;
    ut.splice(n, 0, e), n === 0 && qs(e);
  }
};
function Zi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function is() {
}
function ap(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = vl(i);
        o.call(c);
      };
    }
    var i = wc(t, r, e, 0, null, !1, !1, "", is);
    return e._reactRootContainer = i, e[be] = i.current, Zn(e.nodeType === 8 ? e.parentNode : e), jt(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = vl(s);
      u.call(c);
    };
  }
  var s = Yi(e, 0, !1, null, null, !1, !1, "", is);
  return e._reactRootContainer = s, e[be] = s.current, Zn(e.nodeType === 8 ? e.parentNode : e), jt(function() {
    Nl(t, s, n, r);
  }), s;
}
function Rl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = vl(i);
        u.call(s);
      };
    }
    Nl(t, i, e, l);
  } else
    i = ap(n, t, e, l, r);
  return vl(i);
}
Xs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rn(t.pendingLanes);
        n !== 0 && (vi(t, n | 1), he(t, V()), !(R & 6) && (vn = V() + 500, _t()));
      }
      break;
    case 13:
      jt(function() {
        var r = et(e, 1);
        if (r !== null) {
          var l = ue();
          Ae(r, e, 1, l);
        }
      }), Xi(e, 1);
  }
};
mi = function(e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = ue();
      Ae(t, e, 134217728, n);
    }
    Xi(e, 134217728);
  }
};
Gs = function(e) {
  if (e.tag === 13) {
    var t = gt(e), n = et(e, t);
    if (n !== null) {
      var r = ue();
      Ae(n, e, t, r);
    }
    Xi(e, t);
  }
};
Zs = function() {
  return D;
};
Js = function(e, t) {
  var n = D;
  try {
    return D = e, t();
  } finally {
    D = n;
  }
};
Co = function(e, t, n) {
  switch (t) {
    case "input":
      if (go(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l)
              throw Error(g(90));
            Ns(r), go(r, l);
          }
        }
      }
      break;
    case "textarea":
      zs(e, n);
      break;
    case "select":
      t = n.value, t != null && nn(e, !!n.multiple, t, !1);
  }
};
As = Qi;
Fs = jt;
var cp = { usingClientEntryPoint: !1, Events: [ar, Gt, Sl, Is, Bs, Qi] }, Nn = { findFiberByHostInstance: zt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, fp = { bundleType: Nn.bundleType, version: Nn.version, rendererPackageName: Nn.rendererPackageName, rendererConfig: Nn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: nt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $s(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Nn.findFiberByHostInstance || sp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      gl = zr.inject(fp), Ve = zr;
    } catch {
    }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cp;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zi(t))
    throw Error(g(200));
  return up(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Zi(e))
    throw Error(g(299));
  var n = !1, r = "", l = kc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Yi(e, 1, !1, null, null, n, !1, r, l), e[be] = t.current, Zn(e.nodeType === 8 ? e.parentNode : e), new Gi(t);
};
we.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = $s(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return jt(e);
};
we.hydrate = function(e, t, n) {
  if (!zl(t))
    throw Error(g(200));
  return Rl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Zi(e))
    throw Error(g(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = kc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = wc(t, null, e, 1, n ?? null, l, !1, o, i), e[be] = t.current, Zn(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Ll(t);
};
we.render = function(e, t, n) {
  if (!zl(t))
    throw Error(g(200));
  return Rl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!zl(e))
    throw Error(g(40));
  return e._reactRootContainer ? (jt(function() {
    Rl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[be] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Qi;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zl(n))
    throw Error(g(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(g(38));
  return Rl(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function Sc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc);
    } catch (e) {
      console.error(e);
    }
}
Sc(), ws.exports = we;
var dp = ws.exports, us = dp;
ao.createRoot = us.createRoot, ao.hydrateRoot = us.hydrateRoot;
var Ec = {}, _c = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
}, pp = _c;
function Cc(e) {
  this.mode = pp.MODE_8BIT_BYTE, this.data = e;
}
Cc.prototype = {
  getLength: function(e) {
    return this.data.length;
  },
  write: function(e) {
    for (var t = 0; t < this.data.length; t++)
      e.put(this.data.charCodeAt(t), 8);
  }
};
var hp = Cc, Pc = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}, Rr = Pc;
function He(e, t) {
  this.totalCount = e, this.dataCount = t;
}
He.RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H
  // 1
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  // 2
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  // 3
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  // 4		
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  // 5
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  // 6
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  // 7		
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  // 8
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  // 9
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  // 10		
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  // 11
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  // 12
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  // 13
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  // 14
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  // 15
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  // 16
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  // 17
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  // 18
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  // 19
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  // 20
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  // 21
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  // 22
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  // 23
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  // 24
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  // 25
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  // 26
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  // 27
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  // 28
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  // 29
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  // 30
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  // 31
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  // 32
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  // 33
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  // 34
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  // 35
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  // 36
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  // 37
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  // 38
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  // 39
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  // 40
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16]
];
He.getRSBlocks = function(e, t) {
  var n = He.getRsBlockTable(e, t);
  if (n == null)
    throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
  for (var r = n.length / 3, l = new Array(), o = 0; o < r; o++)
    for (var i = n[o * 3 + 0], u = n[o * 3 + 1], s = n[o * 3 + 2], c = 0; c < i; c++)
      l.push(new He(u, s));
  return l;
};
He.getRsBlockTable = function(e, t) {
  switch (t) {
    case Rr.L:
      return He.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
    case Rr.M:
      return He.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
    case Rr.Q:
      return He.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
    case Rr.H:
      return He.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var vp = He;
function xc() {
  this.buffer = new Array(), this.length = 0;
}
xc.prototype = {
  get: function(e) {
    var t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
  },
  put: function(e, t) {
    for (var n = 0; n < t; n++)
      this.putBit((e >>> t - n - 1 & 1) == 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(e) {
    var t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var mp = xc, Ie = {
  glog: function(e) {
    if (e < 1)
      throw new Error("glog(" + e + ")");
    return Ie.LOG_TABLE[e];
  },
  gexp: function(e) {
    for (; e < 0; )
      e += 255;
    for (; e >= 256; )
      e -= 255;
    return Ie.EXP_TABLE[e];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
};
for (var b = 0; b < 8; b++)
  Ie.EXP_TABLE[b] = 1 << b;
for (var b = 8; b < 256; b++)
  Ie.EXP_TABLE[b] = Ie.EXP_TABLE[b - 4] ^ Ie.EXP_TABLE[b - 5] ^ Ie.EXP_TABLE[b - 6] ^ Ie.EXP_TABLE[b - 8];
for (var b = 0; b < 255; b++)
  Ie.LOG_TABLE[Ie.EXP_TABLE[b]] = b;
var Tc = Ie, Tt = Tc;
function Wr(e, t) {
  if (e.length == null)
    throw new Error(e.length + "/" + t);
  for (var n = 0; n < e.length && e[n] == 0; )
    n++;
  this.num = new Array(e.length - n + t);
  for (var r = 0; r < e.length - n; r++)
    this.num[r] = e[r + n];
}
Wr.prototype = {
  get: function(e) {
    return this.num[e];
  },
  getLength: function() {
    return this.num.length;
  },
  multiply: function(e) {
    for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
      for (var r = 0; r < e.getLength(); r++)
        t[n + r] ^= Tt.gexp(Tt.glog(this.get(n)) + Tt.glog(e.get(r)));
    return new Wr(t, 0);
  },
  mod: function(e) {
    if (this.getLength() - e.getLength() < 0)
      return this;
    for (var t = Tt.glog(this.get(0)) - Tt.glog(e.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++)
      n[r] = this.get(r);
    for (var r = 0; r < e.getLength(); r++)
      n[r] ^= Tt.gexp(Tt.glog(e.get(r)) + t);
    return new Wr(n, 0).mod(e);
  }
};
var Nc = Wr, Ee = _c, ss = Nc, gp = Tc, lt = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}, J = {
  PATTERN_POSITION_TABLE: [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]
  ],
  G15: 1335,
  G18: 7973,
  G15_MASK: 21522,
  getBCHTypeInfo: function(e) {
    for (var t = e << 10; J.getBCHDigit(t) - J.getBCHDigit(J.G15) >= 0; )
      t ^= J.G15 << J.getBCHDigit(t) - J.getBCHDigit(J.G15);
    return (e << 10 | t) ^ J.G15_MASK;
  },
  getBCHTypeNumber: function(e) {
    for (var t = e << 12; J.getBCHDigit(t) - J.getBCHDigit(J.G18) >= 0; )
      t ^= J.G18 << J.getBCHDigit(t) - J.getBCHDigit(J.G18);
    return e << 12 | t;
  },
  getBCHDigit: function(e) {
    for (var t = 0; e != 0; )
      t++, e >>>= 1;
    return t;
  },
  getPatternPosition: function(e) {
    return J.PATTERN_POSITION_TABLE[e - 1];
  },
  getMask: function(e, t, n) {
    switch (e) {
      case lt.PATTERN000:
        return (t + n) % 2 == 0;
      case lt.PATTERN001:
        return t % 2 == 0;
      case lt.PATTERN010:
        return n % 3 == 0;
      case lt.PATTERN011:
        return (t + n) % 3 == 0;
      case lt.PATTERN100:
        return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
      case lt.PATTERN101:
        return t * n % 2 + t * n % 3 == 0;
      case lt.PATTERN110:
        return (t * n % 2 + t * n % 3) % 2 == 0;
      case lt.PATTERN111:
        return (t * n % 3 + (t + n) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + e);
    }
  },
  getErrorCorrectPolynomial: function(e) {
    for (var t = new ss([1], 0), n = 0; n < e; n++)
      t = t.multiply(new ss([1, gp.gexp(n)], 0));
    return t;
  },
  getLengthInBits: function(e, t) {
    if (1 <= t && t < 10)
      switch (e) {
        case Ee.MODE_NUMBER:
          return 10;
        case Ee.MODE_ALPHA_NUM:
          return 9;
        case Ee.MODE_8BIT_BYTE:
          return 8;
        case Ee.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + e);
      }
    else if (t < 27)
      switch (e) {
        case Ee.MODE_NUMBER:
          return 12;
        case Ee.MODE_ALPHA_NUM:
          return 11;
        case Ee.MODE_8BIT_BYTE:
          return 16;
        case Ee.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + e);
      }
    else if (t < 41)
      switch (e) {
        case Ee.MODE_NUMBER:
          return 14;
        case Ee.MODE_ALPHA_NUM:
          return 13;
        case Ee.MODE_8BIT_BYTE:
          return 16;
        case Ee.MODE_KANJI:
          return 12;
        default:
          throw new Error("mode:" + e);
      }
    else
      throw new Error("type:" + t);
  },
  getLostPoint: function(e) {
    for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
      for (var l = 0; l < t; l++) {
        for (var o = 0, i = e.isDark(r, l), u = -1; u <= 1; u++)
          if (!(r + u < 0 || t <= r + u))
            for (var s = -1; s <= 1; s++)
              l + s < 0 || t <= l + s || u == 0 && s == 0 || i == e.isDark(r + u, l + s) && o++;
        o > 5 && (n += 3 + o - 5);
      }
    for (var r = 0; r < t - 1; r++)
      for (var l = 0; l < t - 1; l++) {
        var c = 0;
        e.isDark(r, l) && c++, e.isDark(r + 1, l) && c++, e.isDark(r, l + 1) && c++, e.isDark(r + 1, l + 1) && c++, (c == 0 || c == 4) && (n += 3);
      }
    for (var r = 0; r < t; r++)
      for (var l = 0; l < t - 6; l++)
        e.isDark(r, l) && !e.isDark(r, l + 1) && e.isDark(r, l + 2) && e.isDark(r, l + 3) && e.isDark(r, l + 4) && !e.isDark(r, l + 5) && e.isDark(r, l + 6) && (n += 40);
    for (var l = 0; l < t; l++)
      for (var r = 0; r < t - 6; r++)
        e.isDark(r, l) && !e.isDark(r + 1, l) && e.isDark(r + 2, l) && e.isDark(r + 3, l) && e.isDark(r + 4, l) && !e.isDark(r + 5, l) && e.isDark(r + 6, l) && (n += 40);
    for (var p = 0, l = 0; l < t; l++)
      for (var r = 0; r < t; r++)
        e.isDark(r, l) && p++;
    var v = Math.abs(100 * p / t / t - 50) / 5;
    return n += v * 10, n;
  }
}, yp = J, wp = hp, Lc = vp, zc = mp, Ct = yp, kp = Nc;
function Qe(e, t) {
  this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
var Se = Qe.prototype;
Se.addData = function(e) {
  var t = new wp(e);
  this.dataList.push(t), this.dataCache = null;
};
Se.isDark = function(e, t) {
  if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
    throw new Error(e + "," + t);
  return this.modules[e][t];
};
Se.getModuleCount = function() {
  return this.moduleCount;
};
Se.make = function() {
  if (this.typeNumber < 1) {
    var e = 1;
    for (e = 1; e < 40; e++) {
      for (var t = Lc.getRSBlocks(e, this.errorCorrectLevel), n = new zc(), r = 0, l = 0; l < t.length; l++)
        r += t[l].dataCount;
      for (var l = 0; l < this.dataList.length; l++) {
        var o = this.dataList[l];
        n.put(o.mode, 4), n.put(o.getLength(), Ct.getLengthInBits(o.mode, e)), o.write(n);
      }
      if (n.getLengthInBits() <= r * 8)
        break;
    }
    this.typeNumber = e;
  }
  this.makeImpl(!1, this.getBestMaskPattern());
};
Se.makeImpl = function(e, t) {
  this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
  for (var n = 0; n < this.moduleCount; n++) {
    this.modules[n] = new Array(this.moduleCount);
    for (var r = 0; r < this.moduleCount; r++)
      this.modules[n][r] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), this.dataCache == null && (this.dataCache = Qe.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t);
};
Se.setupPositionProbePattern = function(e, t) {
  for (var n = -1; n <= 7; n++)
    if (!(e + n <= -1 || this.moduleCount <= e + n))
      for (var r = -1; r <= 7; r++)
        t + r <= -1 || this.moduleCount <= t + r || (0 <= n && n <= 6 && (r == 0 || r == 6) || 0 <= r && r <= 6 && (n == 0 || n == 6) || 2 <= n && n <= 4 && 2 <= r && r <= 4 ? this.modules[e + n][t + r] = !0 : this.modules[e + n][t + r] = !1);
};
Se.getBestMaskPattern = function() {
  for (var e = 0, t = 0, n = 0; n < 8; n++) {
    this.makeImpl(!0, n);
    var r = Ct.getLostPoint(this);
    (n == 0 || e > r) && (e = r, t = n);
  }
  return t;
};
Se.createMovieClip = function(e, t, n) {
  var r = e.createEmptyMovieClip(t, n), l = 1;
  this.make();
  for (var o = 0; o < this.modules.length; o++)
    for (var i = o * l, u = 0; u < this.modules[o].length; u++) {
      var s = u * l, c = this.modules[o][u];
      c && (r.beginFill(0, 100), r.moveTo(s, i), r.lineTo(s + l, i), r.lineTo(s + l, i + l), r.lineTo(s, i + l), r.endFill());
    }
  return r;
};
Se.setupTimingPattern = function() {
  for (var e = 8; e < this.moduleCount - 8; e++)
    this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
  for (var t = 8; t < this.moduleCount - 8; t++)
    this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0);
};
Se.setupPositionAdjustPattern = function() {
  for (var e = Ct.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
    for (var n = 0; n < e.length; n++) {
      var r = e[t], l = e[n];
      if (this.modules[r][l] == null)
        for (var o = -2; o <= 2; o++)
          for (var i = -2; i <= 2; i++)
            o == -2 || o == 2 || i == -2 || i == 2 || o == 0 && i == 0 ? this.modules[r + o][l + i] = !0 : this.modules[r + o][l + i] = !1;
    }
};
Se.setupTypeNumber = function(e) {
  for (var t = Ct.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
    var r = !e && (t >> n & 1) == 1;
    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r;
  }
  for (var n = 0; n < 18; n++) {
    var r = !e && (t >> n & 1) == 1;
    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r;
  }
};
Se.setupTypeInfo = function(e, t) {
  for (var n = this.errorCorrectLevel << 3 | t, r = Ct.getBCHTypeInfo(n), l = 0; l < 15; l++) {
    var o = !e && (r >> l & 1) == 1;
    l < 6 ? this.modules[l][8] = o : l < 8 ? this.modules[l + 1][8] = o : this.modules[this.moduleCount - 15 + l][8] = o;
  }
  for (var l = 0; l < 15; l++) {
    var o = !e && (r >> l & 1) == 1;
    l < 8 ? this.modules[8][this.moduleCount - l - 1] = o : l < 9 ? this.modules[8][15 - l - 1 + 1] = o : this.modules[8][15 - l - 1] = o;
  }
  this.modules[this.moduleCount - 8][8] = !e;
};
Se.mapData = function(e, t) {
  for (var n = -1, r = this.moduleCount - 1, l = 7, o = 0, i = this.moduleCount - 1; i > 0; i -= 2)
    for (i == 6 && i--; ; ) {
      for (var u = 0; u < 2; u++)
        if (this.modules[r][i - u] == null) {
          var s = !1;
          o < e.length && (s = (e[o] >>> l & 1) == 1);
          var c = Ct.getMask(t, r, i - u);
          c && (s = !s), this.modules[r][i - u] = s, l--, l == -1 && (o++, l = 7);
        }
      if (r += n, r < 0 || this.moduleCount <= r) {
        r -= n, n = -n;
        break;
      }
    }
};
Qe.PAD0 = 236;
Qe.PAD1 = 17;
Qe.createData = function(e, t, n) {
  for (var r = Lc.getRSBlocks(e, t), l = new zc(), o = 0; o < n.length; o++) {
    var i = n[o];
    l.put(i.mode, 4), l.put(i.getLength(), Ct.getLengthInBits(i.mode, e)), i.write(l);
  }
  for (var u = 0, o = 0; o < r.length; o++)
    u += r[o].dataCount;
  if (l.getLengthInBits() > u * 8)
    throw new Error("code length overflow. (" + l.getLengthInBits() + ">" + u * 8 + ")");
  for (l.getLengthInBits() + 4 <= u * 8 && l.put(0, 4); l.getLengthInBits() % 8 != 0; )
    l.putBit(!1);
  for (; !(l.getLengthInBits() >= u * 8 || (l.put(Qe.PAD0, 8), l.getLengthInBits() >= u * 8)); )
    l.put(Qe.PAD1, 8);
  return Qe.createBytes(l, r);
};
Qe.createBytes = function(e, t) {
  for (var n = 0, r = 0, l = 0, o = new Array(t.length), i = new Array(t.length), u = 0; u < t.length; u++) {
    var s = t[u].dataCount, c = t[u].totalCount - s;
    r = Math.max(r, s), l = Math.max(l, c), o[u] = new Array(s);
    for (var p = 0; p < o[u].length; p++)
      o[u][p] = 255 & e.buffer[p + n];
    n += s;
    var v = Ct.getErrorCorrectPolynomial(c), h = new kp(o[u], v.getLength() - 1), y = h.mod(v);
    i[u] = new Array(v.getLength() - 1);
    for (var p = 0; p < i[u].length; p++) {
      var w = p + y.getLength() - i[u].length;
      i[u][p] = w >= 0 ? y.get(w) : 0;
    }
  }
  for (var k = 0, p = 0; p < t.length; p++)
    k += t[p].totalCount;
  for (var O = new Array(k), f = 0, p = 0; p < r; p++)
    for (var u = 0; u < t.length; u++)
      p < o[u].length && (O[f++] = o[u][p]);
  for (var p = 0; p < l; p++)
    for (var u = 0; u < t.length; u++)
      p < i[u].length && (O[f++] = i[u][p]);
  return O;
};
var Sp = Qe, Rc = { exports: {} }, Ep = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", _p = Ep, Cp = _p;
function Dc() {
}
function Oc() {
}
Oc.resetWarningCache = Dc;
var Pp = function() {
  function e(r, l, o, i, u, s) {
    if (s !== Cp) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw c.name = "Invariant Violation", c;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Oc,
    resetWarningCache: Dc
  };
  return n.PropTypes = n, n;
};
Rc.exports = Pp();
var Mc = Rc.exports, Ji = {};
Object.defineProperty(Ji, "__esModule", {
  value: !0
});
var xp = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
}, Tp = Mc, _e = Bc(Tp), Ic = ir, Dr = Bc(Ic);
function Bc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Np(e, t) {
  var n = {};
  for (var r in e)
    t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
var Lp = {
  bgColor: _e.default.oneOfType([_e.default.object, _e.default.string]).isRequired,
  bgD: _e.default.string.isRequired,
  fgColor: _e.default.oneOfType([_e.default.object, _e.default.string]).isRequired,
  fgD: _e.default.string.isRequired,
  size: _e.default.number.isRequired,
  title: _e.default.string,
  viewBoxSize: _e.default.number.isRequired,
  xmlns: _e.default.string
}, zp = {
  title: void 0,
  xmlns: "http://www.w3.org/2000/svg"
}, Dl = (0, Ic.forwardRef)(function(e, t) {
  var n = e.bgColor, r = e.bgD, l = e.fgD, o = e.fgColor, i = e.size, u = e.title, s = e.viewBoxSize, c = Np(e, ["bgColor", "bgD", "fgD", "fgColor", "size", "title", "viewBoxSize"]);
  return Dr.default.createElement(
    "svg",
    xp({}, c, { height: i, ref: t, viewBox: "0 0 " + s + " " + s, width: i }),
    u ? Dr.default.createElement(
      "title",
      null,
      u
    ) : null,
    Dr.default.createElement("path", { d: r, fill: n }),
    Dr.default.createElement("path", { d: l, fill: o })
  );
});
Dl.displayName = "QRCodeSvg";
Dl.propTypes = Lp;
Dl.defaultProps = zp;
Ji.default = Dl;
Object.defineProperty(Ec, "__esModule", {
  value: !0
});
var Rp = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
}, Dp = Sp, Op = fr(Dp), Mp = Pc, Ip = fr(Mp), Bp = Mc, Ke = fr(Bp), Ac = ir, Ap = fr(Ac), Fp = Ji, jp = fr(Fp);
function fr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Up(e, t) {
  var n = {};
  for (var r in e)
    t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
var $p = {
  bgColor: Ke.default.oneOfType([Ke.default.object, Ke.default.string]),
  fgColor: Ke.default.oneOfType([Ke.default.object, Ke.default.string]),
  level: Ke.default.string,
  size: Ke.default.number,
  value: Ke.default.string.isRequired
}, Hp = {
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  level: "L",
  size: 256
}, Ol = (0, Ac.forwardRef)(function(e, t) {
  var n = e.bgColor, r = e.fgColor, l = e.level, o = e.size, i = e.value, u = Up(e, ["bgColor", "fgColor", "level", "size", "value"]), s = new Op.default(-1, Ip.default[l]);
  s.addData(i), s.make();
  var c = s.modules;
  return Ap.default.createElement(jp.default, Rp({}, u, {
    bgColor: n,
    bgD: c.map(function(p, v) {
      return p.map(function(h, y) {
        return h ? "" : "M " + y + " " + v + " l 1 0 0 1 -1 0 Z";
      }).join(" ");
    }).join(" "),
    fgColor: r,
    fgD: c.map(function(p, v) {
      return p.map(function(h, y) {
        return h ? "M " + y + " " + v + " l 1 0 0 1 -1 0 Z" : "";
      }).join(" ");
    }).join(" "),
    ref: t,
    size: o,
    viewBoxSize: c.length
  }));
});
Ol.displayName = "QRCode";
Ol.propTypes = $p;
Ol.defaultProps = Hp;
var Qp = Ec.default = Ol;
function Vp() {
  return /* @__PURE__ */ Qt.jsxs(Qt.Fragment, { children: [
    /* @__PURE__ */ Qt.jsx("h1", { children: "Hello Anywidget + Vite!" }),
    ";",
    /* @__PURE__ */ Qt.jsx(Qp, { value: "Heyyyhoo" })
  ] });
}
function Wp({ model: e, el: t }) {
  let n = ao.createRoot(t);
  return n.render(
    /* @__PURE__ */ Qt.jsx(tf.StrictMode, { children: /* @__PURE__ */ Qt.jsx(Vp, {}) })
  ), () => n.unmount();
}
export {
  Wp as render
};