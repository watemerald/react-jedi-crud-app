import React, {useState} from 'react';
import ClassCounter from "./ClassCounter";
import FunctionalCounter from "./FunctionalCounter";
import Button from "../components/common/Button";



const App2 = () => {
    const [counterShown, setCounterShown] = useState(true)

    const handleCounterShow = () => setCounterShown(!counterShown);

    return (
        <div className="container">
            <Button
                label={counterShown ? 'Unmount Counter' : 'Mount Counter'}
                classes="btn btn-primary m-3"
                onClick={handleCounterShow}
                />
            {counterShown && <ClassCounter/>}
            {counterShown && <FunctionalCounter />}
        </div>
    );
};

export default App2;
