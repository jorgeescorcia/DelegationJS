
const BtnBotones = document.querySelector("#BtnBotones");
const botones = document.querySelector("#botones");
const fondo = document.querySelector("#fondo");


//IFFE

(() => {

    BtnBotones.addEventListener("click", agregarBotones);
    botones.addEventListener("click", delegacion)


})();





function agregarBotones(e) {
    e.preventDefault();
    botones.innerHTML = `

<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>

`
}

function delegacion(e) {
    e.preventDefault();
    const colorBoton = e.target.classList[1];

    switch (colorBoton) {
        case 'btn-primary':
            fondo.className = 'bg-primary';
            break;

        case 'btn-secondary':
            fondo.className = 'bg-secondary';
            break;

        case 'btn-danger':
            fondo.className = 'bg-danger';
            break;

        case 'btn-success':
            fondo.className = 'bg-success';
            break;

        case 'btn-warning':
            fondo.className = 'bg-warning';
            break;
    }
}