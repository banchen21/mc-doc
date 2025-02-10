export const themeData = JSON.parse("{\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"Minecraft Server Doc\",\"description\":\"一个 Minecraft 开服文档，从入门到精通\",\"selectLanguageName\":\"English\"}},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"快速开始\",\"link\":\"/guide/quickstart\"},{\"text\":\"核心教程\",\"children\":[{\"text\":\"服务端配置\",\"link\":\"/guide/server-config\"},{\"text\":\"插件系统\",\"link\":\"/guide/plugins\"}]},{\"text\":\"问题排查\",\"link\":\"/troubleshooting/\"}],\"sidebar\":{\"/\":[{\"text\":\"🏠 首页\",\"collapsible\":false,\"children\":[\"/\"]}],\"/guide/\":[{\"text\":\"🚀 快速开始\",\"collapsible\":true,\"children\":[{\"text\":\"入门指南\",\"link\":\"/guide/help-mian\"},{\"text\":\"服务端核心列表\",\"link\":\"/guide/serverlist\"},{\"text\":\"服务器配置\",\"link\":\"/guide/serverconfig\"}]}]},\"repo\":\"https://github.com/banchen21/mc-doc\",\"docsBranch\":\"main\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
