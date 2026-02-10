export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  detailImages?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Modern Architecture",
    category: "プロダクトデザイン",
    image: "/images/projects/project-1-main.jpg",
    description: "都市の中心部に位置する革新的なオフィスビル。ガラスと鉄骨を組み合わせた現代的なデザインが特徴です。持続可能性と美しさを両立させた建築プロジェクトです。",
    client: "ABC Corporation",
    year: "2024",
    detailImages: [
      "/images/projects/project-1-main.jpg",
      "/images/projects/project-1-detail-1.jpg",
      "/images/projects/project-1-detail-2.jpg",
    ],
  },
  {
    id: "2",
    title: "Minimalist Interior",
    category: "グラフィックデザイン",
    image: "/images/projects/project-2-main.jpg",
    description: "シンプルで洗練された空間デザイン。無駄を省き、機能性と美しさを追求したミニマリストのインテリアプロジェクトです。自然光を活かした明るい空間が特徴です。",
    client: "Private Residence",
    year: "2025",
    detailImages: [
      "/images/projects/project-2-main.jpg",
      "/images/projects/project-2-detail-1.jpg",
      "/images/projects/project-2-detail-2.jpg",
    ],
  },
  {
    id: "3",
    title: "Abstract Vision",
    category: "ロゴデザイン",
    image: "/images/projects/project-3-main.jpg",
    description: "色彩と形状の調和を探求した抽象アート作品。鮮やかな色使いと大胆な構図で、見る人に新しい視点を提供します。",
    client: "Gallery Exhibition",
    year: "2024",
    detailImages: [
      "/images/projects/project-3-main.jpg",
      "/images/projects/project-3-detail-1.jpg",
      "/images/projects/project-3-detail-2.jpg",
    ],
  },
  {
    id: "4",
    title: "Mountain Escape",
    category: "ブックデザイン",
    image: "/images/projects/project-4-main.jpg",
    description: "壮大な自然の風景を捉えた写真シリーズ。山々の美しさと力強さを表現し、自然との調和の大切さを伝える作品です。",
    client: "Nature Magazine",
    year: "2025",
  },
  {
    id: "5",
    title: "Creative Workspace",
    category: "グラフィックデザイン",
    image: "/images/projects/project-5-main.jpg",
    description: "クリエイティブな作業環境のブランディングデザイン。色彩理論と視覚的な階層を活用し、インスピレーションを刺激する空間を演出しました。",
    client: "Design Studio",
    year: "2024",
  },
  {
    id: "6",
    title: "Product Essence",
    category: "その他",
    image: "/images/projects/project-6-main.jpg",
    description: "ミニマルなプロダクト写真撮影。商品の本質を引き出し、シンプルで美しいビジュアルで表現しました。ブランドの価値を最大限に伝える作品です。",
    client: "Lifestyle Brand",
    year: "2025",
  },
];