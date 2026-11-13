# TASK: 單字庫加入多欄位即時搜尋框與複合篩選功能

## 目標
在 `/home/wuminchin/文件/my-malay-learning-site` 專案中，為第二關常用單字庫頁面（`src/pages/vocab.astro`）新增強大的即時關鍵字搜尋功能，讓旅客與學習者可以輸入「中文」（如「水」、「便宜」）、「馬來文」（如「air」、「murah」）、「注音」（如「ㄇㄚ」、「ㄕㄨㄟ」）或「情境情境關鍵字」，即時零延遲過濾 147 條單字卡，並與現有的「主題分類」及「⭐ 只看已收藏」無縫複合篩選。

## 可改檔案
- `src/pages/vocab.astro`
- `README.md`
- `TASK.md`

## 不可改檔案
- 專案目錄外的任何檔案嚴禁更動。

## 詳細規格與實作要求

### 1. 搜尋欄位 UI 設計 (`src/pages/vocab.astro`)
- 在分類篩選按鈕列上方或旁邊，新增一個美觀醒目的搜尋區塊：
  - 輸入框（`<input id="vocab-search" type="search" ...>`）：
    - 佔位提示文字（Placeholder）：`🔍 搜尋馬來文、中文、注音或情境（例如：makan、水、ㄇㄚ...）`
    - 支援鍵盤快速鍵：按下 `/` 鍵或 `Ctrl+K` / `Cmd+K` 自動聚焦至搜尋框；按下 `Esc` 鍵清空搜尋並失焦。
  - 清除按鈕（`✕`）：當輸入框有文字時顯示，點擊一鍵清空搜尋詞。
  - 即時統計徽章：顯示「顯示 N / 147 筆結果」。
  - 找不到結果的友善空狀態（Empty State）：當搜尋無匹配項目時，顯示「🔍 找不到符合「{關鍵字}」的字句，換個關鍵字或按全部試試！」並附「清除搜尋」按鈕。

### 2. 多維度匹配演算法（前端即時過濾）
在 `<div class="flip" ...>` 元素上附帶完整資料屬性：
`data-search={`${v.ms} ${v.zy} ${v.zh} ${v.cat} ${v.note}`.toLowerCase()}`
- 搜尋時：
  - 將輸入字串轉為小寫並 trim。
  - 判定卡片是否匹配：`data-search.includes(query)`。
  - 複合篩選判定：`isSearchMatch && isCategoryMatch`
    - 分類若為 `'全部'`：僅看搜尋是否匹配。
    - 分類若為 `'__fav'`：必須同時為已收藏且符合搜尋。
    - 分類若為具體主題（如 `'餐飲與購物'`）：必須同屬該主題且符合搜尋。
- 即時更新顯示數量徽章與空狀態提示。

### 3. 翻牌與互動相容
- 點擊搜尋框或清除按鈕時不會意外翻轉單字卡。
- 點擊發音按鈕、星號收藏按鈕功能依舊維持正常。
- 支援手機觸控體驗與響應式排版。

### 4. 驗證與推送
- 執行 `npm test`（`astro build`），確保產物正確且零錯誤通過。
- 執行 `git add .`、`git commit -m "feat: add instant multi-field search bar to vocab page with composite filtering"`。
- 執行 `git push origin main`。

## 完成條件
1. `vocab.astro` 包含即時搜尋輸入框、清除按鈕與結果數量統計。
2. 支援中文、馬來文、注音與使用情境關鍵字搜尋。
3. 搜尋與分類按鈕、⭐ 只看已收藏能複合運作。
4. `npm test` 通過，且成功 push 到 GitHub `main` 分支。

## 驗證指令
- `npm test`
- `git status`
- `git log -1`
- `git push origin main`
