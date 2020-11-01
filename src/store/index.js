import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	color: '#16a085',
  	count:0,
  },
  mutations: {
  	increment(state, n){
  		if (state.count > 0) {
  			state.color = n;
  		}
  		
  		state.count++;
  	}
  },
  actions: {
  },
  modules: {
  }
})
