<template>
    <div :class="classes" :hidden="!isVisible" :key="config.id">
        {{config.message}}
        <button type="button" class="c-toastr__close" v-on:click="hide">
            <svg>
                <use xlink:href="/img/sprite.svg#close"></use>
            </svg>
        </button>
    </div>
</template>
<script src="./Toastr.js"></script>
<style src="./Toastr.scss" lang="scss"></style>