import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//引入state
// import state from "./myNum/state"
// import getters from "./myNum/getters"
// import mutations from "./myNum/mutations"
// import actions from "./myNum/actions"

// export default new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions
// })

import myNum from "./myNum";
import myCar from "./myCar";

export default new Vuex.Store({
  modules: {
    myNum, myCar
  }
})
  
