import * as React from 'react';

export default class MyComponent extends React.Component {
    render() {
        return <button onClick={this.onclick.bind(this)} />;
    }

    onclick() {
        this.setState({foo: 1, bar: 2})
    }
}