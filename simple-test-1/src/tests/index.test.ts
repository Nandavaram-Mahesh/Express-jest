import {describe, expect, it,test} from '@jest/globals';
import {sum,multiply} from '../index.js'


describe('sum',()=>{
    it('adds 1 + 2 to equal 3',()=>{
        const finalAnswer =sum(1,2)
        expect(finalAnswer).toBe(3)
    })
})



