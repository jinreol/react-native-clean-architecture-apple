import { useInjection } from "@di/DIContext";
import { User } from "@domain/entities/User";
import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const { getUsersUseCase } = useInjection();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsersUseCase.execute();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, refetch: fetchUsers };
};
