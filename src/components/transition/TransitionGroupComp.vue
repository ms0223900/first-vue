<template>
  <div style="padding: 20px;">
    <button @click="handleAddRandListItem">
      Add a list item
    </button>
    <transition-group tag="ol" name="my-list">
      <li v-for="singleData in listData" :key="singleData.id">
        {{ singleData.text }}
      </li>
    </transition-group>
  </div>
</template>

<script>
const listData = [
  { id: 0, text: 'aa00', value: 0 },
  { id: 1, text: 'aa01', value: 20 },
  { id: 2, text: 'aa02', value: 30 },
  { id: 3, text: 'aa03', value: 40 },
  { id: 4, text: 'aa04', value: 50 },
];

const makeSingleData = (val) => ({
  id: val,
  text: `aa0${val}`,
  value: val * 10,
});

export default {
  name: 'TransitionGroupComp',
  data() {
    return ({
      listData,
    });
  },
  methods: {
    handleAddRandListItem() {
      // eslint-disable-next-line no-bitwise
      const rand = ~~(Math.random() * 100);
      const newItem = makeSingleData(rand);
      const newListData = [
        ...this.listData,
        newItem,
      ];
      this.listData = newListData;
    },
  },
};
</script>

<style scoped>
.my-list-enter-active, .my-list-leave-active {
  transition: all 1s;
}
.my-list-enter, .my-list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
