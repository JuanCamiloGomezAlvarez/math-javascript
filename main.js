import './style.css'

document.querySelector('#app').innerHTML = `
  <main>
    <h1 >Matemáticas con JavaScript!</h1>
    <div class="card-container">
      <div class="triangulos card">
      <h3>Calcula la altura de un triangulo isosceles</h3>
        <form id="formTrianguloIsosceles">
            <input id="ladosTriangulo" type="text" required placeholder="cual es el lado que se repite">
            <input id="baseTriangulo" type="text" required placeholder="cual es el valor de la base">
            <button id="btn">calcular</button>
            <p id="resultTrianguloIsoseles">resultado</p>
        </form> 
      </div>

      <div class="rectangulosPerimetro card">
        <h3>Calcula el perimetro de un rectangulo</h3>
        <form id="formRectangulo">
            <input id="ladoCorto" type="text" required placeholder="cual es el lado mas corto" >
            <input id="ladoLargo" type="text" required placeholder="cual es el lado mas largo">
            <button id="btn">calcular</button>
            <p id="resultRectanguloPerimetro">resultado</p>
        </form>
      </div>

      <div class="rectangulosArea card">
        <h3>Calcula el area de un rectangulo</h3>
        <form id="formRectanguloArea">
            <input id="lado1Rectangulo" type="text" required placeholder="cual es el lado mas corto">
            <input id="lado2Rectangulo" type="text" required placeholder="cual es el lado mas largo">
            <button id="btn">calcular</button>
            <p id="resultRectanguloArea">resultado</p>
        </form>
      </div>

      <div class="areaCirculo card">
        <h3>Calcula el area de un circulo</h3>
        <form id="formCirculoArea">
            <input id="radioCirculo" type="text" required placeholder="cual es el valor del radio">
            <button id="btn">calcular</button>
            <p id="resultCirculoArea">resultado</p>
        </form>
      </div>
      <div class="calculoDescuento card">
        <h3>Calcula el descuento de un producto</h3>
        <form id="formDescuento">
            <input id="valorProducto" type="text" required placeholder="cual es el valor del producto">
            <input id="porcentajeDescuento" type="text" required placeholder="porcentaje de descuento">
            <br>
            <label for="cupon" >agrega el nombre de tu cupon de descuento
            <br>
            <input id="cupon" type="text" placeholder="ej: jcga">
            <button id="btn">calcular</button>
            <p id="resultPorcentaje">resultado</p>
        </form>
      </div>
    </div>
    
  </main>
`

//Seleccion de elementos
//-----------------------
//triangulo isosceles
const resultTrianguloIsoseles = document.querySelector("#resultTrianguloIsoseles")
const ladosTriangulo = document.querySelector("#ladosTriangulo")
const baseTriangulo = document.querySelector("#baseTriangulo")
const formTrianguloIsosceles = document.querySelector("#formTrianguloIsosceles")
//rectangulo perimetro
const ladoCorto = document.querySelector("#ladoCorto")
const ladoLargo = document.querySelector("#ladoLargo")
const resultRectanguloPerimetro = document.querySelector("#resultRectanguloPerimetro")
const formRectangulo = document.querySelector("#formRectangulo")
//Rectangulo area
const lado1Rectangulo = document.querySelector("#lado1Rectangulo")
const lado2Rectangulo = document.querySelector("#lado2Rectangulo")
const resultRectanguloArea = document.querySelector("#resultRectanguloArea")
const formRectanguloArea = document.querySelector("#formRectanguloArea")
//Area circulo
const radioCirculo = document.querySelector("#radioCirculo")
const formCirculoArea = document.querySelector("#formCirculoArea")
const resultCirculoArea = document.querySelector("#resultCirculoArea")
//-----------------------
//Porcentajes de descuento
const formDescuento = document.querySelector("#formDescuento")
const valorProducto = document.querySelector("#valorProducto")
const porcentajeDescuento = document.querySelector("#porcentajeDescuento")
const resultPorcentaje = document.querySelector("#resultPorcentaje")
const cupon = document.querySelector("#cupon")


//Esta función me ayuda a calcular la altura de un triangulo isosceles
function alturaTrianguloIsosceles(ladoRepite, base){
  const heigth = Math.sqrt((ladoRepite**2)-((base**2)/4))
  console.log(heigth)
  return `La altura del triangulo es ${heigth.toFixed(3)}`
}

