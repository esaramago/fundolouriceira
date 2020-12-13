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
            stays: []
        }
    },
    created() {
        this.getStays()
    },
    methods: {
        getStays() {
            this.isLoading = true
            db.collection('stays').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        let stay = doc.data()

                        stay.id = doc.id; // set id

                        const startDate = new Date(doc.data().startDate)
                        const endDate = new Date(doc.data().endDate)
                        stay.startDate = startDate.toLocaleDateString() // formate date
                        stay.endDate = endDate.toLocaleDateString() // formate date

                        const oneDay = 24 * 60 * 60 * 1000;
                        stay.nights = Math.round(Math.abs((startDate - endDate) / oneDay))

                        const perNight = 5
                        stay.total = perNight * stay.nights * stay.hosts

                        this.stays.push(stay)

                        this.isLoading = false
                    })
                })
        },
        deleteStay(stay, index) {
            const that = this;
            const id = stay.id;
            const confirmDelete = confirm('Queres mesmo apagar esta estadia?');
            if (confirmDelete) {
                db.collection('stays').doc(id).delete().then(function () {
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
            this.isEditing = true;
            this.editingStay = stay;
        },
        closeEditModal() {
            this.isEditing = false;
        },
        onSaveStay() {
            this.closeEditModal();
            this.getStays()
        }
    }
}