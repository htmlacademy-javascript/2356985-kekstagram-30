// eslint-disable-next-line no-unused-vars
function shortTwenty(line, count) {
  if (line.length < count) {
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
const x = shortTwenty('Меньше 20 символов', 20);
// eslint-disable-next-line no-unused-vars
function exactlyEighteen(line, count){
  if(line.length === 18){
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
const y = exactlyEighteen('Здесь 18 символов!',18);
// eslint-disable-next-line no-unused-vars
function longerTen(line, count){
  if(line.length > 10){
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
const z = longerTen('Не 10', 10);
// eslint-disable-next-line no-unused-vars
function stomp(palindrome){
  const one = palindrome.toLowerCase();
  let j = '';
  for(let i = palindrome.length - 1; i >= 0; i--){
    j += one[i];
  }
  if (j === one){
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
const w = stomp('топот');
// eslint-disable-next-line no-unused-vars
function argument(palindrome){
  const one = palindrome.toLowerCase();
  let j = '';
  for(let i = palindrome.length - 1; i >= 0; i--){
    j += one[i];
  }
  if (j === one){
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
const v = argument('ДовОд');
// eslint-disable-next-line no-unused-vars
function cat(palindrome){

  const one = palindrome.toLowerCase();
  let j = '';
  for(let i = palindrome.length - 1; i >= 0; i--){
    j += one[i];
  }
  if (j === one){
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
const u = cat('Кекс');
