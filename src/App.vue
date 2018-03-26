<template>
  <v-app dark>
    <v-toolbar dark fixed dense>
      <v-toolbar-title>Heartbeat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <main>
    <!-- <v-content> -->
      <v-container fluid class="pa-0">
        <v-layout column>
          <v-slide-y-transition mode="out-in">
            <v-slide-y-transition mode="out-in">
              <router-view></router-view>
            </v-slide-y-transition>
          </v-slide-y-transition>
        </v-layout>
      </v-container>
    <!-- </v-content> -->
    </main>

    <v-footer :fixed="true">
      <v-btn icon>
        <v-icon class="grey--text text-darken-3">settings</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="!$route.path.includes('/remote')" fab top right absolute class="accent" @click="add">
        <v-icon>add</v-icon>
      </v-btn>
    </v-footer>

  </v-app>
</template>

<script>
  import HbRemotesList from './components/RemotesList.vue'
  export default {
    components: {
      HbRemotesList
    },
    data () {
      return {
      }
    },
    methods: {
      add () {
        this.$router.push('/remote')
      }
    }
  }
</script>

<style>
main {
  margin-top: 40px;
}
</style>