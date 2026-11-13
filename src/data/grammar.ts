import type { W } from './alphabet';

// SVO 積木展示：[角色, 馬來文, 注音, 中文]
export const svoDemo = [
  { role: '時間詞', ms: 'Esok', zy: 'ㄝ ㄙㄛ˙', zh: '明天' },
  { role: '主詞', ms: 'saya', zy: 'ㄙㄚ ㄧㄚ', zh: '我' },
  { role: '動詞', ms: 'makan', zy: 'ㄇㄚ ㄎㄢ', zh: '吃' },
  { role: '受詞', ms: 'nasi', zy: 'ㄋㄚ ㄒㄧ', zh: '飯' },
];

// 倒裝：中文「形容詞＋名詞」→ 馬來文「名詞＋形容詞」
export const inversion: { zh: string; ms: W[]; note: string }[] = [
  { zh: '紅色的車', ms: [['kereta', 'ㄍㄜ ㄌㄜ ㄉㄚ'], ['merah', 'ㄇㄜ ㄌㄚ']], note: 'kereta（車）在前，merah（紅）在後' },
  { zh: '冰茶', ms: [['teh', 'ㄉㄝ'], ['ais', 'ㄚ ㄧㄙ']], note: 'teh（茶）在前，ais（冰）在後' },
  { zh: '大房子', ms: [['rumah', 'ㄌㄨ ㄇㄚ'], ['besar', 'ㄅㄜ ㄙㄚ']], note: 'rumah（房子）在前，besar（大）在後' },
  { zh: '好吃的食物', ms: [['makanan', 'ㄇㄚ ㄎㄚ ㄋㄢ'], ['sedap', 'ㄙㄜ ㄉㄚㄅ˙']], note: '名詞在前，形容詞在後' },
];

// 互動題：點擊積木排出正確句子
export const exercises: { zh: string; answer: string[]; extra: string[] }[] = [
  { zh: '我吃飯。', answer: ['Saya', 'makan', 'nasi'], extra: ['minum'] },
  { zh: '明天我喝茶。', answer: ['Esok', 'saya', 'minum', 'teh'], extra: ['makan'] },
  { zh: '紅色的車', answer: ['kereta', 'merah'], extra: ['besar'] },
  { zh: '冰茶', answer: ['teh', 'ais'], extra: ['kopi'] },
  { zh: '他看大房子。', answer: ['Dia', 'lihat', 'rumah', 'besar'], extra: ['kereta'] },
];
