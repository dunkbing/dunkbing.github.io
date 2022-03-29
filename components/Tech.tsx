import {
  JsIcon,
  TsIcon,
  CppIcon,
  CsharpIcon,
  PythonIcon,
  NodeJsIcon,
  MySQLIcon,
  PostgresIcon,
  RedisIcon,
  ReactIcon,
  NextJsIcon,
  UnityIcon,
} from '@lib/icons';
import React from 'react';

const TechItem: React.FC<{ icon: any }> = ({ icon }) => {
  return <div style={{ width: 50, height: 50, margin: 10 }}>{icon}</div>;
};

export const Languages: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem icon={<JsIcon />} />
    <TechItem icon={<TsIcon />} />
    <TechItem icon={<PythonIcon />} />
    <TechItem icon={<CppIcon />} />
    <TechItem icon={<CsharpIcon />} />
  </div>
);

export const Backend: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem icon={<NodeJsIcon />} />
    <TechItem icon={<MySQLIcon />} />
    <TechItem icon={<PostgresIcon />} />
    <TechItem icon={<RedisIcon />} />
  </div>
);

export const Frontend: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem icon={<ReactIcon />} />
    <TechItem icon={<NextJsIcon />} />
  </div>
);

export const DevTools: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem icon={<UnityIcon />} />
  </div>
);
