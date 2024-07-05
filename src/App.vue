<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Website</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="currentView = 'About'">About Me</v-btn>
      <v-btn text @click="currentView = 'Blog'">Blog</v-btn>
      <v-btn text @click="currentView = 'Contact'">Contact</v-btn>
    </v-app-bar>
    <v-main>
      <component :is="components[currentView]" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import About from './components/About.vue';
import Blog from './components/Blog.vue';
import Contact from './components/Contact.vue';

const currentView = ref('About');

const components = {
  About,
  Blog,
  Contact
};
</script>

<style>
@import 'vuetify/styles';
</style>
