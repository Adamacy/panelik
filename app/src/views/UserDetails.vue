<template>
    <v-app>
        <template>
            
  <v-simple-table dark class="pa-16">
    <template v-slot:default>
        
      <tbody>
        <tr>
            <td>Name</td>
            <td>{{data.name}}</td>
        </tr>
        <tr>
            <td>Username</td>
            <td>{{data.username}}</td>
        </tr>
        <tr>
            <td>E-mail</td>
            <td>{{data.email}}</td>
        </tr>
         <tr>
            <td>Adress</td>
            <td>{{data.address.street}} - {{data.address.suite}}</td>
            
        </tr>
        <tr>
            <td>City</td>
            <td>{{data.address.city}} - {{data.address.zipcode}}</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>{{data.phone}}</td>
        </tr>
        <tr>
            <td>Website</td>
            <td><a :href="'https://' + data.website">{{data.website}}</a></td>
        </tr>
        <tr>
            <td>Company name</td>
            <td>{{ data.company.name }}</td>
        </tr>
      </tbody>
      <h2><center><a :href="'/users'">Wróć</a></center></h2>
    </template>
  </v-simple-table>
</template>
    </v-app>
</template>

<script>
import axios from "axios"

export default {
    name: 'UserDetails',
    data() {
        return {
            data: null,
            headers: [
                { text: 'ID', value: 'id' },
                { text: 'Nazwa użytkownika', value: 'name' },
                { text: 'Login', value: 'username' },
                { text: 'Adres E-mail', value: 'email' },
                { text: 'Numer Telefonu', value: 'phone' },
                { text: 'Nazwa Firmy', value: 'company.name' },
                { text: 'Akcje', value: 'actions' }
            ],
        }
    },
    created() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`).then(res => {
            this.data = res.data
        })
    }


}
</script>