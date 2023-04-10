import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  define: {
    __DEV__: true,
    __PROFILE__: true,
    __EXPERIMENTAL__: true,
  },
  resolve: {
    alias: {
      react: path.posix.resolve("src/react"),
      "react-dom": path.posix.resolve("src/react-dom"),
      "react-dom-bindings": path.posix.resolve("src/react-dom-bindings"),
      "react-reconciler": path.posix.resolve("src/react-reconciler"),
      scheduler: path.posix.resolve("src/scheduler"),
      shared: path.posix.resolve("src/shared"),
    },
  },
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    // cors: true, //默认启用并允许任何源
    https: false,
    // open: true, //在服务器启动时自动在浏览器中打开应用程序
    // 反向代理配置，注意rewrite写法
  },
});