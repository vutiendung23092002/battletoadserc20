import { __esmMin as e } from "./rolldownruntimeB4t1OpF.mjs";
import {
  X as t,
  Y as n,
  ae as r,
  e as i,
  fe as a,
  init_jsx_runtime as o,
  init_npm_react_18_2 as s,
  init_ssg_sandbox_shims as c,
  j as l,
  navigator as u,
  npm_react_18_2_exports as d,
  p as f,
  pe as p,
  q as m,
  re as h,
  se as g,
  te as _,
  u as v,
  ue as y,
  window as b,
  x,
  ye as S,
} from "./react.CP0hP_0W.mjs";
import {
  LayoutGroup as ee,
  MotionConfigContext as C,
  frame as te,
  init_framer_motion_5EXT2AMG as w,
  isMotionValue as T,
  motion as E,
  useInView as D,
  useMotionValue as O,
  useReducedMotion as ne,
  useTransform as re,
} from "./motion.CmY1Y3o3.mjs";
import {
  ComponentViewportProvider as k,
  Container as A,
  ControlType as j,
  GeneratedComponentContext as ie,
  Image2 as M,
  Link as N,
  PropertyOverrides2 as P,
  RenderTarget as ae,
  ResolveLinks as F,
  RichText as I,
  SmartComponentScopedContainer as L,
  addFonts as oe,
  addPropertyControls as R,
  cx as z,
  fontStore as se,
  getFonts as B,
  getFontsFromSharedStyle as ce,
  getLoadingLazyAtYPosition as V,
  init_framer_O23R7WUO as H,
  useActiveVariantCallback as le,
  useComponentViewport as ue,
  useCustomCursors as de,
  useHydratedBreakpointVariants as fe,
  useIsInCurrentNavigationTarget as pe,
  useIsOnFramerCanvas as me,
  useLocaleInfo as he,
  useMetadata as ge,
  useRouteElementId as _e,
  useRouter as ve,
  useVariantState as ye,
  withCSS as be,
  withOptimizedAppearEffect as xe,
} from "./framer.BAEYfhpS.mjs";
function U(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function Se(e) {
  return rr.call(or, e)
    ? !0
    : rr.call(ar, e)
    ? !1
    : ir.test(e)
    ? (or[e] = !0)
    : ((ar[e] = !0), !1);
}
function Ce(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
function we(e) {
  return e[1].toUpperCase();
}
function W(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = ur.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t);
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Te(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Ee(e, t, n) {
  switch (t) {
    case `select`:
      return Te(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Te(2, null);
    case `math`:
      return Te(3, null);
    case `foreignObject`:
      return Te(1, null);
    case `table`:
      return Te(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Te(5, null);
    case `colgroup`:
      return Te(7, null);
    case `tr`:
      return Te(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Te(1, null) : e;
}
function De(e, t, n) {
  if (typeof n != `object`) throw Error(U(62));
  for (var r in ((t = !0), n))
    if (rr.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = W(r);
          i = W((`` + i).trim());
        } else {
          a = r;
          var o = mr.get(a);
          o !== void 0 ||
            ((o = W(a.replace(dr, `-$1`).toLowerCase().replace(fr, `-ms-`))),
            mr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || rr.call(cr, r)
                  ? `` + i
                  : i + `px`
                : W((`` + i).trim()));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function Oe(e, t, n, r) {
  switch (n) {
    case `style`:
      De(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (
    !(2 < n.length) ||
    (n[0] !== `o` && n[0] !== `O`) ||
    (n[1] !== `n` && n[1] !== `N`)
  ) {
    if (((t = X.hasOwnProperty(n) ? X[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
        case 3:
          r && e.push(` `, n, `=""`);
          break;
        case 4:
          !0 === r
            ? e.push(` `, n, `=""`)
            : !1 !== r && e.push(` `, n, `="`, W(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, W(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, W(r), `"`);
          break;
        default:
          t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, W(r), `"`);
      }
    } else if (Se(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (
            ((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)
          )
            return;
      }
      e.push(` `, n, `="`, W(r), `"`);
    }
  }
}
function ke(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(U(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(U(61));
    (t = t.__html), t != null && e.push(`` + t);
  }
}
function Ae(e) {
  var t = ``;
  return (
    nr.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function je(e, t, n, r) {
  e.push(Me(n));
  var i,
    a = (n = null);
  for (i in t)
    if (rr.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            Oe(e, r, i, o);
        }
    }
  return (
    e.push(`>`), ke(e, a, n), typeof n == `string` ? (e.push(W(n)), null) : n
  );
}
function Me(e) {
  var t = gr.get(e);
  if (t === void 0) {
    if (!hr.test(e)) throw Error(U(65, e));
    (t = `<` + e), gr.set(e, t);
  }
  return t;
}
function Ne(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(Me(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (rr.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                Oe(e, r, u, s);
            }
        }
      return e.push(`>`), ke(e, o, a), a;
    case `option`:
      (o = i.selectedValue), e.push(Me(`option`));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (rr.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                Oe(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Ae(s) : `` + c), pr(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return e.push(`>`), ke(e, u, s), s;
    case `textarea`:
      for (s in (e.push(Me(`textarea`)), (u = o = a = null), n))
        if (rr.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(U(91));
            default:
              Oe(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(U(92));
        if (pr(u) && 1 < u.length) throw Error(U(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(W(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(Me(`input`)), (c = u = s = a = null), n))
        if (rr.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(U(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              Oe(e, r, o, l);
          }
      return (
        u === null
          ? c !== null && Oe(e, r, `checked`, c)
          : Oe(e, r, `checked`, u),
        a === null ? s !== null && Oe(e, r, `value`, s) : Oe(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(Me(`menuitem`)), n))
        if (rr.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(U(400));
            default:
              Oe(e, r, f, a);
          }
      return e.push(`>`), null;
    case `title`:
      for (d in (e.push(Me(`title`)), (a = null), n))
        if (rr.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(U(434));
            default:
              Oe(e, r, d, o);
          }
      return e.push(`>`), a;
    case `listing`:
    case `pre`:
      for (c in (e.push(Me(t)), (o = a = null), n))
        if (rr.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              Oe(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(U(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(U(61));
        (n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(
                  `
`,
                  n
                )
              : e.push(`` + n));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(Me(t)), n))
        if (rr.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(U(399, t));
            default:
              Oe(e, r, p, a);
          }
      return e.push(`/>`), null;
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return je(e, n, t, r);
    case `html`:
      return i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), je(e, n, t, r);
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`)
        return je(e, n, t, r);
      for (l in (e.push(Me(t)), (o = a = null), n))
        if (rr.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              De(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Se(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, W(s), `"`);
          }
      return e.push(`>`), ke(e, o, a), a;
  }
}
function Pe(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(U(395));
  return e.push(n), e.push(`"></template>`);
}
function Fe(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        e.push(`<div hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 2:
      return (
        e.push(`<svg aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 3:
      return (
        e.push(`<math aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 4:
      return (
        e.push(`<table hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 5:
      return (
        e.push(`<table hidden><tbody id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 6:
      return (
        e.push(`<table hidden><tr id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 7:
      return (
        e.push(`<table hidden><colgroup id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    default:
      throw Error(U(397));
  }
}
function Ie(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push(`</div>`);
    case 2:
      return e.push(`</svg>`);
    case 3:
      return e.push(`</math>`);
    case 4:
      return e.push(`</table>`);
    case 5:
      return e.push(`</tbody></table>`);
    case 6:
      return e.push(`</tr></table>`);
    case 7:
      return e.push(`</colgroup></table>`);
    default:
      throw Error(U(397));
  }
}
function Le(e) {
  return JSON.stringify(e).replace(_r, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function Re(e, t) {
  return (
    (t = t === void 0 ? `` : t),
    {
      bootstrapChunks: [],
      startInlineScript: `<script>`,
      placeholderPrefix: t + `P:`,
      segmentPrefix: t + `S:`,
      boundaryPrefix: t + `B:`,
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function ze(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(W(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(W(t)), (e = !0)),
      e);
}
function Be(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case xr:
      return `Fragment`;
    case br:
      return `Portal`;
    case Cr:
      return `Profiler`;
    case Sr:
      return `StrictMode`;
    case Dr:
      return `Suspense`;
    case Or:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Tr:
        return (e.displayName || `Context`) + `.Consumer`;
      case wr:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Er:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ``),
            (e = e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case kr:
        return (
          (t = e.displayName || null), t === null ? Be(e.type) || `Memo` : t
        );
      case Ar:
        (t = e._payload), (e = e._init);
        try {
          return Be(e(t));
        } catch {}
    }
  return null;
}
function Ve(e, t) {
  if (((e = e.contextTypes), !e)) return Ir;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function He(e, t) {
  if (e !== t) {
    (e.context._currentValue2 = e.parentValue), (e = e.parent);
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(U(401));
    } else {
      if (n === null) throw Error(U(401));
      He(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function Ue(e) {
  (e.context._currentValue2 = e.parentValue),
    (e = e.parent),
    e !== null && Ue(e);
}
function We(e) {
  var t = e.parent;
  t !== null && We(t), (e.context._currentValue2 = e.value);
}
function Ge(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null))
    throw Error(U(402));
  e.depth === t.depth ? He(e, t) : Ge(e, t);
}
function Ke(e, t) {
  var n = t.parent;
  if (n === null) throw Error(U(402));
  e.depth === n.depth ? He(e, n) : Ke(e, n),
    (t.context._currentValue2 = t.value);
}
function qe(e) {
  var t = Lr;
  t !== e &&
    (t === null
      ? We(e)
      : e === null
      ? Ue(t)
      : t.depth === e.depth
      ? He(t, e)
      : t.depth > e.depth
      ? Ge(t, e)
      : Ke(t, e),
    (Lr = e));
}
function Je(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  (e.updater = Rr), (e.props = n), (e.state = i);
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` &&
      ((o = o(n, i)), (i = o == null ? i : vr({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` &&
        e.UNSAFE_componentWillMount(),
      t !== e.state && Rr.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (
        ((t = a.queue),
        (o = a.replace),
        (a.queue = null),
        (a.replace = !1),
        o && t.length === 1)
      )
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          (s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = vr({}, a, s))) : vr(a, s));
        }
        e.state = a;
      }
    else a.queue = null;
}
function Ye(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Br(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Br(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Br(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function Xe(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vr(e) / Hr) | 0)) | 0;
}
function Ze(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function Qe() {
  if (Wr === null) throw Error(U(321));
  return Wr;
}
function $e() {
  if (0 < Zr) throw Error(U(312));
  return { memoizedState: null, queue: null, next: null };
}
function et() {
  return (
    Z === null
      ? Kr === null
        ? ((qr = !1), (Kr = Z = $e()))
        : ((qr = !0), (Z = Kr))
      : Z.next === null
      ? ((qr = !1), (Z = Z.next = $e()))
      : ((qr = !0), (Z = Z.next)),
    Z
  );
}
function tt() {
  (Gr = Wr = null), (Jr = !1), (Kr = null), (Zr = 0), (Z = Xr = null);
}
function nt(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function rt(e, t, n) {
  if (((Wr = Qe()), (Z = et()), qr)) {
    var r = Z.queue;
    if (((t = r.dispatch), Xr !== null && ((n = Xr.get(r)), n !== void 0))) {
      Xr.delete(r), (r = Z.memoizedState);
      do (r = e(r, n.action)), (n = n.next);
      while (n !== null);
      return (Z.memoizedState = r), [r, t];
    }
    return [Z.memoizedState, t];
  }
  return (
    (e =
      e === nt ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (Z.memoizedState = e),
    (e = Z.queue = { last: null, dispatch: null }),
    (e = e.dispatch = at.bind(null, Wr, e)),
    [Z.memoizedState, e]
  );
}
function it(e, t) {
  if (((Wr = Qe()), (Z = et()), (t = t === void 0 ? null : t), Z !== null)) {
    var n = Z.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Ur(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return (e = e()), (Z.memoizedState = [e, t]), e;
}
function at(e, t, n) {
  if (25 <= Zr) throw Error(U(301));
  if (e === Wr)
    if (
      ((Jr = !0),
      (e = { action: n, next: null }),
      Xr === null && (Xr = new Map()),
      (n = Xr.get(t)),
      n === void 0)
    )
      Xr.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function ot() {
  throw Error(U(394));
}
function st() {}
function ct(e) {
  return console.error(e), null;
}
function lt() {}
function ut(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? ct : i,
      onAllReady: a === void 0 ? lt : a,
      onShellReady: o === void 0 ? lt : o,
      onShellError: s === void 0 ? lt : s,
      onFatalError: c === void 0 ? lt : c,
    }),
    (n = ft(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = dt(t, e, null, n, u, Ir, null, zr)),
    l.push(e),
    t
  );
}
function dt(e, t, n, r, i, a, o, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      t.push(c), t.length === 1 && Et(e);
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return i.add(c), c;
}
function ft(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function pt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function mt(e, t) {
  var n = e.onShellError;
  n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t));
}
function ht(e, t, n, r, i) {
  for (Wr = {}, Gr = t, Yr = 0, e = n(r, i); Jr; )
    (Jr = !1), (Yr = 0), (Zr += 1), (Z = null), (e = n(r, i));
  return tt(), e;
}
function gt(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(U(108, Be(r) || `Unknown`, s));
      r = vr({}, o, n);
    }
    (t.legacyContext = r), yt(e, t, i), (t.legacyContext = o);
  } else yt(e, t, i);
}
function _t(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = vr({}, t)), (e = e.defaultProps), e))
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Ve(n, t.legacyContext);
      var a = n.contextType;
      (a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        Je(a, n, r, i),
        gt(e, t, a, n);
    } else {
      (a = Ve(n, t.legacyContext)), (i = ht(e, t, n, r, a));
      var o = Yr !== 0;
      if (
        typeof i == `object` &&
        i &&
        typeof i.render == `function` &&
        i.$$typeof === void 0
      )
        Je(i, n, r, a), gt(e, t, i, n);
      else if (o) {
        (r = t.treeContext), (t.treeContext = Ye(r, 1, 0));
        try {
          yt(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else yt(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Nr:
        case Mr:
        case Sr:
        case Cr:
        case xr:
          yt(e, t, r.children);
          return;
        case Or:
          yt(e, t, r.children);
          return;
        case jr:
          throw Error(U(343));
        case Dr:
          e: {
            (n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set());
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = ft(e, i.chunks.length, s, i.formatContext, !1, !1);
            i.children.push(c), (i.lastPushedText = !1);
            var l = ft(e, 0, null, i.formatContext, !1, !1);
            (l.parentFlushed = !0),
              (t.blockedBoundary = s),
              (t.blockedSegment = l);
            try {
              if (
                (xt(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText &&
                    l.textEmbedded &&
                    l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                wt(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              (l.status = 4),
                (s.forceClientRender = !0),
                (s.errorDigest = pt(e, t));
            } finally {
              (t.blockedBoundary = n), (t.blockedSegment = i);
            }
            (t = dt(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t);
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Er:
            if (((r = ht(e, t, n.render, r, i)), Yr !== 0)) {
              (n = t.treeContext), (t.treeContext = Ye(n, 1, 0));
              try {
                yt(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else yt(e, t, r);
            return;
          case kr:
            (n = n.type), (r = _t(n, r)), vt(e, t, n, r, i);
            return;
          case wr:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = Lr),
              (Lr = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              yt(e, t, i),
              (e = Lr),
              e === null)
            )
              throw Error(U(403));
            (r = e.parentValue),
              (e.context._currentValue2 =
                r === Pr ? e.context._defaultValue : r),
              (e = Lr = e.parent),
              (t.context = e);
            return;
          case Tr:
            (r = r.children), (r = r(n._currentValue2)), yt(e, t, r);
            return;
          case Ar:
            (i = n._init),
              (n = i(n._payload)),
              (r = _t(n, r)),
              vt(e, t, n, r, void 0);
            return;
        }
      throw Error(U(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Ne(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Ee(o, n, r)),
      xt(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(`</`, n, `>`);
    }
    i.lastPushedText = !1;
  }
}
function yt(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case yr:
        vt(e, t, n.type, n.props, n.ref);
        return;
      case br:
        throw Error(U(257));
      case Ar:
        var r = n._init;
        (n = r(n._payload)), yt(e, t, n);
        return;
    }
    if (pr(n)) {
      bt(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Fr && n[Fr]) || n[`@@iterator`]),
          (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do i.push(n.value), (n = r.next());
        while (!n.done);
        bt(e, t, i);
      }
      return;
    }
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        U(
          31,
          e === `[object Object]`
            ? `object with keys {` + Object.keys(n).join(`, `) + `}`
            : e
        )
      ))
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = ze(
        t.blockedSegment.chunks,
        n,
        e.responseState,
        r.lastPushedText
      )))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = ze(
        t.blockedSegment.chunks,
        `` + n,
        e.responseState,
        r.lastPushedText
      )));
}
function bt(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = Ye(a, r, i);
    try {
      xt(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function xt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return yt(e, t, n);
  } catch (c) {
    if ((tt(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        ((t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        qe(a),
        c)
      );
    n = c;
    var o = t.blockedSegment,
      s = ft(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    o.children.push(s),
      (o.lastPushedText = !1),
      (e = dt(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      qe(a);
  }
}
function St(e) {
  var t = e.blockedBoundary;
  (e = e.blockedSegment), (e.status = 3), Tt(this, t, e);
}
function Ct(e, t, n) {
  var r = e.blockedBoundary;
  (e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 &&
          ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(U(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Ct(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r()));
}
function wt(e, t) {
  if (
    t.chunks.length === 0 &&
    t.children.length === 1 &&
    t.children[0].boundary === null
  ) {
    var n = t.children[0];
    (n.id = t.id), (n.parentFlushed = !0), n.status === 1 && wt(e, n);
  } else e.completedSegments.push(t);
}
function Tt(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(U(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--,
      e.pendingRootTasks === 0 &&
        ((e.onShellError = lt), (t = e.onShellReady), t());
  } else
    t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && wt(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(St, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (wt(t, n),
            t.completedSegments.length === 1 &&
              t.parentFlushed &&
              e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
}
function Et(e) {
  if (e.status !== 2) {
    var t = Lr,
      n = ei.current;
    ei.current = Qr;
    var r = $r;
    $r = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          qe(o.context);
          try {
            yt(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText &&
                  c.textEmbedded &&
                  c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              Tt(s, o.blockedBoundary, c);
          } catch (e) {
            if (
              (tt(), typeof e == `object` && e && typeof e.then == `function`)
            ) {
              var l = o.ping;
              e.then(l, l);
            } else {
              o.abortSet.delete(o), (c.status = 4);
              var u = o.blockedBoundary,
                d = e,
                f = pt(s, d);
              if (
                (u === null
                  ? mt(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      a.splice(0, i), e.destination !== null && Mt(e, e.destination);
    } catch (t) {
      pt(e, t), mt(e, t);
    } finally {
      ($r = r), (ei.current = n), n === Qr && qe(t);
    }
  }
}
function Dt(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        t.push(`<template id="`),
        t.push(e.placeholderPrefix),
        (e = r.toString(16)),
        t.push(e),
        t.push(`"></template>`)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) t.push(r[a]);
        i = Ot(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return a < r.length && (i = t.push(r[a])), i;
    default:
      throw Error(U(390));
  }
}
function Ot(e, t, n) {
  var r = n.boundary;
  if (r === null) return Dt(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = W(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      Dt(e, t, n),
      (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
      e
    );
  if (0 < r.pendingTasks) {
    (r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var i = e.responseState,
      a = i.nextSuspenseID++;
    return (
      (i = i.boundaryPrefix + a.toString(16)),
      (r = r.id = i),
      Pe(t, e.responseState, r),
      Dt(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Pe(t, e.responseState, r.id),
      Dt(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(U(391));
  return (
    Ot(e, t, n[0]),
    (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
    e
  );
}
function kt(e, t, n) {
  return (
    Fe(t, e.responseState, n.formatContext, n.id),
    Ot(e, t, n),
    Ie(t, n.formatContext)
  );
}
function At(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) jt(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push(`$RC("`)
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
        )),
    r === null)
  )
    throw Error(U(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")</script>`)
  );
}
function jt(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(U(392));
    return kt(e, t, r);
  }
  return (
    kt(e, t, r),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push(`$RS("`)
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
        )),
    t.push(e.segmentPrefix),
    (i = i.toString(16)),
    t.push(i),
    t.push(`","`),
    t.push(e.placeholderPrefix),
    t.push(i),
    t.push(`")</script>`)
  );
}
function Mt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      Ot(e, t, n), (e.completedRootSegment = null);
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (r.push(s.startInlineScript),
        s.sentClientRenderFunction
          ? r.push(`$RX("`)
          : ((s.sentClientRenderFunction = !0),
            r.push(
              `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
            )),
        c === null)
      )
        throw Error(U(395));
      if ((r.push(c), r.push(`"`), l || u || d)) {
        r.push(`,`);
        var f = Le(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = Le(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = Le(d);
        r.push(m);
      }
      if (!r.push(`)</script>`)) {
        (e.destination = null), i++, a.splice(0, i);
        return;
      }
    }
    a.splice(0, i);
    var h = e.completedBoundaries;
    for (i = 0; i < h.length; i++)
      if (!At(e, t, h[i])) {
        (e.destination = null), i++, h.splice(0, i);
        return;
      }
    h.splice(0, i);
    var g = e.partialBoundaries;
    for (i = 0; i < g.length; i++) {
      var _ = g[i];
      e: {
        (a = e), (o = t);
        var v = _.completedSegments;
        for (s = 0; s < v.length; s++)
          if (!jt(a, o, _, v[s])) {
            s++, v.splice(0, s);
            var y = !1;
            break e;
          }
        v.splice(0, s), (y = !0);
      }
      if (!y) {
        (e.destination = null), i++, g.splice(0, i);
        return;
      }
    }
    g.splice(0, i);
    var b = e.completedBoundaries;
    for (i = 0; i < b.length; i++)
      if (!At(e, t, b[i])) {
        (e.destination = null), i++, b.splice(0, i);
        return;
      }
    b.splice(0, i);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function Nt(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function (n) {
      return Ct(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Mt(e, e.destination);
  } catch (t) {
    pt(e, t), mt(e, t);
  }
}
function Pt() {}
function Ft(e, t, n, r) {
  var i = !1,
    a = null,
    o = ``,
    s = {
      push: function (e) {
        return e !== null && (o += e), !0;
      },
      destroy: function (e) {
        (i = !0), (a = e);
      },
    },
    c = !1;
  if (
    ((e = ut(
      e,
      Re(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      Pt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0
    )),
    Et(e),
    Nt(e, r),
    e.status === 1)
  )
    (e.status = 2), s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Mt(e, s);
    } catch (t) {
      pt(e, t), mt(e, t);
    }
  }
  if (i) throw a;
  if (!c) throw Error(U(426));
  return o;
}
function G(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function K(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      0 < ai &&
        (e.enqueue(new Uint8Array(ii.buffer, 0, ai)),
        (ii = new Uint8Array(512)),
        (ai = 0)),
        e.enqueue(t);
    else {
      var n = ii.length - ai;
      n < t.length &&
        (n === 0
          ? e.enqueue(ii)
          : (ii.set(t.subarray(0, n), ai), e.enqueue(ii), (t = t.subarray(n))),
        (ii = new Uint8Array(512)),
        (ai = 0)),
        ii.set(t, ai),
        (ai += t.length);
    }
}
function q(e, t) {
  return K(e, t), !0;
}
function It(e) {
  ii &&
    0 < ai &&
    (e.enqueue(new Uint8Array(ii.buffer, 0, ai)), (ii = null), (ai = 0));
}
function J(e) {
  return oi.encode(e);
}
function Y(e) {
  return oi.encode(e);
}
function Lt(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Rt(e) {
  return si.call(ui, e)
    ? !0
    : si.call(li, e)
    ? !1
    : ci.test(e)
    ? (ui[e] = !0)
    : ((li[e] = !0), !1);
}
function zt(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
function Bt(e) {
  return e[1].toUpperCase();
}
function Vt(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = mi.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t);
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Ht(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function Ut(e, t, n, r, i) {
  (e = e === void 0 ? `` : e),
    (t = t === void 0 ? vi : Y(`<script nonce="` + Vt(t) + `">`));
  var a = [];
  if (
    (n !== void 0 && a.push(t, J((`` + n).replace(Ci, Ht)), yi), r !== void 0)
  )
    for (n = 0; n < r.length; n++) a.push(bi, J(Vt(r[n])), Si);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(xi, J(Vt(i[r])), Si);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: Y(e + `P:`),
    segmentPrefix: Y(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function Wt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Gt(e) {
  return Wt(
    e === `http://www.w3.org/2000/svg`
      ? 2
      : e === `http://www.w3.org/1998/Math/MathML`
      ? 3
      : 0,
    null
  );
}
function Kt(e, t, n) {
  switch (t) {
    case `select`:
      return Wt(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Wt(2, null);
    case `math`:
      return Wt(3, null);
    case `foreignObject`:
      return Wt(1, null);
    case `table`:
      return Wt(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Wt(5, null);
    case `colgroup`:
      return Wt(7, null);
    case `tr`:
      return Wt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Wt(1, null) : e;
}
function qt(e, t, n, r) {
  return t === `` ? r : (r && e.push(wi), e.push(J(Vt(t))), !0);
}
function Jt(e, t, n) {
  if (typeof n != `object`) throw Error(G(62));
  for (var r in ((t = !0), n))
    if (si.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = J(Vt(r));
          i = J(Vt((`` + i).trim()));
        } else {
          a = r;
          var o = Ti.get(a);
          o !== void 0 ||
            ((o = Y(
              Vt(a.replace(hi, `-$1`).toLowerCase().replace(gi, `-ms-`))
            )),
            Ti.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || si.call(fi, r)
                  ? J(`` + i)
                  : J(i + `px`)
                : J(Vt((`` + i).trim())));
        }
        t ? ((t = !1), e.push(Ei, a, Di, i)) : e.push(Oi, a, Di, i);
      }
    }
  t || e.push(ji);
}
function Yt(e, t, n, r) {
  switch (n) {
    case `style`:
      Jt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (
    !(2 < n.length) ||
    (n[0] !== `o` && n[0] !== `O`) ||
    (n[1] !== `n` && n[1] !== `N`)
  ) {
    if (((t = Q.hasOwnProperty(n) ? Q[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = J(t.attributeName)), t.type)) {
        case 3:
          r && e.push(ki, n, Mi);
          break;
        case 4:
          !0 === r
            ? e.push(ki, n, Mi)
            : !1 !== r && e.push(ki, n, Ai, J(Vt(r)), ji);
          break;
        case 5:
          isNaN(r) || e.push(ki, n, Ai, J(Vt(r)), ji);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(ki, n, Ai, J(Vt(r)), ji);
          break;
        default:
          t.sanitizeURL && (r = `` + r), e.push(ki, n, Ai, J(Vt(r)), ji);
      }
    } else if (Rt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (
            ((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)
          )
            return;
      }
      e.push(ki, J(n), Ai, J(Vt(r)), ji);
    }
  }
}
function Xt(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(G(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(G(61));
    (t = t.__html), t != null && e.push(J(`` + t));
  }
}
function Zt(e) {
  var t = ``;
  return (
    ri.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Qt(e, t, n, r) {
  e.push($t(n));
  var i,
    a = (n = null);
  for (i in t)
    if (si.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            Yt(e, r, i, o);
        }
    }
  return (
    e.push(Ni), Xt(e, a, n), typeof n == `string` ? (e.push(J(Vt(n))), null) : n
  );
}
function $t(e) {
  var t = Ri.get(e);
  if (t === void 0) {
    if (!Li.test(e)) throw Error(G(65, e));
    (t = Y(`<` + e)), Ri.set(e, t);
  }
  return t;
}
function en(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push($t(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (si.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                Yt(e, r, u, s);
            }
        }
      return e.push(Ni), Xt(e, o, a), a;
    case `option`:
      (o = i.selectedValue), e.push($t(`option`));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (si.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                Yt(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Zt(s) : `` + c), _i(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(Fi);
              break;
            }
        } else `` + o === n && e.push(Fi);
      else l && e.push(Fi);
      return e.push(Ni), Xt(e, u, s), s;
    case `textarea`:
      for (s in (e.push($t(`textarea`)), (u = o = a = null), n))
        if (si.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(G(91));
            default:
              Yt(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(Ni), u != null)) {
        if (a != null) throw Error(G(92));
        if (_i(u) && 1 < u.length) throw Error(G(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Ii),
        a !== null && e.push(J(Vt(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push($t(`input`)), (c = u = s = a = null), n))
        if (si.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(G(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              Yt(e, r, o, l);
          }
      return (
        u === null
          ? c !== null && Yt(e, r, `checked`, c)
          : Yt(e, r, `checked`, u),
        a === null ? s !== null && Yt(e, r, `value`, s) : Yt(e, r, `value`, a),
        e.push(Pi),
        null
      );
    case `menuitem`:
      for (var f in (e.push($t(`menuitem`)), n))
        if (si.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(G(400));
            default:
              Yt(e, r, f, a);
          }
      return e.push(Ni), null;
    case `title`:
      for (d in (e.push($t(`title`)), (a = null), n))
        if (si.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(G(434));
            default:
              Yt(e, r, d, o);
          }
      return e.push(Ni), a;
    case `listing`:
    case `pre`:
      for (c in (e.push($t(t)), (o = a = null), n))
        if (si.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              Yt(e, r, c, s);
          }
      if ((e.push(Ni), o != null)) {
        if (a != null) throw Error(G(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(G(61));
        (n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(Ii, J(n))
              : e.push(J(`` + n)));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Ii),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push($t(t)), n))
        if (si.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(G(399, t));
            default:
              Yt(e, r, p, a);
          }
      return e.push(Pi), null;
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Qt(e, n, t, r);
    case `html`:
      return i.insertionMode === 0 && e.push(zi), Qt(e, n, t, r);
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`)
        return Qt(e, n, t, r);
      for (l in (e.push($t(t)), (o = a = null), n))
        if (si.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Jt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Rt(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(ki, J(l), Ai, J(Vt(s)), ji);
          }
      return e.push(Ni), Xt(e, o, a), a;
  }
}
function tn(e, t, n) {
  if ((K(e, Gi), n === null)) throw Error(G(395));
  return K(e, n), q(e, Ki);
}
function nn(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return K(e, $i), K(e, t.segmentPrefix), K(e, J(r.toString(16))), q(e, ea);
    case 2:
      return K(e, na), K(e, t.segmentPrefix), K(e, J(r.toString(16))), q(e, ra);
    case 3:
      return K(e, aa), K(e, t.segmentPrefix), K(e, J(r.toString(16))), q(e, oa);
    case 4:
      return K(e, ca), K(e, t.segmentPrefix), K(e, J(r.toString(16))), q(e, la);
    case 5:
      return K(e, da), K(e, t.segmentPrefix), K(e, J(r.toString(16))), q(e, fa);
    case 6:
      return K(e, ma), K(e, t.segmentPrefix), K(e, J(r.toString(16))), q(e, ha);
    case 7:
      return K(e, _a), K(e, t.segmentPrefix), K(e, J(r.toString(16))), q(e, va);
    default:
      throw Error(G(397));
  }
}
function rn(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return q(e, ta);
    case 2:
      return q(e, ia);
    case 3:
      return q(e, sa);
    case 4:
      return q(e, ua);
    case 5:
      return q(e, pa);
    case 6:
      return q(e, ga);
    case 7:
      return q(e, ya);
    default:
      throw Error(G(397));
  }
}
function an(e) {
  return JSON.stringify(e).replace(Na, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function on(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case La:
      return `Fragment`;
    case Ia:
      return `Portal`;
    case za:
      return `Profiler`;
    case Ra:
      return `StrictMode`;
    case Ua:
      return `Suspense`;
    case Wa:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Va:
        return (e.displayName || `Context`) + `.Consumer`;
      case Ba:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Ha:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ``),
            (e = e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Ga:
        return (
          (t = e.displayName || null), t === null ? on(e.type) || `Memo` : t
        );
      case Ka:
        (t = e._payload), (e = e._init);
        try {
          return on(e(t));
        } catch {}
    }
  return null;
}
function sn(e, t) {
  if (((e = e.contextTypes), !e)) return Qa;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function cn(e, t) {
  if (e !== t) {
    (e.context._currentValue = e.parentValue), (e = e.parent);
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(G(401));
    } else {
      if (n === null) throw Error(G(401));
      cn(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function ln(e) {
  (e.context._currentValue = e.parentValue),
    (e = e.parent),
    e !== null && ln(e);
}
function un(e) {
  var t = e.parent;
  t !== null && un(t), (e.context._currentValue = e.value);
}
function dn(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null))
    throw Error(G(402));
  e.depth === t.depth ? cn(e, t) : dn(e, t);
}
function fn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(G(402));
  e.depth === n.depth ? cn(e, n) : fn(e, n),
    (t.context._currentValue = t.value);
}
function pn(e) {
  var t = $a;
  t !== e &&
    (t === null
      ? un(e)
      : e === null
      ? ln(t)
      : t.depth === e.depth
      ? cn(t, e)
      : t.depth > e.depth
      ? dn(t, e)
      : fn(t, e),
    ($a = e));
}
function mn(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  (e.updater = eo), (e.props = n), (e.state = i);
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` &&
      ((o = o(n, i)), (i = o == null ? i : Pa({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` &&
        e.UNSAFE_componentWillMount(),
      t !== e.state && eo.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (
        ((t = a.queue),
        (o = a.replace),
        (a.queue = null),
        (a.replace = !1),
        o && t.length === 1)
      )
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          (s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = Pa({}, a, s))) : Pa(a, s));
        }
        e.state = a;
      }
    else a.queue = null;
}
function hn(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - no(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - no(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - no(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function gn(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ro(e) / io) | 0)) | 0;
}
function _n(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function vn() {
  if (oo === null) throw Error(G(321));
  return oo;
}
function yn() {
  if (0 < mo) throw Error(G(312));
  return { memoizedState: null, queue: null, next: null };
}
function bn() {
  return (
    $ === null
      ? co === null
        ? ((lo = !1), (co = $ = yn()))
        : ((lo = !0), ($ = co))
      : $.next === null
      ? ((lo = !1), ($ = $.next = yn()))
      : ((lo = !0), ($ = $.next)),
    $
  );
}
function xn() {
  (so = oo = null), (uo = !1), (co = null), (mo = 0), ($ = po = null);
}
function Sn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function Cn(e, t, n) {
  if (((oo = vn()), ($ = bn()), lo)) {
    var r = $.queue;
    if (((t = r.dispatch), po !== null && ((n = po.get(r)), n !== void 0))) {
      po.delete(r), (r = $.memoizedState);
      do (r = e(r, n.action)), (n = n.next);
      while (n !== null);
      return ($.memoizedState = r), [r, t];
    }
    return [$.memoizedState, t];
  }
  return (
    (e =
      e === Sn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    ($.memoizedState = e),
    (e = $.queue = { last: null, dispatch: null }),
    (e = e.dispatch = Tn.bind(null, oo, e)),
    [$.memoizedState, e]
  );
}
function wn(e, t) {
  if (((oo = vn()), ($ = bn()), (t = t === void 0 ? null : t), $ !== null)) {
    var n = $.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!ao(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return (e = e()), ($.memoizedState = [e, t]), e;
}
function Tn(e, t, n) {
  if (25 <= mo) throw Error(G(301));
  if (e === oo)
    if (
      ((uo = !0),
      (e = { action: n, next: null }),
      po === null && (po = new Map()),
      (n = po.get(t)),
      n === void 0)
    )
      po.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function En() {
  throw Error(G(394));
}
function Dn() {}
function On(e) {
  return console.error(e), null;
}
function kn() {}
function An(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? On : i,
      onAllReady: a === void 0 ? kn : a,
      onShellReady: o === void 0 ? kn : o,
      onShellError: s === void 0 ? kn : s,
      onFatalError: c === void 0 ? kn : c,
    }),
    (n = Mn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = jn(t, e, null, n, u, Qa, null, to)),
    l.push(e),
    t
  );
}
function jn(e, t, n, r, i, a, o, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      t.push(c), t.length === 1 && Kn(e);
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return i.add(c), c;
}
function Mn(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function Nn(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function Pn(e, t) {
  var n = e.onShellError;
  n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Lt(e.destination, t));
}
function Fn(e, t, n, r, i) {
  for (oo = {}, so = t, fo = 0, e = n(r, i); uo; )
    (uo = !1), (fo = 0), (mo += 1), ($ = null), (e = n(r, i));
  return xn(), e;
}
function In(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(G(108, on(r) || `Unknown`, s));
      r = Pa({}, o, n);
    }
    (t.legacyContext = r), zn(e, t, i), (t.legacyContext = o);
  } else zn(e, t, i);
}
function Ln(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = Pa({}, t)), (e = e.defaultProps), e))
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Rn(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = sn(n, t.legacyContext);
      var a = n.contextType;
      (a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        mn(a, n, r, i),
        In(e, t, a, n);
    } else {
      (a = sn(n, t.legacyContext)), (i = Fn(e, t, n, r, a));
      var o = fo !== 0;
      if (
        typeof i == `object` &&
        i &&
        typeof i.render == `function` &&
        i.$$typeof === void 0
      )
        mn(i, n, r, a), In(e, t, i, n);
      else if (o) {
        (r = t.treeContext), (t.treeContext = hn(r, 1, 0));
        try {
          zn(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else zn(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Ya:
        case Ja:
        case Ra:
        case za:
        case La:
          zn(e, t, r.children);
          return;
        case Wa:
          zn(e, t, r.children);
          return;
        case qa:
          throw Error(G(343));
        case Ua:
          e: {
            (n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set());
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = Mn(e, i.chunks.length, s, i.formatContext, !1, !1);
            i.children.push(c), (i.lastPushedText = !1);
            var l = Mn(e, 0, null, i.formatContext, !1, !1);
            (l.parentFlushed = !0),
              (t.blockedBoundary = s),
              (t.blockedSegment = l);
            try {
              if (
                (Vn(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(wi),
                (l.status = 1),
                Wn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              (l.status = 4),
                (s.forceClientRender = !0),
                (s.errorDigest = Nn(e, t));
            } finally {
              (t.blockedBoundary = n), (t.blockedSegment = i);
            }
            (t = jn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t);
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Ha:
            if (((r = Fn(e, t, n.render, r, i)), fo !== 0)) {
              (n = t.treeContext), (t.treeContext = hn(n, 1, 0));
              try {
                zn(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else zn(e, t, r);
            return;
          case Ga:
            (n = n.type), (r = Ln(n, r)), Rn(e, t, n, r, i);
            return;
          case Ba:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = $a),
              ($a = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              zn(e, t, i),
              (e = $a),
              e === null)
            )
              throw Error(G(403));
            (r = e.parentValue),
              (e.context._currentValue =
                r === Xa ? e.context._defaultValue : r),
              (e = $a = e.parent),
              (t.context = e);
            return;
          case Va:
            (r = r.children), (r = r(n._currentValue)), zn(e, t, r);
            return;
          case Ka:
            (i = n._init),
              (n = i(n._payload)),
              (r = Ln(n, r)),
              Rn(e, t, n, r, void 0);
            return;
        }
      throw Error(G(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = en(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Kt(o, n, r)),
      Vn(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(Bi, J(n), Vi);
    }
    i.lastPushedText = !1;
  }
}
function zn(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case Fa:
        Rn(e, t, n.type, n.props, n.ref);
        return;
      case Ia:
        throw Error(G(257));
      case Ka:
        var r = n._init;
        (n = r(n._payload)), zn(e, t, n);
        return;
    }
    if (_i(n)) {
      Bn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Za && n[Za]) || n[`@@iterator`]),
          (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do i.push(n.value), (n = r.next());
        while (!n.done);
        Bn(e, t, i);
      }
      return;
    }
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        G(
          31,
          e === `[object Object]`
            ? `object with keys {` + Object.keys(n).join(`, `) + `}`
            : e
        )
      ))
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = qt(
        t.blockedSegment.chunks,
        n,
        e.responseState,
        r.lastPushedText
      )))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = qt(
        t.blockedSegment.chunks,
        `` + n,
        e.responseState,
        r.lastPushedText
      )));
}
function Bn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = hn(a, r, i);
    try {
      Vn(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Vn(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return zn(e, t, n);
  } catch (c) {
    if ((xn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        ((t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        pn(a),
        c)
      );
    n = c;
    var o = t.blockedSegment,
      s = Mn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    o.children.push(s),
      (o.lastPushedText = !1),
      (e = jn(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      pn(a);
  }
}
function Hn(e) {
  var t = e.blockedBoundary;
  (e = e.blockedSegment), (e.status = 3), Gn(this, t, e);
}
function Un(e, t, n) {
  var r = e.blockedBoundary;
  (e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 &&
          ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(G(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Un(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r()));
}
function Wn(e, t) {
  if (
    t.chunks.length === 0 &&
    t.children.length === 1 &&
    t.children[0].boundary === null
  ) {
    var n = t.children[0];
    (n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Wn(e, n);
  } else e.completedSegments.push(t);
}
function Gn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(G(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--,
      e.pendingRootTasks === 0 &&
        ((e.onShellError = kn), (t = e.onShellReady), t());
  } else
    t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Wn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Hn, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Wn(t, n),
            t.completedSegments.length === 1 &&
              t.parentFlushed &&
              e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
}
function Kn(e) {
  if (e.status !== 2) {
    var t = $a,
      n = _o.current;
    _o.current = ho;
    var r = go;
    go = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          pn(o.context);
          try {
            zn(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(wi),
              o.abortSet.delete(o),
              (c.status = 1),
              Gn(s, o.blockedBoundary, c);
          } catch (e) {
            if (
              (xn(), typeof e == `object` && e && typeof e.then == `function`)
            ) {
              var l = o.ping;
              e.then(l, l);
            } else {
              o.abortSet.delete(o), (c.status = 4);
              var u = o.blockedBoundary,
                d = e,
                f = Nn(s, d);
              if (
                (u === null
                  ? Pn(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      a.splice(0, i), e.destination !== null && Qn(e, e.destination);
    } catch (t) {
      Nn(e, t), Pn(e, t);
    } finally {
      (go = r), (_o.current = n), n === ho && pn(t);
    }
  }
}
function qn(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        K(t, Hi),
        K(t, e.placeholderPrefix),
        (e = J(r.toString(16))),
        K(t, e),
        q(t, Ui)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) K(t, r[a]);
        i = Jn(e, t, i);
      }
      for (; a < r.length - 1; a++) K(t, r[a]);
      return a < r.length && (i = q(t, r[a])), i;
    default:
      throw Error(G(390));
  }
}
function Jn(e, t, n) {
  var r = n.boundary;
  if (r === null) return qn(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    (r = r.errorDigest),
      q(t, qi),
      K(t, Yi),
      r && (K(t, Zi), K(t, J(Vt(r))), K(t, Xi)),
      q(t, Qi),
      qn(e, t, n);
  else if (0 < r.pendingTasks) {
    (r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var i = e.responseState,
      a = i.nextSuspenseID++;
    (i = Y(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      tn(t, e.responseState, r),
      qn(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize)
    (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      tn(t, e.responseState, r.id),
      qn(e, t, n);
  else {
    if ((q(t, Wi), (n = r.completedSegments), n.length !== 1))
      throw Error(G(391));
    Jn(e, t, n[0]);
  }
  return q(t, Ji);
}
function Yn(e, t, n) {
  return (
    nn(t, e.responseState, n.formatContext, n.id),
    Jn(e, t, n),
    rn(t, n.formatContext)
  );
}
function Xn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Zn(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    K(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? K(t, Ta)
      : ((e.sentCompleteBoundaryFunction = !0), K(t, wa)),
    r === null)
  )
    throw Error(G(395));
  return (
    (n = J(n.toString(16))),
    K(t, r),
    K(t, Ea),
    K(t, e.segmentPrefix),
    K(t, n),
    q(t, Da)
  );
}
function Zn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(G(392));
    return Yn(e, t, r);
  }
  return (
    Yn(e, t, r),
    (e = e.responseState),
    K(t, e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? K(t, xa)
      : ((e.sentCompleteSegmentFunction = !0), K(t, ba)),
    K(t, e.segmentPrefix),
    (i = J(i.toString(16))),
    K(t, i),
    K(t, Sa),
    K(t, e.placeholderPrefix),
    K(t, i),
    q(t, Ca)
  );
}
function Qn(e, t) {
  (ii = new Uint8Array(512)), (ai = 0);
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      Jn(e, t, n), (e.completedRootSegment = null);
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) K(t, r[n]);
      n < r.length && q(t, r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (K(r, s.startInlineScript),
        s.sentClientRenderFunction
          ? K(r, ka)
          : ((s.sentClientRenderFunction = !0), K(r, Oa)),
        c === null)
      )
        throw Error(G(395));
      if (
        (K(r, c),
        K(r, Aa),
        (l || u || d) && (K(r, Ma), K(r, J(an(l || ``)))),
        (u || d) && (K(r, Ma), K(r, J(an(u || ``)))),
        d && (K(r, Ma), K(r, J(an(d)))),
        !q(r, ja))
      ) {
        (e.destination = null), i++, a.splice(0, i);
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Xn(e, t, f[i])) {
        (e.destination = null), i++, f.splice(0, i);
        return;
      }
    f.splice(0, i), It(t), (ii = new Uint8Array(512)), (ai = 0);
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        (a = e), (o = t);
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Zn(a, o, m, h[s])) {
            s++, h.splice(0, s);
            var g = !1;
            break e;
          }
        h.splice(0, s), (g = !0);
      }
      if (!g) {
        (e.destination = null), i++, p.splice(0, i);
        return;
      }
    }
    p.splice(0, i);
    var _ = e.completedBoundaries;
    for (i = 0; i < _.length; i++)
      if (!Xn(e, t, _[i])) {
        (e.destination = null), i++, _.splice(0, i);
        return;
      }
    _.splice(0, i);
  } finally {
    It(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close();
  }
}
function $n(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function (n) {
      return Un(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Qn(e, e.destination);
  } catch (t) {
    Nn(e, t), Pn(e, t);
  }
}
var er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  X,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  Z,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  Q,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  $,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do = e(() => {
    s(),
      (er = `default` in d ? i : d),
      (tr = {}),
      (nr = er),
      (rr = Object.prototype.hasOwnProperty),
      (ir =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (ar = {}),
      (or = {}),
      (X = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          X[e] = new Ce(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        X[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (
        e
      ) {
        X[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        X[e] = new Ce(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          X[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        X[e] = new Ce(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        X[e] = new Ce(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        X[e] = new Ce(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        X[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (sr = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(sr, we);
          X[t] = new Ce(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(sr, we);
          X[t] = new Ce(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(sr, we);
        X[t] = new Ce(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        X[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (X.xlinkHref = new Ce(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        X[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (cr = {
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
        strokeWidth: !0,
      }),
      (lr = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(cr).forEach(function (e) {
        lr.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (cr[t] = cr[e]);
        });
      }),
      (ur = /["'&<>]/),
      (dr = /([A-Z])/g),
      (fr = /^ms-/),
      (pr = Array.isArray),
      (mr = new Map()),
      (hr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (gr = new Map()),
      (_r = /[<\u2028\u2029]/g),
      (vr = Object.assign),
      (yr = Symbol.for(`react.element`)),
      (br = Symbol.for(`react.portal`)),
      (xr = Symbol.for(`react.fragment`)),
      (Sr = Symbol.for(`react.strict_mode`)),
      (Cr = Symbol.for(`react.profiler`)),
      (wr = Symbol.for(`react.provider`)),
      (Tr = Symbol.for(`react.context`)),
      (Er = Symbol.for(`react.forward_ref`)),
      (Dr = Symbol.for(`react.suspense`)),
      (Or = Symbol.for(`react.suspense_list`)),
      (kr = Symbol.for(`react.memo`)),
      (Ar = Symbol.for(`react.lazy`)),
      (jr = Symbol.for(`react.scope`)),
      (Mr = Symbol.for(`react.debug_trace_mode`)),
      (Nr = Symbol.for(`react.legacy_hidden`)),
      (Pr = Symbol.for(`react.default_value`)),
      (Fr = Symbol.iterator),
      (Ir = {}),
      (Lr = null),
      (Rr = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          (e = e._reactInternals), e.queue !== null && e.queue.push(t);
        },
        enqueueReplaceState: function (e, t) {
          (e = e._reactInternals), (e.replace = !0), (e.queue = [t]);
        },
        enqueueForceUpdate: function () {},
      }),
      (zr = { id: 1, overflow: `` }),
      (Br = Math.clz32 ? Math.clz32 : Xe),
      (Vr = Math.log),
      (Hr = Math.LN2),
      (Ur = typeof Object.is == `function` ? Object.is : Ze),
      (Wr = null),
      (Gr = null),
      (Kr = null),
      (Z = null),
      (qr = !1),
      (Jr = !1),
      (Yr = 0),
      (Xr = null),
      (Zr = 0),
      (Qr = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return Qe(), e._currentValue2;
        },
        useMemo: it,
        useReducer: rt,
        useRef: function (e) {
          (Wr = Qe()), (Z = et());
          var t = Z.memoizedState;
          return t === null ? ((e = { current: e }), (Z.memoizedState = e)) : t;
        },
        useState: function (e) {
          return rt(nt, e);
        },
        useInsertionEffect: st,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return it(function () {
            return e;
          }, t);
        },
        useImperativeHandle: st,
        useEffect: st,
        useDebugValue: st,
        useDeferredValue: function (e) {
          return Qe(), e;
        },
        useTransition: function () {
          return Qe(), [!1, ot];
        },
        useId: function () {
          var e = Gr.treeContext,
            t = e.overflow;
          (e = e.id), (e = (e & ~(1 << (32 - Br(e) - 1))).toString(32) + t);
          var n = $r;
          if (n === null) throw Error(U(404));
          return (
            (t = Yr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return Qe(), t(e._source);
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(U(407));
          return n();
        },
      }),
      ($r = null),
      (ei =
        nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher),
      (tr.renderToNodeStream = function () {
        throw Error(U(207));
      }),
      (tr.renderToStaticMarkup = function (e, t) {
        return Ft(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (tr.renderToStaticNodeStream = function () {
        throw Error(U(208));
      }),
      (tr.renderToString = function (e, t) {
        return Ft(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (tr.version = `18.2.0`),
      (ti = `default` in d ? i : d),
      (ni = {}),
      (ri = ti),
      (ii = null),
      (ai = 0),
      (oi = new TextEncoder()),
      (si = Object.prototype.hasOwnProperty),
      (ci =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (li = {}),
      (ui = {}),
      (Q = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          Q[e] = new zt(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        Q[t] = new zt(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (
        e
      ) {
        Q[e] = new zt(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        Q[e] = new zt(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          Q[e] = new zt(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        Q[e] = new zt(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        Q[e] = new zt(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        Q[e] = new zt(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        Q[e] = new zt(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (di = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(di, Bt);
          Q[t] = new zt(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(di, Bt);
          Q[t] = new zt(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(di, Bt);
        Q[t] = new zt(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        Q[e] = new zt(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Q.xlinkHref = new zt(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        Q[e] = new zt(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (fi = {
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
        strokeWidth: !0,
      }),
      (pi = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(fi).forEach(function (e) {
        pi.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fi[t] = fi[e]);
        });
      }),
      (mi = /["'&<>]/),
      (hi = /([A-Z])/g),
      (gi = /^ms-/),
      (_i = Array.isArray),
      (vi = Y(`<script>`)),
      (yi = Y(`</script>`)),
      (bi = Y(`<script src="`)),
      (xi = Y(`<script type="module" src="`)),
      (Si = Y(`" async=""></script>`)),
      (Ci = /(<\/|<)(s)(cript)/gi),
      (wi = Y(`<!-- -->`)),
      (Ti = new Map()),
      (Ei = Y(` style="`)),
      (Di = Y(`:`)),
      (Oi = Y(`;`)),
      (ki = Y(` `)),
      (Ai = Y(`="`)),
      (ji = Y(`"`)),
      (Mi = Y(`=""`)),
      (Ni = Y(`>`)),
      (Pi = Y(`/>`)),
      (Fi = Y(` selected=""`)),
      (Ii = Y(`
`)),
      (Li = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (Ri = new Map()),
      (zi = Y(`<!DOCTYPE html>`)),
      (Bi = Y(`</`)),
      (Vi = Y(`>`)),
      (Hi = Y(`<template id="`)),
      (Ui = Y(`"></template>`)),
      (Wi = Y(`<!--$-->`)),
      (Gi = Y(`<!--$?--><template id="`)),
      (Ki = Y(`"></template>`)),
      (qi = Y(`<!--$!-->`)),
      (Ji = Y(`<!--/$-->`)),
      (Yi = Y(`<template`)),
      (Xi = Y(`"`)),
      (Zi = Y(` data-dgst="`)),
      Y(` data-msg="`),
      Y(` data-stck="`),
      (Qi = Y(`></template>`)),
      ($i = Y(`<div hidden id="`)),
      (ea = Y(`">`)),
      (ta = Y(`</div>`)),
      (na = Y(`<svg aria-hidden="true" style="display:none" id="`)),
      (ra = Y(`">`)),
      (ia = Y(`</svg>`)),
      (aa = Y(`<math aria-hidden="true" style="display:none" id="`)),
      (oa = Y(`">`)),
      (sa = Y(`</math>`)),
      (ca = Y(`<table hidden id="`)),
      (la = Y(`">`)),
      (ua = Y(`</table>`)),
      (da = Y(`<table hidden><tbody id="`)),
      (fa = Y(`">`)),
      (pa = Y(`</tbody></table>`)),
      (ma = Y(`<table hidden><tr id="`)),
      (ha = Y(`">`)),
      (ga = Y(`</tr></table>`)),
      (_a = Y(`<table hidden><colgroup id="`)),
      (va = Y(`">`)),
      (ya = Y(`</colgroup></table>`)),
      (ba = Y(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
      )),
      (xa = Y(`$RS("`)),
      (Sa = Y(`","`)),
      (Ca = Y(`")</script>`)),
      (wa = Y(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
      )),
      (Ta = Y(`$RC("`)),
      (Ea = Y(`","`)),
      (Da = Y(`")</script>`)),
      (Oa = Y(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
      )),
      (ka = Y(`$RX("`)),
      (Aa = Y(`"`)),
      (ja = Y(`)</script>`)),
      (Ma = Y(`,`)),
      (Na = /[<\u2028\u2029]/g),
      (Pa = Object.assign),
      (Fa = Symbol.for(`react.element`)),
      (Ia = Symbol.for(`react.portal`)),
      (La = Symbol.for(`react.fragment`)),
      (Ra = Symbol.for(`react.strict_mode`)),
      (za = Symbol.for(`react.profiler`)),
      (Ba = Symbol.for(`react.provider`)),
      (Va = Symbol.for(`react.context`)),
      (Ha = Symbol.for(`react.forward_ref`)),
      (Ua = Symbol.for(`react.suspense`)),
      (Wa = Symbol.for(`react.suspense_list`)),
      (Ga = Symbol.for(`react.memo`)),
      (Ka = Symbol.for(`react.lazy`)),
      (qa = Symbol.for(`react.scope`)),
      (Ja = Symbol.for(`react.debug_trace_mode`)),
      (Ya = Symbol.for(`react.legacy_hidden`)),
      (Xa = Symbol.for(`react.default_value`)),
      (Za = Symbol.iterator),
      (Qa = {}),
      ($a = null),
      (eo = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          (e = e._reactInternals), e.queue !== null && e.queue.push(t);
        },
        enqueueReplaceState: function (e, t) {
          (e = e._reactInternals), (e.replace = !0), (e.queue = [t]);
        },
        enqueueForceUpdate: function () {},
      }),
      (to = { id: 1, overflow: `` }),
      (no = Math.clz32 ? Math.clz32 : gn),
      (ro = Math.log),
      (io = Math.LN2),
      (ao = typeof Object.is == `function` ? Object.is : _n),
      (oo = null),
      (so = null),
      (co = null),
      ($ = null),
      (lo = !1),
      (uo = !1),
      (fo = 0),
      (po = null),
      (mo = 0),
      (ho = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return vn(), e._currentValue;
        },
        useMemo: wn,
        useReducer: Cn,
        useRef: function (e) {
          (oo = vn()), ($ = bn());
          var t = $.memoizedState;
          return t === null ? ((e = { current: e }), ($.memoizedState = e)) : t;
        },
        useState: function (e) {
          return Cn(Sn, e);
        },
        useInsertionEffect: Dn,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return wn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: Dn,
        useEffect: Dn,
        useDebugValue: Dn,
        useDeferredValue: function (e) {
          return vn(), e;
        },
        useTransition: function () {
          return vn(), [!1, En];
        },
        useId: function () {
          var e = so.treeContext,
            t = e.overflow;
          (e = e.id), (e = (e & ~(1 << (32 - no(e) - 1))).toString(32) + t);
          var n = go;
          if (n === null) throw Error(G(404));
          return (
            (t = fo++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return vn(), t(e._source);
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(G(407));
          return n();
        },
      }),
      (go = null),
      (_o =
        ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher),
      (ni.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              (a = e), (i = t);
            }),
            s = An(
              e,
              Ut(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0
              ),
              Gt(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) (s.status = 2), Lt(e, s.fatalError);
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          Qn(s, e);
                        } catch (e) {
                          Nn(s, e), Pn(s, e);
                        }
                      }
                    },
                    cancel: function () {
                      $n(s);
                    },
                  },
                  { highWaterMark: 0 }
                );
                (e.allReady = o), n(e);
              },
              function (e) {
                o.catch(function () {}), r(e);
              },
              i
            );
          if (t && t.signal) {
            var c = t.signal,
              l = function () {
                $n(s, c.reason), c.removeEventListener(`abort`, l);
              };
            c.addEventListener(`abort`, l);
          }
          Kn(s);
        });
      }),
      (ni.version = `18.2.0`),
      (vo = {}),
      (yo = tr),
      (bo = ni),
      (vo.version = yo.version),
      (vo.renderToString = yo.renderToString),
      (vo.renderToStaticMarkup = yo.renderToStaticMarkup),
      (vo.renderToNodeStream = yo.renderToNodeStream),
      (vo.renderToStaticNodeStream = yo.renderToStaticNodeStream),
      (vo.renderToReadableStream = bo.renderToReadableStream),
      (xo = vo.version),
      (So = vo.renderToString),
      (Co = vo.renderToStaticMarkup),
      (wo = vo.renderToNodeStream),
      (To = vo.renderToStaticNodeStream),
      (Eo = vo.renderToReadableStream);
  });
function Oo(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var ko,
  Ao,
  jo = e(() => {
    (ko = (e) => e), (Ao = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 });
  });
function Mo(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do (o = t + (n - t) / 2), (a = Po(o, r, i) - e), a > 0 ? (n = o) : (t = o);
  while (Math.abs(a) > Fo && ++s < Io);
  return o;
}
function No(e, t, n, r) {
  if (e === t && n === r) return ko;
  let i = (t) => Mo(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : Po(i(e), t, r));
}
var Po,
  Fo,
  Io,
  Lo = e(() => {
    jo(),
      (Po = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e),
      (Fo = 1e-7),
      (Io = 12);
  }),
  Ro,
  zo = e(() => {
    Lo(),
      (Ro = {
        ease: No(0.25, 0.1, 0.25, 1),
        "ease-in": No(0.42, 0, 1, 1),
        "ease-in-out": No(0.42, 0, 0.58, 1),
        "ease-out": No(0, 0, 0.58, 1),
      });
  });
function Bo(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Vo = e(() => {}),
  Ho,
  Uo,
  Wo,
  Go,
  Ko = e(() => {
    (Ho = {}),
      Object.defineProperty(Ho, `__esModule`, { value: !0 }),
      (Ho.warning = function () {}),
      (Ho.invariant = function () {}),
      (Uo = Ho.__esModule),
      (Wo = Ho.warning),
      (Go = Ho.invariant);
  });
function qo(e, t, n) {
  let r = Math.max(t - Xo, 0);
  return Oo(n - e(r), t - r);
}
function Jo(e, t, n) {
  return (e < t && n >= t) || (e > t && n <= t);
}
function Yo(e) {
  let t,
    n = ts,
    r = e(0),
    i = [r.current];
  for (; !r.done && n < ns; )
    (r = e(n)),
      i.push(r.done ? r.target : r.current),
      t === void 0 && r.hasReachedTarget && (t = n),
      (n += ts);
  let a = n - ts;
  return (
    i.length === 1 && i.push(r.current),
    { keyframes: i, duration: a / 1e3, overshootDuration: (t ?? a) / 1e3 }
  );
}
var Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs = e(() => {
    jo(),
      (Xo = 5),
      (Zo = { stiffness: 100, damping: 10, mass: 1 }),
      (Qo = (e = Zo.stiffness, t = Zo.damping, n = Zo.mass) =>
        t / (2 * Math.sqrt(e * n))),
      ($o = ({
        stiffness: e = Zo.stiffness,
        damping: t = Zo.damping,
        mass: n = Zo.mass,
        from: r = 0,
        to: i = 1,
        velocity: a = 0,
        restSpeed: o = 2,
        restDistance: s = 0.5,
      } = {}) => {
        a = a ? Ao.s(a) : 0;
        let c = { done: !1, hasReachedTarget: !1, current: r, target: i },
          l = i - r,
          u = Math.sqrt(e / n) / 1e3,
          d = Qo(e, t, n),
          f;
        if (d < 1) {
          let e = u * Math.sqrt(1 - d * d);
          f = (t) =>
            i -
            Math.exp(-d * u * t) *
              (((d * u * l - a) / e) * Math.sin(e * t) + l * Math.cos(e * t));
        } else f = (e) => i - Math.exp(-u * e) * (l + (u * l - a) * e);
        return (e) => {
          c.current = f(e);
          let t = e === 0 ? a : qo(f, e, c.current),
            n = Math.abs(t) <= o,
            l = Math.abs(i - c.current) <= s;
          return (
            (c.done = n && l), (c.hasReachedTarget = Jo(r, i, c.current)), c
          );
        };
      }),
      (es = ({
        from: e = 0,
        velocity: t = 0,
        power: n = 0.8,
        decay: r = 0.325,
        bounceDamping: i,
        bounceStiffness: a,
        changeTarget: o,
        min: s,
        max: c,
        restDistance: l = 0.5,
        restSpeed: u,
      }) => {
        r = Ao.ms(r);
        let d = { hasReachedTarget: !1, done: !1, current: e, target: e },
          f = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
          p = (e) =>
            s === void 0
              ? c
              : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
              ? s
              : c,
          m = n * t,
          h = e + m,
          g = o === void 0 ? h : o(h);
        (d.target = g), g !== h && (m = g - e);
        let _ = (e) => -m * Math.exp(-e / r),
          v = (e) => g + _(e),
          y = (e) => {
            let t = _(e),
              n = v(e);
            (d.done = Math.abs(t) <= l), (d.current = d.done ? g : n);
          },
          b,
          x,
          S = (e) => {
            f(d.current) &&
              ((b = e),
              (x = $o({
                from: d.current,
                to: p(d.current),
                velocity: qo(v, e, d.current),
                damping: i,
                stiffness: a,
                restDistance: l,
                restSpeed: u,
              })));
          };
        return (
          S(0),
          (e) => {
            let t = !1;
            return (
              !x && b === void 0 && ((t = !0), y(e), S(e)),
              b !== void 0 && e > b
                ? ((d.hasReachedTarget = !0), x(e - b))
                : ((d.hasReachedTarget = !1), !t && y(e), d)
            );
          }
        );
      }),
      (ts = 10),
      (ns = 1e4);
  });
function os(e, t) {
  var n;
  return (
    typeof e == `string`
      ? t
        ? ((n = t[e]) ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function ss(e) {
  let t = new WeakMap();
  return (n = {}) => {
    let r = new Map(),
      i = (t = 0, i = 100, a = 0, o = !1) => {
        let s = `${t}-${i}-${a}-${o}`;
        return (
          r.has(s) ||
            r.set(
              s,
              e(
                Object.assign(
                  {
                    from: t,
                    to: i,
                    velocity: a,
                    restSpeed: o ? 0.05 : 2,
                    restDistance: o ? 0.01 : 0.5,
                  },
                  n
                )
              )
            ),
          r.get(s)
        );
      },
      a = (e) => (t.has(e) || t.set(e, Yo(e)), t.get(e));
    return {
      createAnimation: (e, t, n, r, o) => {
        var s, c;
        let l,
          u = e.length,
          d = n && u <= 2 && e.every(js);
        if (d) {
          let n = e[u - 1],
            d = u === 1 ? null : e[0],
            f = 0,
            p = 0,
            m = o?.generator;
          if (m) {
            let { animation: t, generatorStartTime: n } = o,
              r = t?.startTime || n || 0,
              i = t?.currentTime || performance.now() - r,
              a = m(i).current;
            (p = (s = d) ?? a),
              (u === 1 || (u === 2 && e[0] === null)) &&
                (f = qo((e) => m(e).current, i, a));
          } else p = (c = d) ?? parseFloat(t());
          let h = i(p, n, f, r?.includes(`scale`)),
            g = a(h);
          (l = Object.assign(Object.assign({}, g), { easing: `linear` })),
            o &&
              ((o.generator = h), (o.generatorStartTime = performance.now()));
        } else {
          let e = a(i(0, 100));
          l = { easing: `ease`, duration: e.overshootDuration };
        }
        return l;
      },
    };
  };
}
function cs(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = os(e),
    o = new WeakMap(),
    s = (e) => {
      e.forEach((e) => {
        let n = o.get(e.target);
        if (e.isIntersecting !== !!n)
          if (e.isIntersecting) {
            let n = t(e);
            typeof n == `function` ? o.set(e.target, n) : c.unobserve(e.target);
          } else n && (n(e), o.delete(e.target));
      });
    },
    c = new IntersectionObserver(s, {
      root: n,
      rootMargin: r,
      threshold: typeof i == `number` ? i : Ps[i],
    });
  return a.forEach((e) => c.observe(e)), () => c.disconnect();
}
function ls(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function us({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Fs.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return ls(e, n);
        },
      });
    });
}
function ds(e) {
  e.forEach(us);
}
function fs() {
  typeof ResizeObserver < `u` && (Is = new ResizeObserver(ds));
}
function ps(e, t) {
  Is || fs();
  let n = os(e);
  return (
    n.forEach((e) => {
      let n = Fs.get(e);
      n || ((n = new Set()), Fs.set(e, n)), n.add(t), Is?.observe(e);
    }),
    () => {
      n.forEach((e) => {
        let n = Fs.get(e);
        n?.delete(t), (n != null && n.size) || Is == null || Is.unobserve(e);
      });
    }
  );
}
function ms() {
  (Rs = () => {
    let e = { width: b.innerWidth, height: b.innerHeight },
      t = { target: b, size: e, contentSize: e };
    Ls.forEach((e) => e(t));
  }),
    b.addEventListener(`resize`, Rs);
}
function hs(e) {
  return (
    Ls.add(e),
    Rs || ms(),
    () => {
      Ls.delete(e), !Ls.size && Rs && (Rs = void 0);
    }
  );
}
function gs(e, t) {
  return typeof e == `function` ? hs(e) : ps(e, t);
}
function _s(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function vs(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs = e(() => {
    for (let e in (c(),
    jo(),
    zo(),
    Vo(),
    Ko(),
    rs(),
    (ys = [``, `X`, `Y`, `Z`]),
    (bs = [`translate`, `scale`, `rotate`, `skew`]),
    (xs = {
      syntax: `<angle>`,
      initialValue: `0deg`,
      toDefaultUnit: (e) => e + `deg`,
    }),
    (Ss = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: xs,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: ko },
      skew: xs,
    }),
    (Cs = new Map()),
    (ws = (e) => `--motion-${e}`),
    (Ts = [`x`, `y`, `z`]),
    bs.forEach((e) => {
      ys.forEach((t) => {
        Ts.push(e + t), Cs.set(ws(e + t), Ss[e]);
      });
    }),
    (Es = new Set(Ts)),
    (Ds = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (Os = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          Ds({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!Ds({ opacity: [0, 1] }).finished,
    }),
    (ks = {}),
    (As = {}),
    Os))
      As[e] = () => (ks[e] === void 0 && (ks[e] = Os[e]()), ks[e]);
    (js = (e) => typeof e != `string`),
      (Ms = ss($o)),
      (Ns = ss(es)),
      (Ps = { any: 0, all: 1 }),
      (Fs = new WeakMap()),
      (Ls = new Set()),
      (zs = {
        isActive: (e) => !!e.inView,
        subscribe: (
          e,
          { enable: t, disable: n },
          { inViewOptions: r = {} }
        ) => {
          let { once: i } = r,
            a = Bo(r, [`once`]);
          return cs(
            e,
            (r) => {
              if ((t(), vs(e, `viewenter`, r), !i))
                return (t) => {
                  n(), vs(e, `viewleave`, t);
                };
            },
            a
          );
        },
      }),
      (Bs = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), _s(e, t, r));
      }),
      (Vs = {
        isActive: (e) => !!e.hover,
        subscribe: (e, { enable: t, disable: n }) => {
          let r = Bs(e, `hoverstart`, t),
            i = Bs(e, `hoverend`, n);
          return (
            e.addEventListener(`pointerenter`, r),
            e.addEventListener(`pointerleave`, i),
            () => {
              e.removeEventListener(`pointerenter`, r),
                e.removeEventListener(`pointerleave`, i);
            }
          );
        },
      }),
      (Hs = {
        isActive: (e) => !!e.press,
        subscribe: (e, { enable: t, disable: n }) => {
          let r = (t) => {
              n(), _s(e, `pressend`, t), b.removeEventListener(`pointerup`, r);
            },
            i = (n) => {
              t(), _s(e, `pressstart`, n), b.addEventListener(`pointerup`, r);
            };
          return (
            e.addEventListener(`pointerdown`, i),
            () => {
              e.removeEventListener(`pointerdown`, i),
                b.removeEventListener(`pointerup`, r);
            }
          );
        },
      }),
      (Us = { inView: zs, hover: Vs, press: Hs }),
      (Ws = [`initial`, `animate`, ...Object.keys(Us), `exit`]);
  });
function Ks(e) {
  let {
      slots: t = [],
      gap: n,
      padding: r,
      paddingPerSide: i,
      paddingTop: o,
      paddingRight: s,
      paddingBottom: c,
      paddingLeft: u,
      speed: d,
      hoverFactor: h,
      direction: b,
      alignment: x,
      sizingOptions: C,
      fadeOptions: w,
      style: T,
    } = e,
    {
      fadeContent: k,
      overflow: A,
      fadeWidth: j,
      fadeInset: ie,
      fadeAlpha: M,
    } = w,
    { widthType: N, heightType: P } = C,
    F = i ? `${o}px ${s}px ${c}px ${u}px` : `${r}px`,
    I = ae.current(),
    L = I === ae.canvas || I === ae.export,
    oe = t.filter(Boolean),
    R = l.count(oe),
    z = R > 0;
  b === !0 && (b = `left`);
  let se = b === `left` || b === `right`,
    B = O(0),
    ce = Js[b],
    V = re(B, ce),
    H = p(null),
    le = g(() => [{ current: null }, { current: null }], []),
    [ue, de] = S({ parent: null, children: null }),
    fe = null,
    pe = [],
    me = 0,
    he = 0;
  L && ((me = R ? Math.floor(10 / R) : 0), (he = 1)),
    !L &&
      z &&
      ue.parent &&
      ((me = Math.round((ue.parent / ue.children) * 2) + 1),
      (me = Math.min(me, qs)),
      (he = 1));
  let ge = _(() => {
      if (z && H.current) {
        let e = se ? H.current.offsetWidth : H.current.offsetHeight,
          t = le[0].current
            ? se
              ? le[0].current.offsetLeft
              : le[0].current.offsetTop
            : 0,
          r = le[1].current
            ? se
              ? le[1].current.offsetLeft + le[1].current.offsetWidth
              : le[1].current.offsetTop + le[1].current.offsetHeight
            : 0,
          i = r - t + n;
        de({ parent: e, children: i });
      }
    }, []),
    _e = L ? { contentVisibility: `auto` } : {};
  if (z) {
    if (!L) {
      let e = p(!0);
      a(
        () => (
          te.read(ge, !1, !0),
          gs(H.current, ({ contentSize: t }) => {
            !e.current && (t.width || t.height) && te.read(ge, !1, !0),
              (e.current = !1);
          })
        ),
        []
      );
    }
    fe = l.map(oe, (e, t) => {
      let n;
      t === 0 && (n = le[0]), t === oe.length - 1 && (n = le[1]);
      let r = {
        width: N ? e.props?.width : `100%`,
        height: P ? e.props?.height : `100%`,
      };
      return f(ee, {
        inherit: `id`,
        children: f(`li`, {
          ref: n,
          style: r,
          children: m(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ..._e },
              layoutId: e.props.layoutId
                ? e.props.layoutId + `-original-` + t
                : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let ve = L ? !0 : D(H);
  if (!L)
    for (let e = 0; e < me; e++)
      pe = pe.concat(
        l.map(oe, (t, n) => {
          let r = {
            width: N ? t.props?.width : `100%`,
            height: P ? t.props?.height : `100%`,
            willChange: ve ? `transform` : void 0,
          };
          return f(
            ee,
            {
              inherit: `id`,
              children: f(
                `li`,
                {
                  style: r,
                  "aria-hidden": !0,
                  children: m(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: N ? t.props?.width : `100%`,
                        height: P ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ..._e,
                      },
                      layoutId: t.props.layoutId
                        ? t.props.layoutId + `-dupe-` + e
                        : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          );
        })
      );
  let ye = ue.children + ue.children * Math.round(ue.parent / ue.children),
    be = p(null),
    xe = p(null),
    U = p(0),
    Se = p(!1),
    Ce = ne(),
    we = p(null),
    W = p(null);
  if (!L) {
    y(() => {
      if (!(Ce || !ye || !d))
        return (
          (W.current = we.current.animate(
            { transform: [ce(0), ce(ye)] },
            {
              duration: (Math.abs(ye) / d) * 1e3,
              iterations: 1 / 0,
              easing: `linear`,
            }
          )),
          () => W.current.cancel()
        );
    }, [h, ye, d]);
    let e = _(() => {
      if (!W.current) return;
      let e = document.hidden;
      ve && !e && W.current.playState === `paused`
        ? W.current.play()
        : (!ve || e) && W.current.playState === `running` && W.current.pause();
    }, [ve]);
    y(() => {
      e();
    }, [ve, h, ye, d]),
      y(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      );
  }
  let Te = se ? `to right` : `to bottom`,
    Ee = j / 2,
    De = 100 - j / 2,
    Oe = ec(ie, 0, Ee),
    ke = 100 - ie,
    Ae = `linear-gradient(${Te}, rgba(0, 0, 0, ${M}) ${Oe}%, rgba(0, 0, 0, 1) ${Ee}%, rgba(0, 0, 0, 1) ${De}%, rgba(0, 0, 0, ${M}) ${ke}%)`;
  return z
    ? f(`section`, {
        style: {
          ...Ys,
          opacity: he,
          WebkitMaskImage: k ? Ae : void 0,
          maskImage: k ? Ae : void 0,
          overflow: A ? `visible` : `hidden`,
          padding: F,
        },
        ref: H,
        children: v(E.ul, {
          ref: we,
          style: {
            ...Ys,
            gap: n,
            top: b === `bottom` && tc(ye) ? -ye : void 0,
            left: b === `right` && tc(ye) ? -ye : void 0,
            placeItems: x,
            position: `relative`,
            flexDirection: se ? `row` : `column`,
            ...T,
            willChange: L || !ve ? `auto` : `transform`,
            transform: ce(0),
          },
          onMouseEnter: () => {
            (Se.current = !0), W.current && (W.current.playbackRate = h);
          },
          onMouseLeave: () => {
            (Se.current = !1), W.current && (W.current.playbackRate = 1);
          },
          children: [fe, pe],
        }),
      })
    : v(`section`, {
        style: Xs,
        children: [
          f(`div`, { style: Zs, children: `âœ¨` }),
          f(`p`, { style: Qs, children: `Connect to Content` }),
          f(`p`, {
            style: $s,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc = e(() => {
    o(),
      s(),
      H(),
      w(),
      Gs(),
      (qs = 100),
      (Js = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Ks.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: {
          fadeContent: !0,
          overflow: !1,
          fadeWidth: 25,
          fadeAlpha: 0,
          fadeInset: 0,
        },
        direction: !0,
      }),
      R(Ks, {
        slots: {
          type: j.Array,
          title: `Children`,
          control: { type: j.ComponentInstance },
        },
        speed: {
          type: j.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: j.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [
            `direction-left`,
            `direction-right`,
            `direction-up`,
            `direction-down`,
          ],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: j.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: j.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: j.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: j.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: j.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: j.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: j.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: j.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: j.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: j.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: j.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: j.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: j.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Ys = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Xs = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Zs = { fontSize: 32, marginBottom: 10 }),
      (Qs = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: `center`,
      }),
      ($s = {
        margin: 0,
        opacity: 0.7,
        maxWidth: 150,
        lineHeight: 1.5,
        textAlign: `center`,
      }),
      (ec = (e, t, n) => Math.min(Math.max(e, t), n)),
      (tc = (e) => typeof e == `number` && !isNaN(e));
  });
function rc(e) {
  let t = ac(e.svg, e.color, e.strokeWidth);
  return f(`div`, {
    "aria-hidden": `true`,
    style: {
      display: `flex`,
      maxWidth: `100%`,
      maxHeight: `100%`,
      alignItems: `center`,
      justifyContent: `center`,
      ...e.style,
    },
    dangerouslySetInnerHTML: { __html: t },
  });
}
function ic(e) {
  let t = e.match(/stroke-width="([^"]+)"/g);
  return !t || t.every((e) => e === `0`);
}
function ac(e, t = oc, n = cc) {
  let r = e.match(/<svg[^>]*>/)?.[0];
  r || ((e = sc), (r = e.match(/<svg[^>]*>/)?.[0]));
  let i = r.match(/width="([^"]*)"/)?.[1],
    a = r.match(/height="([^"]*)"/)?.[1],
    o = r.match(/viewBox="([^"]*)"/)?.[1]?.split(` `),
    s = o?.[2],
    c = o?.[3];
  i && a
    ? ((e = e.replace(/width="([^"]*)"/, `width="100%"`)),
      (e = e.replace(/height="([^"]*)"/, `height="100%"`)))
    : (e = e.replace(/<svg/, `<svg width="100%" height="100%"`));
  let l = !1;
  return (
    (e.includes(`fill="`) || e.includes(`stroke="`)) &&
      (e = e.replace(/(fill|stroke)="([^"]+)"/g, (e, n, r) =>
        r === `none` || r === `transparent`
          ? e
          : r === `white`
          ? ``
          : ((l = !0), `${n}="${t}"`)
      )),
    l ||
      (e = e.replace(
        /<(path|circle|rect|line|polygon|polyline) /g,
        (e) => `<${e.slice(1)} fill="${t}" `
      )),
    (e = e.replace(/stroke-width="([^"]+)"/g, (e, t) =>
      t === `0` ? e : `stroke-width="${n}"`
    )),
    e
  );
}
var oc,
  sc,
  cc,
  lc = e(() => {
    o(),
      H(),
      (oc = `#1570EF`),
      (sc = `<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m13.076 12.21 3.098 3.098a1.25 1.25 0 0 0 1.768 0l3.424-3.424a1.25 1.25 0 0 0 0-1.768l-3.424-3.424a1.25 1.25 0 0 0-1.768 0L13.076 9.79l4.902.903c.341.063.341.552 0 .614l-4.902.903Zm-3.206.786-3.178 3.178a1.25 1.25 0 0 0 0 1.768l3.424 3.424a1.25 1.25 0 0 0 1.768 0l3.424-3.424a1.25 1.25 0 0 0 0-1.768l-3.043-3.043-.878 4.768c-.063.34-.552.34-.615 0l-.902-4.903ZM6.692 4.058a1.25 1.25 0 0 0 0 1.768l3.177 3.178.903-4.903c.063-.34.552-.34.615 0l.878 4.768 3.043-3.043a1.25 1.25 0 0 0 0-1.768L11.884.634a1.25 1.25 0 0 0-1.768 0L6.692 4.058ZM.634 10.116a1.25 1.25 0 0 0 0 1.768l3.424 3.424a1.25 1.25 0 0 0 1.768 0l3.123-3.122-4.768-.879c-.341-.063-.341-.552 0-.614l4.768-.879-3.123-3.122a1.25 1.25 0 0 0-1.768 0L.634 10.116Z" fill="#1570EF"/></svg>`),
      (cc = 1.5),
      R(rc, {
        svg: { title: `SVG`, type: j.String, defaultValue: sc },
        strokeWidth: {
          type: j.Number,
          step: 0.25,
          min: 0.5,
          max: 2,
          defaultValue: cc,
          hidden: (e) => ic(e.svg),
        },
        color: {
          type: j.Color,
          defaultValue: oc,
          description: `By [FramerIcons](https://www.framericons.com?utm=FramerIconComponent)`,
        },
      });
  }),
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc = e(() => {
    H(),
      (uc = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`),
      (dc = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (fc = {
        ...dc,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (pc = {
        onClick: { type: j.EventHandler },
        onMouseEnter: { type: j.EventHandler },
        onMouseLeave: { type: j.EventHandler },
      }),
      (mc = {
        type: j.Number,
        title: `Font Size`,
        min: 2,
        max: 200,
        step: 1,
        displayStepper: !0,
      }),
      (hc = {
        font: {
          type: j.Boolean,
          title: `Font`,
          defaultValue: !1,
          disabledTitle: `Default`,
          enabledTitle: `Custom`,
        },
        fontFamily: {
          type: j.String,
          title: `Family`,
          placeholder: `Inter`,
          hidden: ({ font: e }) => !e,
        },
        fontWeight: {
          type: j.Enum,
          title: `Weight`,
          options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          optionTitles: [
            `Thin`,
            `Extra-light`,
            `Light`,
            `Regular`,
            `Medium`,
            `Semi-bold`,
            `Bold`,
            `Extra-bold`,
            `Black`,
          ],
          hidden: ({ font: e }) => !e,
        },
      });
  });
function _c(e, t) {
  return yc(!0, e, t);
}
function vc(e, t) {
  return yc(!1, e, t);
}
function yc(e, t, n = !0) {
  let r = pe();
  y(() => {
    n && r === e && t();
  }, [r]);
}
var bc = e(() => {
    H(), s();
  }),
  xc = e(() => {
    s();
  }),
  Sc = e(() => {
    H();
  }),
  Cc = e(() => {
    H();
  }),
  wc = e(() => {
    s();
  }),
  Tc = e(() => {
    H();
  }),
  Ec,
  Dc,
  Oc = e(() => {
    c(),
      s(),
      (Ec = () => {
        if (u !== void 0) {
          let e = u.userAgent.toLowerCase(),
            t =
              (e.indexOf(`safari`) > -1 ||
                e.indexOf(`framermobile`) > -1 ||
                e.indexOf(`framerx`) > -1) &&
              e.indexOf(`chrome`) < 0;
          return t;
        } else return !1;
      }),
      (Dc = () => g(() => Ec(), []));
  }),
  kc = e(() => {
    s(), Cc();
  }),
  Ac = e(() => {
    s(), H(), Cc(), xc();
  });
function jc(e) {
  let {
      fontFamily: t = `Inter`,
      fontSize: n = 16,
      fontWeight: r = 400,
      font: i = !1,
    } = e,
    a = Mc[r],
    o = `"${t} ${a}", "${t}", ${uc}`,
    s = t
      ? { fontSize: n, fontWeight: r, fontFamily: o }
      : { fontSize: n, fontWeight: r },
    c = async () => {
      await se
        .loadWebFontsFromSelectors([
          `CUSTOM;${t}`,
          `CUSTOM;${t} ${a}`,
          `GF;${t}-${a.toLowerCase()}`,
        ])
        .catch((e) => console.error(e));
    };
  return (
    y(() => {
      i && c();
    }, [i, t, r]),
    s
  );
}
var Mc,
  Nc = e(() => {
    H(),
      s(),
      gc(),
      (Mc = {
        100: `Thin`,
        200: `Extra-light`,
        300: `Light`,
        400: `Regular`,
        500: `Medium`,
        600: `Semi-bold`,
        700: `Bold`,
        800: `Extra-bold`,
        900: `Black`,
      });
  });
function Pc() {
  let e = g(() => ae.current(), []);
  return e;
}
function Fc() {
  let e = g(() => ae.current() === ae.canvas, []);
  return e;
}
var Ic = e(() => {
    s(), H();
  }),
  Lc = e(() => {
    s();
  });
function Rc(e) {
  let {
      borderRadius: t,
      isMixedBorderRadius: n,
      topLeftRadius: r,
      topRightRadius: i,
      bottomRightRadius: a,
      bottomLeftRadius: o,
    } = e,
    s = g(
      () => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`),
      [t, n, r, i, a, o]
    );
  return s;
}
function zc(e) {
  let {
      padding: t,
      paddingPerSide: n,
      paddingTop: r,
      paddingRight: i,
      paddingBottom: a,
      paddingLeft: o,
    } = e,
    s = g(() => (n ? `${r}px ${i}px ${a}px ${o}px` : t), [t, n, r, i, a, o]);
  return s;
}
var Bc,
  Vc,
  Hc = e(() => {
    s(),
      H(),
      (Bc = {
        borderRadius: {
          title: `Radius`,
          type: j.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [
            `topLeftRadius`,
            `topRightRadius`,
            `bottomRightRadius`,
            `bottomLeftRadius`,
          ],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      (Vc = {
        padding: {
          type: j.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      });
  }),
  Uc = e(() => {
    gc(),
      bc(),
      xc(),
      Sc(),
      Cc(),
      wc(),
      Tc(),
      Oc(),
      kc(),
      Ac(),
      Nc(),
      Ic(),
      Lc(),
      Hc();
  });
function Wc(e) {
  let {
      label: t,
      content: n,
      fill: r,
      color: i,
      style: a,
      onClick: o,
      font: s,
      hoverOptions: c,
      ...l
    } = e,
    d = jc({ fontWeight: 500, ...l }),
    p = Rc(e),
    m = zc(e),
    h = _(() => {
      var e;
      (e = u.clipboard) == null || e.writeText(n), o?.();
    }, [o, n]);
  return f(E.button, {
    style: {
      border: `none`,
      outline: `none`,
      resize: `none`,
      width: `max-content`,
      wordBreak: `break-word`,
      overflowWrap: `break-word`,
      WebkitTapHighlightColor: `rgba(0, 0, 0, 0)`,
      letterSpacing: `-0.2px`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      background: r,
      borderRadius: p,
      cursor: `pointer`,
      padding: m,
      color: i,
      ...d,
      ...s,
      ...a,
    },
    onClick: h,
    ...l,
    whileHover: c,
    transition: c?.transition,
    children: t,
  });
}
var Gc = e(() => {
    c(),
      o(),
      s(),
      H(),
      w(),
      Uc(),
      R(Wc, {
        content: {
          type: j.String,
          title: `Content`,
          displayTextArea: !0,
          description: `When clicked, this content will be copied to the clipboard.`,
        },
        label: {
          type: j.String,
          title: `Label`,
          defaultValue: `Copy to Clipboard`,
        },
        fill: { type: j.Color, title: `Fill`, defaultValue: `#06F` },
        color: { type: j.Color, title: `Text`, defaultValue: `#fff` },
        font: {
          type: j.Font,
          controls: `extended`,
          defaultValue: { fontSize: 16 },
        },
        hoverOptions: {
          type: j.Object,
          title: `Hover`,
          buttonTitle: `Effect`,
          optional: !0,
          controls: {
            scale: {
              type: j.Number,
              title: `Scale`,
              min: 0,
              max: 10,
              displayStepper: !0,
              step: 0.01,
              defaultValue: 1.1,
            },
            backgroundColor: {
              type: j.Color,
              title: `Fill`,
              defaultValue: `#0088FF`,
              optional: !0,
            },
            color: {
              type: j.Color,
              title: `Color`,
              defaultValue: `#FFF`,
              optional: !0,
            },
            transition: {
              type: j.Transition,
              title: `Transition`,
              defaultValue: { type: `spring`, stiffness: 400, damping: 30 },
            },
          },
        },
        padding: {
          type: j.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
          defaultValue: 10,
        },
        borderRadius: {
          title: `Radius`,
          type: j.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [
            `topLeftRadius`,
            `topRightRadius`,
            `bottomRightRadius`,
            `bottomLeftRadius`,
          ],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
          defaultValue: 50,
        },
        ...pc,
      });
  }),
  Kc = e(() => {
    gc(),
      bc(),
      xc(),
      Sc(),
      Cc(),
      wc(),
      Tc(),
      Oc(),
      kc(),
      Ac(),
      Nc(),
      Ic(),
      Lc(),
      Hc();
  });
function qc(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function Jc(e) {
  let t = qc(e);
  return f(nl, { ...t });
}
function Yc(e) {
  let t = pe(),
    n = p(!1),
    r = p(!1),
    i = _((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []),
    a = _(() => {
      let i = e.current;
      if (!i) return;
      i.preload = `auto`;
      let a =
        i.currentTime > 0 &&
        i.onplaying &&
        !i.paused &&
        !i.ended &&
        i.readyState >= i.HAVE_CURRENT_DATA;
      !a &&
        i &&
        !n.current &&
        t &&
        ((n.current = !0),
        (r.current = !0),
        i
          .play()
          .catch((e) => {})
          .finally(() => (n.current = !1)));
    }, []),
    o = _(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []);
  return { play: a, pause: o, setProgress: i, isPlaying: r };
}
function Xc({
  playingProp: e,
  muted: t,
  loop: n,
  playsinline: r,
  controls: i,
}) {
  let [a] = S(() => e),
    [o, s] = S(!1);
  e !== a && !o && s(!0);
  let c = a && t && n && r && !i && !o,
    l;
  return (l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), l;
}
function Zc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Qc(e) {
  let t = e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [];
  return t.map(Zc).join(` `);
}
var $c,
  el,
  tl,
  nl,
  rl,
  il = e(() => {
    o(),
      H(),
      w(),
      Kc(),
      s(),
      (function (e) {
        (e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`);
      })(($c ||= {})),
      (function (e) {
        (e.Video = `Upload`), (e.Url = `URL`);
      })((el ||= {})),
      (tl = `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeigti4w5i3xcbrxjxmhswqd5nnyzogpnlp46gpek7eehebb3etbswy`),
      (nl = t(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: o = !0,
            loop: s = !0,
            muted: c = !0,
            playsinline: l = !0,
            restartOnEnter: u = !1,
            objectFit: d = `cover`,
            backgroundColor: m = `rgba(0,0,0,0)`,
            radius: h = 0,
            volume: _ = 25,
            startTime: v = 0,
            poster: b,
            playing: x,
            progress: S,
            onSeeked: ee,
            onPause: C,
            onPlay: te,
            onEnd: w,
            onClick: E,
            onMouseEnter: O,
            onMouseLeave: ne,
            onMouseDown: re,
            onMouseUp: k,
          } = e,
          A = p(),
          j = Dc(),
          ie = p(null),
          M = p(null),
          N = Fc(),
          P = Pc(),
          F = N || P === ae.export,
          I = Rc(e),
          L = F
            ? `no-autoplay`
            : Xc({
                playingProp: x,
                muted: c,
                loop: s,
                playsinline: l,
                controls: a,
              }),
          oe = F ? !0 : D(A),
          R = F ? !1 : D(A, { margin: `10%`, once: !0 }),
          z = v === 100 ? 99.9 : v,
          { play: se, pause: B, setProgress: ce, isPlaying: V } = Yc(A);
        y(() => {
          F || (L !== `on-viewport` && (x ? se() : B()));
        }, [L, x]),
          y(() => {
            F ||
              (oe && x && L !== `no-autoplay` && se(),
              L === `on-viewport` && B());
          }, [L, oe, x]),
          y(() => {
            !N || b || i || z || !A.current || (A.current.currentTime = 0.01);
          }, [i, b, z]);
        let H = p(!1);
        y(() => {
          if (!H.current) {
            H.current = !0;
            return;
          }
          let e = T(S) ? S.get() : (S ?? 0) * 0.01;
          ce((e ?? 0) || (z ?? 0) / 100);
        }, [z, r, n, S]),
          y(() => {
            if (T(S)) return S.on(`change`, (e) => ce(e));
          }, [S]),
          _c(() => {
            ie.current !== null &&
              A.current &&
              ((!M && s) || !ie.current) &&
              se();
          }),
          vc(() => {
            A.current &&
              ((M.current = A.current.ended),
              (ie.current = A.current.paused),
              B());
          });
        let le = g(() => {
          let e = ``;
          if (t === `URL`) return n + e;
          if (t === `Upload`) return r + e;
        }, [t, r, n, z]);
        y(() => {
          j && A.current && L === `on-mount` && setTimeout(() => se(), 50);
        }, []),
          y(() => {
            A.current && !c && (A.current.volume = (_ ?? 0) / 100);
          }, [_]);
        let ue = () => {
          let e = A.current;
          e &&
            (e.currentTime < 0.3 && z > 0 && ce((z ?? 0) * 0.01),
            (V.current ||
              L === `on-mount` ||
              (x && L === `on-viewport` && oe)) &&
              se());
        };
        return f(`video`, {
          onClick: E,
          onMouseEnter: O,
          onMouseLeave: ne,
          onMouseDown: re,
          onMouseUp: k,
          src: le,
          loop: s,
          ref: A,
          onSeeked: (e) => ee?.(e),
          onPause: (e) => C?.(e),
          onPlay: (e) => te?.(e),
          onEnded: (e) => w?.(e),
          autoPlay:
            V.current || L === `on-mount` || (x && L === `on-viewport` && oe),
          preload: V.current
            ? `auto`
            : F && !b
            ? `metadata`
            : L !== `on-mount` && !R
            ? `none`
            : `metadata`,
          poster:
            i && !r && n === tl
              ? `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreiecnnegwzegagzlryy6lbwqhlheusyqxlshx6imcpr6enzvtt42pu`
              : i && b
              ? b
              : void 0,
          onLoadedData: ue,
          controls: a,
          muted: F ? !0 : c,
          playsInline: l,
          style: {
            cursor: E ? `pointer` : `auto`,
            width: `100%`,
            height: `100%`,
            borderRadius: I,
            display: `block`,
            objectFit: d,
            backgroundColor: m,
            objectPosition: `50% 50%`,
          },
        });
      })),
      (Jc.displayName = `Video`),
      (rl = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      R(Jc, {
        srcType: {
          type: j.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: j.String,
          title: `URL`,
          defaultValue: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeigti4w5i3xcbrxjxmhswqd5nnyzogpnlp46gpek7eehebb3etbswy`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: j.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: {
          type: j.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        ...Bc,
        posterEnabled: {
          type: j.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: j.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: {
          type: j.Color,
          title: `Background`,
          defaultValue: `rgba(0,0,0,0)`,
        },
        startTime: {
          title: `Start Time`,
          type: j.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
        },
        loop: {
          type: j.Boolean,
          title: `Loop`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        objectFit: {
          type: j.Enum,
          title: `Fit`,
          options: rl,
          optionTitles: rl.map(Qc),
        },
        controls: {
          type: j.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: {
          type: j.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        volume: {
          type: j.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: j.EventHandler },
        onSeeked: { type: j.EventHandler },
        onPause: { type: j.EventHandler },
        onPlay: { type: j.EventHandler },
        ...pc,
      });
  }),
  al,
  ol,
  sl,
  cl = e(() => {
    H(),
      se.loadFonts([
        `FS;Switzer-regular`,
        `FS;Switzer-bold`,
        `FS;Switzer-bold italic`,
        `FS;Switzer-italic`,
      ]),
      (al = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Switzer`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BLNB4FAQFNK56DWWNF7PMGTCOTZHOEII/ST3WKSSDMBK2MIQQO3MAVYWLF4FTOLFV/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2`,
              weight: `400`,
            },
            {
              family: `Switzer`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/HBNTRIISA5MEXGL5WPYI7CV2HIWTDV3Q/YDPDINVT673XLXNSTMLG4JNCZZMVVNPN/Y7SCNZJOT2MW5ADSGOFLDGH4TNL4JCQY.woff2`,
              weight: `700`,
            },
            {
              family: `Switzer`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/LVPXCMXCWY3V7PSXRMGRQUJDAS2DT47E/BPEVRT2HG7PPVVUS7A67MZQQZW6LR6A5/A7AS3UPAGLC7MDVC67SBNTE5FGF2Z2RG.woff2`,
              weight: `700`,
            },
            {
              family: `Switzer`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/XVUY2PHYBA6KMN4RMEMJPHQSTKCQ267G/UICOQA6KCSHFOSCPYDVVDNNCDKYFXHJB/O34WRFYO7JNWEBBA2LRV2XYRUSYXYDKH.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ol = [
        `.framer-sxRCW .framer-styles-preset-2pwb29:not(.rich-text-wrapper), .framer-sxRCW .framer-styles-preset-2pwb29.rich-text-wrapper p { --framer-font-family: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.55em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #6b6e73; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1365px) and (min-width: 1000px) { .framer-sxRCW .framer-styles-preset-2pwb29:not(.rich-text-wrapper), .framer-sxRCW .framer-styles-preset-2pwb29.rich-text-wrapper p { --framer-font-family: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.55em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #6b6e73; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 999px) and (min-width: 600px) { .framer-sxRCW .framer-styles-preset-2pwb29:not(.rich-text-wrapper), .framer-sxRCW .framer-styles-preset-2pwb29.rich-text-wrapper p { --framer-font-family: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.55em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #6b6e73; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 599px) and (min-width: 0px) { .framer-sxRCW .framer-styles-preset-2pwb29:not(.rich-text-wrapper), .framer-sxRCW .framer-styles-preset-2pwb29.rich-text-wrapper p { --framer-font-family: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.55em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #6b6e73; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (sl = `framer-sxRCW`);
  }),
  ll,
  ul,
  dl,
  fl = e(() => {
    H(),
      se.loadFonts([
        `FS;Switzer-regular`,
        `FS;Switzer-bold`,
        `FS;Switzer-bold italic`,
        `FS;Switzer-italic`,
      ]),
      (ll = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Switzer`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BLNB4FAQFNK56DWWNF7PMGTCOTZHOEII/ST3WKSSDMBK2MIQQO3MAVYWLF4FTOLFV/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2`,
              weight: `400`,
            },
            {
              family: `Switzer`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/HBNTRIISA5MEXGL5WPYI7CV2HIWTDV3Q/YDPDINVT673XLXNSTMLG4JNCZZMVVNPN/Y7SCNZJOT2MW5ADSGOFLDGH4TNL4JCQY.woff2`,
              weight: `700`,
            },
            {
              family: `Switzer`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/LVPXCMXCWY3V7PSXRMGRQUJDAS2DT47E/BPEVRT2HG7PPVVUS7A67MZQQZW6LR6A5/A7AS3UPAGLC7MDVC67SBNTE5FGF2Z2RG.woff2`,
              weight: `700`,
            },
            {
              family: `Switzer`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/XVUY2PHYBA6KMN4RMEMJPHQSTKCQ267G/UICOQA6KCSHFOSCPYDVVDNNCDKYFXHJB/O34WRFYO7JNWEBBA2LRV2XYRUSYXYDKH.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ul = [
        `.framer-lUY8A .framer-styles-preset-znsc1:not(.rich-text-wrapper), .framer-lUY8A .framer-styles-preset-znsc1.rich-text-wrapper p { --framer-font-family: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-bold-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-family-italic: "Switzer", "Switzer Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.1px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: rgba(255, 255, 255, 0.4); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (dl = `framer-lUY8A`);
  });
function pl(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol = e(() => {
    o(),
      H(),
      w(),
      s(),
      cl(),
      fl(),
      (ml = { a7SdQ_xzK: { hover: !0 } }),
      (hl = [`a7SdQ_xzK`, `hbeWpzNc9`]),
      (gl = `framer-ZzKG4`),
      (_l = { a7SdQ_xzK: `framer-v-tniwam`, hbeWpzNc9: `framer-v-xs5f0d` }),
      (vl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (yl = ({ value: e, children: t }) => {
        let n = h(C),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(C.Provider, { value: i, children: t });
      }),
      (bl = E.create(x)),
      (xl = { Desktop: `a7SdQ_xzK`, Mobile: `hbeWpzNc9` }),
      (Sl = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        OKgbb5JD4: r ?? a.OKgbb5JD4 ?? `Projects`,
        UJGTNwrG2: n ?? a.UJGTNwrG2,
        variant: xl[a.variant] ?? a.variant ?? `a7SdQ_xzK`,
      })),
      (Cl = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (wl = n(function (e, t) {
        let n = p(null),
          i = t ?? n,
          a = r(),
          { activeLocale: o, setLocale: s } = he(),
          c = ue(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: m,
            OKgbb5JD4: h,
            UJGTNwrG2: g,
            ..._
          } = Sl(e),
          {
            baseVariant: v,
            classNames: y,
            clearLoadingGesture: b,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: te,
            setGestureState: w,
            setVariant: T,
            variants: D,
          } = ye({
            cycleOrder: hl,
            defaultVariant: `a7SdQ_xzK`,
            enabledGestures: ml,
            ref: i,
            variant: m,
            variantClassNames: _l,
          }),
          O = Cl(e, D),
          ne = [dl, sl],
          re = z(gl, ...ne);
        return f(ee, {
          id: d ?? a,
          children: f(bl, {
            animate: D,
            initial: !1,
            children: f(yl, {
              value: vl,
              children: f(N, {
                href: g,
                motionChild: !0,
                nodeId: `a7SdQ_xzK`,
                scopeId: `wdsqbdpV0`,
                smoothScroll: !0,
                children: f(E.a, {
                  ..._,
                  ...S,
                  className: `${z(re, `framer-tniwam`, u, y)} framer-gvhmlu`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: O,
                  layoutId: `a7SdQ_xzK`,
                  ref: i,
                  style: { backgroundColor: `rgba(255, 255, 255, 0)`, ...l },
                  ...pl(
                    {
                      "a7SdQ_xzK-hover": { "data-framer-name": void 0 },
                      hbeWpzNc9: { "data-framer-name": `Mobile` },
                    },
                    v,
                    C
                  ),
                  children: f(I, {
                    __fromCanvasComponent: !0,
                    children: f(x, {
                      children: f(E.p, {
                        className: `framer-styles-preset-znsc1`,
                        "data-styles-preset": `q54Xasd4k`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.92))`,
                        },
                        children: `Projects`,
                      }),
                    }),
                    className: `framer-1o8ebst`,
                    "data-framer-name": `Label`,
                    fonts: [`Inter`],
                    layoutDependency: O,
                    layoutId: `VXqwuy9I1`,
                    style: {
                      "--extracted-r6o4lv": `rgba(255, 255, 255, 0.92)`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: h,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...pl(
                      {
                        hbeWpzNc9: {
                          children: f(x, {
                            children: f(E.p, {
                              className: `framer-styles-preset-2pwb29`,
                              "data-styles-preset": `axtx8bwiB`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.92))`,
                              },
                              children: `Projects`,
                            }),
                          }),
                        },
                      },
                      v,
                      C
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (Tl = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ZzKG4.framer-gvhmlu, .framer-ZzKG4 .framer-gvhmlu { display: block; }`,
        `.framer-ZzKG4.framer-tniwam { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-ZzKG4 .framer-1o8ebst { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ZzKG4.framer-v-xs5f0d.framer-tniwam { cursor: unset; justify-content: flex-start; }`,
        ...ul,
        ...ol,
      ]),
      (El = be(wl, Tl, `framer-ZzKG4`)),
      (Dl = El),
      (El.displayName = `Navigation / Navbar | Tab`),
      (El.defaultProps = { height: 22.5, width: 51 }),
      R(El, {
        variant: {
          options: [`a7SdQ_xzK`, `hbeWpzNc9`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: j.Enum,
        },
        OKgbb5JD4: {
          defaultValue: `Projects`,
          displayTextArea: !1,
          title: `Title`,
          type: j.String,
        },
        UJGTNwrG2: { title: `Link`, type: j.Link },
      }),
      oe(
        El,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ce(ll),
          ...ce(al),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  kl,
  Al,
  jl,
  Ml = e(() => {
    o(),
      s(),
      (kl = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (Al = {
        ...kl,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (jl = n((e, t) => f(`div`, { style: Al, ref: t })));
  }),
  Nl,
  Pl,
  Fl,
  Il,
  Ll = e(() => {
    (Fl = (e) => (
      Nl ||
        ((Nl = new Map([
          [
            `bold`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z`,
              })
            ),
          ],
          [
            `duotone`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z`,
                opacity: `0.2`,
              }),
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              })
            ),
          ],
          [
            `fill`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z`,
              })
            ),
          ],
          [
            `light`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z`,
              })
            ),
          ],
          [
            `regular`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              })
            ),
          ],
          [
            `thin`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z`,
              })
            ),
          ],
        ])),
        (Pl = e.forwardRef((t, n) =>
          e.createElement(`g`, { ref: n, ...t }, Nl.get(t.weight))
        ))),
      Pl
    )),
      (Il = Fl);
  });
function Rl(e, t, n = ``, r, i) {
  let a = g(() => {
      if (n == null || n?.length === 0) return null;
      let t = n.toLowerCase().replace(/-|\s/g, ``);
      var r;
      let a = (r = i[t]) ?? Bl(e, t);
      return a;
    }, [r, n]),
    o = t ? r : a;
  return o;
}
var zl,
  Bl,
  Vl = e(() => {
    s(),
      H(),
      (zl = {
        onClick: { type: j.EventHandler },
        onMouseDown: { type: j.EventHandler },
        onMouseUp: { type: j.EventHandler },
        onMouseEnter: { type: j.EventHandler },
        onMouseLeave: { type: j.EventHandler },
      }),
      (Bl = (e, t) => e.find((e) => e.toLowerCase().includes(t)));
  });
function Hl(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: r,
      iconSelection: i,
      onClick: a,
      onMouseDown: o,
      onMouseUp: s,
      onMouseEnter: c,
      onMouseLeave: l,
      weight: u,
      mirrored: m,
    } = e,
    h = p(!1),
    g = Rl(Ul, n, r, i, Kl),
    [_, v] = S(g === `Home` ? Il(d) : null);
  async function b() {
    try {
      let e = `0.0.57`,
        t = `${Wl}${g}.js@${e}`,
        n = await import(t);
      h.current && v(n.default(d));
    } catch {
      h.current && v(null);
    }
  }
  y(
    () => (
      (h.current = !0),
      b(),
      () => {
        h.current = !1;
      }
    ),
    [g]
  );
  let x = ae.current() === ae.canvas,
    ee = x ? f(jl, {}) : null;
  return f(E.div, {
    style: { display: `contents` },
    onClick: a,
    onMouseEnter: c,
    onMouseLeave: l,
    onMouseDown: o,
    onMouseUp: s,
    children: _
      ? f(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: m ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: f(_, { color: t, weight: u }),
        })
      : ee,
  });
}
var Ul,
  Wl,
  Gl,
  Kl,
  ql = e(() => {
    o(),
      s(),
      H(),
      w(),
      Ml(),
      Ll(),
      Vl(),
      (Ul =
        `Acorn.AddressBook.AddressBookTabs.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTaxiing.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Ambulance.Anchor.AnchorSimple.AndroidLogo.Angle.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.ApproximateEquals.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asclepius.Asterisk.AsteriskSimple.At.Atom.Avocado.Axe.Baby.BabyCarriage.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barn.Barricade.Baseball.BaseballCap.BaseballHelmet.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.BeachBall.Beanie.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.Belt.BezierCurve.Bicycle.Binary.Binoculars.Biohazard.Bird.Blueprint.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bomb.Bone.Book.BookBookmark.BookOpen.BookOpenText.BookOpenUser.BookUser.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.Boules.BoundingBox.BowlFood.BowlSteam.BowlingBall.BoxArrowDown.BoxArrowUp.BoxingGlove.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bread.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Building.BuildingApartment.BuildingOffice.Buildings.Bulldozer.Bus.Butterfly.CableCar.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarDot.CalendarDots.CalendarHeart.CalendarMinus.CalendarPlus.CalendarSlash.CalendarStar.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarBattery.CarProfile.CarSimple.Cardholder.Cards.CardsThree.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretLineDown.CaretLineLeft.CaretLineRight.CaretLineUp.CaretRight.CaretUp.CaretUpDown.Carrot.CashRegister.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.CellTower.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredSlash.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleSlash.ChatCircleText.ChatDots.ChatSlash.ChatTeardrop.ChatTeardropDots.ChatTeardropSlash.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checkerboard.Checks.Cheers.Cheese.ChefHat.Cherries.Church.Cigarette.CigaretteSlash.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.City.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCountdown.ClockUser.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Clover.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.CoffeeBean.Coin.CoinVertical.Coins.Columns.ColumnsPlusLeft.ColumnsPlusRight.Command.Compass.CompassRose.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.CourtBasketball.Cow.CowboyHat.Cpu.Crane.CraneTower.CreditCard.Cricket.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownCross.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desk.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSlash.DeviceMobileSpeaker.DeviceRotate.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscoBall.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.Dresser.DribbbleLogo.Drone.Drop.DropHalf.DropHalfBottom.DropSimple.DropSlash.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Empty.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.ExclamationMark.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.Eyes.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FalloutShelter.Fan.Farm.FastForward.FastForwardCircle.Feather.FediverseLogo.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileC.FileCloud.FileCode.FileCpp.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileIni.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMd.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FilePy.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileTxt.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FireTruck.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagBannerFold.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FlipHorizontal.FlipVertical.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.FootballHelmet.Footprints.ForkKnife.FourK.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.FunnelSimpleX.FunnelX.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeSimpleX.GlobeStand.GlobeX.Goggles.Golf.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gps.GpsFix.GpsSlash.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GraphicsCard.GreaterThan.GreaterThanOrEqual.GridFour.GridNine.Guitar.HairDryer.Hamburger.Hammer.Hand.HandArrowDown.HandArrowUp.HandCoins.HandDeposit.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPeace.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.HandWithdraw.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.HardHat.Hash.HashStraight.HeadCircuit.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighDefinition.HighHeel.Highlighter.HighlighterCircle.Hockey.Hoodie.Horse.Hospital.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.Hurricane.IceCream.IdentificationBadge.IdentificationCard.Image.ImageBroken.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Intersection.Invoice.Island.Jar.JarLabel.Jeep.Joystick.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.LampPendant.Laptop.Lasso.LastfmLogo.Layout.Leaf.Lectern.Lego.LegoSmiley.LessThan.LessThanOrEqual.LetterCircleH.LetterCircleP.LetterCircleV.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.LineVertical.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinktreeLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListHeart.ListMagnifyingGlass.ListNumbers.ListPlus.ListStar.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.Log.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.Mailbox.MapPin.MapPinArea.MapPinLine.MapPinPlus.MapPinSimple.MapPinSimpleArea.MapPinSimpleLine.MapTrifold.MarkdownLogo.MarkerCircle.Martini.MaskHappy.MaskSad.MastodonLogo.MathOperations.MatrixLogo.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MemberOf.Memory.MessengerLogo.MetaLogo.Meteor.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.Microscope.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.MoneyWavy.Monitor.MonitorArrowUp.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseLeftClick.MouseMiddleClick.MouseRightClick.MouseScroll.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesMinus.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Network.NetworkSlash.NetworkX.Newspaper.NewspaperClipping.NotEquals.NotMemberOf.NotSubsetOf.NotSupersetOf.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NuclearPlant.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Numpad.Nut.NyTimesLogo.Octagon.OfficeChair.Onigiri.OpenAiLogo.Option.Orange.OrangeSlice.Oven.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Panorama.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilRuler.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagon.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleCircle.PersonSimpleHike.PersonSimpleRun.PersonSimpleSki.PersonSimpleSwim.PersonSimpleTaiChi.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneList.PhoneOutgoing.PhonePause.PhonePlus.PhoneSlash.PhoneTransfer.PhoneX.PhosphorLogo.Pi.PianoKeys.PicnicTable.PictureInPicture.PiggyBank.Pill.PingPong.PintGlass.PinterestLogo.Pinwheel.Pipe.PipeWrench.PixLogo.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.Popsicle.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.QuestionMark.Queue.Quotes.Rabbit.Racquet.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.Ranking.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.RectangleDashed.Recycle.RedditLogo.Repeat.RepeatOnce.ReplitLogo.Resize.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.RowsPlusBottom.RowsPlusTop.Rss.RssSimple.Rug.Ruler.Sailboat.Scales.Scan.ScanSmiley.Scissors.Scooter.Screencast.Screwdriver.Scribble.ScribbleLoop.Scroll.Seal.SealCheck.SealPercent.SealQuestion.SealWarning.Seat.Seatbelt.SecurityCamera.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShippingContainer.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shovel.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SkypeLogo.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyMelting.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.Sock.SolarPanel.SolarRoof.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Speedometer.Sphere.Spinner.SpinnerBall.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.SprayBottle.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackMinus.StackOverflowLogo.StackPlus.StackSimple.Stairs.Stamp.StandardDefinition.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteamLogo.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.SubsetOf.SubsetProperOf.Subtitles.SubtitlesSlash.Subtract.SubtractSquare.Subway.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.SupersetOf.SupersetProperOf.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TeaBag.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextSubscript.TextSuperscript.TextT.TextTSlash.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThreadsLogo.ThreeD.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Tilde.Timer.TipJar.Tipi.Tire.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tornado.Tote.ToteSimple.Towel.Tractor.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.TrayArrowDown.TrayArrowUp.TreasureChest.Tree.TreeEvergreen.TreePalm.TreeStructure.TreeView.TrendDown.TrendUp.Triangle.TriangleDashed.Trolley.TrolleySuitcase.Trophy.Truck.TruckTrailer.TumblrLogo.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Union.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCheck.UserCircle.UserCircleCheck.UserCircleDashed.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSound.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.VectorThree.VectorTwo.Vibrate.Video.VideoCamera.VideoCameraSlash.VideoConference.Vignette.VinylRecord.VirtualReality.Virus.Visor.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.WashingMachine.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.WaveformSlash.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.Windmill.WindowsLogo.Wine.Wrench.X.XCircle.XLogo.XSquare.Yarn.YinYang.YoutubeLogo`.split(
          `.`
        )),
      (Wl = `https://framer.com/m/phosphor-icons/`),
      (Gl = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (Kl = Ul.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (Hl.displayName = `Phosphor`),
      (Hl.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      R(Hl, {
        selectByList: {
          type: j.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: Hl.defaultProps.selectByList,
        },
        iconSelection: {
          type: j.Enum,
          options: Ul,
          defaultValue: Hl.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: j.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Boxâ€¦`,
          hidden: ({ selectByList: e }) => e,
        },
        color: {
          type: j.Color,
          title: `Color`,
          defaultValue: Hl.defaultProps.color,
        },
        weight: {
          type: j.Enum,
          title: `Weight`,
          optionTitles: Gl.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: Gl,
          defaultValue: Hl.defaultProps.weight,
        },
        mirrored: {
          type: j.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: Hl.defaultProps.mirrored,
        },
        ...zl,
      });
  });
function Jl(e, t, n = ``, r, i) {
  let a = g(() => {
      if (n == null || n?.length === 0) return null;
      let t = n.toLowerCase().replace(/-|\s/g, ``);
      var r;
      let a = (r = i[t]) ?? Xl(e, t);
      return a;
    }, [r, n]),
    o = t ? r : a;
  return o;
}
var Yl,
  Xl,
  Zl = e(() => {
    s(),
      H(),
      (Yl = {
        onClick: { type: j.EventHandler },
        onMouseDown: { type: j.EventHandler },
        onMouseUp: { type: j.EventHandler },
        onMouseEnter: { type: j.EventHandler },
        onMouseLeave: { type: j.EventHandler },
      }),
      (Xl = (e, t) => e.find((e) => e.toLowerCase().includes(t)));
  });
function Ql(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: r,
      iconSelection: i,
      onClick: a,
      onMouseDown: o,
      onMouseUp: s,
      onMouseEnter: c,
      onMouseLeave: l,
      weight: u,
      mirrored: m,
    } = e,
    h = p(!1),
    g = Jl($l, n, r, i, nu),
    [_, v] = S(g === `Home` ? Il(d) : null);
  async function b() {
    try {
      let e = `0.0.57`,
        t = `${eu}${g}.js@${e}`,
        n = await import(t);
      h.current && v(n.default(d));
    } catch {
      h.current && v(null);
    }
  }
  y(
    () => (
      (h.current = !0),
      b(),
      () => {
        h.current = !1;
      }
    ),
    [g]
  );
  let x = ae.current() === ae.canvas,
    ee = x ? f(jl, {}) : null;
  return f(E.div, {
    style: { display: `contents` },
    onClick: a,
    onMouseEnter: c,
    onMouseLeave: l,
    onMouseDown: o,
    onMouseUp: s,
    children: _
      ? f(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: m ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: f(_, { color: t, weight: u }),
        })
      : ee,
  });
}
var $l,
  eu,
  tu,
  nu,
  ru = e(() => {
    o(),
      s(),
      H(),
      w(),
      Ml(),
      Ll(),
      Zl(),
      ($l =
        `Acorn.AddressBook.AddressBookTabs.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTaxiing.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Ambulance.Anchor.AnchorSimple.AndroidLogo.Angle.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.ApproximateEquals.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asclepius.Asterisk.AsteriskSimple.At.Atom.Avocado.Axe.Baby.BabyCarriage.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barn.Barricade.Baseball.BaseballCap.BaseballHelmet.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.BeachBall.Beanie.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.Belt.BezierCurve.Bicycle.Binary.Binoculars.Biohazard.Bird.Blueprint.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bomb.Bone.Book.BookBookmark.BookOpen.BookOpenText.BookOpenUser.BookUser.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.Boules.BoundingBox.BowlFood.BowlSteam.BowlingBall.BoxArrowDown.BoxArrowUp.BoxingGlove.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bread.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Building.BuildingApartment.BuildingOffice.Buildings.Bulldozer.Bus.Butterfly.CableCar.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarDot.CalendarDots.CalendarHeart.CalendarMinus.CalendarPlus.CalendarSlash.CalendarStar.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarBattery.CarProfile.CarSimple.Cardholder.Cards.CardsThree.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretLineDown.CaretLineLeft.CaretLineRight.CaretLineUp.CaretRight.CaretUp.CaretUpDown.Carrot.CashRegister.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.CellTower.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredSlash.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleSlash.ChatCircleText.ChatDots.ChatSlash.ChatTeardrop.ChatTeardropDots.ChatTeardropSlash.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checkerboard.Checks.Cheers.Cheese.ChefHat.Cherries.Church.Cigarette.CigaretteSlash.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.City.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCountdown.ClockUser.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Clover.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.CoffeeBean.Coin.CoinVertical.Coins.Columns.ColumnsPlusLeft.ColumnsPlusRight.Command.Compass.CompassRose.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.CourtBasketball.Cow.CowboyHat.Cpu.Crane.CraneTower.CreditCard.Cricket.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownCross.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desk.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSlash.DeviceMobileSpeaker.DeviceRotate.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscoBall.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.Dresser.DribbbleLogo.Drone.Drop.DropHalf.DropHalfBottom.DropSimple.DropSlash.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Empty.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.ExclamationMark.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.Eyes.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FalloutShelter.Fan.Farm.FastForward.FastForwardCircle.Feather.FediverseLogo.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileC.FileCloud.FileCode.FileCpp.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileIni.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMd.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FilePy.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileTxt.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FireTruck.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagBannerFold.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FlipHorizontal.FlipVertical.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.FootballHelmet.Footprints.ForkKnife.FourK.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.FunnelSimpleX.FunnelX.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeSimpleX.GlobeStand.GlobeX.Goggles.Golf.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gps.GpsFix.GpsSlash.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GraphicsCard.GreaterThan.GreaterThanOrEqual.GridFour.GridNine.Guitar.HairDryer.Hamburger.Hammer.Hand.HandArrowDown.HandArrowUp.HandCoins.HandDeposit.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPeace.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.HandWithdraw.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.HardHat.Hash.HashStraight.HeadCircuit.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighDefinition.HighHeel.Highlighter.HighlighterCircle.Hockey.Hoodie.Horse.Hospital.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.Hurricane.IceCream.IdentificationBadge.IdentificationCard.Image.ImageBroken.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Intersection.Invoice.Island.Jar.JarLabel.Jeep.Joystick.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.LampPendant.Laptop.Lasso.LastfmLogo.Layout.Leaf.Lectern.Lego.LegoSmiley.LessThan.LessThanOrEqual.LetterCircleH.LetterCircleP.LetterCircleV.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.LineVertical.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinktreeLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListHeart.ListMagnifyingGlass.ListNumbers.ListPlus.ListStar.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.Log.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.Mailbox.MapPin.MapPinArea.MapPinLine.MapPinPlus.MapPinSimple.MapPinSimpleArea.MapPinSimpleLine.MapTrifold.MarkdownLogo.MarkerCircle.Martini.MaskHappy.MaskSad.MastodonLogo.MathOperations.MatrixLogo.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MemberOf.Memory.MessengerLogo.MetaLogo.Meteor.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.Microscope.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.MoneyWavy.Monitor.MonitorArrowUp.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseLeftClick.MouseMiddleClick.MouseRightClick.MouseScroll.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesMinus.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Network.NetworkSlash.NetworkX.Newspaper.NewspaperClipping.NotEquals.NotMemberOf.NotSubsetOf.NotSupersetOf.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NuclearPlant.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Numpad.Nut.NyTimesLogo.Octagon.OfficeChair.Onigiri.OpenAiLogo.Option.Orange.OrangeSlice.Oven.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Panorama.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilRuler.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagon.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleCircle.PersonSimpleHike.PersonSimpleRun.PersonSimpleSki.PersonSimpleSwim.PersonSimpleTaiChi.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneList.PhoneOutgoing.PhonePause.PhonePlus.PhoneSlash.PhoneTransfer.PhoneX.PhosphorLogo.Pi.PianoKeys.PicnicTable.PictureInPicture.PiggyBank.Pill.PingPong.PintGlass.PinterestLogo.Pinwheel.Pipe.PipeWrench.PixLogo.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.Popsicle.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.QuestionMark.Queue.Quotes.Rabbit.Racquet.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.Ranking.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.RectangleDashed.Recycle.RedditLogo.Repeat.RepeatOnce.ReplitLogo.Resize.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.RowsPlusBottom.RowsPlusTop.Rss.RssSimple.Rug.Ruler.Sailboat.Scales.Scan.ScanSmiley.Scissors.Scooter.Screencast.Screwdriver.Scribble.ScribbleLoop.Scroll.Seal.SealCheck.SealPercent.SealQuestion.SealWarning.Seat.Seatbelt.SecurityCamera.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShippingContainer.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shovel.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SkypeLogo.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyMelting.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.Sock.SolarPanel.SolarRoof.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Speedometer.Sphere.Spinner.SpinnerBall.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.SprayBottle.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackMinus.StackOverflowLogo.StackPlus.StackSimple.Stairs.Stamp.StandardDefinition.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteamLogo.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.SubsetOf.SubsetProperOf.Subtitles.SubtitlesSlash.Subtract.SubtractSquare.Subway.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.SupersetOf.SupersetProperOf.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TeaBag.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextSubscript.TextSuperscript.TextT.TextTSlash.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThreadsLogo.ThreeD.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Tilde.Timer.TipJar.Tipi.Tire.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tornado.Tote.ToteSimple.Towel.Tractor.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.TrayArrowDown.TrayArrowUp.TreasureChest.Tree.TreeEvergreen.TreePalm.TreeStructure.TreeView.TrendDown.TrendUp.Triangle.TriangleDashed.Trolley.TrolleySuitcase.Trophy.Truck.TruckTrailer.TumblrLogo.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Union.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCheck.UserCircle.UserCircleCheck.UserCircleDashed.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSound.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.VectorThree.VectorTwo.Vibrate.Video.VideoCamera.VideoCameraSlash.VideoConference.Vignette.VinylRecord.VirtualReality.Virus.Visor.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.WashingMachine.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.WaveformSlash.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.Windmill.WindowsLogo.Wine.Wrench.X.XCircle.XLogo.XSquare.Yarn.YinYang.YoutubeLogo`.split(
          `.`
        )),
      (eu = `https://framer.com/m/phosphor-icons/`),
      (tu = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (nu = $l.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (Ql.displayName = `Phosphor`),
      (Ql.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      R(Ql, {
        selectByList: {
          type: j.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: Ql.defaultProps.selectByList,
        },
        iconSelection: {
          type: j.Enum,
          options: $l,
          defaultValue: Ql.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: j.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Boxâ€¦`,
          hidden: ({ selectByList: e }) => e,
        },
        color: {
          type: j.Color,
          title: `Color`,
          defaultValue: Ql.defaultProps.color,
        },
        weight: {
          type: j.Enum,
          title: `Weight`,
          optionTitles: tu.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: tu,
          defaultValue: Ql.defaultProps.weight,
        },
        mirrored: {
          type: j.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: Ql.defaultProps.mirrored,
        },
        ...Yl,
      });
  });
function iu(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu = e(() => {
    o(),
      H(),
      w(),
      s(),
      ql(),
      (au = B(Hl)),
      (ou = { BOySXLBeq: { hover: !0 } }),
      (su = `framer-RFU4N`),
      (cu = { BOySXLBeq: `framer-v-1lc9lmi` }),
      (lu = { damping: 60, delay: 0, mass: 1, stiffness: 828, type: `spring` }),
      (uu = ({ value: e, children: t }) => {
        let n = h(C),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(C.Provider, { value: i, children: t });
      }),
      (du = E.create(x)),
      (fu = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        Bn6yUGZ3n: n ?? i.Bn6yUGZ3n,
      })),
      (pu = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (mu = n(function (e, t) {
        let n = p(null),
          i = t ?? n,
          a = r(),
          { activeLocale: o, setLocale: s } = he(),
          c = ue(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: m,
            Bn6yUGZ3n: h,
            ...g
          } = fu(e),
          {
            baseVariant: _,
            classNames: y,
            clearLoadingGesture: b,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: te,
            setGestureState: w,
            setVariant: T,
            variants: D,
          } = ye({
            defaultVariant: `BOySXLBeq`,
            enabledGestures: ou,
            ref: i,
            variant: m,
            variantClassNames: cu,
          }),
          O = pu(e, D),
          ne = [],
          re = z(su, ...ne);
        return f(ee, {
          id: d ?? a,
          children: f(du, {
            animate: D,
            initial: !1,
            children: f(uu, {
              value: lu,
              children: f(N, {
                href: h,
                motionChild: !0,
                nodeId: `BOySXLBeq`,
                scopeId: `BXUkUZbox`,
                children: v(E.a, {
                  ...g,
                  ...S,
                  className: `${z(re, `framer-1lc9lmi`, u, y)} framer-1xr19fv`,
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `BOySXLBeq`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgb(69, 69, 69)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-8455b752-903b-4a76-bf3e-7cd9c17e7849, rgb(77, 77, 77))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    boxShadow: `inset 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.47), inset 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.41), inset 0px 12px 12px -3.75px rgba(0, 0, 0, 0.16), 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.16), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.14), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)`,
                    ...l,
                  },
                  variants: {
                    "BOySXLBeq-hover": {
                      backgroundColor: `rgb(99, 99, 99)`,
                      boxShadow: `inset 0px 0.5573343114665477px 0.5573343114665477px -0.9375px rgba(0, 0, 0, 0.58), inset 0px 1.6901543001731625px 1.6901543001731625px -1.875px rgba(0, 0, 0, 0.55), inset 0px 4.467857465039123px 4.467857465039123px -2.8125px rgba(0, 0, 0, 0.47), inset 0px 14px 14px -3.75px rgba(0, 0, 0, 0.2), 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.16), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.14), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)`,
                    },
                  },
                  ...iu(
                    { "BOySXLBeq-hover": { "data-framer-name": void 0 } },
                    _,
                    C
                  ),
                  children: [
                    f(I, {
                      __fromCanvasComponent: !0,
                      children: f(x, {
                        children: f(E.p, {
                          style: {
                            "--font-selector": `RlM7U3dpdHplci1yZWd1bGFy`,
                            "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-letter-spacing": `-0.1px`,
                            "--framer-line-height": `1.6em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb46346e-890d-4bba-820f-31110fbbbe1c, rgb(255, 255, 255)))`,
                          },
                          children: `Buy $TOADS`,
                        }),
                      }),
                      className: `framer-1nrpjhi`,
                      "data-framer-name": `Label`,
                      fonts: [`FS;Switzer-regular`],
                      layoutDependency: O,
                      layoutId: `nHg9hQQNW`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-fb46346e-890d-4bba-820f-31110fbbbe1c, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    f(k, {
                      children: f(L, {
                        className: `framer-vbbx2f-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `A5_Z493Un-container`,
                        nodeId: `A5_Z493Un`,
                        rendersWithMotion: !0,
                        scopeId: `BXUkUZbox`,
                        style: { rotate: 0 },
                        variants: { "BOySXLBeq-hover": { rotate: 45 } },
                        children: f(Hl, {
                          color: `var(--token-fb46346e-890d-4bba-820f-31110fbbbe1c, rgb(255, 255, 255))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `ArrowUpRight`,
                          id: `A5_Z493Un`,
                          layoutId: `A5_Z493Un`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `regular`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (hu = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-RFU4N.framer-1xr19fv, .framer-RFU4N .framer-1xr19fv { display: block; }`,
        `.framer-RFU4N.framer-1lc9lmi { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-RFU4N .framer-1nrpjhi { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-RFU4N .framer-vbbx2f-container { flex: none; height: 16px; position: relative; width: 16px; }`,
        `.framer-RFU4N[data-border="true"]::after, .framer-RFU4N [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (gu = be(mu, hu, `framer-RFU4N`)),
      (_u = gu),
      (gu.displayName = `Buttons / CTA | Navbar 2`),
      (gu.defaultProps = { height: 38.5, width: 125.5 }),
      R(gu, { Bn6yUGZ3n: { title: `Link`, type: j.Link } }),
      oe(
        gu,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Switzer`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BLNB4FAQFNK56DWWNF7PMGTCOTZHOEII/ST3WKSSDMBK2MIQQO3MAVYWLF4FTOLFV/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2`,
                weight: `400`,
              },
            ],
          },
          ...au,
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function yu(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku,
  Au,
  ju,
  Mu,
  Nu,
  Pu = e(() => {
    o(),
      H(),
      w(),
      s(),
      (bu = { Uejbf7WEc: { hover: !0 } }),
      (xu = [`Uejbf7WEc`, `Ra97uNWOE`]),
      (Su = `framer-gG2SE`),
      (Cu = { Ra97uNWOE: `framer-v-yltzjb`, Uejbf7WEc: `framer-v-eyemqb` }),
      (wu = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Tu = ({ value: e, children: t }) => {
        let n = h(C),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(C.Provider, { value: i, children: t });
      }),
      (Eu = E.create(x)),
      (Du = { Desktop: `Uejbf7WEc`, Mobile: `Ra97uNWOE` }),
      (Ou = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        OKgbb5JD4: r ?? a.OKgbb5JD4 ?? `Projects`,
        UJGTNwrG2: n ?? a.UJGTNwrG2,
        variant: Du[a.variant] ?? a.variant ?? `Uejbf7WEc`,
      })),
      (ku = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Au = n(function (e, t) {
        let n = p(null),
          i = t ?? n,
          a = r(),
          { activeLocale: o, setLocale: s } = he(),
          c = ue(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: m,
            OKgbb5JD4: h,
            UJGTNwrG2: g,
            ..._
          } = Ou(e),
          {
            baseVariant: v,
            classNames: y,
            clearLoadingGesture: b,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: te,
            setGestureState: w,
            setVariant: T,
            variants: D,
          } = ye({
            cycleOrder: xu,
            defaultVariant: `Uejbf7WEc`,
            enabledGestures: bu,
            ref: i,
            variant: m,
            variantClassNames: Cu,
          }),
          O = ku(e, D),
          ne = [],
          re = z(Su, ...ne);
        return f(ee, {
          id: d ?? a,
          children: f(Eu, {
            animate: D,
            initial: !1,
            children: f(Tu, {
              value: wu,
              children: f(N, {
                href: g,
                motionChild: !0,
                nodeId: `Uejbf7WEc`,
                scopeId: `jmkogRolq`,
                smoothScroll: !0,
                children: f(E.a, {
                  ..._,
                  ...S,
                  className: `${z(re, `framer-eyemqb`, u, y)} framer-19feb8q`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: O,
                  layoutId: `Uejbf7WEc`,
                  ref: i,
                  style: { backgroundColor: `rgba(255, 255, 255, 0)`, ...l },
                  ...yu(
                    {
                      "Uejbf7WEc-hover": { "data-framer-name": void 0 },
                      Ra97uNWOE: { "data-framer-name": `Mobile` },
                    },
                    v,
                    C
                  ),
                  children: f(I, {
                    __fromCanvasComponent: !0,
                    children: f(x, {
                      children: f(E.p, {
                        style: {
                          "--font-selector": `RlM7U3dpdHplci1yZWd1bGFy`,
                          "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-letter-spacing": `-0.1px`,
                          "--framer-line-height": `1.6em`,
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.92))`,
                        },
                        children: `Projects`,
                      }),
                    }),
                    className: `framer-c9fpmd`,
                    "data-framer-name": `Label`,
                    fonts: [`FS;Switzer-regular`],
                    layoutDependency: O,
                    layoutId: `lOGZt01Gd`,
                    style: {
                      "--extracted-r6o4lv": `rgba(255, 255, 255, 0.92)`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: h,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...yu(
                      {
                        Ra97uNWOE: {
                          children: f(x, {
                            children: f(E.p, {
                              style: {
                                "--font-selector": `RlM7U3dpdHplci1yZWd1bGFy`,
                                "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                "--framer-font-size": `18px`,
                                "--framer-letter-spacing": `0px`,
                                "--framer-line-height": `1.55em`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.92))`,
                              },
                              children: `Projects`,
                            }),
                          }),
                        },
                      },
                      v,
                      C
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (ju = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-gG2SE.framer-19feb8q, .framer-gG2SE .framer-19feb8q { display: block; }`,
        `.framer-gG2SE.framer-eyemqb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-gG2SE .framer-c9fpmd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-gG2SE.framer-v-yltzjb.framer-eyemqb { cursor: unset; justify-content: flex-start; }`,
      ]),
      (Mu = be(Au, ju, `framer-gG2SE`)),
      (Nu = Mu),
      (Mu.displayName = `Navigation / Navbar | Tab 3`),
      (Mu.defaultProps = { height: 22.5, width: 51 }),
      R(Mu, {
        variant: {
          options: [`Uejbf7WEc`, `Ra97uNWOE`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: j.Enum,
        },
        OKgbb5JD4: {
          defaultValue: `Projects`,
          displayTextArea: !1,
          title: `Title`,
          type: j.String,
        },
        UJGTNwrG2: { title: `Link`, type: j.Link },
      }),
      oe(
        Mu,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Switzer`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BLNB4FAQFNK56DWWNF7PMGTCOTZHOEII/ST3WKSSDMBK2MIQQO3MAVYWLF4FTOLFV/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function Fu(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu = e(() => {
    o(),
      H(),
      w(),
      s(),
      (Iu = { Hxj81ZMY2: { hover: !0 } }),
      (Lu = [`Hxj81ZMY2`, `B2TDMSANh`]),
      (Ru = `framer-xnvdj`),
      (zu = { B2TDMSANh: `framer-v-1kc06z0`, Hxj81ZMY2: `framer-v-qtag16` }),
      (Bu = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Vu = ({ value: e, children: t }) => {
        let n = h(C),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(C.Provider, { value: i, children: t });
      }),
      (Hu = E.create(x)),
      (Uu = { Desktop: `Hxj81ZMY2`, Mobile: `B2TDMSANh` }),
      (Wu = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        OKgbb5JD4: r ?? a.OKgbb5JD4 ?? `Projects`,
        UJGTNwrG2: n ?? a.UJGTNwrG2,
        variant: Uu[a.variant] ?? a.variant ?? `Hxj81ZMY2`,
      })),
      (Gu = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Ku = n(function (e, t) {
        let n = p(null),
          i = t ?? n,
          a = r(),
          { activeLocale: o, setLocale: s } = he(),
          c = ue(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: m,
            OKgbb5JD4: h,
            UJGTNwrG2: g,
            ..._
          } = Wu(e),
          {
            baseVariant: v,
            classNames: y,
            clearLoadingGesture: b,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: te,
            setGestureState: w,
            setVariant: T,
            variants: D,
          } = ye({
            cycleOrder: Lu,
            defaultVariant: `Hxj81ZMY2`,
            enabledGestures: Iu,
            ref: i,
            variant: m,
            variantClassNames: zu,
          }),
          O = Gu(e, D),
          ne = [],
          re = z(Ru, ...ne);
        return f(ee, {
          id: d ?? a,
          children: f(Hu, {
            animate: D,
            initial: !1,
            children: f(Vu, {
              value: Bu,
              children: f(N, {
                href: g,
                motionChild: !0,
                nodeId: `Hxj81ZMY2`,
                scopeId: `KkbfiKB1Z`,
                smoothScroll: !0,
                children: f(E.a, {
                  ..._,
                  ...S,
                  className: `${z(re, `framer-qtag16`, u, y)} framer-1rjyiq9`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: O,
                  layoutId: `Hxj81ZMY2`,
                  ref: i,
                  style: { backgroundColor: `rgba(255, 255, 255, 0)`, ...l },
                  ...Fu(
                    {
                      "Hxj81ZMY2-hover": { "data-framer-name": void 0 },
                      B2TDMSANh: { "data-framer-name": `Mobile` },
                    },
                    v,
                    C
                  ),
                  children: f(I, {
                    __fromCanvasComponent: !0,
                    children: f(x, {
                      children: f(E.p, {
                        style: {
                          "--font-selector": `RlM7U3dpdHplci1yZWd1bGFy`,
                          "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-letter-spacing": `-0.1px`,
                          "--framer-line-height": `1.6em`,
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.92))`,
                        },
                        children: `Projects`,
                      }),
                    }),
                    className: `framer-1sks27t`,
                    "data-framer-name": `Label`,
                    fonts: [`FS;Switzer-regular`],
                    layoutDependency: O,
                    layoutId: `tXCB9B5i8`,
                    style: {
                      "--extracted-r6o4lv": `rgba(255, 255, 255, 0.92)`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: h,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Fu(
                      {
                        B2TDMSANh: {
                          children: f(x, {
                            children: f(E.p, {
                              style: {
                                "--font-selector": `RlM7U3dpdHplci1yZWd1bGFy`,
                                "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                "--framer-font-size": `18px`,
                                "--framer-letter-spacing": `0px`,
                                "--framer-line-height": `1.55em`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.92))`,
                              },
                              children: `Projects`,
                            }),
                          }),
                        },
                      },
                      v,
                      C
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (qu = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-xnvdj.framer-1rjyiq9, .framer-xnvdj .framer-1rjyiq9 { display: block; }`,
        `.framer-xnvdj.framer-qtag16 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-xnvdj .framer-1sks27t { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-xnvdj.framer-v-1kc06z0.framer-qtag16 { cursor: unset; justify-content: flex-start; }`,
      ]),
      (Ju = be(Ku, qu, `framer-xnvdj`)),
      (Yu = Ju),
      (Ju.displayName = `Navigation / Navbar | Tab`),
      (Ju.defaultProps = { height: 22.5, width: 51 }),
      R(Ju, {
        variant: {
          options: [`Hxj81ZMY2`, `B2TDMSANh`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: j.Enum,
        },
        OKgbb5JD4: {
          defaultValue: `Projects`,
          displayTextArea: !1,
          title: `Title`,
          type: j.String,
        },
        UJGTNwrG2: { title: `Link`, type: j.Link },
      }),
      oe(
        Ju,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Switzer`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BLNB4FAQFNK56DWWNF7PMGTCOTZHOEII/ST3WKSSDMBK2MIQQO3MAVYWLF4FTOLFV/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function Zu(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd = e(() => {
    o(),
      H(),
      w(),
      s(),
      (Qu = { aLcW03Ti0: { hover: !0 } }),
      ($u = [`aLcW03Ti0`, `WnrqyDKtm`]),
      (ed = `framer-2WKRf`),
      (td = { aLcW03Ti0: `framer-v-1l195dw`, WnrqyDKtm: `framer-v-m4hsr9` }),
      (nd = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (rd = ({ value: e, children: t }) => {
        let n = h(C),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(C.Provider, { value: i, children: t });
      }),
      (id = E.create(x)),
      (ad = { Desktop: `aLcW03Ti0`, Mobile: `WnrqyDKtm` }),
      (od = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        OKgbb5JD4: r ?? a.OKgbb5JD4 ?? `Projects`,
        UJGTNwrG2: n ?? a.UJGTNwrG2,
        variant: ad[a.variant] ?? a.variant ?? `aLcW03Ti0`,
      })),
      (sd = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (cd = n(function (e, t) {
        let n = p(null),
          i = t ?? n,
          a = r(),
          { activeLocale: o, setLocale: s } = he(),
          c = ue(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: m,
            OKgbb5JD4: h,
            UJGTNwrG2: g,
            ..._
          } = od(e),
          {
            baseVariant: v,
            classNames: y,
            clearLoadingGesture: b,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: te,
            setGestureState: w,
            setVariant: T,
            variants: D,
          } = ye({
            cycleOrder: $u,
            defaultVariant: `aLcW03Ti0`,
            enabledGestures: Qu,
            ref: i,
            variant: m,
            variantClassNames: td,
          }),
          O = sd(e, D),
          ne = [],
          re = z(ed, ...ne);
        return f(ee, {
          id: d ?? a,
          children: f(id, {
            animate: D,
            initial: !1,
            children: f(rd, {
              value: nd,
              children: f(N, {
                href: g,
                motionChild: !0,
                nodeId: `aLcW03Ti0`,
                scopeId: `KQkIGD7gH`,
                smoothScroll: !0,
                children: f(E.a, {
                  ..._,
                  ...S,
                  className: `${z(re, `framer-1l195dw`, u, y)} framer-16zvs48`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: O,
                  layoutId: `aLcW03Ti0`,
                  ref: i,
                  style: { backgroundColor: `rgba(255, 255, 255, 0)`, ...l },
                  ...Zu(
                    {
                      "aLcW03Ti0-hover": { "data-framer-name": void 0 },
                      WnrqyDKtm: { "data-framer-name": `Mobile` },
                    },
                    v,
                    C
                  ),
                  children: f(I, {
                    __fromCanvasComponent: !0,
                    children: f(x, {
                      children: f(E.p, {
                        style: {
                          "--font-selector": `RlM7U3dpdHplci1yZWd1bGFy`,
                          "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                          "--framer-font-size": `14px`,
                          "--framer-letter-spacing": `-0.1px`,
                          "--framer-line-height": `1.6em`,
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.92))`,
                        },
                        children: `Projects`,
                      }),
                    }),
                    className: `framer-7tnast`,
                    "data-framer-name": `Label`,
                    fonts: [`FS;Switzer-regular`],
                    layoutDependency: O,
                    layoutId: `qPEPdVpcz`,
                    style: {
                      "--extracted-r6o4lv": `rgba(255, 255, 255, 0.92)`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: h,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Zu(
                      {
                        WnrqyDKtm: {
                          children: f(x, {
                            children: f(E.p, {
                              style: {
                                "--font-selector": `RlM7U3dpdHplci1yZWd1bGFy`,
                                "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                "--framer-font-size": `18px`,
                                "--framer-letter-spacing": `0px`,
                                "--framer-line-height": `1.55em`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.92))`,
                              },
                              children: `Projects`,
                            }),
                          }),
                        },
                      },
                      v,
                      C
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (ld = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-2WKRf.framer-16zvs48, .framer-2WKRf .framer-16zvs48 { display: block; }`,
        `.framer-2WKRf.framer-1l195dw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-2WKRf .framer-7tnast { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-2WKRf.framer-v-m4hsr9.framer-1l195dw { cursor: unset; justify-content: flex-start; }`,
      ]),
      (ud = be(cd, ld, `framer-2WKRf`)),
      (dd = ud),
      (ud.displayName = `Navigation / Navbar | Tab 2`),
      (ud.defaultProps = { height: 22.5, width: 51 }),
      R(ud, {
        variant: {
          options: [`aLcW03Ti0`, `WnrqyDKtm`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: j.Enum,
        },
        OKgbb5JD4: {
          defaultValue: `Projects`,
          displayTextArea: !1,
          title: `Title`,
          type: j.String,
        },
        UJGTNwrG2: { title: `Link`, type: j.Link },
      }),
      oe(
        ud,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Switzer`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BLNB4FAQFNK56DWWNF7PMGTCOTZHOEII/ST3WKSSDMBK2MIQQO3MAVYWLF4FTOLFV/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function pd(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd = e(() => {
    o(),
      H(),
      w(),
      s(),
      ql(),
      (md = B(Hl)),
      (hd = { VhGRLiEKU: { hover: !0 } }),
      (gd = `framer-MxHFy`),
      (_d = { VhGRLiEKU: `framer-v-14qjxpk` }),
      (vd = { damping: 60, delay: 0, mass: 1, stiffness: 828, type: `spring` }),
      (yd = ({ value: e, children: t }) => {
        let n = h(C),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(C.Provider, { value: i, children: t });
      }),
      (bd = E.create(x)),
      (xd = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        Bn6yUGZ3n: n ?? i.Bn6yUGZ3n,
      })),
      (Sd = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Cd = n(function (e, t) {
        let n = p(null),
          i = t ?? n,
          a = r(),
          { activeLocale: o, setLocale: s } = he(),
          c = ue(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: m,
            Bn6yUGZ3n: h,
            ...g
          } = xd(e),
          {
            baseVariant: _,
            classNames: y,
            clearLoadingGesture: b,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: te,
            setGestureState: w,
            setVariant: T,
            variants: D,
          } = ye({
            defaultVariant: `VhGRLiEKU`,
            enabledGestures: hd,
            ref: i,
            variant: m,
            variantClassNames: _d,
          }),
          O = Sd(e, D),
          ne = [],
          re = z(gd, ...ne);
        return f(ee, {
          id: d ?? a,
          children: f(bd, {
            animate: D,
            initial: !1,
            children: f(yd, {
              value: vd,
              children: f(N, {
                href: h,
                motionChild: !0,
                nodeId: `VhGRLiEKU`,
                scopeId: `mB26RWXRG`,
                children: v(E.a, {
                  ...g,
                  ...S,
                  className: `${z(re, `framer-14qjxpk`, u, y)} framer-t0qe8`,
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `VhGRLiEKU`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgb(69, 69, 69)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-8455b752-903b-4a76-bf3e-7cd9c17e7849, rgb(77, 77, 77))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    boxShadow: `inset 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.47), inset 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.41), inset 0px 12px 12px -3.75px rgba(0, 0, 0, 0.16), 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.16), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.14), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)`,
                    ...l,
                  },
                  variants: {
                    "VhGRLiEKU-hover": {
                      backgroundColor: `rgb(99, 99, 99)`,
                      boxShadow: `inset 0px 0.5573343114665477px 0.5573343114665477px -0.9375px rgba(0, 0, 0, 0.58), inset 0px 1.6901543001731625px 1.6901543001731625px -1.875px rgba(0, 0, 0, 0.55), inset 0px 4.467857465039123px 4.467857465039123px -2.8125px rgba(0, 0, 0, 0.47), inset 0px 14px 14px -3.75px rgba(0, 0, 0, 0.2), 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.16), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.14), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)`,
                    },
                  },
                  ...pd(
                    { "VhGRLiEKU-hover": { "data-framer-name": void 0 } },
                    _,
                    C
                  ),
                  children: [
                    f(I, {
                      __fromCanvasComponent: !0,
                      children: f(x, {
                        children: f(E.p, {
                          style: {
                            "--font-selector": `RlM7U3dpdHplci1yZWd1bGFy`,
                            "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-letter-spacing": `-0.1px`,
                            "--framer-line-height": `1.6em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb46346e-890d-4bba-820f-31110fbbbe1c, rgb(255, 255, 255)))`,
                          },
                          children: `Buy $TOADS`,
                        }),
                      }),
                      className: `framer-1vsiy66`,
                      "data-framer-name": `Label`,
                      fonts: [`FS;Switzer-regular`],
                      layoutDependency: O,
                      layoutId: `ItKCBDntk`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-fb46346e-890d-4bba-820f-31110fbbbe1c, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    f(k, {
                      children: f(L, {
                        className: `framer-17hvf97-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `UmpiU474m-container`,
                        nodeId: `UmpiU474m`,
                        rendersWithMotion: !0,
                        scopeId: `mB26RWXRG`,
                        style: { rotate: 0 },
                        variants: { "VhGRLiEKU-hover": { rotate: 45 } },
                        children: f(Hl, {
                          color: `var(--token-fb46346e-890d-4bba-820f-31110fbbbe1c, rgb(255, 255, 255))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `ArrowUpRight`,
                          id: `UmpiU474m`,
                          layoutId: `UmpiU474m`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `regular`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (wd = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-MxHFy.framer-t0qe8, .framer-MxHFy .framer-t0qe8 { display: block; }`,
        `.framer-MxHFy.framer-14qjxpk { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MxHFy .framer-1vsiy66 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-MxHFy .framer-17hvf97-container { flex: none; height: 16px; position: relative; width: 16px; }`,
        `.framer-MxHFy[data-border="true"]::after, .framer-MxHFy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (Td = be(Cd, wd, `framer-MxHFy`)),
      (Ed = Td),
      (Td.displayName = `Buttons / CTA | Navbar`),
      (Td.defaultProps = { height: 38.5, width: 125.5 }),
      R(Td, { Bn6yUGZ3n: { title: `Link`, type: j.Link } }),
      oe(
        Td,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Switzer`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BLNB4FAQFNK56DWWNF7PMGTCOTZHOEII/ST3WKSSDMBK2MIQQO3MAVYWLF4FTOLFV/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2`,
                weight: `400`,
              },
            ],
          },
          ...md,
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function Od(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd = e(() => {
    o(),
      H(),
      w(),
      s(),
      Ol(),
      ql(),
      ru(),
      vu(),
      Pu(),
      Xu(),
      fd(),
      Dd(),
      (kd = B(Hl)),
      (Ad = B(Dl)),
      (jd = B(Yu)),
      (Md = B(Ql)),
      (Nd = B(Ed)),
      (Pd = B(dd)),
      (Fd = B(Nu)),
      (Id = B(_u)),
      (Ld = [`pS4I324hp`, `RMnR6ED8G`, `uZC0smAiB`]),
      (Rd = `framer-9rFRo`),
      (zd = {
        pS4I324hp: `framer-v-qmusi5`,
        RMnR6ED8G: `framer-v-1q5coxh`,
        uZC0smAiB: `framer-v-114snjg`,
      }),
      (Bd = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Vd = { damping: 48, delay: 0, mass: 1, stiffness: 700, type: `spring` }),
      (Hd = ({ value: e, children: t }) => {
        let n = h(C),
          r = e ?? n.transition,
          i = g(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(C.Provider, { value: i, children: t });
      }),
      (Ud = E.create(x)),
      (Wd = {
        "Mobile | Open": `uZC0smAiB`,
        Desktop: `pS4I324hp`,
        Mobile: `RMnR6ED8G`,
      }),
      (Gd = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Wd[r.variant] ?? r.variant ?? `pS4I324hp`,
      })),
      (Kd = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (qd = n(function (e, t) {
        let n = p(null),
          i = t ?? n,
          a = r(),
          { activeLocale: o, setLocale: s } = he(),
          c = ue(),
          { style: l, className: u, layoutId: d, variant: m, ...h } = Gd(e),
          {
            baseVariant: g,
            classNames: _,
            clearLoadingGesture: y,
            gestureHandlers: b,
            gestureVariant: x,
            isLoading: S,
            setGestureState: C,
            setVariant: te,
            variants: w,
          } = ye({
            cycleOrder: Ld,
            defaultVariant: `pS4I324hp`,
            ref: i,
            variant: m,
            variantClassNames: zd,
          }),
          T = Kd(e, w),
          { activeVariantCallback: D, delay: O } = le(g),
          ne = D(async (...e) => {
            te(`uZC0smAiB`);
          }),
          re = D(async (...e) => {
            te(`RMnR6ED8G`);
          }),
          A = [],
          j = z(Rd, ...A),
          ie = () => g === `RMnR6ED8G`,
          P = () => ![`RMnR6ED8G`, `uZC0smAiB`].includes(g),
          ae = ve(),
          I = () => g === `uZC0smAiB`;
        return f(ee, {
          id: d ?? a,
          children: f(Ud, {
            animate: w,
            initial: !1,
            children: f(Hd, {
              value: Bd,
              ...Od(
                { RMnR6ED8G: { value: Vd }, uZC0smAiB: { value: Vd } },
                g,
                x
              ),
              children: v(E.nav, {
                ...h,
                ...b,
                className: z(j, `framer-qmusi5`, u, _),
                "data-framer-name": `Desktop`,
                layoutDependency: T,
                layoutId: `pS4I324hp`,
                ref: i,
                style: { backgroundColor: `rgba(255, 255, 255, 0)`, ...l },
                ...Od(
                  {
                    RMnR6ED8G: { "data-framer-name": `Mobile` },
                    uZC0smAiB: { "data-framer-name": `Mobile | Open` },
                  },
                  g,
                  x
                ),
                children: [
                  v(E.div, {
                    className: `framer-12vk0an`,
                    "data-border": !0,
                    "data-framer-name": `Navigation Bar`,
                    layoutDependency: T,
                    layoutId: `iOU0Y1_7x`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `rgb(61, 61, 61)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(5px)`,
                      backgroundColor: `var(--token-6c59203b-689b-4dbd-b393-49b3e218e0d8, rgb(56, 55, 53))`,
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      boxShadow: `0px 0.7961918735236395px 0.7961918735236395px -0.9375px rgba(0, 0, 0, 0.02), 0px 2.414506143104518px 2.414506143104518px -1.875px rgba(0, 0, 0, 0.02), 0px 6.382653521484461px 6.382653521484461px -2.8125px rgba(0, 0, 0, 0.02), 0px 20px 20px -3.75px rgba(0, 0, 0, 0.01), 0px 0.7226247621292714px 0.7226247621292714px -1px rgba(0, 0, 0, 0.09), 0px 2.7462399638921484px 2.7462399638921484px -2px rgba(0, 0, 0, 0.08), 0px 12px 12px -3px rgba(0, 0, 0, 0.06), inset 0px -0.7961918735236395px 2.0700988711614627px -1.25px rgba(255, 255, 255, 0.53), inset 0px -2.414506143104518px 6.277715972071746px -2.5px rgba(255, 255, 255, 0.48), inset 0px -6.382653521484461px 16.5948991558596px -3.75px rgba(255, 255, 255, 0.37), inset 0px -20px 52px -5px rgba(255, 255, 255, 0)`,
                      WebkitBackdropFilter: `blur(5px)`,
                    },
                    variants: {
                      uZC0smAiB: {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        boxShadow: `0px 0.7961918735236395px 0.7961918735236395px -0.9375px rgba(0, 0, 0, 0.02), 0px 2.414506143104518px 2.414506143104518px -1.875px rgba(0, 0, 0, 0.02), 0px 6.382653521484461px 6.382653521484461px -2.8125px rgba(0, 0, 0, 0.02), 0px 20px 20px -3.75px rgba(0, 0, 0, 0.01), 0px 0.7226247621292714px 0.7226247621292714px -1px rgba(0, 0, 0, 0.09), 0px 2.7462399638921484px 2.7462399638921484px -2px rgba(0, 0, 0, 0.08), 0px 12px 12px -3px rgba(0, 0, 0, 0.06), inset 0px -0.7961918735236395px 2.0700988711614627px -1.25px rgba(255, 255, 255, 0), inset 0px -2.414506143104518px 6.277715972071746px -2.5px rgba(255, 255, 255, 0), inset 0px -6.382653521484461px 16.5948991558596px -3.75px rgba(255, 255, 255, 0), inset 0px -20px 52px -5px rgba(255, 255, 255, 0)`,
                      },
                    },
                    children: [
                      f(N, {
                        href: { webPageId: `augiA20Il` },
                        motionChild: !0,
                        nodeId: `NpF2Lbpho`,
                        openInNewTab: !1,
                        scopeId: `jHDkq0BN8`,
                        children: f(E.a, {
                          className: `framer-1v58eb0 framer-1sivo8t`,
                          "data-framer-name": `Logo`,
                          layoutDependency: T,
                          layoutId: `NpF2Lbpho`,
                          children: f(M, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: V(
                                (c?.y || 0) +
                                  16 +
                                  (((c?.height || 94.5) - 32 - 62) / 2 +
                                    0 +
                                    0) +
                                  15 +
                                  0
                              ),
                              pixelHeight: 1280,
                              pixelWidth: 1280,
                              sizes: `32px`,
                              src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a`,
                            },
                            className: `framer-179qlzy`,
                            "data-framer-name": `Logo`,
                            layoutDependency: T,
                            layoutId: `XzXuPax5T`,
                            style: {
                              borderBottomLeftRadius: 15,
                              borderBottomRightRadius: 15,
                              borderTopLeftRadius: 15,
                              borderTopRightRadius: 15,
                            },
                            ...Od(
                              {
                                RMnR6ED8G: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: V(
                                      (c?.y || 0) +
                                        15 +
                                        (((c?.height || 86) - 30 - 56) / 2 +
                                          0 +
                                          0) +
                                        12 +
                                        0
                                    ),
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: `32px`,
                                    src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a`,
                                    srcSet: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=512 512w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024 1024w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a 1280w`,
                                  },
                                },
                                uZC0smAiB: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: V(
                                      (c?.y || 0) +
                                        15 +
                                        (((c?.height || 381.5) - 30 - 322) / 2 +
                                          0 +
                                          0) +
                                        12 +
                                        0
                                    ),
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: `32px`,
                                    src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a`,
                                    srcSet: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=512 512w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024 1024w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a 1280w`,
                                  },
                                },
                              },
                              g,
                              x
                            ),
                          }),
                        }),
                      }),
                      ie() &&
                        f(k, {
                          children: f(L, {
                            className: `framer-1l3pwal-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: T,
                            layoutId: `l5jHrl_Hj-container`,
                            nodeId: `l5jHrl_Hj`,
                            rendersWithMotion: !0,
                            scopeId: `jHDkq0BN8`,
                            children: f(Hl, {
                              color: `rgb(255, 255, 255)`,
                              height: `100%`,
                              iconSearch: `House`,
                              iconSelection: `List`,
                              id: `l5jHrl_Hj`,
                              layoutId: `l5jHrl_Hj`,
                              mirrored: !1,
                              onClick: ne,
                              selectByList: !0,
                              style: { height: `100%`, width: `100%` },
                              weight: `regular`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      P() &&
                        v(E.div, {
                          className: `framer-1trb2if`,
                          "data-framer-name": `Tabs`,
                          layoutDependency: T,
                          layoutId: `GZQopmZFt`,
                          children: [
                            v(E.div, {
                              className: `framer-pwa18s`,
                              layoutDependency: T,
                              layoutId: `wOTKb7dSz`,
                              children: [
                                f(F, {
                                  links: [
                                    {
                                      href: { webPageId: `jUdrf15cK` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(k, {
                                      height: 22,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 94.5) - 32 - 62) / 2 +
                                          0 +
                                          0) +
                                        20 +
                                        0 +
                                        0,
                                      children: f(L, {
                                        className: `framer-jch51w-container`,
                                        isModuleExternal: !0,
                                        layoutDependency: T,
                                        layoutId: `iwg_CXzdV-container`,
                                        nodeId: `iwg_CXzdV`,
                                        rendersWithMotion: !0,
                                        scopeId: `jHDkq0BN8`,
                                        children: f(Dl, {
                                          height: `100%`,
                                          id: `iwg_CXzdV`,
                                          layoutId: `iwg_CXzdV`,
                                          OKgbb5JD4: `Home`,
                                          UJGTNwrG2: e[0],
                                          variant: `a7SdQ_xzK`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(F, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:HGfMykq3o`,
                                        webPageId: `augiA20Il`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(k, {
                                      height: 22,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 94.5) - 32 - 62) / 2 +
                                          0 +
                                          0) +
                                        20 +
                                        0 +
                                        0,
                                      children: f(L, {
                                        className: `framer-94saf9-container`,
                                        isModuleExternal: !0,
                                        layoutDependency: T,
                                        layoutId: `gSpcbpcSW-container`,
                                        nodeId: `gSpcbpcSW`,
                                        rendersWithMotion: !0,
                                        scopeId: `jHDkq0BN8`,
                                        children: f(Dl, {
                                          height: `100%`,
                                          id: `gSpcbpcSW`,
                                          layoutId: `gSpcbpcSW`,
                                          OKgbb5JD4: `Community`,
                                          UJGTNwrG2: e[0],
                                          variant: `a7SdQ_xzK`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(F, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:zAo60tHKD`,
                                        webPageId: `augiA20Il`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(k, {
                                      height: 22,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 94.5) - 32 - 62) / 2 +
                                          0 +
                                          0) +
                                        20 +
                                        0 +
                                        0,
                                      children: f(L, {
                                        className: `framer-yxr7bd-container`,
                                        layoutDependency: T,
                                        layoutId: `T_51gxhPI-container`,
                                        nodeId: `T_51gxhPI`,
                                        rendersWithMotion: !0,
                                        scopeId: `jHDkq0BN8`,
                                        children: f(Yu, {
                                          height: `100%`,
                                          id: `T_51gxhPI`,
                                          layoutId: `T_51gxhPI`,
                                          OKgbb5JD4: `Memes`,
                                          UJGTNwrG2: e[0],
                                          variant: `Hxj81ZMY2`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(F, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:lAdfx2E3G`,
                                        webPageId: `augiA20Il`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(k, {
                                      height: 22,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 94.5) - 32 - 62) / 2 +
                                          0 +
                                          0) +
                                        20 +
                                        0 +
                                        0,
                                      children: f(L, {
                                        className: `framer-fwv1st-container`,
                                        isModuleExternal: !0,
                                        layoutDependency: T,
                                        layoutId: `YbMTXh9qb-container`,
                                        nodeId: `YbMTXh9qb`,
                                        rendersWithMotion: !0,
                                        scopeId: `jHDkq0BN8`,
                                        children: f(Dl, {
                                          height: `100%`,
                                          id: `YbMTXh9qb`,
                                          layoutId: `YbMTXh9qb`,
                                          OKgbb5JD4: `Tokenomics`,
                                          UJGTNwrG2: e[0],
                                          variant: `a7SdQ_xzK`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(F, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:R2cJXCPrU`,
                                        webPageId: `augiA20Il`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(k, {
                                      height: 22,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 94.5) - 32 - 62) / 2 +
                                          0 +
                                          0) +
                                        20 +
                                        0 +
                                        0,
                                      children: f(L, {
                                        className: `framer-m3k1or-container`,
                                        isModuleExternal: !0,
                                        layoutDependency: T,
                                        layoutId: `Kz7XFnJoK-container`,
                                        nodeId: `Kz7XFnJoK`,
                                        rendersWithMotion: !0,
                                        scopeId: `jHDkq0BN8`,
                                        children: f(Dl, {
                                          height: `100%`,
                                          id: `Kz7XFnJoK`,
                                          layoutId: `Kz7XFnJoK`,
                                          OKgbb5JD4: `How to Buy`,
                                          UJGTNwrG2: e[0],
                                          variant: `a7SdQ_xzK`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            f(E.div, {
                              className: `framer-1n76y5j`,
                              layoutDependency: T,
                              layoutId: `YB9TazF_7`,
                              children: f(N, {
                                href: `https://x.com/BattleToadsETH`,
                                motionChild: !0,
                                nodeId: `yKS9kHhRd`,
                                openInNewTab: !0,
                                scopeId: `jHDkq0BN8`,
                                children: f(E.a, {
                                  className: `framer-gmtmd4 framer-1sivo8t`,
                                  layoutDependency: T,
                                  layoutId: `yKS9kHhRd`,
                                  children: f(k, {
                                    children: f(L, {
                                      className: `framer-1tcoibu-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: T,
                                      layoutId: `nowfWq2Pt-container`,
                                      nodeId: `nowfWq2Pt`,
                                      rendersWithMotion: !0,
                                      scopeId: `jHDkq0BN8`,
                                      children: f(Ql, {
                                        color: `rgb(255, 255, 255)`,
                                        height: `100%`,
                                        iconSearch: `House`,
                                        iconSelection: `TwitterLogo`,
                                        id: `nowfWq2Pt`,
                                        layoutId: `nowfWq2Pt`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        weight: `regular`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      P() &&
                        v(E.div, {
                          className: `framer-uegnii`,
                          "data-framer-name": `Container`,
                          layoutDependency: T,
                          layoutId: `WQjHhy1tA`,
                          children: [
                            f(N, {
                              href: `https://dexscreener.com/ethereum/tba`,
                              motionChild: !0,
                              nodeId: `PZKpYhdue`,
                              openInNewTab: !0,
                              scopeId: `jHDkq0BN8`,
                              children: f(E.a, {
                                className: `framer-na3q25 framer-1sivo8t`,
                                layoutDependency: T,
                                layoutId: `PZKpYhdue`,
                                style: {
                                  backgroundColor: `var(--token-8455b752-903b-4a76-bf3e-7cd9c17e7849, rgb(77, 77, 77))`,
                                },
                              }),
                            }),
                            f(k, {
                              height: 38,
                              y:
                                (c?.y || 0) +
                                16 +
                                (((c?.height || 94.5) - 32 - 62) / 2 + 0 + 0) +
                                12 +
                                0,
                              children: f(L, {
                                className: `framer-r80o6w-container`,
                                layoutDependency: T,
                                layoutId: `snj896DsV-container`,
                                nodeId: `snj896DsV`,
                                rendersWithMotion: !0,
                                scopeId: `jHDkq0BN8`,
                                children: f(Ed, {
                                  Bn6yUGZ3n: `https://dexscreener.com/`,
                                  height: `100%`,
                                  id: `snj896DsV`,
                                  layoutId: `snj896DsV`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      f(M, {
                        background: {
                          alt: ``,
                          backgroundSize: 1,
                          fit: `tile`,
                          loading: V(
                            (c?.y || 0) +
                              16 +
                              (((c?.height || 94.5) - 32 - 62) / 2 + 0 + 0) +
                              -70
                          ),
                          pixelHeight: 256,
                          pixelWidth: 256,
                          positionX: `left`,
                          positionY: `top`,
                          src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreibqlxdzmhpeblapk7vb4u6a3eqbwky5tzvloj7rfmiwoyu7gsntfa`,
                        },
                        className: `framer-1gx7o4x`,
                        "data-framer-name": `BG_Grain`,
                        layoutDependency: T,
                        layoutId: `K4V8HG8Lq`,
                        style: { opacity: 0.12 },
                        ...Od(
                          {
                            RMnR6ED8G: {
                              background: {
                                alt: ``,
                                backgroundSize: 1,
                                fit: `tile`,
                                loading: V(
                                  (c?.y || 0) +
                                    15 +
                                    (((c?.height || 86) - 30 - 56) / 2 +
                                      0 +
                                      0) +
                                    -70
                                ),
                                pixelHeight: 256,
                                pixelWidth: 256,
                                positionX: `left`,
                                positionY: `top`,
                                src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreibqlxdzmhpeblapk7vb4u6a3eqbwky5tzvloj7rfmiwoyu7gsntfa`,
                              },
                            },
                            uZC0smAiB: {
                              background: {
                                alt: ``,
                                backgroundSize: 1,
                                fit: `tile`,
                                loading: V(
                                  (c?.y || 0) +
                                    15 +
                                    (((c?.height || 381.5) - 30 - 322) / 2 +
                                      0 +
                                      0) +
                                    -70
                                ),
                                pixelHeight: 256,
                                pixelWidth: 256,
                                positionX: `left`,
                                positionY: `top`,
                                src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreibqlxdzmhpeblapk7vb4u6a3eqbwky5tzvloj7rfmiwoyu7gsntfa`,
                              },
                            },
                          },
                          g,
                          x
                        ),
                      }),
                      I() &&
                        f(k, {
                          children: f(L, {
                            className: `framer-1b23s2g-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: T,
                            layoutId: `x2iJcmPki-container`,
                            nodeId: `x2iJcmPki`,
                            rendersWithMotion: !0,
                            scopeId: `jHDkq0BN8`,
                            children: f(Hl, {
                              color: `rgb(255, 255, 255)`,
                              height: `100%`,
                              iconSearch: `House`,
                              iconSelection: `X`,
                              id: `x2iJcmPki`,
                              layoutId: `x2iJcmPki`,
                              mirrored: !1,
                              onClick: re,
                              selectByList: !0,
                              style: { height: `100%`, width: `100%` },
                              weight: `regular`,
                              width: `100%`,
                            }),
                          }),
                        }),
                    ],
                  }),
                  I() &&
                    v(E.div, {
                      className: `framer-1luxtf2`,
                      "data-border": !0,
                      "data-framer-name": `Dropdown Container`,
                      layoutDependency: T,
                      layoutId: `F1frZqJ3w`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(33, 33, 33, 0.08)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backdropFilter: `blur(10px)`,
                        backgroundColor: `rgb(55, 55, 53)`,
                        borderBottomLeftRadius: 14,
                        borderBottomRightRadius: 14,
                        WebkitBackdropFilter: `blur(10px)`,
                      },
                      children: [
                        v(E.div, {
                          className: `framer-v794p4`,
                          "data-framer-name": `Dropdown`,
                          layoutDependency: T,
                          layoutId: `DTT7SDYQ9`,
                          children: [
                            f(F, {
                              links: [
                                {
                                  href: { webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(k, {
                                  height: 22,
                                  ...Od(
                                    {
                                      uZC0smAiB: {
                                        width: `max(min(${
                                          c?.width || `100vw`
                                        } - 30px, 720px) - 20px, 1px)`,
                                        y:
                                          (c?.y || 0) +
                                          15 +
                                          (((c?.height || 381.5) - 30 - 322) /
                                            2 +
                                            56 +
                                            0) +
                                          0 +
                                          20 +
                                          0,
                                      },
                                    },
                                    g,
                                    x
                                  ),
                                  children: f(L, {
                                    className: `framer-14uywmd-container`,
                                    layoutDependency: T,
                                    layoutId: `FKrrKjYbR-container`,
                                    nodeId: `FKrrKjYbR`,
                                    rendersWithMotion: !0,
                                    scopeId: `jHDkq0BN8`,
                                    children: f(dd, {
                                      height: `100%`,
                                      id: `FKrrKjYbR`,
                                      layoutId: `FKrrKjYbR`,
                                      OKgbb5JD4: `Home`,
                                      style: { width: `100%` },
                                      UJGTNwrG2: e[0],
                                      variant: `WnrqyDKtm`,
                                      width: `100%`,
                                      ...Od(
                                        { uZC0smAiB: { UJGTNwrG2: e[1] } },
                                        g,
                                        x
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(F, {
                              links: [
                                {
                                  href: { webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(k, {
                                  height: 22,
                                  ...Od(
                                    {
                                      uZC0smAiB: {
                                        width: `max(min(${
                                          c?.width || `100vw`
                                        } - 30px, 720px) - 20px, 1px)`,
                                        y:
                                          (c?.y || 0) +
                                          15 +
                                          (((c?.height || 381.5) - 30 - 322) /
                                            2 +
                                            56 +
                                            0) +
                                          0 +
                                          20 +
                                          38,
                                      },
                                    },
                                    g,
                                    x
                                  ),
                                  children: f(L, {
                                    className: `framer-1h0r9s6-container`,
                                    layoutDependency: T,
                                    layoutId: `noeEiukcl-container`,
                                    nodeId: `noeEiukcl`,
                                    rendersWithMotion: !0,
                                    scopeId: `jHDkq0BN8`,
                                    children: f(Nu, {
                                      height: `100%`,
                                      id: `noeEiukcl`,
                                      layoutId: `noeEiukcl`,
                                      OKgbb5JD4: `Community`,
                                      style: { width: `100%` },
                                      UJGTNwrG2: e[0],
                                      variant: `Ra97uNWOE`,
                                      width: `100%`,
                                      ...Od(
                                        { uZC0smAiB: { UJGTNwrG2: e[1] } },
                                        g,
                                        x
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(F, {
                              links: [
                                {
                                  href: { webPageId: `jUdrf15cK` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `jUdrf15cK` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(k, {
                                  height: 22,
                                  ...Od(
                                    {
                                      uZC0smAiB: {
                                        width: `max(min(${
                                          c?.width || `100vw`
                                        } - 30px, 720px) - 20px, 1px)`,
                                        y:
                                          (c?.y || 0) +
                                          15 +
                                          (((c?.height || 381.5) - 30 - 322) /
                                            2 +
                                            56 +
                                            0) +
                                          0 +
                                          20 +
                                          76,
                                      },
                                    },
                                    g,
                                    x
                                  ),
                                  children: f(L, {
                                    className: `framer-1nx97lx-container`,
                                    isModuleExternal: !0,
                                    layoutDependency: T,
                                    layoutId: `hl9E3tVH9-container`,
                                    nodeId: `hl9E3tVH9`,
                                    rendersWithMotion: !0,
                                    scopeId: `jHDkq0BN8`,
                                    children: f(Dl, {
                                      height: `100%`,
                                      id: `hl9E3tVH9`,
                                      layoutId: `hl9E3tVH9`,
                                      OKgbb5JD4: `Memes`,
                                      style: { width: `100%` },
                                      UJGTNwrG2: e[0],
                                      variant: `hbeWpzNc9`,
                                      width: `100%`,
                                      ...Od(
                                        { uZC0smAiB: { UJGTNwrG2: e[1] } },
                                        g,
                                        x
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(F, {
                              links: [
                                {
                                  href: { webPageId: `lKoGHK8Be` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `lKoGHK8Be` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(k, {
                                  height: 22,
                                  ...Od(
                                    {
                                      uZC0smAiB: {
                                        width: `max(min(${
                                          c?.width || `100vw`
                                        } - 30px, 720px) - 20px, 1px)`,
                                        y:
                                          (c?.y || 0) +
                                          15 +
                                          (((c?.height || 381.5) - 30 - 322) /
                                            2 +
                                            56 +
                                            0) +
                                          0 +
                                          20 +
                                          114,
                                      },
                                    },
                                    g,
                                    x
                                  ),
                                  children: f(L, {
                                    className: `framer-chjbb0-container`,
                                    isModuleExternal: !0,
                                    layoutDependency: T,
                                    layoutId: `Jv2kuA24V-container`,
                                    nodeId: `Jv2kuA24V`,
                                    rendersWithMotion: !0,
                                    scopeId: `jHDkq0BN8`,
                                    children: f(Dl, {
                                      height: `100%`,
                                      id: `Jv2kuA24V`,
                                      layoutId: `Jv2kuA24V`,
                                      OKgbb5JD4: `Tokenomics`,
                                      style: { width: `100%` },
                                      UJGTNwrG2: e[0],
                                      variant: `hbeWpzNc9`,
                                      width: `100%`,
                                      ...Od(
                                        { uZC0smAiB: { UJGTNwrG2: e[1] } },
                                        g,
                                        x
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(F, {
                              links: [
                                {
                                  href: { webPageId: `ZCjEjpCac` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `ZCjEjpCac` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(k, {
                                  height: 22,
                                  ...Od(
                                    {
                                      uZC0smAiB: {
                                        width: `max(min(${
                                          c?.width || `100vw`
                                        } - 30px, 720px) - 20px, 1px)`,
                                        y:
                                          (c?.y || 0) +
                                          15 +
                                          (((c?.height || 381.5) - 30 - 322) /
                                            2 +
                                            56 +
                                            0) +
                                          0 +
                                          20 +
                                          152,
                                      },
                                    },
                                    g,
                                    x
                                  ),
                                  children: f(L, {
                                    className: `framer-12lxq0f-container`,
                                    isModuleExternal: !0,
                                    layoutDependency: T,
                                    layoutId: `tCkxhpbu1-container`,
                                    nodeId: `tCkxhpbu1`,
                                    rendersWithMotion: !0,
                                    scopeId: `jHDkq0BN8`,
                                    children: f(Dl, {
                                      height: `100%`,
                                      id: `tCkxhpbu1`,
                                      layoutId: `tCkxhpbu1`,
                                      OKgbb5JD4: `How to Buy`,
                                      style: { width: `100%` },
                                      UJGTNwrG2: e[0],
                                      variant: `hbeWpzNc9`,
                                      width: `100%`,
                                      ...Od(
                                        { uZC0smAiB: { UJGTNwrG2: e[1] } },
                                        g,
                                        x
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(k, {
                              height: 44,
                              ...Od(
                                {
                                  uZC0smAiB: {
                                    width: `max(min(${
                                      c?.width || `100vw`
                                    } - 30px, 720px) - 20px, 1px)`,
                                    y:
                                      (c?.y || 0) +
                                      15 +
                                      (((c?.height || 381.5) - 30 - 322) / 2 +
                                        56 +
                                        0) +
                                      0 +
                                      20 +
                                      190,
                                  },
                                },
                                g,
                                x
                              ),
                              children: f(L, {
                                className: `framer-ug39l3-container`,
                                layoutDependency: T,
                                layoutId: `uBOB_r1yF-container`,
                                nodeId: `uBOB_r1yF`,
                                rendersWithMotion: !0,
                                scopeId: `jHDkq0BN8`,
                                children: f(_u, {
                                  Bn6yUGZ3n: `https://dexscreener.com/`,
                                  height: `100%`,
                                  id: `uBOB_r1yF`,
                                  layoutId: `uBOB_r1yF`,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        f(M, {
                          background: {
                            alt: ``,
                            backgroundSize: 1,
                            fit: `tile`,
                            pixelHeight: 256,
                            pixelWidth: 256,
                            positionX: `left`,
                            positionY: `top`,
                            src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreibqlxdzmhpeblapk7vb4u6a3eqbwky5tzvloj7rfmiwoyu7gsntfa`,
                          },
                          className: `framer-1orxmsi`,
                          "data-framer-name": `BG_Grain`,
                          layoutDependency: T,
                          layoutId: `U2b3fHJlr`,
                          style: { opacity: 0.12 },
                          ...Od(
                            {
                              uZC0smAiB: {
                                background: {
                                  alt: ``,
                                  backgroundSize: 1,
                                  fit: `tile`,
                                  loading: V(
                                    (c?.y || 0) +
                                      15 +
                                      (((c?.height || 381.5) - 30 - 322) / 2 +
                                        56 +
                                        0) +
                                      -70
                                  ),
                                  pixelHeight: 256,
                                  pixelWidth: 256,
                                  positionX: `left`,
                                  positionY: `top`,
                                  src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreibqlxdzmhpeblapk7vb4u6a3eqbwky5tzvloj7rfmiwoyu7gsntfa`,
                                },
                              },
                            },
                            g,
                            x
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (Jd = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-9rFRo.framer-1sivo8t, .framer-9rFRo .framer-1sivo8t { display: block; }`,
        `.framer-9rFRo.framer-qmusi5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 16px 0px; position: relative; width: 1366px; }`,
        `.framer-9rFRo .framer-12vk0an { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 720px; overflow: hidden; padding: 12px 12px 12px 16px; position: relative; width: 720px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-9rFRo .framer-1v58eb0 { flex: none; gap: 0px; height: 32px; overflow: visible; position: relative; text-decoration: none; width: 32px; z-index: 2; }`,
        `.framer-9rFRo .framer-179qlzy { flex: none; gap: 0px; height: 32px; left: calc(50% - 32px / 2); overflow: hidden; position: absolute; top: calc(50% - 32px / 2); width: 32px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9rFRo .framer-1l3pwal-container, .framer-9rFRo .framer-1b23s2g-container { flex: none; height: 30px; position: relative; width: 30px; z-index: 2; }`,
        `.framer-9rFRo .framer-1trb2if { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 8; }`,
        `.framer-9rFRo .framer-pwa18s { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-9rFRo .framer-jch51w-container, .framer-9rFRo .framer-94saf9-container, .framer-9rFRo .framer-yxr7bd-container, .framer-9rFRo .framer-fwv1st-container, .framer-9rFRo .framer-m3k1or-container, .framer-9rFRo .framer-r80o6w-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-9rFRo .framer-1n76y5j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-9rFRo .framer-gmtmd4 { flex: none; height: 20px; overflow: visible; position: relative; text-decoration: none; width: 20px; }`,
        `.framer-9rFRo .framer-1tcoibu-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-9rFRo .framer-uegnii { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 8; }`,
        `.framer-9rFRo .framer-na3q25 { flex: none; height: 28px; overflow: hidden; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-9rFRo .framer-1gx7o4x { bottom: -70px; flex: none; left: 0px; mix-blend-mode: overlay; position: absolute; right: 0px; top: -70px; z-index: 1; }`,
        `.framer-9rFRo .framer-1luxtf2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 720px; overflow: hidden; padding: 0px 8px 0px 12px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9rFRo .framer-v794p4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 0px 12px 0px; position: relative; width: 1px; }`,
        `.framer-9rFRo .framer-14uywmd-container, .framer-9rFRo .framer-1h0r9s6-container, .framer-9rFRo .framer-1nx97lx-container, .framer-9rFRo .framer-chjbb0-container, .framer-9rFRo .framer-12lxq0f-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-9rFRo .framer-ug39l3-container { flex: none; height: 44px; position: relative; width: 100%; }`,
        `.framer-9rFRo .framer-1orxmsi { bottom: -70px; flex: none; left: 0px; mix-blend-mode: overlay; pointer-events: none; position: absolute; right: 0px; top: -70px; z-index: 1; }`,
        `.framer-9rFRo.framer-v-1q5coxh.framer-qmusi5 { padding: 15px; width: 380px; }`,
        `.framer-9rFRo.framer-v-1q5coxh .framer-12vk0an, .framer-9rFRo.framer-v-114snjg .framer-12vk0an { gap: unset; justify-content: space-between; padding: 12px; width: 100%; }`,
        `.framer-9rFRo.framer-v-1q5coxh .framer-1gx7o4x, .framer-9rFRo.framer-v-114snjg .framer-1gx7o4x { pointer-events: none; }`,
        `.framer-9rFRo.framer-v-114snjg.framer-qmusi5 { gap: 0px; padding: 15px; width: 380px; }`,
        `.framer-9rFRo.framer-v-114snjg .framer-14uywmd-container { order: 0; }`,
        `.framer-9rFRo.framer-v-114snjg .framer-1h0r9s6-container { order: 1; }`,
        `.framer-9rFRo.framer-v-114snjg .framer-1nx97lx-container { order: 2; }`,
        `.framer-9rFRo.framer-v-114snjg .framer-chjbb0-container { order: 3; }`,
        `.framer-9rFRo.framer-v-114snjg .framer-12lxq0f-container { order: 4; }`,
        `.framer-9rFRo.framer-v-114snjg .framer-ug39l3-container { order: 7; }`,
        `.framer-9rFRo[data-border="true"]::after, .framer-9rFRo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (Yd = be(qd, Jd, `framer-9rFRo`)),
      (Xd = Yd),
      (Yd.displayName = `Navigation / Navbar`),
      (Yd.defaultProps = { height: 94.5, width: 1366 }),
      R(Yd, {
        variant: {
          options: [`pS4I324hp`, `RMnR6ED8G`, `uZC0smAiB`],
          optionTitles: [`Desktop`, `Mobile`, `Mobile | Open`],
          title: `Variant`,
          type: j.Enum,
        },
      }),
      oe(
        Yd,
        [
          { explicitInter: !0, fonts: [] },
          ...kd,
          ...Ad,
          ...jd,
          ...Md,
          ...Nd,
          ...Pd,
          ...Fd,
          ...Id,
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function Qd(e, t) {
  return {
    description: `Matt Furie's inspiration for PEPE comes straight from an old 90's video game called Battletoads. Matt Furie discusses it in old youtube video. Join $TOADS Army.`,
    favicon: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a`,
    robots: `max-image-preview:large`,
    socialImage: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a`,
    title: `$TOADS | PEPE'S INSPIRATION`,
  };
}
var $d = e(() => {});
function ef(e, t) {
  return {
    breakpoints: [
      { hash: `72rtr7`, mediaQuery: `(min-width: 1200px)` },
      {
        hash: `1aq5zq6`,
        mediaQuery: `(min-width: 810px) and (max-width: 1199px)`,
      },
      { hash: `2o6mo0`, mediaQuery: `(max-width: 809px)` },
    ],
    description: Qd(e, t).description,
    elements: {
      HGfMykq3o: `com`,
      lAdfx2E3G: `nom`,
      R2cJXCPrU: `buy`,
      zAo60tHKD: `meme`,
    },
    robots: `max-image-preview:large`,
    serializationId: `framer-LDB6i`,
    title: Qd(e, t).title || `Home`,
    viewport: `width=device-width`,
  };
}
var tf,
  nf,
  rf = e(() => {
    $d(),
      (tf = 1),
      (nf = {
        exports: {
          metadataVersion: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `function`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  }),
  af,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df,
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf = e(() => {
    o(),
      H(),
      w(),
      s(),
      nc(),
      lc(),
      Gc(),
      il(),
      Zd(),
      rf(),
      (af = B(Jc)),
      (sf = xe(E.div)),
      (cf = xe(I)),
      (lf = B(Wc)),
      (uf = xe(M)),
      (df = xe(E.a)),
      (ff = B(Ks)),
      (pf = B(Xd)),
      (mf = B(rc)),
      (hf = {
        PaE47B1w3: `(min-width: 810px) and (max-width: 1199px)`,
        WQLkyLRf1: `(min-width: 1200px)`,
        YtTfc_taL: `(max-width: 809px)`,
      }),
      (gf = () => typeof document < `u`),
      (_f = `framer-LDB6i`),
      (vf = {
        PaE47B1w3: `framer-v-1aq5zq6`,
        WQLkyLRf1: `framer-v-72rtr7`,
        YtTfc_taL: `framer-v-2o6mo0`,
      }),
      (yf = { bounce: 0.25, delay: 0, duration: 0.45, type: `spring` }),
      (bf = {
        backgroundColor: `rgb(237, 121, 19)`,
        boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.25)`,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.9,
        skewX: -5,
        skewY: 5,
        transition: yf,
      }),
      (xf = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Sf = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: xf,
        x: 0,
        y: 0,
      }),
      (Cf = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: -150,
        y: 0,
      }),
      (wf = { bounce: 0.2, delay: 0, duration: 2.5, type: `spring` }),
      (Tf = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 7,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: wf,
        x: 0,
        y: 0,
      }),
      (Ef = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 150,
      }),
      (Df = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: wf,
        x: 0,
        y: 0,
      }),
      (Of = { bounce: 0.25, delay: 0, duration: 0.1, type: `spring` }),
      (kf = {
        backgroundColor: `rgb(254, 223, 7)`,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.9,
        skewX: 0,
        skewY: 0,
        transition: Of,
      }),
      (Af = {
        backgroundColor: `rgb(255, 234, 0)`,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        transition: yf,
      }),
      (jf = (e, t) => `translate(-50%, -50%) ${t}`),
      (Mf = {
        opacity: 1,
        rotate: 3,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 8,
        skewY: 4,
        transition: yf,
        y: 5,
      }),
      (Nf = (e, t) => `translateY(-50%) ${t}`),
      (Pf = ({ value: e }) => {
        let t = me();
        return t
          ? null
          : f(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (Ff = { Desktop: `WQLkyLRf1`, Phone: `YtTfc_taL`, Tablet: `PaE47B1w3` }),
      (If = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ff[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      (Lf = n(function (e, t) {
        let n = p(null),
          i = t ?? n,
          a = r(),
          { activeLocale: o, setLocale: s } = he(),
          c = ue(),
          { style: l, className: u, layoutId: d, variant: m, ...h } = If(e),
          _ = g(() => ef(void 0, o), [void 0, o]);
        ge(_);
        let [y, b] = fe(m, hf, !1),
          S,
          C = [],
          te = z(_f, ...C),
          w = () => (gf() ? y !== `YtTfc_taL` : !0),
          T = () => !gf() || y === `YtTfc_taL`,
          D = _e(`zAo60tHKD`),
          O = p(null),
          ne = _e(`R2cJXCPrU`),
          re = p(null),
          j = _e(`lAdfx2E3G`),
          ae = p(null),
          F = _e(`HGfMykq3o`),
          L = p(null);
        return (
          de({}),
          f(ie.Provider, {
            value: { primaryVariantId: `WQLkyLRf1`, variantClassNames: vf },
            children: v(ee, {
              id: d ?? a,
              children: [
                f(Pf, {
                  value: `html body { background: rgb(255, 255, 255); }`,
                }),
                v(E.div, {
                  ...h,
                  className: z(te, `framer-72rtr7`, u),
                  ref: i,
                  style: { ...l },
                  children: [
                    v(`div`, {
                      className: `framer-lvnn9y`,
                      "data-framer-name": `Section`,
                      children: [
                        f(`div`, {
                          className: `framer-twz0h2`,
                          children: f(k, {
                            children: f(A, {
                              className: `framer-1cevuf8-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `HcougNcbG`,
                              scopeId: `augiA20Il`,
                              children: f(Jc, {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: `100%`,
                                id: `HcougNcbG`,
                                isMixedBorderRadius: !1,
                                layoutId: `HcougNcbG`,
                                loop: !0,
                                muted: !0,
                                objectFit: `cover`,
                                playing: !0,
                                posterEnabled: !0,
                                srcFile: `https://framerusercontent.com/assets/PWHsri87mS5gx45DCbc73rzAtI.webm`,
                                srcType: `Upload`,
                                srcUrl: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeigti4w5i3xcbrxjxmhswqd5nnyzogpnlp46gpek7eehebb3etbswy`,
                                startTime: 0,
                                style: { height: `100%`, width: `100%` },
                                topLeftRadius: 0,
                                topRightRadius: 0,
                                volume: 25,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        v(`div`, {
                          className: `framer-aj2alp`,
                          children: [
                            v(`div`, {
                              className: `framer-1m1gpqt`,
                              "data-framer-name": `Content`,
                              children: [
                                v(`div`, {
                                  className: `framer-s10i07`,
                                  children: [
                                    w() &&
                                      f(sf, {
                                        animate: Sf,
                                        className: `framer-1plledi hidden-2o6mo0`,
                                        "data-border": !0,
                                        "data-framer-appear-id": `1plledi`,
                                        initial: Cf,
                                        optimized: !0,
                                        whileHover: bf,
                                        children: f(M, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 640,
                                            intrinsicWidth: 640,
                                            loading: V(
                                              (c?.y || 0) +
                                                0 +
                                                0 +
                                                120 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                15 +
                                                -6.9931 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 1280,
                                            pixelWidth: 1280,
                                            sizes: `324.9863px`,
                                            src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024`,
                                            srcSet: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=512 512w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024 1024w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a 1280w`,
                                          },
                                          className: `framer-ml5jd`,
                                          "data-framer-name": `Image`,
                                        }),
                                      }),
                                    f(P, {
                                      breakpoint: y,
                                      overrides: {
                                        YtTfc_taL: {
                                          children: f(x, {
                                            children: f(`h1`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `106px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `$TOADs`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: f(cf, {
                                        __fromCanvasComponent: !0,
                                        animate: Tf,
                                        children: v(x, {
                                          children: [
                                            f(`h1`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `145px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `$TOADS`,
                                            }),
                                            f(`p`, {
                                              style: {
                                                "--framer-font-size": `20px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: f(`br`, {
                                                className: `trailing-break`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: `framer-vts41u`,
                                        "data-framer-appear-id": `vts41u`,
                                        fonts: [`GF;Koulen-regular`],
                                        initial: Ef,
                                        optimized: !0,
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    v(sf, {
                                      animate: Df,
                                      className: `framer-18360z3`,
                                      "data-framer-appear-id": `18360z3`,
                                      initial: Ef,
                                      optimized: !0,
                                      children: [
                                        f(P, {
                                          breakpoint: y,
                                          overrides: {
                                            YtTfc_taL: {
                                              children: f(x, {
                                                children: v(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S3Jlb24tcmVndWxhcg==`,
                                                    "--framer-font-family": `"Kreon", "Kreon Placeholder", serif`,
                                                    "--framer-font-size": `11px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                  },
                                                  children: [
                                                    f(`span`, {
                                                      style: {
                                                        "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                        "--framer-font-family": `"Koulen", sans-serif`,
                                                      },
                                                      children: `CA: `,
                                                    }),
                                                    `0xd25E1a480d6C70f69Ee6Ef925fbb6b29a75eCC87`,
                                                  ],
                                                }),
                                              }),
                                            },
                                          },
                                          children: f(cf, {
                                            __fromCanvasComponent: !0,
                                            animate: Tf,
                                            children: f(x, {
                                              children: v(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S3Jlb24tcmVndWxhcg==`,
                                                  "--framer-font-family": `"Kreon", "Kreon Placeholder", serif`,
                                                  "--framer-font-size": `15px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: [
                                                  f(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Koulen", sans-serif`,
                                                    },
                                                    children: `CA: `,
                                                  }),
                                                  `0xd25E1a480d6C70f69Ee6Ef925fbb6b29a75eCC87`,
                                                ],
                                              }),
                                            }),
                                            className: `framer-g4kiye`,
                                            "data-framer-appear-id": `g4kiye`,
                                            fonts: [
                                              `GF;Kreon-regular`,
                                              `GF;Koulen-regular`,
                                            ],
                                            initial: Ef,
                                            optimized: !0,
                                            style: { rotateY: 7 },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        f(E.div, {
                                          className: `framer-oyttml`,
                                          whileTap: kf,
                                          children: f(k, {
                                            children: f(A, {
                                              className: `framer-bu9n4l-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              nodeId: `XwWzhOcV3`,
                                              scopeId: `augiA20Il`,
                                              children: f(Wc, {
                                                borderRadius: 50,
                                                bottomLeftRadius: 50,
                                                bottomRightRadius: 50,
                                                color: `rgb(255, 255, 255)`,
                                                content: `tba`,
                                                fill: `rgb(0, 0, 0)`,
                                                font: {
                                                  fontFamily: `"DynaPuff", sans-serif`,
                                                  fontSize: `16px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 400,
                                                  letterSpacing: `0em`,
                                                  lineHeight: `1em`,
                                                },
                                                height: `100%`,
                                                hoverOptions: {
                                                  backgroundColor: `rgb(252, 208, 2)`,
                                                  color: `rgb(255, 255, 255)`,
                                                  scale: 1.11,
                                                  transition: {
                                                    damping: 30,
                                                    delay: 0,
                                                    mass: 1,
                                                    stiffness: 400,
                                                    type: `spring`,
                                                  },
                                                },
                                                id: `XwWzhOcV3`,
                                                isMixedBorderRadius: !1,
                                                label: `Copy`,
                                                layoutId: `XwWzhOcV3`,
                                                padding: 10,
                                                paddingBottom: 10,
                                                paddingLeft: 10,
                                                paddingPerSide: !1,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                topLeftRadius: 50,
                                                topRightRadius: 50,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    T() &&
                                      f(P, {
                                        breakpoint: y,
                                        overrides: {
                                          YtTfc_taL: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 640,
                                              intrinsicWidth: 640,
                                              loading: V(
                                                (c?.y || 0) +
                                                  0 +
                                                  0 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  15 +
                                                  231.2474
                                              ),
                                              pixelHeight: 996,
                                              pixelWidth: 1184,
                                              sizes: `276.0052px`,
                                              src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreib7g2ssqvjhre2s77onwcwgbpkqvwoqr7gl3bu23cgfumbzwynqta`,
                                            },
                                          },
                                        },
                                        children: f(uf, {
                                          animate: Sf,
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 640,
                                            intrinsicWidth: 640,
                                            pixelHeight: 996,
                                            pixelWidth: 1184,
                                            src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreib7g2ssqvjhre2s77onwcwgbpkqvwoqr7gl3bu23cgfumbzwynqta`,
                                          },
                                          className: `framer-19u5h9o hidden-72rtr7 hidden-1aq5zq6`,
                                          "data-border": !0,
                                          "data-framer-appear-id": `19u5h9o`,
                                          "data-framer-name": `Image`,
                                          initial: Cf,
                                          optimized: !0,
                                          whileHover: bf,
                                          children: f(P, {
                                            breakpoint: y,
                                            overrides: {
                                              YtTfc_taL: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 640,
                                                  intrinsicWidth: 640,
                                                  loading: V(
                                                    (c?.y || 0) +
                                                      0 +
                                                      0 +
                                                      120 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      15 +
                                                      231.2474 +
                                                      0
                                                  ),
                                                  pixelHeight: 1280,
                                                  pixelWidth: 1280,
                                                  sizes: `276.0052px`,
                                                  src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024`,
                                                  srcSet: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=512 512w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024 1024w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a 1280w`,
                                                },
                                              },
                                            },
                                            children: f(M, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 640,
                                                intrinsicWidth: 640,
                                                pixelHeight: 1280,
                                                pixelWidth: 1280,
                                                src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024`,
                                                srcSet: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=512 512w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024 1024w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a 1280w`,
                                              },
                                              className: `framer-u5sri8`,
                                              "data-framer-name": `Image`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                                v(`div`, {
                                  className: `framer-bfyq6h`,
                                  children: [
                                    f(N, {
                                      href: `https://t.me/battletoads_erc20`,
                                      motionChild: !0,
                                      nodeId: `TnQBYXyOc`,
                                      openInNewTab: !0,
                                      scopeId: `augiA20Il`,
                                      children: f(df, {
                                        animate: Df,
                                        className: `framer-1b0tvka framer-lux5qc`,
                                        "data-border": !0,
                                        "data-framer-appear-id": `1b0tvka`,
                                        initial: Ef,
                                        optimized: !0,
                                        whileHover: Af,
                                        children: f(cf, {
                                          __fromCanvasComponent: !0,
                                          animate: Tf,
                                          children: f(x, {
                                            children: f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                              },
                                              children: `JOIN $TOADS`,
                                            }),
                                          }),
                                          className: `framer-xuzoli`,
                                          "data-framer-appear-id": `xuzoli`,
                                          fonts: [`GF;Koulen-regular`],
                                          initial: Ef,
                                          optimized: !0,
                                          style: { rotateY: 7 },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                    f(N, {
                                      href: `https://x.com/BattleToadsETH`,
                                      motionChild: !0,
                                      nodeId: `L9D1riy5F`,
                                      openInNewTab: !0,
                                      scopeId: `augiA20Il`,
                                      children: f(df, {
                                        animate: Df,
                                        className: `framer-1qgr3i4 framer-lux5qc`,
                                        "data-border": !0,
                                        "data-framer-appear-id": `1qgr3i4`,
                                        initial: Ef,
                                        optimized: !0,
                                        whileHover: Af,
                                        children: f(cf, {
                                          __fromCanvasComponent: !0,
                                          animate: Tf,
                                          children: f(x, {
                                            children: f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                              },
                                              children: `Follow Us`,
                                            }),
                                          }),
                                          className: `framer-ykpl2s`,
                                          "data-framer-appear-id": `ykpl2s`,
                                          fonts: [`GF;Koulen-regular`],
                                          initial: Ef,
                                          optimized: !0,
                                          style: { rotateY: 7 },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            f(k, {
                              children: f(A, {
                                className: `framer-1nhjxod-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `DSOSC0mhw`,
                                scopeId: `augiA20Il`,
                                children: f(Ks, {
                                  alignment: `center`,
                                  direction: `left`,
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1,
                                  },
                                  gap: 10,
                                  height: `100%`,
                                  hoverFactor: 1,
                                  id: `DSOSC0mhw`,
                                  layoutId: `DSOSC0mhw`,
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    f(M, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 56,
                                        intrinsicWidth: 139,
                                        pixelHeight: 112,
                                        pixelWidth: 278,
                                        src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreig24bxb7l55rhtkaj3twk6cburxcuzmmfyyx4gkb5phfmjtzkykdu`,
                                      },
                                      className: `framer-1az9uba`,
                                      "data-framer-name": `Screenshot 2025-08-12 at 3.03.45Ã¢Â€Â¯AM`,
                                    }),
                                  ],
                                  speed: 100,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    f(k, {
                      height: 94,
                      width: c?.width || `100vw`,
                      y: 0,
                      children: f(A, {
                        className: `framer-1ekshrn-container`,
                        layoutScroll: !0,
                        nodeId: `UJq7AIzmw`,
                        scopeId: `augiA20Il`,
                        children: f(P, {
                          breakpoint: y,
                          overrides: { YtTfc_taL: { variant: `RMnR6ED8G` } },
                          children: f(Xd, {
                            height: `100%`,
                            id: `UJq7AIzmw`,
                            layoutId: `UJq7AIzmw`,
                            style: { width: `100%` },
                            variant: `pS4I324hp`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(`div`, {
                      className: `framer-brqvez`,
                      "data-framer-name": `Section`,
                      children: v(`div`, {
                        className: `framer-p6wofc`,
                        "data-framer-name": `Section`,
                        id: D,
                        ref: O,
                        children: [
                          f(`div`, {
                            className: `framer-dhb6b4`,
                            children: f(k, {
                              children: f(A, {
                                className: `framer-oyumz2-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `g9Esl0fqu`,
                                scopeId: `augiA20Il`,
                                children: f(Jc, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `g9Esl0fqu`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `g9Esl0fqu`,
                                  loop: !0,
                                  muted: !0,
                                  objectFit: `fill`,
                                  playing: !0,
                                  posterEnabled: !0,
                                  srcFile: `https://framerusercontent.com/assets/fysvr31pKRLqgfzxjB9kVPBF2go.webm`,
                                  srcType: `Upload`,
                                  srcUrl: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeigti4w5i3xcbrxjxmhswqd5nnyzogpnlp46gpek7eehebb3etbswy`,
                                  startTime: 0,
                                  style: { height: `100%`, width: `100%` },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          v(`div`, {
                            className: `framer-1l22o0g`,
                            children: [
                              v(sf, {
                                animate: Sf,
                                className: `framer-2x2jew`,
                                "data-border": !0,
                                "data-framer-appear-id": `2x2jew`,
                                initial: Cf,
                                optimized: !0,
                                whileHover: bf,
                                children: [
                                  f(P, {
                                    breakpoint: y,
                                    overrides: {
                                      YtTfc_taL: {
                                        children: v(x, {
                                          children: [
                                            f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `30px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `DID YOU KNOW PEPE WAS `,
                                            }),
                                            f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `30px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `INSPIRED BY BATTLETOADS?!`,
                                            }),
                                          ],
                                        }),
                                      },
                                    },
                                    children: f(I, {
                                      __fromCanvasComponent: !0,
                                      children: v(x, {
                                        children: [
                                          f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `40px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `DID YOU KNOW PEPE WAS `,
                                          }),
                                          f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `40px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `INSPIRED BY BATTLETOADS?!`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-bmeylf`,
                                      fonts: [`GF;Koulen-regular`],
                                      style: { rotateY: 7 },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  f(I, {
                                    __fromCanvasComponent: !0,
                                    children: f(x, {
                                      children: v(`p`, {
                                        style: {
                                          "--font-selector": `R0Y7S29ua2htZXIgU2xlb2tjaGhlci1yZWd1bGFy`,
                                          "--framer-font-family": `"Konkhmer Sleokchher", sans-serif`,
                                          "--framer-font-size": `23px`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: [
                                          `Matt Furie â€” the creator of Pepe â€” has gone on record in a video stating that the iconic frog silhouette was inspired by the 90s video game `,
                                          f(`em`, { children: `Battletoads` }),
                                          `. This makes $TOADS the true origin point of modern meme culture â€” the spark from which every degen originates. The roots of all memedom lead back to `,
                                          f(`em`, { children: `Battletoads` }),
                                          `. See for yourself in the clip below.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-1bjygmk`,
                                    fonts: [`GF;Konkhmer Sleokchher-regular`],
                                    style: { rotateY: 7 },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              f(`div`, {
                                className: `framer-3k2jvj`,
                                children: f(k, {
                                  children: f(A, {
                                    className: `framer-1r4yraq-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `AYA5HxGRf`,
                                    scopeId: `augiA20Il`,
                                    children: f(Jc, {
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                      borderRadius: 20,
                                      bottomLeftRadius: 20,
                                      bottomRightRadius: 20,
                                      controls: !0,
                                      height: `100%`,
                                      id: `AYA5HxGRf`,
                                      isMixedBorderRadius: !1,
                                      layoutId: `AYA5HxGRf`,
                                      loop: !0,
                                      muted: !0,
                                      objectFit: `cover`,
                                      playing: !1,
                                      posterEnabled: !0,
                                      srcFile: `https://framerusercontent.com/assets/qz7vIxkffplJ1Hd594PmpRzcM.mp4`,
                                      srcType: `Upload`,
                                      srcUrl: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeigti4w5i3xcbrxjxmhswqd5nnyzogpnlp46gpek7eehebb3etbswy`,
                                      startTime: 20.4,
                                      style: { height: `100%`, width: `100%` },
                                      topLeftRadius: 20,
                                      topRightRadius: 20,
                                      volume: 25,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    f(`div`, {
                      className: `framer-1x0anwk`,
                      "data-framer-name": `Section`,
                      children: v(`div`, {
                        className: `framer-1cbp536`,
                        "data-framer-name": `Section`,
                        id: ne,
                        ref: re,
                        children: [
                          f(`div`, {
                            className: `framer-62e2fu`,
                            children: f(k, {
                              children: f(A, {
                                className: `framer-11nps8t-container`,
                                id: `11nps8t`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `YXPiB6tE4`,
                                scopeId: `augiA20Il`,
                                children: f(P, {
                                  breakpoint: y,
                                  overrides: {
                                    YtTfc_taL: { objectFit: `cover` },
                                  },
                                  children: f(Jc, {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: `100%`,
                                    id: `YXPiB6tE4`,
                                    isMixedBorderRadius: !1,
                                    layoutId: `YXPiB6tE4`,
                                    loop: !0,
                                    muted: !0,
                                    objectFit: `fill`,
                                    playing: !0,
                                    posterEnabled: !0,
                                    srcFile: `https://framerusercontent.com/assets/HDkMU93j3NhEhAq382py80rBJQ0.webm`,
                                    srcType: `Upload`,
                                    srcUrl: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeigti4w5i3xcbrxjxmhswqd5nnyzogpnlp46gpek7eehebb3etbswy`,
                                    startTime: 0,
                                    style: { height: `100%`, width: `100%` },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          v(`div`, {
                            className: `framer-1ok55sp`,
                            children: [
                              f(`div`, {
                                className: `framer-jnqfw5`,
                                children: f(P, {
                                  breakpoint: y,
                                  overrides: {
                                    YtTfc_taL: {
                                      children: f(x, {
                                        children: f(`p`, {
                                          style: {
                                            "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Koulen", sans-serif`,
                                            "--framer-font-size": `50px`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `HOW TO BUY`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: f(I, {
                                    __fromCanvasComponent: !0,
                                    children: f(x, {
                                      children: f(`p`, {
                                        style: {
                                          "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Koulen", sans-serif`,
                                          "--framer-font-size": `76px`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `HOW TO BUY`,
                                      }),
                                    }),
                                    className: `framer-1i3wmaq`,
                                    fonts: [`GF;Koulen-regular`],
                                    style: { rotateY: 7 },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              v(`div`, {
                                className: `framer-do0afs`,
                                children: [
                                  v(sf, {
                                    animate: Sf,
                                    className: `framer-1mik7v0`,
                                    "data-border": !0,
                                    "data-framer-appear-id": `1mik7v0`,
                                    initial: Cf,
                                    optimized: !0,
                                    whileHover: bf,
                                    children: [
                                      f(I, {
                                        __fromCanvasComponent: !0,
                                        children: f(x, {
                                          children: f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `40px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Step 1`,
                                          }),
                                        }),
                                        className: `framer-3hng8w`,
                                        fonts: [`GF;Koulen-regular`],
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(P, {
                                        breakpoint: y,
                                        overrides: {
                                          PaE47B1w3: {
                                            children: v(x, {
                                              children: [
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `Download `,
                                                }),
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `Metamask`,
                                                }),
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `Wallet`,
                                                }),
                                              ],
                                            }),
                                          },
                                        },
                                        children: f(I, {
                                          __fromCanvasComponent: !0,
                                          children: v(x, {
                                            children: [
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Download `,
                                              }),
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Metamask`,
                                              }),
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Wallet`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-d7yoqb`,
                                          fonts: [`GF;Koulen-regular`],
                                          style: { rotateY: 7 },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  v(sf, {
                                    animate: Sf,
                                    className: `framer-u72ep9`,
                                    "data-border": !0,
                                    "data-framer-appear-id": `u72ep9`,
                                    initial: Cf,
                                    optimized: !0,
                                    whileHover: bf,
                                    children: [
                                      f(I, {
                                        __fromCanvasComponent: !0,
                                        children: f(x, {
                                          children: f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `40px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Step 2`,
                                          }),
                                        }),
                                        className: `framer-q0rdlh`,
                                        fonts: [`GF;Koulen-regular`],
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(P, {
                                        breakpoint: y,
                                        overrides: {
                                          PaE47B1w3: {
                                            children: v(x, {
                                              children: [
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `Purchase`,
                                                }),
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `ETH`,
                                                }),
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `Tokens`,
                                                }),
                                              ],
                                            }),
                                          },
                                        },
                                        children: f(I, {
                                          __fromCanvasComponent: !0,
                                          children: v(x, {
                                            children: [
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Purchase`,
                                              }),
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `ETH`,
                                              }),
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Tokens`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-mpdrq3`,
                                          fonts: [`GF;Koulen-regular`],
                                          style: { rotateY: 7 },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  v(sf, {
                                    animate: Sf,
                                    className: `framer-n37win`,
                                    "data-border": !0,
                                    "data-framer-appear-id": `n37win`,
                                    initial: Cf,
                                    optimized: !0,
                                    whileHover: bf,
                                    children: [
                                      f(I, {
                                        __fromCanvasComponent: !0,
                                        children: f(x, {
                                          children: f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `40px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Step 3`,
                                          }),
                                        }),
                                        className: `framer-1ogsyzk`,
                                        fonts: [`GF;Koulen-regular`],
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(P, {
                                        breakpoint: y,
                                        overrides: {
                                          PaE47B1w3: {
                                            children: v(x, {
                                              children: [
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `Swap `,
                                                }),
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `ETH to`,
                                                }),
                                                f(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Koulen", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `$TOADS`,
                                                }),
                                              ],
                                            }),
                                          },
                                        },
                                        children: f(I, {
                                          __fromCanvasComponent: !0,
                                          children: v(x, {
                                            children: [
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `Swap `,
                                              }),
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `ETH to`,
                                              }),
                                              f(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `40px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `$TOADS`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-pd381s`,
                                          fonts: [`GF;Koulen-regular`],
                                          style: { rotateY: 7 },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          v(`div`, {
                            className: `framer-1ljve8f`,
                            id: j,
                            ref: ae,
                            children: [
                              f(P, {
                                breakpoint: y,
                                overrides: {
                                  YtTfc_taL: {
                                    children: f(x, {
                                      children: f(`p`, {
                                        style: {
                                          "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Koulen", sans-serif`,
                                          "--framer-font-size": `50px`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `Tokenomics`,
                                      }),
                                    }),
                                  },
                                },
                                children: f(I, {
                                  __fromCanvasComponent: !0,
                                  children: f(x, {
                                    children: f(`p`, {
                                      style: {
                                        "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Koulen", sans-serif`,
                                        "--framer-font-size": `82px`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                      },
                                      children: `Tokenomics`,
                                    }),
                                  }),
                                  className: `framer-ih8q0c`,
                                  fonts: [`GF;Koulen-regular`],
                                  style: { rotateY: 7 },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              v(`div`, {
                                className: `framer-1ynkqbo`,
                                children: [
                                  w() &&
                                    f(sf, {
                                      animate: Sf,
                                      className: `framer-1nj41zi hidden-2o6mo0`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `1nj41zi`,
                                      initial: Cf,
                                      optimized: !0,
                                      whileHover: bf,
                                      children: f(k, {
                                        children: f(A, {
                                          className: `framer-v1sldh-container`,
                                          "data-framer-name": `bank2`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          name: `bank2`,
                                          nodeId: `jCqIIwNiC`,
                                          scopeId: `augiA20Il`,
                                          children: f(rc, {
                                            color: `rgb(0, 0, 0)`,
                                            height: `100%`,
                                            id: `jCqIIwNiC`,
                                            layoutId: `jCqIIwNiC`,
                                            name: `bank2`,
                                            strokeWidth: 1.5,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#ffffff" class="bi bi-bank2" viewBox="0 0 16 16">
  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"/>
</svg>`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  f(sf, {
                                    animate: Sf,
                                    className: `framer-1onuzt6`,
                                    "data-border": !0,
                                    "data-framer-appear-id": `1onuzt6`,
                                    initial: Cf,
                                    optimized: !0,
                                    whileHover: bf,
                                    children: f(P, {
                                      breakpoint: y,
                                      overrides: {
                                        YtTfc_taL: {
                                          children: f(x, {
                                            children: f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(250, 255, 251)`,
                                              },
                                              children: `1B Total Supply`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: f(I, {
                                        __fromCanvasComponent: !0,
                                        children: f(x, {
                                          children: f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `49px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(250, 255, 251)`,
                                            },
                                            children: `1B Total Supply`,
                                          }),
                                        }),
                                        className: `framer-18en0lw`,
                                        fonts: [`GF;Koulen-regular`],
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              v(`div`, {
                                className: `framer-rkze3f`,
                                children: [
                                  w() &&
                                    f(sf, {
                                      animate: Sf,
                                      className: `framer-zczoag hidden-2o6mo0`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `zczoag`,
                                      initial: Cf,
                                      optimized: !0,
                                      whileHover: bf,
                                      children: f(k, {
                                        children: f(A, {
                                          className: `framer-qe0vw3-container`,
                                          "data-framer-name": `cart4`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          name: `cart4`,
                                          nodeId: `GpMktKyDf`,
                                          scopeId: `augiA20Il`,
                                          children: f(rc, {
                                            color: `rgb(0, 0, 0)`,
                                            height: `100%`,
                                            id: `GpMktKyDf`,
                                            layoutId: `GpMktKyDf`,
                                            name: `cart4`,
                                            strokeWidth: 1.5,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#ffffff" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  f(sf, {
                                    animate: Sf,
                                    className: `framer-6g3oh3`,
                                    "data-border": !0,
                                    "data-framer-appear-id": `6g3oh3`,
                                    initial: Cf,
                                    optimized: !0,
                                    whileHover: bf,
                                    children: f(P, {
                                      breakpoint: y,
                                      overrides: {
                                        YtTfc_taL: {
                                          children: f(x, {
                                            children: f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(250, 255, 251)`,
                                              },
                                              children: `0% Buy & Sell Tax`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: f(I, {
                                        __fromCanvasComponent: !0,
                                        children: f(x, {
                                          children: f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `49px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(250, 255, 251)`,
                                            },
                                            children: `0% Buy & Sell Tax`,
                                          }),
                                        }),
                                        className: `framer-hjalz3`,
                                        fonts: [`GF;Koulen-regular`],
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              v(`div`, {
                                className: `framer-hiog8n`,
                                children: [
                                  w() &&
                                    f(sf, {
                                      animate: Sf,
                                      className: `framer-hn53rm hidden-2o6mo0`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `hn53rm`,
                                      initial: Cf,
                                      optimized: !0,
                                      whileHover: bf,
                                      children: f(P, {
                                        breakpoint: y,
                                        overrides: {
                                          PaE47B1w3: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 194.5,
                                              intrinsicWidth: 194.5,
                                              loading: V(
                                                (c?.y || 0) +
                                                  0 +
                                                  1713.5 +
                                                  0 +
                                                  0 +
                                                  142 +
                                                  420 +
                                                  0 +
                                                  784 +
                                                  26 +
                                                  26
                                              ),
                                              pixelHeight: 640,
                                              pixelWidth: 640,
                                              sizes: `82px`,
                                              src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreiexcs4udj6fo56tviqsjx4evtnkionuac4sfqn3cfezhg2u27nm4e`,
                                            },
                                          },
                                        },
                                        children: f(M, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 194.5,
                                            intrinsicWidth: 194.5,
                                            loading: V(
                                              (c?.y || 0) +
                                                0 +
                                                1713.5 +
                                                0 +
                                                0 +
                                                142 +
                                                456 +
                                                0 +
                                                784 +
                                                26 +
                                                26
                                            ),
                                            pixelHeight: 640,
                                            pixelWidth: 640,
                                            sizes: `82px`,
                                            src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreiexcs4udj6fo56tviqsjx4evtnkionuac4sfqn3cfezhg2u27nm4e`,
                                          },
                                          className: `framer-1rvyf43`,
                                          "data-framer-name": `Image`,
                                          transformTemplate: jf,
                                        }),
                                      }),
                                    }),
                                  f(sf, {
                                    animate: Sf,
                                    className: `framer-4b0mjd`,
                                    "data-border": !0,
                                    "data-framer-appear-id": `4b0mjd`,
                                    initial: Cf,
                                    optimized: !0,
                                    whileHover: bf,
                                    children: f(P, {
                                      breakpoint: y,
                                      overrides: {
                                        YtTfc_taL: {
                                          children: f(x, {
                                            children: f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(250, 255, 251)`,
                                              },
                                              children: `100% Liquidity Burned`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: f(I, {
                                        __fromCanvasComponent: !0,
                                        children: f(x, {
                                          children: f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `49px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(250, 255, 251)`,
                                            },
                                            children: `100% Liquidity Burned`,
                                          }),
                                        }),
                                        className: `framer-22hd8m`,
                                        fonts: [`GF;Koulen-regular`],
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              v(`div`, {
                                className: `framer-1f39b30`,
                                children: [
                                  w() &&
                                    f(sf, {
                                      animate: Sf,
                                      className: `framer-1gf8upy hidden-2o6mo0`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `1gf8upy`,
                                      initial: Cf,
                                      optimized: !0,
                                      whileHover: bf,
                                      children: f(P, {
                                        breakpoint: y,
                                        overrides: {
                                          PaE47B1w3: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 194.5,
                                              intrinsicWidth: 194.5,
                                              loading: V(
                                                (c?.y || 0) +
                                                  0 +
                                                  1713.5 +
                                                  0 +
                                                  0 +
                                                  142 +
                                                  420 +
                                                  0 +
                                                  971 +
                                                  26 +
                                                  26
                                              ),
                                              pixelHeight: 1080,
                                              pixelWidth: 1920,
                                              sizes: `82px`,
                                              src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreig2jgaldqqp36lsawocolejqq3n2h4igx4q4cy7i3qrpbuehukqbq`,
                                            },
                                          },
                                        },
                                        children: f(M, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 194.5,
                                            intrinsicWidth: 194.5,
                                            loading: V(
                                              (c?.y || 0) +
                                                0 +
                                                1713.5 +
                                                0 +
                                                0 +
                                                142 +
                                                456 +
                                                0 +
                                                971 +
                                                26 +
                                                26
                                            ),
                                            pixelHeight: 1080,
                                            pixelWidth: 1920,
                                            sizes: `82px`,
                                            src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreig2jgaldqqp36lsawocolejqq3n2h4igx4q4cy7i3qrpbuehukqbq`,
                                          },
                                          className: `framer-6kw1nd`,
                                          "data-framer-name": `Image`,
                                          transformTemplate: jf,
                                        }),
                                      }),
                                    }),
                                  f(sf, {
                                    animate: Sf,
                                    className: `framer-t14k0l`,
                                    "data-border": !0,
                                    "data-framer-appear-id": `t14k0l`,
                                    initial: Cf,
                                    optimized: !0,
                                    whileHover: bf,
                                    children: f(P, {
                                      breakpoint: y,
                                      overrides: {
                                        YtTfc_taL: {
                                          children: f(x, {
                                            children: f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(250, 255, 251)`,
                                              },
                                              children: `Launched ON Ethereum`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: f(I, {
                                        __fromCanvasComponent: !0,
                                        children: f(x, {
                                          children: f(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Koulen", sans-serif`,
                                              "--framer-font-size": `49px`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(250, 255, 251)`,
                                            },
                                            children: `Launched ON Ethereum`,
                                          }),
                                        }),
                                        className: `framer-1urp394`,
                                        fonts: [`GF;Koulen-regular`],
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    f(M, {
                      background: { alt: ``, fit: `fill` },
                      className: `framer-zf51uc`,
                      children: v(`div`, {
                        className: `framer-e65a7i`,
                        "data-framer-name": `Section`,
                        children: [
                          f(`div`, {
                            className: `framer-vkylh5`,
                            children: f(k, {
                              children: f(A, {
                                className: `framer-7wseoa-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `mMdqn5bbl`,
                                scopeId: `augiA20Il`,
                                children: f(Jc, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `mMdqn5bbl`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `mMdqn5bbl`,
                                  loop: !0,
                                  muted: !0,
                                  objectFit: `cover`,
                                  playing: !0,
                                  posterEnabled: !0,
                                  srcFile: `https://framerusercontent.com/assets/dt0TGwunhKOgVWaaIlkiaYyPY.webm`,
                                  srcType: `Upload`,
                                  srcUrl: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeigti4w5i3xcbrxjxmhswqd5nnyzogpnlp46gpek7eehebb3etbswy`,
                                  startTime: 44.1,
                                  style: { height: `100%`, width: `100%` },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          f(`div`, {
                            className: `framer-1ufdbl2`,
                            children: f(k, {
                              children: f(A, {
                                className: `framer-19atpqf-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `s6qtDtiIk`,
                                scopeId: `augiA20Il`,
                                children: f(Ks, {
                                  alignment: `center`,
                                  direction: `left`,
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1,
                                  },
                                  gap: 10,
                                  height: `100%`,
                                  hoverFactor: 1,
                                  id: `s6qtDtiIk`,
                                  layoutId: `s6qtDtiIk`,
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    f(M, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 56,
                                        intrinsicWidth: 139,
                                        pixelHeight: 112,
                                        pixelWidth: 278,
                                        src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreig24bxb7l55rhtkaj3twk6cburxcuzmmfyyx4gkb5phfmjtzkykdu`,
                                      },
                                      className: `framer-1az9uba`,
                                      "data-framer-name": `Screenshot 2025-08-12 at 3.03.45Ã¢Â€Â¯AM`,
                                    }),
                                  ],
                                  speed: 100,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          f(k, {
                            children: f(A, {
                              className: `framer-185tehq-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `obK7vnldw`,
                              scopeId: `augiA20Il`,
                              children: f(Ks, {
                                alignment: `center`,
                                direction: `left`,
                                fadeOptions: {
                                  fadeAlpha: 0,
                                  fadeContent: !0,
                                  fadeInset: 0,
                                  fadeWidth: 25,
                                  overflow: !1,
                                },
                                gap: 69,
                                height: `100%`,
                                hoverFactor: 0.1,
                                id: `obK7vnldw`,
                                layoutId: `obK7vnldw`,
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: {
                                  heightType: !0,
                                  widthType: !0,
                                },
                                slots: [
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `343px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreid6zvti3uiwcbgddeez7pohizkscvuo6tezaqulkywzinmfxeoid4`,
                                    },
                                    className: `framer-clf6j8`,
                                    "data-border": !0,
                                    "data-framer-name": `2-60`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `351px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidwf7x4d2stvkskmzfbj6zdx7njatsnjnul4dz5xfqc2234zdzioq`,
                                    },
                                    className: `framer-1k0qxwk`,
                                    "data-border": !0,
                                    "data-framer-name": `2-61`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreibes6v7n2rod47ogae6vcpoilwc4kxjceswiussy3hocgmq4elue4`,
                                    },
                                    className: `framer-k5zxl7`,
                                    "data-border": !0,
                                    "data-framer-name": `2-67`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreig4uq4mbn6q4eyfc5b5jzac5zrojjpsa3ddegxkxv56abucsfqiwa`,
                                    },
                                    className: `framer-gp041g`,
                                    "data-border": !0,
                                    "data-framer-name": `2-66`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreigk2mwzujgjgnwsjpziz2kthjhania544fba7kl4rkahth7xsx6ai`,
                                    },
                                    className: `framer-jmj7d6`,
                                    "data-border": !0,
                                    "data-framer-name": `2-65`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreih5e3qmy33ewzs2ymk3qfceevo7cpbaandnx32qq256b4kwl5kave`,
                                    },
                                    className: `framer-s7zax1`,
                                    "data-border": !0,
                                    "data-framer-name": `2-64`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidjin4oyrj7d3iskqe6em3evf5x7dpctaata2jgqwd4a677vncy6i`,
                                    },
                                    className: `framer-hh7imk`,
                                    "data-border": !0,
                                    "data-framer-name": `2-63`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreicj6vdq4t6hfr27cn645q3shknal4vwmep6f3gtomhkuxhagsndke`,
                                    },
                                    className: `framer-k71o9k`,
                                    "data-border": !0,
                                    "data-framer-name": `2-62`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidwf7x4d2stvkskmzfbj6zdx7njatsnjnul4dz5xfqc2234zdzioq`,
                                    },
                                    className: `framer-tflgnl`,
                                    "data-border": !0,
                                    "data-framer-name": `2-61`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreid6zvti3uiwcbgddeez7pohizkscvuo6tezaqulkywzinmfxeoid4`,
                                    },
                                    className: `framer-1nk4v7b`,
                                    "data-border": !0,
                                    "data-framer-name": `2-60`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreiekrrdemjtvcv4fze6r2t6arp4dtzgl6py3ipspm5cxw7xbmkunce`,
                                    },
                                    className: `framer-3tx726`,
                                    "data-border": !0,
                                    "data-framer-name": `6-35`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeidssdyx3tftnnag4czlbywhquiyqo4vszgpqvrt5lic6ailgu44r4`,
                                    },
                                    className: `framer-1isiepu`,
                                    "data-border": !0,
                                    "data-framer-name": `6-69`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreibzjmwjl77g6qtbsbdstrp6zqr3dtgafprzjg3n6dvmmmnczhrwfu`,
                                    },
                                    className: `framer-1wmyx4k`,
                                    "data-border": !0,
                                    "data-framer-name": `6-70`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeifjdnmvuvwysq2jrv3vdn4yurjjj4s5ftzv74mpjvnnshw2a765my`,
                                    },
                                    className: `framer-1ivnddw`,
                                    "data-border": !0,
                                    "data-framer-name": `6-74`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1067,
                                      intrinsicWidth: 1067,
                                      pixelHeight: 2134,
                                      pixelWidth: 2134,
                                      sizes: `346px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeifjdnmvuvwysq2jrv3vdn4yurjjj4s5ftzv74mpjvnnshw2a765my`,
                                    },
                                    className: `framer-extm06`,
                                    "data-border": !0,
                                    "data-framer-name": `6-73`,
                                    whileHover: Mf,
                                  }),
                                  f(M, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1042,
                                      intrinsicWidth: 1042,
                                      pixelHeight: 2084,
                                      pixelWidth: 2084,
                                      sizes: `338px`,
                                      src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreih64gknysqruzaxsrc2yj3dncxixwp4ylqdmhbm527yi35u7gf4da`,
                                    },
                                    className: `framer-2rzugx`,
                                    "data-border": !0,
                                    "data-framer-name": `6-71`,
                                    whileHover: Mf,
                                  }),
                                ],
                                speed: 85,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    v(`div`, {
                      className: `framer-1wrwacd`,
                      "data-framer-name": `Section`,
                      id: F,
                      ref: L,
                      children: [
                        f(`div`, {
                          className: `framer-zn487e`,
                          children: f(k, {
                            children: f(A, {
                              className: `framer-10geasi-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `PCEBln_Sj`,
                              scopeId: `augiA20Il`,
                              children: f(Jc, {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: `100%`,
                                id: `PCEBln_Sj`,
                                isMixedBorderRadius: !1,
                                layoutId: `PCEBln_Sj`,
                                loop: !0,
                                muted: !0,
                                objectFit: `fill`,
                                playing: !0,
                                posterEnabled: !0,
                                srcFile: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeifgl5olm2f7nzveexb2j3m6bzzp3bb5aht7ccj7a33lryiigunnqq`,
                                srcType: `Upload`,
                                srcUrl: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafybeigti4w5i3xcbrxjxmhswqd5nnyzogpnlp46gpek7eehebb3etbswy`,
                                startTime: 0,
                                style: { height: `100%`, width: `100%` },
                                topLeftRadius: 0,
                                topRightRadius: 0,
                                volume: 25,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        v(`div`, {
                          className: `framer-pgeqbu`,
                          children: [
                            v(`div`, {
                              className: `framer-1q0ve3y`,
                              "data-framer-name": `Content`,
                              children: [
                                v(`div`, {
                                  className: `framer-ef8al6`,
                                  children: [
                                    f(sf, {
                                      animate: Sf,
                                      className: `framer-1h7dxbr`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `1h7dxbr`,
                                      initial: Cf,
                                      optimized: !0,
                                      whileHover: bf,
                                      children: f(P, {
                                        breakpoint: y,
                                        overrides: {
                                          PaE47B1w3: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 640,
                                              intrinsicWidth: 640,
                                              loading: V(
                                                (c?.y || 0) +
                                                  0 +
                                                  4405.5 +
                                                  142 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  15 +
                                                  0 +
                                                  12.9957
                                              ),
                                              pixelHeight: 1280,
                                              pixelWidth: 1280,
                                              sizes: `182px`,
                                              src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024`,
                                              srcSet: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=512 512w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024 1024w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a 1280w`,
                                            },
                                          },
                                          YtTfc_taL: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 640,
                                              intrinsicWidth: 640,
                                              loading: V(
                                                (c?.y || 0) +
                                                  0 +
                                                  4852.5 +
                                                  142 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  15 +
                                                  0 +
                                                  12.9957
                                              ),
                                              pixelHeight: 1280,
                                              pixelWidth: 1280,
                                              sizes: `182px`,
                                              src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024`,
                                              srcSet: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=512 512w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024 1024w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a 1280w`,
                                            },
                                          },
                                        },
                                        children: f(M, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 640,
                                            intrinsicWidth: 640,
                                            loading: V(
                                              (c?.y || 0) +
                                                0 +
                                                4441.5 +
                                                142 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                15 +
                                                0 +
                                                12.9957
                                            ),
                                            pixelHeight: 1280,
                                            pixelWidth: 1280,
                                            sizes: `182px`,
                                            src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024`,
                                            srcSet: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=512 512w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a?scale-down-to=1024 1024w,https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreidzcrobx7ctlibu3kqd7n4xo2imir3axgwe7oy5xilqyizfaory7a 1280w`,
                                          },
                                          className: `framer-d4wmk8`,
                                          "data-framer-name": `Image`,
                                          transformTemplate: Nf,
                                        }),
                                      }),
                                    }),
                                    f(P, {
                                      breakpoint: y,
                                      overrides: {
                                        YtTfc_taL: {
                                          children: v(x, {
                                            children: [
                                              f(`h1`, {
                                                style: {
                                                  "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Koulen", sans-serif`,
                                                  "--framer-font-size": `50px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: `$TOADS`,
                                              }),
                                              f(`p`, {
                                                style: {
                                                  "--framer-font-size": `20px`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: f(`br`, {
                                                  className: `trailing-break`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                      },
                                      children: f(cf, {
                                        __fromCanvasComponent: !0,
                                        animate: Tf,
                                        children: v(x, {
                                          children: [
                                            f(`h1`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `145px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `$TOADS`,
                                            }),
                                            f(`p`, {
                                              style: {
                                                "--framer-font-size": `20px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: f(`br`, {
                                                className: `trailing-break`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: `framer-5jmfu0`,
                                        "data-framer-appear-id": `5jmfu0`,
                                        fonts: [`GF;Koulen-regular`],
                                        initial: Ef,
                                        optimized: !0,
                                        style: { rotateY: 7 },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    v(sf, {
                                      animate: Df,
                                      className: `framer-1vvwsnu`,
                                      "data-framer-appear-id": `1vvwsnu`,
                                      initial: Ef,
                                      optimized: !0,
                                      children: [
                                        f(P, {
                                          breakpoint: y,
                                          overrides: {
                                            YtTfc_taL: {
                                              children: f(x, {
                                                children: v(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7S3Jlb24tcmVndWxhcg==`,
                                                    "--framer-font-family": `"Kreon", "Kreon Placeholder", serif`,
                                                    "--framer-font-size": `8px`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-alignment": `center`,
                                                  },
                                                  children: [
                                                    f(`span`, {
                                                      style: {
                                                        "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                        "--framer-font-family": `"Koulen", sans-serif`,
                                                      },
                                                      children: `CA: `,
                                                    }),
                                                    `0xd25E1a480d6C70f69Ee6Ef925fbb6b29a75eCC87`,
                                                  ],
                                                }),
                                              }),
                                            },
                                          },
                                          children: f(cf, {
                                            __fromCanvasComponent: !0,
                                            animate: Tf,
                                            children: f(x, {
                                              children: v(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7S3Jlb24tcmVndWxhcg==`,
                                                  "--framer-font-family": `"Kreon", "Kreon Placeholder", serif`,
                                                  "--framer-font-size": `15px`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-alignment": `center`,
                                                },
                                                children: [
                                                  f(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Koulen", sans-serif`,
                                                    },
                                                    children: `CA: `,
                                                  }),
                                                  `0xd25E1a480d6C70f69Ee6Ef925fbb6b29a75eCC87`,
                                                ],
                                              }),
                                            }),
                                            className: `framer-6xtfd1`,
                                            "data-framer-appear-id": `6xtfd1`,
                                            fonts: [
                                              `GF;Kreon-regular`,
                                              `GF;Koulen-regular`,
                                            ],
                                            initial: Ef,
                                            optimized: !0,
                                            style: { rotateY: 7 },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        f(E.div, {
                                          className: `framer-idq9s4`,
                                          whileTap: kf,
                                          children: f(k, {
                                            children: f(A, {
                                              className: `framer-1kzjlaf-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              nodeId: `u6LkWXEy3`,
                                              scopeId: `augiA20Il`,
                                              children: f(Wc, {
                                                borderRadius: 50,
                                                bottomLeftRadius: 50,
                                                bottomRightRadius: 50,
                                                color: `rgb(255, 255, 255)`,
                                                content: `TBA`,
                                                fill: `rgb(0, 0, 0)`,
                                                font: {
                                                  fontFamily: `"DynaPuff", sans-serif`,
                                                  fontSize: `16px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 400,
                                                  letterSpacing: `0em`,
                                                  lineHeight: `1em`,
                                                },
                                                height: `100%`,
                                                hoverOptions: {
                                                  backgroundColor: `rgb(252, 208, 2)`,
                                                  color: `rgb(255, 255, 255)`,
                                                  scale: 1.11,
                                                  transition: {
                                                    damping: 30,
                                                    delay: 0,
                                                    mass: 1,
                                                    stiffness: 400,
                                                    type: `spring`,
                                                  },
                                                },
                                                id: `u6LkWXEy3`,
                                                isMixedBorderRadius: !1,
                                                label: `Copy`,
                                                layoutId: `u6LkWXEy3`,
                                                padding: 10,
                                                paddingBottom: 10,
                                                paddingLeft: 10,
                                                paddingPerSide: !1,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                topLeftRadius: 50,
                                                topRightRadius: 50,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v(`div`, {
                                  className: `framer-vnt590`,
                                  children: [
                                    f(N, {
                                      href: `https://t.me/battletoads_erc20`,
                                      motionChild: !0,
                                      nodeId: `Opqezoz7Q`,
                                      openInNewTab: !0,
                                      scopeId: `augiA20Il`,
                                      children: f(df, {
                                        animate: Df,
                                        className: `framer-1l8y1ar framer-lux5qc`,
                                        "data-border": !0,
                                        "data-framer-appear-id": `1l8y1ar`,
                                        initial: Ef,
                                        optimized: !0,
                                        whileHover: Af,
                                        children: f(cf, {
                                          __fromCanvasComponent: !0,
                                          animate: Tf,
                                          children: f(x, {
                                            children: f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                              },
                                              children: `JOIN $TOADS`,
                                            }),
                                          }),
                                          className: `framer-cpzgqq`,
                                          "data-framer-appear-id": `cpzgqq`,
                                          fonts: [`GF;Koulen-regular`],
                                          initial: Ef,
                                          optimized: !0,
                                          style: { rotateY: 7 },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                    f(N, {
                                      href: `https://x.com/BattleToadsETH`,
                                      motionChild: !0,
                                      nodeId: `s5HCn2oTr`,
                                      openInNewTab: !0,
                                      scopeId: `augiA20Il`,
                                      children: f(df, {
                                        animate: Df,
                                        className: `framer-hhbin0 framer-lux5qc`,
                                        "data-border": !0,
                                        "data-framer-appear-id": `hhbin0`,
                                        initial: Ef,
                                        optimized: !0,
                                        whileHover: Af,
                                        children: f(cf, {
                                          __fromCanvasComponent: !0,
                                          animate: Tf,
                                          children: f(x, {
                                            children: f(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7S291bGVuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Koulen", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                              },
                                              children: `Follow Us`,
                                            }),
                                          }),
                                          className: `framer-whu8gc`,
                                          "data-framer-appear-id": `whu8gc`,
                                          fonts: [`GF;Koulen-regular`],
                                          initial: Ef,
                                          optimized: !0,
                                          style: { rotateY: 7 },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            f(k, {
                              children: f(A, {
                                className: `framer-1a3mo24-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `uqfvvLEVT`,
                                scopeId: `augiA20Il`,
                                children: f(Ks, {
                                  alignment: `center`,
                                  direction: `left`,
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1,
                                  },
                                  gap: 6,
                                  height: `100%`,
                                  hoverFactor: 0.8,
                                  id: `uqfvvLEVT`,
                                  layoutId: `uqfvvLEVT`,
                                  padding: 23,
                                  paddingBottom: 23,
                                  paddingLeft: 23,
                                  paddingPerSide: !1,
                                  paddingRight: 23,
                                  paddingTop: 23,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    f(M, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 56,
                                        intrinsicWidth: 139,
                                        pixelHeight: 112,
                                        pixelWidth: 278,
                                        src: `https://moccasin-deep-walrus-780.mypinata.cloud/ipfs/bafkreig24bxb7l55rhtkaj3twk6cburxcuzmmfyyx4gkb5phfmjtzkykdu`,
                                      },
                                      className: `framer-1az9uba`,
                                      "data-framer-name": `Screenshot 2025-08-12 at 3.03.45Ã¢Â€Â¯AM`,
                                    }),
                                  ],
                                  speed: 100,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                f(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Rf = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-LDB6i.framer-lux5qc, .framer-LDB6i .framer-lux5qc { display: block; }`,
        `.framer-LDB6i.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-LDB6i .framer-lvnn9y, .framer-LDB6i .framer-e65a7i { align-content: center; align-items: center; background-color: #fedf07; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-twz0h2, .framer-LDB6i .framer-62e2fu, .framer-LDB6i .framer-vkylh5, .framer-LDB6i .framer-zn487e { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: calc(50.00000000000002% - 100.08333333333333% / 2); overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-LDB6i .framer-1cevuf8-container, .framer-LDB6i .framer-oyumz2-container, .framer-LDB6i .framer-11nps8t-container, .framer-LDB6i .framer-7wseoa-container, .framer-LDB6i .framer-10geasi-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-LDB6i .framer-aj2alp, .framer-LDB6i .framer-1ufdbl2, .framer-LDB6i .framer-pgeqbu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1m1gpqt, .framer-LDB6i .framer-1q0ve3y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 50px 0px 50px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-s10i07 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 579px; justify-content: center; overflow: hidden; padding: 15px 0px 15px 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1plledi { --border-bottom-width: 17px; --border-color: #ffffff; --border-left-width: 17px; --border-right-width: 17px; --border-style: solid; --border-top-width: 17px; align-content: center; align-items: center; background-color: rgba(101, 240, 14, 0.5); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 12px 15px 2px 0px rgba(0, 0, 0, 0.44); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 59%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-ml5jd { aspect-ratio: 1 / 1; flex: none; height: 100%; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 325px); }`,
        `.framer-LDB6i .framer-vts41u, .framer-LDB6i .framer-5jmfu0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: default; flex: none; height: 154px; position: relative; text-shadow: 5px 1px 2px rgba(0, 0, 0, 0.3); white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-LDB6i .framer-18360z3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-g4kiye { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: default; flex: none; height: auto; position: relative; text-shadow: 5px 1px 2px rgba(0, 0, 0, 0.3); white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-oyttml, .framer-LDB6i .framer-idq9s4 { align-content: center; align-items: center; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 7px 14px 7px 14px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-bu9n4l-container, .framer-LDB6i .framer-1kzjlaf-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-LDB6i .framer-19u5h9o { --border-bottom-width: 10px; --border-color: #ffffff; --border-left-width: 10px; --border-right-width: 10px; --border-style: solid; --border-top-width: 10px; aspect-ratio: 1 / 1; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; flex: none; height: 50%; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 200px); will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-u5sri8 { aspect-ratio: 1 / 1; flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 200px); }`,
        `.framer-LDB6i .framer-bfyq6h, .framer-LDB6i .framer-vnt590 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1b0tvka, .framer-LDB6i .framer-1qgr3i4, .framer-LDB6i .framer-1l8y1ar, .framer-LDB6i .framer-hhbin0 { --border-bottom-width: 5px; --border-color: #222222; --border-left-width: 2px; --border-right-width: 5px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50px; justify-content: center; overflow: hidden; padding: 40px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-xuzoli, .framer-LDB6i .framer-ykpl2s, .framer-LDB6i .framer-6xtfd1, .framer-LDB6i .framer-cpzgqq, .framer-LDB6i .framer-whu8gc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: default; flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-1nhjxod-container, .framer-LDB6i .framer-19atpqf-container, .framer-LDB6i .framer-1a3mo24-container { flex: none; height: 200px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1az9uba { aspect-ratio: 2.482142857142857 / 1; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; height: var(--framer-aspect-ratio-supported, 56px); overflow: visible; position: relative; width: 139px; }`,
        `.framer-LDB6i .framer-1ekshrn-container { flex: none; height: auto; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 10; }`,
        `.framer-LDB6i .framer-brqvez, .framer-LDB6i .framer-1x0anwk { align-content: center; align-items: center; background-color: #fedf07; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-p6wofc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-dhb6b4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 11px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100.08333333333333% / 2); overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-LDB6i .framer-1l22o0g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 31px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 27px 0px 27px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-2x2jew { --border-bottom-width: 17px; --border-color: #ffffff; --border-left-width: 17px; --border-right-width: 17px; --border-style: solid; --border-top-width: 17px; align-content: center; align-items: center; background-color: rgba(64, 79, 63, 0.24); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 12px 15px 2px 0px rgba(0, 0, 0, 0.44); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 50px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-bmeylf, .framer-LDB6i .framer-1i3wmaq, .framer-LDB6i .framer-3hng8w, .framer-LDB6i .framer-d7yoqb, .framer-LDB6i .framer-q0rdlh, .framer-LDB6i .framer-mpdrq3, .framer-LDB6i .framer-1ogsyzk, .framer-LDB6i .framer-pd381s, .framer-LDB6i .framer-hjalz3, .framer-LDB6i .framer-22hd8m, .framer-LDB6i .framer-1urp394 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: default; flex: none; height: auto; position: relative; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); white-space: pre; width: auto; }`,
        `.framer-LDB6i .framer-1bjygmk, .framer-LDB6i .framer-ih8q0c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: default; flex: none; height: auto; position: relative; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-LDB6i .framer-3k2jvj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 57px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1r4yraq-container { flex: none; height: 360px; position: relative; width: 640px; }`,
        `.framer-LDB6i .framer-1cbp536, .framer-LDB6i .framer-1wrwacd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 142px 0px 142px 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1ok55sp, .framer-LDB6i .framer-1ljve8f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-jnqfw5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-do0afs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 57px; height: min-content; justify-content: center; overflow: hidden; padding: 15px 40px 15px 40px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1mik7v0, .framer-LDB6i .framer-u72ep9, .framer-LDB6i .framer-n37win { --border-bottom-width: 17px; --border-color: #ffffff; --border-left-width: 17px; --border-right-width: 17px; --border-style: solid; --border-top-width: 17px; align-content: center; align-items: center; background-color: rgba(5, 5, 5, 0.24); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 12px 15px 2px 0px rgba(0, 0, 0, 0.44); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 50px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-1ynkqbo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 26px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1nj41zi, .framer-LDB6i .framer-zczoag { --border-bottom-width: 17px; --border-color: #ffffff; --border-left-width: 17px; --border-right-width: 17px; --border-style: solid; --border-top-width: 17px; background-color: rgba(153, 240, 14, 0.44); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 12px 15px 2px 0px rgba(0, 0, 0, 0.44); flex: none; height: 135px; overflow: hidden; position: relative; width: 138px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-v1sldh-container { aspect-ratio: 1 / 1; flex: none; height: 44%; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: var(--framer-aspect-ratio-supported, 60px); }`,
        `.framer-LDB6i .framer-1onuzt6, .framer-LDB6i .framer-6g3oh3, .framer-LDB6i .framer-4b0mjd, .framer-LDB6i .framer-t14k0l { --border-bottom-width: 17px; --border-color: #ffffff; --border-left-width: 17px; --border-right-width: 17px; --border-style: solid; --border-top-width: 17px; align-content: center; align-items: center; background-color: rgba(91, 140, 13, 0.58); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 12px 15px 2px 0px rgba(0, 0, 0, 0.44); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 135px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-18en0lw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: default; flex: 1 0 0px; height: auto; position: relative; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-LDB6i .framer-rkze3f, .framer-LDB6i .framer-hiog8n, .framer-LDB6i .framer-1f39b30 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 26px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-qe0vw3-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 60px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 60px; }`,
        `.framer-LDB6i .framer-hn53rm, .framer-LDB6i .framer-1gf8upy { --border-bottom-width: 17px; --border-color: #ffffff; --border-left-width: 17px; --border-right-width: 17px; --border-style: solid; --border-top-width: 17px; background-color: rgba(101, 240, 14, 0.5); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 12px 15px 2px 0px rgba(0, 0, 0, 0.44); flex: none; height: 135px; overflow: hidden; position: relative; width: 138px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-1rvyf43, .framer-LDB6i .framer-6kw1nd { aspect-ratio: 1 / 1; border-bottom-left-radius: 23px; border-bottom-right-radius: 23px; border-top-left-radius: 23px; border-top-right-radius: 23px; flex: none; height: var(--framer-aspect-ratio-supported, 82px); left: 50%; overflow: visible; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 82px; }`,
        `.framer-LDB6i .framer-zf51uc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-185tehq-container { flex: none; height: 500px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-clf6j8 { --border-bottom-width: 6px; --border-color: #ffffff; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; aspect-ratio: 1 / 1; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; height: var(--framer-aspect-ratio-supported, 343px); overflow: visible; position: relative; width: 343px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-1k0qxwk { --border-bottom-width: 6px; --border-color: #ffffff; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; aspect-ratio: 1 / 1; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; height: var(--framer-aspect-ratio-supported, 351px); overflow: visible; position: relative; width: 351px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-k5zxl7, .framer-LDB6i .framer-gp041g, .framer-LDB6i .framer-jmj7d6, .framer-LDB6i .framer-s7zax1, .framer-LDB6i .framer-hh7imk, .framer-LDB6i .framer-k71o9k, .framer-LDB6i .framer-tflgnl, .framer-LDB6i .framer-1nk4v7b, .framer-LDB6i .framer-3tx726, .framer-LDB6i .framer-1isiepu, .framer-LDB6i .framer-1wmyx4k, .framer-LDB6i .framer-1ivnddw, .framer-LDB6i .framer-extm06 { --border-bottom-width: 6px; --border-color: #ffffff; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; aspect-ratio: 1 / 1; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; height: var(--framer-aspect-ratio-supported, 346px); overflow: visible; position: relative; width: 346px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-2rzugx { --border-bottom-width: 6px; --border-color: #ffffff; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; aspect-ratio: 1 / 1; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; height: var(--framer-aspect-ratio-supported, 338px); overflow: visible; position: relative; width: 338px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-ef8al6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 15px 0px 15px 0px; position: relative; width: 100%; }`,
        `.framer-LDB6i .framer-1h7dxbr { --border-bottom-width: 17px; --border-color: #ffffff; --border-left-width: 17px; --border-right-width: 17px; --border-style: solid; --border-top-width: 17px; background-color: rgba(101, 240, 14, 0.5); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 12px 15px 2px 0px rgba(0, 0, 0, 0.44); flex: none; height: 211px; overflow: hidden; position: relative; width: 182px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i .framer-d4wmk8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 182px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 49%; transform: translateY(-50%); }`,
        `.framer-LDB6i .framer-1vvwsnu { align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0.47); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LDB6i[data-border="true"]::after, .framer-LDB6i [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-LDB6i.framer-72rtr7 { width: 810px; }}`,
        `@media (max-width: 809px) { .framer-LDB6i.framer-72rtr7 { width: 390px; } .framer-LDB6i .framer-1m1gpqt { padding: 0px 10px 0px 10px; } .framer-LDB6i .framer-vts41u, .framer-LDB6i .framer-5jmfu0 { height: auto; } .framer-LDB6i .framer-19u5h9o { --border-bottom-width: 17px; --border-left-width: 17px; --border-right-width: 17px; --border-top-width: 17px; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 12px 15px 2px 0px rgba(0, 0, 0, 0.44); gap: 10px; overflow: hidden; width: var(--framer-aspect-ratio-supported, 276px); } .framer-LDB6i .framer-u5sri8 { width: var(--framer-aspect-ratio-supported, 276px); } .framer-LDB6i .framer-1l22o0g { padding: 22px; } .framer-LDB6i .framer-3k2jvj { border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; will-change: var(--framer-will-change-override, transform); } .framer-LDB6i .framer-1r4yraq-container { height: 219px; width: 375px; } .framer-LDB6i .framer-do0afs { flex-direction: column; } .framer-LDB6i .framer-1mik7v0, .framer-LDB6i .framer-u72ep9, .framer-LDB6i .framer-n37win { flex: none; width: 100%; } .framer-LDB6i .framer-1l8y1ar, .framer-LDB6i .framer-hhbin0 { flex: 1 0 0px; width: 1px; }}`,
      ]),
      (zf = be(Lf, Rf, `framer-LDB6i`)),
      (Bf = zf),
      (zf.displayName = `Home`),
      (zf.defaultProps = { height: 5188, width: 1200 }),
      oe(
        zf,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Koulen`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/koulen/v29/AMOQz46as3KIBPeWh3A9kuYMUg.woff2`,
                weight: `400`,
              },
              {
                family: `Kreon`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/kreon/v39/t5t9IRIUKY-TFF_LW5lnMR3v2DnvYtimfzUfp2dWNg.woff2`,
                weight: `400`,
              },
              {
                family: `DynaPuff`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/dynapuff/v8/z7N5dRvsZDIVHbYPMhZJ3HQ83UaSu4uhr7-ZFeoYkgAr1x8RSxYu6Y3rSRs4wn8.woff2`,
                weight: `400`,
              },
              {
                family: `Konkhmer Sleokchher`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/konkhmersleokchher/v2/_Xmw-GE-rjmabA_M-aPOZOsCrUv825LFI3t07E0d-W0.woff2`,
                weight: `400`,
              },
            ],
          },
          ...af,
          ...lf,
          ...ff,
          ...pf,
          ...mf,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Vf = {
        exports: {
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerAcceptsLayoutTemplate: `true`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1200`,
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"PaE47B1w3":{"layout":["fixed","auto"]},"YtTfc_taL":{"layout":["fixed","auto"]}}}`,
              framerColorSyntax: `true`,
              framerScrollSections: `{"zAo60tHKD":{"pattern":":zAo60tHKD","name":"meme"},"R2cJXCPrU":{"pattern":":R2cJXCPrU","name":"buy"},"lAdfx2E3G":{"pattern":":lAdfx2E3G","name":"nom"},"HGfMykq3o":{"pattern":":HGfMykq3o","name":"com"}}`,
              framerDisplayContentsDiv: `false`,
              framerContractVersion: `1`,
              framerResponsiveScreen: ``,
              framerImmutableVariables: `true`,
              framerIntrinsicHeight: `5188`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  }),
  Uf,
  Wf,
  Gf,
  Kf,
  qf,
  Jf = e(() => {
    o(),
      s(),
      H(),
      (Uf = () => (
        y(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        f(`div`, {
          className: `__framer-not-found-page`,
          style: {
            display: `flex`,
            height: `100vh`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `var(--color-primary)`,
            background: `var(--color-background)`,
            fontSize: `var(--font-size-body)`,
            boxSizing: `border-box`,
            fontFeatureSettings: `"liga", "clig"`,
            fontVariantLigatures: `common-ligatures`,
            textRendering: `optimizeLegibility`,
          },
          children: v(`main`, {
            style: {
              boxSizing: `border-box`,
              fontFamily: `"Inter", sans-serif`,
              fontWeight: 500,
              maxWidth: `240px`,
              width: `100%`,
              display: `flex`,
              alignItems: `center`,
              flexDirection: `column`,
              padding: `0 20px`,
              textWrap: `balance`,
            },
            children: [
              f(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: f(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              f(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              f(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              f(`a`, {
                href: `/`,
                role: `button`,
                style: {
                  backgroundColor: `var(--color-tint)`,
                  color: `#ffffff`,
                  paddingLeft: `8px`,
                  paddingRight: `8px`,
                  borderRadius: `8px`,
                  lineHeight: `30px`,
                  height: `30px`,
                  textDecoration: `none`,
                  verticalAlign: `baseline`,
                },
                children: `Back to Home`,
              }),
            ],
          }),
        })
      )),
      (Wf = [
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,
        `.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,
        `@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`,
      ]),
      (Gf = be(Uf, Wf)),
      (Kf = Gf),
      (qf = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `component`,
            slots: [],
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
export {
  Kf as SitesNotFoundPage_js_1_4_default,
  qf as __FramerMetadata__,
  Vf as __FramerMetadata__$1,
  nf as __FramerMetadata__$2,
  Bf as augiA20Il_default,
  Eo as er,
  Jf as init_SitesNotFoundPage_js_1_4,
  Hf as init_augiA20Il,
  rf as init_augiA20Il$1,
  Do as init_server_browser,
  ef as metadata,
  tf as metadataVersion,
};
//# sourceMappingURL=shared-lib.CDn1f1BL.mjs.map
