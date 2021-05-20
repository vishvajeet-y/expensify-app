import moment from 'moment'
//Filter Reducer
const filterReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}
const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch (action.type){
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMMOUNT':
            return {
                ...state,
                sortBy:'ammount'
            }  
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy:'date'
            }  
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }    
        default : return state;
    }
}

export default filterReducer