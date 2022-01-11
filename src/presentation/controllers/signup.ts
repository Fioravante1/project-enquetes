import { HttpResponse, HttpRequest } from '../protocols/http'
import { ParamError } from '../errors/param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new ParamError(field))
      }
    }
    return {
      statusCode: 200,
      body: 'Tudo ok'
    }
  }
}
