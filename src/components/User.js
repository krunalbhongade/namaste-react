import { useState } from "react";

const User = ({name}) => {
    const [Count] = useState(0);
    const [Count2] = useState(1);
    return <div className="user-card">
    <h1>Count ={Count}</h1>
    <h1>Count2 ={Count2}</h1>
    <h2>Name: {name}</h2>
    <h3>Nagpur</h3>
    <h4>Manewada</h4>
    </div>
}

export default User;