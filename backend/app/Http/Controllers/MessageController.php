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

}
