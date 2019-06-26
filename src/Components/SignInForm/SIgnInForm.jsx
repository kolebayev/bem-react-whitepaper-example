import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './SignInForm.css';
import Button from '../Button/Button'
import Input from '../Input/Input'
import Icon from '../../icons/social';

const cn = withNaming({ e: '__', m: '_' });
const cnPtForm = cn('pt-form');
const cnPtCard = cn('pt-card');
const cnDecorator = cn('decorator');
const cnText = cn('text')



let icons = ['twitter', 'facebook', 'linkedin'];

class SignInForm extends Component {
    render() {
        return (
            <div className={`${cnPtCard(null, [cnPtCard({ view: 'default' })])} alignCenter`} >
                <div className={cnPtCard('content', {})}>
                    <div className={`${cnPtForm(null, [cnPtForm({ view: 'default', border: 'all' })])} ${cnDecorator(null, [cnDecorator({'space-a': '3xl'})])}`}>
                        <div className={cnDecorator(null, [cnDecorator({'indent-b': '2xl'})])}>
                            <div className={cnText(null, [cnText({ weight: 'light', size: '4xl', view: 'secondary'})])}>
                                Sign In
                            </div>
                        </div>

                        <Input placeholder={this.props.loginPlaceholder} inputDecorator={cnDecorator(null, [cnDecorator({'indent-b': 'm'})])}/>
                        <Input placeholder={this.props.passwordPlaceholder} inputDecorator={cnDecorator(null, [cnDecorator({'indent-b': 'm'})])}/>
                        <Button text={this.props.buttonText} buttonDecorator=""/>
                        
                        <div style={{display:'flex', justifyContent: 'space-around', marginTop: '50px'}}>
                            {icons.map((item)=> <Icon name={item} size="30"/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInForm;
