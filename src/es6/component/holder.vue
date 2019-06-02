<template>
<div class="my-5">
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="updateComponent('dominic')" type="button" class="btn btn-primary">Dominic</button>
    <button @click="updateComponent('palace')" type="button" class="btn btn-secondary">Palace</button>
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
      component: 'dominic'
    }
  },
  methods: {
    updateComponent(value) {
      this.component = value;
    }
  }
}
  
</script>