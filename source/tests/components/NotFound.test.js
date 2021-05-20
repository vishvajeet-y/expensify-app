import React from 'react'
import {shallow} from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'

test('should test for NotFound Page',()=>{
    const wrapper=shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})