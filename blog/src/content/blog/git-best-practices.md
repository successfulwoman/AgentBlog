---
title: 'Git 版本控制最佳实践'
description: '分享团队协作中 Git 的使用规范，包括分支策略、commit 规范、code review 流程等。'
pubDate: '2024-10-22'
category: '开发工具'
tags: ['Git', '版本控制']
---

## 分支策略

推荐使用 **Git Flow** 或 **GitHub Flow** 作为团队的分支管理策略。

### Git Flow

- `main`: 生产环境分支
- `develop`: 开发主分支
- `feature/*`: 功能分支
- `release/*`: 发布分支
- `hotfix/*`: 紧急修复分支

### GitHub Flow

更简单的模型：

- `main`: 始终可部署
- `feature/*`: 所有开发在特性分支进行
- 通过 Pull Request 合并到 main

## Commit 规范

推荐使用 **Conventional Commits** 格式：

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

类型（type）包括：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具相关

### 示例

```
feat(auth): add JWT authentication

- Add JWT token generation
- Add middleware for token verification
- Add refresh token logic

Closes #123
```

## Code Review 流程

1. 创建 Pull Request
2. 请求至少一位 reviewer
3. 通过 CI 检查
4. 解决所有 review 意见
5. 合并到目标分支

## 总结

规范的 Git 使用是高效团队协作的基础。选择合适的策略并坚持执行，能大幅减少合并冲突和沟通成本。
