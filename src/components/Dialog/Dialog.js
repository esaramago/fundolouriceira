
export default {
    /* eslint-disable no-debugger */
    props: {
        isopen: Boolean,
        showclose: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        close() {
            this.$emit('close-dialog');
        }
    }
}