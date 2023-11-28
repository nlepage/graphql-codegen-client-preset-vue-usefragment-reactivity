<script setup lang="ts">
import { computed } from 'vue'

import { graphql, type FragmentType, useFragment } from '@/gql'

const CounterFragment = graphql(/* GraphQL */ `
  fragment CounterFragment on Counter {
    id
    count
  }
`)

const props = defineProps<{
  counter?: FragmentType<typeof CounterFragment>
}>()

const extractedCounter = useFragment(CounterFragment, props.counter)

const computerCounter = computed(() => useFragment(CounterFragment, props.counter))
</script>

<template>
  <p>
    FragmentCounter Component:
  </p>
  <ul>
    <li>
      Count straight from props: {{ (counter as any | undefined)?.count ?? 'undefined' }}
    </li>
    <li>
      Count extracted from props by useFragment: {{ extractedCounter?.count ?? 'undefined' }}
    </li>
    <li>
      Count computed from props by useFragment: {{ computerCounter?.count ?? 'undefined' }}
    </li>
  </ul>
</template>