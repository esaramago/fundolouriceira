<template>
    <div>
        <div class="o-content">
            <div class="o-stack">
                <h2 class="a-title">Nova estadia</h2>
                <StayForm :isnew="true" v-on:stay-added="openStayAddedConfirmation" />
            </div>
        </div>
        <Dialog :isopen="stayAdded" :showclose="false">
            <div class="o-stack">
                <h2 class="a-title">Estadia adicionada!</h2>
                <p>Coloca <strong>40 €</strong> no mealheiro.</p>
                <div>
                    <router-link to="Historico" class="a-button">Ok</router-link>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<style src="./Home.css" scoped></style>
<script src="./Home.js"></script>