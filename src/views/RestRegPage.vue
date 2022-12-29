<template>
    <main>
        <page-topper/>
        <v-row class="restlogin">
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="password" label="Password" solo dense></v-text-field>
                </v-col>
            </v-row>
                    <v-btn @click="R_login">log in here</v-btn>
                    <p>or</p>
                    <v-btn @click="R_update">Update Profile</v-btn>
    
        <h1>or</h1>

        <h1>Restaurant Registration</h1>
            <div class="restreg">
            <v-row>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="name" label="Restaurant Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="address" label="Address" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="bio" label="Slogan" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="city" label="City" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="password" label="Password" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="phoneNum" label="Phone Number with Dashes" solo dense></v-text-field>
                </v-col>
            </v-row>
            <v-btn @click="R_registration">Restaurant Registration</v-btn>
        </div>
</main>
</template>

<script>
import axios from 'axios';
import pageTopper from '@/components/pageTopper';

    export default {
        name: "RegRestPage",
        components: {
            pageTopper
        },
        data() {
            return{
                apiKey : process.env.VUE_APP_API_KEY,
                apiUrl : process.env.VUE_APP_API_URL,
                email : "",
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
            alert("Registration Failed")
        })
    },
        R_login (){
            axios.request({
                method : "POST",
                url : "https://foodierest.ml/api/restaurant-login",
                headers : {
                    'x-api-key' : this.apiKey,
                },
                data : {
                    email : this.email,
                    password : this.password
                }
            }).then((response) => {
                console.log(response);
                // this.$router.push("restaurant page")
            }).catch(() => {
                console.log("Error");
                alert("Login Failed")
            })
        },
        R_update (){
            axios.request({
                method : "POST",
                url : "https://foodierest.ml/api/restaurant-login",
                headers : {
                    'x-api-key' : this.apiKey,
                },
                data : {
                    email : this.email,
                    password : this.password
                }
            }).then((response) => {
                console.log(response);
                this.$router.push("./UserUpdate")
            }).catch(() => {
                console.log("Error");
                alert("Login Failed")
            })
        },
    }
}

</script>

<style scoped>
h1 {
    margin-bottom: 5vh;
    margin-top: 5vh;
}
.restreg {
    margin: 5% 15% 5% 15%; 
}
.restlogin {
    margin: 5% 15% 0% 15%;
}
p {
    margin-top: 20px;
}


</style>