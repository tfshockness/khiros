import React, { Component, PureComponent } from 'react';
import MainSlider from './components/MainSlider';
import ProductSlider from './components/ProductSlider';
import InfoBoxes from './components/InfoBoxes';

export default class HomePage extends PureComponent{
    
    render(){
        return(
            <div>
                <MainSlider />
                <ProductSlider />
                <InfoBoxes />
            </div>
        );
    }
}