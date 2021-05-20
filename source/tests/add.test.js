const add=(a,b)=>a+b

const generateGreeting=(name)=>`Hello ${name} !`

test('should add two number',()=>{
    const result=add(4,3)
    expect(result).toBe(7);
    
})

test('should greet',()=>{
    const result=generateGreeting('ram')

    expect(result).toBe('Hello ram !')
})