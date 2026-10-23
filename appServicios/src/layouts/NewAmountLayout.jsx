import React from "react";
import { Button, Card, Col, DatePicker, Form, InputNumber, Row, Typography, Alert } from "antd";
import { CalculatorOutlined, ClearOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Text } = Typography;
const currency = (value) => `S/ ${Number(value || 0).toFixed(2)}`;

export default function NewAmountLayout({ onCalculate, apartments }) {
  const [form] = Form.useForm();
  const occupiedCount = apartments.filter((item) => item.occupied).length;
  const vacantCount = apartments.length - occupiedCount;

  const submit = (values) => {
    const month = values.month.format("MMMM YYYY");
    onCalculate({
      month: month.charAt(0).toUpperCase() + month.slice(1),
      waterTotal: values.waterTotal,
      lightTotal: values.lightTotal,
      occupiedPayment: values.occupiedPayment,
      vacantPayment: values.vacantPayment,
    });
  };

  return (
    <div className="content-stack">
      <Alert
        type="info"
        showIcon
        message="Registra los recibos del mes"
        description="Ingresa manualmente los importes y las tarifas que hayas definido. El botón calcular guarda este resumen en el estado local de la aplicación."
      />
      <Card className="section-card form-card" bordered={false}>
        <div className="form-intro">
          <div className="metric-icon calculator-icon"><CalculatorOutlined /></div>
          <div>
            <h2>Nuevo monto mensual</h2>
            <Text type="secondary">Completa los campos para registrar el periodo.</Text>
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={submit}
          initialValues={{
            month: dayjs(),
            waterTotal: 0,
            lightTotal: 0,
            occupiedPayment: 0,
            vacantPayment: 0,
          }}
        >
          <Form.Item
            label="Mes del recibo"
            name="month"
            rules={[{ required: true, message: "Selecciona el mes." }]}
          >
            <DatePicker picker="month" format="MMMM YYYY" style={{ width: "100%" }} />
          </Form.Item>

          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Monto total de agua (S/)"
                name="waterTotal"
                rules={[{ required: true, message: "Ingresa el total de agua." }]}
              >
                <InputNumber min={0} precision={2} prefix="S/" style={{ width: "100%" }} placeholder="Ej. 780.00" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Monto total de luz (S/)"
                name="lightTotal"
                rules={[{ required: true, message: "Ingresa el total de luz." }]}
              >
                <InputNumber min={0} precision={2} prefix="S/" style={{ width: "100%" }} placeholder="Ej. 640.00" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Pago por departamento ocupado (S/)"
                name="occupiedPayment"
                rules={[{ required: true, message: "Ingresa el pago para ocupado." }]}
              >
                <InputNumber min={0} precision={2} prefix="S/" style={{ width: "100%" }} placeholder="Ej. 55.00" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Pago por departamento desocupado (S/)"
                name="vacantPayment"
                rules={[{ required: true, message: "Ingresa el pago para desocupado." }]}
              >
                <InputNumber min={0} precision={2} prefix="S/" style={{ width: "100%" }} placeholder="Ej. 25.00" />
              </Form.Item>
            </Col>
          </Row>

          <div className="unit-summary">
            <div><Text type="secondary">Departamentos ocupados</Text><strong>{occupiedCount}</strong></div>
            <div><Text type="secondary">Departamentos desocupados</Text><strong>{vacantCount}</strong></div>
          </div>

          <div className="form-actions">
            <Button icon={<ClearOutlined />} onClick={() => form.resetFields()}>Limpiar</Button>
            <Button type="primary" htmlType="submit" icon={<CalculatorOutlined />}>Calcular</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
