import React from 'react';
import { withNaming } from '@bem-react/classname';
import Layout from './Components/Layout/Layout';
// import EntryForm from './Components/EntryForm/EntryForm';
// import Input from './Components/Input/Input';
// import Button from './Components/Button/Button';
import './App.css' /* imports theme_control_whitepaper-default */
import SignInForm from './Components/SignInForm/SIgnInForm';

const cn = withNaming({ e: '__', m: '_' });
const cnTheme = cn('theme');

function App() {
  return (
    <div className={cnTheme({ size: 'default', space: 'default', breakpoint: 'default', color: 'whitepaper-default', control: 'whitepaper-default' })}>
      <Layout>
        {/* <Input placeholder="username" />
        <Button text="username" addClassName="123" /> */}
        <SignInForm loginPlaceholder="username" passwordPlaceholder="password" buttonText="Sign In" />
      </Layout>
    </div>
  );
}

export default App;


