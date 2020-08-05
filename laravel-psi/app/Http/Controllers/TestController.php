<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Test;

class TestController extends Controller
{
     public function createTest(Request $request){
        $test = new Test;
        $test->name = $request->name;
        $test->save();
        return response()->json($test);
    }

    public function getTest(){
        $test = Test::all();
        return response()->json([$test]);
    }
}
