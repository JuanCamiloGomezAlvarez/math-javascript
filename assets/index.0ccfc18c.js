(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();document.querySelector("#app").innerHTML=`
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

    <div class="areaCirculo card">
      <h3>Calcula el area de un circulo</h3>
      <form id="formCirculoArea">
          <input id="radioCirculo" type="text" required placeholder="cual es el valor del radio">
          <button id="btn">calcular</button>
          <p id="resultCirculoArea">resultado</p>
      </form>
    </div>
  </main>
`;const n=document.querySelector("#resultTrianguloIsoseles"),c=document.querySelector("#ladosTriangulo"),s=document.querySelector("#baseTriangulo"),i=document.querySelector("#formTrianguloIsosceles"),d=document.querySelector("#ladoCorto"),m=document.querySelector("#ladoLargo"),p=document.querySelector("#resultRectanguloPerimetro"),g=document.querySelector("#formRectangulo"),f=document.querySelector("#lado1Rectangulo"),v=document.querySelector("#lado2Rectangulo"),y=document.querySelector("#resultRectanguloArea"),h=document.querySelector("#formRectanguloArea"),q=document.querySelector("#radioCirculo"),b=document.querySelector("#formCirculoArea"),C=document.querySelector("#resultCirculoArea");function R(r,e){const t=Math.sqrt(r**2-e**2/4);return console.log(t),`La altura del triangulo es ${t.toFixed(3)}`}function T(r){r.preventDefault();const e=parseInt(c.value),t=parseInt(s.value),a=R(e,t);n.innerText=a}i.addEventListener("submit",T);function S(r,e){return`El valor del perimetro es: ${(r*2+e*2).toFixed(2)}`}function I(r){r.preventDefault();const e=parseInt(d.value),t=parseInt(m.value),a=S(e,t);p.innerHTML=a}g.addEventListener("submit",I);function L(r,e){return`El valor del area es: ${(r*e).toFixed(2)} Uni^2`}function A(r){r.preventDefault();const e=parseInt(f.value),t=parseInt(v.value),a=L(e,t);y.innerHTML=a}h.addEventListener("submit",A);function x(r){return`\xE8l area del circulo es ${(r*r*Math.PI).toFixed(2)}`}function M(r){r.preventDefault();const e=parseInt(q.value),t=x(e);C.innerHTML=t}b.addEventListener("submit",M);
