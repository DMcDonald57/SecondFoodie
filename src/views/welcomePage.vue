<template>
    <div>
        <pageTopper/>
        <h2>about us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Debitis alias autem sapiente beatae recusandae iure 
            illum vitae quaerat, perspiciatis tenetur?</p>

            <h2>Customer Login</h2>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="email" label="Email" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="firstName" label="First Name" solo dense></v-text-field>
                </v-col>
            </v-row>
            <h2>Restaurant Login</h2>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="name" label="Restaurant Name" solo dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="address" label="Address" solo dense></v-text-field>
                </v-col>
            </v-row>

        <router-link to="/RegistrationPage">Not Registered?  Click here.</router-link>

    </div>
</template>

<script>
import pageTopper from '@/components/pageTopper';

    export default {
        name : "welcomePage",
        components: {
            pageTopper
        }
    }
</script>

<style scoped>

p {
    text-align: center;
    margin: 0% 25% 0% 25%;
}
v-col {
    margin-left: 25%;
}

</style>