import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserAction} from "../redux/actions";

const User = ({userInfo}) => {
    const {user} = useSelector(state => state.usersReducer)
    console.log(user)
    const dispatch = useDispatch();
    const getUserMoreInfo = (id) => {
        dispatch(fetchUserAction(id))
    }

    return (
        <ul >
            <li>name: {userInfo.name}</li>e
            <li>email: {userInfo.email}</li>
            <button onClick={() => getUserMoreInfo(userInfo.id)}>get more</button>
            {
                user && user.id  === userInfo.id && (
                    <div>
                        <h4>Addres</h4>
                        <p>{user.address.street}</p>
                        <p>{user.address.suite}</p>
                        <p>{user.address.city}</p>
                        <p>{user.address.zipcode}</p>
                    </div>
                )
            }
        </ul>
    )
}

export default User;