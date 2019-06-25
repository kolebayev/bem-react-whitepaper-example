import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './SignInForm.css';
import Button from '../Button/Button'
import Input from '../Input/Input'

const cn = withNaming({ e: '__', m: '_' });
// const cnSignInForm = cn('signinform');
const cnPtForm = cn('pt-form');
const cnPtCard = cn('pt-card');

const alignCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100vh'
}

class SignInForm extends Component {
    render() {
        return (
            <div className={cnPtCard(null, [cnPtCard({ view: 'default' })])} style={alignCenter}>
                <div className={cnPtCard('content', { 'space-a': '2xl' })}>
                    <div className={cnPtForm(null, [cnPtForm({ view: 'default', border: 'all' })])}>
                        <Input placeholder={this.props.loginPlaceholder}/>
                        <Input placeholder={this.props.passwordPlaceholder}/>
                        <Button text={this.props.buttonText} addClassName=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInForm;
