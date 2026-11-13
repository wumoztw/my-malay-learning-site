# TASK: 擴充常用馬來文字句為「全方位旅遊生存通」（120+ 條）並自動部署

## 目標
在 `/home/wuminchin/文件/my-malay-learning-site` 專案中，將第二關的常用單字與短句大幅擴充至 **120 條以上**，全面覆蓋自由行觀光客在馬來西亞一般旅遊的所有高頻場景（交通搭車、飯店住宿、餐廳點餐、夜市逛街殺價、緊急求助就醫、景點問路、數字時間結帳），所有字句均配齊精準的純注音符號（ㄅㄆㄇㄈ）、繁體中文說明與情境提示，並完成建置與 push 至 GitHub Pages。

## 可改檔案
- `src/data/vocab.ts`
- `src/pages/vocab.astro`
- `src/pages/index.astro`
- `README.md`
- `TASK.md`

## 不可改檔案
- 專案目錄外的任何檔案嚴禁更動。

## 詳細規格與實作要求

### 1. 分類架構與詞彙庫擴充 (`src/data/vocab.ts`)
請將分類重新梳理為 6 大旅遊核心主題（確保分類名稱簡潔明確、介面好點選）：
`export type Cat = '日常問候與禮貌' | '交通出行與問路' | '飯店住宿與服務' | '美食點餐與夜市' | '逛街購物與結帳' | '緊急求助與就醫' | '時間數字與常用';`

請擴充至 **120~135 條** 旅遊高頻字句，涵蓋以下場景：

#### (1) 日常問候與禮貌（約 12 條）
- Selamat pagi（早安）、Selamat tengah hari（午安）、Selamat petang（傍晚好）、Selamat malam（晚安）
- Apa khabar?（你好嗎？）、Khabar baik（很好）、Terima kasih（謝謝）、Sama-sama（不客氣）、Maaf（不好意思/抱歉）、Tolong（請/幫忙）、Selamat jalan（慢走/一路順風）、Jumpa lagi（下次見）

#### (2) 交通出行與問路（約 20 條）
- Lapangan terbang（機場）、Stesen（車站）、Stesen LRT / MRT（捷運站/輕快鐵站）、Bas（公車）、Teksi（計程車）、Grab（叫車App）
- Tiket（車票/門票）、Beli tiket（買票）、Satu tiket ke...（一張去...的票）
- Pergi ke mana?（去哪裡？）、Tolong bawa saya ke...（請載我到...）、Berhenti di sini（在這裡停/靠邊停）
- Di mana...?（...在哪裡？）、Di mana stesen bas?（公車站牌在哪？）
- Kiri（左）、Kanan（右）、Lurus（直走）、Depan（前面）、Belakang（後面）、Dekat（近）、Jauh（遠）
- Masuk（入口/進）、Keluar（出口/出）

#### (3) 飯店住宿與服務（約 15 條）
- Hotel（飯店）、Bilik（房間）、Nombor bilik（房號）、Kunci（鑰匙）、Kad kunci（房卡）
- Daftar masuk（辦理入住 Check-in）、Daftar keluar（退房 Check-out）
- Kata laluan Wi-Fi（Wi-Fi 密碼）、Boleh bagi kata laluan Wi-Fi?（能給我 Wi-Fi 密碼嗎？）
- Tuala（毛巾）、Air panas（熱水）、Penghawa dingin / Air-con（冷氣）、Selimut（被子）
- Boleh simpan bagasi?（可以寄放行李嗎？）、Tolong panggil teksi（請幫我叫計程車）

