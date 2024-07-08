<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <v-row dense class="flex-column">
          <v-col class="text-h2 pb-6">About Me</v-col>
          <v-col class="text-body-1 pb-8">{{ about.About }}</v-col>
          <v-col class="text-h4">Education</v-col>
          <v-col class="text-body-1 pb-8">{{ about.Education }}</v-col>
          <v-col class="text-h4">Conclusion</v-col>
          <v-col class="text-body-1 pb-6">{{ about.FIN }}</v-col>
          <v-col cols="auto"
            ><v-btn
              :prepend-icon="'mdi-file-document-outline'"
              :href="'/Jared_Sauve_Resume.pdf'"
              target="_blank"
              :download="'Jared Resume'"
              ><v-icon color="primary"></v-icon> Resume
            </v-btn></v-col
          >
        </v-row>
      </v-col>
      <v-col class="align-center">
        <v-img max-height="600" :src="'/photos/About.jpg'"> </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import * as about from "@/data/About.json";
import { useDisplay } from "vuetify";
const { lgAndUp, lgAndDown } = useDisplay();
</script>
