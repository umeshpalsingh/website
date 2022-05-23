import { heading, header, heading_big, heading_small, heading_sub, bgAnimation, description } from "./hero.module.scss";
import BgAnimation from "../BackgroundAnimation";
import { RoughNotation } from "react-rough-notation";
import Button from "../Button/Button";

export default function Hero() {
    return (
        <header className={header}>
            <div>
                <h1 className={heading}>
                    <span className={heading_small}>Hi, my name is</span>
                    <br />
                    <span className={heading_big}>Umesh Pal Singh.</span>
                    <br />
                    <span className={heading_sub}>
                        I build things for the
                        <RoughNotation strokeWidth='2' animationDelay='3000' animationDuration='2000' type="underline" show="true"> web.</RoughNotation>
                    </span>
                </h1>
                <p className={description}>
                    I&apos;m a frontend developer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                </p>
                <Button content="Contact" link='/contact' />
            </div>
            <div className={bgAnimation}>
                <BgAnimation />
            </div>
        </header>
    );
};
