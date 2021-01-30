export type IError = object | null;

export interface IEnvs {
  [key: string]: string;
}

export interface IFileClass {
  create: (configs: any, envs: any) => void;
}

export interface IFiles {
  template: string;
  filename: string;
  ext: string;
  saveTo: string;
}
