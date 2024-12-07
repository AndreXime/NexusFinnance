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

const schemas = {
  register: Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "O campo 'email' deve ser um e-mail válido.",
      "any.required": "O campo 'email' é obrigatório."
    }),
    senha: Joi.string().min(6).required().messages({
      "string.min": "O campo 'senha' deve ter no mínimo 6 caracteres.",
      "any.required": "O campo 'senha' é obrigatório."
    }),
    nome: Joi.string().min(6).required().messages({
      "string.min": "O campo 'nome' deve ter no mínimo 6 caracteres.",
      "any.required": "O campo 'nome' é obrigatório."
    }),
    cargo: Joi.string().valid("Administrador", "Contador").required().messages({
      "any.required": "O campo 'cargo' é obrigatório.",
      "any.only": "O campo 'cargo' deve ser 'Administrador' ou 'Contador'."
    })
  }),
  login: Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "O campo 'email' deve ser um e-mail válido.",
      "any.required": "O campo 'email' é obrigatório."
    }),
    senha: Joi.string().min(6).required().messages({
      "string.min": "O campo 'senha' deve ter no mínimo 6 caracteres.",
      "any.required": "O campo 'senha' é obrigatório."
    })
  })
};
