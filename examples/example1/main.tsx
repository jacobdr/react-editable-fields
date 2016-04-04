import * as React from 'react';
import { render } from 'react-dom';
import {EditableField} from '../../src/EditableField'

class DebugComponent extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        console.log("Debug component componentWillReceiveProps", {nextProps});
    }

    render(){
        return (
            <div onClick={()=>{console.log("CLICKED", {this:this})}}>
                <h3> Debug Content: </h3>
                The current text value: {JSON.stringify(this.props.editableFieldInput)}
            </div>
        )
    }
}

class Container extends React.Component<any, any> {
    public testGlobalReference = "testGlobalReference";
    constructor(props){
        super(props)
        this.state = {
            testGlobalReference:null,
        }
    }

    updateOtherContainer = (incomingRef)=> {
        console.log("updateOtherContainer called", {incomingRef})
        this.setState({testGlobalReference:incomingRef})
    }

    render(){
        return ( <div>
            <div>
                <br />
                <EditableField ref={this.updateOtherContainer} />
                <DebugComponent
                    editableFieldInput={this.state.testGlobalReference}
                />
                <h4 onClick={(event)=>{console.log("Clicked h4",
                    {"this.testGlobalReference": this.testGlobalReference})}}> Click test
                </h4>
            </div>
            <div>
                <br />
                <EditableField initialValue="initailzied string" ref={this.updateOtherContainer} />
                <DebugComponent
                    editableFieldInput={this.state.testGlobalReference}
                />
                <h4 onClick={(event)=>{console.log("Clicked h4",
                    {"this.testGlobalReference": this.testGlobalReference})}}> Click test
                </h4>
            </div>
        </div>)
    }
}

render(<Container />, document.getElementById('root'));
