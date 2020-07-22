<template>
  <div>
    <!-- <dynamic-comp-empty v-html="'A. no warn'" /> -->

    <!-- <dynamic-comp-empty v-html="'<div>B. no warn</div>'" /> -->

    <!-- <dynamic-comp-content v-html="'C. no warn'" /> -->

    <!-- <dynamic-comp-content v-html="'<div>D. warn</div>'" /> -->

    <dynamic-comp-wrapped v-html="'E. warn'" />

    <!-- <dynamic-comp-wrapped v-html="'<div>F. no warn</div>'" /> -->
  </div>
</template>

<script>
import DynamicCompEmpty from '@/components/DynamicCompEmpty';
import DynamicCompContent from '@/components/DynamicCompContent';
import DynamicCompWrapped from '@/components/DynamicCompWrapped';

export default {
  components: {
    DynamicCompEmpty,
    DynamicCompContent,
    DynamicCompWrapped
  }
}
</script>
