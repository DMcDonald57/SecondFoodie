<template>
    <v-form>
        <h1>Customer Registration</h1>
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
            <v-btn @click="C_registration">Customer Registration</v-btn>
        </div>
        <div>
            <h1>Restaurant Registration</h1>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="name" label="Restaurant Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="address" label="Address" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="bio" label="Slogan" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="city" label="City" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="password" label="Password" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="phoneNum" label="Phone Number with Dashes" solo dense></v-text-field>
                </v-col>
            </v-row>
            <v-btn @click="R_registration">Restaurant Registration</v-btn>
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
                name : "",
                address : "",
                bio : "",
                city : "",
                phoneNum : ""
            }
        },
methods: {
    C_registration(){
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
        },
    R_registration(){
        axios.request({
            method : "POST",
            url : "https://foodierest.ml/api/restaurant",
            headers : {
                'x-api-key' : this.apiKey,
            },
            data : {
                name : this.name,
                address : this.address,
                bio : this.bio,
                city : this.city,
                email : this.email,
                password : this.password,
                phoneNum : this.phoneNum
            }
        }).then((response)=> {
            console.log(response);
        }).catch(() => {
            console.log("Error");
        })
    }
    },
}
</script>

<style scoped>

h1 {

    margin-bottom: 5vh;
    margin-top: 5vh;

}

</style>