<template>
<div class="my-2">
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="updateComponent('palace')" type="button" class="btn" :class="[component == 'palace' ? 'btn-primary' : 'btn-secondary']">Palace</button>
    <button @click="updateComponent('dominic')" type="button" class="btn" :class="[component == 'dominic' ? 'btn-primary' : 'btn-secondary']">Dominic</button>
  </div>
  <div v-if="component == 'dominic'">
    <app-dominic></app-dominic>
  </div>

  <div v-if="component == 'palace'">
    <app-palace></app-palace>
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      component: 'palace'
    }
  },
  methods: {
    updateComponent(value) {
      this.component = value;
    }
  }
}
  
</script>