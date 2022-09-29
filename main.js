import './style.css'

document.querySelector('#app').innerHTML = `
  <main>
    <h1 >Matemáticas con JavaScript!</h1>

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
  </main>
`

//SEleccion de elementos
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
//-----------------------

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

function calcularOnClickRectangulo(e){
  e.preventDefault()
  const valor1 = parseInt(ladoCorto.value)
  const valor2 = parseInt(ladoLargo.value)
  const perimetro = perimetroRectangulo(valor1, valor2)
  resultRectanguloPerimetro.innerHTML = perimetro
}

formRectangulo.addEventListener("submit", calcularOnClickRectangulo)
//-------------------------------------------------------------------------