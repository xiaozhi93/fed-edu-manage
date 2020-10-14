<template>
  <section class="page advert-space-create">
    <create-or-edit-advert :isEdit="true"></create-or-edit-advert>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import CreateOrEditAdvert from './components/createOrEditAdvert.vue'
export default Vue.extend({
  name: 'AdvertAdvertEdit',
  components: {
    CreateOrEditAdvert
  }
})
</script>
