<template>
    <div>
        <h2>{{ name }}</h2>
        <h4>{{ address }}, {{ city }}</h4>
        <h4>{{ bio }}</h4>
        <h4>{{ email }}</h4>
        <h4>{{ phoneNum }}</h4>
    </div>
</template>

<script>

    export default {
        name: "restaurantCard",
        props: {
            name: String,
            address: String,
            city: String,
            bio: String,
            email: String,
            phoneNum: String
        },
    }
</script>

<style scoped>
    div{
        border: navy 2px solid;
        width: 70vw;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 2vh;
    }


</style>