import Link from "next/link";

const categories = [
  {
    id: "ai-tools",
    title: "AI Tools",
    description: "主流AI工具导航 - ChatGPT、Claude、Midjourney、Stable Diffusion...",
    href: "/ai-tools",
    icon: "🤖",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "tg-groups",
    title: "TG 群组",
    description: "Telegram 群组/频道收录 - AI、交易、技术、交流社群",
    href: "/tg-groups",
    icon: "💬",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "skills",
    title: "OpenClaw Skills",
    description: "精选 AI 助手技能 - OpenClaw 官方与社区 Skills 推荐",
    href: "/skills",
    icon: "⚡",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "prompts",
    title: "Prompt 库",
    description: "常用 AI Prompts 集合 - 提升效率的Prompt模板",
    href: "/prompts",
    icon: "✨",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">OhMyToolbox</h1>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/ai-tools" className="hover:text-white transition-colors">AI Tools</Link>
            <Link href="/tg-groups" className="hover:text-white transition-colors">TG 群组</Link>
            <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="/prompts" className="hover:text-white transition-colors">Prompts</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">
          你的<span className="text-purple-400">万能</span>工具箱
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          聚合 AI 工具、TG 群组、OpenClaw Skills 等资源，一站式导航
        </p>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group block p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 transition-all hover:scale-[1.02]"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} text-2xl mb-4`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {cat.title}
              </h3>
              <p className="text-zinc-400">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        <p>© 2026 OhMyToolbox. Built with OpenClaw.</p>
      </footer>
    </div>
  );
}
