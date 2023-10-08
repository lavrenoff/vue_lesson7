<template>
    <main class="blogdetails">
        <img class="blogdetails__img" src="../assets/img/blogdetailsimg.png" alt>
        <div class="blogdetails__bottom center">
            <div class="blogdetails__content">
                <div class="blogdetails__txt1" v-for="item in currentBlogDetails" :key="item.id">
                    <img class="blogdetails__img blogdetails__img1" :src="item.src" alt>
                    <h2>{{ item.titleText }}</h2>
                    <p class="blogdetails__p1">
                        {{ item.text }}
                    </p>
                </div>                
            </div>
            <div class="blogdetails__tags">
                <p>Tags</p>
                <div class="blogdetails__buttons">
                    <button :class="['blogdetails__btn',currentTab===button.id ? 'blogdetails__btnactive':false]" @click="getBlogDetails(button.id)" v-for="button in buttons" :key="button.id">
                        {{ button.text }}
                    </button>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BlogDetails',

    data() {
        return {
            buttons: [{ id: 'kitchen', text: 'Kitchen' }, { id: 'bedroom', text: 'Bedroom' }, { id: 'building', text: 'Building' }, { id: 'architecture', text: 'Architecture' }, { id: 'kitchen_planning', text: 'Kitchen Planing' }],
            
            currentTab: 'kitchen',
            currentBlogDetails:[],
        }
        
        
    },


    computed: {
        ...mapGetters(['getBlogDetailsList']),
        
    },
    
    mounted() {
        this.currentBlogDetails=this.getBlogDetailsList.filter((flt) => flt.tag === this.currentTab);            
    },


    methods: {
        getBlogDetails(item){
            this.currentTab=item;            
                        
            this.currentBlogDetails=this.getBlogDetailsList.filter((flt) => flt.tag === this.currentTab);            
        }
    },
};
</script>

<style lang="scss" scoped></style>