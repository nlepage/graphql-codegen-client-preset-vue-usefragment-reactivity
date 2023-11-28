<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  counter?: {
    count: number
  }
}>()

const extractedCounter = props.counter

const computedCounter = computed(() => props.counter)
</script>

<template>
  <p>
    SimpleCounter Component:
  </p>
  <ul>
    <li>
      Count straight from props: {{ counter?.count ?? 'undefined' }}
    </li>
    <li>
      Count extracted from props in setup script: {{ extractedCounter?.count ?? 'undefined' }}
    </li>
    <li>
      Count computed from props: {{ computedCounter?.count ?? 'undefined' }}
    </li>
  </ul>
</template>