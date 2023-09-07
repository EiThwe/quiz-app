import {
    Navbar,
    Group,
    Code,
    ScrollArea,
    createStyles,
    rem,
} from "@mantine/core";
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
    IconEdit,
    IconUser,
    IconKey,
    IconUsersGroup,
} from "@tabler/icons-react";
import { UserButton } from "./UserButton";
import { LinksGroup } from "./NavbarLinksGroup";
import { Link } from "@inertiajs/react";

const mockdata = [
    {
        label: "Dashboard",
        icon: IconGauge,
        link: "/dashboard",
    },
    {
        label: "Questions",
        icon: IconNotes,
        initiallyOpened: true,
        links: [
            { label: "Question List", link: "/question" },
            // { label: "Outlook", link: "/" },
            // { label: "Real time", link: "/" },
        ],
    },
    {
        label: "Answers",
        icon: IconKey,
        link: "/",
    },
    {
        label: "Teachers",
        icon: IconCalendarStats,
        links: [
            { label: "Teachers List", link: "/teachers" },
            // { label: "Edit Teacher Info", link: "/" },
            // { label: "Releases schedule", link: "/" },
        ],
    },
    // { label: "Analytics", icon: IconPresentationAnalytics },
    // { label: "Contracts", icon: IconFileAnalytics },
    // { label: "Settings", icon: IconAdjustments },
    {
        label: "Staff",
        icon: IconUsersGroup,
        links: [
            { label: "Staff List", link: "/" },
            // { label: "Edit Staff Info", link: "/" },
            // { label: "Recovery codes", link: "/" },
        ],
    },
    {
        label: "Departments",
        icon:  IconPresentationAnalytics,
        links: [
            { label: "Department List", link: "/" },
            { label: "Create Department", link: "/" },
            // { label: "Recovery codes", link: "/" },
        ],
    },
    { label: "Register", icon: IconUser },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
        paddingTop: "1em",
        position: "fixed",
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },

    links: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
    },

    linksInner: {
        // marginTop: "-10px",
        // paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginBottom: 0,
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },
}));

export function NavbarNested({ user }) {
    const { classes } = useStyles();
    const links = mockdata.map((item) => (
        <LinksGroup {...item} key={item.label} />
    ));

    return (
        <Navbar
            height={"100%"}
            width={{ sm: 300 }}
            px="md"
            className={` ${classes.navbar}`}
        >
            <Navbar.Section className={classes.header}>
                <Group>
                    <Link href="/">
                        <img
                            src="https://i.postimg.cc/pTD8L4ZM/quiz.png"
                            alt=""
                            className="block h-10 w-auto fill-current"
                        />
                    </Link>
                    <h2 className="font-bold text-3xl">Quiz App</h2>
                </Group>
            </Navbar.Section>

            <Navbar.Section
                grow
                className={classes.links}
                component={ScrollArea}
            >
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <UserButton
                    image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                    name={user.name}
                    email={user.email}
                />
            </Navbar.Section>
        </Navbar>
    );
}
