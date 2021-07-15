# 即刻 Hackathon 活动

## 主题《1024byte》

- 很想知道，今天，1024 byte可以做些什么？
- 网页小游戏?
- 7-13
  - 挑战用1024byte完成项目
  - 花费不到1024byte完成了基于Deno的后端服务器以及排名系统，剩下没多少空间了，好像不够完成一个小游戏了 😭
- 7-14
  - 考虑分前后端，各控制在1024byte
- 7-15
  - 放弃了，彻底放飞了，不管大小了 😣
- ~~PS：此说明文档不计入项目大小~~

## 项目说明

- 由于前期一直执着于控制项目大小，所以一开始写JS的时候，不敢加注释，怎么省字节怎么来，变量名都用单个字符，导致代码奇奇怪怪的 🙏🏻
- 前端：vue3+axios+nes.css
- 后端：deno
- 没有做移动端适配，尽量还是用主流桌面端浏览器体验吧 🤕
- 由于没有找到合适的像素中文字体，为了整体的美观，项目中都用的英文
- 没有做数据库，分数排名直接保存在内存里，如果想永久保存自己的高分，就自己截图吧 📸
- 没有做加密，强行提交高分很容易，但是请最好不要那么做
- 遇到bug不要急，直接提issues或者fork出去修，我近期应该也没有时间去修复了「备战考研，互联网再见 👋」
- 游戏规则：抓住鬼畜的数字或运算符，组成数学表达式，使其运算结果等于1024即可胜利
- 分数计算规则：你猜
- ![image.png](https://tva1.sinaimg.cn/large/007e6d0Xgy1gshy37zqdgj62e81iuhdt02.jpg)

## 项目部署

- 一个比较懒人的方式就是把html文件压缩到一行，塞进js文件交给[deno deploy](https://dash.deno.com/)部署
- 他提供免费服务器，还带域名，美滋滋
- 经群大佬的指点，原来deno.dev的部署是以serverless worker的形式部署的（类似cloudflare worker），是可能分布式部署，导致不同的人请求不同的实例，内存不共享。
- 所以，最终还得部署在自己的服务器上 🥲
- 修改`main.js`

```js
await app.listen(":1024");
//addEventListener("fetch", app.fetchEventHandler());
```
