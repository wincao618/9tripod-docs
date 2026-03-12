caoying@ubuntu-199:~/docusaurus/my-new-website$ npm start -- --host 0.0.0.0 --locale zh-Hans

#更新到git上
USE_SSH=true npm run deploy
#本地开发测试验证
npm run build && npm run serve
