import React from 'react';
import { Select, Space } from 'antd';

const App = ({action}) => (

  <Space wrap>
    <Select
      defaultValue="male"
      style={{
        width: '1.8rem',
      }}
      onChange={action}
      options={[
        {
          value: 'male',
          label: 'male',
        },
        {
          value: 'female',
          label: 'female',
        }
      ]}
    />
  </Space>
);
export default App;