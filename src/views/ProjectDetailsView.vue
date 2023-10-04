<template>
    <main class="projectdetails">
        <img class="projectdetails__img" src="../assets/img/Banner.png" alt="">
        <div class="projectdetails__context center">


            <h1 class="projectdetails__h1">Minimal Look Bedrooms</h1>
            <p class="projectdetails__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
                dignissim maximus. Aliquam
                sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi
                fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis
                quis
                nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis
                elit,
                in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
            </p>
        </div>
        <div class="projectdetails__slider center">
            <img class="projectdetails__img1" :src="ChangeSlider.src" alt="photo">
            <div class="projectdetails__btns">
                <button class="projectdetails__btn" v-for="item in slider" :key="item.id" @click="currentimg = item.id">
                </button>
            </div>

        </div>
    </main>
</template>




<script>



export default {
    name: 'ProjectDetailsView',
    components: {
    },

    computed: {
        ChangeSlider() {
            return this.slider.find((flt) => flt.id === this.currentimg)
        }
    },

    data() {
        return {
            slider: [
                { id: 1, src: require('@/assets/img/Photo2.png') },
                { id: 2, src: require('@/assets/img/photo1.png') },
                { id: 3, src: require('@/assets/img/news5.png') },
            ],
            currentimg: 1,
        };
    },



    methods: {

    },
};
</script>


<style lang="scss" scoped></style>