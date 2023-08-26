import {
    createStyles,
    Title,
    Text,
    Button,
    Container,
    rem,
} from "@mantine/core";
// import Dots from "./Dots";
import { router } from "@inertiajs/react";
import Dots from "./Dots";

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: "relative",
        paddingTop: rem(120),
        paddingBottom: rem(80),

        [theme.fn.smallerThan("sm")]: {
            paddingTop: rem(80),
            paddingBottom: rem(60),
        },
    },

    inner: {
        position: "relative",
        zIndex: 1,
    },

    dots: {
        position: "absolute",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    title: {
        textAlign: "center",
        fontWeight: 800,
        fontSize: rem(40),
        letterSpacing: -1,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan("xs")]: {
            fontSize: rem(28),
            textAlign: "center",
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 4 : 6
        ],
    },

    description: {
        textAlign: "center",

        [theme.fn.smallerThan("xs")]: {
            textAlign: "center",
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: "flex",
        justifyContent: "center",

        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
    },

    control: {
        "&:not(:first-of-type)": {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan("xs")]: {
            height: rem(42),
            fontSize: theme.fontSizes.md,

            "&:not(:first-of-type)": {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
}));

export default function Hero({title,span,description}) {
    const { classes } = useStyles();

    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                   {title}
                    <Text
                        component="span"
                        className={classes.highlight}
                        inherit
                    >
                       {span}
                    </Text>{" "}

                </Title>

                <Container p={0} size={600}>
                    <Text
                        size="lg"
                        color="dimmed"
                        className={classes.description}
                    >
                       {description}
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button
                    onClick={()=> router.visit("/")}
                        className={`${classes.control} text-blue-400 border-blue-400`}
                        size="lg"
                        variant="default"
                        color="gray"

                    >
                        Quiz
                    </Button>
                </div>
            </div>
        </Container>
    );
}
