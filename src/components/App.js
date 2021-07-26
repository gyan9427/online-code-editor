import React from 'react';
import './App.css';
import CodeEditor from './CodeEditor';



class App extends React.Component{
  state = {
    editors: ['xml','javascript','css'],
    srcDoc:"",
  }

  setSrcDocHandler = (html=null,js=null,css=null) => {
    const updatedCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
    `
    this.setState({srcDoc:updatedCode})
  }
 
  render(){
    const editorCount = this.state.editors;
    const editors = editorCount.map(editor => {
      return(
        <CodeEditor
          language = {editor}
          displayName = {editor}
          
        />
      )
    })
    return (
      <div className="App">
        <div className="pane top-pane">
            {editors}
        </div>
          <div className= "bottom-pane">
           <iframe
            title="this is iframe"
            srcDoc={this.state.srcDoc}></iframe>
          </div>
      </div>
    );    
  }

}

export default App;
