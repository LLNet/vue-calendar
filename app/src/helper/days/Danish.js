import Easter from "../Easter";
import moment from 'moment/src/moment'
const HolidayMap = new Map();
/**
 *
 * @param {Number} year
 * @param {Map} Holidays
 */
export default function (year){
	if (HolidayMap.has(year))
	{
		return HolidayMap.get(year);
	}

	class HolidayObject{
		constructor(name, type = 1) {
			this.name = name;
			this.type = type;
		}
	};

	const Holidays = new Map();
	const easter = moment(new Date(...Easter(year)));
	Holidays.set(moment(new Date(year,11, 25)).format('l'), new HolidayObject('juledag'));
	Holidays.set(moment(new Date(year,11, 26)).format('l'), new HolidayObject('2. juledag'));
	Holidays.set(moment(new Date(year,0, 1)).format('l'), new HolidayObject('Nytårsdag'));
	Holidays.set(easter.clone().add(-3, 'days').format('l'), new HolidayObject('Skærtorsdag'));
	Holidays.set(easter.clone().add(-2, 'days').format('l'), new HolidayObject('Langfredag'));
	Holidays.set(easter.format('l'), new HolidayObject('Påskedag'));
	Holidays.set(easter.clone().add(1, 'days').format('l'), new HolidayObject('2. påskedag'));
	Holidays.set(easter.clone().add(4, 'weeks').startOf('week').day(5).endOf('day').format('l'), new HolidayObject('Store bededag'));
	Holidays.set(easter.clone().add(6, 'weeks').startOf('week').day(4).endOf('day').format('l'), new HolidayObject('Kristi himmelfartsdag'));
	Holidays.set(easter.clone().add(7, 'weeks').startOf('week').day(7).endOf('day').format('l'), new HolidayObject('Pinsedag'));
	Holidays.set(easter.clone().add(7, 'weeks').add(1, 'days').endOf('day').format('l'), new HolidayObject('Anden pinsedag'));

	// Other types of days
	Holidays.set(moment(new Date(year,4, 1)).format('l'), new HolidayObject('Første maj', 0));
	Holidays.set(moment(new Date(year,11, 24)).format('l'), new HolidayObject('Juleaften', 0));
	Holidays.set(moment(new Date(year,11, 31)).format('l'), new HolidayObject('Nytårsaften', 0));
	Holidays.set(moment(new Date(year,5, 5)).format('l'), new HolidayObject('Grundlovsdag', 0));
	Holidays.set(moment(new Date(year,3, 2)).format('l'), new HolidayObject('H.C. Andersens fødselsdag', 0));
	Holidays.set(moment(new Date(year,5, 24)).format('l'), new HolidayObject('Sankthans', 0));

	HolidayMap.set(year, Holidays);

	return HolidayMap.get(year);
}