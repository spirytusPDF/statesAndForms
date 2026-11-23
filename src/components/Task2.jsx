import { useState } from "react";
export default function Task2({sentData})
{
    const [isWhite, setIsWhite] = useState(true);
    const changeTheme=()=>{
        const nextIsWhite = !isWhite;
        setIsWhite(nextIsWhite);
        sentData(nextIsWhite);
    }
    return(
    <div>
        <p>Change color theme</p>
        <button onClick={changeTheme}><span>{isWhite ? 'Dark' : 'Light'}</span></button>
    </div>
    );
}