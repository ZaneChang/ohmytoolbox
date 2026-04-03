import Link from "next/link";

const skills = [
  { name: "github", desc: "GitHub 操作 via gh CLI", icon: "🐙" },
  { name: "weather", desc: "获取天气预报", icon: "🌤️" },
  { name: "spotify-player", desc: "Spotify 播放控制", icon: "🎵" },
  { name: "apple-notes", desc: "管理 Apple Notes", icon: "📝" },
  { name: "apple-reminders", desc: "管理 Apple Reminders", icon: "⏰" },
  { name: "imsg", desc: "iMessage/SMS 发送", icon: "💬" },
  { name: "himalaya", desc: "邮件管理 CLI", icon: "📧" },
  { name: "gh-issues", desc: "GitHub Issues 管理", icon: "🐛" },
  { name: "video-frames", desc: "视频帧提取", icon: "🎬" },
  { name: "peekaboo", desc: "macOS UI 自动化", icon: "👁️" },
  { name: "summarize", desc: "URL/文件摘要", icon: "📄" },
  { name: "gemini", desc: "Gemini CLI", icon: "✨" },
];

export default function Skills() {
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
            <Link href="/ai-tools" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">AI Tools</Link>
            <Link href="/tg-groups" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">TG 群组</Link>
            <Link href="/skills" className="px-4 py-2 rounded-lg text-sm text-orange-400 bg-orange-500/10">Skills</Link>
            <Link href="/prompts" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">Prompts</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">OpenClaw Skills</h1>
          <p className="text-zinc-500">精选 AI 助手技能，让你的 OpenClaw 更强大</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all group"
            >
              <span className="text-3xl mb-3 block">{skill.icon}</span>
              <h3 className="font-semibold mb-1 group-hover:text-orange-400 transition-colors">{skill.name}</h3>
              <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-500/20">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span>🔥</span> 发现更多 Skills
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            访问 ClawHub 发现社区贡献的更多 Skills
          </p>
          <a
            href="https://clawhub.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition-all"
          >
            探索 ClawHub →
          </a>
        </div>
      </main>
    </div>
  );
}