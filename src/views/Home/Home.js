import Dialog from '@/components/Dialog/Dialog.vue';
import StayForm from '@/components/StayForm/StayForm.vue';

export default {
    /* eslint-disable no-debugger */
    components: {
        StayForm,
        Dialog
    },
    data() {
        return {
            stayAdded: false
        }
    },
    methods: {
        openStayAddedConfirmation() {
            this.stayAdded = true;
        }
    }
}