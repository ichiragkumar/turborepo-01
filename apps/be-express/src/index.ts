import express ,  {Request, Response } from "express";

const app = express();



interface Todo {
    id : number;
    name : string;
    status : string;
    createdAt:string;
    createdBy:string;
    updatedAt:string;
}
const todos : Todo[] = [
    {
        "id":1,
        "name":"learn rust",
        "status":"active",
        "createdAt":"23:22:22",
        "createdBy":"chirag kumar",
        "updatedAt":"22:22:22"
    },
     {
        "id":2,
        "name":"learn rust",
        "status":"active",
        "createdAt":"23:22:22",
        "createdBy":"chirag kumar",
        "updatedAt":"22:22:22"
    },
     {
        "id":3,
        "name":"learn rust",
        "status":"active",
        "createdAt":"23:22:22",
        "createdBy":"chirag kumar",
        "updatedAt":"22:22:22"
    },
     {
        "id":4,
        "name":"learn rust",
        "status":"active",
        "createdAt":"23:22:22",
        "createdBy":"chirag kumar",
        "updatedAt":"22:22:22"
    },
     {
        "id":5,
        "name":"learn rust",
        "status":"active",
        "createdAt":"23:22:22",
        "createdBy":"chirag kumar",
        "updatedAt":"22:22:22"
    }
]


app.get("/todos", (req : Request, res : Response) =>{


    const getTodos = todos.map((todo =>{
        id : todo.id;
        name : todo.name;
        status : todo.status;
        createdAt : todo.createdAt;
        createdBy  : todo.createdBy;
        updatedat : todo.updatedAt;

    }))


    return res.status(200).json({
        msg:"todos fetch successfully",
        data:getTodos
    })


})

