import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { VideoController, test } from './VideoController';


export default class ItemButtonGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.items                  = props.items;
        this.data                   = props.data;
        this.itemContainerHeight    = props.itemContainerHeight;
        this.pageTitle              = props.pageTitle;
        this.pageBody               = props.pageBody;
        this.DataBlockContainer     = this.DataBlockContainer.bind(this);
        this.SelectedItemContainer  = this.SelectedItemContainer.bind(this);
        this.ItemButtonContainer    = this.ItemButtonContainer.bind(this);
        this.handleItemButton       = this.handleItemButton.bind(this);

        this.state = {
            pageheader: "",
            pageBody: "",
            title: "",
            address1: "",
            address2: "",
            address3: "",
            phoneNumber: "",
            roll1: "",
            roll2: "",
            roll3: "",
            roll4: "",
            roll5: "",
            media: ""
        }
    }

    handleItemButton(e, props) {
        let item = e.target.getAttribute('data-id');

        if(this.items[item].id === "video-loop") {
            test(props);
        };

        this.setState(() => {
            return {
                title: this.items[item].title,
                address1: this.items[item].address1,
                address2: this.items[item].address2,
                address3: this.items[item].address3,
                phoneNumber: this.items[item].phoneNumber,
                roll1: this.items[item].roll1,
                roll2: this.items[item].roll2,
                roll3: this.items[item].roll3,
                roll4: this.items[item].roll4,
                roll5: this.items[item].roll5,
                media: this.items[item].media
            }
        })
    }

    DataBlockContainer(props) {
        return (         
            <div className="dataBlock-container">
                <h2>{this.pageTitle}</h2>
                <hr />
                {this.pageBody}
                <br />
                <div className="dataBlock">
                    <h2>{this.state.title}</h2>
                    {this.state.address1}
                    {this.state.address2}
                    {this.state.address3}
                    {this.state.phoneNumber} 
                    <br />
                    {this.state.roll1}
                    {this.state.roll2}
                    {this.state.roll3}
                    {this.state.roll4}
                    {this.state.roll5}           
                </div> 
            </div>
        )
    }

    SelectedItemContainer(props) {
        return (
            <div className="selectedItem-container">
                {this.state.media}
            </div>
        )
    }

    ItemButtonContainer(props) {
        return (
            <div className="item-container" style={this.itemContainerHeight}>
                {this.items.map((item, index) => 
                    <div>
                        <button style={{backgroundImage:`url(${item.backgroundImage})`}}
                            onClick={this.handleItemButton} 
                            className="menu-button itemMenu-btn"
                            data-id={index}>
                                {item.buttonLabel}
                        </button>
                    </div> 
                )}
            </div>
        )
    }

    render(props) {
        return (
            <div class="scene">
                <this.DataBlockContainer />
                <div className="gallery-container">
                    <this.SelectedItemContainer />
                    <this.ItemButtonContainer />
                </div>
            </div>         
        )
    }
}