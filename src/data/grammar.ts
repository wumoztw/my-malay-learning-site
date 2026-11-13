import type { W } from './alphabet';

// SVO 積木展示：三種旅遊典型結構 [角色, 馬來文, 注音, 中文]
export const svoDemo = [
  {
    title: '時間詞 + 主詞 + 動詞 + 受詞',
    sentence: 'Esok saya beli tiket.', zh: '明天我買票。',
    blocks: [
      { role: '時間詞', ms: 'Esok', zy: 'ㄝ ㄙㄛ˙', zh: '明天' },
      { role: '主詞', ms: 'saya', zy: 'ㄙㄚ ㄧㄚ', zh: '我' },
      { role: '動詞', ms: 'beli', zy: 'ㄅㄜ ㄌㄧ', zh: '買' },
      { role: '受詞', ms: 'tiket', zy: 'ㄉㄧ ㄎㄜㄊ˙', zh: '票' },
    ],
  },
  {
    title: '主詞 + 助動詞 + 動詞 + 受詞',
    sentence: 'Saya nak minum air.', zh: '我想喝水。',
    blocks: [
      { role: '主詞', ms: 'Saya', zy: 'ㄙㄚ ㄧㄚ', zh: '我' },
      { role: '助動詞', ms: 'nak', zy: 'ㄋㄚㄎ', zh: '想要' },
      { role: '動詞', ms: 'minum', zy: 'ㄇㄧ ㄋㄨㄇ', zh: '喝' },
      { role: '受詞', ms: 'air', zy: 'ㄚ ㄧㄜ', zh: '水' },
    ],
  },
  {
    title: '請求詞 + 動詞 + 受詞 + 地點',
    sentence: 'Tolong bawa saya ke hotel.', zh: '請帶我去飯店。',
    blocks: [
      { role: '請求詞', ms: 'Tolong', zy: 'ㄉㄛ ㄌㄛㄥ', zh: '請' },
      { role: '動詞', ms: 'bawa', zy: 'ㄅㄚ ㄨㄚ', zh: '帶' },
      { role: '受詞', ms: 'saya', zy: 'ㄙㄚ ㄧㄚ', zh: '我' },
      { role: '地點', ms: 'ke hotel', zy: 'ㄍㄜ ㄏㄛ ㄉㄝㄌ', zh: '去飯店' },
    ],
  },
];

// 倒裝：中文「形容詞＋名詞」→ 馬來文「名詞＋形容詞」
export const inversion: { zh: string; ms: W[]; note: string }[] = [
  { zh: '冰茶', ms: [['teh', 'ㄉㄝ'], ['ais', 'ㄚ ㄧㄙ']], note: 'teh（茶）在前，ais（冰）在後' },
  { zh: '熱咖啡', ms: [['kopi', 'ㄍㄛ ㄅㄧ'], ['panas', 'ㄅㄚ ㄋㄚㄙ']], note: 'kopi（咖啡）在前，panas（熱）在後' },
  { zh: '炒飯', ms: [['nasi', 'ㄋㄚ ㄒㄧ'], ['goreng', 'ㄍㄛ ㄌㄧㄥ']], note: 'nasi（飯）在前，goreng（炒）在後' },
  { zh: '炸雞', ms: [['ayam', 'ㄚ ㄧㄚㄇ'], ['goreng', 'ㄍㄛ ㄌㄧㄥ']], note: 'ayam（雞）在前，goreng（炸）在後' },
  { zh: '大房間', ms: [['bilik', 'ㄅㄧ ㄌㄧㄎ'], ['besar', 'ㄅㄜ ㄙㄚ']], note: 'bilik（房間）在前，besar（大）在後' },
  { zh: '白開水', ms: [['air', 'ㄚ ㄧㄜ'], ['kosong', 'ㄍㄛ ㄙㄛㄥ']], note: 'air（水）在前，kosong（空、無味）在後' },
  { zh: '夜市', ms: [['pasar', 'ㄅㄚ ㄙㄚ'], ['malam', 'ㄇㄚ ㄌㄚㄇ']], note: 'pasar（市場）在前，malam（夜晚）在後' },
  { zh: '便宜的票', ms: [['tiket', 'ㄉㄧ ㄎㄜㄊ˙'], ['murah', 'ㄇㄨ ㄌㄚ']], note: 'tiket（票）在前，murah（便宜）在後' },
];

// 互動題：點擊積木排出正確句子
export const exercises: { zh: string; answer: string[]; extra: string[] }[] = [
  { zh: '冰茶', answer: ['teh', 'ais'], extra: ['kopi'] },
  { zh: '熱咖啡', answer: ['kopi', 'panas'], extra: ['sejuk'] },
  { zh: '炒飯', answer: ['nasi', 'goreng'], extra: ['mee'] },
  { zh: '大房間', answer: ['bilik', 'besar'], extra: ['kecil'] },
  { zh: '便宜的票', answer: ['tiket', 'murah'], extra: ['mahal'] },
  { zh: '我想喝水。', answer: ['Saya', 'nak', 'minum', 'air'], extra: ['makan'] },
  { zh: '明天我買票。', answer: ['Esok', 'saya', 'beli', 'tiket'], extra: ['hari'] },
  { zh: '請在這裡停。', answer: ['Tolong', 'berhenti', 'di', 'sini'], extra: ['sana'] },
  { zh: '洗手間在哪裡？', answer: ['Di', 'mana', 'tandas'], extra: ['bilik'] },
  { zh: '這個多少錢？', answer: ['Berapa', 'harga', 'ini'], extra: ['itu'] },
  { zh: '這間房間很大。', answer: ['Bilik', 'ini', 'sangat', 'besar'], extra: ['kecil'] },
  { zh: '可以便宜一點嗎？', answer: ['Boleh', 'murah', 'sikit'], extra: ['mahal'] },
];
