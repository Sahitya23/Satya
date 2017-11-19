//algorithms
//verify a prime number?
function isPrime(n){
    var divisor = 2;

    while (n > divisor){
        if(n % divisor == 0){
            return false;
        }
        else
            divisor++;
    }
    return true;
}

console.log(isPrime(4))
//Find all prime factors of a number?
function primeFactors(n){
    var factors = [],
        divisor = 2;

    while(n>2){
        if(n % divisor == 0){
            factors.push(divisor);
            n= n/ divisor;
        }
        else{
            divisor++;
        }
    }
    return factors;
}
console.log(primeFactors(69))
//Get nth Fibonacci number?
function fibonacci(n){
    var fibo = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <=n; i++ ){
        fibo[i] = fibo[i-1]+fibo[i-2];
    }

    return fibo[n];
}
function fibonacci1(n){
    if(n<=1)
        return n;
    else
        return fibonacci(n-1) + fibonacci (n-2);
}

console.log(fibonacci(12))
console.log(fibonacci1(12))
//Find the greatest common divisor of two numbers?
function greatestCommonDivisor(a, b){
    var divisor = 2,
        greatestDivisor = 1;

    if (a < 2 || b < 2)
        return 1;

    while(a >= divisor && b >= divisor){
        if(a %divisor == 0 && b% divisor ==0){
            greatestDivisor = divisor;
        }
        divisor++;
    }
    return greatestDivisor;
}
function greatestCommonDivisor1(a, b){
    if(b == 0)
        return a;
    else
        return greatestCommonDivisor(b, a%b);
}
console.log(greatestCommonDivisor(14,16))
console.log(greatestCommonDivisor1(14,16))
//Remove duplicate members from an array?
function removeDuplicate(arr){
    var exists ={},
        outArr = [],
        elm;

    for(var i =0; i<arr.length; i++){
        elm = arr[i];
        if(!exists[elm]){
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return outArr;
}
console.log(removeDuplicate([1,2,2,4,4,5,5]))
//Merge two sorted array?
function mergeSortedArray(a, b){
    var merged = [],
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;

    if(a.length ==0)
        return b;
    if(b.length ==0)
        return a;

    while(aElm || bElm){
        if((aElm && !bElm) || aElm < bElm){
            merged.push(aElm);
            aElm = a[i++];
        }
        else {
            merged.push(bElm);
            bElm = b[j++];
        }
    }
    return merged;
}
console.log(mergeSortedArray([1,2,3,4,5],[6,6,6,7]))
//Swap two numbers without using a temp variable?
function swapNumb(a, b) {
    console.log('before swap: ', 'a: ', a, 'b: ', b);
    b = b - a;
    a = a + b;
    b = a - b;
    console.log('after swap: ', 'a: ', a, 'b: ', b);
}
    function swapNumb1(a, b){
        console.log("a: " + a + " and b: " + b);
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        console.log("a: " + a + " and b: " + b);
    }

swapNumb(2,3)
swapNumb1(2,3)
//Reverse a string in JavaScript?
function reverse(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
        rtnStr +=str[i];
    }
    return rtnStr;
}
function reverse1(str){
    var rtnStr = [];
    if(!str || typeof str != 'string' || str.length < 2 ) return str;

    for(var i = str.length-1; i>=0;i--){
        rtnStr.push(str[i]);
    }
    return rtnStr.join('');
}
console.log(reverse('This is a string'))
console.log(reverse1('This is a string'))
//Reverse words in a sentence?
function reverseWords(str){
    var rev = [],
        wordLen = 0;
    for(var i = str.length-1; i>=0; i--){
        if(str[i]==' ' || i==0){
            rev.push(str.substr(i,wordLen+1));
            wordLen = 0;
        }
        else
            wordLen++;
    }
    return rev.join(' ');
}
function reverseWords1(str){
    return str.split(' ').reverse();
}
console.log(reverseWords('This is a string'))
console.log(reverseWords1('This is a string'))
//Reverse words in place?
function reverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(reverseInPlace('This is a string'))
//Find the first non repeating char in a string?
function firstNonRepeatChar(str){
    var len = str.length,
        char,
        charCount = {};
    for(var i =0; i<len; i++){
        char = str[i];
        if(charCount[char]){
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    for (var j in charCount){
        if (charCount[j]==1)
            return j;
    }
}
console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))
// How will you remove duplicate characters from a sting?
function removeDuplicateChar(str){
    var len = str.length,
        char,
        charCount = {},
        newStr = [];
    for(var i =0; i<len; i++){
        char = str[i];
        if(charCount[char]){
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    for (var j in charCount){
        if (charCount[j]==1)
            newStr.push(j);
    }
    return newStr.join('');
}
console.log(removeDuplicateChar('this is a string'))
//How will you verify a word as palindrome?
function isPalindrome(str){
    var i, len = str.length;
    for(i =0; i<len/2; i++){
        if (str[i]!== str[len -1 -i])
            return false;
    }
    return true;
}
console.log(isPalindrome('madam'))
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}
console.log(checkPalindrom('madam'))
console.log(isPalindrome('madam'))
//If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?
function rand5(){
    return 1 + Math.random() * 4;
}

function rand7(){
    return 5 + rand5() / 5 * 2;
}

console.log(rand5())
console.log(rand7())
//from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number
function missingNumber(arr){
    var n = arr.length+1,
        sum = 0,
        expectedSum = n* (n+1)/2;

    for(var i = 0, len = arr.length; i < len; i++){
        sum += arr[i];
    }

    return expectedSum - sum;
}
console.log(missingNumber([5, 2, 6, 1, 3]))
//From a unsorted array, check whether there are any two numbers that will sum up to a given number?
function sumFinder(arr, sum){
    var len = arr.length;

    for(var i =0; i<len-1; i++){
        for(var j = i+1;j<len; j++){
            if (arr[i] + arr[j] == sum)
                return true;
        }
    }

    return false;
}
function sumFinder1(arr, sum){
    var differ = {},
        len = arr.length,
        substract;

    for(var i =0; i<len; i++){
        substract = sum - arr[i];

        if(differ[substract])
            return true;
        else
            differ[arr[i]] = true;
    }

    return false;
}

console.log(sumFinder([6,4,3,2,1,7], 9))
console.log(sumFinder1([6,4,3,2,1,7], 9))
//How would you find the largest sum of any two elements?
function topSum(arr) {

    var biggest = arr[0],
        second = arr[1],
        len = arr.length,
        i = 2;

    if (len < 2) return null;

    if (biggest < second) {
        biggest = arr[1];
        second = arr[0];
    }

    for (; i < len; i++) {

        if (arr[i] > biggest) {
            second = biggest;
            biggest = arr[i];
        }
        else if (arr[i] > second) {
            second = arr[i];
        }

    }
    return biggest + second;
}
console.log(topSum([1,2,3,4,5]))
//Count Total number of zeros from 1 upto n?
function countZero(n){
    var count = 0;
    while(n>0){
        count += Math.floor(n/10);
        n = n/10;
    }
    return count;
}
console.log(countZero(2014))
//How can you match substring of a sting?
function subStringFinder(str, subStr){
    var idx = 0,
        i = 0,
        j = 0,
        len = str.length,
        subLen = subStr.length;

    for(; i<len; i++){

        if(str[i] == subStr[j])
            j++;
        else
            j = 0;

        if(j == 0)
            idx = i;
        else if (j == subLen)
            return idx;
    }

    return -1;
}
console.log(subStringFinder('abbcdabbbbbck', 'ab'))
//How would you create all permutation of a string?
function permutations(str){
    var arr = str.split(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

    if (len == 0)
        return [str];

    for (var i=0; i<len; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

        for (var j=0, jLen = restPerms.length; j< jLen; j++)
        {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }
    return perms;
}
console.log(permutations('this is string'))
