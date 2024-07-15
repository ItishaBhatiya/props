import { useState } from "react"

const UserProfileCard = ({ name, age, bio, location, profileImg }) => {
    let [follow, setfollow] = useState(false)
    const handlefollow = () => {
        setfollow(!follow)
    };
    return (
        <div>
            <h1>Name:{name}</h1>
            <h3>Age:{age}<br />Location:{location}</h3>
            <img src={profileImg} alt="error" className="img1" />
            <p> Bio:{bio}
            </p>
            <p> {bio}
                <button>readmore</button>
            </p>
            <button onClick={handlefollow} >{follow ? "Unfollow" : "follow"}</button>
        </div>
    )
}
export default UserProfileCard 