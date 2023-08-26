import Hero from "@/Components/Hero";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full mt-24">
                <Hero
                    title="Welcome to "
                    span=" Quiz App"
                    description=" Please click the button below to take the quiz.
                        Let's Enjoy!!!"
                />
            </div>
        </AuthenticatedLayout>
    );
}
