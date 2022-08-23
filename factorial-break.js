//Calculate 10 factorial with a while loop, a bifurcation and a  break sequence
var factorial = 1;
var num = 1;
while (true){
    if (num > 10){
        break
    }
    else{
        factorial = factorial*num;
        num++;
    }
}
console.log(factorial)