import Link from "next/link";

const prompts = [
  { 
    title: "代码审查", 
    content: "请审查以下代码，找出潜在问题和优化建议：",
    category: "开发"
  },
  { 
    title: "文章总结", 
    content: "请用简洁的语言总结以下文章的核心观点：",
    category: "写作"
  },
  { 
    title: "英语润色", 
    content: "请帮我润色以下英文文本，使其更加地道流畅：",
    category: "写作"
  },
  { 
    title: "技术解释", 
    content: "请用通俗易懂的方式解释以下技术概念：",
    category: "学习"
  },
];

const categories = ["全部", "开发", "写作", "学习", "其他"];

export default function Prompts() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">OhMyToolbox</Link>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/ai-tools" className="hover:text-white transition-colors">AI Tools</Link>
            <Link href="/tg-groups" className="hover:text-white transition-colors">TG 群组</Link>
            <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="/prompts" className="text-green-400">Prompts</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Prompt 库</h1>
        <p className="text-zinc-400 mb-8">常用 Prompts 集合，一键复制使用</p>

        {/* Categories */}
        <div className="flex gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                cat === "全部" 
                  ? "bg-green-500 text-white" 
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Prompts List */}
        <div className="space-y-4">
          {prompts.map((prompt) => (
            <div
              key={prompt.title}
              className="p-4 rounded-xl border border-zinc-800 hover:border-green-500 bg-zinc-900/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{prompt.title}</h3>
                <span className="text-xs text-zinc-500 px-2 py-1 rounded bg-zinc-800">{prompt.category}</span>
              </div>
              <p className="text-zinc-400 text-sm">{prompt.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
