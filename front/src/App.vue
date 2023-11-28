<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'
import { useMutation, useQuery } from '@vue/apollo-composable'

import { graphql } from '@/gql'

import SimpleCounter from '@/components/SimpleCounter.vue'
import FragmentCounter from '@/components/FragmentCounter.vue'

const counter = shallowRef<{ count: number }>()

onMounted(() => {
  counter.value = { count: 0 }
})

const id = '123'

const { result } = useQuery(graphql(/* GraphQL */ `
  query getCounter($id: ID!) {
    counter(id: $id) {
      id
      count
      ...CounterFragment
    }
  }
`), { id })

const { mutate: incrementCounter } = useMutation(graphql(/* GraphQL */ `
  mutation incrementCounter($id: ID!) {
    incrementCounter(id: $id) {
      id
      count
    }
  }
`), { variables: { id } })
</script>

<template>
  <main>
    <SimpleCounter :counter="counter"></SimpleCounter>
    <p>
      <button @click="counter = { count: (counter?.count ?? 0) + 1 }">
        Increment Simple Counter
      </button>
    </p>

    <p>
      Count from query result:
      {{ result?.counter.count }}
    </p>
    <FragmentCounter :counter="result?.counter"></FragmentCounter>
    <p>
      <button @click="incrementCounter()">
        Increment Query Counter / Fragment Counter
      </button>
    </p>
  </main>
</template>
