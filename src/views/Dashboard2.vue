<template>
  <div>
    <v-container fluid class="d-flex justify-center align-center fill-height">
      <v-row align="center" justify="start">
        <v-col
          cols="15"
          sm="10"
          md="12"
          class="d-flex justify-center align-center"
        >
        <v-card>
        <router-link to="/dashboard2/flow">
          <v-img
            lazy-src="@/assets/flow.jpg"
            contain
            height="400px"
            width="400px"
            src="@/assets/flow.jpg"
          ></v-img>
          </router-link>
          <v-card-title class="justify-center">
                <h1>FLOW</h1>
          </v-card-title>
          </v-card>
          <v-divider class="mx-10" vertical></v-divider>
          <v-card>
          <router-link to="/dashboard2/nlu">
            <v-img
            lazy-src="@/assets/nlp.png"
            contain
            height="400px"
            width="400px"
            src="@/assets/nlp.png"
          ></v-img>
          </router-link>
          <v-card-title class="justify-center">
                <h1>NLP</h1>
          </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>


export default {
  data() {
    return {}
    }
  }
</script>