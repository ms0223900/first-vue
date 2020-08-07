<template>
  <div>
    <SimpleForm />
    <hr />
    <h4>v-for</h4>
    <ConditionalList />
    <hr />
    <PreSample />
    <hr />
    <h4>Ref</h4>
    <CustomCompRef />
    <hr />
    <h4>Is</h4>
    <IsComp />
    <hr />
    <h4>Transition</h4>
    <TransitionComp />
    <TransitionGroupComp />
    <hr />
    <h4>Keep Alive</h4>
    <KeepAliveComp />
  </div>
</template>

<script>
import SimpleForm from '../SimpleForm.vue';
import PreSample from '../PreSample.vue';
import CustomCompRef from '../ref-sample/CustomCompRef.vue';
import IsComp from '../is-sample/IsComp.vue';
import TransitionComp from '../transition/TransitionComp.vue';
import TransitionGroupComp from '../transition/TransitionGroupComp.vue';
import KeepAliveComp from '../keep-alive-sample/KeepAliveComp.vue';
import ConditionalList from '../v-for-if-sample/ConditionalList.vue';

export default {
  name: 'App',
  data() {
    return {
      clicked: 0,
    };
  },
  components: {
    SimpleForm,
    PreSample,
    CustomCompRef,
    IsComp,
    TransitionComp,
    TransitionGroupComp,
    KeepAliveComp,
    ConditionalList,
    // RouterPage,
  },
};
</script>
