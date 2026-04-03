import Link from "next/link";

const prompts = [
  { title: "代码审查", content: "请审查以下代码，找出潜在问题和优化建议：", category: "开发" },
  { title: "文章总结", content: "请用简洁的语言总结以下文章的核心观点：", category: "写作" },
  { title: "英语润色", content: "请帮我润色以下英文文本，使其更加地道流畅：", category: "写作" },
  { title: "技术解释", content: "请用通俗易懂的方式解释以下技术概念：", category: "学习" },
  { title: "翻译校对", content: "请检查并修正以下翻译的错误：", category: "写作" },
  { title: "SQL 优化", content: "请分析以下 SQL 查询并提出优化建议：", category: "开发" },
];

const categories = ["全部", "开发", "写作", "学习", "其他"];

export default function Prompts() {
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
            <Link href="/skills" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">Skills</Link>
            <Link href="/prompts" className="px-4 py-2 rounded-lg text-sm text-green-400 bg-green-500/10">Prompts</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Prompt 库</h1>
          <p className="text-zinc-500">常用 Prompts 模板，一键复制使用</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === "全部"
                  ? "bg-white text-black"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Prompts List */}
        <div className="space-y-3">
          {prompts.map((prompt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-green-500/30 transition-all group cursor-pointer"
              onClick={() => navigator.clipboard.writeText(prompt.content)}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{prompt.title}</h3>
                <span className="px-2 py-1 rounded-md text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                  {prompt.category}
                </span>
              </div>
              <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{prompt.content}</p>
              <div className="mt-2 text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <span>📋</span> 点击复制
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-zinc-600 text-sm">
          点击卡片即可复制 Prompt 内容
        </div>
      </main>
    </div>
  );
}