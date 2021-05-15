<template>
  <div class="xs:w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6 3xl:w-1/12 border-l-2 xs:mb-8 overflow-hidden dark:border-gray-900 min-h-screen">
    <div
      class="p-4 bg-green-50 border-b-2 sm:border-t dark:bg-gray-700 dark:text-gray-300 dark:border-gray-900 capitalize"
    >
      {{ month.name }} {{ month.year }}
    </div>
    <div>
      <Day
        v-for="day in month.days"
        :key="day.key"
        :day="day"
      />
    </div>
  </div>
</template>
<script>
import Day from "./Day.vue";
import {MonthObject} from "../helper/MonthObject";

export default{
	components : {
		Day
	},
	props : {
		month: {
		  required: true,
			type: MonthObject
		}
	},
}
</script>