
// A) Массивы
// 1) last(arr)
// Верните последний элемент массива или undefined, если массив пуст.

function last(arr){
    if (arr.length === 0) return undefined;
    
    return arr[arr.length - 1];
}

//   Примеры:
console.log(last([1, 2, 3])); // 3
console.log(last([])); // undefined

// 2) appendPure(arr, value)
// Верните новый массив с добавленным value в конец. Исходный arr не менять (используйте concat или spread).

function appendPure(arr, value){
    return [...arr, value];
}

// Примеры:
const a = [1, 2];
const b = appendPure(a, 3);
console.log(a); // [1,2]
console.log(b); // [1,2,3]

// 3) removeFirstInPlace(arr)
// Удалите первый элемент массива (mutating), верните удалённый элемент.

function removeFirstInPlace(arr){
    return arr.shift();
}

//   Примеры:
const x = [10, 20, 30];
console.log(removeFirstInPlace(x)); // 10
console.log(x); // [20,30]

// 4) firstN(arr, n)
// Верните новый массив из первых n элементов (используйте slice).

function firstN(arr, n){
    return arr.slice(0, n);
}

// Примеры:
console.log(firstN([1, 2, 3, 4], 2)); // [1,2]
console.log(firstN([1], 5)); // [1]

// 5) removeFromMiddleInPlace(arr, start, count)
// Удалите count элементов начиная с индекса start (mutating, используйте splice). Верните массив удалённых.

function removeFromMiddleInPlace(arr, start, count){
    return arr.splice(start, count);
}

//   Примеры:
const y = ['a', 'b', 'c', 'd', 'e'];
console.log(removeFromMiddleInPlace(y, 1, 2)); // ['b','c']
console.log(y); // ['a','d','e']

// 6) unique(arr)
// Верните массив уникальных значений, сохранив порядок первых вхождений (Set или filter+indexOf).

function unique (arr){
    const newSet = new Set(arr);
  
    return [...newSet];
}

// Примеры:
console.log(unique([1, 2, 2, 3, 1, 4])); // [1,2,3,4]

// 7) evenNumbers(arr)
// Верните новый массив только из чётных чисел (filter).

function evenNumbers(arr){
    return arr.filter((el) => el % 2 === 0);
}

//   Примеры:
console.log(evenNumbers([1, 2, 3, 4, 5])); // [2,4]

// 8) squares(arr)
// Верните новый массив — квадраты чисел (map).

function squares(arr){
    return arr.map((el) => el ** 2)
}

//   Примеры:
console.log(squares([2, 3, 4])); // [4,9,16]

// 9) sum(arr)
// Верните сумму чисел (reduce).

function sum(arr){
    const initialValue = 0;
  
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}

//   Примеры:
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([])); // 0

// 10) findFirstLongWord(words, minLen)
// Найдите первое слово длины >= minLen (find). Если нет — верните null.

function findFirstLongWord(words, minLen){
    const firstLongWord = words.find((element, index, array) => element.length >= minLen);

    if (firstLongWord === undefined) return null;
  
    return firstLongWord;
}

//   Примеры:
console.log(findFirstLongWord(['hi', 'book', 'car'], 4)); // 'book'
console.log(findFirstLongWord(['a', 'bb'], 3)); // null

// 11) containsNegative(arr)
// Верните true, если в массиве есть отрицательное число (some).

function containsNegative(arr){
    return arr.some((element) => element < 0)
}

//   Примеры:
console.log(containsNegative([3, 0, -1, 5])); // true
console.log(containsNegative([1, 2, 3])); // false

// 12) includesAll(arr, values)
// Верните true, если arr содержит все элементы массива values (every + includes).

function includesAll(arr, values){
    return values.every((value) => arr.includes(value));
}

//   Примеры:
console.log(includesAll([1, 2, 3, 4], [2, 4])); // true
console.log(includesAll([1, 2, 3], [2, 5])); // false

// B) Строки
// 13) normalizeName(name)
// Обрежьте пробелы по краям и сделайте Имя с заглавной буквы (остальное — нижний регистр).

function normalizeName(name){
    let nameLowerCase = name.trim().toLowerCase();  

    return nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
}

