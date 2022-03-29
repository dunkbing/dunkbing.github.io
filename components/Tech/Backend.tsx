import { JsIcon, TsIcon, CppIcon, CsharpIcon, PythonIcon } from '@lib/icons';
import React from 'react';

const BackendItem: React.FC<{ icon: any }> = ({ icon }) => {
  return <div style={{ width: 50, height: 50, margin: 10 }}>{icon}</div>;
};

const Backend: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <BackendItem icon={<JsIcon />} />
    <BackendItem icon={<TsIcon />} />
    <BackendItem icon={<PythonIcon />} />
  </div>
);

export default Backend;
