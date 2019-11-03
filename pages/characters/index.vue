<template>
  <character-list v-if="characters.length" :characters="characters" />
</template>
<script>
import firebase from '@/plugins/firebase';
import characterList from '@/components/character-list';
export default {
  components: {
    characterList
  },
  async asyncData() {
    const charactersCollection = await firebase.collection('characters');
    const querySnapshot = await charactersCollection.get();
    let characters = querySnapshot.docs.map(doc => {
      return doc.data();
    });
    return { characters };
  }
}
</script>

