const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
    
  const dot = ['.']
  const dash = ['-']
  const space = ['']
  const newStr = str.match(/.{1,10}/g)
  let result = ''
  for (const item of str.match(/.{1,10}/g)) {

    let res = []
    for (const i of item.match(/.{1,2}/g)) {
      if (i === '00') {
        continue
      } else if (i === '10') {
        res.push(dot)
      } else if (i === '**') {
       res.push(space)
      } else {
       res.push(dash)
      }
     } 
     let morse = Object.entries(MORSE_TABLE)
     for (const [key, value] of morse) { 
      if (res.join().replace(/,/g, '') == '') {
        result += ' '
      } else if (res.join().replace(/,/g, '') === key){
        result += value
      }
     }
  }
 return result.replace(/\s+/g,' ' )
}

module.exports = {
    decode
}
// for(key, value in MORSE_TABLE) { console.log(key, value); 
//!! Вы делите входящую строку на части по 10 символов каждая
/* И начинаете их перебирать
Если часть равна '**' - то значит это пробел, и его декодировать не нужно, а просто добавить к ответу
Для всех остальных частей вы должны удалить лишние нули в начале
И начать декодировать по 2 символа
И если эти 2 символа равны 10, то это '.', иначе это '-'
В итоге декодированный отрезок будет набором . и -
И уже потом обращаетесь к MORSE_TABLE с получившимся значением, и вам возвращают символ  */