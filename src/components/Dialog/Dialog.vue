<template>
    <dialog class="c-dialog" :open="isopen">
        <div class="c-dialog__content">
            <button type="button" class="c-dialog__close" v-on:click="close">
                <svg>
                    <use xlink:href="/img/sprite.svg#close"></use>
                </svg>
            </button>
            <slot></slot>
        </div>
    </dialog>
</template>
<script src="./Dialog.js"></script>
<style src="./Dialog.scss" lang="scss"></style>