// Примеры:
console.log(normalizeName('  аЛексЕЙ  ')); // 'Алексей'

// 14) countChar(str, ch)
// Посчитайте, сколько раз символ ch встречается в str (без учёта регистра).

function countChar(str, ch){
    let count = 0;
    const strLowerCase = str.toLowerCase();
    const chLowerCase = ch.toLowerCase();

    for(const char of strLowerCase){    
        if(char === chLowerCase) count++;
    }
  
    return count;
}

// Примеры:
console.log(countChar('Abracadabra', 'a')); // 5

// 15) getExtension(filename)
// Верните расширение файла без точки. Если точки нет — пустую строку (используйте lastIndexOf + slice).

function getExtension(filename){
    if(filename.lastIndexOf('.') === -1) return '';

    const extensionPosition = filename.lastIndexOf('.') + 1;

    return filename.slice(extensionPosition);
}

// Примеры:
console.log(getExtension('photo.png')); // 'png'
console.log(getExtension('archive.tar.gz')); // 'gz'
console.log(getExtension('README')); // ''

// 16) isPalindrome(str)
// Проверьте, палиндром ли строка, игнорируя регистр и не-буквенно-цифровые символы (replace или match, затем reverse).

function isPalindrome(str){
    const strLowerCase = str.toLowerCase();
    const regExp = /[^0-9а-яёa-z]/g;

    const newStr = strLowerCase.replace(regExp, '');

    const newStrReversed = newStr.split('').reverse().join('');

    return newStr === newStrReversed;
}

// Примеры:
console.log(isPalindrome('А роза упала на лапу Азора')); // true
console.log(isPalindrome('Hello')); // false

// 17) maskPhone(phone)
// Замаскируйте номер, оставив видимыми только последние 4 символа, остальное замените на '*'. Пробелы/дефисы можно убрать.

function maskPhone(phone){
    const regExpClean = /\D/g;

    const onlyDigits = phone.replace(regExpClean, '');

    const last4Digits = onlyDigits.slice(-4);

    const maskedPhone = last4Digits.padStart(onlyDigits.length, '*')
    
    return maskedPhone;
}

//   Примеры:
console.log(maskPhone('8-999-123-45-67')); // '*********4567' (вариант: убрать нецифры и маскировать)
//Совет: используйте замену нецифр и padStart.

// 18) truncate(str, maxLen, suffix = '...')
// Если длина строки > maxLen, обрежьте до maxLen - suffix.length и добавьте suffix, иначе верните исходную (slice).

function truncate(str, maxLen, suffix = '...'){
    if(str.length <= maxLen) return str;

    return str.slice(0, maxLen - suffix.length) + suffix;
}

//   Примеры:
console.log(truncate('Привет, мир!', 8)); // 'Прив...'
console.log(truncate('Коротко', 10)); // 'Коротко'

// 19) toSlug(str)
// Преобразуйте строку в slug: нижний регистр, слова через '-', уберите лишние символы.

function toSlug(str){
    const strTrimedLowerCase = str.trim().toLowerCase();

    return strTrimedLowerCase.replace(/[^a-z0-9а-яё]+/g, '-').replace(/^-+|-+$/, '');
}

//   Примеры:
console.log(toSlug('  Hello,   World!  ')); // 'hello-world'

// 20) extractNumbers(str)
// Верните массив чисел, найденных в строке (например, 'цена 12.5 и 7' -> [12.5, 7]).

function extractNumbers(str){
    const regExp = /\d+(\.\d+)?/g;
    
    const matchedStr = str.match(regExp);

    if(!matchedStr) return [];

    return matchedStr.map(parseFloat);
}

// Примеры:
console.log(extractNumbers('x=10; y=20.5; z=oops')); // [10, 20.5]

// 21) sortWords(str)
// Получите слова из строки, отсортируйте их по алфавиту (без учёта регистра), верните обратно строкой через пробел.

function sortWords(str){
    const words = str.match(/[а-яёa-z]+/gi);
  
    const sortedArr = words.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    return sortedArr.join(' '); 
}

//   Примеры:
console.log(sortWords('Бета альфа Гамма')); // 'альфа Бета Гамма' (или все в нижнем регистре — оговорите правило)

