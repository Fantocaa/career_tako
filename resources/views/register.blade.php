<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register | Tako Karir</title>
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
                <h3 class="text-xl font-semibold mb-2">Register</h3>
                <p class="text-sm mb-2">Please Enter Your Data</p>
            </div>

            <form action="{{ route('register_proses') }}" method="POST">
                @csrf
                <div class="w-full flex flex-col">
                    <input type="text" placeholder="Nama Lengkap" value="{{ old('name') }}" name="name"
                        class="w-full text-DarkTako py-3 my-2 rounded-xl bg-transparent outline-none focus:outline-none ">
                </div>
                @error('name')
                    <small>{{ $message }}</small>
                @enderror

                <div class="w-full flex flex-col">
                    <input type="email" placeholder="Email" name="email" value="{{ old('email') }}"
                        class="w-full text-DarkTako py-3 my-2 rounded-xl bg-transparent outline-none focus:outline-none ">
                </div>
                @error('email')
                    <small>{{ $message }}</small>
                @enderror
                <div class="w-full flex flex-col">
                    <input type="password" placeholder="Password" value="{{ old('password') }}" name="password"
                        class="w-full text-DarkTako py-3 my-2 rounded-xl bg-transparent  outline-none focus:outline-none ">
                </div>
                @error('password')
                    <small>{{ $message }}</small>
                @enderror
                <div class="w-full flex pt-4 flex-col">
                    <button class="w-full py-3 my-2 bg-DarkTako text-white rounded-xl ">Register</button>
                </div>
            </form>


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
