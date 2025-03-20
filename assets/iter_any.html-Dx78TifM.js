import{_ as s,e as a,k as e,o as i}from"./app-CVSWwIkE.js";const l={};function t(r,n){return i(),a("div",null,n[0]||(n[0]=[e('<h1 id="iterator-any" tabindex="-1"><a class="header-anchor" href="#iterator-any"><span>Iterator::any</span></a></h1><p><code>Iterator::any</code> 是一个函数，若传给它一个迭代器（iterator），当其中任一元素满足谓词（predicate）时它将返回 <code>true</code>，否则返回 <code>false</code>（译注：谓词是闭包规定的， <code>true</code>/<code>false</code> 是闭包作用在元素上的返回值）。它的签名如下：</p><div class="language-rust,ignore line-numbers-mode" data-highlighter="shiki" data-ext="rust,ignore" data-title="rust,ignore" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pub trait Iterator {</span></span>\n<span class="line"><span>    // 被迭代的类型。</span></span>\n<span class="line"><span>    type Item;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    // `any` 接受 `&amp;mut self` 参数（译注：回想一下，这是 `self: &amp;mut Self` 的简写）</span></span>\n<span class="line"><span>    // 表明函数的调用者可以被借用和修改，但不会被消耗。</span></span>\n<span class="line"><span>    fn any&lt;F&gt;(&amp;mut self, f: F) -&gt; bool where</span></span>\n<span class="line"><span>        // `FnMut` 表示被捕获的变量最多只能被修改，而不能被消耗。</span></span>\n<span class="line"><span>        // `Self::Item` 表明变量是通过值传递给闭包（译注：是迭代器对应的元素的类型）</span></span>\n<span class="line"><span>        F: FnMut(Self::Item) -&gt; bool {}</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>\n<span class="line"><span>    let vec1 = vec![1, 2, 3];</span></span>\n<span class="line"><span>    let vec2 = vec![4, 5, 6];</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    // 对 vec 的 `iter()` 举出 `&amp;i32`。（通过用 `&amp;x` 匹配）把它解构成 `i32`。</span></span>\n<span class="line"><span>    // 译注：注意 `any` 方法会自动地把 `vec.iter()` 举出的迭代器的元素一个个地</span></span>\n<span class="line"><span>    // 传给闭包。因此闭包接收到的参数是 `&amp;i32` 类型的。</span></span>\n<span class="line"><span>    println!(&quot;2 in vec1: {}&quot;, vec1.iter()     .any(|&amp;x| x == 2));</span></span>\n<span class="line"><span>    // 对 vec 的 `into_iter()` 举出 `i32` 类型。无需解构。</span></span>\n<span class="line"><span>    println!(&quot;2 in vec2: {}&quot;, vec2.into_iter().any(| x| x == 2));</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    let array1 = [1, 2, 3];</span></span>\n<span class="line"><span>    let array2 = [4, 5, 6];</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    // 对数组的 `iter()` 举出 `&amp;i32`。</span></span>\n<span class="line"><span>    println!(&quot;2 in array1: {}&quot;, array1.iter()     .any(|&amp;x| x == 2));</span></span>\n<span class="line"><span>    // 对数组的 `into_iter()` 举出 `i32`。</span></span>\n<span class="line"><span>    println!(&quot;2 in array2: {}&quot;, array2.into_iter().any(|x| x == 2));</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参见" tabindex="-1"><a class="header-anchor" href="#参见"><span>参见：</span></a></h3><p><a href="https://rustwiki.org/zh-CN/std/iter/trait.Iterator.html#method.any" target="_blank" rel="noopener noreferrer"><code>std::iter::Iterator::any</code></a></p>',6)]))}const c=s(l,[["render",t],["__file","iter_any.html.vue"]]),d=JSON.parse('{"path":"/fn/closures/closure_examples/iter_any.html","title":"Iterator::any","lang":"zh-CN","frontmatter":{"description":"Iterator::any Iterator::any 是一个函数，若传给它一个迭代器（iterator），当其中任一元素满足谓词（predicate）时它将返回 true，否则返回 false（译注：谓词是闭包规定的， true/false 是闭包作用在元素上的返回值）。它的签名如下： 参见： std::iter::Iterator::any","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/fn/closures/closure_examples/iter_any.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"Iterator::any"}],["meta",{"property":"og:description","content":"Iterator::any Iterator::any 是一个函数，若传给它一个迭代器（iterator），当其中任一元素满足谓词（predicate）时它将返回 true，否则返回 false（译注：谓词是闭包规定的， true/false 是闭包作用在元素上的返回值）。它的签名如下： 参见： std::iter::Iterator::any"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Iterator::any\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"fn/closures/closure_examples/iter_any.md","excerpt":"\\n<p><code>Iterator::any</code> 是一个函数，若传给它一个迭代器（iterator），当其中任一元素满足谓词（predicate）时它将返回 <code>true</code>，否则返回 <code>false</code>（译注：谓词是闭包规定的， <code>true</code>/<code>false</code> 是闭包作用在元素上的返回值）。它的签名如下：</p>\\n<div class=\\"language-rust,ignore line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,ignore\\" data-title=\\"rust,ignore\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>pub trait Iterator {</span></span>\\n<span class=\\"line\\"><span>    // 被迭代的类型。</span></span>\\n<span class=\\"line\\"><span>    type Item;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // `any` 接受 `&amp;mut self` 参数（译注：回想一下，这是 `self: &amp;mut Self` 的简写）</span></span>\\n<span class=\\"line\\"><span>    // 表明函数的调用者可以被借用和修改，但不会被消耗。</span></span>\\n<span class=\\"line\\"><span>    fn any&lt;F&gt;(&amp;mut self, f: F) -&gt; bool where</span></span>\\n<span class=\\"line\\"><span>        // `FnMut` 表示被捕获的变量最多只能被修改，而不能被消耗。</span></span>\\n<span class=\\"line\\"><span>        // `Self::Item` 表明变量是通过值传递给闭包（译注：是迭代器对应的元素的类型）</span></span>\\n<span class=\\"line\\"><span>        F: FnMut(Self::Item) -&gt; bool {}</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"fn/closures/closure_examples/iter_any.md","value":{"title":"iter_any","path":"fn/closures/closure_examples/iter_any.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"fn/closures/closure_examples/iter_any.md"}]}}}');export{c as comp,d as data};
