<?php

namespace App\Http\Controllers;

use App\Models\Driver as ModelsDriver;
use App\Models\DriverRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

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
}
