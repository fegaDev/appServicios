import React from 'react';
import './ingreso.css'
import {Row,Col,Flex,Input,Button} from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons';

const Ingreso = () => {
  return (
  <Row justify="center">
  <Col xs={24} sm={16} md={12} lg={8}>
    <Flex vertical gap="medium">
      <Input size="large" placeholder="Correo" />
      <Input size="large" placeholder="Contraseña" />
      <Button color="purple" size="large" variant="solid">Ingresar</Button>
    </Flex>
  </Col>
</Row>
  )
}

export default Ingreso