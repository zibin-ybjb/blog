# HTTP协议

#### 基本属性
- Hyper Text Transfer Protocol 超文本传输协议
- 简单的
- 可扩展的
- 无状态的，可会话的

#### 版本
- HTTP/1.0 默认为每一对 HTTP 请求/响应都打开一个单独的 TCP 连接。当需要连续发起多个请求时，这种模式比多个请求共享同一个 TCP 链接更低效。
- HTTP/1.1引入了流水线（被证明难以实现）和持久连接的概念：底层的TCP连接可以通过Connection头部来被部分控制。HTTP/2则发展得更远，通过在一个连接复用消息的方式来让这个连接始终保持为暖连接。 
-

#### 报文
![](https://mdn.mozillademos.org/files/13687/HTTP_Request.png)
请求由以下元素组成：

- 一个HTTP的method，经常是由一个动词像GET, POST 或者一个名词像OPTIONS，HEAD来定义客户端的动作行为。通常客户端的操作都是获取资源（GET方法）或者发送HTML form表单值（POST方法），虽然在一些情况下也会有其他操作。
- 要获取的资源的路径，通常是上下文中就很明显的元素资源的URL，它没有protocol （http://），domain（developer.mozilla.org），或是TCP的port (en-US)（HTTP一般在80端口）。
- HTTP协议版本号。
- 为服务端表达其他信息的可选头部headers。
- 对于一些像POST这样的方法，报文的body就包含了发送的资源，这与响应报文的body类似。


#### 响应
![](https://mdn.mozillademos.org/files/13691/HTTP_Response.png)

响应报文包含了下面的元素：

- HTTP协议版本号。
- 一个状态码（status code），来告知对应请求执行成功或失败，以及失败的原因。
- 一个状态信息，这个信息是非权威的状态码描述信息，可以由服务端自行设定。
- HTTP headers，与请求头部类似。
- 可选项，比起请求报文，响应报文中更常见地包含获取的资源body。

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)