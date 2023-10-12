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
} from "lucide-react";

export default function Dashboard({ auth }) {
    return (
        <main>
            <Sidebar>
                <SidebarItem
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
                />
                <SidebarItem
                    icon={<BarChart3 size={20} />}
                    text="Beranda"
                    active
                />
                <SidebarItem
                    icon={<BarChart3 size={20} />}
                    text="Lowongan Pekerjaan"
                />
            </Sidebar>
        </main>

        // <SidebarLayout />

        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={
        //         <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        //             Dashboard
        //         </h2>
        //     }
        // >

        //     <Head title="Dashboard" />
        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">
        //                     You're logged in!
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
        // </Sidebar>
    );
}
