export type TableProps = {
    caption?: string;
    rows: IRowData[];
    headers: string[];
    pagination?: boolean;
    sortable?: boolean;
    handleSorting: (colName: string, order: string) => void;
}

export type TableHeaderProps = {
    headers: string[];
    sortable?: boolean;
    setSort: React.Dispatch<React.SetStateAction<{
        columnName: string;
        sortOrder: string;
    }>>;
    sort: {
        columnName: string;
        sortOrder: string;
    }
}

export type TableRowProps = {
    rows: IRowData[];
}

// export type RowProps = {
//     timestamp: string;
//     purchaseId: string;
//     mail: string;
//     name: string;
//     source: string;
//     status: string;
//     select: (id: string) => void;
// }

export interface IRowData {
    [key: string]: string | boolean | number | JSX.Element;
}

export type BadgeProps = {
    status: string;
}

export type TableFooterProps = {
    numberOfRows: number[];
}