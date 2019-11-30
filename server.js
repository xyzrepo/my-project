#!/usr/bin/env node

'use strict';

// Start Strapi
const strapi = require('strapi');
const dotenv = require('dotenv');
dotenv.config();
strapi().start();
