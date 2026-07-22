interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, unknown>[];
}

export default function Table({ columns, data }: TableProps) {
  return (
    <section class="px-4 py-8 mx-auto min-h-screen">
      <table class="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>
                  {String(row[column.key] ?? "")}
                </td>
              ))}
              <td>
                <button 
                class="button is-warning"
                type="button" onClick={() => console.log(row)}>
                    Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}