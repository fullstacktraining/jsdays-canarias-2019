export default function ({ store, redirect, route }) {
  store.state.user != null && route.name == 'login' ? redirect('/my-favourites') : ''
  store.state.user == null && isAuthenticated(route) ? redirect('/') : ''
}

function isAuthenticated(route) {
  if (route.name === 'my-favourites') {
    return true;
  }
}