<template>
    <section class="px-10 pb-10">
        <h1 class="mt-10 text-center text-2xl font-semibold">Category that you can use to filter meals</h1>
        <div class="mt-5 flex flex-col gap-5">
            <article v-for="(category) in categories" :key="category.idCategory" class="flex flex-col md:flex-row gap-10 p-5 border-b-1 border-gray-300">
                <div class="flex justify-center md:justify-start">
                    <img :src="category.strCategoryThumb" class="min-w-[300px] max-w-[300px] max-h-[200px] object-cover bg-[var(--color-primary)] p-5 rounded-2xl"/>
                </div>
                <div>
                    <h2 class="text-xl font-semibold">{{ category.strCategory }}</h2>
                    <p class="text-justify">{{ category.strCategoryDescription }}</p>
                </div>
            </article>
        </div>
    </section>
</template>
<script setup>
import { onMounted, reactive } from 'vue';

const categories = reactive([])
onMounted(async() => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()

    categories.push(...data.categories)
})
</script>