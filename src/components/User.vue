<template>
    <v-card>
        <v-toolbar
                color="indigo"
                dark
        >
            <v-toolbar-title>Usuários</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text row wrap>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs3 sm3 v-for="card in cards">
                        <v-card>
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex
                                            xs12
                                            sm12
                                            md12
                                            align-center
                                            justify-center
                                            layout
                                            text-xs-center
                                    >
                                        <v-avatar
                                                :size="100"
                                                color="grey lighten-4"
                                        >
                                            <img :src="card.image" alt="avatar">
                                        </v-avatar>
                                    </v-flex>

                                </v-layout>
                            </v-container>

                            <v-card-title>
                                <div>
                                    <span class="grey--text">{{card.email}}</span><br>
                                    <span>{{card.city}}</span><br>
                                    <span>{{card.name}}</span>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn color="blue" @click="openEdit">Editar</v-btn>
                                <v-btn flat color="red">Bloquear</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
        <v-dialog
                v-model="dialog"
                width="800"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-flex
                                        xs12
                                        sm12
                                        md12
                                        align-center
                                        justify-center
                                        layout
                                        text-xs-center
                                >
                                    <v-avatar
                                            :size="100"
                                            color="grey lighten-4"
                                    >
                                        <img :src="editingUser.image" alt="avatar">
                                    </v-avatar>
                                </v-flex>
                            </v-flex>
                            <v-flex xs12 sm6 md8>
                                <v-text-field
                                        label="Full name"
                                        :value="editingUser.name"
                                        v-model="editingUser.name"
                                ></v-text-field>
                                <v-text-field
                                        label="Email*"
                                        required
                                        :value="editingUser.email"
                                        v-model="editingUser.email"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                        label="Password*"
                                        type="password"
                                        required
                                        :value="editingUser.password"
                                        hint="leave blank if you want to keep the same password"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-text-field
                                        label="Age*"
                                        required
                                        :value="editingUser.age"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-text-field
                                        label="Address*"
                                        required
                                        :value="editingUser.city"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-radio-group v-model="isActive" row>
                                    <v-radio label="Enable" value="true" color="primary"></v-radio>
                                    <v-radio label="Blocked" value="false" color="red"></v-radio>
                                </v-radio-group>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                dialog: false,
                isActive: true,
                editingUser: {
                    image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                    name: 'Whitehaven Beach',
                    city: 'Whitehaven Beach',
                    email: 'Whitsunday@gmail.com',
                    age: 18,
                    password: '',
                    isActive: false
                },
                cards: [
                    {
                        image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                        name: 'Whitehaven Beach',
                        city: 'Whitehaven Beach',
                        email: 'Whitsunday@gmail.com'
                    },
                    {
                        image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                        name: 'Whitehaven Beach',
                        city: 'Whitehaven Beach',
                        email: 'Whitsunday@gmail.com'
                    },
                    {
                        image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                        name: 'Whitehaven Beach',
                        city: 'Whitehaven Beach',
                        email: 'Whitsunday@gmail.com'
                    },
                    {
                        image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                        name: 'Whitehaven Beach',
                        city: 'Whitehaven Beach',
                        email: 'Whitsunday@gmail.com'
                    },
                    {
                        image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                        name: 'Whitehaven Beach',
                        city: 'Whitehaven Beach',
                        email: 'Whitsunday@gmail.com'
                    },
                    {
                        image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                        name: 'Whitehaven Beach',
                        city: 'Whitehaven Beach',
                        email: 'Whitsunday@gmail.com'
                    },
                    {
                        image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                        name: 'Whitehaven Beach',
                        city: 'Whitehaven Beach',
                        email: 'Whitsunday@gmail.com'
                    },
                    {
                        image: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                        name: 'Whitehaven Beach',
                        city: 'Whitehaven Beach',
                        email: 'Whitsunday@gmail.com'
                    },
                ],
            }
        },
        methods: {
            openEdit() {
                this.dialog = true;
            }
        }
    }
</script>

<style scoped>

</style>