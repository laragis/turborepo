import * as React from 'react';

declare const Button: () => JSX.Element;

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
}
declare const Link: (props: LinkProps) => JSX.Element;

export { Button, Link };
