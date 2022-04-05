# let/const/var 的区别

## var

> 在 ES6 出现之前，必须使用 var 声明。

### var 的作用域

> 作用域本质上是指变量/函数可供访问的范围。 var 可以在全局范围声明或函数/局部范围内声明。
> 当在最外层函数的外部声明 var 变量时，作用域是全局的。 这意味着在最外层函数的外部用 var 声明的任何变量都可以在 windows 中使用。
> 当在函数中声明 var 时，作用域是局部的。 这意味着它只能在函数内访问。

```js
var greeter = "hey hi";

function newFunction() {
  var hello = "hello";
}
```

这里，greeter 是全局范围的，因为它存在于函数外部，而 hello 是函数范围的。 因此，我们无法在函数外部访问变量 hello。 因此，如果我们这样做：

```js
var tester = 'hey hi';
function newFunction() {
    var hello = 'hello';
}
console.log(hello); // error: hello is not defined
```

我们会收到错误消息，这是由于函数外部没有 hello 导致的。

var 变量可以重新声明和修改
这意味着我们可以在相同的作用域内执行下面的操作，并且不会出错

``` js
var greeter = 'hey hi';
var greeter = 'say Hello instead';
```

又比如

``` js
var greeter = 'hey hi';
greeter = 'say Hello instead';
```

### var 的变量提升

变量提升是 JavaScript 的一种机制:在执行代码之前，变量和函数声明会移至其作用域的顶部。 这意味着如果我们这样做:

``` js
console.log(greeter);
var greeter = 'say hello';
```

生面的代码会被解释为:

``` js
var greeter;
console.log(greeter); // greeter is undefined
greeter = 'say hello';
```

因此，将 var 声明的变量会被提升到其作用域的顶部，并使用 undefined 值对其进行初始化.

### var 的问题

var 有一个弱点。 我将使用以下示例进行说明：

``` js
    var greeter = "hey hi";
    var times = 4;
if (times &gt; 3) {
    var greeter = "say Hello instead";
}

console.log(greeter) // "say Hello instead"
```

由于 times> 3 返回 true，因此将 greeter 重新定义为 saysay Hello。 如果你有是故意重新定义 greeter，这段代码是问题的，但是当你不知道之前已经定义了变量 greeter 时，这将成为产生问题。

如果在代码的其他部分使用了 greeter,这可能会导致代码中出现许多错误。 这就是为什么需要 let 和 const 的原因。

## let

let 现在已经成为变量声明的首选。 这并不奇怪，因为它是对 var 声明的改进。 它也解决了我们刚刚介绍的 var 问题。 让我们考虑一下为什么会这样。

### let 是块级作用域

块是由 {} 界定的代码块,大括号中有一个块.大括号内的任何内容都包含在一个块级作用域中.

因此，在带有 let 的块中声明的变量仅可在该块中使用。 让我用一个例子解释一下

``` js
let greeting = 'say Hi';
let times = 4;

if (times > 3) {
    let hello = 'say Hello instead';
    console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined
```

我们看到在其代码块（定义它的花括号）之外使用 hello 会返回错误。 这是因为 let 变量是块范围的.

### let 可以被修改但是不能被重新声明.

就像 var 一样，用 let 声明的变量可以在其范围内被修改。 但与 var 不同的是，let 变量无法在其作用域内被重新声明。 来看下面的栗子:

``` js
let greeting = 'say Hi';
greeting = 'say Hello instead';
```

上面的代码将会返回一个错误:

``` js
let greeting = 'say Hi';
let greeting = 'say Hello instead'; // error: Identifier 'greeting' has already been declared
```

但是，如果在不同的作用域中定义了相同的变量，则不会有错误:

``` js
let greeting = 'say Hi';
if (true) {
    let greeting = 'say Hello instead';
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
```

为什么没有错误？ 这是因为两个实例的作用域不同，因此它们会被视为不同的变量。

这个事实说明:使用 let,是比 var 更好的选择。 当使用 let 时，你不必费心思考 🤔 变量的名称，因为变量仅在其块级作用域内存在。

同样，由于在一个块级作用域内不能多次声明一个变量，因此不会发生前面讨论的 var 出现的问题。

### let 的变量提升

就像 var 一样，let 声明也被提升到作用域顶部。
但不同的是:

用 var 声明的变量会被提升到其作用域的顶部，并使用 undefined 值对其进行初始化。
用 let 声明的变量会被提升到其作用域的顶部，不会对值进行初始化。
因此，如果你尝试在声明前使用 let 变量，则会收到 Reference Error。

## const

用 const 声明的变量保持常量值。 const 声明与 let 声明有一些相似之处

### const 声明的变量在块级作用域内

像 let 声明一样，const 声明只能在声明它们的块级作用域中访问

### const 不能被修改并且不能被重新声明

这意味着用 const 声明的变量的值保持不变。 不能修改或重新声明。 因此，如果我们使用 const 声明变量，那么我们将无法做到这一点:

``` js
const greeting = 'say Hi';
greeting = 'say Hello instead'; // error: Assignment to constant variable.
```

或者这个这样:

``` js
const greeting = 'say Hi';
const greeting = 'say Hello instead'; // error: Identifier 'greeting' has already been declared
```

因此，每个 const 声明都必须在声明时进行初始化。

当用 const 声明对象时，这种行为却有所不同。 虽然不能更新 const 对象，但是可以更新该对象的属性。 因此，如果我们声明一个 const 对象为

``` js
const greeting = {
    message: 'say Hi',
    times: 4,
};
```

同样不能像下面这样做:

``` js
const greeting = {
    words: 'Hello',
    number: 'five',
};
// error:  Assignment to constant variable.
```

但我们可以这样做:

``` js
greeting.message = 'say Hello instead';
```

这将更新 greeting.message 的值，而不会返回错误。

### const 的变量提升

就像 let 一样，const 声明也被提升到顶部，但是没有初始化。

最后，我们总结一下它们的异同：

- var 声明是全局作用域或函数作用域，而 let 和 const 是块作用域。
- var 变量可以在其范围内更新和重新声明； let 变量可以被更新但不能重新声明； const 变量既不能更新也不能重新声明。
- 它们都被提升到其作用域的顶端。 但是，虽然使用变量 undefined 初始化了 var 变量，但未初始化 let 和 const 变量。
- 尽管可以在不初始化的情况下声明 var 和 let，但是在声明期间必须初始化 const。
