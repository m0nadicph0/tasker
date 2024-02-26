'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export default function ListsPage() {
  const { data: todos, isLoading, isSuccess } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => resp.json()),
  })


  return (
    <div>
      <h1 className='text-4xl'>Lists</h1>
      <h2 className='text-xl text-muted'>Lists you have created</h2>
      {isLoading && (
        <div>Loading</div>
      )}
      {!isLoading && (
        <div className='flex flex-col'>
          {todos?.map((todo: Todo) => (
            <div key={todo.id}>
              <div>{todo.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
