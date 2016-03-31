import * as React from 'react';
import { render } from 'react-dom';
import {EditableField} from '../../src/EditableField'

class DebugComponent extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }

    componentWillReceiveProps(nextProps:any){
        console.log("Debug component componentWillReceiveProps", {nextProps});
    }

    render(){
        return (
            <div onClick={()=>{console.log("CLICKED", {this:this})}}>
                <h3> Debug Content: </h3>
                The current text value: {JSON.stringify(this.props && this.props.editableFieldInput && this.props.editableFieldInput.state)}
            </div>
        )
    }
}

class Container extends React.Component<any, any> {
    public testGlobalReference = "testGlobalReference";
    constructor(props:any){
        super(props)
        this.state = {
            testGlobalReference:null,
        }
    }

    updateOtherContainer = (incomingRef:any)=> {
        console.log("updateOtherContainer called", {incomingRef})
        this.setState({testGlobalReference:incomingRef})
    }

    render(){
        return (
            <div>
                "Hello, world! This works on file saves!"
                <br />
                <EditableField ref={this.updateOtherContainer} />
                <DebugComponent
                    editableFieldInput={this.state.testGlobalReference}
                />
                <h4 onClick={(event)=>{console.log("Clicked h4",
                    {"this.testGlobalReference": this.testGlobalReference})}}> Click test
                </h4>
            </div>
        )
    }
}

render(<Container />, document.getElementById('root'));
