# Turborepo starter with pnpm

##

## Remove folders

```shell
# Linux
# Method 1
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
# Method 2
npx rimraf ./**/.node_modules

# Windows
FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" rm -rf "%d"

```