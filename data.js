// OhMyToolbox Data
const aiTools = [
    { name: 'Claude', name_zh: 'Claude', desc: 'Anthropic flagship AI model', name_zh_desc: 'Anthropic 旗舰AI模型', type: 'ai,chat', icon: '🧠', hot: true, link: 'https://claude.ai' },
    { name: 'ChatGPT', name_zh: 'ChatGPT', desc: 'OpenAI GPT-4', name_zh_desc: 'OpenAI GPT-4', type: 'ai,chat', icon: '💬', hot: true, link: 'https://chat.openai.com' },
    { name: 'DeepSeek', name_zh: 'DeepSeek', desc: 'Open source AI model', name_zh_desc: '国产开源大模型', type: 'ai,chat', icon: '🔮', link: 'https://chat.deepseek.com' },
    { name: 'Grok', name_zh: 'Grok', desc: 'xAI real-time search', name_zh_desc: 'xAI 实时搜索', type: 'ai,chat', icon: '🚀', link: 'https://x.com/i/grok' },
    { name: 'Gemini', name_zh: 'Gemini', desc: 'Google multimodal AI', name_zh_desc: 'Google 多模态AI', type: 'ai,chat', icon: '🌟', link: 'https://gemini.google.com' },
    { name: 'Midjourney', name_zh: 'Midjourney', desc: 'Best AI image generation', name_zh_desc: '最强AI图像生成', type: 'ai,image', icon: '🎨', hot: true, link: 'https://www.midjourney.com' },
    { name: 'DALL-E', name_zh: 'DALL-E', desc: 'OpenAI image generator', name_zh_desc: 'OpenAI 图像生成', type: 'ai,image', icon: '🖼️', link: 'https://openai.com/dall-e-3' },
    { name: 'Leonardo', name_zh: 'Leonardo', desc: 'Open source AI art', name_zh_desc: '开源AI绘画平台', type: 'ai,image', icon: '🎭', link: 'https://leonardo.ai' },
    { name: 'Cursor', name_zh: 'Cursor', desc: 'AI code editor', name_zh_desc: 'AI代码编辑器', type: 'ai,code', icon: '⌨️', hot: true, link: 'https://cursor.sh' },
    { name: 'Windsurf', name_zh: 'Windsurf', desc: 'AI programming assistant', name_zh_desc: 'AI编程助手', type: 'ai,code', icon: '💻', link: 'https://windsurf.ai' },
    { name: 'V0', name_zh: 'V0', desc: 'Vercel frontend generator', name_zh_desc: 'Vercel前端代码生成', type: 'ai,code', icon: '⚛️', link: 'https://v0.dev' },
    { name: 'Manus', name_zh: 'Manus', desc: 'AI Agent auto tasks', name_zh_desc: 'AI Agent自动任务', type: 'ai,agent', icon: '⚡', hot: true, link: 'https://manus.im' },
    { name: 'Perplexity', name_zh: 'Perplexity', desc: 'AI search engine', name_zh_desc: 'AI搜索引擎', type: 'ai,agent', icon: '🔍', link: 'https://www.perplexity.ai' },
    { name: 'Devin', name_zh: 'Devin', desc: 'AI programmer', name_zh_desc: 'AI程序员', type: 'ai,agent', icon: '🛠️', link: 'https://devin.ai' },
    { name: 'Gamma', name_zh: 'Gamma', desc: 'AI PPT maker', name_zh_desc: 'AI PPT制作', type: 'ai,productivity', icon: '📊', link: 'https://gamma.app' },
    { name: 'Notion AI', name_zh: 'Notion AI', desc: 'AI writing assistant', name_zh_desc: 'AI笔记辅助', type: 'ai,productivity', icon: '📝', link: 'https://notion.so' },
    { name: 'Runway', name_zh: 'Runway', desc: 'AI video generation', name_zh_desc: 'AI视频生成', type: 'ai,productivity', icon: '🎬', link: 'https://runwayml.com' },
    { name: 'Grammarly', name_zh: 'Grammarly', desc: 'AI writing checker', name_zh_desc: 'AI写作辅助', type: 'ai,productivity', icon: '✍️', link: 'https://grammarly.com' },
];

