# 🎨 Tailwind CSS UI Kit

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-orange.svg)](package.json)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0+-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js)](https://nextjs.org/)

一套基於 **Next.js** + **Tailwind CSS** 的 UI 元件庫，提供設計感十足的 React 元件，支援暗色模式、動畫效果與日文字體，適合快速建立美觀的介面。  
靈感來自 [gitingest.com](https://gitingest.com/) 的優秀介面設計，特此致敬。

---

## ✨ 特點 Features

- 🚀 **Next.js 15 + App Router** 架構
- 🎨 **Tailwind CSS 4** 打造的主題樣式與客製化設計變數
- 📦 超過 15 種 UI 元件（Button、Card、Modal、Slider、Input 等）
- 🌸 支援日文字體 `jf-openhuninn` 與 `Klee One`
- 🌗 支援暗色模式與動態樣式
- 🎥 整合 `framer-motion` 提供滑順動畫

---

## 🖼️ 展示頁 Demo Page

啟動開發伺服器後，開啟：  
[http://localhost:3000](http://localhost:3000)

所有元件展示與互動範例位於：`src/app/page.tsx`

---

## 🚧 開發與使用

### 安裝與啟動

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

---

## 📁 如何使用元件

從 `src/components/ui/` 複製元件進你的專案即可使用，元件皆為獨立設計、支援 Props 擴充。

```tsx
import { Button, Card, Modal } from '@/components/ui';
```

---

## 🧩 元件列表

- Button / Input / TextArea / Checkbox / Select / Switch  
- Modal / Card / Slider / Range / Alert / Badge  
- Image / Text / JapaneseText

---

## 📚 技術棧

<p align="left">
  <img src="https://img.shields.io/badge/-Next.js-black?logo=next.js&logoColor=white&style=for-the-badge&label=" alt="Next.js" />
  <img src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge&label=" alt="React" />
  <img src="https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge&label=" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/-Framer-black?logo=framer&logoColor=white&style=for-the-badge&label=" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/-Lucide-8b5cf6?logo=lucide&logoColor=white&style=for-the-badge&label=" alt="Lucide Icons" />
  <img src="https://img.shields.io/badge/-TypeScript-3178c6?logo=typescript&logoColor=white&style=for-the-badge&label=" alt="TypeScript" />
</p>

---

## 📄 授權 License

此專案採用 [MIT License](LICENSE) 授權，歡迎自由使用、修改與發佈。

---

## 🛠️ 作者

Made with ❤️ by [natsuki221](https://github.com/natsuki221)
