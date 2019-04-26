<template>
    <v-navigation-drawer
            stateless
            value="true"
            fixed
            app
    >
        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>

            <v-list-group
                    prepend-icon="account_circle"
                    value="true"
            >
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-title>Users</v-list-tile-title>
                    </v-list-tile>
                </template>
                <v-list-group
                        no-action
                        sub-group
                        value="true"
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>Admin</v-list-tile-title>
                        </v-list-tile>
                    </template>

                    <v-list-tile
                            v-for="route in routes"
                            :key="route.label"
                            @click="pushToRoute(route.link)"
                    >
                        <v-list-tile-title v-text="route.label"></v-list-tile-title>
                        <v-list-tile-action>
                            <v-icon v-text="route.icon"></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>

            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        data: () => ({
            routes: [
                {
                    'label': 'Usuários',
                    'icon': 'people_outline',
                    'link': 'user'
                },
                {
                    'label': 'Formulario',
                    'icon': 'people_outline',
                    'link': 'form'
                },
            ],
        }),
        methods: {
            pushToRoute(link) {
                this.$router.push(link);
            }
        }
    }
</script>