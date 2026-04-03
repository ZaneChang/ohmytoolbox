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
        setGroups([{ id: Date.now(), ...newGroup, members: "0" }, ...groups]);
        setShowForm(false);
        setNewGroup({ name: "", description: "", url: "", category: "AI" });
      }
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">TG 群组</h1>
            <p className="text-zinc-400">Telegram 群组/频道收录</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showForm ? "取消" : "+ 添加群组"}
          </button>
        </div>

        {/* Submit Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mb-8 p-6 rounded-xl bg-zinc-900 border border-zinc-700">
            <h3 className="font-semibold mb-4">添加新群组</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="群组名称 *"
                value={newGroup.name}
                onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                className="p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-blue-500 outline-none"
                required
              />
              <input
                type="text"
                placeholder="群组链接 *"
                value={newGroup.url}
                onChange={(e) => setNewGroup({ ...newGroup, url: e.target.value })}
                className="p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-blue-500 outline-none"
                required
              />
              <input
                type="text"
                placeholder="简介"
                value={newGroup.description}
                onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                className="p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-blue-500 outline-none"
              />
              <select
                value={newGroup.category}
                onChange={(e) => setNewGroup({ ...newGroup, category: e.target.value })}
                className="p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-blue-500 outline-none"
              >
                {categories.slice(1).map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            >
              {submitting ? "提交中..." : "提交"}
            </button>
          </form>
        )}

        {/* Categories */}
        <div className="flex gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                cat === selectedCategory
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
          {filteredGroups.map((group) => (
            <a
              key={group.id}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-blue-500 bg-zinc-900/50 transition-all"
            >
              <div className="flex-1">
                <h3 className="font-semibold">{group.name}</h3>
                <p className="text-zinc-400 text-sm">{group.description}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-500 px-2 py-1 rounded bg-zinc-800 block">{group.category}</span>
                <span className="text-sm text-zinc-500">{group.members}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}