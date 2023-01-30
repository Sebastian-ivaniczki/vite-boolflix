import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar  as solidlarStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar} from '@fortawesome/free-regular-svg-icons'
import App from './App.vue'

/* add icons to the library */
library.add(solidlarStar);
library.add(regularStar)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')