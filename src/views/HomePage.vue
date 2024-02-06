<script setup>
import {useHomeItemsStore} from '@/stores/homeStore.js'

import Info from '@/components/HomePage/appInfo.vue'
import Article from '@/components/HomePage/article.vue'
import SideAd from '@/components/HomePage/sideAd.vue'
import SideIcon from '@/components/HomePage/sideBarIcon.vue'

import {computed} from "vue";

const store = useHomeItemsStore()

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

const appInfo = computed(()=> store.appInfo)

const articles = computed(()=> store.articleItems)

const sideIcons = computed(()=> store.sideIcons)

</script>

<template >

    <div class=" pt-[44px] px-[375px] pb-[140px] max-xl:min-w-[768px] max-xl:my-0 max-xl:mx-auto max-xl:px-[24px] max-md:min-w-[350px] max-md:my-0 max-md:mx-0 max-md:px-[15px] relative" :class="darkTheme ? 'bg-[#0E1219]' : 'bg-white '">

        <div class="left-0 top-[10%] xl:absolute max-xl:hidden max-sl:block">

            <ul class="flex flex-col">

                <SideIcon v-for="item in sideIcons" :item="item" :key="item.id"/>

            </ul>

        </div>

        <Info v-for="item in appInfo" :item="item" class="mb-[46px] shadow-2xl " :class="darkTheme ? 'shadow-[#2A86E512]/10' : ''"/>

        <div class="flex justify-between">

            <div class="mr-[39px] w-[815px] max-xl:mr-0 max-xl:pr-0 max-xl:w-[736px] max-md:mr-[5px] max-md:w-full max-md:pr-0 max-md:mx-auto">

                <div class="">

                    <div class="text-[14px] text-[#707070] leading-[18px] tracking-[0.5px] font-red_display font-normal flex items-center align-baseline max-md:block  max-md:text-center max-md:h-[36px] max-md:w-full">



                            Home <span class="pt-[2px] px-[4px] h-[18px]">></span>  Lorem Ipsum is <span class="pt-[1px] px-[4px] h-[18px]">></span> <span class="font-bold text-center w-auto h-[18px]"> Lorem Ipsum is simply dummy</span>



                    </div>

                    <h1 class="linear text-[42px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]">

                        Lorem Ipsum is simply dummy

                    </h1>

                </div>

                <div class="text-[20px] text-[#707070] leading-[32px] tracking-[0.5px] font-red_display font-normal mt-[20px] mb-[60px]"
                     :class="darkTheme ? 'text-white' : 'text-[#707070]'">

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </div>

                <div class="flex flex-col">

                    <div class="flex flex-col mb-[20px]">

                        <h2 class="text-[20px] text-[#707070] leading-[26px] tracking-[0.5px] font-red_display font-bold">Similar articles</h2>

                        <div class="w-[44px] h-[8px] background rounded-3xl mt-[9px]"></div>

                    </div>


                    <div class="block grid grid-rows-2 grid-flow-col gap-4  max-xl:h-auto max-md:flex max-md:flex-col">

                        <Article v-for="item in articles" :item="item" :key="item.id" />

                    </div>

                </div>

            </div>

            <SideAd class="max-xl:hidden"/>

        </div>

    </div>

</template>

<style>

.linear {
    background: -webkit-linear-gradient(#0DD0BA, #2A86E5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.background{
    background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%)
}
</style>