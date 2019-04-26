<template>
    <v-app>
        <navigation></navigation>
        <v-content>
            <v-container fluid grid-list-md>
                <router-view class="dash" name="dash"></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Navigation from "./Navigation";

    export default {
        name: 'MainContainer',
        components: {Navigation},
    }
</script>

<style scoped>
</style>
