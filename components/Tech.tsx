import React, { useCallback } from 'react';
import ReactTooltip from 'react-tooltip';
import {
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
  GolangIcon,
  DenoIcon,
} from '@lib/icons';
import { useTheme } from 'next-themes';

const techs = {
  ts: 'https://www.typescriptlang.org/',
  python: 'https://www.python.org/',
  cpp: 'https://cplusplus.com/',
  golang: 'https://go.dev/',
  deno: 'https://deno.com/',
  csharp: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  reactjs: 'https://reactjs.org/',
  nextjs: 'https://nextjs.org/',
  nodejs: 'https://nodejs.org/en/',
  mysql: 'https://www.mysql.com/',
  postgresql: 'https://www.postgresql.org/',
  redis: 'https://redis.io/',
  unity: 'https://unity.com/',
};

const TechItem: React.FC<{ icon: any; name: keyof typeof techs }> = ({
  icon,
  name,
}) => {
  const { theme } = useTheme();
  const goTo = useCallback(() => {
    window.open(techs[name], '_blank');
  }, []);

  return (
    <div className="w-12 h-12 mx-1 my-0.5 cursor-pointer" onClick={goTo}>
      <a data-tip={name}>{icon}</a>
      <ReactTooltip
        place="top"
        type={theme === 'dark' ? 'light' : 'dark'}
        effect="float"
      />
    </div>
  );
};

export const Languages: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem name="ts" icon={<TsIcon />} />
    <TechItem name="python" icon={<PythonIcon />} />
    <TechItem name="cpp" icon={<CppIcon />} />
    <TechItem name="golang" icon={<GolangIcon />} />
    <TechItem name="csharp" icon={<CsharpIcon />} />
  </div>
);

export const Backend: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem name="nodejs" icon={<NodeJsIcon />} />
    <TechItem name="golang" icon={<GolangIcon />} />
    <TechItem name="mysql" icon={<MySQLIcon />} />
    <TechItem name="postgresql" icon={<PostgresIcon />} />
    <TechItem name="redis" icon={<RedisIcon />} />
    <TechItem name="deno" icon={<DenoIcon />} />
  </div>
);

export const Frontend: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem name="reactjs" icon={<ReactIcon />} />
    <TechItem name="nextjs" icon={<NextJsIcon />} />
  </div>
);

export const DevTools: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem name="unity" icon={<UnityIcon />} />
  </div>
);
