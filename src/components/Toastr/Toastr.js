
export default {
    /* eslint-disable no-debugger */
    props: ['config'],
    data() {
        return {
            duration: 4000,
            animationDuration: 0,
            isRendered: false,
            isVisible: true
        }
    },
    computed: {
        classes() {
            return `
                c-toastr__item
                ${this.config.type ? '--' + this.config.type : ''}
                ${this.isRendered ? 'is-visible' : ''}
            `;
        }
    },
    mounted() {

        this.animationDuration = getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('--toastr-duration').replace('s', '') * 1000;

        setTimeout(() => {
            this.isRendered = true;
        }, 1);

        // hide toastr after x seconds
        setTimeout(() => {
            this.isRendered = false;
        }, this.duration);

        setTimeout(() => {
            this.isVisible = false;
        }, this.duration + this.animationDuration);
    },
    methods: {
        hide() {
            this.isRendered = false;
            setTimeout(() => {
                this.isVisible = false;
            }, this.animationDuration);
        }
    }
}