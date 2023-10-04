<template>
    <main class="mainproject">
        <TopPhotoComponent :article="art" />
        <div class="mainproject__categorybuttons center">
            <button class="mainproject__btns">
                <button :class="['mainproject_button',button.id===CurrentCategory ? 'mainproject_button_active' : false]" v-for="button in CategoryButtons" :key="button.id"
                    @click="CurrentCategory = button.id">
                    {{ button.title }}
                </button>
            </button>
        </div>
        <div class="mainproject__items center">
            <div v-for="item in ChangeCategory" :key="item.id" class="mainproject__item">
                <img class="mainproject__img" :src="item.src" :alt="item.alt">
                <div class="mainproject__content">
                    <div class="mainproject__box">
                        <p class="mainproject__title">{{ item.p1 }}</p>
                        <p class="mainproject__subtitle">{{ item.p2 }}</p>
                    </div>
                    <router-link to="/projectdetails">
                    <a href="#" class="mainproject__a">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </router-link>
                </div>
            </div>
        </div>
        <PageNavigation />
        <!-- <div class="mainproject__categorybuttons center">            
            <button v-for="button in CategoryButtons" :key="button.id">
                {{ button.title }}
            </button>
        </div> -->

    </main>
</template>

<script>
import TopPhotoComponent from '../components/TopPhotoComponent.vue';
import PageNavigation from '../components/PageNavigation.vue';
export default {
    name: 'VueCLIProjectView',
    components: {
        TopPhotoComponent,
        PageNavigation
    },

    data() {
        return {
            art: {
                name: 'Our Project',
                path: 'Home / Project',
                img: 'photoproject.png'
            },
            CategoryButtons:
                [
                    { id: 'bathroom', title: 'Bathroom' },
                    { id: 'bedroom', title: 'Bed room' },
                    { id: 'kitchen', title: 'Kitchan' },
                    { id: 'livingarea', title: 'Living Area' }
                ],
            CurrentCategory: 'bathroom',
        }

    },

    computed: {
        ChangeCategory() {                        
            return this.$store.state.CategoryList.filter((flt) => flt.tag === this.CurrentCategory);
        }

    },


    methods: {

    },
};
</script>

<style lang="scss" scoped></style>