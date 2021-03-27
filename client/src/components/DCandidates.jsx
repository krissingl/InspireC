/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
} from '@material-ui/core';
import * as actions from '../store/actions/dCandidate.js';
import DCandidateForm from './DCandidateForm.jsx';

const DCandidates = (props) => {
  useEffect(() => {
    props.fetchAllDCandidates();
  }, []);
  return (
    <Paper>
      <Grid container>
        <Grid item xs={6}>
          <DCandidateForm />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Blood Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.dCandidateList.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.fullName}</TableCell>
                      <TableCell>{record.mobile}</TableCell>
                      <TableCell>{record.bloodGroup}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  dCandidateList: state.dCandidate.list,
});

const mapActionToProps = {
  fetchAllDCandidates: actions.fetchAll,
  deleteDCandidate: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(DCandidates);
