// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(x, y) {
  if (x > y)
    return x;
  else
    return y;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(wrd) {

  if (wrd.length == 0)
    return null;
  else if (wrd.length == 1)
    return wrd[0];
  else if (wrd.length == 2) {

    if (wrd[0].length >= wrd[1].length)
      return wrd[0];
    else {
      wrd[0] = wrd[1];
      return wrd[0];

    }
  }
  else {
    for (let i = 1; i < wrd.length; i++) {
      if (wrd[0].length < wrd[i].length)
      wrd[0] = wrd[i]

    }
    return wrd[0];
  }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numb) {
  if (numb.length == 0)
    return 0;
  else if (numb.length == 1)
    return numb[0];
  else if (numb.length > 1) {
    let sum = 0;
    for (let i = 0; i < numb.length; i++)
      sum += numb[i]

    return sum

  }
  else {
    let ct = 0;
    for (let i = 0; i < numb.length; i++) {
      if (numb[0] != 0) {
        ct = 1
        break

      }
    }
    if (ct == 0)
      return 0;

  }

}

function add(numb1) {
  if (numb1.length == 0)
    return 0;
  else if (numb1.length == 1) {

    return numb1[0];
  }

  else {
    let ct1 = 0;
    for (let i = 0; i < numb1.length; i++) {
      if (numb1[0] != 0) {
        ct1 = 1
        break

      }
    }
    if (ct1 == 0)
      return 0;
    
    let sum1 = 0;
    for (let i = 0; i < numb1.length; i++) {
      if(typeof numb1[i]  ==  typeof "2" )
      {
      sum1 += numb1[i].length
      continue
      }
      else if (typeof numb1[i]  === "number"  )
      sum1 += numb1[i]
      else if(numb1[i]  === true)
      sum1+=1
      else if(numb1[i]  === false)
      sum1+=0
      else{
      throw new Error("Unsupported data type sir or ma'am")
      }
    
    }
    return  Number.parseInt( sum1);
  }

}
// Progression #4: Calculate the average :------
//
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbavg) {
  if (numbavg.length == 0)
    return null;
  else if (numbavg.length == 1)
    return numbavg[0];
  else {
    let sum2 = 0;
    for (let i = 0; i < numbavg.length; i++)
      sum2 += numbavg[i]

    return sum2 / numbavg.length;
  }

}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];


function averageWordLength(wordar) {
  if (wordar.length == 0)
    return null;
  else if (wordar.length == 1)
    return wordar[0].length;
  else {
    let sum3 = 0;
    for (let i = 0; i < wordar.length; i++)
      sum3 += wordar[i].length

    return sum3 / wordar.length;
  }

}
function avg(wordar1) {
  if (wordar1.length == 0)
    return null;
  else if (wordar1.length == 1)
    return wordar1[0].length;
  else {
    let sum4 = 0;
    for (let i = 0; i < wordar1.length; i++)
    {
      if(typeof wordar1[i]  ==  typeof "2" )
      {
      sum4 += wordar1[i].length
      }
      else
      sum4+=wordar1[i]
    }
    return Number.parseFloat((sum4/wordar1.length).toFixed(2));
  }

}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordun) {
  if (wordun.length == 0)
    return null;
  else if ((wordun.length == 1))
    return wordun;
  else {
    for(let i=0;i<wordun.length;i++)
    {
      for(let j=i+1;j<wordun.length;j++)
      {
          if(wordun[i] == wordun[j])
          wordun.splice(j,1);

      }
    }
    return wordun;

  }

}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wf, w) {
  if (wf.length == 0)
    return null;
  else if (wf.length == 1) {
    if (wf[0] == w)
      return true;
    else
      return false;
  }
  else {
    for (const i of wf) {
      if (i == w)
        return true;

    }
    return false;
  }

}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wc, w) {
  if (wc.length == 0)
    return 0;
  else if (wc.length == 1) {
    return 1
  }
  else {
    let ct3 = 0
    for (const i of wc) {
      if (i == w)
        ct3 += 1

    }
    return ct3;
  }
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(mat)
{
  let ct4=0;
  for(const row of mat)
  {
    for (const i of row)
    {
      if ( i != 1)
      ct4=1
    }
  }
  if (ct4 === 0)
  return 1

  return 0
}

