import{_ as i,e as l,k as t,f as n,i as a,g as p,h as r,r as d,o as c}from"./app-CVSWwIkE.js";const u={};function m(o,s){const e=d("RouteLink");return c(),l("div",null,[s[5]||(s[5]=t(`<h1 id="测试实例-空约束" tabindex="-1"><a class="header-anchor" href="#测试实例-空约束"><span>测试实例：空约束</span></a></h1><p>约束的工作机制会产生这样的效果：即使一个 <code>trait</code> 不包含任何功能，你仍然可以用它作为约束。标准库中的 <code>Eq</code> 和 <code>Ord</code> 就是这样的 <code>trait</code>。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>struct Cardinal;</span></span>
<span class="line"><span>struct BlueJay;</span></span>
<span class="line"><span>struct Turkey;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>trait Red {}</span></span>
<span class="line"><span>trait Blue {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Red for Cardinal {}</span></span>
<span class="line"><span>impl Blue for BlueJay {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这些函数只对实现了相应的 trait 的类型有效。</span></span>
<span class="line"><span>// 事实上这些 trait 内部是空的，但这没有关系。</span></span>
<span class="line"><span>fn red&lt;T: Red&gt;(_: &amp;T)   -&gt; &amp;&#39;static str { &quot;red&quot; }</span></span>
<span class="line"><span>fn blue&lt;T: Blue&gt;(_: &amp;T) -&gt; &amp;&#39;static str { &quot;blue&quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let cardinal = Cardinal;</span></span>
<span class="line"><span>    let blue_jay = BlueJay;</span></span>
<span class="line"><span>    let _turkey   = Turkey;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 由于约束，\`red()\` 不能作用于 blue_jay （蓝松鸟），反过来也一样。</span></span>
<span class="line"><span>    println!(&quot;A cardinal is {}&quot;, red(&amp;cardinal));</span></span>
<span class="line"><span>    println!(&quot;A blue jay is {}&quot;, blue(&amp;blue_jay));</span></span>
<span class="line"><span>    //println!(&quot;A turkey is {}&quot;, red(&amp;_turkey));</span></span>
<span class="line"><span>    // ^ 试一试：去掉此行注释。</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参见" tabindex="-1"><a class="header-anchor" href="#参见"><span>参见：</span></a></h3>`,4)),n("p",null,[s[1]||(s[1]=n("a",{href:"https://rustwiki.org/zh-CN/std/cmp/trait.Eq.html",target:"_blank",rel:"noopener noreferrer"},[n("code",null,"std::cmp::Eq")],-1)),s[2]||(s[2]=a(", ")),s[3]||(s[3]=n("a",{href:"https://rustwiki.org/zh-CN/std/cmp/trait.Ord.html",target:"_blank",rel:"noopener noreferrer"},[n("code",null,"std::cmp::Ord")],-1)),s[4]||(s[4]=a(", 和 ")),p(e,{to:"/trait.html"},{default:r(()=>s[0]||(s[0]=[n("code",null,"trait",-1)])),_:1})])])}const b=i(u,[["render",m],["__file","testcase_empty.html.vue"]]),h=JSON.parse('{"path":"/generics/bounds/testcase_empty.html","title":"测试实例：空约束","lang":"zh-CN","frontmatter":{"description":"测试实例：空约束 约束的工作机制会产生这样的效果：即使一个 trait 不包含任何功能，你仍然可以用它作为约束。标准库中的 Eq 和 Ord 就是这样的 trait。 参见： std::cmp::Eq, std::cmp::Ord, 和","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/generics/bounds/testcase_empty.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"测试实例：空约束"}],["meta",{"property":"og:description","content":"测试实例：空约束 约束的工作机制会产生这样的效果：即使一个 trait 不包含任何功能，你仍然可以用它作为约束。标准库中的 Eq 和 Ord 就是这样的 trait。 参见： std::cmp::Eq, std::cmp::Ord, 和"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"测试实例：空约束\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.73,"words":218},"filePathRelative":"generics/bounds/testcase_empty.md","excerpt":"\\n<p>约束的工作机制会产生这样的效果：即使一个 <code>trait</code> 不包含任何功能，你仍然可以用它作为约束。标准库中的 <code>Eq</code> 和 <code>Ord</code> 就是这样的 <code>trait</code>。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>struct Cardinal;</span></span>\\n<span class=\\"line\\"><span>struct BlueJay;</span></span>\\n<span class=\\"line\\"><span>struct Turkey;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>trait Red {}</span></span>\\n<span class=\\"line\\"><span>trait Blue {}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>impl Red for Cardinal {}</span></span>\\n<span class=\\"line\\"><span>impl Blue for BlueJay {}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 这些函数只对实现了相应的 trait 的类型有效。</span></span>\\n<span class=\\"line\\"><span>// 事实上这些 trait 内部是空的，但这没有关系。</span></span>\\n<span class=\\"line\\"><span>fn red&lt;T: Red&gt;(_: &amp;T)   -&gt; &amp;\'static str { \\"red\\" }</span></span>\\n<span class=\\"line\\"><span>fn blue&lt;T: Blue&gt;(_: &amp;T) -&gt; &amp;\'static str { \\"blue\\" }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    let cardinal = Cardinal;</span></span>\\n<span class=\\"line\\"><span>    let blue_jay = BlueJay;</span></span>\\n<span class=\\"line\\"><span>    let _turkey   = Turkey;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 由于约束，`red()` 不能作用于 blue_jay （蓝松鸟），反过来也一样。</span></span>\\n<span class=\\"line\\"><span>    println!(\\"A cardinal is {}\\", red(&amp;cardinal));</span></span>\\n<span class=\\"line\\"><span>    println!(\\"A blue jay is {}\\", blue(&amp;blue_jay));</span></span>\\n<span class=\\"line\\"><span>    //println!(\\"A turkey is {}\\", red(&amp;_turkey));</span></span>\\n<span class=\\"line\\"><span>    // ^ 试一试：去掉此行注释。</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[{"title":"trait","link":"trait.html"}],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"generics/bounds/testcase_empty.md","value":{"title":"testcase_empty","path":"generics/bounds/testcase_empty.md","outlink":["trait.md"],"backlink":["SUMMARY.md"]}},{"id":"trait.md","value":{"title":"trait","path":"trait.md","outlink":[],"backlink":[]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"generics/bounds/testcase_empty.md","target":"trait.md"},{"source":"SUMMARY.md","target":"generics/bounds/testcase_empty.md"}]}}}');export{b as comp,h as data};
