import { Avatar, Text, Button, Paper, Group, Grid } from "@mantine/core";
import { IconAddressBook, IconAt, IconPhoneCall } from "@tabler/icons-react";
import classes from "../../css/app.css";

export function UserDetailCard({ image, name, email, position, address }) {
    return (
        <Paper radius="md" p="lg" bg="var(--mantine-color-body)" className="">
            <Avatar src={image} size={120} radius={120} mx="auto" />
            <Text ta="center" fz="lg" fw={500} mt="md">
                {name}
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
                {email} • {position}
            </Text>
            <div className="flex flex-col items-start justify-center w-[200px]">
                <div className="flex gap-2 items-center">
                    <IconAddressBook
                        stroke={1.5}
                        size="1rem"
                        className={classes.icon}
                    />
                    <Text fz="xs" c="dimmed" className="">
                        {address}
                    </Text>
                </div>

                <div className="flex gap-2 items-center justify-start ">
                    <IconPhoneCall
                        stroke={1.5}
                        size="1rem"
                        className={classes.icon}
                    />
                    <Text fz="xs" c="dimmed">
                        +11 (876) 890 56 23
                    </Text>
                </div>
            </div>
        </Paper>
    );
}
