import * as fs from "fs";
import * as yaml from "js-yaml";
import { Project } from "ts-morph";

function gen(filename: string) {
  const content = fs.readFileSync(filename, { encoding: "utf-8" });
  const parsedYaml = yaml.safeLoad(content);
  const defaultExportedJson = `export default ${JSON.stringify(
    parsedYaml,
    null,
    2
  )} as const;`;

  const project = new Project({
    compilerOptions: {
      outDir: "./",
      declaration: true,
      emitDeclarationOnly: true,
    },
  });
  project.createSourceFile(
    filename.replace(".yml", ".ts"),
    defaultExportedJson,
    { overwrite: true }
  );
  project.emitSync();
}

export const run = async () => {
  gen(process.argv[2]);
};
