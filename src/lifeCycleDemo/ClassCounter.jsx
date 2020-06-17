import React, {Component} from 'react';
import Button from "../components/common/Button";

const printLifeCycle = (lifecycleName) => {
    return null;
    console.log('-----')
    console.log(`${lifecycleName}, INVOKED`)
    console.log('-----')
}

// const FakeComponent = () => <h1>{props.notExistedProp}</h1>

class ClassCounter extends Component {
    constructor(props) {
        printLifeCycle('constructor')
        super(props);
        this.state = {
            count: 0,
            hasError: false
        }

    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }
    handleDecrement = () => {
        this.setState({count: this.state.count - 1})
    }
    handleTheSame = () => {
        this.setState({count: this.state.count})
    }

    static getDerivedStateFromProps(props, state) {
        printLifeCycle('getDerivedStateFromProps')
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidMount() {
        printLifeCycle('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.count !== this.state.count) {
            printLifeCycle('shouldComponentUpdate SHOULD')
            return true;
        }
        printLifeCycle('shouldComponentUpdate SHOULD NOT!')
        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        printLifeCycle('componentDidUpdate')
    }

    componentWillUnmount() {
        printLifeCycle('componentWillUnmount')
    }

    // Error Boundaries
    componentDidCatch(error, errorInfo) {
        printLifeCycle('componentDidCatch')
        console.log('ERROR!', error)
        console.log('ERROR INFO', errorInfo)
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        printLifeCycle('render')

        if (this.state.hasError) {
           return (
               <h2>Bratishka, you have an error</h2>
           )
        }

        return (
            <div>
                <Button
                    label="Increment"
                    classes="btn btn-dark m-2"
                    onClick={this.handleIncrement}
                />
                <Button
                    label="Decrement"
                    classes="btn btn-dark m-2"
                    onClick={this.handleDecrement}
                />
                <Button
                    label="Handle the Same"
                    classes="btn btn-dark m-2"
                    onClick={this.handleTheSame}
                />
                <h2>{this.state.count}</h2>
                {/*<FakeComponent />*/}
            </div>
        );
    }
}

export default ClassCounter;
