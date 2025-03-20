import{_ as e,e as i,k as l,f as s,g as t,h as p,r,o as d}from"./app-CY03Lsxp.js";const c={};function o(m,n){const a=r("RouteLink");return d(),i("div",null,[n[1]||(n[1]=l(`<h1 id="trait" tabindex="-1"><a class="header-anchor" href="#trait"><span>trait</span></a></h1><p>trait 方法中生命期的标注基本上与函数类似。注意，<code>impl</code> 也可能有生命周期的标注。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 带有生命周期标注的结构体。</span></span>
<span class="line"><span>#[derive(Debug)]</span></span>
<span class="line"><span> struct Borrowed&lt;&#39;a&gt; {</span></span>
<span class="line"><span>     x: &amp;&#39;a i32,</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 给 impl 标注生命周期。</span></span>
<span class="line"><span>impl&lt;&#39;a&gt; Default for Borrowed&lt;&#39;a&gt; {</span></span>
<span class="line"><span>    fn default() -&gt; Self {</span></span>
<span class="line"><span>        Self {</span></span>
<span class="line"><span>            x: &amp;10,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let b: Borrowed = Default::default();</span></span>
<span class="line"><span>    println!(&quot;b is {:?}&quot;, b);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参见" tabindex="-1"><a class="header-anchor" href="#参见"><span>参见：</span></a></h3>`,4)),s("p",null,[t(a,{to:"/trait.html"},{default:p(()=>n[0]||(n[0]=[s("code",null,"trait",-1)])),_:1})])])}const v=e(c,[["render",o],["__file","trait.html.vue"]]),b=JSON.parse(`{"path":"/scope/lifetime/trait.html","title":"trait","lang":"zh-CN","frontmatter":{"description":"trait trait 方法中生命期的标注基本上与函数类似。注意，impl 也可能有生命周期的标注。 参见：","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/scope/lifetime/trait.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"trait"}],["meta",{"property":"og:description","content":"trait trait 方法中生命期的标注基本上与函数类似。注意，impl 也可能有生命周期的标注。 参见："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"trait\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"scope/lifetime/trait.md","excerpt":"\\n<p>trait 方法中生命期的标注基本上与函数类似。注意，<code>impl</code> 也可能有生命周期的标注。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>// 带有生命周期标注的结构体。</span></span>\\n<span class=\\"line\\"><span>#[derive(Debug)]</span></span>\\n<span class=\\"line\\"><span> struct Borrowed&lt;'a&gt; {</span></span>\\n<span class=\\"line\\"><span>     x: &amp;'a i32,</span></span>\\n<span class=\\"line\\"><span> }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 给 impl 标注生命周期。</span></span>\\n<span class=\\"line\\"><span>impl&lt;'a&gt; Default for Borrowed&lt;'a&gt; {</span></span>\\n<span class=\\"line\\"><span>    fn default() -&gt; Self {</span></span>\\n<span class=\\"line\\"><span>        Self {</span></span>\\n<span class=\\"line\\"><span>            x: &amp;10,</span></span>\\n<span class=\\"line\\"><span>        }</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    let b: Borrowed = Default::default();</span></span>\\n<span class=\\"line\\"><span>    println!(\\"b is {:?}\\", b);</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[{"title":"trait","link":"trait.html"}],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"scope/lifetime/trait.md","value":{"title":"trait","path":"scope/lifetime/trait.md","outlink":["trait.md"],"backlink":["SUMMARY.md"]}},{"id":"trait.md","value":{"title":"trait","path":"trait.md","outlink":[],"backlink":[]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"scope/lifetime/trait.md","target":"trait.md"},{"source":"SUMMARY.md","target":"scope/lifetime/trait.md"}]}}}`);export{v as comp,b as data};
