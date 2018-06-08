//Minami Kato
//310-902-2518
//minamikato@gmail.com

//Question1
function sortByString(s,t){
  const sortByIdx = (a, b) => str2.indexOf(a) - str2.indexOf(b)
  return str1.split('').sort(sortByIdx).join('');
}

//Question2
function decodeString(s) {
  let str = "";
  let num = 0;
  let ss = "";
  let opened = 0;
  for (let i = 0; i < s.length; i++) {
      let chr = s.substr(i, 1);
      if (opened >= 1) ss += chr;
      if (chr == "[") opened++;
      else if (chr == "]") {
          opened--;
          if (opened == 0) {
              for (let j = 0; j < num; j++) {
                  str += decodeString(ss);
              }
              num = 0;
              ss = "";
          }
      } else {
          if (opened == 0) {
              if (chr >= 0 || chr <= 9) num = `${num}${chr}`;
              else str += chr;
          }
      }
  }
  return str;
};

//Quesiton3
function changePossibilities(amount, denominations) {
  let answers = [];

  for (let n = 1; n <= amount; n++) {
      answers[n] = 0;
  }
  answers[0] = 1;

  denominations.forEach(function(denomination){
      for (let i = denomination; i <= amount; i++) {
          let rem = i - denomination;
          answers[i] += answers[rem];
      }
  });

  return answers[amount];
}
