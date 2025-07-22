<script setup>
</script>

<template>
    <nav class="flex items-center justify-between px-8 py-5">
        <div>
            <h1 class="font-semibold">Meal <span class="text-[var(--color-primary)]">Recipe</span></h1>
            <p class="text-sm">From themealdb <span class="font-semibold">Api</span></p>
        </div>

        <div class="w-[400px] flex justify-around">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </nav>
</template>