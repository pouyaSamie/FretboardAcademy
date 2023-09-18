<template>
  <div class="nav-collapse collapse" @blur="closeDropdowns">
    <ul class="nav">
  <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown"
    @click.prevent="toggleDropdown"
    @keydown.enter="toggleDropdown">
      {{ selectedItem==='' ? Title : selectedItem  }} <b class="caret"></b>
    </a>
    <ul class="dropdown-menu" v-if="showRootDropdown">
      <li v-for="(item, index) in (items)" :key="index"
      :class="{ active: selectedItem === item.Text }">
        <a href="#" :class="item.Class" @click.prevent="selectItem(item)">{{ item.Text }}</a>
      </li>
    </ul>
  </li>
</ul>
</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { DropDownItem } from '../Interfaces/DropDownItem';

const props = defineProps<{
  items: DropDownItem[];
  Title: string;
}>();
let selectedItem = '';
const items = ref(props.items);
const Title = ref(props.Title);

const emit = defineEmits(['toggle-dropdown', 'item-selected']);
const showRootDropdown = ref(false);
const toggleDropdown = () => {
  showRootDropdown.value = !showRootDropdown.value;
  emit('toggle-dropdown');
};

const closeDropdowns = () => {
  showRootDropdown.value = false;
};

const selectItem = (item: DropDownItem) => {
  selectedItem = item.Text;
  closeDropdowns();
  emit('item-selected', item);
};

onMounted(() => {
  document.body.addEventListener('click', (event) => {
    const targetElement = event.target as Element;
    if (
      targetElement
      && !targetElement.closest('.dropdown')
      && !targetElement.closest('.nav-collapse')
    ) {
      closeDropdowns();
    }
  });
});
</script>
