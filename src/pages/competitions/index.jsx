import { Link } from "react-router";
import Block from "../../shared/ui/Block/Block";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import styles from "./index.module.scss";
import { useState } from "react";

const columns = [
  { id: 'name', label: 'Название', minWidth: 170 },
  { id: 'result', label: 'Результат', minWidth: 100, format: (value) => value.toFixed(2), },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, result, population, size) {
  const density = population / size;
  return { name, result, population, size, density };
}

const rows = [
  createData('Соревнование', 4.5, 1324171354, 3287263),
  createData('Соревнование', 4.5, 1403500365, 9596961),
  createData('Соревнование', 4.5, 60483973, 301340),
  createData('Соревнование States', 4.5, 327167434, 9833520),
  createData('Соревнование', 4.5, 37602103, 9984670),
  createData('Соревнование', 4.5, 25475400, 7692024),
  createData('Соревнование', 4.5, 83019200, 357578),
  createData('Соревнование', 4.5, 4857000, 70273),
  createData('Соревнование', 4.5, 126577691, 1972550),
  createData('Соревнование', 4.5, 126317000, 377973),
  createData('Соревнование', 4.5, 67022000, 640679),
  createData('Соревнование Kingdom', 4.5, 67545757, 242495),
  createData('Соревнование', 4.5, 146793744, 17098246),
  createData('Соревнование', 4.5, 200962417, 923768),
  createData('Соревнование', 4.5, 210147125, 8515767),
];

export default function Competitions() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <Block className={styles["hero"]}>
                <h1>Список соревнований</h1>
            </Block>

            <div className={styles["hero__menu"]}>
                <Block className={styles["hero__menu-item"]}>
                    <h3>Участники</h3>

                    <Link to={`/participants`}>
                        <Button variant="outlined" size="medium" >Перейти</Button>
                    </Link>
                </Block>

                <Block className={styles["hero__menu-item"]}>
                    <h3>Результаты</h3>

                    <Link to={`/results`}>
                        <Button variant="outlined" size="medium" >Перейти</Button>
                    </Link>
                </Block>
            </div>

            <Paper style={{ marginTop: "10px" }} sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}