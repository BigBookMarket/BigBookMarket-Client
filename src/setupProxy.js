const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/", {
      target: "https://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
      changeOrigin: true, // 하단 처리는 필수로 해주어야 함. 아래의 내용이 없으면 url 경로에 // api가 추가되어 경로를 찾을 수 없어짐
      pathRewrite: { "^/api/": "" },
    })
  );
};
