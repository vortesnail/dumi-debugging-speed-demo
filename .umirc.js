const path = require("path");
const outputFileName = "doc-build";

export default {
  mode: "site",
  title: "xxxx",
  favicon: "/favicon.ico",
  logo: "/logo.png",
  externals: {
    react: "window.React",
    "react-dom": "window.ReactDOM",
    antd: "window.antd",
  },
  scripts: [
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js",
      changeOrigin: true,
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js",
      changeOrigin: true,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.7.0/antd.min.js",
      changeOrigin: true,
    },
  ],
  resolve: {
    includes: ["docs"],
  },
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "@Comp": path.resolve(__dirname, "./src/components"),
    Utils: path.resolve(__dirname, "./src/utils"),
  },
  outputPath: outputFileName,
  theme: {
    "@c-primary": "#4a90e2",
  },
  menus: {
    "/zh-CN/guide": [
      {
        title: "介绍",
        path: "/guide",
      },
    ],
    "/guide": [
      {
        title: "Introducation",
        path: "/guide",
      },
    ],
  },
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
  links: [
    {
      rel: "stylesheet",
      href: "https://cdn.bootcss.com/antd/4.7.0/antd.min.css",
    },
  ],
  sass: {
    implementation: require("node-sass"),
  },
  styles: [
    `.__dumi-default-previewer-demo .spark-btn { margin-right: 8px; margin-bottom: 12px; }`,
    `p { margin: 4px 0 }`,
  ],
};
