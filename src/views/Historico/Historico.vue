<template>
    <div>
        <div class="o-content">
            <div class="o-stack">
                <h2 class="a-title">Histórico</h2>
                <div v-bind:class="{'is-loading': isLoading}">
                    <table class="c-table">
                        <thead>
                            <tr>
                                <th class="u-text-left">Data</th>
                                <th>Noites</th>
                                <th class="u-text-left">Hóspedes</th>
                                <th class="u-text-right">Total</th>
                                <th colspan="2" width="10"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(stay, index) of stays" :key="stay['.key']">
                                <td>{{stay.startDate}} <span class="is-hidden--small">até {{stay.endDate}}</span></td>
                                <td class="u-text-center">{{stay.nights}}</td>
                                <td>{{stay.responsible.name}} + {{stay.hosts-1}}</td>
                                <td class="u-text-right">{{stay.total}} €</td>
                                <td class="c-table__col-auto">
                                    <button type="button" class="a-icon" v-on:click="openEditModal(stay)">
                                        <svg>
                                            <use xlink:href="/img/sprite.svg#create"></use>
                                        </svg>
                                    </button>
                                </td>
                                <td class="c-table__col-auto">
                                    <button type="button" class="a-icon" v-on:click="deleteStay(stay, index)">
                                        <svg>
                                            <use xlink:href="/img/sprite.svg#delete"></use>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Dialog :isopen="isEditing" v-on:close-dialog="closeEditModal">
            <div class="o-stack">
                <h2 class="a-title">Alterar estadia</h2>
                <StayForm :stay="editingStay" v-on:stay-edited="onSaveStay" />
            </div>
        </Dialog>
    </div>
</template>
<script src="./Historico.js"></script>