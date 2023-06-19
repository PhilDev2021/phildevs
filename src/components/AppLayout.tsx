// AppLayout.tsx
import React from "react";
import Dashboard from "./Dashboard";
import UsersTable from "./UsersTable";
import Map from "./Map";
import { useUsersContext } from "../contexts/UsersContext";
import { Grid } from "@mantine/core";

const AppLayout = () => {
  const { state } = useUsersContext();
  return (
    <Grid>
      <Grid.Col xs={3}>
        <Dashboard />
      </Grid.Col>
      <Grid.Col xs={9}>
        {/* <UsersTable data={state.users} /> */}
        <Map />
      </Grid.Col>
    </Grid>
  );
};

export default AppLayout;
