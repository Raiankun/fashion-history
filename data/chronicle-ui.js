/* 歴史・芸能・文学ページ（history.html, geino.html, bungaku.html）で共通の部品 */
const $ = s => document.querySelector(s);
const table = (head, rows) => `<thead><tr>${head.map(h => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c,i) => `<td data-l="${head[i]}"><span>${c}</span></td>`).join("")}</tr>`).join("")}</tbody>`;
const idTag = id => `<a class="sid" href="#${id}" data-copy="${id}" title="このIDのリンクをコピー">#${id}</a>`;
/* 出典：http で始まればそのURL、"en:" で始まれば英語版、それ以外は日本語版ウィキペディアの記事名 */
const srcUrl = s => s.startsWith("http") ? s : s.startsWith("en:") ? "https://en.wikipedia.org/wiki/" + encodeURIComponent(s.slice(3)) : "https://ja.wikipedia.org/wiki/" + encodeURIComponent(s);
const srcName = s => s.startsWith("http") ? new URL(s).hostname.replace(/^www\./, "") : s.startsWith("en:") ? "Wikipedia（英語）：" + s.slice(3).replace(/_/g, " ") : "Wikipedia：" + s;
const srcLink = s => `<a class="src-a" href="${srcUrl(s)}" target="_blank" rel="noopener">${srcName(s)} ↗</a>`;

const storyBox = st => `
   <div class="story">
    <span class="st-label">Story</span>
    <h4>${st.t}</h4>
    <p class="st-q">${st.q}</p>
    ${st.p.map(p => `<p>${p}</p>`).join("")}
   </div>`;
const triviaBox = tr => `
   <div class="trivia"><span class="tv-label">豆知識</span>
    <ul>${tr.map(t => `<li>${t}</li>`).join("")}</ul>
   </div>`;
const metaBox = e => `
   <details>
    <summary>出典とつながり</summary>
    <div class="tbl-wrap"><table class="tbl meta">${table(["項目","内容"], [
      ["出典", e.src.map(srcLink).join("<br>")],
      ...(e.x ? [["つながり", e.x.map(x => `<a href="${x[0]}">${x[1]} →</a>`).join("<br>")]] : [])])}</table></div>
   </details>`;
/* 時代カード。extra は年表のあとに差し込む HTML */
const eraCard = (e, evLabel = "教科書の年表", extra = "") => `
 <article class="era mv" id="${e.id}" style="--mc:${e.c}">
  <div class="swatch"><div class="years">${e.y}</div><div class="cloth"></div>${idTag(e.id)}</div>
  <div class="era-body">
   <h3>${e.t}<span class="en">${e.en}</span></h3>
   <p class="sum">${e.sum}</p>
   <h4 class="lbl">${evLabel}</h4>
   <div class="tbl-wrap"><table class="tbl events">${table(["年","できごと"], e.ev.map(v => [`<b>${v[0]}</b>`, v[1]]))}</table></div>
   ${extra}
   ${storyBox(e.st)}
   ${e.tr ? triviaBox(e.tr) : ""}
   ${e.watch ? `<h4 class="lbl">見方のポイント</h4><div class="tbl-wrap"><table class="tbl watch">${table(["ポイント","見るところ"], e.watch.map((w,i) => [`<span class="num">${i+1}</span><b>${w[0]}</b>`, w[1]]))}</table></div>` : ""}
   <h4 class="lbl">キーワード</h4>
   <ul class="signs">${e.key.map(k => `<li>${k}</li>`).join("")}</ul>
   ${metaBox(e)}
  </div>
 </article>`;
const jump = list => list.map(e => `<a class="mpill" href="#${e.id}" style="--mc:${e.c}">${e.t}</a>`).join("");
const storyCard = e => `
 <a class="st-card" href="#${e.id}" style="--mc:${e.c}">
  <span class="st-era">${e.t}<small>${e.y}</small></span>
  <b>${e.st.t}</b>
  <span class="st-q">${e.st.q}</span>
  <span class="st-go">読む →</span>
 </a>`;

document.addEventListener("click", e => {
  const a = e.target.closest("[data-copy]"); if (!a) return;
  const url = location.href.split("#")[0] + "#" + a.dataset.copy;
  try { navigator.clipboard.writeText(url).then(() => { a.classList.add("copied"); setTimeout(() => a.classList.remove("copied"), 1400); }, () => {}); } catch(_) {}
});

/* タブ。tabFor(id) は、ハッシュの id が属するタブを返す（なければ null） */
function initTabs(storageKey, defaultTab, tabFor){
  const showTab = id => {
    document.querySelectorAll("[data-tab]").forEach(b => b.setAttribute("aria-selected", b.dataset.tab === id));
    document.querySelectorAll("[data-panel]").forEach(p => p.hidden = p.id !== id);
    try { localStorage.setItem(storageKey, id); } catch(_) {}
  };
  document.querySelector("nav.tabs").addEventListener("click", e => {
    const b = e.target.closest("[data-tab]"); if (!b) return;
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    showTab(b.dataset.tab);
  });
  const route = () => {
    const h = decodeURIComponent(location.hash.slice(1)), el = h && document.getElementById(h);
    if (!el) return false;
    if (el.hasAttribute("data-panel")) { showTab(h); return true; }
    const t = tabFor(h) || (el.closest("[data-panel]") || {}).id;
    if (!t) return false;
    showTab(t); el.scrollIntoView({block:"start"}); return true;
  };
  window.addEventListener("hashchange", route);
  if (!route()) {
    let start = defaultTab;
    try { start = localStorage.getItem(storageKey) || defaultTab; } catch(_) {}
    showTab(document.getElementById(start) ? start : defaultTab);
  }
  return showTab;
}

/* 図のツールチップ：data-tip を持つ要素に重ねる・タップすると表示 */
(function(){
  const tip = document.createElement("div"); tip.className = "tip"; tip.hidden = true; tip.setAttribute("role", "tooltip");
  document.body.appendChild(tip);
  document.addEventListener("pointerover", e => {
    const t = e.target.closest("[data-tip]"); if (!t) { tip.hidden = true; return; }
    tip.innerHTML = t.dataset.tip; tip.hidden = false;
    const r = t.getBoundingClientRect(), w = tip.offsetWidth;
    tip.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.left + r.width / 2 - w / 2)) + "px";
    tip.style.top = (r.top + scrollY - tip.offsetHeight - 10) + "px";
  });
})();
/* 年号の文字列から最初の西暦を取り出す（「前」がつけば負の数） */
const yearOf = s => { const m = String(s).match(/(前)?(\d{1,4})年/); return m ? (m[1] ? -m[2] : +m[2]) : null; };
