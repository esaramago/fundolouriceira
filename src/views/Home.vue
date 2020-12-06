<template>
    <div class="o-stack">
        <h2 class="a-title">Nova estadia</h2>
        <form class="o-stack">
            <div>
                <label for="responsible">Hóspede responsável</label>
                <select name="responsible" id="responsible">
                    <option selected disabled>Seleciona</option>
                    <option value="">Carina</option>
                    <option value="">Emanuel</option>
                    <option value="">Ludmila</option>
                    <option value="">Rosinha</option>
                    <option value="">Rute</option>
                    <option value="">Vítor</option>
                </select>
            </div>
            <div>
                <label for="number">Nº total de hóspedes</label>
                <input type="number" name="number" id="number" min="1" max="15" class="a-input--xs" />
            </div>
            <div>
                <label for="startDate">Data de chegada</label>
                <input type="date" name="startDate" id="startDate" class="a-input--sm">
            </div>
            <div>
                <label for="endDate">Data de saída</label>
                <input type="date" name="endDate" id="endDate" class="a-input--sm" />
            </div>
            <button class="a-button">Adicionar</button>
        </form>
    </div>
</template>

<style>
.o-view {
    max-width: 32rem;
}
</style>
