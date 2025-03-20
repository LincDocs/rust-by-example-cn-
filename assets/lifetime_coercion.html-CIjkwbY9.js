import{_ as n,e as a,k as i,o as e}from"./app-CY03Lsxp.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="强制转换" tabindex="-1"><a class="header-anchor" href="#强制转换"><span>强制转换</span></a></h1><p>一个较长的生命周期可以强制转成一个较短的生命周期，使它在一个通常情况下不能工作的作用域内也能正常工作。强制转换可由编译器隐式地推导并执行，也可以通过声明不同的生命周期的形式实现。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 在这里，Rust 推导了一个尽可能短的生命周期。</span></span>
<span class="line"><span>// 然后这两个引用都被强制转成这个生命周期。</span></span>
<span class="line"><span>fn multiply&lt;&#39;a&gt;(first: &amp;&#39;a i32, second: &amp;&#39;a i32) -&gt; i32 {</span></span>
<span class="line"><span>    first * second</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// \`&lt;&#39;a: &#39;b, &#39;b&gt;\` 读作生命周期 \`&#39;a\` 至少和 \`&#39;b\` 一样长。</span></span>
<span class="line"><span>// 在这里我们我们接受了一个 \`&amp;&#39;a i32\` 类型并返回一个 \`&amp;&#39;b i32\` 类型，这是</span></span>
<span class="line"><span>// 强制转换得到的结果。</span></span>
<span class="line"><span>fn choose_first&lt;&#39;a: &#39;b, &#39;b&gt;(first: &amp;&#39;a i32, _: &amp;&#39;b i32) -&gt; &amp;&#39;b i32 {</span></span>
<span class="line"><span>    first</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let first = 2; // 较长的生命周期</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        let second = 3; // 较短的生命周期</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;The product is {}&quot;, multiply(&amp;first, &amp;second));</span></span>
<span class="line"><span>        println!(&quot;{} is the first&quot;, choose_first(&amp;first, &amp;second));</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const d=n(l,[["render",p],["__file","lifetime_coercion.html.vue"]]),r=JSON.parse(`{"path":"/scope/lifetime/lifetime_coercion.html","title":"强制转换","lang":"zh-CN","frontmatter":{"description":"强制转换 一个较长的生命周期可以强制转成一个较短的生命周期，使它在一个通常情况下不能工作的作用域内也能正常工作。强制转换可由编译器隐式地推导并执行，也可以通过声明不同的生命周期的形式实现。","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/scope/lifetime/lifetime_coercion.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"强制转换"}],["meta",{"property":"og:description","content":"强制转换 一个较长的生命周期可以强制转成一个较短的生命周期，使它在一个通常情况下不能工作的作用域内也能正常工作。强制转换可由编译器隐式地推导并执行，也可以通过声明不同的生命周期的形式实现。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"强制转换\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"scope/lifetime/lifetime_coercion.md","excerpt":"\\n<p>一个较长的生命周期可以强制转成一个较短的生命周期，使它在一个通常情况下不能工作的作用域内也能正常工作。强制转换可由编译器隐式地推导并执行，也可以通过声明不同的生命周期的形式实现。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>// 在这里，Rust 推导了一个尽可能短的生命周期。</span></span>\\n<span class=\\"line\\"><span>// 然后这两个引用都被强制转成这个生命周期。</span></span>\\n<span class=\\"line\\"><span>fn multiply&lt;'a&gt;(first: &amp;'a i32, second: &amp;'a i32) -&gt; i32 {</span></span>\\n<span class=\\"line\\"><span>    first * second</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// \`&lt;'a: 'b, 'b&gt;\` 读作生命周期 \`'a\` 至少和 \`'b\` 一样长。</span></span>\\n<span class=\\"line\\"><span>// 在这里我们我们接受了一个 \`&amp;'a i32\` 类型并返回一个 \`&amp;'b i32\` 类型，这是</span></span>\\n<span class=\\"line\\"><span>// 强制转换得到的结果。</span></span>\\n<span class=\\"line\\"><span>fn choose_first&lt;'a: 'b, 'b&gt;(first: &amp;'a i32, _: &amp;'b i32) -&gt; &amp;'b i32 {</span></span>\\n<span class=\\"line\\"><span>    first</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    let first = 2; // 较长的生命周期</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    {</span></span>\\n<span class=\\"line\\"><span>        let second = 3; // 较短的生命周期</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>        println!(\\"The product is {}\\", multiply(&amp;first, &amp;second));</span></span>\\n<span class=\\"line\\"><span>        println!(\\"{} is the first\\", choose_first(&amp;first, &amp;second));</span></span>\\n<span class=\\"line\\"><span>    };</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"scope/lifetime/lifetime_coercion.md","value":{"title":"lifetime_coercion","path":"scope/lifetime/lifetime_coercion.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"scope/lifetime/lifetime_coercion.md"}]}}}`);export{d as comp,r as data};
