import * as fs from "fs";
import { IError, IEnvs, IFileClass, IFiles } from "./iface";

class Helpers 
{
  public static replaceEnv(template: string, envs: IEnvs): string 
  {
    Object.keys(envs).map((key: string) => {
      const regex = new RegExp(`\\${key}`, "g");
      template = template.replace(regex, envs[key]);
    });

    return template;
  }

  public static createFile(path: string, content: string): void 
  {
    fs.writeFile(path, content, (err: IError): void => 
    {
      if (err) throw err;
    });
  }

  public static readFile(path: string): string 
  {
    return fs.readFileSync(path, "utf8");
  }
}

class FileEnv implements IFileClass 
{
  private savePath(saveTo: string) 
  {
    if (!saveTo) return "./";
    return saveTo;
  }

  public create(configs: any, envs: any): void 
  {
    // Replace Envs with args
    configs.files.map((file: IFiles) => {
      let { template, filename, ext, saveTo } = file; // Config props
      template = Helpers.readFile(template); // Read Templates

      const modified = Helpers.replaceEnv(template, envs); // Replace with envs
      const savePath = this.savePath(saveTo);

      // Create file to specified path
      Helpers.createFile(`${savePath}${filename}.${ext}`, modified);
    });
  }
}

export = FileEnv;
