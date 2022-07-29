<template>
<div class="div-content"> <!-- Red -->
    <div class="content-menu"> <!-- Blue -->
        <div class="div-paper"> <!-- Green-->
          <img alt="Vue logo" class="paper" src="../assets/paper.jpg">
        </div>
        <div class="container-menu-img-nome"> <!-- Pink -->
            <div class="container-nome-img"> <!-- Amarelo -->
                <div class="content-nome-img"> <!-- Logo e nome do restarante-->
                    <div class="content-img">
                      <img class="logo-edit" src="../assets/logo.jpg" alt="">
                    </div>
                    <div class="content-name">
                        <span class="name-edit"><h3>Pastel do Bom</h3></span>
                    </div>
                </div>
            </div>
            <div class="conainer-menu">
                
            </div>    
        </div>
    </div>
    <div class="container-produdos"> <!-- BLACK -->
        <div class="content-produtos">
            <div class="container-img">
                <div class="imagem">
                    <img class="img"  src="../assets/lanche.jpg" alt="">                 
                </div>
            </div>
            <div class="content-nome">
                <div class="nome">
                    <span class="nome-produto">
                        Hot Dog de Frango
                    </span>
                </div>
            <div class="content-preco">
                <div class="preco">
                    <span class="span-preco">
                        R$ 5,00
                    </span>
                </div>
            </div>
            </div>             
        </div>
        <hr data-v-48b94ae6="" role="separator" aria-orientation="horizontal" class="linha-horizontal">
    </div>
</div>
</template>
<script>

</script>
<style scoped>
* {
    padding: 0px;
    margin: 0 auto;
    position: center;
    min-width: 300px;
    max-width: 100vh;
    
}

.div-content {
    position: relative;
    display: block;
    min-width: 10%;
    max-width: 100%;
    height: 100vh;
    padding: 0;
    margin-right: 0px;
    margin-left: 0px;
    object-fit: cover;
}



/* HEADER --> CAPA, LOGO E MENU */
.content-menu {
    position: relative;
    display: block;
    padding: 0px;
    margin: 0px;
    height: 170px;
    min-width: 10%;
    max-width: 100%;
    height: 183px;
    
}

.div-paper {
    position: relative;
    display: block;
    padding: 0px;
    margin: 0px;
    height: 90px;
    min-width: 10%;
    max-width: 100%;
}

.paper {
    position: relative;
    display: block;
    height: 90px;
    padding: 0px;
    margin: 0px;
    min-width: 10%;
    min-width: 90%;
    max-width: 100%;
    max-height: 100%;
    z-index: -2;
}

.container-menu-img-nome {
    position: relative;
    display: block;
    height: 80.35px;
    min-width: 10%;
    max-width: 100%;
    margin: 0px;
    padding: 0px;
}


/* Logo e nome do restaurante*/

.container-nome-img {
    
    position: static;
    display: block;
    padding: 8px 12px 8px 12px;
    height: 22.35px;
    min-width: 10%;
    max-width: 100%;
    float: none;
    
}

.content-nome-img {
    position: relative;
    display: block;
    padding: 0px;
    margin: 0px;
    min-width: 10%;
    max-width: 100%;
}

.content-img {
    display: block;
    padding: 0px;
    border: 0px;
    margin: 0px;
    position: static;
    z-index: auto;
}

.logo-edit {
    position: absolute;
    max-width: 80px;
    min-width: 80px;
    top: -54px;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    display: block;
    border-bottom: 2px solid rgb(148, 141, 141);
    box-sizing: border-box;
    float: none;
    z-index: -1;
}

.content-name {
    position: relative;
    display: block;
    min-width: 10%;
    max-width: 100%;
}

.name-edit {
    position: relative;
    display: block;
    padding: 0px 0px 0px 92px;
    max-width: 100%;
    min-width: 10%;
    font-family: Arial, Helvetica, sans-serif;
}
/* fIM DO CONTARINER DAS DIVS DO HEADER*/


/* DIV CONTENT DE PRODUTOS CADASTRADOS*/

.container-produdos {
    position: relative;
    display: block;
    max-width: 100%;
    min-width: 10%;
    height: 100vh;
    padding: 0px 12px 0px 12px;
}

/* ESTILOS DA IMAGEM */

.content-produtos {
    position: relative;
    display: flex;
    margin: 0px;
    min-height: 91px;
    max-height: 91px;
    min-width: 10%;
    max-width: 100%;
    padding: 12px 0px 12px 0px;

}

.container-img {
    position: relative;
    display: flex;
    cursor: pointer;
    min-width: 90px;
    max-width: 100%;
    min-height: 90px;
    max-height: 90px;
    margin: 0px 12px 0px 0px;
}

.imagem {
    position: block;
    min-width: 80px;
    max-width: 80px;
    min-height: 80px;
    max-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 0px 0px 0px;
}

.img {
    position: block;
    display: inline-block;
    max-width: 80px;
    min-width: 80px;
    max-height: 80px;
    min-height: 80px;
    background-position: center;
    background-size: cover;
    float: none;
    border-radius: 5px;
    margin: 0px 0px 0px 0px;
}

.content-descricao {
    position: relative;
    border: 1px solid mediumpurple;
    min-width: 10px;
    max-width: 10px;
    max-width: 100%;
    min-height: 90px;
    max-height: 90px;
    display: inline-block;
}

.content-nome {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0px;
}


.nome {
    display: inline-block;
    position: static;
    height: 16.8px;
    width: 100%;
    float: none;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin: 0px;
}

.nome-produto {
    display: flex;
    cursor: pointer;
    position: static;
    margin: auto;
    font-size: 16px!important;
    line-height: 1.2 !important;
    width: 100%;
    height: 16.8px;
}

.content-preco {
    position: relative;
    display: flex;
    margin: 0px;
    flex-wrap: wrap;
    height: 21px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

}

.preco {
    display: flex;
    position: static;
    margin: 0px;
    font-size: 18px;
    line-height: 1.2;
    width: 100%;
    height: 21px;


}

.span-preco {
    display: inline-block;
    position: relative;
    float: none;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: space-between!important;
    color: #f51414;
    height: 21px;
    width: 100%;
} 

.linha-horizontal {
    border-color: rgba(0,0,0,.12);
}

</style>
