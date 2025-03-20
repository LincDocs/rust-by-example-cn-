import{_ as i,e as l,k as t,f as s,i as a,g as p,h as c,r,o as d}from"./app-CY03Lsxp.js";const o={};function u(m,n){const e=r("RouteLink");return d(),l("div",null,[n[6]||(n[6]=t(`<h1 id="cfg" tabindex="-1"><a class="header-anchor" href="#cfg"><span><code>cfg</code></span></a></h1><p>条件编译可能通过两种不同的操作符实现：</p><ul><li><code>cfg</code> 属性：在属性位置中使用 <code>#[cfg(...)]</code></li><li><code>cfg!</code> 宏：在布尔表达式中使用 <code>cfg!(...)</code></li></ul><p>两种形式使用的参数语法都相同。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 这个函数仅当目标系统是 Linux 的时候才会编译</span></span>
<span class="line"><span>#[cfg(target_os = &quot;linux&quot;)]</span></span>
<span class="line"><span>fn are_you_on_linux() {</span></span>
<span class="line"><span>    println!(&quot;You are running linux!&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 而这个函数仅当目标系统 **不是** Linux 时才会编译</span></span>
<span class="line"><span>#[cfg(not(target_os = &quot;linux&quot;))]</span></span>
<span class="line"><span>fn are_you_on_linux() {</span></span>
<span class="line"><span>    println!(&quot;You are *not* running linux!&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    are_you_on_linux();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    println!(&quot;Are you sure?&quot;);</span></span>
<span class="line"><span>    if cfg!(target_os = &quot;linux&quot;) {</span></span>
<span class="line"><span>        println!(&quot;Yes. It&#39;s definitely linux!&quot;);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        println!(&quot;Yes. It&#39;s definitely *not* linux!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参见" tabindex="-1"><a class="header-anchor" href="#参见"><span>参见：</span></a></h3>`,6)),s("p",null,[n[1]||(n[1]=s("a",{href:"https://rustwiki.org/zh-CN/reference/conditional-compilation.html",target:"_blank",rel:"noopener noreferrer"},"引用",-1)),n[2]||(n[2]=a(", ")),n[3]||(n[3]=s("a",{href:"https://rustwiki.org/zh-CN/std/macro.cfg!.html",target:"_blank",rel:"noopener noreferrer"},[s("code",null,"cfg!")],-1)),n[4]||(n[4]=a(", 和 ")),p(e,{to:"/macros.html"},{default:c(()=>n[0]||(n[0]=[a("宏")])),_:1}),n[5]||(n[5]=a("."))])])}const g=i(o,[["render",u],["__file","cfg.html.vue"]]),b=JSON.parse(`{"path":"/attribute/cfg.html","title":"cfg","lang":"zh-CN","frontmatter":{"description":"cfg 条件编译可能通过两种不同的操作符实现： cfg 属性：在属性位置中使用 #[cfg(...)] cfg! 宏：在布尔表达式中使用 cfg!(...) 两种形式使用的参数语法都相同。 参见： 引用, cfg!, 和 .","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/attribute/cfg.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"cfg"}],["meta",{"property":"og:description","content":"cfg 条件编译可能通过两种不同的操作符实现： cfg 属性：在属性位置中使用 #[cfg(...)] cfg! 宏：在布尔表达式中使用 cfg!(...) 两种形式使用的参数语法都相同。 参见： 引用, cfg!, 和 ."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cfg\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"attribute/cfg.md","excerpt":"\\n<p>条件编译可能通过两种不同的操作符实现：</p>\\n<ul>\\n<li><code>cfg</code> 属性：在属性位置中使用 <code>#[cfg(...)]</code></li>\\n<li><code>cfg!</code> 宏：在布尔表达式中使用 <code>cfg!(...)</code></li>\\n</ul>\\n<p>两种形式使用的参数语法都相同。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>// 这个函数仅当目标系统是 Linux 的时候才会编译</span></span>\\n<span class=\\"line\\"><span>#[cfg(target_os = \\"linux\\")]</span></span>\\n<span class=\\"line\\"><span>fn are_you_on_linux() {</span></span>\\n<span class=\\"line\\"><span>    println!(\\"You are running linux!\\")</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 而这个函数仅当目标系统 **不是** Linux 时才会编译</span></span>\\n<span class=\\"line\\"><span>#[cfg(not(target_os = \\"linux\\"))]</span></span>\\n<span class=\\"line\\"><span>fn are_you_on_linux() {</span></span>\\n<span class=\\"line\\"><span>    println!(\\"You are *not* running linux!\\")</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    are_you_on_linux();</span></span>\\n<span class=\\"line\\"><span>    </span></span>\\n<span class=\\"line\\"><span>    println!(\\"Are you sure?\\");</span></span>\\n<span class=\\"line\\"><span>    if cfg!(target_os = \\"linux\\") {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"Yes. It's definitely linux!\\");</span></span>\\n<span class=\\"line\\"><span>    } else {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"Yes. It's definitely *not* linux!\\");</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[{"title":"macros","link":"macros.html"}],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"},{"title":"fs","link":"std_misc/fs.html"}],"localMap":{"nodes":[{"id":"attribute/cfg.md","value":{"title":"cfg","path":"attribute/cfg.md","outlink":["macros.md"],"backlink":["SUMMARY.md","std_misc/fs.md"]}},{"id":"macros.md","value":{"title":"macros","path":"macros.md","outlink":[],"backlink":[]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}},{"id":"std_misc/fs.md","value":{"title":"fs","path":"std_misc/fs.md","outlink":[],"backlink":[]}}],"links":[{"source":"attribute/cfg.md","target":"macros.md"},{"source":"SUMMARY.md","target":"attribute/cfg.md"},{"source":"std_misc/fs.md","target":"attribute/cfg.md"}]}}}`);export{g as comp,b as data};
