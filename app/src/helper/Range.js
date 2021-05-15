/**
 * @param {Number} start
 * @param {Number} stop
 * @param {Number} step
 * @returns {Array<Number>}
 */
export default function(start, stop, step = 1) {
	return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);
}