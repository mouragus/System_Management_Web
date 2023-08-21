import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-sky-950 px-6 py-4">
            <ul className="flex gap-20 items-end">
                <li>
                    <Link href="/">
                        <h2 className="text-2xl text-slate-200">
                            System Management
                        </h2>
                    </Link>
                </li>
                <li>
                    <Link className={active == "Tarefa" && "text-slate-100"} href="/Tarefa">
                        Tarefa
                    </Link>
                </li>
                <li>
                    <Link className={active == "Usuario" && "text-slate-100"} href="/Usuario">
                        Usuario
                    </Link>
                </li>
                <li>
                    <Link className={active == "Empresa" && "text-slate-100"} href="/Empresa">
                        Empresa
                    </Link>
                </li>
                
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden" >
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>

        </nav>
    )
}