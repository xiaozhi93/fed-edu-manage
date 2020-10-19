<template>
  <section class="page edit-menu">
    <create-or-edit :isEdit="true"></create-or-edit>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import CreateOrEdit from './components/CreateOrEdit.vue'
export default Vue.extend({
  name: 'EditMenu',
  components: {
    CreateOrEdit
  }
})
</script>
