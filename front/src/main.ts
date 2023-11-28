import { createApp } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import { client } from './gql/client'

const app = createApp(App)

app.provide(DefaultApolloClient, client)

app.mount('#app')
