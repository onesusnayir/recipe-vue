<script setup>
import { onMounted, reactive, ref } from 'vue';

const categories = ref([])
const category = ref('')
const meals = ref([])

onMounted(async () => {
    const resCategories = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')

    const categoriesData = await resCategories.json()
    categories.value = categoriesData.meals

    const newCategories = categoriesData.meals.map((item) => {
        return item.strCategory
    })

    categories.value = newCategories
    category.value = categoriesData.meals[0].strCategory

    const resMealsByCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.value}`)

    const mealsByCategoryData = await resMealsByCategory.json()
    meals.value = mealsByCategoryData.meals
})

const handleCategory = async() => {
    const resMealsByCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.value}`)

    const mealsByCategoryData = await resMealsByCategory.json()
    meals.value = mealsByCategoryData.meals
}
</script>

<template>
    <main class="mt-10 px-10">
        <section>
            <h2 class="text-center text-2xl font-semibold">Recipes By Category</h2>
            <label class="mt-10 flex gap-5 items-center">
                Category:
                <select v-model="category" @change="handleCategory">
                    <option v-for="(item) in categories">{{ item }}</option>
                </select>
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 py-5">
                <article v-for="(item) in meals" class="rounded-2xl p-5 flex flex-col gap-3 shadow-2xl" :key="item.idMeal">
                    <img class="w-full rounded-2xl" :src="item.strMealThumb"/>
                    <h3 class="flex-1 flex items-center justify-center text-center font-semibold">{{ item.strMeal }}</h3>
                    <button class="w-full mt-auto py-1 text-center font-semibold bg-[var(--color-primary)] rounded-md">
                        <router-link :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }">
                            See Recipe
                        </router-link>
                    </button>
                </article>
            </div>
        </section>
    </main>
</template>