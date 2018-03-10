import React, { Component } from 'react';
import MainSlider from './components/MainSlider';
import ProductSlider from './components/ProductSlider';

export default class HomePage extends Component{
    
    render(){
        return(
            <div>
                <MainSlider />
                <ProductSlider />
            </div>
        );
    }
}