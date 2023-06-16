import { PriorityWithAll, Task } from 'libs/types';
import { useCallback, useState } from 'react';
import useTask from './useTask';

const useSearch = () => {
  const { tasks } = useTask();
  const [searchResult, setSearhResult] = useState<Task[] | undefined>(
    undefined
  );
  const [notFound, setNotFound] = useState<string | undefined>(
    undefined
  );
  const searchTask = useCallback((title: string) => {
    setNotFound(undefined)
    const result = tasks?.filter((item) => item.title.startsWith(title));
    if (!result?.length) {
      setNotFound('Oops No matching task found for' + title)
    }
    setSearhResult(result);
  }, [])

  const sortByDate = useCallback((type: 'asc' | 'desc') => {
    setNotFound(undefined)
    if (tasks) {
      const sortedData = tasks?.sort((a, b) => {
        const dateA: any = new Date(a.createdAt as string);
        const dateB: any = new Date(b.createdAt as string);
        return type === 'asc' ? dateA - dateB : dateB - dateA;
      });
      setSearhResult(sortedData);
    }
  }, []);

  const sortByPriority = useCallback((level: PriorityWithAll) => {
    setNotFound(undefined)
    if (level === 'all') {
      setSearhResult(tasks);
      return;
    }
    const result = tasks?.filter((item) => item.priority === level);
    setSearhResult(result);
  }, []);

  return {
    notFound,
    searchTask,
    sortByDate,
    searchResult,
    sortByPriority,
  };
};

export default useSearch;
