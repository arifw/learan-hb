
export const storeDef = {
  state: {
    remotesList: [
      {
        _id: 0,
        alias: 'test 1',
        uri: 'http://localhost:9090/healt',
        interval: 5
      }
    ]
  },
  getters: {
    allRemotes: state => state.remotesList,
    remote: (state, getters) => id => {
      return state.remotesList.find( ({ _id }) => _id === +id )
    }
  },
  actions: {},
  mutations: {
    safeRemote: (state, remote) => {
      let index = state.remotesList.findIndex(({ _id }) => _id === remote._id)

      remote.uri = !remote.uri.startsWith('http://') ? `http://${remote.uri}` : remote.uri

      if (index >= 0) {
        state.remotesList[index] = remote
      } else {
        remote._id = Date.now()
        state.remotesList.unshift(remote)
      }
      
    },
    deleteRemote: (state, id) => {
      let index = state.remotesList.findIndex(({ _id }) => id === _id)
      state.remotesList.splice(index, 1)
    }
  }
}