import moment from 'moment/src/moment'
import da from 'moment/src/locale/da'
import {DayObject} from "./DayObject";

export class MonthObject{
	/**
     * constructor
     *
     * @param {Date} date
     */
	constructor(date) {
		this.date = date;
		this.days = new Set();

		for (let day = 1; day<= this.numberOfDays; day++)
		{
			this.days.add(new DayObject(new Date(this.year, this.month, day)));
		}
	}

	/**
     * @returns {number}
     */
	get month(){
		return this.date.getMonth()
	}

	/**
     * @returns {number}
     */
	get year(){
		return this.date.getFullYear()
	}

	/**
     *
     * @returns {number}
     */
	get numberOfDays(){
		return new Date(this.year, this.month, 0).getDate();
	}

	/**
     *
     * @returns {string}
     */
	get name(){
		return moment(this.date).locale('da').format('MMMM');
	}

	/**
     *
     * @returns {string}
     */
	get key(){
		return moment(this.date).locale('da').format('MMMM YYYY');
	}
}

/**
 *
 * @param {Number} year
 */
export const getMonths = function(year) {
	const months = [];

	for(let month = 0; month < 12; month++)
	{
		months.push(getMonth(new Date(year, month, 1)));
	}

	return months;
}
/**
 *
 * @param {Date} date
 */
export const getMonth = function(date){
	return new MonthObject(date);
}