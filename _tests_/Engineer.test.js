const Engineer = require('../lib/Engineer')

const testEngineer = new Engineer(
    'Tom',
    1,
    'thomas.chappell@outlook.com',
    'choonchy');

test('Properly creates an employee', () => {
    expect(testEngineer.name).toEqual('Tom')
    expect(testEngineer.id).toEqual(1)
    expect(testEngineer.email).toEqual('thomas.chappell@outlook.com')
    expect(testEngineer.github).toEqual('choonchy')
})

test('Object parameters are the appropriate type', () => {
    expect(typeof testEngineer.name && typeof testEngineer.email).toBe('string');
    expect(typeof testEngineer.id).toBe('number')
    expect(typeof testEngineer.github).toBe('string')
})

test('getRole() should return \'Engineer\'', () => {
    expect(testEngineer.getRole()).toEqual('Engineer')
})

test('getGithub() properly returns the Engineer\'s github', () => {
    expect(testEngineer.getGithub()).toEqual('choonchy')
})