<template>
  <v-container class="fill-height">
    <v-row class="justify-start align-start">
      <v-col>
        <v-row class="flex-column">
          <v-col class="text-h2">Contact</v-col>
          <v-col cols="6" class="text-body-1">{{ contact.Contact }}</v-col>
          <v-col
            v-for="(contactType, index) in contact.ContactTypes"
            :key="index"
            class="text-body-1"
          >
            <div v-for="(value, key) in contactType" :key="key">
              <strong>{{ key }}:</strong> {{ value }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import * as contact from "../../public/Contact.json";
</script>
