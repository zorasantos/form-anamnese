import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const bridgeSchema = (schema: object) => {
  const schemaValidator = createValidator(schema);

  const bridge = new JSONSchemaBridge(schema, schemaValidator);

  return bridge;
};

export { bridgeSchema };
