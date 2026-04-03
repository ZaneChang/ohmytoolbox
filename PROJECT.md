# OhMyToolbox - 万能工具箱

## 域名
www.ohmytoolbox.com

## 定位
聚合型工具导航网站：AI工具 + TG群组 + OpenClaw Skills + Prompt库

## 技术栈
- **前端**: Next.js 15 + TypeScript + Tailwind CSS
- **后端**: Next.js API Routes (Serverless)
- **数据库**: SQLite (本地) / Turso (生产)
- **部署**: Vercel

## 页面结构
| 路径 | 描述 |
|------|------|
| `/` | 首页 - 工具箱入口 |
| `/ai-tools` | AI工具导航 |
| `/tg-groups` | TG群组收录 (可提交) |
| `/skills` | OpenClaw Skills推荐 |
| `/prompts` | Prompt模板库 |

## API 接口
| 方法 | 路径 | 描述 |
|------|------|------|
| GET | `/api/groups` | 获取TG群组列表 |
| POST | `/api/groups` | 提交新群组 |

## 数据库
- SQLite 本地开发
- Turso 生产环境（免费额度足够用）

## 部署
1. GitHub Push: ✅ 已完成
2. Vercel 导入: https://vercel.com/import/git/github/ZaneChang/ohmytoolbox
3. 绑定域名: www.ohmytoolbox.com