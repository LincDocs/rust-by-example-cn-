import{_ as l,e as t,k as e,f as n,i as a,g as d,h as p,r,o}from"./app-CVSWwIkE.js";const c={};function h(u,s){const i=r("RouteLink");return o(),t("div",null,[s[4]||(s[4]=e(`<h1 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world"><span>Hello World</span></a></h1><p>这是传统的 Hello World 程序的源码。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 这是注释内容，将会被编译器忽略掉</span></span>
<span class="line"><span>// 可以单击那边的按钮 &quot;Run&quot; 来测试这段代码 -&gt;</span></span>
<span class="line"><span>// 若想用键盘操作，可以使用快捷键 &quot;Ctrl + Enter&quot; 来运行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这段代码支持编辑，你可以自由地修改代码！</span></span>
<span class="line"><span>// 通过单击 &quot;Reset&quot; 按钮可以使代码恢复到初始状态 -&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这是主函数</span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // 调用编译生成的可执行文件时，这里的语句将被运行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 将文本打印到控制台</span></span>
<span class="line"><span>    println!(&quot;Hello World!&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),n("p",null,[s[1]||(s[1]=n("code",null,"println!",-1)),s[2]||(s[2]=a(" 是一个")),d(i,{to:"/macros.html"},{default:p(()=>s[0]||(s[0]=[n("strong",null,"宏",-1)])),_:1}),s[3]||(s[3]=a("（macros），可以将文本输出到控制台（console）。"))]),s[5]||(s[5]=e(`<p>使用 Rust 的编译器 <code>rustc</code> 可以从源程序生成可执行文件：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rustc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hello.rs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用 <code>rustc</code> 编译后将得到可执行文件 <code>hello</code>。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./hello</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> World!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动手试一试" tabindex="-1"><a class="header-anchor" href="#动手试一试"><span>动手试一试</span></a></h3><p>单击上面的 &quot;Run&quot; 按钮并观察输出结果。然后增加一行代码，再一次使用宏 <code>println!</code>，得到下面结果：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Hello World!</span></span>
<span class="line"><span>I&#39;m a Rustacean!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,7))])}const v=l(c,[["render",h],["__file","hello.html.vue"]]),b=JSON.parse('{"path":"/hello.html","title":"Hello World","lang":"zh-CN","frontmatter":{"description":"Hello World 这是传统的 Hello World 程序的源码。 println! 是一个（macros），可以将文本输出到控制台（console）。 使用 Rust 的编译器 rustc 可以从源程序生成可执行文件： 使用 rustc 编译后将得到可执行文件 hello。 动手试一试 单击上面的 \\"Run\\" 按钮并观察输出结果。然后增加一行代...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/hello.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"Hello World"}],["meta",{"property":"og:description","content":"Hello World 这是传统的 Hello World 程序的源码。 println! 是一个（macros），可以将文本输出到控制台（console）。 使用 Rust 的编译器 rustc 可以从源程序生成可执行文件： 使用 rustc 编译后将得到可执行文件 hello。 动手试一试 单击上面的 \\"Run\\" 按钮并观察输出结果。然后增加一行代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hello World\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.88,"words":265},"filePathRelative":"hello.md","excerpt":"\\n<p>这是传统的 Hello World 程序的源码。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>// 这是注释内容，将会被编译器忽略掉</span></span>\\n<span class=\\"line\\"><span>// 可以单击那边的按钮 \\"Run\\" 来测试这段代码 -&gt;</span></span>\\n<span class=\\"line\\"><span>// 若想用键盘操作，可以使用快捷键 \\"Ctrl + Enter\\" 来运行</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 这段代码支持编辑，你可以自由地修改代码！</span></span>\\n<span class=\\"line\\"><span>// 通过单击 \\"Reset\\" 按钮可以使代码恢复到初始状态 -&gt;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 这是主函数</span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    // 调用编译生成的可执行文件时，这里的语句将被运行。</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 将文本打印到控制台</span></span>\\n<span class=\\"line\\"><span>    println!(\\"Hello World!\\");</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[{"title":"macros","link":"macros.html"}],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"hello.md","value":{"title":"hello","path":"hello.md","outlink":["macros.md"],"backlink":["SUMMARY.md"]}},{"id":"macros.md","value":{"title":"macros","path":"macros.md","outlink":[],"backlink":[]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"hello.md","target":"macros.md"},{"source":"SUMMARY.md","target":"hello.md"}]}}}');export{v as comp,b as data};
