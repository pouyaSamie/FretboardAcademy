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
                <div class="nav-collapse collapse">
                  <ul class="nav">
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        Choose Root <b class="caret"></b>
                      </a>
                      <ul class="dropdown-menu select-root minor-blues">
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
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        Choose Scale <b class="caret"></b>
                      </a>
                      <ul class="dropdown-menu select-scale e">
                        <li class="scale-minor-blues active"><a href="#">Minor Blues</a></li>
                        <li class="scale-pentatonic-minor"><a href="#">Pentatonic Minor</a></li>
                        <li class="scale-major"><a href="#">Major</a></li>
                        <li class="scale-chromatic"><a href="#">Chromatic</a></li>
                        <li class="divider"></li>
                        <li class="more-soon">More soon!</li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        Switch hand <b class="caret"></b>
                      </a>
                      <ul class="dropdown-menu select-hand">
                        <li class="right-hand active"><a href="#">Right hand</a></li>
                        <li class="left-hand"><a href="#">Left hand</a></li>
                      </ul>
                    </li>
                    <li class="pull-right">
                      <a href="#modalAbout" role="button" data-toggle="modal">
                      About
                    </a>
                    </li>
                  </ul>
                </div><!--/.nav-collapse -->
              </div>
            </div>
          </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>
<style lang="less">
</style>
