
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
