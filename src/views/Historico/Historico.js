import { db } from '../../firebaseDatabase';

export default {
    /* eslint-disable no-debugger */
    data() {
        return {
            stays: []
        }
    },
    created() {
        db.collection('stays').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let item = doc.data();
                    item.startDate = new Date(doc.data().startDate).toLocaleDateString(); // formate date
                    item.endDate = new Date(doc.data().endDate).toLocaleDateString(); // formate date
                    item.id = doc.id; // set id
                    this.stays.push(item);
                })
            })
    },
}