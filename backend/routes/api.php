<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PHPUnit\Event\Code\TestCollectionIterator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register_passenger', 'register_passenger');
    Route::post('register_driver', 'register_driver');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});
Route::controller(MessageController::class)->group(function () {
    Route::get('getMessages', "getAllMessages");
    Route::post('createMessage', 'createMessage');
});
Route::controller(MessageController::class)->group(function () {
    Route::post("getUsersMessages", 'getUsersMessages');
    Route::get('getMessages', "getAllMessages");
    Route::post('createMessage', 'createMessage');
});
Route::controller(UserController::class)->group((function () {
    Route::get('get_user', 'get_user');
    Route::post('edit_driver', 'edit_driver');
    Route::post('edit_passenger', 'edit_passenger');
    Route::post('upload_pic', 'upload_pic');
}));



Route::prefix('admin/')->group((function () {
    Route::controller(AdminAuthController::class)->group((function () {
        Route::post('login', 'login');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');
    }));
    Route::controller(AdminController::class)->group((function () {
        Route::get('get_driver_registration_requests', 'getDriverRegisterRequests');
        Route::get('get_all_drivers', 'getAllDrivers');
        Route::get('get_all_passengers', 'getAllPassengers');
    }));
}));
