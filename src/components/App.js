import './App.css';
import {UnControlled as CodeMirror} from 'react-codemirror2';

function App() {
  return (
    <div className="App">
        hello
        <CodeMirror
          value= "<h1> React-codemirror2 </h1>"
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers:true
          }}
          onChange= {(editor,data,value)=>{
            
          }}
          />
    </div>
  );
}

export default App;
