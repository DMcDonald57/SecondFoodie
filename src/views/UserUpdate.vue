<template>
    <main>
        <page-topper/>
        <h1>Customer Profile Update</h1>
        <div class="userupdate">
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
            <v-btn @click="C_update">Save Update</v-btn>
            </div>
    </main>
</template>

<script>

import axios from 'axios';
import cookies from 'vue-cookies';
import pageTopper from '@/components/pageTopper';

    
export default {
  components: { 
    pageTopper 
    },
        
    data() {
            return{
                apiKey : process.env.VUE_APP_API_KEY,
                apiUrl : process.env.VUE_APP_API_URL,
                email: "",
                firstName: "",
                lastName: "",
                username: "",
                password : "",
                token : ""
            }
        },
        methods: {
            C_update (){
                axios.request({
                method : "PATCH",
                url : "https://foodierest.ml/api/client",
                headers : {
                'x-api-key' : this.apiKey,
                'token' : cookies.get("loginToken")
            },
            data : {
                email : this.email,
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                password : this.password,
            }
        }).then((response) => {
            console.log(response);
            this.$router.push("./RestaurantList")
        }).catch(() => {
            console.log("Error");
            alert("Update Failed.  Try Again")
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
.userupdate {
    margin: 5% 15% 5% 15%; 
}

.userlogin {
    margin: 5% 15% 0% 15%;
}
</style>