import{_ as s,e as a,k as e,o as i}from"./app-CY03Lsxp.js";const l={};function p(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="match-匹配" tabindex="-1"><a class="header-anchor" href="#match-匹配"><span>match 匹配</span></a></h1><p>Rust 通过 <code>match</code> 关键字来提供模式匹配，和 C 语言的 <code>switch</code> 用法类似。第一个匹配分支会被比对，并且所有可能的值都必须被覆盖。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let number = 13;</span></span>
<span class="line"><span>    // 试一试 ^ 将不同的值赋给 \`number\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;Tell me about {}&quot;, number);</span></span>
<span class="line"><span>    match number {</span></span>
<span class="line"><span>        // 匹配单个值</span></span>
<span class="line"><span>        1 =&gt; println!(&quot;One!&quot;),</span></span>
<span class="line"><span>        // 匹配多个值</span></span>
<span class="line"><span>        2 | 3 | 5 | 7 | 11 =&gt; println!(&quot;This is a prime&quot;),</span></span>
<span class="line"><span>        // 试一试 ^ 将 13 添加到质数列表中</span></span>
<span class="line"><span>        // 匹配一个闭区间范围</span></span>
<span class="line"><span>        13..=19 =&gt; println!(&quot;A teen&quot;),</span></span>
<span class="line"><span>        // 处理其他情况</span></span>
<span class="line"><span>        _ =&gt; println!(&quot;Ain&#39;t special&quot;),</span></span>
<span class="line"><span>        // 试一试 ^ 注释掉这个总括性的分支</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let boolean = true;</span></span>
<span class="line"><span>    // match 也是一个表达式</span></span>
<span class="line"><span>    let binary = match boolean {</span></span>
<span class="line"><span>        // match 分支必须覆盖所有可能的值</span></span>
<span class="line"><span>        false =&gt; 0,</span></span>
<span class="line"><span>        true =&gt; 1,</span></span>
<span class="line"><span>        // 试一试 ^ 将其中一条分支注释掉</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;{} -&gt; {}&quot;, boolean, binary);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const d=s(l,[["render",p],["__file","match.html.vue"]]),m=JSON.parse('{"path":"/flow_control/match.html","title":"match 匹配","lang":"zh-CN","frontmatter":{"description":"match 匹配 Rust 通过 match 关键字来提供模式匹配，和 C 语言的 switch 用法类似。第一个匹配分支会被比对，并且所有可能的值都必须被覆盖。","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/flow_control/match.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"match 匹配"}],["meta",{"property":"og:description","content":"match 匹配 Rust 通过 match 关键字来提供模式匹配，和 C 语言的 switch 用法类似。第一个匹配分支会被比对，并且所有可能的值都必须被覆盖。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"match 匹配\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.7,"words":210},"filePathRelative":"flow_control/match.md","excerpt":"\\n<p>Rust 通过 <code>match</code> 关键字来提供模式匹配，和 C 语言的 <code>switch</code> 用法类似。第一个匹配分支会被比对，并且所有可能的值都必须被覆盖。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    let number = 13;</span></span>\\n<span class=\\"line\\"><span>    // 试一试 ^ 将不同的值赋给 `number`</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"Tell me about {}\\", number);</span></span>\\n<span class=\\"line\\"><span>    match number {</span></span>\\n<span class=\\"line\\"><span>        // 匹配单个值</span></span>\\n<span class=\\"line\\"><span>        1 =&gt; println!(\\"One!\\"),</span></span>\\n<span class=\\"line\\"><span>        // 匹配多个值</span></span>\\n<span class=\\"line\\"><span>        2 | 3 | 5 | 7 | 11 =&gt; println!(\\"This is a prime\\"),</span></span>\\n<span class=\\"line\\"><span>        // 试一试 ^ 将 13 添加到质数列表中</span></span>\\n<span class=\\"line\\"><span>        // 匹配一个闭区间范围</span></span>\\n<span class=\\"line\\"><span>        13..=19 =&gt; println!(\\"A teen\\"),</span></span>\\n<span class=\\"line\\"><span>        // 处理其他情况</span></span>\\n<span class=\\"line\\"><span>        _ =&gt; println!(\\"Ain\'t special\\"),</span></span>\\n<span class=\\"line\\"><span>        // 试一试 ^ 注释掉这个总括性的分支</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    let boolean = true;</span></span>\\n<span class=\\"line\\"><span>    // match 也是一个表达式</span></span>\\n<span class=\\"line\\"><span>    let binary = match boolean {</span></span>\\n<span class=\\"line\\"><span>        // match 分支必须覆盖所有可能的值</span></span>\\n<span class=\\"line\\"><span>        false =&gt; 0,</span></span>\\n<span class=\\"line\\"><span>        true =&gt; 1,</span></span>\\n<span class=\\"line\\"><span>        // 试一试 ^ 将其中一条分支注释掉</span></span>\\n<span class=\\"line\\"><span>    };</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"{} -&gt; {}\\", boolean, binary);</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"},{"title":"enum","link":"custom_types/enum.html"},{"title":"enum_use","link":"custom_types/enum/enum_use.html"}],"localMap":{"nodes":[{"id":"flow_control/match.md","value":{"title":"match","path":"flow_control/match.md","outlink":[],"backlink":["SUMMARY.md","custom_types/enum.md","custom_types/enum/enum_use.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}},{"id":"custom_types/enum.md","value":{"title":"enum","path":"custom_types/enum.md","outlink":[],"backlink":[]}},{"id":"custom_types/enum/enum_use.md","value":{"title":"enum_use","path":"custom_types/enum/enum_use.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"flow_control/match.md"},{"source":"custom_types/enum.md","target":"flow_control/match.md"},{"source":"custom_types/enum/enum_use.md","target":"flow_control/match.md"}]}}}');export{d as comp,m as data};
