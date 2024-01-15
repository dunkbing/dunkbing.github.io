import React from 'react';
import Link from 'next/link';
import {
  TsIcon,
  CsharpIcon,
  NodeJsIcon,
  MySQLIcon,
  PostgresIcon,
  RedisIcon,
  ReactIcon,
  NextJsIcon,
  GolangIcon,
  DenoIcon,
  VsCodeIcon,
  PostmanIcon,
  BashScriptIcon,
  NeovimIcon,
} from '@lib/icons';

const techs = {
  typescript: 'https://www.typescriptlang.org/',
  python: 'https://www.python.org/',
  golang: 'https://go.dev/',
  deno: 'https://deno.com/',
  csharp: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  reactjs: 'https://reactjs.org/',
  nextjs: 'https://nextjs.org/',
  nodejs: 'https://nodejs.org/en/',
  mysql: 'https://www.mysql.com/',
  postgres: 'https://www.postgresql.org/',
  redis: 'https://redis.io/',
  vscode: 'https://code.visualstudio.com/',
  postman: 'https://www.postman.com/',
  'bash-script': 'https://www.gnu.org/software/bash/',
  neovim: 'https://neovim.io/',
};

type Tech = keyof typeof techs;

const icons: Record<Tech, any> = {
  typescript: <TsIcon size={20} />,
  python: <TsIcon size={20} />,
  golang: <GolangIcon size={22} />,
  deno: <DenoIcon size={22} />,
  csharp: <CsharpIcon size={20} />,
  reactjs: <ReactIcon size={20} />,
  nextjs: <NextJsIcon size={20} />,
  nodejs: <NodeJsIcon size={20} />,
  mysql: <MySQLIcon size={22} />,
  postgres: <PostgresIcon size={20} />,
  redis: <RedisIcon size={20} />,
  vscode: <VsCodeIcon size={20} />,
  postman: <PostmanIcon size={20} />,
  'bash-script': <BashScriptIcon size={20} />,
  neovim: <NeovimIcon size={20} />,
};

const TechItem: React.FC<{ name: keyof typeof techs }> = ({ name }) => {
  return (
    <Link
      className="cursor-pointer font-mono flex flex-row gap-1 items-center border border-solid border-white text-slate-200 hover:text-slate-100 p-1 rounded-md w-fit hover:shadow-md hover:shadow-slate-50 transition duration-300"
      href={techs[name]}
      target="_blank"
      data-tip={name}
      aria-label={name}
    >
      {icons[name]} <span>{name}</span>
    </Link>
  );
};

export const Languages: React.FC = () => (
  <div className="flex flex-row gap-1.5 my-0.5">
    <TechItem name="golang" />
    <TechItem name="typescript" />
    <TechItem name="csharp" />
  </div>
);

export const Backend: React.FC = () => (
  <div className="flex flex-row flex-wrap gap-1.5 my-0.5">
    <TechItem name="golang" />
    <TechItem name="nodejs" />
    <TechItem name="deno" />
    <TechItem name="mysql" />
    <TechItem name="postgres" />
    <TechItem name="redis" />
  </div>
);

export const Frontend: React.FC = () => (
  <div className="flex flex-row gap-1.5 my-0.5">
    <TechItem name="reactjs" />
    <TechItem name="nextjs" />
  </div>
);

export const DevTools: React.FC = () => (
  <div className="flex flex-row gap-1.5 my-0.5">
    <TechItem name="vscode" />
    <TechItem name="neovim" />
    <TechItem name="postman" />
    <TechItem name="bash-script" />
  </div>
);
