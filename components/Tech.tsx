import React from 'react';
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
import Link from 'next/link';

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

  return (
    <Link
      className="w-12 h-12 mx-1 my-0.5 cursor-pointer"
      href={techs[name]}
      target="_blank"
      data-tip={name}
      aria-label={name}
    >
      {icon}
      <ReactTooltip
        place="top"
        type={theme === 'dark' ? 'light' : 'dark'}
        effect="float"
      />
    </Link>
  );
};

export const Languages: React.FC = () => (
  <div className="flex flex-row gap-1 my-1">
    <TechItem name="golang" icon={<GolangIcon />} />
    <TechItem name="ts" icon={<TsIcon />} />
    <TechItem name="csharp" icon={<CsharpIcon />} />
    <TechItem name="cpp" icon={<CppIcon />} />
  </div>
);

export const Backend: React.FC = () => (
  <div className="flex flex-row gap-1 my-1">
    <TechItem name="golang" icon={<GolangIcon />} />
    <TechItem name="nodejs" icon={<NodeJsIcon />} />
    <TechItem name="deno" icon={<DenoIcon />} />
    <TechItem name="mysql" icon={<MySQLIcon />} />
    <TechItem name="postgresql" icon={<PostgresIcon />} />
    <TechItem name="redis" icon={<RedisIcon />} />
  </div>
);

export const Frontend: React.FC = () => (
  <div className="flex flex-row gap-1 my-1">
    <TechItem name="reactjs" icon={<ReactIcon />} />
    <TechItem name="nextjs" icon={<NextJsIcon />} />
  </div>
);

export const DevTools: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TechItem name="unity" icon={<UnityIcon />} />
  </div>
);
