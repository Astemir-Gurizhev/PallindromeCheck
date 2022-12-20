const palindromeChecker = (str) => {
   str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
   const halfOfLength = Math.floor(str.length / 2);
   return str.substr(0, Math.floor(halfOfLength)) === str.substr(Math.floor(str.length % 2 ? halfOfLength + 1 : halfOfLength)).split('').reverse().join('')  // Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.
}
 console.log(palindromeChecker('Искать такси'))
