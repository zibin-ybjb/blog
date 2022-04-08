import{_ as n,d as s}from"./app.f7c18c03.js";const a={},e=s(`<h1 id="new-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#new-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> new \u64CD\u4F5C\u7B26</h1><h3 id="new\u505A\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#new\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> new\u505A\u4E86\u4EC0\u4E48</h3><blockquote><p>\u5F53\u5728\u51FD\u6570\u524D\u9762\u88AB\u52A0\u5165 <code>new</code> \u8C03\u7528\u65F6\uFF0C\u4E5F\u5C31\u662F\u6784\u9020\u5668\u8C03\u7528\u65F6\uFF0C\u4E0B\u9762\u8FD9\u4E9B\u4E8B\u60C5\u4F1A\u81EA\u52A8\u5B8C\u6210\uFF1A \u4E00\u4E2A\u5168\u65B0\u7684\u5BF9\u8C61\u4F1A\u51ED\u7A7A\u521B\u5EFA\uFF08\u5C31\u662F\u88AB\u6784\u5EFA\uFF09 <em>\u8FD9\u4E2A\u65B0\u6784\u5EFA\u7684\u5BF9\u8C61\u4F1A\u88AB\u63A5\u5165\u539F\u5F62\u94FE\uFF08<code>[[Prototype]]</code>-linked\uFF09</em> \u8FD9\u4E2A\u65B0\u6784\u5EFA\u7684\u5BF9\u8C61\u88AB\u8BBE\u7F6E\u4E3A\u51FD\u6570\u8C03\u7528\u7684 <code>this</code> \u7ED1\u5B9A \u9664\u975E\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5B83\u81EA\u5DF1\u7684\u5176\u4ED6 <strong>\u5BF9\u8C61</strong>\uFF0C\u5426\u5219\u8FD9\u4E2A\u88AB <code>new</code> \u8C03\u7528\u7684\u51FD\u6570\u5C06 <em>\u81EA\u52A8</em> \u8FD4\u56DE\u8FD9\u4E2A\u65B0\u6784\u5EFA\u7684\u5BF9\u8C61\u3002</p></blockquote><h3 id="\u624B\u5199\u4E00\u4E2Anew" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u4E00\u4E2Anew" aria-hidden="true">#</a> \u624B\u5199\u4E00\u4E2Anew</h3><ul><li>\u4F7F\u7528<code>Object.create()</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myNew1</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u7528\u7ED1\u5B9Afn\u7684\u539F\u578B</span>
  <span class="token keyword">const</span> newObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5C06\u8FD9\u4E2Afn\u7ED1\u5B9A\u5230newObj\u4E0A</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>newObj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5982\u679C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u5426\u5219\u5C31\u8FD4\u56DE\u8FD9\u4E2Afn</span>
  <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> newObj<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u76F4\u63A5\u7A7A\u5BF9\u8C61</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>argus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u7528\u7ED1\u5B9Afn\u7684\u539F\u578B</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> fn<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>

  <span class="token comment">// \u5C06\u8FD9\u4E2Afn\u7ED1\u5B9A\u5230newObj\u4E0A</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> argus<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5982\u679C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u5426\u5219\u5C31\u8FD4\u56DE\u8FD9\u4E2Afn</span>
  <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj<span class="token punctuation">;</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8);function p(t,o){return e}var l=n(a,[["render",p],["__file","new \u64CD\u4F5C\u7B26.html.vue"]]);export{l as default};
