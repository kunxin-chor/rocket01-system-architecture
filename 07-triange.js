// if n is 3
// *..
// **.
// ***

let n = 5;
let row = 1;
// *....
// **...
// ***..
// ****.
// *****
while (row <= n) {
    let line = "";
    let col = 0;
    while (col < row) {
        line = line + "*"
        col = col + 1;
    }
    col = 0;
    while (col < n - row ) {
        line = line + '.';
        col = col + 1;
    }
    console.log(line);
    row = row + 1;
}
