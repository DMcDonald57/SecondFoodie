<template>
    <main>
        <page-topper/>
        <h1>Restaurant Profile Update</h1>
        <div class="restupdate">
            <v-row>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="name" label="Restaurant Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="address" label="Address" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="city" label="City" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="bio" label="Slogan" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="username" label="UserName" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="password" label="Password" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="13">
                    <v-text-field v-model="phoneNum" label="Phone Number with Dashes" solo dense></v-text-field>
                </v-col>

            </v-row>
            <v-btn @click="R_update">Save Update</v-btn>
            </div>

    </main>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import pageTopper from '@/components/pageTopper.vue';

    export default {
  components: { 
    pageTopper 
},
data() {
            return{
                apiKey : process.env.VUE_APP_API_KEY,
                apiUrl : process.env.VUE_APP_API_URL,
                name : "",
                address : "",
                city : "",
                bio : "",
                email : "",
                username: "",
                password : "",
                phoneNum : "",
                token : ""

            }
        
    },
    methods: {
            R_update (){
                axios.request({
                method : "PATCH",
                url : "https://foodierest.ml/api/restaurant",
                headers : {
                'x-api-key' : this.apiKey,
                'token' : cookies.get("restToken")
            },
            data : {
                name : this.name,
                address : this.address,
                city : this.city,
                bio : this.bio,
                email : this.email,
                username : this.username,
                password : this.password,
                phoneNum : this.phoneNum,
                token : this.token
            },
            }).then((response) => {
                console.log(response);
                this.$router.push("./RestaurantList")
            }).catch(() =>{
                console.log ("Error");
                alert("Update Failed. Try Again")
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
.restupdate {
    margin: 5% 15% 5% 15%; 
}

</style>