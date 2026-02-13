export type ContentBlock =
  | { type: "image"; src: string }
  | { type: "text"; body: string };

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  content: ContentBlock[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "ぬれ技術 Wet technology",
    category: "プロジェクト",
    image: "/images/projects/project/project (1).png",
    description: "都市の中心部に位置する革新的なオフィスビル。ガラスと鉄骨を組み合わせた現代的なデザインが特徴です。持続可能性と美しさを両立させた建築プロジェクトです。",
    client: "卒業制作",
    year: "2024",
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
    title: "Minimalist Interior",
    category: "グラフィック",
    image: "/images/projects/graphic/graphic_meishi.jpg",
    description: "シンプルで洗練された空間デザイン。無駄を省き、機能性と美しさを追求したミニマリストのインテリアプロジェクトです。自然光を活かした明るい空間が特徴です。",
    client: "Private Residence",
    year: "2025",
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
    title: "Strecs3D ロゴデザイン",
    category: "ロゴ",
    image: "/images/projects/logo/logo (4).png",
    description: "色彩と形状の調和を探求した抽象アート作品。鮮やかな色使いと大胆な構図で、見る人に新しい視点を提供します。",
    client: "Gallery Exhibition",
    year: "2024",
    content: [
      { type: "image", src: "/images/projects/project-3-main.jpg" },
      { type: "text", body: "色彩と形状の調和を探求した抽象アート作品。" },
      { type: "image", src: "/images/projects/project-3-detail-1.jpg" },
      { type: "text", body: "鮮やかな色使いと大胆な構図で、見る人に新しい視点を提供します。" },
      { type: "image", src: "/images/projects/project-3-detail-2.jpg" },
    ],
  },
  {
    id: "4",
    title: "Mountain Escape",
    category: "ブック",
    image: "/images/projects/project-4-main.jpg",
    description: "壮大な自然の風景を捉えた写真シリーズ。山々の美しさと力強さを表現し、自然との調和の大切さを伝える作品です。",
    client: "Nature Magazine",
    year: "2025",
    content: [
      { type: "image", src: "/images/projects/project-3-main.jpg" },
      { type: "text", body: "壮大な自然の風景を捉えた写真シリーズ。山々の美しさと力強さを表現しました。" },
      { type: "image", src: "/images/projects/project-3-detail-1.jpg" },
      { type: "text", body: "自然との調和の大切さを伝える作品です。" },
      { type: "image", src: "/images/projects/project-3-detail-2.jpg" },
    ],
  },
  {
    id: "5",
    title: "Creative Workspace",
    category: "グラフィック",
    image: "/images/projects/project-5-main.jpg",
    description: "クリエイティブな作業環境のブランディングデザイン。色彩理論と視覚的な階層を活用し、インスピレーションを刺激する空間を演出しました。",
    client: "Design Studio",
    year: "2024",
    content: [
      { type: "image", src: "/images/projects/project-5-main.jpg" },
      { type: "text", body: "クリエイティブな作業環境のブランディングデザイン。色彩理論と視覚的な階層を活用し、インスピレーションを刺激する空間を演出しました。" },
    ],
  },
  {
    id: "6",
    title: "Spin-MRI",
    category: "プロダクト",
    image: "/images/projects/product/product (1).jpg",
    description: "ミニマルなプロダクト写真撮影。商品の本質を引き出し、シンプルで美しいビジュアルで表現しました。ブランドの価値を最大限に伝える作品です。",
    client: "Lifestyle Brand",
    year: "2025",
    content: [
      { type: "image", src: "/images/projects/product/product (7).jpg" },
      { type: "text", body: "ミニマルなプロダクト写真撮影。商品の本質を引き出し、シンプルで美しいビジュアルで表現しました。ブランドの価値を最大限に伝える作品です。" },
    ],
  },
  {
    id: "7",
    title: "Flexible Concept",
    category: "その他",
    image: "/images/projects/project-5-main.jpg",
    description: "カテゴリに縛られないコンセプトデザイン。プロダクト・グラフィック・空間など複数領域を横断しながら、ブランドの世界観を柔軟に表現したプロジェクトです。",
    client: "Creative Client",
    year: "2023",
    content: [
      { type: "image", src: "/images/projects/project-5-main.jpg" },
      { type: "text", body: "カテゴリに縛られないコンセプトデザイン。プロダクト・グラフィック・空間など複数領域を横断しながら、ブランドの世界観を柔軟に表現したプロジェクトです。" },
    ],
  },
  {
    id: "9",
    title: "SOUZ",
    category: "ロゴ",
    image: "/images/projects/logo/logo (1).png",
    description: "SOUZのブランドアイデンティティを象徴するロゴデザイン。シンプルかつ力強い造形で、ブランドの本質を視覚的に表現しました。",
    client: "SOUZ",
    year: "2025",
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
    category: "プロジェクト",
    image: "/images/projects/project/project (6).JPG",
    description: "「たまごころ」は、卵の温もりと心の優しさをテーマにしたブランディングプロジェクトです。丸みのあるフォルムと柔らかな色彩で、安心感と親しみやすさを表現しました。",
    client: "修士研究",
    year: "2025",
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
];