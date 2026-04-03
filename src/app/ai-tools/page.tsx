import Link from "next/link";

export default function AITools() {
  const tools = [
    { name: "ChatGPT", desc: "OpenAI 对话AI", url: "https://chat.openai.com", icon: "🤖" },
    { name: "Claude", desc: "Anthropic AI 助手", url: "https://claude.ai", icon: "🧠" },
    { name: "Midjourney", desc: "AI 图像生成", url: "https://midjourney.com", icon: "🎨" },
    { name: "Stable Diffusion", desc: "开源图像生成", url: "https://stability.ai", icon: "🖼️" },
    { name: "Gemini", desc: "Google AI", url: "https://gemini.google.com", icon: "✨" },
    { name: "Perplexity", desc: "AI 搜索", url: "https://perplexity.ai", icon: "🔍" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">OhMyToolbox</Link>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/ai-tools" className="text-purple-400">AI Tools</Link>
            <Link href="/tg-groups" className="hover:text-white transition-colors">TG 群组</Link>
            <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="/prompts" className="hover:text-white transition-colors">Prompts</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">AI Tools</h1>
        <p className="text-zinc-400 mb-8">主流 AI 工具导航</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-zinc-800 hover:border-purple-500 bg-zinc-900/50 transition-all hover:scale-[1.02]"
            >
              <span className="text-3xl mb-3 block">{tool.icon}</span>
              <h3 className="font-semibold mb-1">{tool.name}</h3>
              <p className="text-zinc-400 text-sm">{tool.desc}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
