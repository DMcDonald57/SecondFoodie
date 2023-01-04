<template>
    <main>
        <page-topper/>
        <H1>This will be the Restaurtant list page</H1>

        <router-link to="/"><h1> Home Page</h1></router-link>

    </main>
</template>

<script>
// import axios from 'axios';
import pageTopper from '@/components/pageTopper';

    export default {
        name: "RestaurantList",
        components: {
            pageTopper
        },

    }
</script>

<style scoped>

</style>