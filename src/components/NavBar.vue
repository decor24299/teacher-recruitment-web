<template>
  <div id="nav-bar">
    <b-nav class="px-3" vertical>
      <div class="branch pt-4 pb-3 text-center">
        <h1>Job<span class="highlight">Now</span></h1>
      </div>
      <div class="section py-3">
        <b-nav-item>
          <b-icon-house-door></b-icon-house-door>
          <span><router-link to="/Home">Home</router-link></span>
        </b-nav-item>
        <b-nav-item>
          <b-icon-receipt></b-icon-receipt>
          <span><router-link to="/branchs">Branchs</router-link></span>
        </b-nav-item>
        <b-nav-item>
          <b-icon-calendar-date></b-icon-calendar-date>
          <span><router-link to="/teachers">Teachers CV</router-link></span>
        </b-nav-item>
        <b-nav-item>
          <b-icon-person></b-icon-person>
          <span><router-link to="/jobs">Jobs</router-link></span>
        </b-nav-item>
        <b-nav-item>
          <b-icon-plus-circle></b-icon-plus-circle>
          <span v-b-toggle.sidebar-variant>Add new +</span>
        </b-nav-item>
      </div>

      <div class="section py-3">
        <b-nav-item>
          <b-icon-power></b-icon-power>
          <span><router-link to="/">Logout</router-link></span>
        </b-nav-item>
      </div>

      <div>
        <b-sidebar id="sidebar-variant" title="Add New Shop" shadow>
          <div class="px-3 py-2">
            <b-card
              title="SHOP IMAGE"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-row>
                <b-col cols="4">
                  <b-img
                    src="https://picsum.photos/300/300/?image=41"
                    fluid
                    alt="Fluid image"
                  ></b-img>
                </b-col>
                <b-col cols="4">
                  <b-img
                    src="https://picsum.photos/300/300/?image=41"
                    fluid
                    alt="Fluid image"
                  ></b-img>
                </b-col>
                <b-col cols="4">
                  <b-img
                    src="https://picsum.photos/300/300/?image=41"
                    fluid
                    alt="Fluid image"
                  ></b-img>
                </b-col>
              </b-row>

              <b-row class="justify-content-center">
                <b-button class="mx-2 mt-4" href="#" variant="primary"
                  >Re-add</b-button
                >
                <b-button class="mx-2 mt-4" href="#" variant="primary"
                  >Delete</b-button
                >
              </b-row>
            </b-card>

            <b-card
              title="SHOP INFO"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-form-group
                id="fieldset-1"
                label="Enter your name"
                label-for="input-1"
                :invalid-feedback="invalidFeedback"
                :valid-feedback="validFeedback"
                :state="state"
              >
                <b-form-input
                  id="input-1"
                  v-model="name"
                  :state="state"
                  trim
                ></b-form-input>
              </b-form-group>
            </b-card>
          </div>
        </b-sidebar>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav-bar /deep/ {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15vw;
  background-color: #348f6c;
  font-size: 1.1em;

  .branch h1 {
    font-size: 2em;

    .highlight {
      color: #fff;
      font-weight: 700;
    }
  }

  .section {
    border-top: 1px solid #d9c791;
  }

  .nav-link span {
    padding-left: 1rem;
  }

  a {
    color: #fff;
  }

  svg {
    color: #d9c791;
  }
}
</style>
