const INDEX_DATE = 0;
const INDEX_TIME = 1;

const INDEX_DAY   = 2;
const INDEX_MONTH = 1;
const INDEX_YEAR  = 0

const INDEX_HOUR   = 0;
const INDEX_MINUTE = 1;
const INDEX_SECOND = 2

const FULL_DATE_SEPARATOR = ' ';
const DATE_SEPARATOR      = '-';
const TIME_SEPARATOR      = ':';

const MONTHS = [
    {id: '01', name: 'Janeiro'},
    {id: '02', name: 'Fevereiro'},
    {id: '03', name: 'Março'},
    {id: '04', name: 'Abril'},
    {id: '05', name: 'Maio'},
    {id: '06', name: 'Junho'},
    {id: '07', name: 'Julho'},
    {id: '08', name: 'Agosto'},
    {id: '09', name: 'Setembro'},
    {id: '10', name: 'Outubro'},
    {id: '11', name: 'Novembro'},
    {id: '12', name: 'Dezembro'},
]

const getMonth = (monthId) => {
    let monthName = MONTHS.find(({id}) => id == monthId).name;
    return monthName || monthId;
}

const convertDate = (date) => {
    let dateTime = date.split(FULL_DATE_SEPARATOR);

    dateTime = {
        date: dateTime[INDEX_DATE],
        time: dateTime[INDEX_TIME]
    }

    let dateSplited = dateTime.date.split(DATE_SEPARATOR);
    let timeSplited = dateTime.time.split(TIME_SEPARATOR);

    let dateParts = {
        day:   dateSplited[INDEX_DAY],
        month: dateSplited[INDEX_MONTH],
        year:  dateSplited[INDEX_YEAR]
    }

    let timeParts = {
        hour:   timeSplited[INDEX_HOUR],
        minute: timeSplited[INDEX_MINUTE],
        second: timeSplited[INDEX_SECOND]
    }

    let dateString = `${dateParts.day}, ${getMonth(dateParts.month)} de ${dateParts.year}`;
    let timeString = `${timeParts.hour}:${timeParts.minute}`;

    return {
        date: dateString,
        time: timeString
    }
}

export { convertDate }