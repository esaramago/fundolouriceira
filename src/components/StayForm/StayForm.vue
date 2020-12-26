<template>
    <form class="o-stack" v-on:submit="addStay" v-if="stay">
        <div class="c-form" v-bind:class="{'--has-error': responsibleError}">
            <label for="responsible">Hóspede responsável</label>
            <select
                name="responsible"
                id="responsible"
                v-model="stay.responsible"
                v-on:change="removeErrorLabel"
            >
                <option value="" selected disabled>Seleciona</option>
                <option v-for="responsible of responsibles" v-bind:value="responsible" :key="responsible['.key']">{{responsible.name}}</option>
            </select>
            <p class="c-form__error">{{responsibleError}}</p>
        </div>
        <div class="c-form --xs" v-bind:class="{'--has-error': hostsError}">
            <label for="hosts">Total de hóspedes <span class="a-text-small u-display-block--small">Incluir hóspede responsável</span></label>
            <input
                type="number"
                name="hosts"
                id="hosts"
                v-model="stay.hosts"
                min="1"
                max="15"
                placeholder="0"
                v-on:input="removeErrorLabel"
            >
            <p class="c-form__error">{{hostsError}}</p>
        </div>
        <div>
            <div class="o-stack --inline">
                <div class="c-form" v-bind:class="{'--has-error': startDateError || datesError}">
                    <label for="startDate">Data de chegada</label>
                    <input
                        type="date"
                        name="startDate"
                        v-model="stay.startDate"
                        id="startDate"
                        v-on:input="onChangeDate"
                    >
                    <p class="c-form__error">{{startDateError}}</p>
                </div>
                <div class="c-form" v-bind:class="{'--has-error': endDateError || datesError}">
                    <label for="endDate">Data de saída</label>
                    <input
                        type="date"
                        name="endDate"
                        v-model="stay.endDate"
                        id="endDate"
                        v-on:input="onChangeDate"
                    >
                    <p class="c-form__error">{{endDateError}}</p>
                </div>
            </div>
            <p class="c-form__error" v-if="datesError">A data de chegada tem de ser anterior à data de partida.</p>
        </div>

        <div>
            <button class="a-button">
                <template v-if="isnew">Adicionar</template>
                <template v-else>Gravar</template>
            </button>
        </div>
    </form>
</template>
<script src="./StayForm.js"></script>