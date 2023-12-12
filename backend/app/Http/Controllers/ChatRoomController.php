<?php

namespace App\Http\Controllers;

use App\Models\ChatRoom;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class ChatRoomController extends Controller
{
    public function getAllRooms(){
        $rooms=ChatRoom::all();
                return response()->json([
            'rooms'=>$rooms
        ])->header('Access-Control-Allow-Origin', '*');
    }
    public function createRoom(Request $request){
        if (is_null($request->input('senderId')) || is_null($request->input('receiverId'))) {
        throw new Exception('Both sender and receiver id are required.', 400);
    }else{
        $sender_id=$request->input('senderId');
        $receiver_id=$request->input('receiverId');
        $sender=User::where('id',$sender_id)->first();
        $receiver=User::where('id',$receiver_id)->first();
        if(!$receiver || !$sender){
            return response()->json([
                'error'=>'user not found',
            ]);
        }else{
            $room = ChatRoom::where('sender_id', $sender_id)
            ->where('receiver_id', $receiver_id)
            ->first();
            if($room){
                // $room->Delete();
                return response()->json([
                'message'=>'chat room already exists'
            ]);
            }
            $chatRoom=new ChatRoom();
            $chatRoom->sender_id=$sender_id;
            $chatRoom->receiver_id=$receiver_id;
            $chatRoom->save();
            return response()->json([
                'message'=>'chat room created successfully'
            ]);
        }
    }
    }
}
