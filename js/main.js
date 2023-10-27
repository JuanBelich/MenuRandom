let entrada=[
    {
        "id": 1,
        "name": "Esparragos en panceta gratinados",
        "description": "Esparragos en panceta gratinados."
    },
    {
        "id": 2,
        "name": "Ensalada tibia de pollo",
        "description": "Ensalada tibia de pollo"
    },{
        "id": 3,
        "name": "Melon con jamon",
        "description": "Melon con jamon."
    },
    {
        "id": 4,
        "name": "Creppes de verdura",
        "description": "Creppes de verdura"
    },
    {
        "id": 5,
        "name": "Ensalada Caesar",
        "description": "Ensalada Caesar"
    },
    {
        "id": 6,
        "name": "Ensalada Waldorf con jamon bocatti",
        "description": "Ensalada Waldorf con jamon bocatti"
    }       
]


let principal=[
    {
        "id":1,
        "name":"Pollo mechado con salsa de mostaza",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
    {
        "id":2,
        "name":"Pollo al provenzal",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
    {
        "id":3,
        "name":"Fetuccinis al verdeo",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
    {
        "id":4,
        "name":"Chop Suey de ternera y arroz",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
    {
        "id":5,
        "name":"Ravioles de salmon en crema de hierbas",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
    {
        "id":6,
        "name":"Entrecorte al roquefort",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
    {
        "id":7,
        "name":"Solomillo de cerdo al Malbec",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
    {
        "id":8,
        "name":"Sorrentinos de jamon y queso con Filetto y albahaca",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
]

let postre=[
    {
        "id":1,
        "name":"Tarta Vianner",
        "description":"Este postre es básico para una vida feliz. La receta se ha adaptado a muchos países cambiando algunos ingredientes y formas de preparación, pero, de todas formas delicioso.Pero, cualquiera que sea la receta, sigue siendo un postre delicioso y es uno de los preferidos."
    },
    {
        "id":2,
        "name":"Gelato",
        "description":"El Gelato es originario de Italia, sin embargo existen gelaterias en muchos países de Latinoamérica y Europa en donde se respetan los originales modos de preparación. Este postre es exquisito y sumamente saludable. Como dicen en Italia: “Un verdadero arte culinario”. La diferencia entre este postre y el helado son los productos. Para preparar gelato se utilizan productos 100% naturales y no tienen tanta grasa ni azúcar como el helado, además son mucho más cremosos. Si aún no has probado un gelato, no dudes en hacerlo y date un gustito"
    },
    {
        "id":3,
        "name":"Tiramisú",
        "description":"Es otro postre frío de origen italiano y está hecho a base de café, licor y crema. Su preparación es sencilla, solo hay que humedecer un bizcocho con una mezcla de café y licor y superponerlo en capas, alternando entre la crema y el bizcocho. Sin embargo existen muchas variantes de acuerdo a los lugares en donde se ha vuelto muy famoso. Y como no, si es realmente delicioso."
    },{
        "id":4,
        "name":"Panna Cotta",
        "description":"Panna Cotta, es un dulce especial de origen italiano, parecido al flan y con una textura suave y gelatinosa. Se considera uno de los postres más fáciles de preparar y también uno de los más famosos en este país. Seguro nunca escuchaste hablar de él, pero si lo pruebas no lo olvidarás nunca."
    }
];

let random=(Math.floor(Math.random()*6));
document.getElementById("entrada").innerHTML=entrada[random].name;
document.getElementById("entrada2").innerHTML=entrada[random].description;

let random2=(Math.floor(Math.random()*8));
document.getElementById("principal").innerHTML=principal[random2].name;
document.getElementById("principal2").innerHTML=principal[random2].description;

let random3=(Math.floor(Math.random()*4));
document.getElementById("postre").innerHTML=postre[random3].name;
document.getElementById("postre2").innerHTML=postre[random3].description;