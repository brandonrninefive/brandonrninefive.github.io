#!/bin/bash

html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true index.test.html -o index.html

cleancss css/index.css -o css/index.min.css
