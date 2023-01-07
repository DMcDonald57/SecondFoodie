<template>
    <div>
        <page-topper/>
            <div class="restaurantList">
                <restaurantCard class="restaurantCard"
                v-for="(rest,id) in restaurants"
                :key="id"
                :name="rest.name"
                :address="rest.address"
                :city="rest.city"
                :bio="rest.bio"
                :email="rest.email"
                :phoneNum="rest.phoneNum"/>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import pageTopper from '@/components/pageTopper';
import restaurantCard from'@/components/restaurantCard'

    export default {
        name: "RestaurantList",
        components: {
            pageTopper,
            restaurantCard
        },

        data() {
            return {
            restaurants: [],
            apiKey : process.env.VUE_APP_API_KEY,
            }
        },

        methods: {
            getRestaurant(){
                console.log("call");
                axios.request({
                    method : "GET",
                    url : "https://foodierest.ml/api/restaurant",
                    headers : {
                        'x-api-key' : this.apiKey,
                    },
                }).then((response)=> {
                    console.log(response);
                    this.restaurants=response.data
                }).catch(() => {
                    console.log("Error");
                })
            },
        },
        mounted(){
                this.getRestaurant()
            },
    }
</script>

<style scoped>

.restaurantList {
    display: grid;
    grid-template-columns: 1fr;
    margin: 10%
}


</style>