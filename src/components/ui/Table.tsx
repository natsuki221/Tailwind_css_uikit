// components/ui/Table.tsx
"use client";
import React, { ReactNode } from "react";

/** 定義資料行欄位介面，使用 T 做為資料型別的泛型參照 */
export interface Column<T> {
  key: keyof T; // 例如 'id'|'name' etc
  header: string;
  render?: (rowData: T) => ReactNode;
}

/** TableProps 泛型：columns 與 data 都對應 T */
interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

/**
 * Table: A simple data table with your custom UI style.
 *
 * - No shadow for inner table.
 * - Crisp borders (3px), highlight the header row, zebra strip for rows.
 * - Accept columns array + data array, both typed as <T>.
 *
 * Example usage:
 *
 *   interface Person {
 *     id: number;
 *     name: string;
 *   }
 *
 *   const columns: Column<Person>[] = [
 *     { key: 'id', header: 'ID' },
 *     { key: 'name', header: 'Name' },
 *     { key: 'actions', header: 'Actions', render: (row) => <Button>...</Button> },
 *   ];
 *
 *   const data: Person[] = [
 *     { id: 1, name: 'Alice' },
 *     { id: 2, name: 'Bob' },
 *   ];
 *
 *   <Table<Person> columns={columns} data={data} />
 */

function Table<T>({ columns, data, className = "" }: TableProps<T>) {
  return (
    <div className="relative">
      {/* 陰影層：依容器大小自動調整 */}
      <div className="absolute inset-0 bg-gray-900 translate-x-2 translate-y-2 rounded-xl z-[-1]" />
      <div
        className={`border-[3px] border-gray-900 rounded-xl overflow-x-auto bg-[#fff4da] p-4 ${className}`}
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="py-3 px-4 border-b-[3px] border-gray-900 font-bold text-sm"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => {
              const isEven = rowIndex % 2 === 0;
              return (
                <tr
                  key={rowIndex}
                  className={isEven ? "bg-[#fff9ef]" : "bg-[#fffdf8]"}
                >
                  {columns.map((col) => {
                    // 如果有 render，就用 render(row)，否則直接取 row[col.key]
                    const cellValue = col.render
                      ? col.render(row)
                      : row[col.key];

                    return (
                      <td
                        key={String(col.key)}
                        className="py-2 px-4 border-b-[1.5px] border-gray-300 text-sm"
                      >
                        {cellValue as ReactNode}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 把函式定義轉成泛型的 React.FC 也可，但要加 <T,>，目前這樣就足夠
export default Table;
