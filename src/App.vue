<template>
    <div>
        <Navbar :logo="logo_Dellamed" :alt="app_name"/>

        <Footer />
    </div>
    <router-view/>
    
</template>
<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
    components: {
        Footer,
        Navbar
    },
    data() {
        return {
            app_name: "Dellamed",
            logo_Dellamed: "./img/logo_Dellamed.png"
        }
    }
}
</script>
<style>
*{
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    

  }
  .main-container {
    margin: 50px;
    min-height:250px;  
  }
  h1 {
    text-align: center;
    font-size: 42;
    margin-bottom: 32;
    color: #222;
  }
</style>