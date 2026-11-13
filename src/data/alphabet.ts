export type W = [string, string]; // [馬來文, 注音]
export interface Sound { k: string; zy: string; note?: string; word: W; zh: string; ex: W[]; exZh: string }

export const vowels: Sound[] = [
  { k: 'a', zy: 'ㄚ', word: ['api', 'ㄚ ㄅㄧ'], zh: '火', ex: [['Api', 'ㄚ ㄅㄧ'], ['panas', 'ㄅㄚ ㄋㄚㄙ']], exZh: '火很燙。' },
  { k: 'i', zy: 'ㄧ', word: ['itik', 'ㄧ ㄉㄧㄎ'], zh: '鴨子', ex: [['Itik', 'ㄧ ㄉㄧㄎ'], ['ini', 'ㄧ ㄋㄧ']], exZh: '這是鴨子。' },
  { k: 'u', zy: 'ㄨ', word: ['susu', 'ㄙㄨ ㄙㄨ'], zh: '牛奶', ex: [['Saya', 'ㄙㄚ ㄧㄚ'], ['suka', 'ㄙㄨ ㄎㄚ'], ['susu', 'ㄙㄨ ㄙㄨ']], exZh: '我喜歡牛奶。' },
  { k: 'o', zy: 'ㄛ', word: ['roti', 'ㄌㄛ ㄉㄧ'], zh: '麵包', ex: [['Ini', 'ㄧ ㄋㄧ'], ['roti', 'ㄌㄛ ㄉㄧ']], exZh: '這是麵包。' },
  { k: 'e（弱音 ə）', zy: 'ㄜ', note: '最常見的 e 是輕短的「ㄜ」(schwa)，像「的」的輕聲，例：besar、sedap。', word: ['besar', 'ㄅㄜ ㄙㄚ'], zh: '大', ex: [['Rumah', 'ㄌㄨ ㄇㄚ'], ['besar', 'ㄅㄜ ㄙㄚ']], exZh: '房子很大。' },
  { k: 'é（強音 e）', zy: 'ㄝ', note: '另一種 e 發「ㄝ」（像「爹」），例：ekor、enak、teh 的 e。字典常標 é 區分。', word: ['enak', 'ㄝ ㄋㄚㄎ'], zh: '好吃', ex: [['Makanan', 'ㄇㄚ ㄎㄚ ㄋㄢ'], ['enak', 'ㄝ ㄋㄚㄎ']], exZh: '食物好吃。' },
];

export const consonants: Sound[] = [
  { k: 'c', zy: 'ㄐ／ㄑ', note: '介於ㄐ與ㄑ之間，不送氣偏ㄐ，像「雞」的起音。', word: ['cawan', 'ㄐㄚ ㄨㄢ'], zh: '杯子', ex: [['Satu', 'ㄙㄚ ㄉㄨ'], ['cawan', 'ㄐㄚ ㄨㄢ']], exZh: '一個杯子。' },
  { k: 'j', zy: 'ㄐ', word: ['jalan', 'ㄐㄚ ㄌㄢ'], zh: '路', ex: [['Jalan', 'ㄐㄚ ㄌㄢ'], ['jauh', 'ㄐㄠ']], exZh: '路很遠。' },
  { k: 'ny', zy: 'ㄋㄧ', note: '舌面貼上顎的鼻音，快速滑過，近似「你」的開頭。', word: ['nyanyi', 'ㄋㄧㄚ ㄋㄧ'], zh: '唱歌', ex: [['Dia', 'ㄉㄧ ㄚ'], ['nyanyi', 'ㄋㄧㄚ ㄋㄧ']], exZh: '他唱歌。' },
  { k: 'ng', zy: 'ㄥ', note: '像「英」的鼻音，可出現在字首或字中，例：bunga、ngam。', word: ['bunga', 'ㄅㄨ ㄥㄚ'], zh: '花', ex: [['Bunga', 'ㄅㄨ ㄥㄚ'], ['cantik', 'ㄐㄢ ㄉㄧㄎ']], exZh: '花很美。' },
  { k: 'sy', zy: 'ㄒ', note: '像「西」的起音。', word: ['syukur', 'ㄒㄨ ㄎㄨ˙'], zh: '感恩', ex: [['Syukur', 'ㄒㄨ ㄎㄨ˙'], ['alhamdulillah', 'ㄚㄌ ㄏㄢ ㄉㄨ ㄌㄧ ㄌㄚ']], exZh: '感恩！' },
  { k: 'r', zy: 'ㄌ／輕顫', note: '舌尖輕彈，初學者用「ㄌ」即可溝通。', word: ['rumah', 'ㄌㄨ ㄇㄚ'], zh: '家／房子', ex: [['Rumah', 'ㄌㄨ ㄇㄚ'], ['saya', 'ㄙㄚ ㄧㄚ']], exZh: '我的家。' },
];

export const finals: Sound[] = [
  { k: '-k', zy: 'ㄎ˙（促音）', note: '字尾 k 不送氣，喉嚨收緊「煞車」，不要把 k 爆出來。', word: ['bapak', 'ㄅㄚ ㄅㄚ˙'], zh: '父親', ex: [['Bapak', 'ㄅㄚ ㄅㄚ˙'], ['baik', 'ㄅㄚ ㄧ˙']], exZh: '爸爸很好。' },
  { k: '-t', zy: 'ㄉ˙（促音）', note: '舌尖頂住上顎後直接收住，短促不送氣。', word: ['sikat', 'ㄙㄧ ㄎㄚ˙'], zh: '刷子', ex: [['Sikat', 'ㄙㄧ ㄎㄚ˙'], ['cepat', 'ㄐㄜ ㄅㄚ˙']], exZh: '快速。' },
  { k: '-p', zy: 'ㄅ˙（促音）', note: '雙唇閉住不爆開，聲音在唇間收住。', word: ['tutup', 'ㄉㄨ ㄉㄨㄅ˙'], zh: '關', ex: [['Tutup', 'ㄉㄨ ㄉㄨㄅ˙'], ['atap', 'ㄚ ㄉㄚㄅ˙']], exZh: '關上。' },
  { k: '-m', zy: 'ㄇ（閉唇）', note: '字尾雙唇閉合收音，要把嘴完整閉上。', word: ['malam', 'ㄇㄚ ㄌㄚㄇ'], zh: '晚上', ex: [['Selamat', 'ㄙㄜ ㄌㄚ ㄇㄚ˙'], ['malam', 'ㄇㄚ ㄌㄚㄇ']], exZh: '晚安。' },
];
