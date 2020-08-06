<template>
  <div>
    <ListItem
      v-for="(singleProductData) in listData"
      :key="singleProductData.id"
      :singleProductData="singleProductData"
    />
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm';

const ListItem = Vue.component('ListItem', {
  props: {
    singleProductData: {
      productType: String,
      productName: String,
      price: Number,
    },
  },
  template: `
    <div>
      <li v-if="singleProductData.productType === 'food'">
        {{ singleProductData.productName + "-" + singleProductData.price }}
      </li>
      <li v-else-if="singleProductData.productType === 'fitness'">
        {{ "sale! " + singleProductData.productName + "-" + singleProductData.price }}
      </li>
    </div>
  `,
});

const listData = [
  {
    id: 0, productType: 'food', productName: 'coke', price: 10,
  },
  {
    id: 1, productType: 'food', productName: 'sprite', price: 20,
  },
  {
    id: 2, productType: 'fitness', productName: 'dumbells', price: 15,
  },
  {
    id: 3, productType: 'food', productName: 'ham', price: 30,
  },
];

export default {
  name: 'ConditionalList',
  data() {
    return ({
      listData,
    });
  },
  components: {
    ListItem,
  },
};
</script>
