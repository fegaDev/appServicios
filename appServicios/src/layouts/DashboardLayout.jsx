import React from "react";
import {
  Card, Col, Row, Statistic, Table, Checkbox, Tag, Typography, Progress, Empty,
} from "antd";
import {
  ThunderboltOutlined, ExperimentOutlined, CheckCircleOutlined,
} from "@ant-design/icons";

const { Text } = Typography;
const money = (value) => new Intl.NumberFormat("es-PE", {
  style: "currency", currency: "PEN", maximumFractionDigits: 2,
}).format(value || 0);

export default function DashboardLayout({
  apartments, history, onPaymentChange, latestCalculation,
}) {
  const waterTotal = latestCalculation?.waterTotal ?? 780;
  const lightTotal = latestCalculation?.lightTotal ?? 640;
  const waterPaidCount = apartments.filter((item) => item.waterPaid).length;
  const lightPaidCount = apartments.filter((item) => item.lightPaid).length;
  const total = apartments.length;
  const columns = [
    {
      title: "Departamento",
      dataIndex: "department",
      key: "department",
      render: (value, record) => (
        <div>
          <Text strong>{value}</Text>
          <div><Text type="secondary" className="small-text">
            {record.occupied ? "Ocupado" : "Desocupado"}
          </Text></div>
        </div>
      ),
    },
    {
      title: "Agua",
      dataIndex: "waterPaid",
      key: "waterPaid",
      render: (paid, record) => (
        <Checkbox
          checked={paid}
          onChange={(event) => onPaymentChange(record.key, "waterPaid", event.target.checked)}
        >
          {paid ? <Tag color="success">Pagado</Tag> : <Tag>Pendiente</Tag>}
        </Checkbox>
      ),
    },
    {
      title: "Luz",
      dataIndex: "lightPaid",
      key: "lightPaid",
      render: (paid, record) => (
        <Checkbox
          checked={paid}
          onChange={(event) => onPaymentChange(record.key, "lightPaid", event.target.checked)}
        >
          {paid ? <Tag color="success">Pagado</Tag> : <Tag>Pendiente</Tag>}
        </Checkbox>
      ),
    },
  ];

  const historyColumns = [
    { title: "Mes", dataIndex: "month", key: "month" },
    { title: "Total agua", dataIndex: "water", key: "water", render: money },
    { title: "Total luz", dataIndex: "light", key: "light", render: money },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Completado" ? "success" : "processing"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="content-stack">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card className="metric-card water-card" bordered={false}>
            <div className="metric-top">
              <div className="metric-icon water-icon"><ExperimentOutlined /></div>
              <Tag color="blue">AGUA</Tag>
            </div>
            <Statistic title="Total por pagar" value={waterTotal} precision={2} prefix="S/ " />
            <div className="metric-progress">
              <Progress percent={Math.round((waterPaidCount / total) * 100)} showInfo={false} strokeColor="#1677ff" />
              <Text type="secondary">{waterPaidCount} de {total} departamentos pagaron</Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card className="metric-card light-card" bordered={false}>
            <div className="metric-top">
              <div className="metric-icon light-icon"><ThunderboltOutlined /></div>
              <Tag color="gold">LUZ</Tag>
            </div>
            <Statistic title="Total por pagar" value={lightTotal} precision={2} prefix="S/ " />
            <div className="metric-progress">
              <Progress percent={Math.round((lightPaidCount / total) * 100)} showInfo={false} strokeColor="#d48806" />
              <Text type="secondary">{lightPaidCount} de {total} departamentos pagaron</Text>
            </div>
          </Card>
        </Col>
      </Row>

      <Card
        title={<span className="card-title">Estado de departamentos</span>}
        extra={<Text type="secondary">{total} departamentos</Text>}
        className="section-card"
      >
        <Text type="secondary" className="section-description">
          Marca la casilla del servicio cuando hayas confirmado el pago.
        </Text>
        <Table
          rowKey="key"
          columns={columns}
          dataSource={apartments}
          pagination={{ pageSize: 8, showSizeChanger: false, showTotal: (count) => `${count} departamentos` }}
          scroll={{ x: 540 }}
          size="middle"
        />
      </Card>

      <Card
        title={<span className="card-title">Historial mensual</span>}
        extra={<CheckCircleOutlined className="history-icon" />}
        className="section-card"
      >
        {history.length ? (
          <Table
            rowKey="key"
            columns={historyColumns}
            dataSource={history}
            pagination={false}
            size="middle"
            scroll={{ x: 500 }}
          />
        ) : (
          <Empty description="Todavía no hay meses registrados" />
        )}
      </Card>
    </div>
  );
}
