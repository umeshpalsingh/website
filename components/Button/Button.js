import Link from "next/link";
import { button } from "./button.module.scss";

export default function Button({ content, link }) {
    return (
        <Link href={link}><a className={button}>{content}</a></Link>
    );
};
