import{_ as s,e as a,k as e,o as i}from"./app-CVSWwIkE.js";const l={};function p(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="通道" tabindex="-1"><a class="header-anchor" href="#通道"><span>通道</span></a></h1><p>Rust 为线程之间的通信提供了异步的通道（<code>channel</code>）。通道允许两个端点之间信息的单向流动：<code>Sender</code>（发送端） 和 <code>Receiver</code>（接收端）。</p><div class="language-rust,editable line-numbers-mode" data-highlighter="shiki" data-ext="rust,editable" data-title="rust,editable" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>use std::sync::mpsc::{Sender, Receiver};</span></span>
<span class="line"><span>use std::sync::mpsc;</span></span>
<span class="line"><span>use std::thread;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static NTHREADS: i32 = 3;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // 通道有两个端点：\`Sender&lt;T&gt;\` 和 \`Receiver&lt;T&gt;\`，其中 \`T\` 是要发送</span></span>
<span class="line"><span>    // 的消息的类型（类型标注是可选的）</span></span>
<span class="line"><span>    let (tx, rx): (Sender&lt;i32&gt;, Receiver&lt;i32&gt;) = mpsc::channel();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for id in 0..NTHREADS {</span></span>
<span class="line"><span>        // sender 端可被复制</span></span>
<span class="line"><span>        let thread_tx = tx.clone();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 每个线程都将通过通道来发送它的 id</span></span>
<span class="line"><span>        thread::spawn(move || {</span></span>
<span class="line"><span>            // 被创建的线程取得 \`thread_tx\` 的所有权</span></span>
<span class="line"><span>            // 每个线程都把消息放在通道的消息队列中</span></span>
<span class="line"><span>            thread_tx.send(id).unwrap();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 发送是一个非阻塞（non-blocking）操作，线程将在发送完消息后</span></span>
<span class="line"><span>            // 会立即继续进行</span></span>
<span class="line"><span>            println!(&quot;thread {} finished&quot;, id);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 所有消息都在此处被收集</span></span>
<span class="line"><span>    let mut ids = Vec::with_capacity(NTHREADS as usize);</span></span>
<span class="line"><span>    for _ in 0..NTHREADS {</span></span>
<span class="line"><span>        // \`recv\` 方法从通道中拿到一个消息</span></span>
<span class="line"><span>        // 若无可用消息的话，\`recv\` 将阻止当前线程</span></span>
<span class="line"><span>        ids.push(rx.recv());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 显示消息被发送的次序</span></span>
<span class="line"><span>    println!(&quot;{:?}&quot;, ids);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const t=s(l,[["render",p],["__file","channels.html.vue"]]),r=JSON.parse('{"path":"/std_misc/channels.html","title":"通道","lang":"zh-CN","frontmatter":{"description":"通道 Rust 为线程之间的通信提供了异步的通道（channel）。通道允许两个端点之间信息的单向流动：Sender（发送端） 和 Receiver（接收端）。","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/std_misc/channels.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"通道"}],["meta",{"property":"og:description","content":"通道 Rust 为线程之间的通信提供了异步的通道（channel）。通道允许两个端点之间信息的单向流动：Sender（发送端） 和 Receiver（接收端）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通道\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"std_misc/channels.md","excerpt":"\\n<p>Rust 为线程之间的通信提供了异步的通道（<code>channel</code>）。通道允许两个端点之间信息的单向流动：<code>Sender</code>（发送端） 和 <code>Receiver</code>（接收端）。</p>\\n<div class=\\"language-rust,editable line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,editable\\" data-title=\\"rust,editable\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>use std::sync::mpsc::{Sender, Receiver};</span></span>\\n<span class=\\"line\\"><span>use std::sync::mpsc;</span></span>\\n<span class=\\"line\\"><span>use std::thread;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>static NTHREADS: i32 = 3;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    // 通道有两个端点：`Sender&lt;T&gt;` 和 `Receiver&lt;T&gt;`，其中 `T` 是要发送</span></span>\\n<span class=\\"line\\"><span>    // 的消息的类型（类型标注是可选的）</span></span>\\n<span class=\\"line\\"><span>    let (tx, rx): (Sender&lt;i32&gt;, Receiver&lt;i32&gt;) = mpsc::channel();</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    for id in 0..NTHREADS {</span></span>\\n<span class=\\"line\\"><span>        // sender 端可被复制</span></span>\\n<span class=\\"line\\"><span>        let thread_tx = tx.clone();</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>        // 每个线程都将通过通道来发送它的 id</span></span>\\n<span class=\\"line\\"><span>        thread::spawn(move || {</span></span>\\n<span class=\\"line\\"><span>            // 被创建的线程取得 `thread_tx` 的所有权</span></span>\\n<span class=\\"line\\"><span>            // 每个线程都把消息放在通道的消息队列中</span></span>\\n<span class=\\"line\\"><span>            thread_tx.send(id).unwrap();</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>            // 发送是一个非阻塞（non-blocking）操作，线程将在发送完消息后</span></span>\\n<span class=\\"line\\"><span>            // 会立即继续进行</span></span>\\n<span class=\\"line\\"><span>            println!(\\"thread {} finished\\", id);</span></span>\\n<span class=\\"line\\"><span>        });</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 所有消息都在此处被收集</span></span>\\n<span class=\\"line\\"><span>    let mut ids = Vec::with_capacity(NTHREADS as usize);</span></span>\\n<span class=\\"line\\"><span>    for _ in 0..NTHREADS {</span></span>\\n<span class=\\"line\\"><span>        // `recv` 方法从通道中拿到一个消息</span></span>\\n<span class=\\"line\\"><span>        // 若无可用消息的话，`recv` 将阻止当前线程</span></span>\\n<span class=\\"line\\"><span>        ids.push(rx.recv());</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    // 显示消息被发送的次序</span></span>\\n<span class=\\"line\\"><span>    println!(\\"{:?}\\", ids);</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"std_misc/channels.md","value":{"title":"channels","path":"std_misc/channels.md","outlink":[],"backlink":["SUMMARY.md"]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"SUMMARY.md","target":"std_misc/channels.md"}]}}}');export{t as comp,r as data};
