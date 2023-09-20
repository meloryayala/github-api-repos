import {useEffect, useState} from "react";

const Profile = ({username}) => {
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState({})

    useEffect(() => {
        async function fetchData(){
            const profile = await fetch(`https://api.github.com/users/${username}`);
            const result = await profile.json();

            if(result) {
                setProfile(result);
                setLoading(false)
            }
        }

        fetchData();

    },[username])

  return(
        <div>
            <h2>About me</h2>
            {
                loading
                ? <span>Loading...</span>
                    :(
                        <ul>
                            <li>
                                <span>avatar_url:</span>
                                {profile.avatar_url}
                            </li>
                        </ul>
                    )
            }
        </div>
  )
}

export default Profile