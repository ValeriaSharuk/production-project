import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
        </div>
    </div>
);
