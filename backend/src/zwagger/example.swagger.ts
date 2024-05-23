import { PathItem, Schema } from 'swagger-jsdoc';
/* 
NOTE: This code organization is something I made.
I think is the best way to modularize Swagger code, instead of have all in a .json or .yml file... 
or with objects like this but in one file.
Of course this organization can be improved.
Best if yu can read the docs and faliliarize with some definitions
*/

/*
Schemas. A schema is what describes an object. Can be used in a response or a body request, for example.
A schema can be reused even in traditional way to write Swagger
To reuse a schema this needs to be registered in 'schemas' option in swagger definition
Then just can reuse with $ref... more info in https://swagger.io/docs/specification/using-ref/ 
In this aproach we can reference an schema manually like JS normal code, or with $ref (using this avoid us to import objects)
Declare schemas you think can be used in a lot of paths in an external file, can be in zwagger.specs.ts
*/
const authOkResponse: Schema = {
  title: 'AuthOkResponse',
  type: 'object',
  properties: {
    ok: {
      type: 'boolean',
      description: "Si todo sale bien 'ok', caso contrario 'false'"
    },
    user: {
      type: 'object',
      description: 'Datos del usuario',
      properties: {
        token: {
          type: 'string',
          description: 'El JWT'
        },
        user_name: {
          type: 'string',
          description: 'El Nombre de usuario del usuario'
        },
        image: {
          type: 'string',
          description:
            'EL URL de la imagen del usuario con width=100px (puede ser undefined)',
          example: 'undefined',
          nullable: true
        }
      }
    }
  }
};

const loginUserReq: Schema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      description: "The user's email address",
      example: 'sdasd@dasd.co'
    },
    password: {
      type: 'string',
      description: "The user's password",
      minLength: 10,
      maxLength: 24,
      example: 'asdasdsd'
    }
  },
  required: ['email', 'password']
};

const userRegisterReq: Schema = {
  type: 'object',
  properties: {
    ...loginUserReq.properties,
    user_name: {
      type: 'string',
      description: "The user's username",
      minLength: 2,
      maxLength: 24,
      example: 'sadasd'
    }
  },
  required: ['email', 'password', 'user_name']
};

const validationErrorRes: Schema = {
  type: 'object',
  properties: {
    ok: {
      type: 'boolean',
      description: 'Indica si la solicitud fue exitosa',
      example: false
    },
    errors: {
      type: 'object',
      description:
        'Objeto con los errores de validación, este podría ser un esquema que se use en varios endpoints',
      properties: {
        field_name: {
          type: 'object',
          description: 'Descripción del error para el campo 1',
          properties: {
            msg: {
              type: 'string',
              description: 'El mensaje de error',
              example: 'Debe tener entre 10 y 24 caracteres'
            },
            location: {
              type: 'string',
              description: 'La locacíon del campo',
              example: 'body'
            },
            path: {
              type: 'string',
              description: 'El nombre del campo',
              example: 'password'
            }
          }
        }
      }
    }
  }
};

const internalServerErrorRes: Schema = {
  type: 'object',
  properties: {
    ok: {
      type: 'boolean',
      description: 'Indica si la solicitud fue exitosa',
      example: false
    },
    message: {
      type: 'string',
      description: 'Error message'
    }
  }
};

const loginFailedLResponse: Schema = {
  type: 'object',
  properties: {
    ok: {
      type: 'boolean',
      description: 'Indica si la solicitud fue exitosa',
      example: false
    },
    message: {
      type: 'string',
      description: 'La razón del error',
      example: 'Email o contraseña no válidos.'
    }
  }
};

const authSigninPath: PathItem = {
  post: {
    tags: ['Example'],
    summary: 'Sign in a user with email and password',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/userRegisterReq' }
        }
      }
    },
    responses: {
      201: {
        description: 'Sign-in successful, user data returned',
        content: {
          'application/json': {
            schema: authOkResponse
          }
        }
      },
      400: {
        description: 'Bad request, validation errors',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/validationErrorRes' }
          }
        }
      },
      500: {
        description: 'Internal server error',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/internalServerErrorRes' }
          }
        }
      }
    }
  }
};

const authLoginPath = {
  post: {
    tags: ['Example'],
    summary: 'Login with email and password',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/loginUserReq' }
        }
      }
    },
    responses: {
      201: {
        description: 'Sign-in successful, user data returned',
        content: {
          'application/json': {
            schema: authOkResponse
          }
        }
      },
      400: {
        description: 'Bad request, validation errors',
        content: {
          'application/json': {
            schema: loginFailedLResponse
          }
        }
      },
      500: {
        description: 'Internal server error',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/internalServerErrorRes' }
          }
        }
      }
    }
  }
};

const renewTokenPath = {
  get: {
    tags: ['Example'],
    summary: 'Renews JWT',
    security: [
      {
        apiKeyAuth: []
      }
    ],
    responses: {
      200: {
        description: 'Devuelve el nuevo token',
        content: {
          'application/json': {
            schema: authOkResponse
          }
        }
      },
      401: {
        description: 'Error al no tener token o enviar uno invalido.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                ok: {
                  type: 'boolean',
                  description: 'Indica si la solicitud fue exitosa',
                  example: false
                },
                message: {
                  type: 'string',
                  description: 'Error message',
                  examples: [
                    'Token de acceso no proporcionado',
                    'Token de acceso inválido'
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
};

export const exampleSchemas = {
  authLoginPath,
  loginUserReq,
  userRegisterReq,
  validationErrorRes,
  internalServerErrorRes,
  loginFailedLResponse
};

export const examplePaths = {
  '/api/auth/signin': authSigninPath,
  '/api/auth/login': authLoginPath,
  '/api/auth/renew-token': renewTokenPath
};
