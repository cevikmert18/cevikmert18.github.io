import photo from './images/green_me.png';
import { Col, Row, Breadcrumb, Layout, Menu, Card  } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import {useRef} from 'react';
import useItems from 'antd/lib/menu/hooks/useItems';
const { Header, Content, Footer } = Layout;



function App() {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const onClickMenuItem = (key) => {
    if(key.key === 'contact') {
      ref1.current?.scrollIntoView({behavior: 'smooth'});
    } else if(key.key === 'about') {
      ref2.current?.scrollIntoView({behavior: 'smooth'});
    } else if(key.key === 'projects') {
      ref3.current?.scrollIntoView({behavior: 'smooth'});
    }
  }

  const items = [
    {label: 'About Me', key: 'about', className: 'customClass'},
    {label: 'Projects', key: 'projects' , className: 'customClass'},
    {label: 'Contact', key: 'contact' , className: 'customClass'},
  ];

  const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    color: '#20C20E',
    backgroundColor: 'black',
    fontSize: '30px',
  };
  
  return (
    <Col span={50}>
      <Header style={centerStyle}>
        <Menu
            theme='dark'
            style={centerStyle}
            mode="horizontal"
            items={items}
            onClick={(key) => onClickMenuItem(key)}
          />
      </Header>
      <div>
          <Card style={centerStyle}>
            <Row gutter={48} style={centerStyle}>
              <Col>
                <h1 ref={ref2} className="header-green">About Me</h1>
              </Col>
              <Col>
                <img src={photo} height="90" alt='me'/>
              </Col>
            </Row>
            <p>Hello Stalker! My name is Mert Cevik. I am currently working at Siemens as a Software Developer. At the same time I am a Senior Computer Engineering student at Istanbul Technical University. I love Computer Science. My passion became my job because of that I have a very happy life! In my free time, I usually play video games. Recently I started to playing chess with my friends. (Queen's Gambit effect!) I live in Istanbul/Turkey.</p>
          </Card>
          <Card style={centerStyle}>
            <h1 ref={ref3} className="header-green">Projects</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
            </p>
          </Card>
          <Card style={centerStyle}>
            <h1 ref={ref1} className="header-green">Contact</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
            </p>
          </Card>
      </div>
    </Col>
  );
}

export default App;
