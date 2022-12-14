import React, {useContext} from "react";
import './index.scss'

// CONSTANTS

// DEFAULT FUNCTIONS

// TODO: copy this components directory and add your content to make your page

type SnippetComponentPropType = {
    // You should declare props like this, delete this if you don't need props
    someProp: any
    somePropWithDefaultOption?: string
}

const SnippetComponentDefaultProps = {
    // You should declare default props like this, delete this if you don't need props
    somePropWithDefaultOption: 'default value'
}

const SnippetComponent = (props: SnippetComponentPropType) => {
    return (
        <div className={'some-classname'}>
        </div>
    )
};

SnippetComponent.defaultProps = SnippetComponentDefaultProps

export default SnippetComponent