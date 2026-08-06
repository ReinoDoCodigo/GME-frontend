import { define } from "@/utils.ts";
import Table from "@/islands/Table.tsx";


export default define.page(function Usuarios(ctx) {

     const columns = [
    { key: "nome", label: "Nome", },
    { key: "cargo", label: "Cargo" },
    { key: "departamento", label: "Departamento" },
    {key: "local", label: "Local"},
    { key: "idade", label: "Idade" },
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
        <div class="TableDiv">
            <Table 
                columns={columns}
                data={pessoas}
            />
        </div>
    );
});