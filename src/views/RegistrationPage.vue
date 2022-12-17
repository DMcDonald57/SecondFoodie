<template>
    <v-form>
        <h1>Test Registration Page</h1>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field label="First Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Last Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field label="UserName" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Password" solo dense></v-text-field>
                </v-col>
            </v-row>
            <v-btn @click="registration">Customer Registration</v-btn>
        </v-container>
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
                first_name: "",
                last_name: "",
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
v-container {
    
}

</style>