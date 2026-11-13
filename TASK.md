# TASK: 第三關與第四關全面聯動旅遊字句庫（積木造句擴充至12題，實戰會話擴充至6大場景）

## 目標
在 `/home/wuminchin/文件/my-malay-learning-site` 專案中，將第二關的 147 條旅遊必備字句深度整合到第三關（積木句型與倒裝挑戰）與第四關（實戰情境會話館），包含：
1. **第三關 (`src/data/grammar.ts` & `src/pages/grammar.astro`)**：
   - SVO 句型積木擴增為 3 大旅遊典型結構展示（時間詞、想做/助動詞、請求動詞）。
   - 倒裝練習擴增至 8 個實用旅遊名詞＋形容詞組合（如冰茶、熱咖啡、炒飯、大房間、便宜的票等）。
   - 互動組句測驗題目由 5 題大幅擴充至 **12 題**旅遊實戰題，完成 12 題後顯示通關祝賀與重測按鈕。
2. **第四關 (`src/data/dialogues.ts` & `src/pages/dialogues.astro`)**：
   - 實戰情境對話由 3 個擴增至 **6 大大馬自由行核心情境**（Mamak檔點餐、叫Grab/搭車、飯店Check-in與行李、夜市殺價與行動支付、捷運站/機場買票問路、藥局與緊急求助）。
   - 每句皆配有逐字純注音符號（ㄅㄆㄇㄈ）、繁體中文翻譯與單句點擊發音。
   - 頁面頂部新增「情境快速錨點導覽按鈕」，方便一鍵跳轉到不同情境。
3. **首頁更新 (`src/pages/index.astro`)**：更新第 3 關與第 4 關的卡片描述。
4. **驗證與發布**：執行 `npm test`（`astro build`）確保零錯誤通過，並 push 至 GitHub Pages。

## 可改檔案
- `src/data/grammar.ts`
- `src/pages/grammar.astro`
- `src/data/dialogues.ts`
- `src/pages/dialogues.astro`
- `src/pages/index.astro`
- `README.md`
- `TASK.md`

## 不可改檔案
- 專案目錄外的任何檔案嚴禁更動。

## 詳細規格與實作要求

### 1. 第三關資料擴充 (`src/data/grammar.ts`)
- **`svoDemo` 旅遊三合一積木展示**：
  提供 3 組不同結構的積木展示陣列（或包含三組結構），例如：
  1. `[時間詞 Esok] + [主詞 saya] + [動詞 beli] + [受詞 tiket]`（明天我買票）
  2. `[主詞 Saya] + [助動詞 nak] + [動詞 minum] + [受詞 air]`（我想喝水）
  3. `[請求詞 Tolong] + [動詞 bawa] + [受詞 saya] + [地點 ke hotel]`（請帶我去飯店）
- **`inversion` 旅遊倒裝（名詞在前、修飾在後，8 組）**：
  - `teh ais`（冰茶）
  - `kopi panas`（熱咖啡）
  - `nasi goreng`（炒飯）
  - `ayam goreng`（炸雞）
  - `bilik besar`（大房間）
  - `air kosong`（白開水）
  - `pasar malam`（夜市）
  - `tiket murah`（便宜的票）
  每項均包含對應的純注音符號陣列與記憶說明。
- **`exercises` 互動組句練習（擴充至 12 題）**：
  涵蓋倒裝片語與 SVO 實用短句：
  1. 冰茶：answer: `['teh', 'ais']`, extra: `['kopi']`
  2. 熱咖啡：answer: `['kopi', 'panas']`, extra: `['sejuk']`
  3. 炒飯：answer: `['nasi', 'goreng']`, extra: `['mee']`
  4. 大房間：answer: `['bilik', 'besar']`, extra: `['kecil']`
  5. 便宜的票：answer: `['tiket', 'murah']`, extra: `['mahal']`
  6. 我想喝水。：answer: `['Saya', 'nak', 'minum', 'air']`, extra: `['makan']`
  7. 明天我買票。：answer: `['Esok', 'saya', 'beli', 'tiket']`, extra: `['hari']`
  8. 請在這裡停。：answer: `['Tolong', 'berhenti', 'di', 'sini']`, extra: `['sana']`
  9. 洗手間在哪裡？：answer: `['Di', 'mana', 'tandas']`, extra: `['bilik']`
  10. 這個多少錢？：answer: `['Berapa', 'harga', 'ini']`, extra: `['itu']`
  11. 這間房間很大。：answer: `['Bilik', 'ini', 'sangat', 'besar']`, extra: `['kecil']`
  12. 可以便宜一點嗎？：answer: `['Boleh', 'murah', 'sikit']`, extra: `['mahal']`

