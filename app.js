const numbers = [1, 2, 3, 4];
const words = ["colt", "matt", "tim", "test"];

function doubleValues(arr) {
  let doubledValue = [];
  arr.forEach(function (number) {
    doubledValue.push(number * 2);
  });
  return doubledValue;
}

function onlyEvenValues(arr) {
  let evenValues = [];
  arr.forEach(function (number) {
    if (number % 2 === 0) evenValues.push(number);
  });
  return evenValues;
}

function showFirstAndLast(arr) {
  let FirstandLast = [];
  arr.forEach(function (word) {
    let wordLastCharIndex = word.length - 1;
    FirstandLast.push(word[0] + word[wordLastCharIndex]);
  });
  return FirstandLast;
}

const namesObject = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

function addKeyAndValue(arr, key, value) {
  let keyAndValueAddedArr = [];
  arr.forEach(function (element) {
    const newObj = { ...element };
    newObj[key] = value;
    keyAndValueAddedArr.push(newObj);
  });
  return keyAndValueAddedArr;
}

let vowels = "aeiouAEIOU";
function vowelCount(str) {
  let vowelBoj = {};

  for (let char of str) {
    if (vowels.includes(char)) {
      if (vowelBoj[char]) {
        vowelBoj[char]++;
      } else {
        vowelBoj[char] = 1;
      }
    }
  }
  return vowelBoj;
}

function doubledValueWithMap(arr) {
  let doubled = [];
  arr.map(function (num) {
    doubled.push(num * 2);
  });
  return doubled;
}

function valTimesIndex(arr) {
  let doubled = [];
  arr.map(function (num, indx) {
    doubled.push(num * indx);
  });
  return doubled;
}
let namesArr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
function extractKey(arr, key) {
  let keys = [];
  arr.map(function (obj) {
    if (obj[key]) {
      keys.push(obj[key]);
    }
  });
  return keys;
}
let names = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele" },
];
function extractFullName(arr) {
  let fullName = [];
  arr.map(function (obj) {
    fullName.push(obj.first + " " + obj.last);
  });
  return fullName;
}

function filterByValue(arr, key) {
  let filtered = arr.filter(function (obj) {
    return obj.hasOwnProperty(key);
  });
  return filtered;
}

function find(arr, val) {
  let filtered = arr.filter(function (element) {
    return element === val;
  });

  return filtered.length > 0 ? filtered[0] : undefined;
}

let obj1 = { first: "elie", last: "lmao", isCatOwner: true };
let firstLastOwner = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "att", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

function findInObject(arr, key) {
  let filtered = arr.filter(function (obj) {
    return Object.keys(obj).includes(key);
  });
  return filtered.length > 0 ? filtered[0] : undefined;
}

function removeVowels(str) {
  let lowercased = str.toLowerCase();
  let filtered = lowercased.split("").filter(function (letter) {
    return !vowels.includes(letter);
  });
  return filtered.length > 0 ? filtered : undefined;
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function (num) {
      return num % 2 !== 0;
    })
    .map(function (oddNum) {
      return oddNum * 2;
    });
}
