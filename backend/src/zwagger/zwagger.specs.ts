import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import {  examplePaths, exampleSchemas } from './example.swagger';

const swaggerDefinition: swaggerJSDoc.OAS3Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FishSeason API',
      version: '1.0.0'
    },
    tags: [],
    paths: {
      ...examplePaths
    },
    definitions: {},
    components: {
      securitySchemes: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'authorization',
          description: 'Token de authentication'
        }
      },
      schemas: {
        ...exampleSchemas
      }
    }
  },
  apis: [`${path.join(__dirname, './routes/*.js')}`]
};

export const swaggerSpecs = swaggerJSDoc(swaggerDefinition);
