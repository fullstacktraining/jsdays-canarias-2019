<template>
  <div>
    <b-list-group v-if="characters.length">
      <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(character, index) in characters" :key="index" :to="createUrl(character.name)">{{ character.name }}
        <cld-image :publicId="`jam/${character.image}`" width="40" height="40" crop="thumb" fetchFormat="auto" gravity="face" quality="auto" radius="max" />
      </b-list-group-item>
    </b-list-group>
    <b-list-group v-else>
      <b-list-group-item class="d-flex justify-content-between align-items-center" to="/characters">You have no favourites. Visit the Characters page to add some</b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  props: ['characters'],
  methods: {
    createUrl(name) {
      return `/characters/${name.replace(/-|\s/g, '').toLowerCase()}`;
    }
  }
}
</script>