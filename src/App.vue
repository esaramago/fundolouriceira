<template>
    <div id="app" class="o-wrapper v-cloak">
        <Header />
        <main class="o-view">
            <router-view />
        </main>
        <Navigation />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation/Navigation.vue";

export default {
    name: "App",
    components: {
        Header,
        Navigation
    },
    methods: {
        
    }
};
</script>
