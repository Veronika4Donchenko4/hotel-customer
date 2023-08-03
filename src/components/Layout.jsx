import React from 'react';
import { Layout, Space } from 'antd';

const Layoud = () => {
const { Header, Footer, Content } = Layout;
const headerStyle = {
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'grey',
};

const imageStyle = {
   width: 'auto',
   height: 64,
   cursor: 'pointer'
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
return (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>
      <img style={imageStyle} src='/images/logo.png'></img>
      </Header>
      <Content style={contentStyle}/>
      <Footer style={footerStyle}/>
    </Layout>
  </Space>
)};

export default Layoud;