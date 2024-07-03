import NavbarInicio from "@/components/navbar-inicio/navbar-inicio";

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
