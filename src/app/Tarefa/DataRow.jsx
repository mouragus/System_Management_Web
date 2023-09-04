import DropMenu from "@/components/DropMenu";
import { CreditCardIcon } from "@heroicons/react/24/outline";

export default function DataRow({ tarefa }) {
    return (
        <div id="data-row" className="flex items-center justify-between hover:bg-slate-800 p-2 my-2 cursor-pointer rounded text-slate-300" >
            <div className="flex gap-1">
                <CreditCardIcon className="h-6 w-6" />
                <span>{tarefa.nome}</span>
                </div>
            <div className="flex gap-1 items-center">
                <span>{tarefa.nome.toFixed(2)}</span>
                <div >
                    <DropMenu className="text-slate-300" />
                </div>

            </div>
        </div>
    )
}


