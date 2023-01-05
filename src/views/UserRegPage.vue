<template>
    <main>
        <pageTopper/>
        <v-row class="userlogin">
            <h4 id="valid">Enter a valid email address and password to log in or update your profile.</h4>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="password" label="Password" solo dense></v-text-field>
                </v-col>
            
                <v-col>
                    <v-btn @click="C_login">log in here</v-btn> <p>or</p>
                    <v-btn @click="C_update">Update Profile</v-btn>
                </v-col>
        </v-row>
    
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
            <v-btn @click="C_registration">Submit</v-btn>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
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
                token : ""
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
                password : this.password,
                token : this.token
                }
            }).then((response) => {
            console.log(response);
            cookies.set("loginToken",response.data.token);
            this.$router.push("./RestaurantList")
            }).catch(() => {
            console.log("Error");
            alert("Registration Failed.  Try Again")
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
                cookies.set("loginToken",response.data.token);
            this.$router.push("./RestaurantList")
            }).catch(() => {
                console.log("Error");
                alert("Login Failed")
            })
        },
        C_update (){
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
                cookies.set("loginToken",response.data.token);
                this.$router.push("./UserUpdate")
            }).catch(() => {
                console.log("Error");
                alert("Login Failed")
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
margin: 5px;

}
#valid {
    padding-bottom: 20px;
    padding-left: 10px;
}
</style>