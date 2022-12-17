<template>
    <v-form>
        <h1>Test Registration Page</h1>
        <div>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="firstName" label="First Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="lastName" label="Last Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="username" label="UserName" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="password" label="Password" solo dense></v-text-field>
                </v-col>
            </v-row>
            <v-btn @click="registration">Customer Registration</v-btn>
        </div>
    </v-form>
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
                firstName: "",
                lastName: "",
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
                firstName: this.firstName,
                lastName: this.lastName,
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