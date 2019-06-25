import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './Input.css';

const cn = withNaming({ e: '__', m: '_' });
const cnInput = cn('input');

class Input extends Component {
    render() {
        return (
            <input
                className={cnInput(null, [cnInput({ width: 'full', size: 'l' })])}
                type="text"
                placeholder={this.props.placeholder}
                value={this.props.value}
            ></input>
        );
    }
}

export default Input;
