<template>
    <div id="app" class="o-wrapper v-cloak">
        <Header />
        <main class="o-view">
            <router-view v-on:show-toastr="showToastr" />
        </main>
        <Navigation />
        <div class="c-toastr">
            <Toastr v-for="toastr in toastrs" :config="toastr" :key="toastr.id" />
        </div>
    </div>
</template>

<script src="./App.js"></script>
