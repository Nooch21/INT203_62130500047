const app = {
    data() {
        return {
            upper: 'images/Upper-cloud.jpg',
            profile: 'images/Nooch.jpg',
            firstname: 'Noochajee' ,
            lastname: 'Phonbooncharoenchai' ,
            country: 'Thailand',
            followbtn: 'Follow',
            followers: 'Followers',
            projects: 'Projects',
            ranks: 'Ranks',
            followersnum: '2,020',
            projectsnum: '127',
            ranksnum: '27'
        }
    }
}
var mountedApp;
mountedApp = Vue.createApp(app).mount('#app')