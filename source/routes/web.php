<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatsController;

//use Illuminate\Support\Facades\Redis;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('app');
//});
//
//Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//$redis = Redis::connection();
//dd($redis);


Route::post('message', function (\Illuminate\Http\Request $request) {
    \App\Events\Message::dispatch($request->input());
});


Route::get('messages', [ChatsController::class, 'fetchMessage']);
Route::get('messages', [ChatsController::class, 'sendMessage']);


Auth::routes();
// React will handle any route
Route::get('/{query}', function () {
    return view('app');
})->where('query', '^((?!api).)*$');




