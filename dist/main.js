(() => {
  "use strict";
  var e = {
    n: (t) => {
      var n = t && t.__esModule ? () => t.default : () => t;
      return e.d(n, { a: n }), n;
    },
    d: (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  const t = react;
  prop, types;
  var n = e.n(t)().createContext(null),
    r = function (e) {
      e();
    },
    u = function () {
      return r;
    },
    s = { notify: function () {} },
    i = (function () {
      function e(e, t) {
        (this.store = e),
          (this.parentSub = t),
          (this.unsubscribe = null),
          (this.listeners = s),
          (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
      }
      var t = e.prototype;
      return (
        (t.addNestedSub = function (e) {
          return this.trySubscribe(), this.listeners.subscribe(e);
        }),
        (t.notifyNestedSubs = function () {
          this.listeners.notify();
        }),
        (t.handleChangeWrapper = function () {
          this.onStateChange && this.onStateChange();
        }),
        (t.isSubscribed = function () {
          return Boolean(this.unsubscribe);
        }),
        (t.trySubscribe = function () {
          this.unsubscribe ||
            ((this.unsubscribe = this.parentSub
              ? this.parentSub.addNestedSub(this.handleChangeWrapper)
              : this.store.subscribe(this.handleChangeWrapper)),
            (this.listeners = (function () {
              var e = u(),
                t = null,
                n = null;
              return {
                clear: function () {
                  (t = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var r = !0,
                    u = (n = { callback: e, next: null, prev: n });
                  return (
                    u.prev ? (u.prev.next = u) : (t = u),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        u.next ? (u.next.prev = u.prev) : (n = u.prev),
                        u.prev ? (u.prev.next = u.next) : (t = u.next));
                    }
                  );
                },
              };
            })()));
        }),
        (t.tryUnsubscribe = function () {
          this.unsubscribe &&
            (this.unsubscribe(),
            (this.unsubscribe = null),
            this.listeners.clear(),
            (this.listeners = s));
        }),
        e
      );
    })(),
    c =
      "undefined" != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
        ? t.useLayoutEffect
        : t.useEffect;
  function o() {
    return (0, t.useContext)(n);
  }
  hoist, non, react, statics, react, is;
  var a = function (e, t) {
    return e === t;
  };
  function f(e) {
    void 0 === e && (e = n);
    var r =
      e === n
        ? o
        : function () {
            return (0, t.useContext)(e);
          };
    return function (e, n) {
      void 0 === n && (n = a);
      var u = r(),
        s = (function (e, n, r, u) {
          var s,
            o = (0, t.useReducer)(function (e) {
              return e + 1;
            }, 0)[1],
            a = (0, t.useMemo)(
              function () {
                return new i(r, u);
              },
              [r, u]
            ),
            f = (0, t.useRef)(),
            b = (0, t.useRef)(),
            h = (0, t.useRef)(),
            l = (0, t.useRef)(),
            d = r.getState();
          try {
            if (e !== b.current || d !== h.current || f.current) {
              var p = e(d);
              s = void 0 !== l.current && n(p, l.current) ? l.current : p;
            } else s = l.current;
          } catch (e) {
            throw (
              (f.current &&
                (e.message +=
                  "\nThe error may be correlated with this previous error:\n" +
                  f.current.stack +
                  "\n\n"),
              e)
            );
          }
          return (
            c(function () {
              (b.current = e),
                (h.current = d),
                (l.current = s),
                (f.current = void 0);
            }),
            c(
              function () {
                function e() {
                  try {
                    var e = r.getState(),
                      t = b.current(e);
                    if (n(t, l.current)) return;
                    (l.current = t), (h.current = e);
                  } catch (e) {
                    f.current = e;
                  }
                  o();
                }
                return (
                  (a.onStateChange = e),
                  a.trySubscribe(),
                  e(),
                  function () {
                    return a.tryUnsubscribe();
                  }
                );
              },
              [r, a]
            ),
            s
          );
        })(e, n, u.store, u.subscription);
      return (0, t.useDebugValue)(s), s;
    };
  }
  var b = f();
  const h = react - dom;
  (r = h.unstable_batchedUpdates), console.log(b);
})();
