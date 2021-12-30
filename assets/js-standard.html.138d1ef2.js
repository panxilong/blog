import{c as n}from"./app.9ccdc3d5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="javascript-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#javascript-\u89C4\u8303" aria-hidden="true">#</a> Javascript \u89C4\u8303</h1><h2 id="\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D" aria-hidden="true">#</a> \u547D\u540D</h2><p>\u65B9\u6CD5\u540D\u3001\u53C2\u6570\u540D\u3001\u6210\u5458\u53D8\u91CF\u3001\u5C40\u90E8\u53D8\u91CF\u90FD\u7EDF\u4E00\u4F7F\u7528 lowerCamelCase \u98CE\u683C\uFF0C\u5FC5\u987B\u9075\u4ECE\u9A7C\u5CF0\u5F62\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6B63\u4F8B\uFF1A localValue | getHttpMessage() | inputUserId
\u53CD\u4F8B\uFF1A local-Value | getHttp_Message() | _inputUserId
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><em>\u5176\u4E2D method \u65B9\u6CD5\u547D\u540D\u5FC5\u987B\u662F \u52A8\u8BCD \u6216\u8005 \u52A8\u8BCD+\u540D\u8BCD \u5F62\u5F0F</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6B63\u4F8B\uFF1AsaveShopCarData |openShopCarInfoDialog
\u53CD\u4F8B\uFF1Asave | open | show | go
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5E38\u91CF\u547D\u540D\u5168\u90E8\u5927\u5199\uFF0C\u5355\u8BCD\u95F4\u7528\u4E0B\u5212\u7EBF\u9694\u5F00\uFF0C\u529B\u6C42\u8BED\u4E49\u8868\u8FBE\u5B8C\u6574\u6E05\u695A\uFF0C\u4E0D\u8981\u5ACC\u540D\u5B57\u957F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6B63\u4F8B\uFF1A MAX_STOCK_COUNT
\u53CD\u4F8B\uFF1A MAX_COUNT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4EE3\u7801\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u683C\u5F0F" aria-hidden="true">#</a> \u4EE3\u7801\u683C\u5F0F</h2><ul><li>\u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB</li><li>\u4E0D\u540C\u903B\u8F91\u3001\u4E0D\u540C\u8BED\u4E49\u3001\u4E0D\u540C\u4E1A\u52A1\u7684\u4EE3\u7801\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A\u7A7A\u884C\u5206\u9694\u5F00\u6765\u4EE5\u63D0\u5347\u53EF\u8BFB\u6027\uFF0C\u4EFB\u4F55\u60C5\u5F62\uFF0C\u6CA1\u6709\u5FC5\u8981\u63D2\u5165\u591A\u4E2A\u7A7A\u884C\u8FDB\u884C\u9694\u5F00\u3002</li></ul><h2 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h2><p>\u7EDF\u4E00\u4F7F\u7528\u5355\u5F15\u53F7(&#39;&#39;)\uFF0C\u4E0D\u4F7F\u7528\u53CC\u5F15\u53F7(&quot;&quot;)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
<span class="token keyword">let</span> testDiv <span class="token operator">=</span> <span class="token string">&#39;&lt;div id=&quot;test&quot;&gt;&lt;/div&gt;&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5BF9\u8C61\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u58F0\u660E" aria-hidden="true">#</a> \u5BF9\u8C61\u58F0\u660E</h2><ul><li>\u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u6B63\u4F8B\uFF1A <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
\u53CD\u4F8B\uFF1A <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u4F7F\u7528\u5B57\u9762\u91CF\u6765\u4EE3\u66FF\u5BF9\u8C61\u6784\u9020\u5668</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u6B63\u4F8B\uFF1A
<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  city<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
\u53CD\u4F8B\uFF1A
<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u4F7F\u7528-es6-7-\u7B49\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-es6-7-\u7B49\u65B0\u7279\u6027" aria-hidden="true">#</a> \u4F7F\u7528 ES6,7 \u7B49\u65B0\u7279\u6027</h2><p>\u5FC5\u987B\u4F18\u5148\u4F7F\u7528 ES6,7 \u4E2D\u65B0\u589E\u7684\u8BED\u6CD5\u7CD6\u548C\u51FD\u6570\u3002\u8FD9\u5C06\u7B80\u5316\u4F60\u7684\u7A0B\u5E8F\uFF0C\u5E76\u8BA9\u4F60\u7684\u4EE3\u7801\u66F4\u52A0\u7075\u6D3B\u548C\u53EF\u590D\u7528\u3002</p><h2 id="\u62EC\u53F7" tabindex="-1"><a class="header-anchor" href="#\u62EC\u53F7" aria-hidden="true">#</a> \u62EC\u53F7</h2><p>\u4E0B\u5217\u5173\u952E\u5B57\u540E\u5FC5\u987B\u6709\u5927\u62EC\u53F7\uFF08\u5373\u4F7F\u4EE3\u7801\u5757\u7684\u5185\u5BB9\u53EA\u6709\u4E00\u884C\uFF09\uFF1Aif, else, for, while, do, switch, try, catch, finally, with\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u6B63\u4F8B\uFF1A
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
\u53CD\u4F8B\uFF1A
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="undefined-\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#undefined-\u5224\u65AD" aria-hidden="true">#</a> undefined \u5224\u65AD</h2><p>\u6C38\u8FDC\u4E0D\u8981\u76F4\u63A5\u4F7F\u7528 undefined \u8FDB\u884C\u53D8\u91CF\u5224\u65AD\uFF1B\u4F7F\u7528 typeof \u548C\u5B57\u7B26\u4E32\u2019undefined\u2019\u5BF9\u53D8\u91CF\u8FDB\u884C\u5224\u65AD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u6B63\u4F8B\uFF1A
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> person <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
\u53CD\u4F8B\uFF1A
<span class="token keyword">if</span> <span class="token punctuation">(</span>person <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u6761\u4EF6\u5224\u65AD\u548C\u5FAA\u73AF\u6700\u591A\u4E09\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u5224\u65AD\u548C\u5FAA\u73AF\u6700\u591A\u4E09\u5C42" aria-hidden="true">#</a> \u6761\u4EF6\u5224\u65AD\u548C\u5FAA\u73AF\u6700\u591A\u4E09\u5C42</h2><p>\u6761\u4EF6\u5224\u65AD\u80FD\u4F7F\u7528\u4E09\u76EE\u8FD0\u7B97\u7B26\u548C\u903B\u8F91\u8FD0\u7B97\u7B26\u89E3\u51B3\u7684\uFF0C\u5C31\u4E0D\u8981\u4F7F\u7528\u6761\u4EF6\u5224\u65AD\uFF0C\u4F46\u662F\u8C28\u8BB0\u4E0D\u8981\u5199\u592A\u957F\u7684\u4E09\u76EE\u8FD0\u7B97\u7B26\u3002\u5982\u679C\u8D85\u8FC7 3 \u5C42\u8BF7\u62BD\u6210\u51FD\u6570\uFF0C\u5E76\u5199\u6E05\u695A\u6CE8\u91CA\u3002</p><h2 id="this-\u7684\u8F6C\u6362\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#this-\u7684\u8F6C\u6362\u547D\u540D" aria-hidden="true">#</a> this \u7684\u8F6C\u6362\u547D\u540D</h2><p>\u5BF9\u4E0A\u4E0B\u6587 this \u7684\u5F15\u7528\u53EA\u80FD\u4F7F\u7528\u2019self\u2019\u6765\u547D\u540D</p><h2 id="\u614E\u7528-console-log" tabindex="-1"><a class="header-anchor" href="#\u614E\u7528-console-log" aria-hidden="true">#</a> \u614E\u7528 console.log</h2><p>\u56E0 console.log \u5927\u91CF\u4F7F\u7528\u4F1A\u6709\u6027\u80FD\u95EE\u9898\uFF0C\u6240\u4EE5\u5728\u975E webpack \u9879\u76EE\u4E2D\u8C28\u614E\u4F7F\u7528 log \u529F\u80FD</p>`,32);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};
