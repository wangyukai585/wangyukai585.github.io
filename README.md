# 我的数据小馆 · Yukai Wang's Data Studio

> ISE3308 作业三 — Theory and Applications of Artificial Intelligence  
> 上海交通大学 · 2025–2026 学年第二学期

## 🌐 在线访问

**[https://wangyukai585.github.io/](https://wangyukai585.github.io/)**

代码仓库：[github.com/wangyukai585/wangyukai585.github.io](https://github.com/wangyukai585/wangyukai585.github.io)

---

## 📁 文件说明

| 文件 / 文件夹 | 说明 |
|---|---|
| `index.html` | 主页面（单 HTML 文件，含全部 CSS 和 JS） |
| `avatar1.jpg` | 头像 1（证件照风格） |
| `avatar2.jpg` | 头像 2（旅行照，点击头像可切换） |
| `photos/` | 旅行照片 + 校徽（sf / berkeley / disney / sjtu-logo） |
| `geo/` | GeoJSON 地区高亮数据（136 KB，已精简） |
| `README.md` | 本文件 |
| `report/report.pdf` | 作业报告 PDF（19 页） |

---

## 🎯 页面功能

### 必备三区域
- **自我介绍区** — About Me（SJTU 校徽 + 双学位 + 教育时间线）、Honors & Awards 时间线
- **数据可视化区** — 旅行地图（21 城 GeoJSON 高亮）+ My Music Top 5 歌手/歌曲双栏
- **交互彩蛋** — 见下方

### 八个交互彩蛋 🥚
1. **Favicon YK 图标** — 浏览器标签页显示冰蓝 YK 徽标（SVG Data URI 内嵌）
2. **头像切换 + 三色描边** — 点击头像切换两张照片，描边颜色在冰蓝/琥珀/紫三色循环，显示「Another side of me 👋」
3. **实时上海时钟** — 每秒更新，7 个时段自动切换情境标签（「实验室在线 🔬」/「深夜码字中 💻」等）
4. **鼠标粒子轨迹** — 移动鼠标时从指针喷出冰蓝粒子，带重力和透明度衰减
5. **随机翻牌名言** — 点击卡片触发 CSS 3D 翻转，10 条中英混合名言随机展示
6. **旅行照片 Lightbox** — hover 显示「Click to enlarge」，点击全屏预览
7. **顶部加载进度条** — 页面加载时 2px 冰蓝→紫渐变进度条，DOMContentLoaded 后消失
8. **GeoJSON 地区高亮** — 去过的国家/省份/州用半透明冰蓝面域标注

---

## 🛠 技术栈

- **语言**：纯 HTML / CSS / JavaScript（单文件，无框架）
- **地图**：Leaflet.js（CDN）+ CartoDB 瓦片
- **数据**：GeoJSON（三个精简文件，共 136 KB）
- **部署**：GitHub Pages（`main` 分支根目录）
- **AI 工具**：Claude Code — Opus 4.7（前期）/ Sonnet 4.6（后期）

---

## 💻 本地运行

直接双击 `index.html` 可在浏览器打开，大部分功能正常。

> ⚠️ **GeoJSON 地区高亮**通过 `fetch()` 加载，需本地服务器环境：
> ```bash
> python3 -m http.server 8000
> # 然后访问 http://localhost:8000
> ```
> 在线版（GitHub Pages）无此限制，所有功能完整可用。
