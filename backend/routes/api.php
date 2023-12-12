<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatRoomController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
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
Route::controller(ChatRoomController::class)->group(function () {
    Route::get("getRooms", 'getAllRooms');
    Route::post('createRoom', 'createRoom');
});
Route::controller(UserController::class)->group((function () {
    Route::post('get_user', 'get_user');
    Route::post('edit_driver', 'edit_driver');
}));
