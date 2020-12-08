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
            <div class="o-stack --inline">
                <div class="c-form --sm" v-bind:class="{'--has-error': startDateError}">
                    <label for="startDate">Data de chegada</label>
                    <input
                        type="date"
                        name="startDate"
                        v-model="startDate"
                        id="startDate"
                        v-on:input="removeErrorLabel"
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
                        v-on:input="removeErrorLabel"
                    >
                    <p class="c-form__error">{{endDateError}}</p>
                </div>
            </div>
            <div>
                <button class="a-button">Adicionar</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.o-view {
    max-width: 41rem;
}
</style>

<script>
export default {
    /* eslint-disable no-debugger */
    data() {
        return {
            responsible: 0,
            number: null,
            startDate: null,
            endDate: null,
            responsibleError: '',
            numberError: '',
            startDateError: '',
            endDateError: '',
        }
    },
    methods: {
        addStay(e) {
            e.preventDefault();

            let hasError = false;

            if(!this.responsible) {
                this.responsibleError = 'Seleciona o teu nome';
                hasError = true;
            }
            if(!this.number) {
                this.numberError = 'Indica o número total de hóspedes';
                hasError = true;
            }
            if(!this.startDate) {
                this.startDateError = 'Indica a data de chegada';
                hasError = true;
            }
            if(!this.endDate) {
                this.endDateError = 'Indica a data de partida';
                hasError = true;
            }

            if(!hasError) {
                debugger
            }
        },
        removeErrorLabel(e) {
            const errorProp = e.currentTarget.name + 'Error';
            this[errorProp] = '';
        }
    }
}
</script>