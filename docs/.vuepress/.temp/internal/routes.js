export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/mc-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/guide/help-mian.html", { loader: () => import(/* webpackChunkName: "guide_help-mian.html" */"E:/mc-doc/docs/.vuepress/.temp/pages/guide/help-mian.html.js"), meta: {"title":"🚀 入门指南"} }],
  ["/guide/quickstart.html", { loader: () => import(/* webpackChunkName: "guide_quickstart.html" */"E:/mc-doc/docs/.vuepress/.temp/pages/guide/quickstart.html.js"), meta: {"title":""} }],
  ["/guide/serverconfig.html", { loader: () => import(/* webpackChunkName: "guide_serverconfig.html" */"E:/mc-doc/docs/.vuepress/.temp/pages/guide/serverconfig.html.js"), meta: {"title":""} }],
  ["/guide/serverlist.html", { loader: () => import(/* webpackChunkName: "guide_serverlist.html" */"E:/mc-doc/docs/.vuepress/.temp/pages/guide/serverlist.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/mc-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
