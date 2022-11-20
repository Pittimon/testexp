import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectDialog, setDialog } from "../features/dialog/dialogSlice";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import "../styles/Dialogshow.css";

const Dialogshow = ({ data }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const set = useSelector(selectDialog);
  const handleClose = () => {
    dispatch(setDialog());
  };

  const register = (e) => {
    e.preventDefault();
    db.collection("user")
      .add({
        name: data.name,
        lastname: data.lastname,
        username: data.username,
        password: data.password,
        bank: data.bank,
        bankid: data.bankid,
        login: false,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        handleClose();
        Navigate("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <Dialog
        open={set}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 1)",
            color: "white",
            width: "440px",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"All the information is correct?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Name: {data.name} <br />
            Lastname: {data.lastname} <br />
            Username: {data.username} <br />
            Password: {data.password} <br />
            Bank: {data.bank} <br />
            Bankid: {data.bankid}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={register} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dialogshow;
