/* eslint-disable @typescript-eslint/no-empty-function */
import { TASK_DB_COLLECTION } from 'libs/constants';
import {
  addTaskItem,
  deleteTaskItem,
  updateTaskItem,
} from 'libs/services/taskManager';
import { Task } from 'libs/types';
import React, { createContext, useEffect, useMemo, useState } from 'react';

import { firebase } from '../services';

type DefaultContext = {
  isLoading: boolean;
  error: string | undefined;
  tasks: Task[] | undefined;
  add: (data: Task) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  update: (data: Task, id: string, loader?: boolean) => Promise<void>;
};

type TaskContextProvider = {
  children: React.ReactNode;
};

export const TaskContext = createContext<DefaultContext>({
  tasks: undefined,
  add: async () => { },
  deleteItem: async () => { },
  update: async () => { },
  error: undefined,
  isLoading: false,
});

export const TaskContextProvider: React.FunctionComponent<
  TaskContextProvider
> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const taskRef = firebase.firestore().collection(TASK_DB_COLLECTION);

  useEffect(() => {
    taskRef.orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
      const todos: Task[] = [];
      querySnapshot.forEach((doc) => {
        const {
          createdAt,
          description,
          dueDate,
          isCompleted,
          priority,
          title,
          isFavorite,
        } = doc.data() as Task;
        todos.push({
          id: doc.id,
          createdAt,
          description,
          dueDate,
          isCompleted,
          priority,
          title,
          isFavorite,
        });
      });
      setTasks(todos);
    });
  }, []);

  const add = async (data: any) => {
    setIsLoading(true);
    try {
      await addTaskItem(taskRef, data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteItem = async (id: string) => {
    setIsLoading(true);
    try {
      await deleteTaskItem(taskRef, id);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const update = async (data: any, id: string, loader = true) => {
    setIsLoading(loader);
    try {
      await updateTaskItem(taskRef, data, id);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const taskValues = useMemo(
    () => ({
      add,
      tasks,
      error,
      update,
      isLoading,
      deleteItem,
    }),
    [add, tasks, error, update, isLoading, deleteItem]
  );

  return (
    <TaskContext.Provider value={taskValues}>{children}</TaskContext.Provider>
  );
};
