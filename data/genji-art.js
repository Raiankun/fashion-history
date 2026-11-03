/* 源氏物語の絵（genji.html で使う）
   すべてパブリックドメインの作品です。画像はウィキメディア・コモンズから取得し、images/genji/ に置いています。
   lic はコモンズのファイルページに付いているライセンス表示です。 */

const GJ_ART_SETS = {
 emaki:{t:"国宝『源氏物語絵巻』", d:"12世紀前半（平安時代後期）", where:"徳川美術館・五島美術館",
  sum:"現存する最古の源氏物語の絵で、日本の絵巻の代表作です。物語の本文を書いた「詞書」と絵が交互に続きます。今に伝わるのは、もとの絵巻のごく一部です。"},
 mitsunobu:{t:"土佐光信『源氏物語画帖』", d:"16世紀初め（室町時代）", where:"ハーバード美術館",
  sum:"宮廷の絵所を率いた土佐光信（1434〜1525年）による、54帖すべてを1図ずつ描いた画帖。金の雲（すやり霞）で場面を区切る、土佐派の源氏絵の型がよくわかります。"},
 mitsuoki:{t:"土佐光起「石山寺の紫式部」", d:"17世紀（江戸時代）", where:"ハーバード美術館",
  sum:"土佐光起（1617〜1691年）による画帖の扉絵。紫式部が石山寺で月を見て源氏物語を思いついた、という伝説を描きます。"}
};

