import{_ as n,c as s,o as a,b as p}from"./app.eca0e492.js";const m='{"title":"\u914D\u7F6E\u53C2\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\u7F00","slug":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\u7F00"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7C7B\u540D\u524D\u7F00","slug":"\u81EA\u5B9A\u4E49\u7C7B\u540D\u524D\u7F00"}],"relativePath":"en/guide/base/install.md","lastUpdated":1639994677519}',t={},o=p(`<h1 id="\u914D\u7F6E\u53C2\u6570" tabindex="-1">\u914D\u7F6E\u53C2\u6570 <a class="header-anchor" href="#\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a></h1><p>\u5F53\u6211\u4EEC\u4F7F\u7528<code>Vue.use</code>\u5B89\u88C5\u7EC4\u4EF6\u65F6\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u53EF\u9009\u53C2\u6570\u8BBE\u7F6E\u7EC4\u4EF6\u5E93\u7684\u4E00\u4E9B\u914D\u7F6E\u3002</p><blockquote><p>\u5982\u679C\u6211\u4EEC\u6CA1\u6709\u5168\u5C40\u5F15\u5165,\u5219\u53EF\u4EE5\u901A\u8FC7<code>config-provider</code>\u7EC4\u4EF6\u63D0\u4F9B\u7684\u914D\u7F6E\u6765\u8BBE\u7F6E(\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\u7F00\u9664\u5916)\u3002Config Provider \u4F7F\u7528\u4E86 <a href="https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity" target="_blank" rel="noopener noreferrer">Vue \u7684 provide/inject \u7279\u6027</a></p></blockquote><h2 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\u7F00" tabindex="-1">\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\u7F00 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\u7F00" aria-hidden="true">#</a></h2><p>\u5728\u5168\u5C40\u5F15\u5165\u65F6\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\u7F00\u6765\u89E3\u51B3\u7EC4\u4EF6\u540D\u79F0\u51B2\u7A81\u7684\u95EE\u9898\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;@/App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;v-ui-template&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  componentPrefix<span class="token operator">:</span> <span class="token string">&#39;K&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728\u5F15\u5165\u7684\u7EC4\u4EF6\u8F83\u591A\u65F6\u53EF\u4EE5\u4F7F\u7528\u66F4\u65B9\u4FBF\u7684<code>create</code>\u51FD\u6570\u6765\u521B\u5EFA\u5E94\u7528\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;@/App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Label<span class="token punctuation">,</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;v-ui-template&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Button<span class="token punctuation">,</span> Label<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  componentPrefix<span class="token operator">:</span> <span class="token string">&#39;K&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u5728\u5176\u4ED6\u5730\u65B9\u5C31\u8FD9\u6837\u4F7F\u7528</p><div class="language-html"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>k-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlerClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>k-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>k-label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>k-label</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49\u7C7B\u540D\u524D\u7F00" tabindex="-1">\u81EA\u5B9A\u4E49\u7C7B\u540D\u524D\u7F00 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7C7B\u540D\u524D\u7F00" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49<code>class</code>\u524D\u7F00\u6765\u89E3\u51B3\u9879\u76EE\u6837\u5F0F\u51B2\u7A81\u7684\u95EE\u9898\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;@/App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;v-ui-template&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  componentPrefix<span class="token operator">:</span> <span class="token string">&#39;K&#39;</span><span class="token punctuation">,</span>
  clsPrefix<span class="token operator">:</span> <span class="token string">&#39;k-&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7531\u4E8E\u524D\u7F00\u53D8\u66F4\uFF0C\u4F60\u9700\u8981\u76F4\u63A5\u5F15\u5165\u5E76\u4FEE\u6539\u539F\u59CB<code>scss</code>\u6587\u4EF6\u3002</p><div class="language-scss"><pre><code><span class="token keyword">@use</span> <span class="token string">&#39;v-ui-template/src/style/_variables.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$cls-prefix</span></span><span class="token punctuation">:</span> <span class="token string">&#39;k-&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@use</span> <span class="token string">&#39;v-ui-template/src/style/index.scss&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,15),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{m as __pageData,f as default};
