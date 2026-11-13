import type { W } from './alphabet';

export interface Line { who: 'A' | 'B'; ms: W[]; zh: string }
export interface Scene { id: string; title: string; roles: [string, string]; lines: Line[] }

export const scenes: Scene[] = [
  {
    id: 'mamak', title: '情境 1：Mamak 檔點餐', roles: ['服務生', '你'],
    lines: [
      { who: 'A', ms: [['Nak', 'ㄋㄚㄎ'], ['makan', 'ㄇㄚ ㄎㄢ'], ['apa', 'ㄚ ㄅㄚ'], ['?', '']], zh: '要吃什麼？' },
      { who: 'B', ms: [['Roti', 'ㄌㄛ ㄉㄧ'], ['canai', 'ㄐㄚ ㄋㄞ'], ['satu', 'ㄙㄚ ㄉㄨ'], ['.', '']], zh: '一份印度煎餅。' },
      { who: 'A', ms: [['Minum', 'ㄇㄧ ㄋㄨㄇ'], ['apa', 'ㄚ ㄅㄚ'], ['?', '']], zh: '喝什麼？' },
      { who: 'B', ms: [['Teh', 'ㄉㄝ'], ['tarik', 'ㄉㄚ ㄌㄧㄎ'], ['kurang', 'ㄍㄨ ㄌㄤ'], ['manis', 'ㄇㄚ ㄋㄧㄙ'], ['.', '']], zh: '拉茶，少糖。' },
      { who: 'B', ms: [['Nasi', 'ㄋㄚ ㄒㄧ'], ['lemak', 'ㄌㄜ ㄇㄚㄎ'], ['juga', 'ㄐㄨ ㄍㄚ'], ['.', '']], zh: '也要一份椰漿飯。' },
    ],
  },
  {
    id: 'transport', title: '情境 2：搭車問路', roles: ['司機', '你'],
    lines: [
      { who: 'A', ms: [['Pergi', 'ㄅㄜ ㄍㄧ'], ['ke', 'ㄍㄜ'], ['mana', 'ㄇㄚ ㄋㄚ'], ['?', '']], zh: '要去哪裡？' },
      { who: 'B', ms: [['Tolong', 'ㄉㄛ ㄌㄛㄥ'], ['hantar', 'ㄏㄢ ㄉㄚ'], ['saya', 'ㄙㄚ ㄧㄚ'], ['ke', 'ㄍㄜ'], ['hospital', 'ㄏㄛ ㄙ ㄅㄧ ㄉㄜ'], ['.', '']], zh: '請載我去醫院。' },
      { who: 'A', ms: [['Baik', 'ㄅㄚ ㄧ˙'], ['.', '']], zh: '好的。' },
      { who: 'B', ms: [['Berhenti', 'ㄅㄜ ㄏㄜㄣ ㄉㄧ'], ['di', 'ㄉㄧ'], ['sini', 'ㄒㄧ ㄋㄧ'], ['.', '']], zh: '在這裡停。' },
    ],
  },
  {
    id: 'market', title: '情境 3：夜市買水果算帳', roles: ['小販', '你'],
    lines: [
      { who: 'B', ms: [['Berapa', 'ㄅㄜ ㄌㄚ ㄅㄚ'], ['harga', 'ㄏㄚ ㄍㄚ'], ['ini', 'ㄧ ㄋㄧ'], ['?', '']], zh: '這個多少錢？' },
      { who: 'A', ms: [['Sepuluh', 'ㄙㄜ ㄅㄨ ㄌㄛ'], ['ringgit', 'ㄌㄧㄥ ㄍㄧ˙'], ['.', '']], zh: '十令吉。' },
      { who: 'B', ms: [['Boleh', 'ㄅㄛ ㄌㄝ'], ['murah', 'ㄇㄨ ㄌㄚ'], ['sikit', 'ㄒㄧ ㄎㄧ˙'], ['?', '']], zh: '可以便宜一點嗎？' },
      { who: 'A', ms: [['Boleh', 'ㄅㄛ ㄌㄝ'], ['.', ''], ['Lapan', 'ㄌㄚ ㄅㄢ'], ['ringgit', 'ㄌㄧㄥ ㄍㄧ˙'], ['.', '']], zh: '可以，八令吉。' },
      { who: 'B', ms: [['Terima', 'ㄉㄜ ㄌㄧ ㄇㄚ'], ['kasih', 'ㄍㄚ ㄒㄧ'], ['.', '']], zh: '謝謝。' },
    ],
  },
];
