import React from 'react'
import TextLine from '../style/Textline-style.js'

export default (props) => {
    return (
        <div>
            <TextLine className={props.marked ? 'marked' : ''}>{props.text}</TextLine>
        </div>
    );
};
