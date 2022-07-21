import { actionTypes } from "./../ActionTypes/ActionTypes";
import api from "./../Services/Api";

export function PLANETS_DATA(action, payload) {
    return { type: action, payload }
}
export function getPlanetsAction() {
    return function (dispatch) {
        api.planetsAPI((response) => {
            console.log(response,'apii')
            if (response.data) {
                dispatch(PLANETS_DATA(actionTypes.GET_PLANETS, response.data))
            }
        })
    }
}

export function VEHICLES_DATA(action, payload) {
    return { type: action, payload }
}
export function getVehiclesAction() {
    return function (dispatch) {
        api.vehiclesAPI((response) => {
            console.log(response,'apii22')
            if (response.data) {
                dispatch(VEHICLES_DATA(actionTypes.GET_VEHICLES, response.data))
            }
        })
    }
}

export function TOKEN_DATA(action, payload) {
    return { type: action, payload }
}
export function getTokenAction() {
    return function (dispatch) {
        api.tokenAPI((response) => {
            console.log(response,'apii22')
            if (response.data) {
                dispatch(TOKEN_DATA(actionTypes.GET_TOKEN, response.data.token))
            }
        })
    }
}

export function RESULT_DATA(action, payload) {
    return { type: action, payload }
}
export function getResultAction(data) {
    return function (dispatch) {
        api.resultAPI(data,(response) => {
            console.log(response,'apii22')
            if (response.data) {
                dispatch(RESULT_DATA(actionTypes.GET_RESULT, response.data))
            }
        })
    }
}

