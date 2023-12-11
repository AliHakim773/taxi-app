<?php

namespace App\Http\Controllers;

use App\Models\ChatMessages;
use App\Models\ChatRoom;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    //
public function getAllMessages(){
        $messages=ChatMessages::all();
        return response()->json([
            'messages'=>$messages
        ])->header('Access-Control-Allow-Origin', '*');
    }
    public function createMessage(Request $request)
{
    if (is_null($request->input('userId')) || is_null($request->input('content')) || is_null($request->input('chatRoomId'))) {
        throw new Exception('Both userId and content and roomId are required.', 400);
    }
    $userId = $request->input('userId');
    $content = $request->input('content');
    $roomId=$request->input('chatRoomId');
    $room=ChatRoom::where('id',$roomId)->first();
    if(!$room){
        return response()->json([
            'error'=>"Room doesn't exist"
        ]);
    }else{
        $user=User::where('id',$userId)->first();
        if(!$user){
            return response()->json([
                'error'=>"User doesn't exist"
            ]);
        }
        $message = new ChatMessages;
        $message->user_id = $userId;
        $message->content = $content;
        $message->chat_room_id=$roomId;
        $message->save();
        return response()->json(['message'=>"Message created"])
            ->header('Access-Control-Allow-Origin', '*');
    }
}
}
