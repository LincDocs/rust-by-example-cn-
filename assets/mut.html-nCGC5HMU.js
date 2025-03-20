import{_ as s,e as i,k as a,o as e}from"./app-CY03Lsxp.js";const l={};function t(p,n){return e(),i("div",null,n[0]||(n[0]=[a(`<h1 id="可变变量" tabindex="-1"><a class="header-anchor" href="#可变变量"><span>可变变量</span></a></h1><p>变量绑定默认是不可变的（immutable），但加上 <code>mut</code> 修饰语后变量就可以改变。</p><div class="language-rust,editable,ignore,mdbook-runnable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable,ignore,mdbook-runnable" data-title="rust,editable,ignore,mdbook-runnable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let _immutable_binding = 1;</span></span>
<span class="line"><span>    let mut mutable_binding = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;Before mutation: {}&quot;, mutable_binding);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 正确代码</span></span>
<span class="line"><span>    mutable_binding += 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;After mutation: {}&quot;, mutable_binding);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 错误！</span></span>
<span class="line"><span>    _immutable_binding += 1;</span></span>
<span class="line"><span>    // 改正 ^ 将此行注释掉</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器会给出关于变量可变性的详细诊断信息。</p>`,4)]))}const r=s(l,[["render",t],["__file","mut.html.vue"]]),m=JSON.parse('{"path":"/variable_bindings/mut.html","title":"可变变量","lang":"zh-CN","frontmatter":{"description":"可变变量 变量绑定默认是不可变的（immutable），但加上 mut 修饰语后变量就可以改变。 编译器会给出关于变量可变性的详细诊断信息。","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/variable_bindings/mut.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"可变变量"}],["meta",{"property":"og:description","content":"可变变量 变量绑定默认是不可变的（immutable），但加上 mut 修饰语后变量就可以改变。 编译器会给出关于变量可变性的详细诊断信息。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"可变变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"variable_bindings/mut.md","excerpt":"\\n<p>变量绑定默认是不可变的（immutable），但加上 <code>mut</code> 修饰语后变量就可以改变。</p>\\n<div class=\\"language-rust,editable,ignore,mdbook-runnable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable,ignore,mdbook-runnable\\" data-title=\\"rust,editable,ignore,mdbook-runnable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    let _immutable_binding = 1;</span></span>\\n<span class=\\"line\\"><span>    let mut mutable_binding = 1;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"Before mutation: {}\\", mutable_binding);</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 正确代码</span></span>\\n<span class=\\"line\\"><span>    mutable_binding += 1;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"After mutation: {}\\", mutable_binding);</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 错误！</span></span>\\n<span class=\\"line\\"><span>    _immutable_binding += 1;</span></span>\\n<span class=\\"line\\"><span>    // 改正 ^ 将此行注释掉</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"},{"title":"primitives","link":"primitives.html"}],"localMap":{"nodes":[{"id":"variable_bindings/mut.md","value":{"title":"mut","path":"variable_bindings/mut.md","outlink":[],"backlink":["SUMMARY.md","primitives.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}},{"id":"primitives.md","value":{"title":"primitives","path":"primitives.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"variable_bindings/mut.md"},{"source":"primitives.md","target":"variable_bindings/mut.md"}]}}}');export{r as comp,m as data};
