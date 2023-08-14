#!/bin/bash
yes | rm update -r
mkdir update
cd update
git clone https://github.com/tramontina-gabrielromio/Interface
cd ..
yes | cp -rf update/Interface/* .
yes | rm update -r
