import 'source-map-support/register';
import * as _ from 'underscore';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {getProperty} from './Utils'
import { Button, OverlayTrigger, Overlay, Col, Row, Grid,
    Popover, Input, ButtonToolbar, Tooltip, ButtonGroup} from 'react-bootstrap';

export type EditableFieldPropTypes = {
    initialValue: any,
    saveHandler: Function,
    requireSameTypeOnSave?: boolean
};
export type EditableFieldStateType = {
    initialValue?: string,
    userTextInput?: string,
    textEnteredSinceFocus?: boolean,
    textEnteredNotSaved?: boolean,
    textInputCurrentlyFocused?: boolean,
    inputCurrentlyVisible?:boolean,
};

export class EditableInlineField extends React.Component<EditableFieldPropTypes, EditableFieldStateType> {
    static displayName = 'EditableInlineField';
    static propTypes = {
        initialValue: React.PropTypes.string.isRequired,
        saveHandler: React.PropTypes.func
    }

    constructor(props: any) {
        super(props);
        this.state = {
            userTextInput: this.props.initialValue,
            textEnteredSinceFocus: false,
            textEnteredNotSaved: false,
            textInputCurrentlyFocused: false,
            inputCurrentlyVisible: false,
        };
    }

    componentDidMount() {}

    submit(event: any) {}

    userClickOutsideInput = (event:React.SyntheticEvent) => {
        this.setState({
            textInputCurrentlyFocused: false,
            inputCurrentlyVisible: false
        });
    }

    handleChangeToInput = (event:any) => {
        switch (typeof event.target.value) {
            case 'string':
                this.setState({
                    userTextInput: event.target.value.trim(),
                    textEnteredSinceFocus:true,
                    textEnteredNotSaved: true,
                });
            default:
                this.setState({
                    userTextInput: event.target.value,
                    textEnteredSinceFocus:true,
                    textEnteredNotSaved: true,
                });
        }
    }

    cancel = (event: React.SyntheticEvent) => {
        this.userClickOutsideInput(event);
        this.setState({
            userTextInput: this.props.initialValue,
            textEnteredNotSaved: false,
        });
    };

    saveUserInput = (event: React.SyntheticEvent) => {
        this.setState({
            textInputCurrentlyFocused: false,
            inputCurrentlyVisible: false,
            textEnteredSinceFocus:false,
            textEnteredNotSaved: false,
        });
        this.props.saveHandler(this.state.userTextInput)
    }

    render() {
        let confirmationButtonGroup = (
            <ButtonGroup>
                <Button
                    bsStyle='primary'
                    className='btn-sm'
                    onClick={this.saveUserInput}
                >
                    <i block className='glyphicon glyphicon-ok'></i>
                </Button>
                <Button
                    bsStyle='default'
                    className='btn-sm'
                    onClick={this.cancel}
                >
                    <i block className='glyphicon glyphicon-remove'></i>
                </Button>
            </ButtonGroup>
        );

        let unsavedDataWarning = (
            <span id="helpBlock2"><span className={"has-warning"}>
                <span className={"help-block"} >
                    Unsaved changes since last edit
                </span>
            </span></span>
        );

        let inputFormAndButtonWrapper = (
            <ButtonToolbar>
                <ButtonGroup>
                    <input
                        autoFocus
                        className={"input-block-level"}
                        type="text"
                        value={this.state.userTextInput}
                        placeholder="Empty"
                        onChange={this.handleChangeToInput}
                        aria-describedby="helpBlock2"
                    />
                </ButtonGroup>
                {confirmationButtonGroup}
            </ButtonToolbar>
        );

        let pencilEditButton = (
            <ButtonGroup>
                <Button
                    bsStyle='default'
                    className='btn'
                    onClick={()=>{this.setState({inputCurrentlyVisible:true})}}
                >
                    <i block className='glyphicon glyphicon-pencil'></i>
                </Button>
            </ButtonGroup>
        );

        let linkToInputFieldEntry = (
            <div>
                {this.props.initialValue}
                <a onClick={()=>{this.setState({inputCurrentlyVisible:true})}}>
                    <i style={{paddingLeft:"1em"}} block className='glyphicon glyphicon-pencil'></i>
                </a>
            </div>
            // <ButtonToolbar>
            //     <ButtonGroup>
            //         <Button bsStyle="link">
            //
            //         </Button>
            //     </ButtonGroup>
            //
            // </ButtonToolbar>
        );

        return (
            <div>
                {(() => {
                    switch(this.state.inputCurrentlyVisible){
                        case false: return linkToInputFieldEntry
                        case true: return inputFormAndButtonWrapper
                        default: return null
                    }
                })()}
                {(()=> {if(this.state.textEnteredNotSaved) return unsavedDataWarning })()}
            </div>
        )
    }
}
