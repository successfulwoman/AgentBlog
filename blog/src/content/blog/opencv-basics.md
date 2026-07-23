---
title: 'Python 图像处理入门：OpenCV 基础教程'
description: '从零开始学习 OpenCV，掌握图像读取、颜色空间转换、滤波和边缘检测等基础操作。'
pubDate: '2024-11-28'
category: '学习笔记'
tags: ['Python', 'OpenCV', '图像处理']
---

## 什么是 OpenCV？

OpenCV（Open Source Computer Vision Library）是一个开源的计算机视觉库，包含了数百种图像处理和计算机视觉算法。

## 安装

```bash
pip install opencv-python
```

## 基础操作

### 读取和显示图像

```python
import cv2

# 读取图像
img = cv2.imread('image.jpg')

# 显示图像
cv2.imshow('Image', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

### 颜色空间转换

```python
# BGR 转灰度
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# BGR 转 HSV
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
```

### 图像滤波

```python
# 高斯模糊
blurred = cv2.GaussianBlur(img, (5, 5), 0)

# 中值滤波
median = cv2.medianBlur(img, 5)
```

### 边缘检测

```python
# Canny 边缘检测
edges = cv2.Canny(gray, 100, 200)
```

## 实用技巧

1. 使用 `cv2.resize()` 调整图像大小
2. 使用 `cv2.rotate()` 旋转图像
3. 使用 `cv2.flip()` 翻转图像

## 总结

OpenCV 功能强大，本文只介绍了最基础的操作。后续我们将深入探讨更多高级应用。
