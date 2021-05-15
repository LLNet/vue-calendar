<template>
  <div
    class="border-b-2 flex content-center overflow-hidden h-12 dark:border-gray-900"
    :class="addClass()"
  >
    <div
      class="flex px-2"
      :class="day.dayNumberInWeek === 6 ? 'bg-gray-100 dark:bg-gray-700' : ''"
    >
      <div class="my-auto w-10 flex">
        <div class="w-1/2">
          {{ day.dayInWeek }}
        </div>
        <div class="w-1/2 text-right">
          {{ day.number }}
        </div>
      </div>
    </div>
    <div
      v-if="day.dayNumberInWeek === 1 || holiday"
      class="ml-2 my-auto flex-grow dark:text-gray-100"
      :class="day.dayNumberInWeek === 1 && holiday ?'flex':'clear-both'"
    >
      <div
        v-if="day.dayNumberInWeek === 1"
        class="text-xs font-bold bg-blue-50 p-2 mr-2 rounded-md"
        :class="day.dayNumberInWeek === 1 && holiday ? 'order-2': 'float-right'"
      >
        {{ weekNumber }}
      </div>
      <p
        v-if="holiday"
        class="text-xl xs:text-xs"
        :class="day.dayNumberInWeek === 1 && holiday ? 'py-2 w-11/12 order-1': ''"
      >
        {{ holiday.name }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment/src/moment';
import da from 'moment/src/locale/da';
import {DayObject} from "../helper/DayObject";

export default {
	props: {
		day: {
		  type : DayObject,
			required: true
		},
	},
	data() {
		return {
			weekNumber: this.day.weekNumber,
			holiday: this.day.holiday
		};
	},

	methods: {
		addClass() {
			const today = new Date();
			const ob = [];
			if (this.day.dayNumberInWeek === 0 || (this.holiday && this.holiday.type === 1)) {
				ob.push('bg-gray-100 dark:bg-gray-700 dark:text-gray-300');
			} else if (this.weekNumber === moment(today).locale('da').week()) {
				ob.push('bg-red-50 dark:bg-gray-900 dark:text-gray-300 dark:border-red-600');
			}

			if (moment(today).locale('da').dayOfYear() === moment(this.day).locale('da').dayOfYear()) {
				ob.push('border border-indigo-600');
			}

			return ob;
		}
	}
}
</script>