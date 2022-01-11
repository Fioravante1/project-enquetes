import { HttpResponse, HttpRequest } from '../protocols/http'
import { ParamError } from '../errors/param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new ParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new ParamError('email')
      }
    }
    return {
      statusCode: 200,
      body: 'Tudo ok'
    }
  }
}
