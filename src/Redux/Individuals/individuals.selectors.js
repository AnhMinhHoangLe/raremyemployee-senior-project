import { createSelector } from 'reselect'

const selectemployeeinfo = state => state.employeeInfo

//!NOTE: line need to have the same name of state
export const selectEmployeeInfo = createSelector(
        [selectemployeeinfo],
        employeeInfo => employeeInfo.employee// if not .employee, it will print out variable = object, and array (map) bug
)

export const showEmployeeInfo = employeeIDtakeFromURLParams => createSelector(
        [selectEmployeeInfo],
        employees => employees[employeeIDtakeFromURLParams]

)