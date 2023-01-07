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
        axios.request({
            method : "DELETE",
            url : "https://foodierest.ml/api/client-login",
            headers : {
                'x-api-key' : this.apiKey,
            },
        }).then((response) => {
            console.log(response);
            cookies.remove("loginToken");
            cookies.remove("restToken")
            alert("Logout Successful")
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