<template>
    <section v-if="recipe.strMeal" class="p-8">
        <h1 class="text-center text-2xl font-bold">{{ recipe.strMeal }}</h1>
        <div class="flex justify-center my-3">
            <img :src="recipe.strMealThumb" class="h-[200px]"/>
        </div>
        <table>
            <tbody>
                <tr>
                    <td class="w-[110px] font-semibold">Category</td>
                    <td>: {{ recipe.strCategory }}</td>
                </tr>
                <tr>
                    <td class="font-semibold">Area</td>
                    <td>: {{ recipe.strArea }}</td>
                </tr>
                <tr>
                    <td class="font-semibold">Tags</td>
                    <td>: {{ recipe.strTags }}</td>
                </tr>
            </tbody>
        </table>

        <h2 class="mt-10 text-xl font-semibold">Instructions:</h2>
        <p class="text-justify">{{ recipe.strInstructions }}</p>

        <h2 class="mt-10 text-xl font-semibold">Ingredients:</h2>
        <ol class="list-decimal ml-6">
            <li v-for="(ingredient) in ingredients" class="pl-2">{{ ingredient.ingredient }} ({{ ingredient.measurement }})</li>
        </ol>
    </section>
</template>
<script setup>
import { onMounted, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
    const route = useRoute()

    const recipeId = route.params.id
    const recipe = reactive({})

    onMounted(async () =>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        const data = await res.json()

        Object.assign(recipe, data.meals[0])
    })

    const ingredients = computed(() => {
        const list = []
        for (let i = 1; i <= 20; i++) {
            const ingredient = {
                ingredient: recipe[`strIngredient${i}`],
                measurement: recipe[`strMeasure${i}`]
            }
            if (ingredient.ingredient) list.push(ingredient)
        }
        return list
    })
</script>