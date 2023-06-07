import reactRefresh from "@vitejs/plugin-react-refresh";

export default {
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
  },
};
