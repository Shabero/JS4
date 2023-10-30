// строка проверить строку на наличие . и после нее на com или ru
// let inputData = ['ka4ka.ru']
// if (inputData.includes('.') && (inputData.includes('.ru') || inputData.includes('.com'))){
//     console.log(true)
// } else {
//     console.log(false)
// }
// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4
// let inputData = 'Shabdan'
// if (inputData.length % 2 === 0 && inputData.length >= 4 && inputData.length <= 8) {
//     console.log('Соответсвует условиям')
// } else {
//     console.log("Не соответствует условиям")
// }
// строка поменять букву каждого четного индекса на E можно решить через map
// let inputData = 'Shabdan'
// let characters = inputData.split('');
// let resultString = characters.map((char,indx) => {
//     if (indx % 2 === 0) {
//         return 'E';
//     } else {
//         return char;
//     }
// });
// let result = resultString.join('');
// console.log(resultString)

// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале
// let inputData = 'qwerty123', inputData2 = 'qwerty12345';
// if (inputData !== inputData2) {
//     console.log('The passwords do not match!')
//     if (!/^\s/.test(inputData) && !/^\s/.test(inputData2)) {
//         console.log('Passwords match and do not contain spaces at the beginning only')
//     } else {
//         console.log('Passwords match and contain spaces at the beginning only')
//     }
// } else {
//     console.log('The passwords match!')
// }

// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]
// let str = ['lorem', 'ipsum', 'dolor', 'sit']
// let lengths = str.map((str) => str.length);
// console.log(lengths);

// ['lorem', 'ipsum', 'dolor'] => [1,2,3]


// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']
// let str = ['lorem', 'ipsum', 'dolor']
// str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
// str[2] = str[2].charAt(0).toUpperCase() + str[2].slice(1);
// console.log(str);

// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']
// let str = ['lorem', 'ipsum', 'dolor']
// let upperCase = str.map((strings) => strings.toUpperCase());
// console.log(upperCase);

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = str.join('-');
// console.log(result);

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'
// let str = ['lorem', 'ipsum', 'dolor', 'amet']
// let result = str.join('/')
// console.log(result);

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = str.join(' ')
// console.log(result);

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']


// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = str.filter((strings) => strings.length % 2 !== 0);
// console.log(result);


// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = str.concat('consectetur', 'adipiscing', 'elit');
// console.log(result);

// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
// let numbers = [123,33,444,'22',55,66,77,88,99]
// let result = numbers.filter((item) => typeof item   === 'number')
// console.log(result);

// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]


// ['null', undefined, 0, false, true, ''] => [0, false, true]


// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// let inputData = [1123, 'qwe']
// let result = inputData.concat(inputData)
// console.log(result);

// [null, undefined] => [null, undefined, null, undefined]
// let inputData = [null, undefined]
// let result = inputData.concat(inputData)
// console.log(result);

// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
