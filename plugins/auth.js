import { auth } from './firebase';

export default context => {
  const { store } = context;

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      store.commit('SET_USER', user);
      resolve();
    });
  });
}