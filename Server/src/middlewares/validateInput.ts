import { Request, Response, NextFunction } from "express";
import Joi from "joi";

type SchemaNomes = "register" | "login";

export default function validateInput(schemaNome: SchemaNomes) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const schema = schemas[schemaNome];
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorsAll = error.details.map((detail) => detail.message);
      res.status(400).json({
        message: errorsAll
      });
      return;
    }

    next();
  };
}

const commonMessages = {
  "string.base": "O campo {#label} deve ser um texto.",
  "string.email": "O campo 'email' deve ser um e-mail válido.",
  "string.min": "O campo '{#label}' deve ter no mínimo {#limit} caracteres.",
  "any.required": "O campo '{#label}' é obrigatório.",
  "string.empty": "O campo '{#label}' não pode estar vazio.",
};


const schemas = {
  register: Joi.object({
    email: Joi.string().email().required().messages({
      ...commonMessages
    }),
    senha: Joi.string().min(6).required().messages({
      ...commonMessages,
      "string.min": "O campo 'senha' deve ter no mínimo 6 caracteres."
    }),
    nome: Joi.string().min(6).required().messages({
      ...commonMessages,
      "string.min": "O campo 'nome' deve ter no mínimo 6 caracteres."
    })
  }).messages({ "any.default": "Por favor, verifique os valores fornecidos." })
  ,
  login: Joi.object({
    email: Joi.string().email().required().messages({
       ...commonMessages,
    }),
    senha: Joi.string().min(6).required().messages({
      ...commonMessages,
      "string.min": "O campo 'senha' deve ter no mínimo 6 caracteres."
    })
  }).messages({ "any.default": "Por favor, verifique os valores fornecidos." })
};
