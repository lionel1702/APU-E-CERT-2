import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getAllCertificates } from "../Utils/apiConnect";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(candidateName, orgName, courseName, certificateId) {
//   return { candidateName, orgName, courseName, certificateId };
// }

// const rows = [
//   createData("Frozen yoghurt", "Asia Pacific University", 6.0, 24),
//   createData("Ice cream sandwich", 237, 9.0, 37),
//   createData("Eclair", 262, 16.0, 24),
//   createData("Cupcake", 305, 3.7, 67),
//   createData("Gingerbread", 356, 16.0, 49),
// ];

class CertificatesTable extends React.Component {
  // const classes = useStyles();
  state = {
    certificates: [],
  };

  componentDidMount = () => {
    // let certificates = getAllCertificates();
    getAllCertificates().then((data) => {
      this.setState({ certificates: data });

      // console.log(certificates);
      // .then((data) => {
      //   const {
      //     candidateName,
      //     orgName,
      //     courseName,
      //     assignDate,
      //     expirationDate,
      //     certificateId,
      //   } = data;
      // });
    });
  };

  // componentDidMount() {
  //   console.log("componentdidmount");
  //   axios
  //     .get("http://localhost:3000/certificate/all")
  //     .then((res) => {
  //       {
  //         console.log("result:"+ res.data);
  //       }
  //       this.setState({
  //         certificates: res.data,
  //       });
  //       // console.log("result: " + certificates);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table className={useStyles.table} aria-label="Show All Certificates">
          <TableHead>
            <TableRow>
              <TableCell>Candidate&nbsp;Name</TableCell>
              <TableCell align="right">Organization</TableCell>
              <TableCell align="right">Course&nbsp;Title</TableCell>
              <TableCell align="right">Certificate&nbsp;ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.certificates.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.candidateName}
                </TableCell>
                <TableCell align="right">{row.orgName}</TableCell>
                <TableCell align="right">{row.courseName}</TableCell>
                <TableCell align="right">{row.certificateId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default CertificatesTable;
