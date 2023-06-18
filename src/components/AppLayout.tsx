// AppLayout.tsx
import React from "react";
import Dashboard from "./Dashboard";
import UsersTable from "./UsersTable";
import { useUsersContext } from "../contexts/UsersContext";
import { Grid } from "@mantine/core";

const AppLayout = () => {
  const { state } = useUsersContext();
  return (
    <div>
      <Grid>
        <Grid.Col span="auto">
          <Dashboard />
        </Grid.Col>
        <Grid.Col span={9}>
          <UsersTable data={state.users} />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default AppLayout;
