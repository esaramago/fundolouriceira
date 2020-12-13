
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation/Navigation.vue";
import Toastr from '@/components/Toastr/Toastr.vue';

/* eslint-disable no-debugger */
export default {
    name: "App",
    components: {
        Header,
        Navigation,
        Toastr: Toastr
    },
    data() {
        return {
            toastrs: []
        }
    },
    methods: {
        showToastr(toastr) {
            toastr.id = Math.random(); // set toastr id
            this.toastrs.push(toastr); // add toastr to toastrs array
        }
    }
};