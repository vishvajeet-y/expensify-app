import moment from 'moment'

const expenses=[{
    id:'1',
    description:'GUM',
    note:'',
    ammount:10,
    createAt:0
},
{
    id:'2',
    description:'RENT',
    note:'',
    ammount:1000,
    createAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'3',
    description:'CREDIT CARD',
    note:'',
    ammount:500,
    createAt:moment(0).add(4,'days').valueOf()
}
]

export default expenses