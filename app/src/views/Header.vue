<template>
    <v-app>
        <v-app-bar app>
        Panel Admina
        </v-app-bar>
    <div>
    <v-card class="theme--dark mt-16">
      <v-navigation-drawer permanent height="93vh">
        <v-list>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Witaj Adam
              </v-list-item-title>
              <v-list-item-subtitle>adam@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link>
            <v-list-item-title>Strona Główna</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Administratorzy</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
  </v-app>
    
</template>

<script>
    export default {
        name: 'HeaderVue'
    }
</script>