const Manager = require('../lib/Manager')

const testManager = new Manager(
    'Tom',
    1,
    'thomas.chappell@outlook.com',
    '0437840909');

test('Properly creates an employee', () => {
    expect(testManager.name).toEqual('Tom')
    expect(testManager.id).toEqual(1)
    expect(testManager.email).toEqual('thomas.chappell@outlook.com')
    expect(testManager.officeNumber).toEqual('0437840909')
})

test('Object parameters are the appropriate type', () => {
    expect(typeof testManager.name && typeof testManager.email).toBe('string');
    expect(typeof testManager.id).toBe('number')
    expect(typeof testManager.officeNumber).toBe('string')
})

test('getRole() should return \'Manager\'', () => {
    expect(testManager.getRole()).toEqual('Manager')
})