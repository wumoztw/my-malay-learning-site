# TASK: 重構第二關為「常用馬來文單字、短句」並全面移除台語相關比附

## 目標
在 `/home/wuminchin/文件/my-malay-learning-site` 專案中：
1. 全面移除所有與「台語」、「台語同源詞」相關的描述與不當比附（馬來西亞華人社群使用的是在地化福建話，且許多詞彙並非源於台語）。
2. 將第二關徹底重構為「常用馬來文單字、短句」（包含問候禮貌、生活問答、餐飲購物、數字時間、高頻核心詞），並搭配精準純注音（ㄅㄆㄇㄈ）標註、實用中文說明與即時發音功能。
3. 更新全站導覽列、首頁說明文字與首頁每日一句卡片，使命名與文案統一。
4. 確保 `npm test`（即 `astro build`）零錯誤建置通過，並將修改 commit 與 push 到 GitHub `main` 分支。

## 可改檔案
- `src/data/vocab.ts`
- `src/data/alphabet.ts`
- `src/pages/vocab.astro`
- `src/pages/index.astro`
- `src/layouts/Base.astro`
- `README.md`
- `TASK.md`

## 不可改檔案
- 專案目錄外的任何檔案嚴禁更動。

## 詳細規格與實作要求

### 1. 常用馬來文單字、短句庫設計 (`src/data/vocab.ts`)
定義明確分類（如 `'日常問候與禮貌' | '生活問答與疑問' | '餐飲與購物' | '數字與時間' | '高頻實用名詞'`），並整理至少 35~45 條最實用、最高頻的馬來文單字與短句，每條包含：
- `ms`: 馬來文字詞或短句
- `zy`: 精準注音符號（如 `Selamat pagi` → `ㄙㄜ ㄌㄚ ㄇㄚ˙  ㄆㄚ ㄍㄧ`）
- `zh`: 台灣繁體中文翻譯
- `cat`: 分類名稱
- `note`: 實用情境指南或文化使用時機（嚴禁提及台語）

精選必備收錄內容：
- **問候禮貌**：Selamat pagi（早安）、Selamat tengah hari（午安）、Selamat petang（傍晚好）、Selamat malam（晚安）、Apa khabar?（你好嗎？）、Khabar baik（很好/我很好）、Terima kasih（謝謝）、Sama-sama（不客氣）、Maaf（不好意思/抱歉）、Tolong（請/幫忙）、Selamat tinggal（再見/告別）、Selamat jalan（一路平安/慢走）、Jumpa lagi（下次見）。
- **生活問答**：Di mana tandas?（洗手間在哪裡？）、Berapa harganya?（這個多少錢？）、Apa ini?（這是什麼？）、Boleh tolong saya?（能幫我一下嗎？）、Saya tidak faham（我聽不懂）、Boleh cakap perlahan sikit?（可以講慢一點嗎？）、Ya / Tidak (Tak)（是/不是）、Di mana...?（...在哪裡？）。
- **餐飲購物**：Air（水）、Makanan（食物）、Minuman（飲料）、Nasi（飯）、Mee（麵）、Ais（冰）、Kurang manis（少糖/微甜）、Bungkus（打包/外帶）、Makan sini（內用）、Boleh murah sikit?（可以算便宜一點嗎？）、Kira（算帳/買單）。
- **數字時間**：Satu 到 Sepuluh（1 到 10）、Hari ini（今天）、Esok（明天）、Sekarang（現在）、Pagi（早上）、Malam（晚上）。
- **高頻名詞/代詞**：Saya（我）、Awak / Anda（你）、Dia（他/她）、Kita（我們）、Wang / Duit（錢）、Stesen（車站）、Hotel（飯店）、Lapangan terbang（機場）、Kedai（商店）、Pasar malam（夜市）。

### 2. 更新第二關頁面 (`src/pages/vocab.astro`)
- 頁面標題改為：`第二關：常用馬來文單字、短句`。
- 副標題與說明文字強調：精選馬來西亞日常生活中最高頻的必備單字與生存短句，支援分類切換、注音即時輔助與點擊發音。
- 分類標籤按鈕支援全部分類快速切換篩選。

### 3. 全面清理全站的台語相關文字
- `src/layouts/Base.astro`：導覽列改為 `['vocab', '2 常用字句']`（或 `['vocab', '2 常用單字']`）。
- `src/pages/index.astro`：
  - 卡片導覽由「台語／生活同源詞認親館」改為 `['vocab', '第二關', '常用馬來文單字、短句', '精選日常最高頻的生活單字與實用生存短句。']`。
  - 首頁介紹文案改為：「用純注音輔助、高頻生活單字與積木句型，快速開口說 Bahasa Melayu。」
  - 「今日一句」中移除任何台語彩蛋說明，替換為優雅的馬來文文化小知識（例如 Terima kasih 的字面含義為「接受愛」）。
- `src/data/alphabet.ts`：
  - 移除以台語作為入聲或鼻音的舉例，改用標準清晰的發音描述（例如：字尾 k 喉嚨收緊不送氣、字尾 m 閉唇收音、ny 舌面鼻音快速滑過）。
- `README.md`：同步更新章節標題與描述。

### 4. 驗證與推送
- 執行 `npm test`（或 `npm run build`），必須零錯誤建置成功並產出 5 個靜態頁面。
- 執行 `git add .`、`git commit -m "refactor: replace cognates with high-frequency everyday Malay words and phrases"`。
- 執行 `git push origin main` 將最新代碼推送至 GitHub。

## 完成條件
1. 全站代碼（包含資料檔、組件與頁面文案）中不再出現「台語」等不精確比附。
2. 第二關完整展示「常用馬來文單字、短句」，包含問候、疑問、餐飲購物、數字時間與高頻詞彙。
3. `npm test` 通過，無 build 錯誤。
4. 本地 git 狀態乾淨，並已成功 push 至 GitHub `main` 分支。

## 驗證指令
- `npm test`
- `git status`
- `git log -1`
- `git push origin main`
