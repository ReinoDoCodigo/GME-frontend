import { define } from "@/utils.ts";
import Table from "@/islands/Table.tsx";


export default define.page(function Usuarios() {

     const columns = [
    { key: "nome", label: "Nome" },
    { key: "idade", label: "Idade" },
    { key: "cidade", label: "Cidade" },
  ];
    const pessoas = [
        {
      nome: "João",
      idade: 25,
      cidade: "Curitiba",
    },
    {
      nome: "Maria",
      idade: 31,
      cidade: "Londrina",
    },
    {
      nome: "Carlos",
      idade: 42,
      cidade: "Araruna",
    },
    ];

    return (
        <div>
            <Table 
                columns={columns}
                data={pessoas}
            />
        </div>
    );
});