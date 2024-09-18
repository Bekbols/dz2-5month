import {types} from "./types";


export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function changeAboutTitleAction() {
    return {
        type: types.CHANGE_ABOUT_TITLE
    }
}

export function withParamsAction() {
    return {
        type: types.WITH_PARAMS,
        payload: 'hello geeks'
    }
}

export function fromInputAction(input) {
    return{
        type: types.FROM_INPUT,
        payload: input
    }
}

export function asyncFunctionAction() {
    return function () {
        setTimeout(() => {
            alert('hello')
        },2000)
    }
}

function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    }
}
function getUserAction(user) {
    return {
        type: types.USER,
        payload: user
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}
export function fetchUserAction(id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getUserAction(data))
    }
}

