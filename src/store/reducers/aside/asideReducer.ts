export enum AsideActions {
    TOGGLE = 'TOGGLE',
}

interface ToggleAsideAction {
    type: AsideActions.TOGGLE,
}

export type AsideAction = ToggleAsideAction;

interface AsideState {
    isOpen: boolean;
}

const initialState: AsideState = {
    isOpen: false
}

export const asideReducer = (state = initialState, action: AsideAction): AsideState  => {
    switch (action.type) {
        case AsideActions.TOGGLE:
            return {isOpen: !state.isOpen};
        default:
            return state;
    }
}