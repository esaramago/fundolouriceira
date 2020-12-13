
export default {
    /* eslint-disable no-debugger */
    props: ['isopen'],
    methods: {
        close() {
            this.$emit('close-dialog');
        }
    }
}