#### (4) 美食點餐與夜市（約 24 條）
- Menu（菜單）、Pesan / Order（點餐）、Makan（吃）、Minum（喝）、Sedap（好吃/美味）
- Saya nak...（我要...）、Nak makan apa?（想吃什麼？）
- Makan sini（內用）、Bungkus（打包/外帶）
- Air（水）、Air kosong / Air suam（白開水/溫水）、Ais（加冰）、Panas（熱的）
- Kurang manis（少糖/微甜）、Tak nak gula（無糖）
- Pedas（辣）、Tak nak pedas / Jangan pedas（不要辣）、Sedikit pedas（微辣）
- Ayam（雞肉）、Daging lembu（牛肉）、Ikan（魚）、Udang（蝦）、Sayur（蔬菜）、Telur（蛋）
- Nasi lemak（椰漿飯）、Roti canai（印度甩餅）、Teh tarik（拉茶）、Mee goreng（炒麵）
- Kira / Bil（買單/結帳）

#### (5) 逛街購物與結帳（約 20 條）
- Berapa harga ini? / Berapa?（這個多少錢？）
- Mahal（太貴了）、Murah（便宜）、Boleh murah sikit?（能算便宜一點嗎？）
- Ada diskaun?（有折扣嗎？）、Tengok-tengok saja（只是看看）
- Saiz（尺寸）、Besar（大）、Kecil（小）
- Boleh bayar guna kad?（可以刷卡嗎？）、Boleh guna Touch 'n Go?（可以用電子支付/TNG嗎？）
- Wang tunai / Cash（現金）、Duit baki / Baki（找零）
- Resit（收據/發票）、Beg plastik（塑膠袋）、Kedai（商店）、Pasar malam（夜市）

#### (6) 緊急求助與就醫（約 15 條）
- Tolong!（救命！/幫忙！）、Bahaya（危險）
- Balai polis（警察局）、Polis（警察）、Hospital（醫院）、Klinik（診所）、Farmasi（藥局）
- Sakit（痛/不舒服）、Sakit perut（肚子痛）、Sakit kepala（頭痛）、Demam（發燒）、Batuk（咳嗽）
- Ubat（藥）、Doktor（醫生）
- Saya hilang pasport（我護照掉了）、Saya sesat（我迷路了）、Boleh tolong saya?（能救/幫我嗎？）

#### (7) 時間數字與常用（約 18 條）
- Satu 到 Sepuluh（數字 1～10）
- Sebelas（11）、Dua puluh（20）、Ratus（百，如 Seratus = 100）、Ribu（千，如 Seribu = 1000）
- Hari ini（今天）、Esok（明天）、Semalam（昨天）、Sekarang（現在）
- Pagi（早上）、Petang（下午/傍晚）、Malam（晚上）、Pukul berapa?（幾點了？）
- Ya（是/好）、Tidak / Tak（不是/不要）

### 2. 頁面優化 (`src/pages/vocab.astro`)
- 頁面上方加入旅遊統計徽章（例如：「🛫 旅遊通模式：收錄 120+ 條大馬自由行必備字句」）。
- 確保分類按鈕包含「全部」以及上述 7 個分類，點擊篩選切換即時流暢。
- 支援右上角的注音開關切換與點擊發音。

### 3. 首頁更新 (`src/pages/index.astro`)
- 將第二關卡片描述更新為：「精選 120+ 個自由行旅遊必備單字與實用短句（交通、飯店、點餐、殺價、緊急求助）。」

### 4. 驗證與推送
- 執行 `npm test`（`astro build`），必須零錯誤建置完成。
- 執行 `git add .`、`git commit -m "feat: expand travel vocab to 120+ entries covering all tourist scenarios"`。
- 執行 `git push origin main` 將代碼推送至遠端倉庫。

## 完成條件
1. `src/data/vocab.ts` 條目數達 120 條以上，且涵蓋上述 7 大旅遊分類。
2. 每一條均有注音（zy）、馬來文（ms）、中文（zh）、分類（cat）、情境提示（note）。
3. `npm test` 通過，無任何錯誤。
4. 成功 push 到 GitHub `main` 分支。

## 驗證指令
- `npm test`
- `git status`
- `git log -1`
- `git push origin main`
