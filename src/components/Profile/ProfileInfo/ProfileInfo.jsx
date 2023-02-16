import s from './ProfileInfo.module.css';
import {useDispatch, useSelector} from "react-redux";
import ProfileStatusFunc from "./ProfileStatusFunc";
import {saveProfilePic, setIsEditMode} from "../profileSlice";
import ProfileInfoForm from "./ProfileInfoForm";

import BUSINESS_CAT from '../../../assets/business_cat.jpg'

const ProfileInfo = (props) => {
    const profileInfo = useSelector(state => state.profile.profileInfo)
    const profileStatus = useSelector(state => state.profile.profileStatus)
    const dispatch = useDispatch();

    const myId = useSelector(state => state.auth.id)

    const isEditMode = useSelector(state => state.profile.isEditMode)

    function changeProfilePic(e) {
        if (e.target.files.length) {
            dispatch(saveProfilePic(e.target.files[0]))
        } else {
            alert('Select a file please')
        }
    }

    return (
        <div className={s.prHeader} style={{flexGrow: 1, borderRadius: '25px'}}>
            <div className="headerBottom">
                {profileInfo.photos?.small
                    ? <img src={profileInfo.photos.large} alt="" className={s.pPic}/>
                    : <img src={BUSINESS_CAT} alt="" className={s.pPic}/>
                }
                {props.userId == myId ? <input type="file" onChange={changeProfilePic}/> : null}
                {/*<ProfileStatus status={profileStatus} dispatch={dispatch}/>*/}
                <ProfileStatusFunc userId={props.userId}/>

                {isEditMode
                    ? <ProfileInfoForm profileInfo={profileInfo}/>
                    : <div>
                    <div>
                        <h1> Name: {profileInfo.fullName} </h1>
                    </div>
                    {profileInfo.aboutMe &&
                        <div>
                            <p> About me: {profileInfo.aboutMe} </p>
                        </div>
                    }
                    <div>
                        <p> Contacts </p>
                        {profileInfo.contacts && Object.keys(profileInfo.contacts).map(key => {
                            return (
                                profileInfo.contacts[key] && <div key={key} style={{fontSize: '10px'}}>
                                    <p style={{marginLeft: '30px'}}>
                                        {key}: <a href={'https://' + profileInfo.contacts[key]}
                                                     target="_blank">
                                        {profileInfo.contacts[key]}
                                    </a>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <p> Looking for a job: {profileInfo.lookingForAJob ? 'yes' : 'no'} </p>
                    </div>
                    {profileInfo.lookingForAJob &&
                        <div>
                            <p> Description: {profileInfo.lookingForAJobDescription} </p>
                        </div>
                    }
                    {props.userId == myId &&
                        <div>
                            <button style={{padding: '0px 10px'}}
                                    onClick={() => dispatch(setIsEditMode(true))}>Edit
                            </button>
                        </div>
                    }
                </div>}
            </div>
        </div>
    )
}

export default ProfileInfo;
