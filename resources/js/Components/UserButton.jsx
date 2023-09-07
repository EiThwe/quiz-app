import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    createStyles,
    Menu,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { Link } from "@inertiajs/react";

const useStyles = createStyles((theme) => ({
    user: {
        display: "block",
        width: "100%",
        padding: theme.spacing.md,
        color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
        },
    },
}));

export function UserButton({ image, name, email, icon, ...others }) {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);

    return (
        <Menu opened={opened} position="right-end">
            <Menu.Target>
                <UnstyledButton
                    className={classes.user}
                    {...others}
                    onClick={() => setOpened((prev) => !prev)}
                >
                    <Group>
                        <Avatar src={image} radius="xl" />

                        <div style={{ flex: 1 }}>
                            <Text size="sm" weight={500}>
                                {name}
                            </Text>

                            <Text color="dimmed" size="xs">
                                {email}
                            </Text>
                        </div>

                        {icon || (
                            <IconChevronRight size="0.9rem" stroke={1.5} />
                        )}
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown className="mb-[2px]">
                <Menu.Item className="px-7 py-2">
                    <Link href={route("profile.edit")}>Profile</Link>
                </Menu.Item>
                <Menu.Item className="px-7 py-2">
                    <Link method="post" href={route("logout")} as="button">
                        Log Out
                    </Link>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
