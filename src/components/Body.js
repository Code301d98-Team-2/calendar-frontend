import { Component } from "react";
import "tachyons";
import { Heading, Subhead } from "rebass";
import { Hero, Flex, CallToAction, Section } from "react-landing-page"
import { Link } from "react-router-dom"

class Body extends Component {
    render() {
        return (
            <>
                <Section>
                    <Hero
                        color="white"
                        backgroundImage="https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg"
                        bg="black"
                        bgOpacity={0.1}
                        width={1}
                    >
                        <Heading fontSize={50}>Hospital Scheduling Application</Heading>
                        <Subhead fontSize={18}>A solution to scedule your employees for work </Subhead>
                        <Flex mt={3}>
                            <Link to="/displayCalendar" className="cta-link">
                                <CallToAction
                                style={{
                                    padding: "12px 24px",
                                    background: "linear-gradient(45deg, #FF80CC, #FF0080)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "25px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                                bg="grey"
                                mr={3}>
                                    Start Scheduling
                                </CallToAction>
                            </Link>
                            <Link to="/addEmployee" className="cta-link">
                                <CallToAction
                                style={{
                                    padding: "12px 24px",
                                    background: "linear-gradient(45deg, #00BFFF, #ADD8E6)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "25px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                                >Add an Employee</CallToAction>
                            </Link>
                        </Flex>
                    </Hero>
                </Section>
            </>
        );
    }
}

export default Body;