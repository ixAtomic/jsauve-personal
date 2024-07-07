<template>
  <v-container class="pb-0 fill-height">
    <v-row
      v-if="lgAndUp"
      no-gutters
      class="d-flex fill-height justify-center pb-0"
    >
      <v-col class="d-flex justify-center align-self-center pb-0">
        <v-row dense class="d-flex flex-column">
          <v-col class="text-h4">Jared Sauve</v-col>
          <v-col class="text-body-1">Software Engineer</v-col>
          <v-col class="text-h2 pb-3">
            I Am A Talented Full-Stack Engineer From Michigan
          </v-col>
          <v-col>
            <v-btn @click="model = 'Contact'" color="info" width="125"
              >Contact Me</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-img
        class="align-self-end"
        max-height="800"
        :src="'/public/photos/main.png'"
      ></v-img>
    </v-row>

    <v-row
      v-else
      no-gutters
      class="fill-height d-flex flex-column justify-center"
    >
      <v-col class="d-flex justify-center pb-0">
        <v-row no-gutters class="d-flex flex-column text-center">
          <v-col class="text-h4">Jared Sauve</v-col>
          <v-col class="text-body-1">Software Engineer</v-col>
          <v-col class="text-h5 pb-2">
            I Am A Talented Full-Stack Engineer From Michigan
          </v-col>
          <v-col>
            <v-btn @click="model = 'Contact'" color="info" width="125"
              >Contact Me</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-flex justify-center pb-0">
        <v-img
          max-height="750"
          max-width="750"
          :src="'/photos/main.png'"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
const model = defineModel();

const { lgAndUp, lgAndDown } = useDisplay();
</script>

<style scoped></style>
