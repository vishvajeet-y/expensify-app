import moment from 'moment'
const filters={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const altFilter={
    text:'bills',
    sortBy:'ammount',
    startDate:moment(0),
    endDate:moment(0).add(3,'days')
}

export {filters,altFilter}