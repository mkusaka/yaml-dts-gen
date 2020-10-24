# yaml-dts-gen

generate d.ts file from yaml

# usage

as default, this cli generate .d.ts file.
Its filename follows original yaml file, like original.yml, then generate original.d.ts .

```bash
npx yaml-dts-gen [target yaml file]
```

# example

```bash
curl https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml -o petstore.yml
npx yaml-dts-gen petstore.yml
```
