# wenze42/skills

AI 编程技能集的项目级配置模板：把工程纪律从人的脑子搬进 AI 上下文。

**核心理念：AI 说过了不算，证据过了才算。**

## 包含什么

| 路径 | 作用 |
|------|------|
| `.agents/skills/` | 40 个 skill（38 个 Pocock skill + 2 个项目自定义 skill：`dev-gating`、`health-scoring`） |
| `.claude/skills/` | 40 个软链，指向 `.agents/skills/`（Claude Code 用） |
| `AGENTS.md` | 常驻规则 + skill 路由表 + 开发门禁 |
| `CONTEXT.md` | 产品语境 + "避免"表，专治对齐错位 |
| `GLOSSARY.md` | 人机共用词汇表 |
| `docs/METHODOLOGY.md` | 方法论详解 |
| `docs/agents/` | issue tracker、triage labels、domain docs 配置 |
| `scripts/setup-skills.sh` | 交互式本地安装向导 |
| `skills-lock.json` | skill 来源与版本锁定 |

**插头与插座原则**：AI agent（插头）随时可换，协作纪律（插座）跟仓库走。

## 安装

```bash
bash scripts/setup-skills.sh
```

或手动同步到本地 agent：

```bash
npx skills@latest sync
```

## 来源与许可

- 38 个 Pocock skill 源自 [mattpocock/skills](https://github.com/mattpocock/skills)（MIT），在本仓库中做迁移与本地化。
- `dev-gating`、`health-scoring` 为本项目自定义 skill。
- 本项目同样以 MIT 许可发布，见 [LICENSE](LICENSE)。
