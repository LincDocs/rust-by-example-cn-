import{_ as a,e,k as i,f as l,g as t,h as p,r as d,o as c,i as r}from"./app-CY03Lsxp.js";const o={};function u(m,s){const n=d("RouteLink");return c(),e("div",null,[s[1]||(s[1]=i(`<h1 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h1><p>可以用 <code>type</code> 语句给已有的类型取个新的名字。类型的名字必须遵循驼峰命名法（像是<br><code>CamelCase</code> 这样），否则编译器将给出警告。原生类型是例外，比如：<br><code>usize</code>、<code>f32</code>，等等。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// \`NanoSecond\` 是 \`u64\` 的新名字。</span></span>
<span class="line"><span>type NanoSecond = u64;</span></span>
<span class="line"><span>type Inch = u64;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过这个属性屏蔽警告。</span></span>
<span class="line"><span>#[allow(non_camel_case_types)]</span></span>
<span class="line"><span>type u64_t = u64;</span></span>
<span class="line"><span>// 试一试 ^ 移除上面那个属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // \`NanoSecond\` = \`Inch\` = \`u64_t\` = \`u64\`.</span></span>
<span class="line"><span>    let nanoseconds: NanoSecond = 5 as u64_t;</span></span>
<span class="line"><span>    let inches: Inch = 2 as u64_t;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 注意类型别名*并不能*提供额外的类型安全，因为别名*并不是*新的类型。</span></span>
<span class="line"><span>    println!(&quot;{} nanoseconds + {} inches = {} unit?&quot;,</span></span>
<span class="line"><span>             nanoseconds,</span></span>
<span class="line"><span>             inches,</span></span>
<span class="line"><span>             nanoseconds + inches);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>别名的主要用途是避免写出冗长的模板化代码（boilerplate code）。如 <code>IoResult&lt;T&gt;</code><br> 是 <code>Result&lt;T, IoError&gt;</code> 类型的别名。</p><h3 id="参见" tabindex="-1"><a class="header-anchor" href="#参见"><span>参见:</span></a></h3>`,5)),l("p",null,[t(n,{to:"/attribute.html"},{default:p(()=>s[0]||(s[0]=[r("属性")])),_:1})])])}const b=a(o,[["render",u],["__file","alias.html.vue"]]),h=JSON.parse('{"path":"/types/alias.html","title":"别名","lang":"zh-CN","frontmatter":{"description":"别名 可以用 type 语句给已有的类型取个新的名字。类型的名字必须遵循驼峰命名法（像是 CamelCase 这样），否则编译器将给出警告。原生类型是例外，比如： usize、f32，等等。 别名的主要用途是避免写出冗长的模板化代码（boilerplate code）。如 IoResult<T> 是 Result<T, IoError> 类型的别名。 参见:","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn/types/alias.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn"}],["meta",{"property":"og:title","content":"别名"}],["meta",{"property":"og:description","content":"别名 可以用 type 语句给已有的类型取个新的名字。类型的名字必须遵循驼峰命名法（像是 CamelCase 这样），否则编译器将给出警告。原生类型是例外，比如： usize、f32，等等。 别名的主要用途是避免写出冗长的模板化代码（boilerplate code）。如 IoResult<T> 是 Result<T, IoError> 类型的别名。 参见:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"别名\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.68,"words":203},"filePathRelative":"types/alias.md","excerpt":"\\n<p>可以用 <code>type</code> 语句给已有的类型取个新的名字。类型的名字必须遵循驼峰命名法（像是<br>\\n<code>CamelCase</code> 这样），否则编译器将给出警告。原生类型是例外，比如：<br>\\n<code>usize</code>、<code>f32</code>，等等。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>// `NanoSecond` 是 `u64` 的新名字。</span></span>\\n<span class=\\"line\\"><span>type NanoSecond = u64;</span></span>\\n<span class=\\"line\\"><span>type Inch = u64;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 通过这个属性屏蔽警告。</span></span>\\n<span class=\\"line\\"><span>#[allow(non_camel_case_types)]</span></span>\\n<span class=\\"line\\"><span>type u64_t = u64;</span></span>\\n<span class=\\"line\\"><span>// 试一试 ^ 移除上面那个属性</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    // `NanoSecond` = `Inch` = `u64_t` = `u64`.</span></span>\\n<span class=\\"line\\"><span>    let nanoseconds: NanoSecond = 5 as u64_t;</span></span>\\n<span class=\\"line\\"><span>    let inches: Inch = 2 as u64_t;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 注意类型别名*并不能*提供额外的类型安全，因为别名*并不是*新的类型。</span></span>\\n<span class=\\"line\\"><span>    println!(\\"{} nanoseconds + {} inches = {} unit?\\",</span></span>\\n<span class=\\"line\\"><span>             nanoseconds,</span></span>\\n<span class=\\"line\\"><span>             inches,</span></span>\\n<span class=\\"line\\"><span>             nanoseconds + inches);</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[{"title":"attribute","link":"attribute.html"}],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"},{"title":"types","link":"types.html"},{"title":"result_alias","link":"error/result/result_alias.html"}],"localMap":{"nodes":[{"id":"types/alias.md","value":{"title":"alias","path":"types/alias.md","outlink":["attribute.md"],"backlink":["SUMMARY.md","types.md","error/result/result_alias.md"]}},{"id":"attribute.md","value":{"title":"attribute","path":"attribute.md","outlink":[],"backlink":[]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}},{"id":"types.md","value":{"title":"types","path":"types.md","outlink":[],"backlink":[]}},{"id":"error/result/result_alias.md","value":{"title":"result_alias","path":"error/result/result_alias.md","outlink":[],"backlink":[]}}],"links":[{"source":"types/alias.md","target":"attribute.md"},{"source":"SUMMARY.md","target":"types/alias.md"},{"source":"types.md","target":"types/alias.md"},{"source":"error/result/result_alias.md","target":"types/alias.md"}]}}}');export{b as comp,h as data};
