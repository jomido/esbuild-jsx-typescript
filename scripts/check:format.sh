#!/bin/bash

# BEGIN SANITY BOX------------------------------------------
set -e           # immediately exit if any command fails   |
set -u           # immediately fail on undefined variables |
set -o pipefail  # show error of last failed command       |
IFS=$'\n\t'      # control what word splitting means       |
# END SANITY BOX--------------------------------------------

prettier --check app.tsx
