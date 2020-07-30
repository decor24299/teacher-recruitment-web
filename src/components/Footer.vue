<template>
  <div class="footer">
    <div class="d-flex justify-content-between py-4">
      <div class="col-6">
        <span>Show</span>
        <b-form-select
          class="w-25 ml-2"
          v-model="selected"
          :options="options"
          size="sm"
        ></b-form-select>
        <span class="ml-4">Showing 10/123</span>
      </div>
      <div class="col-6 text-right">
        <b-pagination-nav
          pills
          size="sm"
          number-of-pages="10"
          base-url="#"
          align="right"
          limit="3"
          value="1"
        ></b-pagination-nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
