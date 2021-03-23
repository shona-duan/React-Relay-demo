# demo总结

## 一、项目简介

​		demo使用react relay graphQL 基于GitHubAPI实现了一个简单的topic列表查询功能。

## 二、步骤

1. #### 先创建一个react文件，获取textarea文本框的值

   ```react
   // InputForm.js
   return (
           <form onSubmit={this.handleSubmit}>
             <label>
               输入:
               <textarea type="text" value={this.state.value} onChange={this.handleChange} />
             </label>
             <input type="submit" value="Submit" />
           </form>
         );
       }
   ```

   

  2. #### 定义一个query，并引入片段和变量

     ##### ⚠️：用到分页功能的hook时记得引入count和cursor两个变量

 	  **2.1** 查询query使用的Hook是useQueryLoader，查询要在textarea文本框输入查询内容后点击提交时调用，记得在useQueryLoader获取数据的方法（ loadRepositoryNameQuery() ）中定义好变量值

```react
// App.js
// useQueryLoader Hook
  const [repositoryNameQueryRef, loadRepositoryNameQuery] = useQueryLoader(
    RepositoryNameQuery
  )

  function changeValue (formValues) {
    loadRepositoryNameQuery({ name: formValues, count: 1 })
  }
```

​		

```react
// InputForm.js
handleSubmit(event) {
      event.preventDefault();
      const data = this.state.value
      this.props.onChange(data);
    }
```

##### 	 ⚠️：因为用到了usePaginationFragment Hook所以记得定义count变量（这一步官方文档中没有写到所以记得自己加）

​	 **2.2**  return里先要渲染InputForm组件，然后在<Suspense>中渲染获取到的数据（获取到的数据又封装了一个组件用来得到片段查询的数据，详见下文引入片段说明）

```react
// App.js
<Suspense fallback={'Loading...'}>
        <header className='App-header'>
          {repositoryNameQueryRef === null ? (
            <p>请输入查询内容</p>
          ) : (
            <Display queryref={repositoryNameQueryRef}></Display>
          )}
        </header>
</Suspense>
```

  3. #### 引入的片段使用分页查询

     ​		使用usePaginationFragment Hook，return里加入了一个button按钮使用 loadNext(想要获取数据的条数) 用来获取列表中的更多数据，还可以使用hasNext来判断是否存在下一条数据等等（关于usePaginationFragment的更多用法可以参照官方文档）

     ⚠️：因为获取到的是数组，想要实现分页渲染，要使用map()方法把每次获取到的数据添加到数组里

     ```react
     <Suspense fallback={'Loading...'}>
             <div>
               {(data?.stargazers?.edges ?? []).map(({ node }) => {
                 return (
                   <div key={node?.id}>
                     <UserInfo user={node} />
                     <span>{node?.createdAt}</span>
                   </div>
                 )
               })}
             </div>
           </Suspense>
     
           <button
             onClick={() => {
               loadNext(1)
             }}
           >
             Load more
           </button>
     ```

## 三、Environment configured

  1. 可以使用useRelayEnvironment Hook

  2. 自己写一个组件：

       1. 配置GitHub token

          ⚠️：token不能直接写到请求头里

     2. 封装fetchGraphQL方法
     3. RelayEnvironment.js 配置存储数据以及获取缓存数据