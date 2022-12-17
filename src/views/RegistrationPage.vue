<template>
    <div>
        <h1>Test Registration Page</h1>
        <v-text-field
        v-model="email"
        />
        <v-text-field
        v-model="password"
        />
        <v-btn @click="login">Log In</v-btn>
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
                password : ""
            }
        },
methods: {
    // apiCall()  {
    //     // Axios call
    //     console.log(this.apiKey);
    //     console.log(this.apiUrl);
    // },
    login(){
        axios.request({
            method : "POST",
            url : "https://foodierest.ml/api/client",
            Headers : {
                apiKey : this.apiKey,
                apiUrl : this.apiUrl
                
            },
            data : {
                email : this.email,
                password : this.password
            }
        }).then((response)=>{
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