function calcularOnClickIsosceles(e){
    e.preventDefault()
    const dato1parsed = parseInt(ladosTriangulo.value)
    const dato2parsed = parseInt(baseTriangulo.value)
    const alturaTriangulo = alturaTrianguloIsosceles(dato1parsed, dato2parsed)
    resultTrianguloIsoseles.innerText = alturaTriangulo
}

formTrianguloIsosceles.addEventListener("submit", calcularOnClickIsosceles)
//-------------------------------------------------------------------------

//Está seccion me ayuda a calcular el perimetro de un rectangulo
function perimetroRectangulo(ladoCorto, ladoLargo){
  const result = (ladoCorto*2)+(ladoLargo*2)
  return `El valor del perimetro es: ${result.toFixed(2)}`
}

function calcularOnClickPerimetroRectangulo(e){
  e.preventDefault()
  const valor1 = parseInt(ladoCorto.value)
  const valor2 = parseInt(ladoLargo.value)
  const perimetro = perimetroRectangulo(valor1, valor2)
  resultRectanguloPerimetro.innerHTML = perimetro
}

formRectangulo.addEventListener("submit", calcularOnClickPerimetroRectangulo)
//-------------------------------------------------------------------------

//Está seccion me ayuda a calcular el area de un rectangulo
function areaRectangulo(ladoCorto, ladoLargo){
  const resultado = ladoCorto*ladoLargo
  return `El valor del area es: ${resultado.toFixed(2)} Uni^2` 
}

function calcularOnClickAreaRectangulo(e){
  e.preventDefault()
  const valor1 = parseInt(lado1Rectangulo.value)
  const valor2 = parseInt(lado2Rectangulo.value)
  const area = areaRectangulo(valor1, valor2)
  resultRectanguloArea.innerHTML = area
}
formRectanguloArea.addEventListener("submit", calcularOnClickAreaRectangulo)
//-------------------------------------------------------------------------

//Esta seccion me ayuda a calcular el area de un circulo teniendo el valor del radio
function areaCirculo(radio){
  const area = (radio*radio)*Math.PI
  return `el area del circulo es ${area.toFixed(2)}`
}

function calcularOnClickAreaCirculo(e){
  e.preventDefault()
  const radio = parseInt(radioCirculo.value)
  const area = areaCirculo(radio)
  resultCirculoArea.innerHTML = area 
}

formCirculoArea.addEventListener("submit", calcularOnClickAreaCirculo)

//---------------------------------------------------------------------
//Seccion de descuento 

const cupones = [
  {
    nombre : "jcga",
    descuento : 10000
  },
  {
    nombre : "bgpg",
    descuento : 20000
  },
  {
    nombre : "beat",
    descuento : 30000
  },
  {
    nombre : "lfga",
    descuento : 40000
  },

]


function porcentajeFinal(valorProducto, descuento, cupon){
  if(descuento > 100 ){
    return `el descuento es mayor a 100%`
  }else if(descuento < 0 ){
    return `El descuento es menor a 0%`
  }else{
    const resultado = ((valorProducto*(100 - descuento)) / 100)
    const cuponFind = cupones.find(x => x.nombre === cupon )
    const valorDescuento = cuponFind.descuento
    const resultadoFinal = resultado - valorDescuento
    return `El valor final del producto con descuento y cupon e s ${resultadoFinal.toFixed(2)}`


    // if(cupon === "jcga"){
    //   const resultado1 = resultado - 10000 
    //   return `El valor final del producto con descuento y cupon jcga es ${resultado1.toFixed(2)}`
    // }else if(cupon === "bgpg"){
    //   const resultado1 = resultado - 20000 
    //   return `El valor final del producto con descuento y cupon bgpg es ${resultado1.toFixed(2)}`
    // }else if(cupon === ""){
    //   return `El valor final del producto con descuento es ${resultado.toFixed(2)}`
    // }else{
    //   return `Cupon no valido, el valor final del producto con descuento es ${resultado.toFixed(2)}`
    // }
    
  }
  
  
}

function calcularOnClickDescuento(e){
  e.preventDefault()
  const x = parseInt(valorProducto.value)
  const y = parseInt(porcentajeDescuento.value)
  const c = cupon.value
  const resultado = porcentajeFinal(x, y, c)
  resultPorcentaje.innerHTML = resultado
}

formDescuento.addEventListener("submit", calcularOnClickDescuento)