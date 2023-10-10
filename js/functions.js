function shortTwenty(line){
  line = 'Меньше 20 символов';
  if(line.length < 20){
    return true;
  }
  return false;
}
function exactlyEighteen(line){
  line = 'Здесь 18 символов!';
  if(line.length === 18){
    return true;
  }
  return false;
}
function longerTen(line){
  line = 'Не 10';
  if(line.length > 10){
    return true;
  }
  return false;
}
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
