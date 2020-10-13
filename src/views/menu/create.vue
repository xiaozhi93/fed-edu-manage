<template>
  <section class="page create-menu">
    <create-or-edit></create-or-edit>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import CreateOrEdit from './components/CreateOrEdit.vue'
export default Vue.extend({
  name: 'CreateMenu',
  components: {
    CreateOrEdit
  }
})
</script>
