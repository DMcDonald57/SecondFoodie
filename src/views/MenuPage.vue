<template>
    <div>
        <pageTopper/>
        <NavBar/>
        <h1>This would have been the Menu page</h1>

    </div>
</template>

<script>

import pageTopper from '@/components/pageTopper';
import NavBar from '@/components/NavBar'


    export default {
        name: "MenuPage",
        components: {
            pageTopper,
            NavBar
        }
    }
</script>

<style scoped>

</style>