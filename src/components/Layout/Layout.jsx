import React from 'react';
import { Layout, Space } from 'antd';

const Loyout = () => {
const { Header } = Layout;
const headerStyle = {
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#000059',
};

const imageStyle = {
   width: 'auto',
   height: 64,
   cursor: 'pointer'
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
    </Layout>
  </Space>
)};

export default Loyout;