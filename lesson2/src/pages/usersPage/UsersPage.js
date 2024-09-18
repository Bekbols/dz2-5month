import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";
import User from "../../components/User";

function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {users.map((user) => (
                <div  key={user.id}>
                    <User  userInfo={user}/>
                </div>
            ))}
        </div>
    )
}
export default UsersPage;