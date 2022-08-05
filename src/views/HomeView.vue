<template>
  <div class="home">
    <h1>hello</h1>
      <DataTable :value="products" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
          <Column field="code" header="Code" style="width:20%">
              <template #editor="{ data, field }"> products.data.[code]
                  <InputText v-model="data[field]" autofocus />
              </template>
          </Column>
          <Column field="name" header="Name" style="width:20%">
              <template #editor="{ data, field }">products.data.[name]
                  <InputText v-model="data[field]" />
              </template>
          </Column>
          <Column field="price" header="Price" style="width:20%">
              <template #editor="{ data, field }"> products.data.[price]
                  <InputText v-model="data[field]" />
              </template>
          </Column>
          <Column :rowEditor="true" style="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
      </DataTable>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {data} from '../data/data'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data(){
    return {
      editingRows: [],
      products: null,
    }
  },created() {
        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ];
    },
  methods:{
    // getProducts(){
    //   this.products = data
    // },
    // Use essa função para pegar dados em formato .json e transformá-los em objeto e inseri-los na varíavel desejada
    getProductsApi(){
     return fetch('/src/data/db.json').then(resposta=>resposta.json()).then(dados=> dados.data)
    },
    onRowEditSave(event) {
    let { newData, index } = event;

    this.products[index] = newData;
},
  },mounted(){
    // this.getProducts()
    this.products = this.getProductsApi()
  }
});
</script>
