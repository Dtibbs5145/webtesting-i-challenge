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
        it('enhancement success', () => {
            expect(succeed({ enhancement: 10 }).enhancement).toBeLessThanOrEqual(20)
            expect(succeed({ enhancement: 20 }).enhancement).toBeLessThanOrEqual(20)
            expect(succeed({ enhancement: 13 }).enhancement).toBeLessThanOrEqual(20)
            expect(succeed({ enhancement: 19 }).enhancement).toBeLessThanOrEqual(20)
            expect(succeed({ enhancement: 0 }).enhancement).toBeLessThanOrEqual(20)
        });
    });
    describe(`fail()`, () => {
        it('enhancement failure', () => {
            expect(fail({ durability: 25 }).durability).toBeLessThanOrEqual(100);
            expect(fail({ durability: 19 }).durability).toBeLessThanOrEqual(100);
            expect(fail({ durability: 93 }).durability).toBeLessThanOrEqual(100);
            expect(fail({ durability: 7 }).durability).toBeLessThanOrEqual(100);
        });
    });


});
// test away!
