import { db } from '@/firebaseDatabase';
import Dialog from '@/components/Dialog/Dialog.vue';
import StayForm from '@/components/StayForm/StayForm.vue';

export default {
    /* eslint-disable no-debugger */
    components: {
        Dialog,
        StayForm
    },
    data() {
        return {
            isLoading: null,
            isEditing: false,
            editingStay: null,
            stays: [],
            totals: {}
        }
    },
    created() {
        this.getStays()
    },
    methods: {
        getStays() {
            this.isLoading = true
            db.collection(this.$stays).get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        let stay = doc.data()

                        stay.id = doc.id; // set id

                        if (stay.startDate) {
                            stay.startDateTime = new Date(stay.startDate)
                            stay.startDate = stay.startDateTime.toISOString().split('T')[0]; // set timepicker readable format
                            stay.startDateStr = stay.startDateTime.toLocaleDateString('pt-PT') // formate date
                        }
                        if (stay.endDate) {
                            stay.endDateTime = new Date(stay.endDate)
                            stay.endDate = stay.endDateTime.toISOString().split('T')[0]; // set timepicker readable format
                            stay.endDateStr = stay.endDateTime.toLocaleDateString('pt-PT') // formate date
                        }

                        if (stay.startDate && stay.endDate) {
                            const oneDay = 24 * 60 * 60 * 1000;
                            stay.nights = Math.round(Math.abs((stay.startDateTime - stay.endDateTime) / oneDay))
                        }

                        const perNight = 5
                        stay.total = perNight * stay.nights * stay.hosts

                        this.stays.push(stay)
                    })

                    // sort array by start date
                    this.stays.sort(function (a, b) {
                        return b.startDateTime - a.startDateTime;
                    });

                    this.setTotals();

                    this.isLoading = false
                })
        },
        setTotals() {
            this.totals.nights = this.stays.reduce((accum, item) => accum + item.nights, 0) // calculate total of nights
            this.totals.value = this.stays.reduce((accum, item) => accum + item.total, 0) // calculate total value
        },
        deleteStay(stay, index) {
            const that = this;
            const id = stay.id;
            const confirmDelete = confirm('Queres mesmo apagar esta estadia?');
            if (confirmDelete) {
                db.collection(this.$stays).doc(id).delete().then(function () {
                    that.$emit('show-toastr', {
                        message: 'Estadia removida com sucesso'
                    });
                    that.stays.splice(index, 1); // remove from table
                }).catch(function (error) {
                    that.$emit('show-toastr', {
                        message: 'Não foi possível remover a estadia',
                        type: 'error'
                    });
                    console.error(error);
                });
            }
        },
        openEditModal(stay) {
            this.isEditing = true
            this.editingStay = stay
        },
        closeEditModal() {
            this.isEditing = false
        },
        onSaveStay() {
            this.closeEditModal()
            this.stays = [] // clear table
            this.isLoading = true // show loading
            this.getStays() // load stays
        }
    }
}