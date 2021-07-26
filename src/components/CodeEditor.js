import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import {Controlled as CodeMirror} from 'react-codemirror2';
import "./CodeEditor.css";
import React from "react";


class CodeEditor extends React.Component{
    state = {
        value:"",
    }


 handleChange = (editor,data,value)=>{
       console.log(this.props.language);
}    
render(){
    const language = this.props.language
    const codeOptions = {
            lineWrapping: true,
            mode: language,
            theme: 'material',
            lineNumbers: true,
    }
    return (
        <div className="editor-frame"> 
            <div className="inner-frame">
                <div className="ctrl-btns">
                    <button className="expand-btn">
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className="collapse-btn">
                        <i className="fas fa-minus-square"></i> 
                    </button>
                </div>
                <div className="code-Editor">
                <CodeMirror
                value={this.state.value}
                language = {this.props.language}
                options={codeOptions}
                onBeforeChange={(editor, data, value) => {
                    this.setState({value: value});
                  }}
                onChange = {this.handleChange}
                />
                </div>
            </div> 
        </div>
    )

}
   
 
}

export default CodeEditor;