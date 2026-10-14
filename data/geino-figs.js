/* 芸能ページの図（舞台のつくり、関係図、年表） */

const lbl = (x, y, t, cls = "stg", anchor = "middle") => `<text x="${x}" y="${y}" text-anchor="${anchor}" class="${cls}">${t}</text>`;
const tipRect = (x, y, w, h, fill, tip, extra = "") => `<rect class="hit" x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra} data-tip="${tip}"/>`;

/* 舞台のつくり（上から見た図・正面から見た図） */
const STAGES = {
 "g-noh": {t:"能舞台を上から見る", cap:"客席（見所）は正面と左横（脇正面）にあります。橋掛りは、あの世とこの世をつなぐ道とされます。",
  svg:`<svg viewBox="0 0 900 400" class="chart" role="img" aria-label="能舞台の平面図">
   <rect x="90" y="20" width="720" height="16" fill="#3E6E5E" opacity=".25"/>${lbl(450,32,"鏡板（老松の絵）")}
   ${tipRect(420,40,200,62,"#E8DCC6","<b>後座（あとざ）</b><br>囃子方（笛・小鼓・大鼓・太鼓）が座る",'rx="4"')}${lbl(520,76,"後座（囃子方）")}
   ${tipRect(420,104,200,200,"#F3E9D6","<b>本舞台</b><br>約6m四方。檜の板張り",'rx="2" stroke="#8C6A4F" stroke-width="2"')}${lbl(520,210,"本舞台",'stg')}${lbl(520,228,"約6m四方","stg s")}
   ${tipRect(624,104,58,200,"#E1D2B8","<b>地謡座</b><br>8人ほどの地謡（コーラス）が2列に座る",'rx="4"')}${lbl(653,210,"地謡座")}
   <polygon points="110,52 420,52 420,98 110,86" fill="#E8DCC6" stroke="#8C6A4F" stroke-width="1.5"/><rect class="hit" x="110" y="52" width="310" height="40" fill="transparent" data-tip="<b>橋掛り</b><br>役者が登場・退場する通路。ここでの演技も見どころ"/>${lbl(265,76,"橋掛り")}
   <rect x="86" y="44" width="22" height="52" rx="3" fill="#B4532A"/>${lbl(97,116,"揚幕","stg s")}
   ${[[360,"一の松"],[280,"二の松"],[200,"三の松"]].map(p => `<circle class="hit" cx="${p[0]}" cy="120" r="10" fill="#3E6E5E" data-tip="<b>${p[1]}</b><br>橋掛りの前に植えた松。役者の立ち位置の目安になる"/>${lbl(p[0],146,p[1],"stg s")}`).join("")}
   ${[[420,104,"シテ柱","主人公（シテ）が立つ基準の柱"],[620,104,"笛柱","笛方の近くの柱"],[420,304,"目付柱","面をつけたシテが位置を確かめる目印"],[620,304,"ワキ柱","ワキが座る近くの柱"]].map(p => `<rect class="hit" x="${p[0]-7}" y="${p[1]-7}" width="14" height="14" fill="#5A4632" data-tip="<b>${p[2]}</b><br>${p[3]}"/>`).join("")}
   ${lbl(428,124,"シテ柱","stg s","start")}${lbl(640,98,"笛柱","stg s","start")}${lbl(400,322,"目付柱","stg s","end")}${lbl(640,322,"ワキ柱","stg s","start")}
   <rect x="420" y="330" width="260" height="56" rx="8" fill="#fff" stroke="var(--hair)"/>${lbl(550,363,"見所：正面")}
   <rect x="150" y="170" width="250" height="150" rx="8" fill="#fff" stroke="var(--hair)"/>${lbl(275,250,"見所：脇正面")}
   <polygon points="400,320 420,330 300,386 150,386 150,330" fill="#fff" stroke="var(--hair)"/>${lbl(300,370,"中正面")}
  </svg>`},
 "g-kabuki": {t:"歌舞伎の劇場を上から見る", cap:"客席を貫く花道と、回り舞台・せりが歌舞伎の劇場の特徴です。舞台に向かって右が上手、左が下手です。",
  svg:`<svg viewBox="0 0 900 400" class="chart" role="img" aria-label="歌舞伎の劇場の平面図">
   ${tipRect(150,30,600,170,"#F3E9D6","<b>本舞台</b><br>間口が広く、横長の舞台",'rx="4" stroke="#8C6A4F" stroke-width="2"')}
   <circle class="hit" cx="450" cy="115" r="70" fill="#EAD9BD" stroke="#B4532A" stroke-dasharray="6 5" stroke-width="2" data-tip="<b>回り舞台</b><br>床を回して、一瞬で場面を変える"/>${lbl(450,98,"回り舞台")}
   ${tipRect(410,120,80,22,"#D9C3A0","<b>大ぜり</b><br>床が上下し、役者や大道具がせり上がる",'rx="3"')}${lbl(450,136,"せり","stg s")}
   ${tipRect(150,30,60,170,"#2B2826","<b>黒御簾（下座）</b><br>効果音や伴奏を、黒い簾の中で演奏する",'rx="3" opacity=".85"')}<text x="180" y="118" text-anchor="middle" class="stg" fill="#fff" style="fill:#fff">黒御簾</text>
   ${tipRect(690,30,60,110,"#B4532A","<b>床（ゆか）</b><br>義太夫の太夫と三味線が座る",'rx="3" opacity=".8"')}<text x="720" y="90" text-anchor="middle" class="stg" style="fill:#fff">床</text>
   <rect x="150" y="196" width="600" height="8" fill="url(#jgk)"/><defs><pattern id="jgk" width="72" height="8" patternUnits="userSpaceOnUse"><rect width="24" height="8" fill="#1E1B18"/><rect x="24" width="24" height="8" fill="#B4532A"/><rect x="48" width="24" height="8" fill="#2F6B4A"/></pattern></defs>
   ${lbl(810,204,"定式幕","stg s","start")}
   ${tipRect(196,204,34,180,"#E8DCC6","<b>花道</b><br>客席を通る通路。登場・退場の見せ場",'stroke="#8C6A4F" stroke-width="1.5"')}${lbl(188,330,"花道","stg","end")}
   ${tipRect(198,250,30,18,"#B4532A","<b>すっぽん</b><br>花道の七三にある小さなせり。妖怪や幽霊が現れる",'rx="3"')}${lbl(188,264,"すっぽん（七三）","stg s","end")}
   ${tipRect(190,384,46,12,"#2B2826","<b>揚幕</b><br>花道の突き当たりの幕。チャリンという音とともに開く",'rx="2"')}${lbl(250,394,"揚幕","stg s","start")}
   <rect x="250" y="220" width="500" height="160" rx="10" fill="#fff" stroke="var(--hair)"/>${lbl(500,305,"客席")}
   ${lbl(760,24,"上手","stg s","end")}${lbl(140,24,"下手","stg s","end")}
  </svg>`},
 "g-bunraku": {t:"文楽の舞台を正面から見る", cap:"人形遣いは、手摺の奥の一段低い「船底」に立ちます。語りの太夫と三味線は、客席の右手の「床」に並びます。",
  svg:`<svg viewBox="0 0 900 360" class="chart" role="img" aria-label="文楽の舞台の正面図">
   <rect x="60" y="30" width="620" height="200" rx="4" fill="#F3E9D6" stroke="#8C6A4F" stroke-width="2"/>${lbl(370,52,"舞台（背景の大道具）")}
   ${tipRect(60,150,620,14,"#7A4A8A","<b>手摺（てすり）</b><br>人形の足元を隠す板。この上が人形の「地面」になる",'opacity=".85"')}${lbl(370,183,"本手摺","stg s")}
   ${tipRect(60,190,620,40,"#D9C3A0","<b>船底（ふなぞこ）</b><br>人形遣いが立つ、一段低くした床")}${lbl(370,215,"船底（人形遣いが立つ）","stg s")}
   ${[[260,"#2B2826","主遣い","頭と右手。舞台下駄をはく"],[310,"#3E3A40","左遣い","左手を担当"],[350,"#3E3A40","足遣い","足を担当。女形の人形には足がなく、着物の裾で表す"]].map((p,i) => `<g class="hit" data-tip="<b>${p[2]}</b><br>${p[3]}"><circle cx="${p[0]}" cy="${92 + i*8}" r="12" fill="${p[1]}"/><rect x="${p[0]-14}" y="${104 + i*8}" width="28" height="${70 - i*8}" rx="6" fill="${p[1]}"/></g>`).join("")}
   <g class="hit" data-tip="<b>人形</b><br>大きなものは10kgを超える"><circle cx="230" cy="96" r="9" fill="#F6E3C8" stroke="#7A4A8A"/><rect x="220" y="106" width="20" height="40" rx="5" fill="#B0548A"/></g>${lbl(200,90,"人形","stg s","end")}
   ${lbl(250,250,"主遣い","stg s")}${lbl(310,250,"左遣い","stg s")}${lbl(370,250,"足遣い","stg s")}
   <rect x="700" y="60" width="150" height="170" rx="8" fill="#fff" stroke="#8C6A4F" stroke-width="1.5"/>
   <path class="hit" d="M705 180 A70 40 0 0 1 845 180" fill="#EAD9BD" stroke="#B4532A" stroke-dasharray="5 4" data-tip="<b>床（ゆか）と盆</b><br>回転する台。くるりと回って太夫と三味線が現れる"/>
   <g class="hit" data-tip="<b>太夫</b><br>一人で全員のせりふと地の文を語る"><circle cx="745" cy="128" r="11" fill="#2B2826"/><rect x="730" y="140" width="30" height="34" rx="6" fill="#2B2826"/></g>
   <g class="hit" data-tip="<b>三味線</b><br>太棹の三味線で、情景と感情を弾き分ける"><circle cx="805" cy="128" r="11" fill="#3E3A40"/><rect x="790" y="140" width="30" height="34" rx="6" fill="#3E3A40"/></g>
   ${lbl(745,206,"太夫","stg s")}${lbl(805,206,"三味線","stg s")}${lbl(775,52,"床（客席の右手）")}
   <rect x="60" y="270" width="790" height="70" rx="10" fill="#fff" stroke="var(--hair)"/>${lbl(455,310,"客席")}
  </svg>`},
 "g-rakugo": {t:"寄席の高座を正面から見る", cap:"道具は扇子と手拭いだけ。高座の脇の「めくり」に、次の演者の名前が出ます。",
  svg:`<svg viewBox="0 0 900 340" class="chart" role="img" aria-label="寄席の高座の正面図">
   <rect x="120" y="30" width="660" height="190" rx="4" fill="#F3E9D6"/>${lbl(450,52,"後ろの襖・屏風")}
   ${tipRect(250,200,400,36,"#8C6A4F","<b>高座</b><br>客席より一段高い台",'rx="3"')}${lbl(450,224,"高座","stg",'middle').replace('class="stg"','class="stg" style="fill:#fff"')}
   ${tipRect(395,178,110,24,"#B4532A","<b>座布団</b><br>出番ごとに前座がひっくり返す（高座返し）",'rx="8"')}
   <g class="hit" data-tip="<b>噺家</b><br>顔の向き（上下）で人物を演じ分ける"><circle cx="450" cy="110" r="22" fill="#2B2826"/><path d="M415 180 Q450 120 485 180 Z" fill="#2E4A6E"/></g>
   <g class="hit" data-tip="<b>扇子</b><br>箸、筆、刀、煙管などに見立てる"><rect x="486" y="140" width="40" height="7" rx="3" fill="#C9A227" transform="rotate(-25 486 140)"/></g>${lbl(540,128,"扇子","stg s","start")}
   <g class="hit" data-tip="<b>手拭い</b><br>財布、手紙、本などに見立てる"><rect x="398" y="160" width="26" height="14" rx="2" fill="#5E8A6E"/></g>${lbl(380,160,"手拭い","stg s","end")}
   <g class="hit" data-tip="<b>めくり</b><br>演者の名前を書いた紙。出番ごとにめくる"><rect x="150" y="120" width="56" height="96" fill="#fff" stroke="#8C6A4F"/>${["演","者","の","名"].map((c,i) => lbl(178, 146 + i*18, c)).join("")}</g>${lbl(178,234,"めくり","stg s")}
   ${tipRect(700,70,60,120,"#2B2826","<b>出囃子・下座</b><br>舞台袖で三味線と太鼓が、演者ごとの曲を弾く",'rx="4" opacity=".85"')}<text x="730" y="134" text-anchor="middle" class="stg s" style="fill:#fff">下座</text>
   <rect x="120" y="260" width="660" height="66" rx="10" fill="#fff" stroke="var(--hair)"/>${lbl(450,298,"客席")}
  </svg>`},
 "g-kodan": {t:"講談の高座を正面から見る", cap:"講談師の前に置く小さな机が釈台です。張り扇で叩いて調子をとり、扇子は小道具として使います。",
  svg:`<svg viewBox="0 0 900 320" class="chart" role="img" aria-label="講談の高座の正面図">
   <rect x="120" y="30" width="660" height="170" rx="4" fill="#F3E9D6"/>
   ${tipRect(250,180,400,34,"#8C6A4F","<b>高座</b>",'rx="3"')}
   ${tipRect(395,160,110,22,"#2F4F8A","<b>座布団</b>",'rx="8"')}
   <g class="hit" data-tip="<b>講談師</b><br>地の文で物語を「読む」"><circle cx="450" cy="78" r="22" fill="#2B2826"/><path d="M415 160 Q450 100 485 160 Z" fill="#3E3A40"/></g>
   ${tipRect(360,130,180,30,"#5A4632","<b>釈台（しゃくだい）</b><br>講談師の前に置く小さな机",'rx="3"')}${lbl(450,150,"釈台").replace('class="stg"','class="stg" style="fill:#fff"')}
   <g class="hit" data-tip="<b>張り扇</b><br>和紙を重ねて作る。釈台を叩いて場面を区切る"><rect x="500" y="112" width="54" height="12" rx="4" fill="#F6E3C8" stroke="#8C6A4F" transform="rotate(-20 500 112)"/></g>${lbl(566,100,"張り扇","stg s","start")}
   <g class="hit" data-tip="<b>扇子</b><br>刀や筆に見立てるほか、もう一方の手で釈台を叩くことも"><rect x="350" y="112" width="40" height="7" rx="3" fill="#C9A227" transform="rotate(20 390 112)"/></g>${lbl(336,104,"扇子","stg s","end")}
   <rect x="120" y="240" width="660" height="66" rx="10" fill="#fff" stroke="var(--hair)"/>${lbl(450,278,"客席")}
  </svg>`}
};

