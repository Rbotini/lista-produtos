<template>

  <div id="app">
    <nav class="navbar navbar-dark bg-dark" style="height: 80px;">
      <div class="container-fluid" style="padding-left: 1rem;">
        <a class="navbar-brand" href="#" style="font-size: 1.5rem;padding:10px;">

          <h2>Lista
            de
            Produtos
          </h2>

        </a>
        <button type="button" class="btn btn-light">Novo Produto</button>
      </div>
    </nav>
    <section style="padding: 2%;">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nome</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto of produtos" :key="produto.id">
            <th scope="row" style="font-weight: bold;color: #10002b;">{{produto.id}}</th>
            <td style="font-weight: bold;color: #3a0ca3;">{{produto.nome}}</td>
            <td style="font-weight: bold;color: #3a0ca3;">{{produto.quantidade}}</td>
            <td style="font-weight: bold;color: #3a0ca3;">{{produto.valor}}</td>
            <td>
              <button type="button" class="btn btn-light" style="margin-right: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                  class="bi bi-pencil-fill" viewBox="0 0 16 16" style="color: #fb8500;">
                  <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </button>
              <button type="button" class="btn btn-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                  class="bi bi-trash-fill" viewBox="0 0 16 16" style="color: #d90429;">
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </section>


  </div>
</template>

<script>

  import Produto from './service/produtos'

  export default {

    data() {
      return {
        produtos: []
      }
    },

    mounted() {
      Produto.listar().then(resposta => {
        console.log(resposta.data)
        this.produtos = resposta.data
      })
    }
  }


</script>

<style>

</style>