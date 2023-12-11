<?php

namespace App\Http\Controllers;

use App\Models\ChatMessages;
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
    public function postMessage(Request $request)
{
    if (is_null($request->input('userId')) || is_null($request->input('content'))) {
        throw new Exception('Both userId and content are required.', 400);
    }
    $userId = $request->input('userId');
    $content = $request->input('content');
        $message = new ChatMessages;
        $message->user_id = $userId;
        $message->content = $content;
        $message->save();
        return response()->json(['userId'=>$userId,'content'=>$content])
            ->header('Access-Control-Allow-Origin', '*');
}
}
