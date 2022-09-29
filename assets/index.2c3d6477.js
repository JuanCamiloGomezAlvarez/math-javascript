(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <main>
    <h1 >Matem\xE1ticas con JavaScript!</h1>

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
`;const n=document.querySelector("#resultTrianguloIsoseles"),c=document.querySelector("#ladosTriangulo"),s=document.querySelector("#baseTriangulo"),i=document.querySelector("#formTrianguloIsosceles"),d=document.querySelector("#ladoCorto"),m=document.querySelector("#ladoLargo"),g=document.querySelector("#resultRectanguloPerimetro"),p=document.querySelector("#formRectangulo");document.querySelector("#lado1Rectangulo");document.querySelector("#lado2Rectangulo");document.querySelector("#resultRectanguloArea");document.querySelector("#formRectanguloArea");function f(l,o){const r=Math.sqrt(l**2-o**2/4);return console.log(r),`La altura del triangulo es ${r.toFixed(3)}`}function y(l){l.preventDefault();const o=parseInt(c.value),r=parseInt(s.value),a=f(o,r);n.innerText=a}i.addEventListener("submit",y);function h(l,o){return`El valor del perimetro es: ${(l*2+o*2).toFixed(2)}`}function q(l){l.preventDefault();const o=parseInt(d.value),r=parseInt(m.value),a=h(o,r);g.innerHTML=a}p.addEventListener("submit",q);
