<template>
  <div class="tm01 mt-4">
    <b-row>
      <b-col v-for="n in 12" :key="n" class="mb-5" cols="3">
        <b-card>
          <b-avatar
            class="mb-3"
            rounded
            size="5em"
            variant="info"
            src="/img/teacher-1.6b08c264.jpg"
          ></b-avatar>

          <b-card-title class="font-weight-bolder">Tony Stark</b-card-title>
          <b-card-sub-title>UX Designer</b-card-sub-title>

          <div class="my-3 badges">
            <b-badge href="#" class="mr-2 px-3 font-weight-light" variant="danger">html</b-badge>
            <b-badge href="#" class="mr-2 px-3 font-weight-light" variant="warning"
              >javascript</b-badge
            >
            <b-badge href="#" class="mr-2 px-3 font-weight-light" variant="danger"
              >python</b-badge
            >
            <b-badge href="#" class="mr-2 px-3 font-weight-light" variant="warning">css</b-badge>
            <b-badge href="#" class="px-3 font-weight-light" variant="warning">sass</b-badge>
          </div>

          <b-button class="mr-2" variant="primary">Connect</b-button>
          <b-button variant="primary">Save</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '8',
      options: [
        { value: '8', text: '8/page' },
        { value: '10', text: '10/page' },
        { value: '12', text: '12/page' },
        { value: '14', text: '14/page' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tm01 {
  .badges {
    font-size: 2.5vmin;
  }
}
</style>