### 2. 第三關頁面體驗優化 (`src/pages/grammar.astro`)
- 在練習題區塊支援 12 題連續作答，並在第 12 題答對後顯示慶祝標籤（如「🎉 太棒了！你已通關 12 道旅遊積木造句題！」）與「再練一次」按鈕。
- 保持原有的點擊積木加入、點擊已選積木退回、以及答案判斷邏輯。

### 3. 第四關實戰情境會話擴充 (`src/data/dialogues.ts`)
擴充為 6 大旅遊真實對話情境，每個情境至少 5~7 句來回：
1. **情境 1：Mamak 檔 & 熟食中心點餐 (`mamak`)**
   - 角色：服務生 / 你
   - 內容：詢問吃什麼、點印度煎餅（Roti canai satu）、飲料點拉茶少糖（Teh tarik kurang manis）、內用還外帶（Makan sini）、結帳買單（Kira bil）。
2. **情境 2：搭車叫車與問路 Grab/Teksi (`transport`)**
   - 角色：司機 / 你
   - 內容：要去哪裡（Pergi ke mana?）、請載我到飯店（Tolong hantar saya ke hotel）、請開後車廂放行李（Tolong buka bonet/bagasi）、在這裡停（Berhenti di sini）、車資多少（Berapa tambang?）。
3. **情境 3：飯店入住 Check-in 與櫃檯服務 (`hotel`)**
   - 角色：櫃檯人員 / 你
   - 內容：我想辦理入住（Saya nak daftar masuk）、這是我的護照（Ini pasport saya）、房號 302（Nombor bilik 302）、有免費 Wi-Fi 嗎（Ada Wi-Fi percuma?）、Wi-Fi 密碼是什麼（Apa kata laluan?）、可以寄放行李嗎（Boleh simpan bagasi?）。
4. **情境 4：夜市採買與殺價付款 (`market`)**
   - 角色：老闆 / 你
   - 內容：這個多少錢（Berapa harga ini?）、十令吉（Sepuluh ringgit）、太貴了，可以便宜一點嗎（Mahal sangat, boleh murah sikit?）、八令吉賣你（Boleh, lapan ringgit）、可以用 Touch 'n Go 或刷卡嗎（Boleh guna Touch 'n Go?）。
5. **情境 5：捷運站 / 機場問路買票 (`transit`)**
   - 角色：站務人員 / 你
   - 內容：不好意思，捷運站在哪裡（Maaf, di mana stesen LRT?）、一直往前走（Lurus di depan）、我要買一張去中央車站的票（Saya nak beli satu tiket ke KL Sentral）、出口在哪裡（Di mana pintu keluar?）。
6. **情境 6：藥局就醫與緊急求助 (`emergency`)**
   - 角色：藥劑師 / 你
   - 內容：請幫幫我，我肚子痛而且發燒（Tolong saya, saya sakit perut dan demam）、有發燒藥嗎（Ada ubat demam?）、這盒藥一天吃兩次（Makan ubat ini dua kali sehari）、如果很嚴重附近有診所（Ada klinik dekat sini）。

每句必須由 `[馬來文單字, 注音]` 配對組裝（例如 `[['Saya', 'ㄙㄚ ㄧㄚ'], ['nak', 'ㄋㄚㄎ']]`），嚴格確保注音在 `<Sentence />` 中正確渲染。

### 4. 第四關頁面優化 (`src/pages/dialogues.astro`)
- 頂部加入 6 個情境快速切換按鈕（Pill Buttons：🍽️ Mamak點餐、🚗 叫車問路、🏨 飯店入住、🛍️ 夜市殺價、🚇 捷運買票、💊 藥局求助），點擊平滑滾動到該情境。
- 維持單句點擊發音功能。

### 5. 首頁同步更新 (`src/pages/index.astro`)
- 第三關描述更新為：「12 道旅遊積木組句挑戰，搞懂 SVO 與倒裝邏輯。」
- 第四關描述更新為：「6 大自由行實戰會話（點餐、叫車、飯店、夜市、買票、求助）。」

### 6. 驗證與推送
- 執行 `npm test`（`astro build`），必須零錯誤建置完成。
- 執行 `git add .`、`git commit -m "feat: link travel vocab with 12 grammar exercises and 6 dialogue scenes"`。
- 執行 `git push origin main`。

## 完成條件
1. `src/data/grammar.ts` 包含 12 道練習題與 8 組倒裝例句。
2. `src/data/dialogues.ts` 包含 6 個完整情境對話，所有句子均有正確注音陣列。
3. `npm test` 通過。
4. 成功 push 到 GitHub `main` 分支。

## 驗證指令
- `npm test`
- `git status`
- `git log -1`
- `git push origin main`
