<template>
  <v-app>
    <v-app-bar app color="#E61D2B" dark>
      
      <div class="d-flex align-center">
        <h2>Secret Santa 2021</h2>
        <v-icon
          dark
          right
        >
          mdi-wizard-hat
        </v-icon>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Santa />
    </v-content>
  </v-app>
</template>

<script>
import Santa from "./components/Santa";
export default {
  name: "App",
  components: {
    Santa,
  },
  data: () => ({}),
};
</script>