/* [キー, ファイル, 組, 巻, 場面の説明, コモンズのファイル名, ライセンス表示] */
const GJ_ART = [
 ["murasaki","murasaki-ishiyama.jpg","mitsuoki","","湖を望む石山寺の一室で、机に向かう紫式部。石山寺にこもって十五夜の月を眺め、源氏物語を書き始めた、という伝説にもとづく","Tosa_Mitsuoki_土佐光起_-_Landscape_with_Murasaki_Shikibu_writing_at_Ishiyamadera_(Frontispiece_to_an_album_containing_54_illu_-_1985.352.55_-_Harvard_Art_Museums.jpg","PD-Art（作者は1691年没）"],
 ["m01","m01-kiritsubo.jpg","mitsunobu","桐壺","宮中の桐壺の場面。御殿の屋根を取り払い、中の人物を上から見せる","Tosa_Mitsunobu_-_The_Paulownia_Pavilion_(Kiritsubo),_Illustration_to_Chapter_1_of_the_Tale_of_Genji_(Genji_monogatari)_-_1985.352.1.A_-_Arthur_M._Sackler_Museum.jpg","PD-Art（作者は1525年没）"],
 ["m05","m05-wakamurasaki.jpg","mitsunobu","若紫","右下で柴垣の陰から屋敷をのぞくのが源氏。縁側には尼君と少女（のちの紫の上）。満開の桜が北山の春を示す","Tosa_Mitsunobu_-_Young_Murasaki_(Wakamurasaki),_Illustration_to_Chapter_5_of_the_Tale_of_Genji_(Genji_monogatari)_-_1985.352.5.A_-_Harvard_Art_Museums.jpg","PD-Art（作者は1525年没）"],
 ["m09","m09-aoi.jpg","mitsunobu","葵","賀茂の祭の見物で、牛車がひしめき合い、従者たちがもみ合う。葵の上と六条御息所の「車争い」の場面","Tosa_Mitsunobu_-_Heart-to-Heart_(Aoi),_Illustration_to_Chapter_9_of_the_Tale_of_Genji_(Genji_monogatari)_-_1985.352.9.A_-_Arthur_M._Sackler_Museum.jpg","PD-Art（作者は1525年没）"],
 ["m12","m12-suma.jpg","mitsunobu","須磨","海辺の住まいと、波の上をゆく船。都を離れた源氏の、須磨での暮らしを描く","Tosa_Mitsunobu_-_Suma,_Illustration_to_Chapter_12_of_the_Tale_of_Genji_(Genji_monogatari)_-_1985.352.12.A_-_Harvard_Art_Museums.jpg","PD-Art（作者は1525年没）"],
 ["m34","m34-wakana.jpg","mitsunobu","若菜上","桜の下で若者たちが蹴鞠をし、宙に鞠が舞う。縁側の御簾の下から子猫が走り出て、奥の女三の宮の姿があらわになっている","Tosa_Mitsunobu_-_Spring_Shoots_I_(Wakana,_jō),_Illustration_to_Chapter_34_of_the_Tale_of_Genji_(Genji_monogatari)_-_1985.352.34.A_-_Arthur_M._Sackler_Museum.jpg","PD-Art（作者は1525年没）"],
 ["m54","m54-yumenoukihashi.jpg","mitsunobu","夢浮橋","小野の山里の住まいから、浮舟が山道をゆく人々の松明の列を見つめる。薫の一行とされる","Tosa_Mitsunobu_-_The_Floating_Bridge_of_Dreams_(Yume_no_Ukihashi),_Illustration_to_Chapter_54_of_the_Tale_of_Genji_(Genji_monogatari)_-_1985.352.54.A_-_Arthur_M._Sackler_Museum.jpg","PD-Art（作者は1525年没）"],
 ["e15","e15-yomogiu.jpg","emaki","蓬生","草の生い茂った末摘花の屋敷を、源氏が訪ねる。従者の惟光が、草の露を払いながら道をつくる","Genji_emaki_Yomogiu.JPG","PD-old（12世紀の作品）"],
 ["e16","e16-sekiya.jpg","emaki","関屋","逢坂の関で、石山寺へ詣でる源氏の行列と、夫と旅する空蝉の一行がすれ違う","Genji_emaki_sekiya.jpg","PD-old（12世紀の作品）"],
 ["e36","e36-kashiwagi.jpg","emaki","柏木","生まれたばかりの薫を、源氏が抱く。薫の本当の父は柏木であることを、源氏は知っている","Genji_emaki_Kashiwagi.JPG","PD-old（12世紀の作品）"],
 ["e36t","e36-kashiwagi-text.png","emaki","柏木（詞書）","絵の前に置かれた詞書。料紙に金銀の箔を散らし、物語の本文を流れるような仮名で書いている","Genji_Emaki_Kashiwagi_Ms.png","PD-old（12世紀の作品）"],
 ["e37","e37-yokobue.jpg","emaki","横笛","夜泣きする幼い子をあやす雲居の雁と、それを見る夕霧。夕霧は、柏木が遺した笛を預かっている","Genji_emaki_YOKOBUE.jpg","PD-old（12世紀の作品）"],
 ["e38","e38-suzumushi.jpg","emaki","鈴虫","月見の宴で、源氏と冷泉院（実は源氏と藤壺の子）が向き合って語り合う。右上の群青の空と銀の満月が夜を表す","Genji_emaki_01003_006.jpg","PD-Art（12世紀の作品）"],
 ["e44","e44-takekawa.jpg","emaki","竹河","玉鬘の娘たちが、庭の桜をかけて碁を打つ","Genji_emaki_TAKEKAWA2.jpg","PD-Art（12世紀の作品）"],
 ["e45","e45-hashihime.jpg","emaki","橋姫","宇治の山荘で、月の光のもと琵琶と箏を弾く大君と中の君。薫がそれを垣根越しに見る","Genji_emaki_HASHIHIME.jpg","PD-old（12世紀の作品）"],
 ["e48","e48-sawarabi.jpg","emaki","早蕨","父を亡くした中の君が、都へ移る前に宇治の山荘で過ごす","Genji_emaki_SAWARABI.jpg","PD-old（12世紀の作品）"],
 ["e49","e49-yadorigi.jpg","emaki","宿木","宿木の巻の場面","Genji_emaki_Yadorigi.JPG","PD-old（12世紀の作品）"],
 ["e50","e50-azumaya.jpg","emaki","東屋","浮舟が物語の絵を眺め、そばで女房が本文を読み聞かせる。当時の人々の物語の楽しみ方がわかる","Genji_emaki_azumaya.jpg","PD-Art（12世紀の作品）"]
];

/* 名場面（GJ_SCENES の順）に添える絵 */
const GJ_SCENE_ART = [["m01"],["m05"],["m09"],["m12"],["m34","e36"],["m54"]];

/* 絵の見方 [技法, 説明, 見られる絵] */
const GJ_ART_TIPS = [
 ["吹抜屋台","屋根と天井を取り払い、建物の中を斜め上から見下ろして描く。室内の人物と外の景色を一度に見せられる","鈴虫、柏木、桐壺"],
 ["引目鉤鼻","目は細い線、鼻は「く」の字の鉤形で描く。表情をあえて描かず、見る人が気持ちを想像する","絵巻のすべての人物"],
 ["すやり霞","金や白の雲を画面に流し、場面の区切りや時間の流れ、遠近を表す","土佐光信の画帖の全図"],
 ["詞書","絵の前に物語の本文を書く。料紙には金銀の箔や下絵を散らし、書そのものも作品になっている","柏木（詞書）"],
 ["垣間見の構図","垣根や御簾のすき間から、のぞく人とのぞかれる人を一つの画面に描く","若紫、橋姫"]
];
