import 'source-map-support/register';
import * as React from 'react';
import { Button, OverlayTrigger, Popover, Input, ButtonToolbar } from 'react-bootstrap';

export class EditableField extends React.Component<any, any> {
    static displayName = 'EditableField';
    public refs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
    }

    componentDidMount() { }

    save() {
        this.props.onUpdate(this.props.name, this.refs.input.getValue());
        this.refs.overlay.hide();
    }

    cancel() {
        this.refs.overlay.hide();
    }

    submit(event: any) {
        event.preventDefault();
        this.save();
    }

    render() {
        var empty = this.props.value === "";
        var linkText = empty ? 'Empty' : this.props.value;
        var linkClass = empty ? 'editable-click editable-empty' : 'editable-click';
        var popover =
            <Popover id="myMadeUpId">
                <form className='form-inline' onSubmit={this.submit}>
                    <Input type='text' ref='input' placeholder='Empty' className='input-sm' defaultValue={this.props.value}>
                        <ButtonToolbar className='editable-buttons'>
                            <Button bsStyle='primary' className='btn-sm' onClick={this.save}><i className='glyphicon glyphicon-ok'></i></Button>
                            <Button bsStyle='default' className='btn-sm' onClick={this.cancel}><i className='glyphicon glyphicon-remove'></i></Button>
                        </ButtonToolbar>
                    </Input>
                </form>
            </Popover>;

        return (
            <div>
                <ButtonToolbar className='editable-buttons'>
                    <Input
                        type='text'
                        value={this.state.value}
                        placeholder='Empty'
                        className='input-sm'
                        onChange={this.handleChange}>
                    </Input>
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
            </div>
        );
    }

}
