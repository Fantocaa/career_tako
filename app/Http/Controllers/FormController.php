<?php

namespace App\Http\Controllers;

use App\Models\form;
use App\Http\Requests\StoreformRequest;
use App\Http\Requests\UpdateformRequest;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Form');
    }

    public function APICoba(form $form)
    {

        $form = [];
        $form[] = DB::table('forms')->get();
        return response()->json([$form]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreformRequest $request)
    {

        if ($request->password == 'jancokk') {
            $form = new form();
            $form->first_name = $request->first_name;
            $form->last_name = $request->last_name;
            $form->email = $request->email;
            $form->save();
            return redirect('/');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(form $form)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(form $form)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateformRequest $request, form $form)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(form $form)
    {
        //
    }
}
