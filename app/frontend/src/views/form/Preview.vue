<template>
  <BaseSecure>
    <FormViewer :formId="f" readOnly :versionId="v" />
  </BaseSecure>
</template>

<script>
import FormViewer from '@/components/designer/FormViewer.vue';

export default {
  name: 'FormPreview',
  props: {
    f: String,
    v: String,
  },
  components: {
    FormViewer,
  }
};
</script>
