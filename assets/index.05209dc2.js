(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();document.querySelector("#app").innerHTML=`
  <main>
    <h1 >Matem\xE1ticas con JavaScript!</h1>
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
`;const c=document.querySelector("#resultTrianguloIsoseles"),s=document.querySelector("#ladosTriangulo"),d=document.querySelector("#baseTriangulo"),i=document.querySelector("#formTrianguloIsosceles"),p=document.querySelector("#ladoCorto"),m=document.querySelector("#ladoLargo"),f=document.querySelector("#resultRectanguloPerimetro"),g=document.querySelector("#formRectangulo"),v=document.querySelector("#lado1Rectangulo"),y=document.querySelector("#lado2Rectangulo"),b=document.querySelector("#resultRectanguloArea"),h=document.querySelector("#formRectanguloArea"),q=document.querySelector("#radioCirculo"),C=document.querySelector("#formCirculoArea"),S=document.querySelector("#resultCirculoArea"),R=document.querySelector("#formDescuento"),T=document.querySelector("#valorProducto"),I=document.querySelector("#porcentajeDescuento"),L=document.querySelector("#resultPorcentaje"),x=document.querySelector("#cupon");function A(o,e){const t=Math.sqrt(o**2-e**2/4);return console.log(t),`La altura del triangulo es ${t.toFixed(3)}`}function D(o){o.preventDefault();const e=parseInt(s.value),t=parseInt(d.value),n=A(e,t);c.innerText=n}i.addEventListener("submit",D);function P(o,e){return`El valor del perimetro es: ${(o*2+e*2).toFixed(2)}`}function j(o){o.preventDefault();const e=parseInt(p.value),t=parseInt(m.value),n=P(e,t);f.innerHTML=n}g.addEventListener("submit",j);function F(o,e){return`El valor del area es: ${(o*e).toFixed(2)} Uni^2`}function E(o){o.preventDefault();const e=parseInt(v.value),t=parseInt(y.value),n=F(e,t);b.innerHTML=n}h.addEventListener("submit",E);function M(o){return`el area del circulo es ${(o*o*Math.PI).toFixed(2)}`}function O(o){o.preventDefault();const e=parseInt(q.value),t=M(e);S.innerHTML=t}C.addEventListener("submit",O);const k=[{nombre:"jcga",descuento:1e4},{nombre:"bgpg",descuento:2e4},{nombre:"beat",descuento:3e4},{nombre:"lfga",descuento:4e4}];function H(o,e,t){if(e>100)return"el descuento es mayor a 100%";if(e<0)return"El descuento es menor a 0%";{const n=o*(100-e)/100,l=k.find(u=>u.nombre===t).descuento;return`El valor final del producto con descuento y cupon e s ${(n-l).toFixed(2)}`}}function $(o){o.preventDefault();const e=parseInt(T.value),t=parseInt(I.value),n=x.value,r=H(e,t,n);L.innerHTML=r}R.addEventListener("submit",$);
