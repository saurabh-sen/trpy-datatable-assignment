export type TableProps = {
    caption?: string;
    rows: IRowData[];
    headers: string[];
    pagination?: boolean;
    sortable?: boolean;
}

export type TableHeaderProps = {
    headers: string[];
    sortable?: boolean;
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