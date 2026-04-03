-- Turso/SQLite Schema for OhMyToolbox
-- 本地开发使用 SQLite，上线时用 Turso

-- TG 群组表
CREATE TABLE IF NOT EXISTS tg_groups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL,
  category TEXT DEFAULT '其他',
  members TEXT DEFAULT '0',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- AI 工具表
CREATE TABLE IF NOT EXISTS ai_tools (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL,
  icon TEXT,
  category TEXT DEFAULT 'AI',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- OpenClaw Skills 表
CREATE TABLE IF NOT EXISTS skills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  category TEXT DEFAULT '工具',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Prompts 表
CREATE TABLE IF NOT EXISTS prompts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT '其他',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);