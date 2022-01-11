import { HttpResponse, HttpRequest } from '../protocols/http'
import { ParamError } from '../errors/param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new ParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new ParamError('email'))
    }
    return {
      statusCode: 200,
      body: 'Tudo ok'
    }
  }
}
