### 環境
- pnpm 8.15.9
- node 20.12.2

### SetUp
```
pnpm install
cp packages/database/.env.example packages/database/.env && cp apps/server/.env.example apps/server/.env
pnpm docker:db
pnpm db:deploy
pnpm generate
pnpm db:seed
pnpm dev
```

### Development
```
pnpm dev
```
```
pnpm dev:client
```
```
pnpm dev:server
```