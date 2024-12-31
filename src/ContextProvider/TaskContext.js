import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
// Create the context
export const TaskContext = createContext();

// Provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light"); // Example: 'light' or 'dark'
  const [filter, setFilter] = useState("all");

  // Add task function
  const addTask = async (newTask) => {
    try {
      setLoading(true);
      // API call to create the task
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(newTask),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`Failed to add task: ${response.statusText}`);
      }

      // Parse the response JSON
      const responseData = await response.json();

      // Simulate a unique ID and add other necessary properties
      const taskWithId = {
        ...newTask,
        id: Math.floor(Math.random() * 10000), // Use API ID or fallback to a random ID
        status: "pending", // Default status
      };

      // Update the state
      // Update the state with the new task
      setTasks((prevTasks) => {
        const updatedTasks = [...(prevTasks || []), taskWithId];

        // Store the updated tasks in localStorage
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        return updatedTasks;
      });
      // Optional: Show a success notification
      toast.success("Task added successfully!");
    } catch (error) {
      console.error("Error adding task:", error.message);
      // Handle errors gracefully
      alert("Failed to add task. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const tasksArray = prevTasks || [];

      // Find the index of the task to update
      const existingTaskIndex = tasksArray.findIndex(
        (t) => t.id === updatedTask.id
      );

      if (existingTaskIndex === -1) {
        console.error(`Task with ID ${updatedTask.id} not found.`);
        return tasksArray; // Return unchanged tasks array
      }

      // Update the task in the array
      const updatedTasks = [...tasksArray];
      updatedTasks[existingTaskIndex] = {
        ...updatedTasks[existingTaskIndex],
        ...updatedTask,
      };

      return updatedTasks;
    });
  };

  // Delete task function
  const deleteTask = async (id) => {
    console.log("deleting task from context");
    setLoading(true);
    try {
      // Make the DELETE API call
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );

      // Check for successful response
      if (!response.ok) {
        throw new Error(`Failed to delete task: ${response.statusText}`);
      }

      console.log(`Task with ID ${id} deleted successfully.`);

      // Update state to remove the task
      setTasks((prevTasks) => {
       const newSet = prevTasks.filter((task) => task.id !== id)
       localStorage.setItem('tasks', JSON.stringify(newSet))
       return newSet
      });

      // Optional: Show a success notification
      toast.error("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error.message);

      // Handle errors gracefully
      alert("Failed to delete task. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const markTaskAsCompleted = (id) => {
    console.log("markTaskAsCompleted running", id);

    setTasks((prevTasks) =>
      prevTasks.map(
        (task) =>
          task.id === id
            ? { ...task, status: "completed" } // Toggle the `completed` status
            : task // Return the task unchanged
      )
    );
  };

  // Function to set the filter state
  const setTaskFilter = (status) => {
    setFilter(status);
  };

  // Filtered tasks based on the selected filter
const filteredTasks = tasks.filter((task) => {
  if (filter === "all") return true; // Show all tasks
  return task.status === filter; // Show tasks matching the selected status
});

  return (
    <TaskContext.Provider
      value={{
        tasks,
        theme,
        addTask,
        updateTask,
        deleteTask,
        toggleTheme,
        markTaskAsCompleted,
        loading,
        setLoading,
        filteredTasks,
        setTaskFilter
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
