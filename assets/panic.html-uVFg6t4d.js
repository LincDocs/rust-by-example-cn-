import{_ as a,e as s,k as e,o as i}from"./app-CVSWwIkE.js";const l={};function p(t,n){return i(),s("div",null,n[0]||(n[0]=[e(`<h1 id="panic" tabindex="-1"><a class="header-anchor" href="#panic"><span><code>panic</code></span></a></h1><p>我们将要看到的最简单的错误处理机制就是 <code>panic</code>。它会打印一个错误消息，开始回退（unwind）任务，且通常会退出程序。这里我们显式地在错误条件下调用 <code>panic</code>：</p><div class="language-rust,editable,ignore,mdbook-runnable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable,ignore,mdbook-runnable" data-title="rust,editable,ignore,mdbook-runnable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn give_princess(gift: &amp;str) {</span></span>
<span class="line"><span>    // 公主讨厌蛇，所以如果公主表示厌恶的话我们要停止！</span></span>
<span class="line"><span>    if gift == &quot;snake&quot; { panic!(&quot;AAAaaaaa!!!!&quot;); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;I love {}s!!!!!&quot;, gift);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    give_princess(&quot;teddy bear&quot;);</span></span>
<span class="line"><span>    give_princess(&quot;snake&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=a(l,[["render",p],["__file","panic.html.vue"]]),d=JSON.parse('{"path":"/error/panic.html","title":"panic","lang":"zh-CN","frontmatter":{"description":"panic 我们将要看到的最简单的错误处理机制就是 panic。它会打印一个错误消息，开始回退（unwind）任务，且通常会退出程序。这里我们显式地在错误条件下调用 panic：","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/error/panic.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"panic"}],["meta",{"property":"og:description","content":"panic 我们将要看到的最简单的错误处理机制就是 panic。它会打印一个错误消息，开始回退（unwind）任务，且通常会退出程序。这里我们显式地在错误条件下调用 panic："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"panic\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.37,"words":111},"filePathRelative":"error/panic.md","excerpt":"\\n<p>我们将要看到的最简单的错误处理机制就是 <code>panic</code>。它会打印一个错误消息，开始回退（unwind）任务，且通常会退出程序。这里我们显式地在错误条件下调用 <code>panic</code>：</p>\\n<div class=\\"language-rust,editable,ignore,mdbook-runnable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable,ignore,mdbook-runnable\\" data-title=\\"rust,editable,ignore,mdbook-runnable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>fn give_princess(gift: &amp;str) {</span></span>\\n<span class=\\"line\\"><span>    // 公主讨厌蛇，所以如果公主表示厌恶的话我们要停止！</span></span>\\n<span class=\\"line\\"><span>    if gift == \\"snake\\" { panic!(\\"AAAaaaaa!!!!\\"); }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"I love {}s!!!!!\\", gift);</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    give_princess(\\"teddy bear\\");</span></span>\\n<span class=\\"line\\"><span>    give_princess(\\"snake\\");</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"error/panic.md","value":{"title":"panic","path":"error/panic.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"error/panic.md"}]}}}');export{r as comp,d as data};
