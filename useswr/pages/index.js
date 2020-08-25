import useSWR, { mutate } from "swr";
import { Box, Heading, Input, List, ListItem, Button } from "@chakra-ui/core";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
let user = { name: "Chris", location: "London" };
export default function Home() {
  const { data, error } = useSWR("http://localhost:3001/api/users", fetcher, {
    revalidateOnFocus: false,
  });

  if (!data) return "I am loading...";
  if (error) return "there is an error";

  return (
    <Box maxWidth="700px" width="100%" px={6} mt={[0, 8]} mb={8} mx="auto">
      <Heading mx="auto" as="h1">
        Users
      </Heading>
      <List styleType="disc">
        {data.map((user) => (
          <ListItem key={user.name}>
            {user.name} , {user.location}
          </ListItem>
        ))}
      </List>
      <Button
        onClick={async () => {
          await fetcher("http://localhost:3001/api/users", {
            method: "POST",
            body: JSON.stringify(user),
          });
          mutate("http://localhost:3001/api/users");
        }}
      >
        Add User
      </Button>
    </Box>
  );
}
