import React from 'react'
import {shallow} from 'enzyme'
import {login,logout} from '../../actions/auth'
test('should generate  Login action object',()=>{
    const uid='123'
   const result=login(uid)
   expect(result).toEqual({
       type:'LOGIN',
       uid
   })
})

test('should generate Logout action object',()=>{
   
   const result=logout()
   expect(result).toEqual({
       type:'LOGOUT',
     
   })
})