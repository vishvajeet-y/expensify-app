
import React from 'react'
import {shallow} from 'enzyme'
//import ReactShallowRendrer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('should render Header correctly',()=>{

    const wrapper=shallow(<Header/>)
   // expect(wrapper.find('h1').text()).toBe('Expensify')
       expect(wrapper).toMatchSnapshot()
    // const renderer =new ReactShallowRendrer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    //console.log(renderer.getRenderOutput())
})
