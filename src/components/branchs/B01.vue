<template>
  <div>
    <b-row v-for="n in 4" :key="n" class="mt-3">
      <b-col cols="4">
        <b-card class="text-left">
          <b-card-title>FPT Ho Chi Minh</b-card-title>

          <b-card-text class="mt-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <div>
            <b-icon-star></b-icon-star>
            <b-icon-star class="ml-2"></b-icon-star>
            <b-icon-star class="ml-2"></b-icon-star>
            <b-icon-star class="ml-2"></b-icon-star>
            <b-icon-star class="ml-2"></b-icon-star>
            <span class="ml-2">(40 rates)</span>
          </div>

          <div class="mt-4">
            <b-button class="mr-2 btn-custom">Edit</b-button>
            <b-button class="btn-custom">Delete</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col cols="8">
        <b-row class="py-4">
          <b-col class="text-left" cols="6">
            Jobs
          </b-col>
          <b-col class="text-right" cols="6">
            <router-link to="/Discounts">See all ></router-link>
          </b-col>
        </b-row>
        <carousel :items="6" :margin="15" :nav="false" :dots="false">
          <b-avatar v-for="n in 6" :key="n"
            rounded
            size="10rem"
            src="/img/discount-4.c5136f32.gif"
          ></b-avatar>
        </carousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel2';

export default {
  components: {
    carousel,
  },
};
</script>

<style scoped>
.btn-custom {
  background-color: #348f6c;
}
</style>
