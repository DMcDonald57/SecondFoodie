<template>
    <div>
        <h1>Test Registration Page</h1>
        <v-btn @click="apiCall">test api</v-btn>
    </div>
</template>

<script>
    export default {
        name: "RegistrationPage",

        data() {
            return{
                apiKey : process.env.VUE_APP_API_KEY,
                apiUrl : process.env.VUE_APP_API_URL
            }
        },
methods: {
    apiCall()  {
        // Axios call
        console.log(this.apiKey);
        console.log(this.apiUrl);
    }
}
    }
</script>

<style scoped>

</style>