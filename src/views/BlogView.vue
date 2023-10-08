<template>
        <main class="mainblog">            
            <TopPhotoComponent :article="art"/>
            <div class="mainblog__post center">
                <h2 class="mainblog__h1">
                    Latest Post
                </h2>
                <div class="mainblog__post1">
                    <img src="@/assets/img/photo1.png" alt="photo1">
                    <div class="mainblog__right">
                        <h3>
                            Low Cost Latest Invented Interior Designing Ideas
                        </h3>
                        <br>
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu
                            sem vitae turpis dignissim maximus.posuere
                            in.Contrary to popular belief.
                        </p><br>
                        <p>
                            Lorem Ipsum is not simply random text. It has roots
                            in a piece of classica.

                        </p><br>
                        <div class="mainblog__right1">
                            <span>26 December,2022 </span>
                            <svg width="52" height="53" viewBox="0 0 52 53"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                <path
                                    d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                                    stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

            <div class="mainblog__news center">
                <h2 class="mainblog__h1">
                    Articles & News
                </h2>
                <div class="mainblog__news1 app">                
                    <div class="main__news" v-for="item in $store.state.NewsList" :key="item.id">
                        <img v-bind:src="require(`@/assets/img/${item.src}`)" alt="news">
                        <h3 class="main__h3">{{ item.name }}</h3>
                        <div class="main__news_bottom">
                            <span>{{ item.dat }}</span>
                            <router-link to="/blogdetails">
                            <svg width="52" height="53" viewBox="0 0 52 53"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26"
                                    fill="#F4F0EC" />
                                <path
                                    d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                                    stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            </router-link>
                        </div>

                    </div>

                </div>
            </div>

            <!-- <div class="mainblog__nav">
                <button class="btn btn1">01</button>
                <button class="btn btn2">02</button>
                <button class="btn btn3">03</button>
                <button class="btn btn4">></button>
            </div> -->

            <PageNavigation />
        </main>
</template>

<script>
import TopPhotoComponent from '../components/TopPhotoComponent.vue';
import PageNavigation from '../components/PageNavigation.vue';

export default {
    name: 'VueCLIBlogView',

    components:{
        TopPhotoComponent,
        PageNavigation
    },

    data() {
        return {
            art: {
            name: 'Articles & News',
            path: 'Home / Blogs',
            img: 'photo.png'
        },
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
</style>