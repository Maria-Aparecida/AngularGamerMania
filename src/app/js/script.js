$(document ).ready(function() {
    $("#carrossel img:eq(0)").addClass("bannerAtivo").show()

    setInterval(slide, 1000)



    function slide(){
        if($ (".bannerAtivo").next().length){
            $(".bannerAtivo").removeClass("bannerAtivo").hide().next().addClass("bannerAtivo").show()

        }else{
            $(".bannerAtivo").removeClass().hide()
            $("#carrossel img:eq(0)").addClass("bannerAtivo").show()
        }

    }



    $("#barras").click(function(){
        // $("#menu").addClass("menuAtivo")

        $("#menu").toggleClass("menuAtivo")

        // if($("#menu").hasClass("menuAtivo")){
        //     $("#menu").removeClass("menuAtivo")
        // }else{
        //     $("#menu").addClass("menuAtivo")

        // }
    })
})





let email = document.getElementById("campo_email");
let senha = document.getElementById("campo_senha");

// function mostrarPopUp(){
//     window.alert("Hello World")
// }

function enviarEmail() {
    let emailDigitado = email.value;
    let senhaDigitada = senha.value;
    console.log(emailDigitado,senhaDigitada )
}

// function renderizarPromocao (){
//     let espaco = document.getElementById("espaco_promocao")

//     let listaPromocao = [
//         {
//            titulo: "Notebook Dell",
//            descricao:"Processador Intel®Core™ i5-10210U 1.60 GHz (com Intel® Turbo Boost até 4.20 GHz), 6MB Cache, 4 Núcleos, 8 Threads Sistema Operacional Windows 10 Home. ",
       
//        },
//        {
//            titulo: "Notebook mac",
//            descricao:"Processador Intel®Core™ i5-10210U 1.60 GHz (com Intel® Turbo Boost até 4.20 GHz), 6MB Cache, 4 Núcleos, 8 Threads Sistema Operacional Windows 10 Home. ",
       
//        },
//        {
//            titulo: "Notebook vaio",
//            descricao:"Processador Intel®Core™ i5-10210U 1.60 GHz (com Intel® Turbo Boost até 4.20 GHz), 6MB Cache, 4 Núcleos, 8 Threads Sistema Operacional Windows 10 Home. ",
       
//        }
       
//        ]

//     let template =" ";

//     for (let index = 0; index < listaPromocao.length; index++) {
//         const promocao = listaPromocao[index];


        
//         template +=` <div class="cardnews">
//         <img src="img/console1.jpg" alt="Foto do computador da esquerda">
//         <h3>${promocao.titulo}</h3>
//         <p>${promocao.descricao}</h3>
       
//         <p>jjkkdjffjjdjfkorrklwçlweleleelelçmcmcjjhfryrfhfhh</p>

//     </div>`


    
//     }
//     console.log(espaco.innerHTML)
//     espaco.innerHTML = template;
// }
function renderizarPromocao() {
    let espaco = document.getElementById("espaco-promocao");

    let listaNoticias = [
        {
            
            titulo: "Notebook Dell",
            imagem:"img/notebook.jpg",
            descricao:" Notebook 2 em 1 Dell Inspiron 5406-M20S 14 Touch 11ª Geração."
             },
        {
           
            titulo: "iMac",
            imagem: "img/pc.jpg",
            descricao:" iMac de 21.5 polegadas tem uma brilhante tela widescreen."
        },

        {
            
            titulo: "Xbox",
            imagem: "img/xbox.jpg",
            descricao:" Consoles da geração atual, sendo PS5 ou Xbox Series X/S."
             },
            {
            titulo: "Apex Legends",
            imagem:"img/apex1.jpg",
            descricao:"O jogo é um dos mais bem conceituados pelos jogadores."
                 },
            {
               
            titulo: "PS4 ",
            imagem: "img/console1.jpg",
            descricao: "Toda a qualidade gráfica do PS4 com um design aprimorado."
            },
    
            {
                
            titulo: "Black Friday",
            imagem: "img/blackfriday.jpg",
            descricao:"Se você esperou novembro chegou o black friday."
                 }
            
    ]

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];

        console.log("Noticia")

        template += `<div class="card">
            <h3>${noticia.titulo}</h3>
             <img src="${noticia.imagem}" alt="#">
            
            <p>${noticia.descricao}</p>
        </div>`
    }

    // console.log(espaco.i nnerHTML)

    espaco.innerHTML = template;

}
