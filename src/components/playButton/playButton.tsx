import React, {useState} from 'react';
import IconPause from "../button/buttonPause";
import IconPlayFill from "../button/buttonPlay";
import s from "./playButton.module.css"


type PropsButton = {

    play:(type:boolean)=>void
}

const PlayButton:React.FC<PropsButton> = ({
    play
                                          }) => {
    const [state, setState] = useState(false)

    const showIconOnClick = () => {
      setState(!state)
        play(state)
    }

    return (
        <div onClick={showIconOnClick} className={s.item} >
            {!state ? <IconPause/> : <IconPlayFill/>}
        </div>
    );
};

export default PlayButton;