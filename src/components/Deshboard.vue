<template>
    <div id="table" v-if="cadastros">
        <div id="table-heading">
            <div class="table-large">Filial</div>
            <div class="table-large">Nf</div>
            <div class="table-large">Chegada</div>
            <div class="table-large">Nf da Devolução</div>
            <div class="table-large">Cliente</div>
            <div class="table-large">Observação</div>
            <div class="table-large">Ações</div>
            
        </div>
        <div id="cadastro-table">
            <div class="cadastro-table-itens" v-for="cadastro in cadastros" :key="cadastro.id">
                <div>{{ cadastro.devolucao }}</div>
                <div>{{ cadastro.nf }}</div>
                <div>{{ cadastro.chegada }}</div>
                <div>{{ cadastro.nf_Devolucao }}</div>
                <div>{{ cadastro.cliente }}</div>
                <div >{{ cadastro.observacao }}</div>
                <div class="button">
                  <div class="btn1">
                  <button class="delete-btn" @click="deleteCadastro(cadastro.id)">Remover</button>                    
                  </div>
                  <div class="btn2">
                  <button class="planilha-btn" @click="checkPlanilha(cadastro.id)">Check Planilha</button>                    
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Deshboard",
      data() {
      return {
        cadastros: null,
      }
    },
    methods: {
     
      async getPedidos() {
        const req = await fetch('http://localhost:3000/cadastros')
        const data = await req.json()
        this.cadastros = data 

      },
       // começo do metodo post 
       // isso que esta comentado aqui foi a minha grande vitoria de sabádo
       // codigo feito com tratamento de dado vindo de arquivo json 
       // para ser enviado para outro bd.json
       // agora só falta aplicar a função DELETE na sequencia da função!!!
      
      async checkPlanilha(id) {
        const req = await fetch(`http://localhost:3000/cadastros/${id}`)
        const data = await req.json()
        const dataJson = JSON.stringify(data);
    
        const res = await fetch("http://localhost:3000/planilha", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: dataJson
            
        });
        const re = await fetch(`http://localhost:3000/cadastros/${id}`, {
          method: "DELETE",
          
      });
        const rev = await re.json();
        this.getPedidos() 
      },        
      
        // fim do metodo post
      async deleteCadastro(id) {
        const re = await fetch(`http://localhost:3000/cadastros/${id}`, {
          method: "DELETE",
          

      });
        const res = await re.json();
        this.getPedidos() 
      },
  
    },
    mounted () {
    this.getPedidos()
  },   
}

</script>
<style scoped>

  #table {
    max-width: 1700px;
    margin: 0 auto;
  }

  #table-heading,
  #cadastro-table,
  .cadastro-table-itens {
    display: flex;
    flex-wrap: wrap;
  }

  #table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }
  .cadastro-table-itens  {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }

  #table-heading div,
  .cadastro-table-itens  div {
    width: 14%;
  }


  select {
    padding: 12px 6px;
    margin-right: 12px;
  }

  .delete-btn {
    background-color: #007aff;
    color:#ffffff;
    font-weight: bold;
    border: 1px solid #007aff;
    padding: 5px;
    font-size: 14px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }
  .planilha-btn {
    background-color: #007aff;
    color: #ffffff;
    font-weight: bold;
    border: 1px solid #007aff;
    padding: 5px;
    font-size: 14px;
    margin:  0 auto;
    cursor: pointer;
    transition: .5s;
    white-space: nowrap;
  }
  .planilha-btn:hover {
    background-color: transparent;
    color: #007aff;
    border: 2px solid #007aff;


  }
  
  .delete-btn:hover {
    background-color: transparent;
    color: #007aff;
    border: 2px solid #007aff;
  }
 .btn1 {
    width: 100px;
    height: 100px;
    display: inline-block;
  }
  .btn2 {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-left: 60px;
    }
  .button {
    width: 100px;
    height: 100px;
    display: inline-block;



  }
  

</style>
