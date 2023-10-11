// @ts-check
import * as fs from "node:fs/promises";

const TEXTURES_PATTERN = /^textures\//;
const EXTENSION_PATTERN = /(.png|.tga)$/;

const files = await fs.readdir("./",{ recursive: true })
  .then(files => files
    .filter(file => TEXTURES_PATTERN.test(file))
    .filter(file => EXTENSION_PATTERN.test(file))
    .map(file => file.replace(EXTENSION_PATTERN,""))
    .sort(new Intl.Collator().compare)
  );

for (const file of files){
  console.log(file);
}

const list = JSON.stringify(files,null,2);

await fs.writeFile("./textures/textures_list.json",list);