# TASK: 建置專為台灣人設計的馬來文學習網站並部署至 GitHub

## 目標
在 `/home/wuminchin/文件/my-malay-learning-site` 專案中，使用 Astro 或 Vite + React / Vue 搭配 Tailwind CSS，建置具備「全站注音（ㄅㄆㄇㄈ）輔助切換」、「26字母注音速通」、「台語/生活同源詞認親」、「積木句型與倒裝挑戰」、「實戰情境會話」功能的現代化響應式靜態學習網站，並設定 GitHub Actions 自動發布至 GitHub Pages，最後將所有程式碼 commit 並 push 到遠端 repository。

## 可改檔案
`/home/wuminchin/文件/my-malay-learning-site/` 目錄下的所有新增與修改檔案，包括：
- `package.json`, `astro.config.mjs` (或 `vite.config.ts`), `tailwind.config.*`, `tsconfig.json`
- `.github/workflows/deploy.yml`
- `src/` 內所有組件、頁面、樣式與資料檔案
- `public/` 靜態資產
- `README.md`

## 不可改檔案
- 專案目錄外的任何檔案嚴禁更動。
- 不得使用危險命令或破壞 .git 目錄結構。

## 功能與規格細節要求

### 1. 全站注音切換開關 (Bopomofo Ruby Toggle)
- 在 Navigation Bar 放置全域注音開關按鈕（例如 `ㄅ 顯示注音` / `ㄅ 隱藏注音`）。
- 狀態儲存於 `localStorage`，重新整理或換頁維持狀態。
- 採用標準 HTML5 `<ruby>` 與 `<rt class="zhuyin">` 標籤實現。
- 零抖動排版：透過 CSS 預留行高，關閉時 `rt.zhuyin` 設置 `opacity: 0`；當處於關閉狀態時，滑鼠懸停 (hover) 或手機輕觸任一單字，即時淡入顯示注音浮標。
- 發音支援：點擊單字或發音按鈕時，透過瀏覽器 Web Speech API（優先使用 `ms-MY` 或 `id-ID`）播放道地馬來語音。

### 2. 四大核心單元與頁面
1. **首頁 (`/`)**：
   - 網站理念介紹（南島語系發源地連結、台灣人零聲調負擔、SVO 語序優勢）。
   - 四大關卡導覽卡片、學習進度指引。
   - 「今日一句」精選詞句展示（含馬來文、注音、中文與台語彩蛋）。
2. **第一關：26 字母注音速通館 (`/alphabet`)**：
   - 母音表：a (ㄚ), i (ㄧ), u (ㄨ), o (ㄛ), e (ㄜ), é (ㄝ)。特別標註 e 的兩種發音差異。
   - 子音表：c (ㄐ/ㄑ), j (ㄐ), ny (ㄋㄧ), ng (ㄥ), sy (ㄒ), r (ㄌ/輕顫)。
   - 字尾入聲（促音 k, t, p 煞車音 ˙）與閉唇音（m）。
   - 每個發音均提供代表單字、注音、例句與發音試聽。
3. **第二關：台語/生活同源詞認親館 (`/vocab`)**：
   - 收錄 30+ 個台灣人一秒就懂的同源詞（如 mee, bihun, tauhu, taugeh, kuih, kicap, teh, cawan, kopi, tokei, kongsi, loteng, beca, angpau, samseng, bas, teksi, farmasi, hospital, bank 等）。
   - 提供分類篩選（食物料理、日常生活、商業社會）、單字卡翻牌、發音與詳細「台灣人秒懂文化解說」。
4. **第三關：積木句型與倒裝挑戰 (`/grammar`)**：
   - SVO 句型積木展示（時間詞 + 主詞 + 動詞 + 受詞）。
   - 倒裝練習挑戰（名詞在前、形容詞在後）：如「紅色的車」→ `kereta merah`、「冰茶」→ `teh ais`。
   - 互動練習題：點擊單字積木正確組裝馬來文句子並獲得即時回饋。
5. **第四關：實戰情境會話館 (`/dialogues`)**：
   - 情境 1：Mamak 檔點餐（Roti canai, Teh tarik, Nasi lemak, Kurang manis）。
   - 情境 2：搭車問路（Pergi ke mana?, Tolong hantar saya ke...）。
   - 情境 3：夜市買水果算帳（Berapa harga ini?, Boleh murah sikit?）。
   - 對話氣泡排版，支援單句播放與逐字注音對照。

### 3. GitHub Pages 設定與 CI/CD
- 在配置檔中設定 `base: '/my-malay-learning-site/'`（確保在 GitHub Pages `https://wumoztw.github.io/my-malay-learning-site/` 上的資源路徑、路由與 CSS/JS 正常加載）。
- 建立 `.github/workflows/deploy.yml`，使用 GitHub Actions 官方推薦的 pages 部署流程 (`actions/deploy-pages`)。
- 專案打包指令 `npm run build` 必須零錯誤通過，產出 `dist` 靜態目錄。

### 4. Git 提交與發布
- 將所有新增與修改的檔案執行 `git add .`。
- 執行 `git commit -m "feat: complete Taiwan-Malay learning website with Bopomofo integration"`。
- 執行 `git push origin main` 將程式碼推送至 GitHub 遠端倉庫。

## 完成條件
1. `npm run build` 執行成功且無任何 build error，正確產出靜態網站。
2. 專案根目錄包含完整的 `.github/workflows/deploy.yml`。
3. 本地 git 倉庫狀態乾淨 (`git status` 無未追蹤或未提交之變更)，且已成功 push 至 GitHub `main` 分支。
4. 網頁包含完整的注音切換邏輯與四個模組功能。

## 驗證指令
- `npm run build`
- `git status`
- `git log -1`
- `git push origin main`
