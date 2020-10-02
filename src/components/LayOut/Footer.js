import React from 'react';

const RED = '#ff0000';
const BLUE = '#0000ff';
const GRAY = '#678c89';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.submitThemeColor = this.submitThemeColor.bind(this);
    }

    submitThemeColor(color){
        if(color){
            this.props.saveColorTheme(color);
        }
    }

    componentWillReceiveProps(nextprops){
        document
            .documentElement
            .style
            .setProperty("--main-color", nextprops.themeColor.color);
    }

    render(){
        return(
            <div className='footer'>
                <div className='vertical-center'>
                    <span>Choose theme </span>
                    <button className='dot red' onClick={()=>this.submitThemeColor(RED)}></button>

                    <button className='dot blue' onClick={()=>this.submitThemeColor(BLUE)}></button>

                    <button className='dot gray' onClick={()=>this.submitThemeColor(GRAY)}></button>
                </div>
            </div>
        )
    }
}