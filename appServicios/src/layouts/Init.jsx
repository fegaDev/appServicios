import React from 'react'
import {Layout,Menu} from 'antd'

const {Header,Sider,Content,Footer} = Layout;

function Init() {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Opción 1</Menu.Item>
        <Menu.Item key="2">Opción 2</Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '16px' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          Contenido de la aplicación
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design Layout ©2026</Footer>
    </Layout>
  </Layout>
    </>
  )
}

export default Init