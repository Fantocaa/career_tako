<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login | Tako Karir</title>
</head>

<body class="bg-white text-DarkTako w-full min-h-screen flex items-start font-inter">

    <div class="relative w-[75%] h-full flex flex-col">
        <img src="/images/login.jpg" alt="" srcset="" class="object-left object-cover min-h-screen">
    </div>
    <div class="w-1/2 p-10 min-h-screen flex flex-col justify-around">
        <div class="flex justify-center text-2xl"><a href="{{ route('login') }}">
                <h1 class="font-bold flex">Karir <span class="text-2xl text-BlueTako">Tako</span></h1>
            </a>
        </div>

        <div class="w-full flex flex-col">
            <div class="flex flex-col mb-5">
                <h3 class="text-xl font-semibold mb-2">Login</h3>
                <p class="text-sm mb-2">Welcome Back!, Please enter your details.</p>
            </div>

            <form action="{{ route('login_proses') }}" method="POST">
                @csrf
                <div class="w-full flex flex-col">
                    <input type="email" placeholder="Email" name="email"
                        class="w-full text-DarkTako py-3 my-2 rounded-xl bg-transparent outline-none focus:outline-none ">
                </div>
                @error('email')
                    <small>{{ $message }}</small>
                @enderror
                <div class="w-full flex flex-col">
                    <input type="password" placeholder="Password" name="password"
                        class="w-full text-DarkTako py-3 my-2 rounded-xl bg-transparent  outline-none focus:outline-none ">
                </div>
                @error('password')
                    <small>{{ $message }}</small>
                @enderror
                <div class="w-full flex justify-end">
                    <p class="text-xs cursor-pointer underline underline-offset-2">Forgot Password?</p>
                </div>

                <div class="w-full flex pt-4 flex-col">
                    <button class="py-3 my-2 bg-DarkTako text-white rounded-xl">Login</button>
                </div>
            </form>
            {{-- <div class="w-full flex pt-4 flex-col">
                <button class="py-3 my-2 bg-DarkTako text-white rounded-xl "><a
                        href="{{ route('login_proses') }}"></a>Login</button>
            </div> --}}

            {{-- <div class="w-full flex flex-col">
                <a href="{{ route('register') }}">
                    <button class="w-full py-3 my-2 bg-transparent border-BlueTako border text-BlueTako rounded-xl">
                        Register</button></a>
            </div> --}}
        </div>


        <div class="w-full flex items-center justify-center">
            <p class="text-sm font-normal">Dont have a account? <span
                    class="font-semibold underline underline-offset-2 cursor-pointer text-BlueTako">Sign Up</span></p>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    @if ($message = Session::get('failed'))
        <script>
            Swal.fire('{{ $message }}')
        </script>
    @endif

    @if ($message = Session::get('success'))
        <script>
            Swal.fire('{{ $message }}')
        </script>
    @endif
</body>

</html>
