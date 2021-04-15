## demo介绍

​		demo使用React Relay GraphQL 基于GitHub GraphQL API v4实现了一个GitHub查询仓库的功能，输入查询内容，可以查询到第一个相关仓库的相关话题和最近更新时间以及仓库star的人名，并用到了React UI组件库 Ant Design，更多介绍请关注WiKi内笔记

## 快速开始

​		需要申请GitHub`OAuth`令牌。
1. 登陆GitHub官网，点击头像找到Settings;
   2. 左侧边栏中点击 Developer settings -->  Personal access tokens（个人访问令牌）--> Generate new token（生成新令牌）;
   3. 给令牌一个描述性的名称；
   4. 选择要授予此令牌的作用域或者权限，要使用令牌从命令行访问仓库，请选择repo（仓库）；
   5. 单击Generate token（生成令牌）就可以看到生效的令牌；
   6. 请务必保存好令牌， 出于安全原因，在离开页面后，就无法再次看到令牌。

   （创建个人访问令牌 GitHub [官网](https://docs.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token)有详细具体教程。）

   ⚠️：token不能直接写到请求头里，要将令牌当作环境变量配置在文件.env.local中:

   ```js
   # your-app-name/.env.local
   REACT_APP_GITHUB_AUTH_TOKEN=[your token]
   ```

   ```js
   // 把token写入fetchGraphQL.js中
   const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
   ```

2. 

## 

### 安装

```
yarn install
```

### 运行

```
yarn start
```


