import comp from "E:/mc-doc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"cn-ZH\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"开服教程\",\"link\":\"/guide/help-mian.html\",\"type\":\"primary\"},{\"text\":\"VuePress 帮助手册\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"开服零门槛\",\"details\":\"从零开始的保姆级教程，清晰的文档结构助你快速搭建专属服务器\"},{\"title\":\"多版本支持\",\"details\":\"涵盖Java版/基岩版开服指南，支持Forge/Fabric/Paper等主流服务端\"},{\"title\":\"性能优化\",\"details\":\"提供服务器参数调优指南，TPS提升方案及硬件配置建议\"},{\"title\":\"插件大全\",\"details\":\"常用插件配置教程，包含权限管理、领地保护、经济系统等核心功能\"},{\"title\":\"安全防护\",\"details\":\"详细讲解DDoS防护、反作弊设置及服务器备份策略\"},{\"title\":\"疑难解答\",\"details\":\"收录常见问题解决方案，附带社区支持渠道链接\"}],\"footer\":\"MIT | Copyright © 2025-present Minecraft Server Doc Team\"},\"headers\":[],\"git\":{\"updatedTime\":1739208795000,\"contributors\":[{\"name\":\"banchen21\",\"username\":\"banchen21\",\"email\":\"banchen19@outlook.com\",\"commits\":2,\"url\":\"https://github.com/banchen21\"}]},\"filePathRelative\":\"README.md\"}")
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
