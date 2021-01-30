import * as fs from "fs";
import { IError, IEnvs, IFileEnv } from "./iface";

class Helpers {
  public static replaceEnv(template: string, envs: IEnvs): string {
    Object.keys(envs).map((key: string) => {
      const regex = new RegExp(`\\${key}`, "g");
      template = template.replace(regex, envs[key]);
    });

    return template;
  }

  public static createFile(path: string, content: string): void {
    fs.writeFile(path, content, (err: IError): void => {
      if (err) throw err;
    });
  }

  public static readFile(path: string): string {
    return fs.readFileSync(path, "utf8");
  }
}

class FileEnv implements IFileEnv {
  public create(configs: any, envs: any): void {
    // Replace Envs with args
    Object.keys(configs.files).map((item: string) => {
      let { template, filename, ext, buildTo } = configs.files[item]; // Config props
      template = Helpers.readFile(template); // Read Templates

      const modified = Helpers.replaceEnv(template, envs); // Replace with envs
      Helpers.createFile(`${buildTo}${filename}.${ext}`, modified); // Create artifacts
    });
  }
}

export = FileEnv;
