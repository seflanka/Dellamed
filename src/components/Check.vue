<template>
    <div id="table" v-if="planilhas">
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
            <div class="cadastro-table-itens" v-for="planilha in planilhas" :key="planilha.id">
                <div>{{ planilha.devolucao }}</div>
                <div>{{ planilha.nf }}</div>
                <div>{{ planilha.chegada }}</div>
                <div>{{ planilha.nf_Devolucao }}</div>
                <div>{{ planilha.cliente }}</div>
                <div>{{ planilha.observacao }}</div>
                <div class="button">
                  <div class="btn1">
                  <button class="delete-btn" @click="deleteCadastro(planilha.id)">Remover</button>                    
                  </div>
                  <div class="btn2">
                  <button class="delete-btn" @click="enviarEstoque(planilha.id)">Movimentar</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Check",
      data() {
      return {
        planilhas: null,
      }
    },
    methods: {
     
      async getPedidos() {
        const req = await fetch('http://localhost:3000/planilha')
        const data = await req.json()
        this.planilhas = data 

      },
       // começo do metodo post 
       // Busca o produto pelo ID e transforma em Json
      async enviarEstoque(id) {
        const req = await fetch(`http://localhost:3000/planilha/${id}`)
        const data = await req.json()
        const dataJson = JSON.stringify(data);
      // Manda um metodo POST para o DB "estoque"
        const rep = await fetch(`http://localhost:3000/estoques`,{
          method: "POST",
          headers: {"content-type": "application/json"},
          body: dataJson
        });
      // Usa o metodo "DELETE" numa operação async, que nada mais é..
      // Um aguardo do metodo post para depois remover o item do BD planilha.
        const re = await fetch(`http://localhost:3000/planilha/${id}`, {
          method: "DELETE",
          
      });
      // usa o metodo getPedidos para atualizar a planilha
        const rev = await re.json();
        this.getPedidos() 



      },      
      // fim do metodo post
      async deleteCadastro(id) {
        const req = await fetch(`http://localhost:3000/planilha/${id}`, {
          method: "DELETE",
          

      });
        const res = await req.json();
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
