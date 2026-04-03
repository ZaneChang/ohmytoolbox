# OhMyToolbox 数据设置

## 方法1: 使用本地数据文件 (当前)

直接编辑 `data.js` 文件,然后:

```bash
git add .
git commit -m "Update data"
git push
```

## 方法2: Google Sheets (推荐)

### 步骤:

1. 创建 Google Sheets
2. 添加表头: Name, Description, Type, Icon, URL, Hot
3. 发布为 JSON
4. 修改 index.html 中的 fetch URL

### 示例表格结构:

| Name | Description | Type | Icon | URL | Hot |
|------|-------------|------|-----|-----|-----|
| Claude | Anthropic AI | chat | 🧠 | https://claude.ai | TRUE |
| ChatGPT | OpenAI GPT-4 | chat | 💬 | https://chat.openai.com | TRUE |

### 发布 Google Sheets:

1. 文件 → 发布为网络应用
2. 选择 "整个文档"
3. 选择 "JSON"
4. 复制链接

### 修改 index.html:

将数据获取从:

```javascript
const aiTools = [...];
```

改为:

```javascript
fetch('YOUR_GOOGLE_SHEETS_JSON_URL')
  .then(r => r.json())
  .then(data => { ... });
```

---

## 当前数据位置

- `data.js` - 主数据文件
- 编辑后 push 到 GitHub 自动部署
