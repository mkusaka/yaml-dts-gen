import * as fs from "fs";
import * as yaml from "js-yaml";

function gen(filename: string) {
  const content = fs.readFileSync(filename, { encoding: "utf-8" });
  const parsedYaml = yaml.safeLoad(content);
  const defaultExportedJson = `export default ${JSON.stringify(
    parsedYaml,
    null,
    2
  )} as const;`;

  console.log(defaultExportedJson);

  fs.writeFileSync(
    process.argv[2].replace(".yml", ".d.ts"),
    defaultExportedJson
  );
}

export const run = async () => {
  gen(process.argv[2]);
};
