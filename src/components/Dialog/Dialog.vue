<template>
    <dialog class="c-dialog" :open="isopen">
        <div class="c-dialog__content">
            <slot></slot>
            <button type="button" class="c-dialog__close" v-on:click="close" v-if="showclose">
                <svg>
                    <use xlink:href="/img/sprite.svg#close"></use>
                </svg>
            </button>
        </div>
    </dialog>
</template>
<script src="./Dialog.js"></script>
<style src="./Dialog.scss" lang="scss"></style>