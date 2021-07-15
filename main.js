import { Application, Router, helpers } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();
let players = [];

router.get("/list", (ctx) => {
  const target = ctx.sendEvents();
  target.dispatchMessage({ d: players });
  target.close();
});

router.get("/add", (ctx) => {
  let data = helpers.getQuery(ctx);
  console.log("receive", data);
  let name = data.name;
  let score = data.score;
  //TODO 「可删减」 取name集合
  let name_list = players.map((item) => item.name);
  let index = name_list.indexOf(name);
  console.log(name_list);
  console.log("Index of", index);
  if (index == -1) {
    players.push(data);
  } else if (players[index].score < score) {
    console.log("update");
    players[index].score = score;
  }
  players.sort((a, b) => {
    return b["score"] - a["score"];
  });
  console.log(players);
});

router.get("/string", (ctx) => {
  const target = ctx.sendEvents();
  target.dispatchMessage(JSON.stringify(players));
  target.close();
});

router.get("/", (ctx) => {
  ctx.response.body =""
    ctx.response.type = "text/html";
});

app.use(router.routes());
await app.listen(":80");
//addEventListener("fetch", app.fetchEventHandler());
