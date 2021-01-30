export type IError = object | null;

export interface IEnvs {
  [key: string]: string;
}

export interface IFileEnv {
  create: (configs: any, envs: any) => void;
}
