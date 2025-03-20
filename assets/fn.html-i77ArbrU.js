import{_ as s,e as a,k as i,o as e}from"./app-CY03Lsxp.js";const l={};function p(d,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h1><p>函数（function）使用 <code>fn</code> 关键字来声明。函数的参数需要标注类型，就和变量一样，如果函数返回一个值，返回类型必须在箭头 <code>-&gt;</code> 之后指定。</p><p>函数最后的表达式将作为返回值。也可以在函数内使用 <code>return</code> 语句来提前返一个值，甚至可以在循环或 <code>if</code> 内部使用。</p><p>让我们使用函数来重写 FizzBuzz 程序吧！</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 和 C/C++ 不一样，Rust 的函数定义位置是没有限制的</span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // 我们可以在这里使用函数，后面再定义它</span></span>
<span class="line"><span>    fizzbuzz_to(100);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一个返回布尔值的函数</span></span>
<span class="line"><span>fn is_divisible_by(lhs: u32, rhs: u32) -&gt; bool {</span></span>
<span class="line"><span>    // 边界情况，提前返回</span></span>
<span class="line"><span>    if rhs == 0 {</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 这是一个表达式，可以不用 \`return\` 关键字</span></span>
<span class="line"><span>    lhs % rhs == 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一个 “不” 返回值的函数。实际上会返回一个单元类型 \`()\`。</span></span>
<span class="line"><span>fn fizzbuzz(n: u32) -&gt; () {</span></span>
<span class="line"><span>    if is_divisible_by(n, 15) {</span></span>
<span class="line"><span>        println!(&quot;fizzbuzz&quot;);</span></span>
<span class="line"><span>    } else if is_divisible_by(n, 3) {</span></span>
<span class="line"><span>        println!(&quot;fizz&quot;);</span></span>
<span class="line"><span>    } else if is_divisible_by(n, 5) {</span></span>
<span class="line"><span>        println!(&quot;buzz&quot;);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, n);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 当函数返回 \`()\` 时，函数签名可以省略返回类型</span></span>
<span class="line"><span>fn fizzbuzz_to(n: u32) {</span></span>
<span class="line"><span>    for n in 1..=n {</span></span>
<span class="line"><span>        fizzbuzz(n);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const t=s(l,[["render",p],["__file","fn.html.vue"]]),r=JSON.parse('{"path":"/fn.html","title":"函数","lang":"zh-CN","frontmatter":{"description":"函数 函数（function）使用 fn 关键字来声明。函数的参数需要标注类型，就和变量一样，如果函数返回一个值，返回类型必须在箭头 -> 之后指定。 函数最后的表达式将作为返回值。也可以在函数内使用 return 语句来提前返一个值，甚至可以在循环或 if 内部使用。 让我们使用函数来重写 FizzBuzz 程序吧！","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/fn.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"函数"}],["meta",{"property":"og:description","content":"函数 函数（function）使用 fn 关键字来声明。函数的参数需要标注类型，就和变量一样，如果函数返回一个值，返回类型必须在箭头 -> 之后指定。 函数最后的表达式将作为返回值。也可以在函数内使用 return 语句来提前返一个值，甚至可以在循环或 if 内部使用。 让我们使用函数来重写 FizzBuzz 程序吧！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"fn.md","excerpt":"\\n<p>函数（function）使用 <code>fn</code> 关键字来声明。函数的参数需要标注类型，就和变量一样，如果函数返回一个值，返回类型必须在箭头 <code>-&gt;</code> 之后指定。</p>\\n<p>函数最后的表达式将作为返回值。也可以在函数内使用 <code>return</code> 语句来提前返一个值，甚至可以在循环或 <code>if</code> 内部使用。</p>\\n<p>让我们使用函数来重写 FizzBuzz 程序吧！</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>// 和 C/C++ 不一样，Rust 的函数定义位置是没有限制的</span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    // 我们可以在这里使用函数，后面再定义它</span></span>\\n<span class=\\"line\\"><span>    fizzbuzz_to(100);</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 一个返回布尔值的函数</span></span>\\n<span class=\\"line\\"><span>fn is_divisible_by(lhs: u32, rhs: u32) -&gt; bool {</span></span>\\n<span class=\\"line\\"><span>    // 边界情况，提前返回</span></span>\\n<span class=\\"line\\"><span>    if rhs == 0 {</span></span>\\n<span class=\\"line\\"><span>        return false;</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 这是一个表达式，可以不用 `return` 关键字</span></span>\\n<span class=\\"line\\"><span>    lhs % rhs == 0</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 一个 “不” 返回值的函数。实际上会返回一个单元类型 `()`。</span></span>\\n<span class=\\"line\\"><span>fn fizzbuzz(n: u32) -&gt; () {</span></span>\\n<span class=\\"line\\"><span>    if is_divisible_by(n, 15) {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"fizzbuzz\\");</span></span>\\n<span class=\\"line\\"><span>    } else if is_divisible_by(n, 3) {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"fizz\\");</span></span>\\n<span class=\\"line\\"><span>    } else if is_divisible_by(n, 5) {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"buzz\\");</span></span>\\n<span class=\\"line\\"><span>    } else {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"{}\\", n);</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 当函数返回 `()` 时，函数签名可以省略返回类型</span></span>\\n<span class=\\"line\\"><span>fn fizzbuzz_to(n: u32) {</span></span>\\n<span class=\\"line\\"><span>    for n in 1..=n {</span></span>\\n<span class=\\"line\\"><span>        fizzbuzz(n);</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"},{"title":"enum","link":"custom_types/enum.html"},{"title":"gen_fn","link":"generics/gen_fn.html"},{"title":"binding","link":"flow_control/match/binding.html"}],"localMap":{"nodes":[{"id":"fn.md","value":{"title":"fn","path":"fn.md","outlink":[],"backlink":["SUMMARY.md","custom_types/enum.md","generics/gen_fn.md","flow_control/match/binding.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}},{"id":"custom_types/enum.md","value":{"title":"enum","path":"custom_types/enum.md","outlink":[],"backlink":[]}},{"id":"generics/gen_fn.md","value":{"title":"gen_fn","path":"generics/gen_fn.md","outlink":[],"backlink":[]}},{"id":"flow_control/match/binding.md","value":{"title":"binding","path":"flow_control/match/binding.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"fn.md"},{"source":"custom_types/enum.md","target":"fn.md"},{"source":"generics/gen_fn.md","target":"fn.md"},{"source":"flow_control/match/binding.md","target":"fn.md"}]}}}');export{t as comp,r as data};
