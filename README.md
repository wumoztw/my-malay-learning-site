# 台灣人學馬來文 (my-malay-learning-site)

Astro + Tailwind CSS 靜態學習網站，含全站注音切換、字母速通、常用馬來文單字短句、積木句型、情境會話。

- 開發：`npm install && npm run dev`
- 建置：`npm run build`（輸出 `dist/`）
- 部署：push 到 `main` 後由 GitHub Actions 發布至 https://wumoztw.github.io/my-malay-learning-site/
  （需於 repo Settings → Pages 將 Source 設為 GitHub Actions）

## 離線 PWA

支援 Add to Home Screen 與離線使用：`public/sw.js`（Stale-While-Revalidate，快取 `malay-learning-pwa-v1`）、`public/manifest.webmanifest`、`public/icon*.{svg,png}`。

## ⭐ 星號收藏
在「常用字句」與「實戰會話」點擊 ☆ 即可收藏，資料存於 `localStorage`（key: `my_malay_favs`）。收藏清單頁 `/favorites/` 支援發音、複製文字清單與清空；首頁有「旅遊備忘快查」，並已加入離線快取。

- 單字庫即時搜尋：支援馬來文、中文、注音與情境關鍵字，可與分類／⭐收藏複合篩選（`/` 或 Ctrl+K 聚焦，Esc 清除）。
