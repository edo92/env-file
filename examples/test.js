const Artifacts = require("../dist");

const configs = {
  files: {
    appSpec: {
      template: "./appSpec.yml",
      filename: "appSpec",
      ext: "yml",
      buildTo: "../",
    },
    taskdef: {
      template: "./taskdef.json",
      filename: "taskdef",
      ext: "json",
      buildTo: "../",
    },
  },
};

const envs = {
  $AWS_ACCOUNT_ID: process.argv[2],
  $AWS_DEFAULT_REGION: process.argv[3],
  $SERVICE_NAME: "dockerapp-task-def",
  $SERVICE_VERSION: "12",
  $CONTAINER_NAME: "nginx",
  $CONTAINER_PORT: 80,
};

const atfs = new Artifacts();
atfs.create(configs, envs);
