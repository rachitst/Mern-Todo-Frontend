import axios from "axios";
import { ADDNEW_TODO , GETALL_TODO , TOGGLE_TODO, UPDATE_TODO , DELETE_TODO, TOGGLE_TAB} from "./type";

const API_URL = "http://localhost:8000";

export const addNewTodo = (text,content) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { text,content });
    dispatch({ type: ADDNEW_TODO, payload: res, });
  } catch (error) {
    console.log("Error while adding new to-do ", error.message);
  }
};
export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while loading all Todos ", error.message);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while marking ", error.message);
  }
};
export const updateTodo = (id,text,content) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`,{text,content});
    dispatch({ type: UPDATE_TODO, payload: res });
  } catch (error) {
    console.log("Error while updating To-do ", error.message);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while deleting To-do ", error.message);
  }
};
export const toggleTab = (tab) => async (dispatch) => {
  dispatch({type:TOGGLE_TAB, selected :tab})
};
