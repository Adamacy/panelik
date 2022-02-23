<template>
    <v-app>
        <template>
            <template>
                <v-data-table :headers="headers" :items="data" class="elevation-1">
                    <template v-slot:[`item.name`]="{ item }">
                        <a :href="'/users/' + item.id">{{ item.name }}</a>
                    </template>
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Lista użytkowników</v-toolbar-title>

                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        class="mb-2"
                                        v-bind="attrs"
                                        v-on="on"
                                    >Dodaj</v-btn>
                                </template>

                                <v-card>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title
                                        class="text-h5"
                                    >Are you sure you want to delete this item?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="closeDelete"
                                        >Cancel</v-btn>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="deleteItemConfirm"
                                        >OK</v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2">mdi-pencil</v-icon>
                        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                    </template>
                </v-data-table>
            </template>
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
    methods: {

        editItem(item) {
            this.editedIndex = this.data.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.data.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
        deleteItemConfirm() {
            this.closeDelete()
        },
        closeDelete() {
            this.dialogDelete = false;
            this.editedIndex = -1
        },
    },
    data() {
        return {
            headers: [
                { text: 'ID', value: 'id' },
                { text: 'Nazwa użytkownika', value: 'name' },
                { text: 'Login', value: 'username' },
                { text: 'Adres E-mail', value: 'email' },
                { text: 'Numer Telefonu', value: 'phone' },
                { text: 'Nazwa Firmy', value: 'company.name' },
                { text: 'Akcje', value: 'actions' }
            ],
            dialogDelete: false,
            editedIndex: -1
        }
    }

};
</script>