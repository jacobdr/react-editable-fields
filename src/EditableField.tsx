import 'source-map-support/register';
import * as _ from 'underscore';
import * as React from 'react';
import {getProperty} from './Utils'
import { Button, OverlayTrigger, Overlay, Col, Row,
    Popover, Input, ButtonToolbar } from 'react-bootstrap';

export type EditableFieldPropTypes = {initialValue:any, saveHandler?:Function, requireSameTypeOnSave?:boolean};
export type EditableFieldStateType = {value?:any, textEnteredSinceFocus?:boolean, textEnteredNotSaved?:boolean};
export class EditableField extends React.Component<EditableFieldPropTypes, EditableFieldStateType> {
    static displayName = 'EditableField';
    static propTypes = {
        initialValue: React.PropTypes.any.isRequired,
        saveHandler:React.PropTypes.func,
        requireSameTypeOnSave: React.PropTypes.bool,
    }

    constructor(props: any) {
        super(props);
        this.state = {
            value: null,
            textEnteredSinceFocus: false,
            textEnteredNotSaved: false,
        };
        switch (typeof this.props.initialValue){
            case 'string':
                this.state = _.extend(this.state, {
                    value: this.props.initialValue,
                });
            default:
                this.state = _.extend(this.state, {
                    value: getProperty('initialValue.toString', this.props) && this.props.initialValue.toString() || '',
                });
        }
    }

    componentDidMount(){}

    handleChangeToInput = (event:any) => {
        // console.log("onChange event",{event, value: event.target.value});
        this.setState({
            value: event.target.value,
            textEnteredSinceFocus:true,
            textEnteredNotSaved: true,
        });
    }

    handleInputBlur = (event:React.FocusEvent) => {
        this.setState({
            textEnteredSinceFocus: false,
        });
    }

    saveHander = this.props.saveHandler || ((value:any) => console.log("Save handler called with: ", value));

    save = (event:React.SyntheticEvent) => {
        let stateToSave = this.state.value;
        this.setState({
            textEnteredNotSaved: false
        });

        if (!this.props.requireSameTypeOnSave) {
            this.setState({value:this.state.value})
            this.saveHander(this.state.value);
        }
        else if (typeof this.props.initialValue === typeof(this.state.value)){
            this.setState({value:this.state.value})
            this.saveHander(this.state.value);
        }
        else {
            this.setState({value:this.props.initialValue})
        }
    }

    cancel = (event: React.SyntheticEvent) => {
        console.log('Cancel button called', event);
        event.preventDefault();
        this.setState({
            value:this.props.initialValue,
            textEnteredNotSaved: false,
        })
    }

    submit(event: any) {
        event.preventDefault();
        this.save(event);
    }

    render() {
        let PopupSaveButtons = (<Popover id="saveCancelButtonPopover">
            <ButtonToolbar className='editable-buttons'>
                <Button
                    bsStyle='primary'
                    className='btn-sm'
                    onClick={this.save}>
                        <i className='glyphicon glyphicon-ok'></i>
                </Button>
                <Button
                    bsStyle='default'
                    className='btn-sm'
                    onClick={this.cancel}>
                        <i className='glyphicon glyphicon-remove'></i>
                </Button>
                </ButtonToolbar>
            </Popover>);

        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <OverlayTrigger placement="right" overlay={PopupSaveButtons} trigger="focus">
                            <div>
                                <Input
                                    type='text'
                                    value={this.state.value}
                                    placeholder='Empty'
                                    className='input-sm'
                                    onChange={this.handleChangeToInput}
                                    onBlur={this.handleInputBlur}
                                />
                                { (()=>{ if (this.state.textEnteredNotSaved){
                                    return (<div style={{color:'red', marginTop:"-10px"}}> Update has not been saved yet </div>)
                                }})() }
                            </div>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </div>
        );
    }
}
