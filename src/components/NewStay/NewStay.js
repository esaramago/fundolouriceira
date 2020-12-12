import { db } from '../../firebaseDatabase';

export default {
    /* eslint-disable no-debugger */
    data() {
        return {
            responsible: 0,
            hosts: null,
            startDate: null,
            endDate: null,
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
    created() {
        /* db.collection('responsibles').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let item = doc.data();
                    item.id = doc.id; // set id
                    this.stays.push(item);
                })
            }) */
    },
    methods: {
        addStay(e) {
            e.preventDefault();
            let hasError = false;

            if (!this.responsible) {
                this.responsibleError = 'Seleciona o teu nome';
                hasError = true;
            }
            if (!this.hosts) {
                this.hostsError = 'Indica o número total de hóspedes';
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

            let startDate;
            let endDate;
            if (this.startDate && this.endDate) {

                startDate = new Date(this.startDate).getTime();
                endDate = new Date(this.endDate).getTime();

                if (startDate >= endDate) {
                    this.datesError = true;
                    hasError = true;
                }
            }

            if (!hasError) {

                const that = this;

                db.collection('stays').add({
                    responsible: this.responsibles.find(x => x.id == this.responsible),
                    startDate: startDate,
                    endDate: endDate,
                    hosts: this.hosts,
                    //  timestamp: firebase.firestore.FieldValue.serverTimestamp()
                }).catch(function (error) {
                    console.error('Error writing new message to database', error);
                })
                    .then(snapshot => {
                        console.log(snapshot)
                        that.$router.push('historico');
                    });
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