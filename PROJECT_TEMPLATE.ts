// 📝 新しいプロジェクトを追加するときのテンプレート
// このファイルをコピーして /src/app/data/projects.ts に貼り付けてください

// ============================================
// プロジェクト追加テンプレート
// ============================================

{
  // 🔢 ID: ユニークな番号（既存のIDと重複しないこと）
  id: "7",

  // 📌 タイトル: プロジェクトの名前
  title: "プロジェクト名をここに入力",

  // 🏷️ カテゴリー: 以下から1つ選択（完全一致すること）
  // 選択肢:
  //   - "プロダクトデザイン"
  //   - "グラフィックデザイン"
  //   - "ロゴデザイン"
  //   - "ブックデザイン"
  //   - "その他"
  category: "プロダクトデザイン",

  // 🖼️ メイン画像: サムネイルとして表示される画像のURL
  // Unsplashの場合: https://images.unsplash.com/photo-xxx?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080
  image: "https://images.unsplash.com/photo-xxx...",

  // 📝 説明文: プロジェクトの詳細（200〜300文字推奨）
  description: "プロジェクトの詳細説明をここに記載します。何を作ったのか、どんな特徴があるのか、どのような課題を解決したのかを具体的に書きましょう。",

  // 🏢 クライアント: 依頼主の名前
  client: "クライアント名",

  // 📅 年度: プロジェクトを実施した年
  year: "2026",

  // 🎨 詳細画像（オプション）: 詳細ページに表示する追加画像
  // 不要な場合はこの行を削除してOK
  detailImages: [
    "https://images.unsplash.com/photo-xxx1...",
    "https://images.unsplash.com/photo-xxx2...",
    "https://images.unsplash.com/photo-xxx3...",
  ],
}

// ============================================
// 実際の使用例
// ============================================

// 例1: 詳細画像なし（シンプル）
{
  id: "7",
  title: "Urban Redesign",
  category: "プロダクトデザイン",
  image: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  description: "都市の中心部に位置する革新的なオフィスビル。ガラスと鉄骨を組み合わせた現代的なデザインが特徴です。",
  client: "Tokyo City Hall",
  year: "2026",
}

// 例2: 詳細画像あり（フル機能）
{
  id: "8",
  title: "Brand Identity Design",
  category: "グラフィックデザイン",
  image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  description: "スタートアップ企業のブランドアイデンティティを一から構築。ロゴ、カラーパレット、タイポグラフィ、名刺、Webサイトなど、すべてのビジュアル要素を統一感のあるデザインで提供しました。",
  client: "Tech Startup Inc.",
  year: "2025",
  detailImages: [
    "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1600320844678-43cebba1cdfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  ],
}

// ============================================
// よくある間違い
// ============================================

// ❌ 間違い1: カテゴリー名のスペルミス
{
  category: "プロダクト デザイン",  // スペースが入っている
}

// ✅ 正しい
{
  category: "プロダクトデザイン",
}

// ---

// ❌ 間違い2: カンマの抜け
{
  id: "9"
  title: "Project Name"  // カンマがない！
  category: "ロゴデザイン",
}

// ✅ 正しい
{
  id: "9",
  title: "Project Name",  // カンマを追加
  category: "ロゴデザイン",
}

// ---

// ❌ 間違い3: 配列の最後のカンマ
export const projects: Project[] = [
  { id: "1", ... },
  { id: "2", ... },
  { id: "3", ... },  // ← 最後の項目の後にカンマがあるとエラー（一部の環境）
]

// ✅ 正しい
export const projects: Project[] = [
  { id: "1", ... },
  { id: "2", ... },
  { id: "3", ... }  // 最後の項目にはカンマなし
]

// ただし、現代のJavaScript/TypeScriptでは最後のカンマ（trailing comma）は許可されているので、
// どちらでも動作します。一貫性を保つことが重要です。

// ============================================
// 画像URL取得のヒント
// ============================================

// Unsplashの画像URLフォーマット:
// https://images.unsplash.com/photo-[ID]?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080
//
// パラメータの説明:
// - crop=entropy: 画像の重要な部分を自動検出
// - cs=tinysrgb: 色空間
// - fit=max: アスペクト比を維持
// - fm=jpg: フォーマット（JPG）
// - q=80: 品質（80%）
// - w=1080: 幅（1080px）

// Unsplashで画像を探す手順:
// 1. https://unsplash.com/ にアクセス
// 2. 検索バーでキーワード入力（例: "modern architecture"）
// 3. 気に入った画像をクリック
// 4. 右クリック→「画像アドレスをコピー」
// 5. URLを上記フォーマットに整形

// ============================================
// 実際に追加する手順
// ============================================

// 1. /src/app/data/projects.ts を開く
// 2. export const projects: Project[] = [ ... ] の配列の最後に追加
// 3. 上記テンプレートをコピー
// 4. 必要な情報を入力
// 5. ファイルを保存
// 6. プレビューで確認
// 7. 問題なければGitHubにコミット&プッシュ

// ============================================
// Git操作（変更を保存）
// ============================================

// ターミナル/コマンドプロンプトで実行:
// 
// git add src/app/data/projects.ts
// git commit -m "プロジェクト7を追加: Urban Redesign"
// git push
