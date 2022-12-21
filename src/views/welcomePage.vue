<template>
    <div>
        <pageTopper/>
        <h1>NEW OR RETURNING CUSTOMERS</h1>
        <span><P>
            If you are a new or returning customer, click the below link to log in, register or update
            your personal information.  Then enjoy what Foodie has to offer to you.
        </P></span>
        <router-link to="/UserRegPage"><h1> Customer Log in and information</h1></router-link>

        <h1>LOOKING TO JOIN THE FOODIE FAMILY?</h1>

        <P>
            If you are a new or returning restaurant owner, click the below link to log in, register or update
            your restaurant information and menu.  Welcome to the Foodie Family.
        </P>
        <router-link to="/RegistrationPage"><h1> Restaurant Log in and information</h1></router-link>

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
    border: 2px solid;
    background-color: bisque;
    font-size: 18pt;
    text-align: center;
    margin: 0% 15% 0% 15%;
    color: black;
    padding: 10px;
}
h1 {
    border: 2px solid;
    background-color: bisque;
    margin: 0% 15% 0% 15%;
    color: black;
    padding: 10px;
    font-family: cursive;
    font-weight: bold;
}

</style>