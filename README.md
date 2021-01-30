## Usage

```js
const Artifacts = require("../dist");

const configs = {
  files: [
    {
      template: "./appSpec.yml",
      filename: "appSpec",
      ext: "yml",
      saveTo: "../",
    },
    {
      template: "./taskdef.json",
      filename: "taskdef",
      ext: "json",
      saveTo: "../",
    },
  ],
};

const envs = {
  $AWS_ACCOUNT_ID: process.argv[2],
  $AWS_DEFAULT_REGION: process.argv[3],
  $SERVICE_NAME: "dockerapp-task-def",
  $SERVICE_VERSION: "12",
  $CONTAINER_NAME: "nginx",
  $CONTAINER_PORT: 80,
};

new Artifacts().create(configs, envs);
```
