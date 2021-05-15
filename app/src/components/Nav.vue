<template>
  <div class="md:sticky top-0 left-0 right-0 bg-green-300 bg-opacity-70 p-1 print:hidden">
    <div class="flex p-1">
      <button
        title="previous"
        class="p-2"
        @click="decrementYear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <select
        v-model="year"
        class="flex-grow p-1 border-1 appearance-none text-xs mx-2"
        @change="updateYear(year)"
      >
        <option
          v-for="option in years"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
      <button
        title="next"
        class="p-2"
        @click="incrementYear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Range from "../helper/Range";
export default {
	props : {
		activeYear : {
			type: Number,
			required: true
		}
	},
	emits : ['update-year'],
	data(){
		return {
			years : Range(2010, 2030),
			year : this.activeYear
		}
	},
	methods : {
		incrementYear()
		{
			this.updateYear(
				(
					!this.years.includes(this.year + 1) ?
						Math.min(...this.years) :
						this.year + 1
				)
			);
		},
		decrementYear()
		{
			this.updateYear(
				(
					!this.years.includes(this.year - 1) ?
						Math.max(...this.years) :
						this.year - 1
				)
			);
		},
		updateYear(year)
		{
			this.year = year;
			this.$emit('update-year', year);
		}
	}
}
</script>
