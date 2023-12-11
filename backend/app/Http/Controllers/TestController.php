<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Gate;
use Illuminate\Http\Request;

class TestController extends Controller
{
    //
    public function test()
    {
        $this->authorize('admin');

        echo 'admin me is';
    }
}
