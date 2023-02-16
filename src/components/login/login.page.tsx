import { GoogleIcon } from "./GoogleIcon";
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Flex,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import {
  useSession,
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../../libs/supabase-client";
import { useEffect } from "react";

type LoginForm = {
  email: string;
  password: string;
  name: string;
  terms: boolean;
};

type LoginType = "login" | "register";

const LoginPage = () => {
  const { isLoading, session } = useSessionContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && session) {
      navigate("/");
    }
  }, [isLoading, session]);

  const [type, toggleType] = useToggle<LoginType>(["login", "register"]);
  const form = useForm<LoginForm>({
    initialValues: {
      email: "",
      password: "",
      name: "",
      terms: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      terms: (value) => {
        if (type === "register") {
          return value === true
            ? null
            : "You must agree to the terms and conditions";
        }
        return null;
      },
    },
  });

  const handleSubmit = (values: LoginForm) => {
    console.log(values);
  };

  const handleGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin+"/login",
        },
      });
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flex align="center" justify="center" mih="100vh" p="md">
        {window.location.hash.startsWith("#access_token") || isLoading ? (
          <LoadingOverlay visible />
        ) : (
          <Paper
            radius="md"
            p="xl"
            withBorder
            sx={{
              [`@media (max-width: 600px)`]: {
                minWidth: "100%",
              },
              [`@media (min-width: 601px)`]: {
                minWidth: "500px",
              },
            }}
          >
            <Text size="lg" weight={500}>
              Welcome to Grocery Shop App
            </Text>

            <Group grow mb="md" mt="md">
              <Button
                onClick={handleGoogle}
                variant="default"
                leftIcon={<GoogleIcon />}
              >
                Google
              </Button>
            </Group>

            <Divider
              label="Or continue with email"
              labelPosition="center"
              my="lg"
            />

            <form onSubmit={form.onSubmit(handleSubmit, console.log)}>
              <Stack>
                {type === "register" && (
                  <TextInput
                    label="Name"
                    placeholder="Your Name"
                    {...form.getInputProps("name")}
                  />
                )}
                <TextInput
                  label="Email"
                  placeholder="Your Email Address"
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  label="Password"
                  placeholder="Password"
                  {...form.getInputProps("password")}
                />
                {type === "register" && (
                  <Checkbox
                    label="I accept terms and conditions"
                    {...form.getInputProps("terms", {
                      type: "checkbox",
                      withError: true,
                    })}
                  />
                )}

                <Group position="apart" mt="xl">
                  <Anchor
                    component="button"
                    type="button"
                    color="dimmed"
                    onClick={() => toggleType()}
                    size="xs"
                  >
                    {type === "register"
                      ? "Already have an account? Login"
                      : "Don't have an account? Register"}
                  </Anchor>
                  <Button type="submit">{upperFirst(type)}</Button>
                </Group>
              </Stack>
            </form>
          </Paper>
        )}
      </Flex>
    </>
  );
};

export default LoginPage;
