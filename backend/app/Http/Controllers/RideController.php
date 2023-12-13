<?php

namespace App\Http\Controllers;

use App\Models\CarRide;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RideController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function createRideRequest(Request $request)
    {
        // $this->authorize('passenger');
        $request->validate([

            'driver_id' => 'required',
            'from_long' => 'required',
            'from_lat' => 'required',
            'to_long' => 'required',
            'to_lat' => 'required',
            'price' => 'required',
            'duration' => 'required',
        ]);

        $status = "pending";
        // $user=Auth::user()->id;
        $user = 4;
        $carRide = CarRide::create([
            'user_id' => $user,
            'driver_id' => $request->driver_id,
            'from_long' => $request->from_long,
            'from_lat' => $request->from_lat,
            'to_long' => $request->to_long,
            'to_lat' => $request->to_lat,
            'price' => $request->price,
            'duration' => $request->duration,
            'status' => $status,
        ]);
        return response()->json(['status' => 'success'], 200);
    }

    public function getRideRequest()
    {
        // $this->authorize('driver');
        // $user=Auth::user()->id;
        $user = 2;
        $request = CarRide::where('driver_id', $user)->where('status', 'pending')->get();
        $passengers = [];
        foreach ($request as $req) {
            $pas_id = $req->user_id;
            $passengers[] = User::where('id', $pas_id)->first();
        }
        return response()->json(['status' => 'success', 'request' => $request, 'passenger_info' => $passengers], 200);
    }

    public function rideRequestStatus(Request $request)
    { //*
        // $this->authorize('passenger');
        // $user=Auth::user()->id;
        $user = 4;
        $request_status = CarRide::where('user_id', $user)->where('status', 'pending')->orWhere('status', 'accepted')->orWhere('status', 'denied')->first();
        return response()->json(['status' => 'success', 'request_status' => $request_status], 200);
    }

    public function acceptRequestRide()
    {
        // $this->authorize('driver');
        // $user=Auth::user()->id;
        $user = 2;
        $rideRequest = CarRide::where('driver_id', $user)->where('status', 'pending')->first();
        if (!$rideRequest) {
            return response()->json(['status' => 'error', 'message' => 'no pending requests for driver'], 404);
        }
        $rideRequest->status = 'accepted';
        $rideRequest->save();
        return response()->json(['status' => 'success'], 200);
    }

    public function finishRequestRide()
    {
        // $this->authorize('driver');
        // $user=Auth::user()->id;
        $user = 2;
        $rideRequest = CarRide::where('driver_id', $user)->where('status', 'accepted')->first();
        if (!$rideRequest) {
            return response()->json(['status' => 'error', 'message' => 'no finished requests for driver'], 404);
        }
        $rideRequest->status = 'finished';
        $rideRequest->save();
        return response()->json(['status' => 'success'], 200);
    }

    public function rejectRequestRide()
    {
        // $this->authorize('driver');
        // $user=Auth::user()->id;
        $user = 2;
        $rideRequest = CarRide::where('driver_id', $user)->where('status', 'accepted')->first();
        if (!$rideRequest) {
            return response()->json(['status' => 'error', 'message' => 'no rejected requests for driver'], 404);
        }
        $rideRequest->status = 'denied';
        $rideRequest->save();
        return response()->json(['status' => 'success'], 200);
    }
}