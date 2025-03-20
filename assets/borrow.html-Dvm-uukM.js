import{_ as s,e as a,k as i,o as e}from"./app-CVSWwIkE.js";const l={};function p(d,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="借用" tabindex="-1"><a class="header-anchor" href="#借用"><span>借用</span></a></h1><p>多数情况下，我们更希望能访问数据，同时不取得其所有权。为实现这点，Rust 使用了<strong>借用</strong>（borrowing）机制。对象可以通过引用（<code>&amp;T</code>）来传递，从而取代通过值（<code>T</code>）来传递。</p><p>编译器（通过借用检查）静态地保证了引用<strong>总是</strong>指向有效的对象。也就是说，当存在引用指向一个对象时，该对象不能被销毁。</p><div class="language-rust,editable,ignore,mdbook-runnable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable,ignore,mdbook-runnable" data-title="rust,editable,ignore,mdbook-runnable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 此函数取得一个 box 的所有权并销毁它</span></span>
<span class="line"><span>fn eat_box_i32(boxed_i32: Box&lt;i32&gt;) {</span></span>
<span class="line"><span>    println!(&quot;Destroying box that contains {}&quot;, boxed_i32);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 此函数借用了一个 i32 类型</span></span>
<span class="line"><span>fn borrow_i32(borrowed_i32: &amp;i32) {</span></span>
<span class="line"><span>    println!(&quot;This int is: {}&quot;, borrowed_i32);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // 创建一个装箱的 i32 类型，以及一个存在栈中的 i32 类型。</span></span>
<span class="line"><span>    let boxed_i32 = Box::new(5_i32);</span></span>
<span class="line"><span>    let stacked_i32 = 6_i32;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 借用了 box 的内容，但没有取得所有权，所以 box 的内容之后可以再次借用。</span></span>
<span class="line"><span>    // 译注：请注意函数自身就是一个作用域，因此下面两个函数运行完成以后，</span></span>
<span class="line"><span>    // 在函数中临时创建的引用也就不复存在了。</span></span>
<span class="line"><span>    borrow_i32(&amp;boxed_i32);</span></span>
<span class="line"><span>    borrow_i32(&amp;stacked_i32);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // 取得一个对 box 中数据的引用</span></span>
<span class="line"><span>        let _ref_to_i32: &amp;i32 = &amp;boxed_i32;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 报错！</span></span>
<span class="line"><span>        // 当 \`boxed_i32\` 里面的值之后在作用域中被借用时，不能将其销毁。</span></span>
<span class="line"><span>        eat_box_i32(boxed_i32);</span></span>
<span class="line"><span>        // 改正 ^ 注释掉此行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 在 \`_ref_to_i32\` 里面的值被销毁后，尝试借用 \`_ref_to_i32\`</span></span>
<span class="line"><span>        //（译注：如果此处不借用，则在上一行的代码中，eat_box_i32(boxed_i32)可以将 \`boxed_i32\` 销毁。）</span></span>
<span class="line"><span>        borrow_i32(_ref_to_i32);</span></span>
<span class="line"><span>        // \`_ref_to_i32\` 离开作用域且不再被借用。</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // \`boxed_i32\` 现在可以将所有权交给 \`eat_box_i32\` 并被销毁。</span></span>
<span class="line"><span>    //（译注：能够销毁是因为已经不存在对 \`boxed_i32\` 的引用）</span></span>
<span class="line"><span>    eat_box_i32(boxed_i32);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const t=s(l,[["render",p],["__file","borrow.html.vue"]]),c=JSON.parse('{"path":"/scope/borrow.html","title":"借用","lang":"zh-CN","frontmatter":{"description":"借用 多数情况下，我们更希望能访问数据，同时不取得其所有权。为实现这点，Rust 使用了借用（borrowing）机制。对象可以通过引用（&T）来传递，从而取代通过值（T）来传递。 编译器（通过借用检查）静态地保证了引用总是指向有效的对象。也就是说，当存在引用指向一个对象时，该对象不能被销毁。","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/scope/borrow.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"借用"}],["meta",{"property":"og:description","content":"借用 多数情况下，我们更希望能访问数据，同时不取得其所有权。为实现这点，Rust 使用了借用（borrowing）机制。对象可以通过引用（&T）来传递，从而取代通过值（T）来传递。 编译器（通过借用检查）静态地保证了引用总是指向有效的对象。也就是说，当存在引用指向一个对象时，该对象不能被销毁。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"借用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.45,"words":435},"filePathRelative":"scope/borrow.md","excerpt":"\\n<p>多数情况下，我们更希望能访问数据，同时不取得其所有权。为实现这点，Rust 使用了<strong>借用</strong>（borrowing）机制。对象可以通过引用（<code>&amp;T</code>）来传递，从而取代通过值（<code>T</code>）来传递。</p>\\n<p>编译器（通过借用检查）静态地保证了引用<strong>总是</strong>指向有效的对象。也就是说，当存在引用指向一个对象时，该对象不能被销毁。</p>\\n<div class=\\"language-rust,editable,ignore,mdbook-runnable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable,ignore,mdbook-runnable\\" data-title=\\"rust,editable,ignore,mdbook-runnable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>// 此函数取得一个 box 的所有权并销毁它</span></span>\\n<span class=\\"line\\"><span>fn eat_box_i32(boxed_i32: Box&lt;i32&gt;) {</span></span>\\n<span class=\\"line\\"><span>    println!(\\"Destroying box that contains {}\\", boxed_i32);</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// 此函数借用了一个 i32 类型</span></span>\\n<span class=\\"line\\"><span>fn borrow_i32(borrowed_i32: &amp;i32) {</span></span>\\n<span class=\\"line\\"><span>    println!(\\"This int is: {}\\", borrowed_i32);</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    // 创建一个装箱的 i32 类型，以及一个存在栈中的 i32 类型。</span></span>\\n<span class=\\"line\\"><span>    let boxed_i32 = Box::new(5_i32);</span></span>\\n<span class=\\"line\\"><span>    let stacked_i32 = 6_i32;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 借用了 box 的内容，但没有取得所有权，所以 box 的内容之后可以再次借用。</span></span>\\n<span class=\\"line\\"><span>    // 译注：请注意函数自身就是一个作用域，因此下面两个函数运行完成以后，</span></span>\\n<span class=\\"line\\"><span>    // 在函数中临时创建的引用也就不复存在了。</span></span>\\n<span class=\\"line\\"><span>    borrow_i32(&amp;boxed_i32);</span></span>\\n<span class=\\"line\\"><span>    borrow_i32(&amp;stacked_i32);</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    {</span></span>\\n<span class=\\"line\\"><span>        // 取得一个对 box 中数据的引用</span></span>\\n<span class=\\"line\\"><span>        let _ref_to_i32: &amp;i32 = &amp;boxed_i32;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>        // 报错！</span></span>\\n<span class=\\"line\\"><span>        // 当 `boxed_i32` 里面的值之后在作用域中被借用时，不能将其销毁。</span></span>\\n<span class=\\"line\\"><span>        eat_box_i32(boxed_i32);</span></span>\\n<span class=\\"line\\"><span>        // 改正 ^ 注释掉此行</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>        // 在 `_ref_to_i32` 里面的值被销毁后，尝试借用 `_ref_to_i32`</span></span>\\n<span class=\\"line\\"><span>        //（译注：如果此处不借用，则在上一行的代码中，eat_box_i32(boxed_i32)可以将 `boxed_i32` 销毁。）</span></span>\\n<span class=\\"line\\"><span>        borrow_i32(_ref_to_i32);</span></span>\\n<span class=\\"line\\"><span>        // `_ref_to_i32` 离开作用域且不再被借用。</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // `boxed_i32` 现在可以将所有权交给 `eat_box_i32` 并被销毁。</span></span>\\n<span class=\\"line\\"><span>    //（译注：能够销毁是因为已经不存在对 `boxed_i32` 的引用）</span></span>\\n<span class=\\"line\\"><span>    eat_box_i32(boxed_i32);</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"},{"title":"literals","link":"types/literals.html"},{"title":"testcase_units","link":"generics/phantom/testcase_units.html"}],"localMap":{"nodes":[{"id":"scope/borrow.md","value":{"title":"borrow","path":"scope/borrow.md","outlink":[],"backlink":["SUMMARY.md","types/literals.md","generics/phantom/testcase_units.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}},{"id":"types/literals.md","value":{"title":"literals","path":"types/literals.md","outlink":[],"backlink":[]}},{"id":"generics/phantom/testcase_units.md","value":{"title":"testcase_units","path":"generics/phantom/testcase_units.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"scope/borrow.md"},{"source":"types/literals.md","target":"scope/borrow.md"},{"source":"generics/phantom/testcase_units.md","target":"scope/borrow.md"}]}}}');export{t as comp,c as data};
