<template>
  <div>
    <FormViewer :formId="f" />
  </div>
</template>

<script>
import FormViewer from '@/components/designer/FormViewer.vue';

export default {
  name: 'FormSubmit',
  components: {
    FormViewer,
  },
  props: {
    f: String
  },
};
</script>
