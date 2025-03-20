import{_ as a,e,k as i,f as l,g as p,h as t,r as c,o as d,i as r}from"./app-CY03Lsxp.js";const m={};function u(o,n){const s=c("RouteLink");return d(),e("div",null,[n[1]||(n[1]=i(`<h1 id="c-风格用法" tabindex="-1"><a class="header-anchor" href="#c-风格用法"><span>C 风格用法</span></a></h1><p><code>enum</code> 也可以像 C 语言风格的枚举类型那样使用。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 该属性用于隐藏对未使用代码的警告。</span></span>
<span class="line"><span>#![allow(dead_code)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拥有隐式辨别值（implicit discriminator，从 0 开始）的 enum</span></span>
<span class="line"><span>enum Number {</span></span>
<span class="line"><span>    Zero,</span></span>
<span class="line"><span>    One,</span></span>
<span class="line"><span>    Two,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拥有显式辨别值（explicit discriminator）的 enum</span></span>
<span class="line"><span>enum Color {</span></span>
<span class="line"><span>    Red = 0xff0000,</span></span>
<span class="line"><span>    Green = 0x00ff00,</span></span>
<span class="line"><span>    Blue = 0x0000ff,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // \`enum\` 可以转成整型。</span></span>
<span class="line"><span>    println!(&quot;zero is {}&quot;, Number::Zero as i32);</span></span>
<span class="line"><span>    println!(&quot;one is {}&quot;, Number::One as i32);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;roses are #{:06x}&quot;, Color::Red as i32);</span></span>
<span class="line"><span>    println!(&quot;violets are #{:06x}&quot;, Color::Blue as i32);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考：</span></a></h3>`,4)),l("p",null,[p(s,{to:"/types/cast.html"},{default:t(()=>n[0]||(n[0]=[r("类型转换")])),_:1})])])}const b=a(m,[["render",u],["__file","c_like.html.vue"]]),h=JSON.parse('{"path":"/custom_types/enum/c_like.html","title":"C 风格用法","lang":"zh-CN","frontmatter":{"description":"C 风格用法 enum 也可以像 C 语言风格的枚举类型那样使用。 参考：","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/custom_types/enum/c_like.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"C 风格用法"}],["meta",{"property":"og:description","content":"C 风格用法 enum 也可以像 C 语言风格的枚举类型那样使用。 参考："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C 风格用法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.45,"words":135},"filePathRelative":"custom_types/enum/c_like.md","excerpt":"\\n<p><code>enum</code> 也可以像 C 语言风格的枚举类型那样使用。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>// 该属性用于隐藏对未使用代码的警告。</span></span>\\n<span class=\\"line\\"><span>#![allow(dead_code)]</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 拥有隐式辨别值（implicit discriminator，从 0 开始）的 enum</span></span>\\n<span class=\\"line\\"><span>enum Number {</span></span>\\n<span class=\\"line\\"><span>    Zero,</span></span>\\n<span class=\\"line\\"><span>    One,</span></span>\\n<span class=\\"line\\"><span>    Two,</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 拥有显式辨别值（explicit discriminator）的 enum</span></span>\\n<span class=\\"line\\"><span>enum Color {</span></span>\\n<span class=\\"line\\"><span>    Red = 0xff0000,</span></span>\\n<span class=\\"line\\"><span>    Green = 0x00ff00,</span></span>\\n<span class=\\"line\\"><span>    Blue = 0x0000ff,</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    // `enum` 可以转成整型。</span></span>\\n<span class=\\"line\\"><span>    println!(\\"zero is {}\\", Number::Zero as i32);</span></span>\\n<span class=\\"line\\"><span>    println!(\\"one is {}\\", Number::One as i32);</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"roses are #{:06x}\\", Color::Red as i32);</span></span>\\n<span class=\\"line\\"><span>    println!(\\"violets are #{:06x}\\", Color::Blue as i32);</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[{"title":"cast","link":"types/cast.html"}],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"custom_types/enum/c_like.md","value":{"title":"c_like","path":"custom_types/enum/c_like.md","outlink":["types/cast.md"],"backlink":["SUMMARY.md"]}},{"id":"types/cast.md","value":{"title":"cast","path":"types/cast.md","outlink":[],"backlink":[]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"custom_types/enum/c_like.md","target":"types/cast.md"},{"source":"SUMMARY.md","target":"custom_types/enum/c_like.md"}]}}}');export{b as comp,h as data};
