import dayjs from 'dayjs';
import * as R from 'ramda';

const isSunday = (d) => {
    return d.get('day') === 0;
}

const addDay = (d) => {
    return d.add(1, 'day');
}

const isFirstOfTheMonth = (d) => {
    return d.date() === 1;
}
const addWeek = (d) => {
    return d.add(7, 'day');
}
(() => {
    const start = dayjs('1901-01-01T12:00:00.000Z');
    const end = dayjs('2000-12-31T12:00:00.000Z');

    let sunday = R.until(isSunday, addDay, start);

    let count = 0;
    while (sunday <= end) {
        count += isFirstOfTheMonth(sunday);
        sunday = addWeek(sunday);
    }
    console.log(count)
})();