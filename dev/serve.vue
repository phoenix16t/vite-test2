<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { TestlibSample } from '@/entry.esm';

// export default defineComponent({

export default {
  name: 'ServeDev',
  // components: {
  //  TestlibSample,
  // }
// });
}
</script>

<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <testlib-sample />
  </div>
</template>
