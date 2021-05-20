import SelectexpenseTotal from '../../selectors/ExpenseTotal'
import expenses from '../fixture/expenses'

test('should return 0 if no expense',()=>{
    const res=SelectexpenseTotal([])
    expect(res).toBe(0)
})

test('should correctly add up a single expenses',()=>{
    const res=SelectexpenseTotal([expenses[0]])
    expect(res).toBe(10)

})

test('should correctly add up a multiple expenses',()=>{
    const res=SelectexpenseTotal(expenses)
    expect(res).toBe(1510)

})