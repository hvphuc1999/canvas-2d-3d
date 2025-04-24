import './App.css'
import { Tabs } from 'antd';

function App() {

  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: '2D Editor',
      children: <iframe src="https://canvas-2d-wheat.vercel.app" title="Canvas 2D"></iframe>
    },
    {
      key: '2',
      label: '3D Editor',
      children: <iframe src="https://editor-3d-demo.vercel.app" title="Canvas 3D"></iframe>
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
}

export default App
