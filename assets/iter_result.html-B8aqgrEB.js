import{_ as e,e as n,k as a,o as i}from"./app-CVSWwIkE.js";const l={};function t(r,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="遍历-result" tabindex="-1"><a class="header-anchor" href="#遍历-result"><span>遍历 <code>Result</code></span></a></h1><p><code>Iter::map</code> 操作可能失败，比如：</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let strings = vec![&quot;tofu&quot;, &quot;93&quot;, &quot;18&quot;];</span></span>
<span class="line"><span>    let numbers: Vec&lt;_&gt; = strings</span></span>
<span class="line"><span>        .into_iter()</span></span>
<span class="line"><span>        .map(|s| s.parse::&lt;i32&gt;())</span></span>
<span class="line"><span>        .collect();</span></span>
<span class="line"><span>    println!(&quot;Results: {:?}&quot;, numbers);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来看一些处理这种问题的策略：</p><h2 id="使用-filter-map-忽略失败的项" tabindex="-1"><a class="header-anchor" href="#使用-filter-map-忽略失败的项"><span>使用 <code>filter_map()</code> 忽略失败的项</span></a></h2><p><code>filter_map</code> 会调用一个函数，过滤掉为 <code>None</code> 的所有结果。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let strings = vec![&quot;tofu&quot;, &quot;93&quot;, &quot;18&quot;];</span></span>
<span class="line"><span>    let numbers: Vec&lt;_&gt; = strings</span></span>
<span class="line"><span>        .into_iter()</span></span>
<span class="line"><span>        .filter_map(|s| s.parse::&lt;i32&gt;().ok())</span></span>
<span class="line"><span>        .collect();</span></span>
<span class="line"><span>    println!(&quot;Results: {:?}&quot;, numbers);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-collect-使整个操作失败" tabindex="-1"><a class="header-anchor" href="#使用-collect-使整个操作失败"><span>使用 <code>collect()</code> 使整个操作失败</span></a></h2><p><code>Result</code> 实现了 <code>FromIter</code>，因此结果的向量（<code>Vec&lt;Result&lt;T, E&gt;&gt;</code>）可以被转换成结果包裹着向量（<code>Result&lt;Vec&lt;T&gt;, E&gt;</code>）。一旦找到一个 <code>Result::Err</code> ，遍历就被终止。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let strings = vec![&quot;tofu&quot;, &quot;93&quot;, &quot;18&quot;];</span></span>
<span class="line"><span>    let numbers: Result&lt;Vec&lt;_&gt;, _&gt; = strings</span></span>
<span class="line"><span>        .into_iter()</span></span>
<span class="line"><span>        .map(|s| s.parse::&lt;i32&gt;())</span></span>
<span class="line"><span>        .collect();</span></span>
<span class="line"><span>    println!(&quot;Results: {:?}&quot;, numbers);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的技巧可以对 <code>Option</code> 使用。</p><h2 id="使用-partition-收集所有合法的值与错误" tabindex="-1"><a class="header-anchor" href="#使用-partition-收集所有合法的值与错误"><span>使用 <code>Partition()</code> 收集所有合法的值与错误</span></a></h2><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let strings = vec![&quot;tofu&quot;, &quot;93&quot;, &quot;18&quot;];</span></span>
<span class="line"><span>    let (numbers, errors): (Vec&lt;_&gt;, Vec&lt;_&gt;) = strings</span></span>
<span class="line"><span>        .into_iter()</span></span>
<span class="line"><span>        .map(|s| s.parse::&lt;i32&gt;())</span></span>
<span class="line"><span>        .partition(Result::is_ok);</span></span>
<span class="line"><span>    println!(&quot;Numbers: {:?}&quot;, numbers);</span></span>
<span class="line"><span>    println!(&quot;Errors: {:?}&quot;, errors);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你看着这些结果时，你会发现所有东西还在 <code>Result</code> 中保存着。要取出它们，需要一些模板化的代码。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let strings = vec![&quot;tofu&quot;, &quot;93&quot;, &quot;18&quot;];</span></span>
<span class="line"><span>    let (numbers, errors): (Vec&lt;_&gt;, Vec&lt;_&gt;) = strings</span></span>
<span class="line"><span>        .into_iter()</span></span>
<span class="line"><span>        .map(|s| s.parse::&lt;i32&gt;())</span></span>
<span class="line"><span>        .partition(Result::is_ok);</span></span>
<span class="line"><span>    let numbers: Vec&lt;_&gt; = numbers.into_iter().map(Result::unwrap).collect();</span></span>
<span class="line"><span>    let errors: Vec&lt;_&gt; = errors.into_iter().map(Result::unwrap_err).collect();</span></span>
<span class="line"><span>    println!(&quot;Numbers: {:?}&quot;, numbers);</span></span>
<span class="line"><span>    println!(&quot;Errors: {:?}&quot;, errors);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const d=e(l,[["render",t],["__file","iter_result.html.vue"]]),c=JSON.parse('{"path":"/error/iter_result.html","title":"遍历 Result","lang":"zh-CN","frontmatter":{"description":"遍历 Result Iter::map 操作可能失败，比如： 我们来看一些处理这种问题的策略： 使用 filter_map() 忽略失败的项 filter_map 会调用一个函数，过滤掉为 None 的所有结果。 使用 collect() 使整个操作失败 Result 实现了 FromIter，因此结果的向量（Vec<Result<T, E>>）可以被...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/error/iter_result.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"遍历 Result"}],["meta",{"property":"og:description","content":"遍历 Result Iter::map 操作可能失败，比如： 我们来看一些处理这种问题的策略： 使用 filter_map() 忽略失败的项 filter_map 会调用一个函数，过滤掉为 None 的所有结果。 使用 collect() 使整个操作失败 Result 实现了 FromIter，因此结果的向量（Vec<Result<T, E>>）可以被..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"遍历 Result\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.11,"words":333},"filePathRelative":"error/iter_result.md","excerpt":"\\n<p><code>Iter::map</code> 操作可能失败，比如：</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    let strings = vec![\\"tofu\\", \\"93\\", \\"18\\"];</span></span>\\n<span class=\\"line\\"><span>    let numbers: Vec&lt;_&gt; = strings</span></span>\\n<span class=\\"line\\"><span>        .into_iter()</span></span>\\n<span class=\\"line\\"><span>        .map(|s| s.parse::&lt;i32&gt;())</span></span>\\n<span class=\\"line\\"><span>        .collect();</span></span>\\n<span class=\\"line\\"><span>    println!(\\"Results: {:?}\\", numbers);</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"error/iter_result.md","value":{"title":"iter_result","path":"error/iter_result.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"error/iter_result.md"}]}}}');export{d as comp,c as data};
