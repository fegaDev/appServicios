import React, { useState } from 'react';
import './ingreso.css';
import { Row, Col, Flex, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Ingreso = ({onLoginSuccess}) => {
    const [ingresoValues, setIngresoValues] = useState({
        correo: '',
        contrasena: ''
    });

    // 1. Recibimos el 'name' directamente como parámetro y 'e' para sacar el valor
    const handleIngresoChange = (name, e) => {

        setIngresoValues({
            ...ingresoValues,
            [name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(ingresoValues.correo ==="fegadeveloper@gmail.com" && ingresoValues.contrasena ==="eduardo10"){
            message.success('!Bienvenido!');

            onLoginSuccess();
        } else{
            message.error('Correo o contraseña incorrectos');
        }


        console.log('Correo:', ingresoValues.correo);
        console.log('Contraseña:', ingresoValues.contrasena);
    }

  return (
    <Row justify="center">
      <Col xs={24} sm={16} md={12} lg={8}>
        <Flex vertical gap="middle" component="form" onSubmit={handleSubmit}>
          {/* 2. Invocamos la función pasando 'correo' y el evento 'e' */}
          <Input 
            size="large" 
            placeholder="Correo" 
            prefix={<UserOutlined />}
            value={ingresoValues.correo} 
            onChange={(e) => handleIngresoChange('correo', e)} 
          />
          
          {/* 3. Usamos Input.Password para ocultar la contraseña y pasamos 'contrasena' */}
          <Input.Password 
            size="large" 
            placeholder="Contraseña" 
            prefix={<LockOutlined />}
            value={ingresoValues.contrasena} 
            onChange={(e) => handleIngresoChange('contrasena', e)} 
          />

          <Button type="primary" htmlType="submit" size="large">
            Ingresar
          </Button>
        </Flex>
      </Col>
    </Row>
  );
}

export default Ingreso;