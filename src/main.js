import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

/* add icons to the library */
library.add(faStar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')