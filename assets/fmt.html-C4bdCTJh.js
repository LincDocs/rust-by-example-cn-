import{_ as s,e as a,k as e,o as i}from"./app-CVSWwIkE.js";const l={};function t(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="格式化" tabindex="-1"><a class="header-anchor" href="#格式化"><span>格式化</span></a></h1><p>我们已经看到，格式化的方式是通过<strong>格式字符串</strong>来指定的：</p><ul><li><code>format!(&quot;{}&quot;, foo)</code> -&gt; <code>&quot;3735928559&quot;</code></li><li><code>format!(&quot;0x{:X}&quot;, foo)</code> -&gt;<br><a href="https://en.wikipedia.org/wiki/Deadbeef#Magic_debug_values" target="_blank" rel="noopener noreferrer"><code>&quot;0xDEADBEEF&quot;</code></a></li><li><code>format!(&quot;0o{:o}&quot;, foo)</code> -&gt; <code>&quot;0o33653337357&quot;</code></li></ul><p>根据使用的<strong>参数类型</strong>是 <code>X</code>、<code>o</code> 还是<strong>未指定</strong>，同样的变量（<code>foo</code>）能够格式化成不同的形式。</p><p>这个格式化的功能是通过 trait 实现的，每种参数类型都对应一种 trait。最常见的格式化 trait 就是 <code>Display</code>，它可以处理参数类型为未指定的情况，比如 <code>{}</code>。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>use std::fmt::{self, Formatter, Display};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct City {</span></span>
<span class="line"><span>    name: &amp;&#39;static str,</span></span>
<span class="line"><span>    // 纬度</span></span>
<span class="line"><span>    lat: f32,</span></span>
<span class="line"><span>    // 经度</span></span>
<span class="line"><span>    lon: f32,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Display for City {</span></span>
<span class="line"><span>    // \`f\` 是一个缓冲区（buffer），此方法必须将格式化后的字符串写入其中</span></span>
<span class="line"><span>    fn fmt(&amp;self, f: &amp;mut Formatter) -&gt; fmt::Result {</span></span>
<span class="line"><span>        let lat_c = if self.lat &gt;= 0.0 { &#39;N&#39; } else { &#39;S&#39; };</span></span>
<span class="line"><span>        let lon_c = if self.lon &gt;= 0.0 { &#39;E&#39; } else { &#39;W&#39; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // \`write!\` 和 \`format!\` 类似，但它会将格式化后的字符串写入</span></span>
<span class="line"><span>        // 一个缓冲区（即第一个参数f）中。</span></span>
<span class="line"><span>        write!(f, &quot;{}: {:.3}°{} {:.3}°{}&quot;,</span></span>
<span class="line"><span>               self.name, self.lat.abs(), lat_c, self.lon.abs(), lon_c)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[derive(Debug)]</span></span>
<span class="line"><span>struct Color {</span></span>
<span class="line"><span>    red: u8,</span></span>
<span class="line"><span>    green: u8,</span></span>
<span class="line"><span>    blue: u8,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    for city in [</span></span>
<span class="line"><span>        City { name: &quot;Dublin&quot;, lat: 53.347778, lon: -6.259722 },</span></span>
<span class="line"><span>        City { name: &quot;Oslo&quot;, lat: 59.95, lon: 10.75 },</span></span>
<span class="line"><span>        City { name: &quot;Vancouver&quot;, lat: 49.25, lon: -123.1 },</span></span>
<span class="line"><span>    ].iter() {</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, *city);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for color in [</span></span>
<span class="line"><span>        Color { red: 128, green: 255, blue: 90 },</span></span>
<span class="line"><span>        Color { red: 0, green: 3, blue: 254 },</span></span>
<span class="line"><span>        Color { red: 0, green: 0, blue: 0 },</span></span>
<span class="line"><span>    ].iter() {</span></span>
<span class="line"><span>        // 在添加了针对 fmt::Display 的实现后，请改用 {} 检验效果。</span></span>
<span class="line"><span>        println!(&quot;{:?}&quot;, *color)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <a href="https://rustwiki.org/zh-CN/std/fmt/" target="_blank" rel="noopener noreferrer"><code>fmt::fmt</code></a> 文档中可以查看<a href="https://rustwiki.org/zh-CN/std/fmt/#formatting-traits" target="_blank" rel="noopener noreferrer">格式化 traits 一览表</a>和它们的参数类型。</p><h3 id="动手试一试" tabindex="-1"><a class="header-anchor" href="#动手试一试"><span>动手试一试</span></a></h3><p>为上面的 <code>Color</code> 结构体实现 <code>fmt::Display</code>，应得到如下的输出结果：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>RGB (128, 255, 90) 0x80FF5A</span></span>
<span class="line"><span>RGB (0, 3, 254) 0x0003FE</span></span>
<span class="line"><span>RGB (0, 0, 0) 0x000000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果感到疑惑，可看下面两条提示：</p><ul><li>你<a href="https://rustwiki.org/zh-CN/std/fmt/#argument-types" target="_blank" rel="noopener noreferrer">可能需要多次列出每个颜色</a>，</li><li>你可以使用 <code>:02</code> <a href="https://rustwiki.org/zh-CN/std/fmt/#width" target="_blank" rel="noopener noreferrer">补零使位数为 2 位</a>。</li></ul><h3 id="参见" tabindex="-1"><a class="header-anchor" href="#参见"><span>参见：</span></a></h3><p><a href="https://rustwiki.org/zh-CN/std/fmt/" target="_blank" rel="noopener noreferrer"><code>std::fmt</code></a></p>`,14)]))}const r=s(l,[["render",t],["__file","fmt.html.vue"]]),d=JSON.parse('{"path":"/hello/print/fmt.html","title":"格式化","lang":"zh-CN","frontmatter":{"description":"格式化 我们已经看到，格式化的方式是通过格式字符串来指定的： format!(\\"{}\\", foo) -> \\"3735928559\\" format!(\\"0x{:X}\\", foo) -> \\"0xDEADBEEF\\" format!(\\"0o{:o}\\", foo) -> \\"0o33653337357\\" 根据使用的参数类型是 X、o 还是未指定，同样的变量（foo...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/hello/print/fmt.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"格式化"}],["meta",{"property":"og:description","content":"格式化 我们已经看到，格式化的方式是通过格式字符串来指定的： format!(\\"{}\\", foo) -> \\"3735928559\\" format!(\\"0x{:X}\\", foo) -> \\"0xDEADBEEF\\" format!(\\"0o{:o}\\", foo) -> \\"0o33653337357\\" 根据使用的参数类型是 X、o 还是未指定，同样的变量（foo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"格式化\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"hello/print/fmt.md","excerpt":"\\n<p>我们已经看到，格式化的方式是通过<strong>格式字符串</strong>来指定的：</p>\\n<ul>\\n<li><code>format!(\\"{}\\", foo)</code> -&gt; <code>\\"3735928559\\"</code></li>\\n<li><code>format!(\\"0x{:X}\\", foo)</code> -&gt;<br>\\n<a href=\\"https://en.wikipedia.org/wiki/Deadbeef#Magic_debug_values\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>\\"0xDEADBEEF\\"</code></a></li>\\n<li><code>format!(\\"0o{:o}\\", foo)</code> -&gt; <code>\\"0o33653337357\\"</code></li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"hello/print/fmt.md","value":{"title":"fmt","path":"hello/print/fmt.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"hello/print/fmt.md"}]}}}');export{r as comp,d as data};
