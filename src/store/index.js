import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        CategoryList: [
            { id: '1', tag: 'kitchen', src: require('@/assets/img/kitchen1.png'), alt: 'kitchen1', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '2', tag: 'kitchen', src: require('@/assets/img/kitchen2.png'), alt: 'kitchen2', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '3', tag: 'kitchen', src: require('@/assets/img/kitchen3.png'), alt: 'kitchen3', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '4', tag: 'kitchen', src: require('@/assets/img/kitchen4.png'), alt: 'kitchen4', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '5', tag: 'kitchen', src: require('@/assets/img/kitchen5.png'), alt: 'kitchen5', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '6', tag: 'kitchen', src: require('@/assets/img/kitchen6.png'), alt: 'kitchen6', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },




            { id: '9', tag: 'bedroom', src: require('@/assets/img/kitchen2.png'), alt: 'kitchen1', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '10', tag: 'bedroom', src: require('@/assets/img/kitchen1.png'), alt: 'kitchen2', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '11', tag: 'bedroom', src: require('@/assets/img/kitchen3.png'), alt: 'kitchen3', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '12', tag: 'bedroom', src: require('@/assets/img/kitchen4.png'), alt: 'kitchen4', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '13', tag: 'bedroom', src: require('@/assets/img/kitchen5.png'), alt: 'kitchen5', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },


            { id: '14', tag: 'bathroom', src: require('@/assets/img/kitchen6.png'), alt: 'kitchen6', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '15', tag: 'bathroom', src: require('@/assets/img/kitchen7.png'), alt: 'kitchen7', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '16', tag: 'bathroom', src: require('@/assets/img/kitchen8.png'), alt: 'kitchen8', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '17', tag: 'bathroom', src: require('@/assets/img/kitchen1.png'), alt: 'kitchen1', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '18', tag: 'bathroom', src: require('@/assets/img/kitchen2.png'), alt: 'kitchen2', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '19', tag: 'bathroom', src: require('@/assets/img/kitchen3.png'), alt: 'kitchen3', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },


            { id: '22', tag: 'livingarea', src: require('@/assets/img/kitchen6.png'), alt: 'kitchen6', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '23', tag: 'livingarea', src: require('@/assets/img/kitchen7.png'), alt: 'kitchen7', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '24', tag: 'livingarea', src: require('@/assets/img/kitchen8.png'), alt: 'kitchen8', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '25', tag: 'livingarea', src: require('@/assets/img/kitchen8.png'), alt: 'kitchen8', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '26', tag: 'livingarea', src: require('@/assets/img/kitchen8.png'), alt: 'kitchen8', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },
            { id: '27', tag: 'livingarea', src: require('@/assets/img/kitchen8.png'), alt: 'kitchen8', p1: 'Modern Kitchen', p2: 'Decor / Artchitecture' },],



        NewsList: [{
            id: 0,
            src: 'news1.png',
            name: 'Let’s Get Solution For Building Construction Work',
            dat: '26 December,2022',
        }, {
            id: 1,
            src: 'news2.png',
            name: 'Low Cost Latest Invented Interior Designing Ideas.',
            dat: '22 December,2022',
        },
        {
            id: 2,
            src: 'news3.png',
            name: 'Best For Any Office & Business Interior Solution',
            dat: '25 December,2022',
        },
        {
            id: 3,
            src: 'news4.png',
            name: 'Let’s Get Solution For Building Construction Work',
            dat: '26 December,2022',
        }, {
            id: 4,
            src: 'news5.png',
            name: 'Low Cost Latest Invented Interior Designing Ideas.',
            dat: '22 December,2022',
        },
        {
            id: 5,
            src: 'news6.png',
            name: 'Best For Any Office & Business Interior Solution',
            dat: '25 December,2022',
        }
        ]
    }
})