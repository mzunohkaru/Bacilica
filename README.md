# プロジェクトセットアップガイド

## 必要な環境
- pnpm 8.15.9
- Node.js 20.12.2

## セットアップ手順

1. 依存関係のインストール:
   ```
   pnpm install
   ```

2. 環境変数ファイルのコピー:
   ```
   cp packages/database/.env.example packages/database/.env && cp apps/server/.env.example apps/server/.env && cp apps/client/.env.example apps/client/.env
   ```

3. データベースの準備:
   ```
   pnpm docker:db
   pnpm db:deploy
   ```

4. コードの生成とサンプルデータの投入:
   ```
   pnpm generate
   pnpm db:seed
   ```

5. 開発サーバーの起動:
   ```
   pnpm dev
   ```

## 開発

### 全体の開発サーバー起動:
```
pnpm dev
```

### クライアントのみ開発:
```
pnpm dev:client
```

### サーバーのみ開発:
```
pnpm dev:server
```

## Dockerの使用

### 本番環境のDockerコンテナ起動:
```
pnpm docker
```

### 開発環境のDockerコンテナ起動:
```
pnpm docker:dev
```

### データベースのDockerコンテナ起動:
```
pnpm docker:db
```