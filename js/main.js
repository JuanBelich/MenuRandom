const { createApp } = Vue

createApp({
    data() {
        return {
            url:"./js/datos.json",
            datos:[],
            random:(Math.floor(Math.random()*5)),
        }
    },
    methods:{
        fetchdata(url){
            fetch(url)
                .then(response => response.json())
                .then(data=>{
                    console.log(data)
                    this.datos=data.entrada
                    }
                );
        }
    },
    created(){
        this.fetchdata(this.url)
    }


}).mount('#app')































// let indice=entrada[Math.floor(Math.random()*entrada.length)];

// document.getElementById(id="plato1").innerHTML= 
//                     `<h2 style="text-align:center";>${entrada[Math.floor(Math.random()*entrada.length)].nombre}</h2>;
//                     <p> ${entrada[Math.floor(Math.random()*entrada.length)].receta} <br></p>`;

