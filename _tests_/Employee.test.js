const Employee = require('../lib/Employee')

const testEmployee = new Employee(
    'Tom',
    1,
    'thomas.chappell@outlook.com');

test('Properly creates an employee', () => {
    expect(testEmployee.name).toEqual('Tom')
    expect(testEmployee.id).toEqual(1)
    expect(testEmployee.email).toEqual('thomas.chappell@outlook.com')
})

test('Object parameters are the appropriate type', () => {
    expect(typeof testEmployee.name && typeof testEmployee.email).toBe('string');
    expect(typeof testEmployee.id).toBe('number')
})

test('getName() should return the employee\'s name', () => {
    expect(testEmployee.getName()).toEqual('Tom')
})

test('getId() should return the employee\'s ID number', () => {
    expect(testEmployee.getId()).toEqual(1)
})

test('getEmail() should return the employee\'s email address', () => {
    expect(testEmployee.getEmail()).toEqual('thomas.chappell@outlook.com')
})

test('getRole() should return \'Employee\'', () => {
    expect(testEmployee.getRole()).toEqual('Employee')
})