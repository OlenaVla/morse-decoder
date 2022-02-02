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

function decode(expr) {
   let ind = 0; 
   let resStr = '';
   while (ind < expr.length)
   {
     let str = expr.slice(ind, ind + 10);
     let i = str.indexOf('1');
     ind += 10;
     if (i === -1)
     {
        resStr +=' ';
        continue;
     }
     let morse_code = '';
     while (i < str.length)
     {
        morse_code += str.slice(i, i + 2) === '10' ? '.' : '-';
        i += 2;
     }
     resStr += MORSE_TABLE[morse_code];
    }
   return resStr;
}

module.exports = {
    decode
}