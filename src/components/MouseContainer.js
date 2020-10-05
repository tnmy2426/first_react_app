import React,{useState} from 'react'
import MouseMove from './MouseMove';

const MouseContainer = () => {
    const [show, setshow] = useState(true)
    return (
        <div>
            <button onClick={()=> setshow(!show)}>Toggle show</button>
            {show && <MouseMove /> }
        </div>
    )
}

export default MouseContainer
