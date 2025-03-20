import{_ as t,e as n,k as s,o as r}from"./app-CVSWwIkE.js";const a={};function l(o,e){return r(),n("div",null,e[0]||(e[0]=[s(`<h1 id="结果-result" tabindex="-1"><a class="header-anchor" href="#结果-result"><span>结果 <code>Result</code></span></a></h1><p><a href="https://rustwiki.org/zh-CN/std/result/enum.Result.html" target="_blank" rel="noopener noreferrer"><code>Result</code></a> 是 <a href="https://rustwiki.org/zh-CN/std/option/enum.Option.html" target="_blank" rel="noopener noreferrer"><code>Option</code></a> 类型的更丰富的版本，描述的是可能的<strong>错误</strong>而不是可能的<strong>不存在</strong>。</p><p>也就是说，<code>Result&lt;T，E&gt;</code> 可以有两个结果的其中一个：</p><ul><li><code>Ok&lt;T&gt;</code>：找到 <code>T</code> 元素</li><li><code>Err&lt;E&gt;</code>：找到 <code>E</code> 元素，<code>E</code> 即表示错误的类型。</li></ul><p>按照约定，预期结果是 “Ok”，而意外结果是 “Err”。</p><p><code>Result</code> 有很多类似 <code>Option</code> 的方法。例如 <code>unwrap()</code>，它要么举出元素<br><code>T</code>，要么就 <code>panic</code>。 对于事件的处理，<code>Result</code> 和 <code>Option</code> 有很多相同的组合算子。</p><p>在使用 Rust 时，你可能会遇到返回 <code>Result</code> 类型的方法，例如 <a href="https://rustwiki.org/zh-CN/std/primitive.str.html#method.parse" target="_blank" rel="noopener noreferrer"><code>parse()</code></a><br> 方法。它并不是总能把字符串解析成指定的类型，所以 <code>parse()</code> 返回一个<br><code>Result</code> 表示可能的失败。</p><p>我们来看看当 <code>parse()</code> 字符串成功和失败时会发生什么：</p><div class="language-rust,editable,ignore,mdbook-runnable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable,ignore,mdbook-runnable" data-title="rust,editable,ignore,mdbook-runnable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn multiply(first_number_str: &amp;str, second_number_str: &amp;str) -&gt; i32 {</span></span>
<span class="line"><span>    // 我们试着用 \`unwrap()\` 把数字放出来。它会咬我们一口吗？</span></span>
<span class="line"><span>    let first_number = first_number_str.parse::&lt;i32&gt;().unwrap();</span></span>
<span class="line"><span>    let second_number = second_number_str.parse::&lt;i32&gt;().unwrap();</span></span>
<span class="line"><span>    first_number * second_number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let twenty = multiply(&quot;10&quot;, &quot;2&quot;);</span></span>
<span class="line"><span>    println!(&quot;double is {}&quot;, twenty);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let tt = multiply(&quot;t&quot;, &quot;2&quot;);</span></span>
<span class="line"><span>    println!(&quot;double is {}&quot;, tt);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在失败的情况下，<code>parse()</code> 产生一个错误，留给 <code>unwrap()</code> 来解包并产生 <code>panic</code>。另外，<code>panic</code> 会退出我们的程序，并提供一个让人很不爽的错误消息。</p><p>为了改善错误消息的质量，我们应该更具体地了解返回类型并考虑显式地处理错误。</p>`,11)]))}const p=t(a,[["render",l],["__file","result.html.vue"]]),d=JSON.parse('{"path":"/error/result.html","title":"结果 Result","lang":"zh-CN","frontmatter":{"description":"结果 Result Result 是 Option 类型的更丰富的版本，描述的是可能的错误而不是可能的不存在。 也就是说，Result<T，E> 可以有两个结果的其中一个： Ok<T>：找到 T 元素 Err<E>：找到 E 元素，E 即表示错误的类型。 按照约定，预期结果是 “Ok”，而意外结果是 “Err”。 Result 有很多类似 Option...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/error/result.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"结果 Result"}],["meta",{"property":"og:description","content":"结果 Result Result 是 Option 类型的更丰富的版本，描述的是可能的错误而不是可能的不存在。 也就是说，Result<T，E> 可以有两个结果的其中一个： Ok<T>：找到 T 元素 Err<E>：找到 E 元素，E 即表示错误的类型。 按照约定，预期结果是 “Ok”，而意外结果是 “Err”。 Result 有很多类似 Option..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"结果 Result\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"error/result.md","excerpt":"\\n<p><a href=\\"https://rustwiki.org/zh-CN/std/result/enum.Result.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>Result</code></a> 是 <a href=\\"https://rustwiki.org/zh-CN/std/option/enum.Option.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>Option</code></a> 类型的更丰富的版本，描述的是可能的<strong>错误</strong>而不是可能的<strong>不存在</strong>。</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"error/result.md","value":{"title":"result","path":"error/result.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"error/result.md"}]}}}');export{p as comp,d as data};
