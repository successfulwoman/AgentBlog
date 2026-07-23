---
title: '使用 Docker 构建高效开发环境'
description: '详细介绍如何使用 Docker 和 Docker Compose 搭建本地开发环境，包括多服务编排、网络配置和数据持久化。'
pubDate: '2024-12-15'
category: '开发工具'
tags: ['Docker', '容器', '开发环境']
---

## 为什么选择 Docker？

Docker 已经成为现代开发工作流中不可或缺的工具。它通过容器化技术，让开发环境的一致性和可复现性大大提升。

### 核心优势

1. **环境一致性**：无论在 Windows、macOS 还是 Linux 上，Docker 容器内的环境完全一致
2. **快速部署**：通过 `docker-compose up` 一条命令即可启动完整的开发环境
3. **资源隔离**：每个服务运行在独立的容器中，互不干扰
4. **易于分享**：通过 Dockerfile 和 docker-compose.yml 即可分享完整环境配置

## 实战：搭建开发环境

### 1. 创建 docker-compose.yml

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev123
    ports:
      - '5432:5432'
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'

  app:
    build: .
    ports:
      - '3000:3000'
    volumes:
      - .:/app
    depends_on:
      - postgres
      - redis

volumes:
  pgdata:
```

### 2. 创建 Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
```

### 3. 启动环境

```bash
docker-compose up -d
```

## 最佳实践

- 使用 `.dockerignore` 排除不需要的文件
- 合理使用多阶段构建减小镜像体积
- 生产环境使用非 root 用户运行应用
- 定期更新基础镜像以修复安全漏洞

## 总结

Docker 让开发环境的搭建变得简单高效。通过合理的配置，你可以在一分钟内启动包含数据库、缓存、应用服务在内的完整开发环境。
