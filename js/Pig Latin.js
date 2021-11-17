// Business Logic

const vowels = /[aeiouAEIOU]/;
const consonants = /[qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM]+/;
const qu = /[qu]/; 

function pigLatinTranslator(text) {
  let temp = text.split(" ");
  
  temp.forEach(function(word) {
    if (word[0].match(vowels)) {
      temp[temp.indexOf(word)] = word + 'way';
    }
  });
  
  temp.forEach(function(word) {
    if (word[0].match(consonants) && word[1].match(consonants)) {
      let a = word[0] + word[1];
      temp[temp.indexOf(word)] = word.slice(2, word.length) + a + 'ay';
    }
    else if (word[0].match(consonants)) {
      let a = word[0];
      temp[temp.indexOf(word)] = word.slice(1, word.length) + a + 'ay';
    } 
  });
  return temp.join(" ");
}

pigLatinTranslator('Look at us we are doing it');

//UI Logic

$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const pigLatin = pigLatinTranslator(passage);
    $("#pig-latin-result").html(pigLatin);
    // $("#selected-count").html(occurrencesOfWord);
    // $("#bolded-passage").html(boldPassage(word, passage));
  });
});



/*  If the first consonants include "qu", move the "q" and the "u." Don't forget 
  about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes 
  "ickquay" while "squeal" becomes "quealsay." */


// function vowelCounter(text) {
//   let temp = text.split('');
//   let counter = 0;
//   temp.forEach(function(letter) {
//     if (letter.match(vowels)) {
//       counter++;
//     }
//   })
//   return counter;
// }

// vowelCounter('');
// Describe: vowelCounter();

// Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
// Code: vowelCounter("CATS CATERED THE EVENT");
// Expected Output: 7

// let test = "CATS CATERED THE EVENT.";

// let vowelCount = 0;

// function vowelCounter(text) {
//   // modify string so it's easier to deal with: split or join or concat?
//   let temp =  text.split(' ').join('').split('');
//   // identify & count vowels
//   temp.forEach(element => {
//     if (element.match(vowels)) {
//       vowelCount++;
//     }
//   })
//   console.log(`The test input contains ${vowelCount} vowels.`)
// }

// vowelCounter(test);

// Test: "It recognizes a single vowel in a word with multiple characters."
// Code: vowelCounter("cat");
// Expected Output: 1

// text = "cat";

// function catCounter(text) {
//   let temp = text.split('');
//   console.log(temp);
//   for  (let i = 0; i < temp.length; i += 1) {
//     if (temp[i].match(vowels)) {
//       return i;
//     }
//   }
// }
// catCounter(text);

// Result:
// text = "cat";

// (3) ['c', 'a', 't']
// 1

// Test: "It recognizes a single vowel."
// Code: vowelCounter("a");
// Expected Output: 1

// let vowelList = 'aeiou';

// function catCounter(text) {
  //   let temp = text.split('');
  //   console.log(temp);
  //   for (let i = 0; i < temp.length; i++) {
    //     // console.log(temp[i])
    //     if (temp[i].match(vowels)) {
      //       return temp[i];
      //     }
      //   }
      // }
      
      // catCounter('ccat');
      
      // catCounter('cccat');
      // VM238:5 (5) ['c', 'c', 'c', 'a', 't']
      // 'a'
      
// Test: "It recognizes multiple vowels in a single word."
// Code: vowelCounter("cater");
// Expected Output: 2
        
// const vowels = /[aeiouAEIOU]/;

// function vowelCounter(text) {
//   let temp = text.split('');
//   let counter = 0;
//   temp.forEach(function(letter) {
//     if (letter.match(vowels)) {
//       counter++;
//     }
//   })
//   return counter;
// }

// vowelCounter('wonderfUl');

// Test: "It recognizes a single vowel regardless of case."
// Code: vowelCounter("A");
// Expected Output: 1


// function catCounter(text) {
//   let temp = text.split('');
//   for (let i = 0; i < temp.length; i++) {
  //       // console.log(temp[i])
  //       if (temp[i].match(vowels)) {
    //           return 1;
    //         } else {
      //           return 0;
      //         }
      //       }
      //     }
      
      // catCounter('fghjoklkjhg');
        
// Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
// Code: vowelCounter("CaTS CATEReD ThE EveNT");
// Expected Output: 7
        
// const vowels = /[aeiouAEIOU]/;

// function vowelCounter(text) {
//   let temp = text.split('');
//   let counter = 0;
//   temp.forEach(function(letter) {
//     if (letter.match(vowels)) {
//       counter++;
//     }
//   })
//   return counter;
// }

// vowelCounter('CaTS CATEReD ThE EveNT');

// Test: "It ignores non-alphabetical characters since they can't be vowels."
// Code: vowelCounter("*&$92%");
// Expected Output: 0


// Test: "It recognizes vowels in a multiple-word sentence."
// Code: vowelCounter("cats catered the event");
// Expected Output: 7


// let letters = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

// const singleConsonants = /[letters]/g;

// const pairedConsonants = /[letters]+/g;