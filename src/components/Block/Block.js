import React from 'react'

import './Block.css'

import FooterDefault from '../FooterDefault'
import FooterDisabled from '../FooterDisabled'
import FooterSelected from '../FooterSelected'

const Block = ({ id,beforeTitle, title, 
                afterTitle, portions,
                client, present, 
                weight, unit, footer,
                active, 
                disabled,
                onActiveClick,
            }) => {

    let classNames = 'block';
    let footerBar = <FooterDefault/>;
    
    if (active) {
        classNames += ' active';
        footerBar = <FooterSelected footer={footer}/>;
    };
    if (disabled) {
        classNames += ' disabled';
        footerBar = <FooterDisabled afterTitle={afterTitle} />;
    };

    return (
        <div className={ classNames }onClick= { () => onActiveClick(id) }>

            <div className="block__description">
                <p className="description-before">{beforeTitle}</p>
                <p className="description-title">{title}</p>
                <p className="description-after">{afterTitle}</p>
                <p className="description-portions"> <strong> {portions} </strong> порций <br/> {present} <br/> {client}</p>
            </div>
            <div className="block__weight"><p> <span>{weight}</span> <br/>{unit}</p> </div>

            
            <img src={process.env.PUBLIC_URL + 'Photo-cat.png'} alt="logo" />
            {footerBar}
        </div>
    )
};

export default Block;