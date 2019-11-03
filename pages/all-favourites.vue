<template>
  <div>
    <h1>Most liked Star Wars characters</h1>
    <allCharacterList :characters="characters" />
  </div>
</template>
<script>
import firebase from '~/plugins/firebase';
import allCharacterList from '@/components/all-character-list';

export default {
  data: () => ({ characters: [] }),
  components: {
    allCharacterList
  },
  created() {
    const charactersCollection = firebase.collection('characters');
    charactersCollection
    .where('favouriteCount', '>', 0)
    .orderBy('favouriteCount', 'desc')
    .onSnapshot(charactersRef => {
      this.$data.characters = [];
      charactersRef.forEach(doc => {
        const character = doc.data();
        this.$data.characters.push(character);
      });
    });
  }
}
</script>