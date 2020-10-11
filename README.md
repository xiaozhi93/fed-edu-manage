# fed-manage

## FQA
- ts中as的使用，类型断言的一种，用于限制某个数据类型；
```typescript
 // 类型断言形式一，尖括号语法    
let someValue: any = 'this is a string';
let strLen: number = (<string>someValue).length
// 类型断言形式二，as语法    
let someValue: any = 'this is a string';
let strLen: number = (someValue as string).length    

```

- 函数中使用try catch finally,在try执行return,finally也会执行
- JSON.parse(window.localStorage.getItem('user') || 'null')，， 对于JSON.parse只接受字符串，然后只接受的值可能是其他类型，就其他类型转化一下
- 给组件注册原生的事件，如果不支持，在组件的根元素注册事件，使用@click.nativce=""
- router.currentRoute.fullPath, currentRoute获取当前路由信息
- 设置数组类型 let requests: any[] = []