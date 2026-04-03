import Link from "next/link";

const groups = [
  { name: "OpenClaw Official", desc: "官方社区", url: "https://discord.gg/clawd", members: "10K+", icon: "⚡" },
  { name: "AI Tools & Prompts", desc: "AI工具与Prompt分享", url: "#", members: "5K+", icon: "🤖" },
  { name: "Crypto Trading", desc: "加密货币交易讨论", url: "#", members: "8K+", icon: "💰" },
  { name: "Python Devs", desc: "Python开发者社群", url: "#", members: "3K+", icon: "🐍" },
];

const categories = ["全部", "AI", "交易", "开发", "生活"];

export default function TGGroups() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">OhMyToolbox</Link>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/ai-tools" className="hover:text-white transition-colors">AI Tools</Link>
            <Link href="/tg-groups" className="text-blue-400">TG 群组</Link>
            <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="/prompts" className="hover:text-white transition-colors">Prompts</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">TG 群组</h1>
        <p className="text-zinc-400 mb-8">Telegram 群组/频道收录</p>

        {/* Categories */}
        <div className="flex gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                cat === "全部" 
                  ? "bg-blue-500 text-white" 
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Groups List */}
        <div className="space-y-4">
          {groups.map((group) => (
            <a
              key={group.name}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-blue-500 bg-zinc-900/50 transition-all"
            >
              <span className="text-2xl">{group.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold">{group.name}</h3>
                <p className="text-zinc-400 text-sm">{group.desc}</p>
              </div>
              <span className="text-sm text-zinc-500">{group.members}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
