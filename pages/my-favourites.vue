<template>
  <character-list :characters="characters" />
</template>

<script>
import firebase from '~/plugins/firebase';
import characterList from '@/components/character-list';

export default {
  data: () => ({ characters: [] }),
  components: {
    characterList
  },
  mounted() {
    this.getData();
  },
  updated() {
    this.getData()
  },
  methods: {
    getData() {
      if (this.user) {
        const charactersCollection = firebase.collection('characters');
        const allCharacters = [];
        charactersCollection.onSnapshot(charactersRef => {
          this.$data.characters = [];
          charactersRef.forEach(doc => {
            const character = doc.data();
            allCharacters.push(character);
          });
          this.$data.characters = allCharacters.filter(character => {
            return character.favourite.includes(this.user.uid);
          });
        });
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
