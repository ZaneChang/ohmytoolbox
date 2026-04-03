import Link from "next/link";

const tools = [
  { name: "ChatGPT", desc: "OpenAI 对话AI", url: "https://chat.openai.com", icon: "🤖" },
  { name: "Claude", desc: "Anthropic AI 助手", url: "https://claude.ai", icon: "🧠" },
  { name: "Midjourney", desc: "AI 图像生成", url: "https://midjourney.com", icon: "🎨" },
  { name: "Stable Diffusion", desc: "开源图像生成", url: "https://stability.ai", icon: "🖼️" },
  { name: "Gemini", desc: "Google AI", url: "https://gemini.google.com", icon: "✨" },
  { name: "Perplexity", desc: "AI 搜索", url: "https://perplexity.ai", icon: "🔍" },
  { name: "Copilot", desc: "Microsoft AI 编程", url: "https://github.com/features/copilot", icon: "💻" },
  { name: "Notion AI", desc: "笔记 AI 助手", url: "https://notion.so/product/ai", icon: "📝" },
  { name: "Runway", desc: "AI 视频生成", url: "https://runwayml.com", icon: "🎬" },
  { name: "ElevenLabs", desc: "AI 语音合成", url: "https://elevenlabs.io", icon: "🎙️" },
];

export default function AITools() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/5 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-sm">🧰</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              OhMyToolbox
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            <Link href="/ai-tools" className="px-4 py-2 rounded-lg text-sm text-purple-400 bg-purple-500/10">AI Tools</Link>
            <Link href="/tg-groups" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">TG 群组</Link>
            <Link href="/skills" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">Skills</Link>
            <Link href="/prompts" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">Prompts</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">AI Tools</h1>
          <p className="text-zinc-500">发现最强大的 AI 工具</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all"
            >
              <span className="text-3xl mb-3 block">{tool.icon}</span>
              <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{tool.desc}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}