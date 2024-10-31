// exercise 1
let n = 9;
for (let i = 1; i <= 10; ++i) console.log(n + " x " + i);

//no 2 exercise

let string = "madam";
let r = "";

for (let i = string.length - 1; i >= 0; i--) {
  r += string[i];
}
console.log(r);
if (r == string) {
  console.log("Palindrome");
} else {
  r != string;
  console.log("not palindrom");
}

// // no 3 exercise

const centimeter: number = 100000;
console.log(`${centimeter / 100000} km`);

// no exercise 4

const _money: number = 1000;
function rupiahUang(_uang: number): string {
  let _converter: string = _uang.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR",
  });
  return _converter;
}
console.log(rupiahUang(_money));

// exercise 5

const words: string = "Hello world";
const search: string = "ell";
console.log(words.replace(search, ""));

//exercise 6

let i: string = "hello world";
let k: string[] = [];
let c = (k[0] = i[0].toUpperCase());
c = 1;
while (c < i.length) {
  if (i[c] === " ") {
    k.push(i[c]);
    c++;
    if (i[c] !== undefined) {
      k[i] = i[c].toUpperCase();
    }
  } else {
    k.push(i[c]);
  }
  c++;
}
console.log(k.toString().replace(/,/g, ""));

// exercise 7

let i: string = "The QuiCk BrOwN Fox";
let s: string[] = [];
c = 0;
while (c < i.length) {
  if (i[c] === i[c].toLowerCase()) {
    s[c] = i[c].toUpperCase();
  } else if (i[c] === " ") {
    s.push(i[c]);
    c++;
    if (i[c] !== undefined) {
      if (i\[c] === i[c].toLowerCase()) {
        s.push(i[c].toUpperCase());
      } else {
        s[c] = i[c].toLowerCase();
      }
    }
  } else {
    s.push(i[c].toLowerCase());
  }
  c++;
}
console.log(s.toString().replace(/,/g, ""));

// exercise 8

const num1: number = 42;
const num2: number = 27;
console.log(num1 > num2 ? num1 : num2);

// exercise 9

const num1: number = 42;
const num2: number = 27;
const num3: number = 18;
if (num1 < num2 && num1 < num3) {
  if (num2 < num3) {
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num2 < num1 && num2 < num3) {
  console.log(num2);
  if (num2 < num3) {
    if (num1 > num3) {
      console.log(num3);
      console.log(num1);
    } else {
      console.log(num1);
      console.log(num3);
    }
  } else {
    console.log(num3);
    console.log(num2);
  }
} else if (num3 < num1 && num3 < num1) {
  console.log(num3);
  if (num2 < num3) {
    console.log(num2);
    console.log(num3);
  } else {
    if (num2 > num1) {
      console.log(num1);
      console.log(num2);
    } else {
      console.log(num2);
      console.log(num1);
    }
  }
} else {
  if (num1 < num2 && num1 < num3) {
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    if (num2 < num3 && num2 < num1) {
      console.log(`${num2}, ${num3}, ${num1}`);
    } else {
      if (num1 > num2 && num1 > num3) {
        console.log(`${num3}, ${num2}, ${num1}`);
      } else {
        if (num3 > num1 && num3 > num2) {
          console.log(`${num1}, ${num2}, ${num3}`);
        } else {
          console.log(`${num3}, ${num1}, ${num2}`);
        }
      }
    }
  }
}

// exercise 10

const u: string = "hello";

if (typeof u === typeof "") {
  console.log(`${u} -> 1`);
} else if (typeof u === typeof 0) {
  console.log(`${u} -> 2`);
} else {
  console.log(`typeof ${typeof u} value ${u} -> 3`);
}

// exercise 11

const p: string = "An apple a day keeps the doctor away";
console.log(p.toLowerCase().replace(/[a]/g, "*"));