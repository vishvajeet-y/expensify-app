import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should test for default reducer',()=>{
  const state=filterReducer(undefined,{type:'@@INIT'})
  expect(state).toEqual({
      text:'',
      sortBy:'date',
      startDate:moment().startOf('month'),
      endDate:moment().endOf('month')
  })
})

test('should test for sortBy ammount',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_AMMOUNT'})
    expect(state.sortBy).toBe('ammount')
})

test('should test for sortBy date',()=>{
    const currentState={
           text:'',
           startDate:undefined,
           endDate:undefined,
           sortBy:'ammount'
    }
    const action={
        type:'SORT_BY_DATE'
    }
    const state=filterReducer(currentState,action)
    expect(state.sortBy).toBe('date')
})


test('should test for text filter',()=>{
    const state=filterReducer(undefined,{type:'SET_TEXT_FILTER',text:'cred'})
    expect(state.text).toBe('cred')
})

test('should test for startDate',()=>{
    const state=filterReducer(undefined,{type:'SET_START_DATE',startDate:moment(0)})
    expect(state.startDate).toEqual(moment(0))
})

test('should test for endDate',()=>{
    const state=filterReducer(undefined,{type:'SET_END_DATE',endDate:moment(0)})
    expect(state.endDate).toEqual(moment(0))
})