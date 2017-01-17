const sum = (a, b) => a+b;


// 2.1. Let & const
const PI = 3.141593;

let calcularArea = function(radio){
    let area = ( radio * 2 ); 
    area = area * PI;
    return area;
}; 

console.log('El valor de PI es ' + PI +
' y de un circulo con radio ' +  3 + 
' el valor del area es: '+calcularArea(3) );