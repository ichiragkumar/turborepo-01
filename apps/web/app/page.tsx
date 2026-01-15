"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

interface Todo {
  id: number;
  name: string;
  status: string;
  createdAt: string;
  createdBy: string;
}


const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("/api/todos");
  
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  
  const result = await response.json();
  return result.data;
};



export default function Home() {
  const { 
    data: todos = [], 
    isLoading, 
    isError, 
    refetch,
    isFetching 
  } = useQuery({only 
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Todo Dashboard {isFetching ? "..." : ""}</h1>
        
        {isLoading ? (
          <p>Loading tasks via TanStack...</p>
        ) : isError ? (
          <p style={{ color: "red" }}>Error loading todos.</p>
        ) : (
          <div className={styles.grid}>
            {todos.map((todo) => (
              <div key={todo.id} className={styles.card}>
                <h3>{todo.name}</h3>
                <p>Status: <strong>{todo.status}</strong></p>
                <small>By: {todo.createdBy}</small>
              </div>
            ))}
          </div>
        )}

        <div className={styles.ctas}>

          <button onClick={() => refetch()}>
  Refetch Data
</button>
        </div>
      </main>
    </div>
  );
}