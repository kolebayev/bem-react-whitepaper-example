import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './Button.css';

const cn = withNaming({ e: '__', m: '_' });
const cnButton = cn('button');

class Button extends Component {
    render() {
        return (
            <button className={`${cnButton(null, [cnButton({ width: 'full', size: 'l', view: 'primary' })])} ${this.props.buttonDecorator}`}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
