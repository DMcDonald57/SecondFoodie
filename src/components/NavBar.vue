<template>
    <div>
        <router-link to="/"><h4>Home</h4></router-link>
        <h4 @click="logout">LogOut</h4>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios'

    export default {
        name : "NavBar",

        data() {
        return{
            apiKey : process.env.VUE_APP_API_KEY,
            }
        },
    methods: {
        logout() {
            console.log("call");
        axios.request({
            method : "DELETE",
            url : "https://foodierest.ml/api/client-login",
            headers : {
                'x-api-key' : this.apiKey,
                'token': cookies.get("loginToken")
            },
        }).then(() => {
            console.log("success");
            cookies.remove("loginToken");
            alert("Logout Successful");
        }).catch(() => {
            console.log("error");
        })
        },
    }
}
</script>

<style scoped>

div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 10px;
}

</style>