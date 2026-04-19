# Repository Governance Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a lightweight but consistent governance layer for this private research repository without moving the existing root-level scripts.

**Architecture:** Keep the two current scripts in the repository root, and add documentation, templates, and GitHub collaboration files around them. The work is intentionally documentation-first and process-focused, with no runtime behavior changes to the existing scripts.

**Tech Stack:** Git, Markdown, GitHub repository templates, JavaScript userscript template

---

## Chunk 1: Repository Docs

### Task 1: Rewrite the top-level repository guide

**Files:**
- Modify: `README.md`
- Create: `CHANGELOG.md`
- Create: `CONTRIBUTING.md`

- [ ] Step 1: Rewrite `README.md` as bilingual repository guidance
- [ ] Step 2: Add `CHANGELOG.md` with initial setup entries
- [ ] Step 3: Add `CONTRIBUTING.md` with commit and documentation rules
- [ ] Step 4: Review the wording to keep it aligned with private, authorized internal use
- [ ] Step 5: Stage the updated documentation files

### Task 2: Add persistent docs and record templates

**Files:**
- Create: `docs/README.md`
- Create: `docs/research-log-template.md`

- [ ] Step 1: Add a docs index file
- [ ] Step 2: Add a bilingual research log template
- [ ] Step 3: Check that the template is generic and reusable
- [ ] Step 4: Stage the `docs/` files

## Chunk 2: Reusable Templates and GitHub Collaboration

### Task 3: Add template files for future maintenance

**Files:**
- Create: `templates/userscript-template.js`

- [ ] Step 1: Add a neutral userscript template with metadata placeholders
- [ ] Step 2: Keep the template generic and suitable for internal research work
- [ ] Step 3: Stage the template file

### Task 4: Add issue and pull request templates

**Files:**
- Create: `.github/ISSUE_TEMPLATE/bug-report.md`
- Create: `.github/ISSUE_TEMPLATE/research-task.md`
- Create: `.github/ISSUE_TEMPLATE/config.yml`
- Create: `.github/pull_request_template.md`

- [ ] Step 1: Add a bug report template
- [ ] Step 2: Add a research task template
- [ ] Step 3: Add issue template configuration
- [ ] Step 4: Add a pull request template with verification and risk fields
- [ ] Step 5: Stage the `.github/` files

## Chunk 3: Verification

### Task 5: Verify repository state

**Files:**
- Review: `README.md`
- Review: `CHANGELOG.md`
- Review: `CONTRIBUTING.md`
- Review: `docs/README.md`
- Review: `docs/research-log-template.md`
- Review: `templates/userscript-template.js`
- Review: `.github/ISSUE_TEMPLATE/bug-report.md`
- Review: `.github/ISSUE_TEMPLATE/research-task.md`
- Review: `.github/ISSUE_TEMPLATE/config.yml`
- Review: `.github/pull_request_template.md`

- [ ] Step 1: Run `git status --short`
- [ ] Step 2: Run `git diff --stat`
- [ ] Step 3: Spot-check key files for content and formatting
- [ ] Step 4: Confirm the root-level script placement remains unchanged
- [ ] Step 5: Commit when the repository layout is verified
