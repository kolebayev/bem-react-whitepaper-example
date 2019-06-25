import React from 'react';
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '__', m: '_' });
const cnLayout = cn('tpl-layout');
const cnGrid = cn('tpl-grid');

export default function Layout({children}) {
    return (
        <div className={cnLayout({structure: '100'})}>
            <div className={cnGrid({'l-columns': '12'})}>
                <div className={cnGrid('fraction', {'s-col': '4'})}></div>
                <div className={cnGrid('fraction', {'s-col': '4'})}>{children}</div>
                <div className={cnGrid('fraction', {'s-col': '4'})}></div>
            </div>
        </div>
    );
}