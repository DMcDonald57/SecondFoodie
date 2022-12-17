<template>
    <div>
        <h1>Test Registration Page</h1>
        <v-text-field
        v-model="email"
        />
        <!-- <v-text-field
        v-model="first_name"
        />
        <v-text-field
        v-model="last_name"
        />
        <v-text-field
        v-model="username"
        /> -->
        <v-text-field
        v-model="password"
        />


        <v-btn @click="registration">Customer Registration</v-btn>

        <!-- <v-btn @click="apiCall">Test API</v-btn> -->

    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: "RegistrationPage",

        data() {
            return{
                apiKey : process.env.VUE_APP_API_KEY,
                apiUrl : process.env.VUE_APP_API_URL,
                email : "",
                first_name: "",
                last_name: "",
                image_url: "",
                username: "",
                password : "",
            }
        },
methods: {
    // apiCall()  {
    //     // Axios call
    //     console.log(this.apiKey);
    //     console.log(this.apiUrl);
    // },
    registration(){
        axios.request({
            method : "POST",
            url : "https://foodierest.ml/api/client",
            headers : {
                'x-api-key' : this.apiKey,
            },
            data : {
                email : this.email,
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                password : this.password
            }
        }).then((response) => {
            console.log(response);
        }).catch(() => {
            console.log("Error");
        })
        }
    },
}
</script>

<style scoped>

</style>