// OhMyToolbox Data - Edit this file or use Google Sheets
const AI_TOOLS = [
    { name: 'Claude', desc: 'Anthropic flagship AI model, reasoning能力强', type: 'ai,chat', icon: '🧠', hot: true, link: 'https://claude.ai' },
    { name: 'ChatGPT', desc: 'OpenAI GPT-4,对话生成顶级,生态最丰富', type: 'ai,chat', icon: '💬', hot: true, link: 'https://chat.openai.com' },
    { name: 'DeepSeek', desc: '国产开源大模型,API价格超低', type: 'ai,chat', icon: '🔮', link: 'https://chat.deepseek.com' },
    { name: 'Grok', desc: 'xAI 出品,实时信息搜索强', type: 'ai,chat', icon: '🚀', link: 'https://x.com/i/grok' },
    { name: 'Gemini', desc: 'Google 多模态AI', type: 'ai,chat', icon: '🌟', link: 'https://gemini.google.com' },
    { name: 'Midjourney', desc: '最强AI图像生成', type: 'ai,image', icon: '🎨', hot: true, link: 'https://www.midjourney.com' },
    { name: 'DALL-E', desc: 'OpenAI 图像生成', type: 'ai,image', icon: '🖼️', link: 'https://openai.com/dall-e-3' },
    { name: 'Leonardo', desc: '开源AI绘画平台', type: 'ai,image', icon: '🎭', link: 'https://leonardo.ai' },
    { name: 'Cursor', desc: 'AI代码编辑器,编程效率翻倍', type: 'ai,code', icon: '⌨️', hot: true, link: 'https://cursor.sh' },
    { name: 'Windsurf', desc: 'AI编程助手', type: 'ai,code', icon: '💻', link: 'https://windsurf.ai' },
    { name: 'V0', desc: 'Vercel 前端代码生成', type: 'ai,code', icon: '⚛️', link: 'https://v0.dev' },
    { name: 'Manus', desc: 'AI Agent,自动执行任务', type: 'ai,agent', icon: '⚡', hot: true, link: 'https://manus.im' },
    { name: 'Perplexity', desc: 'AI搜索,实时信息整合', type: 'ai,agent', icon: '🔍', link: 'https://www.perplexity.ai' },
];

const TG_CHANNELS = [
    { name: 'OpenAI', desc: 'Official OpenAI updates', type: 'tg,ai', icon: '🤖', hot: true, link: 'https://t.me/openai' },
    { name: 'Anthropic', desc: 'Claude AI official', type: 'tg,ai', icon: '🧠', link: 'https://t.me/anthropic' },
    { name: 'GitHub', desc: 'Developer community', type: 'tg,dev', icon: '🐙', hot: true, link: 'https://t.me/github' },
    { name: 'Ethereum', desc: 'Ethereum official', type: 'tg,crypto', icon: '💎', hot: true, link: 'https://t.me/ethereum' },
    { name: 'Product Hunt', desc: 'Product discovery', type: 'tg,product', icon: '🔍', hot: true, link: 'https://t.me/producthunt' },
    { name: 'Notion', desc: 'All-in-one workspace', type: 'tg,tool', icon: '📒', hot: true, link: 'https://t.me/Notion' },
];

const PRODUCTIVITY = [
    { name: 'Notion', desc: 'All-in-one workspace', type: 'productivity', icon: '📒', hot: true, link: 'https://notion.so' },
    { name: 'Raycast', desc: 'Mac效率启动器', type: 'productivity', icon: '⚡', hot: true, link: 'https://raycast.com' },
    { name: 'Arc Browser', desc: 'AI增强浏览器', type: 'productivity', icon: '🌐', link: 'https://arc.net' },
    { name: 'Linear', desc: '项目管理工具', type: 'productivity', icon: '📋', link: 'https://linear.app' },
    { name: 'Figma', desc: '协作UI设计工具', type: 'productivity', icon: '🎯', hot: true, link: 'https://figma.com' },
];

// Export for use
window.OhMyToolboxData = { AI_TOOLS, TG_CHANNELS, PRODUCTIVITY };
