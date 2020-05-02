<?php

namespace App\Http\Middleware;

use Closure;
use Spatie\QueryBuilder\QueryBuilderRequest;

class ApplySemicolonDelimiter
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        QueryBuilderRequest::setArrayValueDelimiter(';');
        return $next($request);
    }
}
