<template>
    <main>
        <pageTopper/>
        <v-row class="userlogin">
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="password" label="Password" solo dense></v-text-field>
                </v-col>
            </v-row>
                    <v-btn @click="C_login">log in here</v-btn>
                    <p>or</p>
                    <v-btn>Update Profile</v-btn>
    
        <h1>or</h1>

        <h1>Customer Registration</h1>
        <div class="userreg">
            <v-row>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="firstName" label="First Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="lastName" label="Last Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="username" label="UserName" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="password" label="Password" solo dense></v-text-field>
                </v-col> 
            </v-row>
            <v-btn @click="C_registration">Customer Registration</v-btn>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import pageTopper from '@/components/pageTopper';

    export default {
        name: "UserRegPage",
        components: {
            pageTopper
        },

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
    C_registration (){
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
            this.$router.push("/")
        })
        },
        C_login (){
        axios.request({
            method : "POST",
            url : "https://foodierest.ml/api/client-login",
            headers : {
                'x-api-key' : this.apiKey,
            },
            data : {
                email : this.email,
                password : this.password
            }
            }).then((response) => {
                console.log(response);
            }).catch(() => {
                console.log("Error");
            })
        },
        },
    }
</script>

<style scoped>

h1 {
    margin-bottom: 5vh;
    margin-top: 5vh;
}
.userreg {
    margin: 5% 15% 5% 15%; 
}
.userlogin {
    margin: 5% 15% 0% 15%;
}
p {
    margin-top: 20px;
}
</style>