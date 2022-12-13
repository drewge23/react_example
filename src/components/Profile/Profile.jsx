import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileThunkCreator} from "./profileSlice";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hocs/WithAuthRedirect";

let Profile = (props) => {
    const dispatch = useDispatch();
    const params = useParams();

    const isFetching = useSelector(state => state.profile.isFetching);
    useEffect(() => {
        dispatch(getProfileThunkCreator(params.userId))
    }, [params.userId, dispatch])

    return (
        <div className={s.prHeader}>
            {isFetching
                ? <p> Data is fetching... </p>
                : <ProfileInfo userId={params.userId}/>}
            <Posts/>
        </div>
    )
}

Profile = WithAuthRedirect(Profile);
export default Profile;