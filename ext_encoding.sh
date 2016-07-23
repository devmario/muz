#!/bin/bash

find $1 -name "*.mp3" -type f -print0 |
    while IFS= read -r -d $'\0' line; do
        mid3iconv -e=euc-kr "$line"
    done
