import React, { useState, FC } from "react";

interface DisplayTextProps {
    getUserFullName: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps>  = ({getUserFullName}) => {
    const [txt, setTxt] = useState("");
    const [msg, setMsg] = useState("");

    const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value)
    }

    const onClickShowMsg = async (e: any) => {
        e.preventDefault();
        setMsg(`Welcome to React testing, ${await getUserFullName(txt)}`)
    }


    return (
        <form>
            <div>
                <label>Enter your name</label>
            </div>
            <div>
                <input data-testid="user-input" value={txt} onChange={onChangeTxt}></input>
            </div>
            <div>
                <button data-testid="input-submit" onClick={onClickShowMsg}>Show Message</button>
            </div>
            <div>
                <label data-testid="final-msg">{msg}</label>
            </div>
        </form>
    )
}

export default DisplayText;