// creo la variabile che seleziona il div della lampadina
const lampadina = document.querySelector('.lampadinaSpenta');

// creo la variabile che seleziona il button singolo
const lightSwitch = document.getElementById('switch');

// creo la variabile che seleziona il button alternato
const lightSwitch1 = document.getElementById('switch1');

// eventlistener per far funzionare il button singolo
lightSwitch.addEventListener('click', 
    function () {
    lampadina.classList.add('lampadinaAccesa')
    }
)


// ---------- bonus ----------

// eventlistener per far funzionare il button bonus
lightSwitch1.addEventListener('click', 
    function () {
        if (lampadina.classList.contains('lampadinaSpenta')) {
            lampadina.classList.add('lampadinaAccesa')
            lampadina.classList.remove('lampadinaSpenta')
            lightSwitch1.innerHTML = 'Spegni'
        } else {
            lampadina.classList.add('lampadinaSpenta')
            lampadina.classList.remove('lampadinaAccesa')
            lightSwitch1.innerHTML = 'Accendi'
        }
    }
)

