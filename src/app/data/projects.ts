export type ContentBlock =
  | { type: "image"; src: string }
  | { type: "text"; body: string }
  | { type: "youtube"; videoId: string };

export interface Project {
  id: string;
  title: string;
  category: string[];
  image: string;
  description: string;
  client: string;
  year: string;
  /** 同じ年の中での表示順（小さいほど先に表示） */
  priority: number;
  content: ContentBlock[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "ぬれ技術 Wet technology",
    category: ["プロジェクト"],
    image: "/images/projects/project/project (1).png",
    description: "都市の中心部に位置する革新的なオフィスビル。ガラスと鉄骨を組み合わせた現代的なデザインが特徴です。持続可能性と美しさを両立させた建築プロジェクトです。",
    client: "卒業制作",
    year: "2024",
    priority: 1,
    content: [
      { type: "image", src: "/images/projects/project-1-main.jpg" },
      { type: "text", body: "都市の中心部に位置する革新的なオフィスビル。ガラスと鉄骨を組み合わせた現代的なデザインが特徴です。" },
      { type: "image", src: "/images/projects/project-1-detail-1.jpg" },
      { type: "text", body: "持続可能性と美しさを両立させた建築プロジェクトです。" },
      { type: "image", src: "/images/projects/project-1-detail-2.jpg" },
    ],
  },
  {
    id: "2",
    title: "名刺デザイン",
    category: ["グラフィック"],
    image: "/images/projects/graphic/graphic_meishi.jpg",
    description: "シンプルで洗練された空間デザイン。無駄を省き、機能性と美しさを追求したミニマリストのインテリアプロジェクトです。自然光を活かした明るい空間が特徴です。",
    client: "Private Residence",
    year: "2023",
    priority: 1,
    content: [
      { type: "image", src: "/images/projects/project-2-main.jpg" },
      { type: "text", body: "シンプルで洗練された空間デザイン。無駄を省き、機能性と美しさを追求したミニマリストのインテリアプロジェクトです。" },
      { type: "image", src: "/images/projects/project-2-detail-1.jpg" },
      { type: "text", body: "自然光を活かした明るい空間が特徴です。" },
      { type: "image", src: "/images/projects/project-2-detail-2.jpg" },
    ],
  },
  {
    id: "3",
    title: "Strecs3D デザイン",
    category: ["ロゴ", "グラフィック"],
    image: "/images/projects/logo/logo (4).png",
    description: "色彩と形状の調和を探求した抽象アート作品。鮮やかな色使いと大胆な構図で、見る人に新しい視点を提供します。",
    client: "Gallery Exhibition",
    year: "2024",
    priority: 2,
    content: [
      { type: "image", src: "/images/projects/project-3-main.jpg" },
      { type: "text", body: "色彩と形状の調和を探求した抽象アート作品。" },
      { type: "image", src: "/images/projects/project-3-detail-1.jpg" },
      { type: "text", body: "鮮やかな色使いと大胆な構図で、見る人に新しい視点を提供します。" },
      { type: "image", src: "/images/projects/project-3-detail-2.jpg" },
    ],
  },
  {
    id: "5",
    title: "駐車場看板",
    category: ["グラフィック"],
    image: "/images/projects/graphic/駐車場アートボード 1.png",
    description: "クリエイティブな作業環境のブランディングデザイン。色彩理論と視覚的な階層を活用し、インスピレーションを刺激する空間を演出しました。",
    client: "Design Studio",
    year: "2024",
    priority: 3,
    content: [
      { type: "image", src: "/images/projects/project-5-main.jpg" },
      { type: "text", body: "クリエイティブな作業環境のブランディングデザイン。色彩理論と視覚的な階層を活用し、インスピレーションを刺激する空間を演出しました。" },
    ],
  },
  {
    id: "6",
    title: "Spin-MRI",
    category: ["プロダクト"],
    image: "/images/projects/product/product (1).jpg",
    description: "ミニマルなプロダクト写真撮影。商品の本質を引き出し、シンプルで美しいビジュアルで表現しました。ブランドの価値を最大限に伝える作品です。",
    client: "Lifestyle Brand",
    year: "2025",
    priority: 3,
    content: [
      { type: "image", src: "/images/projects/product/product (7).jpg" },
      { type: "text", body: "ミニマルなプロダクト写真撮影。商品の本質を引き出し、シンプルで美しいビジュアルで表現しました。ブランドの価値を最大限に伝える作品です。" },
    ],
  },
  {
    id: "7",
    title: "自分の傘のしるし",
    category: ["その他"],
    image: "/images/projects/other/アセット 1.png",
    description: "カテゴリに縛られないコンセプトデザイン。プロダクト・グラフィック・空間など複数領域を横断しながら、ブランドの世界観を柔軟に表現したプロジェクトです。",
    client: "Creative Client",
    year: "2023",
    priority: 1,
    content: [
      { type: "image", src: "/images/projects/project-5-main.jpg" },
      { type: "text", body: "カテゴリに縛られないコンセプトデザイン。プロダクト・グラフィック・空間など複数領域を横断しながら、ブランドの世界観を柔軟に表現したプロジェクトです。" },
    ],
  },
  {
    id: "9",
    title: "SOUZ",
    category: ["ロゴ"],
    image: "/images/projects/logo/logo (1).png",
    description: "SOUZのブランドアイデンティティを象徴するロゴデザイン。シンプルかつ力強い造形で、ブランドの本質を視覚的に表現しました。",
    client: "SOUZ",
    year: "2025",
    priority: 4,
    content: [
      { type: "image", src: "/images/projects/logo/logo (1).png" },
      { type: "text", body: "ブランドの核となるロゴマークのデザインプロセス。" },
      { type: "image", src: "/images/projects/logo/logo (2).png" },
      { type: "text", body: "シンプルな造形の中に、ブランドの理念と世界観を凝縮しました。" },
      { type: "image", src: "/images/projects/logo/logo (3).png" },
    ],
  },
  {
    id: "8",
    title: "たまごころ",
    category: ["プロジェクト"],
    image: "/images/projects/project/project (6).JPG",
    description: "「たまごころ」は、卵の温もりと心の優しさをテーマにしたブランディングプロジェクトです。丸みのあるフォルムと柔らかな色彩で、安心感と親しみやすさを表現しました。",
    client: "修士研究",
    year: "2025",
    priority: 5,
    content: [
      { type: "image", src: "/images/projects/project/project (11) .jpg" },
      { type: "text", body: "卵の丸みから着想を得て、柔らかく包み込むような世界観を構築しました。" },
      { type: "image", src: "/images/projects/project/project (7).JPG" },
      { type: "text", body: "温かみのある配色とやさしいタイポグラフィで、ブランドの核となるビジュアルを制作しました。" },
      { type: "image", src: "/images/projects/project/project (9).jpg" },
      { type: "text", body: "パッケージやツールへの展開を通じて、一貫したブランド体験をデザインしました。" },
      { type: "image", src: "/images/projects/project/project (10).jpg" },
      { type: "text", body: "「たまごころ」——卵のように、まるく、あたたかく、やさしい心を届けるプロジェクトです。" },
    ],
  },
  {
    id: "10",
    title: "双鶴 Project movie",
    category: ["ビデオ"],
    image: "/images/projects/other/video.PNG",
    description: "2025大阪・関西万博　日本館　ファクトリーエリア「双鶴」スペシャルウィーク　2025/8/14~8/19",
    client: "田中浩也",
    year: "2025",
    priority: 6,
    content: [
      { type: "youtube", videoId: "xbnzCkHF4ns" },
      { type: "text", body: "映像を通じて伝えるクリエイティブな表現。動きと音の調和で、視覚的なストーリーテリングを追求しました。" },
    ],
  },
  {
    id: "11",
    title: "おかえりベンチ制作動画",
    category: ["ビデオ"],
    image: "/images/projects/other/video (1).png",
    description: "実験的な映像表現に挑戦した作品。光と影の移ろいを繊細に捉え、日常の一瞬を詩的に描き出しました。",
    client: "クライアント名",
    year: "2024",
    priority: 4,
    content: [
      { type: "youtube", videoId: "SiSbt1-v5LI" },
      { type: "text", body: "実験的な映像表現に挑戦した作品。光と影の移ろいを繊細に捉え、日常の一瞬を詩的に描き出しました。" },
    ],
  },
  {
    id: "13",
    title: "ラボキャラクターデザイン",
    category: ["グラフィック"],
    image: "/images/projects/graphic/キャラ目アートボード 2.png",
    description: "ジャンルを越えた実験的なクリエイティブプロジェクト。異なる領域の要素を組み合わせ、独自の表現世界を構築しました。",
    client: "慶應鎌倉ラボ",
    year: "2025",
    priority: 7,
    content: [
      { type: "image", src: "/images/projects/other/other (3).jpg" },
      { type: "text", body: "ジャンルを越えた実験的なクリエイティブプロジェクト。異なる領域の要素を組み合わせ、独自の表現世界を構築しました。" },
    ],
  },
  {
    id: "14",
    title: "プロダクト作品タイトル 2",
    category: ["プロダクト"],
    image: "/images/projects/product/product (2).jpg",
    description: "使い手の暮らしに寄り添うプロダクトデザイン。機能美と素材の温もりを融合させ、日常を豊かにするアイテムを提案しました。",
    client: "クライアント名",
    year: "2024",
    priority: 6,
    content: [
      { type: "image", src: "/images/projects/product/product (2).jpg" },
      { type: "text", body: "使い手の暮らしに寄り添うプロダクトデザイン。機能美と素材の温もりを融合させ、日常を豊かにするアイテムを提案しました。" },
    ],
  },
  {
    id: "15",
    title: "グラフィック作品タイトル 2",
    category: ["グラフィック"],
    image: "/images/projects/graphic/graphic (2).jpg",
    description: "タイポグラフィと色彩の力を最大限に引き出したグラフィックデザイン。視覚的なインパクトと情報伝達の両立を目指しました。",
    client: "クライアント名",
    year: "2025",
    priority: 8,
    content: [
      { type: "image", src: "/images/projects/graphic/graphic (2).jpg" },
      { type: "text", body: "タイポグラフィと色彩の力を最大限に引き出したグラフィックデザイン。視覚的なインパクトと情報伝達の両立を目指しました。" },
    ],
  },
];