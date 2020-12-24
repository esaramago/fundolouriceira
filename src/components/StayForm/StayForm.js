import { db } from '@/firebaseDatabase';

export default {
    /* eslint-disable no-debugger */
    props: {
        isnew: Boolean,
        stay: {
            type: Object,
            default() {
                return {
                    responsible: '',
                    hosts: null,
                    startDate: null,
                    endDate: null
                }
            }
        }
    },
    data() {
        return {
            responsibleError: '',
            hostsError: '',
            startDateError: '',
            endDateError: '',
            datesError: false,
            responsibles: [
                {
                    id: 0,
                    name: 'Carina'
                },
                {
                    id: 1,
                    name: 'Emanuel'
                },
                {
                    id: 2,
                    name: 'Ludmila'
                },
                {
                    id: 3,
                    name: 'Rosinha'
                },
                {
                    id: 4,
                    name: 'Rute'
                },
                {
                    id: 5,
                    name: 'Vítor'
                },
            ]
        }
    },
    methods: {
        addStay(e) {
            e.preventDefault();
            let hasError = false;

            if (!this.stay.responsible) {
                this.responsibleError = 'Seleciona o teu nome';
                hasError = true;
            }

            if (!this.stay.hosts) {
                this.hostsError = 'Indica o número total de hóspedes';
                hasError = true;
            }
            if (!this.stay.startDate) {
                this.startDateError = 'Indica a data de chegada';
                hasError = true;
            }
            if (!this.stay.endDate) {
                this.endDateError = 'Indica a data de partida';
                hasError = true;
            }

            let startDate;
            let endDate;
            if (this.stay.startDate && this.stay.endDate) {

                startDate = new Date(this.stay.startDate).getTime(); // save time date
                endDate = new Date(this.stay.endDate).getTime(); // save time date

                if (startDate >= endDate) {
                    this.datesError = true;
                    hasError = true;
                }
            }

            if (!hasError) {

                const that = this;

                if (that.isnew) {

                    // Add new entry on DB
                    db.collection(this.$stays).add(this.stay).catch(function (error) {
                        console.error('Error writing new message to database', error);
                    })
                    .then(() => {
                        that.$router.push('historico');
                        that.$emit('show-toastr', {
                            message: 'Estadia adicionada com sucesso'
                        });

                        that.$storeAudit('add', that.stay);
                    }).catch(function (error) {
                        that.$emit('show-toastr', {
                            message: 'Não foi possível adicionar a estadia',
                            type: 'error'
                        });
                        console.error(error);
                    });
                }
                else {

                    // Update entry on DB
                    db.collection(this.$stays).doc(this.stay.id).update(this.stay).catch(function (error) {
                        console.error('Error updating message to database', error);
                    }).then(() => {

                        that.$emit('stay-updated');
                        that.$emit('show-toastr', {
                            message: 'Estadia atualizada com sucesso'
                        });

                        that.$storeAudit('update', that.stay);
                    }).catch(function (error) {
                        that.$emit('show-toastr', {
                            message: 'Não foi possível atualizar a estadia',
                            type: 'error'
                        });
                        console.error(error);
                    });
                }

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