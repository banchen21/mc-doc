import comp from "E:/mc-doc/docs/.vuepress/.temp/pages/guide/help-mian.html.vue"
const data = JSON.parse("{\"path\":\"/guide/help-mian.html\",\"title\":\"🚀 入门指南\",\"lang\":\"cn-ZH\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1739208795000,\"contributors\":[{\"name\":\"banchen21\",\"username\":\"banchen21\",\"email\":\"banchen19@outlook.com\",\"commits\":1,\"url\":\"https://github.com/banchen21\"}]},\"filePathRelative\":\"guide/help-mian.md\"}")
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
