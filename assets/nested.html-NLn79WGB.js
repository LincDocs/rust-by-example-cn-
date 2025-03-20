import{_ as s,e,k as a,o as i}from"./app-CY03Lsxp.js";const l={};function p(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="嵌套循环和标签" tabindex="-1"><a class="header-anchor" href="#嵌套循环和标签"><span>嵌套循环和标签</span></a></h1><p>在处理嵌套循环的时候可以 <code>break</code> 或 <code>continue</code> 外层循环。在这类情形中，循环必须用一些 <code>&#39;label</code>（标签）来注明，并且标签必须传递给 <code>break</code>/<code>continue</code> 语句。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#![allow(unreachable_code)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    &#39;outer: loop {</span></span>
<span class="line"><span>        println!(&quot;Entered the outer loop&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &#39;inner: loop {</span></span>
<span class="line"><span>            println!(&quot;Entered the inner loop&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 这只是中断内部的循环</span></span>
<span class="line"><span>            //break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 这会中断外层循环</span></span>
<span class="line"><span>            break &#39;outer;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;This point will never be reached&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;Exited the outer loop&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const c=s(l,[["render",p],["__file","nested.html.vue"]]),o=JSON.parse(`{"path":"/flow_control/loop/nested.html","title":"嵌套循环和标签","lang":"zh-CN","frontmatter":{"description":"嵌套循环和标签 在处理嵌套循环的时候可以 break 或 continue 外层循环。在这类情形中，循环必须用一些 'label（标签）来注明，并且标签必须传递给 break/continue 语句。","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/flow_control/loop/nested.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"嵌套循环和标签"}],["meta",{"property":"og:description","content":"嵌套循环和标签 在处理嵌套循环的时候可以 break 或 continue 外层循环。在这类情形中，循环必须用一些 'label（标签）来注明，并且标签必须传递给 break/continue 语句。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"嵌套循环和标签\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.38,"words":114},"filePathRelative":"flow_control/loop/nested.md","excerpt":"\\n<p>在处理嵌套循环的时候可以 <code>break</code> 或 <code>continue</code> 外层循环。在这类情形中，循环必须用一些 <code>'label</code>（标签）来注明，并且标签必须传递给 <code>break</code>/<code>continue</code> 语句。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>#![allow(unreachable_code)]</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    'outer: loop {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"Entered the outer loop\\");</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>        'inner: loop {</span></span>\\n<span class=\\"line\\"><span>            println!(\\"Entered the inner loop\\");</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>            // 这只是中断内部的循环</span></span>\\n<span class=\\"line\\"><span>            //break;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>            // 这会中断外层循环</span></span>\\n<span class=\\"line\\"><span>            break 'outer;</span></span>\\n<span class=\\"line\\"><span>        }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>        println!(\\"This point will never be reached\\");</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"Exited the outer loop\\");</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"flow_control/loop/nested.md","value":{"title":"nested","path":"flow_control/loop/nested.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"flow_control/loop/nested.md"}]}}}`);export{c as comp,o as data};
