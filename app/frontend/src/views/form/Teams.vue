<template>
  <BaseSecure>
    <h1 class="my-6 text-center">Team Management</h1>
    <TeamManagement :formId="f" />
  </BaseSecure>
</template>

<script>
import TeamManagement from '@/components/forms/TeamManagement.vue';

export default {
  name: 'FormTeams',
  components: {
    TeamManagement,
  },
  props: {
    f: {
      type: String,
      required: true,
    },
  }
};
</script>
