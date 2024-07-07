<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="currentView = 'Main'" :icon="'mdi-home'">
        </v-app-bar-nav-icon>
      </template>
      <v-toolbar-title v-if="lgAndUp" class="d-flex">
        <v-btn text @click="currentView = 'Main'"><h2>Jared Sauve</h2> </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="currentView = 'About'">About Me</v-btn>
      <v-btn text @click="currentView = 'Blog'">Blog</v-btn>
      <v-btn text @click="currentView = 'Contact'">Contact</v-btn>
    </v-app-bar>
    <v-main class="bg-secondary">
      <component v-model="currentView" :is="components[currentView]" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import About from "./views/About.vue";
import Blog from "./views/Blog.vue";
import Contact from "./views/Contact.vue";
import Main from "./views/Main.vue";
import { useDisplay } from "vuetify";

const { lgAndUp, lgAndDown } = useDisplay();
const currentView = ref("Main");

const components = {
  Main,
  About,
  Blog,
  Contact,
};
</script>

<style>
@import "vuetify/styles";
</style>
