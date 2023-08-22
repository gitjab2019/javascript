


function mayorDeEdad(edad){

    return(edad>=18 ? "Es mayor de edad":"No es mayor de edad");

}

function verificarEdad() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let resultado = mayorDeEdad(numero1);
    document.getElementById("resultado").textContent = resultado;
}

function calificarNota(){
    let nota = parseFloat(document.getElementById("nota").value);
    let calificacion = validarNota(nota);
    document.getElementById("calificacion").textContent = "Calificación: " + calificacion;
}

function validarNota(nota){
calification: String;
    switch (nota) {
        case 0: calification="Muy deficiente";
            break;
        case 1: calification="Muy deficiente";
            break;
        case 2: calification="Muy deficiente";
            break;
        case 3: calification="Insuficiente";
            break;
        case 4: calification="Insuficiente";
            break;
        case 5: calification="Insuficiente";
            break;
        case 6: calification="Bien";
            break;
        case 7: calification="Bien";
            break;
        case 8: calification="Notable";
            break;
        case 9: calification="Notable";
            break;
        case 10: calification="Sobresaliente";
            break;            
        default:
            calification="Dato ingresado no se encuentra en el rango";
    }
    return calification;
    
}


function findMax(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}




function checkAges(){
  
    let numero1 = parseInt(document.getElementById("number1").value);
    let numero2 = parseInt(document.getElementById("number2").value);
    let numero3 = parseInt(document.getElementById("number3").value);

    mayor=findMax(numero1,numero2,numero3);

    if (mayor==numero1) nameMayor=document.getElementById("name1").value;
    if (mayor==numero2) nameMayor=document.getElementById("name2").value;
    if (mayor==numero3) nameMayor=document.getElementById("name3").value;

    document.getElementById("numMayor").textContent="El número mayor es: " +mayor+" y corresponde a: "+nameMayor;

}


function pasarAMayusculas(){

  
  texto=document.getElementById("textoIngresado").value;
  document.getElementById("textoEnMayuscula").textContent= texto.toUpperCase();

}

function crearPiramide(){
let texto="";
    for(i=1;i<31;i++)
       {
        for(j=1;j<=i;j++)
          {
            texto += i.toString();     
          }
          texto += "<br>";
       } 
    document.getElementById("miElemento").innerHTML=texto;    
     
}

function crearSerie(){
    let texto="";
        for(i=1;i<501;i++)
           {  texto+=i.toString();
              if ((i % 4==0)&&(i>3))
                  texto+=" Múltiplo de 4"; 
              if((i % 9==0)&&(i>8))             
                     texto+=" Múltiplo de 9"; 
              texto += "<br>";
              document.getElementById("misMultiplos").innerHTML=texto;
           }        
    }






let listaNumeros=[];
let suma=0;
let reiniciarSuma=false;



function ingresarNumerosToCero(){
   aText=document.getElementById("aText").value;
   
   if (aText!=""){ 
        if (reiniciarSuma)
                document.getElementById("sumaTotal").textContent="Suma Total:"

        if (isNaN(aText)){ 
                alert("La cadena Ingresada no es un Número");
                clearInput();
            }
        else 
                {numero=parseInt(aText);
                suma+=numero;   
                listaNumeros.push(numero);
                document.getElementById("listaNumbers").textContent=listaNumeros;
                if (numero==0) 
                    {  document.getElementById("sumaTotal").textContent="Suma Total:"+suma.toString();
                        listaNumeros=[];
                        suma=0;
                        reiniciarSuma=true;
                    }

                }
    }        
}

function clearInput(){
    document.getElementById("aText").value="";
}


function clearCadenas(){
    document.getElementById("aString").value="";
}


function isVocal(word){
    return ((word=='a')||(word=='e')||(word=='i')||(word=='o')||(word=='u')||
    (word=='A')||(word=='E')||(word=='I')||(word=='O')||(word=='U'))
}

function contarVocales(aText){
    miCadena=document.getElementById(aText).value;
    count=0; vectorVocales=[];
    for(i=0; i<miCadena.length; i++)
           if(isVocal(miCadena[i]))
                           { count++;
                             vectorVocales.push(miCadena[i]);
                           }
    document.getElementById("totalVocales").textContent="Cantidad de Vocales: "+count.toString() +" "+ vectorVocales;
}

function clearTexto(elemento){
    document.getElementById(elemento).value="";   
}


function invertirCadena(unaCadena){
  miCadena=document.getElementById(unaCadena).value;
  cadenaInvertida="";

  for (let i = miCadena.length - 1; i >= 0; i--) {
    cadenaInvertida += miCadena[i];
  }
  
  document.getElementById("cadenaInvertida").textContent="Cadena Invertida: "+cadenaInvertida;        
}


function areaCirculo(radioAsAText){
 radio=parseFloat(document.getElementById(radioAsAText).value);

 areaCircle=Math.PI*radio*radio/2;

 document.getElementById("areaCirculo").textContent="Area Círculo: "+ areaCircle.toString();
}


function evaluarNumero(numeroDado){

  if (isNaN(document.getElementById(numeroDado).value)){ 
        alert("La cadena Ingresada no es un Número");
        clearTexto(numeroDado);
       }
   else {   
            miNumero=parseInt(document.getElementById(numeroDado).value);
            
            if (miNumero>0)
                    document.getElementById("evaluacion").textContent="El número ingresado es Positivo";
            else if(miNumero<0)
            document.getElementById("evaluacion").textContent="El número ingresado es Negativo";
                else document.getElementById("evaluacion").textContent="El número ingresado es Cero"; 
         }      
}

listaDePalabras=[];
reiniciarCadenas=false;

function addPalabras(word,wordsList){
    aString=document.getElementById(word).value;
               
    if (reiniciarCadenas) 
            listaDePalabras=[];
                             
    listaDePalabras.push(aString);
    document.getElementById(wordsList).textContent=listaDePalabras;
    if (aString=="fin") 
                 reiniciarCadenas=true;
              
 }
 

 function ordenarLista(){
    listaOrdenada=[];
    listaOrdenada=listaDePalabras.sort();
    document.getElementById("listaDePalabras").textContent=listaOrdenada;
 }


 let listaNumbers=[];
 function addNumbers(){
  
  let numero = parseInt(document.getElementById("aNumber").value);
  listaNumbers.push(numero);
  document.getElementById("numbersList").textContent=listaNumbers.toString();

 }

 function clearNumbers(){
   document.getElementById("aNumber").value=""; 
 }

 function getMenor(){
  if (listaNumbers.length != 0) { 
            menor=Math.min(...listaNumbers); 
            document.getElementById("minor").textContent="El Menor es: "+menor.toString();
  }  
 }

 function getMayor(){
  if (listaNumbers.length != 0) {  
    mayor=Math.max(...listaNumbers); 
    document.getElementById("mayor").textContent="El Mayor es: "+mayor.toString();
  }
 } 

  function restart(){
    listaNumbers=[];
    document.getElementById("numbersList").textContent="";
    document.getElementById("minor").textContent="";
    document.getElementById("mayor").textContent="";
    document.getElementById("aNumber").value="";
    
  }

  function contarPalabras(textoDado){
    cadena=document.getElementById(textoDado).value;
    total=cadena.split(' ').length;
    document.getElementById("cantidadDePalabras").textContent="La Frase tiene: "+total.toString();
  }