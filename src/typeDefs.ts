import { readFileSync } from "fs";
import * as path from "path";

export const typeDefs = `${readFileSync(path.join(__dirname, "./schema.graphql"), "utf8")}`;