const tgChannels = [
    { name: 'OpenAI', name_zh: 'OpenAI', desc: 'Official OpenAI updates', name_zh_desc: 'OpenAI官方频道', type: 'tg,ai', icon: '🤖', hot: true, link: 'https://t.me/openai' },
    { name: 'Anthropic', name_zh: 'Anthropic', desc: 'Claude AI official', name_zh_desc: 'Claude官方', type: 'tg,ai', icon: '🧠', link: 'https://t.me/anthropic' },
    { name: 'GitHub', name_zh: 'GitHub', desc: 'Developer community', name_zh_desc: '开发者技术社区', type: 'tg,dev', icon: '🐙', hot: true, link: 'https://t.me/github' },
    { name: 'V2EX', name_zh: 'V2EX', desc: 'Chinese dev community', name_zh_desc: '程序员讨论社区', type: 'tg,dev', icon: '💬', link: 'https://t.me/v2ex' },
    { name: 'Stack Overflow', name_zh: 'Stack Overflow', desc: 'Tech Q&A', name_zh_desc: '技术问答', type: 'tg,dev', icon: '📚', link: 'https://t.me/stackoverflow' },
    { name: 'Ethereum', name_zh: '以太坊', desc: 'Ethereum official', name_zh_desc: '以太坊官方', type: 'tg,crypto', icon: '💎', hot: true, link: 'https://t.me/ethereum' },
    { name: 'Bitcoin', name_zh: '比特币', desc: 'Bitcoin official', name_zh_desc: '比特币官方', type: 'tg,crypto', icon: '₿', link: 'https://t.me/Bitcoin' },
    { name: 'Vitalik', name_zh: 'Vitalik', desc: 'Ethereum founder', name_zh_desc: '以太坊创始人', type: 'tg,crypto', icon: '👤', link: 'https://t.me/vitalikbuterin' },
    { name: 'Product Hunt', name_zh: 'Product Hunt', desc: 'Product discovery', name_zh_desc: '产品发现社区', type: 'tg,product', icon: '🔍', hot: true, link: 'https://t.me/producthunt' },
    { name: 'Figma', name_zh: 'Figma', desc: 'Design community', name_zh_desc: '设计工具社区', type: 'tg,design', icon: '🎨', link: 'https://t.me/figma' },
    { name: 'TechCrunch', name_zh: 'TechCrunch', desc: 'Tech news', name_zh_desc: '科技媒体', type: 'tg,news', icon: '📰', link: 'https://t.me/techcrunch' },
    { name: 'Notion', name_zh: 'Notion', desc: 'All-in-one workspace', name_zh_desc: '全能笔记工具', type: 'tg,tool', icon: '📒', hot: true, link: 'https://t.me/Notion' },
    { name: 'Raycast', name_zh: 'Raycast', desc: 'Mac launcher', name_zh_desc: 'Mac效率启动器', type: 'tg,tool', icon: '⚡', hot: true, link: 'https://t.me/raycast' },
    { name: 'Telegram', name_zh: 'Telegram', desc: 'Messaging app', name_zh_desc: '即时通讯工具', type: 'tg,tool', icon: '✈️', hot: true, link: 'https://t.me/telegram' },
];

const productivity = [
    { name: 'Notion', name_zh: 'Notion', desc: 'All-in-one workspace', name_zh_desc: '全能笔记工具', type: 'productivity', icon: '📒', hot: true, link: 'https://notion.so' },
    { name: 'Raycast', name_zh: 'Raycast', desc: 'Mac efficiency launcher', name_zh_desc: 'Mac效率启动器', type: 'productivity', icon: '⚡', hot: true, link: 'https://raycast.com' },
    { name: 'Arc Browser', name_zh: 'Arc Browser', desc: 'AI-enhanced browser', name_zh_desc: 'AI增强浏览器', type: 'productivity', icon: '🌐', link: 'https://arc.net' },
    { name: 'Linear', name_zh: 'Linear', desc: 'Project management', name_zh_desc: '项目管理工具', type: 'productivity', icon: '📋', link: 'https://linear.app' },
    { name: 'Figma', name_zh: 'Figma', desc: 'Collaborative UI design', name_zh_desc: '协作UI设计工具', type: 'productivity', icon: '🎯', hot: true, link: 'https://figma.com' },
    { name: 'Canva', name_zh: 'Canva', desc: 'Online design tool', name_zh_desc: '在线设计工具', type: 'productivity', icon: '🎨', link: 'https://canva.com' },
    { name: 'Slack', name_zh: 'Slack', desc: 'Team collaboration', name_zh_desc: '团队协作通讯', type: 'productivity', icon: '💬', link: 'https://slack.com' },
    { name: 'Zoom', name_zh: 'Zoom', desc: 'Video conferencing', name_zh_desc: '视频会议工具', type: 'productivity', icon: '📹', link: 'https://zoom.us' },
    { name: 'Grammarly', name_zh: 'Grammarly', desc: 'AI writing assistant', name_zh_desc: 'AI写作辅助', type: 'productivity', icon: '✍️', link: 'https://grammarly.com' },
    { name: 'Loom', name_zh: 'Loom', desc: 'Screen recording', name_zh_desc: '屏幕录制工具', type: 'productivity', icon: '📹', link: 'https://loom.com' },
    { name: 'Obsidian', name_zh: 'Obsidian', desc: 'Markdown knowledge base', name_zh_desc: 'Markdown笔记', type: 'productivity', icon: '💎', link: 'https://obsidian.md' },
    { name: 'ClickUp', name_zh: 'ClickUp', desc: 'All-in-one PM', name_zh_desc: '一体化项目管理', type: 'productivity', icon: '✅', link: 'https://clickup.com' },
];

// Export for global use
window.OhMyToolboxData = { aiTools, tgChannels, productivity };
