<template>
  <section class="page course-create">
    <create-or-edit-course :isEdit="true"></create-or-edit-course>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import CreateOrEditCourse from './components/createOrEditCourse.vue'
export default Vue.extend({
  name: 'CourseEdit',
  components: {
    CreateOrEditCourse
  }
})
</script>
