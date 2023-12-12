<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DriversController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function getAvailableDrivers(){

        //return driver id, driver name, driver car, driver car color, driver car model, price, eta 5 min
    }
}
