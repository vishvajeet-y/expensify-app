import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends React.Component{
          state={
            calenderFocused:null
          }
          onDatesChange=({startDate,endDate})=>{
            this.props.setStartDate(startDate)
            this.props.setEndDate(endDate)
          }
           onFocusChange=(calenderFocused)=>{
             this.setState(()=>({calenderFocused}))
           }

           onTextChange=(e)=>{
            this.props.setTextFilter(e.target.value)
           }
           
           onSortChange=(e)=>{
            if(e.target.value=='date')
            this.props.sortByDate(e.target.value)
            else 
            this.props.sortByAmount(e.target.value)
        }

    render(){
        return <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
        <option value='date'>Date</option>
        <option value='ammount'>Ammount</option>
        </select>
 
        <DateRangePicker
        startDateId="MyDatePicker"
        endDateId="MyDatePickerId"
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calenderFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        />

        </div>
    }
}


const mapStateToProps=(state)=>{
    return {
        filters:state.filters
    }
}

const mapDispatchToProps=(dispatch)=>({
  setTextFilter:(text)=>dispatch(setTextFilter(text)),
  sortByAmount:()=>dispatch(sortByAmount()),
  sortByDate:()=>dispatch(sortByDate()),
  setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
  setEndDate:(endDate)=>dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters)