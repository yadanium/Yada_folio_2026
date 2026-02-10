# Yada Folio - ポートフォリオサイト

シンプルで美しいポートフォリオサイト。アクセントカラー **#0BA29A** を採用。

## 🎨 特徴

- ✅ レスポンシブデザイン（PC・タブレット・スマホ対応）
- ✅ 6種類のカテゴリーフィルター機能
- ✅ ページトランジションアニメーション（Framer Motion）
- ✅ プロジェクト詳細ページのギャラリー機能
- ✅ Aboutページ
- ✅ クリーンでモダンなUI
- ✅ **画像をGit管理（Figma Makeのクラウドに依存しない）**

## 📁 プロジェクト構成

```
/
├── public/
│   └── images/                      # 🖼️ 画像ファイル（Git管理）
│       ├── logo.png
│       ├── profile.png
│       ├── about-header.jpg
│       ├── hero/                    # ヒーロースライドショー
│       │   ├── slide-1.jpg
│       │   ├── slide-2.jpg
│       │   └── ...
│       └── projects/                # プロジェクト画像
│           ├── project-1-main.jpg
│           ├── project-1-detail-1.jpg
│           └── ...
├── src/
│   ├── app/
│   │   ├── App.tsx                 # メインアプリ
│   │   ├── components/             # 再利用可能なコンポーネント
│   │   │   ├── Header.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── HeroSlideshow.tsx
│   │   ├── pages/                  # ページコンポーネント
│   │   │   ├── Home.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   └── About.tsx
│   │   └── data/
│   │       └── projects.ts         # ⭐ コンテンツデータ（ここを編集）
│   └── styles/
│       ├── theme.css               # テーマカラー設定
│       └── fonts.css               # フォント設定
├── scripts/
│   └── download-images.md          # 📥 画像ダウンロードガイド
├── CONTENT_GUIDE.md                # 📝 コンテンツ編集ガイド
├── IMAGE_MANAGEMENT_GUIDE.md       # 🖼️ 画像管理ガイド
├── GITHUB_GUIDE.md                 # 🔧 GitHub連携ガイド
└── package.json
```

## 🚀 クイックスタート

### 1. 画像をダウンロード

**重要**: プロジェクトを使用する前に、画像をダウンロードする必要があります。

詳細は [scripts/download-images.md](./scripts/download-images.md) を参照してください。

**簡易版（コマンドライン）**:
```bash
# ディレクトリを作成
mkdir -p public/images/hero public/images/projects

# 画像をダウンロード（一部の例）
curl -o public/images/about-header.jpg "https://images.unsplash.com/photo-1600320844678-43cebba1cdfe?w=1920&q=80"
curl -o public/images/hero/slide-1.jpg "https://images.unsplash.com/photo-1726556267339-b8af2ccbb2f7?w=1920&q=80"
# ... 他の画像も同様にダウンロード
```

**注意**: `logo.png` と `profile.png` は Figma Make から直接エクスポートするか、元のファイルを使用してください。

### 2. プロジェクトを追加

`/src/app/data/projects.ts` を開き、配列の最後に追加：

```typescript
{
  id: "7",
  title: "Urban Redesign",
  category: "プロダクトデザイン",
  image: "/images/projects/project-7-main.jpg",  // ローカル画像パス
  description: "都市空間の再設計プロジェクト...",
  client: "Tokyo City",
  year: "2026",
  detailImages: [
    "/images/projects/project-7-main.jpg",
    "/images/projects/project-7-detail-1.jpg",
  ],
}
```

### 3. 画像を追加

```bash
# 画像を配置
cp ~/Downloads/my-project.jpg public/images/projects/project-7-main.jpg

# Gitにコミット
git add public/images/projects/project-7-main.jpg
git commit -m "プロジェクト7の画像を追加"
```

### 4. 変更を確認

ファイルを保存して、プレビューで確認！

---

## 📚 詳細ガイド

- **画像管理**: [IMAGE_MANAGEMENT_GUIDE.md](./IMAGE_MANAGEMENT_GUIDE.md)
- **画像ダウンロード**: [scripts/download-images.md](./scripts/download-images.md)
- **コンテンツ編集**: [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)
- **GitHub連携**: [GITHUB_GUIDE.md](./GITHUB_GUIDE.md)

---

## 🎨 カスタマイズ

### アクセントカラーを変更

`/src/styles/theme.css` の3つの変数を編集：

```css
:root {
  --primary: #0BA29A;   /* 新しい色 */
  --accent: #0BA29A;    /* 新しい色 */
  --ring: #0BA29A;      /* 新しい色 */
}
```

### Aboutページを編集

`/src/app/pages/About.tsx` を開いて直接編集：

- プロフィール文章
- サービス内容
- 受賞歴
- 連絡先情報

---

## 🛠️ 技術スタック

- **フレームワーク**: React 18 + TypeScript
- **ルーティング**: React Router DOM
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Motion (Framer Motion)
- **アイコン**: Lucide React
- **ビルドツール**: Vite

---

## 📦 依存関係のインストール

```bash
npm install
# または
pnpm install
```

---

## 🌐 デプロイ

### Figma Make（推奨）

1. Figma Makeの「Publish」ボタンをクリック
2. カスタムドメインを設定（オプション）

### Vercel

```bash
npm install -g vercel
vercel deploy
```

### Netlify

```bash
npm run build
# distフォルダをNetlifyにドラッグ&ドロップ
```

---

## 🔄 バージョン管理（GitHub）

```bash
# 初回セットアップ
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/yada-portfolio.git
git push -u origin main

# 日常の作業
git add .
git commit -m "プロジェクト7を追加"
git push
```

詳細は [GITHUB_GUIDE.md](./GITHUB_GUIDE.md) を参照。

---

## 📝 カテゴリー一覧

フィルター機能で使用できるカテゴリー：

1. **すべて** - 全プロジェクトを表示
2. **プロダクトデザイン**
3. **グラフィックデザイン**
4. **ロゴデザイン**
5. **ブックデザイン**
6. **その他**

⚠️ カテゴリー名は**完全一致**する必要があります。

---

## 🐛 トラブルシューティング

### Q: プロジェクトが表示されない

**A**: `/src/app/data/projects.ts` の構文エラーを確認

- カンマ `,` の抜けがないか
- `{` と `}` が正しく閉じているか
- `"` （ダブルクォート）が正しくペアになっているか

### Q: 画像が表示されない

**A**: 画像URLが有効か確認

- ブラウザで直接URLを開いて画像が表示されるか確認
- Unsplashの場合、URLパラメータが正しいか確認

### Q: カテゴリーフィルターが動作しない

**A**: カテゴリー名のスペルミスを確認

```typescript
// ❌ 間違い
category: "プロダクト デザイン"  // スペースが入っている

// ✅ 正しい
category: "プロダクトデザイン"
```

---

## 📄 ライセンス

プロジェクトのライセンス情報をここに記載してください。

---

## 👤 作成者

**Yada Design Studio**

- Website: [yadafolio.com](https://yadafolio.com)
- Email: info@portfolio.com

---

## 🙏 謝辞

- [Unsplash](https://unsplash.com/) - 高品質な無料画像
- [Lucide](https://lucide.dev/) - 美しいアイコンセット
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS

---

**Happy Designing! 🎨✨**