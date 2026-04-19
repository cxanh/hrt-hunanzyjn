# 📦 hrt-hunanzyjn

> **内部研究脚本仓库 / Internal Research Script Repository**  
> 专门用于 `chinahrt.com` 相关课题的内部测试脚本、研究记录与迭代文档管理。

---

<p align="left">
  <img src="https://img.shields.io/badge/Status-Internal%20Research-blueviolet" alt="Status">
  <img src="https://img.shields.io/badge/License-Private-red" alt="License">
  <img src="https://img.shields.io/badge/Version-1.2.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/Coverage-In--house-success" alt="Coverage">
</p>

## 📖 目录
- [简介](#-简介)
- [核心特性](#-核心特性)
- [目录结构](#-目录结构)
- [当前脚本](#-当前脚本)
- [维护建议](#-维护建议)
- [重要提示](#-重要提示)
- [贡献指南](#-贡献指南)

---

## 🔍 简介

这是一个私有仓库，旨在为团队提供一个集中的协作空间，用于保存与 `chinahrt.com` 相关的技术研究成果。通过版本管理与问题追踪，确保脚本迭代的透明度与可追溯性。

This private repository stores internal test scripts, research notes, and iteration documents related to `chinahrt.com`, with a focus on version control, traceability, and team collaboration.

---

## 🚀 核心特性

- 🛠️ **精细化迭代**：支持 `v1`、`v2` 多版本共存，方便对比测试。
- 📚 **详尽文档**：独立的 `docs` 目录记录研究心得与源文件追踪。
- ⚙️ **标准模板**：提供 `templates` 快速初始化新脚本或研究记录。
- 🤝 **规范协作**：内置 `.github` 模板，统一 Issue 和 PR 交互流程。

---

## 📂 目录结构

| 路径 | 说明 | 备注 |
| :--- | :--- | :--- |
| `root` | 当前主要脚本文件 | 核心逻辑入口 |
| `docs/` | 研究记录、文档索引与长期说明 | 知识沉淀区 |
| `docs/captured-sources/` | 来源文件归档位与采集说明 | 原始数据备份 |
| `templates/` | 新脚本和记录模板 | 开发规范参考 |
| `.github/` | Issue / PR 协作模板 | 团队协作规范 |

---

## 📜 当前脚本

仓库内目前维护以下主要脚本：

- 🔹 **`ChinahrtAutoplay-v1.js`**：初始研究版本。
- 🔹 **`ChinahrtAutoplay-v2.js`**：基于反馈优化的第二代版本，提升了稳定性。

---

## 🛠️ 维护建议

为了保持仓库的整洁与可维护性，请遵循以下约定：

1. **先记录后改动**：每次脚本调整前，请先记录变更目的和影响范围。
2. **原子化提交**：尽量保证每次 `commit` 只包含一类变更。
3. **文档同步**：研究结论、已知限制和适用环境建议及时写入 `docs/`。
4. **复用模板**：新增脚本或研究任务时，优先使用 `templates/` 中的预设。

---

## ⚠️ 重要提示

> [!IMPORTANT]
> - 仅限授权场景下的内部测试、学习与研究。
> - 本项目不承诺任何生产环境下的可用性或稳定性。
> - 使用者应自行确认其操作具备明确授权，并严格遵守适用的法律法规及平台服务协议。

---

## 🤝 贡献指南

我们鼓励通过规范化的流程进行协作。如果您有新的发现或改进建议，请按照以下步骤操作：

1. **创建分支**：从 `main` 分支拉取新特性分支。
2. **规范提交**：遵循 [Angular Commit Message 规范](https://github.com/angular/angular.js/blob/master/DEVELOPMENT.md#-git-commit-guidelines)。
3. **提交 PR**：通过 GitHub 提交 Pull Request，并在描述中详述改动动机。

---

## 📄 许可证

本项目属于**私有/内部研究（Private/Internal Research）**。  
© 2026 Internal Research Team. All rights reserved.

---

## 📬 联系我们

如果有任何疑问或需要获取授权说明，请通过内部钉钉群或 Issue 区域与维护人员联系。

---
<p align="center">Made with ❤️ for High-Quality Research</p>
