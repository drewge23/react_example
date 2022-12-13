import s from './ProfileInfo.module.css';
import {useDispatch, useSelector} from "react-redux";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusFunc from "./ProfileStatusFunc";

const ProfileInfo = (props) => {
    const profileInfo = useSelector(state => state.profile.profileInfo)
    const profileStatus = useSelector(state => state.profile.profileStatus)
    const dispatch = useDispatch();

    return (
        <div className={s.prHeader}>
            <div className="headerBottom">
                {profileInfo.photos.small
                    ? <img src={profileInfo.photos.small} alt="" className={s.pPic}/>
                    : <img src="https://via.placeholder.com/100/FFFF00/000000" alt="" className={s.pPic}/>
                }
                {/*<ProfileStatus status={profileStatus} dispatch={dispatch}/>*/}
                <ProfileStatusFunc userdId={props.userId}/>
                <h1> {profileInfo.fullName} </h1>
                <p> {profileInfo.aboutMe} </p>
            </div>
        </div>
    )
}

export default ProfileInfo;