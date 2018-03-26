
export const storeDef = {
  state: {
    remotesList: [
      {
        _id: 0,
        alias: 'test 1',
        uri: 'http://localhost:9091',
        interval: 10
      },
      {
        _id: 1,
        alias: 'test 2',
        uri: 'http://localhost:9092',
        interval: 10
      },
      {
        _id: 2,
        alias: 'test 3',
        uri: 'http://localhost:9093',
        interval: 10
      },
      {
        _id: 3,
        alias: 'test 4',
        uri: 'http://localhost:9094',
        interval: 10
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