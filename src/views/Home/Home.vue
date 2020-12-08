<template>
    <div class="o-stack">
        <h2 class="a-title">Nova estadia</h2>
        <form class="o-stack" v-on:submit="addStay">
            <div class="c-form" v-bind:class="{'--has-error': responsibleError}">
                <label for="responsible">Hóspede responsável</label>
                <select
                    name="responsible"
                    id="responsible"
                    v-model="responsible"
                    v-on:change="removeErrorLabel"
                >
                    <option value="0" selected disabled>Seleciona</option>
                    <option value="1">Carina</option>
                    <option value="2">Emanuel</option>
                    <option value="3">Ludmila</option>
                    <option value="4">Rosinha</option>
                    <option value="5">Rute</option>
                    <option value="6">Vítor</option>
                </select>
                <p class="c-form__error">{{responsibleError}}</p>
            </div>
            <div class="c-form --xs" v-bind:class="{'--has-error': numberError}">
                <label for="number">Total de hóspedes</label>
                <input
                    type="number"
                    name="number"
                    id="number"
                    v-model="number"
                    min="1"
                    max="15"
                    placeholder="0"
                    v-on:input="removeErrorLabel"
                >
                <p class="c-form__error">{{numberError}}</p>
            </div>
            <div>
                <div class="o-stack --inline">
                    <div class="c-form --sm" v-bind:class="{'--has-error': startDateError}">
                        <label for="startDate">Data de chegada</label>
                        <input
                            type="date"
                            name="startDate"
                            v-model="startDate"
                            id="startDate"
                            v-on:input="onChangeDate"
                        >
                        <p class="c-form__error">{{startDateError}}</p>
                    </div>
                    <div class="c-form --sm" v-bind:class="{'--has-error': endDateError}">
                        <label for="endDate">Data de saída</label>
                        <input
                            type="date"
                            name="endDate"
                            v-model="endDate"
                            id="endDate"
                            v-on:input="onChangeDate"
                        >
                        <p class="c-form__error">{{endDateError}}</p>
                    </div>
                </div>
                <p class="c-form__error" v-if="datesError">A data de chegada tem de ser anterior à data de partida.</p>
            </div>
            <div>
                <button class="a-button">Adicionar</button>
            </div>
        </form>
    </div>
</template>

<style src="./Home.css" scoped></style>
<script src="./Home.js"></script>