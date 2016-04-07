import * as React from 'react';
import { render } from 'react-dom';
import {EditableField, EditableInlineField} from '../../src'

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
        let firstExample = (<div>
            <h1> First Example</h1>
            <EditableInlineField
                initialValue={'initial value for the first example'}
                saveHandler={null}
            />
        </div>);
        let secondExample = (<div>
            <h1> Second Example</h1>
            <EditableField
                initialValue={"this is the preliminary variable"}
                saveHandler={(e:any)=>console.log("Saved handler called: ", e)}/>
            <DebugComponent
                editableFieldInput={this.state.testGlobalReference}
            />
            <h4 onClick={(event)=>{console.log("Clicked h4",
                {"this.testGlobalReference": this.testGlobalReference})}}> Click test
            </h4>
        </div>);

        let thirdExample = (<div>
            <h1> Third Example</h1>
            <EditableField
                initialValue={new Date()}
                saveHandler={(e:any)=>console.log("Saved handler called: ", e)}
            />
            <DebugComponent
                editableFieldInput={this.state.testGlobalReference}
            />
            <h4 onClick={(event)=>{console.log("Clicked h4",
                {"this.testGlobalReference": this.testGlobalReference})}}> Click test
            </h4>
        </div>);

        let fourthExample = (<div>
            <h1> Fourth Example -- Has to be another date </h1>
            <EditableField
                initialValue={new Date()}
                requireSameTypeOnSave={true}
                saveHandler={(e:any)=>console.log("Saved handler called: ", e)}
            />
            <DebugComponent
                editableFieldInput={this.state.testGlobalReference}
            />
            <h4 onClick={(event)=>{console.log("Clicked h4",
                {"this.testGlobalReference": this.testGlobalReference})}}> Click test
            </h4>
        </div>);

        return (
            <div>
                {firstExample}
                {secondExample}
                {thirdExample}
                {fourthExample}
            </div>
        )

    }
}

render(<Container />, document.getElementById('root'));
