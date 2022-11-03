#!/bin/bash

# BEGIN SANITY BOX------------------------------------------
set -e           # immediately exit if any command fails   |
set -u           # immediately fail on undefined variables |
IFS=$'\n\t'      # control what word splitting means       |
# END SANITY BOX--------------------------------------------

esbuild app.tsx \
  --bundle \
  --inject:./react-shim.js \
  --jsx-factory=h \
  --jsx-fragment=Fragment \
  --outfile=./dist/bundle.js