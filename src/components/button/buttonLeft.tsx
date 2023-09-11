// icon:left-circle | Ant Design Icons https://ant.design/components/icon/ | Ant Design
import * as React from "react";

export type IconType = {
    callback?:()=>void
}

export const IconLeftCircle:React.FC<IconType>  = ({
    callback
                                                   })=> {
    return (
        <svg
            onClick={callback}
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="20px"
            width="20px"
        >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 010-12.9l246-178a8 8 0 0112.7 6.5v46.8z" />
        </svg>
    );
}

