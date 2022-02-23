<template>
    <v-app>
      <!-- slipped -->
        <v-app-bar app>
        Panel Admina
        </v-app-bar>
    <div>
    <v-card class="theme--dark mt-16" style="height:90vh">
      <v-navigation-drawer permanent height="93vh" class="float-left" >

          

        <v-divider></v-divider>

        <v-list nav dense>
          <router-link to="/">

            <v-list-item link>
              <v-list-item-title>Strona Główna</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list>

      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title>Administratorzy</v-list-item-title>
        </template>
          <router-link to="/admins">
            <v-list-item link>
              <v-list-item-title>Użytkownicy</v-list-item-title>
            </v-list-item></router-link>


        </v-list-group>

    </v-list>
        
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </v-card>
  </div>
</v-app>
    
</template>

<script>
  export default {
    name: 'HeaderView'
  }
</script>
<style>

a .router-link-exact-active{
  color:deeppink;
}

</style>