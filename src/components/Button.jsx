import React from 'react';

const buttonPrompt = label => {
    if (!label) {
        return null
    } else {
        return <span>{label}</span>
    }
  }

const Button = props => (
    <>
        <a
            href={props.action}
            className={`button is-hidden-touch is-primary
            ${props.size}
            ${props.styles}
            ${props.type}`}
        >
            {buttonPrompt(props.label)}
            <span className="icon is-medium">
                <ion-icon name={props.icon} size={props.iconSize}></ion-icon>
            </span>
        </a>
        <a
            href={props.action}
            className={`button is-hidden-desktop is-primary
            ${props.styles}
            ${props.type}`}
        >
            {buttonPrompt(props.label)}
            <span className="icon is-small">
                <ion-icon name={props.icon} size={props.iconSize}></ion-icon>
            </span>
        </a>
    </>
);

export default Button;