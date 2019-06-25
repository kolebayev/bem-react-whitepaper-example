import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './SignInForm.css';
import Button from '../Button/Button'
import Input from '../Input/Input'

const cn = withNaming({ e: '__', m: '_' });
// const cnSignInForm = cn('signinform');
const cnPtForm = cn('pt-form');
const cnPtCard = cn('pt-card');
const cnDecorator = cn('decorator');

class SignInForm extends Component {
    render() {
        return (
            <div className={`${cnPtCard(null, [cnPtCard({ view: 'default' })])} alignCenter`} >
                <div className={cnPtCard('content', {})}>
                    <div className={`${cnPtForm(null, [cnPtForm({ view: 'default', border: 'all' })])} ${cnDecorator(null, [cnDecorator({'space-a': '3xl'})])}`}>
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
