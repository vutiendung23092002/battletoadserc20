import { __esmMin as e } from "./rolldownruntimeB4t1OpF.mjs";
import {
  B as t,
  Ga as n,
  X as r,
  Z as i,
  d as a,
  init_client as o,
  init_npm_react_18_2 as s,
  init_npm_react_dom_18_2 as c,
  init_ssg_sandbox_shims as l,
  navigator as u,
  pe as d,
  r as f,
  te as p,
  ue as m,
  window as h,
  x as g,
  ye as _,
} from "./react.CP0hP_0W.mjs";
import {
  ErrorPlaceholder as v,
  GracefullyDegradingErrorBoundary as y,
  LibraryFeaturesProvider as b,
  PageEffectsProvider as x,
  PageRoot as S,
  inferInitialRouteFromPath as C,
  init_framer_O23R7WUO as w,
  installFlexboxGapWorkaroundIfNeeded as T,
  lazy as E,
  markHydrationStart as D,
  patchRoutesForABTesting as O,
  removeHiddenBreakpointLayersV2 as k,
  turnOffReactEventHandling as A,
  useCurrentRoute as j,
  useLocaleInfo as M,
  useRouter as N,
  withPerformanceMarks as P,
  yieldToMain as F,
} from "./framer.BAEYfhpS.mjs";
async function I({ routeId: e, pathVariables: i, localeId: a }) {
  let o = z[e].page.preload(),
    s = t(S, {
      isWebsite: !0,
      routeId: e,
      pathVariables: i,
      routes: z,
      collectionUtils: V,
      framerSiteId: H,
      notFoundPage: E(() => import(`./SitesNotFoundPage.js@1.4.BJax74qS.mjs`)),
      isReducedMotion: void 0,
      localeId: a,
      locales: B,
      preserveQueryParams: void 0,
      //   siteCanonicalURL: `https://battletoads.live`,
      EditorBar:
        h === void 0
          ? void 0
          : (() => {
              let e =
                /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
                  u.userAgent
                );
              if (e) {
                console.log(
                  `[Framer Editor Bar] Unavailable because navigator is bot`
                );
                return;
              }
              return E(async () => {
                let e = {
                  __version: 2,
                  framer: {
                    useCurrentRoute: j,
                    useLocaleInfo: M,
                    useRouter: N,
                  },
                  react: {
                    createElement: t,
                    Fragment: g,
                    memo: r,
                    useCallback: p,
                    useEffect: m,
                    useRef: d,
                    useState: _,
                  },
                  "react-dom": { createPortal: n },
                };
                h.__framer_editorBarDependencies = e;
                let { createEditorBar: i } = await import(`./script/init.mjs`);
                return { default: i() };
              });
            })(),
    }),
    c = t(b, {
      children: s,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1,
      },
    }),
    l = t(y, { children: c }),
    f = t(x, { children: l, value: { routes: {} } });
  return await o, f;
}
function L() {
  U && h.__framer_events.push(arguments);
}
async function R(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || h.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        e,
        r
      );
    L(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
          ? e.stack
          : null,
      }
    );
  }
  try {
    let r, o, s, c;
    if (e) {
      let e = JSON.parse(t.dataset.framerHydrateV2);
      (r = e.routeId),
        (o = e.localeId),
        (s = e.pathVariables),
        (c = e.breakpoints),
        (r = O(z, r));
    } else {
      O(z, void 0);
      let e = C(z, decodeURIComponent(location.pathname), !0, B);
      (r = e.routeId), (o = e.localeId), (s = e.pathVariables);
    }
    let l = I({ routeId: r, localeId: o, pathVariables: s });
    h !== void 0 &&
      (async () => {
        let e = z[r],
          t = `default`,
          n = B.find(({ id: e }) => (o ? e === o : e === t)).code,
          i = null;
        if (e?.collectionId && V) {
          let t = await V[e.collectionId]?.(),
            [r] = Object.values(s);
          t &&
            typeof r == `string` &&
            (i = (await t.getRecordIdBySlug(r, n || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          c = a.timeZone,
          l = a.locale;
        await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          h.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: H ?? null,
              routePath: e?.path || `/`,
              collectionItemId: i,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: h.location.href,
              hostname: h.location.hostname || null,
              pathname: h.location.pathname || null,
              hash: h.location.hash || null,
              search: h.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await F({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: n || null },
            })
          );
      })();
    let u = await l;
    if (e) {
      P(`framer-rewrite-breakpoints`, () => {
        k(c), h.__framer_onRewriteBreakpoints?.(c);
      });
      let e = i;
      e(() => {
        D(), A(), a(t, u, { onRecoverableError: n });
      });
    } else f(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var z,
  B,
  V,
  H,
  U,
  W = e(() => {
    if (
      (l(),
      w(),
      s(),
      c(),
      o(),
      (z = {
        augiA20Il: {
          elements: {
            HGfMykq3o: `com`,
            lAdfx2E3G: `nom`,
            R2cJXCPrU: `buy`,
            zAo60tHKD: `meme`,
          },
          page: E(() =>
            import(`./q4HpVwDim0Uj7NhFBgjyZmlIwIAXi3LqwhGJ5Nz2bPs.BW5uIrKs.mjs`)
          ),
          path: `/`,
        },
      }),
      (B = [{ code: `en`, id: `default`, name: `English`, slug: `` }]),
      (V = {}),
      (H = `22c795f1496c0bbd44973d545bff40b975ffdf00f805c1e8d4dc2c17a7427850`),
      (U = typeof document < `u`),
      U)
    ) {
      (h.__framer_importFromPackage = (e, n) => () =>
        t(v, {
          error: `Package component not supported: "` + n + `" in "` + e + `"`,
        })),
        (h.process = {
          ...h.process,
          env: {
            ...(h.process ? h.process.env : void 0),
            NODE_ENV: `production`,
          },
        }),
        (h.__framer_events = h.__framer_events || []),
        T();
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? R(!0, e) : R(!1, e);
    }
  });
W();
export { I as getPageRoot };
//# sourceMappingURL=script_main.MjOFb2Qn.mjs.map
