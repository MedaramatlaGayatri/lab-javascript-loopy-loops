var ProGrad1 = 'Shanthi';
console.log("The driver's name is "+ProGrad1);
var ProGrad2 = 'Rahul';
console.log("The navigator's name is "+ProGrad2);

// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

if(ProGrad1.length == ProGrad2.length){
    console.log("Wow, you both have equally long names, "+ProGrad1.length+" characters");
}else if(ProGrad1.length > ProGrad2.length){
    console.log("The driver has the longest name, it has "+ProGrad1.length+" characters");
}else{
    console.log("It seems that the navigator has the longest name, it has "+ProGrad2.length+" characters");
}
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var vowels = ['a','e','i','o','u'];
containsVowels(ProGrad1);
containsVowels(ProGrad2);
function containsVowels(ProGrad1){
    if(checkVowel(ProGrad1)){
        console.log(ProGrad1);
        var ar = [];
        var k =0;
        ProGrad1 =ProGrad1.toLowerCase();
        for(let i = 0;i < ProGrad1.length;i++){
            var x = ProGrad1.charAt(i);
            if(vowels.includes(x)){
                console.log(ProGrad1.charAt(i)+" ");
                ar[k++] = i;
            }
        }
        for(let i = 0;i < ar.length;i++){
            console.log(ar[i]+" ");
        }
    }
}
function includes(ch){
    for(let i = 0;i < vowels.length;i++){
        if(vowels == ch){
            return true;
        }
    }
    return false;
}
function checkVowel(str){
    str = str.toLowerCase();
    for(let i = 0;i < str.length;i++){
        var x = str.charAt(i);
        if(vowels.includes(x)){
            return true;
        }
    }
    return false;
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
console.log(no_of_uppercase_letters(ProGrad1));
console.log(no_of_lowercase_letters(ProGrad1));
console.log(no_of_uppercase_letters(ProGrad2));
console.log(no_of_uppercase_letters(ProGrad2));

function no_of_uppercase_letters(str){
    let count = 0;
    for(let i = 0;i < str.length;i++){
        if(str.charAt(i)==str.charAt(i).toUpperCase()){
            count++;
          }
    }
    return count;
}

function no_of_lowercase_letters(str){
    let count = 0;
    for(let i = 0;i < str.length;i++){
        if(str.charAt(i) == str.charAt(i).toLowerCase()){
            count++;
        }
    }
    return count;
}

var str = ProGrad1.toUpperCase();
for(let i = 0;i < str.length;i++){
    console.log(str.charAt(i)+" ");
}
str = ProGrad2.split("");
console.log(str.reverse());
console.log(ProGrad1+" "+ProGrad2);

if(ProGrad1 < (ProGrad2) > 0){
    console.log(" "+ProGrad1+" "+ProGrad2);
}else if(ProGrad2 < (ProGrad1) > 0){
    console.log(ProGrad2+" "+ProGrad1);
}else{
    console.log("What?! You both have the same name?");
}
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
