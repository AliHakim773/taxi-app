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

    public function get_user(Request $request)
    {
        $user = User::find($request->id);

        if ($user->role->name == 'driver') {
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'car' => $user->driver->car
            ]);
        }
        return response()->json([
            'status' => 'success',
            'user' => $user,
        ]);
    }

    public function edit_driver(Request $request)
    {

        $user = User::find($request->id);

        $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
            'name' => 'required|string|max:255',
            'model' => 'required|string',
        ]);

        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->name = $request->name;
        $user->save();

        $user->driver->car->model = $request->model;
        $user->driver->car->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Profile Edited Successfuly',
            'user' => $user
        ]);
    }

    public function edit_user(Request $request)
    {

        $user = User::find($request->id);

        $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
            'name' => 'required|string|max:255',
        ]);

        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->name = $request->name;
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Profile Edited Successfuly',
            'user' => $user
        ]);
    }

    public function delete_user(Request $request)
    {
        $user = User::find($request->id);

        if ($user) {
            $user->delete();
            return response()->json([
                'message' => 'User deleted successfully',
                'status' => 'success',
            ], 200);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function get_user_orders(Request $request)
    {
        $driver = Driver::where('user_id', $request->id)->first();
        if ($driver) {
            $userOrders = $driver->car_rides;
            return response()->json(['orders' => $userOrders], 200);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function driver_analytics(Request $request)
    {
        $driver = Driver::where('user_id', $request->id)->first();

        $distinctDaysCount = $driver->car_rides()
            ->selectRaw('COUNT(DISTINCT DATE(created_at)) as count')
            ->value('count');

        $distinctMonthsCount = $driver->car_rides()
            ->selectRaw('COUNT(DISTINCT YEAR(created_at), MONTH(created_at)) as count')
            ->value('count');

        $totalOrders = $driver->car_rides()->count();
        $averageOrdersPerDay = $totalOrders / $distinctDaysCount;
        $averageOrdersPerMonth = $totalOrders / $distinctMonthsCount;
        $canceledOrders = $driver->car_rides()->where('status', 'canceled')->count();
        $totalProfit = $driver->car_rides()->sum('price');
        $averageProfitPerDay = $totalProfit / $driver->car_rides()->selectRaw('COUNT(DISTINCT DATE(created_at))')->count();
        $averageProfitPerMonth = $totalProfit / $driver->car_rides()->selectRaw('COUNT(DISTINCT YEAR(created_at), MONTH(created_at))')->count();
        $averageRating = $driver->car_rides()->avg('rate');
        $averageTripTime = $driver->car_rides()->avg('duration');

        return response()->json([
            'total_orders' => $totalOrders,
            'canceled_orders' => $canceledOrders,
            'average_orders_per_day' => $averageOrdersPerDay,
            'average_orders_per_month' => $averageOrdersPerMonth,
            'total_profit' => $totalProfit,
            'average_profit_per_day' => $averageProfitPerDay,
            'average_profit_per_month' => $averageProfitPerMonth,
            'average_rating' => $averageRating,
            'average_trip_time' => $averageTripTime,
        ], 200);
    }
}
