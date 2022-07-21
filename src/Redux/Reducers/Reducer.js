import { actionTypes } from "./../ActionTypes/ActionTypes"

const INITIAL_STATE = {
        token:'',
        planetsData:[],
        vehiclesData:[],
        result:[],
        timeTaken:0
}

const Reducer = (state = INITIAL_STATE, action) =>{
    console.log(action.payload)
    switch (action.type) {
        
         // Storing planets data to planetsData
          case actionTypes.GET_PLANETS:
            { 
              return {
                  ...state,
                  planetsData: action.payload,
              }
           }    
           
                    // Storing Vehicles data to vehiclesData
          case actionTypes.GET_VEHICLES:
            { 
              return {
                  ...state,
                  vehiclesData: action.payload,
              }
           }  
           case actionTypes.GET_TOKEN:
            { 
              return {
                  ...state,
                  token: action.payload,
              }
           }  
           case actionTypes.GET_RESULT:
            { 
              return {
                  ...state,
                  result: action.payload,
              }
           }    
           case actionTypes.TIME_TAKEN:
            { 
              return {
                  ...state,
                  timeTaken: action.payload,
              }
           }    
       default:   
      // ---------------------------------------------------------------------------------------------------------------------- //
        return state;
    }
  }
  
  export default Reducer;