# new 操作符

### new做了什么

> 当在函数前面被加入 `new` 调用时，也就是构造器调用时，下面这些事情会自动完成：
> 一个全新的对象会凭空创建（就是被构建）
> *这个新构建的对象会被接入原形链（`[[Prototype]]`-linked）*
> 这个新构建的对象被设置为函数调用的 `this` 绑定
> 除非函数返回一个它自己的其他 **对象**，否则这个被 `new` 调用的函数将 *自动* 返回这个新构建的对象。
### 手写一个new
   - 使用`Object.create()`

```js
function myNew1(fn, ...args) {

  // 创建一个新对象，用绑定fn的原型
  const newObj = Object.create(fn.prototype);

  // 将这个fn绑定到newObj上
  const result = fn.apply(newObj, args);

  // 如果函数的返回值是一个对象，就返回这个对象，否则就返回这个fn
  return result instanceof Object ? result : newObj;

}
```

   - 直接空对象

```js
function myNew(fn, ...argus) {

  // 创建一个新对象，用绑定fn的原型
  const obj = {};
  obj.__proto__ = fn.prototype;

  // 将这个fn绑定到newObj上
  let result = fn.apply(obj, argus);

  // 如果函数的返回值是一个对象，就返回这个对象，否则就返回这个fn
  return result instanceof Object ? result : obj;
  
}
```

