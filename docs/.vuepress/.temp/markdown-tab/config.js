import { CodeTabs } from "E:/mc-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_2f583e5d0b0c158f5b087404cf4eccb1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/mc-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_2f583e5d0b0c158f5b087404cf4eccb1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/mc-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_2f583e5d0b0c158f5b087404cf4eccb1/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
