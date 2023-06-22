import { TaskContext } from 'libs/context/TaskContext';
import { useContext } from 'react';

const useTask = () => {
  return useContext(TaskContext);
};

export default useTask;
