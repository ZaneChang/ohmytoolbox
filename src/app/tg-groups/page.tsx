"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Group {
  id: number;
  name: string;
  description: string;
  url: string;
  category: string;
  members: string;
}

const categories = ["全部", "AI", "交易", "开发", "生活", "其他"];
const defaultGroups = [
  { id: 1, name: "OpenClaw Official", description: "官方社区", url: "https://discord.gg/clawd", category: "AI", members: "10K+" },
  { id: 2, name: "AI Tools & Prompts", description: "AI工具与Prompt分享", url: "#", category: "AI", members: "5K+" },
  { id: 3, name: "Crypto Trading", description: "加密货币交易讨论", url: "#", category: "交易", members: "8K+" },
  { id: 4, name: "Python Devs", description: "Python开发者社群", url: "#", category: "开发", members: "3K+" },
];

export default function TGGroups() {
  const [groups, setGroups] = useState<Group[]>(defaultGroups);
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [showForm, setShowForm] = useState(false);
  const [newGroup, setNewGroup] = useState({ name: "", description: "", url: "", category: "AI" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setGroups([...defaultGroups, ...data.data]);
        }
      })
      .catch(() => {});
  }, []);

  const filteredGroups = selectedCategory === "全部" 
    ? groups 
    : groups.filter((g) => g.category === selectedCategory);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroup.name || !newGroup.url) return;
    
    setSubmitting(true);
    try {
      const res = await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGroup),
      });
      const data = await res.json();
      if (data.success) {
        setGroups([{ id: Date.now(), ...newGroup, members: "新加入" }, ...groups]);
        setShowForm(false);
        setNewGroup({ name: "", description: "", url: "", category: "AI" });
      }
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      AI: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      交易: "bg-green-500/20 text-green-400 border-green-500/30",
      开发: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      生活: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      其他: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
    };
    return colors[cat] || colors["其他"];
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
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
            <Link href="/tg-groups" className="px-4 py-2 rounded-lg text-sm text-blue-400 bg-blue-500/10">TG 群组</Link>
            <Link href="/skills" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">Skills</Link>
            <Link href="/prompts" className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">Prompts</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">TG 群组</h1>
          <p className="text-zinc-500">发现优质 Telegram 群组与频道</p>
        </div>

        {/* Add Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 font-medium hover:opacity-90 transition-all"
          >
            <span className="text-lg">+</span>
            {showForm ? "取消" : "添加群组"}
          </button>
        </div>

        {/* Submit Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">➕</span>
              添加新群组
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="群组名称 *"
                value={newGroup.name}
                onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                className="p-4 bg-white/5 rounded-xl border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-zinc-600"
                required
              />
              <input
                type="text"
                placeholder="群组链接 *"
                value={newGroup.url}
                onChange={(e) => setNewGroup({ ...newGroup, url: e.target.value })}
                className="p-4 bg-white/5 rounded-xl border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-zinc-600"
                required
              />
              <input
                type="text"
                placeholder="简介（选填）"
                value={newGroup.description}
                onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                className="p-4 bg-white/5 rounded-xl border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-zinc-600"
              />
              <select
                value={newGroup.category}
                onChange={(e) => setNewGroup({ ...newGroup, category: e.target.value })}
                className="p-4 bg-white/5 rounded-xl border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all text-white"
              >
                {categories.slice(1).map((cat) => (
                  <option key={cat} value={cat} className="bg-zinc-900">{cat}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 font-medium transition-all"
            >
              {submitting ? "提交中..." : "提交"}
            </button>
          </form>
        )}

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === selectedCategory
                  ? "bg-white text-black"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Groups List */}
        <div className="space-y-3">
          {filteredGroups.map((group) => (
            <a
              key={group.id}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-lg">
                💬
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate group-hover:text-blue-400 transition-colors">{group.name}</h3>
                <p className="text-sm text-zinc-500 truncate">{group.description}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${getCategoryColor(group.category)}`}>
                  {group.category}
                </span>
                <span className="text-xs text-zinc-600">{group.members}</span>
              </div>
            </a>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-12 text-zinc-500">
            暂无群组，快来添加第一个吧！
          </div>
        )}
      </main>
    </div>
  );
}