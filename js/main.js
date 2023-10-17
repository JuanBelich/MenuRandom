const { createApp } = Vue

createApp({
    data() {
        return {
            url:"./js/entrada.json",
            url2:"./js/postres.json",
            entrada:[],
            postres:[],
            random:(Math.floor(Math.random()*5)),
        }
    },
    methods:{
        fetchdata(url){
            fetch(url)
                .then(response => response.json())
                .then(data=>{
                    this.entrada=data.entrada
                    }
                );
            },
        // fetchdata(url2){
        //     fetch(url2)
        //         .then(response => response.json())
        //         .then(data2=>{
        //             this.postres=data2.postres
        //             }
        //         );
        //     },
        },
        created(){
        this.fetchdata(this.url)
        // this.fetchdata(this.url2)
    }


}).mount('#app')