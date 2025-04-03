import fs from "fs";
import path from 'path';

export async function  ensureDirectoryExistence(filePath:string) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    await ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
  }