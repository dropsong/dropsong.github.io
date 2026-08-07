const h={js:"JS",javascript:"JS",jsx:"JSX",ts:"TS",typescript:"TS",tsx:"TSX",py:"Python",python:"Python",cpp:"C++",cxx:"C++",cc:"C++",c:"C",cs:"C#",csharp:"C#",java:"Java",go:"Go",rust:"Rust",rs:"Rust",sh:"Shell",bash:"Shell",zsh:"Shell",shell:"Shell",html:"HTML",css:"CSS",scss:"SCSS",json:"JSON",yaml:"YAML",yml:"YAML",toml:"TOML",md:"Markdown",markdown:"Markdown",tex:"TeX",latex:"LaTeX",sql:"SQL"};function m(o){if(!o)return"Text";const e=o.trim().toLowerCase();return h[e]||e.charAt(0).toUpperCase()+e.slice(1)}function g(o,e){const r=o.dataset.language||e?.dataset?.language;if(r)return r;for(const a of[...o.classList,...e?.classList||[]]){if(a.startsWith("language-"))return a.replace("language-","");if(a.startsWith("lang-"))return a.replace("lang-","")}return null}function d(o){(o||document).querySelectorAll(".article-body pre").forEach(e=>{if(e.dataset.codeEnhanced==="true")return;e.dataset.codeEnhanced="true";const r=e.querySelector("code"),a=g(e,r),i=document.createElement("div");i.className="code-block-wrapper";const s=document.createElement("div");s.className="code-toolbar";const c=document.createElement("span");c.className="code-lang-badge",c.textContent=m(a),s.appendChild(c);const n=document.createElement("button");if(n.className="code-copy-btn",n.setAttribute("aria-label","Copy code"),n.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',n.addEventListener("click",async()=>{const t=r?.textContent||e.textContent||"";try{await navigator.clipboard.writeText(t),n.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',n.classList.add("copied"),setTimeout(()=>{n.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',n.classList.remove("copied")},2e3)}catch{const l=document.createElement("textarea");l.value=t,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}}),s.appendChild(n),e.parentNode?.insertBefore(i,e),i.appendChild(s),i.appendChild(e),(r?.textContent||e.textContent||"").split(`
`).length>15){e.style.maxHeight=`${15*1.6}em`,e.style.overflowY="hidden",e.classList.add("code-collapsed");const t=document.createElement("button");t.className="code-fold-btn",t.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>',t.title="展开",t.addEventListener("click",()=>{e.classList.contains("code-collapsed")?(e.style.maxHeight="",e.style.overflowY="",e.classList.remove("code-collapsed"),t.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/></svg>',t.title="收起"):(e.style.maxHeight=`${15*1.6}em`,e.style.overflowY="hidden",e.classList.add("code-collapsed"),t.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>',t.title="展开",requestAnimationFrame(()=>{t.scrollIntoView({block:"center",behavior:"instant"})}))}),i.appendChild(t)}})}const p=document.createElement("style");p.textContent=`
    .code-block-wrapper {
      position: relative;
      margin: 1.2em 0;
    }
    .code-block-wrapper pre {
      margin: 0;
      padding: 12px 16px 12px 1px;
    }
    .code-toolbar {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      z-index: 3;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      opacity: 0;
      transform: translateY(-2px);
      transition: opacity 0.18s ease, transform 0.18s ease;
      pointer-events: none;
    }
    .code-block-wrapper:hover .code-toolbar {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    .code-lang-badge {
      display: inline-flex;
      align-items: center;
      height: 1.65rem;
      padding: 0 0.5rem;
      border: 1px solid rgba(150,120,95,0.22);
      border-radius: 0.35rem;
      background: rgba(255,250,245,0.86);
      color: var(--muted);
      font-size: 0.72rem;
      line-height: 1;
      font-family: var(--font-sans);
      user-select: none;
    }
    .code-copy-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.65rem;
      height: 1.65rem;
      border: 1px solid rgba(150,120,95,0.22);
      border-radius: 0.35rem;
      background: rgba(255,250,245,0.86);
      color: var(--muted);
      cursor: pointer;
      transition: color 0.15s;
    }
    .code-copy-btn:hover {
      color: var(--accent);
      background: rgba(255,255,255,0.95);
    }
    .code-copy-btn.copied {
      color: #22c55e;
    }
    .code-fold-btn {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0.35rem;
      background: transparent;
      border: none;
      border-top: 1px solid rgba(180,155,130,0.15);
      color: var(--muted);
      opacity: 0.45;
      cursor: pointer;
      transition: opacity 0.15s;
    }
    .code-fold-btn:hover {
      opacity: 0.8;
      color: var(--accent);
    }

    /* ── Line numbers via CSS counters ── */
    .code-block-wrapper pre code {
      counter-reset: line-number 0;
    }
    .code-block-wrapper .line {
      display: inline-block;
      width: 100%;
    }
    .code-block-wrapper .line::before {
      counter-increment: line-number;
      content: counter(line-number);
      display: inline-block;
      width: 2.5em;
      margin-right: 1.25em;
      text-align: right;
      color: rgba(180, 155, 130, 0.55);
      font-size: 0.82em;
      font-family: var(--font-mono, monospace);
      user-select: none;
      flex-shrink: 0;
    }
  `;document.head.appendChild(p);document.addEventListener("astro:page-load",()=>d());document.addEventListener("blog:article-unlocked",o=>{const e=o.detail?.root;e&&d(e)});d();
