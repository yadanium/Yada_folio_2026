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
    priority: 2,
    content: [
      { type: "image", src: "/images/projects/project-1-main.jpg" },
      { type: "text", body: "都市の中心部に位置する革新的なオフィスビル。ガラスと鉄骨を組み合わせた現代的なデザインが特徴です。" },
      { type: "image", src: "/images/projects/project-1-detail-1.jpg" },
      { type: "text", body: "持続可能性と美しさを両立させた建築プロジェクトです。" },
      { type: "image", src: "/images/projects/project-1-detail-2.jpg" },
    ],
  },
  {
    id: "3",
    title: "Strecs3D デザイン",
    category: ["ロゴ", "グラフィック"],
    image: "/images/projects/logo/logo (4).png",
    description: "色彩と形状の調和を探求した抽象アート作品。鮮やかな色使いと大胆な構図で、見る人に新しい視点を提供します。",
    client: "Gallery Exhibition",
    year: "2025",
    priority: 5,
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
    year: "2023",
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
    client: "Yashiro , 東北大学 大兼研究室",
    year: "2025",
    priority: 3,
    content: [
      { type: "image", src: "/images/projects/product/product (7).jpg" },
      { type: "text", body: "ミニマルなプロダクト写真撮影。商品の本質を引き出し、シンプルで美しいビジュアルで表現しました。ブランドの価値を最大限に伝える作品です。" },
    ],
  },
  {
    id: "8",
    title: "たまごころProject",
    category: ["プロジェクト"],
    image: "/images/projects/project/project (6).JPG",
    description: "「卵パック由来の３Dプリンタ用リサイクル材料開発と地域内循環の研究―鎌倉市における資源クラウドファンディングの試み―」と題して修士研究を行いました。 本研究は、鎌倉市内で回収した卵パックを用いて3Dプリンタ用のリサイクル材料を開発し、それを用いて制作したものをまちに還元することを目的としています。",
    client: "修士研究",
    year: "2025",
    priority: 1,
    content: [
      { type: "image", src: "/images/projects/project/project (4).png" },
      { type: "text", body: "しげんポストという仕組みを用いて、プラスチック製卵パックを小規模に回収しています。" },
      { type: "image", src: "/images/projects/project/たまご.png" },
      { type: "text", body: "ラベルをカットし、絞って圧縮し、粉砕機に入れてフレーク状にします。" },
      { type: "image", src: "/images/projects/project/材料.png" },
      { type: "text", body: "PETGペレットト混合し、押出ししたのち再度粉砕してペレットにします。" },
      { type: "image", src: "/images/projects/project/project (5).JPG" },
      { type: "text", body: "造形条件によって、同じ材料でも透明・不透明の表情を出すことに成功しました。" },
      { type: "image", src: "/images/projects/project/logoたまごころよこ.png" },
      { type: "text", body: "卵から生まれた材料から作るプロダクトのブランドを「たまごころ」と名付けました。" },
      { type: "image", src: "/images/projects/project/project (9).jpg" },
      { type: "image", src: "/images/projects/project/project (10).jpg" },
      { type: "text", body: "「たまごころ」の一つ目として、卵型ランプシェードを制作しました。卵パック由来のピンク色と、透明・不透明の織り交ざった表情が湘南の夕焼けを思わせます。" },
      { type: "image", src: "/images/projects/project/eki_tenji.png" },
      { type: "image", src: "/images/projects/project/project (11) .jpg" },
      { type: "text", body: "湘南モノレール湘南江の島駅にて展示を行い、活動の周知を行いました。今後この材料を用いたプロジェクトが発展していく予定です。" },
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
    priority: 2,
    content: [
      { type: "youtube", videoId: "xbnzCkHF4ns" },
      { type: "text", body: "2台のロボットアームを用いた３Dプリントシステム「双鶴」のスペシャルウィークの様子を紹介する映像の撮影・編集を担当しました。" },
    ],
  },
  {
    id: "11",
    title: "おかえりベンチ制作動画",
    category: ["ビデオ"],
    image: "/images/projects/other/video (1).png",
    description: "実験的な映像表現に挑戦した作品。光と影の移ろいを繊細に捉え、日常の一瞬を詩的に描き出しました。",
    client: "慶應鎌倉ラボ",
    year: "2024",
    priority: 1,
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
    priority: 4,
    content: [
      { type: "image", src: "/images/projects/other/other (3).jpg" },
      { type: "text", body: "ジャンルを越えた実験的なクリエイティブプロジェクト。異なる領域の要素を組み合わせ、独自の表現世界を構築しました。" },
    ],
  },
  {
    id: "14",
    title: "Clip Dock SSD",
    category: ["プロダクト"],
    image: "/images/projects/product/アセット 28.png",
    description: "使い手の暮らしに寄り添うプロダクトデザイン。機能美と素材の温もりを融合させ、日常を豊かにするアイテムを提案しました。",
    client: "パテントコンテスト応募",
    year: "2023",
    priority: 2,
    content: [
      { type: "image", src: "/images/projects/product/product (2).jpg" },
      { type: "text", body: "使い手の暮らしに寄り添うプロダクトデザイン。機能美と素材の温もりを融合させ、日常を豊かにするアイテムを提案しました。" },
    ],
  },
];