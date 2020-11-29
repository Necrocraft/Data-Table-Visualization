import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./Table.css";

import {createData, calculateChordData, getSumOfColumns, generate} from "./util";
import { GetChordData } from "./actions/table-action";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  createData("S", 78, 4, 10, 18, 12, 10, 13, 10),
  createData("F", 10, 93, 1, 33, 9, 69, 21, 25),
  createData("G", 1, 0, 61, 1, 16, 1, 20, 3),
  createData("V", 0, 0, 4, 39, 17, 0, 2, 1),
  createData("N", 1, 1, 6, 7, 42, 1, 3, 2),
  createData("H", 0, 0, 0, 0, 0, 0, 0, 0),
  createData("O", 1, 1, 3, 1, 1, 5, 20, 0),
  createData("W", 9, 1, 15, 1, 3, 14, 21, 59),
];

const columns = ["S", "F", "G", "V", "N", "H", "O", "W"];  //Defining rows for table and keys for Chord

function DataTable(props) {
  const classes = useStyles();

  const [data, setData] = useState(rows);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    let chordArr = calculateChordData(data);

    let colSum = getSumOfColumns(chordArr);
    setTotal(colSum);

    props.GetChordData(chordArr, columns); //Action to dispatch changes to reducer for the matrix data and keys for the Chord Graph

  }, [data, props]);

  const handleChange = (event, id) => {

    //To stop the input to max to 3 digits
    if (event.target.value.length > 3) {
      event.target.value = event.target.value.slice(0, 3);
    }

    //To check if the value(event.target.valueAsNumber) is NaN and set the array of values accordingly
      let newArr = data.map((val, i) =>
        i === id
          ? { ...val, [event.target.name]: event.target.valueAsNumber ? event.target.valueAsNumber : "" }
          : val
      );
    setData(newArr); //Setting the data to new array value
  };

  const handleClick = (id) => {
    console.log(id);
    let randomArray = generate(100, columns.length);
    //Generating a random array that will sum to 100 and number of values inside will be equal to length of original column
    console.log(randomArray);
    let valueArray = [...data].map((d, i) => ({...d, [columns[id]]: randomArray[i]}));
    //Plotting the random array on the original data array at the given index from id and then setting that array to data
    setData(valueArray);
    console.log(valueArray);
  }

  console.log(data);

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="column-fixed"></TableCell>
              {columns.map((column, i) => (
                <TableCell className="column-fixed" key={i} align="center">
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={row.name}>
                <TableCell className="column-fixed" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="S"
                    className="input"
                    onChange={(e) => handleChange(e, i)}
                    value={row.S}
                  ></input>
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="F"
                    className="input"
                    onChange={(e) => handleChange(e, i)}
                    value={row.F}
                  ></input>
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="G"
                    className="input"
                    onChange={(e) => handleChange(e, i)}
                    value={row.G}
                  ></input>
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="V"
                    className="input"
                    onChange={(e) => handleChange(e, i)}
                    value={row.V}
                  ></input>
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="N"
                    className="input"
                    onChange={(e) => handleChange(e, i)}
                    value={row.N}
                  ></input>
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="H"
                    className="input"
                    onChange={(e) => handleChange(e, i)}
                    value={row.H}
                  ></input>
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="O"
                    className="input"
                    onChange={(e) => handleChange(e, i)}
                    value={row.O}
                  ></input>
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    name="W"
                    className="input"
                    onChange={(e) => handleChange(e, i)}
                    value={row.W}
                  ></input>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="total" component="th" scope="row">Total</TableCell>
              {total.map((val, i) => (
                <TableCell title="Click Me" className="total_row" onClick={() => handleClick(i)} align="center">{val}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  GetChordData: (matrix, column) => dispatch(GetChordData(matrix, column)),
});

export default connect(null, mapDispatchToProps)(DataTable);
