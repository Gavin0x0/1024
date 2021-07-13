import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();
let score = []

router.get("/list",(ctx) => {
  const target = ctx.sendEvents();
  target.dispatchMessage({ d: score });
  target.close();
});

router.get("/add",() => {
  score.push({id: 123,s: 100});
});

app.use(router.routes());
addEventListener("fetch", app.fetchEventHandler());