<template>
  <b-card v-if="character.image" no-body class="overflow-hidden" style="max-width: 900px;">
    <b-row no-gutters>
      <b-col md="6">
        <cld-image :publicId="`jam/${character.image}`" width="300" crop="fill" fetchFormat="auto" quality="auto" />
      </b-col>
      <b-col md="6">
        <b-card-body :title="character.name">
          <b-card-sub-title class="mb-2">{{ character.weapon }}</b-card-sub-title>
          <b-card-text>
            {{ character.bio }}
          </b-card-text>
        </b-card-body>
         <b-card-footer v-if="user" footer-class="text-center white">
           <b-button size="lg" @click="toggleFavourite" :variant="character.favourite.includes(user.uid) ? 'danger' : 'info'">{{ character.favourite.includes(user.uid) ? 'Unfavourite' : 'Favourite' }}</b-button>
         </b-card-footer>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import firebase, { firestore } from '~/plugins/firebase';

export default {
  data: () => ({ character: {} }),
  created() {
    const accessUrl = `${this.$route.params.name}.json`;
    const charactersCollection = firebase.collection('characters');
    charactersCollection.doc(accessUrl)
    .onSnapshot(document => {
      this.$data.character = {};
      this.$data.reference = document.ref.path;
      const character = document.data();
      this.$data.character = character;
    });
  },
  methods: {
    async toggleFavourite() { 
      const user = this.$store.getters.activeUser;
      const sanitisedName = `${this.$data.character.name.replace(/-|\s/g, '').toLowerCase()}`;
      const accessUrl = `${sanitisedName}.json`;
      const charactersCollection = firebase.collection('characters');
      if (!this.$data.character.favourite.includes(this.user.uid)) {
        await charactersCollection.doc(accessUrl).update({ favourite: firestore.FieldValue.arrayUnion(user.uid) });
      } else {
        await charactersCollection.doc(accessUrl).update({ favourite: firestore.FieldValue.arrayRemove(user.uid) });
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.activeUser;
    }
  }
}
</script>
<style scoped>
.white {
  background-color: transparent;
}
</style>