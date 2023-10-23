import axios from 'axios'

export const Contacts = {
  state: {
    contacts: {},
  },

  mutations: {
    UPDATE_CONTACTS(state, contacts) {
      state.contacts = contacts
    }
  },

  actions: {
    async loadContacts() {
      await axios
        .get('/api/contacts.json')
        .then( response => {
          this.commit('UPDATE_CONTACTS', response.data)
        })
        .catch( error => console.log(error))
    }
  },

  getters: {
    contacts: state => state.contacts
  },
}

export default Contacts
