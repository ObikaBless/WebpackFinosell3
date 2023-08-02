import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ICONS } from "../../assets/svgs/ICONS";

export interface IcreateData {
  budgetName: string;
  dateCreated: string;
  spent: string;
  status: string;
  limit: string;
  subBudget: {
    budgetName: string;
    dateCreated: string;
    spent: string;
    status: string;
    limit: string;
  }[];
}

function createData(
  budgetName: string,
  dateCreated: string,
  spent: string,
  status: string,
  limit: string,
  subBudget: {
    budgetName: string;
    dateCreated: string;
    spent: string;
    status: string;
    limit: string;
  }[]
) {
  return {
    budgetName,
    dateCreated,
    spent,
    status,
    limit,
    subBudget: subBudget,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell width={350} component="th" scope="row">
          <div className="flex items-center gap-x-3">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <span className="w-11 h-11 bg-green-100 text-green-600 font-bold rounded-full flex-center uppercase">
              {row.budgetName.slice(0, 2)}
            </span>
            {row.budgetName}
          </div>
        </TableCell>
        <TableCell width={200} align="left">
          {row.dateCreated}
        </TableCell>
        <TableCell width={200} align="left">
          {row.limit}
        </TableCell>
        <TableCell width={200} align="left">
          {row.spent}
        </TableCell>
        <TableCell width={250} align="left">
          {row.status}
        </TableCell>
        <TableCell width={1} align="left">
          <button>
            <ICONS.AddBoxIcon />
          </button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.subBudget.map((subRow, id) => (
                    <TableRow key={id} className="h-16 bg-gray-50">
                      <TableCell width={350} component="th" scope="row">
                        <span className="ml-3.5">
                          <div className="flex-center gap-x-3">
                            {subRow.budgetName}
                          </div>
                        </span>
                      </TableCell>
                      <TableCell width={220}>{subRow.dateCreated}</TableCell>
                      <TableCell width={200}>
                        <div className="w-full flex-center gap-x-3">
                          {`${subRow.limit}%`}
                          <div className="w-[100px] h-1.5 rounded-full bg-gray-300 relative">
                            <span
                              style={{
                                width: `${subRow.limit}%`,
                              }}
                              className="h-full rounded-full bg-green-600 absolute left-0 top-0"
                            ></span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell width={200}>
                        <span
                          className={`h-11 capitalize w-24 flex-center px-4 button-radius font-semibold ${subRow.status}`}
                        >
                          {subRow.status}
                        </span>
                      </TableCell>
                      <TableCell width={250}>
                        <div className="flex-center gap-x-1">
                          {/* {subRow.spent} */}
                          <div className="w-full">
                            <h5 className="font-semibold text-gray-500 text-md">
                              ₦{subRow.spent} spent
                            </h5>
                            <p className="font-medium text-gray-500 text-md">
                              $70,800.00 USD limit
                            </p>
                          </div>
                          <button>
                            <ICONS.EllipsisVIcon />
                          </button>
                        </div>
                      </TableCell>
                      <TableCell width={1}>
                        <button>
                          <ICONS.CaretRightIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function BudgetTable({
  budgetData,
}: {
  budgetData: IcreateData[];
}) {
  const [rows, setRows] = React.useState<any>([]);
  React.useEffect(() => {
    let rowData: any = [];
    budgetData.forEach(
      ({ budgetName, dateCreated, limit, spent, status, subBudget }) => {
        rowData.push(
          createData(budgetName, dateCreated, limit, spent, status, subBudget)
        );
      }
    );
    setRows(rowData);
  }, [setRows, budgetData]);
  return (
    <TableContainer>
      <Table
        aria-label="collapsible table"
        className="border border-gray-300 rounded-xl"
      >
        <TableHead>
          <TableRow>
            <TableCell>Budget Name</TableCell>
            <TableCell align="left">Date Created</TableCell>
            <TableCell align="left">Spent</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Limit</TableCell>
            <TableCell width={1}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
