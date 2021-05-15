<template>
  <Dialog
    v-once
    :is-open="showDialog"
    @close="updateSessionStore"
  />
  <Nav
    v-once
    :active-year="activeYear"
    @update-year="updateYear($event)"
  />
  <div class="flex flex-col xs:flex-row xs:flex-wrap 3xl:flex-nowrap dark:bg-gray-800">
    <Month
      v-for="month in Months"
      :key="month.key"
      :month="month"
    />
  </div>
</template>

<script>
import Month from "./components/Month.vue";
import Nav from "./components/Nav.vue";
import Dialog from "./components/Dialog.vue";
import {getMonths} from "./helper/MonthObject";

export default {
	components: {Month, Nav, Dialog},
	data() {
		return {
			sim: 'null',
			activeYear: (new Date()).getFullYear(),
			showDialog: (isNaN(parseInt(window.sessionStorage.getItem('showDialog'))))
		}
	},
	computed: {
		Months: function () {
			return getMonths(this.activeYear);
		}
	},
	methods: {
		updateYear: function (year) {
			this.activeYear = year;
		},
		updateSessionStore() {
			window.sessionStorage.setItem('showDialog', '1');
		}
	}
}
</script>
