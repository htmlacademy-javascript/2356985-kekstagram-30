// eslint-disable-next-line no-unused-vars
function shortTwenty(line){
  line = 'Меньше 20 символов';
  if(line.length < 20){
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
function exactlyEighteen(line){
  line = 'Здесь 18 символов!';
  if(line.length === 18){
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
function longerTen(line){
  line = 'Не 10';
  if(line.length > 10){
    return true;
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
function stomp(palindrome){
  palindrome = 'топот';
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
function argument(palindrome){
  palindrome = 'ДовОд';
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
function cat(palindrome){
  palindrome = 'Кекс';
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
