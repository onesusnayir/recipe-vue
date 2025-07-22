<template>
    <h1 class="mt-10 px-10 font-bold text-2xl">About This Website</h1>
    <section class="px-8">
        <h2 class="mt-5 px-10 font-semibold text-xl">From Developers</h2>
        <p class="mt-5 px-10 text-justify">
            Hello, my name is Riyan Suseno. I am building this website to learn a JavaScript framework called Vue.js. 
            This is actually my first project using Vue.js. 
            Through this project, I’m learning how to structure components, use lifecycle hooks like <code>onMounted</code>, fetch data from public APIs, and manage dynamic content using <code>v-model</code> and <code>v-for</code>.
            I chose to build a meal recipe website because it’s fun, visually appealing, and involves a lot of interaction with data — which helps me understand how Vue works in real-world scenarios.
        </p>

    </section>
    <section class="px-8 pb-5">
        <h2 class="mt-5 px-10 font-semibold text-xl">Api - TheMealDB</h2>
        <p class="mt-5 px-10 text-justify">
            We are using <strong>TheMealDB</strong> API for this website to fetch various recipes from various categories around the world.
            This powerful API allows us to access a rich database of meals, complete with images, ingredients, and instructions.
            Thanks to TheMealDB being a free and open API, we're able to fetch data without the need for user accounts or subscriptions.
            It's a perfect starting api to practice Frontend skill to fetch data.
        </p>
        <p class="px-10 mt-5">If you guys interested to use TheMealDB api you guys can click button below</p>
        <button class="ml-10 mt-2 px-5 py-2 rounded-xl bg-[var(--color-primary)] font-semibold cursor-pointer"><a>Go to TheMealDB Web</a></button>
    </section>
</template>