<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    //
    public function index()
    {
        if (Auth::check()) {
            // Pengguna sudah terotentikasi, arahkan ke dashboard atau halaman lain.
            return redirect()->route('admin.dashboard');
        }

        return view('login');
    }

    public function login_proses(Request $request)
    {
        // dd($request->all());
        $request->validate(
            [
                'email' => 'required',
                'password' => 'required',
            ]
        );

        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
        // dd($request->all());

        if (Auth::attempt($data)) {
            // return redirect('/dashboard');   
            // return Inertia::render('DashboardPage');
            // return Inertia::location($url);
            return to_route('admin.dashboard');
        } else {
            return redirect()->route('login')->with('failed', 'Email atau Password Salah!');
        }

        // Pengguna belum login, tampilkan halaman login.
        // return view('login');
    }

    // public function logout(Request $request): ?string
    public function logout(Request $request)
    {
        Auth::logout();

        return redirect()->route('login')->with('success', 'Berhasil Logout');

        // return to_route('login')->with('success', 'Berhasil Logout');

        // return $request->expectsJson() ? null : redirect(route('login'));

        // return view('login');
        // Inertia::setRootView('layouts.app');

        // return redirect()->route('login');

    }

    public function register()
    {
        return view('register');
    }

    public function register_proses(Request $request)
    {
        // dd($request->all());

        $request->validate(
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6',
            ]
        );

        $data['name'] = $request->name;
        $data['email'] = $request->email;
        $data['password'] = Hash::make($request->password);

        User::create($data);

        // dd($request->all());

        $login = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (Auth::attempt($login)) {
            // return redirect('/dashboard');
            // return Inertia::render('DetailLokerPro', [
            //     'md_loker' => $md_loker,
            // ]);
            return redirect('/login');
            // return redirect(Inertia::render('DashboardPage'));
        } else {
            return redirect()->route('login')->with('failed', 'Email atau Password Salah!');
        }
    }
}
