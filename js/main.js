let entrada=[
    {
        "id": 1,
        "name": "Esparragos en panceta gratinados",
        "description": "Los espárragos siempre fueron reconocidos como un alimento de elite y con un sabor muy delicado. Como toda verdura, tienen muchas formas de cocinarse, en este caso, les presento una receta en donde simplemente los gratinamos y cocinamos en el horno. Una delicia absoluta"
    },
    {
        "id": 2,
        "name": "Ensalada tibia de pollo",
        "description": "La ensalada es una reminiscencia de la famosa ensalada rusa, también conocida como ensalada Olivier, que lleva el nombre del chef franco-belga que la creó."
    },{
        "id": 3,
        "name": "Melon con jamon",
        "description": "El melón con jamón es una especialidad típica de la cocina española, que se encuentra también en Francia e Italia y suele ser servida en los meses de primavera o verano."
    },
    {
        "id": 4,
        "name": "Creppes de verdura",
        "description": "Estas crepes son una forma diferente de presentar la verdura, muy atractiva para que los niños se acostumbren a la presencia de ella dentro de su dieta."
    },
    {
        "id": 5,
        "name": "Ensalada Caesar",
        "description":"Una ensalada César es una ensalada de lechuga romana y croûtons (trozos de pan tostado) con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de Dijon, queso parmesano y pimienta negra."
    },
    {
        "id": 6,
        "name": "Ensalada Waldorf con jamon bocatti",
        "description": "La ensalada Waldorf es un plato que consiste en manzanas ácidas troceadas, frutos secos (en especial nueces), apio - tubérculo, o julianas de repollo blanco con las hojas o troncos del apio picada y mayonesa o algún aliño basado en la mayonesa."
    }       
]


let principal=[
    {
        "id":1,
        "name":"Pollo mechado con salsa de mostaza",
        "description":"falta"
    },
    {
        "id":2,
        "name":"Pollo al provenzal",
        "description":"Técnica de preparación que consiste en incorporar al alimento una mezcla de pan rallado, perejil, ajo picado, aceite de oliva o mantequilla y varias hierbas y especias típicas de la Provenza, de donde viene su nombre, entre las que se encuentran el tomillo, el romero, la albahaca, el orégano, el estragón y la lavanda."
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

let random=(Math.floor(Math.random()*entrada.length));
document.getElementById("entrada").innerHTML=entrada[random].name;
document.getElementById("entrada2").innerHTML=entrada[random].description;

let random2=(Math.floor(Math.random()*principal.length));
document.getElementById("principal").innerHTML=principal[random2].name;
document.getElementById("principal2").innerHTML=principal[random2].description;

let random3=(Math.floor(Math.random()*postre.length));
document.getElementById("postre").innerHTML=postre[random3].name;
document.getElementById("postre2").innerHTML=postre[random3].description;

