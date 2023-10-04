<template>
    <div class="mainblog__photo">                
        
        <img v-bind:src="require(`@/assets/img/${article.img}`)" alt="photo">
        
        <div class="mainblog__txt">
            <h1 class="mainblog__h1">{{ article.name }}</h1>
            <p>{{ article.path }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopPhotoComponent',
    props: {
        article: {
            name: String,
            path: String,
            img: String
        }
    },

    data() {
        return {

        };
    },    

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>