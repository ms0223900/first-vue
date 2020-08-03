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
      <!-- <keep-alive include="BasicInput"> -->
      <BasicInput
        v-for="(input, index) in inputListData"
        :key="index"
        v-show="stepNow === index"
        :placeholder="inputListData[index].placeHolder"
        :inputValue="inputListData[index].value"
        :onChange="handleChangeInput(index)"
      />
      <!-- <BasicInput
      />
      <BasicInput
        v-if="stepNow === 1"
        :placeholder="inputListData[1].placeHolder"
        :value="inputListData[1].value"
      /> -->
      <!-- </keep-alive> -->
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
  { placeHolder: 'width', value: '0' },
  { placeHolder: 'height', value: '0' },
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
    handleSend() {
      const str = `width: ${inputListData[0].value}, height: ${inputListData[1].value}`;
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
