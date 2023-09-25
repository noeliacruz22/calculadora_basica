//esto agrega el valor del boton que toquemos a la pantalla
function agregar(valor){
    document.getElementById('pantalla').value += valor;
};

//esta accion vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
};

//esta accion ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
};