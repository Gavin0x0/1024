import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();
let score = [];

router.get("/list", (ctx) => {
  const target = ctx.sendEvents();
  target.dispatchMessage({ d: score });
  target.close();
});

router.get("/add", () => {
  score.push({ id: 123, s: 100 });
});

router.get("/", (ctx) => {
  ctx.response.body = "<div></div><div></div><style>body{margin:0;background:#62374e;}div{height:50px;width:50px;margin:50px 0 100px 50px;background:#fdc57b;box-shadow:250px 0 0#fdc57b";
  ctx.response.type = "text/html";
});

app.use(router.routes());
await app.listen(":80");
//addEventListener("fetch", app.fetchEventHandler());
