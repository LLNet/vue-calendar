import moment from 'moment/src/moment';
import da from 'moment/src/locale/da';
import Danish from "./days/Danish";

export class DayObject{
	constructor(day) {
		this.date = day;
	}
	get key(){
		return this.date.toString()
	}
	get number(){
		return this.date.getDate();
	}
	get weekNumber(){
		return moment(this.date).locale('da').week();
	}
	get dayNumberInWeek(){
		return this.date.getDay();
	}
	get dayInWeek(){
		return moment(this.date).locale('da').format('dddd').substr(0, 1).toUpperCase()
	}
	get holiday()
	{
		const value = Danish(this.date.getFullYear());
		const key = moment(this.date).format('l');

		return value.has(key) ? value.get(key) : null
	}
}