<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function get_user()
    {
        $user = Auth::user();
        if ($user->role->name == 'driver') {
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'car' => $user->driver->car
            ]);
        }
    }

    public function edit_driver(Request $request)
    {
        $this->authorize('driver');
        $user = Auth::user();
        return response()->json([
            'status' => 'yoo',
            'message' => 'pfp',
            'user' => $user,
        ]);
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'phone_number' => 'required|string|min:3',
            'location' => 'required|string',
            'img_url' => 'string|img_url',
            'model' => 'required|string',
            'color' => 'required|string',
            'plate_number' => 'required|string',
        ]);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->phone_number = $request->phone_number;
        $user->location = $request->location;
        $user->img_url = $request->img_url ?? 'defualt';
        $user->color = $request->color;
        $user->model = $request->model;
        $user->plate_number = $request->plate_number;
        $user->request_status = 'pending';

        return response()->json([
            'status' => 'success',
            'message' => 'Request is now pending',
            'user' => $user,
        ]);
    }
}
