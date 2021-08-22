// @flow
import * as React from 'react';

export const PriceItem = (props) => {
    return (
        <li>{props.price.ticker} {props.price.price}</li>
    );
};