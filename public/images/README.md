# 画像管理ディレクトリ

このディレクトリには、ポートフォリオサイトで使用するすべての画像ファイルが含まれています。

## ディレクトリ構造

```
/public/images/
├── logo.png                  # サイトロゴ
├── profile.png               # プロフィール写真
├── about-header.jpg          # Aboutページヘッダー画像
├── hero/                     # ヒーロースライドショー用画像
│   ├── slide-1.jpg
│   ├── slide-2.jpg
│   ├── slide-3.jpg
│   ├── slide-4.jpg
│   └── slide-5.jpg
└── projects/                 # プロジェクト画像
    ├── project-1-main.jpg
    ├── project-1-detail-1.jpg
    ├── project-1-detail-2.jpg
    ├── project-2-main.jpg
    └── ...
```

## 使用方法

### コンポーネント内での参照

```tsx
// 絶対パスで参照
<img src="/images/logo.png" alt="ロゴ" />
<img src="/images/hero/slide-1.jpg" alt="スライド1" />
<img src="/images/projects/project-1-main.jpg" alt="プロジェクト1" />
```

## 画像の追加・更新

1. 画像ファイルを適切なディレクトリに配置
2. Gitでコミット
3. コード内のパスを更新

```bash
# 例: 新しいプロジェクト画像を追加
cp ~/Downloads/new-project.jpg /public/images/projects/project-7-main.jpg
git add public/images/projects/project-7-main.jpg
git commit -m "プロジェクト7の画像を追加"
```

## 画像最適化の推奨

- **フォーマット**: JPG (写真), PNG (ロゴ・透過), WebP (最適化)
- **サイズ**: 
  - ロゴ: 200px × 50px 程度
  - プロフィール: 500px × 500px以上
  - ヘッダー: 1920px × 400px以上
  - プロジェクト: 1080px × 1080px以上

## 画像クレジット

このプロジェクトの画像は主にUnsplashから取得されています。
各画像のクレジットは `/ATTRIBUTIONS.md` を参照してください。
