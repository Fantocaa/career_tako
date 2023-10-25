<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    @vite('resources/css/app.css')
    {{-- <title>Document</title> --}}
</head>

<body>
    <div class="flex w-full pt-8 font-inter justify-between text-white ">
        <h1 class="font-semibold text-white text-xl">(132) Pekerjaan Tersedia</h1>
        <a href="/loker">
            <span class="cursor-pointer underline text-white">Lihat Semua -></span>
        </a>
    </div>
    <div class="flex gap-4 pt-4 flex-wrap">
        <div class="relative w-full lg:w-72">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" class="mr-2">
                    <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M22 22L20 20" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <input type="text" placeholder="Cari Lowongan yang anda inginkan"
                class="rounded-xl border-white focus:border-solid border-2 border-opacity-50 w-full  h-12 block pl-12 bg-transparent text-white focus:border-opacity-100  focus:outline-none focus:border-2 lg:w-72 placeholder-white placeholder-opacity-50" />
        </div>
        <div class="dropdown dropdown-bottom bg-transparent rounded-xl w-full lg:w-0">
            <label tabindex="0"
                class="btn bg-transparent outline-white hover:bg-transparent hover:border-white border-white border-opacity-50 normal-case font-normal text-opacity-60 text-white hover:border-opacity-50 border-2 focus:border-opacity-80 focus:border-BlueTako focus:border-4 w-full lg:w-[156px] text-center rounded-xl flex justify-between ">
                <span>Program</span>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
                            stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="1.5" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow rounded-box w-full md:w-52 bg-white">
                <li>
                    <a>Semua Program</a>
                </li>
                <li>
                    <a>Internship</a>
                </li>
                <li>
                    <a>Profesional</a>
                </li>
            </ul>
        </div>
        <div class="w-full lg:w-0 lg:translate-x-[156px] border-white ">
            <span
                class="btn bg-BlueTako outline-white hover:bg-white hover:border-white border-white border-opacity-50 normal-case font-normal text-white hover:border-opacity-50 border-2 focus:border-opacity-80 hover:text-DarkTako hover:bg-opacity-90  border-none w-full lg:w-28 transition-all">
                Cari
            </span>
        </div>

    </div>
    <script src="{{ asset('js/jquery.min.js') }}"></script>
</body>

</html>
