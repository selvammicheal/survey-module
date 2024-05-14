import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      console.log("INDIA")
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception.message || 'Internal Server Error';

        response
            .status(status)
            .json({
                statusCode: status,
                message: message,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}