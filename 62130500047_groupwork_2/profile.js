const app = {
    data() {
        return {
            firstname: 'Noochajee' ,
            lastname: 'Phonbooncharoenchai' ,
            country: 'Thailand',
            shown: true ,
            upper: 'images/Upper-cloud.jpg',
            profile: 'images/Nooch.jpg'
        }
    }
}
var mountedApp;
mountedApp = Vue.createApp(app).mount('#app')