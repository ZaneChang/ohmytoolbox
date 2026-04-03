import Link from "next/link";

const categories = [
  {
    id: "ai-tools",
    title: "AI Tools",
    description: "ChatGPT · Claude · Midjourney · Stable Diffusion",
    href: "/ai-tools",
    icon: "🤖",
    color: "from-violet-600 to-purple-500",
    hoverColor: "hover:shadow-violet-500/25",
  },
  {
    id: "tg-groups",
    title: "TG 群组",
    description: "AI · 交易 · 开发 · 生活社群",
    href: "/tg-groups",
    icon: "💬",
    color: "from-blue-600 to-cyan-500",
    hoverColor: "hover:shadow-blue-500/25",
  },
  {
    id: "skills",
    title: "OpenClaw Skills",
    description: "官方与社区精选 AI 助手技能",
    href: "/skills",
    icon: "⚡",
    color: "from-orange-600 to-amber-500",
    hoverColor: "hover:shadow-orange-500/25",
  },
  {
    id: "prompts",
    title: "Prompt 库",
    description: "代码审查 · 文章总结 · 英语润色",
    href: "/prompts",
    icon: "✨",
    color: "from-emerald-600 to-green-500",
    hoverColor: "hover:shadow-green-500/25",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/5 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
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
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {cat.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          收录 100+ 优质资源
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          你的<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">万能</span>工具箱
        </h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12">
          聚合 AI 工具、TG 群组、OpenClaw Skills 等资源
          <br />
          <span className="text-zinc-500">一站式导航，让效率飞升</span>
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/tg-groups"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-medium hover:opacity-90 transition-opacity"
          >
            探索工具箱 →
          </Link>
          <a
            href="https://github.com/ZaneChang/ohmytoolbox"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
          >
            GitHub ⭐
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10 ${cat.hoverColor}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${cat.color.split(' ')[1]}10, ${cat.color.split(' ')[3]}10)` }} />
              <div className="relative flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl shadow-lg`}>
                  {cat.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors flex items-center gap-2">
                    {cat.title}
                    <span className="text-xs text-zinc-500 font-normal opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h3>
                  <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">50+</div>
              <div className="text-sm text-zinc-500">AI 工具</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">30+</div>
              <div className="text-sm text-zinc-500">TG 群组</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-1">40+</div>
              <div className="text-sm text-zinc-500">Skills</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-8 text-center">
        <p className="text-zinc-600 text-sm">
          © 2026 <span className="text-zinc-500">OhMyToolbox</span> · Built with <span className="text-purple-400">OpenClaw</span>
        </p>
      </footer>
    </div>
  );
}