//a = 16; a.toString(16);  // f
// перевод в систему счисления с основанием N

const n = 81  // getBin(n)
let b = []
for (i = 0; i < n; i++){
    b.push(i);
}
triple = []
for (i = 0; i < n; i++){
    triple.push(b[i].toString(3))
}
console.log(triple)