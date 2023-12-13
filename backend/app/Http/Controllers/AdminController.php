<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Driver as ModelsDriver;
use App\Models\Driver;
use App\Models\DriverRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function getDriverRegisterRequests()
    {
        $this->authorize('admin');
        $requests = DriverRegisterRequest::where('request_status', 'pending')->get();
        return response()->json([
            'status' => 'success',
            'register_requests' => $requests,
        ], 200);
    }

    public function getAllDrivers()
    {
        $this->authorize('admin');
        $drivers = User::where('role_id', 3)->get();
        foreach ($drivers as $driver) {
            // $car = $driver->car;
            $user = $driver->driver->car;
        }
        return response()->json([
            'status' => 'success',
            'drivers' => $drivers,
        ], 200);
    }
    public function getAllPassengers()
    {
        $this->authorize('admin');
        $passenger = User::where('role_id', 2)->get();
        return response()->json([
            'status' => 'success',
            'passengers' => $passenger,
        ], 200);
    }
    public function approve(Request $request)
    {
        $this->authorize('admin');
        $driver_request = DriverRegisterRequest::where('id', $request->id)->first();

        if ($driver_request->request_status == 'accepted') {
            return response()->json(['error' => "This driver has already been accepted"], 406);
        }
        $driver_request->request_status = 'accepted';
        $driver_request->save();

        $user = new User();
        $user->name = $driver_request->name;
        $user->email = $driver_request->email;
        $user->phone_number = $driver_request->phone_number;
        $user->password = Hash::make($driver_request->password);
        $user->location = $driver_request->location;
        $user->img_url = 'upload/default.png';
        $user->role_id = 3;
        $user->save();

        $driver = new Driver();
        $driver->user_id = $user->id;
        $driver->availability = 'active';
        $driver->save();

        $car = new Car();
        $car->model = $driver_request->model;
        $car->color = $driver_request->color;
        $car->plate_number = $driver_request->plate_number;
        $car->driver_id = $driver->id;
        $car->save();

        return response()->json([
            'status' => 'success',
            'user' => $user,
        ]);
    }
}
