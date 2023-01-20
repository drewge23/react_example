import s from './ProfileInfo.module.css';
import {useDispatch, useSelector} from "react-redux";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusFunc from "./ProfileStatusFunc";
import {saveProfilePic} from "../profileSlice";

const ProfileInfo = (props) => {
    const profileInfo = useSelector(state => state.profile.profileInfo)
    const profileStatus = useSelector(state => state.profile.profileStatus)
    const dispatch = useDispatch();

    const myId = useSelector(state => state.auth.id)

    function changeProfilePic(e) {
        if (e.target.files.length) {
            dispatch(saveProfilePic(e.target.files[0]))
        } else {
            alert('Select a file please')
        }
    }

    return (
        <div className={s.prHeader}>
            <div className="headerBottom">
                {profileInfo.photos.small
                    ? <img src={profileInfo.photos.small} alt="" className={s.pPic}/>
                    : <img src="https://via.placeholder.com/100/FFFF00/000000" alt="" className={s.pPic}/>
                }
                {props.userId == myId ? <input type="file" onChange={changeProfilePic}/> : null}
                {/*<ProfileStatus status={profileStatus} dispatch={dispatch}/>*/}
                <ProfileStatusFunc userdId={props.userId}/>
                <h1> {profileInfo.fullName} </h1>
                <p> {profileInfo.aboutMe} </p>
            </div>
        </div>
    )
}

export default ProfileInfo;