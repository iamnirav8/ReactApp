// This component render data grid based upon the selection of the dropdown value.
import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DataStore from './components/store.js';

const styles = theme => ({
  root: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


// let id = 0;
// function createData(matterNumber, matterDescription, clientName, partnerResponsible, personActing,currentFee,currentDisbursmentEstimate,lastTimeSheetDate) {
//   id += 1;
//   return { id, matterNumber, matterDescription, clientName, partnerResponsible, personActing,currentFee,currentDisbursmentEstimate,lastTimeSheetDate };
// }
// // Create a Sample Data
// const GridData = [
//   createData('120-234-09','Prject bufalo','Nippon Steel data','Andew Tye','Andew type',124,10,'2018-08-12'),
//   createData('4567','Prject NX','HDFC LTD','R C Tye','C K type',54678,14,'2018-01-12'),
//   createData('76855','Prject Siri','Apple Pvt Ltd','Time Cook','Time Cook',723,78,'2018-02-23'),
//   createData('20-234-09','Prject Cortana','Microsoft Pvt Ltd','Satya Nadella','Satya Nadella',567,23,'2018-12-27'),
//   createData('98235','Prject Tango','Google Inc','Eric Schedmt','Sundar Pichai',2345,44,'2018-01-30'),
//   createData('67543','Prject X','Samsung Inc','Pranav Mistry','Pranav Mistry',67,7,'2018-04-12')
// ];

class DataGrid extends React.Component{
  constructor(){
    super()
    this.states = {
      GridData : DataStore.getAllData()
    };
  }
  render(){
    const { classes } = this.states;
    return(
      <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>MatterNumber</CustomTableCell>
              <CustomTableCell >MatterDescription</CustomTableCell>
              <CustomTableCell >clientName</CustomTableCell>
              <CustomTableCell >PartnerResponsible</CustomTableCell>
              <CustomTableCell >PersonActing</CustomTableCell>
              <CustomTableCell >CurrentFee</CustomTableCell>
              <CustomTableCell >CurrentDisbursmentEstimate</CustomTableCell>
              <CustomTableCell >LastTimeSheetDate</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.GridData.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}  onClick={event => this.OpenNewPage(event,row.id)}>
                  <CustomTableCell>{row.matterNumber}</CustomTableCell>
                  <CustomTableCell >{row.matterDescription}</CustomTableCell>
                  <CustomTableCell >{row.clientName}</CustomTableCell>
                  <CustomTableCell >{row.partnerResponsible}</CustomTableCell>
                  <CustomTableCell >{row.personActing}</CustomTableCell>
                  <CustomTableCell numeric>{row.currentFee}</CustomTableCell>
                  <CustomTableCell numeric>{row.currentDisbursmentEstimate}</CustomTableCell>
                  <CustomTableCell >{row.lastTimeSheetDate}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
      </Table>
    )
  }
  
}

DataGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataGrid);