import items from '../../data/items'

const defaultState = [];

function reducer (state= defaultState, {type, payload}){//accion destructuring
    switch(type){
        case "findSuggestions":{
            const regex = new RegExp(`^${payload}`,'i')

            return items.filter( text => regex.test(text.title)) 
        }


        default:
            return state;
    }
}

export default reducer