# 岩下直人 プロフィールページ

WONQ株式会社 代表取締役 岩下直人のプロフィールページです。

## 技術スタック

- **Next.js 15** (App Router) - 静的エクスポートモード
- **React 19** with TypeScript
- **Tailwind CSS** - スタイリング
- **Shadcn UI** - UIコンポーネント
- **Vitest** - テストフレームワーク

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド（静的エクスポート）
npm run build

# テストの実行
npm run test
```

## 画像の配置と最適化

### プロフィール画像の配置

プロフィール画像は `public/images/profile.jpg` に配置してください。

### 画像最適化のガイドライン

1. **ファイル形式**: WebP形式を推奨（フォールバック用にJPGも可）
2. **画像サイズ**: 
   - プロフィール画像: 800x800px（正方形）
   - 最大ファイルサイズ: 200KB以下
3. **最適化ツール**:
   - [Squoosh](https://squoosh.app/) - ブラウザベースの画像圧縮
   - [ImageOptim](https://imageoptim.com/) - Mac用画像最適化
   - `cwebp` コマンドラインツール（WebP変換）

### WebP変換コマンド例

```bash
# JPGからWebPへの変換
cwebp -q 80 profile.jpg -o profile.webp

# 複数形式を配置する場合
public/images/
  ├── profile.jpg   # フォールバック用
  └── profile.webp  # 最適化版
```

### アクセシビリティ

すべての画像には適切な代替テキスト（alt属性）が設定されています：
- プロフィール画像: `{name}のプロフィール写真`

## デプロイ

このプロジェクトは静的サイトとしてエクスポートされ、GitHub PagesまたはVercelにデプロイできます。

```bash
# 静的ファイルの生成
npm run build

# outディレクトリに静的ファイルが生成されます
```

## プロジェクト構造

```
/app                    # Next.js App Router
  layout.tsx           # ルートレイアウト
  page.tsx             # ホームページ
  globals.css          # グローバルスタイル

/components            # Reactコンポーネント
  /ui                  # UIプリミティブ
  Header.tsx           # ヘッダーコンポーネント
  Profile.tsx          # プロフィールセクション
  Links.tsx            # 外部リンク
  Footer.tsx           # フッター

/types                 # TypeScript型定義
/data                  # 静的データ
/lib                   # ユーティリティ関数
/public               # 静的アセット
  /images             # 画像ファイル
```

## ライセンス

© 2024 WONQ株式会社