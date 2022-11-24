import { StoreContext } from '../..';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={s.prHeader}>
            <ProfileInfo />
            {/* <StoreContext.Consumer> */}
               <PostsContainer />
            {/* </StoreContext.Consumer> */}
        </div>
    )
}

export default Profile;