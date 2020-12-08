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
            datesError: false
        }
    },
    methods: {
        addStay(e) {
            e.preventDefault();

            let hasError = false;

            if (!this.responsible) {
                this.responsibleError = 'Seleciona o teu nome';
                hasError = true;
            }
            if (!this.number) {
                this.numberError = 'Indica o número total de hóspedes';
                hasError = true;
            }
            if (!this.startDate) {
                this.startDateError = 'Indica a data de chegada';
                hasError = true;
            }
            if (!this.endDate) {
                this.endDateError = 'Indica a data de partida';
                hasError = true;
            }
            if (this.startDate && this.endDate) {
                if (new Date(this.endDate).getTime() <= new Date(this.startDate).getTime()) {
                    this.datesError = true;
                    hasError = true;
                }
            }

            if (!hasError) {
                debugger
            }
        },
        onChangeDate(e) {
            this.datesError = false;
            this.removeErrorLabel(e)
        },
        removeErrorLabel(e) {
            const errorProp = e.currentTarget.name + 'Error';
            this[errorProp] = '';
        }
    }
}