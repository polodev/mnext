<template>
<div class="my-3">
  <h1 class="text-center my-2">Palace</h1>
  <h2 class="text-center">
    <span class="d-inline-block my-2">
      No - {{ currentIndex + 1 }}
    </span>
    <span class="d-block border border-primary my-2 py-2">
      {{ currentPalace }}
    </span>
  </h2>
  <div class="my-3">
    <button class="btn btn-info" @click='prev'>Prev</button>
    <button class="btn btn-info" @click='next'>Next</button>
  </div>

  <div class="my-4">
    <div class="form-group row">
      <label for="index col-md-3">Go To</label>
      <div class="col-md-9">
        <input type="text" v-model="gotoIndex"  class="form-control">
      </div>
    </div>
    <div class="form-group">
      <button @click="updateIndex">Go to</button>
    </div>
  </div>


</div>
</template>

<script>
import palaces from './data/palaces.js'
export default {
  data () {
    return {
      currentIndex: 0,
      gotoIndex: 1,
      has_prev: false,
      has_next: true,
      palaces: palaces,
      totalLength: palaces.length,
    }
  },
  computed: {
    currentPalace() {
      return this.palaces[this.currentIndex];
    },
  },
  methods: {
    next() {
      if(this.currentIndex < (this.totalLength - 1)) {
        this.currentIndex = this.currentIndex + 1;
      } else {
        this.currentIndex = 0;
      }
    },
    prev() {
      if (this.currentIndex < 1) {
        this.currentIndex = this.totalLength - 1;
      } else {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    updateIndex() {
      var index = parseInt(this.gotoIndex);
      if (index > 0 && index <= (this.totalLength)) {
        this.currentIndex = (index - 1);
      }
    },
  }
} 
</script>
