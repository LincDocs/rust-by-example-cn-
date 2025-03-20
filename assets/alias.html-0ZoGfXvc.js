import{_ as s,e as a,k as i,o as e}from"./app-CVSWwIkE.js";const l={};function p(r,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="别名使用" tabindex="-1"><a class="header-anchor" href="#别名使用"><span>别名使用</span></a></h1><p>数据可以多次不可变借用，但是在不可变借用的同时，原始数据不能使用可变借用。或者说，同一时间内只允许<strong>一次</strong>可变借用。仅当最后一次使用可变引用<strong>之后</strong>，原始数据才可以再次借用。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>struct Point { x: i32, y: i32, z: i32 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut point = Point { x: 0, y: 0, z: 0 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let borrowed_point = &amp;point;</span></span>
<span class="line"><span>    let another_borrow = &amp;point;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 数据可以通过引用或原始类型来访问</span></span>
<span class="line"><span>    println!(&quot;Point has coordinates: ({}, {}, {})&quot;,</span></span>
<span class="line"><span>                borrowed_point.x, another_borrow.y, point.z);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 报错！\`point\` 不能以可变方式借用，因为当前还有不可变借用。</span></span>
<span class="line"><span>    // let mutable_borrow = &amp;mut point;</span></span>
<span class="line"><span>    // TODO ^ 试一试去掉此行注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 被借用的值在这里被重新使用</span></span>
<span class="line"><span>    println!(&quot;Point has coordinates: ({}, {}, {})&quot;,</span></span>
<span class="line"><span>                borrowed_point.x, another_borrow.y, point.z);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 不可变的引用不再用于其余的代码，因此可以使用可变的引用重新借用。</span></span>
<span class="line"><span>    let mutable_borrow = &amp;mut point;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 通过可变引用来修改数据</span></span>
<span class="line"><span>    mutable_borrow.x = 5;</span></span>
<span class="line"><span>    mutable_borrow.y = 2;</span></span>
<span class="line"><span>    mutable_borrow.z = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 报错！不能再以不可变方式来借用 \`point\`，因为它当前已经被可变借用。</span></span>
<span class="line"><span>    // let y = &amp;point.y;</span></span>
<span class="line"><span>    // TODO ^ 试一试去掉此行注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 报错！无法打印，因为 \`println!\` 用到了一个不可变引用。</span></span>
<span class="line"><span>    // println!(&quot;Point Z coordinate is {}&quot;, point.z);</span></span>
<span class="line"><span>    // TODO ^ 试一试去掉此行注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 正常运行！可变引用能够以不可变类型传入 \`println!\`</span></span>
<span class="line"><span>    println!(&quot;Point has coordinates: ({}, {}, {})&quot;,</span></span>
<span class="line"><span>                mutable_borrow.x, mutable_borrow.y, mutable_borrow.z);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 可变引用不再用于其余的代码，因此可以重新借用</span></span>
<span class="line"><span>    let new_borrowed_point = &amp;point;</span></span>
<span class="line"><span>    println!(&quot;Point now has coordinates: ({}, {}, {})&quot;,</span></span>
<span class="line"><span>             new_borrowed_point.x, new_borrowed_point.y, new_borrowed_point.z);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const d=s(l,[["render",p],["__file","alias.html.vue"]]),o=JSON.parse('{"path":"/scope/borrow/alias.html","title":"别名使用","lang":"zh-CN","frontmatter":{"description":"别名使用 数据可以多次不可变借用，但是在不可变借用的同时，原始数据不能使用可变借用。或者说，同一时间内只允许一次可变借用。仅当最后一次使用可变引用之后，原始数据才可以再次借用。","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/scope/borrow/alias.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"别名使用"}],["meta",{"property":"og:description","content":"别名使用 数据可以多次不可变借用，但是在不可变借用的同时，原始数据不能使用可变借用。或者说，同一时间内只允许一次可变借用。仅当最后一次使用可变引用之后，原始数据才可以再次借用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"别名使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"scope/borrow/alias.md","excerpt":"\\n<p>数据可以多次不可变借用，但是在不可变借用的同时，原始数据不能使用可变借用。或者说，同一时间内只允许<strong>一次</strong>可变借用。仅当最后一次使用可变引用<strong>之后</strong>，原始数据才可以再次借用。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>struct Point { x: i32, y: i32, z: i32 }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    let mut point = Point { x: 0, y: 0, z: 0 };</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    let borrowed_point = &amp;point;</span></span>\\n<span class=\\"line\\"><span>    let another_borrow = &amp;point;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 数据可以通过引用或原始类型来访问</span></span>\\n<span class=\\"line\\"><span>    println!(\\"Point has coordinates: ({}, {}, {})\\",</span></span>\\n<span class=\\"line\\"><span>                borrowed_point.x, another_borrow.y, point.z);</span></span>\\n<span class=\\"line\\"><span>    </span></span>\\n<span class=\\"line\\"><span>    // 报错！`point` 不能以可变方式借用，因为当前还有不可变借用。</span></span>\\n<span class=\\"line\\"><span>    // let mutable_borrow = &amp;mut point;</span></span>\\n<span class=\\"line\\"><span>    // TODO ^ 试一试去掉此行注释</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 被借用的值在这里被重新使用</span></span>\\n<span class=\\"line\\"><span>    println!(\\"Point has coordinates: ({}, {}, {})\\",</span></span>\\n<span class=\\"line\\"><span>                borrowed_point.x, another_borrow.y, point.z);</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 不可变的引用不再用于其余的代码，因此可以使用可变的引用重新借用。</span></span>\\n<span class=\\"line\\"><span>    let mutable_borrow = &amp;mut point;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 通过可变引用来修改数据</span></span>\\n<span class=\\"line\\"><span>    mutable_borrow.x = 5;</span></span>\\n<span class=\\"line\\"><span>    mutable_borrow.y = 2;</span></span>\\n<span class=\\"line\\"><span>    mutable_borrow.z = 1;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 报错！不能再以不可变方式来借用 `point`，因为它当前已经被可变借用。</span></span>\\n<span class=\\"line\\"><span>    // let y = &amp;point.y;</span></span>\\n<span class=\\"line\\"><span>    // TODO ^ 试一试去掉此行注释</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 报错！无法打印，因为 `println!` 用到了一个不可变引用。</span></span>\\n<span class=\\"line\\"><span>    // println!(\\"Point Z coordinate is {}\\", point.z);</span></span>\\n<span class=\\"line\\"><span>    // TODO ^ 试一试去掉此行注释</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 正常运行！可变引用能够以不可变类型传入 `println!`</span></span>\\n<span class=\\"line\\"><span>    println!(\\"Point has coordinates: ({}, {}, {})\\",</span></span>\\n<span class=\\"line\\"><span>                mutable_borrow.x, mutable_borrow.y, mutable_borrow.z);</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 可变引用不再用于其余的代码，因此可以重新借用</span></span>\\n<span class=\\"line\\"><span>    let new_borrowed_point = &amp;point;</span></span>\\n<span class=\\"line\\"><span>    println!(\\"Point now has coordinates: ({}, {}, {})\\",</span></span>\\n<span class=\\"line\\"><span>             new_borrowed_point.x, new_borrowed_point.y, new_borrowed_point.z);</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"scope/borrow/alias.md","value":{"title":"alias","path":"scope/borrow/alias.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"scope/borrow/alias.md"}]}}}');export{d as comp,o as data};
