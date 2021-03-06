import EditInfoEmployeeTypes from "./optionBetweenGroupAndIndividual.types"
const INITIAL_STATE = {
        option: true, // this option is for the employee choosing between group or individual list, false is for group and true is for individual
};

const editInfoEmployeeReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
                case EditInfoEmployeeTypes.OPTION_BETWEEN_GROUP_AND_INDIVIDUAL:
                        return {
                                ...state,
                                option: !state.option
                        };
                default: return state
        }
}
export default editInfoEmployeeReducer