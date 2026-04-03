# OhMyToolbox 数据库配置

## 方式一：本地开发 (SQLite)
```bash
# 直接运行，无需配置
npm run dev
```

## 方式二：Vercel 生产部署 (Turso)

### 1. 创建 Turso 数据库
```bash
brew install libsql/cli/tap
# 或去 https://console.turso.io 注册
```

### 2. 配置环境变量
在 Vercel 项目设置中添加：
- `TURSO_DATABASE_URL` = libsql://你的数据库名.turso.io
- `TURSO_AUTH_TOKEN` = 你的Token

### 3. 初始化表
```bash
npx wrangler d1 execute ohmytoolbox --local --file=schema.sql
npx wrangler d1 execute ohmytoolbox --remote --file=schema.sql
```

---

## 本地开发注意事项

开发模式下使用 `file:local.db` 本地 SQLite，无需任何配置。
生产部署时设置 Turso 环境变量即可。