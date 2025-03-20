import{_ as i,e as l,k as e,f as n,g as p,h as t,r as d,o as c}from"./app-CVSWwIkE.js";const r={};function v(u,s){const a=d("RouteLink");return c(),l("div",null,[s[1]||(s[1]=e(`<h1 id="文件系统操作" tabindex="-1"><a class="header-anchor" href="#文件系统操作"><span>文件系统操作</span></a></h1><p><code>std::io::fs</code> 模块包含几个处理文件系统的函数。</p><div class="language-rust,ignore line-numbers-mode" data-highlighter="shiki" data-ext="rust,ignore" data-title="rust,ignore" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>use std::fs;</span></span>
<span class="line"><span>use std::fs::{File, OpenOptions};</span></span>
<span class="line"><span>use std::io;</span></span>
<span class="line"><span>use std::io::prelude::*;</span></span>
<span class="line"><span>use std::os::unix;</span></span>
<span class="line"><span>use std::path::Path;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// \`% cat path\` 的简单实现</span></span>
<span class="line"><span>fn cat(path: &amp;Path) -&gt; io::Result&lt;String&gt; {</span></span>
<span class="line"><span>    let mut f = File::open(path)?;</span></span>
<span class="line"><span>    let mut s = String::new();</span></span>
<span class="line"><span>    match f.read_to_string(&amp;mut s) {</span></span>
<span class="line"><span>        Ok(_) =&gt; Ok(s),</span></span>
<span class="line"><span>        Err(e) =&gt; Err(e),</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// \`% echo s &gt; path\` 的简单实现</span></span>
<span class="line"><span>fn echo(s: &amp;str, path: &amp;Path) -&gt; io::Result&lt;()&gt; {</span></span>
<span class="line"><span>    let mut f = File::create(path)?;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    f.write_all(s.as_bytes())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// \`% touch path\` 的简单实现（忽略已存在的文件）</span></span>
<span class="line"><span>fn touch(path: &amp;Path) -&gt; io::Result&lt;()&gt; {</span></span>
<span class="line"><span>    match OpenOptions::new().create(true).write(true).open(path) {</span></span>
<span class="line"><span>        Ok(_) =&gt; Ok(()),</span></span>
<span class="line"><span>        Err(e) =&gt; Err(e),</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;\`mkdir a\`&quot;);</span></span>
<span class="line"><span>    // 创建一个目录，返回 \`io::Result&lt;()&gt;\`</span></span>
<span class="line"><span>    match fs::create_dir(&quot;a&quot;) {</span></span>
<span class="line"><span>        Err(why) =&gt; println!(&quot;! {:?}&quot;, why.kind()),</span></span>
<span class="line"><span>        Ok(_) =&gt; {},</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\`echo hello &gt; a/b.txt\`&quot;);</span></span>
<span class="line"><span>    // 前面的匹配可以用 \`unwrap_or_else\` 方法简化</span></span>
<span class="line"><span>    echo(&quot;hello&quot;, &amp;Path::new(&quot;a/b.txt&quot;)).unwrap_or_else(|why| {</span></span>
<span class="line"><span>        println!(&quot;! {:?}&quot;, why.kind());</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\`mkdir -p a/c/d\`&quot;);</span></span>
<span class="line"><span>    // 递归地创建一个目录，返回 \`io::Result&lt;()&gt;\`</span></span>
<span class="line"><span>    fs::create_dir_all(&quot;a/c/d&quot;).unwrap_or_else(|why| {</span></span>
<span class="line"><span>        println!(&quot;! {:?}&quot;, why.kind());</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\`touch a/c/e.txt\`&quot;);</span></span>
<span class="line"><span>    touch(&amp;Path::new(&quot;a/c/e.txt&quot;)).unwrap_or_else(|why| {</span></span>
<span class="line"><span>        println!(&quot;! {:?}&quot;, why.kind());</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\`ln -s ../b.txt a/c/b.txt\`&quot;);</span></span>
<span class="line"><span>    // 创建一个符号链接，返回 \`io::Resutl&lt;()&gt;\`</span></span>
<span class="line"><span>    if cfg!(target_family = &quot;unix&quot;) {</span></span>
<span class="line"><span>        unix::fs::symlink(&quot;../b.txt&quot;, &quot;a/c/b.txt&quot;).unwrap_or_else(|why| {</span></span>
<span class="line"><span>        println!(&quot;! {:?}&quot;, why.kind());</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\`cat a/c/b.txt\`&quot;);</span></span>
<span class="line"><span>    match cat(&amp;Path::new(&quot;a/c/b.txt&quot;)) {</span></span>
<span class="line"><span>        Err(why) =&gt; println!(&quot;! {:?}&quot;, why.kind()),</span></span>
<span class="line"><span>        Ok(s) =&gt; println!(&quot;&gt; {}&quot;, s),</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\`ls a\`&quot;);</span></span>
<span class="line"><span>    // 读取目录的内容，返回 \`io::Result&lt;Vec&lt;Path&gt;&gt;\`</span></span>
<span class="line"><span>    match fs::read_dir(&quot;a&quot;) {</span></span>
<span class="line"><span>        Err(why) =&gt; println!(&quot;! {:?}&quot;, why.kind()),</span></span>
<span class="line"><span>        Ok(paths) =&gt; for path in paths {</span></span>
<span class="line"><span>            println!(&quot;&gt; {:?}&quot;, path.unwrap().path());</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\`rm a/c/e.txt\`&quot;);</span></span>
<span class="line"><span>    // 删除一个文件，返回 \`io::Result&lt;()&gt;\`</span></span>
<span class="line"><span>    fs::remove_file(&quot;a/c/e.txt&quot;).unwrap_or_else(|why| {</span></span>
<span class="line"><span>        println!(&quot;! {:?}&quot;, why.kind());</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\`rmdir a/c/d\`&quot;);</span></span>
<span class="line"><span>    // 移除一个空目录，返回 \`io::Result&lt;()&gt;\`</span></span>
<span class="line"><span>    fs::remove_dir(&quot;a/c/d&quot;).unwrap_or_else(|why| {</span></span>
<span class="line"><span>        println!(&quot;! {:?}&quot;, why.kind());</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是所期望的成功的输出：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rustc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fs.rs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./fs</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a\`</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hello </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a/b.txt\`</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a/c/d\`</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a/c/e.txt\`</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ../b.txt a/c/b.txt\`</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a/c/b.txt\`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hello</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a\`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;a/b.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a/c&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a/c/e.txt\`</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rmdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a/c/d\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>且 <code>a</code> 目录的最终状态为：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tree a</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>|-- b.txt</span></span>
<span class="line"><span>\`-- c</span></span>
<span class="line"><span>    \`-- b.txt -&gt; ../b.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 directory, 2 files</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种定义 <code>cat</code> 函数的方式是使用 <code>?</code> 标记：</p><div class="language-rust,ignore line-numbers-mode" data-highlighter="shiki" data-ext="rust,ignore" data-title="rust,ignore" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn cat(path: &amp;Path) -&gt; io::Result&lt;String&gt; {</span></span>
<span class="line"><span>    let mut f = File::open(path)?;</span></span>
<span class="line"><span>    let mut s = String::new();</span></span>
<span class="line"><span>    f.read_to_string(&amp;mut s)?;</span></span>
<span class="line"><span>    Ok(s)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参见" tabindex="-1"><a class="header-anchor" href="#参见"><span>参见：</span></a></h3>`,10)),n("p",null,[p(a,{to:"/attribute/cfg.html"},{default:t(()=>s[0]||(s[0]=[n("code",null,"cfg!",-1)])),_:1})])])}const m=i(r,[["render",v],["__file","fs.html.vue"]]),b=JSON.parse('{"path":"/std_misc/fs.html","title":"文件系统操作","lang":"zh-CN","frontmatter":{"description":"文件系统操作 std::io::fs 模块包含几个处理文件系统的函数。 下面是所期望的成功的输出： 且 a 目录的最终状态为： 另一种定义 cat 函数的方式是使用 ? 标记： 参见：","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/rust-by-example-cn-/std_misc/fs.html"}],["meta",{"property":"og:site_name","content":"rust-by-example-cn-"}],["meta",{"property":"og:title","content":"文件系统操作"}],["meta",{"property":"og:description","content":"文件系统操作 std::io::fs 模块包含几个处理文件系统的函数。 下面是所期望的成功的输出： 且 a 目录的最终状态为： 另一种定义 cat 函数的方式是使用 ? 标记： 参见："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件系统操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/rust-by-example-cn-/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.58,"words":473},"filePathRelative":"std_misc/fs.md","excerpt":"\\n<p><code>std::io::fs</code> 模块包含几个处理文件系统的函数。</p>\\n<div class=\\"language-rust,ignore line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"rust,ignore\\" data-title=\\"rust,ignore\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>use std::fs;</span></span>\\n<span class=\\"line\\"><span>use std::fs::{File, OpenOptions};</span></span>\\n<span class=\\"line\\"><span>use std::io;</span></span>\\n<span class=\\"line\\"><span>use std::io::prelude::*;</span></span>\\n<span class=\\"line\\"><span>use std::os::unix;</span></span>\\n<span class=\\"line\\"><span>use std::path::Path;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// `% cat path` 的简单实现</span></span>\\n<span class=\\"line\\"><span>fn cat(path: &amp;Path) -&gt; io::Result&lt;String&gt; {</span></span>\\n<span class=\\"line\\"><span>    let mut f = File::open(path)?;</span></span>\\n<span class=\\"line\\"><span>    let mut s = String::new();</span></span>\\n<span class=\\"line\\"><span>    match f.read_to_string(&amp;mut s) {</span></span>\\n<span class=\\"line\\"><span>        Ok(_) =&gt; Ok(s),</span></span>\\n<span class=\\"line\\"><span>        Err(e) =&gt; Err(e),</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// `% echo s &gt; path` 的简单实现</span></span>\\n<span class=\\"line\\"><span>fn echo(s: &amp;str, path: &amp;Path) -&gt; io::Result&lt;()&gt; {</span></span>\\n<span class=\\"line\\"><span>    let mut f = File::create(path)?;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    f.write_all(s.as_bytes())</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>// `% touch path` 的简单实现（忽略已存在的文件）</span></span>\\n<span class=\\"line\\"><span>fn touch(path: &amp;Path) -&gt; io::Result&lt;()&gt; {</span></span>\\n<span class=\\"line\\"><span>    match OpenOptions::new().create(true).write(true).open(path) {</span></span>\\n<span class=\\"line\\"><span>        Ok(_) =&gt; Ok(()),</span></span>\\n<span class=\\"line\\"><span>        Err(e) =&gt; Err(e),</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>fn main() {</span></span>\\n<span class=\\"line\\"><span>    println!(\\"`mkdir a`\\");</span></span>\\n<span class=\\"line\\"><span>    // 创建一个目录，返回 `io::Result&lt;()&gt;`</span></span>\\n<span class=\\"line\\"><span>    match fs::create_dir(\\"a\\") {</span></span>\\n<span class=\\"line\\"><span>        Err(why) =&gt; println!(\\"! {:?}\\", why.kind()),</span></span>\\n<span class=\\"line\\"><span>        Ok(_) =&gt; {},</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"`echo hello &gt; a/b.txt`\\");</span></span>\\n<span class=\\"line\\"><span>    // 前面的匹配可以用 `unwrap_or_else` 方法简化</span></span>\\n<span class=\\"line\\"><span>    echo(\\"hello\\", &amp;Path::new(\\"a/b.txt\\")).unwrap_or_else(|why| {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"! {:?}\\", why.kind());</span></span>\\n<span class=\\"line\\"><span>    });</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"`mkdir -p a/c/d`\\");</span></span>\\n<span class=\\"line\\"><span>    // 递归地创建一个目录，返回 `io::Result&lt;()&gt;`</span></span>\\n<span class=\\"line\\"><span>    fs::create_dir_all(\\"a/c/d\\").unwrap_or_else(|why| {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"! {:?}\\", why.kind());</span></span>\\n<span class=\\"line\\"><span>    });</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"`touch a/c/e.txt`\\");</span></span>\\n<span class=\\"line\\"><span>    touch(&amp;Path::new(\\"a/c/e.txt\\")).unwrap_or_else(|why| {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"! {:?}\\", why.kind());</span></span>\\n<span class=\\"line\\"><span>    });</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"`ln -s ../b.txt a/c/b.txt`\\");</span></span>\\n<span class=\\"line\\"><span>    // 创建一个符号链接，返回 `io::Resutl&lt;()&gt;`</span></span>\\n<span class=\\"line\\"><span>    if cfg!(target_family = \\"unix\\") {</span></span>\\n<span class=\\"line\\"><span>        unix::fs::symlink(\\"../b.txt\\", \\"a/c/b.txt\\").unwrap_or_else(|why| {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"! {:?}\\", why.kind());</span></span>\\n<span class=\\"line\\"><span>        });</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"`cat a/c/b.txt`\\");</span></span>\\n<span class=\\"line\\"><span>    match cat(&amp;Path::new(\\"a/c/b.txt\\")) {</span></span>\\n<span class=\\"line\\"><span>        Err(why) =&gt; println!(\\"! {:?}\\", why.kind()),</span></span>\\n<span class=\\"line\\"><span>        Ok(s) =&gt; println!(\\"&gt; {}\\", s),</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"`ls a`\\");</span></span>\\n<span class=\\"line\\"><span>    // 读取目录的内容，返回 `io::Result&lt;Vec&lt;Path&gt;&gt;`</span></span>\\n<span class=\\"line\\"><span>    match fs::read_dir(\\"a\\") {</span></span>\\n<span class=\\"line\\"><span>        Err(why) =&gt; println!(\\"! {:?}\\", why.kind()),</span></span>\\n<span class=\\"line\\"><span>        Ok(paths) =&gt; for path in paths {</span></span>\\n<span class=\\"line\\"><span>            println!(\\"&gt; {:?}\\", path.unwrap().path());</span></span>\\n<span class=\\"line\\"><span>        },</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"`rm a/c/e.txt`\\");</span></span>\\n<span class=\\"line\\"><span>    // 删除一个文件，返回 `io::Result&lt;()&gt;`</span></span>\\n<span class=\\"line\\"><span>    fs::remove_file(\\"a/c/e.txt\\").unwrap_or_else(|why| {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"! {:?}\\", why.kind());</span></span>\\n<span class=\\"line\\"><span>    });</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    println!(\\"`rmdir a/c/d`\\");</span></span>\\n<span class=\\"line\\"><span>    // 移除一个空目录，返回 `io::Result&lt;()&gt;`</span></span>\\n<span class=\\"line\\"><span>    fs::remove_dir(\\"a/c/d\\").unwrap_or_else(|why| {</span></span>\\n<span class=\\"line\\"><span>        println!(\\"! {:?}\\", why.kind());</span></span>\\n<span class=\\"line\\"><span>    });</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[{"title":"cfg","link":"attribute/cfg.html"}],"backlink":[{"title":"SUMMARY","link":"SUMMARY.html"}],"localMap":{"nodes":[{"id":"std_misc/fs.md","value":{"title":"fs","path":"std_misc/fs.md","outlink":["attribute/cfg.md"],"backlink":["SUMMARY.md"]}},{"id":"attribute/cfg.md","value":{"title":"cfg","path":"attribute/cfg.md","outlink":[],"backlink":[]}},{"id":"SUMMARY.md","value":{"title":"SUMMARY","path":"SUMMARY.md","outlink":[],"backlink":[]}}],"links":[{"source":"std_misc/fs.md","target":"attribute/cfg.md"},{"source":"SUMMARY.md","target":"std_misc/fs.md"}]}}}');export{m as comp,b as data};
