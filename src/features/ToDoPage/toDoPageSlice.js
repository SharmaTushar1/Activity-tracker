import {createSlice} from '@reduxjs/toolkit'
import React, { useState } from 'react';
import uuid from 'react-uuid';
import { toDoCardView } from '../ToDoCard/toDoCardView';
import './ToDo.css'

const initialState = {
    toDos: [],
    hidden: true, // for toggling the hidden add note input
}

export const toDoPageSlice = createSlice({
    name: 'toDoSlice',
    initialState,
    reducers: {
      setToDo: (state) => {
        state.toDos = {
          ...state.toDos,
          [name]: value
        };
      }
    }
})