/* 5つの芸能の関係図 */
const RELATION_SVG = (() => {
  const N = {noh:[150,80,"能・狂言","#3E6E5E","g-noh"], kabuki:[450,190,"歌舞伎","#B0352B","g-kabuki"], bunraku:[150,300,"人形浄瑠璃","#7A4A8A","g-bunraku"], kodan:[750,80,"講談","#2F4F8A","g-kodan"], rakugo:[750,300,"落語","#C07A1E","g-rakugo"]};
  const E = [["noh","kabuki","『安宅』→『勧進帳』など、能の演目を移す（松羽目物）"],["bunraku","kabuki","忠臣蔵など人気演目を移す（義太夫狂言）"],["kodan","kabuki","白浪物など、講談の筋が芝居に"],["rakugo","kabuki","『文七元結』『芝浜』が芝居に"],["kodan","rakugo","同じ寄席に出演。題材も共有"],["noh","bunraku","道成寺など、能の物語を浄瑠璃に"]];
  let g = `<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8C6A4F"/></marker></defs>`;
  E.forEach(([a, b, t]) => {
    const [x1, y1] = N[a], [x2, y2] = N[b], dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy), ux = dx / d, uy = dy / d;
    const sx = x1 + ux * 62, sy = y1 + uy * 30, ex = x2 - ux * 66, ey = y2 - uy * 32;
    g += `<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" stroke="#8C6A4F" stroke-width="1.6" marker-end="url(#ar)" ${a === "kodan" && b === "rakugo" ? 'marker-start="url(#ar)"' : ""}/>`;
    const mx = (sx + ex) / 2, my = (sy + ey) / 2;
    g += `<g class="hit" data-tip="${t}"><rect x="${mx - 13}" y="${my - 13}" width="26" height="26" rx="13" fill="#fff" stroke="#8C6A4F"/><text x="${mx}" y="${my + 5}" text-anchor="middle" class="edgel">${E.findIndex(e => e[2] === t) + 1}</text></g>`;
  });
  Object.values(N).forEach(([x, y, t, c, id]) => g += `<a href="#${id}"><rect class="hit" x="${x - 62}" y="${y - 28}" width="124" height="56" rx="28" fill="${c}" data-tip="<b>${t}</b><br>押すとこの芸能のタブへ"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="nodel" style="fill:#fff">${t}</text></a>`);
  return { svg:`<svg viewBox="0 0 900 380" class="chart" role="img" aria-label="5つの芸能の関係図">${g}</svg>`, edges:E.map((e, i) => [i + 1, N[e[0]][2] + " → " + N[e[1]][2], e[2]]) };
})();
