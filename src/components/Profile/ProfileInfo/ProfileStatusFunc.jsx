import React, {useEffect, useState} from "react";
import {getStatusTC, setProfileStatus, updateStatusTC} from "../profileSlice";
import {useDispatch, useSelector} from "react-redux";

const ProfileStatusFunc = (props) => {
    const [editMode, setEditMode] = useState(false);
    const statusText = useSelector(state => state.profile.profileStatus);
    const dispatch = useDispatch();

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = (e) => {
        setEditMode(false);
        dispatch(updateStatusTC(e.target.value))
    }
    const updateStatus = (e) => {
        dispatch(setProfileStatus(e.target.value))
    }

    useEffect(() => {
        dispatch(getStatusTC(props.userdId))
    }, [dispatch])

    return (
        <div>
            {!editMode &&
                <div style={{height: 20, margin: "0 0 20px"}}
                    onClick={activateEditMode}>
                    <span>{statusText}</span>
                </div>}
            {editMode &&
                <div>
                    <input value={statusText}
                           onChange={updateStatus}
                           onBlur={deactivateEditMode}
                    />
                </div>}
        </div>
    )
}

export default ProfileStatusFunc;
