const Intern = require('../lib/Intern')

const testIntern = new Intern(
    'Tom',
    1,
    'thomas.chappell@outlook.com',
    'Concordia');

test('Properly creates an employee', () => {
    expect(testIntern.name).toEqual('Tom')
    expect(testIntern.id).toEqual(1)
    expect(testIntern.email).toEqual('thomas.chappell@outlook.com')
    expect(testIntern.school).toEqual('Concordia')
})

test('Object parameters are the appropriate type', () => {
    expect(typeof testIntern.name && typeof testIntern.email).toBe('string');
    expect(typeof testIntern.id).toBe('number')
    expect(typeof testIntern.school).toBe('string')
})

test('getRole() should return \'Intern\'', () => {
    expect(testIntern.getRole()).toEqual('Intern')
})

test('getSchool() properly returns the Intern\'s school', () => {
    expect(testIntern.getSchool()).toEqual('Concordia')
})