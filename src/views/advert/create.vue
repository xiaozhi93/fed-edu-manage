<template>
  <section class="page advert-space-create">
    <create-or-edit-advert :isEdit="false"></create-or-edit-advert>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import CreateOrEditAdvert from './components/createOrEditAdvert.vue'
export default Vue.extend({
  name: 'AdvertCreate',
  components: {
    CreateOrEditAdvert
  }
})
</script>
