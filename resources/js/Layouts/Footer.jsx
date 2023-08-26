import {
    createStyles,
    Anchor,
    Group,
    ActionIcon,
    rem,
    Text,
} from "@mantine/core";
// import {
//     IconBrandTwitter,
//     IconBrandYoutube,
//     IconBrandInstagram,
// } from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";
import { Link } from "@inertiajs/react";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: "auto",
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
        backgroundColor:"white"
    },

    inner: {
        maxWidth: "80rem",
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `${theme.spacing.md} ${theme.spacing.md}`,

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

function Footer({ links }) {
    const { classes } = useStyles();
    const items = links.map((link) => (
        // <Link href={link.link}>
        <Anchor
            color="dimmed"
            key={link.label}
            sx={{ lineHeight: 1 }}
            href={link.link}
            size="sm"
            className="mx-4"
        >
            {link.label}
        </Anchor>
        // </Link>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                {/* <MantineLogo size={28} /> */}
                <Text size="sm" color="gray">
                    Copyright &copy; 2023, All Right Reserved{" "}
                </Text>

                <Group className={classes.links}>{items}</Group>

                {/* <Group spacing="xs" position="right" noWrap>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group> */}
            </div>
        </div>
    );
}
export default Footer;
