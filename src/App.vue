<template>
    <div id="app" class="o-wrapper">
        <Header />
        <router-view class="o-view" />
        <Navigation />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";

export default {
    name: "App",
    components: {
        Header,
        Navigation
    }
};
</script>
