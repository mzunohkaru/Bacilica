### 環境
- pnpm 8.15.9
- node 20.12.2

### SetUp
```
pnpm install
pnpm docker:db
pnpm db:deploy
pnpm generate
cd packages/database
pnpm db:seed
cd ../..
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