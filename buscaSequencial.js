let num = [15,16,25,1,2,102,0,-3];
var n = 102;

for (let index = 0; index < num.length; index++) {
    if (n == num[index]) {
        console.log("Achei aqui:" + "num["+index+"]");
        break;
    }
}