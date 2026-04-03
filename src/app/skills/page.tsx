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
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">OhMyToolbox</Link>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/ai-tools" className="hover:text-white transition-colors">AI Tools</Link>
            <Link href="/tg-groups" className="hover:text-white transition-colors">TG 群组</Link>
            <Link href="/skills" className="text-orange-400">Skills</Link>
            <Link href="/prompts" className="hover:text-white transition-colors">Prompts</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">OpenClaw Skills</h1>
        <p className="text-zinc-400 mb-8">精选 AI 助手技能推荐</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl border border-zinc-800 hover:border-orange-500 bg-zinc-900/50 transition-all"
            >
              <span className="text-2xl mb-2 block">{skill.icon}</span>
              <h3 className="font-semibold mb-1">{skill.name}</h3>
              <p className="text-zinc-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-orange-900/20 border border-orange-800">
          <h3 className="font-semibold mb-2">🔥 更多 Skills</h3>
          <p className="text-zinc-400 text-sm">
            访问 <a href="https://clawhub.ai" target="_blank" className="text-orange-400 hover:underline">ClawHub</a> 发现更多社区 Skills
          </p>
        </div>
      </main>
    </div>
  );
}
