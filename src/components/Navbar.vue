<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="Logo">
        </router-link>
        <router-link to="/" >Home</router-link>
        <router-link to="/cadastros" >Cadastros</router-link>
        <router-link to="Planilha">Check Planilha</router-link>
        <router-link to="estoque">Movimentados</router-link>

    </div>
</template>
<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
    
}
</script>
<style scoped>

    #nav {
        background-color: rgb(255, 255, 255);
        padding: 0px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        bottom: 0;
        border-block-end: 2px solid #cec7c7;
    }

    #nav #logo-url  {
        margin: auto;
        margin-left: 0;
        background-color: rgb(255, 255, 255);

    }

    #Logo {
        width: 150px;
        height: 40px;
        margin-top: 10px;
 
    }
    #nav a {
        color: #FCBA03;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    #nav a:hover {
    color: rgb(0, 0, 0);
    }

    

</style>        
