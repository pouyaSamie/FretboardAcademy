<template>
          <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner">
              <div class="row-fluid">
                <button type="button" class="btn btn-navbar"
                        data-toggle="collapse" data-target=".nav-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <div class="brand">Fretboard Academy - Master the guitar fretboard</div>
                <DropDown />
                <!-- <div class="nav-collapse collapse" @blur="closeDropdowns">
                  <ul class="nav">
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                         @keydown.enter="showRootDropdown = !showRootDropdown"
                         @click.prevent="showRootDropdown = !showRootDropdown">
                        Choose Root <b class="caret"></b>
                      </a>
                      <ul class="dropdown-menu select-root minor-blues" v-if="showRootDropdown">
                        <li class="show-root-e active"><a href="#">e</a></li>
                        <li class="show-root-f "><a href="#">f</a></li>
                        <li class="show-root-fs"><a href="#">f<i>#</i></a></li>
                        <li class="show-root-g"><a href="#">g</a></li>
                        <li class="show-root-gs"><a href="#">g<i>#</i></a></li>
                        <li class="show-root-a"><a href="#">a</a></li>
                        <li class="show-root-bf"><a href="#">b<i>b</i></a></li>
                        <li class="show-root-b"><a href="#">b</a></li>
                        <li class="show-root-c"><a href="#">c</a></li>
                        <li class="show-root-cs"><a href="#">c<i>#</i></a></li>
                        <li class="show-root-d"><a href="#">d</a></li>
                        <li class="show-root-ds"><a href="#">d<i>#</i></a></li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                      @keydown.enter="showScaleDropdown = !showScaleDropdown"
                         @click.prevent="showScaleDropdown = !showScaleDropdown">
                        Choose Scale <b class="caret"></b>
                      </a>
                      <ul class="dropdown-menu select-scale e"  v-if="showScaleDropdown">
                        <li class="scale-minor-blues active"><a href="#">Minor Blues</a></li>
                        <li class="scale-pentatonic-minor"><a href="#">Pentatonic Minor</a></li>
                        <li class="scale-major"><a href="#">Major</a></li>
                        <li class="scale-chromatic"><a href="#">Chromatic</a></li>
                        <li class="divider"></li>
                        <li class="more-soon">More soon!</li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                        @keydown.enter="showHandDropdown = !showHandDropdown"
                         @click.prevent="showHandDropdown = !showHandDropdown">
                        Switch hand <b class="caret"></b>
                      </a>
                      <ul class="dropdown-menu select-hand"  v-if="showHandDropdown">
                        <li class="right-hand active"><a href="#">Right hand</a></li>
                        <li class="left-hand"><a href="#">Left hand</a></li>
                      </ul>
                    </li>
                    <li  class="pull-right">
                      <a href="#modalAbout" role="button" data-toggle="modal">
                      About
                    </a>
                    </li>
                  </ul>
                </div> -->
              </div>
            </div>
          </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue';
import DropDown from './DropDown.vue';

// const showRootDropdown = ref(false);
// const showScaleDropdown = ref(false);
// const showHandDropdown = ref(false);
// const selectedRoot = ref(''); // Store the selected root value
// const selectedScale = ref(''); // Store the selected scale value
// const selectedHand = ref(''); // Store the selected hand value
// const closeDropdowns = () => {
//   showRootDropdown.value = false;
//   showScaleDropdown.value = false;
//   showHandDropdown.value = false;
// };

// Handle the selection of a root
// const selectRoot = (root) => {
//   selectedRoot.value = root;
//   closeDropdowns();
// };

// // Handle the selection of a scale
// const selectScale = (scale) => {
//   selectedScale.value = scale;
//   closeDropdowns();
// };

// // Handle the selection of a hand
// const selectHand = (hand) => {
//   selectedHand.value = hand;
//   closeDropdowns();
// };

</script>
<style lang="less">
</style>
