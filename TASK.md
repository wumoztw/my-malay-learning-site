# TASK: 實作全站「星號收藏（My Favorites）」功能與專屬收藏清單頁面

## 目標
在 `/home/wuminchin/文件/my-malay-learning-site` 專案中，新增個人化「星號收藏」功能，讓學習者與旅客在出國前或學習中，能將必備字詞與會話短句加上星號（⭐）標記，並能隨時透過「⭐ 收藏清單頁」或首頁快捷錦囊一秒叫出複習，且在離線 PWA 環境下完全持久可用。

## 可改檔案
- `src/pages/favorites.astro`（新增）
- `src/pages/vocab.astro`
- `src/pages/dialogues.astro`
- `src/pages/index.astro`
- `src/layouts/Base.astro`
- `public/sw.js`
- `README.md`
- `TASK.md`

## 不可改檔案
- 專案目錄外的任何檔案嚴禁更動。

## 詳細規格與實作要求

### 1. 收藏資料結構與全域管理機制 (`src/layouts/Base.astro`)
- 在頂部導覽列的 `nav` 陣列加入收藏頁面連結：
  `['favorites', '⭐ 收藏']`
- 在客戶端腳本建立共用的收藏管理物件 `window.favStore`（基於 `localStorage`，key: `my_malay_favs`）：
  - 項目格式：
    ```ts
    interface FavItem {
      id: string; // 唯一辨識碼，例如單字直接用 ms，會話用對話句子純文字
      ms: string; // 馬來文文字
      zy?: string; // 注音
      zh: string; // 中文釋義
      cat?: string; // 分類或來源情境
      type: 'vocab' | 'dialogue';
    }
    ```
  - 提供方法：
    - `get(): FavItem[]`
    - `has(id: string): boolean`
    - `toggle(item: FavItem): boolean`（返回是否已收藏）
    - `clear(): void`
  - 狀態變更時發送自訂事件 `window.dispatchEvent(new CustomEvent('fav_change'))`，讓不同組件與即時更新星號狀態。

### 2. 單字庫加入收藏與篩選 (`src/pages/vocab.astro`)
- 在每張單字卡的右上角或適當位置，加入一顆星號收藏按鈕（例如 `<button class="fav-star text-lg" data-ms={v.ms} ...>☆</button>`）。
- 點擊星號按鈕：
  - 阻止事件冒泡（`e.stopPropagation()`），避免觸發卡片翻面或發音。
  - 切換收藏狀態，收藏時星號變為實心金黃色 `⭐`（如 `text-amber-500`），未收藏為灰框 `☆`。
- 在頂部分類篩選按鈕列中，加入 `⭐ 只看已收藏` 篩選鈕：
  - 點擊後僅顯示使用者當前有加星號的單字卡。若無任何收藏，顯示溫和提示文字。

### 3. 情境會話加入單句收藏 (`src/pages/dialogues.astro`)
- 在每句對話泡泡（或是發音按鈕旁），加入一顆輕量星號按鈕。
- 點擊即可將該句對話（含對話馬來文、注音、中文與情境名稱）加入或移除收藏。

### 4. 新增專屬「⭐ 我的旅遊收藏清單頁」（`src/pages/favorites.astro`）
建立獨立路由頁面：
- **頂部統計**：顯示「⭐ 我的出國備忘錦囊（共 N 條）」。
- **清單展示**：
  - 若尚無收藏：顯示友善引導插畫或提示（「目前還沒有收藏任何字句。在單字庫或情境對話中點擊 ⭐，即可將出國必備的救急句釘選在此！」），並提供「前往探索單字」按鈕。
  - 若已有收藏：以清爽卡片清單逐條列出，每條皆包含：
    - 馬來文單字/短句（支援全域注音開關與 `<ruby>` 渲染）
    - 中文翻譯與來源情境標籤
    - 🔊 點擊發音按鈕
    - ❌ / ⭐ 移除收藏按鈕
- **實用工具列**：
  - 「📋 一鍵複製文字清單」：將收藏清單轉為純文字複製到剪貼簿（方便貼到備忘錄或傳給同遊旅伴）。
  - 「🗑️ 清空收藏」：附確認對話框以防誤按。

### 5. 首頁快捷收藏區塊 (`src/pages/index.astro`)
- 在首頁加入一個醒目的「⭐ 我的旅遊備忘快查」卡片區塊：
  - 若使用者有收藏字句，動態列出前 3~5 條收藏字句與「查看全部 (N) →」按鈕，讓剛打開網站的使用者在機場或餐廳能 1 秒點開使用！
  - 若無收藏，顯示點擊星號即可收藏的小教學。

### 6. PWA 離線更新 (`public/sw.js`)
- 將快取名稱升級為 `malay-learning-pwa-v2`。
- 在 `PRECACHE` 陣列中加入 `'favorites/'`，確保無網路時收藏頁面亦能 100% 離線打開。

### 7. 驗證與推送
- 執行 `npm test`（`astro build`），確保產物正確包含 `dist/favorites/index.html` 且零錯誤通過。
- 執行 `git add .`、`git commit -m "feat: add star favorites feature with dedicated page and offline support"`。
- 執行 `git push origin main`。

## 完成條件
1. 存在 `src/pages/favorites.astro`，能動態讀取 `localStorage` 呈現收藏清單。
2. `vocab.astro` 與 `dialogues.astro` 皆可點擊 ⭐ 進行收藏/取消收藏。
3. `vocab.astro` 有「⭐ 只看已收藏」篩選鈕。
4. `sw.js` 包含 `favorites/` 預先快取。
5. `npm test` 通過，且已 push 至 GitHub `main` 分支。

## 驗證指令
- `npm test`
- `git status`
- `git log -1`
- `git push origin main`
