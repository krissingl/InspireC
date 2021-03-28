/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import * as actions from '../store/actions/dCandidate.js';
import DCandidateForm from './DCandidateForm.jsx';

const styles = (theme) => ({
  root: {
    '& .MuiTableCell-head': {
      fontSize: '1.25rem',
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});

const DCandidates = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllDCandidates();
  }, []);// componentDidMount

  const onDelete = (id) => {
    if (window.confirm('Are you sure to delete this record?')) props.deleteDCandidate(id, () => console.log('blah'));
  };
  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
        <Grid item xs={6}>
          <DCandidateForm {...({ currentId, setCurrentId })} />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Blood Group</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {
                                    props.dCandidateList.map((record, index) => (
                                      <TableRow key={index} hover>
                                        <TableCell>{record.fullName}</TableCell>
                                        <TableCell>{record.mobile}</TableCell>
                                        <TableCell>{record.bloodGroup}</TableCell>
                                        <TableCell>
                                          <ButtonGroup variant="text">
                                            <Button>
                                              <EditIcon
                                                color="primary"
                                                onClick={() => { setCurrentId(record.id); }}
                                              />
                                            </Button>
                                            <Button>
                                              <DeleteIcon
                                                color="secondary"
                                                onClick={() => onDelete(record.id)}
                                              />
                                            </Button>
                                          </ButtonGroup>
                                        </TableCell>
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

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DCandidates));
