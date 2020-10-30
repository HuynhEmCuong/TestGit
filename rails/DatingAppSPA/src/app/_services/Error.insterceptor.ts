import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Key } from 'protractor';


@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    const applicationError = error.headers.get('Application-Error');
                    if (applicationError) {
                        console.log(applicationError);
                        return throwError(applicationError);
                    }
                    const serverError = error.error;
                    let modalStateErrors = '';
                    if (serverError && typeof serverError === 'object') {
                        for (const key in serverError) {
                            if (serverError[key]) {
                                modalStateErrors += serverError[key] + '\n';
                            }
                        }
                    }
                    return throwError(modalStateErrors || serverError || 'Server Error');
                }
            })
        );
    }
}

export const ErrorInterceptorProvide = {
    provide: HTTP_INTERCEPTORS,
    useClas: ErrorInterceptor,
    multi: true
};
