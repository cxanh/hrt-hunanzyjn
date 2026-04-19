# Contributing / 贡献说明

## 中文

### 基本原则

- 本仓库仅用于授权场景下的内部研究与测试
- 提交前请确认变更目的、影响范围和回滚方式
- 不要在一次提交中混入无关修改

### 提交建议

- 提交信息建议使用简洁前缀，例如 `docs:`, `chore:`, `refactor:`, `research:`
- 修改脚本时，请同时记录：
  - 目标页面或模块
  - 触发条件
  - 预期行为
  - 已知限制

### 文档要求

- 重要研究结论建议补充到 `docs/`
- 新增脚本前可先复制 `templates/userscript-template.js`
- 需要记录测试背景时，使用 `docs/research-log-template.md`

## English

### Ground Rules

- This repository is for authorized internal research and testing only
- Before committing, confirm the purpose, impact scope, and rollback path
- Do not mix unrelated changes in a single commit

### Commit Guidance

- Prefer concise prefixes such as `docs:`, `chore:`, `refactor:`, and `research:`
- When changing a script, document:
  - target page or module
  - trigger conditions
  - expected behavior
  - known limitations

### Documentation Expectations

- Add important findings under `docs/`
- Copy `templates/userscript-template.js` before creating a new script
- Use `docs/research-log-template.md` when you need a structured research note
