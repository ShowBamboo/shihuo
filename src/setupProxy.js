const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: "http://m.shihuo.cn",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};
