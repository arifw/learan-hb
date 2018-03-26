<template>
  <v-list two-line v-if="allRemotes.length">
    <v-subheader>Remotes list</v-subheader>
    <transition-group name="list" type="transition">
      <hb-remote :remote="remoteItem" v-for="remoteItem in allRemotes" :key="remoteItem._id" class="list-item">Remote content</hb-remote>
    </transition-group>
  </v-list>
  <v-card v-else>
    <v-card-text>nothing here</v-card-text>
  </v-card>
</template>

<script>
  import HbRemote from './Remote.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: { HbRemote },
    computed: {
      ...mapGetters(['allRemotes'])
    }
  }
</script>

<style lang="stylus">
.list-item {
  transition: all 1s;
  diaplay: block
}

.list-enter, .list-leave-to {
  opacity: 0;
  tansform: translateY(30px)
}

.list-leave-active {
  position: absolute;

}
</style>