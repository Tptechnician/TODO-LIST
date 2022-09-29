import TodoItem from '../TodoItem/TodoItem';

interface Item {
  item: {
    _id: string;
    title: string;
    made: boolean;
  };
}

interface TodoConteinerProps {
  tasks: Array<Item>;
}

export default function TodoConteiner({ tasks }: TodoConteinerProps) {
  return (
    <ul className="TodoConteiner">
      {tasks.map((task: any) => (
        <TodoItem key={task._id} title={task.title} made={task.made} />
      ))}
    </ul>
  );
}
