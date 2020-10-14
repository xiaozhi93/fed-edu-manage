<template>
  <section class="page advert-space-create">
    <create-or-edit-space :isEdit="true"></create-or-edit-space>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import CreateOrEditSpace from './components/createOrEditSpace.vue'
export default Vue.extend({
  name: 'AdvertSpaceCreate',
  components: {
    CreateOrEditSpace
  }
})
</script>
