<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/user')->group(function () {
    Route::post('/login', 'api\v1\LoginController@login');
    Route::middleware('auth:api')->get('/current', 'api\v1\UserController@current');
});
