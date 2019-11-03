<template>
  <div>
    <b-list-group v-if="characters.length > 0">
      <b-list-group-item :to="createUrl(character.name)" v-for="(character, index) in characters" :key="index" class="d-flex justify-content-between align-items-center">
        {{ character.name }}
        <b-badge class="large" variant="primary" pill>{{ character.favouriteCount }}</b-badge>
      </b-list-group-item>
    </b-list-group>
    <b-list-group v-if="characters.length === 0">
      <b-list-group-item to="/characters" class="d-flex justify-content-between align-items-center">
        There are no favourites. Login and see the list of characters.
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  props: ['characters'],
  methods: {
    createUrl(name) {
      return `/characters/${name.replace(/-|\s/g, '').toLowerCase()}`;
    },
  }
}
</script>
<style scoped>
.large {
  font-size: 1rem;
}
</style>
