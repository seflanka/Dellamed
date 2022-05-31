<template>
    <div id="main-banner">
        <form id="cadastro-form" @submit="createDevolucao">
            <h1>Cadastro Devolução</h1>
                <div id="input-container">
                    <label for="devolucao">Filial:</label>
                    <select name="devolucao" id="devolucao" v-model="devolucao">
                        <option v-for="devolucao in devolucoes" :key="devolucao.id" :value="devolucao.tipo">
                            {{ devolucao.tipo }}
                        </option>
                    </select>
                </div>
                <div id="input-container">
                    <label for="nf">Nota Fiscal:</label>
                    <input type="text" id="nf" name="nf" v-model="nf" placeholder="Nota fiscal">
                </div>
                <div id="input-container">
                    <label for="chegada">Data de Recebimento:</label>
                    <input type="text" id="chegada" name="chegada" v-model="chegada" placeholder="Data de recebimento">
                </div>
                <div id="input-container">
                    <label for="nf_Devolucao">NF da Devolução</label>
                    <input type="text" id="nf_Devolucao" name="nf_Devolucao" v-model="nf_Devolucao" placeholder="NF de devolução">
                </div>
                <div>
                    <label for="cliente">Nome do cliente</label>
                    <input type="text" id="cliente" name="cliente" v-model="cliente" placeholder="Nome do cliente">
                </div>
                <div id="input-container">
                    <label for="observacao">Observações</label>
                    <input type="text" id="observacao" name="observacao" v-model="observacao" placeholder="observacao">
                </div>
                 <div class="input-cadastro">
                    <input type="submit" class="submit-btn" value="Cadastrar Devolução">
                </div>
        </form>
    </div>
</template>
<script>


export default {
    name: "Cadastro",
    data() {
        return {
            devolucoes: null,
            devolucao: null,
            nf: null,
            chegada: null,
            nf_Devolucao: null,
            cliente: null,
            observacao: null,
        }
    
    },

    methods: {

        //Pega as matrizes da dellamed e joga no select - ex: Olist, Casa Saúde...
        async getFormulario () {
            const req = await fetch("http://localhost:3000/formulario");
            const data = await req.json();
            this.devolucoes = data.devolucoes
        },

        //Pega as informações do input e joga no db.json com o metodo POST
        async createDevolucao(e) {
            e.preventDefault();
            const data = {
                devolucao: this.devolucao,
                nf: this.nf,
                chegada: this.chegada,
                nf_Devolucao: this.nf_Devolucao,
                cliente: this.cliente,
                observacao: this.observacao
                
            }
            const dataJson = JSON.stringify(data);
    
            const req = await fetch("http://localhost:3000/cadastros", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: dataJson
            });
            const res = await req.json();
            //limpar os campos
            this.devolucao = "";
            this.nf = "";
            this.chegada = "";
            this.nf_Devolucao = "";
            this.cliente = "";
            this.observacao = "";
            
            
        },
        
    },
                
    //Monta a aplicação.
    mounted() {
        this.getFormulario();
    },
}

</script>
<style scoped>
    #main-banner {
        background-position: 50%;
        background-size: cover;
        height: 650px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #main-banner h1 {
        color: #FFF;
        text-align: center;
        font-size: 40px;
        background-color: #007aff;
        padding: 1px 10px;
        margin: 10px;
    }

    #cadastro-form {
        max-width: 400px;
        margin: 0 auto;
        background: #ffffff;
        
    }
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        padding: 5px 10px;
        background: #FFF;

    }
    .input-cadastro {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        padding: 5px 10px;
        background: #FFF;

    }    
    label {
        font-weight: bold;
        margin-bottom: 30px;
        color: #222;
        padding: 4px 5px;
        border-left: 4px solid #007aff;
        background: #FFF;
        margin: 5px;
        
        
        
    }
    input, select {
        padding: 5px 10px;
        width: 500px;
        max-width: 400px;
        background: #FFF;
        margin: 5px;

    }
    #opcionais-container {       
        flex-direction: row;
	    flex-flow: wrap;
        
    }
    #opcionais-title {
        width: 100%;
        
        
    }
    #checkbox-container {
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
        
    }

    .checkbox-container span {
        margin-left: 6px;
        font-weight: bold;
        width: auto;
        flex-wrap: wrap;
        
    }
    .checkbox-container input {
        width: auto;
        flex-wrap: wrap;
        margin-left: 15px;
        margin-top: 15px;
        

    }

    .submit-btn {
        background-color: #007aff;
        color: #ffffff;
        font-weight: bold;
        border: 1px solid #007aff;
        padding: 10px;
        font-size: 19px;
        margin: 1 auto;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover {
        background-color: transparent;
        color: #007aff;
    }

</style>