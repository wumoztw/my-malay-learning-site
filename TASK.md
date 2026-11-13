# TASK: 實作離線 PWA（Progressive Web App）完整支援並部署

## 目標
在 `/home/wuminchin/文件/my-malay-learning-site` 專案中，加入完整的 PWA（Progressive Web App）離線支援，讓台灣旅客即使在馬來西亞飛機上、地鐵車廂或無網路環境下，也能將網站安裝到手機主畫面（Add to Home Screen），並順暢離線使用全站 147 條單字、字母發音表、積木題目與實戰對話。

## 可改檔案
- `public/manifest.webmanifest`
- `public/sw.js`
- `public/icon.svg`
- `public/icon-192.png`
- `public/icon-512.png`
- `src/layouts/Base.astro`
- `src/pages/index.astro`
- `README.md`
- `TASK.md`

## 不可改檔案
- 專案目錄外的任何檔案嚴禁更動。

## 詳細規格與實作要求

### 1. App 圖示生成（`public/icon.svg`, `public/icon-192.png`, `public/icon-512.png`）
- 設計一款乾淨高質感的應用程式圖示：
  - 採用 Teal 主色背景（`#0f766e`），搭配代表性的熱帶植物/字母與注音標誌（如「BM ㄅ」或熱帶樹葉徽章）。
  - 提供 `public/icon.svg` 向量圖。
  - 使用 Python 的 Pillow 函式庫或 Node 腳本，在 `public/` 目錄生成標準尺寸的 `icon-192.png`（192x192）與 `icon-512.png`（512x512）。

### 2. PWA Manifest（`public/manifest.webmanifest`）
建立符合標準的 Web App Manifest：
- `name`: `馬來文速通 - 台灣人專用旅遊學習`
- `short_name`: `馬來文速通`
- `description`: `專為台灣人設計的馬來文旅遊學習平台，全站純注音符號輔助，無網路離線完全可用。`
- `start_url`: `/my-malay-learning-site/`
- `scope`: `/my-malay-learning-site/`
- `display`: `standalone`
- `orientation`: `portrait-primary`
- `background_color`: `#f8fafc`
- `theme_color`: `#0f766e`
- `icons`: 包含 192x192 PNG、512x512 PNG，以及 SVG 格式（設定 `purpose: "any maskable"`）。

### 3. Service Worker 離線快取引擎（`public/sw.js`）
實作穩健且專為 GitHub Pages 路徑最佳化的 Service Worker：
- **Cache 命名**：`malay-learning-pwa-v1`
- **預先快取核心頁面（Pre-caching）**：
  - `/my-malay-learning-site/`
  - `/my-malay-learning-site/alphabet/`
  - `/my-malay-learning-site/vocab/`
  - `/my-malay-learning-site/grammar/`
  - `/my-malay-learning-site/dialogues/`
  - `/my-malay-learning-site/manifest.webmanifest`
  - `/my-malay-learning-site/icon.svg`
  - `/my-malay-learning-site/icon-192.png`
  - `/my-malay-learning-site/icon-512.png`
- **快取策略**：
  - HTML 導航頁面與靜態資源（CSS、JS、字型）採用 **Stale-While-Revalidate** 或 **Cache First / Network Fallback**，確保無網路時直接自快取秒開。
  - `activate` 生命週期自動清理舊版本的 Cache。

### 4. 網頁頭部宣告與客戶端註冊（`src/layouts/Base.astro`）
- `<head>` 區塊引入 PWA 關鍵中繼資料：
  ```html
  <link rel="manifest" href={`${b}manifest.webmanifest`} />
  <link rel="icon" type="image/svg+xml" href={`${b}icon.svg`} />
  <link rel="apple-touch-icon" href={`${b}icon-192.png`} />
  <meta name="theme-color" content="#0f766e" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="馬來文速通" />
  ```
- 頁面底部注入 Service Worker 註冊腳本：
  - 若 `navigator.serviceWorker` 支援，則註冊 `${b}sw.js`。
  - 監聽 `beforeinstallprompt` 事件：若使用者設備支援安裝，導覽列或頁面下方浮出提示按鈕 `📲 安裝到手機桌面`，點擊調用 `prompt()`。
  - 監聽 `window.addEventListener('offline', ...)` / `window.addEventListener('online', ...)`：離線時在頁面底部浮現輕量溫和提示（例如：`📶 目前為離線模式，全站內容仍可正常查閱`）。

### 5. 首頁提示更新（`src/pages/index.astro`）
- 在首頁簡介處加入「📱 支援離線安裝（PWA）：無網路也能在手機隨時翻閱」的標章。

### 6. 驗證與推送
- 執行 `npm test`（`astro build`），確保產物正確包含 `manifest.webmanifest`、`sw.js` 及所有圖示，且零錯誤通過。
- 執行 `git add .`、`git commit -m "feat: add full offline PWA support with service worker and app icons"`。
- 執行 `git push origin main`。

## 完成條件
1. `public/manifest.webmanifest` 與 `public/sw.js` 存在且配置正確。
2. 生成 `icon-192.png`、`icon-512.png` 與 `icon.svg`。
3. `Base.astro` 正確引入 manifest 與註冊 Service Worker。
4. `npm test` 順利通過。
5. 成功 push 到 GitHub `main` 分支。

## 驗證指令
- `npm test`
- `git status`
- `git log -1`
- `git push origin main`
