import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeItemsStore = defineStore('homeItems', () => {

    const darkTheme = ref(false)

    const changeTheme = () => {

        darkTheme.value = !darkTheme.value;

    }

    const itemsVidget = [1,2,3,4,5,6,7,8,9,10]

    const themeCheck = computed(()=> darkTheme.value)

    const appInfo = ref([{
        avatar:'./src/assets/images/app/app-avatar.png',
        avatar_description:'Character image',
        header:'Lorem Ipsum is simply dummy',
        total:'./src/assets/images/app/app-total.png',
        total_votes:'12',
        own_rating:'5.2'
    }]


)

    const downloadItems = ref([

        {
            id:1,
            icon:'./src/assets/icons/homepage-links/android-icon.png',
            link:'/',
            icon_description:'Android Download',
            text:'Android'
        },

        {
            id:2,
            icon:'./src/assets/icons/homepage-links/apple-icon.png',
            link:'/',
            icon_description:'Apple Download',
            text:'iOS'
        },

        {
            id:3,
            icon:'./src/assets/icons/homepage-links/download-icon.png',
            link:'/',
            icon_description:'PC Download',
            text:'Download on PC'
        },



    ])

    const templatesItemsBurger = ref([

        {
            id:1,
            text:'item'
        },

        {
            id:2,
            text:'item'
        },

        {
            id:3,
            text:'item'
        },

        {
            id:4,
            text:'item'
        },

        {
            id:5,
            text:'item'
        },

        {
            id:6,
            text:'item'
        },


    ])

    const templatesItems = templatesItemsBurger.value.filter((item) => item.id<5)


    const articleItems = ref([

        {
            id:1,
            text:'Lorem Ipsum is simply dummy',
            author:'Alco',
            date: '26 JANVIER 2023',
            image: './src/assets/images/article/article-main.png',
            image_description:'Lorem Ipsum is simply dummy image'
        },

        {
            id:2,
            text:'Lorem Ipsum is simply dummy',
            author:'Alco',
            date: '26 JANVIER 2023',
            image: './src/assets/images/article/article-main.png',
            image_description:'Lorem Ipsum is simply dummy image'
        },

        {
            id:3,
            text:'Lorem Ipsum is simply dummy',
            author:'Alco',
            date: '26 JANVIER 2023',
            image: './src/assets/images/article/article-main.png',
            image_description:'Lorem Ipsum is simply dummy image'
        },

        {
            id:4,
            text:'Lorem Ipsum is simply dummy',
            author:'Alco',
            date: '26 JANVIER 2023',
            image: './src/assets/images/article/article-main.png',
            image_description:'Lorem Ipsum is simply dummy image'
        },


    ])


    const sideIcons = ref([

        {
            id:1,
            icon_path:'./src/assets/icons/side/facebook-side.png',
            icon_description:'Facebook link',
            path:'/',
            bg: 'bg-[#3A579A]'
        },

        {
            id:2,
            icon_path:'./src/assets/icons/side/twitter-side.png',
            icon_description:'Twitter link',
            path:'/',
            bg: 'bg-[#00ABF0]'
        },

        {
            id:3,
            icon_path:'./src/assets/icons/side/telegram-side.png',
            icon_description:'Telegram link',
            path:'/',
            bg: 'bg-[#24A2E0]'
        },

        {
            id:4,
            icon_path:'./src/assets/icons/side/pinterest-side.png',
            icon_description:'Pinterest link',
            path:'/',
            bg: 'bg-[#CD1C1F]'
        },

        {
            id:5,
            icon_path:'./src/assets/icons/side/reddit-side.png',
            icon_description:'Reddit link',
            path:'/',
            bg: 'bg-[#FC461E]'
        },

        {
            id:6,
            icon_path:'./src/assets/icons/side/heart-side.png',
            icon_description:'Heart link',
            path:'/',
            bg: 'bg-[#F95149]'
        },


    ])


    return { appInfo, downloadItems, templatesItems, templatesItemsBurger, articleItems, darkTheme, changeTheme, themeCheck, itemsVidget, sideIcons}
})
