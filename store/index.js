import firebase, { auth } from '@/plugins/firebase';

export const state = () => ({
  user: null
});

export const mutations = {
  SET_USER(state, payload) {
    if (payload) {
      const { uid, email, displayName } = payload;
      state.user = { uid, email, displayName };
    } else {
      state.user = null;
    }
  }
};

export const actions = {
  register({ commit }, payload) {
    return auth.createUserWithEmailAndPassword(payload.email, payload.password).then(data => {
      commit('SET_USER', data.user);
    }).catch(error => {
      throw new Error(error);
    });
  },
  signInWithEmail({ commit }, payload) {
    return auth.signInWithEmailAndPassword(payload.email, payload.password).then(firebaseUser => {
      commit('SET_USER', firebaseUser);
    }).catch(error => {
      throw new Error(error);
    });
  },
  signOut({ commit }) {
    auth.signOut().then(() => {
      commit('SET_USER', null);
    }).catch(error => {
      console.log(error)
    });
  }
};

export const getters = {
  activeUser: (state, getters) => {
    return state.user
  }
};