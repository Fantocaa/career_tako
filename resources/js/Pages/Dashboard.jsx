import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SidebarLayout from "@/Components/Dashboard/SidebarLayout";
import Sidebar from "@/Components/Sidebar";
import { SidebarItem } from "@/Components/Sidebar";
import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    LayoutDashboard,
    Settings,
    ArrowLeftCircle,
    Building2,
} from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import Axios from "axios";
import { useEffect } from "react";

export default function Dashboard({ auth }) {
    // const { page } = usePage();

    // const handleChange = useEffect(() => {
    //     // Panggil fungsi API di sini saat komponen pertama kali di-mount
    //     const fetchData = async () => {
    //         try {
    //             // Kirim data ke server
    //             const response = await Axios.get("/admin/logout");
    //             // const response = await Axios.post("/form");
    //             setFormData(response.data);
    //         } catch (error) {
    //             console.error("Error sending data:", error);
    //         }
    //     };

    //     fetchData(); // Panggil fungsi fetchData saat komponen di-mount

    //     // Hanya perlu dijalankan saat komponen pertama kali di-mount,
    //     // sehingga dependensi di bawah ini kosong
    // }, []);

    return (
        <div className="w-1/4 fixed">
            <div className="w-full h-full">
                <Sidebar>
                    {/* {page && ( */}
                    {/* <Link href="/dashboard"> */}
                    <Link href={route("admin.dashboard")}>
                        <SidebarItem
                            icon={<LayoutDashboard size={20} />}
                            text="Dashboard"
                            // alert
                            // active={page.url === "/dashboard"}
                            // active
                        />
                    </Link>
                    {/* )} */}
                    {/* {page && ( */}
                    {/* <Link href="/dashboard/beranda"> */}
                    <Link href={route("admin.beranda")}>
                        <SidebarItem
                            icon={<BarChart3 size={20} />}
                            text="Beranda"
                            // active={page.url === "/dashboard/beranda"}
                            // active
                        />
                    </Link>
                    {/* )} */}
                    {/* {page && ( */}
                    {/* <Link href="/dashboard/lowongan_pekerjaan"> */}
                    <Link href={route("admin.lowongan_pekerjaan")}>
                        <SidebarItem
                            icon={<UserCircle size={20} />}
                            text="Lowongan"
                            // active={page.url === "/dashboard/beranda"}
                        />
                    </Link>
                    <Link href={route("admin.perusahaan_dashboard")}>
                        <SidebarItem
                            icon={<Building2 size={20} />}
                            text="Perusahaan"
                            // active={page.url === "/dashboard/beranda"}
                        />
                    </Link>
                    {/* <Link href={route("admin.logout")}> */}
                    <a href={route("admin.logout")}>
                        {/* <Link onClick={handleChange}> */}
                        <SidebarItem
                            icon={<ArrowLeftCircle size={20} />}
                            text="Logout"
                            // active={page.url === "/dashboard/beranda"}
                        />
                        {/* </Link> */}
                    </a>
                    {/* )} */}
                </Sidebar>
            </div>
        </div>
    );
}
