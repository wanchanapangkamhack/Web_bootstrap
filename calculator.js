function myFunction(x, y) {
    if (y === undefined) {
    y = 5;
    }
    return x * y;
    }
    
function myFunction1(x) {
    var num = x;
    for (let i = 1; i <= 12; i++) {
    var total = num * i;
    document.write(num + '*' + i + '=' + total + '<br>');
    }
}