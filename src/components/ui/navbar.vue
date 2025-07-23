<script setup>
import { ref } from 'vue';

    const isOpen = ref(false)
</script>

<template>
    <nav class="flex items-center justify-between px-8 py-5 border-b-2 border-gray-200">
        <div>
            <h1 class="font-semibold">Meal <span class="text-[var(--color-primary)]">Recipe</span></h1>
            <p class="text-sm">From TheMealDB <span class="font-semibold">Api</span></p>
        </div>

        <button class="md:hidden" @click="isOpen = true">
            <span class="material-symbols-outlined">
                menu
            </span>
        </button>
        <div class=" w-[400px] hidden md:flex md:justify-around">
            <router-link to="/">Home</router-link>
            <router-link to="/category">Category</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </nav>
    <nav v-if="isOpen" 
        class="fixed top-0 left-0 right-0 flex flex-col p-5 bg-white shadow-md transition-transform duration-300 transform translate-y-0 z-50">
        <button class="w-full flex justify-end" @click="isOpen = false">
            <span class="material-symbols-outlined">
                close
            </span>
        </button>
        <router-link class="py-2 border-b-1 border-gray-300" @click="isOpen = false" to="/">Home</router-link>
        <router-link class="py-2 border-b-1 border-gray-300" @click="isOpen = false" to="/category">Category</router-link>
        <router-link class="py-2 border-b-1 border-gray-300" @click="isOpen = false" to="/about">About</router-link>
    </nav>
</template>