import { db } from '../../firebaseDatabase';

export default {
    /* eslint-disable no-debugger */
    data() {
        return {
            isLoading: true,
            stays: []
        }
    },
    created() {
        db.collection('stays').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let stay = doc.data();

                    stay.id = doc.id; // set id

                    const startDate = new Date(doc.data().startDate)
                    const endDate = new Date(doc.data().endDate)
                    stay.startDate = startDate.toLocaleDateString(); // formate date
                    stay.endDate = endDate.toLocaleDateString(); // formate date

                    const oneDay = 24 * 60 * 60 * 1000;
                    stay.nights = Math.round(Math.abs((startDate - endDate) / oneDay));

                    const perNight = 5;
                    stay.total = perNight * stay.nights * stay.hosts;
                    
                    this.stays.push(stay);

                    this.isLoading = false;
                })
            })
    },
}