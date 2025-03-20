import{_ as e,e as s,k as n,o as a}from"./app-CVSWwIkE.js";const t={};function l(r,i){return a(),s("div",null,i[0]||(i[0]=[n(`<h1 id="原始标志符" tabindex="-1"><a class="header-anchor" href="#原始标志符"><span>原始标志符</span></a></h1><p>与许多编程语言一样，Rust 拥有“关键字”的概念。 这些标识符对语言有特定意义，所以不能在变量名、函数名和其他位置使用它们。 原始标识符允许你使用通常不允许的关键字。 当 Rust 引入新关键字时，使用旧版 Rust 的库拥有与新版本中引入的关键字同名的变量或函数，这一点就特别有用。</p><p>举个例子，使用 2015 版 Rust 编译的 crate <code>foo</code>，它导出一个名为 <code>try</code> 的函数。 此关键字（<em>try</em>）在 2018 版本的新功能中保留下来，因此如果没有原始标识符，我们将无法命名该功能。</p><div class="language-rust,ignore line-numbers-mode" data-highlighter="shiki" data-ext="rust,ignore" data-title="rust,ignore" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>extern crate foo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    foo::try();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将得到如下错误：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>error: expected identifier, found keyword \`try\`</span></span>
<span class="line"><span> --&gt; src/main.rs:4:4</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>4 | foo::try();</span></span>
<span class="line"><span>  |      ^^^ expected identifier, found keyword</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用原始标志符重写上述代码：</p><div class="language-rust,ignore line-numbers-mode" data-highlighter="shiki" data-ext="rust,ignore" data-title="rust,ignore" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>extern crate foo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    foo::r#try();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const p=e(t,[["render",l],["__file","raw_identifiers.html.vue"]]),c=JSON.parse('{"path":"/compatibility/raw_identifiers.html","title":"原始标志符","lang":"zh-CN","frontmatter":{"description":"原始标志符 与许多编程语言一样，Rust 拥有“关键字”的概念。 这些标识符对语言有特定意义，所以不能在变量名、函数名和其他位置使用它们。 原始标识符允许你使用通常不允许的关键字。 当 Rust 引入新关键字时，使用旧版 Rust 的库拥有与新版本中引入的关键字同名的变量或函数，这一点就特别有用。 举个例子，使用 2015 版 Rust 编译的 cra...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/compatibility/raw_identifiers.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"原始标志符"}],["meta",{"property":"og:description","content":"原始标志符 与许多编程语言一样，Rust 拥有“关键字”的概念。 这些标识符对语言有特定意义，所以不能在变量名、函数名和其他位置使用它们。 原始标识符允许你使用通常不允许的关键字。 当 Rust 引入新关键字时，使用旧版 Rust 的库拥有与新版本中引入的关键字同名的变量或函数，这一点就特别有用。 举个例子，使用 2015 版 Rust 编译的 cra..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原始标志符\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.8,"words":240},"filePathRelative":"compatibility/raw_identifiers.md","excerpt":"\\n<p>与许多编程语言一样，Rust 拥有“关键字”的概念。 这些标识符对语言有特定意义，所以不能在变量名、函数名和其他位置使用它们。 原始标识符允许你使用通常不允许的关键字。 当 Rust 引入新关键字时，使用旧版 Rust 的库拥有与新版本中引入的关键字同名的变量或函数，这一点就特别有用。</p>\\n<p>举个例子，使用 2015 版 Rust 编译的 crate <code>foo</code>，它导出一个名为 <code>try</code> 的函数。 此关键字（<em>try</em>）在 2018 版本的新功能中保留下来，因此如果没有原始标识符，我们将无法命名该功能。</p>\\n<div class=\\"language-rust,ignore line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,ignore\\" data-title=\\"rust,ignore\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>extern crate foo;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    foo::try();</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"},{"title":"compatibility","link":"compatibility.html"}],"localMap":{"nodes":[{"id":"compatibility/raw_identifiers.md","value":{"title":"raw_identifiers","path":"compatibility/raw_identifiers.md","outlink":[],"backlink":["SUMMARY.md","compatibility.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}},{"id":"compatibility.md","value":{"title":"compatibility","path":"compatibility.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"compatibility/raw_identifiers.md"},{"source":"compatibility.md","target":"compatibility/raw_identifiers.md"}]}}}');export{p as comp,c as data};
