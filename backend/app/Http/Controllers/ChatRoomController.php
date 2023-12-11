<?php

namespace App\Http\Controllers;

use App\Models\ChatRoom;
use Illuminate\Http\Request;

class ChatRoomController extends Controller
{
    public function getAllRooms(){
        $rooms=ChatRoom::all();
                return response()->json([
            'rooms'=>$rooms
        ])->header('Access-Control-Allow-Origin', '*');
    }
}
