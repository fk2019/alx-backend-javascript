#!/usr/bin/bash
jbe () {
    sudo npm install --save-dev jest;
    sudo npm install --save-dev babel-jest @babel/core @babel/preset-env;
    sudo npm install --save-dev eslint;
    cp -r ~/js_config_files/* .
    sudo npm install
}
export jbe
