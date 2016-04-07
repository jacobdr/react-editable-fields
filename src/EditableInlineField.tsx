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
            initialValue: this.props.initialValue,
            userTextInput: null,
            textEnteredSinceFocus: false,
            textEnteredNotSaved: false,
            textInputCurrentlyFocused: false,
            inputCurrentlyVisible: false,
        };
    }

    componentDidMount() { }

    submit(event: any) {
    }

    cancel = (event: React.SyntheticEvent) => {
        this.setState({
            userTextInput: null,
            textEnteredNotSaved: false,
        })
    }

    render() {
        let confirmationButtonGroup = (
            <ButtonGroup>
                <Button
                    bsStyle='primary'
                    className='btn-sm'
                    onClick={null}
                >
                    <i block className='glyphicon glyphicon-ok'></i> Save
                </Button>
                <Button
                    bsStyle='default'
                    className='btn-sm'
                    onClick={this.cancel}
                >
                    <i block className='glyphicon glyphicon-remove'></i> Cancel
                </Button>
            </ButtonGroup>
        );
        // {confirmationButtonGroup}
        let inputFormAndButtonWrapper = (
            // <Grid>
            //     <Row>
            //         <Col xs={6} md={6}>
            //             <Input
            //                 inline
            //                 autoFocus
            //                 standalone
            //                 type="text"
            //                 value={this.state.userTextInput || this.props.initialValue}
            //                 placeholder="Empty"
            //                 onChange={(e: any) => { this.setState({ userTextInput: e.target.value }) } }
            //                 onBlur={()=>{this.setState({inputCurrentlyVisible:true})}}
            //             />
            //         </Col>
            //         <Col xs={6} md={6}>
            //             <ButtonGroup justified>
            //                 <Button
            //                     bsStyle='primary'
            //                     className='btn-sm'
            //                     onClick={null}
            //                 >
            //                     <i block className='glyphicon glyphicon-ok'></i>
            //                 </Button>
            //                 <Button
            //                     bsStyle='default'
            //                     className='btn-sm'
            //                     onClick={this.cancel}
            //                 >
            //                     <i block className='glyphicon glyphicon-remove'></i>
            //                 </Button>
            //             </ButtonGroup>
            //         </Col>
            //     </Row>
            // </Grid>);
            <div className="clearfix">
                <input
                    inline
                    autoFocus
                    standalone
                    type="text"
                    value={this.state.userTextInput || this.props.initialValue}
                    placeholder="Empty"
                    onChange={(e: any) => { this.setState({ userTextInput: e.target.value }) } }
                    onBlur={()=>{this.setState({inputCurrentlyVisible:true})}}
                    className="pull-left"
                />
                    <Button
                        bsStyle='primary'
                        className='btn-sm pull-left'
                        onClick={null}
                    >
                        <i block className='glyphicon glyphicon-ok'></i>
                    </Button>
                    <Button
                        bsStyle='default'
                        className='btn-sm pull-left'
                        onClick={this.cancel}
                    >
                        <i block className='glyphicon glyphicon-remove'></i>
                    </Button>
            </div>
        );

        let linkToInputFieldEntry = (
            <ButtonGroup className='editable-buttons'>
                <Button
                    ref='anchorLinkInputGateway'
                    style={{ borderBottom: "1px dotted #000" }}
                    bsStyle="link"
                    onClick={()=>{this.setState({inputCurrentlyVisible:true})}}
                >
                    {this.props.initialValue}
                </Button>
            </ButtonGroup>
        );

        let combinedButtonToolbar = (
            <div>
                {(() => {
                    switch(true){
                    // switch(this.state.inputCurrentlyVisible){
                        case false: return linkToInputFieldEntry
                        case true: return inputFormAndButtonWrapper
                        default: return null
                    }
                })()}
            </div>
        );

        let userInputTextBox = (
            <Input
                ref={(c: any) => { c && c.getInputDOMNode && c.getInputDOMNode().focus() } }
                type='text'
                placeholder={'Empty'}
                value={null}
                className='input-sm'
                onChange={null}
                onBlur={null}
                help="Validation is based on string length."
                bsStyle={"warning"}
                />
        );

        return combinedButtonToolbar
    }
}
