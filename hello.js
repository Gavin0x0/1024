import { Application, Router, helpers } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();
let score = [];

router.get("/list", (ctx) => {
  const target = ctx.sendEvents();
  target.dispatchMessage({ d: score });
  target.close();
});

router.get("/add", (ctx) => {
  console.log(helpers.getQuery(ctx));
  let player = helpers.getQuery(ctx).name;
  for (let i in score) {
    console.log(i);
    if (i == player) {
      console.log("exist");
    }
    score.push(helpers.getQuery(ctx));
  }
});
router.get("/string", (ctx) => {
  const target = ctx.sendEvents();
  target.dispatchMessage(JSON.stringify(score));
  target.close();
});

router.get("/", (ctx) => {
  ctx.response.body =
    "<body><div id='app'><input v-model='name' placeholder='name'><button @click='add'>Add</button></div></body><script src='https://unpkg.com/vue@next'></script><script src='https://unpkg.com/axios/dist/axios.min.js'></script><script>    Vue.createApp({  data() {    return {      counter: 0    }  },  methods: {    add() {        axios.get('/add')  .then((r)=>{})  .catch((e)=>{});    }  }}).mount('#app')</script></html>";
  ctx.response.type = "text/html";
});

app.use(router.routes());
await app.listen(":80");
//addEventListener("fetch", app.fetchEventHandler());
