import comp from "E:/mc-doc/docs/.vuepress/.temp/pages/help-mian.html.vue"
const data = JSON.parse("{\"path\":\"/help-mian.html\",\"title\":\"🚀 入门指南\",\"lang\":\"cn-ZH\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"help-mian.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
