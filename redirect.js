import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body ="<!DOCTYPE html> <html> <body> <a href='https://jithub-hackathon-1024.632891553.xyz/' style='font-size:3rem'>Go to new address</a> </body> </html>";
  ctx.response.type = "text/html";
});

app.use(router.routes());
//await app.listen(":80");
addEventListener("fetch", app.fetchEventHandler());
