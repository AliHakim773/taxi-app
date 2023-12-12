<?php

namespace App\Http\Controllers;

use App\Models\ChatMessages;
use App\Models\ChatRoom;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
    public function getUsersMessages(){
        //userid => bdi jib kl l messages
        //we get the userid from the token
        $user=Auth::user();//authenticated user 
        $userId=$user->id;
        $senderMessages=ChatMessages::where('sender_id',$userId)->where('receiver_id',2)->get();//get all
        $receiverMessages=ChatMessages::where('receiver_id',$userId)->where('sender_id',2)->get();//get all
        // $messages=$user->sentMessages;
        return response()->json([
            'sender messages'=>$senderMessages,
            'receiver messages'=>$receiverMessages
        ]);
    }
}

//php artisan migrate:fresh
//php artisan db:seed
