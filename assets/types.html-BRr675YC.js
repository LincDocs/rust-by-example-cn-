import{_ as i,e as n,k as a,o as e}from"./app-CVSWwIkE.js";const l={};function p(t,s){return e(),n("div",null,s[0]||(s[0]=[a(`<h1 id="关联类型" tabindex="-1"><a class="header-anchor" href="#关联类型"><span>关联类型</span></a></h1><p>通过把容器内部的类型放到 <code>trait</code> 中作为<strong>输出类型</strong>，使用 “关联类型” 增加了代码的可读性。这样的 <code>trait</code> 的定义语法如下：</p><div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// \`A\` 和 \`B\` 在 trait 里面通过 \`type\` 关键字来定义。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// （注意：此处的 \`type\` 不同于为类型取别名时的 \`type\`）。</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">trait</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Contains</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> B</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	// 这种语法能够泛型地表示这些新类型。</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> contains</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">_</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: &amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">_</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: &amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">B</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -&gt; </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">bool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意使用了 <code>Contains</code> <code>trait</code> 的函数就不需要写出 <code>A</code> 或 <code>B</code> 了：</p><div class="language-rust,ignore line-numbers-mode" data-highlighter="shiki" data-ext="rust,ignore" data-title="rust,ignore" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 不使用关联类型</span></span>
<span class="line"><span>fn difference&lt;A, B, C&gt;(container: &amp;C) -&gt; i32 where</span></span>
<span class="line"><span>    C: Contains&lt;A, B&gt; { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用关联类型</span></span>
<span class="line"><span>fn difference&lt;C: Contains&gt;(container: &amp;C) -&gt; i32 { ... }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们使用关联类型来重写上一小节的例子：</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>struct Container(i32, i32);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这个 trait 检查给定的 2 个项是否储存于容器中</span></span>
<span class="line"><span>// 并且能够获得容器的第一个或最后一个值。</span></span>
<span class="line"><span>trait Contains {</span></span>
<span class="line"><span>    // 在这里定义可以被方法使用的泛型类型。</span></span>
<span class="line"><span>    type A;</span></span>
<span class="line"><span>    type B;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fn contains(&amp;self, _: &amp;Self::A, _: &amp;Self::B) -&gt; bool;</span></span>
<span class="line"><span>    fn first(&amp;self) -&gt; i32;</span></span>
<span class="line"><span>    fn last(&amp;self) -&gt; i32;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Contains for Container {</span></span>
<span class="line"><span>    // 指出 \`A\` 和 \`B\` 是什么类型。如果 \`input\`（输入）类型</span></span>
<span class="line"><span>    // 为 \`Container(i32, i32)\`，那么 \`output\`（输出）类型</span></span>
<span class="line"><span>    // 会被确定为 \`i32\` 和 \`i32\`。</span></span>
<span class="line"><span>    type A = i32;</span></span>
<span class="line"><span>    type B = i32;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // \`&amp;Self::A\` 和 \`&amp;Self::B\` 在这里也是合法的类型。</span></span>
<span class="line"><span>    fn contains(&amp;self, number_1: &amp;i32, number_2: &amp;i32) -&gt; bool {</span></span>
<span class="line"><span>        (&amp;self.0 == number_1) &amp;&amp; (&amp;self.1 == number_2)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 得到第一个数字。</span></span>
<span class="line"><span>    fn first(&amp;self) -&gt; i32 { self.0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 得到最后一个数字。</span></span>
<span class="line"><span>    fn last(&amp;self) -&gt; i32 { self.1 }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn difference&lt;C: Contains&gt;(container: &amp;C) -&gt; i32 {</span></span>
<span class="line"><span>    container.last() - container.first()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let number_1 = 3;</span></span>
<span class="line"><span>    let number_2 = 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let container = Container(number_1, number_2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;Does container contain {} and {}: {}&quot;,</span></span>
<span class="line"><span>        &amp;number_1, &amp;number_2,</span></span>
<span class="line"><span>        container.contains(&amp;number_1, &amp;number_2));</span></span>
<span class="line"><span>    println!(&quot;First number: {}&quot;, container.first());</span></span>
<span class="line"><span>    println!(&quot;Last number: {}&quot;, container.last());</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    println!(&quot;The difference is: {}&quot;, difference(&amp;container));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const r=i(l,[["render",p],["__file","types.html.vue"]]),h=JSON.parse('{"path":"/generics/assoc_items/types.html","title":"关联类型","lang":"zh-CN","frontmatter":{"description":"关联类型 通过把容器内部的类型放到 trait 中作为输出类型，使用 “关联类型” 增加了代码的可读性。这样的 trait 的定义语法如下： 注意使用了 Contains trait 的函数就不需要写出 A 或 B 了： 让我们使用关联类型来重写上一小节的例子：","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/generics/assoc_items/types.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"关联类型"}],["meta",{"property":"og:description","content":"关联类型 通过把容器内部的类型放到 trait 中作为输出类型，使用 “关联类型” 增加了代码的可读性。这样的 trait 的定义语法如下： 注意使用了 Contains trait 的函数就不需要写出 A 或 B 了： 让我们使用关联类型来重写上一小节的例子："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关联类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.45,"words":435},"filePathRelative":"generics/assoc_items/types.md","excerpt":"\\n<p>通过把容器内部的类型放到 <code>trait</code> 中作为<strong>输出类型</strong>，使用 “关联类型” 增加了代码的可读性。这样的 <code>trait</code> 的定义语法如下：</p>\\n<div class=\\"language-rust line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust\\" data-title=\\"rust\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// `A` 和 `B` 在 trait 里面通过 `type` 关键字来定义。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// （注意：此处的 `type` 不同于为类型取别名时的 `type`）。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">trait</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Contains</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    type</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> A</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    type</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> B</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">\\t// 这种语法能够泛型地表示这些新类型。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    fn</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> contains</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(&amp;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">_</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: &amp;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">Self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">::</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E5C07B\\">A</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">_</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: &amp;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">Self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">::</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E5C07B\\">B</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) -&gt; </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">bool</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"generics/assoc_items/types.md","value":{"title":"types","path":"generics/assoc_items/types.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"generics/assoc_items/types.md"}]}}}');export{r as comp,h as data};
