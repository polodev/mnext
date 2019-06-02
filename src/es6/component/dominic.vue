<template>
<div class="my-3">
  <h1 class="text-center my-2">Dominics</h1>
  <div class="my-3">
    <button class="btn btn-lg btn-info" @click='prev'>Prev</button>
    <button class="btn btn-lg btn-info" @click='next'>Next</button>
  </div>
  <div>
    <div>
      <strong>Number: </strong>
      <span>{{ currentDominic.number }}</span>
    </div>
    <div>
      <strong>Letter: </strong>
      <span>{{ currentDominic.letter }}</span>
    </div>
    <div>
      <strong>Person: </strong>
      <span>{{ currentDominic.person }}</span>
    </div>
    <div>
      <strong>Full Action: </strong>
      <span>{{ currentDominic.fullAction }}</span>
    </div>
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
import dominics from './data/dominics.js'
export default {
  data () {
    return {
      currentIndex: 0,
      gotoIndex: 1,
      has_prev: false,
      has_next: true,
      dominics: dominics,
      totalLength: dominics.length,
    }
  },
  computed: {
    currentDominic() {
      return this.dominics[this.currentIndex];
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
