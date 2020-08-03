/* eslint-disable import/no-useless-path-segments */
<template>
  <div>
    <TabItem
      v-for="(singleTabData, index) in tabs"
      :key="index"
      :index="index"
      :tabText="singleTabData"
      :isActivated="stepNow===index"
      :onChangeTab="handleChangeTab"
    />
    <div>
      <template
        v-for="(input, index) in inputListData"
      >
      <BasicInput
        :key="index"
        v-show="stepNow === index"
        v-model="inputListData[index].value"
        :inputValue="inputListData[index].value"
        :unit="inputListData[index].unit"
        :placeholder="inputListData[index].placeHolder"
      />
      </template>
    </div>
    <div>
      {{ widthAndHeight }}
    </div>

    <ButtonWrapper
      :onClick="handleSend"
    >
      <template v-slot:button-text>
        <h2>Send :)</h2>
      </template>
    </ButtonWrapper>
  </div>
</template>

<script>
import TabItem from './Tab/TabItem.vue';
import BasicInput from './Tab/BasicInput.vue';
import ButtonWrapper from './ButtonWrapper.vue';

const tabs = [
  'Step 1.',
  'Step 2.',
];

const inputListData = [
  { placeHolder: 'width', value: '0', unit: 'meter(w)' },
  { placeHolder: 'height', value: '0', unit: 'meter(h)' },
];
export default {
  name: 'SimpleForm',
  data() {
    return {
      stepNow: 0,
      tabs,
      inputListData,
    };
  },
  computed: {
    checkIsActivated(index, i) {
      return index === i;
    },
    widthAndHeight() {
      const str = `width: ${inputListData[0].value}, height: ${inputListData[1].value}`;
      return str;
    },
  },
  methods: {
    handleChangeTab(tabIndex) {
      this.stepNow = tabIndex;
    },
    handleChangeInput(i) {
      return (e) => {
        this.inputListData[i].value = e.target.value;
      };
    },
    input(e) {
      console.log(e);
    },
    handleSend() {
      const str = this.widthAndHeight;
      window.alert(str);
    },
  },
  watch: {
    inputListData(val, prevVal) {
      console.log(val, prevVal);
    },
  },
  components: {
    TabItem,
    BasicInput,
    ButtonWrapper,
  },
};
</script>
