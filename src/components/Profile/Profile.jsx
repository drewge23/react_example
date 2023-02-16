import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileThunkCreator} from "./profileSlice";
import {Navigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hocs/WithAuthRedirect";
import DocumentTitle from 'react-document-title'

let Profile = (props) => {
    const dispatch = useDispatch();
    const params = useParams();

    const isFetching = useSelector(state => state.profile.isFetching);
    useEffect(() => {
        dispatch(getProfileThunkCreator(params.userId))
    }, [params.userId, dispatch])

    const isLogged = useSelector(state => state.auth.isLogged)
    if (!isLogged) {
        return <Navigate to={"/login"}/>
    }

    return (
        <DocumentTitle title={'Profile'}>
            <div className={s.prHeader} style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: '100%',
            }}>
                {isFetching
                    ? <p> Data is fetching... </p>
                    : <ProfileInfo userId={params.userId}/>}
                <Posts/>
            </div>
        </DocumentTitle>
    )
}

Profile = WithAuthRedirect(Profile);
export default Profile;