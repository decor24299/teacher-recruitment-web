<template>
  <div class="h-100">
    <b-row class="h-100">
      <b-col cols="8">
        <b-card v-for="n in 5" :key="n" no-body class="mb-4 overflow-hidden">
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="10">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col class="h-100 test" cols="4">
        <b-card
          v-for="n in 10"
          :key="n"
          title="Card Title"
          align="center"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 ml-auto"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.test {
  overflow-y: scroll;
}

.test::-webkit-scrollbar {
  display: none;
}
</style>
