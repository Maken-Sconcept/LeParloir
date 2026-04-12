import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const nextBin = path.join(repoRoot, "node_modules", "next", "dist", "bin", "next");

const result = spawnSync(process.execPath, [nextBin, "build", "--webpack"], {
  cwd: repoRoot,
  stdio: "inherit",
  env: process.env,
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
