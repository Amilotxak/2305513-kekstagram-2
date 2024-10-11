// // Строка короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// // Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// // Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false


const checkString = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

checkString();

// // Строка является палиндромом
// имяФункции('топот'); // true
// // Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// // Это не палиндром
// имяФункции('Кекс');  // false

const isPaledrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();

  let invertedLine = '';

  for (let i = string.length - 1; i >= 0; i--) {
    invertedLine += string[i];
  }

  return string === invertedLine;
};

isPaledrome();