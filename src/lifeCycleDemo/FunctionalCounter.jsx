import React, {useEffect, useState} from 'react';
import Button from "../components/common/Button";


const printLifeCycle = (lifecycleName) => {
    console.log('-----')
    console.log(`${lifecycleName}, INVOKED`)
    console.log('-----')
}


const FunctionalCounter = () => {
   printLifeCycle('INITIALIZING/RENDERING')
    const [count, setCount] = useState(0);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleIncrement = () => setCount(count + 1)
    const handleDecrement = () => setCount(count - 1)
    const handleTheSame = () => setCount(count)

    const handleResize = () => setWindowWidth(window.innerWidth)

    // useEffect(()=>{
    //     console.log('RENDERED')
    // })
    //
    // the same as componentDidMount
    useEffect(()=>{
        printLifeCycle('RENDERED JUST ONCE')
        /*eslint no-restricted-globals: ["error", "event"]*/
        addEventListener('resize', handleResize)

        // the same as componentWillUnmount
        return () => {
            printLifeCycle('COMPONENT UNMOUNTED')
            /*eslint no-restricted-globals: ["error", "event"]*/
            removeEventListener('resize', handleResize)
        }
    }, [])

    // useEffect(()=> {
    //     printLifeCycle('RENDERED WHEN COUNT UPDATED')
    // }, [count])

    return (
        <div>
            <Button
                label="Increment"
                classes="btn btn-success m-2"
                onClick={handleIncrement}
            />
            <Button
                label="Decrement"
                classes="btn btn-success m-2"
                onClick={handleDecrement}
            />
            <Button
                label="Handle the Same"
                classes="btn btn-success m-2"
                onClick={handleTheSame}
            />
            <h2>{count}</h2>
            <h2>WINDOW WIDTH: {windowWidth}</h2>
        </div>
    );
};

const arePropsEqual = (prevProps, nextProps) => {
    //
}

export default React.memo(FunctionalCounter, arePropsEqual);
