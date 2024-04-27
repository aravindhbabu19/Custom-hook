import './App.css';
import Header from './Header';
import useWindow from './useWindow';
function App() {
  const {width}=useWindow()
  return (
    <div>
      <Header width={width} />
    </div>
  );
}


export default App;