// 22) isValidUrl(str)
// Верните true, если строка начинается с 'http://' или 'https://' и не содержит пробелов (startsWith, includes).

function isValidUrl(str){
    const validBeginUrl = ['http://', 'https://'];

    const trimmedStr = str.trim(); // пробелы вначале и конце не делают url невалидным 

    if(trimmedStr.includes(' ')) return false;

    if(trimmedStr.startsWith(validBeginUrl[0]) || trimmedStr.startsWith(validBeginUrl[1])) return true;

    return false; 
}

//   Примеры:
console.log(isValidUrl('https://example.com')); // true
console.log(isValidUrl('http://example com')); // false
console.log(isValidUrl('ftp://example.com')); // false

// C) Другие типы и структуры данных
// 23) toNumberSafe(value)
// Преобразуйте value в число. Если результат NaN или Infinity/-Infinity — верните null.

function toNumberSafe(value){
    const num = Number(value);

    if(isNaN(num)|| num === Infinity || num === -Infinity) return null;

    return num;
}

//   Примеры:
console.log(toNumberSafe('42')); // 42
console.log(toNumberSafe('')); // 0
console.log(toNumberSafe('abc')); // null
console.log(toNumberSafe(1 / 0)); // null

// 24) roundTo(value, decimals)
// Округлите число до указанного количества знаков после запятой, верните число (а не строку).

function roundTo(value, decimals){
    return Number(value.toFixed(decimals));
}

// Примеры:
console.log(roundTo(1.2345, 2)); // 1.23
console.log(roundTo(1.2355, 3)); // 1.236

// 25) randomInt(min, max)
// Верните случайное целое число в диапазоне [min, max].

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//   Примеры:
console.log(randomInt(1, 3)); // 1 или 2 или 3

// 26) sumPrices(items)
// Сложите все цены из массива items, где элементы могут быть строками вида '10.5$', '20$', числом или мусором. Игнорируйте то, что не парсится (parseFloat).

function sumPrices(items){
    let sum = 0;

    for(const item of items){
        let num = parseFloat(item);

        if(!isNaN(num)) sum += num;
    }

    return sum;
}

//   Примеры:
console.log(sumPrices(['10$', '7.5$', 'x', 2, null])); // 19.5

// 27) daysBetween(dateA, dateB)
// Верните количество полных дней между датами (строки формата 'YYYY-MM-DD'). Без учёта часовых поясов — оперируйте UTC.

function daysBetween(dateA, dateB){
    const arrA = dateA.split('-');
    const arrB = dateB.split('-');

    const msBetween = new Date(arrA[0], arrA[1], arrA[2]) - new Date(arrB[0], arrB[1], arrB[2]);

    return Math.abs(msBetween) / (1000 * 60 * 60 * 24);
}

//   Примеры:
console.log(daysBetween('2025-01-01', '2025-01-05')); // 4

// 28) uniqueCount(arr)
// Верните количество уникальных значений в массиве (используйте Set).

function uniqueCount(arr){
    return new Set(arr).size;
}

// Примеры:
console.log(uniqueCount(['a', 'b', 'a', 'c'])); // 3

// 29) wordFrequency(str)
// Верните объект с частотами слов (без учёта регистра). Слова — последовательности букв/цифр. Игнорируйте пустые.

function wordFrequency(str){
    const regExp = /[a-z0-9а-яё]+/gi;

    const words = str.toLowerCase().match(regExp);

    const wordsFreq = {};

    for(const word of words){
        if(wordsFreq[word]) wordsFreq[word] += 1;
        
        else wordsFreq[word] = 1;
    }

    return wordsFreq;
}

//   Примеры:
console.log(wordFrequency('Hi hi HI! test, Test')); // { hi: 3, test: 2 }

// 30) safeJSONParse(jsonStr, fallback = null)
// Без выброса ошибок: верните распарсенный объект или fallback, если парсинг не удался.

function safeJSONParse(jsonStr, fallback = null){
    try{
        return JSON.parse(jsonStr);
    } catch {
        return fallback;
    }
}

//   Примеры:
console.log(safeJSONParse('{"a":1}')); // { a: 1 }
console.log(safeJSONParse('{oops}', [])); // []
