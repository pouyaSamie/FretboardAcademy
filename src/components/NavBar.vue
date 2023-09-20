<template>
          <div class='navbar navbar-inverse navbar-fixed-top'>
            <div class='navbar-inner'>
              <div class='row-fluid'>
                <button type='button' class='btn btn-navbar'
                        data-toggle='collapse' data-target='.nav-collapse'>
                  <span class='icon-bar'></span>
                  <span class='icon-bar'></span>
                  <span class='icon-bar'></span>
                </button>
                <div class='brand'>Fretboard Academy - Master the guitar fretboard</div>
                <DropDown v-if="false" Title='Choose Root' :items='choseNotesItems' />
              </div>
            </div>
          </div>
</template>
<script setup lang='ts'>
import { DropDownItem } from '@/Interfaces/DropDownItem';
import DropDown from './DropDown.vue';

const choseNotesItems: DropDownItem[] = [
  {
    Text: 'e',
    Value: 'e',
    Class: 'show-root-e active',
  },
  {
    Text: 'f',
    Value: 'f',
    Class: 'show-root-f',
  },
  {
    Text: 'f#',
    Value: 'f#',
    Class: 'show-root-fs',
  },
  {
    Text: 'g',
    Value: 'g',
    Class: 'show-root-g',
  },
  {
    Text: 'g#',
    Value: 'g#',
    Class: 'show-root-gs',
  },
  {
    Text: 'a',
    Value: 'a',
    Class: 'show-root-a',
  },
  {
    Text: 'Bb',
    Value: 'Bb',
    Class: 'show-root-bf',
  },
  {
    Text: 'b',
    Value: 'b',
    Class: 'show-root-b',
  },
  {
    Text: 'c',
    Value: 'c',
    Class: 'show-root-c',
  },
  {
    Text: 'c#',
    Value: 'c#',
    Class: 'show-root-cs',
  },
  {
    Text: 'd',
    Value: 'd',
    Class: 'show-root-d',
  },
  {
    Text: 'd#',
    Value: 'd#',
    Class: 'show-root-ds',
  },
];
</script>
<style lang='less'>
</style>
