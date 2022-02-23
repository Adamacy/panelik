<template>
    <v-app>
        <template>
            <v-data-table :headers="headers" :items="data" :items-per-page="10" class="elevation-1 pa-16"></v-data-table>
        </template>
    </v-app>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: 'UsersView',
    computed: mapState(['data']),
    created() {
        this.$store.dispatch('loadData')
    },
    data() {
        return {
            headers: [
                {text: 'ID', value: 'id'},
                {text: 'Nazwa użytkownika', value: 'name'},
                {text: 'Login', value: 'username'},
                {text: 'Adres E-mail', value: 'email'},
                {text: 'Numer Telefonu', value: 'phone'},
                {text: 'Nazwa Firmy', value: 'company.name'},
            ]
        }
    }

}
</script>