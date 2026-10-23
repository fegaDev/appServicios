
import { Divider, Typography } from 'antd';
import Ingreso from '../Components/Ingreso.jsx';

function Init({onLoginSuccess}) {
  const {Title} = Typography; 
  return (
    <>
    <Title>
        Bienvenido Eduardo
    </Title>
    <Ingreso onLoginSuccess={onLoginSuccess}/>
 </>
  )
}

export default Init
