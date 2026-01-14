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


app.post("/todos", (req: Request, res: Response) => {
  const { id, name, status, createdAt, createdBy, updatedAt } = req.body;
  if (
    id === undefined ||
    name === undefined ||
    status === undefined ||
    createdAt === undefined ||
    createdBy === undefined ||
    updatedAt === undefined
  ) {
    return res.status(400).json({
      msg: "all fields are required",
      data: null
    });
  }

  if (
    typeof id !== "number" ||
    typeof name !== "string" ||
    typeof status !== "string" ||
    typeof createdAt !== "string" ||
    typeof createdBy !== "string" ||
    typeof updatedAt !== "string"
  ) {
    return res.status(400).json({
      msg: "invalid field types",
      data: null
    });
  }


  const exists = todos.some((t) => t.id === id);
  if (exists) {
    return res.status(409).json({
      msg: `todo with id ${id} already exists`,
      data: null
    });
  }


  const newTodo: Todo = { id, name, status, createdAt, createdBy, updatedAt };
  todos.push(newTodo);

  return res.status(201).json({
    msg: "new todo added",
    data: newTodo
  });
});

