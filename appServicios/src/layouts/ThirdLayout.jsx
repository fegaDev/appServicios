import React from "react";
import { Card, Empty, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function ThirdLayout() {
  return (
    <Card className="section-card placeholder-card" bordered={false}>
      <div className="placeholder-icon"><SettingOutlined /></div>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <div>
            <div className="placeholder-title">Espacio disponible</div>
            <Text type="secondary">
              Este tercer layout está preparado para que agregues tus propias funciones más adelante.
            </Text>
          </div>
        }
      />
    </Card>
  );
}
