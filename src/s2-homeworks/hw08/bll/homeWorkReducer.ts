import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { 

            return [...state].sort((a,b) => {
               
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (action.payload === 'up') {
                
                return nameA > nameB ? 1 : (nameA < nameB) ? -1 : 0
            } else  {
                return nameA > nameB ? -1 : (nameA < nameB) ? 1 : 0
            }
            })
        }

        case 'check': {
            return state.filter((el: any) => el.age >= action.payload)
        }
        default:
            return state
    }
}
