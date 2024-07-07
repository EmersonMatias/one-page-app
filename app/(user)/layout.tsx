import NavbarInicio from "@/components/user/navbar-inicio";

export default function InicioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="flex">
            <NavbarInicio />
            {children}
        </section>
    );
}
