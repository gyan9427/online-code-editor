import React from 'react';
import './App.css';
import CodeEditor from './CodeEditor';



class App extends React.Component{
  state = {
    editors: ['xml','javascript','css'],
    srcDoc:'',
    html:'',
    js:'',
    css:'',
  }

  setSrcDocHandler = (code,lang) => {
    let innerCode = null;
    
    if(lang === "xml"){
      innerCode = `${code}`
      // innerCode = html.concat(` ${innerCode}`)
      this.setState({html:innerCode})
    }
    if(lang === "javascript"){
      innerCode = `${code}`
      // innerCode = js.concat(` ${innerCode}`)
      this.setState({js:innerCode})
    }
    if(lang ==="css"){
      innerCode = `${code}`
      // innerCode = css.concat(` ${innerCode}`)
      this.setState({css:innerCode})
    }

    const updatedCode = `
    <html>
      <body>
      ${this.state.html}
      
      </body>
      <style>${this.state.css}</style>
      <script>${this.state.js}</script>
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
          srcCode = {this.setSrcDocHandler}
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
