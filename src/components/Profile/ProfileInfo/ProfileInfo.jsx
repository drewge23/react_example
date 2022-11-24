import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.prHeader}>
            <div className="headerBottom">
                <img src="https://via.placeholder.com/150/FFFF00/000000" alt="" className={s.pPic} />
                <h1>Andrei Timofeev</h1>
                <p>goes down the everchanging sea</p>
            </div>
        </div>
    )
}

export default ProfileInfo;