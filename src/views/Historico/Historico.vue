<template>
    <div class="o-content">
        <div class="o-stack">
            <h2 class="a-title">Histórico</h2>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Noites</th>
                        <th>Hóspedes</th>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stay of stays" :key="stay['.key']">
                        <td>{{stay.startDate}} até {{stay.endDate}}</td>
                        <td></td>
                        <td>{{stay.responsible.name}} + {{stay.hosts-1}}</td>
                        <td>€</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script src="./Historico.js"></script>