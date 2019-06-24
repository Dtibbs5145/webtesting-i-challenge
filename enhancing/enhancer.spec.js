const { repair, succeed, fail } = require('./enhancer.js');

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('should reset durability too 100', () => {
            expect(repair({ durability: 100 }).durability).toBe(100),
            expect(repair({ durability: 15 }).durability).toBe(100), 
            expect(repair({ durability: 98 }).durability).toBe(100), 
            expect(repair({ durability: 1 }).durability).toBe(100)
        });
    });
    describe('succeed()', () => {
        it('')
    })



})
// test away!
